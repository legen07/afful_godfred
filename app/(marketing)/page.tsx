import { site } from '@/services/site.service'
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
  return (
    <div className="page">
      <Header nav={site.nav} cta={site.cta} />
      <main id="top">
        <Hero />
        <Work sites={site.work} />
        <Automations projects={site.automations} capabilities={site.capabilities} />
        <Skills groups={site.skills} />
        <About person={site.person} />
        <Contact contact={site.contact} />
      </main>
      <Footer />
    </div>
  )
}
