// Walks all HTML files (except generated build artifacts from per-metric pages,
// which already inherit theme from index.html) and adds a <script> tag pointing
// to /theme-sync.js if not already present.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));

// Pages that need theme-sync. Skip per-metric .html (they share index.html theme system)
// and skip index.html (it has its own complete theme machinery).
const SKIP_FILES = new Set([
  'index.html',
  // per-metric pages — they share index.html's theme system
  ...['dau','mau','stickiness','retention','ltv','cac','ltv_cac','arpu','churn',
      'mrr','arr','acv','grr','nrr','cacPayback','burnMultiple','magicNumber',
      'ruleOf40','quickRatio','acquisition','activation','retention_aarrr',
      'referral','revenue','cr','roas','cpc','ctr','bounceRate','bugRate',
      'testCoverage','defectDensity','csat','nps','fcr','sla','grossMargin',
      'runway','burnRate','salesVelocity','winRate','pipelineCoverage',
      'timeToValue','arpdau','salesCycleLength','mrrGrowthRate','aov',
      'repeatPurchaseRate','engagementRate'].map(m => `${m}.html`)
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
