// Layer 9 support — WAAPI-only animation utilities.
//
// nextjs-16-edge rule: no external animation libraries. All motion here is the
// Web Animations API, which is interruptible and velocity-aware by design.
//
// Apple fluid-interface rules applied (apple-design skill):
// - Default spring feel = Apple's standard curve cubic-bezier(0.16, 1, 0.3, 1)
//   (critically damped, response ≈ 0.3–0.4s, no overshoot).
// - Interruptibility: re-targeting an in-flight reveal starts from the element's
//   live presentation value (current opacity/transform), never the target value.
// - Reduced motion: `prefers-reduced-motion: reduce` swaps slides/springs for a
//   short opacity cross-fade (no transform, no overshoot).

export const APPLE_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
export const APPLE_EASE_IN_OUT = 'cubic-bezier(0.65, 0, 0.35, 1)'

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export interface RevealOptions {
  /** Extra delay before the animation starts, in ms. */
  delay?: number
  /** Duration in ms (900 ≈ Apple's 0.3–0.4s response, slightly relaxed for large blocks). */
  duration?: number
  /** Distance the element travels, in px. */
  distance?: number
  /** Easing override. */
  easing?: string
}

function currentPresentation(el: HTMLElement): { opacity: number; y: number } {
  const cs = getComputedStyle(el)
  const opacity = cs.opacity === '' ? 1 : Number.parseFloat(cs.opacity)
  let y = 0
  if (cs.transform && cs.transform !== 'none') {
    try {
      y = new DOMMatrixReadOnly(cs.transform).m42
    } catch {
      y = 0
    }
  }
  return { opacity: Number.isFinite(opacity) ? opacity : 0, y: Number.isFinite(y) ? y : 0 }
}

/**
 * Reveal an element with a WAAPI animation.
 *
 * If the element already has an in-flight reveal, it is cancelled and the new
 * animation starts from the element's live on-screen (presentation) value —
 * so a re-trigger mid-animation never jumps.
 */
export function revealElement(el: HTMLElement, opts: RevealOptions = {}): Animation {
  const reduced = prefersReducedMotion()
  const delay = opts.delay ?? 0
  const duration = opts.duration ?? 900
  const easing = opts.easing ?? APPLE_EASE
  const distance = opts.distance ?? 24

  // Interrupt: read the live presentation value, then cancel in-flight work.
  let from = { opacity: 0, y: distance }
  const inFlight = el.getAnimations().filter((a) => a.playState !== 'finished')
  if (inFlight.length > 0) {
    from = currentPresentation(el)
    for (const a of inFlight) a.cancel()
  }

  const frames: Keyframe[] = reduced
    ? [{ opacity: from.opacity || 0.001 }, { opacity: 1 }]
    : [
        { opacity: from.opacity || 0.001, transform: `translateY(${from.y}px)` },
        { opacity: 1, transform: 'translateY(0px)' },
      ]

  const animation = el.animate(frames, {
    duration: reduced ? 200 : duration,
    delay: reduced ? 0 : delay,
    easing: reduced ? 'ease-out' : easing,
    fill: 'both',
  })

  // Once finished, commit the end state to the element's style and release the
  // animation so the DOM stays clean.
  animation.onfinish = () => {
    try {
      const commit = (animation as Animation & { commitStyles?: () => void }).commitStyles
      commit?.call(animation)
      animation.cancel()
    } catch {
      // commitStyles unsupported — fill:'both' keeps the end state; leave as-is.
    }
  }

  return animation
}

/**
 * Reveal all direct children of a container with a stagger.
 * Returns the created animations (so callers can observe/adjust them).
 */
export function revealChildren(
  container: HTMLElement,
  opts: RevealOptions & { stagger?: number } = {},
): Animation[] {
  const { stagger = 70, ...rest } = opts
  return Array.from(container.children).map((child, i) =>
    revealElement(child as HTMLElement, { ...rest, delay: (rest.delay ?? 0) + i * stagger }),
  )
}
