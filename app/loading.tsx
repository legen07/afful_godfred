'use client'

import { useTranslations } from '@/lib/language-context'

export default function Loading() {
  const t = useTranslations()

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontSize: 13,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#9a9a9a',
          animation: 'in-soft 1.2s ease infinite alternate',
        }}
      >
        {t.loading}
      </p>
    </main>
  )
}