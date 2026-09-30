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
    role:
      'Led cross-platform product engineering for a dual-sided hiring marketplace—employer and worker apps on iOS, Android, and Windows, including onboarding, booking, messaging, and payment-ready flows.',
    summary:
      'Cross-platform hiring marketplace connecting employers and workers—post jobs, book talent, message, and hire directly.',
    description:
      'Built TempConnect for iOS, Android, and Windows—a direct hiring marketplace that connects employers and job seekers without traditional staffing-agency overhead. Delivered dual experiences (“I Want to Hire” / “I Want to Work”), job posting and proposals, map-based locations, messaging, background-check and payment flows, and employer/worker dashboards so businesses can post openings and book available talent while workers apply, manage availability, and get hired. Live at tempconnect.app with App Store, Google Play, and Microsoft Store listings.',
    skills: [
      'React Native (iOS, Android, Windows)',
      'Dual-sided marketplace UX',
      'Job posting & proposals',
      'Realtime messaging',
      'Maps & location booking',
      'Background-check & payment flows',
      'App Store / Play / Microsoft Store release',
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
    role:
      'Owned mobile product delivery for a marketplace dropshipping platform—store connect/takeover flows, catalog listing, pay-as-you-sell inventory, and live revenue insights on iOS and Android.',
    summary:
      'Dropshipping app to sell on Amazon & Walmart with pay-as-you-sell, managed fulfillment, and live store insights.',
    description:
      'Built Why Unified® Platform for iOS and Android—a dropshipping app that helps entrepreneurs launch and scale marketplace stores on Amazon® and Walmart®. Delivered connect-or-takeover store flows, access to trusted household brands, pay-as-you-sell inventory (no large upfront stock), real-time order/revenue insights, and in-app support—while the platform handles fulfillment, shipping, and returns so stores can run on auto-pilot. Workflow: Connect store → Access products → List & price → Orders → Fulfillment → Track growth. Live at whyunified.com with App Store and Google Play listings.',
    skills: [
      'React Native commerce apps',
      'Amazon & Walmart marketplace flows',
      'Store connect / takeover UX',
      'Pay-as-you-sell inventory model',
      'Order & revenue analytics',
      'Managed fulfillment handoff',
      'App Store & Google Play shipping',
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
    role:
      'Full-stack owner for a real-estate production CRM—Angular client, Node APIs, lead routing, pipeline automation, and multi-channel outreach (dialer, SMS, email, video).',
    summary:
      'Real estate team production CRM: lead routing, pipelines, automations, dialer, SMS, and team workflows.',
    description:
      'Built crmgrow end-to-end with Angular and Node.js—a real estate team production platform for converting leads into clients. Delivered lead capture and routing, pipeline and deals management, tasks, contacts, calendars, landing pages and lead forms, behavior-based automations, materials library, multi-channel outreach (power dialer, SMS, email, video), and team/community sharing so leaders can scale follow-up and agent productivity. Workflow: Capture → Route → Automate follow-up → Pipeline → Appointments → Convert & track.',
    skills: [
      'Angular SPA architecture',
      'Node.js REST APIs',
      'Lead capture & smart routing',
      'Pipeline & deals management',
      'Behavior-based automations',
      'Power dialer, SMS, email, video',
      'Team calendars & landing forms',
    ],
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
    role:
      'Built the AI creative mobile product end-to-end—React Native sketch-to-art generation, social feed, freemium IAP, and a conversion-focused marketing site.',
    summary:
      'React Native iOS app that turns doodles into AI art in seconds, plus a social feed and marketing site.',
    description:
      'Built Doodlez AI Art: a React Native (Expo) iOS app that turns simple doodles into scroll-stopping AI art in under 15 seconds, plus the marketing site at doodlez.co. Users sketch anything, pick from 50+ artist-inspired styles, generate variations, then post to a TikTok-style community feed—like, comment, follow, and remix trending looks. Shipped App Store listing, freemium IAP, sketch-faithful AI generation, and a conversion-focused download landing page.',
    skills: [
      'React Native + Expo',
      'Sketch-to-AI generation pipeline',
      '50+ style engines & variations',
      'Social feed (like, follow, remix)',
      'Freemium IAP monetization',
      'Node API for generation jobs',
      'App Store + landing-page funnel',
    ],
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
    role:
      'Designed and shipped an NFC-triggered Focus Mode product for families—React Native on iOS/Android with Screen Time and Accessibility-based app blocking.',
    summary:
      'One-tap NFC Focus Mode for families—block distractions and stay present at dinner, study, and bedtime.',
    description:
      'Built TigerGenie end-to-end: a React Native (Expo) iOS & Android app that starts Focus Mode with one tap of an NFC keychain—helping families pause distracting apps and stay present. Shipped customizable app/category blocking (Screen Time Family Controls on iOS; AccessibilityService on Android), timed unlocks, focus progress tracking, and a no-subscription core experience. Also delivered store listings plus the tigergenie.com marketing site.',
    skills: [
      'React Native + Expo',
      'NFC one-tap Focus Mode',
      'iOS Screen Time Family Controls',
      'Android AccessibilityService blocking',
      'Timed unlocks & progress tracking',
      'Family-focused UX',
      'Store listings + marketing site',
    ],
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
    role:
      'Full-stack engineer for an enterprise restoration platform—Vue SPA, Java Spring services, and two-way QuickBooks Online sync from first call to final payment.',
    summary:
      'Enterprise SaaS for disaster restoration contractors with CRM, billing, and two-way QuickBooks sync.',
    description:
      'Built Blade, a full-stack SaaS platform for disaster restoration contractors—unifying CRM, dispatch, field documentation, estimating, billing, and financial reporting in one system. Delivered a Vue.js SPA on a Java Spring backend with real-time two-way QuickBooks Online sync, plus integrations with Xactimate/XactAnalysis and partner billing tools. Focus: eliminate duplicate data entry from first call to final payment, with SOC 2–ready enterprise workflows and AI-assisted job documentation.',
    skills: [
      'Vue.js SPA',
      'Java Spring services',
      'Two-way QuickBooks Online sync',
      'CRM + dispatch workflows',
      'Estimating & billing modules',
      'Xactimate / XactAnalysis integrations',
      'Enterprise SaaS architecture',
    ],
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
    role:
      'Shipped a chess training product end-to-end—React Native gameplay for 40,000+ grandmaster games, timed challenges, accuracy feedback, and a download landing page.',
    summary:
      'Train by guessing grandmaster moves from 40,000+ legendary games on iOS and Android.',
    description:
      'Built Guess Chess (Guess the Move) end-to-end: a React Native (Expo) iOS & Android app plus the marketing site at guessthemove.app. Players train by guessing grandmaster moves from 40,000+ legendary games—pick legends like Carlsen or Fischer, race timed challenges, solve puzzles, and get real-time accuracy feedback with progress stats. Shipped App Store & Google Play listings, dark-themed gameplay UI, and a conversion-focused download landing page.',
    skills: [
      'React Native gameplay UI',
      '40,000+ game training corpus',
      'Timed challenges & puzzles',
      'Realtime accuracy feedback',
      'Progress & stats tracking',
      'Dark-theme product design',
      'iOS/Android + conversion site',
    ],
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
    role:
      'Delivered a free, ad-free media lifestyle app—React Native library for music, films, e-books, playlists, and Infocenter with no registration or IAP friction.',
    summary:
      'Free, ad-free media app with music, films, e-books, and daily practice guidance.',
    description:
      'Built the Bruno Gröning lifestyle app for iOS & Android: a free, ad-free guide to the practice of Einstellen according to Bruno Gröning’s teaching. Shipped a curated media library—choir/orchestra music, documentaries, interviews, testimonials, audio books, lectures, and readable e-books—plus favorites, audio/video playlists, landscape e-book mode, and Infocenter. No registration, no IAPs; published on App Store & Google Play.',
    skills: [
      'React Native media players',
      'Audio / video playlists',
      'E-book reader (landscape mode)',
      'Favorites & Infocenter',
      'Offline-friendly media UX',
      'Ad-free / no-IAP product model',
      'App Store & Google Play release',
    ],
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
    role:
      'Contributed application features for an AI brand/ads SaaS—project dashboards, brand assets, creative generation workflows, credit tracking, and admin tooling.',
    summary:
      'AI-driven platform for managing brand profiles, generating ads, and tracking creative output.',
    description:
      'Contributed to Viib, an AI brand and advertising platform for managing brand profiles and generating Meta ads at scale. The product includes project dashboards, brand asset management, landing-page tooling, templates, credit usage tracking, and admin workflows—helping media buyers and creative teams produce and organize AI-generated image and animated creatives.',
    skills: [
      'React SaaS dashboards',
      'AI creative generation UX',
      'Brand profile & asset management',
      'Meta ad workflow tooling',
      'Templates & landing-page tools',
      'Credit usage & admin panels',
      'Ad-tech product delivery',
    ],
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
    role:
      'Led application and web delivery for a nonprofit financial-intelligence program—mission site, cohort journeys, curriculum, donations, and workshop software rollout.',
    summary:
      'Nonprofit website and program experience for financial intelligence workshops and outreach.',
    description:
      "Led application and web delivery for Steward’s Mission, a 501(c)(3) financial intelligence program. The site presents the mission, stewardship cohorts, impact, curriculum, and donation pathways—designed so community participants can move from education to action. Deployed finance application tools into workshops and outreach so participants could start using software immediately, aligning product updates with real program needs.",
    skills: [
      'Program website UX',
      'Cohort & curriculum storytelling',
      'Donation pathway design',
      'FinTech workshop tooling',
      'Stakeholder requirement gathering',
      'Community-facing delivery',
      'Content-to-product alignment',
    ],
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
  introPitch: [
    'Founders, operators, and organizations hire me when they need more than a prototype—they need a product people can use.',
    'I take ownership from discovery through release: clarify the problem, design the experience, build the full stack, and ship with clear milestones so progress stays visible.',
    'Whether you need a mobile app, a SaaS platform, an AI-assisted workflow, or a FinTech tool, I focus on practical delivery that earns trust from users and stakeholders.',
  ],
  engagementPoints: [
    {
      label: 'Clear scope first',
      text: 'We define outcomes, users, and constraints before build so the work stays focused.',
    },
    {
      label: 'End-to-end ownership',
      text: 'UI, APIs, data, and release—one accountable partner instead of fragmented handoffs.',
    },
    {
      label: 'Flexible engagements',
      text: 'Hourly collaboration or fixed-price milestones, chosen to fit your risk and timeline.',
    },
  ],
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
      id: 'react-native',
      label: 'React Native',
      summary:
        'Cross-platform mobile delivery for iOS, Android, and Windows—marketplaces, media libraries, AI features, and store-ready release.',
      focus: [
        'Expo & bare workflows',
        'Multi-store publishing',
        'IAP & NFC',
        'Maps & messaging',
        'Dual-sided product UX',
      ],
    },
    {
      id: 'react',
      label: 'React.js',
      summary:
        'Product-grade SPAs and hybrid web apps—dashboards, auth flows, realtime chat, and AI-facing interfaces in TypeScript.',
      focus: [
        'Component architecture',
        'Data-heavy UIs',
        'Auth & session flows',
        'Realtime interfaces',
      ],
    },
    {
      id: 'vue-spring',
      label: 'Vue.js & Java Spring',
      summary:
        'Enterprise frontends on Spring services—billing platforms, CRM operations, and field workflows with reliable API contracts.',
      focus: [
        'Vue SPA systems',
        'Spring REST services',
        'Billing integrations',
        'Operational dashboards',
      ],
    },
    {
      id: 'native',
      label: 'Native iOS & Android',
      summary:
        'Swift and Java applications where platform depth matters—location, media, utilities, and store distribution on both sides.',
      focus: [
        'Swift / UIKit',
        'Java Android',
        'Platform APIs',
        'Store release ownership',
      ],
    },
    {
      id: 'unity',
      label: 'Unity 3D',
      summary:
        'Game client engineering—gameplay systems, packaging, and App Store delivery for interactive entertainment products.',
      focus: ['Gameplay systems', 'iOS packaging', 'Store submission'],
    },
    {
      id: 'macos',
      label: 'macOS',
      summary:
        'Desktop application work on Mac—focused utilities and assistive input experiences beyond the browser.',
      focus: ['macOS app engineering', 'Desktop UX'],
    },
    {
      id: 'shopify',
      label: 'Shopify',
      summary:
        'Custom commerce storefronts—theme systems, catalog presentation, and conversion-minded checkout experiences.',
      focus: ['Theme systems', 'Merchandising UX', 'Checkout optimization'],
    },
    {
      id: 'wordpress',
      label: 'WordPress & WooCommerce',
      summary:
        'High-volume CMS and commerce delivery—Elementor builds, WooCommerce stores, analytics wiring, and specialty integrations.',
      focus: [
        'WooCommerce',
        'Elementor / Slider Revolution',
        'WPEngine & Flywheel',
        'GA / GTM / HubSpot',
      ],
    },
    {
      id: 'visual-cms',
      label: 'Webflow, Ghost, Wix & Framer',
      summary:
        'Visual CMS and marketing platforms—scroll-driven storytelling, publishing brands, and polished portfolio sites.',
      focus: [
        'Webflow interactions',
        'Ghost CMS',
        'Wix Studio',
        'Framer',
        'Squarespace',
      ],
    },
    {
      id: 'growth-platforms',
      label: 'Base44, Lovable, GHL & ClickFunnels',
      summary:
        'Rapid product and growth tooling—app scaffolds, CRM workspaces, and conversion funnels when speed to market matters.',
      focus: ['Base44', 'Lovable', 'GoHighLevel', 'ClickFunnels'],
    },
    {
      id: 'ai-ml',
      label: 'AI & Machine Learning',
      summary:
        'Applied AI in real products—object detection, speech-to-text, and generative creative flows wired into usable interfaces.',
      focus: [
        'Object detection',
        'Speech-to-text',
        'Generative UX',
        'Product integration',
      ],
    },
    {
      id: 'systems',
      label: 'Systems & Specialized Engineering',
      summary:
        'Bluetooth peripherals, geospatial data, blockchain UIs, trading charts, healthcare sites, Next.js apps, and scroll-driven 3D web.',
      focus: [
        'Bluetooth',
        'Geospatial maps',
        'Blockchain frontends',
        'Trading charts',
        'Next.js',
        '3D scroll animation',
      ],
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/timothy-griggs-81352b94',
  },
}
