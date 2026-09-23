'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { japaneseSite } from '@/services/japanese.service'
import { site } from '@/services/site.service'
import type { Site } from '@/services/site.service'

export type Language = 'en' | 'ja'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  isJapanese: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isJapanese: language === 'ja' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

// Build the Japanese model by merging translations over the English base
function buildJapaneseModel(): Site {
  const j = japaneseSite
  return {
    ...site,
    nav: j.nav,
    cta: j.cta,
    hero: { ...site.hero, ...j.hero },
    about: { ...site.about, ...j.about },
    workText: { ...site.workText, ...j.workText },
    skills: { ...site.skills, ...j.skills },
    automations: { ...site.automations, ...j.automations },
    contact: { ...site.contact, ...j.contact },
    footer: { ...site.footer, ...j.footer },
    cv: { ...site.cv, ...j.cv },
    error: { ...site.error, ...j.error },
    loading: j.loading,
    notFound: { ...site.notFound, ...j.notFound },
    capabilities: j.capabilities,
    work: j.workSites,
    skillsGroups: j.skillsGroups,
    person: j.person,
  }
}

// Use this in components that need translated strings
// Returns the correct model for the current language
export function useTranslations(): Site {
  const { isJapanese } = useLanguage()

  if (!isJapanese) {
    return site
  }

  return buildJapaneseModel()
}
