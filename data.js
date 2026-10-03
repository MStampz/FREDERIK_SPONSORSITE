/* ============================================================
   FREDERIK RAHN STAMPE — SITE CONTENT DATA
   ============================================================
   Edit this file to update site content. No build step, no
   database — just edit values/arrays here and refresh the page.

   Sections:
     site           — rider identity (name, race number, class,
                      country) used in the page title, nav, hero,
                      bio and footers
     titles         — championship titles shown as headline numbers
                      on the Sponsor Value page
     story          — longer text: the Sponsor Value intro, the bio
                      on the Story page and the timeline subtitle
     backing        — the sponsor pitch: Sponsor Value page headings,
                      the family's letter, what support pays for, how
                      supporters are thanked, and the "become a
                      supporter" wording on the Sponsors and Contact
                      pages
     contact        — email/phone/location used in footers & contact page
     socials        — social accounts on the contact page
     seasonMetrics  — home page social counter (race counts and
                      podiums are counted from seasons instead)
     homeHighlights — home page "Race Highlights" cards (top 3)
     carouselLogos  — home page scrolling partner logo strip
     currentSeason  — the year the home page, calendar countdown and
                      season counters are about
     seasons        — every season's races, newest first. Single
                      source of truth for the Results page, the
                      Calendar page (both have a season picker), the
                      Story timeline and every race/podium count
     images         — the fixed photos on the pages (hero, bio
                      portrait, banner, content cards)
     media          — media page gallery items
     sponsors       — sponsors page partners
     packages       — sponsorship tiers and prices (one place), plus
                      the wording for the sponsor-value page's
                      detailed cards and the contact page's simpler
                      cards — see note below
     dashboard      — dashboard page data. PLACEHOLDER numbers: the
                      page is hidden from the nav until real
                      Instagram Insights figures replace them
   ============================================================ */

const SITE_DATA = {

  site: {
    name: 'FREDERIK RAHN STAMPE',
    raceNumber: '215',
    raceClass: 'MX2',
    country: 'Denmark',
    countryFlag: '🇩🇰',
    nationality: 'Danish',
    birthplace: 'Aarhus, Denmark',
    bike: 'Yamaha 250',
    basedIn: 'Melbourne, Australia',
    basedInCity: 'Melbourne',
    homeClub: 'Randers Motor Sport',
    // Short line under the class in the home page hero
    heroLine: 'Racing in Australia'
  },

  /* Headline titles. The first one is shown in the Sponsor Value
     hero and its "Titles" card. */
  titles: [
    { count: '2×', label: 'Danish Vice Champion', detail: '85cc · 2021 and 2022' }
  ],

  /* Longer text. Each `bio` entry is one paragraph. */
  story: {
    pitch: 'Frederik is a 17-year-old Danish motocross rider who moved to Melbourne with his family at the end of 2025 and started over. We are looking for a few people who love the sport and would like to help him make it here.',
    bioHeading: 'FROM RANDERS TO MELBOURNE.',
    bio: [
      'Frederik Rahn Stampe grew up racing at Randers Motor Sport in Denmark. On a Yamaha YZ65 he finished third in the 2019 Danish 65cc championship, third at the Yamaha bLU cRU SuperFinale at the Motocross of Nations in Assen, and raced the FIM Junior World Championship in Italy.',
      'On the 85 he was Danish vice champion two years running, in 2021 and 2022, and an official Yamaha contract rider. He moved up to the 125 with Wozniak MX Racing Team, finished third in the Danish 125cc championship in 2024, and on a 250 in 2025 he was fourth in the Danish MX2 championship, two points off the podium, while racing ADAC MX Masters and EMX250.',
      'At the end of 2025 the family moved to Melbourne. Backed by Yamaha City Melbourne, he was back on the podium within weeks: second overall in MX3 at the Victorian Motocross Championship and second in MX2 at a later round, alongside his Pro MX debut.'
    ],
    timelineSubtitle: 'From the 65cc class in Denmark to MX2 in Australia, one season at a time.'
  },

  /* The sponsor pitch. Aimed at people who love the sport and want
     to see Frederik make it, often people who have made a move like
     this themselves, rather than at brands buying reach. */
  backing: {
    heroLabel: 'Back the journey',
    heroTitle: 'From Denmark to',
    heroTitleHighlight: 'the Australian podium',

    // A personal letter from the family. Each entry is one paragraph.
    letterLabel: 'Why we are asking',
    letterHeading: 'STARTING OVER, ONE RACE AT A TIME.',
    letter: [
      'At the end of 2025 our family moved from Denmark to Melbourne. Frederik had raced for Randers Motor Sport since the 65cc class, had twice been Danish vice champion on the 85, and had just finished fourth in the Danish MX2 championship. Then he had to start again in a new country.',
      'After five months off the bike he was racing again in April. By May he was second overall in MX3 at the Victorian Motocross Championship, with two holeshots from three starts. Yamaha City Melbourne got him on a bike and OnPoint Suspension looks after him at the track.',
      'What is missing is everything around the bike. This year he skipped a Pro MX round because we could not get him there, borrowed a trailer to get to the Victorian Motocross Championship, and lost races to technical problems.',
      'We are not offering reach targets or a media campaign. We are looking for a few people who love the sport, and maybe know what it takes to make it in a new country, who would like to be part of the next chapter. If that is you, we would love to hear from you.'
    ],
    letterSignoff: 'Frederik and the Stampe family',

    // "What your support pays for" cards
    needsLabel: 'Where it goes',
    needsHeading: 'WHAT YOUR SUPPORT PAYS FOR',
    needsSubtitle: 'Concrete things, not a media budget.',
    needs: [
      { title: 'Getting to the races', desc: 'Travel to Pro MX rounds outside Victoria. In 2026 he had to skip Toowoomba because his setup could not get him there.' },
      { title: 'A trailer of his own', desc: 'He borrowed one to get to the Victorian Motocross Championship. A trailer or van means he can say yes to every race.' },
      { title: 'Parts and servicing', desc: 'Technical problems cost him results at Sandmasters, the Victorian Motocross Championship and the MXGP of Australia.' },
      { title: 'Tyres and race entries', desc: 'The everyday costs of a race season, round after round.' }
    ],

    // "How we say thank you" cards
    thanksLabel: 'What you get back',
    thanksHeading: 'HOW WE SAY THANK YOU',
    thanksSubtitle: 'You get a relationship with the rider and his family, not just a logo slot.',
    thanks: [
      { title: 'Your name on the bike', desc: 'On the plastics or jersey at every race he rides.' },
      { title: 'A thank-you post', desc: 'Every supporter is announced on his Instagram, the way his Danish supporters Ole Larsen Transport, TKP Byg and Sidelmann Bosch Car Service were.' },
      { title: 'News from every race', desc: 'A personal update from Frederik after each round: how it went and what is next.' },
      { title: 'A visit from Frederik', desc: 'Frederik and the bike at your shop, workshop or staff day.' }
    ],

    packagesLabel: 'Ways to help',
    packagesHeading: 'SUPPORTER LEVELS',
    packagesSubtitle: 'Three levels to start a conversation. Every one can be shaped around what you would like to help with.',
    packagesNote: 'Would you rather cover something specific, such as a trip to a Pro MX round or a set of tyres? Get in touch and we will work it out together.',

    ctaTitle: 'Want to be part of it?',
    ctaText: 'Supporter places are open for next season. Back a young rider who moved across the world to chase it, and follow every step with him.',
    sponsorsCtaTitle: 'BECOME A SUPPORTER',
    sponsorsCtaText: 'Supporter places are open for next season. Help a young Dane make it in Australia and follow every race with him.',
    contactHeading: 'BECOME A SUPPORTER',
    contactSubtitle: 'Pick a level as a starting point, or tell us what you would like to help with. Prices are in Australian dollars and everything can be tailored.'
  },

  contact: {
    email: 'info@frederikstampe.com',
    phone: '+61 472 625 887',
    location: 'Melbourne, Australia',
    locationFlag: '🇦🇺'
  },

  /* Social accounts listed on the contact page. `url` is optional:
     leave it out to show the label without a link. */
  socials: [
    { icon: '📸', label: '@frederik_stampe', url: 'https://www.instagram.com/frederik_stampe/' }
  ],

  /* Only numbers that can be checked go here. Races and podiums are
     counted from `seasons`. Instagram followers as shown on the
     profile (Oct 2026). */
  seasonMetrics: {
    instagramFollowers: '3.1',
    instagramFollowersSuffix: 'K',
    // Likes on the most-watched reel
    topReelLikes: '10K'
  },

  /* Race highlight cards on the home page. `raceId` points at a race
     in `seasons` by its id (see the race id rules above `seasons`),
     which supplies the track, country, date and result. `label`
     overrides the P-number badge when the race has no single overall
     position. */
  homeHighlights: [
    {
      raceId: '2026-vicmc-round2',
      image: 'https://picsum.photos/seed/mxrace-vic-state/800/500',
      title: 'VICTORIAN MOTOCROSS CHAMPIONSHIP MX3',
      summary: '3-2-2 for second overall, with two holeshots from three starts and the fastest lap of race 3, leading almost all of it.'
    },
    {
      raceId: '2026-vicmc-round3',
      image: 'https://picsum.photos/seed/mxrace-vic-titles/800/500',
      title: 'VICTORIAN MOTOCROSS CHAMPIONSHIP MX2',
      summary: 'Third in MX3 on Saturday and second in MX2 on Sunday at round 3, racing two classes across one weekend.'
    },
    {
      raceId: '2025-dmmx2-round4',
      label: 'P4',
      image: 'https://picsum.photos/seed/mxrace-dm-2025/800/500',
      title: 'DANISH MX2 CHAMPIONSHIP',
      summary: 'Fourth in the 2025 Danish MX2 championship on a 250, two points off the podium, in his last season before moving to Australia.'
    }
  ],

  /* Photos. Every photo on the site is set in this file: the fixed
     page photos below, plus `image` on each home highlight and
     gallery item. `src` is a path to a file in the repo's images/
     folder (e.g. 'images/hero.jpg') or a full URL. The picsum.photos
     URLs are placeholders: replace them with real photos one at a
     time. `alt` describes the photo for screen readers. */
  images: {
    hero: { src: 'https://picsum.photos/seed/nordic-mx-race/1920/1080', alt: 'Frederik Rahn Stampe in action' },
    portrait: { src: 'https://picsum.photos/seed/rider74/800/1066', alt: 'Frederik Rahn Stampe' },
    storyBanner: { src: 'https://picsum.photos/seed/mxaction/1200/600', alt: 'Race action' },
    // Sponsor Value page, "content" cards
    contentRecap: { src: 'https://picsum.photos/seed/mxvid-recap/900/560', alt: 'Race recap series' },
    contentPodium: { src: 'https://picsum.photos/seed/mxphoto-podium/600/400', alt: 'Podium photography' },
    contentReel: { src: 'https://picsum.photos/seed/mxreel-brand/600/400', alt: 'Brand reel' },
    contentTraining: { src: 'https://picsum.photos/seed/mxphoto-train/600/400', alt: 'Training content' },
    contentDocumentary: { src: 'https://picsum.photos/seed/mxdoc-season/900/560', alt: 'Season documentary' }
  },

  carouselLogos: ['YAMAHA CITY MELBOURNE', 'ONPOINT SUSPENSION', 'NO FEAR MOTOCROSS'],

  /* The season the home page counters, Story and Calendar countdown
     are about. */
  currentSeason: 2026,

  /* Every season, newest first. Results come from Frederik's own
     Instagram race reports, so `date` is the month he posted about
     the race (YYYY-MM); add the day ('2026-05-17') once the exact
     race date is known and the site shows it.

     Season fields:
       year, title, subtitle — shown on the Results and Calendar pages
       badge                 — headline result for the season, shown
                               first on the Results and Calendar pages
       bluCru                — optional, the Yamaha bLU cRU SuperFinale
                               result, shown as its own badge next to
                               `badge` (podium or top 10 years)
       focus                 — optional, the series raced, shown on
                               the Sponsor Value page for the
                               current season
       summary               — one line for the Story timeline
       nextRace              — optional, only for the current season:
                               { raceId, badges, note, countdownTarget }
                               where `raceId` is a race id below
     Race fields:
       id      — permanent race id, see the rules below
       track, flag, country, date, championship
       pos     — overall finishing position, or null when there is
                 no single overall result
       result  — short text shown next to/instead of `pos`, e.g.
                 moto scores '3-2-2' or 'DNS'
       upcoming: true — a race not yet run (shown on the Calendar,
                 left out of the Results table) */
  /* Race ids
     Every race has an id in the form  <year>-<series>-round<N>,
     e.g. '2026-vicmc-round2'. Home page highlights and the next
     race point at races by this id, so adding or reordering races
     never moves them.

       year    — the season's year
       series  — one of the slugs in `series` below, lowercase letters
                 and digits only. Use the same slug for the same
                 series in every season; add a new slug to `series`
                 before using it
       N       — the official round number of that series in that
                 season. When it isn't known, count on from the last
                 known round in the order listed here (from 1 if
                 none is known)

     The site checks every id when it loads and prints a warning in
     the browser console for a malformed, duplicate or unknown id. */
  series: {
    // Australia
    vicmc: 'Victorian Motocross Championship',
    promx: 'Pro MX Championship',
    sandmasters: 'Sandmasters',
    mxgp: 'MXGP World Championship',
    // Denmark
    dm65: 'Danish Championship 65cc',
    dm85: 'Danish Championship 85cc',
    dm125: 'Danish Championship 125cc',
    dmmx2: 'Danish Championship MX2',
    dkclub: 'Danish Club Championship',
    fastlane: 'Fastlane MX Masters',
    lytzen: 'Lytzen Cup',
    randersgp: 'Randers Club GP',
    wintercup: 'Winter Cup',
    preseason: 'Pre-season races',
    club: 'Club races',
    // Europe
    adac: 'ADAC MX Masters',
    emx65: 'EMX65 European Championship',
    emx85: 'EMX85 European Championship',
    emx125: 'EMX125 European Championship',
    emx250: 'EMX250 European Championship',
    jwc: 'FIM Junior World Championship',
    dutchopener: 'Dutch season opener',
    dutchnationals: 'Dutch Nationals',
    blucru: 'Yamaha bLU cRU SuperFinale'
  },

  seasons: [
    {
      year: 2026,
      title: '2026 SEASON',
      subtitle: 'First season in Australia, backed by Yamaha City Melbourne — Victorian Motocross Championship (MX3 and MX2), Pro MX and the MXGP of Australia.',
      badge: 'P2 Victorian Motocross Championship MX3',
      focus: 'Victorian Motocross Championship · Pro MX',
      summary: 'Moved to Melbourne. Second overall in MX3 at the Victorian Motocross Championship and second in MX2 at a later round, Pro MX debut and a trip to the MXGP of Australia.',
      races: [
        { id: '2026-vicmc-round1', track: 'Round 1', flag: '🇦🇺', country: 'Australia', date: '2026-04', championship: 'Victorian Motocross Championship', pos: null, result: 'MX3 6-4-5 · MX2 7-6-5' },
        { id: '2026-promx-round1', track: 'Canberra', flag: '🇦🇺', country: 'Australia', date: '2026-04', championship: 'Pro MX', pos: null, result: '27-25' },
        { id: '2026-sandmasters-round1', track: 'Sandmasters', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Sandmasters', pos: null, result: '1-1-DNF-DNS' },
        { id: '2026-promx-round2', track: 'Gillman', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Pro MX', pos: null, result: '11-17' },
        { id: '2026-vicmc-round2', track: 'Round 2', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Victorian Motocross Championship MX3', pos: 2, result: '3-2-2' },
        { id: '2026-promx-round5', track: 'Appin', flag: '🇦🇺', country: 'Australia', date: '2026-06', championship: 'Pro MX', pos: null, result: 'Round 5' },
        { id: '2026-vicmc-round3', track: 'Round 3', flag: '🇦🇺', country: 'Australia', date: '2026-07', championship: 'Victorian Motocross Championship MX2', pos: 2, result: 'MX3 P3' },
        { id: '2026-vicmc-round4', track: 'Round 4', flag: '🇦🇺', country: 'Australia', date: '2026-08', championship: 'Victorian Motocross Championship MX3', pos: 3, result: 'P2 in championship' },
        { id: '2026-mxgp-round1', track: 'Darwin', flag: '🇦🇺', country: 'Australia', date: '2026-09', championship: 'MXGP of Australia', pos: null, result: 'DNS' }
      ]
    },
    {
      year: 2025,
      title: '2025 SEASON',
      subtitle: 'MX2 on a Yamaha 250 with Wozniak MX Racing Team — Danish championship, ADAC MX Masters and EMX250.',
      badge: '4th Danish MX2 Championship',
      summary: 'Stepped up to the 250. Fourth in the Danish MX2 championship, two points off the podium, plus ADAC MX Masters and EMX250. His own word for it: a breakthrough year.',
      races: [
        { id: '2025-dutchopener-round1', track: 'Lierop', flag: '🇳🇱', country: 'Netherlands', date: '2025-02', championship: 'Dutch MX season opener', pos: null, result: 'B-final P4' },
        { id: '2025-wintercup-round1', track: 'Sønderborg', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Winter Cup', pos: null, result: 'DNF-7' },
        { id: '2025-preseason-round1', track: 'Korskro', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '11-8' },
        { id: '2025-preseason-round2', track: 'Vesterbæk', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '6-DNF' },
        { id: '2025-adac-round1', track: 'Drehna', flag: '🇩🇪', country: 'Germany', date: '2025-04', championship: 'ADAC MX Masters', pos: null, result: 'LCQ P5' },
        { id: '2025-fastlane-round1', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2025-05', championship: 'Fastlane MX Masters', pos: 5, result: '3-9' },
        { id: '2025-adac-round2', track: 'Mölln', flag: '🇩🇪', country: 'Germany', date: '2025-05', championship: 'ADAC MX Masters', pos: 31, result: '27-33-30' },
        { id: '2025-dmmx2-round1', track: 'Hjørring', flag: '🇩🇰', country: 'Denmark', date: '2025-05', championship: 'Danish Championship MX2', pos: 4, result: '6-3' },
        { id: '2025-adac-round3', track: 'Dreetz', flag: '🇩🇪', country: 'Germany', date: '2025-06', championship: 'ADAC MX Masters', pos: null, result: 'DNF-23-29' },
        { id: '2025-dmmx2-round2', track: 'Herning', flag: '🇩🇰', country: 'Denmark', date: '2025-06', championship: 'Danish Championship MX2', pos: 6, result: '7-6' },
        { id: '2025-adac-round4', track: 'Tensfeld', flag: '🇩🇪', country: 'Germany', date: '2025-07', championship: 'ADAC MX Masters', pos: null, result: 'DNS-24-DNF' },
        { id: '2025-emx250-round1', track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', date: '2025-08', championship: 'EMX250', pos: null, result: '' },
        { id: '2025-dmmx2-round3', track: 'Esbjerg', flag: '🇩🇰', country: 'Denmark', date: '2025-08', championship: 'Danish Championship MX2', pos: null, result: '8-7' },
        { id: '2025-dkclub-round1', track: 'Danish Club Championship', flag: '🇩🇰', country: 'Denmark', date: '2025-09', championship: 'Danish Club Championship', pos: null, result: '10-6' },
        { id: '2025-adac-round5', track: 'Holzgerlingen', flag: '🇩🇪', country: 'Germany', date: '2025-09', championship: 'ADAC MX Masters', pos: null, result: 'DNS-DNS-33' },
        { id: '2025-dmmx2-round4', track: 'Season final', flag: '🇩🇰', country: 'Denmark', date: '2025-09', championship: 'Danish Championship MX2', pos: null, result: '6-4 · 4th in championship' }
      ]
    },
    {
      year: 2024,
      title: '2024 SEASON',
      subtitle: '125 with Wozniak MX Racing Team — EMX125, Junior World Championship, ADAC and the Danish championship.',
      badge: '3rd Danish Championship 125cc',
      bluCru: 'Top 10 Yamaha bLU cRU SuperFinale · England',
      summary: 'Third overall in the Danish 125cc championship. Raced EMX125, the Junior World Championship and ADAC, qualified second in his first ever 250 race, and top 10 at the Yamaha bLU cRU SuperFinale in England.',
      races: [
        { id: '2024-dutchopener-round1', track: 'Lierop', flag: '🇳🇱', country: 'Netherlands', date: '2024-03', championship: 'Dutch season opener', pos: 13, result: '' },
        { id: '2024-emx125-round1', track: 'Riola Sardo', flag: '🇮🇹', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: '25-22' },
        { id: '2024-emx125-round2', track: 'Arco di Trento', flag: '🇮🇹', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: 'DNQ' },
        { id: '2024-dm125-round1', track: 'Svendborg', flag: '🇩🇰', country: 'Denmark', date: '2024-04', championship: 'Danish Championship 125cc', pos: 4, result: '' },
        { id: '2024-adac-round1', track: 'Dreetz', flag: '🇩🇪', country: 'Germany', date: '2024-04', championship: 'ADAC MX Masters', pos: null, result: '26-11' },
        { id: '2024-dmmx2-round1', track: 'Danish Championship MX2', flag: '🇩🇰', country: 'Denmark', date: '2024-05', championship: 'Danish Championship MX2', pos: 13, result: '15-13 on a 125' },
        { id: '2024-adac-round2', track: 'Vellahn', flag: '🇩🇪', country: 'Germany', date: '2024-05', championship: 'ADAC MX Masters', pos: null, result: '20-22-24' },
        { id: '2024-dm125-round2', track: 'Herning', flag: '🇩🇰', country: 'Denmark', date: '2024-06', championship: 'Danish Championship 125cc', pos: null, result: '6-3' },
        { id: '2024-dutchnationals-round1', track: 'Heerde', flag: '🇳🇱', country: 'Netherlands', date: '2024-07', championship: 'Dutch Nationals', pos: null, result: '10-15' },
        { id: '2024-jwc-round1', track: 'Junior World Championship', flag: '🇳🇱', country: 'Netherlands', date: '2024-07', championship: 'FIM Junior World Championship 125', pos: null, result: 'DNQ' },
        { id: '2024-emx125-round3', track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', date: '2024-08', championship: 'EMX125', pos: null, result: '28-DNF' },
        { id: '2024-dm125-round3', track: 'Hedeland', flag: '🇩🇰', country: 'Denmark', date: '2024-09', championship: 'Danish Championship 125cc', pos: null, result: 'Race 1 P4' },
        { id: '2024-dmmx2-round2', track: 'First 250 race', flag: '🇩🇰', country: 'Denmark', date: '2024-09', championship: 'Danish Championship MX2', pos: null, result: 'Qualified P2 · DNF-DNF' },
        { id: '2024-blucru-round1', track: 'England', flag: '🇬🇧', country: 'United Kingdom', date: '2024-10', championship: 'Yamaha bLU cRU SuperFinale', pos: 9, result: 'Top 10' }
      ]
    },
    {
      year: 2023,
      title: '2023 SEASON',
      subtitle: 'First year on the 125 with Wozniak MX Racing Team — Danish 125cc championship, Danish MX2 against the 250s on his 125, and ADAC MX Masters.',
      badge: '4th Danish Championship 125cc',
      summary: 'Joined Wozniak MX Racing Team on a 125. Fourth in the Danish 125cc championship, raced Danish MX2 against the 250s on his 125, and ADAC, and 11th at the bLU cRU SuperFinale in Ernée.',
      races: [
        { id: '2023-club-round1', track: 'Season opener', flag: '🇩🇰', country: 'Denmark', date: '2023-03', championship: 'First race on the 125', pos: 2, result: '2-2' },
        { id: '2023-adac-round1', track: 'Fürstlich Drehna', flag: '🇩🇪', country: 'Germany', date: '2023-04', championship: 'ADAC MX Masters', pos: null, result: '22-DNF' },
        { id: '2023-dm125-round1', track: 'Han Herred', flag: '🇩🇰', country: 'Denmark', date: '2023-04', championship: 'Danish Championship 125cc', pos: 5, result: '5-5' },
        { id: '2023-dmmx2-round1', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2023-05', championship: 'Danish Championship MX2', pos: null, result: '23-31 · on a 125' },
        { id: '2023-adac-round2', track: 'Mölln', flag: '🇩🇪', country: 'Germany', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '37-31' },
        { id: '2023-adac-round3', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '33-23' },
        { id: '2023-dm125-round2', track: 'Svebølle', flag: '🇩🇰', country: 'Denmark', date: '2023-06', championship: 'Danish Championship 125cc', pos: null, result: '6-6' },
        { id: '2023-dmmx2-round2', track: 'Svendborg', flag: '🇩🇰', country: 'Denmark', date: '2023-07', championship: 'Danish Championship MX2', pos: null, result: '18-16 (DSQ) · on a 125' },
        { id: '2023-adac-round4', track: 'Gaildorf', flag: '🇩🇪', country: 'Germany', date: '2023-08', championship: 'ADAC MX Masters', pos: null, result: '29-30' },
        { id: '2023-dmmx2-round3', track: 'Mors', flag: '🇩🇰', country: 'Denmark', date: '2023-08', championship: 'Danish Championship MX2', pos: null, result: '23-19 · on a 125' },
        { id: '2023-adac-round5', track: 'Holzgerlingen', flag: '🇩🇪', country: 'Germany', date: '2023-09', championship: 'ADAC MX Masters', pos: null, result: '20-21' },
        { id: '2023-dmmx2-round4', track: 'Næstved', flag: '🇩🇰', country: 'Denmark', date: '2023-09', championship: 'Danish Championship MX2', pos: null, result: '20-21 · on a 125' },
        { id: '2023-dm125-round3', track: 'Holstebro', flag: '🇩🇰', country: 'Denmark', date: '2023-10', championship: 'Danish Championship 125cc', pos: 4, result: '4-4 · 4th in championship' },
        { id: '2023-blucru-round1', track: 'Ernée', flag: '🇫🇷', country: 'France', date: '2023-10', championship: 'Yamaha bLU cRU SuperFinale', pos: 11, result: '' }
      ]
    },
    {
      year: 2022,
      title: '2022 SEASON',
      subtitle: 'Official Yamaha contract rider on the 85 with Becker Racing — Danish championship, EMX85 and ADAC MX Masters.',
      badge: 'Danish Vice Champion 85cc',
      summary: 'Official Yamaha contract rider. Danish vice champion in 85cc for the second year running, with two round wins and the red plate along the way, plus EMX85 and ADAC.',
      races: [
        { id: '2022-dm85-round1', track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2022-04', championship: 'Danish Championship 85cc', pos: 3, result: '5-1' },
        { id: '2022-emx85-round1', track: 'Lommel', flag: '🇧🇪', country: 'Belgium', date: '2022-05', championship: 'EMX85', pos: 14, result: '15-16' },
        { id: '2022-emx85-round2', track: 'Emmen', flag: '🇳🇱', country: 'Netherlands', date: '2022-05', championship: 'EMX85', pos: null, result: 'Bike problem · 24' },
        { id: '2022-adac-round1', track: 'ADAC round 1', flag: '🇩🇪', country: 'Germany', date: '2022-05', championship: 'ADAC MX Masters', pos: null, result: 'No points' },
        { id: '2022-dm85-round2', track: 'Round 2', flag: '🇩🇰', country: 'Denmark', date: '2022-06', championship: 'Danish Championship 85cc', pos: 3, result: '3-4 · took the red plate' },
        { id: '2022-emx85-round3', track: 'Kaplice', flag: '🇨🇿', country: 'Czech Republic', date: '2022-06', championship: 'EMX85', pos: null, result: '27-19' },
        { id: '2022-adac-round2', track: 'Gaildorf', flag: '🇩🇪', country: 'Germany', date: '2022-08', championship: 'ADAC MX Masters', pos: 15, result: '17-15' },
        { id: '2022-dm85-round3', track: 'Round 3', flag: '🇩🇰', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: null, result: '9-9' },
        { id: '2022-dm85-round4', track: 'Round 4', flag: '🇩🇰', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: 1, result: '1-2' },
        { id: '2022-dm85-round5', track: 'Round 5', flag: '🇩🇰', country: 'Denmark', date: '2022-09', championship: 'Danish Championship 85cc', pos: 1, result: '1-3' },
        { id: '2022-adac-round3', track: 'ADAC final', flag: '🇩🇪', country: 'Germany', date: '2022-10', championship: 'ADAC MX Masters', pos: null, result: '18-14' }
      ]
    },
    {
      year: 2021,
      title: '2021 SEASON',
      subtitle: 'First full season on the 85, with EasyMX and Becker Racing — Danish championship, Lytzen Cup, ADAC MX Masters and EMX85.',
      badge: 'Danish Vice Champion 85cc',
      bluCru: '2nd Yamaha bLU cRU SuperFinale · Mantova',
      summary: 'Danish vice champion in 85cc, Lytzen Cup winner and second at the Yamaha bLU cRU SuperFinale in Mantova. Joined Becker Racing mid-season and debuted in EMX85.',
      races: [
        { id: '2021-club-round1', track: 'Season opener', flag: '🇩🇰', country: 'Denmark', date: '2021-04', championship: 'Club race', pos: 1, result: '1-1' },
        { id: '2021-dm85-round1', track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-04', championship: 'Danish Championship 85cc', pos: null, result: '2-3' },
        { id: '2021-lytzen-round1', track: 'Lytzen Cup round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { id: '2021-dm85-round3', track: 'Qualifier round 3', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Danish Championship 85cc', pos: 1, result: '2-1' },
        { id: '2021-lytzen-round2', track: 'Lytzen Cup round 2', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { id: '2021-randersgp-round1', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2021-06', championship: 'Randers Club GP', pos: 1, result: '' },
        { id: '2021-lytzen-round3', track: 'Lytzen Cup final', flag: '🇩🇰', country: 'Denmark', date: '2021-06', championship: 'Lytzen Cup', pos: 1, result: '1-1 · series winner' },
        { id: '2021-adac-round1', track: 'ADAC round 1', flag: '🇩🇪', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: null, result: 'Qualified 28th of 46' },
        { id: '2021-dm85-round4', track: 'Qualifier final', flag: '🇩🇰', country: 'Denmark', date: '2021-07', championship: 'Danish Championship 85cc', pos: 3, result: '4-3' },
        { id: '2021-adac-round2', track: 'Tensfeld', flag: '🇩🇪', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: 15, result: '15th of 39' },
        { id: '2021-dm85-round5', track: 'Final round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-08', championship: 'Danish Championship 85cc', pos: 2, result: '2-2' },
        { id: '2021-emx85-round1', track: 'Slovakia', flag: '🇸🇰', country: 'Slovakia', date: '2021-09', championship: 'EMX85', pos: null, result: '17-16' },
        { id: '2021-adac-round3', track: 'Drehna', flag: '🇩🇪', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 15, result: '13-16' },
        { id: '2021-adac-round4', track: 'Reutlingen', flag: '🇩🇪', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 18, result: '29-15' },
        { id: '2021-blucru-round1', track: 'Mantova', flag: '🇮🇹', country: 'Italy', date: '2021-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 2, result: '' }
      ]
    },
    {
      year: 2020,
      title: '2020 SEASON',
      subtitle: 'Rookie year on the 85 with EasyMX and Yamaha — Danish championship, Randers Club GP and an ADAC debut.',
      badge: 'Randers Club GP Winner 85cc',
      summary: 'Moved up to the 85 with EasyMX and Yamaha, won the Randers Club GP series and made his ADAC MX Masters debut.',
      races: [
        { id: '2020-randersgp-round1', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-06', championship: 'Randers Club GP', pos: 2, result: 'First race on the 85' },
        { id: '2020-dm85-round1', track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: 'Race 1 P6' },
        { id: '2020-dm85-round2', track: 'Round 2', flag: '🇩🇰', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: '9-6' },
        { id: '2020-randersgp-round2', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-09', championship: 'Randers Club GP', pos: 1, result: '' },
        { id: '2020-adac-round1', track: 'ADAC debut', flag: '🇩🇪', country: 'Germany', date: '2020-10', championship: 'ADAC MX Masters', pos: 16, result: '18-14' },
        { id: '2020-randersgp-round3', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-10', championship: 'Randers Club GP', pos: 1, result: 'Series winner' }
      ]
    },
    {
      year: 2019,
      title: '2019 SEASON',
      subtitle: '65cc on a Yamaha YZ65 — Danish championship, EMX65, the FIM Junior World Championship and the bLU cRU SuperFinale at MXoN.',
      badge: '3rd Danish Championship 65cc',
      bluCru: '3rd Yamaha bLU cRU SuperFinale · Assen',
      summary: 'Third in the Danish 65cc championship and third at the Yamaha bLU cRU SuperFinale at the Motocross of Nations in Assen. Raced EMX65 and the FIM Junior World Championship in Italy.',
      races: [
        { id: '2019-emx65-round1', track: 'Slagelse', flag: '🇩🇰', country: 'Denmark', date: '2019-05', championship: 'EMX65', pos: 15, result: '17-12' },
        { id: '2019-dm65-round3', track: 'Round 3', flag: '🇩🇰', country: 'Denmark', date: '2019-05', championship: 'Danish Championship 65cc', pos: 3, result: '4-3' },
        { id: '2019-emx65-round2', track: 'Arnhem', flag: '🇳🇱', country: 'Netherlands', date: '2019-06', championship: 'EMX65', pos: null, result: 'Two top-20 motos' },
        { id: '2019-jwc-round1', track: 'Arco di Trento', flag: '🇮🇹', country: 'Italy', date: '2019-07', championship: 'FIM Junior World Championship 65cc', pos: null, result: 'Last chance qualifier' },
        { id: '2019-dm65-round4', track: 'Round 4', flag: '🇩🇰', country: 'Denmark', date: '2019-08', championship: 'Danish Championship 65cc', pos: null, result: '4-5' },
        { id: '2019-club-round1', track: 'Mors', flag: '🇩🇰', country: 'Denmark', date: '2019-08', championship: 'Club race', pos: 2, result: '1-2' },
        { id: '2019-dm65-round5', track: 'Round 5', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '2-2' },
        { id: '2019-randersgp-round1', track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Randers Club GP', pos: 1, result: 'Series winner' },
        { id: '2019-dm65-round6', track: 'Final', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '1-3 · 3rd in championship' },
        { id: '2019-blucru-round1', track: 'Assen (MXoN)', flag: '🇳🇱', country: 'Netherlands', date: '2019-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 3, result: '' }
      ]
    }
  ],

  /* Media page gallery. `image` follows the same rules as `images`
     above; `label` is shown on the photo and used as its alt text. */
  media: {
    gallery: [
      { image: 'https://picsum.photos/seed/mx1/800/600', size: 'large', label: 'Victorian Motocross Championship 2026' },
      { image: 'https://picsum.photos/seed/mx2/800/600', size: 'normal', label: 'Yamaha City Melbourne' },
      { image: 'https://picsum.photos/seed/mx3/800/600', size: 'normal', label: 'Sandmasters 2026' },
      { image: 'https://picsum.photos/seed/mx4/800/600', size: 'normal', label: 'Pro MX Gillman' },
      { image: 'https://picsum.photos/seed/mx5/800/600', size: 'large', label: 'Victorian Motocross Championship MX2 2026' },
      { image: 'https://picsum.photos/seed/mx6/800/600', size: 'normal', label: 'MXGP of Australia, Darwin' },
      { image: 'https://picsum.photos/seed/mx7/800/600', size: 'normal', label: 'Danish Championship 2025' },
      { image: 'https://picsum.photos/seed/mx8/800/600', size: 'normal', label: 'Fastlane MX Masters Randers' },
      { image: 'https://picsum.photos/seed/mx9/800/600', size: 'large', label: 'bLU cRU SuperFinale' },
      { image: 'https://picsum.photos/seed/mx10/800/600', size: 'normal', label: 'ADAC MX Masters' },
      { image: 'https://picsum.photos/seed/mx11/800/600', size: 'normal', label: 'Winter training in Spain' },
      { image: 'https://picsum.photos/seed/mx12/800/600', size: 'normal', label: 'Assen 2019, bLU cRU podium' }
    ]
  },

  /* Current partners. `lead` is the large card at the top of the
     Sponsors page; `partners` are the cards below it. */
  sponsors: {
    lead: {
      name: 'YAMAHA CITY MELBOURNE',
      tagline: 'Bike Partner · 2026 Season',
      desc: 'The Melbourne Yamaha dealer that got Frederik back on a bike after the move from Denmark, and backs his racing in Victoria and Pro MX.',
      badges: ['Bike Partner', 'Yamaha'],
      initial: 'Y'
    },
    partners: [
      { icon: '🔧', name: 'ONPOINT SUSPENSION', type: 'Suspension', desc: 'Suspension setup and trackside support at the races.', badge: 'Suspension Partner' },
      { icon: '🦺', name: 'NO FEAR MOTOCROSS', type: 'Riding Gear', desc: 'Motocross gear partner for the 2026 season.', badge: 'Gear Partner' }
    ]
  },

  /* Sponsorship packages. `tiers` is the single place for each
     tier's name, price and badge: the sponsor-value page cards, the
     contact page cards and the contact form's budget menu are all
     built from it, so a price change here shows up everywhere.
     `amount` is a plain number in `currency`; the site formats it
     ("A$5,000") and works out the budget ranges for the form.

     `sponsorValue` (detailed, with an included/excluded feature
     matrix) and `contact` (simple, included-features-only) hold the
     page-specific wording for each tier, matched by `tier` id.
     Feature bullet wording is page-specific by design (long-form vs
     short). */
  packages: {
    currency: 'A$',
    tiers: [
      { id: 'support', name: 'Supporter', amount: 5000 },
      { id: 'major', name: 'Race Partner', amount: 13000, featured: true, badge: 'Recommended' },
      { id: 'title', name: 'Season Partner', amount: 33000 }
    ],
    sponsorValue: [
      {
        tier: 'support', priceSuffix: '/season',
        intro: 'For a local business or a fan of the sport who wants to help with the basics and follow the season up close.',
        ctaLabel: 'Get in Touch', ctaStyle: 'outline',
        features: [
          { text: 'Name or logo on the jersey — arm / back', included: true },
          { text: 'Thank-you announcement on Instagram', included: true },
          { text: 'Listed on the website\'s Partners page', included: true },
          { text: 'Personal update after every race', included: true },
          { text: 'Season photo pack (digital)', included: true },
          { text: 'Logo on the bike plastics', included: false },
          { text: 'A visit from Frederik', included: false },
          { text: 'Name on the race transport', included: false }
        ]
      },
      {
        tier: 'major', priceSuffix: '/season',
        intro: 'Helps cover a real part of the season, such as getting to the Pro MX rounds, with your logo on the bike at every race.',
        ctaLabel: 'Become a Supporter', ctaStyle: 'primary',
        features: [
          { text: 'Logo on the bike plastics — side panels', included: true },
          { text: 'Jersey logo — chest', included: true },
          { text: 'Thank-you announcement and tags in race reports', included: true },
          { text: 'Featured on the website\'s Partners page', included: true },
          { text: 'Personal update after every race', included: true },
          { text: 'Full season photo pack (hi-res)', included: true },
          { text: 'A visit from Frederik to your business', included: true },
          { text: 'Name on the race transport', included: false }
        ]
      },
      {
        tier: 'title', priceSuffix: '/season',
        intro: 'The main supporter of Frederik\'s season, including the trailer or van that gets him to every race.',
        ctaLabel: 'Get in Touch', ctaStyle: 'outline',
        features: [
          { text: 'Name on the race transport — trailer or van', included: true },
          { text: 'Main logo on the bike, jersey and helmet', included: true },
          { text: 'Tagged in every race report', included: true },
          { text: 'Homepage feature on the website', included: true },
          { text: 'Personal update after every race, plus a season review', included: true },
          { text: 'Full season photo pack (hi-res)', included: true },
          { text: 'Visits from Frederik during the season', included: true },
          { text: 'First say on the following season', included: true }
        ]
      }
    ],
    contact: [
      {
        tier: 'support', priceSuffix: 'per season',
        ctaLabel: 'Get in Touch', ctaStyle: 'outline',
        features: [
          'Name or logo on the jersey',
          'Thank-you post on Instagram',
          'Website partner listing',
          'Update after every race',
          'Season photo pack'
        ]
      },
      {
        tier: 'major', priceSuffix: 'per season',
        ctaLabel: 'Become a Supporter', ctaStyle: 'primary',
        features: [
          'Logo on the bike plastics and jersey',
          'Thank-you post and tags in race reports',
          'Featured website listing',
          'Update after every race',
          'Full season photo pack',
          'A visit from Frederik to your business'
        ]
      },
      {
        tier: 'title', priceSuffix: 'per season',
        ctaLabel: 'Get in Touch', ctaStyle: 'outline',
        features: [
          'Name on the race transport',
          'Main logo on bike, jersey and helmet',
          'Tagged in every race report',
          'Homepage feature on the website',
          'Visits from Frederik during the season',
          'First say on the following season'
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
