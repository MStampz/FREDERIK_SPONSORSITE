/* ============================================================
   FREDERIK RAHN STAMPE #74 — SITE CONTENT DATA
   ============================================================
   Edit this file to update site content. No build step, no
   database — just edit values/arrays here and refresh the page.

   Sections:
     site           — rider identity used in nav/footers
     contact        — email/phone/location used in footers & contact page
     seasonMetrics  — home page season counters
     homeHighlights — home page "Race Highlights" cards (top 3)
     carouselLogos  — home page scrolling sponsor logo strip
     raceResults    — the season's races: single source of truth used
                      by both the Results page table (completed races
                      only) and the Calendar page's race grid /
                      next-race hero
     calendar       — calendar page next-race extras (badges, note,
                      countdown target) — venue/date/etc. are derived
                      from raceResults so the two pages can't drift
     media          — media page stats + gallery items
     sponsors       — sponsors page title/official/supporting partners
     packages       — sponsorship packages (separate lists for the
                      sponsor-value page's detailed cards and the
                      contact page's simpler cards — see note below)
     dashboard      — dashboard page sidebar metrics/chart/tables
   ============================================================ */

const SITE_DATA = {

  site: {
    name: 'FREDERIK RAHN STAMPE',
    tagline: '#215 · MX2 · Denmark'
  },

  contact: {
    email: 'info@frederikstampe.com',
    phone: '+61 472 625 887',
    location: 'Melbourne, Australia'
  },

  seasonMetrics: {
    races: 9,
    podiums: 17,
    wins: 8,
    socialReach: '45',
    socialReachSuffix: 'K',
    videoViews: '280',
    videoViewsSuffix: 'K'
  },

  /* Top 3 races featured on the home page (best recent results,
     not strictly the latest). `round` refers to the round number in
     raceResults. */
  homeHighlights: [
    {
      round: 8,
      resultClass: 'hp-result-3',
      posLabel: 'P3',
      imageSeed: 'mxrace-vic-aug',
      metaLine: 'Round 8 &nbsp;·&nbsp; Victoria, Australia &nbsp;·&nbsp; Aug 19',
      title: 'VICTORIAN CHAMPIONSHIP MX3',
      summary: 'Third in MX3 and second in the championship, despite a technical issue and a Sunday crash that left him with sprained fingers. He borrowed a trailer just to get there.'
    },
    {
      round: 7,
      resultClass: 'hp-result-2',
      posLabel: 'P2',
      imageSeed: 'mxrace-vic-jul',
      metaLine: 'Round 7 &nbsp;·&nbsp; Victoria, Australia &nbsp;·&nbsp; Jul 3',
      title: 'VICTORIAN TITLES',
      summary: 'Second in MX2 on Sunday after third in MX3 on Saturday, racing two classes across one weekend.'
    },
    {
      round: 3,
      resultClass: 'hp-result-1',
      posLabel: '1-1',
      imageSeed: 'mxrace-sandmasters',
      metaLine: 'Round 3 &nbsp;·&nbsp; Victoria, Australia &nbsp;·&nbsp; May 3',
      title: 'SANDMASTERS',
      summary: 'Fastest in every session and winner of the first two motos, before a technical issue ended his day.'
    }
  ],

  carouselLogos: ['FOX RACING', 'KTM', 'RED BULL', 'ALPINESTARS', 'ACERBIS', 'DUNLOP', 'ÖHLINS', 'MXGP'],

  /* The season's races — season 2026, racing in Australia. All
     rounds complete. Feeds both the Results page table (completed
     races only: date, championship, pos) and the Calendar page's race
     grid + next-race hero (full date, "Round N" label, win badge
     derived from pos === 1). Add a new round here and both pages
     update together.

     `pos`    — overall finishing position, or null when there is no
                overall result (DNF/DNS, or only moto results known).
     `points` — championship points, or null when not known.
     `result` — optional short text shown next to/instead of `pos`,
                e.g. moto scores '3-2-2' or 'DNS'.
     Mark the next race with `upcoming: true` once the 2027 calendar
     is known; with none marked, the Calendar page shows a "season
     complete" message instead of the countdown. */
  raceResults: [
    { round: 1, track: 'Victorian State Titles', flag: '🇦🇺', country: 'Australia', shortDate: 'Apr', fullDate: 'April 2026', championship: 'Victorian State Titles', pos: null, points: null, result: 'MX3 6-4-5 · MX2 7-6-5' },
    { round: 2, track: 'Canberra', flag: '🇦🇺', country: 'Australia', shortDate: 'Apr', fullDate: 'April 2026', championship: 'ProMX MX2', pos: null, points: null, result: '27-25' },
    { round: 3, track: 'Sandmasters', flag: '🇦🇺', country: 'Australia', shortDate: 'May 3', fullDate: 'May 3, 2026', championship: 'Sandmasters', pos: null, points: null, result: '1-1-DNF-DNS' },
    { round: 4, track: 'Gillman', flag: '🇦🇺', country: 'Australia', shortDate: 'May 12', fullDate: 'May 12, 2026', championship: 'ProMX MX2', pos: null, points: null, result: '11-17' },
    { round: 5, track: 'Victorian State Championship', flag: '🇦🇺', country: 'Australia', shortDate: 'May 16', fullDate: 'May 16, 2026', championship: 'Victorian State Championship', pos: 2, points: null, result: '3-2-2' },
    { round: 6, track: 'Appin', flag: '🇦🇺', country: 'Australia', shortDate: 'Jun 13', fullDate: 'June 13, 2026', championship: 'ProMX MX2', pos: null, points: null, result: 'Raced' },
    { round: 7, track: 'Victorian Titles', flag: '🇦🇺', country: 'Australia', shortDate: 'Jul 3', fullDate: 'July 3, 2026', championship: 'Victorian Titles MX2', pos: 2, points: null, result: 'MX3 P3' },
    { round: 8, track: 'Victorian Championship', flag: '🇦🇺', country: 'Australia', shortDate: 'Aug 19', fullDate: 'August 19, 2026', championship: 'Victorian Championship MX3', pos: 3, points: null, result: 'P2 in championship' },
    { round: 9, track: 'Darwin', flag: '🇦🇺', country: 'Australia', shortDate: 'Sep 21', fullDate: 'September 21, 2026', championship: 'MXGP of Australia', pos: null, points: null, result: 'DNS' }
  ],

  /* Extra display info for the next race that isn't part of the
     raceResults record itself (venue/date/round come from the
     raceResults entry with upcoming: true). `seasonComplete` is
     shown instead when no race is marked upcoming. */
  calendar: {
    nextRace: {
      badges: [],
      note: '',
      countdownTarget: null
    },
    seasonComplete: {
      title: 'SEASON COMPLETE',
      meta: '2026 season · 9 races in Australia',
      note: '2027 plans coming soon',
      contactVenue: '2026 season complete',
      contactDate: '2027 calendar coming soon'
    }
  },

  media: {
    stats: { photos: '120+', videos: 18, pressFeatures: 8 },
    gallery: [
      { seed: 'mx1', size: 'large', label: 'Race Day — Genk MX' },
      { seed: 'mx2', size: 'normal', label: 'Training Session' },
      { seed: 'mx3', size: 'normal', label: 'Podium Celebration' },
      { seed: 'mx4', size: 'normal', label: 'Pit Lane Prep' },
      { seed: 'mx5', size: 'large', label: 'Matterley Basin — Round 8 Win' },
      { seed: 'mx6', size: 'normal', label: 'Swedish Landscape' },
      { seed: 'mx7', size: 'normal', label: 'Behind the Helmet' },
      { seed: 'mx8', size: 'normal', label: 'Championship Leader' },
      { seed: 'mx9', size: 'large', label: 'Start Gate — Ernée France' },
      { seed: 'mx10', size: 'normal', label: 'Whoops Section' },
      { seed: 'mx11', size: 'normal', label: 'Bike Setup' },
      { seed: 'mx12', size: 'normal', label: 'Season Finale Preview' }
    ]
  },

  sponsors: {
    title: {
      name: 'FOX RACING',
      tagline: 'Title Partner · Season 2025',
      desc: 'Fox Racing provides full gear integration — helmet, jersey, pants, boots and gloves. As our title partner, Fox branding appears on all race equipment, team media, and across all social channels.',
      badges: ['Title Partner', 'Full Gear Supplier', 'Digital Partner'],
      initial: 'F'
    },
    official: [
      { icon: '🏍️', name: 'KTM', type: 'Bike Manufacturer', desc: 'Official KTM 250 SX-F factory support, technical assistance, and bike supply throughout the season.', badge: 'Factory Support' },
      { icon: '⚡', name: 'RED BULL', type: 'Energy & Lifestyle', desc: 'Energy drink partner providing athlete support, content collaboration, and Red Bull athlete network access.', badge: 'Content Partner' }
    ],
    supporting: [
      { icon: '🦁', name: 'ALPINESTARS', type: 'Protective Gear' },
      { icon: '🔷', name: 'ACERBIS', type: 'Plastics & Guards' },
      { icon: '⭕', name: 'DUNLOP', type: 'Tire Supplier' },
      { icon: '🔧', name: 'ÖHLINS', type: 'Suspension' }
    ]
  },

  /* Sponsorship packages. The sponsor-value page (detailed, with a
     included/excluded feature matrix) and the contact page (simple,
     included-features-only) show the same three tiers with
     different levels of detail — tier/badge names below are shared
     so the two pages can't drift out of sync again; feature bullet
     wording is still page-specific by design (long-form vs short). */
  packages: {
    sponsorValue: [
      {
        tier: 'Support Partner', price: '€3,000', priceSuffix: '/season',
        intro: 'A solid entry point for brands looking to associate with grassroots European motocross and reach the action sports demographic.',
        featured: false, ctaLabel: 'Get Started', ctaStyle: 'outline',
        features: [
          { text: 'Jersey logo — arm / back placement', included: true },
          { text: 'Website — sponsors section', included: true },
          { text: '1× dedicated social post / month', included: true },
          { text: 'Race-day story mentions', included: true },
          { text: 'Quarterly analytics report', included: true },
          { text: 'Season media pack (digital)', included: true },
          { text: 'Helmet branding', included: false },
          { text: 'Bike plastics', included: false },
          { text: 'Paddock branding', included: false },
          { text: 'Brand integration content', included: false }
        ]
      },
      {
        tier: 'Major Partner', price: '€8,000', priceSuffix: '/season',
        intro: 'Maximum visibility across both physical race events and digital content — the optimal balance of reach and value.',
        featured: true, badge: 'Recommended', ctaLabel: 'Partner With Us', ctaStyle: 'primary',
        features: [
          { text: 'Jersey logo — chest placement', included: true },
          { text: 'Bike plastics — side panel branding', included: true },
          { text: 'Race paddock — banner presence', included: true },
          { text: '2× dedicated social posts / month', included: true },
          { text: 'Website — featured partners section', included: true },
          { text: 'Monthly analytics report', included: true },
          { text: 'Full season media pack (hi-res)', included: true },
          { text: '2× brand integration videos / season', included: true },
          { text: 'Helmet branding', included: false },
          { text: 'Transport vehicle wrap', included: false }
        ]
      },
      {
        tier: 'Title Partner', price: '€20,000', priceSuffix: '/season',
        intro: "Full-brand integration as the primary partner. Your name alongside the athlete on every surface, screen and podium step in Europe.",
        featured: false, ctaLabel: 'Enquire Now', ctaStyle: 'outline',
        features: [
          { text: 'Helmet — full front &amp; rear branding', included: true },
          { text: 'Jersey — chest logo (largest position)', included: true },
          { text: 'Bike plastics — full panel coverage', included: true },
          { text: 'Race transport — full vehicle wrap', included: true },
          { text: 'Paddock canopy — title branding', included: true },
          { text: '4× dedicated social posts / month', included: true },
          { text: 'Website — homepage feature placement', included: true },
          { text: 'Weekly analytics report', included: true },
          { text: 'Full content rights for all media', included: true },
          { text: '3× athlete appearances / year', included: true }
        ]
      }
    ],
    contact: [
      {
        tier: 'Support Partner', price: 'From €3,000', priceSuffix: 'per season',
        featured: false, ctaLabel: 'Enquire Now', ctaStyle: 'outline',
        features: [
          'Logo on race gear (gloves / goggles)',
          '2 social media mentions per month',
          'Race day photo content featuring your brand',
          'Website partner listing',
          'Monthly performance report',
          '1 season (9 rounds)'
        ]
      },
      {
        tier: 'Major Partner', price: 'From €8,000', priceSuffix: 'per season',
        featured: true, badge: 'Recommended', ctaLabel: 'Get Started', ctaStyle: 'primary',
        features: [
          'Featured logo placement on jersey &amp; helmet',
          '8 social media posts per month',
          'Full content package (photo + video)',
          'Featured website partner section',
          'Dedicated race-day activation space',
          'Monthly analytics dashboard access',
          'Branded content stories x4/month',
          'End-of-season report'
        ]
      },
      {
        tier: 'Title Partner', price: 'From €20,000', priceSuffix: 'per season',
        featured: false, ctaLabel: 'Talk to Management', ctaStyle: 'outline',
        features: [
          'Full branding integration across all assets',
          'Team name includes your brand',
          'Exclusive content creation programme',
          'Personal appearances &amp; brand events',
          'Unlimited social media content',
          'Premium analytics &amp; custom reports',
          'Bike graphics &amp; team livery',
          'First right of refusal for 2026'
        ]
      }
    ]
  },

  dashboard: {
    sidebarMetrics: [
      { label: 'Total Impressions', type: 'counter', value: 45200, change: '↑ +12% vs last month' },
      { label: 'Engagement Rate', type: 'static', value: '8.2', suffix: '%', change: '↑ +0.4% vs avg' },
      { label: 'Link Clicks', type: 'counter', value: 1340, change: '↑ +8% vs last month' },
      { label: 'Story Views', type: 'static', value: '12.8', suffix: 'K', change: '↑ +19% vs last month' },
      { label: 'Race Mentions', type: 'counter', value: 240, change: 'This season' }
    ],
    monthlyReach: [
      { month: 'Mar', value: '28K', heightPct: 52 },
      { month: 'Apr', value: '33K', heightPct: 62 },
      { month: 'May', value: '38K', heightPct: 72 },
      { month: 'Jun', value: '41K', heightPct: 78 },
      { month: 'Jul', value: '43K', heightPct: 82 },
      { month: 'Aug', value: '45K', heightPct: 100, highlight: true }
    ],
    platforms: [
      { icon: '📸', name: 'Instagram', followers: '12,400', reach: '18,200', engagement: '8.2%', growth: '+320 / mo', growthColor: 'success' },
      { icon: '🎵', name: 'TikTok', followers: '18,700', reach: '22,400', engagement: '11.4%', growth: '+890 / mo', growthColor: 'success' },
      { icon: '▶', name: 'YouTube', followers: '4,200', reach: '3,800', engagement: '5.1%', growth: '+140 / mo', growthColor: 'success' },
      { icon: '📘', name: 'Facebook', followers: '3,100', reach: '2,600', engagement: '3.2%', growth: '+45 / mo', growthColor: 'dim' }
    ],
    campaigns: [
      { name: 'Round 8 Race Coverage', impressions: '24,800', clicks: '640', ctr: '2.6%', status: 'Active', statusColor: 'green' },
      { name: 'Fox Racing Gear Feature', impressions: '18,200', clicks: '420', ctr: '2.3%', status: 'Active', statusColor: 'green' },
      { name: 'Championship Leader Story', impressions: '31,400', clicks: '890', ctr: '2.8%', status: 'Completed', statusColor: 'sand' }
    ]
  }

};
