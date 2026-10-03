/* ============================================================
   FREDERIK RAHN STAMPE — SITE CONTENT DATA
   ============================================================
   Edit this file to update site content. No build step, no
   database — just edit values/arrays here and refresh the page.

   Sections:
     site           — rider identity (name, race number, class,
                      country) used in the page title, nav, hero,
                      bio and footers
     contact        — email/phone/location used in footers & contact page
     seasonMetrics  — home page social counters (races, podiums and
                      wins are counted from raceResults instead)
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
    raceNumber: '215',
    raceClass: 'MX2',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    nationality: 'Danish'
  },

  contact: {
    email: 'info@frederikstampe.com',
    phone: '+61 472 625 887',
    location: 'Melbourne, Australia',
    locationFlag: '🇦🇺'
  },

  /* Race count, podiums and wins are not stored here: they are
     counted from raceResults so the home page can't disagree with
     the Results table. */
  seasonMetrics: {
    socialReach: '45',
    socialReachSuffix: 'K',
    videoViews: '280',
    videoViewsSuffix: 'K'
  },

  /* Race highlight cards shown on the home page. `round` refers to
     the round number in raceResults, which supplies the track,
     country, date and finishing position. */
  homeHighlights: [
    {
      round: 8,
      imageSeed: 'mxrace-uk',
      title: 'MATTERLEY BASIN EMX250',
      summary: 'A dominant wire-to-wire win in wet, technical conditions. Stampe led from gate to flag and extended his championship lead to 24 points.'
    },
    {
      round: 7,
      imageSeed: 'mxrace-cz',
      title: 'LOKET EMX250 ROUND',
      summary: 'Strong runner-up finish on a sandy track after a mid-race charge from P5. Consistent points scoring keeps the championship lead intact.'
    },
    {
      round: 6,
      imageSeed: 'mxrace-it',
      title: 'OTTOBIANO EMX250 ROUND',
      summary: 'Third in challenging hard-pack conditions after qualifying fastest. A calculated race management secured vital championship points.'
    }
  ],

  carouselLogos: ['FOX RACING', 'KTM', 'RED BULL', 'ALPINESTARS', 'ACERBIS', 'DUNLOP', 'ÖHLINS', 'MXGP'],

  /* The season's races — season 2025, 8 of 9 rounds complete.
     Feeds both the Results page table (completed races only: date,
     championship, pos) and the Calendar page's race grid + next-race
     hero (full date, "Round N" label, win badge derived from
     pos === 1). Add a new round here and both pages update together.

     `championship` — TODO: placeholder value 'EMX250' on every row.
     Frederik competes across different championships, so update each
     race's `championship` to the actual series it belongs to. */
  raceResults: [
    { round: 1, track: 'Västerås SX', flag: '🇸🇪', country: 'Sweden', shortDate: 'Mar 15', fullDate: 'March 15, 2025', championship: 'EMX250', pos: 3, points: 16 },
    { round: 2, track: 'Genk MX', flag: '🇧🇪', country: 'Belgium', shortDate: 'Apr 5', fullDate: 'April 5, 2025', championship: 'EMX250', pos: 1, points: 25 },
    { round: 3, track: 'Valkenswaard', flag: '🇳🇱', country: 'Netherlands', shortDate: 'Apr 26', fullDate: 'April 26, 2025', championship: 'EMX250', pos: 2, points: 22 },
    { round: 4, track: 'Ernée', flag: '🇫🇷', country: 'France', shortDate: 'May 17', fullDate: 'May 17, 2025', championship: 'EMX250', pos: 1, points: 25 },
    { round: 5, track: 'Teutschenthal', flag: '🇩🇪', country: 'Germany', shortDate: 'Jun 7', fullDate: 'June 7, 2025', championship: 'EMX250', pos: 4, points: 13 },
    { round: 6, track: 'Ottobiano', flag: '🇮🇹', country: 'Italy', shortDate: 'Jun 28', fullDate: 'June 28, 2025', championship: 'EMX250', pos: 3, points: 16 },
    { round: 7, track: 'Loket', flag: '🇨🇿', country: 'Czech Republic', shortDate: 'Jul 19', fullDate: 'July 19, 2025', championship: 'EMX250', pos: 2, points: 22 },
    { round: 8, track: 'Matterley Basin', flag: '🇬🇧', country: 'United Kingdom', shortDate: 'Aug 9', fullDate: 'August 9, 2025', championship: 'EMX250', pos: 1, points: 25 },
    { round: 9, track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', shortDate: 'Sep 6', fullDate: 'September 6, 2025', championship: 'EMX250', pos: null, points: null, upcoming: true }
  ],

  /* Extra display info for the next race that isn't part of the
     raceResults record itself (venue/date/round come from the
     raceResults entry with upcoming: true). */
  calendar: {
    nextRace: {
      badges: ['Season Finale', 'Home Race'],
      note: 'Uddevalla MX Park — Championship decider',
      countdownTarget: '2025-09-06T09:00:00'
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
