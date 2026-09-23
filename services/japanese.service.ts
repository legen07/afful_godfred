// Japanese translations for the portfolio site.

export interface NavItem {
  label: string
  href: string
}

export const japaneseSite = {
  nav: [
    { label: '作品', href: '#work' },
    { label: '自動化', href: '#automations' },
    { label: 'スキル', href: '#skills' },
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
  work: {
    overline: '選んだ作品',
    title: '私が',
    titleEm: '構築した',
    titleSuffix: 'ウェブサイト。',
    lede:
      '4つのサイトが現在稼働中——酒蔵、プロダクトストア、フォトグラファーポートフォリオ、美容室。すべてCloudflareにデプロイ。',
    visitSite: 'サイトを訪問',
  },
  skills: {
    overline: 'スキル',
    title: 'ツールボックス。',
    lede:
      '正直な自己評価。日々使う言語から、必要に応じて使うツールまで。',
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
  },
  footer: {
    copyright: '© {year} Afful Godfred',
    location: 'Nsawam, ガーナ',
    stack: 'Next.js 16 on Cloudflare Edge',
  },
  cv: {
    badge: '履歴書',
    lede:
      'ソフトウェアエンジニアとして、高速でモダンなウェブサイトを構築しています。スクレイピング、ボット、AIパイプラインも含みます。ンサワム、ガーナ拠点。',
    contactHeading: '連絡先',
    backHome: '← ホームに戻る',
    skills: 'スキル',
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
    message: 'このページは{0}自分で自動化しました。',
    backHome: 'ホームに戻る',
  },
}
