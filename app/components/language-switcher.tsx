'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'

/** Sets the <html lang> attribute to match the current language. */
export function LanguageSwitcher() {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return null
}
