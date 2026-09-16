// Layer 6 — Route Handler.
//
// Static site, dynamic edge: a single JSON endpoint exposing the site model,
// useful for integrations, bots, and quick verification (skill checklist:
// "test cache behavior with curl").
//
// Runtime: Next.js 16.3 deprecates `runtime = 'edge'` on route handlers in
// favor of the default (nodejs) runtime, which is what OpenNext Cloudflare
// ships to the Edge under `nodejs_compat`. This handler uses no Node-only
// APIs, so it is fully Cloudflare-Edge compatible on the default runtime.
import { NextResponse } from 'next/server'
import { site } from '@/services/site.service'

export async function GET() {
  return NextResponse.json({
    name: site.person.name,
    role: site.person.role,
    location: 'Nsawam, Ghana',
    email: site.contact.email,
    work: site.work.map((w) => ({ name: w.name, url: w.url })),
    automations: site.automations.map((a) => ({ name: a.name, url: a.url })),
    socials: site.contact.socials,
  })
}
