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
                      on the Partnership page
     story          — longer text: the Partnership page intro, the bio
                      on the Story page and the timeline subtitle
     backing        — the partner pitch: Partnership page headings,
                      the family's letter, what partners make possible,
                      the partner network, the tier
                      wording and the "become a partner" wording on
                      the Partners page
     home           — home page text: the proof line under the name
                      in the hero, the story teaser and the "join the
                      journey" block
     contact        — email/phone/location used in footers & the Get
                      in Touch page
     getInTouch     — Get in Touch page text, its cards and the
                      form's topics
     socials        — social accounts (footer icons)
     seasonMetrics  — home page social counter (race counts and
                      podiums are counted from seasons instead)
     homeHighlights — home page "Career Highlights" cards (four)
     currentSeason  — the year the home page, Results page and
                      season counters are about
     seasons        — every season's races, newest first. Single
                      source of truth for the Results page (it has a
                      season picker), the Story timeline and every
                      race/podium count
     images         — the fixed photos on the pages (hero, bio
                      portrait, banner and one extra photo per page)
     media          — media page gallery items
     partners       — current partners by tier: the Partners page,
                      the home page logo strip, and a page of its
                      own for each partner that has `page` content
     packages       — partner tiers (one place), plus
                      the wording for the tier cards on the
                      Partnership page — see note below
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
    nationality: 'Danish',
    birthplace: 'Aarhus, Denmark',
    bike: 'Yamaha 250',
    basedIn: 'Melbourne, Australia',
    basedInCity: 'Melbourne',
    homeClub: 'Randers Motor Sport',
    // Short line under the class in the home page hero
    heroLine: 'Racing in Australia'
  },

  /* Headline titles. The first one is shown in the Partnership
     hero and its "Titles" card. */
  titles: [
    { count: '2×', label: 'Danish Vice Champion', detail: '85cc · 2021 and 2022' }
  ],

  /* Longer text. Each `bio` entry is one paragraph. */
  story: {
    pitch: 'Frederik is a 17-year-old Danish motocross rider who moved to Melbourne with his family at the end of 2025 and started over. We are looking for a few partners who love the sport and want to be part of his journey here.',
    bioHeading: 'FROM RANDERS TO MELBOURNE.',
    bio: [
      'Frederik Rahn Stampe grew up racing at Randers Motor Sport in Denmark. On a Yamaha YZ65 he finished third in the 2019 Danish 65cc championship, third at the Yamaha bLU cRU SuperFinale at the Motocross of Nations in Assen, and raced the FIM Junior World Championship in Italy.',
      'On the 85 he was Danish vice champion two years running, in 2021 and 2022, and an official Yamaha contract rider. He moved up to the 125 with Wozniak MX Racing Team, finished third in the Danish 125cc championship in 2024, and on a 250 in 2025 he was fourth in the Danish MX2 championship, two points off the podium, while racing ADAC MX Masters and EMX250.',
      'At the end of 2025 the family moved to Melbourne. He was back on the podium within weeks: second overall in MX3 at the Victorian Motocross Championship and second in MX2 at a later round, alongside his Pro MX debut.'
    ],
    timelineSubtitle: 'From the 65cc class in Denmark to MX2 in Australia, one season at a time.'
  },

  /* The partner pitch. Aimed at people who love the sport and want
     to see Frederik make it, often people who have made a move like
     this themselves, rather than at brands buying reach. */
  backing: {
    heroLabel: 'Join the journey',
    heroTitle: 'From Denmark to',
    heroTitleHighlight: 'Australia',

    // A personal letter from the family. Each entry is one paragraph.
    letterLabel: 'Why we are looking for partners',
    letterHeading: 'STARTING OVER, ONE RACE AT A TIME.',
    letter: [
      'At the end of 2025 our family moved from Denmark to Melbourne. Frederik had raced for Randers Motor Sport since the 65cc class, had twice been Danish vice champion on the 85, and had just finished fourth in the Danish MX2 championship. Then he had to start again in a new country.',
      'After five months off the bike he was racing again in April. By May he was second overall in MX3 at the Victorian Motocross Championship, with two holeshots from three starts. OnPoint Suspension looks after his bike at the track and No Fear Motocross kits him out.',
      'What is missing is everything around the bike. This year he skipped a Pro MX round because we could not get him there, borrowed a trailer to get to the Victorian Motocross Championship, and lost races to technical problems.',
      'We are not offering reach targets or a media campaign. We are looking for a few people who love the sport, and maybe know what it takes to make it in a new country, who would like to be part of the next chapter. If that is you, we would love to hear from you.'
    ],
    letterSignoff: 'Frederik and the Stampe family',

    // "What our partners make possible" cards
    needsLabel: 'Where it goes',
    needsHeading: 'WHAT OUR PARTNERS MAKE POSSIBLE',
    needsSubtitle: 'Concrete things, not a media budget.',
    needs: [
      { title: 'Getting to the races', desc: 'Travel to Pro MX rounds outside Victoria. In 2026 he had to skip Toowoomba because his setup could not get him there.' },
      { title: 'A trailer of his own', desc: 'He borrowed one to get to the Victorian Motocross Championship. A trailer or van means he can say yes to every race.' },
      { title: 'Parts and servicing', desc: 'Technical problems cost him results at Sandmasters, the Victorian Motocross Championship and the MXGP of Australia.' },
      { title: 'Tyres and race entries', desc: 'The everyday costs of a race season, round after round.' }
    ],

    // "The partner network" text. Each entry is one paragraph.
    networkLabel: 'The partner network',
    networkHeading: 'PARTNERS MEET PARTNERS.',
    network: [
      'In Denmark, clubs bring their partners together so they can get to know each other and do business together. We want to do the same around Frederik in Melbourne.',
      'Every partner is invited to a couple of get-togethers each season, one at a race and one at a partner\'s business, and we introduce you to the other partners. It is a small group of people who love the sport, and a good way to meet other business owners in Melbourne.'
    ],

    packagesLabel: 'Ways to partner',
    packagesHeading: 'PARTNER TIERS',
    packagesSubtitle: 'Three tiers to start a conversation. Every partnership is tailored, so get in touch and we will find what fits.',
    packagesNote: 'Would you rather bring something specific, such as your products or services, a trip to a Pro MX round or a set of tyres? Get in touch and we will work it out together.',

    ctaTitle: 'Want to be part of it?',
    ctaText: 'Partner places are open for next season. Join a young rider who moved across the world to chase it, and follow every step with him.',
    sponsorsCtaTitle: 'BECOME A PARTNER',
    sponsorsCtaText: 'Partner places are open for next season. Be part of a young Dane making it in Australia and follow every race with him.'
  },

  /* Home page text. The hero proof line is `heroResult`, then the
     first entry in `titles`, then the career podium count (counted
     from `seasons`). */
  home: {
    heroResult: 'P2 Victorian Motocross Championship MX3 2026',

    storyLabel: 'His story',
    storyHeading: 'FROM DENMARK TO MELBOURNE.',
    storyText: 'Frederik grew up racing at Randers Motor Sport in Denmark, where he was twice Danish vice champion on the 85 and fourth in the Danish MX2 championship in 2025. At the end of 2025 the family moved to Melbourne, and within months of getting back on the bike he was second overall in MX3 at the Victorian Motocross Championship.',

    supportLabel: 'Join the journey',
    supportHeading: 'BE PART OF THE NEXT CHAPTER.',
    supportText: 'He is back on the bike and racing. What is missing is everything around it: getting to the Pro MX rounds, a trailer of his own, parts and tyres. We are looking for a few partners who love the sport and want to be part of his journey here.'
  },

  contact: {
    email: 'info@frederikstampe.com',
    phone: '+61 472 625 887',
    location: 'Melbourne, Australia'
  },

  /* Get in Touch page (page id `contact`). `ways` are the cards under
     the heading. A card's button does one of three things:
       link: 'instagram' — opens the first account in `socials`
       link: 'email'     — opens an email to contact.email
       goto: '<page>'    — goes to that page, and to the section with
                           id `scroll` on it when given
     `nextRace: true` adds the current season's next race to the card.
     `topics` fill the form's "What's it about?" menu; picking the
     `partnership` topic shows the partner tier menu. */
  getInTouch: {
    label: 'Say hello',
    heading: 'GET IN TOUCH',
    subtitle: 'Fan, fellow rider, club, journalist or business, we would love to hear from you. Send a message, or come and say hi at a race.',
    replyTime: 'We will get back to you within a couple of days.',
    ways: [
      { title: 'Come to a race', desc: 'Come and say hi in the paddock.', cta: 'See the races', goto: 'results', nextRace: true },
      { title: 'Partner with Frederik', desc: 'Want to be part of his next season? See what partners make possible and the partner tiers.', cta: 'See partner tiers', goto: 'sponsor-value', scroll: 'partner-tiers' }
    ],
    topics: [
      { value: 'hello', label: 'Just saying hi' },
      { value: 'partnership', label: 'Partnership' },
      { value: 'media', label: 'Media or interview' },
      { value: 'racing', label: 'Racing or team' },
      { value: 'other', label: 'Something else' }
    ]
  },

  /* Social accounts, shown as icons in the footer. `platform` picks
     the icon (Instagram has one). Accounts without a `url` are left
     out. */
  socials: [
    { platform: 'Instagram', label: '@frederik_stampe', url: 'https://www.instagram.com/frederik_stampe/' }
  ],

  /* Only numbers that can be checked go here. Races and podiums are
     counted from `seasons`. Instagram followers as shown on the
     profile (Oct 2026). */
  seasonMetrics: {
    instagramFollowers: '3.1',
    instagramFollowersSuffix: 'K'
  },

  /* Career highlight cards on the home page (four, best first; on a
     tablet they show two per row).

     A card about one race sets `raceId` (see the race id rules above
     `seasons`): the race supplies the year, track, country, date and
     the P-number badge. `label` overrides that badge and `meta`
     overrides that line.

     A card about more than one result (a series of podiums, say)
     leaves out `raceId` and sets `label` (the badge text) and `meta`
     (the small line above the title) itself.

     `medal` (1, 2 or 3) colours the badge gold, silver or bronze;
     without it a race card uses its finishing position. */
  homeHighlights: [
    {
      raceId: '2026-vicmc-round2',
      label: 'P2',
      meta: '2026 &nbsp;·&nbsp; Final standings &nbsp;·&nbsp; Australia',
      image: 'images/hl-victorian-mx3.jpg',
      title: 'VICTORIAN MOTOCROSS CHAMPIONSHIP MX3',
      summary: 'Second overall in the 2026 Victorian Motocross Championship MX3, in his first season in Australia after five months off the bike.'
    },
    {
      label: '2×',
      medal: 2,
      meta: '2019 &nbsp;·&nbsp; Assen &nbsp;·&nbsp; 2021 &nbsp;·&nbsp; Mantova',
      image: 'images/hl-blucru.jpg',
      title: 'TWO-TIME PODIUM · YAMAHA BLU CRU SUPERFINALE',
      summary: "3rd at Assen in 2019 and 2nd at Mantova in 2021, up against Yamaha's best young riders."
    },
    {
      label: '4×',
      medal: 2,
      meta: '2019 – 2024 &nbsp;·&nbsp; Denmark',
      image: 'images/gallery-09.jpg',
      title: 'DANISH CHAMPIONSHIP PODIUMS',
      summary: '4× on the Danish Championship podium: vice champion in 85cc in 2021 and 2022, plus 3rd in 65cc (2019) and 3rd in 125cc (2024).'
    },
    {
      label: '11',
      meta: '2019 – 2026 &nbsp;·&nbsp; 11 countries',
      image: 'images/hl-international.jpg',
      title: 'INTERNATIONAL EXPERIENCE',
      summary: 'Raced in 11 countries: the FIM Junior World Championship twice, the EMX European Championship in four classes (65, 85, 125 and 250), and six seasons of ADAC MX Masters in Germany.'
    }
  ],

  /* Photos. Every photo on the site is set in this file: the fixed
     page photos below, plus `image` on each home highlight and
     gallery item. `src` is a path to a file in the repo's images/
     folder (e.g. 'images/hero.jpg') or a full URL. Resize new photos
     for the web before adding them (about 1000-1600px wide, under
     ~400 KB). `alt` describes the photo for screen readers. */
  images: {
    hero: { src: 'images/hero.jpg', alt: 'Frederik Rahn Stampe in action' },
    portrait: { src: 'images/portrait.jpg', alt: 'Frederik Rahn Stampe on his Yamaha, number 215' },
    storyBanner: { src: 'images/story-banner.jpg', alt: 'Frederik in the air in front of a packed grandstand' },
    // One extra photo per page
    homeStory: { src: 'images/gallery-06.jpg', alt: 'Frederik in the air in front of the crowd' },
    partnershipLetter: { src: 'images/gallery-05.jpg', alt: 'Frederik cornering in the late light' },
    resultsBanner: { src: 'images/gallery-07.jpg', alt: 'Frederik jumping over the rocks against a blue sky' },
    storyStrip1: { src: 'images/gallery-11.jpg', alt: 'Close-up of Frederik in his helmet' },
    storyStrip2: { src: 'images/gallery-03.jpg', alt: 'Frederik exiting a corner on his Yamaha' },
    storyStrip3: { src: 'images/gallery-10.jpg', alt: 'Young Frederik on his number 5 Yamaha in the pits' },
    partnersBanner: { src: 'images/gallery-01.jpg', alt: 'Frederik roosting the sand in a corner' },
    contact: { src: 'images/gallery-04.jpg', alt: 'Frederik on his number 215 Yamaha' }
  },

  /* The season the home page counters, Story and Results page
     are about. */
  currentSeason: 2026,

  /* Every season, newest first. Results come from Frederik's own
     Instagram race reports, so `date` is the month he posted about
     the race (YYYY-MM); add the day ('2026-05-17') once the exact
     race date is known and the site shows it.

     Season fields:
       year, title, subtitle — shown on the Results page
       badge                 — headline result for the season, shown
                               first on the Results page
       bluCru                — optional, the Yamaha bLU cRU SuperFinale
                               result, shown as its own badge next to
                               `badge` (podium or top 10 years)
       summary               — one line for the Story timeline
       nextRace              — optional, only for the current season:
                               { raceId } — shown on the Get in Touch
                               "Come to a race" card
                               where `raceId` is a race id below
     Race fields:
       id      — permanent race id, see the rules below
       track, country, date, championship
       pos     — overall finishing position, or null when there is
                 no single overall result
       result  — short text shown next to/instead of `pos`, e.g.
                 moto scores '3-2-2' or 'DNS'
       upcoming: true — a race not yet run (listed on the Results
                 page as Upcoming) */
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
      subtitle: 'First season in Australia — Victorian Motocross Championship (MX3 and MX2), Pro MX and the MXGP of Australia.',
      badge: 'P2 Victorian Motocross Championship MX3',
      summary: 'Moved to Melbourne. Second overall in MX3 at the Victorian Motocross Championship and second in MX2 at a later round, Pro MX debut and a trip to the MXGP of Australia.',
      races: [
        { id: '2026-vicmc-round1', track: 'Round 1', country: 'Australia', date: '2026-04', championship: 'Victorian Motocross Championship', pos: null, result: 'MX3 6-4-5 · MX2 7-6-5' },
        { id: '2026-promx-round1', track: 'Canberra', country: 'Australia', date: '2026-04', championship: 'Pro MX', pos: null, result: '27-25' },
        { id: '2026-sandmasters-round1', track: 'Sandmasters', country: 'Australia', date: '2026-05', championship: 'Sandmasters', pos: null, result: '1-1-DNF-DNS' },
        { id: '2026-promx-round2', track: 'Gillman', country: 'Australia', date: '2026-05', championship: 'Pro MX', pos: null, result: '11-17' },
        { id: '2026-vicmc-round2', track: 'Round 2', country: 'Australia', date: '2026-05', championship: 'Victorian Motocross Championship MX3', pos: 2, result: '3-2-2' },
        { id: '2026-promx-round5', track: 'Appin', country: 'Australia', date: '2026-06', championship: 'Pro MX', pos: null, result: 'Round 5' },
        { id: '2026-vicmc-round3', track: 'Round 3', country: 'Australia', date: '2026-07', championship: 'Victorian Motocross Championship MX2', pos: 2, result: 'MX3 P3' },
        { id: '2026-vicmc-round4', track: 'Round 4', country: 'Australia', date: '2026-08', championship: 'Victorian Motocross Championship MX3', pos: 3, result: 'P2 in championship' },
        { id: '2026-mxgp-round1', track: 'Darwin', country: 'Australia', date: '2026-09', championship: 'MXGP of Australia', pos: null, result: 'DNS' }
      ]
    },
    {
      year: 2025,
      title: '2025 SEASON',
      subtitle: 'MX2 on a Yamaha 250 with Wozniak MX Racing Team — Danish championship, ADAC MX Masters and EMX250.',
      badge: '4th Danish MX2 Championship',
      summary: 'Stepped up to the 250. Fourth in the Danish MX2 championship, two points off the podium, plus ADAC MX Masters and EMX250. His own word for it: a breakthrough year.',
      races: [
        { id: '2025-dutchopener-round1', track: 'Lierop', country: 'Netherlands', date: '2025-02', championship: 'Dutch MX season opener', pos: null, result: 'B-final P4' },
        { id: '2025-wintercup-round1', track: 'Sønderborg', country: 'Denmark', date: '2025-03', championship: 'Winter Cup', pos: null, result: 'DNF-7' },
        { id: '2025-preseason-round1', track: 'Korskro', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '11-8' },
        { id: '2025-preseason-round2', track: 'Vesterbæk', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '6-DNF' },
        { id: '2025-adac-round1', track: 'Drehna', country: 'Germany', date: '2025-04', championship: 'ADAC MX Masters', pos: null, result: 'LCQ P5' },
        { id: '2025-fastlane-round1', track: 'Randers', country: 'Denmark', date: '2025-05', championship: 'Fastlane MX Masters', pos: 5, result: '3-9' },
        { id: '2025-adac-round2', track: 'Mölln', country: 'Germany', date: '2025-05', championship: 'ADAC MX Masters', pos: 31, result: '27-33-30' },
        { id: '2025-dmmx2-round1', track: 'Hjørring', country: 'Denmark', date: '2025-05', championship: 'Danish Championship MX2', pos: 4, result: '6-3' },
        { id: '2025-adac-round3', track: 'Dreetz', country: 'Germany', date: '2025-06', championship: 'ADAC MX Masters', pos: null, result: 'DNF-23-29' },
        { id: '2025-dmmx2-round2', track: 'Herning', country: 'Denmark', date: '2025-06', championship: 'Danish Championship MX2', pos: 6, result: '7-6' },
        { id: '2025-adac-round4', track: 'Tensfeld', country: 'Germany', date: '2025-07', championship: 'ADAC MX Masters', pos: null, result: 'DNS-24-DNF' },
        { id: '2025-emx250-round1', track: 'Uddevalla', country: 'Sweden', date: '2025-08', championship: 'EMX250', pos: null, result: '' },
        { id: '2025-dmmx2-round3', track: 'Esbjerg', country: 'Denmark', date: '2025-08', championship: 'Danish Championship MX2', pos: null, result: '8-7' },
        { id: '2025-dkclub-round1', track: 'Danish Club Championship', country: 'Denmark', date: '2025-09', championship: 'Danish Club Championship', pos: null, result: '10-6' },
        { id: '2025-adac-round5', track: 'Holzgerlingen', country: 'Germany', date: '2025-09', championship: 'ADAC MX Masters', pos: null, result: 'DNS-DNS-33' },
        { id: '2025-dmmx2-round4', track: 'Season final', country: 'Denmark', date: '2025-09', championship: 'Danish Championship MX2', pos: null, result: '6-4 · 4th in championship' }
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
        { id: '2024-dutchopener-round1', track: 'Lierop', country: 'Netherlands', date: '2024-03', championship: 'Dutch season opener', pos: 13, result: '' },
        { id: '2024-emx125-round1', track: 'Riola Sardo', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: '25-22' },
        { id: '2024-emx125-round2', track: 'Arco di Trento', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: 'DNQ' },
        { id: '2024-dm125-round1', track: 'Svendborg', country: 'Denmark', date: '2024-04', championship: 'Danish Championship 125cc', pos: 4, result: '' },
        { id: '2024-adac-round1', track: 'Dreetz', country: 'Germany', date: '2024-04', championship: 'ADAC MX Masters', pos: null, result: '26-11' },
        { id: '2024-dmmx2-round1', track: 'Danish Championship MX2', country: 'Denmark', date: '2024-05', championship: 'Danish Championship MX2', pos: 13, result: '15-13 on a 125' },
        { id: '2024-adac-round2', track: 'Vellahn', country: 'Germany', date: '2024-05', championship: 'ADAC MX Masters', pos: null, result: '20-22-24' },
        { id: '2024-dm125-round2', track: 'Herning', country: 'Denmark', date: '2024-06', championship: 'Danish Championship 125cc', pos: null, result: '6-3' },
        { id: '2024-dutchnationals-round1', track: 'Heerde', country: 'Netherlands', date: '2024-07', championship: 'Dutch Nationals', pos: null, result: '10-15' },
        { id: '2024-jwc-round1', track: 'Junior World Championship', country: 'Netherlands', date: '2024-07', championship: 'FIM Junior World Championship 125', pos: null, result: 'DNQ' },
        { id: '2024-emx125-round3', track: 'Uddevalla', country: 'Sweden', date: '2024-08', championship: 'EMX125', pos: null, result: '28-DNF' },
        { id: '2024-dm125-round3', track: 'Hedeland', country: 'Denmark', date: '2024-09', championship: 'Danish Championship 125cc', pos: null, result: 'Race 1 P4' },
        { id: '2024-dmmx2-round2', track: 'First 250 race', country: 'Denmark', date: '2024-09', championship: 'Danish Championship MX2', pos: null, result: 'Qualified P2 · DNF-DNF' },
        { id: '2024-blucru-round1', track: 'England', country: 'United Kingdom', date: '2024-10', championship: 'Yamaha bLU cRU SuperFinale', pos: 9, result: 'Top 10' }
      ]
    },
    {
      year: 2023,
      title: '2023 SEASON',
      subtitle: 'First year on the 125 with Wozniak MX Racing Team — Danish 125cc championship, Danish MX2 against the 250s on his 125, and ADAC MX Masters.',
      badge: '4th Danish Championship 125cc',
      summary: 'Joined Wozniak MX Racing Team on a 125. Fourth in the Danish 125cc championship, raced Danish MX2 against the 250s on his 125, and ADAC, and 11th at the bLU cRU SuperFinale in Ernée.',
      races: [
        { id: '2023-club-round1', track: 'Season opener', country: 'Denmark', date: '2023-03', championship: 'First race on the 125', pos: 2, result: '2-2' },
        { id: '2023-adac-round1', track: 'Fürstlich Drehna', country: 'Germany', date: '2023-04', championship: 'ADAC MX Masters', pos: null, result: '22-DNF' },
        { id: '2023-dm125-round1', track: 'Han Herred', country: 'Denmark', date: '2023-04', championship: 'Danish Championship 125cc', pos: 5, result: '5-5' },
        { id: '2023-dmmx2-round1', track: 'Randers', country: 'Denmark', date: '2023-05', championship: 'Danish Championship MX2', pos: null, result: '23-31 · on a 125' },
        { id: '2023-adac-round2', track: 'Mölln', country: 'Germany', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '37-31' },
        { id: '2023-adac-round3', track: 'Randers', country: 'Denmark', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '33-23' },
        { id: '2023-dm125-round2', track: 'Svebølle', country: 'Denmark', date: '2023-06', championship: 'Danish Championship 125cc', pos: null, result: '6-6' },
        { id: '2023-dmmx2-round2', track: 'Svendborg', country: 'Denmark', date: '2023-07', championship: 'Danish Championship MX2', pos: null, result: '18-16 (DSQ) · on a 125' },
        { id: '2023-adac-round4', track: 'Gaildorf', country: 'Germany', date: '2023-08', championship: 'ADAC MX Masters', pos: null, result: '29-30' },
        { id: '2023-dmmx2-round3', track: 'Mors', country: 'Denmark', date: '2023-08', championship: 'Danish Championship MX2', pos: null, result: '23-19 · on a 125' },
        { id: '2023-adac-round5', track: 'Holzgerlingen', country: 'Germany', date: '2023-09', championship: 'ADAC MX Masters', pos: null, result: '20-21' },
        { id: '2023-dmmx2-round4', track: 'Næstved', country: 'Denmark', date: '2023-09', championship: 'Danish Championship MX2', pos: null, result: '20-21 · on a 125' },
        { id: '2023-dm125-round3', track: 'Holstebro', country: 'Denmark', date: '2023-10', championship: 'Danish Championship 125cc', pos: 4, result: '4-4 · 4th in championship' },
        { id: '2023-blucru-round1', track: 'Ernée', country: 'France', date: '2023-10', championship: 'Yamaha bLU cRU SuperFinale', pos: 11, result: '' }
      ]
    },
    {
      year: 2022,
      title: '2022 SEASON',
      subtitle: 'Official Yamaha contract rider on the 85 with Becker Racing — Danish championship, EMX85 and ADAC MX Masters.',
      badge: 'Danish Vice Champion 85cc',
      summary: 'Official Yamaha contract rider. Danish vice champion in 85cc for the second year running, with two round wins and the red plate along the way, plus EMX85 and ADAC.',
      races: [
        { id: '2022-dm85-round1', track: 'Round 1', country: 'Denmark', date: '2022-04', championship: 'Danish Championship 85cc', pos: 3, result: '5-1' },
        { id: '2022-emx85-round1', track: 'Lommel', country: 'Belgium', date: '2022-05', championship: 'EMX85', pos: 14, result: '15-16' },
        { id: '2022-emx85-round2', track: 'Emmen', country: 'Netherlands', date: '2022-05', championship: 'EMX85', pos: null, result: 'Bike problem · 24' },
        { id: '2022-adac-round1', track: 'ADAC round 1', country: 'Germany', date: '2022-05', championship: 'ADAC MX Masters', pos: null, result: 'No points' },
        { id: '2022-dm85-round2', track: 'Round 2', country: 'Denmark', date: '2022-06', championship: 'Danish Championship 85cc', pos: 3, result: '3-4 · took the red plate' },
        { id: '2022-emx85-round3', track: 'Kaplice', country: 'Czech Republic', date: '2022-06', championship: 'EMX85', pos: null, result: '27-19' },
        { id: '2022-adac-round2', track: 'Gaildorf', country: 'Germany', date: '2022-08', championship: 'ADAC MX Masters', pos: 15, result: '17-15' },
        { id: '2022-dm85-round3', track: 'Round 3', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: null, result: '9-9' },
        { id: '2022-dm85-round4', track: 'Round 4', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: 1, result: '1-2' },
        { id: '2022-dm85-round5', track: 'Round 5', country: 'Denmark', date: '2022-09', championship: 'Danish Championship 85cc', pos: 1, result: '1-3' },
        { id: '2022-adac-round3', track: 'ADAC final', country: 'Germany', date: '2022-10', championship: 'ADAC MX Masters', pos: null, result: '18-14' }
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
        { id: '2021-club-round1', track: 'Season opener', country: 'Denmark', date: '2021-04', championship: 'Club race', pos: 1, result: '1-1' },
        { id: '2021-dm85-round1', track: 'Round 1', country: 'Denmark', date: '2021-04', championship: 'Danish Championship 85cc', pos: null, result: '2-3' },
        { id: '2021-lytzen-round1', track: 'Lytzen Cup round 1', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { id: '2021-dm85-round3', track: 'Qualifier round 3', country: 'Denmark', date: '2021-05', championship: 'Danish Championship 85cc', pos: 1, result: '2-1' },
        { id: '2021-lytzen-round2', track: 'Lytzen Cup round 2', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { id: '2021-randersgp-round1', track: 'Randers', country: 'Denmark', date: '2021-06', championship: 'Randers Club GP', pos: 1, result: '' },
        { id: '2021-lytzen-round3', track: 'Lytzen Cup final', country: 'Denmark', date: '2021-06', championship: 'Lytzen Cup', pos: 1, result: '1-1 · series winner' },
        { id: '2021-adac-round1', track: 'ADAC round 1', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: null, result: 'Qualified 28th of 46' },
        { id: '2021-dm85-round4', track: 'Qualifier final', country: 'Denmark', date: '2021-07', championship: 'Danish Championship 85cc', pos: 3, result: '4-3' },
        { id: '2021-adac-round2', track: 'Tensfeld', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: 15, result: '15th of 39' },
        { id: '2021-dm85-round5', track: 'Final round 1', country: 'Denmark', date: '2021-08', championship: 'Danish Championship 85cc', pos: 2, result: '2-2' },
        { id: '2021-emx85-round1', track: 'Slovakia', country: 'Slovakia', date: '2021-09', championship: 'EMX85', pos: null, result: '17-16' },
        { id: '2021-adac-round3', track: 'Drehna', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 15, result: '13-16' },
        { id: '2021-adac-round4', track: 'Reutlingen', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 18, result: '29-15' },
        { id: '2021-blucru-round1', track: 'Mantova', country: 'Italy', date: '2021-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 2, result: '' }
      ]
    },
    {
      year: 2020,
      title: '2020 SEASON',
      subtitle: 'Rookie year on the 85 with EasyMX and Yamaha — Danish championship, Randers Club GP and an ADAC debut.',
      badge: 'Randers Club GP Winner 85cc',
      summary: 'Moved up to the 85 with EasyMX and Yamaha, won the Randers Club GP series and made his ADAC MX Masters debut.',
      races: [
        { id: '2020-randersgp-round1', track: 'Randers', country: 'Denmark', date: '2020-06', championship: 'Randers Club GP', pos: 2, result: 'First race on the 85' },
        { id: '2020-dm85-round1', track: 'Round 1', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: 'Race 1 P6' },
        { id: '2020-dm85-round2', track: 'Round 2', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: '9-6' },
        { id: '2020-randersgp-round2', track: 'Randers', country: 'Denmark', date: '2020-09', championship: 'Randers Club GP', pos: 1, result: '' },
        { id: '2020-adac-round1', track: 'ADAC debut', country: 'Germany', date: '2020-10', championship: 'ADAC MX Masters', pos: 16, result: '18-14' },
        { id: '2020-randersgp-round3', track: 'Randers', country: 'Denmark', date: '2020-10', championship: 'Randers Club GP', pos: 1, result: 'Series winner' }
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
        { id: '2019-emx65-round1', track: 'Slagelse', country: 'Denmark', date: '2019-05', championship: 'EMX65', pos: 15, result: '17-12' },
        { id: '2019-dm65-round3', track: 'Round 3', country: 'Denmark', date: '2019-05', championship: 'Danish Championship 65cc', pos: 3, result: '4-3' },
        { id: '2019-emx65-round2', track: 'Arnhem', country: 'Netherlands', date: '2019-06', championship: 'EMX65', pos: null, result: 'Two top-20 motos' },
        { id: '2019-jwc-round1', track: 'Arco di Trento', country: 'Italy', date: '2019-07', championship: 'FIM Junior World Championship 65cc', pos: null, result: 'Last chance qualifier' },
        { id: '2019-dm65-round4', track: 'Round 4', country: 'Denmark', date: '2019-08', championship: 'Danish Championship 65cc', pos: null, result: '4-5' },
        { id: '2019-club-round1', track: 'Mors', country: 'Denmark', date: '2019-08', championship: 'Club race', pos: 2, result: '1-2' },
        { id: '2019-dm65-round5', track: 'Round 5', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '2-2' },
        { id: '2019-randersgp-round1', track: 'Randers', country: 'Denmark', date: '2019-09', championship: 'Randers Club GP', pos: 1, result: 'Series winner' },
        { id: '2019-dm65-round6', track: 'Final', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '1-3 · 3rd in championship' },
        { id: '2019-blucru-round1', track: 'Assen (MXoN)', country: 'Netherlands', date: '2019-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 3, result: '' }
      ]
    }
  ],

  /* Media page gallery. `image` follows the same rules as `images`
     above; `label` is shown on the photo and used as its alt text. */
  media: {
    gallery: [
      { image: 'images/gallery-01.jpg', size: 'large', label: 'Roosting the sand, Australia 2026' },
      { image: 'images/gallery-02.jpg', size: 'normal', label: 'Victorian Motocross Championship 2026' },
      { image: 'images/gallery-03.jpg', size: 'normal', label: 'Corner exit, Australia 2026' },
      { image: 'images/gallery-04.jpg', size: 'normal', label: 'Number 215, Australia 2026' },
      { image: 'images/gallery-05.jpg', size: 'large', label: 'Late light, Australia 2026' },
      { image: 'images/gallery-06.jpg', size: 'normal', label: 'In front of the crowd, Europe 2025' },
      { image: 'images/gallery-07.jpg', size: 'normal', label: 'Over the rocks, 2025' },
      { image: 'images/gallery-08.jpg', size: 'normal', label: 'Germany 2025' },
      { image: 'images/gallery-09.jpg', size: 'large', label: 'Europe 2025' },
      { image: 'images/gallery-10.jpg', size: 'normal', label: 'In the pits, 2025' },
      { image: 'images/gallery-11.jpg', size: 'normal', label: 'Race face' },
      { image: 'images/gallery-12.jpg', size: 'normal', label: 'Number 5 Yamaha, 2023' }
    ]
  },

  /* Current partners. `lead` is the large card at the top of the
     Sponsors page; `partners` are the cards below it. */
  /* Current partners. `tier` is a tier id from packages.tiers. The
     Partners page shows one section per tier that has partners,
     highest tier first, and the home page logo strip lists them all.

     A partner with `page` content gets a page of its own at
     #partner-<id>, opened from its card on the Partners page. It is
     not in the top menu. Every Gold partner should get one; until
     its content is written the card simply has no page button.

     Images can be a file in images/ or a full https:// address. */
  partners: [
    {
      id: 'onpoint',
      tier: 'title',
      name: 'OnPoint Suspension',
      type: 'Suspension',
      summary: 'Suspension specialists in Croydon South who set up Frederik\'s bike and look after him at the track.',
      logo: { src: 'https://www.onpointmotorcycles.com.au/cdn/shop/files/OPS_Horizontal_Dark.jpg?v=1761028379&width=800', alt: 'On Point Motorcycles & Suspension logo' },
      page: {
        fullName: 'On Point Motorcycles & Suspension',
        tagline: 'Suspension specialists in Melbourne\'s east',

        withFrederikHeading: 'HOW ONPOINT BACKS FREDERIK',
        withFrederik: [
          'OnPoint sets up Frederik\'s suspension and looks after him at the races. When his shock needed fixing during a race weekend this season, they sorted it in the pits.',
          'They have backed him through his first season in Australia, and you will find them tagged in almost every race report on his Instagram.'
        ],

        // Shown top right of the page; the logo sits in the "About"
        // section. Taken from the OnPoint website; ask OnPoint for a
        // copy to keep in images/.
        photo: { src: 'https://www.onpointmotorcycles.com.au/cdn/shop/files/IMG_20250922_200757_290_1.webp?v=1764649883&width=1500', alt: 'On Point Motorcycles & Suspension' },

        aboutHeading: 'ABOUT ONPOINT',
        about: [
          'On Point Motorcycles & Suspension is a workshop in Croydon South, about 15 minutes from EastLink in Melbourne\'s eastern suburbs. The team has more than 15 years in the motorcycle industry, as riders and as technicians.',
          'They service and tune all makes and models, from motocross and enduro to adventure bikes, and set suspension up for each rider\'s weight, skill and riding style, from weekend riders to pro racers. Parts go out by post every day, anywhere in Australia.'
        ],
        facts: [
          'WP Authorised Dealer',
          'WP Suspension National Sales #1 Dealer, 2025',
          'Authorised Fox and RockShox service centre',
          '15+ years as riders and technicians'
        ],

        servicesHeading: 'WHAT THEY DO',
        services: [
          { title: 'Suspension servicing', desc: 'Fork seals, shock services and hour-based services, using SKF, K-Tech, WP, KYB, Showa and Maxima parts and fluids.' },
          { title: 'Setup and revalving', desc: 'Springs and valving set up for your weight and riding, with packages from Track Rider and Clubman up to Expert and Pro.' },
          { title: 'Coatings and custom builds', desc: 'Kashima, Ti Nitride and hard-anodised finishes for forks and shocks. In their words: "If you have a vision we can make it a reality."' },
          { title: 'Restoration and vintage', desc: 'Re-chroming, zinc plating, polishing and vintage MX setups. Restoring suspension is one of their greatest passions.' },
          { title: 'Bike servicing and rebuilds', desc: 'Everything from a basic service and repairs to full engine rebuilds.' },
          { title: 'Mountain bike suspension', desc: 'Fox and RockShox servicing, warranty repairs and performance upgrades.' }
        ],

        contact: {
          address: '6/54 Merrindale Drive, Croydon South VIC 3136',
          phone: '+61 403 527 105',
          website: { label: 'onpointmotorcycles.com.au', url: 'https://www.onpointmotorcycles.com.au/' },
          services: { label: 'Services and prices', url: 'https://www.onpointmotorcycles.com.au/pages/suspension-services' },
          instagram: { label: '@onpoint_suspension', url: 'https://www.instagram.com/onpoint_suspension/' },
          booking: { label: 'Contact OnPoint', url: 'https://www.onpointmotorcycles.com.au/pages/contact' }
        }
      }
    },
    {
      id: 'nofear',
      tier: 'title',
      name: 'No Fear Motocross',
      type: 'Riding Gear',
      summary: 'Motocross gear partner for the 2026 season.',
      // Taken from vectorseek.com; ask No Fear for a copy to keep in
      // images/.
      logo: { src: 'https://vectorseek.com/wp-content/uploads/2021/01/No-Fear-Logo-Vector.jpg', alt: 'No Fear logo' }
    }
  ],

  /* Partner tiers, smallest first. `tiers` is the single place for
     each tier's name, short name and optional badge: the Partnership page cards
     (title and "Ask about <short>" button) and the tier menu on the
     Get in Touch form are built from it. No prices are shown on the
     site: every partnership is tailored.

     `sponsorValue` holds the card wording for each tier (with an
     included/excluded feature list), matched by `tier` id. */
  packages: {
    tiers: [
      { id: 'support', name: 'Bronze Partner', short: 'Bronze' },
      { id: 'major', name: 'Silver Partner', short: 'Silver' },
      { id: 'title', name: 'Gold Partner', short: 'Gold' }
    ],
    sponsorValue: [
      {
        tier: 'support',
        intro: 'For a local business or a fan of the sport who wants to help with the basics and follow the season up close.',
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
        tier: 'major',
        intro: 'Helps cover a real part of the season, such as getting to the Pro MX rounds, with your logo on the bike at every race.',
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
        tier: 'title',
        intro: 'The main partner of Frederik\'s season, including the trailer or van that gets him to every race.',
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
      { name: 'Instagram', followers: '12,400', reach: '18,200', engagement: '8.2%', growth: '+320 / mo', growthColor: 'success' },
      { name: 'TikTok', followers: '18,700', reach: '22,400', engagement: '11.4%', growth: '+890 / mo', growthColor: 'success' },
      { name: 'YouTube', followers: '4,200', reach: '3,800', engagement: '5.1%', growth: '+140 / mo', growthColor: 'success' },
      { name: 'Facebook', followers: '3,100', reach: '2,600', engagement: '3.2%', growth: '+45 / mo', growthColor: 'dim' }
    ],
    campaigns: [
      { name: 'Round 8 Race Coverage', impressions: '24,800', clicks: '640', ctr: '2.6%', status: 'Active', statusColor: 'green' },
      { name: 'Fox Racing Gear Feature', impressions: '18,200', clicks: '420', ctr: '2.3%', status: 'Active', statusColor: 'green' },
      { name: 'Championship Leader Story', impressions: '31,400', clicks: '890', ctr: '2.8%', status: 'Completed', statusColor: 'sand' }
    ]
  }

};
