'use client'

import { LogoMark } from './components/ui/logo'
import { useTranslations } from '@/lib/language-context'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations()
  const e = t.error

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <LogoMark size={34} />
      <p
        style={{
          fontSize: 13,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#9a9a9a',
        }}
      >
        {e.somethingBroke}
      </p>
      <h1
        style={{
          fontSize: 'clamp(26px, 5vw, 40px)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
        }}
      >
        {e.unexpectedError}
      </h1>
      <p style={{ color: '#9a9a9a', fontSize: 14, maxWidth: 420, lineHeight: 1.55 }}>
        {error.digest ? `Error digest: ${error.digest}` : 'Please try again.'}
      </p>
      <button className="btn btn-solid" type="button" style={{ marginTop: 10 }} onClick={reset}>
        <span>{e.tryAgain}</span>
      </button>
    </main>
  )
}