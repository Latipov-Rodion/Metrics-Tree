// Glossary page generator — 200+ SaaS/PM/Finance terms with anchors.
// Single page with search + category filter. Each term has unique #anchor for
// linking. DefinedTerm Schema.org for individual entries.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:'));
const SITE = 'https://metricstree.vercel.app';
const OUT = path.join(ROOT, 'glossary.html');

// Each term: { term, slug?, short, long?, related_metric?, category }
// Categories: metrics, financial, sales, marketing, product, strategy, funding, growth, tech
const TERMS = [
  // === METRICS (linked to calculators) ===
  { term: 'AAU', short: 'Active App Users — combined DAU/MAU/WAU snapshot.', category: 'metrics' },
  { term: 'ACV', short: 'Annual Contract Value — average yearly value of B2B contract.', category: 'metrics', related_metric: 'acv' },
  { term: 'AOV', short: 'Average Order Value — Revenue / Orders.', long: 'Базовая e-commerce метрика. Bundle, upsell, free-shipping threshold — главные рычаги роста.', category: 'metrics', related_metric: 'aov' },
  { term: 'ARPA', short: 'Average Revenue Per Account — MRR per customer.', category: 'metrics' },
  { term: 'ARPDAU', short: 'Average Revenue Per Daily Active User.', long: 'Главная метрика mobile F2P-игр. Free-to-play норма $0.05-1, casino $1+.', category: 'metrics', related_metric: 'arpdau' },
  { term: 'ARPPU', short: 'Average Revenue Per Paying User — for free-to-play.', category: 'metrics' },
  { term: 'ARPU', short: 'Average Revenue Per User — Revenue / Active users.', category: 'metrics', related_metric: 'arpu' },
  { term: 'ARR', short: 'Annual Recurring Revenue = MRR × 12.', category: 'metrics', related_metric: 'arr' },
  { term: 'Bounce Rate', short: 'Процент сессий с одной страницей.', category: 'metrics', related_metric: 'bounceRate' },
  { term: 'Burn Multiple', short: 'Net Burn / Net New ARR (David Sacks).', long: 'Капитальная эффективность SaaS. <1.5× для Series A/B = healthy.', category: 'metrics', related_metric: 'burnMultiple' },
  { term: 'Burn Rate', short: 'Net Burn в месяц = Expenses − Revenue.', category: 'metrics', related_metric: 'burnRate' },
  { term: 'CAC', short: 'Customer Acquisition Cost — S&M spend / new customers.', category: 'metrics', related_metric: 'cac' },
  { term: 'CAC Payback', short: 'Months to recoup CAC. SaaS norm <18 мес.', category: 'metrics', related_metric: 'cacPayback' },
  { term: 'Churn Rate', short: 'Lost customers / Total. SaaS норма <2%/мес.', category: 'metrics', related_metric: 'churn' },
  { term: 'Conversion Rate (CR)', short: 'Целевые действия / Всего visitors.', category: 'metrics', related_metric: 'cr' },
  { term: 'CPC', short: 'Cost Per Click — paid advertising cost metric.', category: 'metrics', related_metric: 'cpc' },
  { term: 'CSAT', short: 'Customer Satisfaction Score — % положительных оценок.', category: 'metrics', related_metric: 'csat' },
  { term: 'CTR', short: 'Click-Through Rate — Clicks / Impressions.', category: 'metrics', related_metric: 'ctr' },
  { term: 'DAU', short: 'Daily Active Users.', category: 'metrics', related_metric: 'dau' },
  { term: 'Engagement Rate', short: '(Interactions / Reach) × 100% — SMM/контент-метрика.', category: 'metrics', related_metric: 'engagementRate' },
  { term: 'GRR', short: 'Gross Revenue Retention — без апселов. SaaS норма >95%.', category: 'metrics', related_metric: 'grr' },
  { term: 'Gross Margin', short: '(Revenue − COGS) / Revenue. SaaS норма >75%.', category: 'metrics', related_metric: 'grossMargin' },
  { term: 'K-factor', short: 'Viral coefficient = referrals per active user. >1 = вирусный рост.', category: 'metrics', related_metric: 'referral' },
  { term: 'LTV', short: 'Lifetime Value — total revenue from average customer.', long: 'B2C: AOV × Freq × Lifespan. B2B SaaS: ARPA / Monthly Churn.', category: 'metrics', related_metric: 'ltv' },
  { term: 'LTV:CAC', short: 'Ratio of LTV to CAC. ≥3× = healthy SaaS unit economics.', category: 'metrics', related_metric: 'ltv_cac' },
  { term: 'Magic Number', short: '(Net New ARR × 4) / S&M. Scale VP framework. >1 = efficient.', category: 'metrics', related_metric: 'magicNumber' },
  { term: 'MAU', short: 'Monthly Active Users.', category: 'metrics', related_metric: 'mau' },
  { term: 'MoM', short: 'Month-over-Month growth rate.', category: 'metrics' },
  { term: 'MRR', short: 'Monthly Recurring Revenue — sum of all monthly subscriptions.', category: 'metrics', related_metric: 'mrr' },
  { term: 'MRR Growth Rate', short: 'MoM-рост MRR. YC norm 5-7%, post-PMF 10-20%.', category: 'metrics', related_metric: 'mrrGrowthRate' },
  { term: 'NPS', short: 'Net Promoter Score = %Promoters − %Detractors.', long: 'Промоутеры = 9-10, детракторы = 0-6. >30 хорошо, >70 world-class.', category: 'metrics', related_metric: 'nps' },
  { term: 'NRR', short: 'Net Revenue Retention — including expansion. Top SaaS >130%.', long: 'NRR >100% means growth from existing customers alone.', category: 'metrics', related_metric: 'nrr' },
  { term: 'Pipeline Coverage', short: 'Pipeline / Quota. B2B standard 3-4×.', category: 'metrics', related_metric: 'pipelineCoverage' },
  { term: 'Quick Ratio (SaaS)', short: '(New + Expansion MRR) / (Churn + Contraction). Mamoon Hamid framework.', category: 'metrics', related_metric: 'quickRatio' },
  { term: 'Repeat Purchase Rate', short: 'Клиенты с 2+ заказами / Все клиенты. E-com lifetime indicator.', category: 'metrics', related_metric: 'repeatPurchaseRate' },
  { term: 'Retention', short: 'Активные на конец / Активные на начало периода.', category: 'metrics', related_metric: 'retention' },
  { term: 'ROAS', short: 'Return on Ad Spend = Revenue / Ad Spend.', category: 'metrics', related_metric: 'roas' },
  { term: 'Rule of 40', short: 'Growth YoY + Margin ≥ 40% = healthy SaaS. Brad Feld 2015.', category: 'metrics', related_metric: 'ruleOf40' },
  { term: 'Runway', short: 'Months left = Cash / Net Burn. Start fundraising at 9-12 мес.', category: 'metrics', related_metric: 'runway' },
  { term: 'Sales Cycle Length', short: 'Average days from opp-created to closed-won.', category: 'metrics', related_metric: 'salesCycleLength' },
  { term: 'Sales Velocity', short: '(Opps × ACV × WinRate) / Cycle. B2B forecasting metric.', category: 'metrics', related_metric: 'salesVelocity' },
  { term: 'SLA', short: 'Service Level Agreement — % tickets resolved in target time.', category: 'metrics', related_metric: 'sla' },
  { term: 'Stickiness', short: 'DAU / MAU × 100%. Engagement indicator. >50% = top tier consumer.', category: 'metrics', related_metric: 'stickiness' },
  { term: 'T2D3', short: 'Triple, Triple, Double, Double, Double over 5 years (Stripe/Bessemer).', long: '$1M ARR → $100M за 5 лет. Path-to-IPO стандарт.', category: 'metrics' },
  { term: 'Time to Value', short: 'Время от регистрации до Aha-моменту. PLG <1 день, B2B 1-14 дней.', category: 'metrics', related_metric: 'timeToValue' },
  { term: 'Win Rate', short: 'Closed Won / Total Closed deals. B2B SaaS norm 20-25%.', category: 'metrics', related_metric: 'winRate' },
  { term: 'YoY', short: 'Year-over-Year growth.', category: 'metrics' },

  // === FINANCIAL ===
  { term: 'AR', short: 'Accounts Receivable — кому должны компании.', category: 'financial' },
  { term: 'AP', short: 'Accounts Payable — кому должна компания.', category: 'financial' },
  { term: 'Bookings', short: 'Total contract value (multi-year). ≠ Revenue (which is recognized over time).', category: 'financial' },
  { term: 'CAC Recovery', short: 'Synonym for CAC Payback Period.', category: 'financial' },
  { term: 'CAGR', short: 'Compound Annual Growth Rate — geometric mean YoY.', category: 'financial' },
  { term: 'Cash Conversion Score', short: 'Net New ARR + Existing ARR / Total Capital Raised. Bessemer framework.', category: 'financial' },
  { term: 'COGS', short: 'Cost of Goods Sold. SaaS: hosting + support + COA payment processing.', category: 'financial' },
  { term: 'Cohort', short: 'Group of customers/users tracked together (e.g. acquired in same month).', category: 'financial' },
  { term: 'Contraction MRR', short: 'MRR loss from existing customers (downgrades, seat reductions).', category: 'financial' },
  { term: 'Customer Lifetime', short: '1 / Monthly Churn — average months a customer stays.', category: 'financial' },
  { term: 'Deferred Revenue', short: 'Cash collected but revenue not yet recognized (annual prepay).', category: 'financial' },
  { term: 'EBITDA', short: 'Earnings before Interest, Taxes, Depreciation, Amortization.', category: 'financial' },
  { term: 'Expansion MRR', short: 'MRR growth from existing customers (upgrades, seat additions).', category: 'financial' },
  { term: 'FCF', short: 'Free Cash Flow — cash from ops − capex.', category: 'financial' },
  { term: 'Gross Burn', short: 'Total monthly expenses (without subtracting revenue). More conservative than Net Burn.', category: 'financial' },
  { term: 'GMV', short: 'Gross Merchandise Volume — total transaction value through platform. Marketplace metric.', category: 'financial' },
  { term: 'Net Burn', short: 'Monthly Expenses − Monthly Revenue. Standard burn calculation.', category: 'financial' },
  { term: 'Net Magic Number', short: '(Net New ARR − Churn ARR) × 4 / S&M. Stricter than gross Magic Number.', category: 'financial' },
  { term: 'OpEx', short: 'Operating Expenses (vs CapEx — capital expenditure).', category: 'financial' },
  { term: 'P&L', short: 'Profit & Loss statement.', category: 'financial' },
  { term: 'Take Rate', short: 'Marketplace commission %. Examples: eBay 10%, Uber 25%, App Store 15-30%.', category: 'financial' },
  { term: 'Top of Funnel', short: 'Total leads/visitors at start of sales funnel.', category: 'financial' },
  { term: 'Unit Economics', short: 'Profit/loss per single customer or transaction.', category: 'financial' },
  { term: 'ZIRP', short: 'Zero Interest Rate Policy — era of cheap VC capital (2010-2021). Now ended.', category: 'financial' },

  // === SALES ===
  { term: 'ABM', short: 'Account-Based Marketing — target specific high-value accounts vs broad lead-gen.', category: 'sales' },
  { term: 'AE', short: 'Account Executive — closing sales rep.', category: 'sales' },
  { term: 'BANT', short: 'Budget, Authority, Need, Timeline — qualification framework.', category: 'sales' },
  { term: 'BDR', short: 'Business Development Representative — outbound prospecting rep.', category: 'sales' },
  { term: 'Champion', short: 'Internal advocate at customer org who pushes purchase.', category: 'sales' },
  { term: 'Close', short: 'Final stage of sales — signing contract.', category: 'sales' },
  { term: 'CSM', short: 'Customer Success Manager — post-sale relationship.', category: 'sales' },
  { term: 'Closed Lost', short: 'Deal terminated without sale.', category: 'sales' },
  { term: 'Closed Won', short: 'Successfully closed deal.', category: 'sales' },
  { term: 'Discovery Call', short: 'First sales conversation to understand needs.', category: 'sales' },
  { term: 'DMU', short: 'Decision-Making Unit — all stakeholders involved in B2B purchase.', category: 'sales' },
  { term: 'Enterprise Sales', short: 'Sales motion for large companies (typically $50k+ ACV).', category: 'sales' },
  { term: 'ICP', short: 'Ideal Customer Profile — segment characteristics where product fits best.', category: 'sales' },
  { term: 'Inbound', short: 'Customers who find you (content, SEO, ads).', category: 'sales' },
  { term: 'MEDDIC', short: 'Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion — qualification framework.', category: 'sales' },
  { term: 'MQL', short: 'Marketing-Qualified Lead — passed marketing qualification, not yet sales-ready.', category: 'sales' },
  { term: 'Multi-threading', short: 'Engaging multiple stakeholders to reduce single-champion risk.', category: 'sales' },
  { term: 'Net Dollar Retention', short: 'Synonym for NRR (Net Revenue Retention).', category: 'sales' },
  { term: 'Opp', short: 'Opportunity — qualified deal in pipeline.', category: 'sales' },
  { term: 'Outbound', short: 'Sales rep reaches out to prospects (cold email, cold call).', category: 'sales' },
  { term: 'POC', short: 'Proof of Concept — trial implementation.', category: 'sales' },
  { term: 'PQL', short: 'Product-Qualified Lead — engaged with product (free tier, trial).', category: 'sales' },
  { term: 'Quota', short: 'Sales rep target for the period.', category: 'sales' },
  { term: 'Ramp Time', short: 'Months until new sales rep reaches full quota productivity.', category: 'sales' },
  { term: 'RFP', short: 'Request for Proposal — formal solicitation in enterprise sales.', category: 'sales' },
  { term: 'SDR', short: 'Sales Development Representative — prospects new accounts.', category: 'sales' },
  { term: 'SQL', short: 'Sales-Qualified Lead — ready for AE engagement.', category: 'sales' },
  { term: 'Stage', short: 'Pipeline stage: Discovery, Demo, Proposal, Negotiation, Verbal, Closed.', category: 'sales' },
  { term: 'Verbal', short: 'Verbal commitment to buy, awaiting signed contract.', category: 'sales' },

  // === MARKETING ===
  { term: 'Attribution', short: 'Assigning credit for conversion to marketing touchpoints.', category: 'marketing' },
  { term: 'Blended CAC', short: 'All marketing spend / all new customers (including organic).', category: 'marketing' },
  { term: 'Brand Awareness', short: 'Top-funnel metric — % of target market who recognize brand.', category: 'marketing' },
  { term: 'Buyer Persona', short: 'Semi-fictional rep of ideal customer based on data + research.', category: 'marketing' },
  { term: 'Content Marketing', short: 'Educational content that attracts prospects (vs direct selling).', category: 'marketing' },
  { term: 'CPL', short: 'Cost Per Lead — paid acquisition metric.', category: 'marketing' },
  { term: 'CPM', short: 'Cost Per Mille (1000 impressions).', category: 'marketing' },
  { term: 'CTA', short: 'Call to Action — desired action on landing page.', category: 'marketing' },
  { term: 'DTC', short: 'Direct-to-Consumer — selling without intermediaries.', category: 'marketing' },
  { term: 'Funnel', short: 'Visualization of conversion stages (Visitor → Lead → MQL → SQL → Customer).', category: 'marketing' },
  { term: 'Inbound Marketing', short: 'Content/SEO/social that pulls customers in.', category: 'marketing' },
  { term: 'Landing Page', short: 'Standalone page for specific campaign with single CTA.', category: 'marketing' },
  { term: 'Lifecycle Marketing', short: 'Different messages for different customer stages.', category: 'marketing' },
  { term: 'Lookalike Audience', short: 'Ad targeting based on existing customer characteristics.', category: 'marketing' },
  { term: 'Multi-Touch Attribution', short: 'Credit conversion across multiple touchpoints (vs last-click).', category: 'marketing' },
  { term: 'NPS Survey', short: 'How likely are you to recommend (0-10)?', category: 'marketing' },
  { term: 'Organic', short: 'Non-paid traffic (SEO, referrals, direct).', category: 'marketing' },
  { term: 'Paid CAC', short: 'Paid channel spend / customers from paid channels only.', category: 'marketing' },
  { term: 'PLG', short: 'Product-Led Growth — product drives acquisition (Notion, Figma, Slack model).', category: 'marketing' },
  { term: 'Referral', short: 'Customer who comes from word-of-mouth.', category: 'marketing' },
  { term: 'Retention Marketing', short: 'Marketing aimed at existing customers (vs new acquisition).', category: 'marketing' },
  { term: 'Re-targeting', short: 'Ads shown to people who visited site but didn\'t convert.', category: 'marketing' },
  { term: 'SEO', short: 'Search Engine Optimization — earning organic search traffic.', category: 'marketing' },
  { term: 'SEM/PPC', short: 'Search Engine Marketing / Pay-Per-Click — paid search ads.', category: 'marketing' },
  { term: 'SMM', short: 'Social Media Marketing.', category: 'marketing' },
  { term: 'UGC', short: 'User-Generated Content.', category: 'marketing' },
  { term: 'UTM', short: 'Tracking parameters in URLs for attribution.', category: 'marketing' },
  { term: 'Viral Loop', short: 'Mechanism where users invite more users (Dropbox referral, etc).', category: 'marketing' },

  // === PRODUCT ===
  { term: 'A/B Test', short: 'Comparing two versions to measure performance difference.', category: 'product' },
  { term: 'Activation', short: 'Reaching the "aha moment" — key indicator of future retention.', category: 'product' },
  { term: 'AARRR', short: 'Pirate Metrics: Acquisition, Activation, Retention, Referral, Revenue (Dave McClure).', category: 'product' },
  { term: 'Aha Moment', short: 'Point when user realizes the product\'s value.', category: 'product' },
  { term: 'Behavioral Cohort', short: 'Users grouped by actions (vs demographic cohort).', category: 'product' },
  { term: 'Bug Rate', short: 'Defects per KLOC or per sprint.', category: 'product', related_metric: 'bugRate' },
  { term: 'Defect Density', short: 'Bugs / KLOC.', category: 'product', related_metric: 'defectDensity' },
  { term: 'Feature Flag', short: 'Toggle to enable/disable features per user (gradual rollout, A/B test).', category: 'product' },
  { term: 'First Contact Resolution (FCR)', short: '% tickets resolved on first interaction.', category: 'product', related_metric: 'fcr' },
  { term: 'Heuristic Evaluation', short: 'Expert review of UX against known principles.', category: 'product' },
  { term: 'Jobs-to-be-Done', short: 'Framework: customers "hire" products to do jobs (Clayton Christensen).', category: 'product' },
  { term: 'KPI', short: 'Key Performance Indicator.', category: 'product' },
  { term: 'KLOC', short: '1000 Lines of Code.', category: 'product' },
  { term: 'MoSCoW', short: 'Must have, Should have, Could have, Won\'t have — prioritization framework.', category: 'product' },
  { term: 'MVP', short: 'Minimum Viable Product — smallest product that delivers value.', category: 'product' },
  { term: 'North Star Metric', short: 'Single metric that best captures product value (Stripe: payment volume).', category: 'product' },
  { term: 'OKR', short: 'Objectives & Key Results — goal-setting framework (Google, Intel).', category: 'product' },
  { term: 'Onboarding', short: 'First-time user experience flow.', category: 'product' },
  { term: 'Persona', short: 'Archetype of target user (Sarah the SaaS Founder, etc).', category: 'product' },
  { term: 'PRD', short: 'Product Requirements Document.', category: 'product' },
  { term: 'Product-Market Fit (PMF)', short: 'Customers love the product enough to recommend it organically.', category: 'product' },
  { term: 'RICE', short: 'Reach, Impact, Confidence, Effort — prioritization scoring.', category: 'product' },
  { term: 'Roadmap', short: 'Product strategy timeline (quarterly themes typically).', category: 'product' },
  { term: 'Sprint', short: '2-week development iteration (Agile/Scrum).', category: 'product' },
  { term: 'Stand-up', short: 'Daily 15-min team sync (Scrum).', category: 'product' },
  { term: 'Test Coverage', short: '% code or requirements covered by tests.', category: 'product', related_metric: 'testCoverage' },
  { term: 'User Story', short: 'Feature described from user perspective ("As X I want Y so Z").', category: 'product' },
  { term: 'Velocity (Agile)', short: 'Story points completed per sprint.', category: 'product' },
  { term: 'WSJF', short: 'Weighted Shortest Job First — SAFe prioritization.', category: 'product' },

  // === STRATEGY ===
  { term: 'Beachhead', short: 'Initial market segment to dominate before expanding.', category: 'strategy' },
  { term: 'Blue Ocean', short: 'Uncontested market space (vs Red Ocean = saturated competition).', category: 'strategy' },
  { term: 'Competitive Moat', short: 'Sustainable competitive advantage (network effects, brand, data).', category: 'strategy' },
  { term: 'Crossing the Chasm', short: 'Geoffrey Moore framework — gap between early adopters and mainstream.', category: 'strategy' },
  { term: 'Disruption', short: 'New entrant displacing incumbents (Clayton Christensen).', category: 'strategy' },
  { term: 'Economies of Scale', short: 'Cost-per-unit decreases as volume grows.', category: 'strategy' },
  { term: 'First Mover Advantage', short: 'Benefits of being first in a market (and its tradeoffs).', category: 'strategy' },
  { term: 'Flywheel', short: 'Self-reinforcing growth mechanism (Amazon flywheel).', category: 'strategy' },
  { term: 'Freemium', short: 'Free tier + paid tier business model.', category: 'strategy' },
  { term: 'Land and Expand', short: 'Acquire small footprint, grow within account over time.', category: 'strategy' },
  { term: 'Network Effects', short: 'Product becomes more valuable as more people use it (Facebook, Uber).', category: 'strategy' },
  { term: 'OKR', short: 'Objectives & Key Results — goal framework.', category: 'strategy' },
  { term: 'Pivot', short: 'Major change in strategy/product based on learnings.', category: 'strategy' },
  { term: 'Platform', short: 'Multi-sided product (API, marketplace) vs single-sided.', category: 'strategy' },
  { term: 'Porter\'s Five Forces', short: 'Industry analysis framework (Michael Porter).', category: 'strategy' },
  { term: 'SAM', short: 'Serviceable Available Market — addressable subset of TAM.', category: 'strategy' },
  { term: 'SOM', short: 'Serviceable Obtainable Market — realistic capture (10-30% of SAM in Year 1).', category: 'strategy' },
  { term: 'Strategy', short: 'How you uniquely deliver value differentiated from competitors.', category: 'strategy' },
  { term: 'SWOT', short: 'Strengths, Weaknesses, Opportunities, Threats — analysis framework.', category: 'strategy' },
  { term: 'TAM', short: 'Total Addressable Market — total potential revenue if 100% captured.', category: 'strategy' },
  { term: 'Two-Sided Market', short: 'Marketplace with distinct supply and demand sides.', category: 'strategy' },
  { term: 'Value Proposition', short: 'Statement of unique value delivered to customer segment.', category: 'strategy' },
  { term: 'Vertical SaaS', short: 'SaaS tailored to specific industry (vs horizontal: works for all).', category: 'strategy' },
  { term: 'Wedge', short: 'Initial entry point that builds toward larger opportunity.', category: 'strategy' },

  // === FUNDING ===
  { term: '409A Valuation', short: 'IRS-required FMV for stock option strikes.', category: 'funding' },
  { term: 'Angel Round', short: 'Early-stage funding from individual investors ($100k-$2M typically).', category: 'funding' },
  { term: 'Anti-Dilution', short: 'Protection that adjusts valuation for early investors if later round is down-round.', category: 'funding' },
  { term: 'Bootstrap', short: 'Self-funded company (no external investors).', category: 'funding' },
  { term: 'Bridge Round', short: 'Short-term funding between rounds to extend runway.', category: 'funding' },
  { term: 'Cap Table', short: 'Capitalization table — ownership of all equity holders.', category: 'funding' },
  { term: 'Carry', short: 'VC fund manager\'s share of profits (typically 20%).', category: 'funding' },
  { term: 'Common Stock', short: 'Stock held by founders/employees (vs preferred = investors).', category: 'funding' },
  { term: 'Convertible Note', short: 'Loan that converts to equity in next round.', category: 'funding' },
  { term: 'Down Round', short: 'New round at lower valuation than previous.', category: 'funding' },
  { term: 'Dilution', short: 'Reduction in ownership % as new shares are issued.', category: 'funding' },
  { term: 'Dry Powder', short: 'Uninvested capital available to VC firm.', category: 'funding' },
  { term: 'ESOP', short: 'Employee Stock Option Pool — equity reserved for employees.', category: 'funding' },
  { term: 'Exit', short: 'Liquidity event — IPO or acquisition.', category: 'funding' },
  { term: 'Family Office', short: 'Private wealth management — often invests in startups.', category: 'funding' },
  { term: 'IPO', short: 'Initial Public Offering — going public on stock exchange.', category: 'funding' },
  { term: 'Lead Investor', short: 'Sets terms for the round.', category: 'funding' },
  { term: 'Liquidation Preference', short: 'Order/multiple of returns in exit/acquisition.', category: 'funding' },
  { term: 'Pre-Money Valuation', short: 'Company value before new investment.', category: 'funding' },
  { term: 'Post-Money Valuation', short: 'Pre-money + new investment.', category: 'funding' },
  { term: 'Pro Rata', short: 'Right to maintain ownership % in future rounds.', category: 'funding' },
  { term: 'Pre-Seed', short: 'Earliest external funding ($250k-$2M, idea-stage).', category: 'funding' },
  { term: 'Preferred Stock', short: 'Stock with preferential rights (typically VC-held).', category: 'funding' },
  { term: 'SAFE', short: 'Simple Agreement for Future Equity (YC invention).', category: 'funding' },
  { term: 'Seed Round', short: 'First institutional VC round ($1-5M typically).', category: 'funding' },
  { term: 'Series A/B/C', short: 'Sequential VC rounds. Series A typically $5-20M at $20-100M valuation.', category: 'funding' },
  { term: 'Term Sheet', short: 'Non-binding outline of investment terms.', category: 'funding' },
  { term: 'Valuation', short: 'Company\'s worth at point in time.', category: 'funding' },
  { term: 'Venture Debt', short: 'Loan for VC-backed startups (Brex, SVB, etc).', category: 'funding' },

  // === GROWTH ===
  { term: 'AARRR Funnel', short: 'Pirate Metrics framework (Dave McClure).', category: 'growth' },
  { term: 'CAC LTV Ratio', short: 'Synonym for LTV:CAC.', category: 'growth' },
  { term: 'Cohort Analysis', short: 'Tracking groups over time (vs aggregate metrics).', category: 'growth' },
  { term: 'Compounding Growth', short: 'Growth that builds on itself (compound interest pattern).', category: 'growth' },
  { term: 'Growth Hacking', short: 'Rapid experimentation for growth (Sean Ellis).', category: 'growth' },
  { term: 'Growth Loop', short: 'Self-sustaining growth mechanism (vs linear funnel).', category: 'growth' },
  { term: 'Growth Marketing', short: 'Full-funnel marketing focused on acquisition + retention + revenue.', category: 'growth' },
  { term: 'Growth Stage', short: 'Post-PMF expansion phase (Series A-C typical).', category: 'growth' },
  { term: 'Habit Loop', short: 'Trigger → Action → Reward → Investment (Nir Eyal).', category: 'growth' },
  { term: 'Magic Number', short: 'S&M efficiency metric (Scale VP).', category: 'growth' },
  { term: 'Net Revenue Retention (NRR)', short: 'Most important SaaS retention metric.', category: 'growth' },
  { term: 'Organic Growth', short: 'Non-paid growth (SEO, word-of-mouth, viral).', category: 'growth' },
  { term: 'PLG (Product-Led Growth)', short: 'Product drives acquisition + expansion (Notion, Figma).', category: 'growth' },
  { term: 'Power Law', short: 'Distribution where few customers/products generate most value.', category: 'growth' },
  { term: 'Stickiness', short: 'How often users return (DAU/MAU).', category: 'growth' },
  { term: 'Viral Coefficient', short: 'K-factor — invites per user.', category: 'growth' },

  // === TECH (relevant to MetricTree audience) ===
  { term: 'API', short: 'Application Programming Interface.', category: 'tech' },
  { term: 'Backlog', short: 'Prioritized list of items to be worked on.', category: 'tech' },
  { term: 'CICD', short: 'Continuous Integration / Continuous Deployment.', category: 'tech' },
  { term: 'Headless', short: 'Backend without frontend coupled (CMS, e-com).', category: 'tech' },
  { term: 'JAMstack', short: 'JavaScript + APIs + Markup architecture.', category: 'tech' },
  { term: 'Microservices', short: 'Architecture: many small services vs one monolith.', category: 'tech' },
  { term: 'No-Code/Low-Code', short: 'Tools allowing non-engineers to build (Webflow, Zapier).', category: 'tech' },
  { term: 'Open Source', short: 'Source code publicly available (MIT, Apache licenses common).', category: 'tech' },
  { term: 'Scalability', short: 'Ability to handle growth without breaking.', category: 'tech' },
  { term: 'Serverless', short: 'Cloud functions that scale automatically (AWS Lambda, Vercel).', category: 'tech' },
  { term: 'SDK', short: 'Software Development Kit.', category: 'tech' },
  { term: 'SLA / SLO', short: 'Service Level Agreement / Objective — uptime commitments.', category: 'tech' },
  { term: 'Tech Stack', short: 'Combination of technologies used (React, Postgres, AWS).', category: 'tech' }
];

const CATEGORY_META = {
  metrics: { name: 'Метрики', emoji: '📊' },
  financial: { name: 'Финансы', emoji: '💰' },
  sales: { name: 'Sales / B2B', emoji: '💼' },
  marketing: { name: 'Маркетинг', emoji: '📣' },
  product: { name: 'Продукт / PM', emoji: '🛠' },
  strategy: { name: 'Стратегия', emoji: '🎯' },
  funding: { name: 'Фандрейзинг', emoji: '🏦' },
  growth: { name: 'Growth', emoji: '🚀' },
  tech: { name: 'Технологии', emoji: '💻' }
};

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function buildHTML() {
  const grouped = {};
  TERMS.forEach(t => { (grouped[t.category] ||= []).push(t); });
  // Sort within category alphabetically
  Object.values(grouped).forEach(arr => arr.sort((a, b) => a.term.localeCompare(b.term)));

  const totalCount = TERMS.length;

  // JSON-LD DefinedTermSet
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    'name': 'MetricTree Glossary',
    'description': `${totalCount}+ SaaS/PM/Finance terms for product teams`,
    'url': `${SITE}/glossary`,
    'hasDefinedTerm': TERMS.slice(0, 50).map(t => ({
      '@type': 'DefinedTerm',
      'name': t.term,
      'description': t.short,
      'url': `${SITE}/glossary#${slugify(t.term)}`,
      ...(t.related_metric ? { 'sameAs': `${SITE}/${t.related_metric}` } : {})
    }))
  };

  const renderTerm = t => {
    const slug = slugify(t.term);
    return `<div class="term" id="${slug}">
      <div class="term-name">${t.term}${t.related_metric ? ` <a class="metric-link" href="/${t.related_metric}" title="Открыть калькулятор">📊</a>` : ''}</div>
      <div class="term-short">${t.short}</div>
      ${t.long ? `<div class="term-long">${t.long}</div>` : ''}
    </div>`;
  };

  const renderCategory = (slug, terms) => {
    const meta = CATEGORY_META[slug];
    return `<section class="cat-section" data-cat="${slug}">
      <h2 id="cat-${slug}">${meta.emoji} ${meta.name} <span class="cat-count">${terms.length}</span></h2>
      <div class="term-grid">${terms.map(renderTerm).join('')}</div>
    </section>`;
  };

  const catNav = Object.entries(CATEGORY_META).map(([slug, meta]) =>
    `<a href="#cat-${slug}" data-cat-link="${slug}">${meta.emoji} ${meta.name}</a>`).join('');

  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Glossary — ${totalCount}+ SaaS / Product / Finance терминов с примерами | MetricTree</title>
<meta name="description" content="Словарь ${totalCount}+ ключевых терминов SaaS, PM, finance, sales, marketing — ARR, NRR, Burn Multiple, CAC Payback, Magic Number, T2D3, и др. Каждый термин ссылается на калькулятор или объяснение.">
<link rel="canonical" href="${SITE}/glossary">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="Glossary — ${totalCount}+ SaaS/PM/Finance терминов">
<meta property="og:description" content="Каждый термин — определение + пример + ссылка на калькулятор если есть. Long-tail SEO asset для product team.">
<meta property="og:type" content="article">
<meta property="og:url" content="${SITE}/glossary">
<meta property="og:image" content="${SITE}/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify(jsonld, null, 2)}</script>
<script src="/theme-sync.js" defer></script>
<style>
:root{color-scheme:light dark;--bg:#0A0C0E;--bg-card:#1A1C1F;--border:#2C2F33;--text-1:#E8EAED;--text-2:#B0B3B8;--text-3:#85898f;--accent:#2A6DF4;--green:#4CAF50}
html[data-theme="light"]{--bg:#F0F2F5;--bg-card:#fff;--border:#E1E4E8;--text-1:#1A1C1F;--text-2:#4A4E55;--text-3:#6e6e6e}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text-1);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.6}
.nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;max-width:980px;margin:0 auto}
.brand{display:flex;align-items:center;gap:.5rem;font-weight:700;font-size:1.05rem;text-decoration:none;color:var(--text-1)}
.brand-mark{width:24px;height:24px;background:var(--accent);border-radius:6px}
.nav a{color:var(--text-2);text-decoration:none}
.wrap{max-width:980px;margin:0 auto;padding:1.5rem 1.25rem 4rem}
h1{font-size:2.2rem;line-height:1.2;margin:.5rem 0 .5rem;letter-spacing:-.02em}
.lede{font-size:1.05rem;color:var(--text-2);margin:0 0 1.2rem;max-width:680px}
.stats{display:inline-flex;gap:.5rem;align-items:center;padding:.3rem .75rem;background:rgba(42,109,244,.12);color:var(--accent);border-radius:999px;font-size:.78rem;font-weight:700;margin-bottom:1.5rem}
.controls{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem;align-items:center}
.controls input[type=search]{flex:1;min-width:240px;padding:.65rem .9rem;background:var(--bg-card);border:1px solid var(--border);border-radius:.5rem;color:var(--text-1);font-size:.95rem;font-family:inherit}
.controls input:focus{outline:none;border-color:var(--accent)}
.cat-nav{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1.5rem}
.cat-nav a{padding:.4rem .8rem;background:var(--bg-card);border:1px solid var(--border);border-radius:.45rem;color:var(--text-2);text-decoration:none;font-size:.82rem;font-weight:500}
.cat-nav a:hover{border-color:var(--accent);color:var(--accent)}
.cat-section{margin-bottom:2.5rem}
.cat-section h2{font-size:1.4rem;margin:0 0 1rem;padding-bottom:.4rem;border-bottom:2px solid var(--accent);display:flex;align-items:center;gap:.6rem}
.cat-count{background:var(--accent);color:#fff;padding:.1rem .55rem;border-radius:999px;font-size:.72rem;font-weight:700}
.term-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:.7rem}
.term{background:var(--bg-card);border:1px solid var(--border);border-radius:.6rem;padding:.85rem 1rem;scroll-margin-top:1rem;transition:border-color .12s}
.term:hover{border-color:var(--accent)}
.term-name{font-size:1rem;font-weight:700;color:var(--text-1);margin-bottom:.25rem;display:flex;align-items:center;gap:.4rem;justify-content:space-between}
.metric-link{font-size:.85rem;text-decoration:none;opacity:.7}
.metric-link:hover{opacity:1}
.term-short{font-size:.88rem;color:var(--text-2);line-height:1.5;margin-bottom:.4rem}
.term-long{font-size:.82rem;color:var(--text-3);line-height:1.55;padding-top:.4rem;border-top:1px dashed var(--border)}
.term.hidden{display:none}
.no-results{text-align:center;padding:3rem 1rem;color:var(--text-3);display:none}
.no-results.show{display:block}
.footer{text-align:center;color:var(--text-3);margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--border);font-size:.85rem}
.footer a{color:var(--accent);text-decoration:none}
</style>
</head>
<body>
<nav class="nav"><a href="/" class="brand"><span class="brand-mark"></span> MetricTree</a><div><a href="/blog/">Blog</a> · <a href="/">Калькулятор →</a></div></nav>
<main class="wrap">
<h1>📚 Glossary</h1>
<p class="lede">Словарь ключевых терминов SaaS, product-management, финансов, sales, маркетинга. Каждый термин — определение + пример + прямая ссылка на калькулятор если применимо.</p>
<div class="stats">📊 ${totalCount}+ терминов · ${Object.keys(CATEGORY_META).length} категорий</div>

<div class="controls">
  <input type="search" id="glossary-search" placeholder="🔍 Поиск: ARR, LTV:CAC, T2D3, MEDDIC...">
</div>

<div class="cat-nav">${catNav}</div>

${Object.entries(grouped).map(([slug, terms]) => renderCategory(slug, terms)).join('')}

<div class="no-results" id="no-results">Ничего не найдено. Попробуй другой запрос.</div>

</main>
<div class="footer">© 2026 <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank">Родион Латыпов</a> · <a href="/">Калькулятор</a> · <a href="/blog/">Blog</a> · <a href="/industries/">Industries</a></div>

<script>
const search = document.getElementById('glossary-search');
const noResults = document.getElementById('no-results');
const allTerms = document.querySelectorAll('.term');
const allSections = document.querySelectorAll('.cat-section');
search.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  let visibleCount = 0;
  allTerms.forEach(t => {
    const txt = t.textContent.toLowerCase();
    const matches = !q || txt.includes(q);
    t.classList.toggle('hidden', !matches);
    if (matches) visibleCount++;
  });
  // Hide empty sections
  allSections.forEach(sec => {
    const hasVisible = Array.from(sec.querySelectorAll('.term')).some(t => !t.classList.contains('hidden'));
    sec.style.display = hasVisible ? '' : 'none';
  });
  noResults.classList.toggle('show', q && visibleCount === 0);
});
</script>
</body>
</html>`;
}

fs.writeFileSync(OUT, buildHTML());
console.log(`✓ Generated /glossary with ${TERMS.length} terms`);
