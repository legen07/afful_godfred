import type { AutomationProject } from '@/repository/site.repository'
import styles from './automations.module.css'
import { Reveal } from './reveal'
import { useTranslations } from '@/lib/language-context'

interface AutomationsProps {
  projects: AutomationProject[]
  capabilities: string[]
}

// Fallback English status labels
const englishStatusLabels: Record<string, string> = {
  private: 'Private repo',
  wip: 'Under construction',
}

/**
 * Automations — the six published projects (descriptions sourced from the
 * GitHub repositories, per the brief) plus the capability chips from the bio.
 */
export function Automations({ projects, capabilities }: AutomationsProps) {
  const t = useTranslations()
  const a = t.automations

  return (
    <section id="automations" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="overline">{a.overline}</p>
          <h2 className="section-title">
            {a.title}<em>{a.titleEm}</em>{a.titleSuffix}
          </h2>
          <p className="section-lede">
            {a.lede}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className={styles.caps} aria-label="Automation capabilities">
            {capabilities.map((cap) => (
              <li key={cap} className={styles.cap}>
                {cap}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.head}>
                  <h3 className={styles.name}>{project.name}</h3>
                  {(() => {
                    const status = project.status
                    if (status === 'public') return null
                    const label = a.statusLabels?.[status] ?? englishStatusLabels[status] ?? status
                    return (
                      <span className={styles.status}>
                        {label}
                      </span>
                    )
                  })()}
                </div>
                <p className={styles.desc}>{project.description}</p>
                <ul className={styles.topics} aria-label="Topics">
                  {project.topics.map((topic) => (
                    <li key={topic} className={styles.topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  className={styles.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                  </svg>
                  <span className={styles.sourceLabel}>{a.source}</span>
                  <span className={styles.sourceArrow} aria-hidden>
                    →
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}