import styles from './hero.module.css'

/**
 * Hero — the template's bottom-centered frame, exact:
 * badge (sparkle) → masked two-line H1 with the Instrument Serif accent →
 * lede → liquid-glass actions → stats bar along the bottom of the first frame.
 *
 * The template's nav pointed at non-existent sections; for this portfolio the
 * frame is the first of several (Apple wayfinding: the page continues below).
 */
export function Hero() {
  return (
    <section className={styles.heroFrame}>
      <div className={styles.hero}>
        <div className={styles.copy}>
          <span
            className={`badge appear appear--pop ${styles.badge}`}
            style={{ ['--d' as string]: '0.22s' }}
          >
            <svg
              className={styles.badgeStar}
              width="18"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
            </svg>
            Web Development · Automation
          </span>

          <h1 className={styles.h1}>
            <span
              className={`headline-line appear appear--mask ${styles.line}`}
              style={{ ['--d' as string]: '0.42s' }}
            >
              I build <em>websites</em> &amp; the
            </span>
            <span
              className={`headline-line appear appear--mask ${styles.line}`}
              style={{ ['--d' as string]: '0.62s' }}
            >
              automations behind them.
            </span>
          </h1>

          <p
            className={`lede appear appear--soft ${styles.lede}`}
            style={{ ['--d' as string]: '0.82s' }}
          >
            Software engineer crafting fast, modern websites — and the scrapers, bots, and AI
            pipelines that run them.
          </p>

          <div className={`hero-actions ${styles.actions}`}>
            <a
              href="#work"
              className="btn btn-solid appear appear--btn"
              style={{ ['--d' as string]: '0.96s' }}
            >
              <span>View My Work</span>
            </a>
            <a
              href="/cv"
              className="btn btn-frost appear appear--side"
              style={{ ['--d' as string]: '1.10s' }}
            >
              <span>View CV</span>
            </a>
            <a
              href="#contact"
              className="btn btn-frost appear appear--side"
              style={{ ['--d' as string]: '1.10s' }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

/** Stats footer — template icons & layout, labels for this portfolio. */
function Stats() {
  return (
    <footer className={`stats ${styles.stats}`}>
      <div
        className={`stat appear appear--stat ${styles.stat}`}
        style={{ ['--d' as string]: '1.12s' }}
      >
        {/* Dual-pill / workflow icon (template, exact) */}
        <svg className={styles.statIcon} viewBox="0 0 24 24" aria-hidden>
          <defs>
            <linearGradient id="stat-pill-a" x1="3" y1="2" x2="14" y2="22">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.38" />
              <stop offset="1" stopColor="#3a3a3a" stopOpacity="0.62" />
            </linearGradient>
            <linearGradient id="stat-pill-b" x1="14" y1="2" x2="21" y2="22">
              <stop offset="0" stopColor="#3a3a3a" stopOpacity="0.38" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.62" />
            </linearGradient>
          </defs>
          <rect x="3.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#stat-pill-a)" />
          <rect x="13.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#stat-pill-b)" />
          <rect x="9.2" y="10.9" width="5.6" height="2.2" rx="1.1" fill="#4a4a4a" />
        </svg>
        <span>6 automations published</span>
      </div>

      <div
        className={`stat appear appear--stat ${styles.stat}`}
        style={{ ['--d' as string]: '1.28s' }}
      >
        {/* Download tile (template, exact) */}
        <svg className={styles.statIcon} viewBox="0 0 24 24" aria-hidden>
          <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6.2" fill="#ffffff" />
          <path
            d="M12 7.1v7.4"
            stroke="#111"
            strokeWidth="1.85"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8.15 12.35L12 16.2l3.85-3.85"
            stroke="#111"
            strokeWidth="1.85"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span>4 websites live</span>
      </div>

      <div
        className={`stat appear appear--stat ${styles.stat}`}
        style={{ ['--d' as string]: '1.44s' }}
      >
        {/* Graduation cap (edited for the portfolio: the template's third stat
            was "teams onboarded"; the direct icon here is the credential). */}
        <svg
          className={styles.statIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 4.2L2.8 8.6 12 13l9.2-4.4L12 4.2z" fill="rgba(232,232,232,0.16)" />
          <path d="M6.4 10.9v4.2c0 1.5 2.5 3.2 5.6 3.2s5.6-1.7 5.6-3.2v-4.2" />
          <path d="M21.2 9.2v5.4" />
          <circle cx="21.2" cy="15.9" r="0.9" fill="#e8e8e8" stroke="none" />
        </svg>
        <span>B.Tech CS · Class of 2024</span>
      </div>
    </footer>
  )
}
