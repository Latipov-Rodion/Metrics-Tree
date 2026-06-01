// MetricTree Public API — free calculator endpoint for developers.
//
// Usage:
//   GET /api/calc?metric=ltv&aov=2500&freq=4&life=3
//   → { metric: "ltv", result: 30000, unit: "$", insight: "...", benchmark: "..." }
//
//   POST /api/calc with JSON body { metric: "ltv", inputs: { aov: 2500, freq: 4, life: 3 } }
//
// Supported metrics: ltv, cac, ltv_cac, mrr, arr, nrr, grr, churn, runway,
// burnMultiple, magicNumber, ruleOf40, quickRatio, nps, cacPayback, roas,
// stickiness, salesVelocity, winRate, pipelineCoverage, aov, mrrGrowthRate
//
// No auth required. Soft rate limit: ~60 requests/min per IP, best-effort and
// per edge instance (isolates aren't shared, so it blunts floods rather than
// enforcing a hard global cap).
//
// CORS: open to all origins — feel free to call from browser apps.

export const config = { runtime: 'edge' };

// Calculators — single source of truth. Each returns { result, unit, insight, rating }.
// Exported so the unit tests (test/calc.test.mjs) can assert the formulas directly.
export const CALCULATORS = {
  ltv: {
    inputs: ['aov', 'freq', 'life'],
    calc: ({ aov, freq, life }) => aov * freq * life,
    unit: '$',
    formula: 'AOV × Frequency × Lifetime',
    insight: v => `LTV target ≥ 3× CAC for healthy unit economics`,
    rating: v => v > 10000 ? 'high' : v > 1000 ? 'mid' : 'low',
  },
  cac: {
    inputs: ['spend', 'customers'],
    calc: ({ spend, customers }) => spend / customers,
    unit: '$',
    formula: 'Marketing spend / New customers',
    insight: v => `CAC should be < LTV/3. SaaS payback target: < 12-18 months`,
    rating: v => v < 100 ? 'low' : v < 1000 ? 'mid' : 'high',
  },
  ltv_cac: {
    inputs: ['ltv', 'cac'],
    calc: ({ ltv, cac }) => ltv / cac,
    unit: 'x',
    formula: 'LTV / CAC',
    insight: v => v < 1 ? 'Losing money on each customer' : v < 3 ? 'Below norm — fix unit economics' : v < 5 ? 'Healthy SaaS unit economics' : 'Excellent (or under-investing in growth)',
    rating: v => v >= 5 ? 'excellent' : v >= 3 ? 'healthy' : v >= 1 ? 'weak' : 'losing',
  },
  mrr: {
    inputs: ['mrr'],
    calc: ({ mrr }) => mrr,
    unit: '$',
    formula: 'Sum of all monthly recurring subscriptions',
    insight: v => `ARR = ${(v * 12).toLocaleString()}. Healthy MoM growth: 10-20% post-PMF`,
    rating: v => 'computed',
  },
  arr: {
    inputs: ['mrr'],
    calc: ({ mrr }) => mrr * 12,
    unit: '$',
    formula: 'MRR × 12',
    insight: v => `T2D3 path: triple, triple, double, double, double over 5 years`,
    rating: v => 'computed',
  },
  nrr: {
    inputs: ['start', 'expansion', 'churn', 'contraction'],
    calc: ({ start, expansion, churn, contraction = 0 }) =>
      ((start + expansion - churn - contraction) / start) * 100,
    unit: '%',
    formula: '(Start + Expansion − Churn − Contraction) / Start × 100',
    insight: v => v >= 130 ? 'Top decile — Snowflake/Datadog tier' : v >= 115 ? 'Top quartile' : v >= 100 ? 'Healthy — growing without new customers' : 'Below 100% — losing revenue from existing customers',
    rating: v => v >= 130 ? 'top_decile' : v >= 115 ? 'top_quartile' : v >= 100 ? 'healthy' : 'critical',
  },
  grr: {
    inputs: ['start', 'churn', 'contraction'],
    calc: ({ start, churn, contraction = 0 }) =>
      ((start - churn - contraction) / start) * 100,
    unit: '%',
    formula: '(Start − Churn − Contraction) / Start × 100',
    insight: v => v >= 97 ? 'Excellent (product loved)' : v >= 95 ? 'Healthy SaaS norm' : v >= 90 ? 'Below average' : 'Critical — fix product',
    rating: v => v >= 95 ? 'healthy' : v >= 90 ? 'average' : 'critical',
  },
  churn: {
    inputs: ['lost', 'total'],
    calc: ({ lost, total }) => (lost / total) * 100,
    unit: '%',
    formula: 'Lost / Total × 100',
    insight: v => v < 2 ? 'SaaS norm: <2%/mo = healthy' : v < 5 ? 'Above SaaS norm but acceptable for SMB' : v < 10 ? 'High — fix onboarding + customer success' : 'Critical',
    rating: v => v < 2 ? 'healthy' : v < 5 ? 'acceptable' : v < 10 ? 'high' : 'critical',
  },
  runway: {
    inputs: ['cash', 'burn'],
    calc: ({ cash, burn }) => burn <= 0 ? Infinity : cash / burn,
    unit: 'months',
    formula: 'Cash / Monthly Net Burn',
    insight: v => v === Infinity ? 'Cash positive — infinite runway' : v < 6 ? 'Critical — raise NOW' : v < 12 ? 'Start fundraising' : v < 18 ? 'Healthy norm for seed/Series A' : 'Strong position',
    rating: v => v === Infinity ? 'infinite' : v < 6 ? 'critical' : v < 12 ? 'risky' : v < 18 ? 'healthy' : 'strong',
  },
  burnMultiple: {
    inputs: ['burn', 'newArr'],
    calc: ({ burn, newArr }) => newArr <= 0 ? null : burn / newArr,
    unit: 'x',
    formula: 'Net Burn / Net New ARR (David Sacks)',
    insight: v => v < 1 ? 'Amazing — PayPal-tier' : v < 1.5 ? 'Great' : v < 2 ? 'Good' : v < 3 ? 'Suspect' : 'Bad — burning capital inefficiently',
    rating: v => v < 1 ? 'amazing' : v < 1.5 ? 'great' : v < 2 ? 'good' : v < 3 ? 'suspect' : 'bad',
  },
  ruleOf40: {
    inputs: ['growth', 'margin'],
    calc: ({ growth, margin }) => growth + margin,
    unit: '%',
    formula: 'Growth YoY (%) + EBITDA/FCF Margin (%)',
    insight: v => v >= 60 ? 'Top decile public SaaS' : v >= 40 ? 'Healthy SaaS' : 'Below Rule of 40 — accelerate or become profitable',
    rating: v => v >= 60 ? 'top_decile' : v >= 40 ? 'healthy' : 'below_norm',
  },
  quickRatio: {
    inputs: ['newMrr', 'expansionMrr', 'churnMrr', 'contractionMrr'],
    calc: ({ newMrr, expansionMrr = 0, churnMrr, contractionMrr = 0 }) => {
      const denom = churnMrr + contractionMrr;
      return denom <= 0 ? null : (newMrr + expansionMrr) / denom;
    },
    unit: 'x',
    formula: '(New + Expansion MRR) / (Churn + Contraction MRR)',
    insight: v => v > 4 ? 'Top decile SaaS — excellent' : v > 2 ? 'Healthy' : v > 1 ? 'Weak growth' : 'Decaying',
    rating: v => v > 4 ? 'top_decile' : v > 2 ? 'healthy' : v > 1 ? 'weak' : 'decaying',
  },
  magicNumber: {
    inputs: ['newArrQuarter', 'sm'],
    calc: ({ newArrQuarter, sm }) => sm <= 0 ? null : (newArrQuarter * 4) / sm,
    unit: 'x',
    formula: '(Net New ARR × 4) / S&M Spend',
    insight: v => v > 1.5 ? 'Hire aggressively' : v > 1 ? 'Healthy — scale gradually' : v > 0.75 ? 'Optimize funnel first' : 'Stop hiring sales',
    rating: v => v > 1.5 ? 'excellent' : v > 1 ? 'good' : v > 0.75 ? 'marginal' : 'bad',
  },
  nps: {
    inputs: ['promoters', 'detractors', 'total'],
    calc: ({ promoters, detractors, total }) => ((promoters - detractors) / total) * 100,
    unit: '',
    formula: '%Promoters − %Detractors',
    insight: v => v > 70 ? 'World-class (Apple/Tesla tier)' : v > 50 ? 'Excellent (Slack/Netflix)' : v > 30 ? 'Good' : v > 0 ? 'OK — room to grow' : 'Critical — fix UX',
    rating: v => v > 70 ? 'world_class' : v > 50 ? 'excellent' : v > 30 ? 'good' : v > 0 ? 'ok' : 'critical',
  },
  cacPayback: {
    inputs: ['cac', 'mrrPerCustomer', 'grossMargin'],
    calc: ({ cac, mrrPerCustomer, grossMargin }) => {
      const m = grossMargin > 1 ? grossMargin / 100 : grossMargin;
      return cac / (mrrPerCustomer * m);
    },
    unit: 'months',
    formula: 'CAC / (MRR per customer × Gross Margin)',
    insight: v => v < 6 ? 'Excellent' : v < 12 ? 'Healthy for SMB SaaS' : v < 18 ? 'Acceptable for mid-market' : v < 24 ? 'Enterprise norm' : 'Critical — model unsustainable',
    rating: v => v < 12 ? 'healthy' : v < 18 ? 'acceptable' : v < 24 ? 'enterprise' : 'critical',
  },
  roas: {
    inputs: ['revenue', 'spend'],
    calc: ({ revenue, spend }) => revenue / spend,
    unit: 'x',
    formula: 'Revenue from ads / Ad spend',
    insight: v => v > 4 ? 'Excellent for e-com' : v > 3 ? 'Healthy for SaaS' : v > 1 ? 'Above break-even' : 'Losing money on ads',
    rating: v => v > 4 ? 'excellent' : v > 3 ? 'healthy' : v > 1 ? 'profitable' : 'unprofitable',
  },
  stickiness: {
    inputs: ['dau', 'mau'],
    calc: ({ dau, mau }) => (dau / mau) * 100,
    unit: '%',
    formula: 'DAU / MAU × 100',
    insight: v => v > 50 ? 'Daily-essential product (Slack/Notion tier)' : v > 20 ? 'Healthy engagement' : 'Occasional-use product',
    rating: v => v > 50 ? 'top_tier' : v > 20 ? 'healthy' : 'low',
  },
  salesVelocity: {
    inputs: ['opps', 'acv', 'winRate', 'cycleDays'],
    calc: ({ opps, acv, winRate, cycleDays }) => {
      const wr = winRate > 1 ? winRate / 100 : winRate;
      return (opps * acv * wr) / cycleDays;
    },
    unit: '$/day',
    formula: '(Opportunities × ACV × Win Rate) / Cycle Length in days',
    insight: v => `${(v * 90).toLocaleString()} expected quarterly New ARR`,
    rating: v => 'computed',
  },
  winRate: {
    inputs: ['won', 'total'],
    calc: ({ won, total }) => (won / total) * 100,
    unit: '%',
    formula: 'Closed Won / Total Closed × 100',
    insight: v => v > 35 ? 'Excellent for B2B SaaS' : v > 25 ? 'Healthy B2B SaaS norm' : v > 20 ? 'Above industry average' : 'Below norm — review ICP fit',
    rating: v => v > 35 ? 'excellent' : v > 25 ? 'healthy' : v > 20 ? 'acceptable' : 'low',
  },
  pipelineCoverage: {
    inputs: ['pipeline', 'quota'],
    calc: ({ pipeline, quota }) => pipeline / quota,
    unit: 'x',
    formula: 'Pipeline Value / Quota',
    insight: v => v < 2 ? 'Critical — quarter at risk' : v < 3 ? 'Tight — push deals' : v < 4 ? 'Healthy B2B norm' : v < 5 ? 'Strong' : 'Quota likely too low',
    rating: v => v < 2 ? 'critical' : v < 3 ? 'tight' : v < 5 ? 'healthy' : 'surplus',
  },
  aov: {
    inputs: ['revenue', 'orders'],
    calc: ({ revenue, orders }) => revenue / orders,
    unit: '$',
    formula: 'Revenue / Number of Orders',
    insight: v => `Free-shipping threshold should be ~25-30% above your AOV`,
    rating: v => 'computed',
  },
  mrrGrowthRate: {
    inputs: ['startMrr', 'endMrr'],
    calc: ({ startMrr, endMrr }) => ((endMrr - startMrr) / startMrr) * 100,
    unit: '%',
    formula: '(End MRR − Start MRR) / Start MRR × 100',
    insight: v => v >= 15 ? 'Seed-stage healthy' : v >= 10 ? 'Series A healthy' : v >= 5 ? 'YC minimum (5-7% MoM)' : 'Below YC minimum — accelerate',
    rating: v => v >= 15 ? 'seed_healthy' : v >= 10 ? 'series_a' : v >= 5 ? 'yc_min' : 'below_min',
  },
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, max-age=300',
};

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS, ...extraHeaders },
  });
}

// Best-effort sliding-window limiter (per edge isolate, in-memory — no KV round-trip).
const RL_WINDOW_MS = 60_000;
const RL_MAX = 60;
const rlHits = new Map(); // ip -> timestamps[]
function rateLimited(ip) {
  const now = Date.now();
  const hits = (rlHits.get(ip) || []).filter(t => now - t < RL_WINDOW_MS);
  hits.push(now);
  rlHits.set(ip, hits);
  if (rlHits.size > 5000) { // crude memory cap for long-lived isolates
    for (const k of rlHits.keys()) { rlHits.delete(k); if (rlHits.size <= 2500) break; }
  }
  return hits.length > RL_MAX;
}

export default async function handler(req) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return jsonResponse({ error: 'Rate limit exceeded — max 60 requests/min. Slow down.' }, 429, { 'Retry-After': '60' });
  }

  const url = new URL(req.url);
  let metric, inputs;

  if (req.method === 'POST') {
    try {
      const body = await req.json();
      metric = body.metric;
      inputs = body.inputs || body;
    } catch (e) {
      return jsonResponse({ error: 'Invalid JSON body' }, 400);
    }
  } else if (req.method === 'GET') {
    metric = url.searchParams.get('metric');
    inputs = {};
    url.searchParams.forEach((v, k) => { if (k !== 'metric') inputs[k] = parseFloat(v); });
  } else {
    return jsonResponse({ error: 'Method not allowed', allowed: ['GET', 'POST', 'OPTIONS'] }, 405);
  }

  if (!metric) {
    return jsonResponse({
      error: 'metric parameter required',
      example_usage: {
        url_get: '/api/calc?metric=ltv&aov=2500&freq=4&life=3',
        body_post: { metric: 'ltv', inputs: { aov: 2500, freq: 4, life: 3 } },
      },
      supported_metrics: Object.keys(CALCULATORS),
      docs: 'https://metricstree.vercel.app/api-docs',
    }, 400);
  }

  const calc = CALCULATORS[metric];
  if (!calc) {
    return jsonResponse({
      error: `Unknown metric: ${metric}`,
      supported_metrics: Object.keys(CALCULATORS),
      hint: 'See full metric list at https://metricstree.vercel.app/',
    }, 404);
  }

  // Validate required inputs
  const missing = calc.inputs.filter(k => inputs[k] === undefined || inputs[k] === null || isNaN(inputs[k]));
  if (missing.length) {
    return jsonResponse({
      error: 'Missing or invalid inputs',
      metric,
      required_inputs: calc.inputs,
      provided: Object.fromEntries(Object.entries(inputs).filter(([k]) => calc.inputs.includes(k))),
      missing,
      formula: calc.formula,
    }, 400);
  }

  let result;
  try {
    result = calc.calc(inputs);
  } catch (e) {
    return jsonResponse({ error: 'Calculation failed', detail: e.message }, 500);
  }

  if (result === null || result === undefined || (typeof result === 'number' && !Number.isFinite(result) && result !== Infinity)) {
    return jsonResponse({ error: 'Calculation produced invalid result. Check inputs.' }, 422);
  }

  const insight = (typeof calc.insight === 'function') ? calc.insight(result) : '';
  const rating = (typeof calc.rating === 'function') ? calc.rating(result) : '';

  return jsonResponse({
    metric,
    inputs,
    formula: calc.formula,
    result: result === Infinity ? 'Infinity' : Number.isFinite(result) ? Math.round(result * 100) / 100 : null,
    unit: calc.unit,
    insight,
    rating,
    calculator_url: `https://metricstree.vercel.app/${metric}`,
    docs_url: 'https://metricstree.vercel.app/api-docs',
  });
}
