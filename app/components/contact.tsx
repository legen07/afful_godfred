import type { Contact as ContactData } from '@/repository/site.repository'
import styles from './contact.module.css'
import { Reveal } from './reveal'
import { useTranslations } from '@/lib/language-context'

interface ContactProps {
  contact: ContactData
}

/**
 * Contact — the closing frame. The serif accent (Instrument Serif) returns
 * from the hero as a deliberate callback. Primary actions: email + phone;
 * secondary: the social liquid pills.
 */
export function Contact({ contact }: ContactProps) {
  const t = useTranslations()
  const c = t.contact

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={`section-inner ${styles.inner}`}>
        <Reveal>
          <p className="overline">{c.overline}</p>
          <h2 className={`section-title ${styles.title}`}>
            {c.title}<em>{c.titleEm}</em>{c.titleSuffix}
          </h2>
          <p className={`section-lede ${styles.lede}`}>
            {c.lede}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.actions}>
            <a href={`mailto:${contact.email}`} className="btn btn-solid">
              <span>{contact.email}</span>
            </a>
            <a href={contact.phoneHref} className="btn btn-ghost">
              <span>{contact.phoneDisplay}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <ul className={styles.socials}>
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className={`pill social-pill ${styles.social}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} — ${social.handle}`}
                >
                  <span className={styles.socialLabel}>{social.label}</span>
                  <span className={styles.socialHandle}>{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}