/* ============================================================
   FREDERIK RAHN STAMPE #74 — SPA JavaScript
   Routing, Animations, Interactions
   ============================================================ */

'use strict';

/* ---- Constants ---- */
const PAGES = ['home', 'sponsor-value', 'results', 'media', 'calendar', 'story', 'sponsors', 'dashboard', 'contact'];
const NAV_MAP = {
  'home': 'Home',
  'sponsor-value': 'Sponsor Value',
  'results': 'Results',
  'media': 'Media',
  'calendar': 'Calendar',
  'story': 'Story',
  'sponsors': 'Sponsors',
  'dashboard': 'Dashboard',
  'contact': 'Contact'
};

let currentPage = 'home';
let mobileNavOpen = false;

/* ============================================================
   DATA-DRIVEN RENDERING
   Populates DOM containers from SITE_DATA (data.js). All content
   that changes over a season lives in data.js — edit values there,
   not here.
   ============================================================ */

function bindField(field, value) {
  document.querySelectorAll(`[data-field="${field}"]`).forEach(el => { el.textContent = value; });
}

function renderIdentity() {
  const { site, contact } = SITE_DATA;
  bindField('site-name', site.name);
  bindField('site-sub', site.tagline);
  bindField('contact-email', contact.email);
  bindField('contact-phone', contact.phone);
  bindField('contact-location', contact.location);
  bindField('contact-location-flag', `${contact.location} 🇸🇪`);

  const mailto = document.getElementById('mailto-email-link');
  if (mailto) mailto.href = `mailto:${contact.email}`;
}

function renderSeasonMetrics() {
  const m = SITE_DATA.seasonMetrics;
  const races = document.getElementById('metric-races');
  const podiums = document.getElementById('metric-podiums');
  const wins = document.getElementById('metric-wins');
  const reach = document.getElementById('metric-reach');
  const views = document.getElementById('metric-views');
  if (races) races.dataset.target = m.races;
  if (podiums) podiums.dataset.target = m.podiums;
  if (wins) wins.dataset.target = m.wins;
  if (reach) reach.innerHTML = `${m.socialReach}<span style="font-size:0.55em;color:var(--text-2);">${m.socialReachSuffix}</span>`;
  if (views) views.innerHTML = `${m.videoViews}<span style="font-size:0.55em;color:var(--text-2);">${m.videoViewsSuffix}</span>`;
}

function renderHomeHighlights() {
  const container = document.getElementById('home-highlights-container');
  if (!container) return;
  container.innerHTML = SITE_DATA.homeHighlights.map((race, i) => `
    <div class="hp-race-card animate-fade-up${i > 0 ? ' animate-delay-' + i : ''}">
      <div class="hp-race-img-wrap">
        <img src="https://picsum.photos/seed/${race.imageSeed}/800/500" alt="${race.title} race photo" loading="lazy" />
        <div class="hp-race-result ${race.resultClass}">${race.posLabel}</div>
      </div>
      <div class="hp-race-body">
        <div class="hp-race-meta">${race.metaLine}</div>
        <h3 class="hp-race-name">${race.title}</h3>
        <p class="hp-race-summary">${race.summary}</p>
      </div>
    </div>
  `).join('');
}

function renderCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const items = SITE_DATA.carouselLogos.map(name => `<div class="hp-carousel-item"><div class="hp-carousel-logo">${name}</div></div>`).join('');
  track.innerHTML = items + items; // duplicated for seamless loop
}

function renderResultsTable() {
  const tbody = document.getElementById('results-tbody');
  if (!tbody) return;
  tbody.innerHTML = SITE_DATA.raceResults
    .filter(r => !r.upcoming)
    .map(r => {
      const roundNum = String(r.round).padStart(2, '0');
      return `
      <tr>
        <td><span class="round-num">${roundNum}</span></td>
        <td><span class="track-name">${r.track}</span></td>
        <td>${r.flag} ${r.country}</td>
        <td>${r.shortDate}</td>
        <td>${r.championship}</td>
        <td><span class="pos-badge pos-${r.pos}">P${r.pos}</span></td>
      </tr>`;
    }).join('');
}

function renderCalendar() {
  const races = SITE_DATA.raceResults;
  const nextRace = races.find(r => r.upcoming);
  const extra = SITE_DATA.calendar.nextRace;

  const venue = document.getElementById('next-race-venue');
  const country = document.getElementById('next-race-country');
  const round = document.getElementById('next-race-round');
  const date = document.getElementById('next-race-date');
  if (venue) venue.textContent = nextRace.track.toUpperCase();
  if (country) country.textContent = `${nextRace.flag} ${nextRace.country}`;
  if (round) round.textContent = `Round ${nextRace.round} of ${races.length}`;
  if (date) date.textContent = nextRace.fullDate;

  const badgesEl = document.getElementById('next-race-badges');
  if (badgesEl) {
    badgesEl.innerHTML = extra.badges.map((b, i) => `<span class="badge ${i === 0 ? 'badge-gold' : 'badge-sand'}">${b}</span>`).join('')
      + `<span style="font-family:'Space Grotesk',sans-serif; font-size:13px; color:var(--text-2);" id="next-race-note">${extra.note}</span>`;
  }

  const contactVenue = document.getElementById('contact-next-race-venue');
  const contactDate = document.getElementById('contact-next-race-date');
  if (contactVenue) contactVenue.textContent = `${nextRace.track}, ${nextRace.country}`;
  if (contactDate) contactDate.textContent = nextRace.fullDate;

  const grid = document.getElementById('race-grid-container');
  if (grid) {
    grid.innerHTML = races.map((race, i) => {
      const isNext = !!race.upcoming;
      const win = race.pos === 1;
      const delay = i === 0 ? '' : ` animate-delay-${((i - 1) % 3) + 1}`;
      const goldStyle = isNext ? ' style="color:var(--gold);"' : '';
      const resultOrFinale = isNext
        ? `<div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(196,151,62,0.15);">
             <span class="badge badge-gold" style="font-size:10px;">Season Finale · Home Race</span>
           </div>`
        : `<div class="race-result">
             <span class="race-result-pos"${race.pos === 4 ? ' style="color:var(--text-2);"' : ''}>P${race.pos}</span>
             <span style="font-family:'Space Grotesk',sans-serif; font-size:13px; color:var(--text-3);">${race.points} points</span>
             ${win ? '<span class="badge badge-gold" style="margin-left:auto; font-size:9px;">WIN</span>' : ''}
           </div>`;
      return `
        <div class="race-card ${isNext ? 'next' : 'completed'} animate-fade-up${delay}">
          <div class="race-card-header">
            <span class="race-round"${goldStyle}>Round ${race.round}</span>
            <span class="race-status ${isNext ? 'status-next' : 'status-completed'}">${isNext ? 'Next Race' : 'Completed'}</span>
          </div>
          <div class="race-venue"${goldStyle}>${race.track}</div>
          <div class="race-location">${race.flag} ${race.country}</div>
          <div class="race-date"${isNext ? ' style="color:var(--text);"' : ''}>${race.fullDate}</div>
          ${resultOrFinale}
        </div>`;
    }).join('');
  }
}

function renderMedia() {
  const m = SITE_DATA.media;
  const photos = document.getElementById('media-stat-photos');
  const videos = document.getElementById('media-stat-videos');
  const press = document.getElementById('media-stat-press');
  if (photos) photos.textContent = m.stats.photos;
  if (videos) videos.textContent = m.stats.videos;
  if (press) press.textContent = m.stats.pressFeatures;

  const gallery = document.getElementById('gallery-container');
  if (gallery) {
    gallery.innerHTML = m.gallery.map(item => `
      <div class="gallery-item${item.size === 'large' ? ' large' : ''}">
        <img src="https://picsum.photos/seed/${item.seed}/800/600" alt="Race action ${item.seed}" loading="lazy" />
        <div class="gallery-item-overlay"><span class="gallery-item-label">${item.label}</span></div>
      </div>
    `).join('');
  }
}

function toTitleCase(str) {
  return str.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
}

function renderSponsors() {
  const s = SITE_DATA.sponsors;

  const titleContainer = document.getElementById('title-sponsor-container');
  if (titleContainer) {
    const badgesHtml = s.title.badges.map((b, i) => `<span class="badge ${i === 0 ? 'badge-gold' : 'badge-sand'}">${b}</span>`).join('');
    titleContainer.innerHTML = `
      <div>
        <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:12px;">${s.title.tagline}</div>
        <div class="sponsor-logo-text">${s.title.name}</div>
        <p class="sponsor-desc">${s.title.desc}</p>
        <div style="margin-top:20px; display:flex; gap:12px; flex-wrap:wrap;">${badgesHtml}</div>
      </div>
      <div style="text-align:center; padding:32px; background:rgba(196,151,62,0.06); border:1px solid rgba(196,151,62,0.15); border-radius:12px; min-width:180px;">
        <div style="font-family:'Bebas Neue',sans-serif; font-size:80px; color:rgba(196,151,62,0.4); line-height:1; letter-spacing:0.04em;">${s.title.initial}</div>
        <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; color:var(--text-3); letter-spacing:0.1em; text-transform:uppercase; margin-top:8px;">${toTitleCase(s.title.name)}</div>
      </div>`;
  }

  const officialContainer = document.getElementById('official-partners-container');
  if (officialContainer) {
    officialContainer.innerHTML = s.official.map((p, i) => `
      <div class="partner-card animate-fade-up${i > 0 ? ' animate-delay-' + i : ''}">
        <div style="font-size:40px; margin-bottom:12px;">${p.icon}</div>
        <div class="partner-logo-text">${p.name}</div>
        <div class="partner-type">${p.type}</div>
        <p style="font-size:13px; color:var(--text-2); margin-top:12px; line-height:1.6;">${p.desc}</p>
        <div style="margin-top:16px; display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
          <span class="badge badge-sand">${p.badge}</span>
        </div>
      </div>
    `).join('');
  }

  const supportingContainer = document.getElementById('supporting-sponsors-container');
  if (supportingContainer) {
    supportingContainer.innerHTML = s.supporting.map((p, i) => `
      <div class="supporting-card animate-fade-up${i > 0 ? ' animate-delay-' + i : ''}">
        <div style="font-size:24px; margin-bottom:8px;">${p.icon}</div>
        <div class="supporting-logo">${p.name}</div>
        <div class="supporting-type">${p.type}</div>
      </div>
    `).join('');
  }
}

function renderPackages() {
  const p = SITE_DATA.packages;

  const svContainer = document.getElementById('sv-packages-container');
  if (svContainer) {
    svContainer.innerHTML = p.sponsorValue.map((pkg, i) => `
      <div class="sv-pkg-card${pkg.featured ? ' sv-pkg-featured' : ''} animate-fade-up${i > 0 ? ' animate-delay-' + i : ''}">
        ${pkg.featured ? `<div class="sv-pkg-popular-badge">${pkg.badge}</div>` : ''}
        <div class="sv-pkg-tier-label">${pkg.tier}</div>
        <div class="sv-pkg-price">From <strong>${pkg.price}</strong><span>${pkg.priceSuffix}</span></div>
        <p class="sv-pkg-intro">${pkg.intro}</p>
        <div class="sv-pkg-sep"></div>
        <ul class="sv-pkg-list">
          ${pkg.features.map(f => `<li class="${f.included ? 'sv-feat-y' : 'sv-feat-n'}">${f.text}</li>`).join('')}
        </ul>
        <button class="btn ${pkg.ctaStyle === 'primary' ? 'btn-primary' : 'btn-outline'} sv-pkg-cta" data-goto="contact">${pkg.ctaLabel}</button>
      </div>
    `).join('');
  }

  const contactContainer = document.getElementById('contact-packages-container');
  if (contactContainer) {
    contactContainer.innerHTML = p.contact.map(pkg => `
      <div class="package-card${pkg.featured ? ' featured' : ''}">
        ${pkg.featured ? `<div class="package-popular">${pkg.badge}</div>` : ''}
        <div class="package-tier"${pkg.featured ? ' style="color:var(--gold);"' : ''}>${pkg.tier}</div>
        <div class="package-price">${pkg.price}</div>
        <div class="package-price-sub">${pkg.priceSuffix}</div>
        <ul class="package-features">
          ${pkg.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <button class="btn ${pkg.ctaStyle === 'primary' ? 'btn-primary' : 'btn-outline'}" style="width:100%;" data-goto="contact">${pkg.ctaLabel}</button>
      </div>
    `).join('');
  }
}

function renderDashboard() {
  const d = SITE_DATA.dashboard;

  const sidebar = document.getElementById('dashboard-sidebar-container');
  if (sidebar) {
    sidebar.innerHTML = d.sidebarMetrics.map(m => `
      <div class="sidebar-metric">
        <div class="sidebar-metric-label">${m.label}</div>
        <div class="sidebar-metric-value">${m.type === 'counter'
          ? `<span class="counter" data-target="${m.value}">0</span>`
          : `${m.value}<span style="font-size:0.6em;">${m.suffix}</span>`}</div>
        <div class="sidebar-metric-change">${m.change}</div>
      </div>
    `).join('');
  }

  const chart = document.getElementById('monthly-chart-container');
  if (chart) {
    chart.innerHTML = d.monthlyReach.map(bar => `
      <div class="bar-chart-col">
        <div class="chart-bar-value"${bar.highlight ? ' style="color:var(--gold);"' : ''}>${bar.value}</div>
        <div class="chart-bar" data-bar-height="${bar.heightPct}%"${bar.highlight ? ' style="background: linear-gradient(to top, var(--gold-dark), var(--gold-light));"' : ''}></div>
        <div class="chart-bar-label"${bar.highlight ? ' style="color:var(--gold);"' : ''}>${bar.month}</div>
      </div>
    `).join('');
  }

  const platformTbody = document.getElementById('platform-tbody');
  if (platformTbody) {
    platformTbody.innerHTML = d.platforms.map(p => `
      <tr>
        <td><span class="platform-name">${p.icon} ${p.name}</span></td>
        <td>${p.followers}</td>
        <td>${p.reach}</td>
        <td>${p.engagement}</td>
        <td style="color:var(--${p.growthColor === 'success' ? 'success' : 'text-3'});">${p.growth}</td>
      </tr>
    `).join('');
  }

  const campaignTbody = document.getElementById('campaign-tbody');
  if (campaignTbody) {
    campaignTbody.innerHTML = d.campaigns.map(c => `
      <tr>
        <td><span class="platform-name">${c.name}</span></td>
        <td>${c.impressions}</td>
        <td>${c.clicks}</td>
        <td>${c.ctr}</td>
        <td><span class="badge badge-${c.statusColor === 'green' ? 'green' : 'sand'}" style="font-size:9px;">${c.status}</span></td>
      </tr>
    `).join('');
  }
}

function renderAllData() {
  renderIdentity();
  renderSeasonMetrics();
  renderHomeHighlights();
  renderCarousel();
  renderResultsTable();
  renderCalendar();
  renderMedia();
  renderSponsors();
  renderPackages();
  renderDashboard();
}

/* ============================================================
   SPA ROUTER
   ============================================================ */
function navigateTo(pageId, pushState = true) {
  if (!PAGES.includes(pageId)) pageId = 'home';
  if (pageId === currentPage) { closeMobileNav(); return; }

  const oldPage = document.getElementById('page-' + currentPage);
  const newPage = document.getElementById('page-' + pageId);

  if (!newPage) return;

  // Fade out old
  if (oldPage) {
    oldPage.classList.remove('active');
    oldPage.style.opacity = '0';
    oldPage.style.transform = 'translateY(8px)';
    setTimeout(() => {
      oldPage.style.display = 'none';
      oldPage.style.opacity = '';
      oldPage.style.transform = '';
    }, 300);
  }

  // Show new page after brief delay
  setTimeout(() => {
    newPage.style.display = 'block';
    newPage.style.opacity = '0';
    newPage.style.transform = 'translateY(16px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        newPage.style.opacity = '1';
        newPage.style.transform = 'translateY(0)';
        newPage.classList.add('active');
      });
    });
  }, 150);

  currentPage = pageId;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Push history state
  if (pushState) {
    history.pushState({ page: pageId }, '', '#' + pageId);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Close mobile nav
  closeMobileNav();

  // Trigger page-specific animations
  setTimeout(() => {
    triggerPageAnimations(pageId);
  }, 250);
}

window.addEventListener('popstate', (e) => {
  const page = e.state?.page || getPageFromHash();
  navigateTo(page, false);
});

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  return PAGES.includes(hash) ? hash : 'home';
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  // Logo click
  document.querySelector('.nav-logo').addEventListener('click', () => navigateTo('home'));

  // Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  // Mobile links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', toggleMobileNav);

  // Scroll effect on nav
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function toggleMobileNav() {
  mobileNavOpen = !mobileNavOpen;
  const overlay = document.getElementById('mobileNavOverlay');
  const hamburger = document.getElementById('hamburger');

  if (mobileNavOpen) {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('open'));
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    closeMobileNav();
  }
}

function closeMobileNav() {
  if (!mobileNavOpen) return;
  mobileNavOpen = false;
  const overlay = document.getElementById('mobileNavOverlay');
  const hamburger = document.getElementById('hamburger');
  overlay.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
}

/* ============================================================
   INTERSECTION OBSERVER — FADE UP ANIMATIONS
   ============================================================ */
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Don't unobserve — keep for re-entry on page revisit
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
  return observer;
}

/* ============================================================
   BAR CHART & PROGRESS BAR ANIMATIONS
   ============================================================ */
function animateBars(container) {
  const fills = container.querySelectorAll('[data-bar-width]');
  fills.forEach((fill, i) => {
    setTimeout(() => {
      fill.style.width = fill.dataset.barWidth;
    }, i * 100);
  });

  const heightBars = container.querySelectorAll('[data-bar-height]');
  heightBars.forEach((bar, i) => {
    setTimeout(() => {
      bar.style.height = bar.dataset.barHeight;
    }, i * 80);
  });
}

function initBarObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.animate-bars').forEach(el => observer.observe(el));
}

/* ============================================================
   COUNTER ANIMATIONS
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.textContent, 10);
  const duration = 1600;
  const startTime = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startVal + (target - startVal) * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => observer.observe(el));
}

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
function initCountdown() {
  const target = new Date(SITE_DATA.calendar.nextRace.countdownTarget);

  function update() {
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
      ['days', 'hours', 'mins', 'secs'].forEach(u => {
        const el = document.getElementById('cd-' + u);
        if (el) el.textContent = '00';
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const fmt = n => String(n).padStart(2, '0');
    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-mins');
    const sEl = document.getElementById('cd-secs');
    if (dEl) dEl.textContent = fmt(days);
    if (hEl) hEl.textContent = fmt(hours);
    if (mEl) mEl.textContent = fmt(mins);
    if (sEl) sEl.textContent = fmt(secs);
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   HERO PARALLAX
   ============================================================ */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    if (currentPage !== 'home') return;
    const scrollY = window.scrollY;
    const rate = scrollY * 0.25;
    const glow = hero.querySelector('.hero-glow');
    if (glow) glow.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
  }, { passive: true });
}

/* ============================================================
   DASHBOARD TABS
   ============================================================ */
function initDashboardTabs() {
  document.querySelectorAll('.dash-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'var(--success)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }, 1200);
  });
}

/* ============================================================
   PAGE-SPECIFIC ANIMATION TRIGGERS
   ============================================================ */
function triggerPageAnimations(pageId) {
  const page = document.getElementById('page-' + pageId);
  if (!page) return;

  // Trigger fade-up for visible elements in new page
  page.querySelectorAll('.animate-fade-up').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('in-view');
    }, i * 60);
  });

  // Trigger bar animations
  page.querySelectorAll('.animate-bars').forEach(el => {
    setTimeout(() => animateBars(el), 400);
  });

  // Trigger counters
  page.querySelectorAll('.counter').forEach(el => {
    setTimeout(() => animateCounter(el), 300);
  });
}

/* ============================================================
   GALLERY LIGHTBOX (simple)
   ============================================================ */
function initGallery() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.92);
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; backdrop-filter: blur(8px);
        animation: fadeIn 0.3s ease;
      `;
      const image = document.createElement('img');
      image.src = img.src;
      image.style.cssText = 'max-width: 90vw; max-height: 90vh; border-radius: 8px; object-fit: contain;';
      const close = document.createElement('button');
      close.textContent = '✕';
      close.style.cssText = `
        position: absolute; top: 24px; right: 24px;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
        color: white; font-size: 16px; width: 40px; height: 40px;
        border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
      `;
      overlay.appendChild(image);
      overlay.appendChild(close);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
    });
  });
}

/* ============================================================
   PACKAGE CTA BUTTONS
   ============================================================ */
function initPackageButtons() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.goto));
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render all data-driven content first so subsequent init steps
  // (counters, bar animations, gallery lightbox, package buttons)
  // can find the elements they need.
  renderAllData();

  // Set initial page
  const initialPage = getPageFromHash();

  // Show initial page immediately
  const initPage = document.getElementById('page-' + initialPage);
  if (initPage) {
    initPage.style.display = 'block';
    initPage.classList.add('active');
    initPage.style.opacity = '1';
    initPage.style.transform = 'translateY(0)';
  }

  currentPage = initialPage;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === initialPage);
  });

  // Push initial state
  history.replaceState({ page: initialPage }, '', '#' + initialPage);

  // Init all modules
  initNav();
  initIntersectionObserver();
  initBarObserver();
  initCounters();
  initCountdown();
  initParallax();
  initDashboardTabs();
  initContactForm();
  initGallery();
  initPackageButtons();

  // Trigger animations for initial page
  setTimeout(() => triggerPageAnimations(initialPage), 200);
});
