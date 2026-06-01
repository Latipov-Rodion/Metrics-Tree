// Unit tests for the public calculator API. Run with: node --test
//
// Covers every calculator's formula against a known input/output, the edge-case
// guards (division by zero → null / Infinity), and the HTTP handler behaviour
// (200 / 400 / 404). No dependencies — uses the built-in node:test runner.
//
// NOTE: keep these expected values in sync with bot.py's calculators, which
// reimplement the same formulas in Python (CLAUDE.md: "keep them in sync").

import { test } from 'node:test';
import assert from 'node:assert/strict';
import handler, { CALCULATORS } from '../api/calc.js';

const approx = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) <= eps, `${a} ≈ ${b}`);

// metric -> [inputs, expected result]
const CASES = {
  ltv:              [{ aov: 2500, freq: 4, life: 3 }, 30000],
  cac:              [{ spend: 50000, customers: 200 }, 250],
  ltv_cac:          [{ ltv: 9000, cac: 3000 }, 3],
  mrr:              [{ mrr: 50000 }, 50000],
  arr:              [{ mrr: 50000 }, 600000],
  nrr:              [{ start: 5000, expansion: 800, churn: 300, contraction: 100 }, 108],
  grr:              [{ start: 5000, churn: 300, contraction: 100 }, 92],
  churn:            [{ lost: 150, total: 2000 }, 7.5],
  runway:           [{ cash: 2500000, burn: 200000 }, 12.5],
  burnMultiple:     [{ burn: 750, newArr: 500 }, 1.5],
  ruleOf40:         [{ growth: 40, margin: -7 }, 33],
  quickRatio:       [{ newMrr: 80, expansionMrr: 20, churnMrr: 15, contractionMrr: 5 }, 5],
  magicNumber:      [{ newArrQuarter: 300, sm: 200 }, 6],
  nps:              [{ promoters: 120, detractors: 30, total: 200 }, 45],
  cacPayback:       [{ cac: 1500, mrrPerCustomer: 200, grossMargin: 80 }, 9.375],
  roas:             [{ revenue: 4000, spend: 1000 }, 4],
  stickiness:       [{ dau: 20000, mau: 50000 }, 40],
  salesVelocity:    [{ opps: 50, acv: 30000, winRate: 25, cycleDays: 60 }, 6250],
  winRate:          [{ won: 25, total: 100 }, 25],
  pipelineCoverage: [{ pipeline: 1800, quota: 500 }, 3.6],
  aov:              [{ revenue: 4700, orders: 100 }, 47],
  mrrGrowthRate:    [{ startMrr: 80, endMrr: 88 }, 10],
};

test('every calculator produces the expected result', () => {
  for (const [metric, [inputs, expected]] of Object.entries(CASES)) {
    assert.ok(CALCULATORS[metric], `calculator "${metric}" exists`);
    approx(CALCULATORS[metric].calc(inputs), expected);
  }
});

test('every calculator is covered by a test case', () => {
  for (const metric of Object.keys(CALCULATORS)) {
    assert.ok(metric in CASES, `missing test case for "${metric}"`);
  }
});

test('the documented metric count (22) is stable', () => {
  assert.equal(Object.keys(CALCULATORS).length, 22);
});

test('cacPayback accepts margin as percent or fraction', () => {
  approx(CALCULATORS.cacPayback.calc({ cac: 1500, mrrPerCustomer: 200, grossMargin: 80 }), 9.375);
  approx(CALCULATORS.cacPayback.calc({ cac: 1500, mrrPerCustomer: 200, grossMargin: 0.8 }), 9.375);
});

test('edge-case guards: division by zero', () => {
  assert.equal(CALCULATORS.burnMultiple.calc({ burn: 100, newArr: 0 }), null);
  assert.equal(CALCULATORS.quickRatio.calc({ newMrr: 10, churnMrr: 0, contractionMrr: 0 }), null);
  assert.equal(CALCULATORS.magicNumber.calc({ newArrQuarter: 100, sm: 0 }), null);
  assert.equal(CALCULATORS.runway.calc({ cash: 1000, burn: 0 }), Infinity);
});

// ---- HTTP handler ----
const call = (path) => handler(new Request(`https://metricstree.vercel.app${path}`));

test('GET valid metric returns 200 with rounded result', async () => {
  const res = await call('/api/calc?metric=ltv&aov=2500&freq=4&life=3');
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.result, 30000);
  assert.equal(body.unit, '$');
});

test('unknown metric returns 404', async () => {
  const res = await call('/api/calc?metric=nope');
  assert.equal(res.status, 404);
});

test('missing inputs returns 400 with the required list', async () => {
  const res = await call('/api/calc?metric=ltv&aov=2500');
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.deepEqual(body.missing.sort(), ['freq', 'life']);
});

test('missing metric returns 400 with usage example', async () => {
  const res = await call('/api/calc');
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.ok(Array.isArray(body.supported_metrics));
});
