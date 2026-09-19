import { site } from '@/services/site.service'

import { Footer } from '../components/footer'
import styles from './cv.module.css'

export const metadata = {
  title: 'CV — Afful Godfred',
  description:
    'Résumé / CV for Afful Godfred — software engineer in Nsawam, Ghana.',
}

export default function CvPage() {
  const { person, contact, skills } = site
  return (
    <div className="page">

      <main id="top">
        {/* Hero / letterhead */}
        <section className={styles.heroFrame}>
          <div className={styles.paper}>
            <span className={styles.badge}>Résumé</span>
            <h1 className={styles.h1}>
              <span style={{"fontWeight" : 900}}>{person.name} </span>
              <em>{person.role}</em>
            </h1>
            <p className={styles.lede}>
              Software engineer crafting fast, modern websites — and the scrapers, bots, and AI
              pipelines that run them. Based in Nsawam, Ghana.
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
                </div>

                {/* Contact card */}
                <aside className={styles.contactCard} aria-label="Contact">
                  <h3 className={styles.contactHeading}>Contact</h3>
                  <a className={styles.contactRow} href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  <a className={styles.contactRow} href={contact.phoneHref}>
                    {contact.phoneDisplay}
                  </a>
                  <ul className={styles.socials}>
                    {contact.socials.map((s) => (
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
                <h2 className="section-title">Skills</h2>
                {skills.map((group) => (
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
                <h2 className="section-title">Websites I&apos;ve built</h2>
                <ul className={styles.workList}>
                  {site.work.map((w) => (
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
                <h2 className="section-title">Automations</h2>
                <ul className={styles.workList}>
                  {site.automations.map((a) => (
                    <li key={a.slug}>
                      <a href={a.url} target="_blank" rel="noreferrer">
                        {a.name}
                      </a>{' '}
                      — {a.description}
                      {a.language && <span className={styles.lang}> ({a.language})</span>}
                      {a.status === 'wip' && <span className={styles.statusTag}> · WIP</span>}
                      {a.status === 'private' && <span className={styles.statusTag}> · Private</span>}
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
            <span>← Back to Home</span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
