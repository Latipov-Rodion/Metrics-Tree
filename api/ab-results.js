// /api/ab-results — read + aggregate A/B test events from KV.
// Requires ?secret=<ADMIN_SECRET>. Returns per-experiment variant stats.

export const config = { runtime: 'edge' };

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Wilson confidence interval — better than naive p ± z*sqrt(p(1-p)/n) at small n
function wilsonInterval(positive, total, z = 1.96) {
  if (!total) return { lo: 0, hi: 0 };
  const phat = positive / total;
  const denom = 1 + (z * z) / total;
  const center = phat + (z * z) / (2 * total);
  const margin = z * Math.sqrt(phat * (1 - phat) / total + (z * z) / (4 * total * total));
  return { lo: Math.max(0, (center - margin) / denom), hi: Math.min(1, (center + margin) / denom) };
}

// Two-proportion z-test → returns p-value approximation
function twoPropZ(p1n, p1d, p2n, p2d) {
  if (!p1d || !p2d) return 1;
  const p1 = p1n / p1d, p2 = p2n / p2d;
  const pPool = (p1n + p2n) / (p1d + p2d);
  if (pPool === 0 || pPool === 1) return 1;
  const se = Math.sqrt(pPool * (1 - pPool) * (1 / p1d + 1 / p2d));
  if (se === 0) return 1;
  const z = Math.abs(p1 - p2) / se;
  // approx p-value via complementary error function fit (good for |z| < 5)
  // Using rational approximation of erfc for speed
  const t = 1 / (1 + 0.3275911 * z);
  const erfc = ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
  return Math.min(1, erfc);
}

export default async function handler(req) {
  const url = new URL(req.url);
  const secret = url.searchParams.get('secret') || '';
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) {
    return new Response(JSON.stringify({ error: 'ADMIN_SECRET not configured' }), {
      status: 503, headers: { 'Content-Type': 'application/json' }
    });
  }
  if (!timingSafeEqual(secret, adminSecret)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' }
    });
  }

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!kvUrl || !kvToken) {
    return new Response(JSON.stringify({ error: 'KV not configured' }), {
      status: 503, headers: { 'Content-Type': 'application/json' }
    });
  }

  // Read recent events
  let events = [];
  try {
    const r = await fetch(`${kvUrl}/lrange/ab_events/0/9999`, {
      headers: { Authorization: `Bearer ${kvToken}` }
    });
    const j = await r.json();
    events = (j.result || []).map(s => { try { return JSON.parse(s); } catch { return null; } }).filter(Boolean);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'KV read failed', detail: e.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' }
    });
  }

  // Aggregate: per experiment, per variant, count unique visitors who saw 'exposure'
  // and how many of them later fired 'conversion' (or custom event).
  const byExp = {}; // { experiment: { variantIdx: { exposures: Set<visitor>, conversions: Set<visitor>, customEvents: { name: Set } } } }
  events.forEach(e => {
    if (!byExp[e.experiment]) byExp[e.experiment] = {};
    const vbucket = byExp[e.experiment];
    if (!vbucket[e.variant]) vbucket[e.variant] = { exposures: new Set(), conversions: new Set(), custom: {} };
    const bucket = vbucket[e.variant];
    if (e.event === 'exposure') bucket.exposures.add(e.visitor);
    else if (e.event === 'conversion') bucket.conversions.add(e.visitor);
    else {
      if (!bucket.custom[e.event]) bucket.custom[e.event] = new Set();
      bucket.custom[e.event].add(e.visitor);
    }
  });

  // Build report
  const report = {};
  for (const exp of Object.keys(byExp)) {
    const variants = byExp[exp];
    const variantStats = [];
    const variantKeys = Object.keys(variants).map(Number).sort((a, b) => a - b);
    for (const vi of variantKeys) {
      const bucket = variants[vi];
      const expCount = bucket.exposures.size;
      const convCount = bucket.conversions.size;
      const convRate = expCount > 0 ? convCount / expCount : 0;
      const ci = wilsonInterval(convCount, expCount);
      variantStats.push({
        variant: vi,
        exposures: expCount,
        conversions: convCount,
        conversion_rate: convRate,
        conversion_rate_ci_low: ci.lo,
        conversion_rate_ci_high: ci.hi,
        custom_events: Object.fromEntries(Object.entries(bucket.custom).map(([k, v]) => [k, v.size]))
      });
    }
    // Pairwise stat sig against variant 0 (control)
    const control = variantStats[0];
    variantStats.forEach((vs, i) => {
      if (i === 0) { vs.p_value_vs_control = null; vs.lift_vs_control = null; return; }
      vs.p_value_vs_control = twoPropZ(control.conversions, control.exposures, vs.conversions, vs.exposures);
      vs.lift_vs_control = control.conversion_rate > 0 ? (vs.conversion_rate - control.conversion_rate) / control.conversion_rate : null;
      vs.significant_at_95 = vs.p_value_vs_control !== null && vs.p_value_vs_control < 0.05;
    });
    report[exp] = { variants: variantStats };
  }

  return new Response(JSON.stringify({
    ok: true,
    total_events: events.length,
    experiments: report,
    notes: 'Wilson CI 95%. P-value via two-proportion z-test. Significance threshold p<0.05.'
  }, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}
