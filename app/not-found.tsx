'use client'

import { LogoMark } from './components/ui/logo'
import { useTranslations } from '@/lib/language-context'

export default function NotFound() {
  const t = useTranslations()
  const nf = t.notFound

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: '24px',
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
        {nf.code}
      </p>
      <h1
        style={{
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: 500,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
        }}
      >
        This page went to{' '}
        <em style={{ fontFamily: 'var(--font-accent)', color: '#9a9a9a' }}>automate</em> itself.
      </h1>
      <a className="btn btn-solid" style={{ marginTop: 10 }} href="/">
        <span>{nf.backHome}</span>
      </a>
    </main>
  )
}