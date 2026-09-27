// Property tests for every calculator in app.js. Run with: node --test
//
// app.js is a browser script (one big IIFE that touches the DOM), so it cannot be
// imported. Instead we slice the pure data structures out of the source text —
// metricsData, INDUSTRY_THRESHOLDS, SCENARIO_TEMPLATES, GOAL_QUESTIONS — and
// evaluate them in a vm sandbox together with the top-level i18n dictionaries
// (I18N_INSIGHTS / I18N_THRESH / I18N_GOAL). No DOM is needed.
//
// What is guarded, for all 69 metrics:
//   1. calculate(): empty / non-numeric input → null; valid input → a finite
//      number (or numeric string); never NaN, never ±Infinity except where
//      Infinity is a documented result (runway, quickRatio) handled by callers.
//   2. insight(): returns a known colour; its colour bands agree with the
//      benchmark text the user sees next to it (metric.threshold and
//      INDUSTRY_THRESHOLDS.universal), inside every band and at every cut.
//   3. Every RU insight / threshold / tooltip / goal string has an EN + UZ
//      translation (they are keyed by the exact Russian text).
//   4. GOAL_QUESTIONS: forward(inverse(target)) ≈ target for every question.
//   5. SCENARIO_TEMPLATES: every preset computes, and presets that restate the
//      same quantity (ltv_cac vs ltv & cac, arr vs mrr, …) agree.
//   6. api/calc.js agrees with app.js on the metrics it exposes.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { CALCULATORS } from '../api/calc.js';

// ---------------------------------------------------------------- loader ----
const SRC = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const LINES = SRC.split('\n');

function slice(decl) {
  const start = LINES.findIndex(l => l.trimStart().startsWith(decl));
  assert.ok(start >= 0, `app.js: cannot find "${decl}"`);
  const indent = LINES[start].match(/^\s*/)[0];
  const end = LINES.findIndex((l, i) => i > start && (l === indent + '};' || l === indent + '];'));
  assert.ok(end > start, `app.js: cannot find the end of "${decl}"`);
  return LINES.slice(start, end + 1).join('\n');
}

function load() {
  const window = {};
  const ctx = vm.createContext({ window, console });
  // Top-level i18n dictionaries live before the app IIFE.
  const iife = LINES.findIndex(l => l.startsWith('(function() {'));
  vm.runInContext(LINES.slice(0, iife).join('\n'), ctx);
  const code = `
    function sanitizeNumber(value) {
      const clean = String(value).replace(/[\\u00A0 ]/g, '');
      const num = parseFloat(clean);
      return isNaN(num) ? null : num;
    }
    ${slice('const metricsData = {')}
    ${slice('const INDUSTRY_THRESHOLDS = {')}
    ${slice('const SCENARIO_TEMPLATES = [')}
    ${slice('const GOAL_QUESTIONS = {')}
    ({ metricsData, INDUSTRY_THRESHOLDS, SCENARIO_TEMPLATES, GOAL_QUESTIONS });
  `;
  return { ...vm.runInContext(code, ctx), window };
}

const { metricsData, INDUSTRY_THRESHOLDS, SCENARIO_TEMPLATES, GOAL_QUESTIONS, window } = load();
const METRICS = Object.values(metricsData).flatMap(s => s.metrics);
const BY_ID = Object.fromEntries(METRICS.map(m => [m.id, m]));

const RED = '#F44336', YELLOW = '#FFC107', GREEN = '#4CAF50', INFO = '#2A6DF4';
const COLOURS = new Set([RED, YELLOW, GREEN, INFO]);
// Metrics whose calculate() may legitimately return Infinity (callers render '∞').
const INFINITY_OK = new Set(['runway', 'quickRatio']);

// The UI turns the raw result into a number exactly like this (updateResult()).
const toNum = r => (r === Infinity ? Infinity : parseFloat(r));
const run = (m, v) => m.calculate(v);

// Deterministic PRNG so failures are reproducible.
let seed = 42;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);

function randomValid(inp) {
  const lo = inp.min !== undefined ? inp.min : 0;
  const hi = inp.max !== undefined ? inp.max : Math.max(lo, 0) + [1, 10, 100, 1e4, 1e6][Math.floor(rnd() * 5)];
  const from = Math.max(lo, inp.min !== undefined && inp.min < 0 ? -hi : lo);
  return +(from + rnd() * (hi - from)).toFixed(2) || (lo > 0 ? lo : 0);
}

// ----------------------------------------------------------- 0. inventory ----
test('app.js exposes 69 metrics with unique ids and the full shape', () => {
  assert.equal(METRICS.length, 69);
  assert.equal(new Set(METRICS.map(m => m.id)).size, 69);
  for (const m of METRICS) {
    for (const f of ['id', 'name', 'formula', 'description', 'threshold']) assert.equal(typeof m[f], 'string', `${m.id}.${f}`);
    assert.equal(typeof m.calculate, 'function', `${m.id}.calculate`);
    assert.equal(typeof m.insight, 'function', `${m.id}.insight`);
    assert.ok(Array.isArray(m.inputs) && m.inputs.length > 0, `${m.id}.inputs`);
    assert.equal(new Set(m.inputs.map(i => i.key)).size, m.inputs.length, `${m.id}: duplicate input key`);
  }
});

// ----------------------------------------------------------- 1. calculate ----
test('calculate(): empty or non-numeric input returns null', () => {
  for (const m of METRICS) {
    const all = Object.fromEntries(m.inputs.map(i => [i.key, i.placeholder]));
    for (const inp of m.inputs) {
      for (const bad of ['', 'abc', undefined]) {
        const v = { ...all, [inp.key]: bad };
        assert.equal(run(m, v), null, `${m.id}: ${inp.key}=${JSON.stringify(bad)} should give null`);
      }
    }
  }
});

test('calculate(): placeholders and random valid inputs give a finite number', () => {
  for (const m of METRICS) {
    const ph = Object.fromEntries(m.inputs.map(i => [i.key, i.placeholder]));
    const r = run(m, ph);
    assert.ok(r !== null && Number.isFinite(toNum(r)), `${m.id}: placeholders → ${r}`);
    for (let k = 0; k < 300; k++) {
      const v = Object.fromEntries(m.inputs.map(i => [i.key, String(randomValid(i))]));
      const out = run(m, v);
      if (out === null) continue; // a guard rejected the combination — fine
      const n = toNum(out);
      assert.ok(!Number.isNaN(n), `${m.id}(${JSON.stringify(v)}) → NaN`);
      if (!Number.isFinite(n)) assert.ok(INFINITY_OK.has(m.id) && n === Infinity, `${m.id}(${JSON.stringify(v)}) → ${out}`);
      assert.ok(typeof out === 'number' || (typeof out === 'string' && /^-?\d+(\.\d+)?$/.test(out)), `${m.id}: result ${JSON.stringify(out)} is not numeric`);
    }
  }
});

test('calculate(): zero / negative inputs never produce NaN, strings or stray Infinity', () => {
  for (const m of METRICS) {
    const ph = Object.fromEntries(m.inputs.map(i => [i.key, i.placeholder]));
    for (const inp of m.inputs) {
      for (const x of ['0', '-1', '-1000', '0.0001']) {
        const v = { ...ph, [inp.key]: x };
        const out = run(m, v);
        if (out === null) continue;
        const n = toNum(out);
        assert.ok(!Number.isNaN(n), `${m.id}: ${inp.key}=${x} → NaN (${out})`);
        if (!Number.isFinite(n)) assert.ok(INFINITY_OK.has(m.id), `${m.id}: ${inp.key}=${x} → ${out}`);
      }
    }
  }
});

test('calculate(): documented Infinity cases', () => {
  assert.equal(run(BY_ID.runway, { cash: '1000', burn: '0' }), Infinity);
  assert.equal(run(BY_ID.runway, { cash: '1000', burn: '-5' }), Infinity);
  assert.equal(run(BY_ID.quickRatio, { newMrr: '10', expansion: '0', churned: '0', contraction: '0' }), Infinity);
  assert.equal(run(BY_ID.quickRatio, { newMrr: '0', expansion: '0', churned: '0', contraction: '0' }), null);
  assert.equal(BY_ID.runway.insight(Infinity).color, GREEN);
  assert.equal(BY_ID.quickRatio.insight(Infinity).color, GREEN);
});

// Known values — the formula each metric implements, one case each.
const KNOWN = {
  stickiness: [{ dau: 15, mau: 100 }, 15], retention: [{ end: 600, start: 1000 }, 60],
  ltv: [{ aov: 100, freq: 4, life: 3 }, 1200], cac: [{ cost: 5000, customers: 50 }, 100],
  ltv_cac: [{ ltv: 900, cac: 300 }, 3], arpu: [{ revenue: 1000, users: 40 }, 25],
  arpdau: [{ dailyRevenue: 50, dau: 1000 }, 0.05], aov: [{ revenue: 4700, orders: 100 }, 47],
  repeatPurchaseRate: [{ repeat: 30, total: 100 }, 30], churn: [{ lost: 150, total: 2000 }, 7.5],
  arppu: [{ revenue: 1000, payingUsers: 10 }, 100], featureAdoption: [{ adopted: 1, active: 4 }, 25],
  arr: [{ mrr: 1000 }, 12000], acv: [{ total: 120000, years: 3 }, 40000],
  grr: [{ start: 5000, churn: 400 }, 92], nrr: [{ start: 5000, upsell: 800, churn: 400 }, 108],
  burnMultiple: [{ burn: 750, newArr: 500 }, 1.5], magicNumber: [{ newArr: 300, sm: 200 }, 1.5],
  ruleOf40: [{ growth: 40, margin: -7 }, 33],
  quickRatio: [{ newMrr: 80, expansion: 20, churned: 15, contraction: 5 }, 5],
  cacPayback: [{ cac: 1500, mrrPerCustomer: 200, margin: 80 }, 9.4],
  netNewMrr: [{ newMrr: 40, expansion: 12, churned: 9, contraction: 3 }, 40],
  leadVelocityRate: [{ thisMonth: 110, lastMonth: 100 }, 10],
  cashConversionScore: [{ arr: 8, capitalConsumed: 4 }, 2],
  activation: [{ activated: 45, total: 100 }, 45], retention_aarrr: [{ ret: 30, new: 100 }, 30],
  referral: [{ invited: 30, active: 60 }, 0.5], timeToValue: [{ days: 3 }, 3],
  grossMargin: [{ revenue: 1000, cogs: 250 }, 75], runway: [{ cash: 2500000, burn: 200000 }, 12.5],
  burnRate: [{ expenses: 500, revenue: 200 }, 300],
  salesVelocity: [{ opps: 50, acv: 30000, winRate: 25, cycle: 60 }, 6250],
  winRate: [{ won: 25, total: 100 }, 25], pipelineCoverage: [{ pipeline: 1800, quota: 500 }, 3.6],
  salesCycleLength: [{ totalDays: 4500, wonCount: 50 }, 90],
  mrrGrowthRate: [{ startMrr: 80, endMrr: 88 }, 10],
  contributionMargin: [{ revenue: 100, variableCosts: 45 }, 55], gmv: [{ orders: 10, aov: 65 }, 650],
  takeRate: [{ platformRevenue: 15, gmv: 100 }, 15], quotaAttainment: [{ actual: 420, quota: 500 }, 84],
  cr: [{ conversions: 25, visitors: 1000 }, 2.5], roas: [{ revenue: 4000, spend: 1000 }, 4],
  cpc: [{ spend: 50, clicks: 100 }, 0.5], ctr: [{ clicks: 5, impressions: 500 }, 1],
  bounceRate: [{ bounced: 35, total: 100 }, 35], engagementRate: [{ engagements: 3, reach: 100 }, 3],
  cpm: [{ spend: 5, impressions: 1000 }, 5], cartAbandonment: [{ purchases: 30, carts: 100 }, 70],
  mer: [{ totalRevenue: 300, totalSpend: 100 }, 3], cpa: [{ spend: 80, actions: 4 }, 20],
  cpl: [{ spend: 120, leads: 6 }, 20], cpi: [{ spend: 150, installs: 75 }, 2],
  openRate: [{ opens: 21, delivered: 100 }, 21], ctor: [{ clicks: 9, opens: 42 }, 21.4],
  bugRate: [{ bugs: 27, size: 15 }, 1.8], testCoverage: [{ covered: 85, total: 100 }, 85],
  defectDensity: [{ defects: 42, kloc: 20 }, 2.1], csat: [{ pos: 320, total: 400 }, 80],
  nps: [{ promoters: 120, detractors: 30, total: 200 }, 45], fcr: [{ resolved: 156, total: 200 }, 78],
  sla: [{ met: 180, total: 200 }, 90], ces: [{ sumScores: 780, responses: 130 }, 6],
  avgResolutionTime: [{ totalHours: 960, ticketsResolved: 240 }, 4],
  dau: [{ users: 5 }, 5], mau: [{ users: 5 }, 5], wau: [{ users: 5 }, 5], mrr: [{ mrr: 5 }, 5],
  acquisition: [{ new: 5 }, 5], revenue: [{ rev: 5 }, 5],
};

test('calculate(): every metric matches its reference formula', () => {
  for (const m of METRICS) {
    assert.ok(KNOWN[m.id], `no reference case for ${m.id}`);
    const [inputs, expected] = KNOWN[m.id];
    const got = toNum(run(m, Object.fromEntries(Object.entries(inputs).map(([k, x]) => [k, String(x)]))));
    assert.ok(Math.abs(got - expected) < 0.051, `${m.id}: ${got} ≠ ${expected}`);
  }
});

// ------------------------------------------------------------- 2. insight ----
test('insight(): always a known colour and a non-empty text', () => {
  for (const m of METRICS) {
    for (const x of [-1000, -1, 0, 0.001, 0.5, 1, 2, 5, 10, 25, 50, 99, 100, 150, 1e4, 1e7]) {
      const ins = m.insight(x);
      assert.ok(ins && COLOURS.has(ins.color), `${m.id}.insight(${x}).color = ${ins && ins.color}`);
      assert.ok(typeof ins.text === 'string' && ins.text.length > 0, `${m.id}.insight(${x}) text`);
    }
  }
});

// Benchmark strings are rendered by renderBenchmarks(): split on ',' and coloured
// by the leading word — Плохо/Критично/Низко → red, Хорошо/Отлично → green, rest
// → neutral. Parse the numeric segments so we can check insight() against them.
// Two segment shapes exist: «Плохо: <10%» (label first) and «<15% плохо» (label
// last, optionally after a «SaaS:»-style prefix).
const LEAD_LABEL = {
  'плохо': RED, 'критично': RED, 'низко': RED, 'ужасно': RED,
  'хорошо': GREEN, 'отлично': GREEN,
  'норма': YELLOW, 'средне': YELLOW,
};
const TRAIL_LABEL = {
  'плохо': RED, 'критично': RED, 'тревожно': RED, 'риск': RED, 'слабо': RED,
  'хорошо': GREEN, 'отлично': GREEN, 'сильно': GREEN, 'здорово': GREEN,
  'норма': YELLOW, 'рискованно': YELLOW,
};
const NUM = String.raw`(-?)\$?(\d+(?:\.\d+)?)(k|K)?`;
const num = (sign, s, k) => (sign ? -1 : 1) * parseFloat(s) * (k ? 1000 : 1);

function parseBands(str) {
  const bands = [];
  for (const raw of str.split(/[,;]/).map(s => s.trim()).filter(Boolean)) {
    let colour, range, m, tail;
    if ((m = raw.match(/^([А-Яа-яЁё]+)\s*:\s*(.+)$/)) && LEAD_LABEL[m[1].toLowerCase()]) {
      colour = LEAD_LABEL[m[1].toLowerCase()]; range = m[2]; tail = '.*';
    } else if ((m = raw.match(/^(?:[^:]*:\s*)?(.+?)\s+([А-Яа-яЁё]+)$/)) && TRAIL_LABEL[m[2].toLowerCase()]) {
      // «<6 мес критично» — only a unit may sit between the number and the word.
      colour = TRAIL_LABEL[m[2].toLowerCase()]; range = m[1]; tail = String.raw`\s*(%|x|×|мес|дней|дня|ч)?\s*`;
    } else continue;
    const r = range.trim();
    let b = null, mm;
    if ((mm = r.match(new RegExp(`^(<|≤)\\s*${NUM}${tail}$`)))) b = { lo: -Infinity, hi: num(mm[2], mm[3], mm[4]) };
    else if ((mm = r.match(new RegExp(`^(>|≥)\\s*${NUM}${tail}$`)))) b = { lo: num(mm[2], mm[3], mm[4]), hi: Infinity };
    else if ((mm = r.match(new RegExp(`^${NUM}\\s*[–-]\\s*${NUM}${tail}$`)))) b = { lo: num(mm[1], mm[2], mm[3]), hi: num(mm[4], mm[5], mm[6]) };
    if (b) bands.push({ ...b, colour, text: raw });
  }
  return bands;
}

function interiorPoints(b) {
  if (b.lo === -Infinity) return b.hi > 0 ? [b.hi * 0.5, b.hi * 0.99] : [b.hi - 10, b.hi - 0.01];
  if (b.hi === Infinity) return [b.lo + Math.max(0.01, Math.abs(b.lo) * 0.01), b.lo * 1.5 + 1];
  return [0.25, 0.5, 0.75].map(t => b.lo + (b.hi - b.lo) * t);
}

// Judgement calls, documented rather than "fixed":
//  - runway: «12–18 мес — норма» is deliberately painted green (a normal seed runway
//    is a healthy one); only the colour of the word differs, not the advice.
//  - takeRate: «10–20% норма» is the healthy marketplace band, so its verdict is green.
const NEUTRAL_GREEN_OK = new Set(['runway', 'takeRate']);
//  - cpc.threshold lists per-industry targets («SaaS: <$5 хорошо, e-com: <$1 хорошо»);
//    the verdict follows INDUSTRY_THRESHOLDS.universal, which is what the UI shows.
const SKIP_METRIC_THRESHOLD = new Set(['cpc']);

function checkBands(m, str, where) {
  const bands = parseBands(str);
  const problems = [];
  const colourAt = x => m.insight(x).color;
  const lenient = (want, got) => got === want || (NEUTRAL_GREEN_OK.has(m.id) && want === YELLOW && got === GREEN);
  for (const b of bands) {
    for (const x of interiorPoints(b)) {
      const got = colourAt(x);
      if (!lenient(b.colour, got)) problems.push(`${where}: "${b.text}" but insight(${+x.toFixed(4)}) is ${got}`);
    }
  }
  // Where two bands meet, the verdict exactly at the cut must be one of theirs.
  // (Range notation is ambiguous about which side owns the cut; a cut that only
  // borders a gap in the text is not checked.)
  const cuts = new Set(bands.flatMap(b => [b.lo, b.hi]).filter(Number.isFinite));
  for (const c of cuts) {
    const touching = bands.filter(b => b.hi === c || b.lo === c);
    if (!touching.some(b => b.hi === c) || !touching.some(b => b.lo === c)) continue;
    const got = colourAt(c);
    if (!touching.some(b => lenient(b.colour, got))) problems.push(`${where}: at the cut ${c} insight is ${got}, bands there: ${touching.map(b => b.text).join(' / ')}`);
  }
  return problems;
}

test('insight() colours agree with metric.threshold and INDUSTRY_THRESHOLDS.universal', () => {
  const problems = [];
  for (const m of METRICS) {
    if (m.insight(50).color === INFO && m.insight(-50).color === INFO) continue; // counter metrics
    if (!SKIP_METRIC_THRESHOLD.has(m.id)) problems.push(...checkBands(m, m.threshold, `${m.id}.threshold`));
    const u = INDUSTRY_THRESHOLDS[m.id] && INDUSTRY_THRESHOLDS[m.id].universal;
    if (u) problems.push(...checkBands(m, u, `${m.id}.universal`));
  }
  assert.deepEqual(problems, []);
});

test('band parser sanity: known strings are understood', () => {
  const b = parseBands('Плохо: <10%, Средне: 10–25%, Хорошо: >25%');
  assert.deepEqual(b.map(x => [x.lo, x.hi, x.colour]), [[-Infinity, 10, RED], [10, 25, YELLOW], [25, Infinity, GREEN]]);
  assert.deepEqual(parseBands('Плохо: <$5k, Средне: $5k–$20k').map(x => [x.lo, x.hi]), [[-Infinity, 5000], [5000, 20000]]);
  assert.deepEqual(parseBands('B2B SaaS: <15% плохо, 15–25% норма').map(x => [x.lo, x.hi, x.colour]), [[-Infinity, 15, RED], [15, 25, YELLOW]]);
  assert.deepEqual(parseBands('Плохо: <0%, Средне: 0–10%').map(x => [x.lo, x.hi]), [[-Infinity, 0], [0, 10]]);
  assert.deepEqual(parseBands('10–20% норма, 20–30% сильно; >30% риск').map(x => x.colour), [YELLOW, GREEN, RED]);
});

// --------------------------------------------------------------- 3. i18n ----
const hasTr = (dict, ru) => dict[ru] && dict[ru].en && dict[ru].uz;

test('every RU insight text has EN + UZ in I18N_INSIGHTS', () => {
  const missing = new Set();
  for (const m of METRICS) {
    for (const x of [-1e6, -100, -1, -0.5, 0, 0.01, 0.05, 0.1, 0.3, 0.5, 0.75, 1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 15, 18, 20, 24, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 97, 98, 99, 100, 110, 120, 150, 180, 200, 250, 300, 500, 800, 1000, 5000, 20000, 1e6, Infinity]) {
      const { text } = m.insight(x);
      if (!hasTr(window.I18N_INSIGHTS, text)) missing.add(`${m.id}: ${text}`);
    }
  }
  assert.deepEqual([...missing], []);
});

test('every RU threshold / benchmark string has EN + UZ in I18N_THRESH', () => {
  const missing = [];
  for (const m of METRICS) if (!hasTr(window.I18N_THRESH, m.threshold)) missing.push(`${m.id}.threshold`);
  for (const [id, ind] of Object.entries(INDUSTRY_THRESHOLDS)) {
    for (const [k, s] of Object.entries(ind)) if (!hasTr(window.I18N_THRESH, s)) missing.push(`${id}.${k}`);
  }
  assert.deepEqual(missing, []);
});

// Input label/help translations are keyed by metricId + input key (I18N_INPUTS);
// their full coverage is asserted in test/i18n-drift.test.mjs.

test('every goal-mode string has EN + UZ in I18N_GOAL', () => {
  const missing = [];
  for (const [id, qs] of Object.entries(GOAL_QUESTIONS)) {
    for (const q of qs) {
      for (const s of [q.ask, q.hint, q.solveFor.label, ...q.fixed.map(f => f.label)]) {
        if (!hasTr(window.I18N_GOAL, s)) missing.push(`${id}: ${s}`);
      }
    }
  }
  assert.deepEqual(missing, []);
});

// ---------------------------------------------------------- 4. goal mode ----
// For each question: which calculate() input receives the solved value, which
// fixed field is the target (compared to the metric's result), and how the other
// fixed fields map onto calculate() inputs.
const GOAL_SPEC = {
  ltv_cac: [
    { solve: 'cac', target: 'targetRatio', map: { ltv: 'ltv' } },
    { solve: 'ltv', target: 'targetRatio', map: { cac: 'cac' } },
  ],
  cacPayback: [
    { solve: 'margin', target: 'targetMonths', map: { cac: 'cac', mrrPerCustomer: 'mrrPerCustomer' } },
    { solve: 'cac', target: 'targetMonths', map: { mrrPerCustomer: 'mrrPerCustomer', margin: 'margin' } },
  ],
  burnMultiple: [
    { solve: 'newArr', target: 'targetBM', map: { burn: 'burn' } },
    { solve: 'burn', target: 'targetBM', map: { newArr: 'newArr' } },
  ],
  ruleOf40: [
    { solve: 'growth', target: 'target', map: { margin: 'margin' } },
    { solve: 'margin', target: 'target', map: { growth: 'growth' } },
  ],
  roas: [
    { solve: 'revenue', target: 'target', map: { spend: 'spend' } },
    { solve: 'spend', target: 'target', map: { revenue: 'revenue' } },
  ],
  cr: [
    { solve: 'conversions', target: 'target', map: { visitors: 'visitors' } },
    { solve: 'visitors', target: 'target', map: { conversions: 'conversions' } },
  ],
  churn: [{ solve: 'lost', target: 'target', map: { total: 'total' } }],
  // «Минимум апселов» is floored at 0: if the base already beats the target, NRR ≥ target.
  nrr: [{ solve: 'upsell', target: 'target', map: { start: 'start', churn: 'churn' }, floorZero: true }],
  runway: [
    { solve: 'cash', target: 'target', map: { burn: 'burn' } },
    { solve: 'burn', target: 'target', map: { cash: 'cash' } },
  ],
  grossMargin: [{ solve: 'cogs', target: 'target', map: { revenue: 'revenue' } }],
  salesVelocity: [{ solve: 'cycle', target: 'target', map: { opps: 'opps', acv: 'acv', winRate: 'winRate' } }],
  winRate: [{ solve: 'total', target: 'target', map: { won: 'won' }, transform: (lost, v) => v.won + lost }],
  pipelineCoverage: [{ solve: 'pipeline', target: 'target', map: { quota: 'quota' } }],
  arpdau: [{ solve: 'dailyRevenue', target: 'target', map: { dau: 'dau' } }],
  cpa: [{ solve: 'actions', target: 'target', map: { spend: 'spend' } }],
  cpl: [{ solve: 'leads', target: 'target', map: { spend: 'spend' } }],
  cpi: [{ solve: 'installs', target: 'target', map: { spend: 'spend' } }],
  cpm: [{ solve: 'spend', target: 'target', map: { impressions: 'impressions' } }],
  mer: [{ solve: 'totalRevenue', target: 'target', map: { totalSpend: 'totalSpend' } }],
  takeRate: [{ solve: 'platformRevenue', target: 'target', map: { gmv: 'gmv' } }],
  contributionMargin: [{ solve: 'variableCosts', target: 'target', map: { revenue: 'revenue' } }],
  quotaAttainment: [{ solve: 'actual', target: 'target', map: { quota: 'quota' } }],
  cartAbandonment: [{ solve: 'purchases', target: 'target', map: { carts: 'carts' } }],
  openRate: [{ solve: 'opens', target: 'target', map: { delivered: 'delivered' } }],
  ctor: [{ solve: 'clicks', target: 'target', map: { opens: 'opens' } }],
};

test('GOAL_QUESTIONS: every question has a round-trip spec', () => {
  assert.deepEqual(Object.keys(GOAL_QUESTIONS).sort(), Object.keys(GOAL_SPEC).sort());
  for (const [id, qs] of Object.entries(GOAL_QUESTIONS)) {
    assert.ok(BY_ID[id], `goal for unknown metric ${id}`);
    assert.equal(qs.length, GOAL_SPEC[id].length, `${id}: question count`);
    qs.forEach((q, i) => {
      const fixedKeys = [...q.fixed.map(f => f.key)].sort();
      const spec = GOAL_SPEC[id][i];
      assert.deepEqual(fixedKeys, [...Object.keys(spec.map), spec.target].sort(), `${id}[${i}] fixed keys`);
      // Fixed fields that share a key with the main form are prefilled from it —
      // they must mean the same thing, i.e. map onto the same calculate() input.
      for (const [k, to] of Object.entries(spec.map)) {
        assert.equal(k, to, `${id}[${i}]: goal field "${k}" should use the calculator key "${to}" so it prefills`);
        assert.ok(BY_ID[id].inputs.some(inp => inp.key === k), `${id}[${i}]: "${k}" is not an input of ${id}`);
      }
    });
  }
});

test('GOAL_QUESTIONS: forward(inverse(target)) ≈ target', () => {
  const problems = [];
  for (const [id, qs] of Object.entries(GOAL_QUESTIONS)) {
    const m = BY_ID[id];
    qs.forEach((q, i) => {
      const spec = GOAL_SPEC[id][i];
      for (let k = 0; k < 200; k++) {
        const vals = {};
        for (const f of q.fixed) {
          const ph = parseFloat(f.placeholder);
          vals[f.key] = +(ph * (0.2 + rnd() * 1.8)).toFixed(3);
        }
        const res = q.formula(vals);
        if (res === null || !Number.isFinite(res)) continue; // UI shows '—'
        const input = {};
        for (const [from, to] of Object.entries(spec.map)) input[to] = String(vals[from]);
        input[spec.solve] = String(spec.transform ? spec.transform(res, vals) : res);
        const out = m.calculate(input);
        const n = out === null ? NaN : toNum(out);
        // Results are rounded to the metric's display precision (toFixed).
        const tol = Math.max(0.051, Math.abs(vals[spec.target]) * 1e-3);
        if (spec.floorZero && res === 0 && n >= vals[spec.target]) continue;
        if (!(Math.abs(n - vals[spec.target]) <= tol)) {
          problems.push(`${id}[${i}] ${JSON.stringify(vals)} → ${res} → forward ${out}, target ${vals[spec.target]}`);
          break;
        }
      }
    });
  }
  assert.deepEqual(problems, []);
});

test('GOAL_QUESTIONS: impossible targets give null, not a misleading number', () => {
  // A payback so short that it needs >100% gross margin is unreachable.
  assert.equal(GOAL_QUESTIONS.cacPayback[0].formula({ cac: 5000, mrrPerCustomer: 100, targetMonths: 12 }), null);
  // Win rate / cart abandonment / gross margin targets outside 0–100%.
  assert.equal(GOAL_QUESTIONS.winRate[0].formula({ won: 10, target: 120 }), null);
  assert.equal(GOAL_QUESTIONS.grossMargin[0].formula({ revenue: 1000, target: 120 }), null);
  // An NRR target already met without upsell needs 0 upsell, not a negative one.
  assert.equal(GOAL_QUESTIONS.nrr[0].formula({ start: 1000, churn: 10, target: 90 }), 0);
});

// ---------------------------------------------------------- 5. templates ----
test('SCENARIO_TEMPLATES: every preset targets a real metric, uses its keys and computes', () => {
  for (const tpl of SCENARIO_TEMPLATES) {
    for (const [id, vals] of Object.entries(tpl.values)) {
      const m = BY_ID[id];
      assert.ok(m, `${tpl.id}: unknown metric ${id}`);
      assert.deepEqual(Object.keys(vals).sort(), [...m.inputs.map(i => i.key)].sort(), `${tpl.id}.${id}: keys`);
      for (const inp of m.inputs) {
        const x = vals[inp.key];
        if (inp.min !== undefined) assert.ok(x >= inp.min, `${tpl.id}.${id}.${inp.key}=${x} < min ${inp.min}`);
        if (inp.max !== undefined) assert.ok(x <= inp.max, `${tpl.id}.${id}.${inp.key}=${x} > max ${inp.max}`);
      }
      const r = m.calculate(Object.fromEntries(Object.entries(vals).map(([k, x]) => [k, String(x)])));
      assert.ok(r !== null && Number.isFinite(toNum(r)), `${tpl.id}.${id} → ${r}`);
    }
  }
});

test('SCENARIO_TEMPLATES: presets that restate the same quantity agree', () => {
  const problems = [];
  const calc = (tpl, id) => {
    const vals = tpl.values[id];
    return vals ? toNum(BY_ID[id].calculate(Object.fromEntries(Object.entries(vals).map(([k, x]) => [k, String(x)])))) : undefined;
  };
  const near = (a, b, rel = 0.02) => Math.abs(a - b) <= Math.max(0.01, Math.abs(b) * rel);
  for (const tpl of SCENARIO_TEMPLATES) {
    const v = tpl.values;
    const eq = (label, a, b, rel) => { if (a !== undefined && b !== undefined && !near(a, b, rel)) problems.push(`${tpl.id}: ${label}: ${a} vs ${b}`); };
    if (v.ltv_cac) {
      eq('ltv_cac.ltv = LTV', v.ltv_cac.ltv, calc(tpl, 'ltv'));
      eq('ltv_cac.cac = CAC', v.ltv_cac.cac, calc(tpl, 'cac'));
    }
    if (v.cacPayback) eq('cacPayback.cac = CAC', v.cacPayback.cac, calc(tpl, 'cac'));
    if (v.arr && v.mrr) eq('arr.mrr = mrr', v.arr.mrr, v.mrr.mrr);
    if (v.stickiness) { eq('stickiness.dau = DAU', v.stickiness.dau, calc(tpl, 'dau')); eq('stickiness.mau = MAU', v.stickiness.mau, calc(tpl, 'mau')); }
    if (v.grr && v.nrr) { eq('grr.start = nrr.start', v.grr.start, v.nrr.start); eq('grr.churn = nrr.churn', v.grr.churn, v.nrr.churn); }
    if (v.nrr && v.mrr) eq('nrr.start ≤ MRR', Math.min(v.nrr.start, v.mrr.mrr), v.nrr.start);
    if (v.netNewMrr && v.quickRatio) for (const k of ['newMrr', 'expansion', 'churned', 'contraction']) eq(`netNewMrr.${k} = quickRatio.${k}`, v.netNewMrr[k], v.quickRatio[k]);
    if (v.mrrGrowthRate && v.mrr) eq('mrrGrowthRate.endMrr = MRR', v.mrrGrowthRate.endMrr, v.mrr.mrr);
    if (v.burnRate && v.runway) eq('burnRate = runway.burn', calc(tpl, 'burnRate'), v.runway.burn);
    if (v.salesVelocity) {
      eq('salesVelocity.winRate = Win Rate', v.salesVelocity.winRate, calc(tpl, 'winRate'));
      eq('salesVelocity.cycle = Sales Cycle', v.salesVelocity.cycle, calc(tpl, 'salesCycleLength'));
      eq('salesVelocity.acv = ACV', v.salesVelocity.acv, calc(tpl, 'acv'));
    }
    if (v.gmv) {
      eq('GMV = takeRate.gmv', calc(tpl, 'gmv'), v.takeRate && v.takeRate.gmv);
      eq('gmv.aov = AOV', v.gmv.aov, calc(tpl, 'aov'));
    }
    if (v.ltv && v.aov) eq('ltv.aov = AOV', v.ltv.aov, calc(tpl, 'aov'));
    if (v.revenue && v.mrr) eq('revenue = MRR', v.revenue.rev, v.mrr.mrr);
    if (v.arpu && v.mau) eq('arpu.users = MAU', v.arpu.users, calc(tpl, 'mau'));
    if (v.arpdau && v.dau) eq('arpdau.dau = DAU', v.arpdau.dau, calc(tpl, 'dau'));
    if (v.arpdau && v.revenue) eq('arpdau daily revenue ≈ revenue / 30', v.arpdau.dailyRevenue, v.revenue.rev / 30, 0.05);
    if (v.cr && v.acquisition === undefined) { /* no pairing */ }
  }
  assert.deepEqual(problems, []);
});

test('SCENARIO_TEMPLATES: scores and shares stay on their scale', () => {
  const problems = [];
  const PCT = ['stickiness', 'retention', 'churn', 'activation', 'retention_aarrr', 'cr', 'ctr', 'bounceRate',
    'testCoverage', 'csat', 'fcr', 'sla', 'openRate', 'ctor', 'featureAdoption', 'repeatPurchaseRate',
    'cartAbandonment', 'winRate', 'takeRate', 'engagementRate'];
  for (const tpl of SCENARIO_TEMPLATES) {
    const val = id => tpl.values[id] && toNum(BY_ID[id].calculate(Object.fromEntries(Object.entries(tpl.values[id]).map(([k, x]) => [k, String(x)]))));
    for (const id of PCT) { const x = val(id); if (x !== undefined && !(x >= 0 && x <= 100)) problems.push(`${tpl.id}.${id} = ${x}%`); }
    const nps = val('nps'); if (nps !== undefined && !(nps >= -100 && nps <= 100)) problems.push(`${tpl.id}.nps = ${nps}`);
    // CES 2.0: 1–7, higher = easier. A mature product should not read as high-friction.
    const ces = val('ces'); if (ces !== undefined && !(ces >= 1 && ces <= 7)) problems.push(`${tpl.id}.ces = ${ces}`);
  }
  assert.deepEqual(problems, []);
  const matureCes = BY_ID.ces.insight(toNum(BY_ID.ces.calculate(Object.fromEntries(Object.entries(SCENARIO_TEMPLATES.find(t => t.id === 'mature_saas').values.ces).map(([k, x]) => [k, String(x)])))));
  assert.notEqual(matureCes.color, RED, 'mature_saas CES preset is on the old inverted (lower = easier) scale');
});

// ------------------------------------------------------ 6. api/calc.js -----
// The public API uses its own (documented, stable) input names; map them.
const API_MAP = {
  ltv: { ltv: v => v },
  cac: { cac: v => ({ cost: v.spend, customers: v.customers }) },
  ltv_cac: { ltv_cac: v => v },
  mrr: { mrr: v => v },
  arr: { arr: v => v },
  nrr: { nrr: v => ({ start: v.start, upsell: v.expansion, churn: v.churn + v.contraction }) },
  grr: { grr: v => ({ start: v.start, churn: v.churn + v.contraction }) },
  churn: { churn: v => v },
  runway: { runway: v => v },
  burnMultiple: { burnMultiple: v => v },
  magicNumber: { magicNumber: v => ({ newArr: v.newArrQuarter, sm: v.sm }) },
  ruleOf40: { ruleOf40: v => v },
  quickRatio: { quickRatio: v => ({ newMrr: v.newMrr, expansion: v.expansionMrr, churned: v.churnMrr, contraction: v.contractionMrr }) },
  nps: { nps: v => v },
  cacPayback: { cacPayback: v => ({ cac: v.cac, mrrPerCustomer: v.mrrPerCustomer, margin: v.grossMargin }) },
  roas: { roas: v => v },
  stickiness: { stickiness: v => v },
  salesVelocity: { salesVelocity: v => ({ opps: v.opps, acv: v.acv, winRate: v.winRate, cycle: v.cycleDays }) },
  winRate: { winRate: v => v },
  pipelineCoverage: { pipelineCoverage: v => v },
  aov: { aov: v => v },
  mrrGrowthRate: { mrrGrowthRate: v => v },
};

test('api/calc.js formulas agree with app.js', () => {
  assert.deepEqual(Object.keys(CALCULATORS).sort(), Object.keys(API_MAP).sort());
  const problems = [];
  for (const [id, api] of Object.entries(CALCULATORS)) {
    const [[appId, toApp]] = Object.entries(API_MAP[id]);
    const m = BY_ID[appId];
    for (let k = 0; k < 100; k++) {
      const v = Object.fromEntries(api.inputs.map(key => [key, +(1 + rnd() * 999).toFixed(2)]));
      if (id === 'cacPayback') v.grossMargin = +(2 + rnd() * 98).toFixed(1); // API also accepts 0–1 fractions
      if (id === 'salesVelocity') v.winRate = +(2 + rnd() * 98).toFixed(1);
      const a = api.calc(v);
      const b = toNum(m.calculate(Object.fromEntries(Object.entries(toApp(v)).map(([kk, x]) => [kk, String(x)]))));
      if (a === null || b === null || Number.isNaN(b)) { if (!(a === null && Number.isNaN(b))) problems.push(`${id}: ${JSON.stringify(v)} api=${a} app=${b}`); continue; }
      const tol = Math.max(0.51, Math.abs(a) * 1e-3); // app rounds for display (toFixed)
      if (!(Math.abs(a - b) <= tol || (a === Infinity && b === Infinity))) { problems.push(`${id}: ${JSON.stringify(v)} api=${a} app=${b}`); break; }
    }
  }
  assert.deepEqual(problems, []);
});

test('api/calc.js: a zero denominator is null (not Infinity) except runway / quickRatio', () => {
  const problems = [];
  for (const [id, api] of Object.entries(CALCULATORS)) {
    for (const key of api.inputs) {
      const v = Object.fromEntries(api.inputs.map(k => [k, 100]));
      v[key] = 0;
      const r = api.calc(v);
      if (r === null || Number.isFinite(r)) continue;
      if (r === Infinity && (id === 'runway' || id === 'quickRatio')) continue;
      problems.push(`${id}: ${key}=0 → ${r}`);
    }
  }
  assert.deepEqual(problems, []);
});
