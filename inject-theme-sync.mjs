// Walks all HTML files (except generated build artifacts from per-metric pages,
// which already inherit theme from index.html) and adds a <script> tag pointing
// to /theme-sync.js if not already present.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));

// Pages that need theme-sync. Skip per-metric .html (they share index.html theme system)
// and skip index.html (it has its own complete theme machinery).
// Per-metric page ids are derived from metricsData in app.js rather than hardcoded.
// The old hardcoded list had drifted to 49 of 69 ids, so the 20 metrics added later
// were NOT skipped: they got a redundant /theme-sync.js that the other 49 never had,
// and because build.mjs regenerates those pages from index.html (stripping it) while
// this script re-adds it, the committed artifacts depended on which script ran last —
// which is why the CI "artifacts in sync" job failed depending on build order.
function metricPageNames() {
  const appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
  const ids = [...appJs.matchAll(/^\s{20}id: '([A-Za-z_0-9]+)'/gm)].map(m => m[1]);
  if (ids.length < 60) {
    console.error(`::error::inject-theme-sync: only ${ids.length} metric ids found in app.js — refusing to run with a stale skip list.`);
    process.exit(1);
  }
  return ids.map(id => `${id}.html`);
}

const SKIP_FILES = new Set([
  'index.html',
  // per-metric pages — they share index.html's theme system
  ...metricPageNames(),
]);

const INJECTION = '\n<script src="/theme-sync.js" defer></script>';

function walk(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, list);
    else if (entry.isFile() && entry.name.endsWith('.html')) list.push(full);
  }
  return list;
}

function injectInto(file) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const base = path.basename(file);
  if (SKIP_FILES.has(base) && !rel.includes('/')) return null;

  let html = fs.readFileSync(file, 'utf8');
  if (html.includes('/theme-sync.js')) return 'already';
  if (!html.includes('</head>')) return 'no-head';

  html = html.replace('</head>', INJECTION + '\n</head>');
  fs.writeFileSync(file, html);
  return 'injected';
}

function main() {
  const all = walk(ROOT);
  let injected = 0, already = 0, skipped = 0, noHead = 0;
  for (const file of all) {
    const result = injectInto(file);
    if (result === 'injected') injected++;
    else if (result === 'already') already++;
    else if (result === 'no-head') noHead++;
    else skipped++;
  }
  console.log(`✓ Theme-sync injected into ${injected} files`);
  console.log(`  Already had: ${already}, Skipped (per-metric/index): ${skipped}, No </head>: ${noHead}`);
}

main();
