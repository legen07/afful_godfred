"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import styles from "./header.module.css";
import { LogoMark, LogoWordmark } from "./ui/logo";

interface HeaderProps {
  nav: { label: string; href: string }[];
  cta: { label: string; href: string };
}

const DESKTOP_QUERY = "(min-width: 901px)";

/**
 * Sticky header — the template's 3-column grid, kept exactly:
 * left logo / center liquid-metal nav pills / right CTA, plus the phone burger
 * and full-screen menu.
 *
 * Apple edits:
 * - scroll edge effect: past the first frame the header gains a fading
 *   translucent material (no hard divider) instead of a 1px border.
 * - the menu is interruptible: it opens/closes with its own timing and the
 *   burger morphs 1:1 with state; Escape, nav clicks, and resizing to desktop
 *   all close it (template JS items 3–5).
 */
export function Header({ nav, cta }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleLanguage, isJapanese } = useLanguage();

  // Scroll state — rAF-throttled (no work on the input path). The header goes
  // "scrolled" once the first frame has mostly passed (Apple: scroll edge
  // effects, not a hard divider).
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu side effects: body lock, Escape, resize-to-desktop closes.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia(DESKTOP_QUERY).matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Reset body scroll lock when language changes (menu may be open).
  useEffect(() => {
    if (!open) return;
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
  }, [isJapanese]);

  return (
    <>
      {/* Full-screen menu backdrop (template): dims + blurs 24px when open.
          `menu-backdrop` is a global hook for the reduced-transparency rule. */}
      <div className={`menu-backdrop ${styles.backdrop}`} aria-hidden />
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <a
          href="#top"
          className={`logo appear appear--scale ${styles.logo}`}
          style={{ ["--d" as string]: "0.08s" }}
          aria-label="Godfred.dev — back to top"
        >
          <LogoWordmark />
        </a>

        <nav id="site-nav" className={styles.nav} aria-label="Primary">
          {nav.map((item, i) => {
            const isCv = item.label.toLowerCase() === "cv" ? true : false;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`pill appear ${
                  i % 2 === 0 ? "appear--scale" : "appear--soft"
                } ${styles.navPill}`}
                style={{
                  ["--d" as string]: `${0.16 + i * 0.12}s, `,
                  ...(isCv && { backgroundColor: "white", color: "black" }),
                }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.rightHeader}>
          <a
            href={cta.href}
            className={`btn btn-solid appear appear--scale ${styles.headerCta}`}
            style={{ ["--d" as string]: "0.34s" }}
          >
            <span>{cta.label}</span>
          </a>

          <button
            type="button"
            className={`langToggle appear appear--scale ${styles.langToggle}`}
            style={{ ["--d" as string]: "0.34s" }}
            aria-label={isJapanese ? "Switch to English" : "Switch to Japanese"}
            onClick={() => toggleLanguage()}
          >
            {isJapanese ? "EN" : "日本"}
          </button>

          <button
            type="button"
            className={`burger appear appear--scale ${styles.burger}`}
            style={{ ["--d" as string]: "0.34s" }}
            aria-controls="site-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>
    </>
  );
}
