// Vercel Edge Function — generates per-metric PNG OG image on demand.
// Usage: /api/og?m=ltv  →  1200×630 PNG with metric name + formula + bench badges.
// Falls back to a generic image if metric is missing.
//
// React.createElement is used (no JSX) so this is plain ESM JavaScript.

import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = { runtime: 'edge' };

const META = {
  // — top-priority pages get explicit, more curated copy —
  ltv:           { name: 'LTV',                title: 'Lifetime Value calculator',         formula: 'AOV × Frequency × Lifetime',                  benches: ['Bad: <1×CAC', 'Norm: 1–3×', 'Good: >3×', 'Excellent: >5×'] },
  cac:           { name: 'CAC',                title: 'Customer Acquisition Cost',         formula: 'Marketing spend / new customers',             benches: ['Excellent: CAC < LTV/3', 'Norm: < LTV/2', 'Bad: > LTV/2'] },
  ltv_cac:       { name: 'LTV : CAC',          title: 'Unit-economics ratio',              formula: 'LTV / CAC',                                    benches: ['Bad: <1', 'Norm: 1–3', 'Good: >3', 'Excellent: >5'] },
  churn:         { name: 'Churn Rate',         title: 'Customer churn calculator',         formula: 'Lost / Total × 100%',                          benches: ['Excellent: <0.5%/mo', 'SaaS norm: <2%/mo', 'Bad: >5%/mo'] },
  mrr:           { name: 'MRR',                title: 'Monthly Recurring Revenue',         formula: 'Sum of monthly subscriptions',                 benches: ['MoM growth >10% — good', '>20% — excellent'] },
  arr:           { name: 'ARR',                title: 'Annual Recurring Revenue',          formula: 'MRR × 12',                                     benches: ['T2D3 for young SaaS', 'Rule of 40 for mature'] },
  nrr:           { name: 'NRR',                title: 'Net Revenue Retention',             formula: '(Start + Upsell − Churn) / Start × 100%',      benches: ['Bad: <100%', 'Good: >100%', 'Excellent SaaS: >120%'] },
  burnMultiple:  { name: 'Burn Multiple',      title: 'David Sacks capital efficiency',    formula: 'Net Burn / Net New ARR',                       benches: ['Excellent: <1', 'Good: 1–1.5', 'Bad: >2'] },
  magicNumber:   { name: 'Magic Number',       title: 'SaaS S&M efficiency',               formula: '(Net New ARR × 4) / Q S&M spend',              benches: ['Bad: <0.5', 'Good: >1', 'Excellent: >1.5'] },
  ruleOf40:      { name: 'Rule of 40',         title: 'SaaS health metric',                formula: 'Growth YoY (%) + EBITDA margin (%)',           benches: ['Bad: <20%', 'Healthy: ≥40%', 'Top decile: >60%'] },
  quickRatio:    { name: 'Quick Ratio',        title: 'SaaS growth resilience (Mamoon Hamid)', formula: '(New + Expansion) / (Churned + Contraction) MRR', benches: ['Bad: <1', 'Norm: 1–2', 'Good: 2–4', 'Excellent: >4'] },
  runway:        { name: 'Runway',             title: 'Months of cash left',               formula: 'Cash / Monthly burn',                          benches: ['Critical: <6 mo', 'Norm: 12–18', 'Healthy: >18'] },
  burnRate:      { name: 'Burn Rate',          title: 'Monthly cash burn',                 formula: 'Monthly expenses − Monthly revenue',           benches: ['Cash-positive — excellent', 'See Runway and Burn Multiple'] },
  grossMargin:   { name: 'Gross Margin',       title: 'Direct-cost margin',                formula: '(Revenue − COGS) / Revenue × 100%',            benches: ['Bad: <40%', 'SaaS norm: >75%', 'Excellent: >85%'] },
  salesVelocity: { name: 'Sales Velocity',     title: 'B2B funnel speed',                  formula: '(Opps × ACV × Win) / Cycle (days)',            benches: ['Compare period-over-period', 'Growth matters more than absolute'] },
  winRate:       { name: 'Win Rate',           title: 'B2B funnel quality',                formula: 'Closed Won / All closed × 100%',               benches: ['Bad: <15%', 'Norm: 20–25%', 'Excellent: >35%'] },
  pipelineCoverage:{ name:'Pipeline Coverage', title: 'Pipeline / Quota',                  formula: 'Pipeline value / Period quota',                benches: ['Bad: <2×', 'Norm: 2–3×', 'Good: 3–4×', 'Excellent: >4×'] },
  nps:           { name: 'NPS',                title: 'Net Promoter Score',                formula: '% Promoters − % Detractors',                   benches: ['Bad: <0', 'Good: >30', 'World-class: >70'] },
  csat:          { name: 'CSAT',               title: 'Customer Satisfaction Score',       formula: '(Ratings 4–5 / Total) × 100%',                 benches: ['Bad: <70%', 'Norm: 70–85%', 'Good: >85%'] },
  roas:          { name: 'ROAS',               title: 'Return on Ad Spend',                formula: 'Revenue / Ad spend',                            benches: ['E-com >4×', 'SaaS >3×'] },
  cr:            { name: 'CR',                 title: 'Conversion Rate',                   formula: 'Conversions / Visitors × 100%',                benches: ['E-com 1–4%', 'SaaS lead-to-trial 2–8%'] },
  dau:           { name: 'DAU',                title: 'Daily Active Users',                formula: 'Unique users per day',                         benches: ['Counter — see Stickiness', 'and MoM growth'] },
  mau:           { name: 'MAU',                title: 'Monthly Active Users',              formula: 'Unique users per month',                       benches: ['Counter — see Stickiness', 'and YoY growth'] },
  stickiness:    { name: 'Stickiness',         title: 'DAU/MAU ratio',                     formula: '(DAU / MAU) × 100%',                           benches: ['Norm >20%', 'SaaS excellent >50%'] },
  retention:     { name: 'Retention',          title: 'Cohort retention',                  formula: '(Active end / Active start) × 100%',           benches: ['SaaS D30 >70%', 'Mobile D30 >15%'] },
  arpu:          { name: 'ARPU',               title: 'Average Revenue Per User',          formula: 'Revenue / Active users',                        benches: ['Compare to CAC', 'and lifetime'] },
  arpdau:        { name: 'ARPDAU',             title: 'Daily ARPU (mobile F2P)',           formula: 'Daily revenue / DAU',                          benches: ['F2P top: $0.30–$1', 'Mid: $0.10–$0.30'] },
  acv:           { name: 'ACV',                title: 'Annual Contract Value',             formula: 'Contract value / years',                        benches: ['SMB $5–20k', 'Enterprise >$20k'] },
  grr:           { name: 'GRR',                title: 'Gross Revenue Retention',           formula: '(Start − Churn) / Start × 100%',               benches: ['SaaS norm >95%', 'Excellent >97%'] },
  cacPayback:    { name: 'CAC Payback',        title: 'Months to recoup CAC',              formula: 'CAC / (MRR × Margin)',                          benches: ['SaaS norm <18 mo', 'Good <12 mo'] },
  acquisition:   { name: 'Acquisition',        title: 'New users acquired',                formula: 'New users per period',                          benches: ['Counter — see CAC', 'Activation, LTV:CAC'] },
  activation:    { name: 'Activation',         title: 'Reached the Aha moment',            formula: '(Activated / All new) × 100%',                  benches: ['Norm >30%', 'SaaS >40%'] },
  retention_aarrr:{ name:'Retention (AARRR)',  title: 'Cohort retention',                  formula: '(Returned / Cohort) × 100%',                    benches: ['SaaS >60%', 'Mobile >15%'] },
  referral:      { name: 'K-factor',           title: 'Viral coefficient',                  formula: 'Invited / Active inviters',                    benches: ['<1 — non-viral', '>1 — viral growth'] },
  revenue:       { name: 'Revenue',            title: 'Total revenue',                     formula: 'Sum across all sources',                       benches: ['Counter — see growth', 'margin, Rule of 40'] },
  timeToValue:   { name: 'Time to Value',      title: 'Days from signup to Aha',           formula: 'Median signup → Aha (days)',                   benches: ['PLG <1 day', 'B2B 1–14 days'] },
  cpc:           { name: 'CPC',                title: 'Cost Per Click',                    formula: 'Ad spend / Clicks',                             benches: ['SaaS $2–8', 'E-com $0.3–1.2'] },
  ctr:           { name: 'CTR',                title: 'Click-Through Rate',                formula: '(Clicks / Impressions) × 100%',                 benches: ['Search >2%', 'Email >20%'] },
  bounceRate:    { name: 'Bounce Rate',        title: 'Single-page sessions',              formula: '(Single-page / All) × 100%',                    benches: ['E-com <55%', 'SaaS <60%'] },
  bugRate:       { name: 'Bug Rate',           title: 'Defect detection rate',             formula: 'Bugs / KLOC or sprint',                        benches: ['Norm <2/KLOC', 'Good <1/KLOC'] },
  testCoverage:  { name: 'Test Coverage',      title: 'Code coverage by tests',            formula: '(Covered / Total) × 100%',                      benches: ['SaaS norm >85%', 'Mobile >75%'] },
  defectDensity: { name: 'Defect Density',     title: 'Defects per KLOC',                  formula: 'Defects / KLOC',                                 benches: ['Norm <2', 'Good <1'] },
  fcr:           { name: 'FCR',                title: 'First Contact Resolution',          formula: '(Resolved on first / All) × 100%',              benches: ['SaaS norm >82%', 'E-com >75%'] },
  sla:           { name: 'SLA',                title: 'Service Level Agreement',           formula: '(In time / All tickets) × 100%',                benches: ['Norm >98%', 'Enterprise >99.9%'] }
};

const C = {
  bg:        '#0A0C0E',
  panel:     '#14171C',
  text:      '#E8EAED',
  muted:     '#6b6f75',
  accent:    '#2A6DF4',
  accentDim: 'rgba(42,109,244,0.18)',
  green:     '#4CAF50',
  yellow:    '#FFC107',
  red:       '#F44336'
};

function benchColor(text) {
  const t = text.toLowerCase();
  if (t.startsWith('bad') || t.startsWith('critical') || t.startsWith('low')) return C.red;
  if (t.startsWith('good') || t.startsWith('excellent') || t.includes('top decile') || t.includes('healthy') || t.includes('cash-positive')) return C.green;
  return C.yellow;
}

const e = React.createElement;

function badge(text) {
  const c = benchColor(text);
  return e('div', {
    style: {
      display: 'flex', alignItems: 'center',
      padding: '8px 14px', borderRadius: 999,
      background: c + '22', border: `1px solid ${c}66`,
      color: c, fontSize: 22, fontWeight: 600,
      marginRight: 10, marginTop: 8
    }
  }, text);
}

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const id = (searchParams.get('m') || '').toLowerCase();
  const m = META[id] || { name: 'MetricTree', title: '47 product metrics calculator', formula: 'LTV · CAC · MRR · NRR · NPS · Runway · Burn Multiple · Rule of 40 …', benches: ['Free, no signup', '3 languages', 'Embed-ready'] };

  // Big metric name + title underneath
  // Formula chip
  // Benchmark badges
  // Footer with brand

  return new ImageResponse(
    e('div', {
      style: {
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        background: C.bg,
        padding: '60px 70px',
        fontFamily: 'sans-serif',
        color: C.text,
        position: 'relative'
      }
    }, [
      // Top accent bar
      e('div', { key: 'bar', style: { position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${C.accent} 0%, transparent 70%)` } }),

      // Top: brand label
      e('div', { key: 'brand', style: { display: 'flex', alignItems: 'center', fontSize: 26, color: C.muted, fontWeight: 700, letterSpacing: 1 } }, [
        e('div', { key: 'dot', style: { width: 14, height: 14, background: C.accent, borderRadius: 3, marginRight: 12 } }),
        e('div', { key: 'name' }, 'METRICTREE')
      ]),

      // Metric name (huge)
      e('div', { key: 'name', style: { display: 'flex', fontSize: 96, fontWeight: 800, marginTop: 36, lineHeight: 1, letterSpacing: -2 } }, m.name),

      // Subtitle
      e('div', { key: 'title', style: { display: 'flex', fontSize: 36, marginTop: 16, color: C.text, fontWeight: 500 } }, m.title),

      // Formula chip
      e('div', {
        key: 'formula',
        style: {
          display: 'flex',
          marginTop: 28,
          padding: '14px 22px',
          background: C.accentDim,
          border: `1px solid ${C.accent}44`,
          borderRadius: 12,
          fontSize: 26,
          color: C.accent,
          fontWeight: 600,
          fontFamily: 'monospace',
          alignSelf: 'flex-start'
        }
      }, m.formula),

      // Benchmark badges
      e('div', { key: 'benches', style: { display: 'flex', flexWrap: 'wrap', marginTop: 36 } }, m.benches.map((b, i) => e('div', { key: `b${i}`, style: { display: 'flex' } }, badge(b)))),

      // Footer pinned to bottom
      e('div', { key: 'foot', style: { display: 'flex', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 22, color: C.muted } }, [
        e('div', { key: 'url' }, 'metricstree.vercel.app/' + (id || '')),
        e('div', { key: 'tag', style: { color: C.text, fontWeight: 600 } }, 'Free · No signup · RU · EN · UZ')
      ])
    ]),
    {
      width: 1200,
      height: 630
    }
  );
}
