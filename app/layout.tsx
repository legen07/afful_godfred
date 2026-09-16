import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import { site } from '@/services/site.service'
import { AppearSettler } from './components/appear-settler'
import './global.css'

// Fonts (exact faces from the template):
// - Inter variable (100–900) — UI, logo, nav, buttons, badge, lede, stats
// - Instrument Serif italic — only the H1 accent words
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  style: ['italic'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Afful Godfred — Web Development & Automation',
    template: '%s — Afful Godfred',
  },
  description:
    'Afful Godfred is a software engineer in Nsawam, Ghana — modern website builds and the automation pipelines (scrapers, bots, and AI) that run them.',
  keywords: [
    'Afful Godfred',
    'software engineer',
    'web development',
    'automation',
    'Ghana',
    'Playwright',
    'Telegram bots',
    'web scraping',
  ],
  authors: [{ name: site.person.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Godfred.dev',
    title: 'Afful Godfred — Web Development & Automation',
    description:
      'Modern website builds and the automation pipelines (scrapers, bots, and AI) that run them.',
    images: [{ url: '/afful-godfred.jpg', width: 640, height: 640, alt: site.person.name }],
  },
  twitter: {
    card: 'summary',
    title: 'Afful Godfred — Web Development & Automation',
    description:
      'Modern website builds and the automation pipelines (scrapers, bots, and AI) that run them.',
    images: ['/afful-godfred.jpg'],
  },
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      {/* Force black immediately (template): the page can never flash white. */}
      <body style={{ background: '#000', color: '#fff' }}>
        {/* Template layer stack: grain sits above everything (z-index 100). */}
        <div className="grain" aria-hidden />
        {children}
        {/* Settles .appear entrance animations (template JS items 1–2). */}
        <AppearSettler />
      </body>
    </html>
  )
}
