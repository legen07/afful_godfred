// next-export-optimize-images Picture wrapper: same API as next/image,
// renders <picture> with build-time-optimized webp <source>s + a fallback
// img of the resized original. See export-images.config.cjs.
import Picture from 'next-export-optimize-images/picture'
import type { Person } from '@/repository/site.repository'
import styles from './about.module.css'
import { Reveal } from './reveal'

interface AboutProps {
  person: Person
}

/** About — portrait + bio + the three fact cards (education/languages/location). */
export function About({ person }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="overline">About</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.photoWrap}>
            <figure className={styles.photo}>
              <Picture
                src={person.photo}
                alt={`Portrait of ${person.name}`}
                width={640}
                height={640}
                priority
                className={styles.photoImg}
              />
            </figure>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <h2 className={styles.name}>{person.name}</h2>
            <p className={styles.role}>{person.role}</p>
            <div className={styles.bio}>
              {person.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className={styles.facts}>
              {person.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className={styles.factLabel}>{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
