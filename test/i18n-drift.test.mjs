// i18n drift guard. Run with: node --test
//
// Several translation tables in app.js are keyed by the exact Russian source
// text (I18N_INSIGHTS, I18N_THRESH, I18N_GOAL). When someone edits the RU text
// the lookup silently misses and EN/UZ users see Russian. These tests catch:
//   1. stale keys — a table key whose RU text no longer exists anywhere in app.js;
//   2. missing translations — a RU text actually rendered by the app without an EN/UZ entry;
//   3. I18N_INPUTS (keyed by metric id + input key) covering every calculator input;
//   4. I18N_UNITS covering every result unit.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sliceLiteral, evalLiteral, loadAppSource } from './extract-literal.mjs';

const src = loadAppSource();
const metricsData = evalLiteral(src, 'const metricsData = {');
const metrics = Object.values(metricsData).flatMap(s => s.metrics);
const table = name => evalLiteral(src, `window.${name} = {`);
const I18N_INSIGHTS = table('I18N_INSIGHTS');
const I18N_THRESH = table('I18N_THRESH');
const I18N_GOAL = table('I18N_GOAL');
const I18N_INPUTS = table('I18N_INPUTS');
const I18N_UNITS = table('I18N_UNITS');
const INDUSTRY_THRESHOLDS = evalLiteral(src, 'const INDUSTRY_THRESHOLDS = {');
const GOAL_QUESTIONS = evalLiteral(src, 'const GOAL_QUESTIONS = {');

// app.js minus the translation tables themselves: where RU source text must live.
let rest = src;
for (const name of ['I18N_INSIGHTS', 'I18N_THRESH', 'I18N_GOAL']) {
  rest = rest.replace(sliceLiteral(src, `window.${name} = {`), '{}');
}
const inSource = s => rest.includes(s) || rest.includes(s.replace(/'/g, "\\'"));

const hasBoth = e => e && typeof e.en === 'string' && e.en && typeof e.uz === 'string' && e.uz;

for (const [name, tbl] of Object.entries({ I18N_INSIGHTS, I18N_THRESH, I18N_GOAL })) {
  test(`${name}: no stale keys (every RU key still exists in app.js)`, () => {
    const stale = Object.keys(tbl).filter(k => !inSource(k));
    assert.deepEqual(stale, [], `${stale.length} stale ${name} key(s) — RU source text changed, update the key:\n` + stale.join('\n'));
  });
  test(`${name}: every entry has non-empty en + uz`, () => {
    const bad = Object.entries(tbl).filter(([, v]) => !hasBoth(v)).map(([k]) => k);
    assert.deepEqual(bad, []);
  });
}

test('every rendered insight text has an EN/UZ translation', () => {
  const probes = [-Infinity, -1e9, -1e6, -1e4, -1000, -100, -50, -20, -10, -5, -2, -1, -0.5, -0.1, 0, Infinity, 1e6, 1e9];
  for (let v = 0.05; v <= 1000; v = +(v * 1.02 + 0.01).toFixed(4)) probes.push(v);
  const missing = new Set();
  for (const m of metrics) {
    if (typeof m.insight !== 'function') continue;
    for (const v of probes) {
      let r; try { r = m.insight(v); } catch { continue; }
      if (r && r.text && !hasBoth(I18N_INSIGHTS[r.text])) missing.add(`${m.id}: ${r.text}`);
    }
  }
  assert.deepEqual([...missing], []);
});

test('every benchmark threshold string has an EN/UZ translation', () => {
  const strings = metrics.map(m => m.threshold).filter(Boolean);
  for (const ind of Object.values(INDUSTRY_THRESHOLDS)) strings.push(...Object.values(ind));
  const missing = [...new Set(strings.filter(s => !hasBoth(I18N_THRESH[s])))];
  assert.deepEqual(missing, []);
});

test('every goal-mode question/label/hint has an EN/UZ translation', () => {
  const strings = [];
  for (const qs of Object.values(GOAL_QUESTIONS)) for (const q of qs) {
    strings.push(q.ask, q.hint, q.solveFor && q.solveFor.label, ...(q.fixed || []).map(f => f.label));
  }
  // Labels that are pure Latin (e.g. "LTV", "CAC") need no translation.
  const missing = [...new Set(strings.filter(s => s && /[А-Яа-яЁё]/.test(s) && !hasBoth(I18N_GOAL[s])))];
  assert.deepEqual(missing, []);
});

test('I18N_INPUTS covers every input label (and help) of every metric', () => {
  const problems = [];
  for (const m of metrics) {
    for (const inp of m.inputs) {
      const e = I18N_INPUTS[m.id] && I18N_INPUTS[m.id][inp.key];
      if (!e || !hasBoth(e.label)) { problems.push(`${m.id}.${inp.key}: missing label`); continue; }
      if (inp.help && !hasBoth(e.help)) problems.push(`${m.id}.${inp.key}: missing help`);
      if (!inp.help && e.help) problems.push(`${m.id}.${inp.key}: help translated but RU has none`);
      if (/\$/.test(inp.label) !== /\$/.test(e.label.en) || /\$/.test(inp.label) !== /\$/.test(e.label.uz)) {
        problems.push(`${m.id}.${inp.key}: "$" (currency marker) mismatch between RU and EN/UZ`);
      }
      for (const lang of ['en', 'uz']) {
        if (/[А-Яа-яЁё]/.test(e.label[lang]) || (e.help && /[А-Яа-яЁё]/.test(e.help[lang]))) problems.push(`${m.id}.${inp.key}: Cyrillic in ${lang}`);
      }
    }
  }
  // Stale entries: metric / input key no longer exists
  for (const [mid, keys] of Object.entries(I18N_INPUTS)) {
    const m = metrics.find(x => x.id === mid);
    if (!m) { problems.push(`${mid}: unknown metric`); continue; }
    for (const k of Object.keys(keys)) if (!m.inputs.some(i => i.key === k)) problems.push(`${mid}.${k}: unknown input key`);
  }
  assert.deepEqual(problems, []);
});

test('I18N_UNITS covers every non-trivial result unit', () => {
  const trivial = new Set(['', '%', '$', 'x', '×']);
  const missing = [...new Set(metrics.map(m => m.unit).filter(u => u && !trivial.has(u) && !hasBoth(I18N_UNITS[u])))];
  assert.deepEqual(missing, []);
});
