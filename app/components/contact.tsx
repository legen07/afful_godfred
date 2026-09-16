import type { Contact as ContactData } from '@/repository/site.repository'
import styles from './contact.module.css'
import { Reveal } from './reveal'

interface ContactProps {
  contact: ContactData
}

/**
 * Contact — the closing frame. The serif accent (Instrument Serif) returns
 * from the hero as a deliberate callback. Primary actions: email + phone;
 * secondary: the social liquid pills.
 */
export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={`section-inner ${styles.inner}`}>
        <Reveal>
          <p className="overline">Contact</p>
          <h2 className={`section-title ${styles.title}`}>
            Let&apos;s build something that <em>runs itself.</em>
          </h2>
          <p className={`section-lede ${styles.lede}`}>
            I&apos;m open to web builds, automation pipelines, and AI integrations — tell me
            what&apos;s repetitive and I&apos;ll make it disappear.
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
