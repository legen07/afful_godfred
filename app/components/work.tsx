import Image from 'next/image'
import type { WorkSite } from '@/repository/site.repository'
import { Reveal } from './reveal'
import styles from './work.module.css'

interface WorkProps {
  sites: WorkSite[]
}

/**
 * Work — four live sites. Each card pairs the desktop frame with a phone
 * frame floating off its right edge (the desktop + mobile screenshots ship in
 * assets/websites/). Hover lifts the card and slowly zooms the shot —
 * compositor-only (transform/opacity/filter), per apple-design §11.
 */
export function Work({ sites }: WorkProps) {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="overline">Selected Work</p>
          <h2 className="section-title">
            Websites I&apos;ve <em>built</em>.
          </h2>
          <p className="section-lede">
            Four sites, live today — a liquor store, a product storefront, a photography portfolio,
            and a beauty studio. All shipped to Cloudflare.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {sites.map((site, i) => (
            <Reveal key={site.slug} delay={i * 90} className={styles.cardWrap}>
              <article className={styles.card}>
                <div className={styles.frame}>
                  <div className={styles.frameClip}>
                    <Image
                      src={site.desktop}
                      alt={`${site.name} — desktop view`}
                      fill
                      sizes="(min-width: 901px) 50vw, 100vw"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      priority={i < 2}
                    />
                  </div>
                  <div className={styles.phone}>
                    <Image
                      src={site.mobile}
                      alt={`${site.name} — mobile view`}
                      fill
                      sizes="96px"
                      style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    />
                  </div>
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.name}>{site.name}</h3>
                  <span className={styles.url}>{site.url.replace('https://', '')}</span>
                </div>
                <p className={styles.desc}>{site.description}</p>
                <a
                  href={site.url}
                  className={`pill work-visit ${styles.visit}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
