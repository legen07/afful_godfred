'use client'

import { useEffect, useRef } from 'react'
import { APPLE_EASE, prefersReducedMotion } from '@/lib/animations'
import type { SkillGroup } from '@/repository/site.repository'
import { Reveal } from './reveal'
import styles from './skills.module.css'
import { useTranslations } from '@/lib/language-context'

interface SkillsProps {
  groups: SkillGroup[]
}

/**
 * Skills — four groups of proficiency bars. The bars are liquid-metal
 * (the template's gradient language) and fill with a WAAPI scaleX on first
 * viewport entry, staggered per row. Interruptible: re-entering the viewport
 * mid-animation re-targets from the live presentation value.
 */
export function Skills({ groups }: SkillsProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()
  const s = t.skills

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || prefersReducedMotion()) return

    // Pre-hide the fills (client-side only — SSR/JS-off shows full bars).
    const fills = Array.from(grid.querySelectorAll<HTMLElement>(`.${styles.fill}`))
    for (const fill of fills) {
      fill.style.transform = 'scaleX(0.001)'
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(grid)
          fills.forEach((fill, i) => {
            const level = Number.parseFloat(fill.dataset.level ?? '0') / 100
            const anim = fill.animate(
              [{ transform: 'scaleX(0.001)' }, { transform: `scaleX(${level})` }],
              {
                duration: 1100,
                delay: i * 45,
                easing: APPLE_EASE,
                fill: 'both',
              },
            )
            anim.onfinish = () => {
              try {
                const commit = (anim as Animation & { commitStyles?: () => void }).commitStyles
                commit?.call(anim)
                anim.cancel()
              } catch {
                // keep fill:both
              }
              // keep the fill at its final width
              fill.style.transform = `scaleX(${level})`
            }
          })
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="overline">{s.overline}</p>
          <h2 className="section-title">
            {s.title}
          </h2>
          <p className="section-lede">
            {s.lede}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.grid} ref={gridRef}>
            {groups.map((group) => (
              <div key={group.id} className={styles.group}>
                <h3 className={styles.groupLabel}>{group.label}</h3>
                <div className={styles.rows}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} className={styles.row}>
                      <span className={styles.name}>{skill.name}</span>
                      <span className={styles.track} role="presentation">
                        <span
                          className={styles.fill}
                          data-level={skill.level}
                          style={{ ['--level' as string]: `${skill.level}%` }}
                        />
                      </span>
                      <span className={styles.pct}>{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}