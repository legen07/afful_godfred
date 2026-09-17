// Layer 4 — services: business logic, validation (Zod), and the assembled
// page model. Pages (Layer 9) consume `site` and never touch the repository
// directly — the strict layer boundary is preserved.

import { z } from 'zod'
import type {
  AutomationProject,
  Contact,
  Person,
  SkillGroup,
  WorkSite,
} from '@/repository/site.repository'
import { siteRepository } from '@/repository/site.repository'

// Imported images arrive as StaticImageData objects ({ src, width, height,
// blur* }) — validate the required members; optional blur fields are stripped.
const StaticImageSchema = z.object({
  src: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

const WorkSiteSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
  desktop: StaticImageSchema,
  mobile: StaticImageSchema,
})

const AutomationProjectSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
  language: z.string().nullable(),
  topics: z.array(z.string()),
  status: z.enum(['public', 'private', 'wip']),
})

const SkillGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  skills: z.array(
    z.object({
      name: z.string().min(1),
      level: z.number().int().min(0).max(100),
    }),
  ),
})

const PersonSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.array(z.string()).min(1),
  photo: StaticImageSchema,
  facts: z.array(z.object({ label: z.string(), value: z.string() })),
})

const ContactSchema = z.object({
  email: z.string().email(),
  phoneDisplay: z.string(),
  phoneHref: z.string().startsWith('tel:'),
  socials: z.array(z.object({ label: z.string(), handle: z.string(), href: z.string().url() })),
})

const work: WorkSite[] = siteRepository.getWork().map((w) => WorkSiteSchema.parse(w))
const automations: AutomationProject[] = siteRepository
  .getAutomations()
  .map((a) => AutomationProjectSchema.parse(a))
const skills: SkillGroup[] = siteRepository.getSkills().map((g) => SkillGroupSchema.parse(g))
const person: Person = PersonSchema.parse(siteRepository.getPerson())
const contact: Contact = ContactSchema.parse(siteRepository.getContact())

export interface NavItem {
  label: string
  href: string
}

/** Assembled, validated site model — the only object the UI layer sees. */
export const site = {
  work,
  automations,
  skills,
  person,
  contact,
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Automations', href: '#automations' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ] as NavItem[],
  cta: { label: "Let's Talk", href: '#contact' },
  capabilities: [
    'Web scraping & crawling',
    'Playwright automation',
    'Telegram bots',
    'Android phone automation',
    'Windows · Power Automate',
    'Linux · GTK',
    'Website automation & testing',
    'Bot protection',
    'Bulk messaging',
    'AI customer chat',
    'Auto social media',
    'AI integration',
  ],
}

export type Site = typeof site
