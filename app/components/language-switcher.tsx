'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'

const TITLES = {
  en: 'Afful Godfred — Web Development & Automation',
  ja: 'Afful Godfred — ウェブ開発 & 自動化',
} as const

/** Syncs <html lang> and the document title with the current language. */
export function LanguageSwitcher() {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
    // Next.js metadata hydration restores the server-rendered (English) title
    // after this effect's first run; re-apply on later ticks to win the race.
    const apply = () => {
      document.title = TITLES[language]
    }
    apply()
    const t1 = setTimeout(apply, 0)
    const t2 = setTimeout(apply, 300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [language])

  return null
}
