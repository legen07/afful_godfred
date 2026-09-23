// Japanese translations for the portfolio site.

export interface NavItem {
  label: string
  href: string
}

export const japaneseSite = {
  nav: [
    { label: '作品', href: '#work' },
    { label: '自動化', href: '#automations' },
    { label: 'Skill', href: '#skills' },
    { label: '概要', href: '#about' },
    { label: 'CV', href: '/cv' },
  ] as NavItem[],
  cta: { label: '連絡する', href: '#contact' },
  hero: {
    badge: 'Web開発 · 自動化',
    h1Line1: '私は',
    h1Line2: 'その自動化を構築する。',
    lede:
      'ソフトウェアエンジニアとして、高速でモダンなウェブサイトを構築しています。スクレイピング、ボット、AIパイプラインも含みます。',
    viewWork: '作品を見る',
    viewCv: 'CVを見る',
    contact: 'お問い合わせ',
    stats: {
      automations: '6つの自動化を公開',
      websites: '4つのウェブサイトを運用中',
      degree: 'B.Tech CS · 2024年卒業',
    },
  },
  about: {
    overline: '概要',
    bio: [
      '結果志向のソフトウェアエンジニア。アクラ工科大学（B.Tech、2024年卒業）卒業。人や企業のためにウェブサイトを構築し、その後の繰り返し作業を自動化しています。',
      '多くの自動化を作成してきました。個人的なものもあれば、大切な場面のためのものもあり、まだ構築中のものもあります。',
    ],
  },
  workText: {
    overline: '選んだ作品',
    title: '私が',
    titleEm: '構築した',
    titleSuffix: 'ウェブサイト。',
    lede:
      '4つのサイトが現在稼働中——酒蔵、プロダクトストア、フォトグラファーポートフォリオ、美容室。すべてCloudflareにデプロイ。',
    visitSite: 'サイトを訪問',
  },
  workSites: [
    {
      slug: 'buuz',
      name: 'Buuz',
      url: 'https://buuz-a5z.pages.dev',
      description:
        'ガーナ向け酒類Eコマース — ワイン、ジン、ウイスキー、コニャック。Telegramサインイン、セニ紙幣の価格設定、アクラ周辺で代金引換。',
      desktop: '/images/work/buuz-desktop.png',
      mobile: '/images/work/buuz-mobile.png',
    },
    {
      slug: 'nibies',
      name: 'Nibies',
      url: 'https://everythingsome.pages.dev',
      description:
        '完全な注文フローを持つプロダクトストア — バルク購入、配送ゾーン、主要都市での即日配送。',
      desktop: '/images/work/nibies-desktop.png',
      mobile: '/images/work/nibies-mobile.png',
    },
    {
      slug: 'nueljay',
      name: 'NuelJay',
      url: 'https://nueljay.pages.dev',
      description:
        'クリエイティブスタジオのフォトグラファーポートフォリオ — ファッション、プロダクト、ウェディング、アウトドアの作品。',
      desktop: '/images/work/nueljay-desktop.png',
      mobile: '/images/work/nueljay-mobile.png',
    },
    {
      slug: 'reneglow',
      name: "Rene's Glow Luxe",
      url: 'https://reneglow.pages.dev',
      description:
        'Taifaの美容スタジオサイト — 髪、ネイル、アイラッシュ。サービス、営業時間、グランドオープンオffer。',
      desktop: '/images/work/reneglow-desktop.png',
      mobile: '/images/work/reneglow-mobile.png',
    },
  ],
  skillsGroups: [
    {
      id: 'frontend',
      label: 'フロントエンド',
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
      label: 'バックエンドとデータ',
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
      label: 'ツールとCMS',
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
      label: 'デザイン',
      skills: [
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 80 },
        { name: 'After Effects', level: 80 },
        { name: 'Premiere', level: 70 },
        { name: 'Adobe XD', level: 55 },
      ],
    },
  ],
  skills: {
    overline: 'Skill',
    title: 'ツールボックス。',
    lede:
      '正直な自己評価。日々使う言語から、必要に応じて使うツールまで。',
    groups: [
      {
        id: 'frontend',
        label: 'フロントエンド',
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
        label: 'バックエンドとデータ',
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
        label: 'ツールとCMS',
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
        label: 'デザイン',
        skills: [
          { name: 'Photoshop', level: 80 },
          { name: 'Illustrator', level: 80 },
          { name: 'After Effects', level: 80 },
          { name: 'Premiere', level: 70 },
          { name: 'Adobe XD', level: 55 },
        ],
      },
    ],
  },
  automations: {
    overline: '自動化',
    title: '私が',
    titleEm: '自動化する',
    titleSuffix: 'こと。',
    lede:
      'スクレイピング、ボット、パイプライン——個人的なもの、クライアント向けのもの、まだ構築中のものも。すべて公開プロジェクトはGitHubに。',
    statusLabels: {
      public: '公開',
      private: '非公開',
      wip: '構築中',
    },
    source: 'ソース',
    projects: [
      {
        slug: '3e3grams',
        name: '3e3grams',
        url: 'https://github.com/legen07/3e3grams',
        description:
          'Telegramダイアログのスクレイピング、分析、管理のための堅牢なTelegram自動化ツールキット。Redditトレンド検出とMongoDBの永続化を備えている。Telegram Client APIとPlaywrightで構築。',
        language: 'JavaScript',
        topics: ['telegram', 'playwright', 'mongodb', 'ai'],
        status: 'public' as const,
      },
      {
        slug: 'sporty_bro',
        name: 'sporty_bro',
        url: 'https://github.com/legen07/sporty_bro',
        description:
          'Playwrightベースの自動化されたSportyBetオッズスクレイパーと分析ツール。110以上の賭け（9ゲームずつ）で賭博が時間とお金の無の無駄であることを証明した実験。',
        language: 'JavaScript',
        topics: ['playwright', 'scraping', 'analysis'],
        status: 'public' as const,
      },
      {
        slug: 'ancient_chat',
        name: 'ancient_chat',
        url: 'https://github.com/legen07/ancient_chat',
        description:
          'Cloudflare Workersによって駆動されるTelegram AIチャットボット。Google Geminiを搭載し、インテリジェントなカスタマーサポートを提供。高速で構築され、グローバルにデプロイ。',
        language: 'JavaScript',
        topics: ['cloudflare-workers', 'gemini', 'bun'],
        status: 'public' as const,
      },
      {
        slug: 'tikyou',
        name: 'tikYou',
        url: 'https://github.com/legen07/tikYou',
        description:
          'TikTokの動画をダウンロードし、自動的にYouTubeに投稿するCLI自動化ツール。',
        language: 'JavaScript',
        topics: ['playwright', 'cli', 'scraper'],
        status: 'public' as const,
      },
      {
        slug: 'scraper-01',
        name: 'scraper_01',
        url: 'https://github.com/legen07/scraper_01',
        description:
          '初期のWebスクレイピング実験 — 書いた最初のクローラーの1つ。リポジトリは非公開。',
        language: null,
        topics: ['scraping', 'crawling'],
        status: 'private' as const,
      },
      {
        slug: 'fluffy-umbrella',
        name: 'fluffy-umbrella',
        url: 'https://github.com/legen07/fluffy-umbrella',
        description:
          'ガーナで公開されている電話番号の継続的なクロール — いくつかの戦略を試したが、まだ構築中。',
        language: null,
        topics: ['crawling', 'ghana'],
        status: 'wip' as const,
      },
    ],
  },
  contact: {
    overline: 'お問い合わせ',
    title: '一緒に',
    titleEm: '動く',
    titleSuffix: 'ものを作りましょう。',
    lede:
      'ウェブビルド、自動化パイプライン、AI統合に興味があります——繰り返し作業を教えてください。消えさせます。',
    emailLabel: 'メール',
    phoneLabel: '電話',
    email: 'gafful07@gmail.com',
    phoneDisplay: '+233 59 386 1032',
    phoneHref: 'tel:+233593861032',
    socials: [
      { label: 'GitHub', handle: '@legen07', href: 'https://github.com/legen07' },
      { label: 'LinkedIn', handle: 'in/legen07', href: 'https://www.linkedin.com/in/legen07' },
      { label: 'Telegram', handle: '@islegen07', href: 'https://t.me/islegen07' },
      { label: 'Bluesky', handle: '@legen07', href: 'https://legen07.bsky.social' },
    ],
  },
  person: {
    name: 'Afful Godfred',
    role: 'ソフトウェアエンジニア — ウェブ開発と自動化',
    photo: '/images/afful-godfred.jpg',
    bio: [
      'アクラ工科大学（B.Tech、2024年卒業）卒業の結果志向のソフトウェアエンジニア。人や企業のためにウェブサイトを構築し、スクレイピング、メッセージング、SNS、カスタマーサポートの繰り返し作業を自動化し、AIを適切な場所に組み_intoしています。',
      '多くの自動化を作成してきました。個人的なものもあれば、重要な場面のためのものもあり、まだ構築中のものもあります。',
    ],
    facts: [
      {
        label: '教育',
        value: 'B.Tech コンピュータサイエンス — アクラ工科大学、2024年卒業',
      },
      {
        label: '言語',
        value: '英語 · 堪能\nトウィ · ネイティブ\n日本語 · N4',
      },
      { label: '場所', value: 'Nsawam, ガーナ' },
    ],
  },
  footer: {
    copyright: '© {year} Afful Godfred',
    location: 'Nsawam, ガーナ',
    stack: 'Next.js 16 on Cloudflare Edge',
  },
  cv: {
    badge: '履歴書',
    lede:
      'ソフトウェアエンジニアとして、高速でモダンなウェブサイトを構築しています。スクレイピング、ボット、AIパイプラインも含みます。Nsawam、ガーナ拠点。',
    contactHeading: '連絡先',
    backHome: '← ホームに戰る',
    skills: 'Skill',
    work: 'ウェブサイト',
    automations: '自動化',
  },
  capabilities: [
    'Webスクレイピング＆クローリング',
    'Playwright自動化',
    'Telegramボット',
    'Android電話自動化',
    'Windows · Power Automate',
    'Linux · GTK',
    'ウェブサイト自動化＆テスト',
    'ボット保護',
    '一括メッセージング',
    'AIカスタマーケア',
    '自動SNS投稿',
    'AI統合',
  ],
  error: {
    somethingBroke: '何かが壊れました',
    unexpectedError: '予期せぬエラーが発生しました。',
    tryAgain: 'もう一度試す',
  },
  loading: '読み込み中',
  notFound: {
    code: '404',
    message: 'このページは自分で自動化しました。',
    backHome: 'ホームに戰る',
  },
}