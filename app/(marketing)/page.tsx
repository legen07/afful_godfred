'use client'

import { useTranslations } from '@/lib/language-context'
import { About } from '../components/about'
import { Automations } from '../components/automations'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Skills } from '../components/skills'
import { Work } from '../components/work'

/**
 * The single marketing page — template layer stack, extended downward:
 *
 *   .grain          (z 100, in the root layout)
 *   .page           (z 1)
 *     header        (sticky, z 50)
 *     main#top
 *       hero frame  (one viewport: hero + stats — the template's exact frame)
 *       work / automations / skills / about / contact
 *     footer
 */
export default function MarketingPage() {
  const t = useTranslations()

  return (
    <div className="page">
      <Header nav={t.nav} cta={t.cta} />
      <main id="top">
        <Hero />
        <Work sites={t.work} />
        <Automations projects={t.automations.projects} capabilities={t.capabilities} />
        <Skills groups={t.skills.groups} />
        <About person={t.person} />
        <Contact contact={t.contact} />
      </main>
      <Footer />
    </div>
  )
}