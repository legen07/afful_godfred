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

const WorkSiteSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
  desktop: z.string(),
  mobile: z.string(),
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
  photo: z.string(),
  facts: z.array(z.object({ label: z.string(), value: z.string() })),
})

const ContactSchema = z.object({
  email: z.string().email(),
  phoneDisplay: z.string(),
  phoneHref: z.string().startsWith('tel:'),
  socials: z.array(z.object({ label: z.string(), handle: z.string(), href: z.string().url() })),
})

const workData: WorkSite[] = siteRepository.getWork().map((w) => WorkSiteSchema.parse(w))
const automationsData: AutomationProject[] = siteRepository
  .getAutomations()
  .map((a) => AutomationProjectSchema.parse(a))
const skillsData: SkillGroup[] = siteRepository.getSkills().map((g) => SkillGroupSchema.parse(g))
const personData: Person = PersonSchema.parse(siteRepository.getPerson())
const contactData: Contact = ContactSchema.parse(siteRepository.getContact())

export interface NavItem {
  label: string
  href: string
}

// --- Section string types ---
export interface HeroStats {
  automations: string
  websites: string
  degree: string
}

export interface HeroData {
  badge: string
  h1Line1: string
  h1Line2: string
  lede: string
  viewWork: string
  viewCv: string
  contact: string
  stats: HeroStats
}

export interface AboutData {
  overline: string
  bio: string[]
}

export interface WorkTextData {
  overline: string
  title: string
  titleEm: string
  titleSuffix: string
  lede: string
  visitSite: string
}

export interface SkillsData {
  overline: string
  title: string
  lede: string
  groups: SkillGroup[]
}

export interface AutomationsData {
  overline: string
  title: string
  titleEm: string
  titleSuffix: string
  lede: string
  statusLabels: Record<string, string>
  source: string
  projects: AutomationProject[]
}

export interface ContactTextData {
  overline: string
  title: string
  titleEm: string
  titleSuffix: string
  lede: string
  emailLabel: string
  phoneLabel: string
  email: string
  phoneDisplay: string
  phoneHref: string
  socials: { label: string; handle: string; href: string }[]
}

export interface FooterData {
  copyright: string
  location: string
  stack: string
}

export interface CvData {
  badge: string
  lede: string
  contactHeading: string
  backHome: string
  skills: string
  work: string
  automations: string
}

export interface ErrorData {
  somethingBroke: string
  unexpectedError: string
  tryAgain: string
}

export interface NotFoundData {
  code: string
  message: string
  backHome: string
}

// --- Full site model with all text sections ---

/** Assembled, validated site model — the only object the UI layer sees. */
export const site = {
  work: workData,
  automations: automationsData,
  skillsGroups: skillsData,
  person: personData,
  contact: contactData,
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Automations', href: '#automations' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'CV', href: '/cv' },
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
  hero: {
    badge: 'Web Development · Automation',
    h1Line1: 'I build',
    h1Line2: 'websites & the',
    lede: 'Software engineer crafting fast, modern websites — and the scrapers, bots, and AI pipelines that run them.',
    viewWork: 'View My Work',
    viewCv: 'View CV',
    contact: 'Get in Touch',
    stats: {
      automations: '6 automations published',
      websites: '4 websites live',
      degree: 'B.Tech CS · Class of 2024',
    },
  } as HeroData,
  about: {
    overline: 'About',
    bio: [
      'Results-driven software engineer with a B.Tech in Computer Science from Accra Technical University (Class of 2024). I build websites for people and businesses, then automate the repetitive parts — scraping, messaging, social, and customer chat — and wire AI in where it earns its place.',
      'I have created a lot of automations. Some are personal, some are for moments that matter, and some are still under construction.',
    ],
  } as AboutData,
  workText: {
    overline: 'Selected Work',
    title: 'Websites I\'ve ',
    titleEm: 'built',
    titleSuffix: '.',
    lede: 'Four sites, live today — a liquor store, a product storefront, a photography portfolio, and a beauty studio. All shipped to Cloudflare.',
    visitSite: 'Visit site',
  } as WorkTextData,
  skills: {
    overline: 'Skills',
    title: 'The toolbox.',
    lede: 'Honest self-assessments, from the languages I ship in to the tools I reach for every day.',
    groups: skillsData,
  } as SkillsData,
  automations: {
    overline: 'Automations',
    title: 'Things I ',
    titleEm: 'automate',
    titleSuffix: '.',
    lede: 'Scrapers, bots, and pipelines — some personal, some for clients, some still under construction. Everything public lives on GitHub.',
    statusLabels: {
      public: 'Public',
      private: 'Private repo',
      wip: 'Under construction',
    },
    source: 'Source',
    projects: automationsData,
  } as AutomationsData,
  contact: {
    overline: 'Contact',
    title: 'Let\'s build something that ',
    titleEm: 'runs itself.',
    titleSuffix: '',
    lede: 'I\'m open to web builds, automation pipelines, and AI integrations — tell me what\'s repetitive and I\'ll make it disappear.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    email: 'gafful07@gmail.com',
    phoneDisplay: '+233 59 386 1032',
    phoneHref: 'tel:+233593861032',
    socials: [
      { label: 'GitHub', handle: '@legen07', href: 'https://github.com/legen07' },
      { label: 'LinkedIn', handle: 'in/legen07', href: 'https://www.linkedin.com/in/legen07' },
      { label: 'Telegram', handle: '@islegen07', href: 'https://t.me/islegen07' },
      { label: 'Bluesky', handle: '@legen07', href: 'https://legen07.bsky.social' },
    ],
  } as ContactTextData & Contact,
  footer: {
    copyright: '© {year} Afful Godfred',
    location: 'Nsawam, Ghana',
    stack: 'Next.js 16 on Cloudflare Edge',
  } as FooterData,
  cv: {
    badge: 'CV',
    lede: 'Software engineer crafting fast, modern websites — and the scrapers, bots, and AI pipelines that run them. Based in Nsawam, Ghana.',
    contactHeading: 'Contact',
    backHome: '← Back to Home',
    skills: 'Skills',
    work: 'Websites I\'ve built',
    automations: 'Automations',
  } as CvData,
  error: {
    somethingBroke: 'Something broke',
    unexpectedError: 'An unexpected error occurred.',
    tryAgain: 'Try again',
  } as ErrorData,
  loading: 'Loading',
  notFound: {
    code: '404',
    message: 'This page went to automate itself.',
    backHome: 'Back home',
  } as NotFoundData,
}

export type Site = typeof site