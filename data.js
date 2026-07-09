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
     championship   — results page header stats + standings
     raceResults    — results page results table (season 2025)
     calendar       — calendar page next-race hero + race grid (2026 season)
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
    tagline: '#74 · EMX250 · Sweden'
  },

  contact: {
    email: 'management@frederiksracing.com',
    phone: '+46 70 123 45 67',
    location: 'Gothenburg, Sweden'
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

  /* Top 3 most recent races shown on the home page. `round` refers
     to the round number in raceResults. */
  homeHighlights: [
    {
      round: 8,
      resultClass: 'hp-result-1',
      posLabel: 'P1',
      imageSeed: 'mxrace-uk',
      metaLine: 'Round 8 &nbsp;·&nbsp; Matterley Basin, UK &nbsp;·&nbsp; Aug 16',
      title: 'MATTERLEY BASIN EMX250',
      summary: 'A dominant wire-to-wire win in wet, technical conditions. Stampe led from gate to flag and extended his championship lead to 24 points.'
    },
    {
      round: 7,
      resultClass: 'hp-result-2',
      posLabel: 'P2',
      imageSeed: 'mxrace-cz',
      metaLine: 'Round 7 &nbsp;·&nbsp; Loket, Czech Republic &nbsp;·&nbsp; Jul 26',
      title: 'LOKET EMX250 ROUND',
      summary: 'Strong runner-up finish on a sandy track after a mid-race charge from P5. Consistent points scoring keeps the championship lead intact.'
    },
    {
      round: 6,
      resultClass: 'hp-result-3',
      posLabel: 'P3',
      imageSeed: 'mxrace-it',
      metaLine: 'Round 6 &nbsp;·&nbsp; Ottobiano, Italy &nbsp;·&nbsp; Jul 5',
      title: 'OTTOBIANO EMX250 ROUND',
      summary: 'Third in challenging hard-pack conditions after qualifying fastest. A calculated race management secured vital championship points.'
    }
  ],

  carouselLogos: ['FOX RACING', 'KTM', 'RED BULL', 'ALPINESTARS', 'ACERBIS', 'DUNLOP', 'ÖHLINS', 'MXGP'],

  championship: {
    seasonLabel: 'EMX250 Championship Standings 2025',
    position: 'P1',
    points: 187,
    wins: 8,
    roundsCompleted: 8,
    totalRounds: 9,
    pointsLead: 12,
    standings: [
      { pos: 1, name: 'Frederik Rahn Stampe', points: 187, barPct: 100, cls: 'p1' },
      { pos: 2, name: 'Luca Rossi', points: 175, barPct: 91, cls: 'p2' },
      { pos: 3, name: 'Tom Jacobs', points: 158, barPct: 83, cls: 'p3' },
      { pos: 4, name: 'Mikkel Hansen', points: 135, barPct: 72, cls: 'p4' }
    ]
  },

  /* Results table on the Results page — season 2025. */
  raceResults: [
    { round: '01', track: 'Västerås SX', flag: '🇸🇪', country: 'Sweden', date: 'Mar 15', pos: 3, points: 16 },
    { round: '02', track: 'Genk MX', flag: '🇧🇪', country: 'Belgium', date: 'Apr 5', pos: 1, points: 25 },
    { round: '03', track: 'Valkenswaard', flag: '🇳🇱', country: 'Netherlands', date: 'Apr 26', pos: 2, points: 22 },
    { round: '04', track: 'Ernée', flag: '🇫🇷', country: 'France', date: 'May 17', pos: 1, points: 25 },
    { round: '05', track: 'Teutschenthal', flag: '🇩🇪', country: 'Germany', date: 'Jun 7', pos: 4, points: 13 },
    { round: '06', track: 'Ottobiano', flag: '🇮🇹', country: 'Italy', date: 'Jun 28', pos: 3, points: 16 },
    { round: '07', track: 'Loket', flag: '🇨🇿', country: 'Czech Republic', date: 'Jul 19', pos: 2, points: 22 },
    { round: '08', track: 'Matterley Basin', flag: '🇬🇧', country: 'United Kingdom', date: 'Aug 9', pos: 1, points: 25 },
    { round: '09', track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', date: 'Sep 6', pos: null, points: null, upcoming: true }
  ],

  /* Calendar page — 2026 season. Note: this currently carries a
     different set of dates than raceResults (2025 season) — that
     mismatch predates this refactor; flagging here rather than
     silently reconciling it. */
  calendar: {
    nextRace: {
      venue: 'UDDEVALLA',
      country: '🇸🇪 Sweden',
      roundLabel: 'Round 9 of 9',
      dateLabel: 'September 6, 2026',
      badges: ['Season Finale', 'Home Race'],
      note: 'Uddevalla MX Park — Championship decider',
      countdownTarget: '2026-09-06T09:00:00'
    },
    races: [
      { round: 1, venue: 'Västerås', country: '🇸🇪 Sweden', dateLabel: 'March 22, 2026', status: 'completed', pos: 'P3', points: 16, win: false },
      { round: 2, venue: 'Genk MX', country: '🇧🇪 Belgium', dateLabel: 'April 12, 2026', status: 'completed', pos: 'P1', points: 25, win: true },
      { round: 3, venue: 'Valkenswaard', country: '🇳🇱 Netherlands', dateLabel: 'May 3, 2026', status: 'completed', pos: 'P2', points: 22, win: false },
      { round: 4, venue: 'Ernée', country: '🇫🇷 France', dateLabel: 'May 24, 2026', status: 'completed', pos: 'P1', points: 25, win: true },
      { round: 5, venue: 'Teutschenthal', country: '🇩🇪 Germany', dateLabel: 'June 14, 2026', status: 'completed', pos: 'P4', points: 13, win: false },
      { round: 6, venue: 'Ottobiano', country: '🇮🇹 Italy', dateLabel: 'July 5, 2026', status: 'completed', pos: 'P3', points: 16, win: false },
      { round: 7, venue: 'Loket', country: '🇨🇿 Czech Republic', dateLabel: 'July 26, 2026', status: 'completed', pos: 'P2', points: 22, win: false },
      { round: 8, venue: 'Matterley Basin', country: '🇬🇧 United Kingdom', dateLabel: 'August 16, 2026', status: 'completed', pos: 'P1', points: 25, win: true },
      { round: 9, venue: 'Uddevalla', country: '🇸🇪 Sweden', dateLabel: 'September 6, 2026', status: 'next', pos: null, points: null, win: false }
    ]
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

  /* Sponsorship packages. NOTE: the sponsor-value page and the
     contact page have always shown their own independent wording
     for tier names and feature bullets (e.g. "Support Partner" vs
     "Associate") — that predates this refactor. Both lists are
     centralized here so pricing/tiers only need updating in one
     file, but the two are still separate arrays since their copy
     genuinely differs. */
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
        tier: 'Associate', price: 'From €3,000', priceSuffix: 'per season',
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
        tier: 'Official Partner', price: 'From €8,000', priceSuffix: 'per season',
        featured: true, badge: 'Most Popular', ctaLabel: 'Get Started', ctaStyle: 'primary',
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
        tier: 'Title Sponsor', price: 'From €20,000', priceSuffix: 'per season',
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
