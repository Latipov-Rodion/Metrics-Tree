// ab-test.js — lightweight A/B testing for MetricTree.
//
// Usage in HTML:
//   <script src="/ab-test.js" defer></script>
//   <script>
//     ABTest.experiment('hero_cta', {
//       variants: ['Открыть калькулятор', 'Считать метрики бесплатно'],
//       apply: function(variant, idx) {
//         document.querySelector('#hero-cta').textContent = variant;
//       }
//     });
//
//     // When user converts:
//     ABTest.convert('hero_cta', 'click_cta');
//   </script>
//
// How it works:
// 1. On first visit, picks a random variant (uniform distribution).
// 2. Saves choice in localStorage under 'ab_<experiment>' — sticky across sessions.
// 3. Logs an 'exposure' event via beacon to /api/ab-event.
// 4. When ABTest.convert() is called, logs a 'conversion' event.
// 5. /admin/experiments shows aggregate funnels per variant.
//
// Storage key prefix: 'ab_' so admin can `localStorage.getItem('ab_hero_cta')`.

(function (global) {
  'use strict';

  var STORAGE_PREFIX = 'ab_';
  var VISITOR_KEY = 'ab_visitor';
  var EVENT_ENDPOINT = '/api/ab-event';

  // Generate a stable per-visitor ID — used to dedupe in admin analytics.
  function getVisitorId() {
    try {
      var existing = localStorage.getItem(VISITOR_KEY);
      if (existing) return existing;
      var id = 'v_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
      localStorage.setItem(VISITOR_KEY, id);
      return id;
    } catch (e) {
      return 'v_anon';
    }
  }

  // Variant assignment is deterministic per (visitor, experiment) — so we don't
  // need to re-roll on each pageview. Saves to localStorage.
  function getVariant(experimentKey, variants) {
    try {
      var stored = localStorage.getItem(STORAGE_PREFIX + experimentKey);
      if (stored !== null) {
        var parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < variants.length) {
          return parsed;
        }
      }
    } catch (e) {}
    var pick = Math.floor(Math.random() * variants.length);
    try { localStorage.setItem(STORAGE_PREFIX + experimentKey, String(pick)); } catch (e) {}
    return pick;
  }

  function logEvent(experimentKey, variantIdx, eventName) {
    var payload = {
      experiment: experimentKey,
      variant: variantIdx,
      event: eventName,
      visitor: getVisitorId(),
      url: location.pathname + location.search,
      referrer: document.referrer || '',
      ts: new Date().toISOString()
    };
    var body = JSON.stringify(payload);
    // Prefer sendBeacon for fire-and-forget (works on page unload too)
    if (navigator.sendBeacon) {
      try {
        var blob = new Blob([body], { type: 'application/json' });
        var ok = navigator.sendBeacon(EVENT_ENDPOINT, blob);
        if (ok) return;
      } catch (e) {}
    }
    // Fallback: fetch with keepalive
    try {
      fetch(EVENT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true,
        mode: 'no-cors'
      }).catch(function () {});
    } catch (e) {}
  }

  // Track which experiments have already fired 'exposure' this pageview — avoid duplicates.
  var EXPOSED = {};

  var ABTest = {
    /**
     * Define and apply an experiment.
     * @param {string} key — experiment name (e.g. 'hero_cta')
     * @param {object} config — { variants: array, apply: fn(variant, idx) }
     * @returns {object} { variant, idx } — for advanced use
     */
    experiment: function (key, config) {
      if (!key || !config || !Array.isArray(config.variants) || !config.variants.length) {
        console.warn('ABTest.experiment: invalid config for ' + key);
        return null;
      }
      var idx = getVariant(key, config.variants);
      var variant = config.variants[idx];
      // Apply the variant to the DOM
      if (typeof config.apply === 'function') {
        try { config.apply(variant, idx, key); } catch (e) { console.error('ABTest apply error:', e); }
      }
      // Log exposure once per pageview
      if (!EXPOSED[key]) {
        EXPOSED[key] = true;
        logEvent(key, idx, 'exposure');
      }
      return { variant: variant, idx: idx };
    },

    /**
     * Log a conversion event for the given experiment + (optional) custom event name.
     * @param {string} key — experiment name
     * @param {string} [event='conversion'] — custom event name
     */
    convert: function (key, event) {
      try {
        var stored = localStorage.getItem(STORAGE_PREFIX + key);
        if (stored === null) {
          // Visitor never saw the experiment — don't log
          return;
        }
        var idx = parseInt(stored, 10);
        if (isNaN(idx)) return;
        logEvent(key, idx, event || 'conversion');
      } catch (e) {}
    },

    /**
     * For testing/debugging: get current assignment for an experiment.
     */
    getAssignment: function (key) {
      try {
        var stored = localStorage.getItem(STORAGE_PREFIX + key);
        return stored !== null ? parseInt(stored, 10) : null;
      } catch (e) { return null; }
    },

    /**
     * For testing: clear assignment so user re-rolls.
     */
    clear: function (key) {
      try { localStorage.removeItem(STORAGE_PREFIX + key); } catch (e) {}
    }
  };

  global.ABTest = ABTest;
})(window);
