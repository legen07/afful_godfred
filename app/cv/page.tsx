'use client'

import { useTranslations } from '@/lib/language-context'
import { Footer } from '../components/footer'
import { LanguageToggle } from '../components/language-toggle'
import styles from './cv.module.css'

export default function CvPage() {
  const t = useTranslations()
  const cv = t.cv
  const wt = t.workText

  return (
    <div className="page">

      {/* Language toggle (light variant for the paper theme) */}
      <div className={styles.langToggleWrap}>
        <LanguageToggle variant="light" />
      </div>

      <main id="top">
        {/* Hero / letterhead */}
        <section className={styles.heroFrame}>
          <div className={styles.paper}>
            <span className={styles.badge}>{cv.badge}</span>
            <h1 className={styles.h1}>
              <span style={{"fontWeight" : 900}}>{t.person.name} </span>
              <em>{t.person.role}</em>
            </h1>
            <p className={styles.lede}>
              {cv.lede}
            </p>
          </div>
        </section>

        {/* CV body */}
        <section id="details" className="section" style={{display: "flex"}}>
          <div className="section-inner">
            <div className={styles.paper}>
              {/* Bio + facts */}
              <div className={styles.bioGrid}>
                <div>
                  <h2 className={styles.name}>{t.person.name}</h2>
                  <p className={styles.role}>{t.person.role}</p>
                  <div className={styles.bio}>
                    {t.person.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                  <dl className={styles.facts}>
                    {t.person.facts.map((fact) => (
                      <div key={fact.label} className={styles.fact}>
                        <dt className={styles.factLabel}>{fact.label}</dt>
                        <dd className={styles.factValue}>{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact card */}
                <aside className={styles.contactCard} aria-label={cv.contactHeading}>
                  <h3 className={styles.contactHeading}>{cv.contactHeading}</h3>
                  <a className={styles.contactRow} href={`mailto:${t.contact.email}`}>
                    {t.contact.email}
                  </a>
                  <a className={styles.contactRow} href={t.contact.phoneHref}>
                    {t.contact.phoneDisplay}
                  </a>
                  <ul className={styles.socials}>
                    {t.contact.socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noreferrer">
                          {s.label}: {s.handle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>

              {/* Skills */}
              <div className={styles.skills}>
                <h2 className="section-title">{cv.skills}</h2>
                {t.skills.groups.map((group) => (
                  <div key={group.id} className={styles.skillGroup}>
                    <h3 className={styles.skillLabel}>{group.label}</h3>
                    <ul className={styles.skillList}>
                      {group.skills.map((s) => (
                        <li key={s.name} className={styles.skillItem}>
                          <span>{s.name}</span>
                          <span className={styles.skillBar} aria-hidden>
                            <span
                              className={styles.skillBarFill}
                              style={{ width: `${s.level}%` }}
                            />
                          </span>
                          <span className={styles.skillPct}>{s.level}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Work */}
              <div className={styles.work}>
                <h2 className="section-title">{cv.work}</h2>
                <ul className={styles.workList}>
                  {t.work.map((w) => (
                    <li key={w.slug}>
                      <a href={w.url} target="_blank" rel="noreferrer">
                        {w.name}
                      </a>{' '}
                      — {w.description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Automations */}
              <div className={styles.work}>
                <h2 className="section-title">{cv.automations}</h2>
                <ul className={styles.workList}>
                  {t.automations.projects.map((a) => (
                    <li key={a.slug}>
                      <a href={a.url} target="_blank" rel="noreferrer">
                        {a.name}
                      </a>{' '}
                      — {a.description}
                      {a.language && <span className={styles.lang}> ({a.language})</span>}
                      {a.status === 'wip' && (
                        <span className={styles.statusTag}> · {t.automations.statusLabels.wip}</span>
                      )}
                      {a.status === 'private' && (
                        <span className={styles.statusTag}> · {t.automations.statusLabels.private}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className={styles.backHome}>
          <a href="/">
            <span>{cv.backHome}</span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}