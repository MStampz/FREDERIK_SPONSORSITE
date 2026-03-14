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
  const target = new Date('2026-09-06T09:00:00');

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
