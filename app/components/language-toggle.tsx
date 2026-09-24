'use client'

import { useLanguage } from '@/lib/language-context'
import headerStyles from './header.module.css'

interface LanguageToggleProps {
  /** 'dark' = header's liquid glass (black bg); 'light' = paper pages (CV). */
  variant?: 'dark' | 'light'
}

/**
 * Standalone language toggle — the same JA/EN button used in the header, for
 * pages that don't render the full header (e.g. the CV page).
 */
export function LanguageToggle({ variant = 'dark' }: LanguageToggleProps) {
  const { toggleLanguage, isJapanese } = useLanguage()

  if (variant === 'light') {
    return (
      <button
        type="button"
        className={`${headerStyles.langToggle} ${headerStyles.langToggleLight}`}
        aria-label={isJapanese ? 'Switch to English' : 'Switch to Japanese'}
        onClick={() => toggleLanguage()}
      >
        {isJapanese ? 'EN' : '日本'}
      </button>
    )
  }

  return (
    <button
      type="button"
      className={headerStyles.langToggle}
      aria-label={isJapanese ? 'Switch to English' : 'Switch to Japanese'}
      onClick={() => toggleLanguage()}
    >
      {isJapanese ? 'EN' : '日本'}
    </button>
  )
}
