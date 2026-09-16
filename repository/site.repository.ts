// Layer 3 — repository: the single source of truth for site content.
//
// 9-layer note: this is a fully static portfolio, so the Drizzle/D1 layers of
// the architecture do not apply. The repository is the typed content store the
// service layer (Layer 4) reads and validates — same boundary, same rules.

export interface WorkSite {
  slug: string
  name: string
  url: string
  description: string
  desktop: string
  mobile: string
}

export interface AutomationProject {
  slug: string
  name: string
  url: string
  description: string
  language: string | null
  topics: string[]
  status: 'public' | 'private' | 'wip'
}

export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  id: string
  label: string
  skills: Skill[]
}

export interface Person {
  name: string
  role: string
  bio: string[]
  photo: string
  facts: { label: string; value: string }[]
}

export interface Contact {
  email: string
  phoneDisplay: string
  phoneHref: string
  socials: { label: string; handle: string; href: string }[]
}

export const siteRepository = {
  getWork(): WorkSite[] {
    return [
      {
        slug: 'buuz',
        name: 'Buuz',
        url: 'https://buuz-a5z.pages.dev',
        description:
          'Liquor e-commerce for Ghana — wine, gin, whiskey and cognac. Telegram sign-in, cedi pricing, and cash-on-delivery across Accra and beyond.',
        desktop: '/work/buuz-desktop.png',
        mobile: '/work/buuz-mobile.png',
      },
      {
        slug: 'nibies',
        name: 'Nibies',
        url: 'https://everythingsome.pages.dev',
        description:
          'Product storefront with a full order flow — bulk purchases, delivery zones, and same-day dispatch in the major cities.',
        desktop: '/work/nibies-desktop.png',
        mobile: '/work/nibies-mobile.png',
      },
      {
        slug: 'nueljay',
        name: 'NuelJay',
        url: 'https://nueljay.pages.dev',
        description:
          'Photography portfolio for a creative studio — fashion, products, weddings and outdoor work, built for a fast, striking experience.',
        desktop: '/work/nueljay-desktop.png',
        mobile: '/work/nueljay-mobile.png',
      },
      {
        slug: 'reneglow',
        name: "Rene's Glow Luxe",
        url: 'https://reneglow.pages.dev',
        description:
          'Beauty studio site for hair, nails and lashes in Taifa — services, hours, and a grand-opening offer.',
        desktop: '/work/reneglow-desktop.png',
        mobile: '/work/reneglow-mobile.png',
      },
    ]
  },

  getAutomations(): AutomationProject[] {
    return [
      {
        slug: '3e3grams',
        name: '3e3grams',
        url: 'https://github.com/legen07/3e3grams',
        description:
          'Robust Telegram automation toolkit for scraping, analyzing and managing Telegram dialogs — with Reddit trend detection and MongoDB persistence. Powered by the Telegram Client API and Playwright.',
        language: 'JavaScript',
        topics: ['telegram', 'playwright', 'mongodb', 'ai'],
        status: 'public',
      },
      {
        slug: 'sporty_bro',
        name: 'sporty_bro',
        url: 'https://github.com/legen07/sporty_bro',
        description:
          'Automated SportyBet odds scraper and analysis tool built on Playwright — an experiment that staked 110+ slips (9 games each) to prove betting is a waste of time and money.',
        language: 'JavaScript',
        topics: ['playwright', 'scraping', 'analysis'],
        status: 'public',
      },
      {
        slug: 'ancient_chat',
        name: 'ancient_chat',
        url: 'https://github.com/legen07/ancient_chat',
        description:
          'Cloudflare Workers-powered Telegram AI chat bot that delivers intelligent customer support with Google Gemini. Built for speed, deployed globally.',
        language: 'JavaScript',
        topics: ['cloudflare-workers', 'gemini', 'bun'],
        status: 'public',
      },
      {
        slug: 'tikyou',
        name: 'tikYou',
        url: 'https://github.com/legen07/tikYou',
        description:
          'CLI automation that downloads videos from TikTok and posts them to YouTube automatically.',
        language: 'JavaScript',
        topics: ['playwright', 'cli', 'scraper'],
        status: 'public',
      },
      {
        slug: 'scraper-01',
        name: 'scraper_01',
        url: 'https://github.com/legen07/scraper_01',
        description:
          'Early web-scraping experiment — one of the first crawlers I ever wrote. The repository is private.',
        language: null,
        topics: ['scraping', 'crawling'],
        status: 'private',
      },
      {
        slug: 'fluffy-umbrella',
        name: 'fluffy-umbrella',
        url: 'https://github.com/legen07/fluffy-umbrella',
        description:
          'Ongoing crawl of publicly listed phone numbers across Ghana — several strategies attempted, still under construction.',
        language: null,
        topics: ['crawling', 'ghana'],
        status: 'wip',
      },
    ]
  },

  getSkills(): SkillGroup[] {
    return [
      {
        id: 'frontend',
        label: 'Frontend',
        skills: [
          { name: 'HTML', level: 95 },
          { name: 'CSS', level: 95 },
          { name: 'Sass', level: 95 },
          { name: 'JavaScript', level: 90 },
          { name: 'TypeScript', level: 80 },
          { name: 'React', level: 80 },
        ],
      },
      {
        id: 'backend',
        label: 'Backend & Data',
        skills: [
          { name: 'SQL', level: 95 },
          { name: 'MongoDB', level: 95 },
          { name: 'JSON', level: 95 },
          { name: 'Python', level: 80 },
          { name: 'Node.js', level: 80 },
        ],
      },
      {
        id: 'tools',
        label: 'Tools & CMS',
        skills: [
          { name: 'Git', level: 95 },
          { name: 'WordPress', level: 85 },
          { name: 'XML', level: 85 },
          { name: 'Drupal', level: 80 },
          { name: 'PHP', level: 60 },
        ],
      },
      {
        id: 'design',
        label: 'Design',
        skills: [
          { name: 'Photoshop', level: 80 },
          { name: 'Illustrator', level: 80 },
          { name: 'After Effects', level: 80 },
          { name: 'Premiere', level: 70 },
          { name: 'Adobe XD', level: 55 },
        ],
      },
    ]
  },

  getPerson(): Person {
    return {
      name: 'Afful Godfred',
      role: 'Software Engineer — Web Development & Automation',
      bio: [
        'Results-driven software engineer with a B.Tech in Computer Science from Accra Technical University (Class of 2024). I build websites for people and businesses, then automate the repetitive parts — scraping, messaging, social, and customer chat — and wire AI in where it earns its place.',
        'I have created a lot of automations. Some are personal, some are for moments that matter, and some are still under construction.',
      ],
      photo: '/afful-godfred.jpg',
      facts: [
        {
          label: 'Education',
          value: 'B.Tech Computer Science — Accra Technical University, Class of 2024',
        },
        { label: 'Languages', value: 'English · Fluent\nTwi · Native\nJapanese · N4' },
        { label: 'Location', value: 'Nsawam, Ghana' },
      ],
    }
  },

  getContact(): Contact {
    return {
      email: 'gafful07@gmail.com',
      phoneDisplay: '+233 59 386 1032',
      phoneHref: 'tel:+233593861032',
      socials: [
        { label: 'GitHub', handle: '@legen07', href: 'https://github.com/legen07' },
        {
          label: 'LinkedIn',
          handle: 'in/case-sensitive',
          href: 'https://www.linkedin.com/in/case-sensitive',
        },
        { label: 'Telegram', handle: '@anti_ancient', href: 'https://t.me/anti_ancient' },
        { label: 'Bluesky', handle: '@legen07', href: 'https://legen07.bsky.social' },
      ],
    }
  },
}
