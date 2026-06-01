// theme-sync.js — shared across all MetricTree pages.
// 1. Reads theme preference from localStorage (set by main app) and applies it.
// 2. Adds a small toggle button to the nav (top-right) for switching theme.
// 3. Writes back to localStorage so main app sees the change.
//
// Loaded as <script src="/theme-sync.js" defer></script> on every page that
// isn't the main /index.html (which has its own full theme system).
//
// Storage key matches main app: 'metricsTree_theme' with values 'light' | 'dark'.

(function () {
  'use strict';

  var KEY = 'metricsTree_theme';

  function applyTheme(theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
    } catch (e) {}
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function readPreference() {
    try {
      var stored = localStorage.getItem(KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function writePreference(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  // Apply theme as early as possible to prevent flash of wrong theme
  var initialTheme = readPreference();
  applyTheme(initialTheme);

  // Add a toggle button to the nav, if a nav exists.
  function setupToggle() {
    if (document.querySelector('.theme-toggle-shared, #themeToggle')) return;

    var nav = document.querySelector('.nav, nav.nav');
    if (!nav) return;

    // Look for the right-side container of the nav (usually last <div>)
    var rightDiv = nav.querySelector('div:last-child');
    if (!rightDiv || rightDiv === nav.firstElementChild) {
      // Fallback: append button directly to nav
      rightDiv = nav;
    }

    var btn = document.createElement('button');
    btn.className = 'theme-toggle-shared';
    btn.setAttribute('aria-label', 'Switch theme');
    btn.setAttribute('title', 'Switch light/dark theme');
    btn.style.cssText = [
      'background:transparent',
      'border:1px solid var(--border, rgba(128,128,128,0.3))',
      'border-radius:6px',
      'padding:.32rem .55rem',
      'cursor:pointer',
      'font-size:1rem',
      'line-height:1',
      'margin-left:.6rem',
      'opacity:.7',
      'transition:opacity .15s, border-color .15s',
      'color:inherit'
    ].join(';');

    btn.addEventListener('mouseenter', function () { btn.style.opacity = '1'; });
    btn.addEventListener('mouseleave', function () { btn.style.opacity = '.7'; });
    btn.addEventListener('focus', function () { btn.style.opacity = '1'; });
    btn.addEventListener('blur', function () { btn.style.opacity = '.7'; });

    function updateIcon() {
      btn.textContent = getCurrentTheme() === 'dark' ? '☀' : '🌙';
    }

    btn.addEventListener('click', function () {
      var current = getCurrentTheme();
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      writePreference(next);
      updateIcon();
    });

    updateIcon();
    rightDiv.appendChild(btn);
  }

  // Listen for theme changes from OTHER tabs (cross-tab sync)
  window.addEventListener('storage', function (e) {
    if (e.key === KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
      applyTheme(e.newValue);
      var btn = document.querySelector('.theme-toggle-shared');
      if (btn) btn.textContent = e.newValue === 'dark' ? '☀' : '🌙';
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupToggle);
  } else {
    setupToggle();
  }
})();
