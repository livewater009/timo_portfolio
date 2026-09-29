export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  shortTitle: string
  role: string
  summary: string
  description: string
  skills: string[]
  links: ProjectLink[]
  cover: string
  images: string[]
  featured?: boolean
  category: 'Mobile' | 'Web' | 'AI' | 'SaaS'
}

export const projects: Project[] = [
  {
    slug: 'tempconnect',
    title: 'TempConnect — Direct Hiring Marketplace',
    shortTitle: 'TempConnect',
    role: 'Mobile & platform developer — iOS, Android & Windows staffing app',
    summary:
      'Cross-platform hiring marketplace connecting employers and workers—post jobs, book talent, message, and hire directly.',
    description:
      'Built TempConnect for iOS, Android, and Windows—a direct hiring marketplace that connects employers and job seekers without traditional staffing-agency overhead. Delivered dual experiences (“I Want to Hire” / “I Want to Work”), job posting and proposals, map-based locations, messaging, background-check and payment flows, and employer/worker dashboards so businesses can post openings and book available talent while workers apply, manage availability, and get hired. Live at tempconnect.app with App Store, Google Play, and Microsoft Store listings.',
    skills: [
      'React Native',
      'Mobile App Development',
      'iOS Development',
      'Android App Development',
      'Cross-Platform',
    ],
    links: [
      { label: 'Website', href: 'https://tempconnect.app/' },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/tempconnect/id1473848181',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.tempconnect&hl=en_US',
      },
      {
        label: 'Microsoft Store',
        href: 'https://apps.microsoft.com/detail/9p1t2c4dxkf4?hl=en-US&gl=HK',
      },
    ],
    cover: '/portfolio/tempconnect/01-hero.png?v=4',
    images: [
      '/portfolio/tempconnect/01-hero.png?v=4',
      '/portfolio/tempconnect/02-dual-paths.png?v=1',
      '/portfolio/tempconnect/03-screens.png?v=1',
      '/portfolio/tempconnect/04-detail.png?v=1',
      '/portfolio/tempconnect/05-platforms.png?v=1',
    ],
    featured: true,
    category: 'Mobile',
  },
  {
    slug: 'why-unified',
    title: 'Why Unified® — Dropshipping Platform',
    shortTitle: 'Why Unified®',
    role: 'Mobile & platform developer — iOS & Android dropshipping app',
    summary:
      'Dropshipping app to sell on Amazon & Walmart with pay-as-you-sell, managed fulfillment, and live store insights.',
    description:
      'Built Why Unified® Platform for iOS and Android—a dropshipping app that helps entrepreneurs launch and scale marketplace stores on Amazon® and Walmart®. Delivered connect-or-takeover store flows, access to trusted household brands, pay-as-you-sell inventory (no large upfront stock), real-time order/revenue insights, and in-app support—while the platform handles fulfillment, shipping, and returns so stores can run on auto-pilot. Workflow: Connect store → Access products → List & price → Orders → Fulfillment → Track growth. Live at whyunified.com with App Store and Google Play listings.',
    skills: [
      'React Native',
      'Mobile App Development',
      'iOS Development',
      'Android App Development',
      'Marketplace Integrations',
    ],
    links: [
      { label: 'Website', href: 'https://whyunified.com/' },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/why-unified-dropshipping/id6747406254',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=whyunified.llc',
      },
    ],
    cover: '/portfolio/why-unified/01-hero.png?v=8',
    images: [
      '/portfolio/why-unified/01-hero.png?v=8',
      '/portfolio/why-unified/02-screens.png?v=3',
      '/portfolio/why-unified/03-pulse.png?v=3',
      '/portfolio/why-unified/04-activate.png?v=3',
      '/portfolio/why-unified/05-brands.png?v=3',
    ],
    featured: true,
    category: 'Mobile',
  },
  {
    slug: 'crmgrow',
    title: 'crmgrow — Real Estate Team CRM',
    shortTitle: 'crmgrow',
    role: 'Full stack developer — Angular frontend & Node.js backend',
    summary:
      'Real estate team production CRM: lead routing, pipelines, automations, dialer, SMS, and team workflows.',
    description:
      'Built crmgrow end-to-end with Angular and Node.js—a real estate team production platform for converting leads into clients. Delivered lead capture and routing, pipeline and deals management, tasks, contacts, calendars, landing pages and lead forms, behavior-based automations, materials library, multi-channel outreach (power dialer, SMS, email, video), and team/community sharing so leaders can scale follow-up and agent productivity. Workflow: Capture → Route → Automate follow-up → Pipeline → Appointments → Convert & track.',
    skills: ['Angular', 'Node.js', 'REST APIs', 'SaaS Development', 'CRM'],
    links: [
      { label: 'Live site', href: 'https://crmgrow.com/' },
      { label: 'Mobile apps', href: 'https://crmgrow.com/mobile.html' },
    ],
    cover: '/portfolio/crmgrow/01-hero.png?v=6',
    images: [
      '/portfolio/crmgrow/01-hero.png?v=6',
      '/portfolio/crmgrow/02-features.png?v=6',
      '/portfolio/crmgrow/03-workflow.png?v=6',
      '/portfolio/crmgrow/04-deliverables.png?v=6',
    ],
    featured: true,
    category: 'SaaS',
  },
  {
    slug: 'doodlez',
    title: 'Doodlez — AI Art Social App',
    shortTitle: 'Doodlez',
    role: 'Mobile & backend developer — React Native + Node API',
    summary:
      'React Native iOS app that turns doodles into AI art in seconds, plus a social feed and marketing site.',
    description:
      'Built Doodlez AI Art: a React Native (Expo) iOS app that turns simple doodles into scroll-stopping AI art in under 15 seconds, plus the marketing site at doodlez.co. Users sketch anything, pick from 50+ artist-inspired styles, generate variations, then post to a TikTok-style community feed—like, comment, follow, and remix trending looks. Shipped App Store listing, freemium IAP, sketch-faithful AI generation, and a conversion-focused download landing page.',
    skills: ['React Native', 'Mobile App Development', 'AI Integration', 'Node.js', 'UI/UX Design'],
    links: [
      { label: 'Website', href: 'https://doodlez.co/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/doodlez-ai-art/id6756695498' },
    ],
    cover: '/portfolio/doodlez/01-hero-doodlez.png',
    images: [
      '/portfolio/doodlez/01-hero-doodlez.png',
      '/portfolio/doodlez/02-features-doodlez.png',
      '/portfolio/doodlez/03-website-doodlez.png',
      '/portfolio/doodlez/04-deliverables-doodlez.png',
    ],
    featured: true,
    category: 'AI',
  },
  {
    slug: 'tigergenie',
    title: 'TigerGenie — NFC Focus Mode App',
    shortTitle: 'TigerGenie',
    role: 'Mobile developer — React Native iOS & Android + NFC',
    summary:
      'One-tap NFC Focus Mode for families—block distractions and stay present at dinner, study, and bedtime.',
    description:
      'Built TigerGenie end-to-end: a React Native (Expo) iOS & Android app that starts Focus Mode with one tap of an NFC keychain—helping families pause distracting apps and stay present. Shipped customizable app/category blocking (Screen Time Family Controls on iOS; AccessibilityService on Android), timed unlocks, focus progress tracking, and a no-subscription core experience. Also delivered store listings plus the tigergenie.com marketing site.',
    skills: ['React Native', 'Mobile App Development', 'iOS', 'Android', 'NFC'],
    links: [
      { label: 'Website', href: 'https://tigergenie.com/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/tigergenie/id6761698465' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.tigergenie.app',
      },
    ],
    cover: '/portfolio/tigergenie/01-hero-tigergenie.png',
    images: [
      '/portfolio/tigergenie/01-hero-tigergenie.png',
      '/portfolio/tigergenie/02-features-tigergenie.png',
      '/portfolio/tigergenie/03-website-tigergenie.png',
      '/portfolio/tigergenie/04-deliverables-tigergenie.png',
      '/portfolio/tigergenie/05-appstore-listing.png',
      '/portfolio/tigergenie/06-website-live.png',
    ],
    featured: true,
    category: 'Mobile',
  },
  {
    slug: 'blade',
    title: 'Blade — Restoration SaaS',
    shortTitle: 'Blade',
    role: 'Full-stack developer — Vue frontend & Java Spring backend',
    summary:
      'Enterprise SaaS for disaster restoration contractors with CRM, billing, and two-way QuickBooks sync.',
    description:
      'Built Blade, a full-stack SaaS platform for disaster restoration contractors—unifying CRM, dispatch, field documentation, estimating, billing, and financial reporting in one system. Delivered a Vue.js SPA on a Java Spring backend with real-time two-way QuickBooks Online sync, plus integrations with Xactimate/XactAnalysis and partner billing tools. Focus: eliminate duplicate data entry from first call to final payment, with SOC 2–ready enterprise workflows and AI-assisted job documentation.',
    skills: ['Vue.js', 'Java Spring', 'QuickBooks API', 'REST API', 'SaaS Development'],
    links: [{ label: 'Live site', href: 'https://www.blade.nomadiw.com/' }],
    cover: '/portfolio/blade/01-case-cover-blade.png',
    images: [
      '/portfolio/blade/01-case-cover-blade.png',
      '/portfolio/blade/02-architecture-blade.png',
      '/portfolio/blade/03-workflow-blade.png',
      '/portfolio/blade/04-quickbooks-sync-blade.png',
      '/portfolio/blade/05-homepage-live.png',
      '/portfolio/blade/06-integrations-live.png',
    ],
    featured: true,
    category: 'SaaS',
  },
  {
    slug: 'guess-the-move',
    title: 'Guess the Move — Chess Training App',
    shortTitle: 'Guess the Move',
    role: 'Mobile developer — React Native app + marketing site',
    summary:
      'Train by guessing grandmaster moves from 40,000+ legendary games on iOS and Android.',
    description:
      'Built Guess Chess (Guess the Move) end-to-end: a React Native (Expo) iOS & Android app plus the marketing site at guessthemove.app. Players train by guessing grandmaster moves from 40,000+ legendary games—pick legends like Carlsen or Fischer, race timed challenges, solve puzzles, and get real-time accuracy feedback with progress stats. Shipped App Store & Google Play listings, dark-themed gameplay UI, and a conversion-focused download landing page.',
    skills: ['React Native', 'Mobile App Development', 'iOS', 'Android', 'Landing Pages'],
    links: [
      { label: 'Website', href: 'https://guessthemove.app/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/guess-the-move/id6753637134' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=guess.smartchess',
      },
    ],
    cover: '/portfolio/guess-the-move/01-hero-guess-the-move.png',
    images: [
      '/portfolio/guess-the-move/01-hero-guess-the-move.png',
      '/portfolio/guess-the-move/02-features-guess-the-move.png',
      '/portfolio/guess-the-move/03-website-guess-the-move.png',
      '/portfolio/guess-the-move/04-deliverables-guess-the-move.png',
    ],
    featured: true,
    category: 'Mobile',
  },
  {
    slug: 'bruno-groening',
    title: 'Bruno Gröning — Spiritual Lifestyle App',
    shortTitle: 'Bruno Gröning',
    role: 'Mobile developer — React Native iOS & Android media app',
    summary:
      'Free, ad-free media app with music, films, e-books, and daily practice guidance.',
    description:
      'Built the Bruno Gröning lifestyle app for iOS & Android: a free, ad-free guide to the practice of Einstellen according to Bruno Gröning’s teaching. Shipped a curated media library—choir/orchestra music, documentaries, interviews, testimonials, audio books, lectures, and readable e-books—plus favorites, audio/video playlists, landscape e-book mode, and Infocenter. No registration, no IAPs; published on App Store & Google Play.',
    skills: ['React Native', 'Mobile App Development', 'iOS', 'Android', 'Media Streaming'],
    links: [
      { label: 'Website', href: 'https://bruno-groening.org/' },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/bruno-gr%C3%B6ning/id6757975222',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=org.bruno.groening',
      },
    ],
    cover: '/portfolio/bruno-groening/01-hero-bruno-groening.png',
    images: [
      '/portfolio/bruno-groening/01-hero-bruno-groening.png',
      '/portfolio/bruno-groening/02-features-bruno-groening.png',
      '/portfolio/bruno-groening/03-website-bruno-groening.png',
      '/portfolio/bruno-groening/04-deliverables-bruno-groening.png',
      '/portfolio/bruno-groening/05-appstore-listing.png',
      '/portfolio/bruno-groening/06-playstore-listing.png',
    ],
    featured: true,
    category: 'Mobile',
  },
  {
    slug: 'viib',
    title: 'Viib — AI Brand & Ads Platform',
    shortTitle: 'Viib',
    role: 'Application developer — AI SaaS dashboards & brand workflows',
    summary:
      'AI-driven platform for managing brand profiles, generating ads, and tracking creative output.',
    description:
      'Contributed to Viib, an AI brand and advertising platform for managing brand profiles and generating Meta ads at scale. The product includes project dashboards, brand asset management, landing-page tooling, templates, credit usage tracking, and admin workflows—helping media buyers and creative teams produce and organize AI-generated image and animated creatives.',
    skills: ['AI Integration', 'SaaS Dashboards', 'React', 'Brand Workflows', 'Ad Tech'],
    links: [],
    cover: '/portfolio/viib/01.png',
    images: [
      '/portfolio/viib/01.png',
      '/portfolio/viib/02.png',
      '/portfolio/viib/03.png',
      '/portfolio/viib/04.png',
    ],
    category: 'AI',
  },
  {
    slug: 'stewardsmission',
    title: "Steward's Mission — Financial Intelligence Site",
    shortTitle: "Steward's Mission",
    role: 'Application lead — community technology & program site',
    summary:
      'Nonprofit website and program experience for financial intelligence workshops and outreach.',
    description:
      "Led application and web delivery for Steward’s Mission, a 501(c)(3) financial intelligence program. The site presents the mission, stewardship cohorts, impact, curriculum, and donation pathways—designed so community participants can move from education to action. Deployed finance application tools into workshops and outreach so participants could start using software immediately, aligning product updates with real program needs.",
    skills: ['Web Development', 'Program UX', 'FinTech Content', 'Community Tech', 'Stakeholder Delivery'],
    links: [],
    cover: '/portfolio/stewardsmission/01.png',
    images: [
      '/portfolio/stewardsmission/01.png',
      '/portfolio/stewardsmission/02.png',
      '/portfolio/stewardsmission/03.png',
    ],
    category: 'Web',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export const site = {
  name: 'Timothy Griggs',
  title: 'Full Stack Developer',
  location: 'Beaumont, CA',
  address: '133 Cascade Creek, Beaumont, CA 92223, United States',
  phone: '+1 9517518376',
  phoneHref: 'tel:+19517518376',
  tagline: 'Helping people and businesses ship practical software — mobile, web, and AI.',
  intro:
    'I build and ship practical software for real users—web applications, mobile apps, internal tools, and AI-powered products. I lead full-stack design and delivery from requirements through release.',
  aboutLead:
    "Hi, I'm Timothy Griggs. I help people and organizations turn real needs into working software.",
  aboutBody: [
    'As a full stack developer, I focus on shipping practical products people can use the same day—mobile apps, SaaS platforms, web tools, and AI experiences.',
    'I own the delivery cycle: scope features, coordinate teammates across UI, backend, and QA, and ship production updates with clear UX and reliable milestones.',
    'Based in Beaumont, CA. Available for full stack development engagements—hourly or fixed-price milestones.',
  ],
  experience: [
    {
      title: 'Full Stack Developer / Founder',
      org: 'TGS Financial System · Los Angeles / Beaumont, CA',
      dates: 'Present',
      points: [
        'Designed and delivered full-stack product features for budgeting tools, habit tracking, and guided financial workflows.',
        'Built user-facing flows and supporting backend/API work for accounts, tools, and content experiences.',
        'Owned delivery: scope, backlog, build review, and production releases.',
      ],
    },
    {
      title: 'Technology Lead — Community Programs',
      org: "Steward's Mission · Los Angeles, CA",
      dates: 'Ongoing',
      points: [
        'Deployed finance tools into workshops so participants could start using software immediately.',
        'Gathered requirements from users facing budgeting, irregular income, and credit literacy challenges.',
        'Aligned product, content, and outreach so updates matched program needs.',
      ],
    },
    {
      title: 'Principal — Software Delivery',
      org: 'Griggs Mutual Holdings, LLC',
      dates: 'Ongoing',
      points: [
        'Directed full-stack development workstreams with contractors and specialists.',
        'Defined scopes, milestones, and acceptance criteria for predictable releases.',
      ],
    },
  ],
  skills: [
    {
      label: 'Frontend',
      items: 'Angular, React, Vue.js, TypeScript, JavaScript, HTML/CSS, responsive UI, dashboards',
    },
    {
      label: 'Backend & Mobile',
      items: 'Node.js, Java Spring, REST APIs, React Native, Expo, iOS & Android',
    },
    {
      label: 'Data & Logic',
      items: 'SQL / PostgreSQL, MongoDB, data models, business rules, integrations',
    },
    {
      label: 'Domains',
      items: 'FinTech, mobile apps, AI products, community-facing technology',
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/timothy-griggs-81352b94',
  },
}
