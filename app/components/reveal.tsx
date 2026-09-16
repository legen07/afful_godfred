'use client'

import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef } from 'react'
import { revealElement } from '@/lib/animations'

interface RevealProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: ElementType
  /** Extra delay before the reveal starts, in ms. */
  delay?: number
  /** Travel distance in px (0 for a pure cross-fade). */
  distance?: number
  /** Animation duration in ms. */
  duration?: number
  id?: string
}

/**
 * Scroll-reveal wrapper (apple-design: interruptible WAAPI, reduced-motion
 * cross-fade).
 *
 * SSR-safe: the server renders the element fully visible. After hydration the
 * client hides it (if it's below the fold and motion is allowed), then a
 * single IntersectionObserver drives the WAAPI reveal. If an in-flight
 * animation is re-triggered, it re-targets from the live presentation value —
 * no jumps, no "brick wall".
 */
export function Reveal({
  children,
  className,
  style,
  as: Tag = 'div',
  delay = 0,
  distance = 24,
  duration = 900,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return // CSS handles the static state; nothing to animate.

    // Hide before first reveal, but only if it's below the fold (or still
    // hidden from a previous pass). In-viewport elements reveal immediately.
    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (!inView) el.style.opacity = '0'

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(el)
          revealElement(el, { delay, distance, duration })
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, distance, duration])

  return (
    <Tag ref={ref} id={id} className={className} style={style} data-reveal>
      {children}
    </Tag>
  )
}
