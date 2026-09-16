'use client'

import { useEffect } from 'react'

/**
 * Template JS (items 1–2), centralized:
 * 1. Each `.appear` element settles into `.is-in` on its own `animationend`
 *    (`animation: none; opacity: 1; transform: none; …`) so resting state is
 *    plain CSS.
 * 2. If animations are not running after two requestAnimationFrames (reduced
 *    motion, blocked animations, SSR mismatch), force `.is-in` on every
 *    `.appear` element — the page is never left hidden.
 */
export function AppearSettler() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.appear'))
    const settle = (el: HTMLElement) => el.classList.add('is-in')

    for (const el of elements) {
      el.addEventListener('animationend', () => settle(el), { once: true })
    }

    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        for (const el of elements) {
          // "pending" is a real runtime state (animations waiting on their
          // delay) but is missing from the DOM lib types — compare as string.
          const alive = el.getAnimations().some((a) => {
            const state: string = a.playState
            return state === 'running' || state === 'pending'
          })
          if (!alive) settle(el)
        }
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  return null
}
