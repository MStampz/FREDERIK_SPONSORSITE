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
     packages       — sponsorship packages (separate lists for the
                      sponsor-value page's detailed cards and the
                      contact page's simpler cards — see note below)
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
    basedIn: 'Melbourne, Australia'
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
    instagramFollowersSuffix: 'K'
  },

  /* Race highlight cards on the home page. `season` + `race` point at
     a race in `seasons` (race = its position in that season's list,
     starting at 1), which supplies the track, country, date and
     result. `label` overrides the P-number badge when the race has
     no single overall position. */
  homeHighlights: [
    {
      season: 2026, race: 5,
      image: 'https://picsum.photos/seed/mxrace-vic-state/800/500',
      title: 'VICTORIAN STATE CHAMPIONSHIP',
      summary: '3-2-2 for second overall, with two holeshots from three starts and the fastest lap of race 3, leading almost all of it.'
    },
    {
      season: 2026, race: 7,
      image: 'https://picsum.photos/seed/mxrace-vic-titles/800/500',
      title: 'VICTORIAN TITLES',
      summary: 'Third in MX3 on Saturday and second in MX2 on Sunday, racing two classes across one weekend.'
    },
    {
      season: 2025, race: 16,
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
       badge                 — headline result for the season
       summary               — one line for the Story timeline
       nextRace              — optional, only for the current season:
                               { race, badges, note, countdownTarget }
                               where `race` is the race number below
     Race fields:
       track, flag, country, date, championship
       pos     — overall finishing position, or null when there is
                 no single overall result
       result  — short text shown next to/instead of `pos`, e.g.
                 moto scores '3-2-2' or 'DNS'
       upcoming: true — a race not yet run (shown on the Calendar,
                 left out of the Results table) */
  seasons: [
    {
      year: 2026,
      title: '2026 SEASON',
      subtitle: 'First season in Australia, backed by Yamaha City Melbourne — Victorian championships, Pro MX and the MXGP of Australia.',
      badge: 'P2 Victorian State Championship',
      summary: 'Moved to Melbourne. Second at the Victorian State Championship and in MX2 at the Victorian titles, Pro MX debut and a trip to the MXGP of Australia.',
      races: [
        { track: 'Victorian State Titles', flag: '🇦🇺', country: 'Australia', date: '2026-04', championship: 'Victorian State Titles', pos: null, result: 'MX3 6-4-5 · MX2 7-6-5' },
        { track: 'Canberra', flag: '🇦🇺', country: 'Australia', date: '2026-04', championship: 'Pro MX', pos: null, result: '27-25' },
        { track: 'Sandmasters', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Sandmasters', pos: null, result: '1-1-DNF-DNS' },
        { track: 'Gillman', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Pro MX', pos: null, result: '11-17' },
        { track: 'Victorian State Championship', flag: '🇦🇺', country: 'Australia', date: '2026-05', championship: 'Victorian State Championship', pos: 2, result: '3-2-2' },
        { track: 'Appin', flag: '🇦🇺', country: 'Australia', date: '2026-06', championship: 'Pro MX', pos: null, result: 'Round 5' },
        { track: 'Victorian Titles', flag: '🇦🇺', country: 'Australia', date: '2026-07', championship: 'Victorian Titles MX2', pos: 2, result: 'MX3 P3' },
        { track: 'Victorian Championship', flag: '🇦🇺', country: 'Australia', date: '2026-08', championship: 'Victorian Championship MX3', pos: 3, result: 'P2 in championship' },
        { track: 'Darwin', flag: '🇦🇺', country: 'Australia', date: '2026-09', championship: 'MXGP of Australia', pos: null, result: 'DNS' }
      ]
    },
    {
      year: 2025,
      title: '2025 SEASON',
      subtitle: 'MX2 on a Yamaha 250 with Wozniak MX Racing Team — Danish championship, ADAC MX Masters and EMX250.',
      badge: '4th Danish MX2 Championship',
      summary: 'Stepped up to the 250. Fourth in the Danish MX2 championship, two points off the podium, plus ADAC MX Masters and EMX250. His own word for it: a breakthrough year.',
      races: [
        { track: 'Lierop', flag: '🇳🇱', country: 'Netherlands', date: '2025-02', championship: 'Dutch MX season opener', pos: null, result: 'B-final P4' },
        { track: 'Sønderborg', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Winter Cup', pos: null, result: 'DNF-7' },
        { track: 'Korskro', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '11-8' },
        { track: 'Vesterbæk', flag: '🇩🇰', country: 'Denmark', date: '2025-03', championship: 'Pre-season race', pos: null, result: '6-DNF' },
        { track: 'Drehna', flag: '🇩🇪', country: 'Germany', date: '2025-04', championship: 'ADAC MX Masters', pos: null, result: 'LCQ P5' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2025-05', championship: 'Fastlane MX Masters', pos: 5, result: '3-9' },
        { track: 'Mölln', flag: '🇩🇪', country: 'Germany', date: '2025-05', championship: 'ADAC MX Masters', pos: 31, result: '27-33-30' },
        { track: 'Hjørring', flag: '🇩🇰', country: 'Denmark', date: '2025-05', championship: 'Danish Championship MX2', pos: 4, result: '6-3' },
        { track: 'Dreetz', flag: '🇩🇪', country: 'Germany', date: '2025-06', championship: 'ADAC MX Masters', pos: null, result: 'DNF-23-29' },
        { track: 'Herning', flag: '🇩🇰', country: 'Denmark', date: '2025-06', championship: 'Danish Championship MX2', pos: 6, result: '7-6' },
        { track: 'Tensfeld', flag: '🇩🇪', country: 'Germany', date: '2025-07', championship: 'ADAC MX Masters', pos: null, result: 'DNS-24-DNF' },
        { track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', date: '2025-08', championship: 'EMX250', pos: null, result: '' },
        { track: 'Esbjerg', flag: '🇩🇰', country: 'Denmark', date: '2025-08', championship: 'Danish Championship MX2', pos: null, result: '8-7' },
        { track: 'Danish Club Championship', flag: '🇩🇰', country: 'Denmark', date: '2025-09', championship: 'Danish Club Championship', pos: null, result: '10-6' },
        { track: 'Holzgerlingen', flag: '🇩🇪', country: 'Germany', date: '2025-09', championship: 'ADAC MX Masters', pos: null, result: 'DNS-DNS-33' },
        { track: 'Season final', flag: '🇩🇰', country: 'Denmark', date: '2025-09', championship: 'Danish Championship MX2', pos: null, result: '6-4 · 4th in championship' }
      ]
    },
    {
      year: 2024,
      title: '2024 SEASON',
      subtitle: '125 with Wozniak MX Racing Team — EMX125, Junior World Championship, ADAC and the Danish championship.',
      badge: '3rd Danish Championship',
      summary: 'Third overall in the Danish championship. Raced EMX125, the Junior World Championship and ADAC, qualified second in his first ever 250 race, and ninth at the bLU cRU SuperFinale.',
      races: [
        { track: 'Lierop', flag: '🇳🇱', country: 'Netherlands', date: '2024-03', championship: 'Dutch season opener', pos: 13, result: '' },
        { track: 'Riola Sardo', flag: '🇮🇹', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: '25-22' },
        { track: 'Arco di Trento', flag: '🇮🇹', country: 'Italy', date: '2024-04', championship: 'EMX125', pos: null, result: 'DNQ' },
        { track: 'Svendborg', flag: '🇩🇰', country: 'Denmark', date: '2024-04', championship: 'Danish Championship', pos: 4, result: '' },
        { track: 'Dreetz', flag: '🇩🇪', country: 'Germany', date: '2024-04', championship: 'ADAC MX Masters', pos: null, result: '26-11' },
        { track: 'Danish Championship MX2', flag: '🇩🇰', country: 'Denmark', date: '2024-05', championship: 'Danish Championship MX2', pos: 13, result: '15-13 on a 125' },
        { track: 'Vellahn', flag: '🇩🇪', country: 'Germany', date: '2024-05', championship: 'ADAC MX Masters', pos: null, result: '20-22-24' },
        { track: 'Herning', flag: '🇩🇰', country: 'Denmark', date: '2024-06', championship: 'Danish Championship', pos: null, result: '6-3' },
        { track: 'Heerde', flag: '🇳🇱', country: 'Netherlands', date: '2024-07', championship: 'Dutch Nationals', pos: null, result: '10-15' },
        { track: 'Junior World Championship', flag: '🇳🇱', country: 'Netherlands', date: '2024-07', championship: 'FIM Junior World Championship 125', pos: null, result: 'DNQ' },
        { track: 'Uddevalla', flag: '🇸🇪', country: 'Sweden', date: '2024-08', championship: 'EMX125', pos: null, result: '28-DNF' },
        { track: 'Hedeland', flag: '🇩🇰', country: 'Denmark', date: '2024-09', championship: 'Danish Championship', pos: null, result: 'Race 1 P4' },
        { track: 'First 250 race', flag: '🇩🇰', country: 'Denmark', date: '2024-09', championship: 'Danish Championship MX2', pos: null, result: 'Qualified P2 · DNF-DNF' },
        { track: 'bLU cRU SuperFinale', flag: '🇬🇧', country: 'United Kingdom', date: '2024-10', championship: 'Yamaha bLU cRU', pos: 9, result: '' }
      ]
    },
    {
      year: 2023,
      title: '2023 SEASON',
      subtitle: 'First year on the 125 with Wozniak MX Racing Team — Danish championship, Danish MX2 against the 250s, and ADAC MX Masters.',
      badge: '4th Danish Championship',
      summary: 'Joined Wozniak MX Racing Team on a 125. Fourth in the Danish championship, raced Danish MX2 against the 250s and ADAC, and 11th at the bLU cRU SuperFinale in Ernée.',
      races: [
        { track: 'Season opener', flag: '🇩🇰', country: 'Denmark', date: '2023-03', championship: 'First race on the 125', pos: 2, result: '2-2' },
        { track: 'Fürstlich Drehna', flag: '🇩🇪', country: 'Germany', date: '2023-04', championship: 'ADAC MX Masters', pos: null, result: '22-DNF' },
        { track: 'Han Herred', flag: '🇩🇰', country: 'Denmark', date: '2023-04', championship: 'Danish Championship', pos: 5, result: '5-5' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2023-05', championship: 'Danish Championship MX2', pos: null, result: '23-31' },
        { track: 'Mölln', flag: '🇩🇪', country: 'Germany', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '37-31' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2023-05', championship: 'ADAC MX Masters', pos: null, result: '33-23' },
        { track: 'Svebølle', flag: '🇩🇰', country: 'Denmark', date: '2023-06', championship: 'Danish Championship', pos: null, result: '6-6' },
        { track: 'Svendborg', flag: '🇩🇰', country: 'Denmark', date: '2023-07', championship: 'Danish Championship MX2', pos: null, result: '18-16 (DSQ)' },
        { track: 'Gaildorf', flag: '🇩🇪', country: 'Germany', date: '2023-08', championship: 'ADAC MX Masters', pos: null, result: '29-30' },
        { track: 'Mors', flag: '🇩🇰', country: 'Denmark', date: '2023-08', championship: 'Danish Championship MX2', pos: null, result: '23-19' },
        { track: 'Holzgerlingen', flag: '🇩🇪', country: 'Germany', date: '2023-09', championship: 'ADAC MX Masters', pos: null, result: '20-21' },
        { track: 'Næstved', flag: '🇩🇰', country: 'Denmark', date: '2023-09', championship: 'Danish Championship MX2', pos: null, result: '20-21' },
        { track: 'Holstebro', flag: '🇩🇰', country: 'Denmark', date: '2023-10', championship: 'Danish Championship', pos: 4, result: '4-4 · 4th in championship' },
        { track: 'Ernée', flag: '🇫🇷', country: 'France', date: '2023-10', championship: 'Yamaha bLU cRU SuperFinale', pos: 11, result: '' }
      ]
    },
    {
      year: 2022,
      title: '2022 SEASON',
      subtitle: 'Official Yamaha contract rider on the 85 with Becker Racing — Danish championship, EMX85 and ADAC MX Masters.',
      badge: 'Danish Vice Champion 85cc',
      summary: 'Official Yamaha contract rider. Danish vice champion in 85cc for the second year running, with two round wins and the red plate along the way, plus EMX85 and ADAC.',
      races: [
        { track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2022-04', championship: 'Danish Championship 85cc', pos: 3, result: '5-1' },
        { track: 'Lommel', flag: '🇧🇪', country: 'Belgium', date: '2022-05', championship: 'EMX85', pos: 14, result: '15-16' },
        { track: 'Emmen', flag: '🇳🇱', country: 'Netherlands', date: '2022-05', championship: 'EMX85', pos: null, result: 'Bike problem · 24' },
        { track: 'ADAC round 1', flag: '🇩🇪', country: 'Germany', date: '2022-05', championship: 'ADAC MX Masters', pos: null, result: 'No points' },
        { track: 'Round 2', flag: '🇩🇰', country: 'Denmark', date: '2022-06', championship: 'Danish Championship 85cc', pos: 3, result: '3-4 · took the red plate' },
        { track: 'Kaplice', flag: '🇨🇿', country: 'Czech Republic', date: '2022-06', championship: 'EMX85', pos: null, result: '27-19' },
        { track: 'Gaildorf', flag: '🇩🇪', country: 'Germany', date: '2022-08', championship: 'ADAC MX Masters', pos: 15, result: '17-15' },
        { track: 'Round 3', flag: '🇩🇰', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: null, result: '9-9' },
        { track: 'Round 4', flag: '🇩🇰', country: 'Denmark', date: '2022-08', championship: 'Danish Championship 85cc', pos: 1, result: '1-2' },
        { track: 'Round 5', flag: '🇩🇰', country: 'Denmark', date: '2022-09', championship: 'Danish Championship 85cc', pos: 1, result: '1-3' },
        { track: 'ADAC final', flag: '🇩🇪', country: 'Germany', date: '2022-10', championship: 'ADAC MX Masters', pos: null, result: '18-14' }
      ]
    },
    {
      year: 2021,
      title: '2021 SEASON',
      subtitle: 'First full season on the 85, with EasyMX and Becker Racing — Danish championship, Lytzen Cup, ADAC MX Masters and EMX85.',
      badge: 'Danish Vice Champion 85cc',
      summary: 'Danish vice champion in 85cc, Lytzen Cup winner and second at the Yamaha bLU cRU SuperFinale in Mantova. Joined Becker Racing mid-season and debuted in EMX85.',
      races: [
        { track: 'Season opener', flag: '🇩🇰', country: 'Denmark', date: '2021-04', championship: 'Club race', pos: 1, result: '1-1' },
        { track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-04', championship: 'Danish Championship 85cc', pos: null, result: '2-3' },
        { track: 'Lytzen Cup round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { track: 'Qualifier round 3', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Danish Championship 85cc', pos: 1, result: '2-1' },
        { track: 'Lytzen Cup round 2', flag: '🇩🇰', country: 'Denmark', date: '2021-05', championship: 'Lytzen Cup', pos: 2, result: '2-2' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2021-06', championship: 'Randers Club GP', pos: 1, result: '' },
        { track: 'Lytzen Cup final', flag: '🇩🇰', country: 'Denmark', date: '2021-06', championship: 'Lytzen Cup', pos: 1, result: '1-1 · series winner' },
        { track: 'ADAC round 1', flag: '🇩🇪', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: null, result: 'Qualified 28th of 46' },
        { track: 'Qualifier final', flag: '🇩🇰', country: 'Denmark', date: '2021-07', championship: 'Danish Championship 85cc', pos: 3, result: '4-3' },
        { track: 'Tensfeld', flag: '🇩🇪', country: 'Germany', date: '2021-07', championship: 'ADAC MX Masters', pos: 15, result: '15th of 39' },
        { track: 'Final round 1', flag: '🇩🇰', country: 'Denmark', date: '2021-08', championship: 'Danish Championship 85cc', pos: 2, result: '2-2' },
        { track: 'Slovakia', flag: '🇸🇰', country: 'Slovakia', date: '2021-09', championship: 'EMX85', pos: null, result: '17-16' },
        { track: 'Drehna', flag: '🇩🇪', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 15, result: '13-16' },
        { track: 'Reutlingen', flag: '🇩🇪', country: 'Germany', date: '2021-09', championship: 'ADAC MX Masters', pos: 18, result: '29-15' },
        { track: 'Mantova', flag: '🇮🇹', country: 'Italy', date: '2021-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 2, result: '' }
      ]
    },
    {
      year: 2020,
      title: '2020 SEASON',
      subtitle: 'Rookie year on the 85 with EasyMX and Yamaha — Danish championship, Randers Club GP and an ADAC debut.',
      badge: 'Randers Club GP Winner 85cc',
      summary: 'Moved up to the 85 with EasyMX and Yamaha, won the Randers Club GP series and made his ADAC MX Masters debut.',
      races: [
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-06', championship: 'Randers Club GP', pos: 2, result: 'First race on the 85' },
        { track: 'Round 1', flag: '🇩🇰', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: 'Race 1 P6' },
        { track: 'Round 2', flag: '🇩🇰', country: 'Denmark', date: '2020-08', championship: 'Danish Championship 85cc', pos: null, result: '9-6' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-09', championship: 'Randers Club GP', pos: 1, result: '' },
        { track: 'ADAC debut', flag: '🇩🇪', country: 'Germany', date: '2020-10', championship: 'ADAC MX Masters', pos: 16, result: '18-14' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2020-10', championship: 'Randers Club GP', pos: 1, result: 'Series winner' }
      ]
    },
    {
      year: 2019,
      title: '2019 SEASON',
      subtitle: '65cc on a Yamaha YZ65 — Danish championship, EMX65, the FIM Junior World Championship and the bLU cRU SuperFinale at MXoN.',
      badge: '3rd Danish Championship 65cc',
      summary: 'Third in the Danish 65cc championship and third at the Yamaha bLU cRU SuperFinale at the Motocross of Nations in Assen. Raced EMX65 and the FIM Junior World Championship in Italy.',
      races: [
        { track: 'Slagelse', flag: '🇩🇰', country: 'Denmark', date: '2019-05', championship: 'EMX65', pos: 15, result: '17-12' },
        { track: 'Round 3', flag: '🇩🇰', country: 'Denmark', date: '2019-05', championship: 'Danish Championship 65cc', pos: 3, result: '4-3' },
        { track: 'Arnhem', flag: '🇳🇱', country: 'Netherlands', date: '2019-06', championship: 'EMX65', pos: null, result: 'Two top-20 motos' },
        { track: 'Arco di Trento', flag: '🇮🇹', country: 'Italy', date: '2019-07', championship: 'FIM Junior World Championship 65cc', pos: null, result: 'Last chance qualifier' },
        { track: 'Round 4', flag: '🇩🇰', country: 'Denmark', date: '2019-08', championship: 'Danish Championship 65cc', pos: null, result: '4-5' },
        { track: 'Mors', flag: '🇩🇰', country: 'Denmark', date: '2019-08', championship: 'Club race', pos: 2, result: '1-2' },
        { track: 'Round 5', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '2-2' },
        { track: 'Randers', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Randers Club GP', pos: 1, result: 'Series winner' },
        { track: 'Final', flag: '🇩🇰', country: 'Denmark', date: '2019-09', championship: 'Danish Championship 65cc', pos: 2, result: '1-3 · 3rd in championship' },
        { track: 'Assen (MXoN)', flag: '🇳🇱', country: 'Netherlands', date: '2019-09', championship: 'Yamaha bLU cRU SuperFinale', pos: 3, result: '' }
      ]
    }
  ],

  /* Media page gallery. `image` follows the same rules as `images`
     above; `label` is shown on the photo and used as its alt text. */
  media: {
    gallery: [
      { image: 'https://picsum.photos/seed/mx1/800/600', size: 'large', label: 'Victorian State Championship 2026' },
      { image: 'https://picsum.photos/seed/mx2/800/600', size: 'normal', label: 'Yamaha City Melbourne' },
      { image: 'https://picsum.photos/seed/mx3/800/600', size: 'normal', label: 'Sandmasters 2026' },
      { image: 'https://picsum.photos/seed/mx4/800/600', size: 'normal', label: 'Pro MX Gillman' },
      { image: 'https://picsum.photos/seed/mx5/800/600', size: 'large', label: 'Victorian Titles 2026' },
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

  /* Sponsorship packages, priced in Australian dollars. The
     sponsor-value page (detailed, with an included/excluded feature
     matrix) and the contact page (simple, included-features-only)
     show the same three tiers with different levels of detail —
     tier/badge names below are shared so the two pages can't drift
     out of sync; feature bullet wording is page-specific by design
     (long-form vs short). */
  packages: {
    sponsorValue: [
      {
        tier: 'Support Partner', price: 'A$5,000', priceSuffix: '/season',
        intro: 'A solid entry point for local brands that want to back a young rider in Victorian and Australian motocross.',
        featured: false, ctaLabel: 'Get Started', ctaStyle: 'outline',
        features: [
          { text: 'Jersey logo — arm / back placement', included: true },
          { text: 'Website — sponsors section', included: true },
          { text: '1× dedicated social post / month', included: true },
          { text: 'Race-day story mentions', included: true },
          { text: 'End-of-season report', included: true },
          { text: 'Season photo pack (digital)', included: true },
          { text: 'Helmet branding', included: false },
          { text: 'Bike plastics', included: false },
          { text: 'Paddock branding', included: false },
          { text: 'Brand integration content', included: false }
        ]
      },
      {
        tier: 'Major Partner', price: 'A$13,000', priceSuffix: '/season',
        intro: 'Visibility at the track and online — the best balance of reach and value.',
        featured: true, badge: 'Recommended', ctaLabel: 'Partner With Us', ctaStyle: 'primary',
        features: [
          { text: 'Jersey logo — chest placement', included: true },
          { text: 'Bike plastics — side panel branding', included: true },
          { text: 'Race paddock — banner presence', included: true },
          { text: '2× dedicated social posts / month', included: true },
          { text: 'Website — featured partners section', included: true },
          { text: 'Quarterly report', included: true },
          { text: 'Full season photo pack (hi-res)', included: true },
          { text: '2× brand integration videos / season', included: true },
          { text: 'Helmet branding', included: false },
          { text: 'Transport vehicle wrap', included: false }
        ]
      },
      {
        tier: 'Title Partner', price: 'A$33,000', priceSuffix: '/season',
        intro: 'Full-brand integration as the primary partner, including the transport that gets Frederik to every race.',
        featured: false, ctaLabel: 'Enquire Now', ctaStyle: 'outline',
        features: [
          { text: 'Helmet — full front &amp; rear branding', included: true },
          { text: 'Jersey — chest logo (largest position)', included: true },
          { text: 'Bike plastics — full panel coverage', included: true },
          { text: 'Race transport — full vehicle wrap', included: true },
          { text: 'Paddock canopy — title branding', included: true },
          { text: '4× dedicated social posts / month', included: true },
          { text: 'Website — homepage feature placement', included: true },
          { text: 'Monthly report', included: true },
          { text: 'Full content rights for all media', included: true },
          { text: '3× athlete appearances / year', included: true }
        ]
      }
    ],
    contact: [
      {
        tier: 'Support Partner', price: 'From A$5,000', priceSuffix: 'per season',
        featured: false, ctaLabel: 'Enquire Now', ctaStyle: 'outline',
        features: [
          'Logo on race gear (gloves / goggles)',
          '2 social media mentions per month',
          'Race day photo content featuring your brand',
          'Website partner listing',
          'End-of-season report',
          '1 full season of racing'
        ]
      },
      {
        tier: 'Major Partner', price: 'From A$13,000', priceSuffix: 'per season',
        featured: true, badge: 'Recommended', ctaLabel: 'Get Started', ctaStyle: 'primary',
        features: [
          'Featured logo placement on jersey &amp; helmet',
          '8 social media posts per month',
          'Full content package (photo + video)',
          'Featured website partner section',
          'Race-day activation space',
          'Quarterly report',
          'Branded content stories x4/month',
          'End-of-season report'
        ]
      },
      {
        tier: 'Title Partner', price: 'From A$33,000', priceSuffix: 'per season',
        featured: false, ctaLabel: 'Talk to Management', ctaStyle: 'outline',
        features: [
          'Full branding integration across all assets',
          'Race transport in your livery',
          'Exclusive content creation programme',
          'Personal appearances &amp; brand events',
          'Unlimited social media content',
          'Custom reporting',
          'Bike graphics &amp; team livery',
          'First right of refusal for the following season'
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
