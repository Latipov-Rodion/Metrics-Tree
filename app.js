// ============================================================
// I18N — Russian default, English + Uzbek (Latin) translations.
// Format: I18N_UI[lang][key] = translation; missing → fallback.
// I18N_M[metricId][lang] = { name?, formula?, description? }
// ============================================================
window.I18N_UI = {
  en: {
    'header.subtitle_role': 'BizDev, Sales, Product, Troubleshooter, Advisor, Consultant',
    'header.creator': 'Creator:',
    'btn.dashboard': 'Dashboard',
    'btn.close': 'Close',
    'btn.ai_insight': 'AI diagnosis',
    'btn.ai_insight_tt': 'AI finds your #1 growth lever from your metrics',
    'ai.loading': 'Analyzing your metrics…',
    'ai.error': 'Could not get a diagnosis. Try again.',
    'ai.no_metrics': 'Fill in some metrics first (Churn, Runway, LTV:CAC) to get a diagnosis.',
    'ai.lever_label': 'Fix this first',
    'ai.projection_label': 'Projection',
    'ai.secondary_label': 'Then look at',
    'ai.source_ai': 'AI analysis',
    'ai.source_fallback': 'Rule-based analysis',
    'btn.share': 'Share',
    'btn.share_text': 'Share',
    'btn.copied': '✓ Copied',
    'btn.copy': 'Copy',
    'btn.png': 'PNG',
    'btn.save': 'Save',
    'btn.example': 'Example',
    'toast.example_filled': '🎲 Example values filled',
    'btn.dashboard_tt': 'Unit-economics dashboard (Ctrl+D)',
    'btn.theme_tt': 'Toggle theme',
    'btn.share_url_tt': 'Copy share link for this metric',
    'btn.copy_tt': 'Copy result (Ctrl+C)',
    'btn.share_tw_tt': 'Share calculation on X (Twitter)',
    'btn.share_li_tt': 'Share calculation on LinkedIn',
    'btn.png_tt': 'Download card as PNG',
    'btn.save_tt': 'Save calculation snapshot',
    'btn.example_tt': 'Fill inputs with example values',
    'btn.whatif_tt': 'What-If analysis',
    'btn.goal_tt': 'Reverse calculation: set a target, get the required input',
    'btn.forecast_tt': 'Forecast 6–24 months',
    'btn.whatif': 'What if?',
    'btn.goal': 'Goal',
    'btn.forecast': 'Forecast',
    'btn.reset': 'Reset',
    'forecast.title': 'Forecast horizon',
    'forecast.months': 'Months',
    'forecast.start': 'Start (M0)',
    'forecast.end': 'End',
    'forecast.delta': 'Change',
    'forecast.empty': 'Forecast is not configured for this metric.',
    'forecast.fill_first': 'Fill in metric values to build the forecast.',
    'sources.label': 'Benchmark sources',
    'menu.csv_import': '📥 Import from CSV',
    'menu.compare2': '🔀 Compare 2 metrics',
    'csvimport.title': '📥 Import values from CSV',
    'csvimport.subtitle': 'Paste your data in `metric_id,value` format (or `key=value`, one per line). Field keys: aov, freq, life, cost, customers, mrr, etc. We will autofill matching metric inputs.',
    'csvimport.placeholder': 'Example:\\nmrr,100000\\ncac,1500\\nltv,15000\\nchurn lost,150\\nchurn total,2000',
    'csvimport.parse': 'Parse and fill',
    'csvimport.success': 'Filled {n} value(s)',
    'csvimport.empty': 'Nothing to parse',
    'compare2.title': '🔀 Compare two metrics',
    'compare2.choose': 'Choose second metric:',
    'btn.close': 'Close',
    'btn.cancel': 'Cancel',
    'btn.confirm_clear': 'Clear',
    'search.placeholder': 'Search metric…',
    'search.aria': 'Search metric (press / to focus)',
    'industry.label': 'Industry:',
    'industry.universal': 'Universal',
    'industry.saas': 'SaaS',
    'industry.ecom': 'E-commerce',
    'industry.mobile': 'Mobile',
    'industry.media': 'Media',
    'industry.templates': 'Templates',
    'sectionTitle.prefix': 'Metrics ',
    'metric.see_also': 'See also',
    'metric.result_label': 'Result:',
    'metric.norm': 'Norm',
    'metric.bad': 'Bad',
    'metric.good': 'Good',
    'metric.excellent': 'Excellent',
    'metric.no_results': 'No metrics found',
    'menu.csv': '📄 Export CSV',
    'menu.snapshot': '💾 Save snapshot',
    'menu.search': '🔍 Search metric',
    'menu.help': '❓ Help & shortcuts',
    'menu.embed': '🔗 Copy embed code',
    'menu.about': 'ℹ️ About product',
    'menu.clear_all': '🗑 Clear all data',
    'modal.clear_title': 'Clear all data?',
    'modal.clear_text': 'All entered values across all metrics will be erased. This action cannot be undone.',
    'help.title': 'Keyboard shortcuts and features',
    'help.h_navigation': 'Navigation',
    'help.h_actions': 'Actions',
    'help.h_features': 'What\'s in the tool',
    'help.kbd_arrows_metric': 'Metric up / down',
    'help.kbd_arrows_section': 'Previous / next section',
    'help.kbd_search': 'Search metric',
    'help.kbd_esc': 'Close modal / blur',
    'help.kbd_save': 'Save snapshot',
    'help.kbd_dash': 'Open dashboard',
    'help.kbd_help': 'This help',
    'help.feat_goal_label': '🎯 Goal',
    'help.feat_goal': 'Reverse calculation — set a target, get the required input',
    'help.feat_whatif_label': '💡 What if?',
    'help.feat_whatif': 'Real-time sliders for what-if analysis',
    'help.feat_templates_label': '📦 Templates',
    'help.feat_templates': '5 preset scenarios (Startup SaaS, Mature SaaS, E-com, Mobile, Media)',
    'help.feat_industries_label': '🌐 Industries',
    'help.feat_industries': 'Universal / SaaS / E-com / Mobile / Media benchmarks',
    'help.feat_dashboard_label': '📊 Dashboard',
    'help.feat_dashboard': 'All calculated metrics on one page',
    'help.feat_snapshots_label': '💾 Snapshots',
    'help.feat_snapshots': 'Up to 8 versions per metric, compare and rename',
    'help.feat_clean_urls_label': '🔗 Clean URLs',
    'help.feat_clean_urls': 'Each metric is its own page: /ltv, /cac, …',
    'help.feat_currency_label': '💱 Currency',
    'help.feat_currency': '$ / € / ₽ / £ switcher in the header',
    'onboard.headline': '👋 69 metrics, formulas, industry benchmarks. Free, no signup.',
    'onboard.step_pick': 'Pick a metric',
    'onboard.step_enter': 'Enter numbers',
    'onboard.step_insight': 'Get an insight',
    'onboard.cta_template': '📦 Start with a template',
    'onboard.cta_demo': '▶ Try the LTV:CAC example',
    'onboard.cta_help': '❓ All features',
    'onboard.dismiss_title': 'Hide welcome',
    'whatif.title': 'What-if analysis',
    'whatif.result': 'Result:',
    'whatif.delta_base': '= baseline',
    'whatif.reset': 'Reset to current values',
    'goal.title': '🎯 Goal mode — reverse calculation',
    'goal.empty': 'Reverse calculations are not configured for this metric yet.',
    'dashboard.title': 'Unit-economics dashboard',
    'dashboard.empty_title': 'No calculations yet',
    'dashboard.empty_sub': 'Fill in values in the calculator or apply a scenario template',
    'dashboard.no_data': 'No data',
    'compare.title_prefix': 'Compare: ',
    'compare.select': 'Comparing:',
    'compare.current_values': 'Current values',
    'compare.snap_n': 'Snapshot ',
    'compare.relative_to': ' relative to ',
    'snapshots.history': 'History (',
    'snapshots.compare': 'Compare',
    'snapshots.clear_all': 'Delete all',
    'snapshots.delta_now': '% vs now',
    'templates.title': 'Scenario templates',
    'templates.subtitle': 'Pick a template — all metrics will be filled with realistic values',
    'templates.metrics_count': 'Fills ',
    'templates.metrics_count_suffix': ' metrics',
    'about.title': 'About MetricTree',
    'about.intro': 'MetricTree is a free online calculator of 69 product metrics for product managers, marketers, analysts, and founders. Compute LTV, CAC, MRR, ARR, Churn Rate, DAU, MAU, Stickiness, ROAS, NPS, CSAT, Burn Multiple, Runway, Sales Velocity and more — with formulas, industry benchmarks, and result interpretation.',
    'about.h_sections': 'Metrics by section',
    'about.h_features': 'Features',
    'about.h_faq': 'Frequently asked questions',
    'about.h_author': 'Author',
    'about.s_b2c': 'B2C:',
    'about.s_b2b': 'B2B SaaS:',
    'about.s_aarrr': 'AARRR:',
    'about.s_finance': 'Finance & Sales:',
    'about.s_growth': 'Growth:',
    'about.s_qa': 'QA:',
    'about.s_support': 'Support:',
    'about.feat_thresholds': '<strong>Industry benchmarks</strong> for 69 metrics (SaaS / E-commerce / Mobile / Media / universal).',
    'about.feat_goal': '<strong>🎯 Goal mode</strong> — reverse calculations for 25 metrics (32 scenarios): "I want LTV:CAC=3 — what is the max CAC?"',
    'about.feat_whatif': '<strong>💡 What-if analysis</strong> — real-time sliders for every input.',
    'about.feat_templates': '<strong>📦 Templates</strong> — 5 preset scenarios (Startup SaaS, Mature SaaS, E-commerce, Mobile, Media).',
    'about.feat_dashboard': '<strong>📊 Dashboard</strong> with all computed metrics on one page.',
    'about.feat_snapshots': '<strong>💾 Snapshots</strong> — up to 8 versions per metric with renaming and comparison.',
    'about.feat_urls': '<strong>🔗 Clean URLs</strong> — 69 pages with unique meta and JSON-LD.',
    'about.feat_currency': '<strong>💱 Currencies</strong> — $ / € / ₽ / £.',
    'about.feat_embed': '<strong>🔗 Embed mode</strong> — embed any calculator via iframe with one line.',
    'about.feat_export': '<strong>📄 Export</strong> — CSV of all metrics, PNG of a single card.',
    'about.feat_i18n': '<strong>🌐 3 languages</strong> — Russian, English, oʻzbekcha.',
    'about.q_ltv': 'How do I calculate LTV?',
    'about.a_ltv': 'LTV = AOV × purchase frequency per year × average customer lifetime (years). LTV should be at least 3× CAC.',
    'about.q_cac': 'How do I calculate CAC?',
    'about.a_cac': 'CAC = marketing & sales spend / number of new customers. SaaS payback norm: 12–18 months.',
    'about.q_nrr': 'What is NRR?',
    'about.a_nrr': 'NRR shows revenue growth from existing customers including upsells and churn. NRR > 100% means growth without new customers. Excellent SaaS NRR > 120%.',
    'about.q_churn': 'What is Churn Rate?',
    'about.a_churn': 'Churn Rate is the percentage of customers who left during a period. SaaS norm: < 2% / month, mobile apps: up to 10%.',
    'about.q_burn': 'What is Burn Multiple?',
    'about.a_burn': 'Burn Multiple = Net Burn / Net New ARR (David Sacks). < 1 excellent, 1–1.5 good, > 2 needs optimization.',
    'about.q_rule40': 'What is Rule of 40?',
    'about.a_rule40': 'Rule of 40 = revenue growth YoY (%) + EBITDA margin (%). Healthy SaaS keeps the sum ≥ 40%.',
    'about.q_runway': 'What is Runway?',
    'about.a_runway': 'Runway = Cash / monthly net burn. How many months a company has left. < 6 critical, 12–18 normal.',
    'about.author': 'Created by <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank" rel="noopener">Rodion Latipov</a> — BizDev, Sales, Product, Troubleshooter, Advisor, Consultant.',
    'about.no_signup': 'no signup, no personal data tracking',
    'menu.pricing': '💎 Pro / Team plans',
    'menu.pdf': '📑 PDF report',
    'pdf.coming_soon': 'PDF report is a Pro feature. Join the waitlist for early access.',
    'about.h_pricing': 'Plans',
    'about.pricing_intro': 'The calculator is free forever. Pro and Team are for teams and advanced workflows (PDF reports, custom-branded embed, API, cross-device sync, weekly digest).',
    'about.pricing_cta': '💎 See plans and join the waitlist →',
    'about.h_newsletter': '📬 Metric of the Week',
    'about.newsletter_intro': 'Once a week — a deep dive on one metric: history, cases, anti-patterns, industry benchmarks. Free, no spam.',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.success': '✓ Subscribed. The first issue arrives in a few days.',
    'footer.about': 'About',
    'footer.pricing': 'Pro / Team',
    'footer.help': 'Help',
    'footer.subscribe': 'Subscribe',
    'footer.cheatsheet': 'PDF cheat sheet',
    'cheatsheet.title': '📥 Free PDF cheat sheet: 69 metrics with formulas and benchmarks',
    'cheatsheet.placeholder': 'you@company.com',
    'cheatsheet.cta': 'Get the PDF →',
    'cheatsheet.success': '✓ Done!',
    'cheatsheet.open': 'Open the cheat sheet and save as PDF →',
    'pricing.title': '💎 MetricTree Plans',
    'pricing.subtitle': 'The current calculator is free forever. Pro and Team are for teams and advanced scenarios. We are building a waitlist now — leave your email to get early access + 50% off the first year.',
    'pricing.tier_free': 'Free',
    'pricing.tier_pro': 'Pro',
    'pricing.tier_team': 'Team',
    'pricing.forever': 'forever',
    'pricing.per_month': '/mo',
    'pricing.per_month_5seats': '/mo for 5 seats',
    'pricing.team_extra': '$8/mo for each extra seat',
    'pricing.discount_year': 'or $79/year — save 27%',
    'pricing.badge_popular': 'Most popular',
    'pricing.current_plan': 'Current plan',
    'pricing.cta_waitlist': 'Get -50% on launch →',
    'pricing.cta_waitlist_team': 'Get -50% on launch →',
    'pricing.f_47': '✓ All 69 metrics',
    'pricing.f_goal': '✓ Goal mode (32 reverse-calc)',
    'pricing.f_whatif': '✓ What-if sliders',
    'pricing.f_industry': '✓ Industry benchmarks (5 verticals)',
    'pricing.f_3lang': '✓ 3 languages (RU / EN / UZ)',
    'pricing.f_snaps': '✓ Up to 8 snapshots per metric (local)',
    'pricing.f_csv': '✓ CSV export',
    'pricing.f_embed': '✓ Embed mode (iframe)',
    'pricing.f_clean_urls': '✓ Clean URLs for sharing',
    'pricing.f_all_free': '✓ Everything in Free',
    'pricing.f_account': '✓ Account + sync across devices',
    'pricing.f_unlimited_snaps': '✓ Unlimited snapshots',
    'pricing.f_pdf': '✓ <strong>PDF multi-metric reports</strong> (board / investor)',
    'pricing.f_brand_embed': '✓ <strong>Custom-branded embed</strong> (your logo / color)',
    'pricing.f_no_watermark': '✓ No MetricTree watermark in embed',
    'pricing.f_api_1k': '✓ API 1,000 calls/mo',
    'pricing.f_email_digest': '✓ Weekly email digest of your metrics',
    'pricing.f_forecast': '✓ Forecast charts on What-If (6/12 mo)',
    'pricing.f_all_pro': '✓ Everything in Pro',
    'pricing.f_workspace': '✓ Shared team workspace',
    'pricing.f_audit': '✓ Audit log',
    'pricing.f_white_label': '✓ Full white-label embed',
    'pricing.f_sso': '✓ SSO (Google Workspace / Okta)',
    'pricing.f_api_10k': '✓ API 10,000 calls/mo',
    'pricing.f_priority': '✓ Priority support',
    'pricing.f_custom_metrics': '✓ Custom metrics',
    'waitlist.title': '📬 Leave your email — we will notify you when Pro/Team launch',
    'waitlist.sub': 'No spam. One email at release + a 50%-off promo code for the first year.',
    'waitlist.submit': 'Subscribe to waitlist',
    'waitlist.success': '✓ Thanks! Email will arrive 7 days before launch.'
  },
  uz: {
    'header.subtitle_role': 'BizDev, Sales, Product, Troubleshooter, Advisor, Consultant',
    'header.creator': 'Yaratuvchi:',
    'btn.dashboard': 'Boshqaruv paneli',
    'btn.close': 'Yopish',
    'btn.ai_insight': 'AI-tashxis',
    'btn.ai_insight_tt': 'AI metrikalaringiz bo‘yicha asosiy o‘sish richagini topadi',
    'ai.loading': 'Metrikalar tahlil qilinmoqda…',
    'ai.error': 'Tashxis olinmadi. Qayta urinib ko‘ring.',
    'ai.no_metrics': 'Avval ba’zi metrikalarni to‘ldiring (Churn, Runway, LTV:CAC).',
    'ai.lever_label': 'Avval shuni tuzating',
    'ai.projection_label': 'Prognoz',
    'ai.secondary_label': 'Keyin qarang',
    'ai.source_ai': 'AI tahlili',
    'ai.source_fallback': 'Qoidaga asoslangan tahlil',
    'btn.share': 'Ulashish',
    'btn.share_text': 'Ulashish',
    'btn.copied': '✓ Nusxalandi',
    'btn.copy': 'Nusxa olish',
    'btn.png': 'PNG',
    'btn.save': 'Saqlash',
    'btn.example': 'Misol',
    'toast.example_filled': '🎲 Misol qiymatlari toʻldirildi',
    'btn.dashboard_tt': 'Unit-economics dashboardi (Ctrl+D)',
    'btn.theme_tt': 'Mavzu almashtirish',
    'btn.share_url_tt': 'Ushbu metrika havolasini ulashish',
    'btn.copy_tt': 'Natijani nusxa olish (Ctrl+C)',
    'btn.share_tw_tt': 'Hisobni X (Twitter)ʼda ulashish',
    'btn.share_li_tt': 'Hisobni LinkedIn’da ulashish',
    'btn.png_tt': 'Kartochkani PNG sifatida yuklab olish',
    'btn.save_tt': 'Hisob suratini saqlash',
    'btn.example_tt': 'Misol qiymatlari bilan toʻldirish',
    'btn.whatif_tt': '«Agar nima boʻlsa?» tahlili',
    'btn.goal_tt': 'Teskari hisob: maqsadni belgilang — kerakli qiymat hisoblanadi',
    'btn.forecast_tt': '6–24 oylik prognoz',
    'btn.whatif': 'Agar nima bo‘lsa?',
    'btn.goal': 'Maqsad',
    'btn.forecast': 'Prognoz',
    'btn.reset': 'Tiklash',
    'forecast.title': 'Prognoz davri',
    'forecast.months': 'Oylar',
    'forecast.start': 'Start (M0)',
    'forecast.end': 'Oxir',
    'forecast.delta': 'O\'zgarish',
    'forecast.empty': 'Bu metrika uchun prognoz sozlanmagan.',
    'forecast.fill_first': 'Prognoz qurish uchun metrika qiymatlarini to\'ldiring.',
    'sources.label': 'Bencharklar manbalari',
    'menu.csv_import': '📥 CSV dan import',
    'menu.compare2': '🔀 2 ta metrikani taqqoslash',
    'csvimport.title': '📥 CSV dan qiymatlarni import qilish',
    'csvimport.subtitle': 'Ma\'lumotlaringizni `metrika_id,qiymat` formatida joylashtiring (yoki `key=value`, har bir qator). Mos metrika inputlari avtomatik to\'ldiriladi.',
    'csvimport.placeholder': 'Misol:\\nmrr,100000\\ncac,1500\\nltv,15000',
    'csvimport.parse': 'Parse va to\'ldirish',
    'csvimport.success': '{n} qiymat to\'ldirildi',
    'csvimport.empty': 'Parse uchun ma\'lumot yo\'q',
    'compare2.title': '🔀 Ikkita metrikani taqqoslash',
    'compare2.choose': 'Ikkinchi metrikani tanlang:',
    'btn.close': 'Yopish',
    'btn.cancel': 'Bekor qilish',
    'btn.confirm_clear': 'Tozalash',
    'search.placeholder': 'Metrikani izlash…',
    'search.aria': 'Metrikani izlash (/ tugmasi)',
    'industry.label': 'Soha:',
    'industry.universal': 'Universal',
    'industry.saas': 'SaaS',
    'industry.ecom': 'E-tijorat',
    'industry.mobile': 'Mobil',
    'industry.media': 'Media',
    'industry.templates': 'Shablonlar',
    'sectionTitle.prefix': 'Metrikalar: ',
    'metric.see_also': 'Shuningdek qarang',
    'metric.result_label': 'Natija:',
    'metric.norm': 'Norma',
    'metric.bad': 'Yomon',
    'metric.good': 'Yaxshi',
    'metric.excellent': 'A’lo',
    'metric.no_results': 'Metrika topilmadi',
    'menu.csv': '📄 CSV eksporti',
    'menu.snapshot': '💾 Snapshot saqlash',
    'menu.search': '🔍 Metrika izlash',
    'menu.help': '❓ Yordam va tugmalar',
    'menu.embed': '🔗 Embed kodni nusxalash',
    'menu.about': 'ℹ️ Mahsulot haqida',
    'menu.clear_all': '🗑 Hamma ma’lumotlarni tozalash',
    'modal.clear_title': 'Hamma ma’lumotlarni tozalashmi?',
    'modal.clear_text': 'Barcha metrikalardagi qiymatlar o‘chiriladi. Bu amalni qaytarib bo‘lmaydi.',
    'help.title': 'Tezkor tugmalar va imkoniyatlar',
    'help.h_navigation': 'Navigatsiya',
    'help.h_actions': 'Amallar',
    'help.h_features': 'Asbob ichida nima bor',
    'help.kbd_arrows_metric': 'Metrika yuqoriga / pastga',
    'help.kbd_arrows_section': 'Oldingi / keyingi bo‘lim',
    'help.kbd_search': 'Metrika izlash',
    'help.kbd_esc': 'Modalni yopish / fokusni olib tashlash',
    'help.kbd_save': 'Snapshot saqlash',
    'help.kbd_dash': 'Boshqaruv panelini ochish',
    'help.kbd_help': 'Ushbu yordam',
    'help.feat_goal_label': '🎯 Maqsad',
    'help.feat_goal': 'Teskari hisob — maqsadni qo‘ying, kerakli kirishni oling',
    'help.feat_whatif_label': '💡 Agar nima bo‘lsa?',
    'help.feat_whatif': 'Real vaqt rejimida sliderlar bilan what-if tahlili',
    'help.feat_templates_label': '📦 Shablonlar',
    'help.feat_templates': '5 ta tayyor stsenariy (Startap SaaS, Yetuk SaaS, E-tijorat, Mobil, Media)',
    'help.feat_industries_label': '🌐 Sohalar',
    'help.feat_industries': 'Universal / SaaS / E-tijorat / Mobil / Media benchmarklari',
    'help.feat_dashboard_label': '📊 Dashboard',
    'help.feat_dashboard': 'Barcha hisoblangan metrikalar bir sahifada',
    'help.feat_snapshots_label': '💾 Snapshotlar',
    'help.feat_snapshots': 'Bir metrikaga 8 ta versiya, taqqoslash va qayta nomlash',
    'help.feat_clean_urls_label': '🔗 Toza URL’lar',
    'help.feat_clean_urls': 'Har bir metrika alohida sahifa: /ltv, /cac, …',
    'help.feat_currency_label': '💱 Valyuta',
    'help.feat_currency': '$ / € / ₽ / £ — shapkadagi pereklyuchatel',
    'onboard.headline': '👋 69 ta metrika, formulalar, soha bo‘yicha bencharklar. Bepul, ro‘yxatdan o‘tishsiz.',
    'onboard.step_pick': 'Metrikani tanlang',
    'onboard.step_enter': 'Sonlarni kiriting',
    'onboard.step_insight': 'Insight oling',
    'onboard.cta_template': '📦 Shablon bilan boshlash',
    'onboard.cta_demo': '▶ LTV:CAC misolini sinab ko‘rish',
    'onboard.cta_help': '❓ Barcha imkoniyatlar',
    'onboard.dismiss_title': 'Salomlashishni yashirish',
    'whatif.title': '"Agar nima bo‘lsa?" tahlili',
    'whatif.result': 'Natija:',
    'whatif.delta_base': '= boshlang‘ich',
    'whatif.reset': 'Joriy qiymatlarga qaytarish',
    'goal.title': '🎯 Maqsad rejimi — teskari hisob',
    'goal.empty': 'Bu metrika uchun teskari hisob hali sozlanmagan.',
    'dashboard.title': 'Unit-economics dashboard',
    'dashboard.empty_title': 'Hali hisoblar yo‘q',
    'dashboard.empty_sub': 'Kalkulyatorga qiymatlarni kiriting yoki shablonni qo‘llang',
    'dashboard.no_data': 'Ma’lumot yo‘q',
    'compare.title_prefix': 'Taqqoslash: ',
    'compare.select': 'Taqqoslanmoqda:',
    'compare.current_values': 'Joriy qiymatlar',
    'compare.snap_n': 'Snapshot ',
    'compare.relative_to': ' nisbatan ',
    'snapshots.history': 'Tarix (',
    'snapshots.compare': 'Taqqoslash',
    'snapshots.clear_all': 'Hammasini o‘chirish',
    'snapshots.delta_now': '% hozirga nisbatan',
    'templates.title': 'Stsenariy shablonlari',
    'templates.subtitle': 'Shablonni tanlang — barcha metrikalar real qiymatlar bilan to‘ldiriladi',
    'templates.metrics_count': 'To‘ldiradi: ',
    'templates.metrics_count_suffix': ' ta metrika',
    'about.title': 'MetricTree haqida',
    'about.intro': 'MetricTree — bu mahsulot menejerlari, marketologlar, analitiklar va asoschilar uchun 69 ta mahsulot metrikasini hisoblovchi bepul onlayn kalkulyator. LTV, CAC, MRR, ARR, Churn, DAU, MAU, Stickiness, ROAS, NPS, CSAT, Burn Multiple, Runway, Sales Velocity va boshqalarni formulalar, soha bencharklari va natija talqini bilan hisoblang.',
    'about.h_sections': 'Bo‘limlar bo‘yicha metrikalar',
    'about.h_features': 'Imkoniyatlar',
    'about.h_faq': 'Tez-tez beriladigan savollar',
    'about.h_author': 'Muallif',
    'about.s_b2c': 'B2C:',
    'about.s_b2b': 'B2B SaaS:',
    'about.s_aarrr': 'AARRR:',
    'about.s_finance': 'Moliya va sotuv:',
    'about.s_growth': 'O‘sish:',
    'about.s_qa': 'QA:',
    'about.s_support': 'Qo‘llab-quvvatlash:',
    'about.feat_thresholds': '<strong>Soha bencharklari</strong> 69 ta metrika uchun (SaaS / E-tijorat / Mobil / Media / universal).',
    'about.feat_goal': '<strong>🎯 Maqsad rejimi</strong> — 25 ta metrika uchun teskari hisob (32 ta stsenariy): "LTV:CAC=3 kerak — maksimal CAC qancha?"',
    'about.feat_whatif': '<strong>💡 What-if tahlili</strong> — har bir kirish uchun sliderlar real vaqtda.',
    'about.feat_templates': '<strong>📦 Shablonlar</strong> — 5 ta tayyor stsenariy (Startap SaaS, Yetuk SaaS, E-tijorat, Mobil, Media).',
    'about.feat_dashboard': '<strong>📊 Dashboard</strong> — barcha hisoblangan metrikalar bir sahifada.',
    'about.feat_snapshots': '<strong>💾 Snapshotlar</strong> — bir metrikaga 8 ta versiya, qayta nomlash va taqqoslash.',
    'about.feat_urls': '<strong>🔗 Toza URL’lar</strong> — noyob meta va JSON-LD bilan 69 ta sahifa.',
    'about.feat_currency': '<strong>💱 Valyutalar</strong> — $ / € / ₽ / £.',
    'about.feat_embed': '<strong>🔗 Embed rejimi</strong> — istalgan kalkulyatorni bir qator bilan iframe orqali joylashtirish.',
    'about.feat_export': '<strong>📄 Eksport</strong> — barcha metrikalar CSV, alohida karta PNG.',
    'about.feat_i18n': '<strong>🌐 3 ta til</strong> — rus, English, oʻzbekcha.',
    'about.q_ltv': 'LTV ni qanday hisoblash kerak?',
    'about.a_ltv': 'LTV = AOV × yiliga xarid chastotasi × mijozning o‘rtacha umri (yil). LTV CAC dan kamida 3 baravar yuqori bo‘lishi kerak.',
    'about.q_cac': 'CAC ni qanday hisoblash kerak?',
    'about.a_cac': 'CAC = marketing va sotuv xarajatlari / yangi mijozlar soni. SaaS uchun qaytarilish normasi: 12–18 oy.',
    'about.q_nrr': 'NRR nima?',
    'about.a_nrr': 'NRR — apsel va churn bilan birga mavjud mijozlardan kelgan tushum o‘sishini ko‘rsatadi. NRR > 100% yangi mijozlarsiz o‘sishni anglatadi. SaaS uchun a’lo > 120%.',
    'about.q_churn': 'Churn Rate nima?',
    'about.a_churn': 'Churn Rate — davr davomida mahsulotni tark etgan mijozlar foizi. SaaS normasi: oyiga < 2%, mobil ilovalar: 10% gacha.',
    'about.q_burn': 'Burn Multiple nima?',
    'about.a_burn': 'Burn Multiple = Net Burn / Net New ARR (David Sacks). < 1 a’lo, 1–1.5 yaxshi, > 2 — optimallashtirish kerak.',
    'about.q_rule40': 'Rule of 40 nima?',
    'about.a_rule40': 'Rule of 40 = YoY tushum o‘sishi (%) + EBITDA marja (%). Sog‘lom SaaS yig‘indisi ≥ 40% bo‘ladi.',
    'about.q_runway': 'Runway nima?',
    'about.a_runway': 'Runway = Pul / oylik o‘rtacha sarf. Kompaniya qancha oy davomida ishlay olishi. < 6 — kritik, 12–18 — norma.',
    'about.author': 'Yaratuvchi: <a href="https://www.linkedin.com/in/rodion-latipov" target="_blank" rel="noopener">Rodion Latipov</a> — BizDev, Sales, Product, Troubleshooter, Advisor, Consultant.',
    'about.no_signup': 'ro‘yxatdan o‘tishsiz, shaxsiy ma’lumotlarni kuzatishsiz',
    'menu.pricing': '💎 Pro / Team tariflar',
    'menu.pdf': '📑 PDF-hisobot',
    'pdf.coming_soon': 'PDF-hisobot — Pro xususiyat. Erta kirish uchun waitlist ga obuna bo\'ling.',
    'about.h_pricing': 'Tariflar',
    'about.pricing_intro': 'Kalkulyator abadiy bepul. Pro va Team — jamoalar va ilg\'or stsenariylar uchun (PDF-hisobotlar, brendli embed, API, qurilmalar orasida sync, haftalik digest).',
    'about.pricing_cta': '💎 Tariflarni ko\'rish va waitlist ga yozilish →',
    'about.h_newsletter': '📬 Hafta metrikasi',
    'about.newsletter_intro': 'Haftada bir marta — bitta metrika bo\'yicha chuqur tahlil: tarix, keyslar, anti-patternlar, soha bencharklari. Bepul, spam yo\'q.',
    'newsletter.subscribe': 'Obuna bo\'lish',
    'newsletter.success': '✓ Obuna rasmiylashtirildi. Birinchi son bir necha kun ichida keladi.',
    'footer.about': 'Mahsulot',
    'footer.pricing': 'Pro / Team',
    'footer.help': 'Yordam',
    'footer.subscribe': 'Obuna',
    'pricing.title': '💎 MetricTree tariflari',
    'pricing.subtitle': 'Joriy kalkulyator abadiy bepul. Pro va Team — jamoalar va ilg‘or stsenariylar uchun. Hozir waitlist yig‘moqdamiz — birinchi yilga -50% chegirma uchun email qoldiring.',
    'pricing.tier_free': 'Free',
    'pricing.tier_pro': 'Pro',
    'pricing.tier_team': 'Team',
    'pricing.forever': 'abadiy',
    'pricing.per_month': '/oy',
    'pricing.per_month_5seats': '/oy 5 ta seat uchun',
    'pricing.team_extra': '$8/oy har bir qo‘shimcha seat',
    'pricing.discount_year': 'yoki $79/yil — 27% tejash',
    'pricing.badge_popular': 'Eng mashhur',
    'pricing.current_plan': 'Joriy reja',
    'pricing.cta_waitlist': 'Ishga tushganda -50% olish →',
    'pricing.cta_waitlist_team': 'Ishga tushganda -50% olish →',
    'pricing.f_47': '✓ Barcha 69 metrika',
    'pricing.f_goal': '✓ Maqsad rejimi (32 teskari hisob)',
    'pricing.f_whatif': '✓ What-if sliderlari',
    'pricing.f_industry': '✓ Soha bencharklari (5 vertikal)',
    'pricing.f_3lang': '✓ 3 til (RU / EN / UZ)',
    'pricing.f_snaps': '✓ Bir metrikaga 8 snapshotgacha (lokal)',
    'pricing.f_csv': '✓ CSV eksport',
    'pricing.f_embed': '✓ Embed rejimi (iframe)',
    'pricing.f_clean_urls': '✓ Ulashish uchun toza URL\'lar',
    'pricing.f_all_free': '✓ Free dagi hammasi',
    'pricing.f_account': '✓ Akkaunt + qurilmalar orasida sync',
    'pricing.f_unlimited_snaps': '✓ Cheksiz snapshotlar',
    'pricing.f_pdf': '✓ <strong>PDF ko\'p-metrikali hisobotlar</strong> (board / investor)',
    'pricing.f_brand_embed': '✓ <strong>Brendli embed</strong> (sizning logo/rang)',
    'pricing.f_no_watermark': '✓ Embed da MetricTree watermark siz',
    'pricing.f_api_1k': '✓ API 1,000 call/oy',
    'pricing.f_email_digest': '✓ Sizning metrikalaringiz bo‘yicha haftalik email digest',
    'pricing.f_forecast': '✓ What-If da forecast grafiklar (6/12 oy)',
    'pricing.f_all_pro': '✓ Pro dagi hammasi',
    'pricing.f_workspace': '✓ Jamoa uchun umumiy workspace',
    'pricing.f_audit': '✓ Audit log',
    'pricing.f_white_label': '✓ To\'liq white-label embed',
    'pricing.f_sso': '✓ SSO (Google Workspace / Okta)',
    'pricing.f_api_10k': '✓ API 10,000 call/oy',
    'pricing.f_priority': '✓ Birinchi navbatdagi qo\'llab-quvvatlash',
    'pricing.f_custom_metrics': '✓ Maxsus metrikalar',
    'waitlist.title': '📬 Email qoldiring — Pro/Team ishga tushganda xabar beramiz',
    'waitlist.sub': 'Spam yo\'q. Reliz oldidan bitta email + birinchi yilga -50% promokod.',
    'waitlist.submit': 'Waitlist ga obuna bo\'lish',
    'waitlist.success': '✓ Rahmat! Email reliz oldidan 7 kun avval keladi.'
  }
};

window.I18N_M = {
  // — i18n parity fix: metrics that had no EN/UZ entry (aov, repeatPurchaseRate, salesCycleLength, mrrGrowthRate, engagementRate) —
  aov:        { en: { name: 'AOV', formula: 'Revenue in period / Number of orders', description: 'Average Order Value — the average basket. A foundational e-commerce and retail metric.' },
                uz: { name: 'AOV', formula: 'Davr tushumi / Buyurtmalar soni', description: 'Average Order Value — o‘rtacha chek. E-commerce va chakana savdoning asosiy metrikasi.' } },
  repeatPurchaseRate: { en: { name: 'Repeat Purchase Rate', formula: 'Customers with ≥2 orders / All customers × 100%', description: 'Repeat Purchase Rate (RPR) — the share of customers who made at least 2 purchases. The key e-commerce loyalty indicator.' },
                uz: { name: 'Repeat Purchase Rate', formula: '2+ buyurtmali mijozlar / Barcha mijozlar × 100%', description: 'Repeat Purchase Rate (RPR) — kamida 2 marta xarid qilgan mijozlar ulushi. E-commerce sodiqligining asosiy ko‘rsatkichi.' } },
  salesCycleLength: { en: { name: 'Sales Cycle Length', formula: 'Average days from opportunity-created to closed-won', description: 'The average time to close a B2B deal. Shorter → higher Sales Velocity, lower CAC Payback.' },
                uz: { name: 'Sales Cycle Length', formula: 'Opportunity yaratilgandan closed-won gacha o‘rtacha kunlar', description: 'B2B bitimni yopishning o‘rtacha vaqti. Qisqaroq → Sales Velocity yuqori, CAC Payback past.' } },
  mrrGrowthRate: { en: { name: 'MRR Growth Rate', formula: '(End MRR − Start MRR) / Start MRR × 100%', description: 'The MRR growth rate over a period. The key SaaS health metric — more important than absolute MRR.' },
                uz: { name: 'MRR Growth Rate', formula: '(Davr oxiri MRR − Davr boshi MRR) / Davr boshi MRR × 100%', description: 'Davr davomida MRR o‘sish sur’ati. SaaS sog‘lig‘ining asosiy metrikasi — mutloq MRR dan muhimroq.' } },
  engagementRate: { en: { name: 'Engagement Rate', formula: '(Active interactions / Reach) × 100%', description: 'Engagement Rate — the share of the audience that actively interacted (like / comment / share / click). The key SMM and content-marketing metric.' },
                uz: { name: 'Engagement Rate', formula: '(Faol o‘zaro ta’sirlar / Qamrov) × 100%', description: 'Engagement Rate — faol o‘zaro ta’sir qilgan auditoriya ulushi (layk / izoh / ulashish / klik). SMM va kontent-marketingning asosiy metrikasi.' } },
  // — Batch +10 (CPA, CPL, CPI, ARPPU, Open Rate, CTOR, Feature Adoption, LVR, Cash Conversion Score, Avg Resolution Time) —
  cpa:        { en: { name: 'CPA', formula: 'Spend / Target actions (conversions)', description: 'Cost Per Action — cost of one target action (purchase, signup, request). Unlike CPC it counts results, not clicks. Judge it with CR and LTV.' },
                uz: { name: 'CPA', formula: 'Xarajat / Maqsadli amallar (konversiyalar)', description: 'Cost Per Action — bitta maqsadli amal (xarid, ro‘yxatdan o‘tish, ariza) narxi. CPC dan farqli, kliklarni emas, natijalarni hisoblaydi. CR va LTV bilan baholang.' } },
  cpl:        { en: { name: 'CPL', formula: 'Spend / Number of leads', description: 'Cost Per Lead — cost of acquiring one lead. Only meaningful together with lead quality and lead-to-customer conversion.' },
                uz: { name: 'CPL', formula: 'Xarajat / Lidlar soni', description: 'Cost Per Lead — bitta lid jalb qilish narxi. Faqat lid sifati va lidning mijozga konversiyasi bilan birga ma’noga ega.' } },
  cpi:        { en: { name: 'CPI', formula: 'Acquisition spend / Installs', description: 'Cost Per Install — cost of one app install. A core mobile UA metric; compare with LTV/ARPPU so installs pay back.' },
                uz: { name: 'CPI', formula: 'Jalb qilish xarajati / O‘rnatishlar', description: 'Cost Per Install — bitta ilova o‘rnatish narxi. Mobil UA ning asosiy metrikasi; o‘rnatishlar o‘zini qoplashi uchun LTV/ARPPU bilan solishtiring.' } },
  arppu:      { en: { name: 'ARPPU', formula: 'Revenue / Paying users', description: 'Average Revenue Per Paying User — revenue per paying user only, not diluted by free audience. A key metric for free-to-play and freemium.' },
                uz: { name: 'ARPPU', formula: 'Tushum / To‘lovchi foydalanuvchilar', description: 'Average Revenue Per Paying User — faqat to‘lovchilarga to‘g‘ri keladigan o‘rtacha tushum, bepul auditoriya bilan suyultirilmaydi. F2P va freemium uchun muhim metrika.' } },
  openRate:   { en: { name: 'Email Open Rate', formula: '(Opens / Delivered) × 100%', description: 'Share of delivered emails that were opened. A basic email metric driven by subject line, sender and domain reputation.' },
                uz: { name: 'Email Open Rate', formula: '(Ochilishlar / Yetkazilgan) × 100%', description: 'Yetkazilgan xatlarning ochilgan ulushi. Mavzu, jo‘natuvchi va domen obro‘siga bog‘liq asosiy email metrikasi.' } },
  ctor:       { en: { name: 'CTOR', formula: '(Unique clicks / Unique opens) × 100%', description: 'Click-To-Open Rate — share of openers who clicked a link. Unlike plain CTR it does not depend on Open Rate and better measures email content.' },
                uz: { name: 'CTOR', formula: '(Noyob kliklar / Noyob ochilishlar) × 100%', description: 'Click-To-Open Rate — xatni ochganlarning klik qilgan ulushi. Oddiy CTR dan farqli, Open Rate ga bog‘liq emas va xat kontentini yaxshiroq o‘lchaydi.' } },
  featureAdoption: { en: { name: 'Feature Adoption Rate', formula: '(Feature users / Active users) × 100%', description: 'Share of active users who started using a specific feature. Shows whether new functionality finds demand and justifies its build cost.' },
                     uz: { name: 'Feature Adoption Rate', formula: '(Funksiya foydalanuvchilari / Faol foydalanuvchilar) × 100%', description: 'Muayyan funksiyadan foydalana boshlagan faol foydalanuvchilar ulushi. Yangi funksionallik talabga ega ekanini va ishlab chiqishni oqlashini ko‘rsatadi.' } },
  leadVelocityRate: { en: { name: 'Lead Velocity Rate', formula: '((Leads this month − Leads last month) / Leads last month) × 100%', description: 'LVR — month-over-month growth in qualified leads. A leading indicator of future revenue: today’s leads become deals and ARR after the sales cycle.' },
                      uz: { name: 'Lead Velocity Rate', formula: '((Shu oy lidlari − O‘tgan oy lidlari) / O‘tgan oy lidlari) × 100%', description: 'LVR — malakali lidlarning oydan-oyga o‘sishi. Kelajakdagi tushumning yetakchi indikatori: bugungi lidlar sotuv siklidan keyin bitim va ARR ga aylanadi.' } },
  cashConversionScore: { en: { name: 'Cash Conversion Score', formula: 'Current ARR / Net capital consumed', description: 'CCS (Bessemer) — how much ARR a company built per dollar of capital burned. Measures capital efficiency: higher means less money to build revenue.' },
                         uz: { name: 'Cash Conversion Score', formula: 'Joriy ARR / Sof sarflangan kapital', description: 'CCS (Bessemer) — kompaniya har bir sarflangan dollarga qancha ARR qurgani. Kapital samaradorligini o‘lchaydi: qancha yuqori — tushum qurish uchun shuncha kam pul.' } },
  avgResolutionTime: { en: { name: 'Avg Resolution Time', formula: 'Total resolution time / Resolved tickets', description: 'Average time to fully resolve a ticket (creation to close). Lower is better; norms depend heavily on priority — P1/critical resolve faster.' },
                       uz: { name: 'Avg Resolution Time', formula: 'Umumiy yechish vaqti / Yechilgan tiketlar', description: 'Tiketni to‘liq yechishning o‘rtacha vaqti (yaratilishdan yopilishgacha). Kamroq — yaxshiroq; me’yor prioritetga bog‘liq — P1/critical tezroq yechiladi.' } },
  // — Batch +10 —
  wau:        { en: { name: 'WAU', formula: 'Unique users in the last 7 days', description: 'Weekly Active Users — unique users active in the last 7 days. The middle ground between DAU and MAU.' },
                uz: { name: 'WAU', formula: 'Oxirgi 7 kundagi noyob foydalanuvchilar', description: 'Weekly Active Users — oxirgi 7 kunda faol noyob foydalanuvchilar. DAU va MAU orasidagi oraliq.' } },
  netNewMrr:  { en: { name: 'Net New MRR', formula: 'New + Expansion − Churned − Contraction MRR', description: 'Net monthly change in MRR: new + expansion minus churn and downgrades. The core pulse of subscription growth.' },
                uz: { name: 'Net New MRR', formula: 'New + Expansion − Churned − Contraction MRR', description: 'MRR ning oylik sof o‘zgarishi: yangi + kengayish minus churn va daungreydlar. Obuna o‘sishining asosiy puls metrikasi.' } },
  contributionMargin: { en: { name: 'Contribution Margin', formula: '(Revenue − Variable costs) / Revenue × 100%', description: 'Share of revenue left after variable costs — how much each sale contributes to fixed costs and profit.' },
                        uz: { name: 'Contribution Margin', formula: '(Tushum − O‘zgaruvchan xarajatlar) / Tushum × 100%', description: 'O‘zgaruvchan xarajatlardan keyin qoladigan tushum ulushi — har bir sotuv qat‘iy xarajat va foydaga qancha hissa qo‘shishi.' } },
  gmv:        { en: { name: 'GMV', formula: 'Orders × Average Order Value', description: 'Gross Merchandise Value — total value of goods sold over a period before fees and returns. Scale metric for marketplaces and e-commerce.' },
                uz: { name: 'GMV', formula: 'Buyurtmalar × O‘rtacha chek (AOV)', description: 'Gross Merchandise Value — davr davomida sotilgan tovarlarning umumiy qiymati (komissiya va qaytarishlardan oldin). Marketpleys va e-commerce uchun masshtab metrikasi.' } },
  takeRate:   { en: { name: 'Take Rate', formula: '(Platform revenue / GMV) × 100%', description: 'Share of GMV a marketplace keeps as revenue (commissions, ads, subscriptions, payment fees). The platform’s main monetization lever.' },
                uz: { name: 'Take Rate', formula: '(Platforma tushumi / GMV) × 100%', description: 'Marketpleys o‘ziga tushum sifatida qoldiradigan GMV ulushi (komissiya, reklama, obuna, to‘lov yig‘imlari). Platformaning asosiy monetizatsiya richagi.' } },
  quotaAttainment: { en: { name: 'Quota Attainment', formula: '(Actual sales / Quota) × 100%', description: 'Percentage of a sales rep or team hitting their target. Core health and quota-realism indicator for a sales org.' },
                     uz: { name: 'Quota Attainment', formula: '(Haqiqiy sotuv / Kvota) × 100%', description: 'Sotuvchi yoki jamoaning rejani bajarish foizi. Sotuv tashkilotining salomatligi va kvota realligi ko‘rsatkichi.' } },
  cpm:        { en: { name: 'CPM', formula: '(Ad spend / Impressions) × 1000', description: 'Cost Per Mille — cost of 1000 ad impressions. Core reach-cost metric for display and social advertising.' },
                uz: { name: 'CPM', formula: '(Reklama xarajati / Ko‘rsatishlar) × 1000', description: 'Cost Per Mille — 1000 ta reklama ko‘rsatish narxi. Displey va ijtimoiy reklama uchun asosiy qamrov narxi metrikasi.' } },
  cartAbandonment: { en: { name: 'Cart Abandonment Rate', formula: '(1 − Purchases / Carts) × 100%', description: 'Share of created carts that did not end in a purchase. A key checkout-friction indicator in e-commerce.' },
                     uz: { name: 'Cart Abandonment Rate', formula: '(1 − Xaridlar / Savatlar) × 100%', description: 'Xaridga aylanmagan savatlar ulushi. E-commerce’da checkout ishqalanishining asosiy ko‘rsatkichi.' } },
  mer:        { en: { name: 'MER (Marketing Efficiency Ratio)', formula: 'Total revenue / Total marketing spend', description: 'Blended marketing efficiency — revenue per $1 of total ad spend across the whole business, not a single campaign.' },
                uz: { name: 'MER (Marketing Efficiency Ratio)', formula: 'Umumiy tushum / Umumiy marketing xarajati', description: 'Blended marketing samaradorligi — butun biznes bo‘yicha har $1 reklama xarajatiga tushum, alohida kampaniya emas.' } },
  ces:        { en: { name: 'CES (Customer Effort Score)', formula: 'Sum of effort ratings / Responses (1–7)', description: 'Customer Effort Score — how easy it was for the customer to resolve their issue (1–7 scale). Strong loyalty predictor.' },
                uz: { name: 'CES (Customer Effort Score)', formula: 'Harakat baholari yig‘indisi / Javoblar (1–7)', description: 'Customer Effort Score — mijozga muammosini hal qilish qanchalik oson bo‘lgani (1–7 shkala). Sodiqlikning kuchli prediktori.' } },
  // B2C
  dau:        { en: { name: 'DAU', formula: 'Unique users per day', description: 'Daily Active Users — number of unique users who interacted with the product during the day.' },
                uz: { name: 'DAU', formula: 'Kunlik noyob foydalanuvchilar', description: 'Daily Active Users — sutka davomida mahsulot bilan ishlatgan noyob foydalanuvchilar soni.' } },
  mau:        { en: { name: 'MAU', formula: 'Unique users per month', description: 'Monthly Active Users — number of unique users in the last 30 days.' },
                uz: { name: 'MAU', formula: 'Oylik noyob foydalanuvchilar', description: 'Monthly Active Users — so‘nggi 30 kundagi noyob foydalanuvchilar soni.' } },
  stickiness: { en: { name: 'Stickiness (DAU/MAU)', formula: '(DAU / MAU) × 100%', description: 'Shows what share of the monthly audience returns daily. Higher = stickier product.' },
                uz: { name: 'Stickiness (DAU/MAU)', formula: '(DAU / MAU) × 100%', description: 'Oylik auditoriyaning qancha qismi har kuni qaytishini ko‘rsatadi. Qancha yuqori — shuncha "yopishqoq" mahsulot.' } },
  retention:  { en: { name: 'Retention', formula: '(Users at end / Users at start) × 100%', description: 'Share of users still active after a given period (cohort analysis).' },
                uz: { name: 'Retention', formula: '(Davr oxirida foydalanuvchilar / Boshida foydalanuvchilar) × 100%', description: 'Berilgan davr o‘tgach faol qolgan foydalanuvchilar ulushi (kogortali tahlil).' } },
  ltv:        { en: { name: 'LTV', formula: 'AOV × purchases per year × lifetime (years)', description: 'Lifetime Value — how much money a customer brings over their entire lifetime.' },
                uz: { name: 'LTV', formula: 'AOV × yiliga xaridlar × umri (yil)', description: 'Lifetime Value — mijoz butun umri davomida qancha pul olib kelishi.' } },
  cac:        { en: { name: 'CAC', formula: 'Marketing & sales spend / new customers', description: 'Customer Acquisition Cost — cost of acquiring one paying customer.' },
                uz: { name: 'CAC', formula: 'Marketing va sotuv xarajatlari / yangi mijozlar', description: 'Customer Acquisition Cost — bitta to‘lovchi mijozni jalb qilish narxi.' } },
  ltv_cac:    { en: { name: 'LTV:CAC Ratio', formula: 'LTV / CAC', description: 'Ratio of customer value to acquisition cost. Norm > 3:1. < 1:1 means the business loses money.' },
                uz: { name: 'LTV:CAC nisbati', formula: 'LTV / CAC', description: 'Mijoz qiymatining jalb qilish xarajatlariga nisbati. Norma > 3:1. < 1:1 — biznes zarar ko‘ryapti.' } },
  arpu:       { en: { name: 'ARPU', formula: 'Revenue / Active users', description: 'Average Revenue Per User — average revenue per single user.' },
                uz: { name: 'ARPU', formula: 'Tushum / Faol foydalanuvchilar', description: 'Average Revenue Per User — bitta foydalanuvchidan o‘rtacha tushum.' } },
  arpdau:     { en: { name: 'ARPDAU', formula: 'Daily revenue / DAU', description: 'Average Revenue Per Daily Active User — revenue per single daily active. Key metric for mobile F2P games and media.' },
                uz: { name: 'ARPDAU', formula: 'Kunlik tushum / DAU', description: 'Average Revenue Per Daily Active User — kunlik faol foydalanuvchidan tushum. Mobil F2P o‘yinlar va media uchun asosiy metrika.' } },
  churn:      { en: { name: 'Churn Rate', formula: '(Lost / Total users) × 100%', description: 'Percentage of users who stopped using the product during the period.' },
                uz: { name: 'Churn Rate', formula: '(Ketganlar / Jami foydalanuvchilar) × 100%', description: 'Davr davomida mahsulotdan foydalanishni to‘xtatgan foydalanuvchilar foizi.' } },
  // B2B
  mrr:        { en: { name: 'MRR', formula: 'Sum of monthly subscription revenue', description: 'Monthly Recurring Revenue — recurring monthly revenue.' },
                uz: { name: 'MRR', formula: 'Oylik obuna tushumlari yig‘indisi', description: 'Monthly Recurring Revenue — muntazam oylik tushum.' } },
  arr:        { en: { name: 'ARR', formula: 'MRR × 12', description: 'Annual Recurring Revenue — annual recurring revenue.' },
                uz: { name: 'ARR', formula: 'MRR × 12', description: 'Annual Recurring Revenue — yillik muntazam tushum.' } },
  acv:        { en: { name: 'ACV', formula: 'Contract value / duration (years)', description: 'Annual Contract Value — average annual contract value.' },
                uz: { name: 'ACV', formula: 'Shartnoma summasi / muddat (yil)', description: 'Annual Contract Value — o‘rtacha yillik shartnoma qiymati.' } },
  grr:        { en: { name: 'GRR', formula: '(Start MRR − Churn) / Start MRR × 100%', description: 'Gross Revenue Retention — revenue retention without upsells.' },
                uz: { name: 'GRR', formula: '(Boshlang‘ich MRR − Churn) / Boshlang‘ich MRR × 100%', description: 'Gross Revenue Retention — apselsiz tushumni saqlab qolish.' } },
  nrr:        { en: { name: 'NRR', formula: '(Start MRR + Upsell − Churn) / Start MRR × 100%', description: 'Net Revenue Retention — revenue retention including expansion.' },
                uz: { name: 'NRR', formula: '(Boshlang‘ich MRR + Apsel − Churn) / Boshlang‘ich MRR × 100%', description: 'Net Revenue Retention — kengayish bilan tushumni saqlab qolish.' } },
  cacPayback: { en: { name: 'CAC Payback', formula: 'CAC / (MRR per customer × Margin)', description: 'Months needed to recoup customer acquisition cost.' },
                uz: { name: 'CAC Payback', formula: 'CAC / (mijoz boshiga MRR × Marja)', description: 'Mijozni jalb qilish xarajatlarini qaytarish uchun zarur oylar.' } },
  burnMultiple: { en: { name: 'Burn Multiple', formula: 'Net Burn / Net New ARR', description: 'Capital efficiency metric (David Sacks): how many $ burned to generate $1 of new annual revenue. Negative burn = cash-flow positive.' },
                  uz: { name: 'Burn Multiple', formula: 'Net Burn / Net New ARR', description: 'Kapital samaradorligi metrikasi (David Sacks): $1 yangi yillik tushum uchun qancha $ yoqilgan. Salbiy burn = pul oqimi musbat.' } },
  magicNumber: { en: { name: 'Magic Number', formula: '(Net New ARR × 4) / Q S&M spend', description: 'S&M efficiency: how much annual ARR each $1 of S&M generates (Scale Venture Partners).' },
                 uz: { name: 'Magic Number', formula: '(Net New ARR × 4) / Choraklik S&M', description: 'S&M samaradorligi: har bir $1 S&M qancha yillik ARR olib kelishi (Scale Venture Partners).' } },
  ruleOf40:   { en: { name: 'Rule of 40', formula: 'YoY revenue growth (%) + EBITDA margin (%)', description: 'SaaS health: sum of growth and profitability. ≥ 40% means the company is attractive regardless of growth-vs-profit balance.' },
                uz: { name: 'Rule of 40', formula: 'YoY tushum o‘sishi (%) + EBITDA marja (%)', description: 'SaaS sog‘lig‘i: o‘sish va foydalilik yig‘indisi. ≥ 40% kompaniya o‘sish/profit balansidan qat‘i nazar jozibali.' } },
  quickRatio: { en: { name: 'Quick Ratio', formula: '(New + Expansion MRR) / (Churned + Contraction MRR)', description: 'SaaS Quick Ratio (Mamoon Hamid): how many $ of new revenue per $1 of lost revenue. Growth resilience indicator.' },
                uz: { name: 'Quick Ratio', formula: '(Yangi + Kengayish MRR) / (Ketgan + Qisqarish MRR)', description: 'SaaS Quick Ratio (Mamoon Hamid): har $1 yo‘qotilgan tushum uchun qancha $ yangi. O‘sish barqarorligi ko‘rsatkichi.' } },
  // AARRR
  acquisition: { en: { name: 'Acquisition', formula: 'New users per period', description: 'How many new visitors / customers were acquired.' },
                 uz: { name: 'Acquisition', formula: 'Davr boshiga yangi foydalanuvchilar', description: 'Qancha yangi tashrif buyuruvchi/mijoz jalb qilinganligi.' } },
  activation:  { en: { name: 'Activation', formula: '(Reached Aha / All new) × 100%', description: 'Share of new users who reached the key event (Aha! moment).' },
                 uz: { name: 'Activation', formula: '(Aha-ga yetganlar / Barcha yangilar) × 100%', description: 'Aha-momentga yetgan yangi foydalanuvchilar ulushi.' } },
  retention_aarrr: { en: { name: 'Retention', formula: '(Returned after N days / Cohort) × 100%', description: 'Percentage of users from a cohort who return after a defined period.' },
                     uz: { name: 'Retention', formula: '(N kun keyin qaytganlar / Kogorta) × 100%', description: 'Belgilangan davrdan keyin qaytadigan kogorta foydalanuvchilari foizi.' } },
  referral:    { en: { name: 'Referral (K-factor)', formula: 'Invited / Active inviters', description: 'Viral coefficient — how many new users one existing user brings. > 1 = viral growth.' },
                 uz: { name: 'Referral (K-factor)', formula: 'Taklif qilinganlar / Faol takliflovchilar', description: 'Virallik koeffitsienti — bitta foydalanuvchi qancha yangini olib keladi. > 1 = viral o‘sish.' } },
  revenue:     { en: { name: 'Revenue', formula: 'Total revenue per period', description: 'Cash flow from all sources during the period.' },
                 uz: { name: 'Revenue', formula: 'Davr boshiga umumiy tushum', description: 'Davr davomida barcha manbalardan kelgan pul oqimi.' } },
  timeToValue: { en: { name: 'Time to Value', formula: 'Average time from signup to Aha moment', description: 'How long a new user takes to get the first value from the product. One of the main drivers of Activation.' },
                 uz: { name: 'Time to Value', formula: 'Ro‘yxatdan o‘tishdan Aha-momentgacha o‘rtacha vaqt', description: 'Yangi foydalanuvchi mahsulotdan ilk qiymatni qachon olishi. Activation’ning asosiy drayveri.' } },
  // Finance
  grossMargin: { en: { name: 'Gross Margin', formula: '(Revenue − COGS) / Revenue × 100%', description: 'Gross margin — share of revenue left after direct costs of delivering the product.' },
                 uz: { name: 'Gross Margin', formula: '(Tushum − COGS) / Tushum × 100%', description: 'Yalpi marja — mahsulotni yetkazib berishning to‘g‘ridan-to‘g‘ri xarajatlaridan keyin qoladigan tushum ulushi.' } },
  runway:      { en: { name: 'Runway', formula: 'Cash / Average monthly burn', description: 'How many months a company can keep operating at the current burn rate. Key metric for startups and pre-IPO.' },
                 uz: { name: 'Runway', formula: 'Pul / O‘rtacha oylik sarf', description: 'Kompaniya joriy yondirish stavkasida qancha oy ishlay olishi. Startaplar va pre-IPO uchun asosiy metrika.' } },
  burnRate:    { en: { name: 'Burn Rate', formula: 'Monthly expenses − Monthly revenue', description: 'Net cash burn per month. Positive number = the company spends more than it earns.' },
                 uz: { name: 'Burn Rate', formula: 'Oylik xarajatlar − Oylik tushum', description: 'Oyiga sof pul yondirish. Musbat son = kompaniya topishidan ko‘proq sarflaydi.' } },
  salesVelocity: { en: { name: 'Sales Velocity', formula: '(Opps × ACV × Win Rate) / Cycle (days)', description: 'B2B revenue generation speed: how many $ per day the funnel produces.' },
                   uz: { name: 'Sales Velocity', formula: '(Opps × ACV × Win Rate) / Tsikl (kun)', description: 'B2B tushum yaratish tezligi: voronka kuniga qancha $ keltirishi.' } },
  winRate:     { en: { name: 'Win Rate', formula: 'Closed Won / All closed × 100%', description: 'Share of deals closed in win. Basic B2B funnel quality metric.' },
                 uz: { name: 'Win Rate', formula: 'Closed Won / Barcha yopilganlar × 100%', description: 'Yutib yopilgan bitimlar ulushi. B2B voronkaning asosiy metrikasi.' } },
  pipelineCoverage: { en: { name: 'Pipeline Coverage', formula: 'Pipeline value / Period quota', description: 'How many times the pipeline covers the sales target. Standard > 3× for B2B SaaS.' },
                      uz: { name: 'Pipeline Coverage', formula: 'Pipeline qiymati / Davr maqsadi', description: 'Voronka sotuv rejasini qancha marta qoplashi. B2B SaaS standart > 3×.' } },
  // Growth
  cr:         { en: { name: 'CR (Conversion Rate)', formula: '(Conversions / Visitors) × 100%', description: 'Conversion rate — share of visitors who completed a target action.' },
                uz: { name: 'CR (Conversion Rate)', formula: '(Konversiyalar / Tashrif buyuruvchilar) × 100%', description: 'Konversiya darajasi — maqsadli amalni bajargan tashrif buyuruvchilar ulushi.' } },
  roas:       { en: { name: 'ROAS', formula: 'Ad revenue / Ad spend', description: 'Return on Ad Spend — revenue per $1 of ad spend.' },
                uz: { name: 'ROAS', formula: 'Reklamadan tushum / Reklama xarajati', description: 'Reklama xarajatining qaytishi — har $1 reklama xarajatiga qancha tushum.' } },
  cpc:        { en: { name: 'CPC', formula: 'Ad spend / Clicks', description: 'Cost Per Click — average cost of one ad click.' },
                uz: { name: 'CPC', formula: 'Reklama xarajati / Bosishlar', description: 'Cost Per Click — bir reklama bosishining o‘rtacha narxi.' } },
  ctr:        { en: { name: 'CTR', formula: '(Clicks / Impressions) × 100%', description: 'Click-Through Rate — clickability of an ad or content.' },
                uz: { name: 'CTR', formula: '(Bosishlar / Ko‘rsatishlar) × 100%', description: 'Click-Through Rate — reklamaning yoki kontentning bosish darajasi.' } },
  bounceRate: { en: { name: 'Bounce Rate', formula: '(Single-page sessions / All sessions) × 100%', description: 'Percentage of sessions where the user viewed only one page and left.' },
                uz: { name: 'Bounce Rate', formula: '(Bir sahifali sessiyalar / Barcha sessiyalar) × 100%', description: 'Foydalanuvchi faqat bitta sahifani ko‘rib chiqib ketgan sessiyalar foizi.' } },
  // QA
  bugRate:        { en: { name: 'Bug Rate', formula: 'Bugs / Size (KLOC or sprint)', description: 'Defect detection rate. Can be per 1000 lines of code or per sprint.' },
                    uz: { name: 'Bug Rate', formula: 'Buglar / Hajm (KLOC yoki sprint)', description: 'Defektlar topilish chastotasi. 1000 qator kod yoki sprint boshiga.' } },
  testCoverage:   { en: { name: 'Test Coverage', formula: '(Covered requirements / Total) × 100%', description: 'Share of requirements or code lines covered by automated tests.' },
                    uz: { name: 'Test Coverage', formula: '(Qoplangan talablar / Jami) × 100%', description: 'Avtomat testlar bilan qoplangan talablar yoki kod qatorlari ulushi.' } },
  defectDensity:  { en: { name: 'Defect Density', formula: 'Defects / KLOC', description: 'Density of defects per thousand lines of code.' },
                    uz: { name: 'Defect Density', formula: 'Defektlar / KLOC', description: 'Ming qator kod uchun defektlar zichligi.' } },
  // Support
  csat:       { en: { name: 'CSAT', formula: '(Ratings 4–5 / Total) × 100%', description: 'Customer Satisfaction Score — share of happy customers (ratings 4–5 out of 5).' },
                uz: { name: 'CSAT', formula: '(4–5 baholar / Jami) × 100%', description: 'Customer Satisfaction Score — mamnun mijozlar ulushi (5 dan 4–5 baho).' } },
  nps:        { en: { name: 'NPS', formula: '% Promoters − % Detractors', description: 'Net Promoter Score — willingness to recommend. Range: −100 to +100.' },
                uz: { name: 'NPS', formula: '% Promouterlar − % Detraktorlar', description: 'Net Promoter Score — tavsiya qilishga tayyorlik. Diapazon: −100 dan +100 gacha.' } },
  fcr:        { en: { name: 'FCR', formula: '(Resolved on first contact / All tickets) × 100%', description: 'First Contact Resolution — percentage of tickets resolved on the first contact.' },
                uz: { name: 'FCR', formula: '(Birinchi murojaatda hal qilinganlar / Barcha ticketlar) × 100%', description: 'First Contact Resolution — birinchi murojaatda hal qilingan murojaatlar foizi.' } },
  sla:        { en: { name: 'SLA', formula: '(Tickets within SLA / All) × 100%', description: 'Service Level Agreement — share of tickets handled within agreed-upon timeframes.' },
                uz: { name: 'SLA', formula: '(SLA ichidagi ticketlar / Barchasi) × 100%', description: 'Service Level Agreement — kelishilgan muddatlar ichida ko‘rib chiqilgan murojaatlar ulushi.' } }
};

// ============================================================
// I18N_INSIGHTS — translation lookup keyed by exact RU text.
// 132 unique insight messages × {en, uz}. Russian → fallback.
// ============================================================
window.I18N_INSIGHTS = {
  // — Batch +5 (AOV, Repeat Purchase Rate, Sales Cycle Length, MRR Growth Rate, Engagement Rate) —
  'Низкий AOV. Bundle, апселы или free-shipping threshold помогут.': { en: 'Low AOV. Bundles, upsells, or a free-shipping threshold will help.', uz: 'Past AOV. Bundle, apsel yoki bepul yetkazib berish chegarasi yordam beradi.' },
  'Норма для среднего e-com. Тестируйте upsell/cross-sell.': { en: 'Normal for mid-range e-commerce. Test upsell/cross-sell.', uz: 'O‘rtacha e-commerce uchun normal. Upsell/cross-sell ni sinab ko‘ring.' },
  'Хороший AOV — премиум-сегмент.': { en: 'Good AOV — premium segment.', uz: 'Yaxshi AOV — premium segment.' },
  'Высокий AOV — luxury / B2B-уровень.': { en: 'High AOV — luxury / B2B level.', uz: 'Yuqori AOV — luxury / B2B daraja.' },
  'Низкий RPR. Email/SMS-маркетинг и loyalty-программы помогут.': { en: 'Low RPR. Email/SMS marketing and loyalty programs will help.', uz: 'Past RPR. Email/SMS marketing va loyalty dasturlari yordam beradi.' },
  'Ниже нормы. Работайте над second-purchase эксперимент.': { en: 'Below norm. Work on the second-purchase experiment.', uz: 'Normadan past. Second-purchase eksperimenti ustida ishlang.' },
  'Норма для среднего e-com.': { en: 'Normal for mid-range e-commerce.', uz: 'O‘rtacha e-commerce uchun normal.' },
  'Хороший RPR — лояльность построена.': { en: 'Good RPR — loyalty is established.', uz: 'Yaxshi RPR — sodiqlik qurilgan.' },
  'Отличный RPR — мирового уровня (Amazon, Apple).': { en: 'Excellent RPR — world-class (Amazon, Apple).', uz: 'Ajoyib RPR — jahon darajasida (Amazon, Apple).' },
  'Короткий цикл — типично для SMB / PLG / inbound.': { en: 'Short cycle — typical for SMB / PLG / inbound.', uz: 'Qisqa sikl — SMB / PLG / inbound uchun odatiy.' },
  'Норма для Mid-market B2B SaaS.': { en: 'Normal for mid-market B2B SaaS.', uz: 'Mid-market B2B SaaS uchun normal.' },
  'Enterprise-цикл. Контролируйте через Pipeline Coverage.': { en: 'Enterprise cycle. Control it via Pipeline Coverage.', uz: 'Enterprise sikl. Pipeline Coverage orqali nazorat qiling.' },
  'Очень длинный цикл — рискованно для cash flow. Сегментируйте сделки.': { en: 'Very long cycle — risky for cash flow. Segment your deals.', uz: 'Juda uzun sikl — cash flow uchun xavfli. Bitimlarni segmentlang.' },
  'Отрицательный рост — выручка падает. Срочно анализ.': { en: 'Negative growth — revenue is falling. Analyze urgently.', uz: 'Salbiy o‘sish — tushum tushmoqda. Zudlik bilan tahlil qiling.' },
  'Медленный рост. Для растущего SaaS нужно >10% MoM.': { en: 'Slow growth. A growing SaaS needs >10% MoM.', uz: 'Sekin o‘sish. O‘suvchi SaaS uchun >10% MoM kerak.' },
  'Норма. Хорошие SaaS делают >10% MoM.': { en: 'Normal. Good SaaS companies do >10% MoM.', uz: 'Normal. Yaxshi SaaS kompaniyalar >10% MoM qiladi.' },
  'Хороший рост — большинство YC-стартапов в этом диапазоне.': { en: 'Good growth — most YC startups are in this range.', uz: 'Yaxshi o‘sish — ko‘pchilik YC startaplari shu oraliqda.' },
  'Отличный рост — top-tier SaaS уровень.': { en: 'Excellent growth — top-tier SaaS level.', uz: 'Ajoyib o‘sish — top-tier SaaS daraja.' },
  'Низкий engagement. Контент не цепляет — пересмотрите формат/темы.': { en: 'Low engagement. Content does not land — rethink format/topics.', uz: 'Past engagement. Kontent ta’sir qilmayapti — format/mavzularni qayta ko‘ring.' },
  'Норма для большинства брендов в Instagram/X.': { en: 'Normal for most brands on Instagram/X.', uz: 'Instagram/X dagi ko‘pchilik brendlar uchun normal.' },
  'Хороший engagement — комьюнити вовлечено.': { en: 'Good engagement — the community is involved.', uz: 'Yaxshi engagement — hamjamiyat jalb qilingan.' },
  'Отличный engagement — top-tier creator-уровень.': { en: 'Excellent engagement — top-tier creator level.', uz: 'Ajoyib engagement — top-tier creator daraja.' },
  // — Batch +10 (CPA, CPL, CPI, ARPPU, Open Rate, CTOR, Feature Adoption, LVR, Cash Conversion Score, Avg Resolution Time) —
  'CPA сам по себе ничего не говорит — оценивайте в связке с CR и LTV. Дешёвый CPA при плохом качестве лидов дороже в пересчёте на клиента.': { en: 'CPA alone tells you nothing — judge it with CR and LTV. A cheap CPA with poor lead quality is more expensive per customer.', uz: 'CPA o‘zicha hech nima demaydi — uni CR va LTV bilan baholang. Past sifatli lidlar bilan arzon CPA mijoz hisobiga qimmatroq.' },
  'CPL оценивайте вместе с конверсией лида в клиента и итоговым CAC. Дешёвый CPL при низком качестве лидов раздувает CAC.': { en: 'Judge CPL together with lead-to-customer conversion and final CAC. A cheap CPL with low lead quality inflates CAC.', uz: 'CPL ni lidning mijozga konversiyasi va yakuniy CAC bilan birga baholang. Past sifatli lidlar bilan arzon CPL CAC ni shishiradi.' },
  'CPI имеет смысл только в связке с LTV/ARPPU и retention. Дешёвая установка без удержания и монетизации убыточна.': { en: 'CPI only makes sense alongside LTV/ARPPU and retention. A cheap install without retention and monetization is unprofitable.', uz: 'CPI faqat LTV/ARPPU va retention bilan birga ma’noga ega. Ushlab turish va monetizatsiyasiz arzon o‘rnatish zararli.' },
  'ARPPU считается только по платящим — он всегда выше ARPU. Для F2P смотрите его вместе с долей платящих (PUR) и LTV.': { en: 'ARPPU counts only payers — it is always higher than ARPU. For F2P, view it with the paying share (PUR) and LTV.', uz: 'ARPPU faqat to‘lovchilar bo‘yicha hisoblanadi — u har doim ARPU dan yuqori. F2P uchun uni to‘lovchilar ulushi (PUR) va LTV bilan ko‘ring.' },
  'Низкий Open Rate. Работайте над темой письма, отправителем и репутацией домена.': { en: 'Low Open Rate. Work on the subject line, sender, and domain reputation.', uz: 'Past Open Rate. Xat mavzusi, jo‘natuvchi va domen obro‘si ustida ishlang.' },
  'Норма. Тестируйте темы и сегментацию; следите за CTOR, а не только за открытиями.': { en: 'Normal. Test subject lines and segmentation; watch CTOR, not just opens.', uz: 'Normal. Mavzu va segmentatsiyani sinab ko‘ring; faqat ochilishlarni emas, CTOR ni kuzating.' },
  'Высокий Open Rate — аудитория вовлечена. Смотрите дальше на CTOR и конверсию.': { en: 'High Open Rate — the audience is engaged. Look further at CTOR and conversion.', uz: 'Yuqori Open Rate — auditoriya jalb qilingan. Keyin CTOR va konversiyaga qarang.' },
  'Низкий CTOR — контент письма не цепляет. Улучшайте оффер, CTA и релевантность.': { en: 'Low CTOR — the email content does not land. Improve the offer, CTA, and relevance.', uz: 'Past CTOR — xat kontenti ta’sir qilmayapti. Taklif, CTA va dolzarblikni yaxshilang.' },
  'Норма. CTOR не зависит от Open Rate — тестируйте контент и расположение CTA.': { en: 'Normal. CTOR is independent of Open Rate — test content and CTA placement.', uz: 'Normal. CTOR Open Rate ga bog‘liq emas — kontent va CTA joylashuvini sinab ko‘ring.' },
  'Высокий CTOR — контент письма попадает в цель. Хороший сигнал для конверсии.': { en: 'High CTOR — the email content hits the mark. A good signal for conversion.', uz: 'Yuqori CTOR — xat kontenti nishonga tegadi. Konversiya uchun yaxshi signal.' },
  'Низкая адопция фичи. Проверьте discoverability, онбординг и реальную ценность функции.': { en: 'Low feature adoption. Check discoverability, onboarding, and the feature’s real value.', uz: 'Past funksiya adopsiyasi. Discoverability, onboarding va funksiyaning haqiqiy qiymatini tekshiring.' },
  'Средняя адопция. Подсветите фичу в UI и свяжите с ключевыми сценариями.': { en: 'Average adoption. Surface the feature in the UI and tie it to key use cases.', uz: 'O‘rtacha adopsiya. Funksiyani UI da ko‘rsating va asosiy stsenariylar bilan bog‘lang.' },
  'Высокая адопция — фича попала в потребность. Следите за её влиянием на Retention.': { en: 'High adoption — the feature met a real need. Watch its impact on Retention.', uz: 'Yuqori adopsiya — funksiya ehtiyojga tushdi. Uning Retention ga ta’sirini kuzating.' },
  'Поток лидов падает — через цикл продажи это ударит по выручке. Усиливайте demand gen.': { en: 'Lead flow is falling — after the sales cycle this will hit revenue. Strengthen demand gen.', uz: 'Lidlar oqimi pasaymoqda — sotuv siklidan keyin bu tushumga uradi. Demand gen ni kuchaytiring.' },
  'Рост лидов слабый. LVR — опережающий индикатор: разгоняйте верх воронки заранее.': { en: 'Lead growth is weak. LVR is a leading indicator — ramp the top of the funnel early.', uz: 'Lidlar o‘sishi zaif. LVR — yetakchi indikator: voronka tepasini oldindan kuchaytiring.' },
  'Лиды растут уверенно — здоровый предвестник будущего роста ARR.': { en: 'Leads are growing steadily — a healthy precursor to future ARR growth.', uz: 'Lidlar barqaror o‘smoqda — kelajakdagi ARR o‘sishining sog‘lom darakchisi.' },
  'Капитал сжигается быстрее, чем строится ARR. Повышайте эффективность роста или режьте burn.': { en: 'Capital burns faster than ARR is built. Improve growth efficiency or cut burn.', uz: 'Kapital ARR qurilishidan tezroq sarflanmoqda. O‘sish samaradorligini oshiring yoki burn ni qisqartiring.' },
  'Норма. Каждый доллар burn пока даёт меньше доллара ARR — двигайтесь к CCS > 1.': { en: 'Normal. Each dollar of burn still yields less than a dollar of ARR — move toward CCS > 1.', uz: 'Normal. Har bir burn dollari hozircha bir dollardan kam ARR beradi — CCS > 1 ga intiling.' },
  'Капиталоэффективный рост (CCS > 1 — уровень elite по Bessemer).': { en: 'Capital-efficient growth (CCS > 1 — elite tier per Bessemer).', uz: 'Kapital samarali o‘sish (CCS > 1 — Bessemer bo‘yicha elite daraja).' },
  'Чем меньше — тем лучше, но оценивайте по приоритетам: для P1/critical нужны часы, для рутинных запросов норма выше. Смотрите вместе с FCR, SLA и CSAT.': { en: 'Lower is better, but judge by priority: P1/critical need hours, routine requests allow more. View it with FCR, SLA, and CSAT.', uz: 'Kamroq — yaxshiroq, lekin prioritet bo‘yicha baholang: P1/critical uchun soatlar kerak, oddiy so‘rovlar uchun me’yor yuqoriroq. Uni FCR, SLA va CSAT bilan ko‘ring.' },
  // — Batch +10 (WAU, Net New MRR, Contribution Margin, GMV, Take Rate, Quota Attainment, CPM, Cart Abandonment, MER, CES) —
  'WAU — счётчик; смотрите DAU/WAU (внутринедельная липкость) и WAU/MAU. Для рабочих инструментов WAU ближе к MAU, для соцсетей — к DAU.': { en: 'WAU is a counter; look at DAU/WAU (intra-week stickiness) and WAU/MAU. For work tools WAU is closer to MAU; for social apps, closer to DAU.', uz: 'WAU — hisoblagich; DAU/WAU (hafta ichidagi stickiness) va WAU/MAU ni qarang. Ish vositalari uchun WAU MAU ga, ijtimoiy ilovalar uchun DAU ga yaqin.' },
  'Отрицательный Net New MRR — выручка сжимается: отток и даунгрейды перевешивают рост.': { en: 'Negative Net New MRR — revenue is contracting: churn and downgrades outweigh growth.', uz: 'Salbiy Net New MRR — tushum qisqarmoqda: churn va daungreydlar o‘sishdan ustun.' },
  'Околонулевой прирост — рост съедается оттоком. Работайте над retention и expansion.': { en: 'Near-zero growth — growth is eaten by churn. Work on retention and expansion.', uz: 'Nolga yaqin o‘sish — o‘sishni churn yeb qo‘ymoqda. Retention va expansion ustida ishlang.' },
  'Положительный прирост MRR. Следите за долей Expansion — она удешевляет рост (см. Quick Ratio).': { en: 'Positive MRR growth. Watch the Expansion share — it makes growth cheaper (see Quick Ratio).', uz: 'Musbat MRR o‘sishi. Expansion ulushini kuzating — u o‘sishni arzonlashtiradi (Quick Ratio ga qarang).' },
  'Низкая маржинальность — заказ почти не покрывает постоянные расходы. Поднимайте цены или режьте переменные затраты.': { en: 'Low contribution margin — each order barely covers fixed costs. Raise prices or cut variable costs.', uz: 'Past kontribyutsion marja — har bir buyurtma qat‘iy xarajatlarni zo‘rg‘a qoplaydi. Narxni oshiring yoki o‘zgaruvchan xarajatlarni qisqartiring.' },
  'Средняя маржа. Норма для retail/marketplace; для SaaS должно быть выше.': { en: 'Average margin. Normal for retail/marketplace; for SaaS it should be higher.', uz: 'O‘rtacha marja. Retail/marketpleys uchun normal; SaaS uchun yuqoriroq bo‘lishi kerak.' },
  'Высокая контрибуционная маржа — здоровая unit-экономика и быстрый выход в прибыль.': { en: 'High contribution margin — healthy unit economics and a fast path to profit.', uz: 'Yuqori kontribyutsion marja — sog‘lom unit-iqtisodiyot va foydaga tez yo‘l.' },
  'GMV — оборот, а не выручка. Реальный доход платформы = GMV × Take Rate. Смотрите рост GMV вместе с маржинальностью.': { en: 'GMV is turnover, not revenue. Real platform income = GMV × Take Rate. Watch GMV growth alongside margin.', uz: 'GMV — aylanma, tushum emas. Platformaning haqiqiy daromadi = GMV × Take Rate. GMV o‘sishini marja bilan birga kuzating.' },
  'Низкий take rate. Норма для high-GMV категорий (электроника, трэвел). Ищите доп-монетизацию: реклама, подписки, финуслуги.': { en: 'Low take rate. Normal for high-GMV categories (electronics, travel). Add monetization: ads, subscriptions, fintech.', uz: 'Past take rate. Yuqori GMV toifalari uchun normal (elektronika, sayohat). Qo‘shimcha monetizatsiya qidiring: reklama, obuna, fintech.' },
  'Здоровый take rate для маркетплейса — баланс монетизации и удержания продавцов.': { en: 'Healthy marketplace take rate — a balance of monetization and seller retention.', uz: 'Marketpleys uchun sog‘lom take rate — monetizatsiya va sotuvchilarni ushlab turish muvozanati.' },
  'Высокий take rate — риск ухода продавцов в прямые каналы. Оправдан только при сильном спросе и lock-in.': { en: 'High take rate — risk of sellers leaving for direct channels. Justified only with strong demand and lock-in.', uz: 'Yuqori take rate — sotuvchilar to‘g‘ridan-to‘g‘ri kanallarga ketishi xavfi. Faqat kuchli talab va lock-in bilan oqlanadi.' },
  'Недовыполнение квоты. Проверьте качество pipeline, enablement и реалистичность плана.': { en: 'Quota miss. Check pipeline quality, enablement, and whether the target is realistic.', uz: 'Kvota bajarilmadi. Pipeline sifati, enablement va reja realligini tekshiring.' },
  'Близко к плану. Если так у большинства репов — квоты, возможно, завышены.': { en: 'Close to target. If most reps land here, the quota may be set too high.', uz: 'Rejaga yaqin. Agar ko‘pchilik repda shunday bo‘lsa, kvota juda yuqori bo‘lishi mumkin.' },
  'Квота выполнена. Если 90%+ репов перевыполняют — планку стоит поднять.': { en: 'Quota hit. If 90%+ of reps overachieve, raise the bar.', uz: 'Kvota bajarildi. Agar replarning 90%+ i ortig‘i bilan bajarsa, plankani oshiring.' },
  'CPM — стоимость охвата, а не результата. Оценивайте вместе с CTR и CR: дешёвый CPM при низком CTR дороже в пересчёте на клиента (CAC).': { en: 'CPM is the cost of reach, not results. Judge it with CTR and CR: a cheap CPM with low CTR is more expensive per customer (CAC).', uz: 'CPM — qamrov narxi, natija emas. Uni CTR va CR bilan baholang: past CTR bilan arzon CPM mijoz hisobiga qimmatroq (CAC).' },
  'Высокий процент брошенных корзин. Уберите трение: гость-чекаут, прозрачная доставка, больше способов оплаты, email-возвраты.': { en: 'High cart abandonment. Remove friction: guest checkout, transparent shipping, more payment options, email recovery.', uz: 'Savat tashlash yuqori. Ishqalanishni oling: mehmon checkout, shaffof yetkazib berish, ko‘proq to‘lov usullari, email qaytarish.' },
  'Около среднего по индустрии (~70%). Тестируйте упрощение чекаута и ретаргетинг.': { en: 'Around the industry average (~70%). Test a simpler checkout and retargeting.', uz: 'Soha o‘rtachasiga yaqin (~70%). Soddaroq checkout va retargetingni sinab ko‘ring.' },
  'Низкая для e-commerce доля брошенных корзин — чекаут работает хорошо.': { en: 'Low cart abandonment for e-commerce — checkout works well.', uz: 'E-commerce uchun past savat tashlash — checkout yaxshi ishlaydi.' },
  'Маркетинг съедает маржу. При MER <2 в DTC рост обычно убыточен — пересмотрите каналы и AOV.': { en: 'Marketing eats the margin. With MER <2 in DTC, growth is usually unprofitable — review channels and AOV.', uz: 'Marketing marjani yeydi. DTC’da MER <2 bo‘lsa, o‘sish odatda zararli — kanallar va AOV ni qayta ko‘ring.' },
  'Норма. Следите за трендом MER и связкой с контрибуционной маржой.': { en: 'Normal. Watch the MER trend and its link to contribution margin.', uz: 'Normal. MER tendentsiyasi va uning kontribyutsion marja bilan bog‘liqligini kuzating.' },
  'Эффективный blended-маркетинг. Можно осторожно масштабировать бюджет, пока MER держится.': { en: 'Efficient blended marketing. You can carefully scale budget while MER holds.', uz: 'Samarali blended marketing. MER ushlab turilsa, byudjetni ehtiyotkorlik bilan masshtablash mumkin.' },
  'Высокое усилие клиента — сильный предиктор оттока. Убирайте трение в саппорте и продукте.': { en: 'High customer effort — a strong churn predictor. Remove friction in support and product.', uz: 'Mijoz harakati yuqori — churn ning kuchli prediktori. Support va mahsulotdagi ishqalanishni oling.' },
  'Норма. Низкое усилие удерживает лучше, чем «восторг» — ищите узкие места.': { en: 'Normal. Low effort retains better than “delight” — look for bottlenecks.', uz: 'Normal. Past harakat “zavq”dan ko‘ra yaxshiroq ushlab turadi — to‘siqlarni qidiring.' },
  'Клиентам легко — отличный предиктор лояльности и повторных покупок.': { en: 'Customers find it easy — an excellent predictor of loyalty and repeat purchases.', uz: 'Mijozlarga oson — sodiqlik va takroriy xaridlarning ajoyib prediktori.' },
  // — DAU / MAU / Acquisition / Revenue / ARR / MRR / LTV (advisory) —
  'DAU — счётчик; «норма» зависит от стадии. Смотрите Stickiness (DAU/MAU) и MoM-рост.': { en: 'DAU is a counter; the "norm" depends on the stage. Look at Stickiness (DAU/MAU) and MoM growth.', uz: 'DAU — bu hisoblagich; "norma" bosqichga bog‘liq. Stickiness (DAU/MAU) va MoM o‘sishni qarang.' },
  'MAU — счётчик; контекст важен. Сравнивайте через Stickiness, Retention и YoY-рост.': { en: 'MAU is a counter; context matters. Compare via Stickiness, Retention and YoY growth.', uz: 'MAU — hisoblagich; kontekst muhim. Stickiness, Retention va YoY o‘sish orqali taqqoslang.' },
  'Acquisition — счётчик; качество важнее количества. Смотрите CAC, Activation Rate, LTV:CAC.': { en: 'Acquisition is a counter; quality beats quantity. Watch CAC, Activation Rate, LTV:CAC.', uz: 'Acquisition — hisoblagich; sifat miqdordan muhim. CAC, Activation Rate, LTV:CAC ni kuzating.' },
  'Revenue — счётчик; здоровье бизнеса определяется ростом, маржой и unit-экономикой.': { en: 'Revenue is a counter; business health is determined by growth, margin, and unit economics.', uz: 'Revenue — hisoblagich; biznes salomatligi o‘sish, marja va unit-iqtisodiyot bilan belgilanadi.' },
  'ARR — счётчик; зрелость определяется YoY-ростом и Rule of 40 (рост + маржа ≥ 40%).': { en: 'ARR is a counter; maturity is determined by YoY growth and Rule of 40 (growth + margin ≥ 40%).', uz: 'ARR — hisoblagich; yetuklik YoY o‘sish va Rule of 40 (o‘sish + marja ≥ 40%) bilan belgilanadi.' },
  'MRR — счётчик. Контекст важнее: смотрите MoM-рост, NRR, CAC Payback.': { en: 'MRR is a counter. Context wins: watch MoM growth, NRR, CAC Payback.', uz: 'MRR — hisoblagich. Kontekst muhim: MoM o‘sish, NRR, CAC Payback ni qarang.' },
  'Сам по себе LTV ничего не говорит — сравните с CAC через LTV:CAC Ratio (цель ≥ 3:1).': { en: 'LTV alone tells you nothing — compare to CAC via the LTV:CAC ratio (target ≥ 3:1).', uz: 'LTV o‘zicha hech nima demaydi — CAC bilan LTV:CAC nisbati orqali taqqoslang (maqsad ≥ 3:1).' },

  // — Stickiness —
  'Продукт не «липкий». Работайте над ежедневными привычками.': { en: 'Product is not sticky. Work on daily habits.', uz: 'Mahsulot "yopishqoq" emas. Kunlik odatlar ustida ishlang.' },
  'Средняя липкость. Добавьте daily use-cases.': { en: 'Average stickiness. Add daily use cases.', uz: 'O‘rtacha stickiness. Kunlik use-case lar qo‘shing.' },
  'Высокая липкость — пользователи возвращаются ежедневно!': { en: 'High stickiness — users come back daily!', uz: 'Yuqori stickiness — foydalanuvchilar har kuni qaytadi!' },

  // — Retention —
  'Очень низкое удержание. Проверьте онбординг и ценность продукта.': { en: 'Very low retention. Check onboarding and product value.', uz: 'Juda past retention. Onboarding va mahsulot qiymatini tekshiring.' },
  'Среднее удержание. Улучшайте вовлечение и коммуникацию.': { en: 'Average retention. Improve engagement and communication.', uz: 'O‘rtacha retention. Vovlechenie va kommunikatsiyani yaxshilang.' },
  'Среднее удержание. Улучшайте вовлечение.': { en: 'Average retention. Improve engagement.', uz: 'O‘rtacha retention. Vovlecheniyeni yaxshilang.' },
  'Отличное удержание! Работает product-market fit.': { en: 'Excellent retention! Product-market fit is working.', uz: 'Ajoyib retention! Product-market fit ishlayapti.' },
  'Отличное удержание!': { en: 'Excellent retention!', uz: 'Ajoyib retention!' },
  'Низкое удержание. Проверьте ценность.': { en: 'Low retention. Check the value proposition.', uz: 'Past retention. Mahsulot qiymatini tekshiring.' },

  // — CAC —
  'CAC слишком высок. Оптимизируйте каналы привлечения.': { en: 'CAC is too high. Optimize acquisition channels.', uz: 'CAC juda yuqori. Jalb qilish kanallarini optimallashtiring.' },
  'CAC приемлем, но можно улучшить.': { en: 'CAC is acceptable, but can be improved.', uz: 'CAC qabul qilinadigan, lekin yaxshilash mumkin.' },
  'Низкий CAC — эффективное привлечение!': { en: 'Low CAC — efficient acquisition!', uz: 'Past CAC — samarali jalb qilish!' },

  // — LTV:CAC —
  'LTV < CAC — бизнес убыточен! Немедленно снизьте CAC.': { en: 'LTV < CAC — the business is unprofitable! Lower CAC immediately.', uz: 'LTV < CAC — biznes zararda! Darhol CAC ni kamaytiring.' },
  'Соотношение ниже нормы. Цель — минимум 3:1.': { en: 'Ratio below norm. Target at least 3:1.', uz: 'Nisbat normadan past. Maqsad — kamida 3:1.' },
  'Отличное соотношение! Бизнес рентабелен.': { en: 'Excellent ratio! The business is profitable.', uz: 'Ajoyib nisbat! Biznes foydali.' },
  'Очень высокое LTV:CAC — либо отлично, либо недоинвестируете в рост.': { en: 'Very high LTV:CAC — either excellent, or you are underinvesting in growth.', uz: 'Juda yuqori LTV:CAC — yo ajoyib, yoki o‘sishga yetarlicha investitsiya qilmayapsiz.' },

  // — ARPU / ARPDAU —
  'Низкий ARPU. Попробуйте апселы или новые предложения.': { en: 'Low ARPU. Try upsells or new offers.', uz: 'Past ARPU. Apsel yoki yangi takliflarni sinab ko‘ring.' },
  'Средний ARPU. Работайте над монетизацией.': { en: 'Average ARPU. Work on monetization.', uz: 'O‘rtacha ARPU. Monetizatsiya ustida ishlang.' },
  'Высокий ARPU — отличная монетизация!': { en: 'High ARPU — excellent monetization!', uz: 'Yuqori ARPU — ajoyib monetizatsiya!' },
  'Низкий ARPDAU. Работайте над монетизацией или вовлечением.': { en: 'Low ARPDAU. Work on monetization or engagement.', uz: 'Past ARPDAU. Monetizatsiya yoki engagement ustida ishlang.' },
  'Типично для free-to-play. Добавьте источники монетизации.': { en: 'Typical for free-to-play. Add monetization sources.', uz: 'Free-to-play uchun odatiy. Monetizatsiya manbalarini qo‘shing.' },
  'Хороший ARPDAU — продукт зарабатывает.': { en: 'Good ARPDAU — product earns money.', uz: 'Yaxshi ARPDAU — mahsulot pul ishlayapti.' },
  'Премиум-уровень. Отлично!': { en: 'Premium tier. Excellent!', uz: 'Premium daraja. Ajoyib!' },

  // — Churn —
  'Высокий отток. Срочно анализируйте причины ухода.': { en: 'High churn. Urgently analyze the reasons for leaving.', uz: 'Yuqori churn. Ketish sabablarini tezda tahlil qiling.' },
  'Отток выше среднего. Улучшайте поддержку и продукт.': { en: 'Above-average churn. Improve support and product.', uz: 'O‘rtachadan yuqori churn. Qo‘llab-quvvatlash va mahsulotni yaxshilang.' },
  'Низкий отток — отличная лояльность!': { en: 'Low churn — excellent loyalty!', uz: 'Past churn — ajoyib sodiqlik!' },

  // — GRR / NRR —
  'GRR низкий. Серьёзные потери клиентов.': { en: 'GRR is low. Serious customer losses.', uz: 'GRR past. Mijozlarning jiddiy yo‘qotilishi.' },
  'GRR приемлемый, но есть отток.': { en: 'GRR is acceptable, but there is churn.', uz: 'GRR qabul qilinadigan, lekin churn bor.' },
  'GRR отличный — клиенты остаются.': { en: 'GRR is excellent — customers stay.', uz: 'GRR ajoyib — mijozlar qoladi.' },
  'NRR < 100% — выручка падает. Нужны апселы.': { en: 'NRR < 100% — revenue is declining. Upsells needed.', uz: 'NRR < 100% — tushum tushyapti. Apsellar kerak.' },
  'NRR > 100% — рост за счёт существующих.': { en: 'NRR > 100% — growth from existing customers.', uz: 'NRR > 100% — mavjud mijozlardan o‘sish.' },
  'NRR отличный — клиенты расширяются.': { en: 'NRR is excellent — customers expand.', uz: 'NRR ajoyib — mijozlar kengayadi.' },

  // — ACV —
  'Низкий ACV. Цельтесь на более крупные контракты.': { en: 'Low ACV. Target larger contracts.', uz: 'Past ACV. Yirikroq shartnomalarni mo‘ljallang.' },
  'Средний ACV. Работайте над апселами.': { en: 'Average ACV. Work on upsells.', uz: 'O‘rtacha ACV. Apsellar ustida ishlang.' },
  'Высокий ACV — хороший показатель.': { en: 'High ACV — a good indicator.', uz: 'Yuqori ACV — yaxshi ko‘rsatkich.' },

  // — CAC Payback —
  'Окупаемость > 2 лет — слишком долго.': { en: 'Payback > 2 years — too long.', uz: 'Qaytim > 2 yil — juda uzoq.' },
  'Окупаемость > года — нормально для B2B.': { en: 'Payback > 1 year — fine for B2B.', uz: 'Qaytim > 1 yil — B2B uchun normal.' },
  'Быстрая окупаемость — отлично!': { en: 'Fast payback — excellent!', uz: 'Tez qaytim — ajoyib!' },

  // — Burn Multiple —
  'Cash-positive рост — каждый $ ARR приходит с прибылью. Эталон.': { en: 'Cash-positive growth — every $ of ARR comes with profit. The benchmark.', uz: 'Cash-positive o‘sish — har bir $ ARR foyda bilan keladi. Etalon.' },
  'Отличный Burn Multiple — высокая капитальная эффективность.': { en: 'Excellent Burn Multiple — high capital efficiency.', uz: 'Ajoyib Burn Multiple — yuqori kapital samaradorligi.' },
  'Хороший Burn Multiple — инвесторам нравится.': { en: 'Good Burn Multiple — investors like it.', uz: 'Yaxshi Burn Multiple — investorlarga yoqadi.' },
  'Норма для роста; можно оптимизировать.': { en: 'Norm for growth; can be optimized.', uz: 'O‘sish uchun norma; optimallashtirish mumkin.' },
  'Высокий burn — пересмотрите unit-economics.': { en: 'High burn — review unit economics.', uz: 'Yuqori burn — unit-iqtisodiyotni qayta ko‘rib chiqing.' },
  'Критично: каждый $ роста стоит >$3 burn.': { en: 'Critical: every $ of growth costs >$3 of burn.', uz: 'Kritik: har bir $ o‘sish >$3 burn ga tushadi.' },

  // — Magic Number —
  'Низкий Magic Number — сократите S&M, исправьте воронку.': { en: 'Low Magic Number — cut S&M, fix the funnel.', uz: 'Past Magic Number — S&M ni qisqartiring, voronkani tuzating.' },
  'Нормально, но окупаемость S&M >2 лет.': { en: 'Acceptable, but S&M payback is >2 years.', uz: 'Qabul qilinadigan, lekin S&M qaytimi >2 yil.' },
  'Хорошо — инвестируйте в рост.': { en: 'Good — invest in growth.', uz: 'Yaxshi — o‘sishga investitsiya qiling.' },
  'Отлично — масштабируйте S&M агрессивно!': { en: 'Excellent — scale S&M aggressively!', uz: 'Ajoyib — S&M ni agressiv masshtablashtiring!' },

  // — Rule of 40 —
  'Ниже 20%: критическое состояние — нужны фундаментальные изменения.': { en: 'Below 20%: critical state — fundamental changes needed.', uz: '20% dan past: kritik holat — fundamental o‘zgarishlar kerak.' },
  'Не дотягиваем до Rule of 40 — балансируйте рост и маржу.': { en: 'Below Rule of 40 — balance growth and margin.', uz: 'Rule of 40 ga yetmaydi — o‘sish va marjani muvozanatlang.' },
  'Rule of 40 выполнено — здоровый SaaS.': { en: 'Rule of 40 met — a healthy SaaS.', uz: 'Rule of 40 bajarildi — sog‘lom SaaS.' },
  'Выше 60% — звёздная категория (top decile).': { en: 'Above 60% — star tier (top decile).', uz: '60% dan yuqori — yulduz toifa (top decile).' },

  // — Quick Ratio —
  'Quick Ratio < 1 — теряете больше, чем привлекаете.': { en: 'Quick Ratio < 1 — you lose more than you acquire.', uz: 'Quick Ratio < 1 — jalb qilganingizdan ko‘proq yo‘qotasiz.' },
  'Хрупкий рост — каждый $ потерь съедает половину нового MRR.': { en: 'Fragile growth — every $ of loss eats half of new MRR.', uz: 'Mo‘rt o‘sish — har bir $ yo‘qotish yangi MRR ning yarmini yeydi.' },
  'Здоровый Quick Ratio — рост устойчив.': { en: 'Healthy Quick Ratio — growth is sustainable.', uz: 'Sog‘lom Quick Ratio — o‘sish barqaror.' },
  'Отличный Quick Ratio — рост существенно превышает потери.': { en: 'Excellent Quick Ratio — growth significantly exceeds losses.', uz: 'Ajoyib Quick Ratio — o‘sish yo‘qotishlardan sezilarli yuqori.' },
  'Отличный Quick Ratio.': { en: 'Excellent Quick Ratio.', uz: 'Ajoyib Quick Ratio.' },

  // — AARRR —
  'Низкая активация. Упростите первый опыт.': { en: 'Low activation. Simplify the first experience.', uz: 'Past activation. Birinchi tajribani soddalashtiring.' },
  'Средняя активация. Работайте над онбордингом.': { en: 'Average activation. Work on onboarding.', uz: 'O‘rtacha activation. Onboarding ustida ishlang.' },
  'Высокая активация — пользователи видят ценность.': { en: 'High activation — users see the value.', uz: 'Yuqori activation — foydalanuvchilar qiymatni ko‘rmoqda.' },
  'Низкий K-factor. Стимулируйте рефералы.': { en: 'Low K-factor. Incentivize referrals.', uz: 'Past K-factor. Referral lar uchun rag‘bat bering.' },
  'K-factor < 1 — виральность слабая.': { en: 'K-factor < 1 — virality is weak.', uz: 'K-factor < 1 — virallik kuchsiz.' },
  'K-factor > 1 — вирусный рост!': { en: 'K-factor > 1 — viral growth!', uz: 'K-factor > 1 — viral o‘sish!' },

  // — Time to Value —
  'Мгновенная ценность — отлично для consumer/PLG продуктов.': { en: 'Instant value — excellent for consumer/PLG products.', uz: 'Lahzali qiymat — consumer/PLG mahsulotlari uchun ajoyib.' },
  'Быстрая активация — хорошо для PLG.': { en: 'Fast activation — good for PLG.', uz: 'Tez activation — PLG uchun yaxshi.' },
  'Норма для B2B/enterprise. Упростите онбординг для PLG.': { en: 'Norm for B2B/enterprise. Simplify onboarding for PLG.', uz: 'B2B/enterprise uchun norma. PLG uchun onboarding ni soddalashtiring.' },
  'Слишком медленно — пользователи отваливаются. Урежьте setup-шаги.': { en: 'Too slow — users drop off. Cut setup steps.', uz: 'Juda sekin — foydalanuvchilar ketadi. Setup qadamlarini qisqartiring.' },

  // — Conversion / ROAS / CTR / CPC / Bounce —
  'Очень низкая конверсия. Проверьте посадочную страницу.': { en: 'Very low conversion. Check the landing page.', uz: 'Juda past konversiya. Landing sahifani tekshiring.' },
  'Средняя конверсия. A/B-тесты помогут.': { en: 'Average conversion. A/B tests will help.', uz: 'O‘rtacha konversiya. A/B testlar yordam beradi.' },
  'Высокая конверсия — отличный результат!': { en: 'High conversion — excellent result!', uz: 'Yuqori konversiya — ajoyib natija!' },
  'ROAS ниже нормы. Реклама не окупается.': { en: 'ROAS below norm. Ads do not pay back.', uz: 'ROAS normadan past. Reklama qaytmayapti.' },
  'Средний ROAS. Оптимизируйте кампании.': { en: 'Average ROAS. Optimize campaigns.', uz: 'O‘rtacha ROAS. Kampaniyalarni optimallashtiring.' },
  'Высокий ROAS — реклама эффективна!': { en: 'High ROAS — ads are effective!', uz: 'Yuqori ROAS — reklama samarali!' },
  'Высокий CPC. Пересмотрите таргетинг.': { en: 'High CPC. Review targeting.', uz: 'Yuqori CPC. Targetingni qayta ko‘rib chiqing.' },
  'Средний CPC. Есть куда оптимизировать.': { en: 'Average CPC. Room to optimize.', uz: 'O‘rtacha CPC. Optimallashtirish o‘rni bor.' },
  'Низкий CPC — эффективные объявления!': { en: 'Low CPC — effective ads!', uz: 'Past CPC — samarali reklamalar!' },
  'Очень низкий CTR. Улучшите креатив.': { en: 'Very low CTR. Improve the creative.', uz: 'Juda past CTR. Kreativni yaxshilang.' },
  'Средний CTR. Тестируйте разные подходы.': { en: 'Average CTR. Test different approaches.', uz: 'O‘rtacha CTR. Turli yondashuvlarni sinab ko‘ring.' },
  'Высокий CTR — объявление цепляет!': { en: 'High CTR — ad grabs attention!', uz: 'Yuqori CTR — reklama e‘tiborni tortmoqda!' },
  'Высокий отказ. Улучшите релевантность и скорость.': { en: 'High bounce. Improve relevance and speed.', uz: 'Yuqori bounce. Tegishlilik va tezlikni yaxshilang.' },
  'Средний отказ. Поработайте над вовлечением.': { en: 'Average bounce. Work on engagement.', uz: 'O‘rtacha bounce. Engagement ustida ishlang.' },
  'Низкий отказ — пользователи изучают сайт.': { en: 'Low bounce — users explore the site.', uz: 'Past bounce — foydalanuvchilar saytni o‘rganadi.' },

  // — QA —
  'Высокая плотность багов. Нужно улучшить тестирование.': { en: 'High bug density. Improve testing.', uz: 'Buglar zichligi yuqori. Testlashni yaxshilang.' },
  'Средняя плотность. Можно улучшить.': { en: 'Average density. Can be improved.', uz: 'O‘rtacha zichlik. Yaxshilash mumkin.' },
  'Низкая плотность — качественный код.': { en: 'Low density — quality code.', uz: 'Past zichlik — sifatli kod.' },
  'Низкое покрытие. Риск багов.': { en: 'Low coverage. Bug risk.', uz: 'Past qoplam. Bug xavfi.' },
  'Среднее покрытие. Добавьте тестов.': { en: 'Average coverage. Add tests.', uz: 'O‘rtacha qoplam. Testlar qo‘shing.' },
  'Хорошее покрытие — уверенность в коде.': { en: 'Good coverage — confidence in the code.', uz: 'Yaxshi qoplam — kodga ishonch.' },
  'Высокая плотность. Проведите ревью.': { en: 'High density. Run a review.', uz: 'Yuqori zichlik. Review o‘tkazing.' },
  'Средняя плотность. Нормально.': { en: 'Average density. OK.', uz: 'O‘rtacha zichlik. Normal.' },
  'Низкая плотность — код чист.': { en: 'Low density — code is clean.', uz: 'Past zichlik — kod toza.' },

  // — Support —
  'Низкий CSAT. Улучшайте качество поддержки.': { en: 'Low CSAT. Improve support quality.', uz: 'Past CSAT. Qo‘llab-quvvatlash sifatini yaxshilang.' },
  'Средний CSAT. Есть потенциал.': { en: 'Average CSAT. There is potential.', uz: 'O‘rtacha CSAT. Salohiyat bor.' },
  'Высокий CSAT — клиенты довольны!': { en: 'High CSAT — customers are happy!', uz: 'Yuqori CSAT — mijozlar mamnun!' },
  'Отрицательный NPS. Требуются срочные меры.': { en: 'Negative NPS. Urgent action required.', uz: 'Salbiy NPS. Shoshilinch chora-tadbirlar kerak.' },
  'NPS средний. Работайте над лояльностью.': { en: 'Average NPS. Work on loyalty.', uz: 'O‘rtacha NPS. Sodiqlik ustida ishlang.' },
  'Высокий NPS — много промоутеров!': { en: 'High NPS — many promoters!', uz: 'Yuqori NPS — ko‘p promouterlar!' },
  'Очень высокий NPS — клиенты вас любят!': { en: 'Very high NPS — customers love you!', uz: 'Juda yuqori NPS — mijozlar sizni yaxshi ko‘radi!' },
  'Отличный NPS — мирового уровня (>70)!': { en: 'Excellent NPS — world-class (>70)!', uz: 'Ajoyib NPS — jahon darajasi (>70)!' },
  'Низкий FCR. Обучите поддержку.': { en: 'Low FCR. Train support.', uz: 'Past FCR. Qo‘llab-quvvatlashni o‘qiting.' },
  'Средний FCR. Можно улучшить.': { en: 'Average FCR. Can be improved.', uz: 'O‘rtacha FCR. Yaxshilash mumkin.' },
  'Высокий FCR — эффективная поддержка!': { en: 'High FCR — efficient support!', uz: 'Yuqori FCR — samarali qo‘llab-quvvatlash!' },
  'Нарушение SLA. Увеличьте ресурсы поддержки.': { en: 'SLA breach. Increase support resources.', uz: 'SLA buzilishi. Qo‘llab-quvvatlash resurslarini oshiring.' },
  'SLA близко к норме. Оптимизируйте процессы.': { en: 'SLA close to norm. Optimize processes.', uz: 'SLA normaga yaqin. Jarayonlarni optimallashtiring.' },
  'SLA выполняется — отлично!': { en: 'SLA met — excellent!', uz: 'SLA bajarildi — ajoyib!' },

  // — Finance & Sales —
  'Низкая маржа. Проверьте unit-economics — каждая продажа теряет деньги.': { en: 'Low margin. Check unit economics — every sale loses money.', uz: 'Past marja. Unit-iqtisodiyotni tekshiring — har bir sotuv pul yo‘qotadi.' },
  'Норма для commerce/hardware. Для SaaS — слишком низко.': { en: 'Norm for commerce/hardware. Too low for SaaS.', uz: 'Commerce/hardware uchun norma. SaaS uchun juda past.' },
  'Хорошая маржа — SaaS-уровень.': { en: 'Good margin — SaaS-grade.', uz: 'Yaxshi marja — SaaS darajasi.' },
  'Отличная маржа — мирового класса SaaS (>80%).': { en: 'Excellent margin — world-class SaaS (>80%).', uz: 'Ajoyib marja — jahon darajasidagi SaaS (>80%).' },
  'Cash-positive — runway бесконечен.': { en: 'Cash-positive — runway is infinite.', uz: 'Cash-positive — runway cheksiz.' },
  'Менее 6 мес — срочно фандрейзить или резать burn.': { en: 'Less than 6 months — urgently raise or cut burn.', uz: '6 oydan kam — shoshilinch fandrayzing yoki burn ni qisqartiring.' },
  '6–12 мес — пора начинать фандрейзинг.': { en: '6–12 months — time to start fundraising.', uz: '6–12 oy — fandrayzingni boshlash vaqti.' },
  '12–18 мес — норма для пре-сид/сид.': { en: '12–18 months — norm for pre-seed/seed.', uz: '12–18 oy — pre-seed/seed uchun norma.' },
  'Больше 18 мес — здоровый runway.': { en: 'More than 18 months — healthy runway.', uz: '18 oydan ko‘p — sog‘lom runway.' },
  'Cash-positive — выручка покрывает расходы.': { en: 'Cash-positive — revenue covers expenses.', uz: 'Cash-positive — tushum xarajatlarni qoplaydi.' },
  'Burn активен. Контролируйте через Runway и Burn Multiple.': { en: 'Burn is active. Control via Runway and Burn Multiple.', uz: 'Burn faol. Runway va Burn Multiple orqali nazorat qiling.' },
  'Sales Velocity — рост важнее абсолюта. Ускоряйте за счёт 4 рычагов: opps, ACV, win rate, цикл.': { en: 'Sales Velocity — growth matters more than absolute. Accelerate via 4 levers: opps, ACV, win rate, cycle.', uz: 'Sales Velocity — o‘sish absolyutdan muhim. 4 ta richag orqali tezlashtiring: opps, ACV, win rate, tsikl.' },
  'Низкий Win Rate. Проверьте качество лидов и квалификацию.': { en: 'Low Win Rate. Check lead quality and qualification.', uz: 'Past Win Rate. Lid sifati va qualifikatsiyani tekshiring.' },
  'Норма для B2B SaaS, но есть куда расти.': { en: 'Norm for B2B SaaS, but room to grow.', uz: 'B2B SaaS uchun norma, lekin o‘sish o‘rni bor.' },
  'Хороший Win Rate — воронка работает.': { en: 'Good Win Rate — funnel is working.', uz: 'Yaxshi Win Rate — voronka ishlayapti.' },
  'Отличный Win Rate — продукт matches спросу.': { en: 'Excellent Win Rate — product matches demand.', uz: 'Ajoyib Win Rate — mahsulot talabga mos.' },
  'Воронки мало — не хватит, чтобы закрыть план.': { en: 'Pipeline too small — not enough to hit the plan.', uz: 'Pipeline kichik — rejani yopishga yetmaydi.' },
  'Норма; но небольшой запас. Увеличивайте voronку.': { en: 'Norm; but small buffer. Grow the pipeline.', uz: 'Norma; lekin kichik zaxira. Pipelineni oshiring.' },
  'Хорошее покрытие — план реалистичен.': { en: 'Good coverage — the plan is realistic.', uz: 'Yaxshi qoplam — reja realistik.' },
  'Отличное покрытие — большой запас.': { en: 'Excellent coverage — large buffer.', uz: 'Ajoyib qoplam — katta zaxira.' }
};

window._tInsight = function(ruText) {
  if (!window._currentLang || window._currentLang() === 'ru') return ruText;
  const entry = window.I18N_INSIGHTS[ruText];
  if (!entry) return ruText;
  return entry[window._currentLang()] || ruText;
};

// ============================================================
// I18N_THRESH — translation lookup keyed by exact RU threshold string.
// Covers both default `metric.threshold` and INDUSTRY_THRESHOLDS values.
// ============================================================
window.I18N_THRESH = {
  // Default thresholds
  'Метрика-счётчик. Оценивайте динамику MoM и через Stickiness': { en: 'Counter metric. Evaluate MoM dynamics and via Stickiness', uz: 'Hisoblagich metrika. MoM dinamikani va Stickiness orqali baholang' },
  'Главное — соотношение к CAC: LTV:CAC > 3 норма, > 5 отлично': { en: 'Main thing — ratio to CAC: LTV:CAC > 3 norm, > 5 excellent', uz: 'Asosiy narsa — CAC ga nisbat: LTV:CAC > 3 norma, > 5 ajoyib' },
  'Главное — MoM-рост: норма >5%, хорошо >10%, отлично >20%': { en: 'Main thing — MoM growth: norm >5%, good >10%, excellent >20%', uz: 'Asosiy narsa — MoM o‘sish: norma >5%, yaxshi >10%, ajoyib >20%' },
  'Главное — YoY-рост и NRR. Молодой SaaS: T2D3 (3x к ARR за 2 года)': { en: 'Main thing — YoY growth and NRR. Young SaaS: T2D3 (3x ARR in 2 years)', uz: 'Asosiy — YoY o‘sish va NRR. Yosh SaaS: T2D3 (2 yilda 3x ARR)' },
  'Метрика-счётчик. Контекст: рост MoM/YoY, маржа, Rule of 40': { en: 'Counter metric. Context: MoM/YoY growth, margin, Rule of 40', uz: 'Hisoblagich metrika. Kontekst: MoM/YoY o‘sish, marja, Rule of 40' },
  'Метрика-счётчик. Оценивайте через CAC, конверсии и MoM-динамику': { en: 'Counter metric. Evaluate via CAC, conversion, and MoM dynamics', uz: 'Hisoblagich metrika. CAC, konversiya va MoM dinamika orqali baholang' },
  'Контекст: сравнивайте период к периоду; рост важнее абсолюта': { en: 'Context: compare period over period; growth matters more than absolute', uz: 'Kontekst: davrdan davrga taqqoslang; o‘sish absolyutdan muhim' },

  // INDUSTRY_THRESHOLDS values — translated by exact RU
  // CTR
  'Плохо: <1%, Норма: 1–3%, Хорошо: >3%': { en: 'Bad: <1%, Norm: 1–3%, Good: >3%', uz: 'Yomon: <1%, Norma: 1–3%, Yaxshi: >3%' },
  'Плохо: <1%, Норма: 2–5%, Хорошо: >5%': { en: 'Bad: <1%, Norm: 2–5%, Good: >5%', uz: 'Yomon: <1%, Norma: 2–5%, Yaxshi: >5%' },
  'Плохо: <0.5%, Норма: 1–2%, Хорошо: >2%': { en: 'Bad: <0.5%, Norm: 1–2%, Good: >2%', uz: 'Yomon: <0.5%, Norma: 1–2%, Yaxshi: >2%' },
  'Плохо: <0.5%, Норма: 1–3%, Хорошо: >3%': { en: 'Bad: <0.5%, Norm: 1–3%, Good: >3%', uz: 'Yomon: <0.5%, Norma: 1–3%, Yaxshi: >3%' },
  'Плохо: <2%, Норма: 3–8%, Хорошо: >8%': { en: 'Bad: <2%, Norm: 3–8%, Good: >8%', uz: 'Yomon: <2%, Norma: 3–8%, Yaxshi: >8%' },

  // CPC
  'Отлично: <$0.5, Норма: $0.5–$2, Плохо: >$2': { en: 'Excellent: <$0.5, Norm: $0.5–$2, Bad: >$2', uz: 'Ajoyib: <$0.5, Norma: $0.5–$2, Yomon: >$2' },
  'Отлично: <$2, Норма: $2–$8, Плохо: >$8': { en: 'Excellent: <$2, Norm: $2–$8, Bad: >$8', uz: 'Ajoyib: <$2, Norma: $2–$8, Yomon: >$8' },
  'Отлично: <$0.3, Норма: $0.3–$1.2, Плохо: >$1.2': { en: 'Excellent: <$0.3, Norm: $0.3–$1.2, Bad: >$1.2', uz: 'Ajoyib: <$0.3, Norma: $0.3–$1.2, Yomon: >$1.2' },
  'Отлично: <$0.2, Норма: $0.2–$1, Плохо: >$1': { en: 'Excellent: <$0.2, Norm: $0.2–$1, Bad: >$1', uz: 'Ajoyib: <$0.2, Norma: $0.2–$1, Yomon: >$1' },
  'Отлично: <$0.15, Норма: $0.15–$0.6, Плохо: >$0.6': { en: 'Excellent: <$0.15, Norm: $0.15–$0.6, Bad: >$0.6', uz: 'Ajoyib: <$0.15, Norma: $0.15–$0.6, Yomon: >$0.6' },

  // ROAS
  'Плохо: <100%, Норма: 100–200%, Хорошо: >300%': { en: 'Bad: <100%, Norm: 100–200%, Good: >300%', uz: 'Yomon: <100%, Norma: 100–200%, Yaxshi: >300%' },
  'Плохо: <150%, Норма: 150–400%, Хорошо: >400%': { en: 'Bad: <150%, Norm: 150–400%, Good: >400%', uz: 'Yomon: <150%, Norma: 150–400%, Yaxshi: >400%' },
  'Плохо: <200%, Норма: 200–500%, Хорошо: >500%': { en: 'Bad: <200%, Norm: 200–500%, Good: >500%', uz: 'Yomon: <200%, Norma: 200–500%, Yaxshi: >500%' },
  'Плохо: <100%, Норма: 100–250%, Хорошо: >250%': { en: 'Bad: <100%, Norm: 100–250%, Good: >250%', uz: 'Yomon: <100%, Norma: 100–250%, Yaxshi: >250%' },
  'Плохо: <120%, Норма: 120–300%, Хорошо: >300%': { en: 'Bad: <120%, Norm: 120–300%, Good: >300%', uz: 'Yomon: <120%, Norma: 120–300%, Yaxshi: >300%' },

  // CR
  'Плохо: <1%, Норма: 1–4%, Хорошо: >4%': { en: 'Bad: <1%, Norm: 1–4%, Good: >4%', uz: 'Yomon: <1%, Norma: 1–4%, Yaxshi: >4%' },
  'Плохо: <1%, Норма: 1–5%, Хорошо: >5%': { en: 'Bad: <1%, Norm: 1–5%, Good: >5%', uz: 'Yomon: <1%, Norma: 1–5%, Yaxshi: >5%' },
  'Плохо: <0.5%, Норма: 0.5–2%, Хорошо: >2%': { en: 'Bad: <0.5%, Norm: 0.5–2%, Good: >2%', uz: 'Yomon: <0.5%, Norma: 0.5–2%, Yaxshi: >2%' },

  // Bounce
  'Хорошо: <40%, Норма: 40–70%, Плохо: >70%': { en: 'Good: <40%, Norm: 40–70%, Bad: >70%', uz: 'Yaxshi: <40%, Norma: 40–70%, Yomon: >70%' },
  'Хорошо: <35%, Норма: 35–60%, Плохо: >60%': { en: 'Good: <35%, Norm: 35–60%, Bad: >60%', uz: 'Yaxshi: <35%, Norma: 35–60%, Yomon: >60%' },
  'Хорошо: <30%, Норма: 30–55%, Плохо: >55%': { en: 'Good: <30%, Norm: 30–55%, Bad: >55%', uz: 'Yaxshi: <30%, Norma: 30–55%, Yomon: >55%' },
  'Хорошо: <40%, Норма: 40–65%, Плохо: >65%': { en: 'Good: <40%, Norm: 40–65%, Bad: >65%', uz: 'Yaxshi: <40%, Norma: 40–65%, Yomon: >65%' },
  'Хорошо: <55%, Норма: 55–80%, Плохо: >80%': { en: 'Good: <55%, Norm: 55–80%, Bad: >80%', uz: 'Yaxshi: <55%, Norma: 55–80%, Yomon: >80%' },

  // Churn
  'Отлично: <1%/мес, Норма: 1–5%/мес, Плохо: >5%/мес': { en: 'Excellent: <1%/mo, Norm: 1–5%/mo, Bad: >5%/mo', uz: 'Ajoyib: <1%/oy, Norma: 1–5%/oy, Yomon: >5%/oy' },
  'Отлично: <0.5%/мес, Норма: 0.5–2%/мес, Плохо: >2%/мес': { en: 'Excellent: <0.5%/mo, Norm: 0.5–2%/mo, Bad: >2%/mo', uz: 'Ajoyib: <0.5%/oy, Norma: 0.5–2%/oy, Yomon: >2%/oy' },
  'Отлично: <3%/мес, Норма: 3–8%/мес, Плохо: >8%/мес': { en: 'Excellent: <3%/mo, Norm: 3–8%/mo, Bad: >8%/mo', uz: 'Ajoyib: <3%/oy, Norma: 3–8%/oy, Yomon: >8%/oy' },
  'Отлично: <5%/мес, Норма: 5–15%/мес, Плохо: >15%/мес': { en: 'Excellent: <5%/mo, Norm: 5–15%/mo, Bad: >15%/mo', uz: 'Ajoyib: <5%/oy, Norma: 5–15%/oy, Yomon: >15%/oy' },
  'Отлично: <2%/мес, Норма: 2–7%/мес, Плохо: >7%/мес': { en: 'Excellent: <2%/mo, Norm: 2–7%/mo, Bad: >7%/mo', uz: 'Ajoyib: <2%/oy, Norma: 2–7%/oy, Yomon: >7%/oy' },

  // LTV
  'Хорошо: LTV > 3×CAC, Отлично: LTV > 5×CAC': { en: 'Good: LTV > 3×CAC, Excellent: LTV > 5×CAC', uz: 'Yaxshi: LTV > 3×CAC, Ajoyib: LTV > 5×CAC' },
  'Норма: LTV > 3×CAC, Хорошо: LTV > 5×CAC, Отлично: LTV > 8×CAC': { en: 'Norm: LTV > 3×CAC, Good: LTV > 5×CAC, Excellent: LTV > 8×CAC', uz: 'Norma: LTV > 3×CAC, Yaxshi: LTV > 5×CAC, Ajoyib: LTV > 8×CAC' },
  'Норма: LTV > 2×CAC, Хорошо: LTV > 3×CAC': { en: 'Norm: LTV > 2×CAC, Good: LTV > 3×CAC', uz: 'Norma: LTV > 2×CAC, Yaxshi: LTV > 3×CAC' },
  'Норма: LTV > 1.5×CAC, Хорошо: LTV > 3×CAC': { en: 'Norm: LTV > 1.5×CAC, Good: LTV > 3×CAC', uz: 'Norma: LTV > 1.5×CAC, Yaxshi: LTV > 3×CAC' },
  'Норма: LTV > 2×CAC, Хорошо: LTV > 4×CAC': { en: 'Norm: LTV > 2×CAC, Good: LTV > 4×CAC', uz: 'Norma: LTV > 2×CAC, Yaxshi: LTV > 4×CAC' },

  // CAC
  'Отлично: CAC < LTV/3, Норма: CAC < LTV/2, Плохо: CAC > LTV/2': { en: 'Excellent: CAC < LTV/3, Norm: CAC < LTV/2, Bad: CAC > LTV/2', uz: 'Ajoyib: CAC < LTV/3, Norma: CAC < LTV/2, Yomon: CAC > LTV/2' },
  'Отлично: Окупаемость <6 мес, Норма: 6–18 мес, Плохо: >18 мес': { en: 'Excellent: Payback <6 mo, Norm: 6–18 mo, Bad: >18 mo', uz: 'Ajoyib: Qaytim <6 oy, Norma: 6–18 oy, Yomon: >18 oy' },
  'Отлично: CAC < $5, Норма: $5–$25, Плохо: >$25': { en: 'Excellent: CAC < $5, Norm: $5–$25, Bad: >$25', uz: 'Ajoyib: CAC < $5, Norma: $5–$25, Yomon: >$25' },
  'Отлично: CAC < $1, Норма: $1–$5, Плохо: >$5': { en: 'Excellent: CAC < $1, Norm: $1–$5, Bad: >$5', uz: 'Ajoyib: CAC < $1, Norma: $1–$5, Yomon: >$5' },
  'Отлично: CAC < $2, Норма: $2–$10, Плохо: >$10': { en: 'Excellent: CAC < $2, Norm: $2–$10, Bad: >$10', uz: 'Ajoyib: CAC < $2, Norma: $2–$10, Yomon: >$10' },

  // DAU (Stickiness-based)
  'Норма: Stickiness >20%, Хорошо: >40%': { en: 'Norm: Stickiness >20%, Good: >40%', uz: 'Norma: Stickiness >20%, Yaxshi: >40%' },
  'Норма: Stickiness >30%, Хорошо: >50%, Отлично: >70%': { en: 'Norm: Stickiness >30%, Good: >50%, Excellent: >70%', uz: 'Norma: Stickiness >30%, Yaxshi: >50%, Ajoyib: >70%' },
  'Норма: Stickiness >5%, Хорошо: >15%': { en: 'Norm: Stickiness >5%, Good: >15%', uz: 'Norma: Stickiness >5%, Yaxshi: >15%' },
  'Норма: Stickiness >20%, Хорошо: >40%, Отлично: >60%': { en: 'Norm: Stickiness >20%, Good: >40%, Excellent: >60%', uz: 'Norma: Stickiness >20%, Yaxshi: >40%, Ajoyib: >60%' },
  'Норма: Stickiness >25%, Хорошо: >50%': { en: 'Norm: Stickiness >25%, Good: >50%', uz: 'Norma: Stickiness >25%, Yaxshi: >50%' },

  // NPS
  'Плохо: <0, Норма: 0–30, Хорошо: 30–70, Отлично: >70': { en: 'Bad: <0, Norm: 0–30, Good: 30–70, Excellent: >70', uz: 'Yomon: <0, Norma: 0–30, Yaxshi: 30–70, Ajoyib: >70' },
  'Плохо: <20, Норма: 20–40, Хорошо: 40–60, Отлично: >60': { en: 'Bad: <20, Norm: 20–40, Good: 40–60, Excellent: >60', uz: 'Yomon: <20, Norma: 20–40, Yaxshi: 40–60, Ajoyib: >60' },
  'Плохо: <10, Норма: 10–40, Хорошо: 40–65, Отлично: >65': { en: 'Bad: <10, Norm: 10–40, Good: 40–65, Excellent: >65', uz: 'Yomon: <10, Norma: 10–40, Yaxshi: 40–65, Ajoyib: >65' },
  'Плохо: <0, Норма: 0–25, Хорошо: 25–50, Отлично: >50': { en: 'Bad: <0, Norm: 0–25, Good: 25–50, Excellent: >50', uz: 'Yomon: <0, Norma: 0–25, Yaxshi: 25–50, Ajoyib: >50' },
  'Плохо: <0, Норма: 0–20, Хорошо: 20–45, Отлично: >45': { en: 'Bad: <0, Norm: 0–20, Good: 20–45, Excellent: >45', uz: 'Yomon: <0, Norma: 0–20, Yaxshi: 20–45, Ajoyib: >45' },

  // MRR
  'Норма: MoM рост >5%, Хорошо: >10%, Отлично: >20%': { en: 'Norm: MoM growth >5%, Good: >10%, Excellent: >20%', uz: 'Norma: MoM o‘sish >5%, Yaxshi: >10%, Ajoyib: >20%' },
  'Норма: MoM рост >5%, Хорошо: >15%, Отлично: >25%': { en: 'Norm: MoM growth >5%, Good: >15%, Excellent: >25%', uz: 'Norma: MoM o‘sish >5%, Yaxshi: >15%, Ajoyib: >25%' },
  'Норма: YoY рост >20%, Хорошо: >50%': { en: 'Norm: YoY growth >20%, Good: >50%', uz: 'Norma: YoY o‘sish >20%, Yaxshi: >50%' },
  'Норма: MoM рост >8%, Хорошо: >20%': { en: 'Norm: MoM growth >8%, Good: >20%', uz: 'Norma: MoM o‘sish >8%, Yaxshi: >20%' },
  'Норма: MoM рост >3%, Хорошо: >10%': { en: 'Norm: MoM growth >3%, Good: >10%', uz: 'Norma: MoM o‘sish >3%, Yaxshi: >10%' },

  // NRR
  'Плохо: <80%, Норма: 80–100%, Хорошо: 100–120%, Отлично: >120%': { en: 'Bad: <80%, Norm: 80–100%, Good: 100–120%, Excellent: >120%', uz: 'Yomon: <80%, Norma: 80–100%, Yaxshi: 100–120%, Ajoyib: >120%' },
  'Плохо: <90%, Норма: 90–100%, Хорошо: 100–120%, Отлично: >130%': { en: 'Bad: <90%, Norm: 90–100%, Good: 100–120%, Excellent: >130%', uz: 'Yomon: <90%, Norma: 90–100%, Yaxshi: 100–120%, Ajoyib: >130%' },
  'Плохо: <70%, Норма: 70–90%, Хорошо: >100%': { en: 'Bad: <70%, Norm: 70–90%, Good: >100%', uz: 'Yomon: <70%, Norma: 70–90%, Yaxshi: >100%' },
  'Плохо: <75%, Норма: 75–95%, Хорошо: >100%': { en: 'Bad: <75%, Norm: 75–95%, Good: >100%', uz: 'Yomon: <75%, Norma: 75–95%, Yaxshi: >100%' },
  'Плохо: <80%, Норма: 80–100%, Хорошо: >110%': { en: 'Bad: <80%, Norm: 80–100%, Good: >110%', uz: 'Yomon: <80%, Norma: 80–100%, Yaxshi: >110%' },

  // CSAT
  'Плохо: <60%, Норма: 60–80%, Хорошо: >80%': { en: 'Bad: <60%, Norm: 60–80%, Good: >80%', uz: 'Yomon: <60%, Norma: 60–80%, Yaxshi: >80%' },
  'Плохо: <70%, Норма: 70–85%, Хорошо: >85%': { en: 'Bad: <70%, Norm: 70–85%, Good: >85%', uz: 'Yomon: <70%, Norma: 70–85%, Yaxshi: >85%' },
  'Плохо: <65%, Норма: 65–85%, Хорошо: >85%': { en: 'Bad: <65%, Norm: 65–85%, Good: >85%', uz: 'Yomon: <65%, Norma: 65–85%, Yaxshi: >85%' },
  'Плохо: <55%, Норма: 55–75%, Хорошо: >75%': { en: 'Bad: <55%, Norm: 55–75%, Good: >75%', uz: 'Yomon: <55%, Norma: 55–75%, Yaxshi: >75%' },

  // Stickiness industry
  'Плохо: <10%, Норма: 10–25%, Хорошо: >25%': { en: 'Bad: <10%, Norm: 10–25%, Good: >25%', uz: 'Yomon: <10%, Norma: 10–25%, Yaxshi: >25%' },
  'Плохо: <15%, Норма: 15–30%, Хорошо: >30%, Отлично: >50%': { en: 'Bad: <15%, Norm: 15–30%, Good: >30%, Excellent: >50%', uz: 'Yomon: <15%, Norma: 15–30%, Yaxshi: >30%, Ajoyib: >50%' },
  'Плохо: <3%, Норма: 3–10%, Хорошо: >10%': { en: 'Bad: <3%, Norm: 3–10%, Good: >10%', uz: 'Yomon: <3%, Norma: 3–10%, Yaxshi: >10%' },
  'Плохо: <10%, Норма: 10–25%, Хорошо: >25%, Отлично: >40%': { en: 'Bad: <10%, Norm: 10–25%, Good: >25%, Excellent: >40%', uz: 'Yomon: <10%, Norma: 10–25%, Yaxshi: >25%, Ajoyib: >40%' },
  'Плохо: <12%, Норма: 12–30%, Хорошо: >30%': { en: 'Bad: <12%, Norm: 12–30%, Good: >30%', uz: 'Yomon: <12%, Norma: 12–30%, Yaxshi: >30%' },

  // Retention
  'Плохо: <30%, Норма: 30–60%, Хорошо: >60%': { en: 'Bad: <30%, Norm: 30–60%, Good: >60%', uz: 'Yomon: <30%, Norma: 30–60%, Yaxshi: >60%' },
  'Плохо: <70%, Норма: 70–85%, Хорошо: >85% (по логин когортам D30)': { en: 'Bad: <70%, Norm: 70–85%, Good: >85% (login cohorts D30)', uz: 'Yomon: <70%, Norma: 70–85%, Yaxshi: >85% (login kogortalar D30)' },
  'Плохо: <20%, Норма: 20–40%, Хорошо: >40% (повторная покупка 90д)': { en: 'Bad: <20%, Norm: 20–40%, Good: >40% (repeat purchase 90d)', uz: 'Yomon: <20%, Norma: 20–40%, Yaxshi: >40% (90 kun ichida takroriy xarid)' },
  'Плохо: <15% D30, Норма: 15–30%, Хорошо: >30%': { en: 'Bad: <15% D30, Norm: 15–30%, Good: >30%', uz: 'Yomon: <15% D30, Norma: 15–30%, Yaxshi: >30%' },
  'Плохо: <25%, Норма: 25–50%, Хорошо: >50%': { en: 'Bad: <25%, Norm: 25–50%, Good: >50%', uz: 'Yomon: <25%, Norma: 25–50%, Yaxshi: >50%' },
  'Плохо: <60%, Норма: 60–80%, Хорошо: >80%': { en: 'Bad: <60%, Norm: 60–80%, Good: >80%', uz: 'Yomon: <60%, Norma: 60–80%, Yaxshi: >80%' },
  'Плохо: <20%, Норма: 20–45%, Хорошо: >45%': { en: 'Bad: <20%, Norm: 20–45%, Good: >45%', uz: 'Yomon: <20%, Norma: 20–45%, Yaxshi: >45%' },

  // Activation
  'Плохо: <40%, Норма: 40–65%, Хорошо: >65%': { en: 'Bad: <40%, Norm: 40–65%, Good: >65%', uz: 'Yomon: <40%, Norma: 40–65%, Yaxshi: >65%' },
  'Плохо: <25%, Норма: 25–50%, Хорошо: >50%': { en: 'Bad: <25%, Norm: 25–50%, Good: >50%', uz: 'Yomon: <25%, Norma: 25–50%, Yaxshi: >50%' },
  'Плохо: <30%, Норма: 30–55%, Хорошо: >55%': { en: 'Bad: <30%, Norm: 30–55%, Good: >55%', uz: 'Yomon: <30%, Norma: 30–55%, Yaxshi: >55%' },

  // Referral
  'Плохо: <0.3, Норма: 0.3–1, Хорошо: >1 (вирусный рост)': { en: 'Bad: <0.3, Norm: 0.3–1, Good: >1 (viral growth)', uz: 'Yomon: <0.3, Norma: 0.3–1, Yaxshi: >1 (viral o‘sish)' },
  'Плохо: <0.2, Норма: 0.2–0.6, Хорошо: >0.6, Виральность: >1': { en: 'Bad: <0.2, Norm: 0.2–0.6, Good: >0.6, Viral: >1', uz: 'Yomon: <0.2, Norma: 0.2–0.6, Yaxshi: >0.6, Viral: >1' },
  'Плохо: <0.15, Норма: 0.15–0.5, Хорошо: >0.5': { en: 'Bad: <0.15, Norm: 0.15–0.5, Good: >0.5', uz: 'Yomon: <0.15, Norma: 0.15–0.5, Yaxshi: >0.5' },
  'Плохо: <0.4, Норма: 0.4–1, Хорошо: >1': { en: 'Bad: <0.4, Norm: 0.4–1, Good: >1', uz: 'Yomon: <0.4, Norma: 0.4–1, Yaxshi: >1' },
  'Плохо: <0.5, Норма: 0.5–1.5, Хорошо: >1.5': { en: 'Bad: <0.5, Norm: 0.5–1.5, Good: >1.5', uz: 'Yomon: <0.5, Norma: 0.5–1.5, Yaxshi: >1.5' },

  // ARPU
  'Зависит от модели — сравнивайте с CAC': { en: 'Depends on the model — compare to CAC', uz: 'Modelga bog‘liq — CAC bilan taqqoslang' },
  'B2B: $50–$500/мес, SMB: $20–$100, Enterprise: >$500': { en: 'B2B: $50–$500/mo, SMB: $20–$100, Enterprise: >$500', uz: 'B2B: $50–$500/oy, SMB: $20–$100, Enterprise: >$500' },
  'Норма: $5–$50/мес активного покупателя': { en: 'Norm: $5–$50/mo per active buyer', uz: 'Norma: $5–$50/oy faol xaridor uchun' },
  'Free-to-play: $0.05–$5, Premium app: $1–$20': { en: 'Free-to-play: $0.05–$5, Premium app: $1–$20', uz: 'Free-to-play: $0.05–$5, Premium ilova: $1–$20' },
  'Подписка: $3–$15, Реклама: $0.5–$5': { en: 'Subscription: $3–$15, Ads: $0.5–$5', uz: 'Obuna: $3–$15, Reklama: $0.5–$5' },

  // GRR
  'Плохо: <80%, Норма: 80–95%, Хорошо: >95%': { en: 'Bad: <80%, Norm: 80–95%, Good: >95%', uz: 'Yomon: <80%, Norma: 80–95%, Yaxshi: >95%' },
  'Плохо: <85%, Норма: 85–95%, Хорошо: >95%, Отлично: >97%': { en: 'Bad: <85%, Norm: 85–95%, Good: >95%, Excellent: >97%', uz: 'Yomon: <85%, Norma: 85–95%, Yaxshi: >95%, Ajoyib: >97%' },
  'Плохо: <75%, Норма: 75–90%, Хорошо: >90%': { en: 'Bad: <75%, Norm: 75–90%, Good: >90%', uz: 'Yomon: <75%, Norma: 75–90%, Yaxshi: >90%' },
  'Плохо: <70%, Норма: 70–88%, Хорошо: >88%': { en: 'Bad: <70%, Norm: 70–88%, Good: >88%', uz: 'Yomon: <70%, Norma: 70–88%, Yaxshi: >88%' },
  'Плохо: <80%, Норма: 80–92%, Хорошо: >92%': { en: 'Bad: <80%, Norm: 80–92%, Good: >92%', uz: 'Yomon: <80%, Norma: 80–92%, Yaxshi: >92%' },

  // CAC Payback
  'Хорошо: <12 мес, Норма: 12–24 мес, Плохо: >24 мес': { en: 'Good: <12 mo, Norm: 12–24 mo, Bad: >24 mo', uz: 'Yaxshi: <12 oy, Norma: 12–24 oy, Yomon: >24 oy' },
  'Хорошо: <12 мес, Норма: 12–18 мес, Плохо: >18 мес': { en: 'Good: <12 mo, Norm: 12–18 mo, Bad: >18 mo', uz: 'Yaxshi: <12 oy, Norma: 12–18 oy, Yomon: >18 oy' },
  'Хорошо: <3 мес, Норма: 3–9 мес, Плохо: >9 мес': { en: 'Good: <3 mo, Norm: 3–9 mo, Bad: >9 mo', uz: 'Yaxshi: <3 oy, Norma: 3–9 oy, Yomon: >9 oy' },
  'Хорошо: <6 мес, Норма: 6–12 мес, Плохо: >12 мес': { en: 'Good: <6 mo, Norm: 6–12 mo, Bad: >12 mo', uz: 'Yaxshi: <6 oy, Norma: 6–12 oy, Yomon: >12 oy' },
  'Хорошо: <9 мес, Норма: 9–18 мес, Плохо: >18 мес': { en: 'Good: <9 mo, Norm: 9–18 mo, Bad: >18 mo', uz: 'Yaxshi: <9 oy, Norma: 9–18 oy, Yomon: >18 oy' },

  // LTV:CAC
  'Плохо: <1 (убыток), Норма: 1–3, Хорошо: >3, Отлично: >5': { en: 'Bad: <1 (loss), Norm: 1–3, Good: >3, Excellent: >5', uz: 'Yomon: <1 (zarar), Norma: 1–3, Yaxshi: >3, Ajoyib: >5' },
  'Плохо: <2, Норма: 2–4, Хорошо: 4–6, Отлично: >6': { en: 'Bad: <2, Norm: 2–4, Good: 4–6, Excellent: >6', uz: 'Yomon: <2, Norma: 2–4, Yaxshi: 4–6, Ajoyib: >6' },
  'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3': { en: 'Bad: <1.5, Norm: 1.5–3, Good: >3', uz: 'Yomon: <1.5, Norma: 1.5–3, Yaxshi: >3' },
  'Плохо: <2, Норма: 2–4, Хорошо: >4': { en: 'Bad: <2, Norm: 2–4, Good: >4', uz: 'Yomon: <2, Norma: 2–4, Yaxshi: >4' },

  // Test Coverage / FCR / SLA
  'Плохо: <50%, Норма: 50–80%, Хорошо: >80%': { en: 'Bad: <50%, Norm: 50–80%, Good: >80%', uz: 'Yomon: <50%, Norma: 50–80%, Yaxshi: >80%' },
  'Плохо: <60%, Норма: 60–85%, Хорошо: >85%': { en: 'Bad: <60%, Norm: 60–85%, Good: >85%', uz: 'Yomon: <60%, Norma: 60–85%, Yaxshi: >85%' },
  'Плохо: <55%, Норма: 55–80%, Хорошо: >80%': { en: 'Bad: <55%, Norm: 55–80%, Good: >80%', uz: 'Yomon: <55%, Norma: 55–80%, Yaxshi: >80%' },
  'Плохо: <50%, Норма: 50–75%, Хорошо: >75%': { en: 'Bad: <50%, Norm: 50–75%, Good: >75%', uz: 'Yomon: <50%, Norma: 50–75%, Yaxshi: >75%' },
  'Плохо: <40%, Норма: 40–70%, Хорошо: >70%': { en: 'Bad: <40%, Norm: 40–70%, Good: >70%', uz: 'Yomon: <40%, Norma: 40–70%, Yaxshi: >70%' },
  'Плохо: <60%, Норма: 60–80%, Хорошо: >80%': { en: 'Bad: <60%, Norm: 60–80%, Good: >80%', uz: 'Yomon: <60%, Norma: 60–80%, Yaxshi: >80%' },
  'Плохо: <65%, Норма: 65–82%, Хорошо: >82%': { en: 'Bad: <65%, Norm: 65–82%, Good: >82%', uz: 'Yomon: <65%, Norma: 65–82%, Yaxshi: >82%' },
  'Плохо: <55%, Норма: 55–75%, Хорошо: >75%': { en: 'Bad: <55%, Norm: 55–75%, Good: >75%', uz: 'Yomon: <55%, Norma: 55–75%, Yaxshi: >75%' },
  'Плохо: <60%, Норма: 60–78%, Хорошо: >78%': { en: 'Bad: <60%, Norm: 60–78%, Good: >78%', uz: 'Yomon: <60%, Norma: 60–78%, Yaxshi: >78%' },
  'Плохо: <50%, Норма: 50–72%, Хорошо: >72%': { en: 'Bad: <50%, Norm: 50–72%, Good: >72%', uz: 'Yomon: <50%, Norma: 50–72%, Yaxshi: >72%' },
  'Плохо: <90%, Норма: 90–98%, Хорошо: >98%': { en: 'Bad: <90%, Norm: 90–98%, Good: >98%', uz: 'Yomon: <90%, Norma: 90–98%, Yaxshi: >98%' },
  'Плохо: <95%, Норма: 95–99%, Хорошо: >99% (Enterprise: 99.9%)': { en: 'Bad: <95%, Norm: 95–99%, Good: >99% (Enterprise: 99.9%)', uz: 'Yomon: <95%, Norma: 95–99%, Yaxshi: >99% (Enterprise: 99.9%)' },
  'Плохо: <92%, Норма: 92–98%, Хорошо: >98%': { en: 'Bad: <92%, Norm: 92–98%, Good: >98%', uz: 'Yomon: <92%, Norma: 92–98%, Yaxshi: >98%' },
  'Плохо: <90%, Норма: 90–97%, Хорошо: >97%': { en: 'Bad: <90%, Norm: 90–97%, Good: >97%', uz: 'Yomon: <90%, Norma: 90–97%, Yaxshi: >97%' },
  'Плохо: <88%, Норма: 88–96%, Хорошо: >96%': { en: 'Bad: <88%, Norm: 88–96%, Good: >96%', uz: 'Yomon: <88%, Norma: 88–96%, Yaxshi: >96%' },

  // Burn Multiple
  'Отлично: <1, Хорошо: 1–1.5, Норма: 1.5–2, Плохо: >2': { en: 'Excellent: <1, Good: 1–1.5, Norm: 1.5–2, Bad: >2', uz: 'Ajoyib: <1, Yaxshi: 1–1.5, Norma: 1.5–2, Yomon: >2' },
  'Отлично: <1 (top decile), Хорошо: 1–1.5, Норма: 1.5–2.5, Плохо: >2.5': { en: 'Excellent: <1 (top decile), Good: 1–1.5, Norm: 1.5–2.5, Bad: >2.5', uz: 'Ajoyib: <1 (top decile), Yaxshi: 1–1.5, Norma: 1.5–2.5, Yomon: >2.5' },
  'Отлично: <1.5, Норма: 1.5–2.5, Плохо: >2.5': { en: 'Excellent: <1.5, Norm: 1.5–2.5, Bad: >2.5', uz: 'Ajoyib: <1.5, Norma: 1.5–2.5, Yomon: >2.5' },
  'Отлично: <1.2, Норма: 1.2–2, Плохо: >2': { en: 'Excellent: <1.2, Norm: 1.2–2, Bad: >2', uz: 'Ajoyib: <1.2, Norma: 1.2–2, Yomon: >2' },
  'Отлично: <1.5, Норма: 1.5–3, Плохо: >3': { en: 'Excellent: <1.5, Norm: 1.5–3, Bad: >3', uz: 'Ajoyib: <1.5, Norma: 1.5–3, Yomon: >3' },

  // Magic Number
  'Плохо: <0.5, Норма: 0.5–1, Хорошо: 1–1.5, Отлично: >1.5': { en: 'Bad: <0.5, Norm: 0.5–1, Good: 1–1.5, Excellent: >1.5', uz: 'Yomon: <0.5, Norma: 0.5–1, Yaxshi: 1–1.5, Ajoyib: >1.5' },
  'Плохо: <0.5, Норма: 0.5–0.75, Хорошо: 0.75–1, Отлично: >1': { en: 'Bad: <0.5, Norm: 0.5–0.75, Good: 0.75–1, Excellent: >1', uz: 'Yomon: <0.5, Norma: 0.5–0.75, Yaxshi: 0.75–1, Ajoyib: >1' },
  'Плохо: <0.7, Норма: 0.7–1.2, Хорошо: >1.2': { en: 'Bad: <0.7, Norm: 0.7–1.2, Good: >1.2', uz: 'Yomon: <0.7, Norma: 0.7–1.2, Yaxshi: >1.2' },
  'Плохо: <0.6, Норма: 0.6–1, Хорошо: >1': { en: 'Bad: <0.6, Norm: 0.6–1, Good: >1', uz: 'Yomon: <0.6, Norma: 0.6–1, Yaxshi: >1' },
  'Плохо: <0.4, Норма: 0.4–0.8, Хорошо: >0.8': { en: 'Bad: <0.4, Norm: 0.4–0.8, Good: >0.8', uz: 'Yomon: <0.4, Norma: 0.4–0.8, Yaxshi: >0.8' },

  // Rule of 40
  'Плохо: <20%, Норма: 20–40%, Хорошо: ≥40%, Отлично: >60%': { en: 'Bad: <20%, Norm: 20–40%, Good: ≥40%, Excellent: >60%', uz: 'Yomon: <20%, Norma: 20–40%, Yaxshi: ≥40%, Ajoyib: >60%' },
  'Плохо: <30%, Норма: 30–40%, Хорошо: 40–60%, Отлично: >60%': { en: 'Bad: <30%, Norm: 30–40%, Good: 40–60%, Excellent: >60%', uz: 'Yomon: <30%, Norma: 30–40%, Yaxshi: 40–60%, Ajoyib: >60%' },
  'Плохо: <15%, Норма: 15–30%, Хорошо: >30%': { en: 'Bad: <15%, Norm: 15–30%, Good: >30%', uz: 'Yomon: <15%, Norma: 15–30%, Yaxshi: >30%' },
  'Плохо: <20%, Норма: 20–35%, Хорошо: >35%': { en: 'Bad: <20%, Norm: 20–35%, Good: >35%', uz: 'Yomon: <20%, Norma: 20–35%, Yaxshi: >35%' },
  'Плохо: <10%, Норма: 10–25%, Хорошо: >25%': { en: 'Bad: <10%, Norm: 10–25%, Good: >25%', uz: 'Yomon: <10%, Norma: 10–25%, Yaxshi: >25%' },

  // Quick Ratio
  'Плохо: <1, Норма: 1–2, Хорошо: 2–4, Отлично: >4': { en: 'Bad: <1, Norm: 1–2, Good: 2–4, Excellent: >4', uz: 'Yomon: <1, Norma: 1–2, Yaxshi: 2–4, Ajoyib: >4' },
  'Плохо: <2, Норма: 2–4, Хорошо: 4–6, Отлично: >6 (Bessemer benchmark)': { en: 'Bad: <2, Norm: 2–4, Good: 4–6, Excellent: >6 (Bessemer benchmark)', uz: 'Yomon: <2, Norma: 2–4, Yaxshi: 4–6, Ajoyib: >6 (Bessemer benchmark)' },
  'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3': { en: 'Bad: <1.5, Norm: 1.5–3, Good: >3', uz: 'Yomon: <1.5, Norma: 1.5–3, Yaxshi: >3' },
  'Плохо: <2, Норма: 2–4, Хорошо: >4': { en: 'Bad: <2, Norm: 2–4, Good: >4', uz: 'Yomon: <2, Norma: 2–4, Yaxshi: >4' },

  // Finance new metrics
  'Низко: <40%, Норма: 40–70%, Хорошо: 70–80%, Отлично: >80%': { en: 'Low: <40%, Norm: 40–70%, Good: 70–80%, Excellent: >80%', uz: 'Past: <40%, Norma: 40–70%, Yaxshi: 70–80%, Ajoyib: >80%' },
  'Плохо: <60%, Норма: 60–75%, Хорошо: 75–85%, Отлично: >85%': { en: 'Bad: <60%, Norm: 60–75%, Good: 75–85%, Excellent: >85%', uz: 'Yomon: <60%, Norma: 60–75%, Yaxshi: 75–85%, Ajoyib: >85%' },
  'Плохо: <30%, Норма: 30–45%, Хорошо: >45%': { en: 'Bad: <30%, Norm: 30–45%, Good: >45%', uz: 'Yomon: <30%, Norma: 30–45%, Yaxshi: >45%' },
  'Плохо: <50%, Норма: 50–70%, Хорошо: >70%': { en: 'Bad: <50%, Norm: 50–70%, Good: >70%', uz: 'Yomon: <50%, Norma: 50–70%, Yaxshi: >70%' },
  'Плохо: <40%, Норма: 40–60%, Хорошо: >60%': { en: 'Bad: <40%, Norm: 40–60%, Good: >60%', uz: 'Yomon: <40%, Norma: 40–60%, Yaxshi: >60%' },

  'Критично: <6 мес, Рисковано: 6–12, Норма: 12–18, Хорошо: >18': { en: 'Critical: <6 mo, Risky: 6–12, Norm: 12–18, Good: >18', uz: 'Kritik: <6 oy, Xavfli: 6–12, Norma: 12–18, Yaxshi: >18' },
  'Pre-seed/seed: 18–24 мес — норма; Series A+: >18 мес': { en: 'Pre-seed/seed: 18–24 mo — norm; Series A+: >18 mo', uz: 'Pre-seed/seed: 18–24 oy — norma; Series A+: >18 oy' },
  'Зависит от сезонности; >12 мес страховка': { en: 'Depends on seasonality; >12 mo as buffer', uz: 'Mavsumiylikka bog‘liq; >12 oy zaxira' },
  'Норма для F2P: >12 мес (long monetization curve)': { en: 'Norm for F2P: >12 mo (long monetization curve)', uz: 'F2P uchun norma: >12 oy (uzun monetizatsiya egri chizig‘i)' },
  'Норма: >12 мес (медленная монетизация контента)': { en: 'Norm: >12 mo (slow content monetization)', uz: 'Norma: >12 oy (sekin kontent monetizatsiyasi)' },

  'Контекст: соотношение с Runway и Net New ARR (см. Burn Multiple)': { en: 'Context: ratio to Runway and Net New ARR (see Burn Multiple)', uz: 'Kontekst: Runway va Net New ARR ga nisbat (Burn Multiple ni qarang)' },

  'Главное — рост MoM/QoQ, не абсолютное число': { en: 'Main thing — MoM/QoQ growth, not the absolute number', uz: 'Asosiy narsa — MoM/QoQ o‘sish, absolyut son emas' },
  'Цель: рост ≥ 20% QoQ. Ускорители: ACV ↑, win rate ↑, цикл ↓': { en: 'Target: growth ≥ 20% QoQ. Accelerators: ACV ↑, win rate ↑, cycle ↓', uz: 'Maqsad: o‘sish ≥ 20% QoQ. Tezlatgichlar: ACV ↑, win rate ↑, tsikl ↓' },
  'Применимо для enterprise B2B-направления e-com': { en: 'Applies to enterprise B2B segment of e-com', uz: 'E-com ning enterprise B2B yo‘nalishi uchun qo‘llaniladi' },
  'Применимо для B2B mobile-инструментов': { en: 'Applies to B2B mobile tools', uz: 'B2B mobil vositalari uchun qo‘llaniladi' },
  'Применимо для ad sales команд': { en: 'Applies to ad sales teams', uz: 'Ad sales jamoalari uchun qo‘llaniladi' },

  // Win Rate
  'Плохо: <15%, Норма: 15–25%, Хорошо: 25–35%, Отлично: >35%': { en: 'Bad: <15%, Norm: 15–25%, Good: 25–35%, Excellent: >35%', uz: 'Yomon: <15%, Norma: 15–25%, Yaxshi: 25–35%, Ajoyib: >35%' },
  'B2B SaaS норма: 20–25%, SMB sales 25–35%, mid-market 18–28%': { en: 'B2B SaaS norm: 20–25%, SMB sales 25–35%, mid-market 18–28%', uz: 'B2B SaaS norma: 20–25%, SMB sotuvi 25–35%, mid-market 18–28%' },
  'Конверсия в покупку: 1–4% (не B2B win rate)': { en: 'Purchase conversion: 1–4% (not B2B win rate)', uz: 'Xaridga konversiya: 1–4% (B2B win rate emas)' },
  'B2B mobile sales: 18–30%': { en: 'B2B mobile sales: 18–30%', uz: 'B2B mobil sotuvi: 18–30%' },
  'Ad sales: 20–35%': { en: 'Ad sales: 20–35%', uz: 'Ad sales: 20–35%' },

  // Pipeline Coverage
  'Плохо: <2x, Норма: 2–3x, Хорошо: 3–4x, Отлично: >4x': { en: 'Bad: <2x, Norm: 2–3x, Good: 3–4x, Excellent: >4x', uz: 'Yomon: <2x, Norma: 2–3x, Yaxshi: 3–4x, Ajoyib: >4x' },
  'B2B SaaS: 3–4× от quota — стандарт; new logo sales: 4–6×': { en: 'B2B SaaS: 3–4× of quota — standard; new logo sales: 4–6×', uz: 'B2B SaaS: kvotaning 3–4× — standart; new logo sales: 4–6×' },
  'B2B-направление: 3× от плана': { en: 'B2B segment: 3× of plan', uz: 'B2B yo‘nalish: rejaning 3×' },
  '3–4×': { en: '3–4×', uz: '3–4×' },
  '3–4× от целей по ad-revenue': { en: '3–4× of ad-revenue targets', uz: 'ad-revenue maqsadlarining 3–4×' },

  // Time to Value
  'Мгновенно: <1 день, Быстро: 1–7, Норма: 7–30, Медленно: >30': { en: 'Instant: <1 day, Fast: 1–7, Norm: 7–30, Slow: >30', uz: 'Lahzali: <1 kun, Tez: 1–7, Norma: 7–30, Sekin: >30' },
  'PLG: <1 день, B2B sales-led: 1–14, Enterprise: 14–90 (с onboarding)': { en: 'PLG: <1 day, B2B sales-led: 1–14, Enterprise: 14–90 (with onboarding)', uz: 'PLG: <1 kun, B2B sales-led: 1–14, Enterprise: 14–90 (onboarding bilan)' },
  'Мгновенно после первой покупки. Days to first repeat: 14–30': { en: 'Instant after first purchase. Days to first repeat: 14–30', uz: 'Birinchi xariddan keyin lahzali. Birinchi takror xaridgacha: 14–30 kun' },
  'Должно быть <1 день — иначе D1 retention упадёт': { en: 'Should be <1 day — otherwise D1 retention will drop', uz: '<1 kun bo‘lishi kerak — aks holda D1 retention tushadi' },
  'Мгновенно при первой релевантной статье': { en: 'Instant on the first relevant article', uz: 'Birinchi tegishli maqolada lahzali' },

  // ARPDAU
  'Менее релевантно — используйте ARPU/MRR per customer': { en: 'Less relevant — use ARPU/MRR per customer', uz: 'Kamroq tegishli — ARPU/MRR per customer dan foydalaning' },
  'Менее релевантно — используйте AOV и repeat rate': { en: 'Less relevant — use AOV and repeat rate', uz: 'Kamroq tegishli — AOV va repeat rate dan foydalaning' },
  'F2P top tier: $0.30–$1, mid: $0.10–$0.30, низко: <$0.05': { en: 'F2P top tier: $0.30–$1, mid: $0.10–$0.30, low: <$0.05', uz: 'F2P top tier: $0.30–$1, o‘rta: $0.10–$0.30, past: <$0.05' },
  'Подписка: $0.10–$0.50, реклама: $0.02–$0.20': { en: 'Subscription: $0.10–$0.50, ads: $0.02–$0.20', uz: 'Obuna: $0.10–$0.50, reklama: $0.02–$0.20' }
};

window._tThresh = function(ruText) {
  if (!ruText) return ruText;
  if (!window._currentLang || window._currentLang() === 'ru') return ruText;
  const entry = window.I18N_THRESH[ruText];
  if (!entry) return ruText;
  return entry[window._currentLang()] || ruText;
};

// ============================================================
// I18N_GOAL — translation lookup for Goal mode strings
// (ask, hint, solveFor.label, fixed[].label) keyed by exact RU.
// ============================================================
window.I18N_GOAL = {
  // === LTV:CAC ===
  'При LTV и целевом LTV:CAC ratio — какой максимум CAC?': { en: 'Given LTV and target LTV:CAC ratio — what is the maximum CAC?', uz: 'LTV va maqsadli LTV:CAC nisbati bo‘yicha — maksimal CAC qancha?' },
  'При CAC и целевом ratio — какой нужен LTV?': { en: 'Given CAC and target ratio — what LTV do you need?', uz: 'CAC va maqsadli nisbat bo‘yicha — qanday LTV kerak?' },
  'Если CAC будет ниже этого значения — соотношение LTV:CAC выше целевого.': { en: 'If CAC is below this value — the LTV:CAC ratio exceeds the target.', uz: 'Agar CAC bu qiymatdan past bo‘lsa — LTV:CAC nisbati maqsaddan yuqori.' },
  'Чтобы достичь целевого ratio, нужен LTV не меньше этого.': { en: 'To hit the target ratio, you need LTV at least this much.', uz: 'Maqsadli nisbatga erishish uchun LTV kamida shu qadar bo‘lishi kerak.' },
  'Максимум CAC': { en: 'Maximum CAC', uz: 'Maksimal CAC' },
  'Минимум LTV': { en: 'Minimum LTV', uz: 'Minimal LTV' },
  'LTV': { en: 'LTV', uz: 'LTV' },
  'CAC': { en: 'CAC', uz: 'CAC' },
  'Целевой LTV:CAC': { en: 'Target LTV:CAC', uz: 'Maqsadli LTV:CAC' },

  // === CAC Payback ===
  'При CAC, MRR на клиента и целевом payback — какая нужна маржа?': { en: 'Given CAC, MRR per customer, and target payback — what margin is needed?', uz: 'CAC, mijoz boshiga MRR va maqsadli payback bo‘yicha — qanday marja kerak?' },
  'При MRR на клиента, марже и целевом payback — какой максимум CAC?': { en: 'Given MRR per customer, margin, and target payback — what is the maximum CAC?', uz: 'Mijoz boshiga MRR, marja va maqsadli payback bo‘yicha — maksimal CAC qancha?' },
  'При меньшей марже окупаемость превысит целевую.': { en: 'With a lower margin, payback will exceed the target.', uz: 'Past marja bilan payback maqsaddan oshib ketadi.' },
  'CAC ниже — payback укладывается в целевой.': { en: 'Lower CAC — payback fits within the target.', uz: 'Past CAC — payback maqsadga sig‘adi.' },
  'Минимум маржи': { en: 'Minimum margin', uz: 'Minimal marja' },
  'MRR на клиента': { en: 'MRR per customer', uz: 'Mijoz boshiga MRR' },
  'Целевой payback': { en: 'Target payback', uz: 'Maqsadli payback' },
  'Маржа': { en: 'Margin', uz: 'Marja' },

  // === Burn Multiple ===
  'При Net Burn и целевом Burn Multiple — какой нужен Net New ARR?': { en: 'Given Net Burn and target Burn Multiple — what Net New ARR is required?', uz: 'Net Burn va maqsadli Burn Multiple bo‘yicha — qanday Net New ARR kerak?' },
  'При Net New ARR и целевом Burn Multiple — какой максимум Net Burn?': { en: 'Given Net New ARR and target Burn Multiple — what is the maximum Net Burn?', uz: 'Net New ARR va maqsadli Burn Multiple bo‘yicha — maksimal Net Burn qancha?' },
  'При большем приросте ARR — Burn Multiple ниже целевого.': { en: 'Higher ARR growth — Burn Multiple stays below target.', uz: 'Kattaroq ARR o‘sishi — Burn Multiple maqsaddan past.' },
  'Сжигаем больше — превышаем целевой Burn Multiple.': { en: 'Burn more — exceed the target Burn Multiple.', uz: 'Ko‘proq sarflaymiz — maqsadli Burn Multiple dan oshamiz.' },
  'Минимум Net New ARR': { en: 'Minimum Net New ARR', uz: 'Minimal Net New ARR' },
  'Максимум Net Burn': { en: 'Maximum Net Burn', uz: 'Maksimal Net Burn' },
  'Net Burn': { en: 'Net Burn', uz: 'Net Burn' },
  'Net New ARR': { en: 'Net New ARR', uz: 'Net New ARR' },
  'Целевой Burn Multiple': { en: 'Target Burn Multiple', uz: 'Maqsadli Burn Multiple' },

  // === Rule of 40 ===
  'При марже EBITDA и целевом Rule of 40 — какой нужен рост?': { en: 'Given EBITDA margin and target Rule of 40 — what growth is needed?', uz: 'EBITDA marja va maqsadli Rule of 40 bo‘yicha — qanday o‘sish kerak?' },
  'При росте YoY и целевом Rule of 40 — какая нужна маржа?': { en: 'Given YoY growth and target Rule of 40 — what margin is needed?', uz: 'YoY o‘sish va maqsadli Rule of 40 bo‘yicha — qanday marja kerak?' },
  'При меньшем росте сумма не достигнет цели.': { en: 'With lower growth, the sum will not hit the target.', uz: 'Past o‘sish bilan yig‘indi maqsadga yetmaydi.' },
  'При меньшей марже сумма не достигнет цели.': { en: 'With lower margin, the sum will not hit the target.', uz: 'Past marja bilan yig‘indi maqsadga yetmaydi.' },
  'Минимум роста YoY': { en: 'Minimum YoY growth', uz: 'Minimal YoY o‘sish' },
  'Минимум маржи EBITDA': { en: 'Minimum EBITDA margin', uz: 'Minimal EBITDA marja' },
  'Маржа EBITDA': { en: 'EBITDA margin', uz: 'EBITDA marja' },
  'Целевой Rule of 40': { en: 'Target Rule of 40', uz: 'Maqsadli Rule of 40' },
  'Рост YoY': { en: 'YoY growth', uz: 'YoY o‘sish' },

  // === ROAS ===
  'При затратах на рекламу и целевом ROAS — какая нужна выручка?': { en: 'Given ad spend and target ROAS — what revenue is needed?', uz: 'Reklama xarajati va maqsadli ROAS bo‘yicha — qanday tushum kerak?' },
  'При выручке и целевом ROAS — какой максимум затрат?': { en: 'Given revenue and target ROAS — what is the maximum spend?', uz: 'Tushum va maqsadli ROAS bo‘yicha — maksimal xarajat qancha?' },
  'Это минимум, чтобы кампания дала целевой ROAS.': { en: 'This is the minimum for the campaign to hit target ROAS.', uz: 'Kampaniya maqsadli ROAS ni berishi uchun bu minimum.' },
  'Тратим больше — ROAS ниже целевого.': { en: 'Spend more — ROAS drops below target.', uz: 'Ko‘proq sarflaymiz — ROAS maqsaddan past.' },
  'Минимум выручки': { en: 'Minimum revenue', uz: 'Minimal tushum' },
  'Максимум затрат': { en: 'Maximum spend', uz: 'Maksimal xarajat' },
  'Затраты на рекламу': { en: 'Ad spend', uz: 'Reklama xarajati' },
  'Выручка от рекламы': { en: 'Ad revenue', uz: 'Reklamadan tushum' },
  'Целевой ROAS': { en: 'Target ROAS', uz: 'Maqsadli ROAS' },

  // === CR ===
  'При посетителях и целевом CR — сколько нужно конверсий?': { en: 'Given visitors and target CR — how many conversions are needed?', uz: 'Tashrif buyuruvchilar va maqsadli CR bo‘yicha — qancha konversiya kerak?' },
  'При конверсиях и целевом CR — сколько нужно посетителей (максимум)?': { en: 'Given conversions and target CR — how many visitors (maximum)?', uz: 'Konversiyalar va maqsadli CR bo‘yicha — qancha tashrif buyuruvchi (maksimum)?' },
  'Целое число ≥ этого даст требуемый CR.': { en: 'An integer ≥ this gives the required CR.', uz: 'Bu yoki katta butun son kerakli CR ni beradi.' },
  'Большее число посетителей — CR ниже целевого.': { en: 'More visitors — CR drops below target.', uz: 'Ko‘proq tashrif buyuruvchilar — CR maqsaddan past.' },
  'Минимум конверсий': { en: 'Minimum conversions', uz: 'Minimal konversiyalar' },
  'Максимум посетителей': { en: 'Maximum visitors', uz: 'Maksimal tashrif buyuruvchilar' },
  'Посетители': { en: 'Visitors', uz: 'Tashrif buyuruvchilar' },
  'Конверсии': { en: 'Conversions', uz: 'Konversiyalar' },
  'Целевой CR': { en: 'Target CR', uz: 'Maqsadli CR' },

  // === Churn ===
  'При начальной базе и целевом Churn — сколько максимум допустимо потерять?': { en: 'Given starting base and target Churn — what is the maximum allowable loss?', uz: 'Boshlang‘ich baza va maqsadli Churn bo‘yicha — maksimal qancha yo‘qotish mumkin?' },
  'Больше ушедших — Churn выше целевого.': { en: 'More leavers — Churn exceeds target.', uz: 'Ko‘proq ketganlar — Churn maqsaddan yuqori.' },
  'Максимум ушедших': { en: 'Maximum churned', uz: 'Maksimal ketganlar' },
  'База на начало периода': { en: 'Base at start of period', uz: 'Davr boshidagi baza' },
  'Целевой Churn': { en: 'Target Churn', uz: 'Maqsadli Churn' },

  // === NRR ===
  'При начальном MRR, оттоке и целевом NRR — какой нужен апсел?': { en: 'Given starting MRR, churn, and target NRR — what upsell is needed?', uz: 'Boshlang‘ich MRR, churn va maqsadli NRR bo‘yicha — qanday apsel kerak?' },
  'При меньших апселах NRR не достигнет цели.': { en: 'With lower upsells, NRR will not hit the target.', uz: 'Pastroq apsellar bilan NRR maqsadga yetmaydi.' },
  'Минимум апселов': { en: 'Minimum upsells', uz: 'Minimal apsellar' },
  'Начальный MRR': { en: 'Starting MRR', uz: 'Boshlang‘ich MRR' },
  'Отток MRR': { en: 'Churn MRR', uz: 'Churn MRR' },
  'Целевой NRR': { en: 'Target NRR', uz: 'Maqsadli NRR' },

  // === Runway ===
  'При целевом runway и текущем сжигании — сколько нужно поднять / иметь кэша?': { en: 'Given target runway and current burn — how much cash to raise / have?', uz: 'Maqsadli runway va joriy burn bo‘yicha — qancha pul yig‘ish / bo‘lishi kerak?' },
  'При кэше и целевом runway — какой максимум сжигания?': { en: 'Given cash and target runway — what is the maximum burn?', uz: 'Pul va maqsadli runway bo‘yicha — maksimal burn qancha?' },
  'Чтобы получить нужный runway — поднимите столько в раунде.': { en: 'To get the desired runway — raise this much in the round.', uz: 'Kerakli runway uchun — raundda shu qadar yig‘ing.' },
  'Если сжигание выше — runway короче целевого. Режьте затраты.': { en: 'If burn is higher — runway is shorter than target. Cut costs.', uz: 'Agar burn yuqori bo‘lsa — runway maqsaddan qisqaroq. Xarajatlarni qisqartiring.' },
  'Минимум кэша': { en: 'Minimum cash', uz: 'Minimal pul' },
  'Максимум месячного сжигания': { en: 'Maximum monthly burn', uz: 'Maksimal oylik burn' },
  'Кэш на счёте': { en: 'Cash on hand', uz: 'Mavjud pul' },
  'Месячное сжигание': { en: 'Monthly burn', uz: 'Oylik burn' },
  'Целевой runway': { en: 'Target runway', uz: 'Maqsadli runway' },

  // === Gross Margin ===
  'При выручке и целевой марже — какой максимум COGS?': { en: 'Given revenue and target margin — what is the maximum COGS?', uz: 'Tushum va maqsadli marja bo‘yicha — maksimal COGS qancha?' },
  'COGS ниже этого — маржа выше целевой.': { en: 'COGS below this — margin exceeds target.', uz: 'Bu darajadan past COGS — marja maqsaddan yuqori.' },
  'Максимум COGS': { en: 'Maximum COGS', uz: 'Maksimal COGS' },
  'Выручка': { en: 'Revenue', uz: 'Tushum' },
  'Целевая маржа': { en: 'Target margin', uz: 'Maqsadli marja' },

  // === Sales Velocity ===
  'При opps, ACV, win rate и целевой velocity — какой нужен цикл?': { en: 'Given opps, ACV, win rate, and target velocity — what cycle length is needed?', uz: 'Opps, ACV, win rate va maqsadli velocity bo‘yicha — qanday tsikl kerak?' },
  'Цикл длиннее — velocity ниже цели. Ускоряйте процесс продажи.': { en: 'Longer cycle — velocity drops below target. Accelerate the sales process.', uz: 'Uzunroq tsikl — velocity maqsaddan past. Sotuv jarayonini tezlashtiring.' },
  'Максимум длины цикла': { en: 'Maximum cycle length', uz: 'Maksimal tsikl uzunligi' },
  'Активные opps': { en: 'Active opps', uz: 'Faol opps' },
  'ACV': { en: 'ACV', uz: 'ACV' },
  'Win Rate': { en: 'Win Rate', uz: 'Win Rate' },
  'Целевая velocity': { en: 'Target velocity', uz: 'Maqsadli velocity' },

  // === Win Rate ===
  'При закрытых сделках и целевом win rate — сколько максимум lost?': { en: 'Given closed deals and target win rate — how many losses maximum?', uz: 'Yopilgan bitimlar va maqsadli win rate bo‘yicha — maksimum qancha yo‘qotish?' },
  'Lost больше — win rate ниже целевого. Улучшайте qualification.': { en: 'More losses — win rate below target. Improve qualification.', uz: 'Ko‘proq yo‘qotish — win rate maqsaddan past. Qualification ni yaxshilang.' },
  'Максимум lost': { en: 'Maximum lost', uz: 'Maksimal yo‘qotilgan' },
  'Closed Won': { en: 'Closed Won', uz: 'Closed Won' },
  'Целевой Win Rate': { en: 'Target Win Rate', uz: 'Maqsadli Win Rate' },

  // === Pipeline Coverage ===
  'При quota и целевом coverage — какой нужен pipeline?': { en: 'Given quota and target coverage — what pipeline is needed?', uz: 'Kvota va maqsadli coverage bo‘yicha — qanday pipeline kerak?' },
  'Меньше pipeline — рискуете не закрыть план.': { en: 'Less pipeline — you risk missing the plan.', uz: 'Kamroq pipeline — rejani yopa olmaslik xavfi.' },
  'Минимум pipeline': { en: 'Minimum pipeline', uz: 'Minimal pipeline' },
  'Цель по выручке': { en: 'Revenue target', uz: 'Tushum bo‘yicha maqsad' },
  'Целевое coverage': { en: 'Target coverage', uz: 'Maqsadli coverage' },

  // === ARPDAU ===
  'При DAU и целевом ARPDAU — какая нужна дневная выручка?': { en: 'Given DAU and target ARPDAU — what daily revenue is needed?', uz: 'DAU va maqsadli ARPDAU bo‘yicha — qanday kunlik tushum kerak?' },
  'Меньше выручки — ARPDAU ниже целевого.': { en: 'Less revenue — ARPDAU below target.', uz: 'Kamroq tushum — ARPDAU maqsaddan past.' },
  'Минимум дневной выручки': { en: 'Minimum daily revenue', uz: 'Minimal kunlik tushum' },
  'DAU': { en: 'DAU', uz: 'DAU' },
  'Целевой ARPDAU': { en: 'Target ARPDAU', uz: 'Maqsadli ARPDAU' },

  // === New-metric goal mode (CPA / CPL / CPI / CPM / MER / Take Rate / Contribution Margin / Quota / Cart Abandonment / Open Rate / CTOR) ===
  'При затратах и целевом CPA — сколько нужно целевых действий?': { en: 'Given spend and target CPA — how many actions are needed?', uz: 'Sarf va maqsadli CPA bo‘yicha — nechta maqsadli harakat kerak?' },
  'Меньше действий — CPA выше целевого.': { en: 'Fewer actions — CPA above target.', uz: 'Kamroq harakat — CPA maqsaddan yuqori.' },
  'Минимум целевых действий': { en: 'Minimum actions', uz: 'Minimal harakatlar' },
  'Затраты': { en: 'Spend', uz: 'Sarf' },
  'Целевой CPA': { en: 'Target CPA', uz: 'Maqsadli CPA' },

  'При затратах и целевом CPL — сколько нужно лидов?': { en: 'Given spend and target CPL — how many leads are needed?', uz: 'Sarf va maqsadli CPL bo‘yicha — nechta lid kerak?' },
  'Меньше лидов — CPL выше целевого.': { en: 'Fewer leads — CPL above target.', uz: 'Kamroq lid — CPL maqsaddan yuqori.' },
  'Минимум лидов': { en: 'Minimum leads', uz: 'Minimal lidlar' },
  'Целевой CPL': { en: 'Target CPL', uz: 'Maqsadli CPL' },

  'При затратах и целевом CPI — сколько нужно установок?': { en: 'Given spend and target CPI — how many installs are needed?', uz: 'Sarf va maqsadli CPI bo‘yicha — nechta o‘rnatish kerak?' },
  'Меньше установок — CPI выше целевого.': { en: 'Fewer installs — CPI above target.', uz: 'Kamroq o‘rnatish — CPI maqsaddan yuqori.' },
  'Минимум установок': { en: 'Minimum installs', uz: 'Minimal o‘rnatishlar' },
  'Целевой CPI': { en: 'Target CPI', uz: 'Maqsadli CPI' },

  'При показах и целевом CPM — какой максимум затрат?': { en: 'Given impressions and target CPM — what is the maximum spend?', uz: 'Ko‘rsatishlar va maqsadli CPM bo‘yicha — maksimal sarf qancha?' },
  'Тратите больше — CPM выше целевого.': { en: 'Spend more — CPM above target.', uz: 'Ko‘proq sarflasangiz — CPM maqsaddan yuqori.' },
  'Показы': { en: 'Impressions', uz: 'Ko‘rsatishlar' },
  'Целевой CPM': { en: 'Target CPM', uz: 'Maqsadli CPM' },

  'При маркетинговых затратах и целевом MER — какая нужна выручка?': { en: 'Given marketing spend and target MER — what revenue is needed?', uz: 'Marketing sarfi va maqsadli MER bo‘yicha — qancha tushum kerak?' },
  'Меньше выручки — MER ниже целевого.': { en: 'Less revenue — MER below target.', uz: 'Kamroq tushum — MER maqsaddan past.' },
  'Маркетинговые затраты': { en: 'Marketing spend', uz: 'Marketing sarfi' },
  'Целевой MER': { en: 'Target MER', uz: 'Maqsadli MER' },

  'При GMV и целевом Take Rate — какая нужна выручка платформы?': { en: 'Given GMV and target Take Rate — what platform revenue is needed?', uz: 'GMV va maqsadli Take Rate bo‘yicha — platforma tushumi qancha kerak?' },
  'Меньше выручки — Take Rate ниже целевого.': { en: 'Less revenue — Take Rate below target.', uz: 'Kamroq tushum — Take Rate maqsaddan past.' },
  'Минимум выручки платформы': { en: 'Minimum platform revenue', uz: 'Minimal platforma tushumi' },
  'GMV (оборот)': { en: 'GMV', uz: 'GMV (aylanma)' },
  'Целевой Take Rate': { en: 'Target Take Rate', uz: 'Maqsadli Take Rate' },

  'При выручке и целевой Contribution Margin — какой максимум переменных затрат?': { en: 'Given revenue and target Contribution Margin — what is the maximum variable cost?', uz: 'Tushum va maqsadli Contribution Margin bo‘yicha — o‘zgaruvchan xarajatlar maksimumi qancha?' },
  'Переменные затраты ниже — маржа выше целевой.': { en: 'Lower variable costs — margin above target.', uz: 'O‘zgaruvchan xarajatlar pastroq — marja maqsaddan yuqori.' },
  'Максимум переменных затрат': { en: 'Maximum variable costs', uz: 'Maksimal o‘zgaruvchan xarajatlar' },
  'Целевая Contribution Margin': { en: 'Target Contribution Margin', uz: 'Maqsadli Contribution Margin' },

  'При квоте и целевом выполнении — сколько нужно продать?': { en: 'Given quota and target attainment — how much must you sell?', uz: 'Kvota va maqsadli bajarish bo‘yicha — qancha sotish kerak?' },
  'Меньше продаж — выполнение ниже целевого.': { en: 'Fewer sales — attainment below target.', uz: 'Kamroq sotuv — bajarish maqsaddan past.' },
  'Минимум факта продаж': { en: 'Minimum actual sales', uz: 'Minimal haqiqiy sotuv' },
  'Квота (план)': { en: 'Quota (plan)', uz: 'Kvota (reja)' },
  'Целевое выполнение': { en: 'Target attainment', uz: 'Maqsadli bajarish' },

  'При корзинах и целевом проценте брошенных — сколько нужно покупок?': { en: 'Given carts and target abandonment rate — how many purchases are needed?', uz: 'Savatlar va maqsadli tashlab ketish foizi bo‘yicha — nechta xarid kerak?' },
  'Меньше покупок — выше процент брошенных корзин.': { en: 'Fewer purchases — higher cart abandonment rate.', uz: 'Kamroq xarid — savat tashlab ketish foizi yuqoriroq.' },
  'Минимум покупок': { en: 'Minimum purchases', uz: 'Minimal xaridlar' },
  'Созданные корзины': { en: 'Carts created', uz: 'Yaratilgan savatlar' },
  'Целевой % брошенных': { en: 'Target abandonment %', uz: 'Maqsadli tashlab ketish %' },

  'При доставленных письмах и целевом Open Rate — сколько нужно открытий?': { en: 'Given delivered emails and target Open Rate — how many opens are needed?', uz: 'Yetkazilgan xatlar va maqsadli Open Rate bo‘yicha — nechta ochilish kerak?' },
  'Меньше открытий — Open Rate ниже целевого.': { en: 'Fewer opens — Open Rate below target.', uz: 'Kamroq ochilish — Open Rate maqsaddan past.' },
  'Минимум открытий': { en: 'Minimum opens', uz: 'Minimal ochilishlar' },
  'Доставлено писем': { en: 'Emails delivered', uz: 'Yetkazilgan xatlar' },
  'Целевой Open Rate': { en: 'Target Open Rate', uz: 'Maqsadli Open Rate' },

  'При открытиях и целевом CTOR — сколько нужно кликов?': { en: 'Given opens and target CTOR — how many clicks are needed?', uz: 'Ochilishlar va maqsadli CTOR bo‘yicha — nechta klik kerak?' },
  'Меньше кликов — CTOR ниже целевого.': { en: 'Fewer clicks — CTOR below target.', uz: 'Kamroq klik — CTOR maqsaddan past.' },
  'Минимум кликов': { en: 'Minimum clicks', uz: 'Minimal kliklar' },
  'Уникальные открытия': { en: 'Unique opens', uz: 'Noyob ochilishlar' },
  'Целевой CTOR': { en: 'Target CTOR', uz: 'Maqsadli CTOR' }
};

window._tGoal = function(ruText) {
  if (!ruText) return ruText;
  if (!window._currentLang || window._currentLang() === 'ru') return ruText;
  const entry = window.I18N_GOAL[ruText];
  if (!entry) return ruText;
  return entry[window._currentLang()] || ruText;
};

// ============================================================
// I18N_TOOLTIP — input help text translations keyed by RU.
// ============================================================
window.I18N_TOOLTIP = {
  // LTV
  'Average Order Value: общая выручка / число заказов за тот же период. Не путать с ARPU.': { en: 'Average Order Value: total revenue / number of orders for the period. Not the same as ARPU.', uz: 'Average Order Value: davr boshiga umumiy tushum / buyurtmalar soni. ARPU bilan adashtirmang.' },
  'Сколько раз в год средний клиент покупает. Для подписки = 12 (помесячно) или 1 (годовая).': { en: 'How many times a year an average customer purchases. Subscription = 12 (monthly) or 1 (annual).', uz: 'O‘rtacha mijoz yiliga necha marta sotib oladi. Obuna = 12 (oylik) yoki 1 (yillik).' },
  'Если знаете annual churn: life ≈ 1 / churn. Для retention 80% — life ≈ 5 лет.': { en: 'If you know annual churn: life ≈ 1 / churn. For 80% retention — life ≈ 5 years.', uz: 'Yillik churn ni bilsangiz: umr ≈ 1 / churn. 80% retention uchun — umr ≈ 5 yil.' },

  // CAC
  'Полные расходы на привлечение: реклама + сейлы + контент + ЗП маркетинг-команды. Учитывайте всё, не только performance-бюджет.': { en: 'Full acquisition cost: ads + sales + content + marketing salaries. Count everything, not just performance budget.', uz: 'To‘liq jalb qilish xarajati: reklama + sotuv + kontent + marketing maoshlari. Hammasini hisobga oling, faqat performance byudjet emas.' },
  'Только платящие клиенты, привлечённые за тот же период. Не путать с регистрациями/триалами.': { en: 'Only paying customers acquired in the same period. Not signups or trials.', uz: 'Faqat shu davrda jalb qilingan to‘lovchi mijozlar. Ro‘yxatdan o‘tgan/trial bilan adashtirmang.' },

  // Churn
  'Customer churn (отписались / отменили). Не путать с revenue churn — это считается через GRR.': { en: 'Customer churn (unsubscribed / cancelled). Not revenue churn — that is computed via GRR.', uz: 'Mijoz churn (obunadan chiqqan / bekor qilgan). Revenue churn bilan adashtirmang — u GRR orqali hisoblanadi.' },
  'Размер базы активных подписчиков на первый день периода. Новые приходящие в течение периода не учитываются.': { en: 'Size of the active subscriber base on day one of the period. New signups during the period are not counted.', uz: 'Davrning birinchi kunidagi faol obunachilar bazasi hajmi. Davr ichidagi yangi obunachilar hisoblanmaydi.' },

  // NRR
  'MRR от существующих клиентов на первый день периода (без новых).': { en: 'MRR from existing customers on day one of the period (excluding new).', uz: 'Davrning birinchi kunidagi mavjud mijozlardan MRR (yangilarisiz).' },
  'Expansion MRR: апгрейды тарифов + увеличение seats + дополнительные продукты у уже существующей базы.': { en: 'Expansion MRR: plan upgrades + seat additions + extra products from existing base.', uz: 'Expansion MRR: tarif apgreydlari + seat qo‘shilishi + mavjud bazadan qo‘shimcha mahsulotlar.' },
  'Gross MRR Churn: ушедшие клиенты + даунгрейды (contraction). Только потери в когорте существующих.': { en: 'Gross MRR Churn: departed customers + downgrades (contraction). Only losses in the existing cohort.', uz: 'Gross MRR Churn: ketgan mijozlar + downgrade (qisqarish). Faqat mavjud kogortadagi yo‘qotishlar.' },

  // MRR
  'Нормализованная месячная выручка. Годовые контракты делятся на 12. Не включает one-time / setup fees.': { en: 'Normalized monthly revenue. Annual contracts are divided by 12. Excludes one-time / setup fees.', uz: 'Normalashtirilgan oylik tushum. Yillik shartnomalar 12 ga bo‘linadi. One-time / setup to‘lovlarisiz.' },

  // Burn Multiple
  'Чистое сжигание = Operating cash burn − все Non-operating inflows. Обычно считают за квартал.': { en: 'Net burn = Operating cash burn − all non-operating inflows. Usually computed quarterly.', uz: 'Net burn = Operating cash burn − barcha non-operating tushumlar. Odatda choraklik hisoblanadi.' },
  'Чистое сжигание за период = Все денежные траты − Все денежные поступления. Если cash-positive — введите отрицательное число.': { en: 'Net burn for the period = all cash spend − all cash inflows. If cash-positive, enter a negative number.', uz: 'Davr uchun net burn = barcha pul xarajati − barcha pul tushumi. Cash-positive bo‘lsa, manfiy son kiriting.' },
  'Net New ARR = Конечный ARR − Начальный ARR. Включает new + expansion − churn − contraction.': { en: 'Net New ARR = Ending ARR − Starting ARR. Includes new + expansion − churn − contraction.', uz: 'Net New ARR = Yakuniy ARR − Boshlang‘ich ARR. New + expansion − churn − contraction ni o‘z ichiga oladi.' },
  'Прирост ARR за период: Конечный − Начальный ARR. Включает new + expansion, минус churn и contraction.': { en: 'ARR growth for the period: Ending − Starting ARR. Includes new + expansion, minus churn and contraction.', uz: 'Davr uchun ARR o‘sishi: Yakuniy − Boshlang‘ich ARR. New + expansion, minus churn va contraction.' },

  // Magic Number
  'Прирост ARR за конкретный квартал (×4 в формуле даёт annualized).': { en: 'ARR growth for a specific quarter (×4 in the formula yields annualized).', uz: 'Aniq chorak uchun ARR o‘sishi (formuladagi ×4 yillik qiymatni beradi).' },
  'Полный S&M cost: payroll команды + платформы + реклама + комиссии. По P&L, не по cash.': { en: 'Full S&M cost: team payroll + tools + ads + commissions. Per P&L, not cash basis.', uz: 'To‘liq S&M xarajat: jamoa maoshi + platformalar + reklama + komissiyalar. P&L bo‘yicha, cash bo‘yicha emas.' },

  // Rule of 40
  'Год-к-году. Можно использовать как ARR growth, так и Revenue growth.': { en: 'Year-over-year. Either ARR growth or Revenue growth works.', uz: 'Yil-bo‘yicha-yil. ARR growth yoki Revenue growth ishlatish mumkin.' },
  'EBITDA margin или FCF margin (свободный денежный поток / выручка). Может быть отрицательной.': { en: 'EBITDA margin or FCF margin (free cash flow / revenue). May be negative.', uz: 'EBITDA marja yoki FCF marja (erkin pul oqimi / tushum). Salbiy bo‘lishi mumkin.' },

  // Quick Ratio
  'MRR от новых платящих клиентов за период.': { en: 'MRR from new paying customers in the period.', uz: 'Davr uchun yangi to‘lovchi mijozlardan MRR.' },
  'Прирост MRR от существующих: апгрейды плана, расширение seats, дополнительные продукты.': { en: 'MRR growth from existing: plan upgrades, seat expansions, extra products.', uz: 'Mavjud mijozlardan MRR o‘sishi: plan apgreydlari, seat kengayishi, qo‘shimcha mahsulotlar.' },
  'MRR ушедших клиентов (полная потеря).': { en: 'MRR from departed customers (full loss).', uz: 'Ketgan mijozlardan MRR (to‘liq yo‘qotish).' },
  'Сокращение MRR у оставшихся клиентов (даунгрейд тарифа, меньше seats).': { en: 'MRR contraction from retained customers (plan downgrade, fewer seats).', uz: 'Qolgan mijozlardan MRR qisqarishi (tarif downgrade, kamroq seat).' },

  // NPS
  'Готовы рекомендовать. Только 9 и 10 — даже 8 это «пассивные».': { en: 'Willing to recommend. Only 9 and 10 — even 8 counts as passive.', uz: 'Tavsiya qilishga tayyor. Faqat 9 va 10 — hatto 8 ham passiv hisoblanadi.' },
  'Недовольные. Любая оценка 0–6 (даже 6 это негатив для NPS).': { en: 'Unhappy. Any score 0–6 (even 6 is negative for NPS).', uz: 'Norozi. Har qanday 0–6 ball (hatto 6 ham NPS uchun salbiy).' },
  'Промоутеры + пассивные (7–8) + детракторы. Не путать с числом всех получивших опрос.': { en: 'Promoters + passives (7–8) + detractors. Not the count of all surveyed.', uz: 'Promouterlar + passivlar (7–8) + detraktorlar. So‘rov olganlarning umumiy soni bilan adashtirmang.' },

  // ROAS
  'Атрибутированная выручка от конкретной кампании / канала. Только то, что трекается обратно до рекламы.': { en: 'Attributed revenue from a specific campaign / channel. Only what tracks back to the ad.', uz: 'Aniq kampaniya / kanaldan atributlangan tushum. Faqat reklama orqali kuzatiladigan qism.' },
  'Полные media spend: бюджеты + комиссии агентств + production. Не включает зарплаты команды.': { en: 'Full media spend: budgets + agency fees + production. Excludes team salaries.', uz: 'To‘liq media spend: byudjetlar + agentlik komissiyalari + production. Jamoa maoshlarisiz.' }
};

window._tTooltip = function(ruText) {
  if (!ruText) return ruText;
  if (!window._currentLang || window._currentLang() === 'ru') return ruText;
  const entry = window.I18N_TOOLTIP[ruText];
  if (!entry) return ruText;
  return entry[window._currentLang()] || ruText;
};

(function() {
    const LS_KEY = 'metricsTree_v2';
    const LS_THEME = 'metricsTree_theme';
    const LS_CURRENCY = 'metricsTree_currency';
    const LS_LANG = 'metricsTree_lang';

    // ---- LANGUAGE ----
    let currentLang = 'ru';
    // 1. URL prefix /en/* or /uz/* takes precedence (deep-link from sitemap)
    try {
        const p = window.location.pathname || '';
        if (p.startsWith('/en/') || p === '/en') currentLang = 'en';
        else if (p.startsWith('/uz/') || p === '/uz') currentLang = 'uz';
        else {
            const l = localStorage.getItem(LS_LANG);
            if (l && (l === 'en' || l === 'uz')) currentLang = l;
        }
    } catch(e) {}

    function t(key, fallback) {
        if (currentLang === 'ru') return fallback || '';
        const dict = window.I18N_UI[currentLang];
        return (dict && dict[key]) || fallback || '';
    }
    function tm(metricId, field, fallback) {
        if (currentLang === 'ru') return fallback;
        const m = window.I18N_M[metricId];
        if (!m || !m[currentLang]) return fallback;
        return m[currentLang][field] || fallback;
    }
    function applyStaticTranslations() {
        // Перевод всех элементов с data-t атрибутом
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            const original = el.getAttribute('data-t-original') || el.innerHTML;
            if (!el.getAttribute('data-t-original')) {
                el.setAttribute('data-t-original', original);
            }
            const translated = t(key, el.getAttribute('data-t-original'));
            el.innerHTML = translated;
        });
        // Универсальный перевод произвольных атрибутов: data-t-attr-<attr>="key"
        // Например: data-t-attr-title="btn.share_tooltip" → переводит title="..."
        document.querySelectorAll('*').forEach(el => {
            Array.from(el.attributes).forEach(a => {
                if (!a.name.startsWith('data-t-attr-')) return;
                const attrName = a.name.slice('data-t-attr-'.length); // title, aria-label, placeholder
                const key = a.value;
                const origAttr = `data-t-${attrName}-original`;
                if (!el.getAttribute(origAttr)) el.setAttribute(origAttr, el.getAttribute(attrName) || '');
                el.setAttribute(attrName, t(key, el.getAttribute(origAttr)));
            });
        });
        // Атрибуты placeholder и aria-label у поиска (legacy путь — оставлен)
        const searchInp = document.getElementById('searchInput');
        if (searchInp) {
            if (!searchInp.getAttribute('data-t-placeholder-original')) searchInp.setAttribute('data-t-placeholder-original', searchInp.placeholder);
            searchInp.placeholder = t('search.placeholder', searchInp.getAttribute('data-t-placeholder-original'));
            if (!searchInp.getAttribute('data-t-aria-original')) searchInp.setAttribute('data-t-aria-original', searchInp.getAttribute('aria-label') || '');
            searchInp.setAttribute('aria-label', t('search.aria', searchInp.getAttribute('data-t-aria-original')));
        }
        // <html lang>
        document.documentElement.setAttribute('lang', currentLang);
    }
    function initLang() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
            btn.addEventListener('click', () => {
                currentLang = btn.dataset.lang;
                try { localStorage.setItem(LS_LANG, currentLang); } catch(e) {}
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
                applyStaticTranslations();
                renderMetricsList();
                renderMetricCard();
            });
        });
    }
    // Expose for use in render functions below
    window._tm = tm;
    window._t = t;
    window._currentLang = () => currentLang;

    // ---- Валюта (только меняет отображаемый символ; конвертация не делается) ----
    let currentCurrency = '$';
    try { const c = localStorage.getItem(LS_CURRENCY); if (c && /^[\$€₽£]$/.test(c)) currentCurrency = c; } catch(e) {}
    function localizeLabel(text) {
        if (typeof text !== 'string') return text;
        if (currentCurrency === '$') return text;
        return text.replace(/, \$/g, ', ' + currentCurrency).replace(/\$/g, currentCurrency);
    }
    function localizeUnit(unit) {
        if (unit === '$' && currentCurrency !== '$') return currentCurrency;
        return unit;
    }
    function initCurrency() {
        document.querySelectorAll('.currency-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.currency === currentCurrency);
            btn.addEventListener('click', () => {
                currentCurrency = btn.dataset.currency;
                try { localStorage.setItem(LS_CURRENCY, currentCurrency); } catch(e) {}
                document.querySelectorAll('.currency-btn').forEach(b => b.classList.toggle('active', b === btn));
                renderMetricCard();
            });
        });
    }

    // ---- EMBED MODE ----
    (function initEmbed(){
        const params = new URLSearchParams(window.location.search);
        if (params.get('embed') === '1' || params.get('embed') === 'true') {
            document.body.classList.add('embed');
            // В embed-режиме принудительно открыть указанную метрику (через ?m=)
            // restoreFromURL это сделает позже. Просто включаем класс.
        }
    })();

    // ---- Тема (с уважением к prefers-color-scheme при первой загрузке) ----
    (function initTheme() {
        let theme = localStorage.getItem(LS_THEME);
        if (!theme) {
            theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light' : 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('themeToggle').textContent = theme === 'dark' ? '🌙' : '☀️';
    })();

    document.getElementById('themeToggle').addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        document.getElementById('themeToggle').textContent = next === 'dark' ? '🌙' : '☀️';
        try { localStorage.setItem(LS_THEME, next); } catch {}
    });

    // ---- Загрузка/сохранение из localStorage ----
    function loadFromLS() {
        try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); } catch { return {}; }
    }
    function saveToLS(data) {
        try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch {}
    }

    let storedValues = loadFromLS();

    // ---- Валидация числа ----
    function sanitizeNumber(value) {
        const clean = String(value).replace(/[\u00A0 ]/g, '');
        const num = parseFloat(clean);
        return isNaN(num) ? null : num;
    }

    function formatNum(str) {
        const parts = String(str).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
        return parts.join('.');
    }

    function formatInputEl(el) {
        const raw = el.value;
        const pos = el.selectionStart;
        const digitsBefore = raw.slice(0, pos).replace(/\D/g, '').length;
        const clean = raw.replace(/[\u00A0 ]/g, '');
        if (!clean) return;
        const formatted = formatNum(clean);
        if (formatted === raw) return;
        el.value = formatted;
        // Restore cursor: place it after the same number of digits as before
        let count = 0, newPos = formatted.length;
        for (let i = 0; i < formatted.length; i++) {
            if (/\d/.test(formatted[i])) count++;
            if (count === digitsBefore && digitsBefore > 0) { newPos = i + 1; break; }
        }
        if (digitsBefore === 0) newPos = 0;
        el.setSelectionRange(newPos, newPos);
    }

    // ---- ДАННЫЕ МЕТРИК ----
    const metricsData = {
        b2c: {
            name: 'B2C',
            metrics: [
                {
                    id: 'dau', name: 'DAU',
                    formula: 'Уникальные пользователи за день',
                    description: 'Daily Active Users — количество уникальных пользователей, взаимодействовавших с продуктом за сутки.',
                    threshold: 'Метрика-счётчик. Оценивайте динамику MoM и через Stickiness',
                    inputs: [{ label: 'Уникальные пользователи (день)', placeholder: '12500', key: 'users', min: 0 }],
                    calculate: v => { const u = sanitizeNumber(v.users); return u !== null ? u : null; },
                    unit: 'чел',
                    insight: val => ({ color: '#2A6DF4', text: 'DAU — счётчик; «норма» зависит от стадии. Смотрите Stickiness (DAU/MAU) и MoM-рост.' })
                },
                {
                    id: 'mau', name: 'MAU',
                    formula: 'Уникальные пользователи за месяц',
                    description: 'Monthly Active Users — количество уникальных пользователей за последние 30 дней.',
                    threshold: 'Метрика-счётчик. Оценивайте динамику MoM и через Stickiness',
                    inputs: [{ label: 'Уникальные пользователи (месяц)', placeholder: '75400', key: 'users', min: 0 }],
                    calculate: v => { const u = sanitizeNumber(v.users); return u !== null ? u : null; },
                    unit: 'чел',
                    insight: val => ({ color: '#2A6DF4', text: 'MAU — счётчик; контекст важен. Сравнивайте через Stickiness, Retention и YoY-рост.' })
                },
                {
                    id: 'stickiness', name: 'Stickiness (DAU/MAU)',
                    formula: '(DAU / MAU) × 100%',
                    description: 'Показывает, какая доля месячной аудитории возвращается ежедневно. Чем выше — тем более «липкий» продукт.',
                    threshold: 'Плохо: <10%, Средне: 10–25%, Хорошо: >25%',
                    inputs: [
                        { label: 'DAU (дневные активные)', placeholder: '15000', key: 'dau', min: 0 },
                        { label: 'MAU (месячные активные)', placeholder: '100000', key: 'mau', min: 1 }
                    ],
                    calculate: v => {
                        const dau = sanitizeNumber(v.dau);
                        const mau = sanitizeNumber(v.mau);
                        if (dau === null || mau === null || mau <= 0) return null;
                        return ((dau / mau) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 10) return { color: '#F44336', text: 'Продукт не «липкий». Работайте над ежедневными привычками.' };
                        if (val < 25) return { color: '#FFC107', text: 'Средняя липкость. Добавьте daily use-cases.' };
                        return { color: '#4CAF50', text: 'Высокая липкость — пользователи возвращаются ежедневно!' };
                    }
                },
                {
                    id: 'retention', name: 'Retention',
                    formula: '(Пользователи на конец периода / Пользователи на начало) × 100%',
                    description: 'Доля пользователей, оставшихся активными через заданный промежуток времени (когортный анализ).',
                    threshold: 'Плохо: <30%, Средне: 30–60%, Хорошо: >60%',
                    inputs: [
                        { label: 'Активные пользователи на конец периода', placeholder: '600', key: 'end', min: 0 },
                        { label: 'Пользователи на начало периода (когорта)', placeholder: '1000', key: 'start', min: 1 }
                    ],
                    calculate: v => {
                        const end = sanitizeNumber(v.end);
                        const start = sanitizeNumber(v.start);
                        if (end === null || start === null || start <= 0) return null;
                        return ((end / start) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 30) return { color: '#F44336', text: 'Очень низкое удержание. Проверьте онбординг и ценность продукта.' };
                        if (val < 60) return { color: '#FFC107', text: 'Среднее удержание. Улучшайте вовлечение и коммуникацию.' };
                        return { color: '#4CAF50', text: 'Отличное удержание! Работает product-market fit.' };
                    }
                },
                {
                    id: 'ltv', name: 'LTV',
                    formula: 'AOV × Частота покупок в год × Время жизни (лет)',
                    description: 'Lifetime Value — сколько денег приносит клиент за всё время.',
                    threshold: 'Главное — соотношение к CAC: LTV:CAC > 3 норма, > 5 отлично',
                    inputs: [
                        { label: 'Средний чек (AOV), $', placeholder: '2500', key: 'aov', min: 0, help: 'Average Order Value: общая выручка / число заказов за тот же период. Не путать с ARPU.' },
                        { label: 'Частота покупок в год', placeholder: '2', key: 'freq', min: 0, help: 'Сколько раз в год средний клиент покупает. Для подписки = 12 (помесячно) или 1 (годовая).' },
                        { label: 'Среднее время жизни клиента (лет)', placeholder: '3', key: 'life', min: 0, help: 'Если знаете annual churn: life ≈ 1 / churn. Для retention 80% — life ≈ 5 лет.' }
                    ],
                    calculate: v => {
                        const aov = sanitizeNumber(v.aov);
                        const freq = sanitizeNumber(v.freq);
                        const life = sanitizeNumber(v.life);
                        if (aov === null || freq === null || life === null) return null;
                        return (aov * freq * life).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'Сам по себе LTV ничего не говорит — сравните с CAC через LTV:CAC Ratio (цель ≥ 3:1).' })
                },
                {
                    id: 'cac', name: 'CAC',
                    formula: 'Затраты на маркетинг / Количество новых клиентов',
                    description: 'Customer Acquisition Cost — стоимость привлечения одного платящего клиента.',
                    threshold: 'Плохо: >$800, Средне: $300–$800, Хорошо: <$300',
                    inputs: [
                        { label: 'Затраты на маркетинг, $', placeholder: '50000', key: 'cost', min: 0, help: 'Полные расходы на привлечение: реклама + сейлы + контент + ЗП маркетинг-команды. Учитывайте всё, не только performance-бюджет.' },
                        { label: 'Новые клиенты', placeholder: '200', key: 'customers', min: 1, help: 'Только платящие клиенты, привлечённые за тот же период. Не путать с регистрациями/триалами.' }
                    ],
                    calculate: v => {
                        const cost = sanitizeNumber(v.cost);
                        const c = sanitizeNumber(v.customers);
                        if (cost === null || c === null || c <= 0) return null;
                        return (cost / c).toFixed(2);
                    },
                    unit: '$',
                    insight: val => {
                        if (val > 800) return { color: '#F44336', text: 'CAC слишком высок. Оптимизируйте каналы привлечения.' };
                        if (val > 300) return { color: '#FFC107', text: 'CAC приемлем, но можно улучшить.' };
                        return { color: '#4CAF50', text: 'Низкий CAC — эффективное привлечение!' };
                    }
                },
                {
                    id: 'ltv_cac', name: 'LTV:CAC Ratio',
                    formula: 'LTV / CAC',
                    description: 'Соотношение ценности клиента к стоимости его привлечения. Норма >3:1. При <1:1 бизнес убыточен.',
                    threshold: 'Плохо: <1, Средне: 1–3, Хорошо: >3',
                    inputs: [
                        { label: 'LTV (ценность клиента), $', placeholder: '15000', key: 'ltv', min: 0 },
                        { label: 'CAC (стоимость привлечения), $', placeholder: '1000', key: 'cac', min: 1 }
                    ],
                    calculate: v => {
                        const ltv = sanitizeNumber(v.ltv);
                        const cac = sanitizeNumber(v.cac);
                        if (ltv === null || cac === null || cac <= 0) return null;
                        return (ltv / cac).toFixed(2);
                    },
                    unit: 'x',
                    insight: val => {
                        if (val < 1) return { color: '#F44336', text: 'LTV < CAC — бизнес убыточен! Немедленно снизьте CAC.' };
                        if (val < 3) return { color: '#FFC107', text: 'Соотношение ниже нормы. Цель — минимум 3:1.' };
                        if (val <= 5) return { color: '#4CAF50', text: 'Отличное соотношение! Бизнес рентабелен.' };
                        return { color: '#4CAF50', text: 'Очень высокое LTV:CAC — либо отлично, либо недоинвестируете в рост.' };
                    }
                },
                {
                    id: 'arpu', name: 'ARPU',
                    formula: 'Выручка / Активные пользователи',
                    description: 'Average Revenue Per User — средняя выручка на одного пользователя.',
                    threshold: 'Плохо: <$10, Средне: $10–$50, Хорошо: >$50',
                    inputs: [
                        { label: 'Общая выручка, $', placeholder: '150000', key: 'revenue', min: 0 },
                        { label: 'Количество активных пользователей', placeholder: '5000', key: 'users', min: 1 }
                    ],
                    calculate: v => {
                        const rev = sanitizeNumber(v.revenue);
                        const u = sanitizeNumber(v.users);
                        if (rev === null || u === null || u <= 0) return null;
                        return (rev / u).toFixed(2);
                    },
                    unit: '$',
                    insight: val => {
                        if (val < 10) return { color: '#F44336', text: 'Низкий ARPU. Попробуйте апселы или новые предложения.' };
                        if (val < 50) return { color: '#FFC107', text: 'Средний ARPU. Работайте над монетизацией.' };
                        return { color: '#4CAF50', text: 'Высокий ARPU — отличная монетизация!' };
                    }
                },
                {
                    id: 'arpdau', name: 'ARPDAU',
                    formula: 'Дневная выручка / DAU',
                    description: 'Average Revenue Per Daily Active User — выручка с одного дневного активного. Ключевая метрика mobile F2P-игр и медиа.',
                    threshold: 'Free-to-play: $0.05–$5, Premium: $0.5–$20',
                    inputs: [
                        { label: 'Дневная выручка, $', placeholder: '500', key: 'dailyRevenue', min: 0, help: 'Средняя выручка от продукта за день (платежи + реклама).' },
                        { label: 'DAU', placeholder: '12500', key: 'dau', min: 1, help: 'Уникальных дневных активных пользователей за тот же период.' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.dailyRevenue);
                        const d = sanitizeNumber(v.dau);
                        if (r === null || d === null || d <= 0) return null;
                        return (r / d).toFixed(3);
                    },
                    unit: '$',
                    insight: val => {
                        if (val < 0.05) return { color: '#F44336', text: 'Низкий ARPDAU. Работайте над монетизацией или вовлечением.' };
                        if (val < 0.5) return { color: '#FFC107', text: 'Типично для free-to-play. Добавьте источники монетизации.' };
                        if (val < 5) return { color: '#4CAF50', text: 'Хороший ARPDAU — продукт зарабатывает.' };
                        return { color: '#4CAF50', text: 'Премиум-уровень. Отлично!' };
                    }
                },
                {
                    id: 'aov', name: 'AOV',
                    formula: 'Выручка за период / Количество заказов',
                    description: 'Average Order Value — средний чек. Базовая метрика e-commerce и розницы.',
                    threshold: 'E-com средний: $50–$150, Премиум: >$200, Маркетплейс: $20–$80',
                    inputs: [
                        { label: 'Общая выручка, $', placeholder: '50000', key: 'revenue', min: 0, help: 'Gross revenue за период (без вычетов).' },
                        { label: 'Количество заказов', placeholder: '500', key: 'orders', min: 1, help: 'Количество завершённых заказов за тот же период (paid orders).' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.revenue);
                        const o = sanitizeNumber(v.orders);
                        if (r === null || o === null || o <= 0) return null;
                        return (r / o).toFixed(2);
                    },
                    unit: '$',
                    insight: val => {
                        if (val < 20) return { color: '#FFC107', text: 'Низкий AOV. Bundle, апселы или free-shipping threshold помогут.' };
                        if (val < 100) return { color: '#4CAF50', text: 'Норма для среднего e-com. Тестируйте upsell/cross-sell.' };
                        if (val < 250) return { color: '#4CAF50', text: 'Хороший AOV — премиум-сегмент.' };
                        return { color: '#4CAF50', text: 'Высокий AOV — luxury / B2B-уровень.' };
                    }
                },
                {
                    id: 'repeatPurchaseRate', name: 'Repeat Purchase Rate',
                    formula: 'Клиенты с ≥2 заказами / Все клиенты × 100%',
                    description: 'Repeat Purchase Rate (RPR) — доля клиентов, сделавших хотя бы 2 покупки. Главный индикатор лояльности e-com.',
                    threshold: 'Плохо: <10%, Норма: 20–30%, Хорошо: 30–50%, Отлично: >50%',
                    inputs: [
                        { label: 'Клиенты с 2+ заказами', placeholder: '300', key: 'repeat', min: 0, help: 'Уникальные клиенты, сделавшие 2 или больше заказов за период.' },
                        { label: 'Всего уникальных клиентов', placeholder: '1000', key: 'total', min: 1, help: 'Все клиенты с хотя бы 1 заказом за период.' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.repeat);
                        const t = sanitizeNumber(v.total);
                        if (r === null || t === null || t <= 0) return null;
                        return ((r / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 10) return { color: '#F44336', text: 'Низкий RPR. Email/SMS-маркетинг и loyalty-программы помогут.' };
                        if (val < 20) return { color: '#FFC107', text: 'Ниже нормы. Работайте над second-purchase эксперимент.' };
                        if (val < 30) return { color: '#FFC107', text: 'Норма для среднего e-com.' };
                        if (val < 50) return { color: '#4CAF50', text: 'Хороший RPR — лояльность построена.' };
                        return { color: '#4CAF50', text: 'Отличный RPR — мирового уровня (Amazon, Apple).' };
                    }
                },
                {
                    id: 'churn', name: 'Churn Rate',
                    formula: '(Ушедшие / Всего пользователей) × 100%',
                    description: 'Процент пользователей, переставших пользоваться продуктом за период.',
                    threshold: 'Плохо: >10%, Средне: 5–10%, Хорошо: <5%',
                    inputs: [
                        { label: 'Ушедшие пользователи', placeholder: '150', key: 'lost', min: 0, help: 'Customer churn (отписались / отменили). Не путать с revenue churn — это считается через GRR.' },
                        { label: 'Всего пользователей на начало периода', placeholder: '2000', key: 'total', min: 1, help: 'Размер базы активных подписчиков на первый день периода. Новые приходящие в течение периода не учитываются.' }
                    ],
                    calculate: v => {
                        const lost = sanitizeNumber(v.lost);
                        const total = sanitizeNumber(v.total);
                        if (lost === null || total === null || total <= 0) return null;
                        return ((lost / total) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val > 10) return { color: '#F44336', text: 'Высокий отток. Срочно анализируйте причины ухода.' };
                        if (val > 5) return { color: '#FFC107', text: 'Отток выше среднего. Улучшайте поддержку и продукт.' };
                        return { color: '#4CAF50', text: 'Низкий отток — отличная лояльность!' };
                    }
                },
                {
                    id: 'wau', name: 'WAU',
                    formula: 'Уникальные пользователи за неделю',
                    description: 'Weekly Active Users — уникальные пользователи, взаимодействовавшие с продуктом за последние 7 дней. Промежуточное звено между DAU и MAU.',
                    threshold: 'Метрика-счётчик. Оценивайте через DAU/WAU и WAU/MAU',
                    inputs: [{ label: 'Уникальные пользователи (неделя)', placeholder: '32000', key: 'users', min: 0 }],
                    calculate: v => { const u = sanitizeNumber(v.users); return u !== null ? u : null; },
                    unit: 'чел',
                    insight: val => ({ color: '#2A6DF4', text: 'WAU — счётчик; смотрите DAU/WAU (внутринедельная липкость) и WAU/MAU. Для рабочих инструментов WAU ближе к MAU, для соцсетей — к DAU.' })
                },
                {
                    id: 'arppu', name: 'ARPPU',
                    formula: 'Выручка / Платящие пользователи',
                    description: 'Average Revenue Per Paying User — средняя выручка с одного платящего пользователя. В отличие от ARPU считается только по платящим и не размывается бесплатной аудиторией. Ключевая метрика для free-to-play и freemium.',
                    threshold: 'Сравнивайте с ARPU и LTV; для F2P — ключевая метрика монетизации',
                    inputs: [
                        { label: 'Выручка за период, $', placeholder: '120000', key: 'revenue', min: 0, help: 'Суммарная выручка с платящих за тот же период.' },
                        { label: 'Платящие пользователи', placeholder: '2400', key: 'payingUsers', min: 1, help: 'Только уникальные платящие пользователи (не все активные). ARPPU = выручка / платящие.' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.revenue);
                        const p = sanitizeNumber(v.payingUsers);
                        if (r === null || p === null || p <= 0) return null;
                        return (r / p).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'ARPPU считается только по платящим — он всегда выше ARPU. Для F2P смотрите его вместе с долей платящих (PUR) и LTV.' })
                },
                {
                    id: 'featureAdoption', name: 'Feature Adoption Rate',
                    formula: '(Пользователи фичи / Активные пользователи) × 100%',
                    description: 'Доля активных пользователей, начавших использовать конкретную фичу. Показывает, насколько новая функциональность находит спрос и оправдывает вложенную разработку.',
                    threshold: 'Плохо: <20%, Средне: 20–40%, Хорошо: >40%',
                    inputs: [
                        { label: 'Пользователи, использующие фичу', placeholder: '1800', key: 'adopted', min: 0, help: 'Уникальные активные пользователи, хоть раз воспользовавшиеся фичей за период.' },
                        { label: 'Всего активных пользователей', placeholder: '6000', key: 'active', min: 1, help: 'Все активные пользователи продукта за тот же период (база сравнения).' }
                    ],
                    calculate: v => {
                        const a = sanitizeNumber(v.adopted);
                        const t = sanitizeNumber(v.active);
                        if (a === null || t === null || t <= 0) return null;
                        return ((a / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 20) return { color: '#F44336', text: 'Низкая адопция фичи. Проверьте discoverability, онбординг и реальную ценность функции.' };
                        if (val < 40) return { color: '#FFC107', text: 'Средняя адопция. Подсветите фичу в UI и свяжите с ключевыми сценариями.' };
                        return { color: '#4CAF50', text: 'Высокая адопция — фича попала в потребность. Следите за её влиянием на Retention.' };
                    }
                }
            ]
        },
        b2b: {
            name: 'B2B',
            metrics: [
                {
                    id: 'mrr', name: 'MRR',
                    formula: 'Сумма месячной выручки с подписок',
                    description: 'Monthly Recurring Revenue — регулярная месячная выручка.',
                    threshold: 'Главное — MoM-рост: норма >5%, хорошо >10%, отлично >20%',
                    inputs: [{ label: 'Сумма MRR, $', placeholder: '45000', key: 'mrr', min: 0, help: 'Нормализованная месячная выручка. Годовые контракты делятся на 12. Не включает one-time / setup fees.' }],
                    calculate: v => { const m = sanitizeNumber(v.mrr); return m !== null ? m : null; },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'MRR — счётчик. Контекст важнее: смотрите MoM-рост, NRR, CAC Payback.' })
                },
                {
                    id: 'arr', name: 'ARR',
                    formula: 'MRR × 12',
                    description: 'Annual Recurring Revenue — годовая регулярная выручка.',
                    threshold: 'Главное — YoY-рост и NRR. Молодой SaaS: T2D3 (3x к ARR за 2 года)',
                    inputs: [{ label: 'MRR, $', placeholder: '45000', key: 'mrr', min: 0 }],
                    calculate: v => { const m = sanitizeNumber(v.mrr); return m !== null ? (m * 12).toFixed(2) : null; },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'ARR — счётчик; зрелость определяется YoY-ростом и Rule of 40 (рост + маржа ≥ 40%).' })
                },
                {
                    id: 'acv', name: 'ACV',
                    formula: 'Сумма контракта / Длительность (лет)',
                    description: 'Annual Contract Value — средняя годовая стоимость контракта.',
                    threshold: 'Плохо: <$5k, Средне: $5k–$20k, Хорошо: >$20k',
                    inputs: [
                        { label: 'Сумма контракта, $', placeholder: '120000', key: 'total', min: 0 },
                        { label: 'Длительность (лет)', placeholder: '3', key: 'years', min: 0.01 }
                    ],
                    calculate: v => {
                        const t = sanitizeNumber(v.total);
                        const y = sanitizeNumber(v.years);
                        if (t === null || y === null || y <= 0) return null;
                        return (t / y).toFixed(2);
                    },
                    unit: '$',
                    insight: val => {
                        if (val < 5000) return { color: '#F44336', text: 'Низкий ACV. Цельтесь на более крупные контракты.' };
                        if (val < 20000) return { color: '#FFC107', text: 'Средний ACV. Работайте над апселами.' };
                        return { color: '#4CAF50', text: 'Высокий ACV — хороший показатель.' };
                    }
                },
                {
                    id: 'grr', name: 'GRR',
                    formula: '(Начальный MRR − Отток) / Начальный MRR × 100%',
                    description: 'Gross Revenue Retention — удержание выручки без учёта апселов.',
                    threshold: 'Плохо: <80%, Средне: 80–95%, Хорошо: >95%',
                    inputs: [
                        { label: 'Начальный MRR, $', placeholder: '50000', key: 'start', min: 1 },
                        { label: 'Отток MRR (даунгрейды + уход), $', placeholder: '3000', key: 'churn', min: 0 }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.start);
                        const c = sanitizeNumber(v.churn);
                        if (s === null || c === null || s <= 0) return null;
                        return (((s - c) / s) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 80) return { color: '#F44336', text: 'GRR низкий. Серьёзные потери клиентов.' };
                        if (val < 95) return { color: '#FFC107', text: 'GRR приемлемый, но есть отток.' };
                        return { color: '#4CAF50', text: 'GRR отличный — клиенты остаются.' };
                    }
                },
                {
                    id: 'nrr', name: 'NRR',
                    formula: '(Начальный MRR + Апселы − Отток) / Начальный MRR × 100%',
                    description: 'Net Revenue Retention — удержание с учётом расширения.',
                    threshold: 'Плохо: <100%, Средне: 100–120%, Хорошо: >120%',
                    inputs: [
                        { label: 'Начальный MRR, $', placeholder: '50000', key: 'start', min: 1, help: 'MRR от существующих клиентов на первый день периода (без новых).' },
                        { label: 'Апселы (новый MRR от существующих), $', placeholder: '6000', key: 'upsell', min: 0, help: 'Expansion MRR: апгрейды тарифов + увеличение seats + дополнительные продукты у уже существующей базы.' },
                        { label: 'Отток MRR, $', placeholder: '3000', key: 'churn', min: 0, help: 'Gross MRR Churn: ушедшие клиенты + даунгрейды (contraction). Только потери в когорте существующих.' }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.start);
                        const u = sanitizeNumber(v.upsell);
                        const c = sanitizeNumber(v.churn);
                        if (s === null || u === null || c === null || s <= 0) return null;
                        return (((s + u - c) / s) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 100) return { color: '#F44336', text: 'NRR < 100% — выручка падает. Нужны апселы.' };
                        if (val < 120) return { color: '#FFC107', text: 'NRR > 100% — рост за счёт существующих.' };
                        return { color: '#4CAF50', text: 'NRR отличный — клиенты расширяются.' };
                    }
                },
                {
                    id: 'burnMultiple', name: 'Burn Multiple',
                    formula: 'Net Burn / Net New ARR',
                    description: 'Сколько $ сжигаем, чтобы сгенерировать $1 новой годовой выручки. Метрика капитальной эффективности SaaS (David Sacks). Отрицательный burn = компания cash-flow positive.',
                    threshold: 'Отлично: <1, Хорошо: 1–1.5, Норма: 1.5–2, Плохо: 2–3, Ужасно: >3',
                    inputs: [
                        { label: 'Net Burn (отрицательно если cash-positive), $', placeholder: '500000', key: 'burn', min: -1e15, help: 'Net Cash Burn за период = Все денежные траты − Все денежные поступления. Если cash-positive — введите отрицательное число.' },
                        { label: 'Net New ARR (прирост ARR за тот же период), $', placeholder: '600000', key: 'newArr', min: 0.01, help: 'Прирост ARR за период: Конечный − Начальный ARR. Включает new + expansion, минус churn и contraction.' }
                    ],
                    calculate: v => {
                        const b = sanitizeNumber(v.burn);
                        const a = sanitizeNumber(v.newArr);
                        if (b === null || a === null || a <= 0) return null;
                        return (b / a).toFixed(2);
                    },
                    unit: 'x',
                    insight: val => {
                        if (val < 0) return { color: '#4CAF50', text: 'Cash-positive рост — каждый $ ARR приходит с прибылью. Эталон.' };
                        if (val < 1) return { color: '#4CAF50', text: 'Отличный Burn Multiple — высокая капитальная эффективность.' };
                        if (val < 1.5) return { color: '#4CAF50', text: 'Хороший Burn Multiple — инвесторам нравится.' };
                        if (val < 2) return { color: '#FFC107', text: 'Норма для роста; можно оптимизировать.' };
                        if (val < 3) return { color: '#FFC107', text: 'Высокий burn — пересмотрите unit-economics.' };
                        return { color: '#F44336', text: 'Критично: каждый $ роста стоит >$3 burn.' };
                    }
                },
                {
                    id: 'magicNumber', name: 'Magic Number',
                    formula: '(Net New ARR × 4) / S&M расходы за квартал',
                    description: 'Эффективность Sales & Marketing: сколько $ нового ARR в год даёт каждый $, потраченный на S&M (Scale Venture Partners).',
                    threshold: 'Плохо: <0.5, Норма: 0.5–1, Хорошо: 1–1.5, Отлично: >1.5',
                    inputs: [
                        { label: 'Net New ARR за квартал, $', placeholder: '500000', key: 'newArr', min: 0, help: 'Прирост ARR за конкретный квартал (×4 в формуле даёт annualized).' },
                        { label: 'Расходы на Sales & Marketing за квартал, $', placeholder: '400000', key: 'sm', min: 0.01, help: 'Полный S&M cost: payroll команды + платформы + реклама + комиссии. По P&L, не по cash.' }
                    ],
                    calculate: v => {
                        const a = sanitizeNumber(v.newArr);
                        const sm = sanitizeNumber(v.sm);
                        if (a === null || sm === null || sm <= 0) return null;
                        return ((a * 4) / sm).toFixed(2);
                    },
                    unit: '',
                    insight: val => {
                        if (val < 0.5) return { color: '#F44336', text: 'Низкий Magic Number — сократите S&M, исправьте воронку.' };
                        if (val < 1) return { color: '#FFC107', text: 'Нормально, но окупаемость S&M >2 лет.' };
                        if (val < 1.5) return { color: '#4CAF50', text: 'Хорошо — инвестируйте в рост.' };
                        return { color: '#4CAF50', text: 'Отлично — масштабируйте S&M агрессивно!' };
                    }
                },
                {
                    id: 'ruleOf40', name: 'Rule of 40',
                    formula: 'Темп роста выручки YoY (%) + Маржа EBITDA (%)',
                    description: 'Здоровье SaaS: сумма роста и прибыльности. ≥ 40% — компания привлекательна для инвесторов независимо от соотношения growth vs profit.',
                    threshold: 'Плохо: <20%, Норма: 20–40%, Хорошо: ≥40%, Отлично: >60%',
                    inputs: [
                        { label: 'Рост выручки YoY, %', placeholder: '35', key: 'growth', min: -100, max: 1000, help: 'Год-к-году. Можно использовать как ARR growth, так и Revenue growth.' },
                        { label: 'Маржа EBITDA (или FCF), %', placeholder: '10', key: 'margin', min: -100, max: 100, help: 'EBITDA margin или FCF margin (свободный денежный поток / выручка). Может быть отрицательной.' }
                    ],
                    calculate: v => {
                        const g = sanitizeNumber(v.growth);
                        const m = sanitizeNumber(v.margin);
                        if (g === null || m === null) return null;
                        return (g + m).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 20) return { color: '#F44336', text: 'Ниже 20%: критическое состояние — нужны фундаментальные изменения.' };
                        if (val < 40) return { color: '#FFC107', text: 'Не дотягиваем до Rule of 40 — балансируйте рост и маржу.' };
                        if (val < 60) return { color: '#4CAF50', text: 'Rule of 40 выполнено — здоровый SaaS.' };
                        return { color: '#4CAF50', text: 'Выше 60% — звёздная категория (top decile).' };
                    }
                },
                {
                    id: 'quickRatio', name: 'Quick Ratio',
                    formula: '(New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)',
                    description: 'SaaS Quick Ratio (Mamoon Hamid): сколько новой выручки приходится на каждый $ потерянной. Показатель устойчивости роста.',
                    threshold: 'Плохо: <1, Норма: 1–2, Хорошо: 2–4, Отлично: >4',
                    inputs: [
                        { label: 'New MRR (новые клиенты), $', placeholder: '40000', key: 'newMrr', min: 0, help: 'MRR от новых платящих клиентов за период.' },
                        { label: 'Expansion MRR (апселы существующих), $', placeholder: '8000', key: 'expansion', min: 0, help: 'Прирост MRR от существующих: апгрейды плана, расширение seats, дополнительные продукты.' },
                        { label: 'Churned MRR (ушедшие), $', placeholder: '5000', key: 'churned', min: 0, help: 'MRR ушедших клиентов (полная потеря).' },
                        { label: 'Contraction MRR (даунгрейды), $', placeholder: '3000', key: 'contraction', min: 0, help: 'Сокращение MRR у оставшихся клиентов (даунгрейд тарифа, меньше seats).' }
                    ],
                    calculate: v => {
                        const nm = sanitizeNumber(v.newMrr);
                        const ex = sanitizeNumber(v.expansion);
                        const ch = sanitizeNumber(v.churned);
                        const co = sanitizeNumber(v.contraction);
                        if ([nm,ex,ch,co].some(x=>x===null)) return null;
                        const gained = nm + ex;
                        const lost = ch + co;
                        if (gained === 0 && lost === 0) return null; // нет движения MRR — невозможно посчитать
                        if (lost <= 0) return Infinity; // ноль потерь, есть рост — бесконечный Quick Ratio
                        return ((gained) / lost).toFixed(2);
                    },
                    unit: '',
                    insight: val => {
                        if (val === Infinity || val > 4) return { color: '#4CAF50', text: 'Отличный Quick Ratio — рост существенно превышает потери.' };
                        if (val < 1) return { color: '#F44336', text: 'Quick Ratio < 1 — теряете больше, чем привлекаете.' };
                        if (val < 2) return { color: '#FFC107', text: 'Хрупкий рост — каждый $ потерь съедает половину нового MRR.' };
                        if (val < 4) return { color: '#4CAF50', text: 'Здоровый Quick Ratio — рост устойчив.' };
                        return { color: '#4CAF50', text: 'Отличный Quick Ratio.' };
                    }
                },
                {
                    id: 'cacPayback', name: 'CAC Payback',
                    formula: 'CAC / (MRR на клиента × Маржинальность)',
                    description: 'Время (месяцев) для возврата затрат на привлечение клиента.',
                    threshold: 'Плохо: >24 мес, Средне: 12–24 мес, Хорошо: <12 мес',
                    inputs: [
                        { label: 'CAC, $', placeholder: '1200', key: 'cac', min: 0 },
                        { label: 'MRR на одного клиента, $', placeholder: '150', key: 'mrrPerCustomer', min: 0.01 },
                        { label: 'Маржинальность (%, 0–100)', placeholder: '80', key: 'margin', min: 0, max: 100 }
                    ],
                    calculate: v => {
                        const cac = sanitizeNumber(v.cac);
                        const mrr = sanitizeNumber(v.mrrPerCustomer);
                        const mp = sanitizeNumber(v.margin);
                        if (cac === null || mrr === null || mp === null || mrr <= 0) return null;
                        const margin = Math.min(100, Math.max(0, mp)) / 100;
                        if (margin === 0) return null;
                        return (cac / (mrr * margin)).toFixed(1);
                    },
                    unit: 'мес',
                    insight: val => {
                        if (val > 24) return { color: '#F44336', text: 'Окупаемость > 2 лет — слишком долго.' };
                        if (val > 12) return { color: '#FFC107', text: 'Окупаемость > года — нормально для B2B.' };
                        return { color: '#4CAF50', text: 'Быстрая окупаемость — отлично!' };
                    }
                },
                {
                    id: 'netNewMrr', name: 'Net New MRR',
                    formula: 'New + Expansion − Churned − Contraction MRR',
                    description: 'Чистый прирост MRR за месяц: новые + расширение минус отток и даунгрейды. Главный пульс роста подписочной выручки.',
                    threshold: 'Должен быть положительным и расти MoM. Отрицательный = выручка сжимается',
                    inputs: [
                        { label: 'New MRR (новые клиенты), $', placeholder: '40000', key: 'newMrr', min: 0, help: 'MRR от новых платящих клиентов за месяц.' },
                        { label: 'Expansion MRR (апселы), $', placeholder: '12000', key: 'expansion', min: 0, help: 'Прирост MRR от апгрейдов и доп-мест существующих клиентов.' },
                        { label: 'Churned MRR (отток), $', placeholder: '9000', key: 'churned', min: 0, help: 'MRR полностью ушедших клиентов.' },
                        { label: 'Contraction MRR (даунгрейды), $', placeholder: '3000', key: 'contraction', min: 0, help: 'Снижение MRR от даунгрейдов без полного ухода.' }
                    ],
                    calculate: v => {
                        const n = sanitizeNumber(v.newMrr);
                        const e = sanitizeNumber(v.expansion);
                        const c = sanitizeNumber(v.churned);
                        const ct = sanitizeNumber(v.contraction);
                        if (n === null || e === null || c === null || ct === null) return null;
                        return (n + e - c - ct).toFixed(2);
                    },
                    unit: '$',
                    insight: val => {
                        if (val < 0) return { color: '#F44336', text: 'Отрицательный Net New MRR — выручка сжимается: отток и даунгрейды перевешивают рост.' };
                        if (val < 1) return { color: '#FFC107', text: 'Околонулевой прирост — рост съедается оттоком. Работайте над retention и expansion.' };
                        return { color: '#4CAF50', text: 'Положительный прирост MRR. Следите за долей Expansion — она удешевляет рост (см. Quick Ratio).' };
                    }
                },
                {
                    id: 'leadVelocityRate', name: 'Lead Velocity Rate',
                    formula: '((Лиды тек. месяца − Лиды пред. месяца) / Лиды пред. месяца) × 100%',
                    description: 'LVR — темп роста числа квалифицированных лидов месяц к месяцу. Опережающий индикатор будущей выручки: лиды сегодня превращаются в сделки и ARR через цикл продажи.',
                    threshold: 'Плохо: <0%, Средне: 0–10%, Хорошо: >10%',
                    inputs: [
                        { label: 'Квал. лиды в текущем месяце', placeholder: '420', key: 'thisMonth', min: 0, help: 'Число квалифицированных лидов (MQL/SQL) за текущий месяц.' },
                        { label: 'Квал. лиды в прошлом месяце', placeholder: '380', key: 'lastMonth', min: 1, help: 'То же число за предыдущий месяц — база сравнения.' }
                    ],
                    calculate: v => {
                        const t = sanitizeNumber(v.thisMonth);
                        const l = sanitizeNumber(v.lastMonth);
                        if (t === null || l === null || l <= 0) return null;
                        return (((t - l) / l) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 0) return { color: '#F44336', text: 'Поток лидов падает — через цикл продажи это ударит по выручке. Усиливайте demand gen.' };
                        if (val < 10) return { color: '#FFC107', text: 'Рост лидов слабый. LVR — опережающий индикатор: разгоняйте верх воронки заранее.' };
                        return { color: '#4CAF50', text: 'Лиды растут уверенно — здоровый предвестник будущего роста ARR.' };
                    }
                },
                {
                    id: 'cashConversionScore', name: 'Cash Conversion Score',
                    formula: 'Текущий ARR / Чистый сожжённый капитал',
                    description: 'CCS (Bessemer) — сколько ARR компания построила на каждый сожжённый доллар. Измеряет капиталоэффективность: чем выше, тем меньше денег нужно для построения выручки.',
                    threshold: 'Плохо: <0.5, Средне: 0.5–1, Хорошо: >1 (elite)',
                    inputs: [
                        { label: 'Текущий ARR, $', placeholder: '8000000', key: 'arr', min: 0, help: 'Годовая регулярная выручка на текущий момент.' },
                        { label: 'Чистый сожжённый капитал, $', placeholder: '6000000', key: 'capitalConsumed', min: 1, help: 'Net capital consumed: суммарно привлечённый капитал минус текущий кэш на счетах.' }
                    ],
                    calculate: v => {
                        const a = sanitizeNumber(v.arr);
                        const c = sanitizeNumber(v.capitalConsumed);
                        if (a === null || c === null || c <= 0) return null;
                        return (a / c).toFixed(2);
                    },
                    unit: '×',
                    insight: val => {
                        if (val < 0.5) return { color: '#F44336', text: 'Капитал сжигается быстрее, чем строится ARR. Повышайте эффективность роста или режьте burn.' };
                        if (val < 1) return { color: '#FFC107', text: 'Норма. Каждый доллар burn пока даёт меньше доллара ARR — двигайтесь к CCS > 1.' };
                        return { color: '#4CAF50', text: 'Капиталоэффективный рост (CCS > 1 — уровень elite по Bessemer).' };
                    }
                }
            ]
        },
        sales: {
            name: 'AARRR',
            metrics: [
                {
                    id: 'acquisition', name: 'Acquisition',
                    formula: 'Количество новых пользователей за период',
                    description: 'Сколько новых посетителей/клиентов привлечено.',
                    threshold: 'Метрика-счётчик. Оценивайте через CAC, конверсии и MoM-динамику',
                    inputs: [{ label: 'Новые пользователи', placeholder: '1200', key: 'new', min: 0 }],
                    calculate: v => { const n = sanitizeNumber(v.new); return n !== null ? n : null; },
                    unit: 'чел',
                    insight: val => ({ color: '#2A6DF4', text: 'Acquisition — счётчик; качество важнее количества. Смотрите CAC, Activation Rate, LTV:CAC.' })
                },
                {
                    id: 'activation', name: 'Activation',
                    formula: '(Достигшие Aha-момента / Все новые) × 100%',
                    description: 'Доля новых пользователей, дошедших до ключевого события (Aha!-момента).',
                    threshold: 'Плохо: <30%, Средне: 30–60%, Хорошо: >60%',
                    inputs: [
                        { label: 'Пользователи с активацией', placeholder: '540', key: 'activated', min: 0 },
                        { label: 'Всего новых пользователей', placeholder: '1200', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const a = sanitizeNumber(v.activated);
                        const t = sanitizeNumber(v.total);
                        if (a === null || t === null || t <= 0) return null;
                        return ((a / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 30) return { color: '#F44336', text: 'Низкая активация. Упростите первый опыт.' };
                        if (val < 60) return { color: '#FFC107', text: 'Средняя активация. Работайте над онбордингом.' };
                        return { color: '#4CAF50', text: 'Высокая активация — пользователи видят ценность.' };
                    }
                },
                {
                    id: 'retention_aarrr', name: 'Retention',
                    formula: '(Вернувшиеся через N дней / Новые в когорте) × 100%',
                    description: 'Процент пользователей когорты, которые возвращаются через заданный период.',
                    threshold: 'Плохо: <30%, Средне: 30–60%, Хорошо: >60%',
                    inputs: [
                        { label: 'Вернувшиеся пользователи', placeholder: '360', key: 'ret', min: 0 },
                        { label: 'Новые пользователи в когорте', placeholder: '1200', key: 'new', min: 1 }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.ret);
                        const n = sanitizeNumber(v.new);
                        if (r === null || n === null || n <= 0) return null;
                        return ((r / n) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 30) return { color: '#F44336', text: 'Низкое удержание. Проверьте ценность.' };
                        if (val < 60) return { color: '#FFC107', text: 'Среднее удержание. Улучшайте вовлечение.' };
                        return { color: '#4CAF50', text: 'Отличное удержание!' };
                    }
                },
                {
                    id: 'referral', name: 'Referral (K-factor)',
                    formula: 'Приглашённые пользователи / Активные (отправившие приглашения)',
                    description: 'Коэффициент виральности — сколько новых пользователей приводит один существующий. >1 = вирусный рост.',
                    threshold: 'Плохо: <0.5, Средне: 0.5–1, Хорошо: >1',
                    inputs: [
                        { label: 'Приглашённые (зарегистрировались по инвайту)', placeholder: '300', key: 'invited', min: 0 },
                        { label: 'Активных пользователей, отправивших приглашения', placeholder: '600', key: 'active', min: 1 }
                    ],
                    calculate: v => {
                        const inv = sanitizeNumber(v.invited);
                        const act = sanitizeNumber(v.active);
                        if (inv === null || act === null || act <= 0) return null;
                        return (inv / act).toFixed(2);
                    },
                    unit: '',
                    insight: val => {
                        if (val < 0.5) return { color: '#F44336', text: 'Низкий K-factor. Стимулируйте рефералы.' };
                        if (val < 1) return { color: '#FFC107', text: 'K-factor < 1 — виральность слабая.' };
                        return { color: '#4CAF50', text: 'K-factor > 1 — вирусный рост!' };
                    }
                },
                {
                    id: 'revenue', name: 'Revenue',
                    formula: 'Общая выручка за период',
                    description: 'Денежный поток от всех источников за период.',
                    threshold: 'Метрика-счётчик. Контекст: рост MoM/YoY, маржа, Rule of 40',
                    inputs: [{ label: 'Выручка, $', placeholder: '85000', key: 'rev', min: 0 }],
                    calculate: v => { const r = sanitizeNumber(v.rev); return r !== null ? r : null; },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'Revenue — счётчик; здоровье бизнеса определяется ростом, маржой и unit-экономикой.' })
                },
                {
                    id: 'timeToValue', name: 'Time to Value',
                    formula: 'Среднее время от регистрации до Aha-моменту',
                    description: 'Сколько времени нужно новому пользователю, чтобы получить первую ценность от продукта. Один из главных driver-ов Activation.',
                    threshold: 'Мгновенно: <1 день, быстро: 1–7 дней, норма: 7–30 дней, медленно: >30',
                    inputs: [
                        { label: 'Среднее время до Aha (дней)', placeholder: '3', key: 'days', min: 0, help: 'Медианное (не среднее!) время от регистрации до ключевого события активации.' }
                    ],
                    calculate: v => {
                        const d = sanitizeNumber(v.days);
                        if (d === null) return null;
                        return d.toFixed(1);
                    },
                    unit: 'дней',
                    insight: val => {
                        if (val < 1) return { color: '#4CAF50', text: 'Мгновенная ценность — отлично для consumer/PLG продуктов.' };
                        if (val < 7) return { color: '#4CAF50', text: 'Быстрая активация — хорошо для PLG.' };
                        if (val < 30) return { color: '#FFC107', text: 'Норма для B2B/enterprise. Упростите онбординг для PLG.' };
                        return { color: '#F44336', text: 'Слишком медленно — пользователи отваливаются. Урежьте setup-шаги.' };
                    }
                }
            ]
        },
        finance: {
            name: 'Finance',
            metrics: [
                {
                    id: 'grossMargin', name: 'Gross Margin',
                    formula: '(Выручка − COGS) / Выручка × 100%',
                    description: 'Валовая маржа — доля выручки, оставшаяся после прямых затрат на доставку продукта (cost of goods sold).',
                    threshold: 'SaaS: >75%, E-com: >40%, Hardware: >30%',
                    inputs: [
                        { label: 'Выручка, $', placeholder: '1000000', key: 'revenue', min: 0.01, help: 'Общая выручка за период.' },
                        { label: 'COGS (прямые издержки), $', placeholder: '250000', key: 'cogs', min: 0, help: 'Прямые издержки на доставку продукта: хостинг, поддержка клиентов, payment processing, инфраструктура. Не включает R&D, S&M.' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.revenue);
                        const c = sanitizeNumber(v.cogs);
                        if (r === null || c === null || r <= 0) return null;
                        return (((r - c) / r) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 30) return { color: '#F44336', text: 'Низкая маржа. Проверьте unit-economics — каждая продажа теряет деньги.' };
                        if (val < 60) return { color: '#FFC107', text: 'Норма для commerce/hardware. Для SaaS — слишком низко.' };
                        if (val < 80) return { color: '#4CAF50', text: 'Хорошая маржа — SaaS-уровень.' };
                        return { color: '#4CAF50', text: 'Отличная маржа — мирового класса SaaS (>80%).' };
                    }
                },
                {
                    id: 'runway', name: 'Runway',
                    formula: 'Кэш / Среднемесячное сжигание',
                    description: 'Сколько месяцев компания проживёт на текущем уровне сжигания. Ключевая метрика для стартапов и pre-IPO.',
                    threshold: '<6 мес критично, 6–12 рискованно, 12–18 норма, >18 здорово',
                    inputs: [
                        { label: 'Кэш на счёте, $', placeholder: '5000000', key: 'cash', min: 0, help: 'Текущий остаток денежных средств + ликвидные активы.' },
                        { label: 'Среднемесячное сжигание (Net Burn), $', placeholder: '300000', key: 'burn', min: 0.01, help: 'Средний Net Burn за последние 3–6 мес. Если cash-positive — runway бесконечен.' }
                    ],
                    calculate: v => {
                        const c = sanitizeNumber(v.cash);
                        const b = sanitizeNumber(v.burn);
                        if (c === null || b === null) return null;
                        if (b <= 0) return '∞';
                        return (c / b).toFixed(1);
                    },
                    unit: 'мес',
                    insight: val => {
                        if (val === '∞' || val === Infinity) return { color: '#4CAF50', text: 'Cash-positive — runway бесконечен.' };
                        const v = typeof val === 'number' ? val : parseFloat(val);
                        if (v < 6) return { color: '#F44336', text: 'Менее 6 мес — срочно фандрейзить или резать burn.' };
                        if (v < 12) return { color: '#FFC107', text: '6–12 мес — пора начинать фандрейзинг.' };
                        if (v < 18) return { color: '#4CAF50', text: '12–18 мес — норма для пре-сид/сид.' };
                        return { color: '#4CAF50', text: 'Больше 18 мес — здоровый runway.' };
                    }
                },
                {
                    id: 'burnRate', name: 'Burn Rate',
                    formula: 'Расходы за месяц − Доходы за месяц',
                    description: 'Чистое денежное сжигание за месяц. Положительное число — компания тратит больше, чем зарабатывает.',
                    threshold: 'Контекст: соотношение с Runway и Net New ARR (см. Burn Multiple)',
                    inputs: [
                        { label: 'Среднемесячные расходы, $', placeholder: '500000', key: 'expenses', min: 0, help: 'Все денежные расходы за месяц: ЗП, аренда, инфра, маркетинг.' },
                        { label: 'Среднемесячная выручка, $', placeholder: '200000', key: 'revenue', min: 0, help: 'Денежные поступления (collected revenue), не billings.' }
                    ],
                    calculate: v => {
                        const e = sanitizeNumber(v.expenses);
                        const r = sanitizeNumber(v.revenue);
                        if (e === null || r === null) return null;
                        return (e - r).toFixed(0);
                    },
                    unit: '$/мес',
                    insight: val => {
                        if (val <= 0) return { color: '#4CAF50', text: 'Cash-positive — выручка покрывает расходы.' };
                        return { color: '#FFC107', text: 'Burn активен. Контролируйте через Runway и Burn Multiple.' };
                    }
                },
                {
                    id: 'salesVelocity', name: 'Sales Velocity',
                    formula: '(Opps × ACV × Win Rate) / Длина цикла (дней)',
                    description: 'Скорость генерации выручки B2B-воронки в день. Ключевая метрика sales performance.',
                    threshold: 'Контекст: сравнивайте период к периоду; рост важнее абсолюта',
                    inputs: [
                        { label: 'Активные opportunities', placeholder: '120', key: 'opps', min: 0, help: 'Количество активных сделок в воронке за период.' },
                        { label: 'ACV (средний контракт), $', placeholder: '24000', key: 'acv', min: 0, help: 'Annual Contract Value — средняя годовая стоимость закрытой сделки.' },
                        { label: 'Win Rate, %', placeholder: '25', key: 'winRate', min: 0, max: 100, help: 'Доля сделок, закрывающихся в win. 20–30% — типично для B2B SaaS.' },
                        { label: 'Длина цикла (дней)', placeholder: '60', key: 'cycle', min: 0.1, help: 'Среднее время от создания opportunity до closed-won.' }
                    ],
                    calculate: v => {
                        const o = sanitizeNumber(v.opps);
                        const a = sanitizeNumber(v.acv);
                        const w = sanitizeNumber(v.winRate);
                        const c = sanitizeNumber(v.cycle);
                        if ([o,a,w,c].some(x=>x===null) || c <= 0) return null;
                        return ((o * a * (w/100)) / c).toFixed(0);
                    },
                    unit: '$/день',
                    insight: val => ({ color: '#2A6DF4', text: 'Sales Velocity — рост важнее абсолюта. Ускоряйте за счёт 4 рычагов: opps, ACV, win rate, цикл.' })
                },
                {
                    id: 'winRate', name: 'Win Rate',
                    formula: 'Closed Won / Всего закрытых opps × 100%',
                    description: 'Доля сделок, закрытых в выигрыш. Базовая метрика квалификации B2B-воронки.',
                    threshold: 'B2B SaaS: <15% плохо, 15–25% норма, 25–35% хорошо, >35% отлично',
                    inputs: [
                        { label: 'Closed Won (выиграно)', placeholder: '24', key: 'won', min: 0, help: 'Сделки, закрытые в успех за период.' },
                        { label: 'Всего закрытых (won + lost)', placeholder: '100', key: 'total', min: 1, help: 'Все закрытые сделки за период (won + lost). Не учитываются открытые opps.' }
                    ],
                    calculate: v => {
                        const w = sanitizeNumber(v.won);
                        const t = sanitizeNumber(v.total);
                        if (w === null || t === null || t <= 0) return null;
                        return ((w / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 15) return { color: '#F44336', text: 'Низкий Win Rate. Проверьте качество лидов и квалификацию.' };
                        if (val < 25) return { color: '#FFC107', text: 'Норма для B2B SaaS, но есть куда расти.' };
                        if (val < 35) return { color: '#4CAF50', text: 'Хороший Win Rate — воронка работает.' };
                        return { color: '#4CAF50', text: 'Отличный Win Rate — продукт matches спросу.' };
                    }
                },
                {
                    id: 'pipelineCoverage', name: 'Pipeline Coverage',
                    formula: 'Pipeline Value / Целевая выручка периода',
                    description: 'Сколько раз воронка покрывает план продаж. Стандарт >3x для B2B SaaS.',
                    threshold: 'Плохо: <2x, Норма: 2–3x, Хорошо: 3–4x, Отлично: >4x',
                    inputs: [
                        { label: 'Pipeline Value, $', placeholder: '3000000', key: 'pipeline', min: 0, help: 'Сумма ACV/TCV всех активных opportunities на конец периода.' },
                        { label: 'Цель по выручке, $', placeholder: '1000000', key: 'quota', min: 0.01, help: 'Целевая новая выручка (new ARR / new bookings) за период.' }
                    ],
                    calculate: v => {
                        const p = sanitizeNumber(v.pipeline);
                        const q = sanitizeNumber(v.quota);
                        if (p === null || q === null || q <= 0) return null;
                        return (p / q).toFixed(2);
                    },
                    unit: 'x',
                    insight: val => {
                        if (val < 2) return { color: '#F44336', text: 'Воронки мало — не хватит, чтобы закрыть план.' };
                        if (val < 3) return { color: '#FFC107', text: 'Норма; но небольшой запас. Увеличивайте voronку.' };
                        if (val < 4) return { color: '#4CAF50', text: 'Хорошее покрытие — план реалистичен.' };
                        return { color: '#4CAF50', text: 'Отличное покрытие — большой запас.' };
                    }
                },
                {
                    id: 'salesCycleLength', name: 'Sales Cycle Length',
                    formula: 'Среднее число дней от opportunity-created до closed-won',
                    description: 'Среднее время закрытия B2B-сделки. Короче — выше Sales Velocity, ниже CAC Payback.',
                    threshold: 'B2B SMB: <30 дней, Mid-market: 30–90, Enterprise: 90–180+',
                    inputs: [
                        { label: 'Сумма дней по всем закрытым сделкам', placeholder: '4500', key: 'totalDays', min: 0, help: 'Сумма дней от создания opportunity до closed-won по всем выигранным сделкам периода.' },
                        { label: 'Количество закрытых сделок (won)', placeholder: '50', key: 'wonCount', min: 1, help: 'Только closed-won сделки за период.' }
                    ],
                    calculate: v => {
                        const t = sanitizeNumber(v.totalDays);
                        const c = sanitizeNumber(v.wonCount);
                        if (t === null || c === null || c <= 0) return null;
                        return (t / c).toFixed(1);
                    },
                    unit: 'дней',
                    insight: val => {
                        if (val < 30) return { color: '#4CAF50', text: 'Короткий цикл — типично для SMB / PLG / inbound.' };
                        if (val < 90) return { color: '#4CAF50', text: 'Норма для Mid-market B2B SaaS.' };
                        if (val < 180) return { color: '#FFC107', text: 'Enterprise-цикл. Контролируйте через Pipeline Coverage.' };
                        return { color: '#F44336', text: 'Очень длинный цикл — рискованно для cash flow. Сегментируйте сделки.' };
                    }
                },
                {
                    id: 'mrrGrowthRate', name: 'MRR Growth Rate',
                    formula: '(MRR конец − MRR начало) / MRR начало × 100%',
                    description: 'Темп роста MRR за период. Главная метрика здоровья SaaS — важнее абсолютного MRR.',
                    threshold: 'MoM: норма >5%, хорошо >10%, отлично >20%; YoY: норма >50%, T2D3 >100%',
                    inputs: [
                        { label: 'MRR на начало периода, $', placeholder: '100000', key: 'startMrr', min: 0.01, help: 'MRR на первый день периода.' },
                        { label: 'MRR на конец периода, $', placeholder: '115000', key: 'endMrr', min: 0, help: 'MRR на последний день того же периода (включая новых, апселы, минус churn).' }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.startMrr);
                        const e = sanitizeNumber(v.endMrr);
                        if (s === null || e === null || s <= 0) return null;
                        return (((e - s) / s) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 0) return { color: '#F44336', text: 'Отрицательный рост — выручка падает. Срочно анализ.' };
                        if (val < 5) return { color: '#FFC107', text: 'Медленный рост. Для растущего SaaS нужно >10% MoM.' };
                        if (val < 10) return { color: '#FFC107', text: 'Норма. Хорошие SaaS делают >10% MoM.' };
                        if (val < 20) return { color: '#4CAF50', text: 'Хороший рост — большинство YC-стартапов в этом диапазоне.' };
                        return { color: '#4CAF50', text: 'Отличный рост — top-tier SaaS уровень.' };
                    }
                },
                {
                    id: 'contributionMargin', name: 'Contribution Margin',
                    formula: '(Выручка − Переменные затраты) / Выручка × 100%',
                    description: 'Маржинальная прибыль — доля выручки, остающаяся после переменных затрат. Показывает, сколько каждый доллар продаж даёт на покрытие постоянных расходов и прибыль.',
                    threshold: 'Плохо: <20%, Средне: 20–40%, Хорошо: 40–60%, Отлично: >60%',
                    inputs: [
                        { label: 'Выручка, $', placeholder: '100000', key: 'revenue', min: 0 },
                        { label: 'Переменные затраты, $', placeholder: '45000', key: 'variableCosts', min: 0, help: 'Затраты, растущие с объёмом: сырьё, доставка, платёжные комиссии, hosting на клиента, sales-комиссии.' }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.revenue);
                        const c = sanitizeNumber(v.variableCosts);
                        if (r === null || c === null || r <= 0) return null;
                        return (((r - c) / r) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 20) return { color: '#F44336', text: 'Низкая маржинальность — заказ почти не покрывает постоянные расходы. Поднимайте цены или режьте переменные затраты.' };
                        if (val < 40) return { color: '#FFC107', text: 'Средняя маржа. Норма для retail/marketplace; для SaaS должно быть выше.' };
                        return { color: '#4CAF50', text: 'Высокая контрибуционная маржа — здоровая unit-экономика и быстрый выход в прибыль.' };
                    }
                },
                {
                    id: 'gmv', name: 'GMV',
                    formula: 'Кол-во заказов × Средний чек (AOV)',
                    description: 'Gross Merchandise Value — суммарная стоимость всех проданных товаров/услуг за период до вычета комиссий и возвратов. Метрика масштаба для маркетплейсов и e-commerce.',
                    threshold: 'Счётчик масштаба. Важна динамика MoM/YoY и связка с Take Rate',
                    inputs: [
                        { label: 'Количество заказов', placeholder: '12000', key: 'orders', min: 0 },
                        { label: 'Средний чек (AOV), $', placeholder: '65', key: 'aov', min: 0 }
                    ],
                    calculate: v => {
                        const o = sanitizeNumber(v.orders);
                        const a = sanitizeNumber(v.aov);
                        if (o === null || a === null) return null;
                        return (o * a).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'GMV — оборот, а не выручка. Реальный доход платформы = GMV × Take Rate. Смотрите рост GMV вместе с маржинальностью.' })
                },
                {
                    id: 'takeRate', name: 'Take Rate',
                    formula: '(Выручка платформы / GMV) × 100%',
                    description: 'Доля оборота (GMV), которую маркетплейс оставляет себе как выручку: комиссии, реклама, подписки, платёжные сборы. Главный рычаг монетизации платформы.',
                    threshold: 'Маркетплейсы: 10–20% норма, 20–30% сильно; >30% риск оттока продавцов',
                    inputs: [
                        { label: 'Выручка платформы, $', placeholder: '120000', key: 'platformRevenue', min: 0, help: 'Комиссии + реклама + подписки + платёжные сборы, оставшиеся у платформы.' },
                        { label: 'GMV (оборот), $', placeholder: '780000', key: 'gmv', min: 1 }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.platformRevenue);
                        const g = sanitizeNumber(v.gmv);
                        if (r === null || g === null || g <= 0) return null;
                        return ((r / g) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 10) return { color: '#FFC107', text: 'Низкий take rate. Норма для high-GMV категорий (электроника, трэвел). Ищите доп-монетизацию: реклама, подписки, финуслуги.' };
                        if (val < 25) return { color: '#4CAF50', text: 'Здоровый take rate для маркетплейса — баланс монетизации и удержания продавцов.' };
                        return { color: '#F44336', text: 'Высокий take rate — риск ухода продавцов в прямые каналы. Оправдан только при сильном спросе и lock-in.' };
                    }
                },
                {
                    id: 'quotaAttainment', name: 'Quota Attainment',
                    formula: '(Факт продаж / Квота) × 100%',
                    description: 'Процент выполнения плана продаж репом или командой. Базовый показатель здоровья sales-организации и реалистичности квот.',
                    threshold: 'Реп: >100% отлично; команда: 60–70% репов выполняют квоту — норма',
                    inputs: [
                        { label: 'Факт продаж, $', placeholder: '420000', key: 'actual', min: 0 },
                        { label: 'Квота (план), $', placeholder: '500000', key: 'quota', min: 1 }
                    ],
                    calculate: v => {
                        const a = sanitizeNumber(v.actual);
                        const q = sanitizeNumber(v.quota);
                        if (a === null || q === null || q <= 0) return null;
                        return ((a / q) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 70) return { color: '#F44336', text: 'Недовыполнение квоты. Проверьте качество pipeline, enablement и реалистичность плана.' };
                        if (val < 100) return { color: '#FFC107', text: 'Близко к плану. Если так у большинства репов — квоты, возможно, завышены.' };
                        return { color: '#4CAF50', text: 'Квота выполнена. Если 90%+ репов перевыполняют — планку стоит поднять.' };
                    }
                }
            ]
        },
        growth: {
            name: 'Growth',
            metrics: [
                {
                    id: 'cr', name: 'CR (Conversion Rate)',
                    formula: '(Конверсии / Посетители) × 100%',
                    description: 'Коэффициент конверсии — доля посетителей, совершивших целевое действие.',
                    threshold: 'Плохо: <1%, Средне: 1–3%, Хорошо: >3%',
                    inputs: [
                        { label: 'Целевые действия (конверсии)', placeholder: '250', key: 'conversions', min: 0 },
                        { label: 'Всего посетителей', placeholder: '10000', key: 'visitors', min: 1 }
                    ],
                    calculate: v => {
                        const c = sanitizeNumber(v.conversions);
                        const vis = sanitizeNumber(v.visitors);
                        if (c === null || vis === null || vis <= 0) return null;
                        return ((c / vis) * 100).toFixed(2);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 1) return { color: '#F44336', text: 'Очень низкая конверсия. Проверьте посадочную страницу.' };
                        if (val < 3) return { color: '#FFC107', text: 'Средняя конверсия. A/B-тесты помогут.' };
                        return { color: '#4CAF50', text: 'Высокая конверсия — отличный результат!' };
                    }
                },
                {
                    id: 'roas', name: 'ROAS',
                    formula: 'Выручка от рекламы / Затраты на рекламу',
                    description: 'Return on Ad Spend — возврат с рекламных расходов. Сколько выручки приносит каждый вложенный рубль/доллар.',
                    threshold: 'Плохо: <2x, Средне: 2–4x, Хорошо: >4x',
                    inputs: [
                        { label: 'Выручка от рекламы, $', placeholder: '120000', key: 'revenue', min: 0, help: 'Атрибутированная выручка от конкретной кампании / канала. Только то, что трекается обратно до рекламы.' },
                        { label: 'Затраты на рекламу, $', placeholder: '30000', key: 'spend', min: 1, help: 'Полные media spend: бюджеты + комиссии агентств + production. Не включает зарплаты команды.' }
                    ],
                    calculate: v => {
                        const rev = sanitizeNumber(v.revenue);
                        const sp = sanitizeNumber(v.spend);
                        if (rev === null || sp === null || sp <= 0) return null;
                        return (rev / sp).toFixed(2);
                    },
                    unit: 'x',
                    insight: val => {
                        if (val < 2) return { color: '#F44336', text: 'ROAS ниже нормы. Реклама не окупается.' };
                        if (val < 4) return { color: '#FFC107', text: 'Средний ROAS. Оптимизируйте кампании.' };
                        return { color: '#4CAF50', text: 'Высокий ROAS — реклама эффективна!' };
                    }
                },
                {
                    id: 'cpc', name: 'CPC',
                    formula: 'Затраты на рекламу / Количество кликов',
                    description: 'Cost Per Click — стоимость одного клика по рекламному объявлению.',
                    threshold: 'SaaS: <$5 хорошо, e-com: <$1 хорошо',
                    inputs: [
                        { label: 'Затраты на рекламу, $', placeholder: '5000', key: 'spend', min: 0 },
                        { label: 'Количество кликов', placeholder: '10000', key: 'clicks', min: 1 }
                    ],
                    calculate: v => {
                        const sp = sanitizeNumber(v.spend);
                        const cl = sanitizeNumber(v.clicks);
                        if (sp === null || cl === null || cl <= 0) return null;
                        return (sp / cl).toFixed(3);
                    },
                    unit: '$',
                    insight: val => {
                        if (val > 5) return { color: '#F44336', text: 'Высокий CPC. Пересмотрите таргетинг.' };
                        if (val > 1) return { color: '#FFC107', text: 'Средний CPC. Есть куда оптимизировать.' };
                        return { color: '#4CAF50', text: 'Низкий CPC — эффективные объявления!' };
                    }
                },
                {
                    id: 'ctr', name: 'CTR',
                    formula: '(Клики / Показы) × 100%',
                    description: 'Click-Through Rate — кликабельность объявления или контента.',
                    threshold: 'Email: >20% хорошо. Баннеры: >0.1%. Поиск: >2%',
                    inputs: [
                        { label: 'Количество кликов', placeholder: '500', key: 'clicks', min: 0 },
                        { label: 'Количество показов', placeholder: '50000', key: 'impressions', min: 1 }
                    ],
                    calculate: v => {
                        const cl = sanitizeNumber(v.clicks);
                        const imp = sanitizeNumber(v.impressions);
                        if (cl === null || imp === null || imp <= 0) return null;
                        return ((cl / imp) * 100).toFixed(2);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 0.5) return { color: '#F44336', text: 'Очень низкий CTR. Улучшите креатив.' };
                        if (val < 2) return { color: '#FFC107', text: 'Средний CTR. Тестируйте разные подходы.' };
                        return { color: '#4CAF50', text: 'Высокий CTR — объявление цепляет!' };
                    }
                },
                {
                    id: 'bounceRate', name: 'Bounce Rate',
                    formula: '(Сессии с 1 страницей / Все сессии) × 100%',
                    description: 'Процент сессий, когда пользователь просмотрел только одну страницу и ушёл.',
                    threshold: 'Плохо: >70%, Средне: 40–70%, Хорошо: <40%',
                    inputs: [
                        { label: 'Сессии с одной страницей', placeholder: '3500', key: 'bounced', min: 0 },
                        { label: 'Всего сессий', placeholder: '10000', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const b = sanitizeNumber(v.bounced);
                        const t = sanitizeNumber(v.total);
                        if (b === null || t === null || t <= 0) return null;
                        return ((b / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val > 70) return { color: '#F44336', text: 'Высокий отказ. Улучшите релевантность и скорость.' };
                        if (val > 40) return { color: '#FFC107', text: 'Средний отказ. Поработайте над вовлечением.' };
                        return { color: '#4CAF50', text: 'Низкий отказ — пользователи изучают сайт.' };
                    }
                },
                {
                    id: 'engagementRate', name: 'Engagement Rate',
                    formula: '(Активные взаимодействия / Достигшие охвата) × 100%',
                    description: 'Engagement Rate — доля аудитории, которая активно взаимодействовала (лайк / коммент / шер / клик). Главная метрика SMM и контент-маркетинга.',
                    threshold: 'Соцсети: <1% плохо, 1–3% норма, 3–6% хорошо, >6% отлично',
                    inputs: [
                        { label: 'Взаимодействия (likes + comments + shares + clicks)', placeholder: '450', key: 'engagements', min: 0, help: 'Общее число активных взаимодействий с постом / постами за период.' },
                        { label: 'Охват / Reach', placeholder: '15000', key: 'reach', min: 1, help: 'Уникальные пользователи, которые увидели контент (не impressions — это разные числа).' }
                    ],
                    calculate: v => {
                        const e = sanitizeNumber(v.engagements);
                        const r = sanitizeNumber(v.reach);
                        if (e === null || r === null || r <= 0) return null;
                        return ((e / r) * 100).toFixed(2);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 1) return { color: '#F44336', text: 'Низкий engagement. Контент не цепляет — пересмотрите формат/темы.' };
                        if (val < 3) return { color: '#FFC107', text: 'Норма для большинства брендов в Instagram/X.' };
                        if (val < 6) return { color: '#4CAF50', text: 'Хороший engagement — комьюнити вовлечено.' };
                        return { color: '#4CAF50', text: 'Отличный engagement — top-tier creator-уровень.' };
                    }
                },
                {
                    id: 'cpm', name: 'CPM',
                    formula: '(Затраты на рекламу / Показы) × 1000',
                    description: 'Cost Per Mille — стоимость 1000 показов рекламы. Базовая метрика стоимости охвата в медийной и соцсетевой рекламе.',
                    threshold: 'Дисплей $1–5, соцсети $5–15, видео/OLV $10–30 (зависит от гео и таргета)',
                    inputs: [
                        { label: 'Затраты на рекламу, $', placeholder: '5000', key: 'spend', min: 0 },
                        { label: 'Показы (impressions)', placeholder: '800000', key: 'impressions', min: 1 }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.spend);
                        const i = sanitizeNumber(v.impressions);
                        if (s === null || i === null || i <= 0) return null;
                        return ((s / i) * 1000).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'CPM — стоимость охвата, а не результата. Оценивайте вместе с CTR и CR: дешёвый CPM при низком CTR дороже в пересчёте на клиента (CAC).' })
                },
                {
                    id: 'cartAbandonment', name: 'Cart Abandonment Rate',
                    formula: '(1 − Покупки / Корзины) × 100%',
                    description: 'Доля созданных корзин, не завершившихся покупкой. Один из главных индикаторов трения на чекауте в e-commerce.',
                    threshold: 'Средне по индустрии ~70%. Хорошо: <60%, Тревожно: >75%',
                    inputs: [
                        { label: 'Покупки (завершённые заказы)', placeholder: '2400', key: 'purchases', min: 0 },
                        { label: 'Созданные корзины', placeholder: '8000', key: 'carts', min: 1 }
                    ],
                    calculate: v => {
                        const p = sanitizeNumber(v.purchases);
                        const c = sanitizeNumber(v.carts);
                        if (p === null || c === null || c <= 0) return null;
                        return ((1 - p / c) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val > 75) return { color: '#F44336', text: 'Высокий процент брошенных корзин. Уберите трение: гость-чекаут, прозрачная доставка, больше способов оплаты, email-возвраты.' };
                        if (val > 60) return { color: '#FFC107', text: 'Около среднего по индустрии (~70%). Тестируйте упрощение чекаута и ретаргетинг.' };
                        return { color: '#4CAF50', text: 'Низкая для e-commerce доля брошенных корзин — чекаут работает хорошо.' };
                    }
                },
                {
                    id: 'mer', name: 'MER (Marketing Efficiency Ratio)',
                    formula: 'Общая выручка / Общие маркетинговые затраты',
                    description: 'Blended-эффективность маркетинга: сколько выручки приносит каждый доллар суммарных рекламных затрат. В отличие от ROAS считается по всему бизнесу, а не по кампании.',
                    threshold: 'DTC-ориентир: <2 слабо, 2–3 норма, 3–5 хорошо, >5 отлично',
                    inputs: [
                        { label: 'Общая выручка, $', placeholder: '300000', key: 'totalRevenue', min: 0 },
                        { label: 'Общие маркетинговые затраты, $', placeholder: '90000', key: 'totalSpend', min: 1 }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.totalRevenue);
                        const s = sanitizeNumber(v.totalSpend);
                        if (r === null || s === null || s <= 0) return null;
                        return (r / s).toFixed(2);
                    },
                    unit: '×',
                    insight: val => {
                        if (val < 2) return { color: '#F44336', text: 'Маркетинг съедает маржу. При MER <2 в DTC рост обычно убыточен — пересмотрите каналы и AOV.' };
                        if (val < 3) return { color: '#FFC107', text: 'Норма. Следите за трендом MER и связкой с контрибуционной маржой.' };
                        return { color: '#4CAF50', text: 'Эффективный blended-маркетинг. Можно осторожно масштабировать бюджет, пока MER держится.' };
                    }
                },
                {
                    id: 'cpa', name: 'CPA',
                    formula: 'Затраты / Целевые действия (конверсии)',
                    description: 'Cost Per Action — стоимость одного целевого действия (покупка, регистрация, заявка). В отличие от CPC учитывает только результаты, а не клики.',
                    threshold: 'Оценивайте вместе с CR и LTV; «дешёвый» CPA ≠ качественный трафик',
                    inputs: [
                        { label: 'Затраты, $', placeholder: '8000', key: 'spend', min: 0, help: 'Полные затраты на канал/кампанию за период.' },
                        { label: 'Целевые действия (конверсии)', placeholder: '320', key: 'actions', min: 1, help: 'Число совершённых целевых действий (покупки, заявки, регистрации).' }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.spend);
                        const a = sanitizeNumber(v.actions);
                        if (s === null || a === null || a <= 0) return null;
                        return (s / a).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'CPA сам по себе ничего не говорит — оценивайте в связке с CR и LTV. Дешёвый CPA при плохом качестве лидов дороже в пересчёте на клиента.' })
                },
                {
                    id: 'cpl', name: 'CPL',
                    formula: 'Затраты / Количество лидов',
                    description: 'Cost Per Lead — стоимость привлечения одного лида. Базовая метрика эффективности лидогенерации; имеет смысл только вместе с качеством лидов и конверсией в сделку.',
                    threshold: 'Оценивайте с CR лида в клиента и CAC; дешёвый CPL ≠ дешёвый клиент',
                    inputs: [
                        { label: 'Затраты, $', placeholder: '12000', key: 'spend', min: 0, help: 'Полные затраты на лидогенерацию за период.' },
                        { label: 'Количество лидов', placeholder: '600', key: 'leads', min: 1, help: 'Число полученных лидов (заявок/контактов) за тот же период.' }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.spend);
                        const l = sanitizeNumber(v.leads);
                        if (s === null || l === null || l <= 0) return null;
                        return (s / l).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'CPL оценивайте вместе с конверсией лида в клиента и итоговым CAC. Дешёвый CPL при низком качестве лидов раздувает CAC.' })
                },
                {
                    id: 'cpi', name: 'CPI',
                    formula: 'Затраты на привлечение / Установки',
                    description: 'Cost Per Install — стоимость одной установки приложения. Базовая метрика mobile UA; сравнивается с LTV и ARPPU, чтобы установки окупались.',
                    threshold: 'Оценивайте вместе с LTV/ARPPU и retention; дешёвая установка ≠ платящий пользователь',
                    inputs: [
                        { label: 'Затраты на привлечение, $', placeholder: '15000', key: 'spend', min: 0, help: 'Рекламный бюджет на UA-кампанию за период.' },
                        { label: 'Установки', placeholder: '7500', key: 'installs', min: 1, help: 'Число установок приложения, атрибутированных кампании.' }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.spend);
                        const i = sanitizeNumber(v.installs);
                        if (s === null || i === null || i <= 0) return null;
                        return (s / i).toFixed(2);
                    },
                    unit: '$',
                    insight: val => ({ color: '#2A6DF4', text: 'CPI имеет смысл только в связке с LTV/ARPPU и retention. Дешёвая установка без удержания и монетизации убыточна.' })
                },
                {
                    id: 'openRate', name: 'Email Open Rate',
                    formula: '(Открытия / Доставлено) × 100%',
                    description: 'Доля доставленных писем, которые были открыты. Базовая метрика email-маркетинга; зависит от темы письма, отправителя и репутации домена.',
                    threshold: 'Плохо: <15%, Средне: 15–25%, Хорошо: >25%',
                    inputs: [
                        { label: 'Открытия писем', placeholder: '4200', key: 'opens', min: 0, help: 'Число открытий (уникальных или всех — будьте последовательны).' },
                        { label: 'Доставлено писем', placeholder: '20000', key: 'delivered', min: 1, help: 'Письма, дошедшие до инбокса (отправлено минус bounce).' }
                    ],
                    calculate: v => {
                        const o = sanitizeNumber(v.opens);
                        const d = sanitizeNumber(v.delivered);
                        if (o === null || d === null || d <= 0) return null;
                        return ((o / d) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 15) return { color: '#F44336', text: 'Низкий Open Rate. Работайте над темой письма, отправителем и репутацией домена.' };
                        if (val < 25) return { color: '#FFC107', text: 'Норма. Тестируйте темы и сегментацию; следите за CTOR, а не только за открытиями.' };
                        return { color: '#4CAF50', text: 'Высокий Open Rate — аудитория вовлечена. Смотрите дальше на CTOR и конверсию.' };
                    }
                },
                {
                    id: 'ctor', name: 'CTOR',
                    formula: '(Уникальные клики / Уникальные открытия) × 100%',
                    description: 'Click-To-Open Rate — доля открывших письмо, которые кликнули по ссылке. В отличие от обычного CTR не зависит от Open Rate и точнее измеряет качество контента письма.',
                    threshold: 'Плохо: <10%, Средне: 10–20%, Хорошо: >20%',
                    inputs: [
                        { label: 'Уникальные клики', placeholder: '900', key: 'clicks', min: 0, help: 'Уникальные клики по ссылкам внутри письма.' },
                        { label: 'Уникальные открытия', placeholder: '4200', key: 'opens', min: 1, help: 'Уникальные открытия письма — знаменатель CTOR.' }
                    ],
                    calculate: v => {
                        const c = sanitizeNumber(v.clicks);
                        const o = sanitizeNumber(v.opens);
                        if (c === null || o === null || o <= 0) return null;
                        return ((c / o) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 10) return { color: '#F44336', text: 'Низкий CTOR — контент письма не цепляет. Улучшайте оффер, CTA и релевантность.' };
                        if (val < 20) return { color: '#FFC107', text: 'Норма. CTOR не зависит от Open Rate — тестируйте контент и расположение CTA.' };
                        return { color: '#4CAF50', text: 'Высокий CTOR — контент письма попадает в цель. Хороший сигнал для конверсии.' };
                    }
                }
            ]
        },
        qa: {
            name: 'QA',
            metrics: [
                {
                    id: 'bugRate', name: 'Bug Rate',
                    formula: 'Количество багов / Размер (KLOC или спринт)',
                    description: 'Частота обнаружения дефектов. Можно считать на 1000 строк кода или на спринт.',
                    threshold: 'Плохо: >5, Средне: 2–5, Хорошо: <2',
                    inputs: [
                        { label: 'Количество багов', placeholder: '27', key: 'bugs', min: 0 },
                        { label: 'Размер (тыс. строк кода / кол-во спринтов)', placeholder: '15', key: 'size', min: 0.01 }
                    ],
                    calculate: v => {
                        const b = sanitizeNumber(v.bugs);
                        const s = sanitizeNumber(v.size);
                        if (b === null || s === null || s <= 0) return null;
                        return (b / s).toFixed(2);
                    },
                    unit: 'багов/KLOC',
                    insight: val => {
                        if (val > 5) return { color: '#F44336', text: 'Высокая плотность багов. Нужно улучшить тестирование.' };
                        if (val > 2) return { color: '#FFC107', text: 'Средняя плотность. Можно улучшить.' };
                        return { color: '#4CAF50', text: 'Низкая плотность — качественный код.' };
                    }
                },
                {
                    id: 'testCoverage', name: 'Test Coverage',
                    formula: '(Покрытые требования / Всего требований) × 100%',
                    description: 'Доля требований или строк кода, покрытых автотестами.',
                    threshold: 'Плохо: <50%, Средне: 50–80%, Хорошо: >80%',
                    inputs: [
                        { label: 'Покрытые требования/строки', placeholder: '85', key: 'covered', min: 0 },
                        { label: 'Всего требований/строк', placeholder: '100', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const c = sanitizeNumber(v.covered);
                        const t = sanitizeNumber(v.total);
                        if (c === null || t === null || t <= 0) return null;
                        return ((c / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 50) return { color: '#F44336', text: 'Низкое покрытие. Риск багов.' };
                        if (val < 80) return { color: '#FFC107', text: 'Среднее покрытие. Добавьте тестов.' };
                        return { color: '#4CAF50', text: 'Хорошее покрытие — уверенность в коде.' };
                    }
                },
                {
                    id: 'defectDensity', name: 'Defect Density',
                    formula: 'Количество дефектов / KLOC',
                    description: 'Плотность дефектов на тысячу строк кода.',
                    threshold: 'Плохо: >5, Средне: 2–5, Хорошо: <2',
                    inputs: [
                        { label: 'Дефекты', placeholder: '42', key: 'defects', min: 0 },
                        { label: 'KLOC (тыс. строк кода)', placeholder: '20', key: 'kloc', min: 0.01 }
                    ],
                    calculate: v => {
                        const d = sanitizeNumber(v.defects);
                        const k = sanitizeNumber(v.kloc);
                        if (d === null || k === null || k <= 0) return null;
                        return (d / k).toFixed(2);
                    },
                    unit: 'дефектов/KLOC',
                    insight: val => {
                        if (val > 5) return { color: '#F44336', text: 'Высокая плотность. Проведите ревью.' };
                        if (val > 2) return { color: '#FFC107', text: 'Средняя плотность. Нормально.' };
                        return { color: '#4CAF50', text: 'Низкая плотность — код чист.' };
                    }
                }
            ]
        },
        support: {
            name: 'Support',
            metrics: [
                {
                    id: 'csat', name: 'CSAT',
                    formula: '(Оценки 4–5 / Всего оценок) × 100%',
                    description: 'Customer Satisfaction Score — доля довольных клиентов (оценки 4–5 из 5).',
                    threshold: 'Плохо: <70%, Средне: 70–85%, Хорошо: >85%',
                    inputs: [
                        { label: 'Положительные оценки (4 и 5)', placeholder: '320', key: 'pos', min: 0 },
                        { label: 'Всего оценок', placeholder: '400', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const p = sanitizeNumber(v.pos);
                        const t = sanitizeNumber(v.total);
                        if (p === null || t === null || t <= 0) return null;
                        return ((p / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 70) return { color: '#F44336', text: 'Низкий CSAT. Улучшайте качество поддержки.' };
                        if (val < 85) return { color: '#FFC107', text: 'Средний CSAT. Есть потенциал.' };
                        return { color: '#4CAF50', text: 'Высокий CSAT — клиенты довольны!' };
                    }
                },
                {
                    id: 'nps', name: 'NPS',
                    formula: '(% Промоутеров − % Детракторов) = (Пром. − Детр.) / Всего × 100',
                    description: 'Net Promoter Score — готовность рекомендовать продукт. Диапазон: −100 до +100.',
                    threshold: 'Плохо: <0, Средне: 0–30, Хорошо: >30, Отлично: >50',
                    inputs: [
                        { label: 'Промоутеры (оценки 9–10)', placeholder: '150', key: 'promoters', min: 0, help: 'Готовы рекомендовать. Только 9 и 10 — даже 8 это «пассивные».' },
                        { label: 'Детракторы (оценки 0–6)', placeholder: '40', key: 'detractors', min: 0, help: 'Недовольные. Любая оценка 0–6 (даже 6 это негатив для NPS).' },
                        { label: 'Всего ответивших', placeholder: '250', key: 'total', min: 1, help: 'Промоутеры + пассивные (7–8) + детракторы. Не путать с числом всех получивших опрос.' }
                    ],
                    calculate: v => {
                        const prom = sanitizeNumber(v.promoters);
                        const det = sanitizeNumber(v.detractors);
                        const t = sanitizeNumber(v.total);
                        if (prom === null || det === null || t === null || t <= 0) return null;
                        return (((prom - det) / t) * 100).toFixed(1);
                    },
                    unit: '',
                    insight: val => {
                        if (val < 0) return { color: '#F44336', text: 'Отрицательный NPS. Требуются срочные меры.' };
                        if (val < 30) return { color: '#FFC107', text: 'NPS средний. Работайте над лояльностью.' };
                        if (val <= 50) return { color: '#4CAF50', text: 'Высокий NPS — много промоутеров!' };
                        if (val <= 70) return { color: '#4CAF50', text: 'Очень высокий NPS — клиенты вас любят!' };
                        return { color: '#4CAF50', text: 'Отличный NPS — мирового уровня (>70)!' };
                    }
                },
                {
                    id: 'fcr', name: 'FCR',
                    formula: '(Решённые с первого обращения / Всего тикетов) × 100%',
                    description: 'First Contact Resolution — процент обращений, решённых с первого контакта.',
                    threshold: 'Плохо: <60%, Средне: 60–80%, Хорошо: >80%',
                    inputs: [
                        { label: 'Решено с первого обращения', placeholder: '156', key: 'resolved', min: 0 },
                        { label: 'Всего тикетов', placeholder: '200', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const r = sanitizeNumber(v.resolved);
                        const t = sanitizeNumber(v.total);
                        if (r === null || t === null || t <= 0) return null;
                        return ((r / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 60) return { color: '#F44336', text: 'Низкий FCR. Обучите поддержку.' };
                        if (val < 80) return { color: '#FFC107', text: 'Средний FCR. Можно улучшить.' };
                        return { color: '#4CAF50', text: 'Высокий FCR — эффективная поддержка!' };
                    }
                },
                {
                    id: 'sla', name: 'SLA',
                    formula: '(Тикеты обработаны в срок / Всего тикетов) × 100%',
                    description: 'Service Level Agreement — доля обращений, обработанных в оговорённые сроки.',
                    threshold: 'Плохо: <90%, Средне: 90–98%, Хорошо: >98%',
                    inputs: [
                        { label: 'Тикеты обработаны в срок', placeholder: '180', key: 'met', min: 0 },
                        { label: 'Всего тикетов', placeholder: '200', key: 'total', min: 1 }
                    ],
                    calculate: v => {
                        const m = sanitizeNumber(v.met);
                        const t = sanitizeNumber(v.total);
                        if (m === null || t === null || t <= 0) return null;
                        return ((m / t) * 100).toFixed(1);
                    },
                    unit: '%',
                    insight: val => {
                        if (val < 90) return { color: '#F44336', text: 'Нарушение SLA. Увеличьте ресурсы поддержки.' };
                        if (val < 98) return { color: '#FFC107', text: 'SLA близко к норме. Оптимизируйте процессы.' };
                        return { color: '#4CAF50', text: 'SLA выполняется — отлично!' };
                    }
                },
                {
                    id: 'ces', name: 'CES (Customer Effort Score)',
                    formula: 'Сумма оценок усилий / Кол-во ответов (шкала 1–7)',
                    description: 'Customer Effort Score — насколько легко клиенту было решить свой вопрос. Респонденты оценивают утверждение «компания упростила решение» по шкале 1–7. Сильный предиктор лояльности.',
                    threshold: 'Шкала 1–7: <5 высокое трение, 5–6 норма, >6 отлично',
                    inputs: [
                        { label: 'Сумма оценок усилий', placeholder: '780', key: 'sumScores', min: 0, help: 'Сумма всех ответов по шкале 1–7 (где 7 = «очень легко»).' },
                        { label: 'Количество ответов', placeholder: '130', key: 'responses', min: 1 }
                    ],
                    calculate: v => {
                        const s = sanitizeNumber(v.sumScores);
                        const r = sanitizeNumber(v.responses);
                        if (s === null || r === null || r <= 0) return null;
                        return (s / r).toFixed(1);
                    },
                    unit: 'балл',
                    insight: val => {
                        if (val < 5) return { color: '#F44336', text: 'Высокое усилие клиента — сильный предиктор оттока. Убирайте трение в саппорте и продукте.' };
                        if (val < 6) return { color: '#FFC107', text: 'Норма. Низкое усилие удерживает лучше, чем «восторг» — ищите узкие места.' };
                        return { color: '#4CAF50', text: 'Клиентам легко — отличный предиктор лояльности и повторных покупок.' };
                    }
                },
                {
                    id: 'avgResolutionTime', name: 'Avg Resolution Time',
                    formula: 'Суммарное время решения / Решённые тикеты',
                    description: 'Среднее время полного решения тикета (от создания до закрытия). Чем меньше — тем лучше. Норма сильно зависит от приоритета: P1/critical решают быстрее, чем общие запросы.',
                    threshold: 'Меньше — лучше. Зависит от приоритета: P1 быстрее, рутинные запросы дольше',
                    inputs: [
                        { label: 'Суммарное время решения, ч', placeholder: '960', key: 'totalHours', min: 0, help: 'Сумма часов на решение всех закрытых тикетов за период.' },
                        { label: 'Решённые тикеты', placeholder: '240', key: 'ticketsResolved', min: 1, help: 'Число закрытых (решённых) тикетов за тот же период.' }
                    ],
                    calculate: v => {
                        const h = sanitizeNumber(v.totalHours);
                        const t = sanitizeNumber(v.ticketsResolved);
                        if (h === null || t === null || t <= 0) return null;
                        return (h / t).toFixed(1);
                    },
                    unit: 'ч',
                    insight: val => ({ color: '#2A6DF4', text: 'Чем меньше — тем лучше, но оценивайте по приоритетам: для P1/critical нужны часы, для рутинных запросов норма выше. Смотрите вместе с FCR, SLA и CSAT.' })
                }
            ]
        }
    };

    // ---- СОСТОЯНИЕ ----
    let currentSection = 'b2c';
    let currentMetricId = 'dau';
    let searchQuery = '';
    let currentIndustry = 'universal';

    // ---- ОТРАСЛЕВЫЕ ПОРОГИ ----
    // Для метрик, где пороги сильно зависят от отрасли.
    // Формат: { metricId: { industry: 'строка для renderBenchmarks' } }
    const INDUSTRY_THRESHOLDS = {
        mau: {
            universal: 'Счётчик — «нормы» нет. Сравнивайте через Stickiness (DAU/MAU) и YoY-рост',
            saas:      'Считайте активных по продуктовому действию, а не по логину; смотрите с NRR',
            ecom:      'Менее показателен — ключевые метрики: сессии, CR, Repeat Purchase Rate',
            mobile:    'Ключевой знаменатель для Stickiness; здоровый DAU/MAU для соцприложений >20%',
            media:     'Смотрите вместе с частотой визитов и глубиной просмотра',
        },
        arr: {
            universal: 'Счётчик — зрелость задаётся YoY-ростом и Rule of 40 (рост + маржа ≥ 40%)',
            saas:      'T2D3-траектория: triple-triple-double-double-double от $1–2M ARR',
            ecom:      'Менее релевантно — в e-com считают GMV и выручку, а не ARR',
            mobile:    'Применимо к подписочным приложениям; иначе смотрите ARPDAU × DAU',
            media:     'Подписочная выручка в годовом выражении; следите за Churn подписок',
        },
        acv: {
            universal: 'Задаёт модель продаж: чем выше ACV, тем длиннее цикл и дороже sales',
            saas:      'PLG/SMB: <$5K, Mid-market: $15–50K, Enterprise: $100K+',
            ecom:      'Менее релевантно — аналог для розницы это AOV',
            mobile:    'Менее релевантно — для apps смотрите ARPPU и LTV',
            media:     'B2B-подписки/лицензии: обычно $5–50K в год',
        },
        acquisition: {
            universal: 'Счётчик — качество важнее объёма. Оценивайте с CAC, Activation и LTV:CAC',
            saas:      'Смотрите не регистрации, а долю доходящих до активации и trial→paid',
            ecom:      'Ключевое — CAC на первый заказ и окупаемость через Repeat Purchase Rate',
            mobile:    'Инсталлы без retention D1/D7 бессмысленны — считайте вместе с CPI',
            media:     'Регистрации важны в связке с конверсией в платную подписку',
        },
        revenue: {
            universal: 'Счётчик — здоровье задают рост, маржа и unit-экономика, а не абсолют',
            saas:      'Смотрите на MRR/ARR и его состав (New / Expansion / Churned)',
            ecom:      'Разделяйте gross и net revenue (возвраты, скидки); следите за маржой',
            mobile:    'Разделяйте IAP, подписки и рекламу — у них разная маржинальность',
            media:     'Разделяйте подписочную и рекламную выручку; у рекламы выше волатильность',
        },
        burnRate: {
            universal: 'Оценивается только через Runway и Burn Multiple, а не в абсолюте',
            saas:      'Считайте net burn; целевой Burn Multiple <1.5 (Sacks: <1 — отлично)',
            ecom:      'Учитывайте оборотный капитал и закупку товара — это тоже отток кэша',
            mobile:    'Основной burn — UA-бюджет; контролируйте через окупаемость LTV/CPI',
            media:     'Контент-производство — главная статья; смотрите на выручку с контента',
        },
        bugRate: {
            universal: 'Плохо: >5 баг/1000 строк, Норма: 1–5, Хорошо: <1',
            saas:      'Зрелые команды держат <1 на 1000 строк при code review и CI',
            ecom:      'Критично для чекаута — баги там напрямую бьют по конверсии',
            mobile:    'Учитывайте crash-free rate (цель >99.5%) как отдельный сигнал',
            media:     'Ключевое — стабильность плеера и скорость отдачи контента',
        },
        defectDensity: {
            universal: 'Плохо: >5 дефектов/KLOC, Норма: 1–5, Хорошо: <1 (уровень зрелых команд)',
            saas:      'Индустриальная норма ~1–3/KLOC; <0.5 — уровень high-maturity',
            ecom:      'Считайте отдельно для платёжного и чекаут-контура — там цена дефекта выше',
            mobile:    'Смотрите вместе с crash-free sessions и рейтингом в сторах',
            media:     'Приоритет — дефекты воспроизведения и раздачи контента',
        },
        cpa: {
            universal: 'Зависит от LTV: CPA должен быть кратно ниже ценности действия',
            saas:      'B2B trial/демо: $30–$150; оценивайте с trial→paid CR',
            ecom:      'Покупка: $5–$40 в зависимости от AOV и маржи',
            mobile:    'Регистрация/первая покупка: $1–$20, сравнивайте с LTV',
            media:     'Подписка/регистрация: $2–$25; важна окупаемость через ARPU',
        },
        cpl: {
            universal: 'Зависит от качества лида и конверсии в клиента',
            saas:      'B2B SaaS: $20–$200 за MQL; смотрите CR лида в сделку',
            ecom:      'Менее релевантно — чаще считают CPA на покупку',
            mobile:    'Менее релевантно — для apps считают CPI/CPA',
            media:     'Подписка/рассылка: $1–$15 за лид',
        },
        cpi: {
            universal: 'Метрика mobile UA; оценивайте с LTV/ARPPU и retention',
            saas:      'Менее релевантно — это mobile-метрика',
            ecom:      'Shopping-apps: $1–$5; ROAS важнее самого CPI',
            mobile:    'Gaming $1–$5, non-gaming $2–$8 (зависит от гео и ОС)',
            media:     'Контент-apps: $1–$4; ключевое — окупаемость через подписку',
        },
        arppu: {
            universal: 'Всегда выше ARPU; смотрите вместе с долей платящих (PUR)',
            saas:      'B2B: ARPPU ≈ ACV/12; растёт через апселы и тарифы',
            ecom:      'ARPPU ≈ AOV × частота на платящего клиента',
            mobile:    'F2P: $5–$50/мес у платящих; «киты» сильно сдвигают среднее',
            media:     'Подписка: близко к цене тарифа; апселлы поднимают ARPPU',
        },
        openRate: {
            universal: 'Плохо: <15%, Норма: 15–25%, Хорошо: >25%',
            saas:      'B2B-рассылки: 20–35% (триггерные письма выше)',
            ecom:      'Промо-рассылки: 15–25%; брошенная корзина выше',
            mobile:    'Onboarding/триггеры: 25–45%; смотрите вместе с push',
            media:     'Newsletters: 30–50% у лояльной аудитории',
        },
        ctor: {
            universal: 'Плохо: <10%, Норма: 10–20%, Хорошо: >20%',
            saas:      'B2B: 10–20%; триггерные письма выше',
            ecom:      'Промо: 8–15%; зависит от оффера и сегментации',
            mobile:    'Onboarding-серии: 15–25%',
            media:     'Newsletters: 12–22% у вовлечённой аудитории',
        },
        featureAdoption: {
            universal: 'Плохо: <20%, Норма: 20–40%, Хорошо: >40%',
            saas:      'Core-фичи >40%; вспомогательные 10–25% — норма',
            ecom:      'Wishlist/отзывы 15–30%; зависит от сценария',
            mobile:    'Новая фича за первый месяц: 20–40% активных',
            media:     'Плейлисты/подписки на авторов: 25–45%',
        },
        leadVelocityRate: {
            universal: 'Плохо: <0%, Норма: 0–10%, Хорошо: >10% MoM',
            saas:      'Растущий B2B SaaS: 10–20%+ MoM — здоровый темп',
            ecom:      'Менее релевантно — чаще считают рост заказов',
            mobile:    'Менее релевантно — UA измеряют установками',
            media:     'B2B ad sales: 5–15% MoM — норма',
        },
        cashConversionScore: {
            universal: 'Плохо: <0.5, Норма: 0.5–1, Хорошо: >1 (elite)',
            saas:      'Bessemer: >1 — elite, 0.5–1 — норма, <0.5 — неэффективно',
            ecom:      'Менее релевантно — используйте contribution margin и ROIC',
            mobile:    'Менее релевантно — смотрите ROAS и payback',
            media:     'Менее релевантно — оцените unit-экономику подписки',
        },
        avgResolutionTime: {
            universal: 'Меньше — лучше. Зависит от приоритета и канала',
            saas:      'B2B: P1 < 4ч, обычные тикеты < 24–48ч',
            ecom:      'Розница: < 24ч для большинства обращений',
            mobile:    'In-app саппорт: первые ответы быстрее, решение < 24ч',
            media:     'Подписочное медиа: < 24–48ч для большинства запросов',
        },
        wau: {
            universal: 'Счётчик. Смотрите DAU/WAU и WAU/MAU',
            saas:      'Для рабочих инструментов WAU ≈ 50–80% от MAU',
            ecom:      'Менее релевантно — смотрите частоту покупок',
            mobile:    'WAU/MAU 40–70% — норма для соцсетей и daily-апп',
            media:     'WAU важна для контента с недельным циклом',
        },
        netNewMrr: {
            universal: 'Должен быть положительным и расти MoM',
            saas:      'Здоровье: доля Expansion растёт, Churned MRR < 1–2%/мес',
            ecom:      'Менее релевантно — используйте выручку и RPR',
            mobile:    'Подписочные F2P/apps: следите за net adds MRR',
            media:     'Подписочное медиа: положительный Net New MRR каждый месяц',
        },
        contributionMargin: {
            universal: 'Плохо: <20%, Норма: 20–40%, Хорошо: 40–60%, Отлично: >60%',
            saas:      'Обычно 70–85% (близко к gross margin)',
            ecom:      'Fashion 35–55%, Beauty 50–70%, Electronics 15–30%',
            mobile:    'F2P: 60–80% после store-комиссии и платёжки',
            media:     'Подписка: 60–80%, реклама: 50–70%',
        },
        gmv: {
            universal: 'Счётчик оборота. Важна динамика MoM/YoY и Take Rate',
            saas:      'Менее релевантно — используйте MRR/ARR',
            ecom:      'Главная метрика масштаба; смотрите рост MoM/YoY',
            mobile:    'Релевантно для in-app маркетплейсов',
            media:     'Менее релевантно — используйте выручку',
        },
        takeRate: {
            universal: 'Маркетплейсы: 10–20% норма, 20–30% сильно, >30% риск',
            saas:      'Менее релевантно — это marketplace-метрика',
            ecom:      'Goods-маркетплейсы 10–20%, услуги 20–30%',
            mobile:    'App-маркетплейсы: 15–30% (после store-fee)',
            media:     'Контент-платформы: 30–50% (выше из-за дистрибуции)',
        },
        quotaAttainment: {
            universal: 'Реп: >100% отлично; команда: 60–70% репов в квоте — норма',
            saas:      'B2B SaaS: 60–70% репов выполняют квоту — здоровая планка',
            ecom:      'B2B-направление e-com: аналогично SaaS',
            mobile:    'B2B mobile sales: 60–70% репов в квоте',
            media:     'Ad sales: 65–75% репов выполняют план',
        },
        cpm: {
            universal: 'Дисплей: $1–5, Соцсети: $5–15, Видео: $10–30',
            saas:      'B2B LinkedIn: $15–40, Google Display: $2–8',
            ecom:      'Meta/Instagram: $5–12, TikTok: $3–10, Display: $1–5',
            mobile:    'In-app/UAC: $2–8, rewarded video eCPM: $5–20',
            media:     'Programmatic display: $1–4, premium video: $10–25',
        },
        cartAbandonment: {
            universal: 'Среднее ~70%. Хорошо: <60%, Тревожно: >75%',
            saas:      'Менее релевантно — смотрите trial→paid CR',
            ecom:      'Fashion 68–72%, Beauty 65–70%, Electronics 75–82%',
            mobile:    'Mobile web выше desktop: 78–85% — типично',
            media:     'Менее релевантно для подписочного медиа',
        },
        mer: {
            universal: 'DTC: <2 слабо, 2–3 норма, 3–5 хорошо, >5 отлично',
            saas:      'Менее релевантно — CAC Payback / Magic Number',
            ecom:      'DTC blended MER: 2.5–4 здоровый; на масштабе ≥ 3',
            mobile:    'UA-тяжёлые: 1.5–3; смотрите вместе с LTV',
            media:     'Подписочное медиа: 3–6 на зрелой базе',
        },
        ces: {
            universal: 'Шкала 1–7: <5 плохо, 5–6 норма, >6 отлично',
            saas:      'B2B SaaS support: цель ≥ 5.5; топ-команды > 6',
            ecom:      'Чекаут/возвраты: цель ≥ 6 (минимум усилий)',
            mobile:    'In-app support: ≥ 5.5; трение убивает retention',
            media:     'Подписка/биллинг: ≥ 6 — лёгкость отмены/смены тарифа',
        },
        ctr: {
            universal: 'Плохо: <1%, Норма: 1–3%, Хорошо: >3%',
            saas:      'Плохо: <1%, Норма: 2–5%, Хорошо: >5%',
            ecom:      'Плохо: <0.5%, Норма: 1–2%, Хорошо: >2%',
            mobile:    'Плохо: <0.5%, Норма: 1–3%, Хорошо: >3%',
            media:     'Плохо: <2%, Норма: 3–8%, Хорошо: >8%',
        },
        cpc: {
            universal: 'Отлично: <$0.5, Норма: $0.5–$2, Плохо: >$2',
            saas:      'Отлично: <$2, Норма: $2–$8, Плохо: >$8',
            ecom:      'Отлично: <$0.3, Норма: $0.3–$1.2, Плохо: >$1.2',
            mobile:    'Отлично: <$0.2, Норма: $0.2–$1, Плохо: >$1',
            media:     'Отлично: <$0.15, Норма: $0.15–$0.6, Плохо: >$0.6',
        },
        roas: {
            universal: 'Плохо: <100%, Норма: 100–200%, Хорошо: >300%',
            saas:      'Плохо: <150%, Норма: 150–400%, Хорошо: >400%',
            ecom:      'Плохо: <200%, Норма: 200–500%, Хорошо: >500%',
            mobile:    'Плохо: <100%, Норма: 100–250%, Хорошо: >250%',
            media:     'Плохо: <120%, Норма: 120–300%, Хорошо: >300%',
        },
        cr: {
            universal: 'Плохо: <1%, Норма: 1–3%, Хорошо: >3%',
            saas:      'Плохо: <2%, Норма: 2–8%, Хорошо: >8%',
            ecom:      'Плохо: <1%, Норма: 1–4%, Хорошо: >4%',
            mobile:    'Плохо: <1%, Норма: 1–5%, Хорошо: >5%',
            media:     'Плохо: <0.5%, Норма: 0.5–2%, Хорошо: >2%',
        },
        bounceRate: {
            universal: 'Хорошо: <40%, Норма: 40–70%, Плохо: >70%',
            saas:      'Хорошо: <35%, Норма: 35–60%, Плохо: >60%',
            ecom:      'Хорошо: <30%, Норма: 30–55%, Плохо: >55%',
            mobile:    'Хорошо: <40%, Норма: 40–65%, Плохо: >65%',
            media:     'Хорошо: <55%, Норма: 55–80%, Плохо: >80%',
        },
        churn: {
            universal: 'Отлично: <1%/мес, Норма: 1–5%/мес, Плохо: >5%/мес',
            saas:      'Отлично: <0.5%/мес, Норма: 0.5–2%/мес, Плохо: >2%/мес',
            ecom:      'Отлично: <3%/мес, Норма: 3–8%/мес, Плохо: >8%/мес',
            mobile:    'Отлично: <5%/мес, Норма: 5–15%/мес, Плохо: >15%/мес',
            media:     'Отлично: <2%/мес, Норма: 2–7%/мес, Плохо: >7%/мес',
        },
        ltv: {
            universal: 'Хорошо: LTV > 3×CAC, Отлично: LTV > 5×CAC',
            saas:      'Норма: LTV > 3×CAC, Хорошо: LTV > 5×CAC, Отлично: LTV > 8×CAC',
            ecom:      'Норма: LTV > 2×CAC, Хорошо: LTV > 3×CAC',
            mobile:    'Норма: LTV > 1.5×CAC, Хорошо: LTV > 3×CAC',
            media:     'Норма: LTV > 2×CAC, Хорошо: LTV > 4×CAC',
        },
        cac: {
            universal: 'Отлично: CAC < LTV/3, Норма: CAC < LTV/2, Плохо: CAC > LTV/2',
            saas:      'Отлично: Окупаемость <6 мес, Норма: 6–18 мес, Плохо: >18 мес',
            ecom:      'Отлично: CAC < $5, Норма: $5–$25, Плохо: >$25',
            mobile:    'Отлично: CAC < $1, Норма: $1–$5, Плохо: >$5',
            media:     'Отлично: CAC < $2, Норма: $2–$10, Плохо: >$10',
        },
        dau: {
            universal: 'Норма: Stickiness >20%, Хорошо: >40%',
            saas:      'Норма: Stickiness >30%, Хорошо: >50%, Отлично: >70%',
            ecom:      'Норма: Stickiness >5%, Хорошо: >15%',
            mobile:    'Норма: Stickiness >20%, Хорошо: >40%, Отлично: >60%',
            media:     'Норма: Stickiness >25%, Хорошо: >50%',
        },
        nps: {
            universal: 'Плохо: <0, Норма: 0–30, Хорошо: 30–70, Отлично: >70',
            saas:      'Плохо: <20, Норма: 20–40, Хорошо: 40–60, Отлично: >60',
            ecom:      'Плохо: <10, Норма: 10–40, Хорошо: 40–65, Отлично: >65',
            mobile:    'Плохо: <0, Норма: 0–25, Хорошо: 25–50, Отлично: >50',
            media:     'Плохо: <0, Норма: 0–20, Хорошо: 20–45, Отлично: >45',
        },
        mrr: {
            universal: 'Норма: MoM рост >5%, Хорошо: >10%, Отлично: >20%',
            saas:      'Норма: MoM рост >5%, Хорошо: >15%, Отлично: >25%',
            ecom:      'Норма: YoY рост >20%, Хорошо: >50%',
            mobile:    'Норма: MoM рост >8%, Хорошо: >20%',
            media:     'Норма: MoM рост >3%, Хорошо: >10%',
        },
        nrr: {
            universal: 'Плохо: <80%, Норма: 80–100%, Хорошо: 100–120%, Отлично: >120%',
            saas:      'Плохо: <90%, Норма: 90–100%, Хорошо: 100–120%, Отлично: >130%',
            ecom:      'Плохо: <70%, Норма: 70–90%, Хорошо: >100%',
            mobile:    'Плохо: <75%, Норма: 75–95%, Хорошо: >100%',
            media:     'Плохо: <80%, Норма: 80–100%, Хорошо: >110%',
        },
        csat: {
            universal: 'Плохо: <60%, Норма: 60–80%, Хорошо: >80%',
            saas:      'Плохо: <70%, Норма: 70–85%, Хорошо: >85%',
            ecom:      'Плохо: <65%, Норма: 65–85%, Хорошо: >85%',
            mobile:    'Плохо: <60%, Норма: 60–80%, Хорошо: >80%',
            media:     'Плохо: <55%, Норма: 55–75%, Хорошо: >75%',
        },
        stickiness: {
            universal: 'Плохо: <10%, Норма: 10–25%, Хорошо: >25%',
            saas:      'Плохо: <15%, Норма: 15–30%, Хорошо: >30%, Отлично: >50%',
            ecom:      'Плохо: <3%, Норма: 3–10%, Хорошо: >10%',
            mobile:    'Плохо: <10%, Норма: 10–25%, Хорошо: >25%, Отлично: >40%',
            media:     'Плохо: <12%, Норма: 12–30%, Хорошо: >30%',
        },
        retention: {
            universal: 'Плохо: <30%, Норма: 30–60%, Хорошо: >60%',
            saas:      'Плохо: <70%, Норма: 70–85%, Хорошо: >85% (по логин когортам D30)',
            ecom:      'Плохо: <20%, Норма: 20–40%, Хорошо: >40% (повторная покупка 90д)',
            mobile:    'Плохо: <15% D30, Норма: 15–30%, Хорошо: >30%',
            media:     'Плохо: <25%, Норма: 25–50%, Хорошо: >50%',
        },
        retention_aarrr: {
            universal: 'Плохо: <30%, Норма: 30–60%, Хорошо: >60%',
            saas:      'Плохо: <60%, Норма: 60–80%, Хорошо: >80%',
            ecom:      'Плохо: <20%, Норма: 20–40%, Хорошо: >40%',
            mobile:    'Плохо: <15%, Норма: 15–30%, Хорошо: >30%',
            media:     'Плохо: <20%, Норма: 20–45%, Хорошо: >45%',
        },
        activation: {
            universal: 'Плохо: <30%, Норма: 30–60%, Хорошо: >60%',
            saas:      'Плохо: <40%, Норма: 40–65%, Хорошо: >65%',
            ecom:      'Плохо: <25%, Норма: 25–50%, Хорошо: >50%',
            mobile:    'Плохо: <30%, Норма: 30–55%, Хорошо: >55%',
            media:     'Плохо: <20%, Норма: 20–45%, Хорошо: >45%',
        },
        referral: {
            universal: 'Плохо: <0.3, Норма: 0.3–1, Хорошо: >1 (вирусный рост)',
            saas:      'Плохо: <0.2, Норма: 0.2–0.6, Хорошо: >0.6, Виральность: >1',
            ecom:      'Плохо: <0.15, Норма: 0.15–0.5, Хорошо: >0.5',
            mobile:    'Плохо: <0.4, Норма: 0.4–1, Хорошо: >1',
            media:     'Плохо: <0.5, Норма: 0.5–1.5, Хорошо: >1.5',
        },
        arpu: {
            universal: 'Зависит от модели — сравнивайте с CAC',
            saas:      'B2B: $50–$500/мес, SMB: $20–$100, Enterprise: >$500',
            ecom:      'Норма: $5–$50/мес активного покупателя',
            mobile:    'Free-to-play: $0.05–$5, Premium app: $1–$20',
            media:     'Подписка: $3–$15, Реклама: $0.5–$5',
        },
        grr: {
            universal: 'Плохо: <80%, Норма: 80–95%, Хорошо: >95%',
            saas:      'Плохо: <85%, Норма: 85–95%, Хорошо: >95%, Отлично: >97%',
            ecom:      'Плохо: <75%, Норма: 75–90%, Хорошо: >90%',
            mobile:    'Плохо: <70%, Норма: 70–88%, Хорошо: >88%',
            media:     'Плохо: <80%, Норма: 80–92%, Хорошо: >92%',
        },
        cacPayback: {
            universal: 'Хорошо: <12 мес, Норма: 12–24 мес, Плохо: >24 мес',
            saas:      'Хорошо: <12 мес, Норма: 12–18 мес, Плохо: >18 мес',
            ecom:      'Хорошо: <3 мес, Норма: 3–9 мес, Плохо: >9 мес',
            mobile:    'Хорошо: <6 мес, Норма: 6–12 мес, Плохо: >12 мес',
            media:     'Хорошо: <9 мес, Норма: 9–18 мес, Плохо: >18 мес',
        },
        ltv_cac: {
            universal: 'Плохо: <1 (убыток), Норма: 1–3, Хорошо: >3, Отлично: >5',
            saas:      'Плохо: <2, Норма: 2–4, Хорошо: 4–6, Отлично: >6',
            ecom:      'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3',
            mobile:    'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3',
            media:     'Плохо: <2, Норма: 2–4, Хорошо: >4',
        },
        testCoverage: {
            universal: 'Плохо: <50%, Норма: 50–80%, Хорошо: >80%',
            saas:      'Плохо: <60%, Норма: 60–85%, Хорошо: >85%',
            ecom:      'Плохо: <55%, Норма: 55–80%, Хорошо: >80%',
            mobile:    'Плохо: <50%, Норма: 50–75%, Хорошо: >75%',
            media:     'Плохо: <40%, Норма: 40–70%, Хорошо: >70%',
        },
        fcr: {
            universal: 'Плохо: <60%, Норма: 60–80%, Хорошо: >80%',
            saas:      'Плохо: <65%, Норма: 65–82%, Хорошо: >82%',
            ecom:      'Плохо: <55%, Норма: 55–75%, Хорошо: >75%',
            mobile:    'Плохо: <60%, Норма: 60–78%, Хорошо: >78%',
            media:     'Плохо: <50%, Норма: 50–72%, Хорошо: >72%',
        },
        sla: {
            universal: 'Плохо: <90%, Норма: 90–98%, Хорошо: >98%',
            saas:      'Плохо: <95%, Норма: 95–99%, Хорошо: >99% (Enterprise: 99.9%)',
            ecom:      'Плохо: <92%, Норма: 92–98%, Хорошо: >98%',
            mobile:    'Плохо: <90%, Норма: 90–97%, Хорошо: >97%',
            media:     'Плохо: <88%, Норма: 88–96%, Хорошо: >96%',
        },
        burnMultiple: {
            universal: 'Отлично: <1, Хорошо: 1–1.5, Норма: 1.5–2, Плохо: >2',
            saas:      'Отлично: <1 (top decile), Хорошо: 1–1.5, Норма: 1.5–2.5, Плохо: >2.5',
            ecom:      'Отлично: <1.5, Норма: 1.5–2.5, Плохо: >2.5',
            mobile:    'Отлично: <1.2, Норма: 1.2–2, Плохо: >2',
            media:     'Отлично: <1.5, Норма: 1.5–3, Плохо: >3',
        },
        magicNumber: {
            universal: 'Плохо: <0.5, Норма: 0.5–1, Хорошо: 1–1.5, Отлично: >1.5',
            saas:      'Плохо: <0.5, Норма: 0.5–0.75, Хорошо: 0.75–1, Отлично: >1',
            ecom:      'Плохо: <0.7, Норма: 0.7–1.2, Хорошо: >1.2',
            mobile:    'Плохо: <0.6, Норма: 0.6–1, Хорошо: >1',
            media:     'Плохо: <0.4, Норма: 0.4–0.8, Хорошо: >0.8',
        },
        ruleOf40: {
            universal: 'Плохо: <20%, Норма: 20–40%, Хорошо: ≥40%, Отлично: >60%',
            saas:      'Плохо: <30%, Норма: 30–40%, Хорошо: 40–60%, Отлично: >60%',
            ecom:      'Плохо: <15%, Норма: 15–30%, Хорошо: >30%',
            mobile:    'Плохо: <20%, Норма: 20–35%, Хорошо: >35%',
            media:     'Плохо: <10%, Норма: 10–25%, Хорошо: >25%',
        },
        quickRatio: {
            universal: 'Плохо: <1, Норма: 1–2, Хорошо: 2–4, Отлично: >4',
            saas:      'Плохо: <2, Норма: 2–4, Хорошо: 4–6, Отлично: >6 (Bessemer benchmark)',
            ecom:      'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3',
            mobile:    'Плохо: <2, Норма: 2–4, Хорошо: >4',
            media:     'Плохо: <1.5, Норма: 1.5–3, Хорошо: >3',
        },
        grossMargin: {
            universal: 'Низко: <40%, Норма: 40–70%, Хорошо: 70–80%, Отлично: >80%',
            saas:      'Плохо: <60%, Норма: 60–75%, Хорошо: 75–85%, Отлично: >85%',
            ecom:      'Плохо: <30%, Норма: 30–45%, Хорошо: >45%',
            mobile:    'Плохо: <50%, Норма: 50–70%, Хорошо: >70%',
            media:     'Плохо: <40%, Норма: 40–60%, Хорошо: >60%',
        },
        runway: {
            universal: 'Критично: <6 мес, Рисковано: 6–12, Норма: 12–18, Хорошо: >18',
            saas:      'Pre-seed/seed: 18–24 мес — норма; Series A+: >18 мес',
            ecom:      'Зависит от сезонности; >12 мес страховка',
            mobile:    'Норма для F2P: >12 мес (long monetization curve)',
            media:     'Норма: >12 мес (медленная монетизация контента)',
        },
        salesVelocity: {
            universal: 'Главное — рост MoM/QoQ, не абсолютное число',
            saas:      'Цель: рост ≥ 20% QoQ. Ускорители: ACV ↑, win rate ↑, цикл ↓',
            ecom:      'Применимо для enterprise B2B-направления e-com',
            mobile:    'Применимо для B2B mobile-инструментов',
            media:     'Применимо для ad sales команд',
        },
        winRate: {
            universal: 'Плохо: <15%, Норма: 15–25%, Хорошо: 25–35%, Отлично: >35%',
            saas:      'B2B SaaS норма: 20–25%, SMB sales 25–35%, mid-market 18–28%',
            ecom:      'Конверсия в покупку: 1–4% (не B2B win rate)',
            mobile:    'B2B mobile sales: 18–30%',
            media:     'Ad sales: 20–35%',
        },
        pipelineCoverage: {
            universal: 'Плохо: <2x, Норма: 2–3x, Хорошо: 3–4x, Отлично: >4x',
            saas:      'B2B SaaS: 3–4× от quota — стандарт; new logo sales: 4–6×',
            ecom:      'B2B-направление: 3× от плана',
            mobile:    '3–4×',
            media:     '3–4× от целей по ad-revenue',
        },
        timeToValue: {
            universal: 'Мгновенно: <1 день, Быстро: 1–7, Норма: 7–30, Медленно: >30',
            saas:      'PLG: <1 день, B2B sales-led: 1–14, Enterprise: 14–90 (с onboarding)',
            ecom:      'Мгновенно после первой покупки. Days to first repeat: 14–30',
            mobile:    'Должно быть <1 день — иначе D1 retention упадёт',
            media:     'Мгновенно при первой релевантной статье',
        },
        arpdau: {
            universal: 'Free-to-play: $0.05–$5, Premium: $0.5–$20',
            saas:      'Менее релевантно — используйте ARPU/MRR per customer',
            ecom:      'Менее релевантно — используйте AOV и repeat rate',
            mobile:    'F2P top tier: $0.30–$1, mid: $0.10–$0.30, низко: <$0.05',
            media:     'Подписка: $0.10–$0.50, реклама: $0.02–$0.20',
        },
        salesCycleLength: {
            universal: 'B2B SMB <30 дней, Mid-market 30–90, Enterprise 90–180+',
            saas:      'PLG: <14 дней, SMB: 14–60, Mid-market: 60–120, Enterprise: 120–365',
            ecom:      'Менее релевантно — циклы измеряются в днях',
            mobile:    'B2B mobile: 30–90 дней',
            media:     'Ad sales: 30–90 дней',
        },
        mrrGrowthRate: {
            universal: 'MoM: <5% низко, 5–10% норма, 10–20% хорошо, >20% отлично',
            saas:      'YC-стандарт: 5–7% MoM минимум; T2D3 = 100% YoY за 3 года',
            ecom:      'Менее релевантно для не-подписочных моделей',
            mobile:    'F2P/SaaS hybrid: 10–25% MoM на growth-фазе',
            media:     'Подписочное медиа: 5–15% MoM норма',
        },
        aov: {
            universal: 'E-com среднее: $50–$150, Премиум >$200',
            saas:      'Менее релевантно — используйте ACV',
            ecom:      'Fashion: $80–$200, Beauty: $40–$120, Electronics: >$200, Маркетплейс: $20–$80',
            mobile:    'In-app purchases: $5–$30',
            media:     'Подписка: $5–$15/мес → $60–$180/год',
        },
        repeatPurchaseRate: {
            universal: 'Плохо: <10%, Норма: 20–30%, Хорошо: 30–50%, Отлично: >50%',
            saas:      'Не применимо — используйте Retention / NRR',
            ecom:      'Fashion 25–35%, Beauty 35–50%, Subscription >70%',
            mobile:    'In-app repeat purchase 15–30%',
            media:     'Менее релевантно — используйте Retention',
        },
        engagementRate: {
            universal: '<1% плохо, 1–3% норма, 3–6% хорошо, >6% отлично',
            saas:      'B2B-контент: 2–5% хорошо',
            ecom:      'Brand посты: 1–3% норма',
            mobile:    'Push notification engagement: 3–8% норма',
            media:     'Editorial: 4–8% хорошо, viral >10%',
        },
    };

    function getThreshold(metric) {
        const ind = INDUSTRY_THRESHOLDS[metric.id];
        if (!ind) return metric.threshold; // нет отраслевых данных — используем дефолтный
        return ind[currentIndustry] || metric.threshold;
    }

    function initIndustry() {
        const pillsContainer = document.getElementById('industryPills');
        if (!pillsContainer) return;
        pillsContainer.querySelectorAll('.industry-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                currentIndustry = btn.dataset.industry;
                pillsContainer.querySelectorAll('.industry-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Обновить пороги на текущей метрике
                const metric = getCurrentMetric();
                if (metric && benchmarksEl) {
                    benchmarksEl.innerHTML = renderBenchmarks(getThreshold(metric)) + renderSources(metric.id);
                }
            });
        });
    }

    // ---- DOM ----
    const sectionCards = document.querySelectorAll('.section-card');
    const metricsListDiv = document.getElementById('metricsListItems');
    const metricChipsDiv = document.getElementById('metricChips');
    const sectionTitleEl = document.getElementById('sectionTitle');
    const metricNameEl = document.getElementById('metricName');
    const formulaInlineEl = document.getElementById('formulaInline');
    const metricDescEl = document.getElementById('metricDesc');
    const thresholdHintEl = null; // removed, replaced by benchmarks
    const inputFieldsDiv = document.getElementById('inputFields');
    const resultBlock = document.getElementById('resultBlock');
    const resultValue = document.getElementById('resultValue');
    const insightMessage = document.getElementById('insightMessage');
    const validationError = document.getElementById('validationError');
    const clearBtn = document.getElementById('clearAllBtn');
    const copyBtn = document.getElementById('copyBtn');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchDropdown = document.getElementById('searchDropdown');
    const noResults = document.getElementById('noResults');
    const benchmarksEl = document.getElementById('benchmarks');
    const metricCard = document.getElementById('metricCard');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCancel = document.getElementById('modalCancel');
    const modalConfirm = document.getElementById('modalConfirm');

    // ---- ВСПОМОГАТЕЛЬНЫЕ ----
    function renderBenchmarks(thresholdStr) {
        if (!thresholdStr) return '';
        // Translate the entire threshold string first, then split for styling.
        const translated = window._tThresh ? window._tThresh(thresholdStr) : thresholdStr;
        return translated.split(',').map(s => s.trim()).filter(Boolean).map(part => {
            const low = part.toLowerCase();
            let cls = 'bench-mid';
            // Match RU + EN + UZ keywords for color coding
            if (low.startsWith('плохо') || low.startsWith('bad') || low.startsWith('yomon') || low.startsWith('критично') || low.startsWith('critical') || low.startsWith('kritik') || low.startsWith('низко') || low.startsWith('low') || low.startsWith('past')) cls = 'bench-bad';
            else if (low.startsWith('хорошо') || low.startsWith('отлично') || low.startsWith('good') || low.startsWith('excellent') || low.startsWith('yaxshi') || low.startsWith('ajoyib')) cls = 'bench-good';
            return `<span class="bench ${cls}">${part}</span>`;
        }).join('');
    }

    function getCurrentMetric() {
        const section = metricsData[currentSection];
        if (!section) return null;
        return section.metrics.find(m => m.id === currentMetricId) || section.metrics[0];
    }

    function getFieldErrorMessage(inp, val) {
        const clean = val.replace(/[\u00A0 ]/g, '');
        const num = parseFloat(clean);
        if (clean === '') return null;
        if (isNaN(num)) return 'Введите числовое значение';
        const allowsNegative = inp.min !== undefined && inp.min < 0;
        if (num < 0 && !allowsNegative) return 'Значение не может быть отрицательным';
        if (inp.min !== undefined && num < inp.min) {
            if (inp.min === 1 || inp.min === 0.01) return 'Значение должно быть больше 0 (деление на ноль недопустимо)';
            return `Минимальное значение: ${inp.min}`;
        }
        if (inp.max !== undefined && num > inp.max) return `Максимальное значение: ${inp.max}`;
        return null;
    }

    function validateAndGetValues(metric) {
        const values = {};
        let hasAnyValue = false;
        let allValid = true;
        let errorMessages = [];

        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            const errEl = document.getElementById(`err-${inp.key}`);
            if (!el) return;

            const val = el.value.replace(/[\u00A0 ]/g, '');
            const errMsg = getFieldErrorMessage(inp, val);

            if (val !== '') hasAnyValue = true;

            if (errMsg) {
                allValid = false;
                el.classList.add('error');
                if (errEl) { errEl.textContent = errMsg; errEl.classList.add('show'); }
                errorMessages.push(`«${inp.label}»: ${errMsg}`);
            } else {
                el.classList.remove('error');
                if (errEl) errEl.classList.remove('show');
            }

            if (val === '') allValid = false;
            values[inp.key] = val;
        });

        return { values, hasAnyValue, allValid, errorMessages };
    }

    function updateResult() {
        const metric = getCurrentMetric();
        if (!metric) return;

        const { values, hasAnyValue, allValid, errorMessages } = validateAndGetValues(metric);

        validationError.classList.remove('show');
        validationError.textContent = '';

        if (!hasAnyValue) {
            resultBlock.style.display = 'none';
            return;
        }

        if (!allValid) {
            resultBlock.style.display = 'none';
            // Показываем сводную плашку только если есть ошибки И они не из inline-валидации полей
            // (inline-ошибки и так показаны под каждым полем — плашка снизу была дублёром).
            // Оставляем плашку только для случая, когда нет полей с введёнными ошибочными значениями
            // — например, при разделах с явной перекрёстной валидацией. Сейчас таких нет, поэтому скрываем.
            return;
        }

        const rawResult = metric.calculate(values);

        if (rawResult === null || rawResult === undefined || (typeof rawResult === 'number' && isNaN(rawResult))) {
            validationError.textContent = 'Невозможно вычислить: проверьте введённые значения.';
            validationError.classList.add('show');
            resultBlock.style.display = 'none';
            return;
        }

        // Поддержка Infinity как корректного результата (например, Quick Ratio при нуле потерь)
        const numericResult = rawResult === Infinity ? Infinity : parseFloat(rawResult);
        const displayResult = rawResult === Infinity ? '∞' : String(rawResult);
        let displayHtml = formatNum(displayResult);
        if (metric.unit) displayHtml += ` <small>${localizeUnit(metric.unit)}</small>`;
        resultValue.innerHTML = displayHtml;

        const isFinite = numericResult === Infinity || (!isNaN(numericResult) && Number.isFinite(numericResult));
        if ((isFinite || numericResult === Infinity) && metric.insight) {
            const ins = metric.insight(numericResult);
            resultValue.style.color = ins.color;
            insightMessage.textContent = window._tInsight ? window._tInsight(ins.text) : ins.text;
            insightMessage.style.borderLeftColor = ins.color;
            insightMessage.style.display = '';
        } else {
            resultValue.style.color = 'var(--accent)';
            insightMessage.textContent = '';
            insightMessage.style.display = 'none';
        }

        resultBlock.style.display = 'block';
        resultBlock.classList.remove('result-animate');
        void resultBlock.offsetWidth;
        resultBlock.classList.add('result-animate');
        renderSnapshotsBlock();
        if (window.track) window.track('calc', { metric: metric.id, lang: (window._currentLang ? window._currentLang() : 'ru') });
    }

    function saveCurrentValues() {
        const metric = getCurrentMetric();
        if (!metric) return;
        const values = {};
        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            if (el) values[inp.key] = el.value.replace(/[\u00A0 ]/g, '');
        });
        storedValues[currentMetricId] = values;
        saveToLS(storedValues);
    }

    function restoreValues(metricId) {
        const metric = getCurrentMetric();
        if (!metric) return;
        const saved = storedValues[metricId];
        // Auto-prefill for THIS metric if user has no saved values for it yet.
        // Fires both on first-ever visit AND when user lands via deep-link on a metric
        // they haven't used before (even if other metrics have stored values).
        // Every metric page shows instant aha → never empty calculator.
        const isFirstVisit = !saved || Object.keys(saved).length === 0;
        let prefilled = false;
        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            if (!el) return;
            let raw = (saved && saved[inp.key] !== undefined) ? saved[inp.key] : '';
            if (!raw && isFirstVisit && inp.placeholder != null) {
                raw = String(inp.placeholder);
                prefilled = true;
            }
            el.value = raw ? formatNum(raw) : '';
        });
        // Save the prefilled values so the user can edit them naturally and they persist.
        if (prefilled) {
            const values = {};
            metric.inputs.forEach(inp => {
                const el = document.getElementById(`input-${inp.key}`);
                if (el) values[inp.key] = el.value.replace(/[  ]/g, '');
            });
            storedValues[metricId] = values;
            saveToLS(storedValues);
        }
    }

    // Manual "Try example" — fills current metric with placeholder values, useful even
    // for returning users who want to reset to canonical example.
    function fillExampleValues() {
        const metric = getCurrentMetric();
        if (!metric) return;
        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            if (!el || inp.placeholder == null) return;
            el.value = formatNum(String(inp.placeholder));
        });
        saveCurrentValues();
        updateResult();
        renderMetricsList();
        updateSectionBadges();
        showToast(t('toast.example_filled', '🎲 Заполнены примерные значения'), 'success');
    }
    window.fillExampleValues = fillExampleValues;

    function clearAll() {
        storedValues = {};
        saveToLS(storedValues);
        const metric = getCurrentMetric();
        if (metric) {
            metric.inputs.forEach(inp => {
                const el = document.getElementById(`input-${inp.key}`);
                const errEl = document.getElementById(`err-${inp.key}`);
                if (el) { el.value = ''; el.classList.remove('error'); }
                if (errEl) errEl.classList.remove('show');
            });
        }
        resultBlock.style.display = 'none';
        validationError.classList.remove('show');
    }

    // ---- РЕНДЕРЫ ----
    function renderMetricsList() {
        const section = metricsData[currentSection];
        if (!section) return;
        sectionTitleEl.textContent = (currentLang === 'ru' ? 'Метрики ' : t('sectionTitle.prefix', 'Метрики ')) + section.name;

        const q = searchQuery.toLowerCase();
        let listHtml = '';
        let chipsHtml = '';
        let visibleCount = 0;

        section.metrics.forEach(metric => {
            const activeClass = metric.id === currentMetricId ? ' active' : '';
            const match = !q || metric.name.toLowerCase().includes(q) || metric.description.toLowerCase().includes(q);
            const hiddenClass = match ? '' : ' hidden';
            if (match) visibleCount++;
            const saved = storedValues[metric.id];
            const hasDot = saved && Object.values(saved).some(v => v !== '');
            const dotHtml = hasDot ? '<span class="metric-dot" title="Есть сохранённые значения"></span>' : '';
            const localizedName = tm(metric.id, 'name', metric.name);
            listHtml += `<div class="metric-item${activeClass}${hiddenClass}" data-metric-id="${metric.id}"><span class="metric-item-name">${localizedName}</span>${dotHtml}</div>`;
            chipsHtml += `<div class="metric-chip${activeClass}${hiddenClass}" data-metric-id="${metric.id}">${localizedName}${hasDot ? ' ·' : ''}</div>`;
        });

        metricsListDiv.innerHTML = listHtml;
        metricChipsDiv.innerHTML = chipsHtml;
        noResults.classList.toggle('show', visibleCount === 0);

        // Scroll active chip into view
        const activeChip = metricChipsDiv.querySelector('.metric-chip.active');
        if (activeChip) activeChip.scrollIntoView({ inline: 'nearest', behavior: 'smooth' });

        // Bind clicks on both list items and chips
        document.querySelectorAll('.metric-item, .metric-chip').forEach(item => {
            item.addEventListener('click', () => {
                const metricId = item.dataset.metricId;
                if (metricId && metricId !== currentMetricId) {
                    saveCurrentValues();
                    currentMetricId = metricId;
                    renderMetricsList();
                    renderMetricCard();
                }
            });
        });
    }

    function renderMetricCard() {
        const metric = getCurrentMetric();
        if (!metric) return;

        // Fade-in animation
        metricCard.classList.remove('animating');
        void metricCard.offsetWidth;
        metricCard.classList.add('animating');

        metricNameEl.textContent = tm(metric.id, 'name', metric.name);
        formulaInlineEl.textContent = tm(metric.id, 'formula', metric.formula);
        metricDescEl.textContent = tm(metric.id, 'description', metric.description);
        benchmarksEl.innerHTML = renderBenchmarks(getThreshold(metric)) + renderSources(metric.id);

        let inputsHtml = '';
        metric.inputs.forEach(inp => {
            const tooltipHtml = inp.help
                ? `<span class="tooltip-wrap"><button type="button" class="tooltip-icon" tabindex="0" aria-label="Подсказка к полю">i</button><span class="tooltip-bubble" role="tooltip">${escapeHtml(window._tTooltip ? window._tTooltip(inp.help) : inp.help)}</span></span>`
                : '';
            inputsHtml += `
                <div class="input-group">
                    <label for="input-${inp.key}">${localizeLabel(inp.label)}${tooltipHtml}</label>
                    <input type="text" id="input-${inp.key}" placeholder="${formatNum(inp.placeholder)}" value="" autocomplete="off" inputmode="decimal">
                    <div class="input-error-msg" id="err-${inp.key}"></div>
                </div>`;
        });
        inputFieldsDiv.innerHTML = inputsHtml;

        validationError.classList.remove('show');
        resultBlock.style.display = 'none';

        restoreValues(metric.id);

        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            if (el) {
                el.addEventListener('input', () => { formatInputEl(el); saveCurrentValues(); updateResult(); renderMetricsList(); updateSectionBadges(); });
            }
        });

        // Auto-focus first input
        const firstInput = inputFieldsDiv.querySelector('input');
        if (firstInput && !('ontouchstart' in window)) {
            setTimeout(() => firstInput.focus(), 50);
        }

        // Закрываем What-If и Goal при смене метрики
        whatifOpen = false;
        if (whatifBtn) { whatifBtn.classList.remove('open'); }
        if (whatifPanel) { whatifPanel.classList.remove('open'); whatifPanel.innerHTML = ''; }
        goalOpen = false;
        if (goalBtn) { goalBtn.classList.remove('open'); }
        if (goalPanel) { goalPanel.classList.remove('open'); goalPanel.innerHTML = ''; }
        refreshGoalButtonVisibility();
        forecastOpen = false;
        if (forecastBtn) { forecastBtn.classList.remove('open'); }
        if (forecastPanel) { forecastPanel.classList.remove('open'); forecastPanel.innerHTML = ''; }
        if (typeof refreshForecastButtonVisibility === 'function') refreshForecastButtonVisibility();

        updateResult();
        updatePageTitle();
        renderRelated(metric.id);
        renderSnapshotsBlock();
        updateSectionBadges();
        syncCleanURL();
        // Deep-dive content (top-10 metrics only)
        const slot = document.getElementById('deepContentSlot');
        if (slot) slot.innerHTML = renderDeepContent(metric.id);
    }

    function setActiveSection(sectionId) {
        saveCurrentValues();
        currentSection = sectionId;

        sectionCards.forEach(card => {
            card.classList.toggle('active', card.dataset.section === sectionId);
        });

        const section = metricsData[sectionId];
        if (section && section.metrics.length > 0) {
            const q = searchQuery.toLowerCase();
            const visible = section.metrics.filter(m =>
                !q || m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
            );
            currentMetricId = visible.length > 0 ? visible[0].id : section.metrics[0].id;
        }

        renderMetricsList();
        renderMetricCard();
    }

    // ---- КОПИРОВАНИЕ ----
    copyBtn.addEventListener('click', () => {
        const metric = getCurrentMetric();
        const rawText = resultValue.textContent || resultValue.innerText || '';
        const insightText = insightMessage.textContent;
        const textToCopy = metric ? `${metric.name}: ${rawText.trim()}${insightText ? ' | ' + insightText : ''}` : rawText.trim();
        const onOk = () => showToast('✓ Результат скопирован', 'success');
        navigator.clipboard.writeText(textToCopy).then(onOk).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = textToCopy;
            ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
            document.body.appendChild(ta); ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            onOk();
        });
    });

    // ---- ПОИСК ----
    function renderSearchDropdown(q) {
        if (!q) { searchDropdown.classList.remove('open'); return; }
        const ql = q.toLowerCase();
        let html = '';
        let total = 0;
        for (const [sid, section] of Object.entries(metricsData)) {
            const matches = section.metrics.filter(m =>
                m.name.toLowerCase().includes(ql) || m.description.toLowerCase().includes(ql)
            );
            if (!matches.length) continue;
            total += matches.length;
            html += `<div class="search-dropdown-group"><div class="search-dropdown-section">${section.name}</div>`;
            matches.forEach(m => {
                const act = m.id === currentMetricId && sid === currentSection ? ' active' : '';
                html += `<div class="search-dropdown-item${act}" data-sid="${sid}" data-mid="${m.id}">${tm(m.id, 'name', m.name)}</div>`;
            });
            html += '</div>';
        }
        if (!total) html = '<div class="search-dropdown-empty">Ничего не найдено</div>';
        searchDropdown.innerHTML = html;
        searchDropdown.classList.add('open');
        searchDropdown.querySelectorAll('.search-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                const sid = item.dataset.sid;
                const mid = item.dataset.mid;
                searchInput.value = '';
                searchQuery = '';
                searchClear.classList.remove('visible');
                searchDropdown.classList.remove('open');
                saveCurrentValues();
                currentSection = sid;
                sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === sid));
                currentMetricId = mid;
                renderMetricsList();
                renderMetricCard();
            });
        });
    }

    let searchTimeout;
    searchInput.addEventListener('input', () => {
        const val = searchInput.value.trim();
        searchClear.classList.toggle('visible', val.length > 0);

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = val;
            renderMetricsList();
            renderSearchDropdown(val);
        }, 150);
    });

    searchInput.addEventListener('focus', () => {
        if (searchQuery) renderSearchDropdown(searchQuery);
    });

    document.addEventListener('click', e => {
        if (!searchDropdown.contains(e.target) && e.target !== searchInput) {
            searchDropdown.classList.remove('open');
        }
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        searchDropdown.classList.remove('open');
        renderMetricsList();
    });

    // ---- RESET SINGLE METRIC ----
    function resetCurrentMetric() {
        const metric = getCurrentMetric();
        if (!metric) return;
        let hadValues = false;
        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            const errEl = document.getElementById(`err-${inp.key}`);
            if (el && el.value) hadValues = true;
            if (el) { el.value = ''; el.classList.remove('error'); }
            if (errEl) errEl.classList.remove('show');
        });
        if (storedValues[metric.id]) delete storedValues[metric.id];
        saveToLS(storedValues);
        resultBlock.style.display = 'none';
        validationError.classList.remove('show');
        renderMetricsList();
        updateSectionBadges();
        if (hadValues) showToast(`↻ ${metric.name} — значения сброшены`, 'success');
    }
    const resetMetricBtn = document.getElementById('resetMetricBtn');
    if (resetMetricBtn) resetMetricBtn.addEventListener('click', resetCurrentMetric);

    // ---- HEADER MORE-MENU ----
    const moreMenuBtn = document.getElementById('moreMenuBtn');
    const moreMenuPop = document.getElementById('moreMenuPop');
    if (moreMenuBtn && moreMenuPop) {
        moreMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = moreMenuPop.classList.toggle('open');
            moreMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        document.addEventListener('click', e => {
            if (!moreMenuPop.contains(e.target) && e.target !== moreMenuBtn) {
                moreMenuPop.classList.remove('open');
                moreMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
        // Закрываем меню после любого клика по его пунктам
        moreMenuPop.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                moreMenuPop.classList.remove('open');
                moreMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
        // Доп. действия из меню
        const snapMenu = document.getElementById('snapshotMenuBtn');
        if (snapMenu) snapMenu.addEventListener('click', () => {
            const realSnap = document.getElementById('snapshotBtn');
            if (realSnap && resultBlock.style.display !== 'none') realSnap.click();
            else showToast('Сначала рассчитайте метрику', 'error');
        });
        const searchMenu = document.getElementById('searchMenuBtn');
        if (searchMenu) searchMenu.addEventListener('click', () => searchInput.focus());
        const helpMenu = document.getElementById('helpMenuBtn');
        if (helpMenu) helpMenu.addEventListener('click', () => {
            const ov = document.getElementById('helpOverlay');
            if (ov) ov.classList.add('show');
        });
        const aboutMenu = document.getElementById('aboutMenuBtn');
        if (aboutMenu) aboutMenu.addEventListener('click', () => {
            const ov = document.getElementById('aboutOverlay');
            if (ov) ov.classList.add('show');
        });
        const csvImportMenu = document.getElementById('csvImportBtn');
        if (csvImportMenu) csvImportMenu.addEventListener('click', () => {
            const ov = document.getElementById('csvImportOverlay');
            if (ov) ov.classList.add('show');
            setTimeout(() => document.getElementById('csvImportText')?.focus(), 100);
        });
        const compare2MenuBtn = document.getElementById('compare2Btn');
        if (compare2MenuBtn) compare2MenuBtn.addEventListener('click', () => openCompare2());
        const pricingMenu = document.getElementById('pricingMenuBtn');
        if (pricingMenu) pricingMenu.addEventListener('click', () => {
            const ov = document.getElementById('pricingOverlay');
            if (ov) ov.classList.add('show');
        });
        // PDF report — Pro feature, opens pricing modal as paywall
        const pdfBtn = document.getElementById('pdfExportBtn');
        if (pdfBtn) pdfBtn.addEventListener('click', () => {
            const ov = document.getElementById('pricingOverlay');
            if (ov) ov.classList.add('show');
            showToast(window._t ? window._t('pdf.coming_soon', 'PDF-отчёт — Pro-фича. Подпишитесь на waitlist для раннего доступа.') : 'PDF — Pro feature, join waitlist', 'success');
        });
        const embedMenu = document.getElementById('embedMenuBtn');
        if (embedMenu) embedMenu.addEventListener('click', () => {
            const m = currentMetricId || 'ltv';
            const embedUrl = `https://metricstree.vercel.app/${m}?embed=1`;
            const iframe = `<iframe src="${embedUrl}" width="100%" height="640" style="border:1px solid #ddd;border-radius:8px;" loading="lazy" title="MetricTree — ${m}"></iframe>`;
            const onOk = () => showToast('🔗 Embed-код скопирован', 'success');
            if (window.track) window.track('embed_copy', { metric: m });
            navigator.clipboard.writeText(iframe).then(onOk).catch(() => {
                const ta = document.createElement('textarea');
                ta.value = iframe; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
                document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
                onOk();
            });
        });
    }

    // ---- МОДАЛКА ОЧИСТКИ ----
    clearBtn.addEventListener('click', () => { modalOverlay.classList.add('show'); });
    modalCancel.addEventListener('click', () => { modalOverlay.classList.remove('show'); });
    modalConfirm.addEventListener('click', () => { modalOverlay.classList.remove('show'); clearAll(); });
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) modalOverlay.classList.remove('show'); });

    // ---- СЕКЦИИ ----
    sectionCards.forEach(card => {
        const activate = () => {
            const sectionId = card.dataset.section;
            if (sectionId) { searchInput.value = ''; searchQuery = ''; searchClear.classList.remove('visible'); setActiveSection(sectionId); }
        };
        card.addEventListener('click', activate);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
        });
    });
    // Sync aria-selected when active section changes (мутация-наблюдатель за классом 'active')
    const _ariaSync = new MutationObserver(() => {
        sectionCards.forEach(c => c.setAttribute('aria-selected', c.classList.contains('active') ? 'true' : 'false'));
    });
    sectionCards.forEach(c => _ariaSync.observe(c, { attributes: true, attributeFilter: ['class'] }));

    // ---- KEYBOARD SHORTCUTS ----
    function navigateMetrics(dir) {
        const section = metricsData[currentSection];
        const q = searchQuery.toLowerCase();
        const visible = section.metrics.filter(m =>
            !q || m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
        );
        const idx = visible.findIndex(m => m.id === currentMetricId);
        const next = visible[Math.max(0, Math.min(visible.length - 1, idx + dir))];
        if (next && next.id !== currentMetricId) {
            saveCurrentValues();
            currentMetricId = next.id;
            renderMetricsList();
            renderMetricCard();
        }
    }

    document.addEventListener('keydown', e => {
        const inInput = document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA');

        // Esc → снять фокус / закрыть модалки
        if (e.key === 'Escape') {
            if (document.activeElement === searchInput) searchInput.blur();
            if (modalOverlay.classList.contains('show')) modalOverlay.classList.remove('show');
            document.getElementById('templatesOverlay').style.display = 'none';
            closeCompare();
            return;
        }

        if (inInput) return; // дальнейшие хоткеи не работают внутри полей ввода

        // ↑/↓ → навигация по метрикам в текущем разделе
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateMetrics(e.key === 'ArrowDown' ? 1 : -1);
        }

        // ←/→ → переключение между разделами
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const sectionIds = Object.keys(metricsData);
            const idx = sectionIds.indexOf(currentSection);
            const next = sectionIds[e.key === 'ArrowRight'
                ? Math.min(idx + 1, sectionIds.length - 1)
                : Math.max(idx - 1, 0)];
            if (next && next !== currentSection) setActiveSection(next);
        }

        // Ctrl+S / Cmd+S → сохранить снимок
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            const btn = document.getElementById('snapshotBtn');
            if (btn && resultBlock.style.display !== 'none') btn.click();
        }

        // Ctrl+D / Cmd+D → открыть дашборд
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            const dash = document.getElementById('dashboardOverlay');
            if (dash.classList.contains('open')) closeDashboard();
            else openDashboard();
        }

        // / → фокус на поиск
        if (e.key === '/') {
            e.preventDefault();
            searchInput.focus();
        }

        // ? → справка по горячим клавишам
        if (e.key === '?' || (e.shiftKey && e.key === '?')) {
            e.preventDefault();
            const ov = document.getElementById('helpOverlay');
            if (ov) ov.classList.add('show');
        }
    });

    // Help modal triggers
    (function bindHelp(){
        const ov = document.getElementById('helpOverlay');
        const close = document.getElementById('helpClose');
        if (!ov || !close) return;
        close.addEventListener('click', () => ov.classList.remove('show'));
        ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) ov.classList.remove('show'); });
    })();

    // ---- RELATED METRICS ----
    const RELATED = {
        cpa:          [{ s:'growth', id:'cpc',        note:'CPC × CR ≈ CPA' },
                       { s:'growth', id:'cr',         note:'CR превращает клики в действия' },
                       { s:'b2c', id:'cac',           note:'CAC — стоимость платящего клиента' }],
        cpl:          [{ s:'growth', id:'cpa',        note:'CPL и CPA — пара по воронке' },
                       { s:'b2c', id:'cac',           note:'лиды конвертируются в CAC' },
                       { s:'growth', id:'cr',         note:'CR лида в клиента' }],
        cpi:          [{ s:'growth', id:'cpa',        note:'CPI — install-версия CPA' },
                       { s:'b2c', id:'cac',           note:'install ≠ платящий клиент' },
                       { s:'b2c', id:'arpu',          note:'CPI окупается через ARPU/ARPPU' }],
        arppu:        [{ s:'b2c', id:'arpu',          note:'ARPU считается по всем активным' },
                       { s:'b2c', id:'ltv',           note:'ARPPU — компонент LTV платящих' },
                       { s:'b2c', id:'arpdau',        note:'ARPDAU — дневной аналог' }],
        openRate:     [{ s:'growth', id:'ctor',       note:'CTOR — следующий шаг после открытия' },
                       { s:'growth', id:'ctr',        note:'CTR письма по доставленным' },
                       { s:'growth', id:'cr',         note:'открытия ведут к конверсии' }],
        ctor:         [{ s:'growth', id:'openRate',   note:'знаменатель — открытия письма' },
                       { s:'growth', id:'ctr',        note:'CTOR vs CTR письма' },
                       { s:'growth', id:'cr',         note:'клики ведут к конверсии' }],
        featureAdoption:[{ s:'sales', id:'activation', note:'адопция — после активации' },
                         { s:'b2c', id:'retention',   note:'адопция фич растит Retention' },
                         { s:'b2c', id:'stickiness',  note:'фичи усиливают липкость' }],
        leadVelocityRate:[{ s:'finance', id:'mrrGrowthRate', note:'лиды → будущий рост MRR' },
                          { s:'finance', id:'pipelineCoverage', note:'лиды наполняют pipeline' },
                          { s:'finance', id:'salesVelocity', note:'скорость закрытия лидов' }],
        cashConversionScore:[{ s:'finance', id:'burnMultiple', note:'Burn Multiple — обратный угол' },
                             { s:'finance', id:'magicNumber', note:'эффективность роста' },
                             { s:'finance', id:'runway',  note:'burn определяет runway' }],
        avgResolutionTime:[{ s:'support', id:'fcr',    note:'FCR снижает время решения' },
                           { s:'support', id:'sla',    note:'SLA задаёт целевые сроки' },
                           { s:'support', id:'csat',   note:'быстрое решение растит CSAT' }],
        wau:          [{ s:'b2c', id:'dau',          note:'DAU/WAU — внутринедельная липкость' },
                       { s:'b2c', id:'mau',          note:'WAU/MAU — недельное удержание' },
                       { s:'b2c', id:'stickiness',   note:'Stickiness — родственная метрика' }],
        netNewMrr:    [{ s:'b2b', id:'mrr',          note:'компоненты — изменения MRR' },
                       { s:'finance', id:'mrrGrowthRate', note:'Net New MRR определяет рост' },
                       { s:'b2b', id:'quickRatio',   note:'те же компоненты New/Expansion/Churn' }],
        contributionMargin:[{ s:'finance', id:'grossMargin', note:'Gross Margin — родственная маржа' },
                            { s:'finance', id:'runway',  note:'маржа влияет на скорость burn' },
                            { s:'b2c', id:'ltv_cac',     note:'маржа входит в окупаемость' }],
        gmv:          [{ s:'finance', id:'takeRate',  note:'выручка = GMV × Take Rate' },
                       { s:'b2c', id:'aov',           note:'GMV = заказы × AOV' },
                       { s:'sales', id:'revenue',     note:'GMV ≠ выручка платформы' }],
        takeRate:     [{ s:'finance', id:'gmv',       note:'знаменатель формулы' },
                       { s:'finance', id:'grossMargin', note:'take rate влияет на маржу' },
                       { s:'sales', id:'revenue',     note:'выручка платформы = числитель' }],
        quotaAttainment:[{ s:'finance', id:'salesVelocity', note:'скорость закрытия квоты' },
                         { s:'finance', id:'winRate',  note:'win rate влияет на attainment' },
                         { s:'finance', id:'pipelineCoverage', note:'мало pipeline — недобор квоты' }],
        cpm:          [{ s:'growth', id:'cpc',        note:'CPM и CPC — пара по стоимости' },
                       { s:'growth', id:'ctr',        note:'CPM / CTR определяет CPC' },
                       { s:'growth', id:'roas',       note:'дешёвый охват ≠ дешёвый результат' }],
        cartAbandonment:[{ s:'growth', id:'cr',       note:'брошенные корзины снижают CR' },
                         { s:'growth', id:'bounceRate', note:'трение → выше bounce' },
                         { s:'b2c', id:'aov',          note:'возврат корзин растит выручку' }],
        mer:          [{ s:'growth', id:'roas',       note:'MER — blended-версия ROAS' },
                       { s:'b2c', id:'cac',           note:'MER ↑ при низком CAC' },
                       { s:'b2c', id:'ltv_cac',       note:'MER связан с unit-экономикой' }],
        ces:          [{ s:'support', id:'csat',      note:'низкое усилие → высокий CSAT' },
                       { s:'support', id:'nps',       note:'усилие предсказывает лояльность' },
                       { s:'support', id:'fcr',       note:'FCR снижает усилие клиента' }],
        dau:          [{ s:'b2c', id:'mau',       note:'Нужен для расчёта Stickiness' },
                       { s:'b2c', id:'stickiness', note:'Stickiness = DAU / MAU' }],
        mau:          [{ s:'b2c', id:'stickiness', note:'Stickiness = DAU / MAU' },
                       { s:'b2c', id:'arpu',       note:'ARPU считается по активным' }],
        stickiness:   [{ s:'b2c', id:'dau',       note:'Числитель формулы' },
                       { s:'b2c', id:'mau',        note:'Знаменатель формулы' },
                       { s:'b2c', id:'retention',  note:'Связана с удержанием' }],
        retention:    [{ s:'b2c', id:'churn',     note:'Churn = 1 − Retention' },
                       { s:'b2c', id:'ltv',        note:'Retention напрямую влияет на LTV' }],
        ltv:          [{ s:'b2c', id:'cac',       note:'LTV должен быть > 3× CAC' },
                       { s:'b2c', id:'ltv_cac',   note:'LTV:CAC — ключевое соотношение' },
                       { s:'b2c', id:'arpu',       note:'ARPU — компонент LTV' }],
        cac:          [{ s:'b2c', id:'ltv',       note:'LTV должен быть > 3× CAC' },
                       { s:'b2c', id:'ltv_cac',   note:'LTV:CAC — ключевое соотношение' },
                       { s:'b2b', id:'cacPayback', note:'Payback Period по этому CAC' }],
        ltv_cac:      [{ s:'b2c', id:'ltv',       note:'Числитель соотношения' },
                       { s:'b2c', id:'cac',        note:'Знаменатель соотношения' }],
        arpu:         [{ s:'b2c', id:'ltv',       note:'ARPU × частота × срок = LTV' },
                       { s:'b2b', id:'mrr',        note:'MRR — B2B-аналог ARPU' }],
        churn:        [{ s:'b2c', id:'retention', note:'Retention = 1 − Churn' },
                       { s:'b2b', id:'nrr',        note:'Высокий Churn снижает NRR' },
                       { s:'b2c', id:'ltv',        note:'Churn сокращает LTV' }],
        mrr:          [{ s:'b2b', id:'arr',        note:'ARR = MRR × 12' },
                       { s:'b2b', id:'nrr',        note:'NRR показывает рост MRR' },
                       { s:'b2b', id:'grr',        note:'GRR — удержание без роста' }],
        arr:          [{ s:'b2b', id:'mrr',        note:'MRR — ежемесячный источник' },
                       { s:'b2b', id:'nrr',        note:'NRR определяет рост ARR' }],
        acv:          [{ s:'b2b', id:'mrr',        note:'MRR vs ACV: разные модели' },
                       { s:'b2b', id:'cacPayback', note:'ACV определяет Payback Period' }],
        grr:          [{ s:'b2b', id:'nrr',        note:'NRR = GRR + апселы' },
                       { s:'b2b', id:'mrr',        note:'GRR считается от MRR' },
                       { s:'b2c', id:'churn',      note:'Churn — обратная сторона GRR' }],
        nrr:          [{ s:'b2b', id:'grr',        note:'GRR без учёта апселов' },
                       { s:'b2b', id:'mrr',        note:'NRR считается от MRR' },
                       { s:'b2c', id:'churn',      note:'Churn снижает NRR' }],
        cacPayback:   [{ s:'b2c', id:'cac',        note:'CAC — числитель Payback' },
                       { s:'b2b', id:'mrr',        note:'MRR на клиента — знаменатель' }],
        acquisition:  [{ s:'sales', id:'activation', note:'Activation Rate из пришедших' },
                       { s:'growth', id:'cr',        note:'CR влияет на Acquisition' }],
        activation:   [{ s:'sales', id:'acquisition',    note:'Acquisition даёт базу' },
                       { s:'sales', id:'retention_aarrr', note:'Следующий шаг воронки' }],
        retention_aarrr:[{ s:'b2c', id:'retention',      note:'Retention в B2C-модели' },
                         { s:'sales', id:'activation',    note:'Activation предшествует' }],
        referral:     [{ s:'sales', id:'acquisition', note:'Referral усиливает Acquisition' }],
        revenue:      [{ s:'b2c', id:'arpu',   note:'ARPU = Revenue / Users' },
                       { s:'b2b', id:'mrr',    note:'MRR — основной B2B-аналог' }],
        cr:           [{ s:'growth', id:'roas',      note:'CR влияет на итоговый ROAS' },
                       { s:'growth', id:'cpc',       note:'CPC × CR = стоимость клиента' },
                       { s:'growth', id:'bounceRate', note:'Высокий Bounce снижает CR' }],
        roas:         [{ s:'growth', id:'cr',  note:'CR — компонент ROAS' },
                       { s:'growth', id:'cpc', note:'CPC влияет на ROAS' },
                       { s:'b2c',   id:'cac',  note:'CAC = CPC / CR' }],
        cpc:          [{ s:'growth', id:'ctr',  note:'CTR определяет CPC' },
                       { s:'growth', id:'roas', note:'CPC влияет на ROAS' }],
        ctr:          [{ s:'growth', id:'cpc',       note:'CTR определяет CPC' },
                       { s:'growth', id:'bounceRate', note:'CTR и Bounce — пара' }],
        bounceRate:   [{ s:'growth', id:'cr',  note:'Bounce влияет на CR' },
                       { s:'growth', id:'ctr', note:'CTR и Bounce — пара' }],
        bugRate:      [{ s:'qa', id:'testCoverage',  note:'Coverage снижает Bug Rate' },
                       { s:'qa', id:'defectDensity',  note:'Defect Density — схожая метрика' }],
        testCoverage: [{ s:'qa', id:'bugRate',      note:'Coverage снижает Bug Rate' },
                       { s:'qa', id:'defectDensity', note:'Coverage снижает дефекты' }],
        defectDensity:[{ s:'qa', id:'testCoverage', note:'Coverage снижает дефекты' },
                       { s:'qa', id:'bugRate',      note:'Bug Rate — схожая метрика' }],
        csat:         [{ s:'support', id:'nps', note:'NPS — долгосрочный CSAT' },
                       { s:'support', id:'fcr', note:'FCR напрямую влияет на CSAT' }],
        nps:          [{ s:'support', id:'csat', note:'CSAT — краткосрочный аналог' },
                       { s:'b2c',    id:'churn', note:'Низкий NPS предсказывает Churn' }],
        fcr:          [{ s:'support', id:'csat', note:'FCR определяет CSAT' },
                       { s:'support', id:'sla',  note:'SLA и FCR — пара' }],
        sla:          [{ s:'support', id:'fcr',  note:'FCR и SLA — пара' },
                       { s:'support', id:'csat', note:'SLA влияет на CSAT' }],
        burnMultiple: [{ s:'b2b', id:'magicNumber', note:'Magic Number — об эффективности S&M' },
                       { s:'b2b', id:'ruleOf40',    note:'Rule of 40 — баланс роста и маржи' },
                       { s:'b2b', id:'arr',          note:'Net New ARR — знаменатель формулы' }],
        magicNumber:  [{ s:'b2b', id:'burnMultiple', note:'Burn Multiple — обратная сторона' },
                       { s:'b2b', id:'cacPayback',   note:'CAC Payback — как быстро S&M окупается' },
                       { s:'b2c', id:'cac',           note:'CAC — компонент Magic Number' }],
        ruleOf40:     [{ s:'b2b', id:'arr',          note:'ARR-рост — половина формулы' },
                       { s:'b2b', id:'burnMultiple', note:'Burn Multiple — также про эффективность' },
                       { s:'b2b', id:'quickRatio',   note:'Quick Ratio — устойчивость роста' }],
        quickRatio:   [{ s:'b2b', id:'nrr',          note:'NRR — другой угол на удержание выручки' },
                       { s:'b2b', id:'mrr',          note:'Все компоненты — изменения MRR' },
                       { s:'b2b', id:'grr',          note:'GRR — обратная сторона потерь' }],
        grossMargin:  [{ s:'b2b', id:'burnMultiple', note:'Высокая маржа — низкий Burn Multiple' },
                       { s:'b2b', id:'ruleOf40',    note:'Маржа — половина Rule of 40' },
                       { s:'finance', id:'runway',  note:'Маржа влияет на скорость burn' }],
        runway:       [{ s:'finance', id:'burnRate',  note:'Знаменатель формулы' },
                       { s:'b2b', id:'burnMultiple', note:'Burn Multiple — эффективность burn' },
                       { s:'b2b', id:'arr',          note:'Рост ARR продлевает runway' }],
        burnRate:     [{ s:'finance', id:'runway',   note:'Burn Rate определяет Runway' },
                       { s:'b2b', id:'burnMultiple', note:'Эффективность сжигания' },
                       { s:'finance', id:'grossMargin', note:'Маржа уменьшает burn' }],
        salesVelocity:[{ s:'finance', id:'winRate',  note:'Win rate — фактор формулы' },
                       { s:'b2b', id:'acv',          note:'ACV — фактор формулы' },
                       { s:'finance', id:'pipelineCoverage', note:'Pipeline питает скорость' }],
        winRate:      [{ s:'finance', id:'salesVelocity', note:'Влияет на Sales Velocity' },
                       { s:'finance', id:'pipelineCoverage', note:'Низкий win rate — нужно больше pipeline' },
                       { s:'b2c', id:'cac',          note:'Низкий win rate растит CAC' }],
        pipelineCoverage:[{ s:'finance', id:'salesVelocity', note:'Pipeline + cycle = velocity' },
                          { s:'finance', id:'winRate',     note:'Win rate определяет нужное coverage' },
                          { s:'b2b', id:'arr',             note:'Pipeline закрывается в ARR' }],
        timeToValue:  [{ s:'sales', id:'activation',  note:'TtV напрямую влияет на Activation' },
                       { s:'b2c', id:'retention',     note:'Чем быстрее ценность — выше Retention' },
                       { s:'b2c', id:'churn',         note:'Долгая TtV → ранний Churn' }],
        arpdau:       [{ s:'b2c', id:'dau',          note:'DAU — знаменатель' },
                       { s:'b2c', id:'arpu',          note:'ARPU — месячный аналог' },
                       { s:'b2c', id:'ltv',           note:'ARPDAU × срок × 30 ≈ LTV' }],
        salesCycleLength:[{ s:'finance', id:'salesVelocity', note:'Цикл — знаменатель Sales Velocity' },
                          { s:'finance', id:'pipelineCoverage', note:'Длинный цикл — нужно больше pipeline' },
                          { s:'b2b', id:'cacPayback',  note:'Влияет на CAC Payback' }],
        mrrGrowthRate:[{ s:'b2b', id:'mrr',           note:'Числитель и знаменатель' },
                       { s:'b2b', id:'arr',           note:'ARR Growth = MRR Growth' },
                       { s:'b2b', id:'ruleOf40',      note:'Half of Rule of 40' }],
        aov:          [{ s:'b2c', id:'arpu',          note:'AOV ≠ ARPU; AOV / частота = ARPU' },
                       { s:'b2c', id:'ltv',           note:'AOV — компонент LTV' },
                       { s:'b2c', id:'repeatPurchaseRate', note:'Высокий RPR делает AOV важнее' }],
        repeatPurchaseRate:[{ s:'b2c', id:'aov',      note:'AOV × RPR ≈ выручка с клиента' },
                            { s:'b2c', id:'retention', note:'RPR ≈ Retention для e-com' },
                            { s:'b2c', id:'ltv',       note:'Высокий RPR → высокий LTV' }],
        engagementRate:[{ s:'b2c', id:'stickiness',  note:'Engagement ≠ Stickiness, но связаны' },
                        { s:'growth', id:'ctr',       note:'CTR — engagement рекламы' },
                        { s:'support', id:'csat',     note:'High engagement → high satisfaction' }]
    };

    const relatedBlockEl = document.getElementById('relatedBlock');

    function renderRelated(metricId) {
        const rels = RELATED[metricId];
        if (!rels || !rels.length) { relatedBlockEl.style.display = 'none'; return; }
        let chips = '';
        rels.forEach(r => {
            const sec = metricsData[r.s];
            const m = sec && sec.metrics.find(x => x.id === r.id);
            if (!m) return;
            chips += `<button class="related-chip" data-sid="${r.s}" data-mid="${r.id}" title="${r.note}">${tm(m.id, 'name', m.name)}<span class="related-chip-arrow">→</span></button>`;
        });
        if (!chips) { relatedBlockEl.style.display = 'none'; return; }
        relatedBlockEl.innerHTML = `<div class="related-label">${t('metric.see_also', 'Смотрите также')}</div><div class="related-chips">${chips}</div>`;
        relatedBlockEl.style.display = 'block';
        relatedBlockEl.querySelectorAll('.related-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                saveCurrentValues();
                currentSection = chip.dataset.sid;
                currentMetricId = chip.dataset.mid;
                sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === currentSection));
                renderMetricsList();
                renderMetricCard();
            });
        });
    }

    // ---- URL SHARING + CLEAN URLs ----
    // Helper: \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0437\u0434\u0435\u043B \u043C\u0435\u0442\u0440\u0438\u043A\u0438 \u043F\u043E \u0435\u0451 id (\u0434\u043B\u044F clean-URL \u0432\u0438\u0434\u0430 /ltv)
    function findSectionByMetricId(metricId) {
        for (const [sid, section] of Object.entries(metricsData)) {
            if (section.metrics.some(m => m.id === metricId)) return sid;
        }
        return null;
    }

    function buildShareURL(opts) {
        const useClean = opts && opts.clean;
        const metric = getCurrentMetric();
        const params = new URLSearchParams();
        if (metric) {
            metric.inputs.forEach(inp => {
                const el = document.getElementById(`input-${inp.key}`);
                const raw = el ? el.value.replace(/[\u00A0\s]/g, '') : '';
                if (raw) params.set(inp.key, raw);
            });
        }
        // UTM-\u043C\u0435\u0442\u043A\u0438 \u0434\u043B\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u0432\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u0432 \u0432 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0435 (utm_* \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u044E\u0442\u0441\u044F restoreFromURL).
        if (opts && opts.utm) {
            params.set('utm_source', opts.utm.source || 'share');
            params.set('utm_medium', opts.utm.medium || 'referral');
            params.set('utm_campaign', 'metric_share');
        }
        const origin = window.location.origin;
        if (useClean && currentMetricId) {
            const qs = params.toString();
            return `${origin}/${currentMetricId}${qs ? '?' + qs : ''}`;
        }
        params.set('s', currentSection);
        params.set('m', currentMetricId);
        return `${origin}/?${params.toString()}`;
    }

    // \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u043D\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043E \u0447\u0438\u0441\u0442\u043E\u0433\u043E URL \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438
    function syncCleanURL() {
        if (!currentMetricId) return;
        const path = '/' + currentMetricId;
        const search = window.location.search;
        const newUrl = path + search + window.location.hash;
        // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043B\u043E\u0434\u0438\u0442\u044C history-\u0437\u0430\u043F\u0438\u0441\u0438
        if (window.location.pathname !== path) {
            try { window.history.replaceState(null, '', newUrl); } catch (e) {}
        }
    }

    function restoreFromURL() {
        const params = new URLSearchParams(window.location.search);
        // 1) \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 clean URL: /ltv, /cac, /m/ltv
        // Strip /m/ prefix and /en/ /uz/ language prefixes before extracting metric ID
        const path = window.location.pathname
            .replace(/^\/m\//, '/')
            .replace(/^\/(en|uz)\//, '/');
        // Support both /ltv and /ltv.html (direct file open)
        const pathMetric = path.replace(/^\//, '').replace(/\.html$/i, '').replace(/\/$/, '');
        let metricFromPath = null;
        if (pathMetric && /^[a-zA-Z][a-zA-Z0-9_]*$/.test(pathMetric)) {
            const sid = findSectionByMetricId(pathMetric);
            if (sid) {
                currentSection = sid;
                currentMetricId = pathMetric;
                metricFromPath = pathMetric;
                sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === sid));
            }
        }
        // 2) \u0421\u0442\u0430\u0440\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 ?s=...&m=...
        if (!metricFromPath && (params.has('s') || params.has('m'))) {
            const s = params.get('s');
            const m = params.get('m');
            if (s && metricsData[s]) {
                currentSection = s;
                sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === s));
            }
            if (m && metricsData[currentSection]) {
                const found = metricsData[currentSection].metrics.find(mx => mx.id === m);
                if (found) currentMetricId = m;
            }
        }
        if (!metricFromPath && !params.has('s') && !params.has('m')) return false;

        const urlMetric = getCurrentMetric();
        if (urlMetric) {
            const urlVals = {};
            urlMetric.inputs.forEach(inp => {
                if (params.has(inp.key)) urlVals[inp.key] = params.get(inp.key);
            });
            if (Object.keys(urlVals).length > 0) {
                storedValues[currentMetricId] = Object.assign({}, storedValues[currentMetricId], urlVals);
            }
        }
        return true;
    }

    document.getElementById('shareLinkBtn').addEventListener('click', () => {
        const url = buildShareURL({ clean: true, utm: { source: 'share', medium: 'copy' } });
        const onOk = () => showToast('🔗 Ссылка скопирована', 'success');
        if (window.track) window.track('share', { method: 'copy_link', metric: (currentMetricId || '') });
        navigator.clipboard.writeText(url).then(onOk).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = url; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
            document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
            onOk();
        });
    });

    // ---- TWITTER / LINKEDIN SHARE ----
    // Compose a tweet/post containing metric name + computed value + insight + link,
    // then open the native share dialog in a new tab. Pre-filled = viral.
    function _composeShareText() {
        const metric = getCurrentMetric();
        if (!metric) return '';
        const name = tm(metric.id, 'name', metric.name);
        const result = (document.getElementById('resultValue')?.textContent || '').trim();
        const insight = (document.getElementById('insightMessage')?.textContent || '').trim();
        if (!result) return `${name} — calculate yours on MetricTree`;
        let txt = `${name}: ${result}`;
        if (insight) txt += ` — ${insight}`;
        return txt;
    }
    function _openShareWindow(url) {
        const w = 600, h = 600;
        const left = (window.screen.width - w) / 2;
        const top = (window.screen.height - h) / 2;
        window.open(url, '_blank', `width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`);
    }
    const _twBtn = document.getElementById('shareTwitterBtn');
    if (_twBtn) _twBtn.addEventListener('click', () => {
        const url = buildShareURL({ clean: true, utm: { source: 'twitter', medium: 'social' } });
        const txt = _composeShareText();
        const full = txt.length > 240 ? txt.slice(0, 237) + '…' : txt;
        const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(full)}&url=${encodeURIComponent(url)}&via=rodion_latipov`;
        if (window.track) window.track('share', { method: 'twitter', metric: (currentMetricId || '') });
        _openShareWindow(intent);
    });
    const _liBtn = document.getElementById('shareLinkedinBtn');
    if (_liBtn) _liBtn.addEventListener('click', () => {
        const url = buildShareURL({ clean: true, utm: { source: 'linkedin', medium: 'social' } });
        // LinkedIn's modern share intent only accepts URL — they pull title/desc from OG.
        // For pre-filled text we'd need a feed/share/article endpoint with auth — keep simple.
        const intent = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        if (window.track) window.track('share', { method: 'linkedin', metric: (currentMetricId || '') });
        _openShareWindow(intent);
    });

    // ---- PNG EXPORT ----
    function _rrect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    function exportToPNG() {
        const metric = getCurrentMetric();
        if (!metric) return;
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const W = 800, H = 440, P = 48;
        const canvas = document.createElement('canvas');
        canvas.width = W; canvas.height = H;
        const ctx = canvas.getContext('2d');
        const sans = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const mono = 'Menlo, "SF Mono", "Cascadia Code", monospace';

        // Background
        ctx.fillStyle = isDark ? '#1A1C1F' : '#FFFFFF';
        ctx.fillRect(0, 0, W, H);

        // Top accent bar
        const grad = ctx.createLinearGradient(0, 0, W * 0.65, 0);
        grad.addColorStop(0, isDark ? '#2A6DF4' : '#1A56DB');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, W, 4);

        // Section label
        ctx.font = `600 13px ${sans}`; ctx.fillStyle = isDark ? '#6b6f75' : '#9299A6';
        ctx.fillText((metricsData[currentSection]?.name || currentSection).toUpperCase(), P, 52);

        // Metric name
        ctx.font = `700 44px ${sans}`; ctx.fillStyle = isDark ? '#E8EAED' : '#14171C';
        ctx.fillText(metric.name, P, 110);

        // Formula badge
        ctx.font = `500 15px ${mono}`;
        const fW = ctx.measureText(metric.formula).width + 24;
        ctx.fillStyle = isDark ? 'rgba(42,109,244,0.15)' : 'rgba(26,86,219,0.1)';
        _rrect(ctx, P, 122, fW, 32, 16); ctx.fill();
        ctx.fillStyle = isDark ? '#2A6DF4' : '#1A56DB';
        ctx.fillText(metric.formula, P + 12, 143);

        // Divider
        ctx.strokeStyle = isDark ? '#2C2F33' : '#DDE0E6'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(P, 172); ctx.lineTo(W - P, 172); ctx.stroke();

        // Result label
        ctx.font = `600 11px ${sans}`; ctx.fillStyle = isDark ? '#6b6f75' : '#9299A6';
        ctx.fillText('РЕЗУЛЬТАТ', P, 208);

        // Result value
        const rawText = (resultValue.textContent || '').trim();
        const insightColor = resultValue.style.color || (isDark ? '#E8EAED' : '#14171C');
        ctx.font = `800 68px ${sans}`; ctx.fillStyle = insightColor;
        ctx.fillText(rawText, P, 290);

        // Insight pill
        const insightText = insightMessage.textContent;
        if (insightText) {
            ctx.font = `500 15px ${sans}`;
            const iW = ctx.measureText(insightText).width + 36;
            ctx.fillStyle = insightColor + '22';
            _rrect(ctx, P, 308, iW, 40, 8); ctx.fill();
            ctx.fillStyle = insightColor;
            _rrect(ctx, P, 308, 4, 40, 2); ctx.fill();
            ctx.fillStyle = isDark ? '#E8EAED' : '#14171C';
            ctx.fillText(insightText, P + 18, 334);
        }

        // Branding
        ctx.font = `400 12px ${sans}`; ctx.fillStyle = isDark ? '#3a3d42' : '#C8CBD2';
        ctx.fillText('metrics-tree  ·  Родион Латыпов', P, H - 22);

        const link = document.createElement('a');
        link.download = `${metric.id.replace(/[^a-z0-9]/gi, '-')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    document.getElementById('exportPngBtn').addEventListener('click', exportToPNG);

    // ---- ИСТОРИЯ СНИМКОВ ----
    const LS_SNAPS = 'metricsTree_snapshots';
    const MAX_SNAPS_PER_METRIC = 8;
    const snapshotBtn = document.getElementById('snapshotBtn');
    const snapshotsBlock = document.getElementById('snapshotsBlock');

    function loadSnaps() {
        try { return JSON.parse(localStorage.getItem(LS_SNAPS) || '{}'); } catch(e) { return {}; }
    }
    function saveSnaps(data) {
        try { localStorage.setItem(LS_SNAPS, JSON.stringify(data)); } catch(e) {}
    }

    function formatSnapDate(ts) {
        const d = new Date(ts);
        return d.toLocaleDateString('ru-RU', { day:'2-digit', month:'2-digit' }) +
               ' ' + d.toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' });
    }

    function renderSnapshotsBlock() {
        const metric = getCurrentMetric();
        if (!metric) return;
        const snaps = loadSnaps();
        const list = snaps[metric.id] || [];
        if (list.length === 0) {
            snapshotsBlock.style.display = 'none';
            return;
        }

        // Current result for comparison
        let curNum = null;
        const rawCur = resultValue?.textContent?.replace(/[^\d.,\-]/g, '').replace(',', '.');
        if (rawCur) curNum = parseFloat(rawCur);

        const canCompare = list.length >= 2;
        let html = `<div class="snapshots-block-title">
            <span>История (${list.length})</span>
            <div style="display:flex;gap:0.5rem;align-items:center;">
                ${canCompare ? `<button class="snap-compare-btn" id="snapsCompareBtn">Сравнить</button>` : ''}
                <button class="snapshots-clear-all" id="snapsClearAll">Удалить все</button>
            </div>
        </div>`;

        [...list].reverse().forEach((snap, revIdx) => {
            const origIdx = list.length - 1 - revIdx;
            const inputsSummary = snap.inputs.map(({ label, val }) => `${label}: ${val}`).join(' · ');

            let deltaHtml = '';
            if (curNum !== null && !isNaN(snap.result) && snap.result !== 0) {
                const pct = ((curNum - snap.result) / Math.abs(snap.result)) * 100;
                if (Math.abs(pct) > 0.5) {
                    const sign = pct > 0 ? '+' : '';
                    const cls = pct > 0 ? 'pos' : 'neg';
                    deltaHtml = `<span class="snapshot-delta ${cls}">${sign}${pct.toFixed(1)}% vs сейчас</span>`;
                }
            }

            const labelText = snap.label || formatSnapDate(snap.ts);
            html += `
                <div class="snapshot-item">
                    <div style="min-width:0;flex:1;">
                        <div class="snapshot-meta">
                            <span class="snapshot-label" contenteditable="true" spellcheck="false" data-idx="${origIdx}" title="Кликните, чтобы переименовать">${escapeHtml(labelText)}</span>
                            ${snap.label ? `<span class="snapshot-date-mini">${formatSnapDate(snap.ts)}</span>` : ''}
                        </div>
                        <div class="snapshot-inputs-summary">${inputsSummary}</div>
                        <div>
                            <span class="snapshot-result-val">${snap.displayResult}</span>
                            ${deltaHtml}
                        </div>
                    </div>
                    <button class="snapshot-del" data-idx="${origIdx}" title="Удалить снимок" aria-label="Удалить снимок">×</button>
                </div>`;
        });

        snapshotsBlock.innerHTML = html;
        snapshotsBlock.style.display = 'block';

        // Delete single
        snapshotsBlock.querySelectorAll('.snapshot-del').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx);
                const all = loadSnaps();
                if (all[metric.id]) {
                    all[metric.id].splice(idx, 1);
                    if (all[metric.id].length === 0) delete all[metric.id];
                    saveSnaps(all);
                    renderSnapshotsBlock();
                }
            });
        });

        // Rename inline
        snapshotsBlock.querySelectorAll('.snapshot-label').forEach(span => {
            span.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
                if (e.key === 'Escape') { e.preventDefault(); span.textContent = (loadSnaps()[metric.id][parseInt(span.dataset.idx)].label || formatSnapDate(loadSnaps()[metric.id][parseInt(span.dataset.idx)].ts)); span.blur(); }
            });
            span.addEventListener('blur', () => {
                const idx = parseInt(span.dataset.idx);
                const all = loadSnaps();
                if (!all[metric.id] || !all[metric.id][idx]) return;
                const newLabel = (span.textContent || '').trim().slice(0, 60);
                const isDefault = newLabel === formatSnapDate(all[metric.id][idx].ts) || newLabel === '';
                if (isDefault) {
                    delete all[metric.id][idx].label;
                } else {
                    all[metric.id][idx].label = newLabel;
                }
                saveSnaps(all);
            });
            span.addEventListener('click', e => e.stopPropagation());
        });

        // Clear all for this metric
        const clearAllBtn = document.getElementById('snapsClearAll');
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', () => {
                const all = loadSnaps();
                delete all[metric.id];
                saveSnaps(all);
                renderSnapshotsBlock();
            });
        }

        // Compare button
        const compareBtn = document.getElementById('snapsCompareBtn');
        if (compareBtn) {
            compareBtn.addEventListener('click', () => openCompare(metric.id));
        }
    }

    snapshotBtn.addEventListener('click', () => {
        const metric = getCurrentMetric();
        if (!metric) return;

        const rawResult = resultValue?.textContent?.trim();
        if (!rawResult || resultBlock.style.display === 'none') return;

        const numStr = rawResult.replace(/[^\d.,\-MKB]/g, '').replace(',', '.');
        const numResult = parseFloat(numStr) || 0;

        const inputs = metric.inputs.map(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            return { label: inp.label.split(',')[0].trim(), val: el ? el.value : '' };
        }).filter(i => i.val);

        const snap = {
            ts: Date.now(),
            result: numResult,
            displayResult: rawResult,
            inputs
        };

        const all = loadSnaps();
        if (!all[metric.id]) all[metric.id] = [];
        all[metric.id].push(snap);
        if (all[metric.id].length > MAX_SNAPS_PER_METRIC) {
            all[metric.id] = all[metric.id].slice(-MAX_SNAPS_PER_METRIC);
        }
        saveSnaps(all);

        showToast(`💾 Снимок сохранён · ${all[metric.id].length}/${MAX_SNAPS_PER_METRIC}`, 'success');
        renderSnapshotsBlock();
    });

    // ---- CSV EXPORT ----
    document.getElementById('csvExportBtn').addEventListener('click', () => {
        const rows = [['Раздел', 'Метрика', 'Формула', 'Результат', 'Единица', ...Array.from({length:6}, (_,i) => `Поле ${i+1}`), ...Array.from({length:6}, (_,i) => `Значение ${i+1}`)]];

        Object.entries(metricsData).forEach(([, section]) => {
            section.metrics.forEach(metric => {
                const saved = storedValues[metric.id] || {};
                const vals = {};
                let allFilled = true;
                metric.inputs.forEach(inp => {
                    const raw = saved[inp.key];
                    const num = raw !== undefined && raw !== '' ? parseFloat(String(raw).replace(/[\u00A0 ]/g, '')) : null;
                    if (num === null || isNaN(num)) allFilled = false;
                    vals[inp.key] = num;
                });

                let resultStr = '';
                if (allFilled && metric.inputs.length > 0) {
                    try {
                        const r = metric.calculate(vals);
                        if (r === Infinity) resultStr = '∞';
                        else if (r !== null && r !== undefined) resultStr = String(r);
                    } catch(e) {}
                }

                const fieldLabels = metric.inputs.map(i => i.label).concat(Array(6).fill('')).slice(0,6);
                const fieldVals = metric.inputs.map(i => saved[i.key] || '').concat(Array(6).fill('')).slice(0,6);

                rows.push([
                    section.name,
                    metric.name,
                    metric.formula,
                    resultStr,
                    metric.unit || '',
                    ...fieldLabels,
                    ...fieldVals
                ]);
            });
        });

        const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
        const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `metrics-tree-${new Date().toISOString().slice(0,10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // ---- COMPARE SNAPSHOTS ----
    let compareMetricId = null;

    function openCompare(metricId) {
        const metric = Object.values(metricsData).flatMap(s => s.metrics).find(m => m.id === metricId);
        if (!metric) return;
        const snaps = loadSnaps()[metricId] || [];
        if (snaps.length < 1) return;

        compareMetricId = metricId;
        const overlay = document.getElementById('compareOverlay');
        const content = document.getElementById('compareContent');
        document.getElementById('compareTitle').textContent = `Сравнение: ${metric.name}`;
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        function renderCompare(idxA, idxB) {
            const snapA = snaps[idxA];
            const snapB = idxB !== null ? snaps[idxB] : null; // null = текущие значения

            const unit = metric.unit ? ` ${localizeUnit(metric.unit)}` : '';

            function snapCard(snap, label) {
                const inputRows = snap.inputs.map(i =>
                    `<div class="compare-row"><span class="compare-row-label">${i.label}</span><span class="compare-row-val">${i.val}</span></div>`
                ).join('');
                return `<div class="compare-col">
                    <div class="compare-col-title">${label}</div>
                    <div class="compare-result-val" style="color:var(--accent)">${snap.displayResult}${unit.trim() && !snap.displayResult.includes(unit.trim()) ? unit : ''}</div>
                    <div class="snapshot-meta">${formatSnapDate(snap.ts)}</div>
                    <div style="margin-top:0.6rem">${inputRows}</div>
                </div>`;
            }

            // Get current calc values for "current" option
            function getCurrentSnap() {
                const vals = {};
                const inputs = [];
                metric.inputs.forEach(inp => {
                    const el = document.getElementById(`input-${inp.key}`);
                    const v = el ? el.value.replace(/[\u00A0 ]/g, '') : '';
                    vals[inp.key] = parseFloat(v) || 0;
                    inputs.push({ label: inp.label.split(',')[0], val: v || '—' });
                });
                let displayResult = '—';
                try {
                    const r = metric.calculate(vals);
                    if (r !== null) displayResult = String(r);
                } catch(e) {}
                return { ts: Date.now(), displayResult, inputs, result: parseFloat(displayResult) || 0 };
            }

            const effectiveB = snapB || getCurrentSnap();
            const labelA = `Снимок ${idxA + 1} (${formatSnapDate(snapA.ts)})`;
            const labelB = snapB ? `Снимок ${idxB + 1} (${formatSnapDate(snapB.ts)})` : 'Текущие значения';

            const numA = snapA.result;
            const numB = effectiveB.result;
            let diffHtml = '';
            if (numA !== 0 && !isNaN(numA) && !isNaN(numB)) {
                const pct = ((numB - numA) / Math.abs(numA)) * 100;
                const sign = pct > 0 ? '+' : '';
                const cls = Math.abs(pct) < 0.5 ? 'neu' : pct > 0 ? 'pos' : 'neg';
                const absStr = Math.abs(numB - numA) >= 1e3
                    ? (Math.abs(numB - numA) / 1e3).toFixed(1) + 'K'
                    : Math.abs(numB - numA).toFixed(2);
                diffHtml = `<div class="compare-diff-row">
                    <span class="compare-diff-label">${labelB} относительно ${labelA}:</span>
                    <span class="compare-diff-val ${cls}">${sign}${pct.toFixed(1)}% (${pct > 0 ? '+' : ''}${absStr}${unit})</span>
                </div>`;
            }

            // Build snapshot selectors
            const snapOptions = snaps.map((s, i) => `<option value="${i}" ${i === idxA ? 'selected' : ''}>Снимок ${i+1}: ${s.displayResult} (${formatSnapDate(s.ts)})</option>`).join('');
            const snapOptionsB = [`<option value="current" ${idxB === null ? 'selected' : ''}>Текущие значения</option>`,
                ...snaps.map((s, i) => `<option value="${i}" ${i === idxB ? 'selected' : ''}>Снимок ${i+1}: ${s.displayResult} (${formatSnapDate(s.ts)})</option>`)
            ].join('');

            content.innerHTML = `
                <div class="compare-select-wrap">
                    <span style="font-size:0.78rem;color:var(--text-3)">Сравниваем:</span>
                    <select class="compare-select" id="cmpSelA" aria-label="Первый снимок для сравнения">${snapOptions}</select>
                    <span style="font-size:0.78rem;color:var(--text-3)">vs</span>
                    <select class="compare-select" id="cmpSelB" aria-label="Второй снимок для сравнения">${snapOptionsB}</select>
                </div>
                <div class="compare-grid">
                    ${snapCard(snapA, labelA)}
                    ${snapCard(effectiveB, labelB)}
                </div>
                ${diffHtml}`;

            document.getElementById('cmpSelA').addEventListener('change', e => {
                const bSel = document.getElementById('cmpSelB').value;
                renderCompare(parseInt(e.target.value), bSel === 'current' ? null : parseInt(bSel));
            });
            document.getElementById('cmpSelB').addEventListener('change', e => {
                const aSel = document.getElementById('cmpSelA').value;
                renderCompare(parseInt(aSel), e.target.value === 'current' ? null : parseInt(e.target.value));
            });
        }

        renderCompare(0, snaps.length > 1 ? 1 : null);
    }

    function closeCompare() {
        document.getElementById('compareOverlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    document.getElementById('compareClose').addEventListener('click', closeCompare);

    // ---- ONBOARDING ----
    const LS_ONBOARD = 'metricsTree_onboarded_v2';
    (function initOnboarding() {
        const bar = document.getElementById('onboardingBar');
        if (!bar) return;
        if (!localStorage.getItem(LS_ONBOARD)) {
            bar.style.display = 'flex';
        }
        document.getElementById('onboardingDismiss').addEventListener('click', () => {
            bar.style.display = 'none';
            localStorage.setItem(LS_ONBOARD, '1');
        });

        const tplBtn = document.getElementById('onboardingTemplatesBtn');
        if (tplBtn) tplBtn.addEventListener('click', () => {
            const ov = document.getElementById('templatesOverlay');
            if (ov) ov.style.display = 'flex';
            bar.style.display = 'none';
            localStorage.setItem(LS_ONBOARD, '1');
        });

        const demoBtn = document.getElementById('onboardingDemoBtn');
        if (demoBtn) demoBtn.addEventListener('click', () => {
            // Загружаем простой демо-кейс LTV:CAC
            saveCurrentValues();
            currentSection = 'b2c';
            currentMetricId = 'ltv_cac';
            storedValues['ltv_cac'] = { ltv: '15000', cac: '3000' };
            saveToLS(storedValues);
            sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === 'b2c'));
            renderMetricsList();
            renderMetricCard();
            bar.style.display = 'none';
            localStorage.setItem(LS_ONBOARD, '1');
            showToast('▶ Демо LTV:CAC загружено', 'success');
        });

        const helpCta = document.getElementById('onboardingHelpBtn');
        if (helpCta) helpCta.addEventListener('click', () => {
            const ov = document.getElementById('helpOverlay');
            if (ov) ov.classList.add('show');
        });
    })();

    // ---- SECTION FILL BADGES ----
    function getFilledCount(sectionId) {
        const section = metricsData[sectionId];
        if (!section) return { filled: 0, total: 0 };
        let filled = 0;
        section.metrics.forEach(metric => {
            const saved = storedValues[metric.id] || {};
            const allFilled = metric.inputs.length > 0 && metric.inputs.every(inp => {
                const v = saved[inp.key];
                return v !== undefined && v !== '' && !isNaN(parseFloat(String(v).replace(/[\u00A0 ]/g, '')));
            });
            if (allFilled) filled++;
        });
        return { filled, total: section.metrics.length };
    }

    function updateSectionBadges() {
        document.querySelectorAll('.section-card').forEach(card => {
            const sid = card.dataset.section;
            const { filled, total } = getFilledCount(sid);
            let badge = card.querySelector('.section-fill-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'section-fill-badge';
                const h3 = card.querySelector('h3');
                if (h3) h3.appendChild(badge);
            }
            if (filled === 0) {
                badge.className = 'section-fill-badge none';
                badge.textContent = `0/${total}`;
                badge.title = `${total} метрик в разделе`;
            } else if (filled < total) {
                badge.className = 'section-fill-badge partial';
                badge.textContent = `${filled}/${total}`;
                badge.title = `Заполнено ${filled} из ${total}`;
            } else {
                badge.className = 'section-fill-badge full';
                badge.textContent = '✓';
                badge.title = `Все ${total} метрик заполнены`;
            }
        });
    }

    // ---- SCENARIO TEMPLATES ----
    const SCENARIO_TEMPLATES = [
        {
            id: 'startup_saas', name: 'Стартап SaaS', icon: '🚀',
            desc: 'B2B SaaS, ARR ~$600K, активный рост',
            values: {
                dau:{ users:800 }, mau:{ users:6000 },
                stickiness:{ dau:800, mau:6000 }, retention:{ end:600, start:1000 },
                ltv:{ aov:400, freq:12, life:2 }, cac:{ cost:45000, customers:100 },
                ltv_cac:{ ltv:9600, cac:450 }, arpu:{ revenue:50000, users:6000 },
                churn:{ lost:180, total:6000 },
                mrr:{ mrr:50000 }, arr:{ mrr:50000 },
                acv:{ total:6000, years:1 }, grr:{ start:50000, churn:2500 },
                nrr:{ start:50000, upsell:4000, churn:2500 },
                cacPayback:{ cac:450, mrrPerCustomer:80, margin:75 },
                burnMultiple:{ burn:600000, newArr:600000 },
                magicNumber:{ newArr:150000, sm:200000 },
                ruleOf40:{ growth:120, margin:-30 },
                quickRatio:{ newMrr:40000, expansion:5000, churned:3000, contraction:1500 },
                acquisition:{ new:400 }, activation:{ activated:160, total:400 },
                retention_aarrr:{ ret:120, new:400 }, referral:{ invited:40, active:200 },
                revenue:{ rev:50000 },
                cr:{ conversions:40, visitors:2000 }, roas:{ revenue:16000, spend:9000 },
                cpc:{ spend:9000, clicks:1800 }, ctr:{ clicks:360, impressions:18000 },
                bounceRate:{ bounced:4800, total:10000 },
                bugRate:{ bugs:18, size:8 }, testCoverage:{ covered:65, total:100 },
                defectDensity:{ defects:25, kloc:8 },
                csat:{ pos:160, total:200 }, nps:{ promoters:50, detractors:35, total:180 },
                fcr:{ resolved:140, total:200 }, sla:{ met:155, total:200 },
                wau:{ users:2500 }, netNewMrr:{ newMrr:40000, expansion:5000, churned:3000, contraction:1500 },
                contributionMargin:{ revenue:50000, variableCosts:9000 },
                quotaAttainment:{ actual:540000, quota:600000 },
                mer:{ totalRevenue:50000, totalSpend:12000 }, ces:{ sumScores:600, responses:200 },
                cpa:{ spend:9000, actions:80 }, cpl:{ spend:9000, leads:120 },
                openRate:{ opens:2200, delivered:6000 }, ctor:{ clicks:280, opens:2200 },
                featureAdoption:{ adopted:2400, active:6000 },
                leadVelocityRate:{ thisMonth:660, lastMonth:600 },
                cashConversionScore:{ arr:600000, capitalConsumed:700000 },
                avgResolutionTime:{ totalHours:1600, ticketsResolved:200 },
                arpdau:{ dailyRevenue:1650, dau:800 }, aov:{ revenue:50000, orders:125 },
                repeatPurchaseRate:{ repeat:700, total:1000 }, timeToValue:{ days:5 },
                grossMargin:{ revenue:50000, cogs:7500 }, runway:{ cash:900000, burn:50000 },
                burnRate:{ expenses:100000, revenue:50000 },
                salesVelocity:{ opps:60, acv:6000, winRate:22, cycle:45 },
                winRate:{ won:22, total:100 }, pipelineCoverage:{ pipeline:1800000, quota:600000 },
                salesCycleLength:{ totalDays:2700, wonCount:60 },
                mrrGrowthRate:{ startMrr:46700, endMrr:50000 },
                engagementRate:{ engagements:180, reach:6000 }
            }
        },
        {
            id: 'mature_saas', name: 'Зрелый SaaS', icon: '🏢',
            desc: 'B2B SaaS, ARR ~$24M, стабильный рост',
            values: {
                dau:{ users:18000 }, mau:{ users:65000 },
                stickiness:{ dau:18000, mau:65000 }, retention:{ end:850, start:1000 },
                ltv:{ aov:800, freq:12, life:5 }, cac:{ cost:500000, customers:100 },
                ltv_cac:{ ltv:48000, cac:5000 }, arpu:{ revenue:2000000, users:65000 },
                churn:{ lost:520, total:65000 },
                mrr:{ mrr:2000000 }, arr:{ mrr:2000000 },
                acv:{ total:24000, years:1 }, grr:{ start:2000000, churn:30000 },
                nrr:{ start:2000000, upsell:250000, churn:30000 },
                cacPayback:{ cac:5000, mrrPerCustomer:350, margin:82 },
                burnMultiple:{ burn:1500000, newArr:6000000 },
                magicNumber:{ newArr:1500000, sm:1200000 },
                ruleOf40:{ growth:30, margin:18 },
                quickRatio:{ newMrr:2000000, expansion:300000, churned:50000, contraction:20000 },
                acquisition:{ new:2000 }, activation:{ activated:1400, total:2000 },
                retention_aarrr:{ ret:1600, new:2000 }, referral:{ invited:400, active:1000 },
                revenue:{ rev:2000000 },
                cr:{ conversions:300, visitors:5000 }, roas:{ revenue:1500000, spend:375000 },
                cpc:{ spend:375000, clicks:60000 }, ctr:{ clicks:6000, impressions:150000 },
                bounceRate:{ bounced:3200, total:10000 },
                bugRate:{ bugs:8, size:40 }, testCoverage:{ covered:88, total:100 },
                defectDensity:{ defects:12, kloc:40 },
                csat:{ pos:185, total:200 }, nps:{ promoters:90, detractors:15, total:200 },
                fcr:{ resolved:185, total:200 }, sla:{ met:196, total:200 },
                wau:{ users:35000 }, netNewMrr:{ newMrr:2000000, expansion:300000, churned:50000, contraction:20000 },
                contributionMargin:{ revenue:2000000, variableCosts:300000 },
                quotaAttainment:{ actual:23000000, quota:24000000 },
                mer:{ totalRevenue:2000000, totalSpend:400000 }, ces:{ sumScores:360, responses:200 },
                cpa:{ spend:375000, actions:2500 }, cpl:{ spend:375000, leads:2500 },
                openRate:{ opens:26000, delivered:65000 }, ctor:{ clicks:3500, opens:26000 },
                featureAdoption:{ adopted:48000, active:65000 },
                leadVelocityRate:{ thisMonth:5300, lastMonth:5000 },
                cashConversionScore:{ arr:24000000, capitalConsumed:18000000 },
                avgResolutionTime:{ totalHours:800, ticketsResolved:200 },
                arpdau:{ dailyRevenue:66000, dau:18000 }, aov:{ revenue:2000000, orders:2500 },
                repeatPurchaseRate:{ repeat:880, total:1000 }, timeToValue:{ days:14 },
                grossMargin:{ revenue:2000000, cogs:250000 }, runway:{ cash:6000000, burn:125000 },
                burnRate:{ expenses:2125000, revenue:2000000 },
                salesVelocity:{ opps:250, acv:24000, winRate:28, cycle:90 },
                winRate:{ won:28, total:100 }, pipelineCoverage:{ pipeline:18000000, quota:6000000 },
                salesCycleLength:{ totalDays:22500, wonCount:250 },
                mrrGrowthRate:{ startMrr:1942000, endMrr:2000000 },
                engagementRate:{ engagements:1300, reach:65000 }
            }
        },
        {
            id: 'ecom', name: 'E-commerce', icon: '🛒',
            desc: 'Интернет-магазин, средний сегмент',
            values: {
                dau:{ users:12000 }, mau:{ users:80000 },
                stickiness:{ dau:12000, mau:80000 }, retention:{ end:450, start:1000 },
                ltv:{ aov:3500, freq:4, life:3 }, cac:{ cost:80000, customers:100 },
                ltv_cac:{ ltv:42000, cac:800 }, arpu:{ revenue:280000, users:80000 },
                churn:{ lost:5600, total:80000 },
                mrr:{ mrr:280000 }, arr:{ mrr:280000 },
                acv:{ total:3360, years:1 }, grr:{ start:280000, churn:14000 },
                nrr:{ start:280000, upsell:20000, churn:14000 },
                cacPayback:{ cac:800, mrrPerCustomer:280, margin:45 },
                acquisition:{ new:5000 }, activation:{ activated:2500, total:5000 },
                retention_aarrr:{ ret:1500, new:5000 }, referral:{ invited:500, active:2500 },
                revenue:{ rev:280000 },
                cr:{ conversions:300, visitors:10000 }, roas:{ revenue:224000, spend:56000 },
                cpc:{ spend:56000, clicks:28000 }, ctr:{ clicks:7000, impressions:350000 },
                bounceRate:{ bounced:3200, total:10000 },
                bugRate:{ bugs:10, size:15 }, testCoverage:{ covered:72, total:100 },
                defectDensity:{ defects:15, kloc:15 },
                csat:{ pos:170, total:200 }, nps:{ promoters:70, detractors:25, total:200 },
                fcr:{ resolved:165, total:200 }, sla:{ met:180, total:200 },
                wau:{ users:28000 }, contributionMargin:{ revenue:280000, variableCosts:168000 },
                gmv:{ orders:5000, aov:3500 }, takeRate:{ platformRevenue:35000, gmv:280000 },
                cpm:{ spend:56000, impressions:7000000 }, cartAbandonment:{ purchases:300, carts:1000 },
                mer:{ totalRevenue:280000, totalSpend:70000 }, ces:{ sumScores:700, responses:200 },
                cpa:{ spend:56000, actions:1000 }, cpl:{ spend:56000, leads:800 },
                arppu:{ revenue:280000, payingUsers:5000 },
                openRate:{ opens:32000, delivered:80000 }, ctor:{ clicks:4000, opens:32000 },
                featureAdoption:{ adopted:50000, active:80000 },
                avgResolutionTime:{ totalHours:1200, ticketsResolved:200 },
                arpdau:{ dailyRevenue:9300, dau:12000 }, aov:{ revenue:280000, orders:80 },
                repeatPurchaseRate:{ repeat:280, total:1000 }, timeToValue:{ days:2 },
                grossMargin:{ revenue:280000, cogs:140000 }, runway:{ cash:1200000, burn:60000 },
                burnRate:{ expenses:340000, revenue:280000 },
                salesVelocity:{ opps:40, acv:3360, winRate:30, cycle:14 },
                winRate:{ won:30, total:100 }, pipelineCoverage:{ pipeline:2520000, quota:840000 },
                salesCycleLength:{ totalDays:560, wonCount:40 },
                mrrGrowthRate:{ startMrr:269000, endMrr:280000 },
                engagementRate:{ engagements:2000, reach:80000 }
            }
        },
        {
            id: 'mobile', name: 'Мобайл App', icon: '📱',
            desc: 'Мобильное приложение, freemium',
            values: {
                dau:{ users:80000 }, mau:{ users:250000 },
                stickiness:{ dau:80000, mau:250000 }, retention:{ end:350, start:1000 },
                ltv:{ aov:350, freq:6, life:2 }, cac:{ cost:15000, customers:100 },
                ltv_cac:{ ltv:4200, cac:150 }, arpu:{ revenue:750000, users:250000 },
                churn:{ lost:20000, total:250000 },
                mrr:{ mrr:750000 }, arr:{ mrr:750000 },
                acv:{ total:1800, years:1 }, grr:{ start:750000, churn:60000 },
                nrr:{ start:750000, upsell:50000, churn:60000 },
                cacPayback:{ cac:150, mrrPerCustomer:50, margin:70 },
                acquisition:{ new:30000 }, activation:{ activated:18000, total:30000 },
                retention_aarrr:{ ret:9000, new:30000 }, referral:{ invited:9000, active:15000 },
                revenue:{ rev:750000 },
                cr:{ conversions:1500, visitors:30000 }, roas:{ revenue:600000, spend:187500 },
                cpc:{ spend:187500, clicks:125000 }, ctr:{ clicks:12500, impressions:500000 },
                bounceRate:{ bounced:4000, total:10000 },
                bugRate:{ bugs:22, size:20 }, testCoverage:{ covered:78, total:100 },
                defectDensity:{ defects:30, kloc:20 },
                csat:{ pos:155, total:200 }, nps:{ promoters:60, detractors:40, total:200 },
                fcr:{ resolved:150, total:200 }, sla:{ met:170, total:200 },
                wau:{ users:150000 }, contributionMargin:{ revenue:750000, variableCosts:225000 },
                cpm:{ spend:187500, impressions:37500000 }, cpi:{ spend:187500, installs:75000 },
                arppu:{ revenue:750000, payingUsers:12500 },
                mer:{ totalRevenue:750000, totalSpend:250000 }, ces:{ sumScores:800, responses:200 },
                cpa:{ spend:187500, actions:6250 },
                openRate:{ opens:90000, delivered:250000 }, ctor:{ clicks:11000, opens:90000 },
                featureAdoption:{ adopted:120000, active:250000 },
                avgResolutionTime:{ totalHours:1800, ticketsResolved:200 },
                arpdau:{ dailyRevenue:25000, dau:80000 }, aov:{ revenue:749000, orders:2140 },
                repeatPurchaseRate:{ repeat:350, total:1000 }, timeToValue:{ days:1 },
                grossMargin:{ revenue:750000, cogs:190000 }, runway:{ cash:3000000, burn:150000 },
                burnRate:{ expenses:900000, revenue:750000 },
                salesVelocity:{ opps:50, acv:1800, winRate:20, cycle:21 },
                winRate:{ won:20, total:100 }, pipelineCoverage:{ pipeline:6750000, quota:2250000 },
                salesCycleLength:{ totalDays:1050, wonCount:50 },
                mrrGrowthRate:{ startMrr:708000, endMrr:750000 },
                engagementRate:{ engagements:10000, reach:250000 }
            }
        },
        {
            id: 'media', name: 'Медиа', icon: '📰',
            desc: 'Контентный сайт / издание',
            values: {
                dau:{ users:350000 }, mau:{ users:2000000 },
                stickiness:{ dau:350000, mau:2000000 }, retention:{ end:400, start:1000 },
                ltv:{ aov:200, freq:12, life:4 }, cac:{ cost:30000, customers:100 },
                ltv_cac:{ ltv:9600, cac:300 }, arpu:{ revenue:200000, users:2000000 },
                churn:{ lost:100000, total:2000000 },
                mrr:{ mrr:200000 }, arr:{ mrr:200000 },
                acv:{ total:2400, years:1 }, grr:{ start:200000, churn:12000 },
                nrr:{ start:200000, upsell:10000, churn:12000 },
                cacPayback:{ cac:300, mrrPerCustomer:50, margin:60 },
                acquisition:{ new:50000 }, activation:{ activated:15000, total:50000 },
                retention_aarrr:{ ret:10000, new:50000 }, referral:{ invited:5000, active:25000 },
                revenue:{ rev:200000 },
                cr:{ conversions:2000, visitors:50000 }, roas:{ revenue:150000, spend:70000 },
                cpc:{ spend:70000, clicks:70000 }, ctr:{ clicks:20000, impressions:500000 },
                bounceRate:{ bounced:6500, total:10000 },
                bugRate:{ bugs:5, size:12 }, testCoverage:{ covered:55, total:100 },
                defectDensity:{ defects:8, kloc:12 },
                csat:{ pos:145, total:200 }, nps:{ promoters:40, detractors:50, total:200 },
                fcr:{ resolved:155, total:200 }, sla:{ met:175, total:200 },
                wau:{ users:800000 }, contributionMargin:{ revenue:200000, variableCosts:100000 },
                cpm:{ spend:70000, impressions:17500000 },
                mer:{ totalRevenue:200000, totalSpend:80000 }, ces:{ sumScores:900, responses:200 },
                cpa:{ spend:70000, actions:700 }, cpl:{ spend:70000, leads:1400 },
                arppu:{ revenue:200000, payingUsers:20000 },
                openRate:{ opens:700000, delivered:2000000 }, ctor:{ clicks:80000, opens:700000 },
                featureAdoption:{ adopted:600000, active:2000000 },
                avgResolutionTime:{ totalHours:2400, ticketsResolved:200 },
                arpdau:{ dailyRevenue:6600, dau:350000 }, aov:{ revenue:200000, orders:1000 },
                repeatPurchaseRate:{ repeat:450, total:1000 }, timeToValue:{ days:1 },
                grossMargin:{ revenue:200000, cogs:80000 }, runway:{ cash:1000000, burn:50000 },
                burnRate:{ expenses:250000, revenue:200000 },
                salesVelocity:{ opps:60, acv:2400, winRate:25, cycle:30 },
                winRate:{ won:25, total:100 }, pipelineCoverage:{ pipeline:1800000, quota:600000 },
                salesCycleLength:{ totalDays:1800, wonCount:60 },
                mrrGrowthRate:{ startMrr:196000, endMrr:200000 },
                engagementRate:{ engagements:100000, reach:2000000 }
            }
        }
    ];

    function countTemplateMetrics(tpl) {
        return Object.keys(tpl.values).length;
    }

    function applyTemplate(tpl) {
        // Merge template values into storedValues, overwriting existing
        Object.entries(tpl.values).forEach(([metricId, vals]) => {
            storedValues[metricId] = Object.assign({}, storedValues[metricId], vals);
        });
        saveToLS(storedValues);
        renderMetricCard();
        if (typeof showToast === 'function') {
            showToast(`✓ Шаблон «${tpl.name}» применён — заполнено ${countTemplateMetrics(tpl)} метрик`, 'success');
        }
    }

    function initTemplates() {
        const grid = document.getElementById('templatesGrid');
        if (!grid) return;
        grid.innerHTML = SCENARIO_TEMPLATES.map(tpl => `
            <div class="template-card" data-tpl="${tpl.id}">
                <div class="template-icon">${tpl.icon}</div>
                <div class="template-name">${tpl.name}</div>
                <div class="template-desc">${tpl.desc}</div>
                <div class="template-metrics-count">Заполняет ${countTemplateMetrics(tpl)} метрик</div>
            </div>`).join('');

        grid.querySelectorAll('.template-card').forEach(card => {
            card.addEventListener('click', () => {
                const tpl = SCENARIO_TEMPLATES.find(t => t.id === card.dataset.tpl);
                if (tpl) {
                    applyTemplate(tpl);
                    document.getElementById('templatesOverlay').style.display = 'none';
                }
            });
        });

        document.getElementById('templatesBtn').addEventListener('click', () => {
            document.getElementById('templatesOverlay').style.display = 'flex';
        });
        document.getElementById('templatesClose').addEventListener('click', () => {
            document.getElementById('templatesOverlay').style.display = 'none';
        });
        document.getElementById('templatesOverlay').addEventListener('click', e => {
            if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
        });
    }

    // ---- DASHBOARD ----
    function openDashboard() {
        const overlay = document.getElementById('dashboardOverlay');
        const content = document.getElementById('dashboardContent');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        let hasAny = false;
        let html = '';

        Object.entries(metricsData).forEach(([sid, section]) => {
            let sectionHtml = '';
            section.metrics.forEach(metric => {
                const saved = storedValues[metric.id] || {};
                const vals = {};
                let allFilled = true;
                metric.inputs.forEach(inp => {
                    const raw = saved[inp.key];
                    const num = raw !== undefined && raw !== '' ? parseFloat(String(raw).replace(/[\u00A0 ]/g, '')) : null;
                    if (num === null || isNaN(num)) allFilled = false;
                    vals[inp.key] = num;
                });

                if (allFilled && metric.inputs.length > 0) {
                    try {
                        const result = metric.calculate(vals);
                        const isInf = result === Infinity;
                        const num = isInf ? Infinity : parseFloat(result);
                        if (result !== null && (isInf || !isNaN(num))) {
                            hasAny = true;
                            let color = 'var(--accent)';
                            let insightText = '';
                            if (metric.insight) {
                                const ins = metric.insight(num);
                                color = ins.color;
                                insightText = window._tInsight ? window._tInsight(ins.text) : ins.text;
                            }
                            const unit = metric.unit ? ` ${localizeUnit(metric.unit)}` : '';
                            const displayVal = isInf ? '∞' : formatSmart(num);
                            sectionHtml += `
                                <div class="dash-card" data-sid="${sid}" data-mid="${metric.id}" title="${metric.name}: нажмите для расчёта">
                                    <div class="dash-card-accent" style="background:${color}"></div>
                                    <div class="dash-card-name">${metric.name}</div>
                                    <div class="dash-card-val" style="color:${color}">${displayVal}${unit}</div>
                                    ${insightText ? `<div class="dash-card-insight">${insightText}</div>` : ''}
                                </div>`;
                        }
                    } catch(e) {}
                } else {
                    sectionHtml += `
                        <div class="dash-card-empty" data-sid="${sid}" data-mid="${metric.id}" title="Перейти к ${metric.name}">
                            <div class="dash-card-name">${metric.name}</div>
                            <div class="dash-card-empty-hint">Нет данных</div>
                        </div>`;
                }
            });

            if (sectionHtml) {
                html += `<div class="dashboard-section">
                    <div class="dashboard-section-title">${section.name}</div>
                    <div class="dashboard-grid">${sectionHtml}</div>
                </div>`;
            }
        });

        if (!hasAny) {
            content.innerHTML = `<div class="dashboard-empty-state">
                <p>Пока нет рассчитанных метрик</p>
                <small>Заполните значения в калькуляторе или примените шаблон сценария</small>
            </div>`;
        } else {
            content.innerHTML = html;
        }

        // Click on dash card → open that metric
        content.querySelectorAll('[data-sid][data-mid]').forEach(card => {
            card.addEventListener('click', () => {
                closeDashboard();
                saveCurrentValues();
                currentSection = card.dataset.sid;
                sectionCards.forEach(c => c.classList.toggle('active', c.dataset.section === currentSection));
                currentMetricId = card.dataset.mid;
                renderMetricsList();
                renderMetricCard();
            });
        });
    }

    function closeDashboard() {
        document.getElementById('dashboardOverlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    document.getElementById('dashboardBtn').addEventListener('click', openDashboard);
    document.getElementById('dashboardClose').addEventListener('click', closeDashboard);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDashboard(); });

    // ---- AI-ДИАГНОСТИКА ("Что чинить первым") ----
    // Gathers the currently-computed metric values from the dashboard state and
    // asks /api/insight for the single highest-leverage fix. Works with or
    // without ANTHROPIC_API_KEY on the server (rule-based fallback otherwise).
    function gatherDashboardMetrics() {
        const out = {};
        Object.values(metricsData).forEach(section => {
            section.metrics.forEach(metric => {
                const saved = storedValues[metric.id] || {};
                if (!metric.inputs || metric.inputs.length === 0) return;
                const vals = {};
                let allFilled = true;
                metric.inputs.forEach(inp => {
                    const raw = saved[inp.key];
                    const num = raw !== undefined && raw !== ''
                        ? parseFloat(String(raw).replace(/[  ]/g, '')) : null;
                    if (num === null || isNaN(num)) allFilled = false;
                    vals[inp.key] = num;
                });
                if (!allFilled) return;
                try {
                    const result = metric.calculate(vals);
                    const n = parseFloat(result);
                    if (result !== null && isFinite(n)) out[metric.id] = n;
                } catch (e) {}
            });
        });
        return out;
    }

    function escapeAiHtml(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function renderAiInsight(data) {
        const panel = document.getElementById('aiInsightPanel');
        const sourceTxt = data.source === 'ai'
            ? t('ai.source_ai', 'AI-анализ')
            : t('ai.source_fallback', 'Анализ по правилам');
        let html = '<div class="ai-accent"></div>';
        html += `<div class="ai-insight-lever-label">${escapeAiHtml(t('ai.lever_label', 'Чинить первым'))}</div>`;
        html += `<div class="ai-insight-lever">${escapeAiHtml(data.lever || '')}</div>`;
        if (data.diagnosis) html += `<div class="ai-insight-diagnosis">${escapeAiHtml(data.diagnosis)}</div>`;
        if (data.projection) {
            html += `<div class="ai-insight-projection"><b>${escapeAiHtml(t('ai.projection_label', 'Прогноз'))}:</b> ${escapeAiHtml(data.projection)}</div>`;
        }
        if (Array.isArray(data.secondary) && data.secondary.length) {
            html += `<div class="ai-insight-secondary-label">${escapeAiHtml(t('ai.secondary_label', 'Затем посмотрите'))}</div>`;
            html += '<div class="ai-insight-secondary">' +
                data.secondary.map(s => `<span>${escapeAiHtml(s)}</span>`).join('') + '</div>';
        }
        html += `<div class="ai-insight-source">${escapeAiHtml(sourceTxt)}</div>`;
        panel.innerHTML = html;
        panel.style.display = '';
    }

    let aiInsightLoading = false;
    async function runAiInsight() {
        if (aiInsightLoading) return;
        const panel = document.getElementById('aiInsightPanel');
        const btn = document.getElementById('aiInsightBtn');
        saveCurrentValues();
        const metrics = gatherDashboardMetrics();

        if (Object.keys(metrics).length === 0) {
            panel.innerHTML = `<div class="ai-insight-error">${escapeAiHtml(t('ai.no_metrics', 'Сначала заполните метрики (Churn, Runway, LTV:CAC), чтобы получить диагноз.'))}</div>`;
            panel.style.display = '';
            return;
        }

        aiInsightLoading = true;
        if (btn) btn.disabled = true;
        panel.style.display = '';
        panel.innerHTML = `<div class="ai-insight-loading"><span class="ai-insight-spinner"></span>${escapeAiHtml(t('ai.loading', 'Анализируем ваши метрики…'))}</div>`;

        const lang = window._currentLang ? window._currentLang() : 'ru';
        try {
            const resp = await fetch('/api/insight', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ metrics, lang }),
            });
            const data = await resp.json();
            if (!resp.ok || !data || !data.lever) {
                throw new Error('bad response');
            }
            renderAiInsight(data);
            if (window.track) window.track('ai_insight', { source: data.source, lang });
        } catch (e) {
            panel.innerHTML = `<div class="ai-insight-error">${escapeAiHtml(t('ai.error', 'Не удалось получить диагноз. Попробуйте ещё раз.'))}</div>`;
        } finally {
            aiInsightLoading = false;
            if (btn) btn.disabled = false;
        }
    }

    const aiInsightBtn = document.getElementById('aiInsightBtn');
    if (aiInsightBtn) aiInsightBtn.addEventListener('click', runAiInsight);

    // ---- WHAT-IF ANALYSIS ----
    const whatifBtn = document.getElementById('whatifBtn');
    const whatifPanel = document.getElementById('whatifPanel');
    let whatifOpen = false;

    function formatWhatIfVal(num) {
        if (Math.abs(num) >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (Math.abs(num) >= 1e3) return (num / 1e3).toFixed(1) + 'K';
        if (!Number.isInteger(num)) return parseFloat(num.toFixed(2)).toString();
        return num.toString();
    }

    function buildWhatIfPanel(metric) {
        if (!metric) return;
        // Gather current input values
        const baseValues = {};
        metric.inputs.forEach(inp => {
            const el = document.getElementById(`input-${inp.key}`);
            const raw = el ? el.value.replace(/[\u00A0 ]/g, '') : '';
            baseValues[inp.key] = parseFloat(raw) || 0;
        });

        const baseResult = metric.calculate(Object.assign({}, baseValues));
        const baseNum = parseFloat(baseResult);
        if (isNaN(baseNum)) return;

        let html = `<div class="whatif-title">Анализ «Что если?»</div>`;

        metric.inputs.forEach(inp => {
            const cur = baseValues[inp.key];
            const allowsNeg = inp.min !== undefined && inp.min < 0;
            // Для полей с разрешёнными отрицательными значениями диапазон строим симметрично
            // вокруг текущего, чтобы пользователь мог уйти в минус и плюс.
            let minV, maxV, step;
            if (allowsNeg) {
                const span = Math.max(Math.abs(cur) * 2, 50);
                minV = Math.max(inp.min, -span);
                maxV = (inp.max !== undefined ? Math.min(inp.max, span) : span);
                step = parseFloat((span * 0.01).toFixed(6)) || 1;
            } else {
                minV = inp.min !== undefined ? inp.min : (cur > 0 ? cur * 0.1 : 0);
                maxV = cur > 0 ? cur * 3 : (inp.placeholder || 100);
                step = cur > 0 ? parseFloat((cur * 0.01).toFixed(6)) : 1;
            }

            html += `
                <div class="whatif-row" data-key="${inp.key}">
                    <span class="whatif-lbl">${inp.label}</span>
                    <input type="range" class="whatif-slider"
                        data-key="${inp.key}"
                        data-base="${cur}"
                        min="${minV}" max="${maxV}" step="${step}"
                        value="${cur}">
                    <span class="whatif-val" id="wival-${inp.key}">${formatWhatIfVal(cur)}</span>
                </div>`;
        });

        const unit = metric.unit ? ` ${localizeUnit(metric.unit)}` : '';
        html += `
            <div class="whatif-result-row">
                <span class="whatif-result-lbl">Результат:</span>
                <span class="whatif-result-val" id="wiResult">${formatWhatIfVal(baseNum)}${unit}</span>
                <span class="whatif-delta neu" id="wiDelta">= базовый</span>
            </div>
            <button class="whatif-reset" id="wiResetBtn">Сбросить к текущим значениям</button>`;

        whatifPanel.innerHTML = html;

        // Attach slider listeners
        whatifPanel.querySelectorAll('.whatif-slider').forEach(slider => {
            slider.addEventListener('input', () => {
                const key = slider.dataset.key;
                const valEl = document.getElementById(`wival-${key}`);
                const sliderVal = parseFloat(slider.value);
                if (valEl) valEl.textContent = formatWhatIfVal(sliderVal);

                // Collect all current slider values
                const testValues = {};
                metric.inputs.forEach(inp => {
                    const s = whatifPanel.querySelector(`.whatif-slider[data-key="${inp.key}"]`);
                    testValues[inp.key] = s ? parseFloat(s.value) : baseValues[inp.key];
                });

                const newResult = metric.calculate(Object.assign({}, testValues));
                const newNum = parseFloat(newResult);
                const wiResultEl = document.getElementById('wiResult');
                const wiDeltaEl = document.getElementById('wiDelta');
                if (wiResultEl && !isNaN(newNum)) {
                    wiResultEl.textContent = `${formatWhatIfVal(newNum)}${unit}`;
                    if (baseNum !== 0) {
                        const pct = ((newNum - baseNum) / Math.abs(baseNum)) * 100;
                        const sign = pct > 0 ? '+' : '';
                        const cls = pct > 0.5 ? 'pos' : pct < -0.5 ? 'neg' : 'neu';
                        const label = Math.abs(pct) < 0.5 ? '= базовый' : `${sign}${pct.toFixed(1)}%`;
                        wiDeltaEl.textContent = label;
                        wiDeltaEl.className = `whatif-delta ${cls}`;
                    }
                }
            });
        });

        // Reset button
        const resetBtn = document.getElementById('wiResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                metric.inputs.forEach(inp => {
                    const s = whatifPanel.querySelector(`.whatif-slider[data-key="${inp.key}"]`);
                    const valEl = document.getElementById(`wival-${inp.key}`);
                    if (s) s.value = baseValues[inp.key];
                    if (valEl) valEl.textContent = formatWhatIfVal(baseValues[inp.key]);
                });
                const wiResultEl = document.getElementById('wiResult');
                const wiDeltaEl = document.getElementById('wiDelta');
                if (wiResultEl) wiResultEl.textContent = `${formatWhatIfVal(baseNum)}${unit}`;
                if (wiDeltaEl) { wiDeltaEl.textContent = '= базовый'; wiDeltaEl.className = 'whatif-delta neu'; }
            });
        }
    }

    whatifBtn.addEventListener('click', () => {
        whatifOpen = !whatifOpen;
        whatifBtn.classList.toggle('open', whatifOpen);
        whatifPanel.classList.toggle('open', whatifOpen);
        if (whatifOpen) {
            const metric = getCurrentMetric();
            buildWhatIfPanel(metric);
        }
    });

    // ---- GOAL MODE (REVERSE CALCULATIONS) ----
    // Каждая метрика в этом словаре получает кнопку «🎯 Цель».
    // q = массив вопросов: { ask, fixed: ['key1','key2',...], solveFor, hint, formula }
    // formula(values) возвращает число — результат обратного расчёта.
    // Только указываем поля fixed (которые не будут пересчитываться); пользователь вводит их и получает solveFor.
    const GOAL_QUESTIONS = {
        ltv_cac: [
            {
                ask: 'При LTV и целевом LTV:CAC ratio — какой максимум CAC?',
                fixed: [
                    { key: 'ltv',   label: 'LTV', placeholder: '15000', unit: '$' },
                    { key: 'targetRatio', label: 'Целевой LTV:CAC', placeholder: '3', unit: 'x' }
                ],
                solveFor: { label: 'Максимум CAC', unit: '$' },
                hint: 'Если CAC будет ниже этого значения — соотношение LTV:CAC выше целевого.',
                formula: v => (v.ltv > 0 && v.targetRatio > 0) ? v.ltv / v.targetRatio : null
            },
            {
                ask: 'При CAC и целевом ratio — какой нужен LTV?',
                fixed: [
                    { key: 'cac', label: 'CAC', placeholder: '1500', unit: '$' },
                    { key: 'targetRatio', label: 'Целевой LTV:CAC', placeholder: '3', unit: 'x' }
                ],
                solveFor: { label: 'Минимум LTV', unit: '$' },
                hint: 'Чтобы достичь целевого ratio, нужен LTV не меньше этого.',
                formula: v => (v.cac >= 0 && v.targetRatio > 0) ? v.cac * v.targetRatio : null
            }
        ],
        cacPayback: [
            {
                ask: 'При CAC, MRR на клиента и целевом payback — какая нужна маржа?',
                fixed: [
                    { key: 'cac', label: 'CAC', placeholder: '1200', unit: '$' },
                    { key: 'mrr', label: 'MRR на клиента', placeholder: '150', unit: '$' },
                    { key: 'targetMonths', label: 'Целевой payback', placeholder: '12', unit: 'мес' }
                ],
                solveFor: { label: 'Минимум маржи', unit: '%' },
                hint: 'При меньшей марже окупаемость превысит целевую.',
                formula: v => (v.mrr > 0 && v.targetMonths > 0) ? Math.min(100, (v.cac / (v.mrr * v.targetMonths)) * 100) : null
            },
            {
                ask: 'При MRR на клиента, марже и целевом payback — какой максимум CAC?',
                fixed: [
                    { key: 'mrr', label: 'MRR на клиента', placeholder: '150', unit: '$' },
                    { key: 'margin', label: 'Маржа', placeholder: '80', unit: '%' },
                    { key: 'targetMonths', label: 'Целевой payback', placeholder: '12', unit: 'мес' }
                ],
                solveFor: { label: 'Максимум CAC', unit: '$' },
                hint: 'CAC ниже — payback укладывается в целевой.',
                formula: v => (v.mrr > 0 && v.margin > 0 && v.targetMonths > 0) ? v.mrr * (v.margin/100) * v.targetMonths : null
            }
        ],
        burnMultiple: [
            {
                ask: 'При Net Burn и целевом Burn Multiple — какой нужен Net New ARR?',
                fixed: [
                    { key: 'burn', label: 'Net Burn', placeholder: '500000', unit: '$' },
                    { key: 'targetBM', label: 'Целевой Burn Multiple', placeholder: '1', unit: 'x' }
                ],
                solveFor: { label: 'Минимум Net New ARR', unit: '$' },
                hint: 'При большем приросте ARR — Burn Multiple ниже целевого.',
                formula: v => (v.targetBM > 0) ? v.burn / v.targetBM : null
            },
            {
                ask: 'При Net New ARR и целевом Burn Multiple — какой максимум Net Burn?',
                fixed: [
                    { key: 'newArr', label: 'Net New ARR', placeholder: '600000', unit: '$' },
                    { key: 'targetBM', label: 'Целевой Burn Multiple', placeholder: '1', unit: 'x' }
                ],
                solveFor: { label: 'Максимум Net Burn', unit: '$' },
                hint: 'Сжигаем больше — превышаем целевой Burn Multiple.',
                formula: v => (v.newArr > 0) ? v.newArr * v.targetBM : null
            }
        ],
        ruleOf40: [
            {
                ask: 'При марже EBITDA и целевом Rule of 40 — какой нужен рост?',
                fixed: [
                    { key: 'margin', label: 'Маржа EBITDA', placeholder: '15', unit: '%' },
                    { key: 'target', label: 'Целевой Rule of 40', placeholder: '40', unit: '%' }
                ],
                solveFor: { label: 'Минимум роста YoY', unit: '%' },
                hint: 'При меньшем росте сумма не достигнет цели.',
                formula: v => v.target - v.margin
            },
            {
                ask: 'При росте YoY и целевом Rule of 40 — какая нужна маржа?',
                fixed: [
                    { key: 'growth', label: 'Рост YoY', placeholder: '30', unit: '%' },
                    { key: 'target', label: 'Целевой Rule of 40', placeholder: '40', unit: '%' }
                ],
                solveFor: { label: 'Минимум маржи EBITDA', unit: '%' },
                hint: 'При меньшей марже сумма не достигнет цели.',
                formula: v => v.target - v.growth
            }
        ],
        roas: [
            {
                ask: 'При затратах на рекламу и целевом ROAS — какая нужна выручка?',
                fixed: [
                    { key: 'spend', label: 'Затраты на рекламу', placeholder: '30000', unit: '$' },
                    { key: 'target', label: 'Целевой ROAS', placeholder: '4', unit: 'x' }
                ],
                solveFor: { label: 'Минимум выручки', unit: '$' },
                hint: 'Это минимум, чтобы кампания дала целевой ROAS.',
                formula: v => v.spend > 0 ? v.spend * v.target : null
            },
            {
                ask: 'При выручке и целевом ROAS — какой максимум затрат?',
                fixed: [
                    { key: 'revenue', label: 'Выручка от рекламы', placeholder: '120000', unit: '$' },
                    { key: 'target', label: 'Целевой ROAS', placeholder: '4', unit: 'x' }
                ],
                solveFor: { label: 'Максимум затрат', unit: '$' },
                hint: 'Тратим больше — ROAS ниже целевого.',
                formula: v => v.target > 0 ? v.revenue / v.target : null
            }
        ],
        cr: [
            {
                ask: 'При посетителях и целевом CR — сколько нужно конверсий?',
                fixed: [
                    { key: 'visitors', label: 'Посетители', placeholder: '10000', unit: '' },
                    { key: 'target', label: 'Целевой CR', placeholder: '3', unit: '%' }
                ],
                solveFor: { label: 'Минимум конверсий', unit: '' },
                hint: 'Целое число ≥ этого даст требуемый CR.',
                formula: v => v.visitors * (v.target / 100)
            },
            {
                ask: 'При конверсиях и целевом CR — сколько нужно посетителей (максимум)?',
                fixed: [
                    { key: 'conversions', label: 'Конверсии', placeholder: '300', unit: '' },
                    { key: 'target', label: 'Целевой CR', placeholder: '3', unit: '%' }
                ],
                solveFor: { label: 'Максимум посетителей', unit: '' },
                hint: 'Большее число посетителей — CR ниже целевого.',
                formula: v => v.target > 0 ? v.conversions / (v.target / 100) : null
            }
        ],
        churn: [
            {
                ask: 'При начальной базе и целевом Churn — сколько максимум допустимо потерять?',
                fixed: [
                    { key: 'total', label: 'База на начало периода', placeholder: '2000', unit: '' },
                    { key: 'target', label: 'Целевой Churn', placeholder: '2', unit: '%' }
                ],
                solveFor: { label: 'Максимум ушедших', unit: '' },
                hint: 'Больше ушедших — Churn выше целевого.',
                formula: v => v.total * (v.target / 100)
            }
        ],
        nrr: [
            {
                ask: 'При начальном MRR, оттоке и целевом NRR — какой нужен апсел?',
                fixed: [
                    { key: 'start', label: 'Начальный MRR', placeholder: '50000', unit: '$' },
                    { key: 'churn', label: 'Отток MRR', placeholder: '3000', unit: '$' },
                    { key: 'target', label: 'Целевой NRR', placeholder: '120', unit: '%' }
                ],
                solveFor: { label: 'Минимум апселов', unit: '$' },
                hint: 'При меньших апселах NRR не достигнет цели.',
                formula: v => v.start > 0 ? (v.target / 100 - 1) * v.start + v.churn : null
            }
        ],
        runway: [
            {
                ask: 'При целевом runway и текущем сжигании — сколько нужно поднять / иметь кэша?',
                fixed: [
                    { key: 'burn', label: 'Месячное сжигание', placeholder: '300000', unit: '$' },
                    { key: 'target', label: 'Целевой runway', placeholder: '18', unit: 'мес' }
                ],
                solveFor: { label: 'Минимум кэша', unit: '$' },
                hint: 'Чтобы получить нужный runway — поднимите столько в раунде.',
                formula: v => (v.burn > 0 && v.target > 0) ? v.burn * v.target : null
            },
            {
                ask: 'При кэше и целевом runway — какой максимум сжигания?',
                fixed: [
                    { key: 'cash', label: 'Кэш на счёте', placeholder: '5000000', unit: '$' },
                    { key: 'target', label: 'Целевой runway', placeholder: '18', unit: 'мес' }
                ],
                solveFor: { label: 'Максимум месячного сжигания', unit: '$' },
                hint: 'Если сжигание выше — runway короче целевого. Режьте затраты.',
                formula: v => (v.cash > 0 && v.target > 0) ? v.cash / v.target : null
            }
        ],
        grossMargin: [
            {
                ask: 'При выручке и целевой марже — какой максимум COGS?',
                fixed: [
                    { key: 'revenue', label: 'Выручка', placeholder: '1000000', unit: '$' },
                    { key: 'target', label: 'Целевая маржа', placeholder: '75', unit: '%' }
                ],
                solveFor: { label: 'Максимум COGS', unit: '$' },
                hint: 'COGS ниже этого — маржа выше целевой.',
                formula: v => (v.revenue > 0 && v.target >= 0) ? v.revenue * (1 - v.target/100) : null
            }
        ],
        salesVelocity: [
            {
                ask: 'При opps, ACV, win rate и целевой velocity — какой нужен цикл?',
                fixed: [
                    { key: 'opps', label: 'Активные opps', placeholder: '120', unit: '' },
                    { key: 'acv', label: 'ACV', placeholder: '24000', unit: '$' },
                    { key: 'winRate', label: 'Win Rate', placeholder: '25', unit: '%' },
                    { key: 'target', label: 'Целевая velocity', placeholder: '15000', unit: '$/день' }
                ],
                solveFor: { label: 'Максимум длины цикла', unit: 'дней' },
                hint: 'Цикл длиннее — velocity ниже цели. Ускоряйте процесс продажи.',
                formula: v => v.target > 0 ? (v.opps * v.acv * (v.winRate/100)) / v.target : null
            }
        ],
        winRate: [
            {
                ask: 'При закрытых сделках и целевом win rate — сколько максимум lost?',
                fixed: [
                    { key: 'won', label: 'Closed Won', placeholder: '24', unit: '' },
                    { key: 'target', label: 'Целевой Win Rate', placeholder: '30', unit: '%' }
                ],
                solveFor: { label: 'Максимум lost', unit: '' },
                hint: 'Lost больше — win rate ниже целевого. Улучшайте qualification.',
                formula: v => v.target > 0 ? v.won * (100 / v.target - 1) : null
            }
        ],
        pipelineCoverage: [
            {
                ask: 'При quota и целевом coverage — какой нужен pipeline?',
                fixed: [
                    { key: 'quota', label: 'Цель по выручке', placeholder: '1000000', unit: '$' },
                    { key: 'target', label: 'Целевое coverage', placeholder: '3', unit: 'x' }
                ],
                solveFor: { label: 'Минимум pipeline', unit: '$' },
                hint: 'Меньше pipeline — рискуете не закрыть план.',
                formula: v => v.quota * v.target
            }
        ],
        arpdau: [
            {
                ask: 'При DAU и целевом ARPDAU — какая нужна дневная выручка?',
                fixed: [
                    { key: 'dau', label: 'DAU', placeholder: '50000', unit: '' },
                    { key: 'target', label: 'Целевой ARPDAU', placeholder: '0.30', unit: '$' }
                ],
                solveFor: { label: 'Минимум дневной выручки', unit: '$' },
                hint: 'Меньше выручки — ARPDAU ниже целевого.',
                formula: v => v.dau * v.target
            }
        ],
        cpa: [
            {
                ask: 'При затратах и целевом CPA — сколько нужно целевых действий?',
                fixed: [
                    { key: 'spend', label: 'Затраты', placeholder: '8000', unit: '$' },
                    { key: 'target', label: 'Целевой CPA', placeholder: '25', unit: '$' }
                ],
                solveFor: { label: 'Минимум целевых действий', unit: '' },
                hint: 'Меньше действий — CPA выше целевого.',
                formula: v => v.target > 0 ? v.spend / v.target : null
            }
        ],
        cpl: [
            {
                ask: 'При затратах и целевом CPL — сколько нужно лидов?',
                fixed: [
                    { key: 'spend', label: 'Затраты', placeholder: '12000', unit: '$' },
                    { key: 'target', label: 'Целевой CPL', placeholder: '20', unit: '$' }
                ],
                solveFor: { label: 'Минимум лидов', unit: '' },
                hint: 'Меньше лидов — CPL выше целевого.',
                formula: v => v.target > 0 ? v.spend / v.target : null
            }
        ],
        cpi: [
            {
                ask: 'При затратах и целевом CPI — сколько нужно установок?',
                fixed: [
                    { key: 'spend', label: 'Затраты', placeholder: '15000', unit: '$' },
                    { key: 'target', label: 'Целевой CPI', placeholder: '2', unit: '$' }
                ],
                solveFor: { label: 'Минимум установок', unit: '' },
                hint: 'Меньше установок — CPI выше целевого.',
                formula: v => v.target > 0 ? v.spend / v.target : null
            }
        ],
        cpm: [
            {
                ask: 'При показах и целевом CPM — какой максимум затрат?',
                fixed: [
                    { key: 'impressions', label: 'Показы', placeholder: '800000', unit: '' },
                    { key: 'target', label: 'Целевой CPM', placeholder: '8', unit: '$' }
                ],
                solveFor: { label: 'Максимум затрат', unit: '$' },
                hint: 'Тратите больше — CPM выше целевого.',
                formula: v => (v.impressions > 0 && v.target >= 0) ? v.impressions * v.target / 1000 : null
            }
        ],
        mer: [
            {
                ask: 'При маркетинговых затратах и целевом MER — какая нужна выручка?',
                fixed: [
                    { key: 'totalSpend', label: 'Маркетинговые затраты', placeholder: '90000', unit: '$' },
                    { key: 'target', label: 'Целевой MER', placeholder: '3', unit: '×' }
                ],
                solveFor: { label: 'Минимум выручки', unit: '$' },
                hint: 'Меньше выручки — MER ниже целевого.',
                formula: v => v.totalSpend >= 0 ? v.totalSpend * v.target : null
            }
        ],
        takeRate: [
            {
                ask: 'При GMV и целевом Take Rate — какая нужна выручка платформы?',
                fixed: [
                    { key: 'gmv', label: 'GMV (оборот)', placeholder: '780000', unit: '$' },
                    { key: 'target', label: 'Целевой Take Rate', placeholder: '15', unit: '%' }
                ],
                solveFor: { label: 'Минимум выручки платформы', unit: '$' },
                hint: 'Меньше выручки — Take Rate ниже целевого.',
                formula: v => v.gmv > 0 ? v.gmv * (v.target / 100) : null
            }
        ],
        contributionMargin: [
            {
                ask: 'При выручке и целевой Contribution Margin — какой максимум переменных затрат?',
                fixed: [
                    { key: 'revenue', label: 'Выручка', placeholder: '100000', unit: '$' },
                    { key: 'target', label: 'Целевая Contribution Margin', placeholder: '40', unit: '%' }
                ],
                solveFor: { label: 'Максимум переменных затрат', unit: '$' },
                hint: 'Переменные затраты ниже — маржа выше целевой.',
                formula: v => (v.revenue > 0 && v.target >= 0) ? v.revenue * (1 - v.target / 100) : null
            }
        ],
        quotaAttainment: [
            {
                ask: 'При квоте и целевом выполнении — сколько нужно продать?',
                fixed: [
                    { key: 'quota', label: 'Квота (план)', placeholder: '500000', unit: '$' },
                    { key: 'target', label: 'Целевое выполнение', placeholder: '100', unit: '%' }
                ],
                solveFor: { label: 'Минимум факта продаж', unit: '$' },
                hint: 'Меньше продаж — выполнение ниже целевого.',
                formula: v => v.quota > 0 ? v.quota * (v.target / 100) : null
            }
        ],
        cartAbandonment: [
            {
                ask: 'При корзинах и целевом проценте брошенных — сколько нужно покупок?',
                fixed: [
                    { key: 'carts', label: 'Созданные корзины', placeholder: '8000', unit: '' },
                    { key: 'target', label: 'Целевой % брошенных', placeholder: '60', unit: '%' }
                ],
                solveFor: { label: 'Минимум покупок', unit: '' },
                hint: 'Меньше покупок — выше процент брошенных корзин.',
                formula: v => (v.carts > 0 && v.target >= 0 && v.target <= 100) ? v.carts * (1 - v.target / 100) : null
            }
        ],
        openRate: [
            {
                ask: 'При доставленных письмах и целевом Open Rate — сколько нужно открытий?',
                fixed: [
                    { key: 'delivered', label: 'Доставлено писем', placeholder: '20000', unit: '' },
                    { key: 'target', label: 'Целевой Open Rate', placeholder: '25', unit: '%' }
                ],
                solveFor: { label: 'Минимум открытий', unit: '' },
                hint: 'Меньше открытий — Open Rate ниже целевого.',
                formula: v => v.delivered > 0 ? v.delivered * (v.target / 100) : null
            }
        ],
        ctor: [
            {
                ask: 'При открытиях и целевом CTOR — сколько нужно кликов?',
                fixed: [
                    { key: 'opens', label: 'Уникальные открытия', placeholder: '4200', unit: '' },
                    { key: 'target', label: 'Целевой CTOR', placeholder: '20', unit: '%' }
                ],
                solveFor: { label: 'Минимум кликов', unit: '' },
                hint: 'Меньше кликов — CTOR ниже целевого.',
                formula: v => v.opens > 0 ? v.opens * (v.target / 100) : null
            }
        ]
    };

    let goalOpen = false;
    const goalBtn = document.getElementById('goalBtn');
    const goalPanel = document.getElementById('goalPanel');

    function getCurrencyForUnit(u) {
        if (u === '$' && currentCurrency !== '$') return currentCurrency;
        return u;
    }

    function buildGoalPanel(metric) {
        if (!metric) return;
        const questions = GOAL_QUESTIONS[metric.id];
        if (!questions || !questions.length) {
            goalPanel.innerHTML = `<div class="goal-empty">${t('goal.empty', 'Для этой метрики обратные расчёты пока не настроены.')}</div>`;
            return;
        }
        const _tg = window._tGoal || (s => s);
        const optionsHtml = questions.map((q, i) => `<option value="${i}">${_tg(q.ask)}</option>`).join('');
        goalPanel.innerHTML = `
            <div class="goal-title">${t('goal.title', '🎯 Goal mode — обратный расчёт')}</div>
            <select class="goal-question-select" id="goalSelect" aria-label="${t('goal.select_aria', 'Выберите вопрос для обратного расчёта')}">${optionsHtml}</select>
            <div id="goalForm"></div>
        `;
        const sel = document.getElementById('goalSelect');
        const renderQuestion = (idx) => {
            const q = questions[idx];
            const form = document.getElementById('goalForm');
            const inputsHtml = q.fixed.map(f => {
                const u = getCurrencyForUnit(f.unit);
                // Префилл из основной формы (если ключ совпадает с input.key текущей метрики)
                let prefill = '';
                const mainEl = document.getElementById('input-' + f.key);
                if (mainEl && mainEl.value) prefill = mainEl.value;
                return `
                    <div class="goal-input-row">
                        <label for="goal-${f.key}">${_tg(f.label)}${u ? ', ' + u : ''}</label>
                        <input type="text" id="goal-${f.key}" data-key="${f.key}" value="${prefill}" placeholder="${formatNum(f.placeholder)}" inputmode="decimal" autocomplete="off">
                    </div>`;
            }).join('');
            const solveUnit = getCurrencyForUnit(q.solveFor.unit);
            form.innerHTML = `
                ${inputsHtml}
                <div class="goal-result-row">
                    <span class="goal-result-label">${_tg(q.solveFor.label)}:</span>
                    <span class="goal-result-val" id="goalResult">—</span>
                    ${solveUnit ? `<span class="goal-result-label">${solveUnit}</span>` : ''}
                    <span class="goal-result-hint" id="goalHint">${_tg(q.hint)}</span>
                </div>`;
            const compute = () => {
                const vals = {};
                let allFilled = true;
                q.fixed.forEach(f => {
                    const el = document.getElementById('goal-' + f.key);
                    const raw = el ? el.value.replace(/[  ]/g, '') : '';
                    if (raw === '') allFilled = false;
                    vals[f.key] = parseFloat(raw);
                });
                const out = document.getElementById('goalResult');
                if (!allFilled) { out.textContent = '—'; return; }
                try {
                    const res = q.formula(vals);
                    if (res === null || !Number.isFinite(res)) { out.textContent = '—'; return; }
                    out.textContent = formatSmart(res);
                } catch (e) { out.textContent = '—'; }
            };
            q.fixed.forEach(f => {
                const el = document.getElementById('goal-' + f.key);
                el.addEventListener('input', () => { formatInputEl(el); compute(); });
            });
            compute();
        };
        sel.addEventListener('change', e => renderQuestion(parseInt(e.target.value)));
        renderQuestion(0);
    }

    function refreshGoalButtonVisibility() {
        const m = getCurrentMetric();
        if (!goalBtn) return;
        if (m && GOAL_QUESTIONS[m.id]) goalBtn.style.display = '';
        else goalBtn.style.display = 'none';
    }
    // Safety net: re-run visibility checks after window load + on popstate (back/forward)
    // — fixes edge cases where the initial render lost the state due to stale localStorage
    // or racing scripts.
    window.addEventListener('load', () => {
        try { refreshGoalButtonVisibility(); if (typeof refreshForecastButtonVisibility === 'function') refreshForecastButtonVisibility(); } catch(e){}
    });
    window.addEventListener('popstate', () => {
        try {
            const restored = restoreFromURL();
            if (restored) { renderMetricsList(); renderMetricCard(); }
            refreshGoalButtonVisibility();
            if (typeof refreshForecastButtonVisibility === 'function') refreshForecastButtonVisibility();
        } catch(e){}
    });

    if (goalBtn) {
        goalBtn.addEventListener('click', () => {
            goalOpen = !goalOpen;
            goalBtn.classList.toggle('open', goalOpen);
            goalPanel.classList.toggle('open', goalOpen);
            if (goalOpen) buildGoalPanel(getCurrentMetric());
        });
    }

    // ---- DEEP CONTENT (per-metric guides for SEO) ----
    // 300-500 word expandable guide rendered as <details> after the result block.
    // Top 10 metrics have hand-written content; others fall back to nothing.
    const DEEP_CONTENT = {
        ltv: {
            ru: `<h4>Что такое LTV</h4><p>Lifetime Value (LTV) — это суммарный доход, который один клиент приносит за всё время жизни как платящего пользователя. Формула <b>AOV × Частота покупок в год × Срок жизни (лет)</b> работает для повторяющихся покупок. Для подписочных моделей альтернативная формула: <code>ARPU / Churn Rate</code>.</p><h4>Главное правило: LTV : CAC ≥ 3</h4><p>Сам по себе LTV ничего не говорит. Health-чек unit-экономики — соотношение <a href="/ltv_cac">LTV : CAC</a>. Норма ≥ 3, отлично ≥ 5. Если LTV / CAC &lt; 1 — каждый новый клиент уносит деньги.</p><h4>3 типичные ошибки</h4><ul><li><b>Считают gross-LTV, забывая COGS.</b> Для SaaS вычитайте <a href="/grossMargin">Gross Margin</a>: LTV(net) = LTV × Margin%.</li><li><b>Берут максимальное «возможное» время жизни</b> вместо фактической медианы. Считайте по реальным когортам.</li><li><b>Применяют формулу AOV × freq × life к подписочной модели</b> вместо ARPU / Churn. У подписки нет «покупок», есть длительность.</li></ul><h4>Когда LTV не главное</h4><p>На <i>seed</i>-стадии важнее <a href="/runway">Runway</a> и <a href="/mrrGrowthRate">MRR Growth</a>. LTV точно считать невозможно — выборка слишком маленькая. Используйте LTV только когда есть когорты от 6+ месяцев.</p>`,
            en: `<h4>What is LTV</h4><p>Lifetime Value (LTV) is the total revenue one customer brings during their entire lifecycle as a paying user. The formula <b>AOV × Purchase frequency per year × Customer lifetime (years)</b> works for repeat purchases. For subscriptions, use: <code>ARPU / Churn Rate</code>.</p><h4>The main rule: LTV : CAC ≥ 3</h4><p>LTV alone tells you nothing. Unit-economics health = the <a href="/en/ltv_cac">LTV : CAC ratio</a>. Norm ≥ 3, excellent ≥ 5. If LTV / CAC &lt; 1, every new customer loses money.</p><h4>3 typical mistakes</h4><ul><li><b>Counting gross LTV, forgetting COGS.</b> For SaaS, multiply by <a href="/en/grossMargin">Gross Margin</a>: LTV(net) = LTV × Margin%.</li><li><b>Using maximum possible lifetime</b> instead of actual cohort median.</li><li><b>Applying AOV × freq × life to a subscription</b> instead of ARPU / Churn.</li></ul><h4>When LTV is not the priority</h4><p>At seed stage, <a href="/en/runway">Runway</a> and <a href="/en/mrrGrowthRate">MRR Growth</a> matter more. Use LTV when you have cohorts ≥ 6 months old.</p>`,
            uz: `<h4>LTV nima</h4><p>Lifetime Value (LTV) — bir mijoz to'lovchi sifatida butun umri davomida olib kelgan umumiy daromad. Formula: <b>AOV × Yiliga xaridlar × Mijoz umri (yil)</b>. Obuna modelida: <code>ARPU / Churn Rate</code>.</p><h4>Asosiy qoida: LTV : CAC ≥ 3</h4><p>LTV o'zicha hech narsa demaydi. Unit-iqtisodiyot salomatligi = <a href="/uz/ltv_cac">LTV : CAC nisbati</a>. Norma ≥ 3, ajoyib ≥ 5.</p>`
        },
        cac: {
            ru: `<h4>Что входит в CAC</h4><p>Customer Acquisition Cost — <b>все затраты на привлечение одного платящего клиента</b>: реклама, зарплаты sales/marketing команды, инструменты (HubSpot, ZoomInfo, рекламные кабинеты), производство контента, комиссии партнёрам. Это полная стоимость, а не только media-spend.</p><h4>Формула и когда она ломается</h4><p>CAC = (S&amp;M Spend за период) / (Новые платящие клиенты за тот же период). Ломается, если: (1) период привлечения и период оплаты разные (типично для B2B с длинным циклом), (2) включаете триальных пользователей в знаменатель, (3) не учитываете S&amp;M-payroll.</p><h4>Связь с другими метриками</h4><ul><li><b><a href="/cacPayback">CAC Payback</a></b> — за сколько месяцев CAC окупится через MRR. SaaS-норма: 12–18 мес.</li><li><b><a href="/ltv_cac">LTV : CAC</a></b> — главный health-чек. Норма ≥ 3.</li><li><b><a href="/magicNumber">Magic Number</a></b> — измеряет, насколько эффективно ваш S&amp;M бюджет конвертируется в ARR.</li></ul><h4>Blended vs Paid CAC</h4><p>Blended CAC включает органические каналы (referrals, SEO) в знаменатель — оптимистичная цифра. Paid CAC — только те клиенты, что пришли через платные каналы. Для управления каналами всегда смотрите Paid CAC per channel.</p>`,
            en: `<h4>What goes into CAC</h4><p>Customer Acquisition Cost = <b>everything spent to acquire one paying customer</b>: ads, sales/marketing payroll, tools (HubSpot, ZoomInfo), content production, partner commissions. Full cost — not just media spend.</p><h4>The formula and when it breaks</h4><p>CAC = (S&amp;M spend in period) / (New paying customers in same period). Breaks when (1) acquisition period and payment period differ (B2B with long cycles), (2) trial users counted in denominator, (3) S&amp;M payroll excluded.</p><h4>Related metrics</h4><ul><li><b><a href="/en/cacPayback">CAC Payback</a></b> — months until CAC is recouped via MRR. SaaS norm: 12–18 mo.</li><li><b><a href="/en/ltv_cac">LTV : CAC</a></b> — main health-check. Target ≥ 3.</li><li><b><a href="/en/magicNumber">Magic Number</a></b> — how efficiently S&amp;M converts to ARR.</li></ul><h4>Blended vs Paid CAC</h4><p>Blended CAC includes organic (referrals, SEO). Paid CAC = only paid-channel customers. Always track Paid CAC per channel for channel-level decisions.</p>`,
            uz: `<h4>CAC nima</h4><p>Customer Acquisition Cost — bir to'lovchi mijozni jalb qilish uchun barcha xarajatlar: reklama, sales/marketing maoshlari, asboblar (HubSpot, ZoomInfo), kontent, komissiyalar. To'liq qiymat — faqat media spend emas.</p>`
        },
        mrr: {
            ru: `<h4>Что считается MRR</h4><p>Monthly Recurring Revenue — <b>нормализованная месячная подписочная выручка</b>. Только то, что повторяется ежемесячно с высокой предсказуемостью. Годовые контракты делятся на 12 для «контрактного MRR». One-time setup fees, профессиональные услуги, ad-hoc счета — НЕ включаются.</p><h4>MRR ≠ Cash Revenue</h4><p>MRR — это бухгалтерская абстракция (accrual), а не cash. Клиент мог заплатить за год вперёд, но MRR всё равно идёт через 1/12 в месяц. Для cash-flow смотрите billings + collections отдельно.</p><h4>Главное — рост MoM, а не абсолют</h4><p>MRR в $50k на seed — нормально. MRR в $50k через 3 года — катастрофа. Здоровье — <a href="/mrrGrowthRate">MRR Growth Rate</a>: YC-минимум 5–7% MoM, хорошо &gt;10%, отлично &gt;20% MoM.</p><h4>Декомпозиция MRR</h4><p>Чтобы понять источник роста, MRR делят на: <b>New MRR</b> (новые клиенты) + <b>Expansion MRR</b> (апселы существующих) − <b>Churned MRR</b> (отток) − <b>Contraction MRR</b> (даунгрейды). Это входы для <a href="/quickRatio">SaaS Quick Ratio</a> (Mamoon Hamid). Quick Ratio &gt; 4 — отличное здоровье.</p>`,
            en: `<h4>What counts as MRR</h4><p>Monthly Recurring Revenue = <b>normalized monthly subscription revenue</b>. Only what recurs predictably each month. Annual contracts divided by 12 give "contracted MRR". One-time setup fees, professional services, ad-hoc invoices are EXCLUDED.</p><h4>MRR ≠ Cash Revenue</h4><p>MRR is an accrual abstraction, not cash. A customer paying annually upfront still contributes 1/12 to MRR per month. For cash flow, look at billings + collections separately.</p><h4>Growth matters more than absolute</h4><p>$50k MRR at seed = fine. $50k MRR after 3 years = catastrophe. Health = <a href="/en/mrrGrowthRate">MRR Growth Rate</a>: YC minimum 5–7% MoM, good &gt;10%, excellent &gt;20%.</p><h4>MRR decomposition</h4><p>Break MRR into: <b>New + Expansion − Churned − Contraction</b>. These feed <a href="/en/quickRatio">SaaS Quick Ratio</a> (Mamoon Hamid). Quick Ratio &gt; 4 = excellent.</p>`,
            uz: `<h4>MRR nima</h4><p>Monthly Recurring Revenue — normalashtirilgan oylik obuna tushumi. Yillik shartnomalar 12 ga bo'linadi. One-time setup fees kiritilmaydi.</p>`
        },
        nrr: {
            ru: `<h4>Что показывает NRR</h4><p>Net Revenue Retention — <b>сколько выручки осталось от существующих клиентов спустя период</b>, с учётом апселов, даунгрейдов и оттока. NRR &gt; 100% означает, что когорта старых клиентов растёт по выручке без новых клиентов вообще. Это магия "negative churn".</p><h4>Формула</h4><p>NRR = (Начальный MRR + Expansion − Downgrade − Churn) / Начальный MRR × 100%. Считается на cohort-based когорте — обычно когорта 12-месячной давности.</p><h4>Бенчмарки</h4><ul><li>&lt; 100% — выручка падает, нужно срочно работать с retention</li><li>100–110% — стабильно, типично для SMB SaaS</li><li>110–130% — здоровый рост, target для большинства SaaS</li><li>&gt; 130% — отличный результат, top-decile (Snowflake — 158%, Twilio — 134% на пике)</li></ul><p>Источник: <a href="https://openviewpartners.com/2024-saas-benchmarks-report/" target="_blank" rel="noopener">OpenView 2024 SaaS Benchmarks</a>, <a href="https://www.bvp.com/atlas/state-of-the-cloud-2024" target="_blank" rel="noopener">Bessemer State of the Cloud</a>.</p><h4>NRR vs GRR</h4><p><a href="/grr">Gross Revenue Retention</a> — то же без апселов, чистое удержание. Если GRR = 95% и NRR = 125%, значит апселы добавляют 30%. Сильный сигнал product-market fit.</p>`,
            en: `<h4>What NRR shows</h4><p>Net Revenue Retention = <b>how much revenue is left from existing customers after a period</b>, including upsells, downgrades, and churn. NRR &gt; 100% means the old cohort grows in revenue without any new customers — "negative churn" magic.</p><h4>Formula</h4><p>NRR = (Starting MRR + Expansion − Downgrade − Churn) / Starting MRR × 100%. Cohort-based — usually a 12-month-old cohort.</p><h4>Benchmarks</h4><ul><li>&lt; 100% — revenue declining, retention work needed urgently</li><li>100–110% — stable, typical for SMB SaaS</li><li>110–130% — healthy growth, target for most SaaS</li><li>&gt; 130% — excellent, top decile (Snowflake — 158%, Twilio — 134% at peak)</li></ul><p>Source: <a href="https://openviewpartners.com/2024-saas-benchmarks-report/" target="_blank" rel="noopener">OpenView 2024</a>, <a href="https://www.bvp.com/atlas/state-of-the-cloud-2024" target="_blank" rel="noopener">Bessemer State of the Cloud</a>.</p><h4>NRR vs GRR</h4><p><a href="/en/grr">Gross Revenue Retention</a> = same without upsells. GRR = 95%, NRR = 125% means upsells add 30%. Strong PMF signal.</p>`,
            uz: `<h4>NRR nima</h4><p>Net Revenue Retention — mavjud mijozlardan davr o'tgach qancha tushum qolganligi. NRR &gt; 100% — eski kogorta yangi mijozlarsiz o'sadi.</p>`
        },
        churn: {
            ru: `<h4>Customer Churn vs Revenue Churn</h4><p>Это <b>две разные метрики</b>. Customer Churn = доля клиентов, ушедших за период. Revenue Churn = доля выручки, потерянной за период. Логика-loop: enterprise-клиент с большим ACV весит больше — поэтому Revenue Churn обычно ниже Customer Churn.</p><h4>Norm-таблица по отраслям</h4><ul><li><b>SaaS B2B (annual contracts):</b> &lt;1%/мес отлично, &lt;2% норма, &gt;5% катастрофа</li><li><b>SaaS B2C (monthly):</b> &lt;5%/мес норма, &lt;10% приемлемо</li><li><b>Mobile apps (freemium):</b> 5–15%/мес норма, выше — баг в onboarding</li><li><b>E-commerce subscription:</b> 3–8%/мес</li></ul><h4>Срок жизни ≈ 1 / Churn</h4><p>Если churn = 5%/мес, средний life ≈ 1/0.05 = 20 месяцев. Подставляется в формулу <a href="/ltv">LTV = ARPU × Life</a>. При churn = 2%/мес жизнь ≈ 50 месяцев — то есть SaaS с такой retention имеет LTV в 25× больше, чем с 5% churn. Вот почему churn — №1 метрика SaaS-руководителя.</p><h4>Что съедает churn</h4><p>Топ-3 драйвера: (1) низкая <a href="/timeToValue">Time to Value</a> — пользователь не понял продукт за первую неделю, (2) слабая <a href="/activation">Activation</a> — не дошёл до Aha-моменту, (3) плохой product-market fit. <a href="/nps">NPS &lt; 0</a> предсказывает churn за 1–3 месяца.</p>`,
            en: `<h4>Customer Churn vs Revenue Churn</h4><p><b>Two different metrics.</b> Customer Churn = % of customers who left. Revenue Churn = % of revenue lost. Enterprise customer with high ACV weighs more — Revenue Churn is usually lower.</p><h4>Norms by vertical</h4><ul><li><b>SaaS B2B (annual):</b> &lt;1%/mo excellent, &lt;2% norm, &gt;5% catastrophe</li><li><b>SaaS B2C (monthly):</b> &lt;5%/mo norm</li><li><b>Mobile freemium:</b> 5–15%/mo norm</li><li><b>E-com subscription:</b> 3–8%/mo</li></ul><h4>Life ≈ 1 / Churn</h4><p>Churn = 5%/mo → life ≈ 1/0.05 = 20 months. Feeds <a href="/en/ltv">LTV = ARPU × Life</a>. At 2%/mo, life ≈ 50 months — LTV is 2.5× higher than at 5% churn. That's why churn is the #1 metric for SaaS leaders.</p><h4>What drives churn</h4><p>Top 3: (1) high <a href="/en/timeToValue">Time to Value</a>, (2) weak <a href="/en/activation">Activation</a>, (3) poor PMF. <a href="/en/nps">NPS &lt; 0</a> predicts churn 1–3 months out.</p>`,
            uz: `<h4>Customer Churn vs Revenue Churn</h4><p>Ikkita boshqa metrika. Customer Churn = ketgan mijozlar foizi. Revenue Churn = yo'qotilgan tushum foizi.</p>`
        },
        burnMultiple: {
            ru: `<h4>Что такое Burn Multiple</h4><p>Burn Multiple = <b>Net Burn / Net New ARR</b>. Метрика капитальной эффективности SaaS, предложена David Sacks в 2020 году (<a href="https://sacks.substack.com/p/the-burn-multiple" target="_blank" rel="noopener">оригинальный пост</a>). Отвечает на вопрос: «Сколько $ мы сжигаем, чтобы создать $1 нового годового дохода?»</p><h4>Шкала Sacks</h4><ul><li><b>&lt; 1× — отлично.</b> Top-decile SaaS. Каждый $1 burn создаёт &gt;$1 новой выручки.</li><li><b>1× — 1.5× — хорошо.</b> Норма для растущих публичных SaaS.</li><li><b>1.5× — 2× — приемлемо.</b> Но нужно следить за траекторией.</li><li><b>2× — 3× — высоко.</b> Сжигаете $2–3, чтобы получить $1 нового ARR. Пересмотрите S&amp;M-расходы.</li><li><b>&gt; 3× — критично.</b> Cash-несостоятельная модель.</li></ul><h4>Когда Burn Multiple вводит в заблуждение</h4><p>На ранней стадии (pre-seed, seed) Burn Multiple часто высок из-за маленького ARR-знаменателя. Не используйте до Series A. Также не релевантен для bootstrapped — у них burn ≤ 0, и метрика теряет смысл (cash-positive = негативный или нулевой burn).</p><h4>Связь с Rule of 40</h4><p>Низкий Burn Multiple обычно коррелирует с высоким <a href="/ruleOf40">Rule of 40</a>. Обе метрики говорят об одном: насколько эффективно ваш капитал превращается в рост.</p>`,
            en: `<h4>What Burn Multiple is</h4><p>Burn Multiple = <b>Net Burn / Net New ARR</b>. A SaaS capital-efficiency metric coined by David Sacks in 2020 (<a href="https://sacks.substack.com/p/the-burn-multiple" target="_blank" rel="noopener">original post</a>). Answers: "How many $ do we burn to generate $1 of new annual revenue?"</p><h4>The Sacks scale</h4><ul><li><b>&lt; 1× — excellent.</b> Top-decile SaaS.</li><li><b>1× – 1.5× — good.</b> Norm for growing public SaaS.</li><li><b>1.5× – 2× — acceptable.</b> Watch the trajectory.</li><li><b>2× – 3× — high.</b> Revisit S&amp;M.</li><li><b>&gt; 3× — critical.</b> Cash-unsustainable model.</li></ul><h4>When Burn Multiple misleads</h4><p>At early stage (pre-seed, seed) it's inflated by a tiny ARR denominator. Don't use before Series A. Also not relevant for bootstrapped — burn ≤ 0 breaks the formula.</p><h4>Relationship with Rule of 40</h4><p>Low Burn Multiple correlates with high <a href="/en/ruleOf40">Rule of 40</a>.</p>`,
            uz: `<h4>Burn Multiple nima</h4><p>Burn Multiple = Net Burn / Net New ARR. David Sacks (2020) tomonidan kiritilgan SaaS kapital samaradorlik metrikasi. &lt;1 a'lo, 1–1.5 yaxshi.</p>`
        },
        ruleOf40: {
            ru: `<h4>Что такое Rule of 40</h4><p>Rule of 40 = <b>Темп роста выручки (YoY %) + Маржа EBITDA (%) ≥ 40%</b>. Health-метрика SaaS, популяризированная <a href="https://feld.com/archives/2015/02/rule-40-healthy-saas-company/" target="_blank" rel="noopener">Brad Feld в 2015</a>. Идея: вы можете расти медленнее, если прибыльны — или быть убыточным, если растёте быстро.</p><h4>Откуда «40»</h4><p>Bessemer проанализировали 100+ публичных SaaS-компаний и обнаружили: те, что устойчиво держат сумму &gt;= 40%, торгуются с премиум-мультипликатором. Это <b>не магическая константа</b>, а эмпирическая граница «инвесторской привлекательности».</p><h4>Какую маржу брать</h4><p>Обычно <b>EBITDA Margin</b>. Альтернативы: <b>FCF Margin</b> (более жёсткое требование — учитывает CapEx), <b>Operating Margin</b> (мягче — без D&amp;A). Главное — заявить какую и держать одну версию для всех периодов.</p><h4>Бенчмарки по уровню</h4><ul><li>&lt; 20%: критическое состояние</li><li>20–40%: не дотягивает, нужно балансировать</li><li>40–60%: здоровый SaaS</li><li>&gt; 60%: top-decile (Veeva, Atlassian, Datadog в разные годы)</li></ul><p>Источник: <a href="https://www.bvp.com/atlas/the-rule-of-40" target="_blank" rel="noopener">Bessemer Atlas</a>.</p>`,
            en: `<h4>What Rule of 40 is</h4><p>Rule of 40 = <b>Revenue growth YoY (%) + EBITDA margin (%) ≥ 40%</b>. SaaS health metric popularized by <a href="https://feld.com/archives/2015/02/rule-40-healthy-saas-company/" target="_blank" rel="noopener">Brad Feld in 2015</a>. You can grow slower if profitable — or burn cash if growing fast.</p><h4>Why "40"</h4><p>Bessemer analyzed 100+ public SaaS and found those sustaining the sum at ≥40% trade at premium multiples. Not magic, just empirical "investor attractiveness".</p><h4>Which margin to use</h4><p>Usually <b>EBITDA Margin</b>. Alternatives: <b>FCF Margin</b> (stricter) or <b>Operating Margin</b> (softer). Pick one and stay consistent.</p><h4>Benchmarks</h4><ul><li>&lt; 20%: critical</li><li>20–40%: below</li><li>40–60%: healthy</li><li>&gt; 60%: top-decile (Veeva, Atlassian, Datadog)</li></ul><p>Source: <a href="https://www.bvp.com/atlas/the-rule-of-40" target="_blank" rel="noopener">Bessemer Atlas</a>.</p>`,
            uz: `<h4>Rule of 40 nima</h4><p>Rule of 40 = O'sish YoY (%) + EBITDA marja (%) ≥ 40%. Brad Feld (2015) tomonidan ommalashtirilgan SaaS salomatlik metrikasi.</p>`
        },
        runway: {
            ru: `<h4>Что такое Runway</h4><p>Runway = <b>Кэш / Среднемесячное сжигание</b>. Количество месяцев, которое компания может работать на текущем уровне расходов без дополнительного финансирования. Главная финансовая метрика стартапа — когда фандрейзить.</p><h4>Правило «18 месяцев»</h4><p>YC и большинство VC рекомендуют поддерживать Runway &gt; 18 месяцев. Логика: фандрейзинг занимает 3–6 месяцев, плюс нужен буфер на случай неудачного раунда. Раунды поднимают на следующие 18–24 месяца — этот цикл повторяется до прибыльности.</p><h4>Net Burn vs Gross Burn</h4><p><b>Gross Burn</b> = все расходы за месяц. <b>Net Burn</b> = расходы − выручка. Используйте Net Burn в формуле Runway — это реальный темп исчерпания кэша. На ранней стадии без выручки они равны.</p><h4>Зона риска</h4><ul><li><b>&lt; 6 мес — критично.</b> Срочно фандрейзить или резать burn. Bridge round, layoffs, переход на cash-flow positive.</li><li><b>6–12 мес — рискованно.</b> Уже начинайте процесс фандрейзинга.</li><li><b>12–18 мес — норма.</b> Особенно для пре-сид/сид.</li><li><b>&gt; 18 мес — здоровый запас.</b></li></ul><h4>Как удлинить Runway без раунда</h4><p>3 рычага: (1) увеличить выручку (sales pipeline, апселы), (2) сократить расходы (S&amp;M cut, headcount freeze), (3) bridge financing. Лучшая комбинация зависит от стадии: pre-revenue — режьте расходы; product-market fit — растите выручку.</p>`,
            en: `<h4>What Runway is</h4><p>Runway = <b>Cash / Average monthly Net Burn</b>. Months a company can operate at current expense level without new funding. The startup's #1 finance metric — "when to fundraise".</p><h4>The "18 months" rule</h4><p>YC and most VCs recommend maintaining Runway &gt; 18 months. Fundraising takes 3–6 months plus buffer for a failed round. Rounds typically extend runway 18–24 months — repeat until profitability.</p><h4>Net Burn vs Gross Burn</h4><p><b>Gross Burn</b> = monthly expenses. <b>Net Burn</b> = expenses − revenue. Use Net Burn in Runway formula. Pre-revenue they're equal.</p><h4>Risk zones</h4><ul><li><b>&lt; 6 mo — critical.</b> Fundraise NOW or cut burn. Bridge round, layoffs.</li><li><b>6–12 mo — risky.</b> Start the fundraise process.</li><li><b>12–18 mo — norm.</b> Pre-seed/seed standard.</li><li><b>&gt; 18 mo — healthy buffer.</b></li></ul><h4>Extending without a round</h4><p>3 levers: (1) grow revenue, (2) cut costs, (3) bridge financing. Pre-revenue → cut costs; PMF achieved → grow revenue.</p>`,
            uz: `<h4>Runway nima</h4><p>Runway = Pul / O'rtacha oylik Net Burn. Kompaniya joriy xarajat darajasida qancha oy ishlay olishi. Startaplar uchun asosiy moliyaviy metrika.</p>`
        },
        nps: {
            ru: `<h4>Что такое NPS</h4><p>Net Promoter Score = <b>% Промоутеров (оценки 9–10) − % Детракторов (оценки 0–6)</b>. Диапазон от −100 до +100. Создан <a href="https://www.netpromoter.com/" target="_blank" rel="noopener">Bain &amp; Company в 2003 году</a>. Один из главных long-term-индикаторов retention и word-of-mouth роста.</p><h4>Главное правило: «8 — это пассив»</h4><p>Распространённая ошибка — считать «8 из 10» хорошей оценкой. Для NPS 8 = пассив, НЕ промоутер. Только 9 и 10. Это сделано намеренно, чтобы повысить bar.</p><h4>Бенчмарки по отраслям</h4><ul><li><b>SaaS B2B:</b> 20–40 — норма, &gt;60 — top tier (Slack ~70, Notion ~60)</li><li><b>E-commerce:</b> 30–50 — норма, &gt;60 — отлично (Amazon ~60)</li><li><b>Mobile apps:</b> 10–30 — норма, &gt;50 — хорошо</li><li><b>Telco / банки:</b> часто отрицательный, 0–20 — хорошо</li></ul><p>Источник: <a href="https://www.retently.com/blog/good-net-promoter-score/" target="_blank" rel="noopener">Retently NPS Benchmarks 2024</a>.</p><h4>NPS предсказывает Churn</h4><p>Детрактор (0–6) с вероятностью 50%+ уйдёт в следующие 3–6 месяцев. Промоутер (9–10) — реферит 1–3 новых клиентов. Используйте NPS как early-warning system для retention.</p>`,
            en: `<h4>What NPS is</h4><p>Net Promoter Score = <b>% Promoters (9–10) − % Detractors (0–6)</b>. Range −100 to +100. Created by <a href="https://www.netpromoter.com/" target="_blank" rel="noopener">Bain &amp; Company in 2003</a>. Long-term indicator of retention and word-of-mouth growth.</p><h4>Main rule: "8 is a passive"</h4><p>Common mistake — counting "8 out of 10" as good. For NPS, 8 = passive, NOT promoter. Only 9 and 10. Deliberately raises the bar.</p><h4>Benchmarks by vertical</h4><ul><li><b>SaaS B2B:</b> 20–40 norm, &gt;60 top tier (Slack ~70, Notion ~60)</li><li><b>E-com:</b> 30–50 norm, &gt;60 excellent (Amazon ~60)</li><li><b>Mobile apps:</b> 10–30 norm</li><li><b>Telco / banks:</b> often negative</li></ul><p>Source: <a href="https://www.retently.com/blog/good-net-promoter-score/" target="_blank" rel="noopener">Retently 2024</a>.</p><h4>NPS predicts churn</h4><p>Detractor (0–6) churns within 3–6 months with 50%+ probability. Promoter (9–10) refers 1–3 new customers. NPS = early-warning for retention.</p>`,
            uz: `<h4>NPS nima</h4><p>Net Promoter Score = % Promouterlar (9–10) − % Detraktorlar (0–6). 2003-yilda Bain &amp; Company tomonidan yaratilgan.</p>`
        },
        roas: {
            ru: `<h4>Что такое ROAS</h4><p>Return on Ad Spend = <b>Выручка от рекламы / Затраты на рекламу</b>. Базовая метрика digital-маркетинга. ROAS = 4× означает, что каждый $1 рекламы даёт $4 выручки.</p><h4>ROAS ≠ ROI</h4><p>ROAS — gross revenue. <b>ROI</b> — profit (revenue − costs). ROAS = 4× может быть убыточным, если COGS = 80% (тогда profit margin × 20% × 4 = 0.8 — каждый $1 ad spend даёт $0.80 прибыли, минус). Всегда проверяйте через <a href="/grossMargin">Gross Margin</a>.</p><h4>Бенчмарки по отраслям</h4><ul><li><b>E-commerce:</b> &gt;4× норма, target 5–8× для устойчивого роста</li><li><b>SaaS:</b> &gt;3× норма для коротких циклов (PLG); long-cycle B2B — измеряется через CAC Payback вместо ROAS</li><li><b>Mobile games (F2P):</b> 1.5–3× для UA-кампаний, окупается через D90 LTV</li><li><b>Подписочные сервисы:</b> 0.5–1.5× на 1-й месяц; LTV окупает на горизонте 6–12 мес</li></ul><h4>Связь с CAC</h4><p>ROAS = AOV / CAC (если каждый клиент — 1 покупка). Низкий ROAS = высокий CAC. Лечение: (1) оптимизация креативов, (2) сегментация по audience, (3) переключение на retention-кампании (cheaper).</p>`,
            en: `<h4>What ROAS is</h4><p>Return on Ad Spend = <b>Revenue from ads / Ad spend</b>. Basic digital-marketing metric. ROAS = 4× means each $1 spent returns $4 in revenue.</p><h4>ROAS ≠ ROI</h4><p>ROAS = gross revenue. <b>ROI</b> = profit. ROAS 4× can be unprofitable if COGS = 80% (profit margin × 20% × 4 = 0.8 — every $1 ad spend gives $0.80 profit, after media spend that's −$0.20). Always check via <a href="/en/grossMargin">Gross Margin</a>.</p><h4>Benchmarks</h4><ul><li><b>E-commerce:</b> &gt;4× norm, target 5–8×</li><li><b>SaaS:</b> &gt;3× for short cycles (PLG); long-cycle B2B uses CAC Payback instead</li><li><b>Mobile F2P:</b> 1.5–3× for UA, pays back via D90 LTV</li></ul><h4>Relation to CAC</h4><p>ROAS = AOV / CAC (if each customer = 1 purchase). Low ROAS = high CAC. Fix: (1) creative optimization, (2) audience segmentation, (3) shift to retention (cheaper).</p>`,
            uz: `<h4>ROAS nima</h4><p>Return on Ad Spend = Reklamadan tushum / Reklama xarajati. ROAS = 4× har bir $1 reklama $4 tushum keltirishini anglatadi.</p>`
        },
        wau: {
            ru: `<h4>Что такое WAU</h4><p>Weekly Active Users — <b>число уникальных пользователей, совершивших целевое действие за 7 дней</b>. Промежуточная метрика между <a href="/dau">DAU</a> и <a href="/mau">MAU</a>: точнее ловит вовлечённость для продуктов с недельным циклом использования (B2B-инструменты, обучение, фитнес), где daily-замер слишком шумный, а monthly — слишком грубый.</p><h4>Что считать «активностью»</h4><p>Ключ — определение active event. Логин ≠ активность. Берите действие, которое отражает ценность: отправленное сообщение, созданный документ, завершённая тренировка. Слабое определение завышает WAU и маскирует отток.</p><h4>WAU/MAU stickiness</h4><p>Соотношение <b>WAU / MAU</b> показывает, как часто месячная аудитория возвращается в течение недели. Для большинства SaaS здоровый коридор — 40–60%. Это менее жёсткий тест, чем <a href="/stickiness">DAU/MAU stickiness</a> (норма ~20%), и лучше подходит для продуктов, которыми пользуются не каждый день.</p><h4>Типичные ошибки</h4><ul><li>Сравнивать WAU разных недель без учёта сезонности и праздников.</li><li>Считать по логинам, а не по value-событиям.</li><li>Игнорировать новые vs returning — рост WAU за счёт платного трафика без удержания иллюзорен.</li></ul>`,
            en: `<h4>What WAU is</h4><p>Weekly Active Users — <b>unique users who performed a target action within 7 days</b>. A middle ground between <a href="/en/dau">DAU</a> and <a href="/en/mau">MAU</a>: best for products with a weekly usage cadence (B2B tools, learning, fitness).</p><h4>WAU/MAU stickiness</h4><p>WAU / MAU shows how often the monthly base returns weekly. Healthy SaaS band: 40–60%. Softer test than <a href="/en/stickiness">DAU/MAU</a>.</p><h4>Common mistakes</h4><ul><li>Counting logins instead of value events.</li><li>Ignoring seasonality week-over-week.</li><li>Growing WAU via paid traffic with no retention.</li></ul>`,
            uz: `<h4>WAU nima</h4><p>Weekly Active Users — 7 kun ichida maqsadli amal bajargan noyob foydalanuvchilar soni. <a href="/uz/dau">DAU</a> va <a href="/uz/mau">MAU</a> orasidagi metrika. WAU/MAU stickiness sog'lom koridor: 40–60%.</p>`
        },
        netNewMrr: {
            ru: `<h4>Что такое Net New MRR</h4><p>Net New MRR = <b>New MRR + Expansion MRR − Churned MRR − Contraction MRR</b>. Показывает чистый прирост повторяющейся выручки за месяц с учётом всех движений. Это главный «пульс» роста SaaS — именно его кладут в знаменатель <a href="/burnMultiple">Burn Multiple</a> (как Net New ARR = Net New MRR × 12).</p><h4>Декомпозиция важнее суммы</h4><p>Net New MRR = +$50k звучит одинаково и когда это $50k новых клиентов при нулевом оттоке, и когда это $150k новых минус $100k churn. Второй случай — дырявое ведро: вы покупаете рост, но теряете базу. Всегда смотрите 4 компонента раздельно.</p><h4>Связь с Quick Ratio</h4><p>Отношение (New + Expansion) / (Churned + Contraction) — это <a href="/quickRatio">SaaS Quick Ratio</a> Mamoon Hamid. &gt; 4 — здоровый рост, &lt; 1 — выручка сокращается несмотря на новые продажи.</p><h4>Ошибки</h4><ul><li>Включать one-time fees и услуги — это не recurring.</li><li>Забывать contraction (даунгрейды) — он маскируется в «expansion net».</li><li>Сравнивать абсолют без учёта базы: +$50k на $5M MRR — это 1%, а не рост.</li></ul>`,
            en: `<h4>What Net New MRR is</h4><p>Net New MRR = <b>New + Expansion − Churned − Contraction</b>. Net monthly change in recurring revenue. Feeds <a href="/en/burnMultiple">Burn Multiple</a> as Net New ARR (× 12).</p><h4>Decomposition matters</h4><p>+$50k from new customers ≠ $150k new minus $100k churn — the latter is a leaky bucket. Always view all 4 components.</p><h4>Quick Ratio</h4><p>(New + Expansion) / (Churned + Contraction) = <a href="/en/quickRatio">SaaS Quick Ratio</a>. &gt; 4 = healthy.</p>`,
            uz: `<h4>Net New MRR nima</h4><p>Net New MRR = New + Expansion − Churned − Contraction. Oylik takrorlanuvchi tushumning sof o'zgarishi. 4 komponentni alohida ko'ring.</p>`
        },
        contributionMargin: {
            ru: `<h4>Что такое Contribution Margin</h4><p>Contribution Margin = <b>(Выручка − Переменные затраты) / Выручка × 100%</b>. Показывает, какая доля выручки остаётся после переменных издержек (COGS, платёжные комиссии, доставка, переменная поддержка) на покрытие постоянных расходов и прибыль. В unit-экономике — это «топливо», из которого окупается <a href="/cac">CAC</a>.</p><h4>Чем отличается от Gross Margin</h4><p><a href="/grossMargin">Gross Margin</a> вычитает только себестоимость продукта. Contribution Margin вычитает <i>все</i> переменные затраты, привязанные к единице (включая переменный маркетинг и логистику). Поэтому CM ≤ Gross Margin почти всегда.</p><h4>Бенчмарки</h4><ul><li><b>SaaS:</b> 70–85% — норма (низкие переменные затраты).</li><li><b>Marketplace:</b> 50–70% после выплат продавцам.</li><li><b>E-commerce физтовары:</b> 25–45% после COGS + доставки + эквайринга.</li><li><b>D2C-подписки:</b> 40–60%.</li></ul><h4>Почему важно</h4><p>Корректный <a href="/ltv">LTV</a> считается на contribution margin, а не на выручке: LTV(net) = ARPU × Life × CM%. Игнорирование переменных затрат — частая причина того, почему «прибыльная на бумаге» юнит-экономика реально убыточна.</p>`,
            en: `<h4>What Contribution Margin is</h4><p>Contribution Margin = <b>(Revenue − Variable costs) / Revenue × 100%</b>. Share of revenue left after variable costs to cover fixed costs and profit. The fuel that pays back <a href="/en/cac">CAC</a>.</p><h4>vs Gross Margin</h4><p><a href="/en/grossMargin">Gross Margin</a> subtracts only COGS; CM subtracts <i>all</i> per-unit variable costs. So CM ≤ Gross Margin.</p><h4>Benchmarks</h4><ul><li><b>SaaS:</b> 70–85%.</li><li><b>Marketplace:</b> 50–70%.</li><li><b>E-com goods:</b> 25–45%.</li></ul><p>Correct <a href="/en/ltv">LTV</a> uses CM, not revenue.</p>`,
            uz: `<h4>Contribution Margin nima</h4><p>Contribution Margin = (Tushum − O'zgaruvchan xarajatlar) / Tushum × 100%. SaaS: 70–85%, E-com: 25–45%. To'g'ri <a href="/uz/ltv">LTV</a> CM asosida hisoblanadi.</p>`
        },
        gmv: {
            ru: `<h4>Что такое GMV</h4><p>Gross Merchandise Value = <b>Число заказов × Средний чек (AOV)</b> — суммарная стоимость всех товаров/услуг, проданных через платформу за период, до вычета комиссий, возвратов и скидок. Главная top-line метрика маркетплейсов и e-commerce.</p><h4>GMV ≠ Выручка</h4><p>Это <b>оборот платформы, а не её доход</b>. Реальная выручка маркетплейса = GMV × <a href="/takeRate">Take Rate</a>. Uber, Airbnb, Wildberries показывают GMV в десятки раз больше своей выручки. Путать их — классическая ошибка, которой грешат пресс-релизы.</p><h4>Net GMV vs Gross GMV</h4><p>Gross GMV включает отменённые и возвращённые заказы. Net GMV вычитает их. Для e-commerce с высоким return rate (одежда — до 30–40%) разница критична. Всегда уточняйте, какой GMV заявлен.</p><h4>Как растить GMV</h4><p>Три рычага: (1) больше заказов — привлечение + <a href="/repeatPurchaseRate">repeat purchase</a>, (2) выше <a href="/aov">AOV</a> — апсел, бандлы, бесплатная доставка от суммы, (3) меньше отмен. GMV без роста <a href="/takeRate">take rate</a> и <a href="/contributionMargin">contribution margin</a> — рост ради роста.</p>`,
            en: `<h4>What GMV is</h4><p>Gross Merchandise Value = <b>Orders × AOV</b> — total value of goods sold through a platform before fees, refunds, discounts. The top-line metric for marketplaces and e-commerce.</p><h4>GMV ≠ Revenue</h4><p>It is platform <b>turnover, not income</b>. Marketplace revenue = GMV × <a href="/en/takeRate">Take Rate</a>. Confusing them is a classic press-release error.</p><h4>Net vs Gross GMV</h4><p>Net GMV subtracts cancellations/returns. With 30–40% apparel return rates the gap is critical.</p><p>Levers: more orders, higher <a href="/en/aov">AOV</a>, fewer cancellations.</p>`,
            uz: `<h4>GMV nima</h4><p>Gross Merchandise Value = Buyurtmalar × O'rtacha chek (AOV). Platforma aylanmasi, daromad emas. Marketpleys daromadi = GMV × <a href="/uz/takeRate">Take Rate</a>.</p>`
        },
        takeRate: {
            ru: `<h4>Что такое Take Rate</h4><p>Take Rate = <b>Выручка платформы / GMV × 100%</b> — доля оборота, которую маркетплейс оставляет себе через комиссии, рекламу, платные подписки и логистические сборы. Это монетизационный «кран» поверх <a href="/gmv">GMV</a>.</p><h4>Бенчмарки по типам платформ</h4><ul><li><b>Маркетплейсы товаров (Amazon, Wildberries):</b> 10–20%.</li><li><b>Сервисы on-demand (Uber, Doordash):</b> 20–30%.</li><li><b>Аренда жилья (Airbnb):</b> ~13–15%.</li><li><b>App stores (Apple/Google):</b> 15–30%.</li><li><b>Фриланс-платформы (Fiverr, Upwork):</b> 20–30%.</li></ul><h4>Баланс take rate</h4><p>Слишком высокий take rate отпугивает продавцов и провоцирует disintermediation (сделки в обход платформы). Слишком низкий — не покрывает операционку. Зрелые платформы повышают take rate постепенно, добавляя value-added услуги (реклама, логистика, аналитика), а не «в лоб» повышая базовую комиссию.</p><h4>Take rate × GMV = реальная выручка</h4><p>Рост GMV при падающем take rate может означать стагнацию выручки. Всегда смотрите обе метрики вместе и сравнивайте с <a href="/contributionMargin">contribution margin</a> — высокий take rate с убыточной логистикой не создаёт ценности.</p>`,
            en: `<h4>What Take Rate is</h4><p>Take Rate = <b>Platform revenue / GMV × 100%</b> — the share of turnover a marketplace keeps via commissions, ads, subscriptions, fees. The monetization tap on top of <a href="/en/gmv">GMV</a>.</p><h4>Benchmarks</h4><ul><li><b>Goods marketplaces:</b> 10–20%.</li><li><b>On-demand (Uber):</b> 20–30%.</li><li><b>Airbnb:</b> ~13–15%.</li><li><b>App stores:</b> 15–30%.</li></ul><p>Too high → disintermediation; too low → doesn't cover ops. Always pair with GMV and <a href="/en/contributionMargin">contribution margin</a>.</p>`,
            uz: `<h4>Take Rate nima</h4><p>Take Rate = Platforma daromadi / GMV × 100%. Tovar marketpleyslari: 10–20%, on-demand: 20–30%. GMV bilan birga ko'ring.</p>`
        },
        quotaAttainment: {
            ru: `<h4>Что такое Quota Attainment</h4><p>Quota Attainment = <b>Факт продаж / План (квота) × 100%</b> — насколько менеджер или команда выполнили план продаж за период. Базовая метрика управления sales-командой и индикатор реалистичности квот.</p><h4>Главный сигнал — медиана по команде</h4><p>Здоровый бенчмарк: <b>60–70% репов закрывают ≥ 100% квоты</b> (источник: исследования RepVue, Xactly). Если квоту выполняют &lt; 40% — квоты завышены или ломается процесс (плохой <a href="/pipelineCoverage">pipeline coverage</a>, длинный <a href="/salesCycleLength">цикл сделки</a>). Если &gt; 90% — квоты занижены, теряете маржу роста.</p><h4>Средняя attainment vs распределение</h4><p>Среднее 100% может скрывать, что 2 топ-репа делают 250%, а остальные 8 — по 50%. Смотрите распределение: устойчивая команда — та, где медиана близка к плану, а не вытягивается звёздами.</p><h4>Связь с pipeline</h4><p>Attainment — следствие. Чтобы его прогнозировать, нужен <a href="/pipelineCoverage">Pipeline Coverage</a> 3–4× и здоровый <a href="/winRate">Win Rate</a>. Низкая attainment при достаточном pipeline = проблема конверсии, а не объёма лидов.</p>`,
            en: `<h4>What Quota Attainment is</h4><p>Quota Attainment = <b>Actual sales / Quota × 100%</b> — how much a rep or team hit their target. Core sales-management metric.</p><h4>Key signal — team median</h4><p>Healthy: <b>60–70% of reps hit ≥ 100%</b> (RepVue, Xactly). &lt; 40% → quotas too high or broken process; &gt; 90% → quotas too low.</p><h4>Distribution over average</h4><p>A 100% average can hide 2 stars at 250% and 8 reps at 50%. Watch the distribution.</p><p>Predict via <a href="/en/pipelineCoverage">Pipeline Coverage</a> 3–4× and <a href="/en/winRate">Win Rate</a>.</p>`,
            uz: `<h4>Quota Attainment nima</h4><p>Quota Attainment = Haqiqiy sotuv / Reja × 100%. Sog'lom: replarning 60–70% ≥ 100% bajaradi. <a href="/uz/pipelineCoverage">Pipeline Coverage</a> 3–4× kerak.</p>`
        },
        cpm: {
            ru: `<h4>Что такое CPM</h4><p>Cost Per Mille = <b>Затраты / Показы × 1000</b> — стоимость тысячи показов рекламы. Базовая валюта медийной и охватной рекламы (brand awareness), где цель — не клик, а контакт с аудиторией.</p><h4>Бенчмарки по каналам (2024)</h4><ul><li><b>Facebook/Instagram:</b> $5–12 CPM.</li><li><b>Google Display:</b> $2–5 CPM.</li><li><b>YouTube:</b> $4–10 CPM.</li><li><b>TikTok:</b> $6–10 CPM.</li><li><b>LinkedIn (B2B):</b> $30–60 CPM — самый дорогой охват.</li><li><b>Programmatic display:</b> $1–3 CPM.</li></ul><p>Источник: WordStream / Gupta Media CPM benchmarks.</p><h4>CPM — вход в воронку</h4><p>CPM сам по себе ничего не говорит о результате. Цепочка: CPM → <a href="/ctr">CTR</a> → <a href="/cpc">CPC</a> → <a href="/cr">CR</a> → <a href="/cpa">CPA</a>. Дешёвый CPM при нулевом CTR хуже дорогого CPM с высоким engagement. Оценивайте CPM только вместе с downstream-метриками.</p><h4>Что двигает CPM</h4><p>Аукционная цена зависит от: качества аудитории (узкие B2B-сегменты дороже), сезона (Q4/Black Friday — пик), формата (видео дороже баннера), Relevance/Quality Score креатива. Улучшение креатива часто снижает эффективный CPM сильнее, чем смена канала.</p>`,
            en: `<h4>What CPM is</h4><p>Cost Per Mille = <b>Spend / Impressions × 1000</b> — cost per thousand ad impressions. The currency of awareness advertising.</p><h4>Benchmarks (2024)</h4><ul><li><b>Facebook/Instagram:</b> $5–12.</li><li><b>Google Display:</b> $2–5.</li><li><b>TikTok:</b> $6–10.</li><li><b>LinkedIn (B2B):</b> $30–60.</li></ul><h4>Entry to the funnel</h4><p>CPM → <a href="/en/ctr">CTR</a> → <a href="/en/cpc">CPC</a> → <a href="/en/cpa">CPA</a>. A cheap CPM with zero CTR beats nothing. Judge CPM with downstream metrics.</p>`,
            uz: `<h4>CPM nima</h4><p>Cost Per Mille = Xarajat / Ko'rsatishlar × 1000. Facebook: $5–12, LinkedIn B2B: $30–60. CPM ni <a href="/uz/ctr">CTR</a> va <a href="/uz/cpa">CPA</a> bilan baholang.</p>`
        },
        cartAbandonment: {
            ru: `<h4>Что такое Cart Abandonment Rate</h4><p>Cart Abandonment Rate = <b>(1 − Покупки / Добавления в корзину) × 100%</b> — доля корзин, которые так и не превратились в заказ. Прямой индикатор трения в checkout-воронке e-commerce.</p><h4>Бенчмарк: ~70%</h4><p>Среднемировой показатель — <b>~70%</b> (агрегированные данные <a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener">Baymard Institute</a>, 49 исследований). Это не «провал» — большая часть пользователей добавляет в корзину для сравнения и сохранения. Но снижение даже на 5–10 п.п. даёт ощутимый рост выручки.</p><h4>Топ-причины брошенных корзин (Baymard)</h4><ul><li>Неожиданные доп. расходы (доставка, налоги) — №1, ~48%.</li><li>Принудительная регистрация перед покупкой — ~24%.</li><li>Слишком длинный/сложный checkout — ~22%.</li><li>Нет видимого total заранее, мало способов оплаты, сомнения в безопасности.</li></ul><h4>Как снижать</h4><p>Гостевой checkout, прозрачная стоимость доставки на раннем шаге, прогресс-бар, кошельки (Apple Pay), и <b>письма о брошенной корзине</b> — они возвращают 10–15% корзин (см. <a href="/openRate">Open Rate</a> таких писем обычно выше среднего). Связана с общей <a href="/cr">Conversion Rate</a>.</p>`,
            en: `<h4>What Cart Abandonment Rate is</h4><p>Cart Abandonment = <b>(1 − Purchases / Carts) × 100%</b> — share of carts that never convert. A direct checkout-friction indicator.</p><h4>Benchmark: ~70%</h4><p>Global average ~70% (<a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener">Baymard Institute</a>, 49 studies). Not all failure — many users save carts to compare.</p><h4>Top causes (Baymard)</h4><ul><li>Surprise extra costs (~48%).</li><li>Forced account creation (~24%).</li><li>Long/complex checkout (~22%).</li></ul><p>Fix with guest checkout, transparent shipping, abandoned-cart emails (recover 10–15%).</p>`,
            uz: `<h4>Cart Abandonment nima</h4><p>Cart Abandonment = (1 − Xaridlar / Savatlar) × 100%. O'rtacha ~70% (<a href="https://baymard.com/lists/cart-abandonment-rate" target="_blank" rel="noopener">Baymard</a>). Asosiy sabab — kutilmagan qo'shimcha xarajatlar.</p>`
        },
        mer: {
            ru: `<h4>Что такое MER</h4><p>Marketing Efficiency Ratio = <b>Общая выручка / Общие маркетинговые расходы</b>. «Blended ROAS» на уровне всего бизнеса: сколько рублей выручки приносит каждый рубль на маркетинг, по всем каналам сразу. Стал популярен в эпоху iOS 14 / потери attribution, когда per-channel <a href="/roas">ROAS</a> перестал быть надёжным.</p><h4>MER vs ROAS</h4><p><a href="/roas">ROAS</a> измеряет один канал/кампанию и страдает от atttribution-проблем (один заказ приписывают нескольким каналам). MER — top-down: берёт <i>всю</i> выручку и <i>весь</i> маркетинговый бюджет, поэтому не подвержен дабл-каунтингу. Минус — не говорит, какой канал работает.</p><h4>Бенчмарки</h4><ul><li><b>E-commerce:</b> MER 3–5× — норма для прибыльного D2C.</li><li><b>Растущий бренд (доля рынка важнее маржи):</b> 2–3× допустимо.</li><li><b>Зрелый бренд:</b> 5–8×.</li><li><b>MER &lt; 2× почти всегда означает убыток после COGS.</b></li></ul><h4>Как использовать</h4><p>MER — стратегический guardrail: задайте целевой MER, и пока blended-показатель держится выше порога, можно масштабировать spend, не утопая в per-channel attribution. Совмещайте с <a href="/contributionMargin">contribution margin</a>, чтобы целевой MER реально гарантировал прибыль.</p>`,
            en: `<h4>What MER is</h4><p>Marketing Efficiency Ratio = <b>Total revenue / Total marketing spend</b>. A blended, business-level ROAS across all channels. Rose after iOS 14 broke per-channel attribution.</p><h4>MER vs ROAS</h4><p><a href="/en/roas">ROAS</a> is per-channel and suffers attribution double-counting. MER is top-down — all revenue / all spend, immune to double-counting but channel-agnostic.</p><h4>Benchmarks</h4><ul><li><b>E-com:</b> 3–5× healthy D2C.</li><li><b>Growth brand:</b> 2–3×.</li><li><b>&lt; 2× usually loses money after COGS.</b></li></ul><p>Pair with <a href="/en/contributionMargin">contribution margin</a>.</p>`,
            uz: `<h4>MER nima</h4><p>Marketing Efficiency Ratio = Umumiy tushum / Umumiy marketing xarajati. Barcha kanallar bo'yicha blended ROAS. E-com: 3–5× sog'lom, &lt; 2× zarar.</p>`
        },
        ces: {
            ru: `<h4>Что такое CES</h4><p>Customer Effort Score = <b>Средний балл усилия</b>, которое клиент приложил, чтобы решить свой вопрос (обычно по шкале 1–7, где 1 — «очень легко», 7 — «очень трудно»; в части реализаций — наоборот). Метрика отвечает на вопрос «насколько легко иметь с нами дело».</p><h4>Почему CES сильнее предсказывает лояльность, чем CSAT/NPS</h4><p>Классическое исследование <a href="https://hbr.org/2010/07/stop-trying-to-delight-your-customers" target="_blank" rel="noopener">«Stop Trying to Delight Your Customers» (HBR / CEB, 2010)</a> показало: снижение усилия удерживает клиентов лучше, чем «восхищение». 96% клиентов с высоким усилием становятся менее лояльными; с низким — только 9%. CES — лучший предиктор повторной покупки в сервисных взаимодействиях.</p><h4>Шкала и интерпретация</h4><ul><li>Шкала 1–7: средний CES <b>≤ 3</b> — отлично (низкое усилие), 3–5 — средне, &gt; 5 — высокое трение.</li><li>Замеряют сразу после взаимодействия (после тикета, после онбординга, после покупки).</li></ul><h4>Связь с другими метриками</h4><p>Высокий CES (много усилия) → низкий <a href="/fcr">FCR</a> и высокий <a href="/avgResolutionTime">Avg Resolution Time</a> → рост <a href="/churn">churn</a>. CES — операционный рычаг: уменьшая усилие в поддержке и онбординге, вы напрямую улучшаете <a href="/nps">NPS</a> и удержание.</p>`,
            en: `<h4>What CES is</h4><p>Customer Effort Score = <b>average effort</b> a customer spent to resolve their issue (usually 1–7, 1 = very easy). Answers "how easy are we to deal with".</p><h4>Why CES predicts loyalty</h4><p><a href="https://hbr.org/2010/07/stop-trying-to-delight-your-customers" target="_blank" rel="noopener">HBR / CEB (2010)</a>: reducing effort retains better than delight. 96% of high-effort customers become less loyal vs 9% of low-effort.</p><h4>Scale</h4><ul><li>1–7: <b>≤ 3</b> excellent, 3–5 mid, &gt; 5 high friction.</li></ul><p>High CES → low <a href="/en/fcr">FCR</a>, high <a href="/en/avgResolutionTime">resolution time</a>, more <a href="/en/churn">churn</a>.</p>`,
            uz: `<h4>CES nima</h4><p>Customer Effort Score — mijoz muammosini hal qilish uchun sarflagan o'rtacha kuch (1–7). HBR (2010): kuchni kamaytirish sodiqlikni yaxshilaydi. ≤ 3 a'lo.</p>`
        },
        cpa: {
            ru: `<h4>Что такое CPA</h4><p>Cost Per Action (Acquisition) = <b>Затраты / Целевые действия</b> — стоимость одного целевого действия: регистрация, заявка, установка, покупка. Универсальная performance-метрика; конкретный смысл зависит от того, что вы назначили «action».</p><h4>CPA vs CAC</h4><p><a href="/cac">CAC</a> — это всегда стоимость <i>платящего клиента</i> и включает зарплаты sales/marketing. CPA — стоимость любого определённого действия (часто промежуточного — лида или регистрации) и обычно считается только по media spend. CPA лида × конверсия в оплату ≈ часть CAC.</p><h4>Где живёт в воронке</h4><p>Цепочка: <a href="/cpm">CPM</a> → <a href="/ctr">CTR</a> → <a href="/cpc">CPC</a> → <a href="/cr">CR</a> → <b>CPA</b>. CPA = CPC / CR. Поэтому снизить CPA можно двумя путями: дешевле трафик (CPC) или выше конверсия лендинга (CR). Часто второе дешевле.</p><h4>Целевой CPA</h4><p>Потолок CPA задаётся юнит-экономикой: target CPA ≤ <a href="/ltv">LTV</a> × целевая маржа / (LTV:CAC). Для e-commerce ориентир — CPA ≤ <a href="/aov">AOV</a> × <a href="/contributionMargin">contribution margin</a> / целевой ROAS. Если CPA растёт быстрее AOV — масштабирование убыточно.</p>`,
            en: `<h4>What CPA is</h4><p>Cost Per Action = <b>Spend / Target actions</b> — cost of one defined action: signup, lead, install, purchase. A universal performance metric; meaning depends on your chosen action.</p><h4>CPA vs CAC</h4><p><a href="/en/cac">CAC</a> is always cost of a <i>paying customer</i> incl. payroll. CPA is any action, usually media-spend only. CPA(lead) × conversion ≈ part of CAC.</p><h4>In the funnel</h4><p><a href="/en/cpm">CPM</a> → <a href="/en/ctr">CTR</a> → <a href="/en/cpc">CPC</a> → <a href="/en/cr">CR</a> → CPA. CPA = CPC / CR — cut it via cheaper traffic or higher conversion.</p><p>Target CPA ≤ <a href="/en/ltv">LTV</a> × margin.</p>`,
            uz: `<h4>CPA nima</h4><p>Cost Per Action = Xarajat / Maqsadli amallar. CPA = <a href="/uz/cpc">CPC</a> / <a href="/uz/cr">CR</a>. <a href="/uz/cac">CAC</a> dan farqli — har qanday amal, odatda faqat media spend.</p>`
        },
        cpl: {
            ru: `<h4>Что такое CPL</h4><p>Cost Per Lead = <b>Затраты / Полученные лиды</b> — стоимость одного лида (контакта, оставившего заявку/email). Ключевая метрика B2B и lead-gen маркетинга, верхняя часть sales-воронки.</p><h4>Качество важнее цены</h4><p>Дешёвый CPL бессмыслен, если лиды не конвертируются. Считайте <b>cost per SQL</b> (sales-qualified lead) и cost per closed-won, а не только CPL. Канал с CPL $20 и конверсией 2% хуже канала с CPL $60 и конверсией 15%.</p><h4>Бенчмарки CPL (B2B, 2024)</h4><ul><li><b>Контент/SEO:</b> $30–100 — обычно дешевле всего.</li><li><b>Paid Search:</b> $50–150.</li><li><b>LinkedIn Ads (B2B):</b> $75–200+.</li><li><b>Вебинары/events:</b> $50–250.</li></ul><p>Сильно зависит от ACV: при <a href="/acv">ACV</a> $50k допустим CPL в сотни долларов.</p><h4>Связь с воронкой</h4><p>CPL → конверсия в SQL → <a href="/winRate">Win Rate</a> → <a href="/cac">CAC</a>. Чтобы CPL имел смысл, держите <a href="/pipelineCoverage">Pipeline Coverage</a> и не оптимизируйте CPL в ущерб качеству — это сдвигает проблему вниз по воронке.</p>`,
            en: `<h4>What CPL is</h4><p>Cost Per Lead = <b>Spend / Leads</b> — cost of one lead. Key B2B / lead-gen metric at the top of the sales funnel.</p><h4>Quality over price</h4><p>Cheap CPL is useless if leads don't convert. Track cost per SQL and per closed-won, not just CPL.</p><h4>Benchmarks (B2B, 2024)</h4><ul><li><b>Content/SEO:</b> $30–100.</li><li><b>Paid Search:</b> $50–150.</li><li><b>LinkedIn:</b> $75–200+.</li></ul><p>Scales with <a href="/en/acv">ACV</a>. Feeds <a href="/en/cac">CAC</a> via SQL conversion and <a href="/en/winRate">Win Rate</a>.</p>`,
            uz: `<h4>CPL nima</h4><p>Cost Per Lead = Xarajat / Lidlar. B2B marketing metrikasi. Sifat narxdan muhim — cost per SQL ni hisoblang. Content: $30–100, LinkedIn: $75–200+.</p>`
        },
        cpi: {
            ru: `<h4>Что такое CPI</h4><p>Cost Per Install = <b>Затраты / Установки</b> — стоимость одной установки мобильного приложения. Базовая метрика user acquisition (UA) в mobile, особенно для игр и freemium-приложений.</p><h4>Бенчмарки CPI (2024)</h4><ul><li><b>iOS:</b> $2–5 в среднем, гипер-казуальные игры — $0.5–2, финтех/подписки — $5–15+.</li><li><b>Android:</b> $1–3, заметно дешевле iOS.</li><li><b>Гео:</b> Tier-1 (US/UK/JP) дороже Tier-2/3 в 3–10×.</li></ul><p>Источники: <a href="https://www.appsflyer.com/resources/reports/" target="_blank" rel="noopener">AppsFlyer Performance Index</a>, <a href="https://www.business-of-apps.com/data/cost-per-install/" target="_blank" rel="noopener">Business of Apps CPI data</a>.</p><h4>CPI ≠ CAC: установка ≠ платящий</h4><p>CPI — стоимость скачивания, но не дохода. Реальная цель — <b>CPI / конверсия в платящего = эффективный CAC</b>. При конверсии install→payer 2% и CPI $3 эффективный CAC платящего = $150. Поэтому CPI оценивают только в связке с <a href="/arppu">ARPPU</a> и <a href="/retention">retention</a>.</p><h4>Окупаемость через ROAS/LTV</h4><p>UA-кампания здорова, если <a href="/ltv">LTV</a> (обычно D90/D180) ≥ эффективного CAC. Смотрите D1/D7/D30 retention и <a href="/arpdau">ARPDAU</a> — они определяют, отобьётся ли CPI. Дешёвый CPI с плохим retention — деньги на ветер.</p>`,
            en: `<h4>What CPI is</h4><p>Cost Per Install = <b>Spend / Installs</b> — cost of one app install. Core mobile user-acquisition metric.</p><h4>Benchmarks (2024)</h4><ul><li><b>iOS:</b> $2–5 avg, hyper-casual $0.5–2.</li><li><b>Android:</b> $1–3.</li><li>Tier-1 geos cost 3–10× Tier-2/3.</li></ul><p>Source: <a href="https://www.appsflyer.com/resources/reports/" target="_blank" rel="noopener">AppsFlyer</a>, <a href="https://www.business-of-apps.com/data/cost-per-install/" target="_blank" rel="noopener">Business of Apps</a>.</p><h4>CPI ≠ CAC</h4><p>Install ≠ payer. Effective CAC = CPI / install→payer conversion. Judge with <a href="/en/arppu">ARPPU</a> and <a href="/en/retention">retention</a>; payback via D90 <a href="/en/ltv">LTV</a>.</p>`,
            uz: `<h4>CPI nima</h4><p>Cost Per Install = Xarajat / O'rnatishlar. iOS: $2–5, Android: $1–3 (<a href="https://www.appsflyer.com/resources/reports/" target="_blank" rel="noopener">AppsFlyer</a>). CPI ni <a href="/uz/arppu">ARPPU</a> bilan baholang.</p>`
        },
        arppu: {
            ru: `<h4>Что такое ARPPU</h4><p>Average Revenue Per Paying User = <b>Выручка / Число платящих пользователей</b>. В отличие от <a href="/arpu">ARPU</a> (делит выручку на <i>всех</i> пользователей), ARPPU считает только тех, кто реально платит. Ключевая метрика freemium и free-to-play монетизации.</p><h4>ARPPU vs ARPU</h4><p>ARPU = ARPPU × Paying Share (доля платящих). Если из 100 пользователей платят 3, а ARPPU = $40, то ARPU = $1.2. <b>Рост ARPPU и рост доли платящих — два разных рычага</b>: первый про апсел существующих, второй про конверсию бесплатных.</p><h4>Бенчмарки (mobile F2P / freemium)</h4><ul><li><b>Конверсия в платящих:</b> 2–5% — норма для F2P, 1–3% для casual.</li><li><b>ARPPU мобильных игр:</b> $20–50/мес; «киты» (whales) дают непропорциональную долю.</li><li><b>SaaS freemium:</b> ARPPU привязан к плану; следите за распределением, а не средним.</li></ul><h4>Как растить</h4><p>Рычаги ARPPU: апсел/кросс-сел, тарифные апгрейды, in-app покупки, подписки vs разовые. Связан с <a href="/cpi">CPI</a> (окупаемость UA) и <a href="/ltv">LTV</a> = ARPPU × срок жизни платящего. Осторожно: агрессивная монетизация «китов» завышает средний ARPPU, но повышает <a href="/churn">churn</a> массового сегмента.</p>`,
            en: `<h4>What ARPPU is</h4><p>Average Revenue Per Paying User = <b>Revenue / Paying users</b>. Unlike <a href="/en/arpu">ARPU</a> (all users), ARPPU counts only payers. Key freemium / F2P metric.</p><h4>ARPPU vs ARPU</h4><p>ARPU = ARPPU × paying share. Growing ARPPU (upsell payers) and growing paying share (convert free) are two different levers.</p><h4>Benchmarks (mobile F2P)</h4><ul><li>Paying conversion 2–5%.</li><li>Game ARPPU $20–50/mo; whales skew the mean.</li></ul><p>Feeds <a href="/en/cpi">CPI</a> payback and <a href="/en/ltv">LTV</a> = ARPPU × payer lifetime.</p>`,
            uz: `<h4>ARPPU nima</h4><p>Average Revenue Per Paying User = Tushum / To'lovchi foydalanuvchilar. <a href="/uz/arpu">ARPU</a> dan farqli — faqat to'lovchilar. F2P: 2–5% to'lovchi, ARPPU $20–50.</p>`
        },
        openRate: {
            ru: `<h4>Что такое Email Open Rate</h4><p>Open Rate = <b>Открытия / Доставленные письма × 100%</b> — доля доставленных писем, которые были открыты. Базовая метрика email-маркетинга, отражает силу темы письма (subject line), репутацию отправителя и релевантность списка.</p><h4>Важно: Apple MPP исказил Open Rate</h4><p>С 2021 года <b>Apple Mail Privacy Protection</b> автоматически «открывает» письма за пользователя, завышая Open Rate. Поэтому сегодня Open Rate — менее надёжная метрика; ориентируйтесь на <a href="/ctor">CTOR</a> и click rate как на «честный» сигнал вовлечённости.</p><h4>Бенчмарки (2024)</h4><ul><li><b>Средний Open Rate:</b> 35–45% (после MPP-инфляции); «чистый» ~20–25%.</li><li><b>E-commerce:</b> ~35–40%; триггерные письма (welcome, abandoned cart) — 45–60%.</li><li><b>B2B / SaaS:</b> 25–40%.</li></ul><p>Источники: <a href="https://mailchimp.com/resources/email-marketing-benchmarks/" target="_blank" rel="noopener">Mailchimp benchmarks</a>, <a href="https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks" target="_blank" rel="noopener">Klaviyo benchmarks</a>.</p><h4>Как улучшить</h4><p>Рычаги: A/B-тест темы и preview-текста, сегментация, время отправки, гигиена списка (удаление неактивных — иначе падает deliverability), warm-up домена. Низкий Open Rate часто = проблема доставляемости (spam-папка), а не темы.</p>`,
            en: `<h4>What Open Rate is</h4><p>Open Rate = <b>Opens / Delivered × 100%</b> — share of delivered emails opened. Reflects subject line, sender reputation, list relevance.</p><h4>Apple MPP caveat</h4><p>Since 2021 <b>Apple Mail Privacy Protection</b> auto-opens emails, inflating Open Rate. Lean on <a href="/en/ctor">CTOR</a> and click rate as honest signals.</p><h4>Benchmarks (2024)</h4><ul><li>Average 35–45% (post-MPP); real ~20–25%.</li><li>Triggered (welcome, cart) 45–60%.</li></ul><p>Source: <a href="https://mailchimp.com/resources/email-marketing-benchmarks/" target="_blank" rel="noopener">Mailchimp</a>, <a href="https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks" target="_blank" rel="noopener">Klaviyo</a>.</p>`,
            uz: `<h4>Email Open Rate nima</h4><p>Open Rate = Ochilishlar / Yetkazilgan × 100%. Apple MPP (2021) Open Rate ni oshirdi — <a href="/uz/ctor">CTOR</a> ga tayaning. O'rtacha 35–45% (<a href="https://mailchimp.com/resources/email-marketing-benchmarks/" target="_blank" rel="noopener">Mailchimp</a>).</p>`
        },
        ctor: {
            ru: `<h4>Что такое CTOR</h4><p>Click-To-Open Rate = <b>Клики / Открытия × 100%</b> — доля открывших письмо, которые кликнули по ссылке. В отличие от click rate (клики / доставленные), CTOR убирает влияние темы письма и оценивает <i>контент</i>: насколько убедительны оффер, текст и CTA для тех, кто уже открыл.</p><h4>Почему CTOR честнее Open Rate</h4><p>После того как <a href="/openRate">Apple MPP</a> сломал Open Rate, CTOR и click rate стали главными метриками реальной вовлечённости. CTOR изолирует качество контента от качества subject line.</p><h4>Бенчмарки (2024)</h4><ul><li><b>Средний CTOR:</b> 10–15%.</li><li><b>E-commerce:</b> 10–15%; промо с сильным визуалом и одним CTA — выше.</li><li><b>B2B / контент-рассылки:</b> 8–14%.</li><li><b>&gt; 20% — отличный показатель.</b></li></ul><p>Источник: <a href="https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks" target="_blank" rel="noopener">Klaviyo</a>, <a href="https://mailchimp.com/resources/email-marketing-benchmarks/" target="_blank" rel="noopener">Mailchimp</a>.</p><h4>Как растить CTOR</h4><p>Один чёткий CTA вместо десяти ссылок, контрастная кнопка, релевантность оффера сегменту, мобильная вёрстка (60%+ открытий — с телефона), персонализация. Низкий CTOR при высоком Open Rate = тема интригует, но контент не доставляет обещанного.</p>`,
            en: `<h4>What CTOR is</h4><p>Click-To-Open Rate = <b>Clicks / Opens × 100%</b> — share of openers who clicked. Unlike click rate, CTOR removes subject-line effect and judges <i>content</i> quality.</p><h4>Honest engagement signal</h4><p>After <a href="/en/openRate">Apple MPP</a> broke Open Rate, CTOR became a key real-engagement metric.</p><h4>Benchmarks (2024)</h4><ul><li>Average 10–15%.</li><li>&gt; 20% excellent.</li></ul><p>Source: <a href="https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks" target="_blank" rel="noopener">Klaviyo</a>. Raise via one clear CTA, mobile layout, segment relevance.</p>`,
            uz: `<h4>CTOR nima</h4><p>Click-To-Open Rate = Kliklar / Ochilishlar × 100%. Kontent sifatini baholaydi. O'rtacha 10–15%, &gt; 20% a'lo. <a href="/uz/openRate">Open Rate</a> dan halolroq signal.</p>`
        },
        featureAdoption: {
            ru: `<h4>Что такое Feature Adoption Rate</h4><p>Feature Adoption Rate = <b>Пользователи, использующие фичу / Активные пользователи × 100%</b> — доля активной базы, реально применяющая конкретную функцию. Ключевая product-метрика: показывает, окупаются ли вложения в разработку и насколько фича попала в потребность.</p><h4>Adoption ≠ один клик</h4><p>Важно определять «adoption» как <i>повторное осмысленное использование</i>, а не один заход из любопытства. Хороший критерий: пользователь применил фичу ≥ 2–3 раз за период. Иначе метрика завышается и не предсказывает удержание.</p><h4>Breadth vs Depth</h4><p>Различают: <b>breadth</b> (сколько % юзеров хоть раз попробовали) и <b>depth</b> (как часто/глубоко используют те, кто принял). Low breadth — проблема discovery/онбординга; low depth — проблема ценности самой фичи.</p><h4>Бенчмарки и связь</h4><ul><li>Core-фичи зрелого продукта: 60–80%+ adoption.</li><li>Новые/advanced фичи: 10–30% — норма на старте.</li></ul><p>Высокий feature adoption ключевых функций коррелирует с <a href="/retention">retention</a> и снижением <a href="/churn">churn</a>: пользователи, дошедшие до «aha-фичи», уходят реже. Связан с <a href="/activation">Activation</a> и <a href="/timeToValue">Time to Value</a>.</p>`,
            en: `<h4>What Feature Adoption Rate is</h4><p>Feature Adoption = <b>Users using a feature / Active users × 100%</b>. Shows whether dev investment pays off and the feature meets a need.</p><h4>Adoption ≠ one click</h4><p>Define adoption as <i>repeated meaningful use</i> (≥ 2–3 times), not a curiosity click.</p><h4>Breadth vs Depth</h4><p>Breadth = % who tried; depth = how often adopters use it. Low breadth → discovery problem; low depth → value problem.</p><ul><li>Core features: 60–80%+.</li><li>New/advanced: 10–30% early.</li></ul><p>Correlates with <a href="/en/retention">retention</a> and lower <a href="/en/churn">churn</a>.</p>`,
            uz: `<h4>Feature Adoption Rate nima</h4><p>Feature Adoption = Funksiyani ishlatuvchilar / Faol foydalanuvchilar × 100%. Core funksiyalar: 60–80%+. <a href="/uz/retention">Retention</a> bilan bog'liq.</p>`
        },
        leadVelocityRate: {
            ru: `<h4>Что такое Lead Velocity Rate</h4><p>Lead Velocity Rate (LVR) = <b>(Лиды в этом месяце − Лиды в прошлом месяце) / Лиды в прошлом месяце × 100%</b> — темп месячного роста числа квалифицированных лидов. Метрику популяризировал <a href="https://www.saastr.com/why-lead-velocity-rate-lvr-is-the-most-important-metric-in-saas/" target="_blank" rel="noopener">Jason Lemkin (SaaStr)</a> как «самую важную опережающую метрику SaaS».</p><h4>Почему LVR — опережающий индикатор</h4><p>Выручка (<a href="/mrr">MRR</a>, <a href="/arr">ARR</a>) — это lagging-метрика: она отражает сделки, закрытые из лидов прошлых месяцев. LVR измеряет <i>сегодняшний</i> приток качественных лидов и потому <b>предсказывает выручку на 1–2 квартала вперёд</b>. Падающий LVR при растущем MRR — ранний сигнал будущего замедления.</p><h4>Ключ — качественные лиды</h4><p>LVR считают по <b>quality leads</b> (SQL/MQL), а не по всем подряд. Рост числа мусорных лидов раздувает LVR, но не конвертируется в выручку. Связывайте с конверсией в <a href="/winRate">Win Rate</a> и <a href="/cpl">CPL</a>.</p><h4>Бенчмарк</h4><p>Для растущего SaaS целевой LVR должен превышать целевой рост ARR. Lemkin рекомендует устойчивые двузначные проценты MoM. Считайте LVR ежемесячно и стройте тренд — единичный месяц шумный.</p>`,
            en: `<h4>What Lead Velocity Rate is</h4><p>LVR = <b>(Leads this month − Leads last month) / Leads last month × 100%</b> — monthly growth rate of qualified leads. Popularized by <a href="https://www.saastr.com/why-lead-velocity-rate-lvr-is-the-most-important-metric-in-saas/" target="_blank" rel="noopener">Jason Lemkin (SaaStr)</a>.</p><h4>A leading indicator</h4><p>Revenue (<a href="/en/mrr">MRR</a>/<a href="/en/arr">ARR</a>) lags; LVR measures today's qualified-lead inflow and predicts revenue 1–2 quarters ahead.</p><h4>Quality leads only</h4><p>Use SQL/MQL, not raw leads. Pair with <a href="/en/winRate">Win Rate</a> and <a href="/en/cpl">CPL</a>. Track the MoM trend, not a single month.</p>`,
            uz: `<h4>Lead Velocity Rate nima</h4><p>LVR = (Bu oy lidlar − O'tgan oy) / O'tgan oy × 100%. Jason Lemkin (SaaStr) ommalashtirgan. Tushumni 1–2 chorak oldindan bashorat qiladi. Sifatli lidlar (SQL) bo'yicha.</p>`
        },
        cashConversionScore: {
            ru: `<h4>Что такое Cash Conversion Score</h4><p>Cash Conversion Score (CCS) = <b>Текущий ARR / Суммарно привлечённый капитал (за вычетом кэша на балансе)</b> — сколько ARR компания создала на каждый сожжённый доллар инвестиций. Метрика капитальной эффективности, предложенная <a href="https://www.bvp.com/atlas/cash-conversion-score" target="_blank" rel="noopener">Bessemer Venture Partners</a>.</p><h4>Чем отличается от Burn Multiple</h4><p><a href="/burnMultiple">Burn Multiple</a> — поток (burn за период / new ARR за период), мгновенный снимок эффективности. CCS — <b>накопительная</b> метрика за всю жизнь компании: весь ARR против всего поднятого капитала. CCS отвечает на вопрос «насколько капиталоэффективно вы построили бизнес в целом».</p><h4>Шкала Bessemer</h4><ul><li><b>&gt; 1.0× — хорошо:</b> создали больше ARR, чем сожгли капитала.</li><li><b>&gt; 1.5–2× — отлично:</b> высокая капиталоэффективность, top quartile.</li><li><b>&lt; 0.5× — слабо:</b> капиталоёмкий рост, требует пересмотра модели.</li></ul><h4>Когда применять</h4><p>CCS осмыслен начиная с Series A+, когда накоплены и капитал, и ARR. На seed-стадии знаменатель и числитель ещё малы и метрика шумная. Дополняет <a href="/ruleOf40">Rule of 40</a> и <a href="/burnMultiple">Burn Multiple</a>: вместе они дают полную картину «рост vs эффективность».</p>`,
            en: `<h4>What Cash Conversion Score is</h4><p>CCS = <b>Current ARR / Total capital raised (net of cash on hand)</b> — ARR created per dollar of investment burned. A capital-efficiency metric from <a href="https://www.bvp.com/atlas/cash-conversion-score" target="_blank" rel="noopener">Bessemer</a>.</p><h4>vs Burn Multiple</h4><p><a href="/en/burnMultiple">Burn Multiple</a> is a per-period flow; CCS is <b>cumulative</b> — all ARR vs all capital raised.</p><h4>Bessemer scale</h4><ul><li><b>&gt; 1.0×</b> good.</li><li><b>&gt; 1.5–2×</b> excellent (top quartile).</li><li><b>&lt; 0.5×</b> capital-intensive.</li></ul><p>Best from Series A+. Complements <a href="/en/ruleOf40">Rule of 40</a>.</p>`,
            uz: `<h4>Cash Conversion Score nima</h4><p>CCS = Joriy ARR / Jami jalb qilingan kapital. Bessemer kapital samaradorlik metrikasi. &gt; 1.0× yaxshi, &gt; 1.5× a'lo. Series A+ dan mazmunli.</p>`
        },
        avgResolutionTime: {
            ru: `<h4>Что такое Avg Resolution Time</h4><p>Average Resolution Time (ART) = <b>Суммарное время на решение / Число решённых тикетов</b> — среднее время от создания обращения до его финального закрытия. Ключевая операционная метрика поддержки и важная составляющая клиентского опыта.</p><h4>Resolution Time ≠ Response Time</h4><p>Не путайте с <i>First Response Time</i> (время до первого ответа). ART — это полное время до решения проблемы, включая итерации. Клиент может получить ответ за 5 минут, но решение — через 3 дня. Обе метрики важны и связаны с <a href="/sla">SLA</a>.</p><h4>Считайте медиану, а не только среднее</h4><p>Несколько «застрявших» сложных тикетов сильно тянут среднее вверх. Медиана и 90-й перцентиль точнее описывают типичный опыт. Также различайте бизнес-часы vs календарные — ART в 24ч по календарю и по рабочему времени — разные истории.</p><h4>Связь с другими метриками</h4><p>Высокий ART снижает <a href="/csat">CSAT</a> и повышает <a href="/ces">CES</a> (усилие клиента), что ведёт к <a href="/churn">churn</a>. Рычаги снижения: рост <a href="/fcr">First Contact Resolution</a>, база знаний/self-service, маршрутизация и приоритизация, автоматизация рутинных тикетов. Балансируйте: гонка за низким ART не должна снижать качество решений.</p>`,
            en: `<h4>What Avg Resolution Time is</h4><p>ART = <b>Total resolution time / Resolved tickets</b> — average time from ticket creation to final close. A core support-ops and CX metric.</p><h4>Resolution ≠ Response</h4><p>Don't confuse with First Response Time. ART is full time-to-resolve, tied to <a href="/en/sla">SLA</a>.</p><h4>Use median, not just mean</h4><p>A few stuck tickets skew the mean; median and p90 describe typical experience better. Separate business hours vs calendar.</p><p>High ART lowers <a href="/en/csat">CSAT</a>, raises <a href="/en/ces">CES</a> → <a href="/en/churn">churn</a>. Lower it via <a href="/en/fcr">FCR</a>, self-service, routing, automation.</p>`,
            uz: `<h4>Avg Resolution Time nima</h4><p>ART = Umumiy hal qilish vaqti / Hal qilingan tiketlar. Response Time bilan adashtirmang. O'rtacha emas, medianani hisoblang. <a href="/uz/csat">CSAT</a> va <a href="/uz/ces">CES</a> ga ta'sir qiladi.</p>`
        }
    };

    function renderDeepContent(metricId) {
        const e = DEEP_CONTENT[metricId];
        if (!e) return '';
        const lang = window._currentLang ? window._currentLang() : 'ru';
        const body = e[lang] || e.ru;
        if (!body) return '';
        const label = lang === 'en' ? 'Deep dive' : lang === 'uz' ? 'Chuqur tahlil' : 'Глубокий разбор';
        return `<details class="deep-content"><summary>📖 ${label}</summary><div class="deep-content-body">${body}</div></details>`;
    }

    // ---- BENCHMARK SOURCES (per-metric citations) ----
    const BENCHMARK_SOURCES = {
        nrr:           [{ label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }, { label: 'ChartMogul SaaS Benchmarks 2024', url: 'https://chartmogul.com/reports/saas-benchmarks-report/' }],
        grr:           [{ label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }, { label: 'ChartMogul 2024', url: 'https://chartmogul.com/reports/saas-benchmarks-report/' }],
        churn:         [{ label: 'ChartMogul SaaS Benchmarks 2024', url: 'https://chartmogul.com/reports/saas-benchmarks-report/' }, { label: 'Recurly Research', url: 'https://recurly.com/research/' }],
        ltv_cac:       [{ label: 'David Skok — For Entrepreneurs', url: 'https://www.forentrepreneurs.com/saas-metrics-2/' }, { label: 'Bessemer SaaS Benchmarks', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }],
        cacPayback:    [{ label: 'OpenView 2024', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }, { label: 'Scale Venture Partners', url: 'https://www.scalevp.com/insights' }],
        burnMultiple:  [{ label: 'David Sacks — original 2020', url: 'https://sacks.substack.com/p/the-burn-multiple' }, { label: 'Craft Ventures benchmarks', url: 'https://craftventures.com/' }],
        magicNumber:   [{ label: 'Scale Venture Partners (originated)', url: 'https://www.scalevp.com/insights' }, { label: 'Lemkin SaaStr', url: 'https://www.saastr.com/' }],
        ruleOf40:      [{ label: 'Bessemer Venture Partners', url: 'https://www.bvp.com/atlas/the-rule-of-40' }, { label: 'Brad Feld 2015 (originated)', url: 'https://feld.com/archives/2015/02/rule-40-healthy-saas-company/' }],
        quickRatio:    [{ label: 'Mamoon Hamid (originated)', url: 'https://medium.com/@mamoonha/the-quick-ratio-a-better-way-to-look-at-saas-growth-4d3a76a86d9' }, { label: 'OpenView 2024', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }],
        runway:        [{ label: 'YC Startup School', url: 'https://www.startupschool.org/' }, { label: 'a16z benchmarks', url: 'https://a16z.com/' }],
        mrrGrowthRate: [{ label: 'Y Combinator (T2D3 framework)', url: 'https://blog.ycombinator.com/' }, { label: 'David Sacks T2D3', url: 'https://medium.com/craft-ventures/t2d3-the-saas-growth-blueprint-2c6e2d8f6c8d' }],
        rule_of_40:    [{ label: 'BVP', url: 'https://www.bvp.com/atlas/the-rule-of-40' }],
        salesVelocity: [{ label: 'Salesforce State of Sales 2024', url: 'https://www.salesforce.com/resources/research-reports/state-of-sales/' }],
        winRate:       [{ label: 'Gong B2B sales benchmarks', url: 'https://www.gong.io/research/' }, { label: 'HubSpot State of Sales', url: 'https://www.hubspot.com/state-of-sales' }],
        pipelineCoverage:[{ label: 'Gartner B2B benchmarks', url: 'https://www.gartner.com/' }],
        nps:           [{ label: 'Bain & Company — NPS creator', url: 'https://www.netpromoter.com/' }, { label: 'Retently NPS Benchmarks 2024', url: 'https://www.retently.com/blog/good-net-promoter-score/' }],
        grossMargin:   [{ label: 'Bessemer State of the Cloud', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }, { label: 'KeyBanc 2024 SaaS Survey', url: 'https://www.key.com/businesses-institutions/industry-expertise/2024-saas-survey-results.html' }],
        timeToValue:   [{ label: 'Userpilot benchmarks', url: 'https://userpilot.com/blog/time-to-value-saas/' }],
        arpdau:        [{ label: 'data.ai mobile benchmarks', url: 'https://www.data.ai/' }, { label: 'GameAnalytics F2P benchmarks', url: 'https://gameanalytics.com/blog/' }],
        repeatPurchaseRate:[{ label: 'Shopify Plus benchmarks', url: 'https://www.shopify.com/plus/' }, { label: 'Klaviyo Email Marketing report', url: 'https://www.klaviyo.com/blog/' }],
        wau:           [{ label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Mixpanel Product Metrics', url: 'https://mixpanel.com/blog/' }],
        netNewMrr:     [{ label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }, { label: 'ChartMogul SaaS Benchmarks 2024', url: 'https://chartmogul.com/reports/saas-benchmarks-report/' }],
        contributionMargin:[{ label: 'Bessemer State of the Cloud', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }, { label: 'KeyBanc 2024 SaaS Survey', url: 'https://www.key.com/businesses-institutions/industry-expertise/2024-saas-survey-results.html' }],
        gmv:           [{ label: 'a16z Marketplace 100', url: 'https://a16z.com/marketplace-100/' }, { label: 'Andreessen Horowitz Marketplace metrics', url: 'https://a16z.com/marketplace-metrics/' }],
        takeRate:      [{ label: 'a16z Marketplace metrics (take rate)', url: 'https://a16z.com/marketplace-metrics/' }, { label: 'Bessemer Marketplace benchmarks', url: 'https://www.bvp.com/atlas' }],
        quotaAttainment:[{ label: 'RepVue Sales Benchmarks', url: 'https://www.repvue.com/' }, { label: 'Xactly Sales Performance', url: 'https://www.xactlycorp.com/resources' }],
        cpm:           [{ label: 'WordStream Online Advertising Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }, { label: 'Business of Apps Ad Costs', url: 'https://www.business-of-apps.com/data/ad-spend/' }],
        cartAbandonment:[{ label: 'Baymard Institute Cart Abandonment', url: 'https://baymard.com/lists/cart-abandonment-rate' }, { label: 'Statista E-commerce abandonment', url: 'https://www.statista.com/statistics/477804/online-shopping-cart-abandonment-rate-worldwide/' }],
        mer:           [{ label: 'Triple Whale MER benchmarks', url: 'https://www.triplewhale.com/blog' }, { label: 'Common Thread Collective (MER)', url: 'https://commonthreadco.com/blogs/coachs-corner' }],
        ces:           [{ label: 'HBR / CEB — Stop Trying to Delight', url: 'https://hbr.org/2010/07/stop-trying-to-delight-your-customers' }, { label: 'Gartner Customer Effort Score', url: 'https://www.gartner.com/en/customer-service-support' }],
        cpa:           [{ label: 'WordStream Online Advertising Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }, { label: 'First Page Sage Conversion benchmarks', url: 'https://firstpagesage.com/seo-blog/' }],
        cpl:           [{ label: 'First Page Sage CPL benchmarks', url: 'https://firstpagesage.com/seo-blog/average-cost-per-lead-by-industry/' }, { label: 'HubSpot State of Marketing', url: 'https://www.hubspot.com/state-of-marketing' }],
        cpi:           [{ label: 'AppsFlyer Performance Index', url: 'https://www.appsflyer.com/resources/reports/' }, { label: 'Business of Apps Cost Per Install', url: 'https://www.business-of-apps.com/data/cost-per-install/' }],
        arppu:         [{ label: 'AppsFlyer Mobile Benchmarks', url: 'https://www.appsflyer.com/resources/reports/' }, { label: 'GameAnalytics F2P benchmarks', url: 'https://gameanalytics.com/blog/' }],
        openRate:      [{ label: 'Mailchimp Email Benchmarks', url: 'https://mailchimp.com/resources/email-marketing-benchmarks/' }, { label: 'Klaviyo Email Benchmarks', url: 'https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks' }],
        ctor:          [{ label: 'Klaviyo Email Benchmarks', url: 'https://www.klaviyo.com/marketing-resources/email-marketing-benchmarks' }, { label: 'Campaign Monitor Email Benchmarks', url: 'https://www.campaignmonitor.com/resources/guides/email-marketing-benchmarks/' }],
        featureAdoption:[{ label: 'Pendo Product Benchmarks', url: 'https://www.pendo.io/pendo-blog/' }, { label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }],
        leadVelocityRate:[{ label: 'Jason Lemkin — SaaStr (LVR)', url: 'https://www.saastr.com/why-lead-velocity-rate-lvr-is-the-most-important-metric-in-saas/' }, { label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }],
        cashConversionScore:[{ label: 'Bessemer Cash Conversion Score', url: 'https://www.bvp.com/atlas/cash-conversion-score' }, { label: 'Bessemer State of the Cloud', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }],
        avgResolutionTime:[{ label: 'Zendesk Benchmark / CX Trends', url: 'https://www.zendesk.com/blog/zendesk-benchmark-introduction/' }, { label: 'Freshdesk Support benchmarks', url: 'https://www.freshworks.com/freshdesk/resources/' }],
        // — Batch: engagement / acquisition / finance / marketing / QA / support —
        dau:           [{ label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Mixpanel Product Metrics', url: 'https://mixpanel.com/blog/' }],
        mau:           [{ label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Mixpanel Product Metrics', url: 'https://mixpanel.com/blog/' }],
        stickiness:    [{ label: 'Amplitude Product Benchmarks (DAU/MAU)', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Sequoia / Mixpanel engagement benchmarks', url: 'https://mixpanel.com/blog/' }],
        retention:     [{ label: 'Amplitude Retention Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'AppsFlyer Retention Benchmarks', url: 'https://www.appsflyer.com/resources/reports/' }],
        ltv:           [{ label: 'David Skok — For Entrepreneurs (LTV)', url: 'https://www.forentrepreneurs.com/saas-metrics-2/' }, { label: 'Shopify — Customer Lifetime Value', url: 'https://www.shopify.com/blog/customer-lifetime-value' }],
        cac:           [{ label: 'First Page Sage — CAC by industry', url: 'https://firstpagesage.com/reports/average-customer-acquisition-cost-by-industry/' }, { label: 'HubSpot State of Marketing', url: 'https://www.hubspot.com/state-of-marketing' }],
        arpu:          [{ label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Business of Apps — App revenue data', url: 'https://www.business-of-apps.com/data/' }],
        aov:           [{ label: 'Littledata — E-commerce AOV benchmarks', url: 'https://www.littledata.io/average/average-order-value' }, { label: 'Dynamic Yield E-commerce benchmarks', url: 'https://marketing.dynamicyield.com/benchmarks/' }],
        mrr:           [{ label: 'ChartMogul SaaS Benchmarks 2024', url: 'https://chartmogul.com/reports/saas-benchmarks-report/' }, { label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }],
        arr:           [{ label: 'Bessemer State of the Cloud', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }, { label: 'KeyBanc 2024 SaaS Survey', url: 'https://www.key.com/businesses-institutions/industry-expertise/2024-saas-survey-results.html' }],
        acv:           [{ label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }, { label: 'KeyBanc 2024 SaaS Survey', url: 'https://www.key.com/businesses-institutions/industry-expertise/2024-saas-survey-results.html' }],
        acquisition:   [{ label: 'Dave McClure — AARRR (original deck)', url: 'https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version' }, { label: 'Amplitude Product Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }],
        activation:    [{ label: 'Amplitude — Activation & onboarding', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Reforge / Dave McClure AARRR', url: 'https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version' }],
        retention_aarrr:[{ label: 'Amplitude Retention Benchmarks', url: 'https://amplitude.com/blog/product-benchmarks-report' }, { label: 'Dave McClure — AARRR', url: 'https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version' }],
        referral:      [{ label: 'Bain & Company — NPS / referral', url: 'https://www.netpromoter.com/' }, { label: 'Dave McClure — AARRR', url: 'https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version' }],
        revenue:       [{ label: 'Bessemer State of the Cloud', url: 'https://www.bvp.com/atlas/state-of-the-cloud-2024' }, { label: 'OpenView 2024 SaaS Benchmarks', url: 'https://openviewpartners.com/2024-saas-benchmarks-report/' }],
        burnRate:      [{ label: 'YC Startup School — burn & runway', url: 'https://www.startupschool.org/' }, { label: 'David Sacks — Burn Multiple', url: 'https://sacks.substack.com/p/the-burn-multiple' }],
        salesCycleLength:[{ label: 'HubSpot State of Sales', url: 'https://www.hubspot.com/state-of-sales' }, { label: 'Gong B2B sales research', url: 'https://www.gong.io/research/' }],
        cr:            [{ label: 'Unbounce Conversion Benchmark Report', url: 'https://unbounce.com/conversion-benchmark-report/' }, { label: 'WordStream Advertising Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }],
        roas:          [{ label: 'WordStream Advertising Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }, { label: 'Shopify — ROAS guide', url: 'https://www.shopify.com/blog/roas' }],
        cpc:           [{ label: 'WordStream Google Ads Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }, { label: 'Business of Apps — Ad spend data', url: 'https://www.business-of-apps.com/data/ad-spend/' }],
        ctr:           [{ label: 'WordStream Google Ads Benchmarks', url: 'https://www.wordstream.com/blog/ws/2022/04/19/google-ads-benchmarks' }, { label: 'Smart Insights — Ad CTR benchmarks', url: 'https://www.smartinsights.com/internet-advertising/internet-advertising-analytics/display-advertising-clickthrough-rates/' }],
        bounceRate:    [{ label: 'Contentsquare Digital Experience Benchmark', url: 'https://contentsquare.com/insights/digital-experience-benchmark/' }, { label: 'Semrush — Bounce rate benchmarks', url: 'https://www.semrush.com/blog/bounce-rate/' }],
        engagementRate:[{ label: 'Rival IQ Social Media Benchmark Report', url: 'https://www.rivaliq.com/blog/social-media-industry-benchmark-report/' }, { label: 'Hootsuite Social Trends', url: 'https://www.hootsuite.com/research/social-trends' }],
        bugRate:       [{ label: 'Google Testing Blog — quality practices', url: 'https://testing.googleblog.com/' }, { label: 'DORA / State of DevOps', url: 'https://dora.dev/research/' }],
        testCoverage:  [{ label: 'Martin Fowler — Test Coverage', url: 'https://martinfowler.com/bliki/TestCoverage.html' }, { label: 'Google Testing Blog — code coverage', url: 'https://testing.googleblog.com/2020/08/code-coverage-best-practices.html' }],
        defectDensity: [{ label: 'DORA / State of DevOps', url: 'https://dora.dev/research/' }, { label: 'Google Testing Blog', url: 'https://testing.googleblog.com/' }],
        csat:          [{ label: 'Zendesk CX Trends', url: 'https://www.zendesk.com/blog/zendesk-benchmark-introduction/' }, { label: 'ACSI — American Customer Satisfaction Index', url: 'https://www.theacsi.org/' }],
        fcr:           [{ label: 'SQM Group — First Call Resolution', url: 'https://www.sqmgroup.com/resources/library/blog/first-call-resolution-benchmarks' }, { label: 'Zendesk Benchmark', url: 'https://www.zendesk.com/blog/zendesk-benchmark-introduction/' }],
        sla:           [{ label: 'Zendesk Benchmark / CX Trends', url: 'https://www.zendesk.com/blog/zendesk-benchmark-introduction/' }, { label: 'Atlassian — SLA best practices', url: 'https://www.atlassian.com/itsm/service-request-management/slas' }]
    };

    function renderSources(metricId) {
        const list = BENCHMARK_SOURCES[metricId];
        if (!list || !list.length) return '';
        const items = list.map(s => `<a href="${s.url}" target="_blank" rel="noopener" class="bench-source-link">${s.label}</a>`).join(' · ');
        return `<details class="bench-sources"><summary>📚 ${t('sources.label', 'Источники бенчмарков')}</summary><div class="bench-source-list">${items}</div></details>`;
    }

    // ---- FORECAST (time-series projection) ----
    // Each entry: { defaultRate, rateLabel, rateUnit, monthsDefault, project(startVal, rateInputPct, m) → array of N+1 values }
    const FORECAST_CONFIG = {
        mrr: {
            valueKey: 'mrr',  // metric.inputs key for the value being projected
            valueLabel: 'MRR',
            unit: '$',
            defaultRate: 10, rateLabel: 'MoM рост', rateUnit: '%',
            monthsDefault: 12,
            project: (start, ratePct, m) => {
                const r = ratePct / 100;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 + r));
                return arr;
            }
        },
        arr: {
            valueKey: 'mrr', valueLabel: 'ARR (MRR × 12)', unit: '$',
            defaultRate: 10, rateLabel: 'MoM рост', rateUnit: '%',
            monthsDefault: 12,
            project: (start, ratePct, m) => {
                const r = ratePct / 100;
                const arr = [start * 12];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 + r));
                return arr;
            }
        },
        runway: {
            // Project cash remaining month by month
            valueKey: 'cash', valueLabel: 'Cash remaining', unit: '$',
            defaultRate: null,  // no rate input — uses burn directly
            customInputs: [{ key: 'burnInput', label: 'Месячное сжигание', unit: '$', getDefault: () => {
                const b = document.getElementById('input-burn'); return b ? b.value.replace(/\s/g, '') : '300000';
            }}],
            monthsDefault: 18,
            project: (start, _rate, m, extra) => {
                const burn = parseFloat((extra?.burnInput || '0').toString().replace(/\s/g, '')) || 0;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(Math.max(0, arr[i-1] - burn));
                return arr;
            }
        },
        nrr: {
            // Project compounded MRR at given NRR
            valueKey: 'start', valueLabel: 'MRR проекция', unit: '$',
            defaultRate: 110, rateLabel: 'NRR годовой', rateUnit: '%',
            monthsDefault: 12,
            project: (start, nrrPct, m) => {
                // Convert annual NRR to monthly compound
                const monthlyR = Math.pow(nrrPct / 100, 1 / 12) - 1;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 + monthlyR));
                return arr;
            }
        },
        mrrGrowthRate: {
            valueKey: 'startMrr', valueLabel: 'MRR', unit: '$',
            defaultRate: null,
            rateFromCalc: true,  // use the calculated growth rate directly
            monthsDefault: 12,
            project: (start, ratePct, m) => {
                const r = ratePct / 100;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 + r));
                return arr;
            }
        },
        churn: {
            valueKey: 'total', valueLabel: 'Размер базы', unit: '',
            defaultRate: null, rateFromCalc: true,
            monthsDefault: 12,
            project: (start, churnPct, m) => {
                const r = churnPct / 100;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 - r));
                return arr;
            }
        },
        burnMultiple: {
            valueKey: 'newArr', valueLabel: 'ARR (projection)', unit: '$',
            defaultRate: 5, rateLabel: 'MoM рост ARR', rateUnit: '%',
            monthsDefault: 12,
            project: (start, ratePct, m) => {
                const r = ratePct / 100;
                const arr = [start];
                for (let i = 1; i <= m; i++) arr.push(arr[i-1] * (1 + r));
                return arr;
            }
        }
    };

    let forecastOpen = false;
    const forecastBtn = document.getElementById('forecastBtn');
    const forecastPanel = document.getElementById('forecastPanel');

    function refreshForecastButtonVisibility() {
        const m = getCurrentMetric();
        if (!forecastBtn) return;
        if (m && FORECAST_CONFIG[m.id]) forecastBtn.style.display = '';
        else forecastBtn.style.display = 'none';
    }

    function drawForecastChart(values, unit) {
        const W = 720, H = 220, padL = 60, padR = 16, padT = 14, padB = 26;
        const n = values.length;
        const min = Math.min(...values, 0);
        const max = Math.max(...values, 1);
        const range = (max - min) || 1;
        const xOf = i => padL + (i / (n - 1)) * (W - padL - padR);
        const yOf = v => padT + (1 - (v - min) / range) * (H - padT - padB);

        const dPath = values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xOf(i).toFixed(1)} ${yOf(v).toFixed(1)}`).join(' ');
        const dArea = `${dPath} L ${xOf(n-1)} ${H - padB} L ${xOf(0)} ${H - padB} Z`;

        // Y-axis ticks (3 labels)
        const ticks = [max, (max + min) / 2, min];
        const tickHtml = ticks.map(t => {
            const y = yOf(t);
            return `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-dasharray="2,3" />
                <text x="${padL - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" fill="var(--text-3)" font-size="10" font-family="monospace">${formatSmart(t)}</text>`;
        }).join('');

        // X-axis labels (Month 0, Month 6, Month N)
        const xTicks = [0, Math.floor(n / 2), n - 1];
        const xLabelHtml = xTicks.map(i => `<text x="${xOf(i).toFixed(1)}" y="${H - 6}" text-anchor="middle" fill="var(--text-3)" font-size="10">M${i}</text>`).join('');

        // Endpoint dot
        const endX = xOf(n - 1), endY = yOf(values[n - 1]);

        return `<svg class="forecast-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
            <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="#FFC107" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#FFC107" stop-opacity="0"/>
                </linearGradient>
            </defs>
            ${tickHtml}
            <path d="${dArea}" fill="url(#grad)"/>
            <path d="${dPath}" fill="none" stroke="#FFC107" stroke-width="2.5" stroke-linejoin="round"/>
            <circle cx="${endX.toFixed(1)}" cy="${endY.toFixed(1)}" r="5" fill="#FFC107" stroke="var(--bg)" stroke-width="2"/>
            ${xLabelHtml}
        </svg>`;
    }

    function getStartValueForForecast(metric, cfg) {
        // If rateFromCalc — start = startMrr/total directly; else use valueKey input
        const el = document.getElementById('input-' + cfg.valueKey);
        if (!el) return null;
        const raw = el.value.replace(/\s/g, '');
        const v = parseFloat(raw);
        if (isNaN(v)) return null;
        return v;
    }

    function getEffectiveRate(metric, cfg) {
        if (cfg.rateFromCalc) {
            // Use the calculated result from metric.calculate
            const values = {};
            metric.inputs.forEach(inp => {
                const el = document.getElementById('input-' + inp.key);
                if (el) values[inp.key] = el.value.replace(/\s/g, '');
            });
            try {
                const r = metric.calculate(values);
                const n = parseFloat(r);
                return isNaN(n) ? cfg.defaultRate || 0 : n;
            } catch (e) { return cfg.defaultRate || 0; }
        }
        return cfg.defaultRate;
    }

    function buildForecastPanel(metric) {
        if (!metric) return;
        const cfg = FORECAST_CONFIG[metric.id];
        if (!cfg) {
            forecastPanel.innerHTML = `<div class="forecast-empty">${t('forecast.empty', 'Прогноз для этой метрики не настроен.')}</div>`;
            return;
        }
        const startVal = getStartValueForForecast(metric, cfg);
        if (startVal === null || startVal <= 0) {
            forecastPanel.innerHTML = `<div class="forecast-empty">${t('forecast.fill_first', 'Заполните значения метрики, чтобы построить прогноз.')}</div>`;
            return;
        }
        const initialRate = getEffectiveRate(metric, cfg);
        const initialMonths = cfg.monthsDefault;

        const customInputsHtml = (cfg.customInputs || []).map(ci => `
            <div class="forecast-control-row">
                <label for="fc-${ci.key}">${ci.label}${ci.unit ? ', ' + getCurrencyForUnit(ci.unit) : ''}</label>
                <input type="number" id="fc-${ci.key}" value="${ci.getDefault()}" step="any">
            </div>
        `).join('');

        const rateRowHtml = cfg.defaultRate !== null && !cfg.rateFromCalc ? `
            <div class="forecast-control-row">
                <label for="fc-rate">${cfg.rateLabel}, ${cfg.rateUnit}</label>
                <input type="number" id="fc-rate" value="${initialRate}" step="0.1">
            </div>` : '';

        const rateInfoHtml = cfg.rateFromCalc ? `
            <div class="forecast-control-row">
                <span style="font-size:0.78rem;color:var(--text-3);">Темп взят из расчёта: <strong style="color:var(--text-1);font-family:'JetBrains Mono',monospace;">${initialRate.toFixed(1)}%</strong></span>
            </div>` : '';

        forecastPanel.innerHTML = `
            <div class="forecast-title">📈 ${t('forecast.title', 'Прогноз на горизонте')}</div>
            <div class="forecast-controls">
                ${customInputsHtml}
                ${rateRowHtml}
                ${rateInfoHtml}
                <div class="forecast-control-row">
                    <label for="fc-months">${t('forecast.months', 'Месяцев')}</label>
                    <input type="range" id="fc-months" min="3" max="24" value="${initialMonths}" step="1">
                    <span id="fc-months-val" style="font-size:0.82rem;color:var(--text-1);font-family:'JetBrains Mono',monospace;min-width:32px;">${initialMonths}</span>
                </div>
            </div>
            <div class="forecast-chart-wrap" id="fc-chart"></div>
            <div class="forecast-summary" id="fc-summary"></div>
        `;

        const recompute = () => {
            const months = parseInt(document.getElementById('fc-months')?.value || initialMonths);
            document.getElementById('fc-months-val').textContent = months;
            const rateEl = document.getElementById('fc-rate');
            const rate = rateEl ? parseFloat(rateEl.value) : initialRate;
            const extra = {};
            (cfg.customInputs || []).forEach(ci => {
                const el = document.getElementById('fc-' + ci.key);
                if (el) extra[ci.key] = el.value;
            });
            const values = cfg.project(startVal, rate, months, extra);
            const finalV = values[values.length - 1];
            const delta = finalV - startVal;
            const deltaPct = startVal > 0 ? ((finalV - startVal) / startVal) * 100 : 0;
            const unitDisp = cfg.unit === '$' ? localizeUnit('$') : cfg.unit;
            const chartEl = document.getElementById('fc-chart');
            if (chartEl) chartEl.innerHTML = drawForecastChart(values, unitDisp);
            const sumEl = document.getElementById('fc-summary');
            if (sumEl) {
                const deltaCls = delta > 0 ? 'pos' : (delta < 0 ? 'neg' : '');
                const sign = delta > 0 ? '+' : '';
                sumEl.innerHTML = `
                    <div class="forecast-summary-item">
                        <span class="forecast-summary-label">${t('forecast.start', 'Старт (M0)')}</span>
                        <span class="forecast-summary-value">${formatSmart(startVal)}${unitDisp ? ' ' + unitDisp : ''}</span>
                    </div>
                    <div class="forecast-summary-item">
                        <span class="forecast-summary-label">${t('forecast.end', 'Конец (M' + months + ')')}</span>
                        <span class="forecast-summary-value">${formatSmart(finalV)}${unitDisp ? ' ' + unitDisp : ''}</span>
                    </div>
                    <div class="forecast-summary-item">
                        <span class="forecast-summary-label">${t('forecast.delta', 'Изменение')}</span>
                        <span class="forecast-summary-value ${deltaCls}">${sign}${formatSmart(delta)}${unitDisp ? ' ' + unitDisp : ''} (${sign}${deltaPct.toFixed(1)}%)</span>
                    </div>`;
            }
        };
        ['fc-rate', 'fc-months', ...(cfg.customInputs || []).map(c => 'fc-' + c.key)].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', recompute);
        });
        recompute();
    }

    if (forecastBtn) {
        forecastBtn.addEventListener('click', () => {
            forecastOpen = !forecastOpen;
            forecastBtn.classList.toggle('open', forecastOpen);
            forecastPanel.classList.toggle('open', forecastOpen);
            if (forecastOpen) buildForecastPanel(getCurrentMetric());
        });
    }

    // ---- SMART NUMBER FORMAT (12.5K / 1.2M / 1.5B / -0.05) ----
    function formatSmart(n) {
        if (n === Infinity) return '∞';
        if (n === -Infinity) return '−∞';
        if (typeof n !== 'number' || !Number.isFinite(n)) return String(n);
        const abs = Math.abs(n);
        if (abs >= 1e9) return (n / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B';
        if (abs >= 1e6) return (n / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
        if (abs >= 1e4) return (n / 1e3).toFixed(1).replace(/\.?0+$/, '') + 'K';
        if (abs >= 100) return formatNum(n.toFixed(0));
        if (abs >= 1) return formatNum(n.toFixed(2).replace(/\.?0+$/, ''));
        return n.toFixed(4).replace(/\.?0+$/, '');
    }

    // ---- HTML ESCAPE ----
    function escapeHtml(str) {
        if (typeof str !== 'string') return String(str);
        return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }

    // ---- TOAST ----
    let _toastEl = null, _toastTimer = null;
    function showToast(msg, kind) {
        if (!_toastEl) {
            _toastEl = document.createElement('div');
            _toastEl.className = 'toast';
            document.body.appendChild(_toastEl);
        }
        _toastEl.textContent = msg;
        _toastEl.className = 'toast' + (kind ? ' ' + kind : '');
        // force reflow
        void _toastEl.offsetWidth;
        _toastEl.classList.add('show');
        clearTimeout(_toastTimer);
        _toastTimer = setTimeout(() => _toastEl.classList.remove('show'), 2200);
    }

    // ---- DYNAMIC TITLE ----
    function updatePageTitle() {
        const metric = getCurrentMetric();
        if (!metric) return;
        const name = tm(metric.id, 'name', metric.name);
        const suffix = currentLang === 'en' ? ' — product metrics calculator'
                     : currentLang === 'uz' ? ' — mahsulot metrikalari kalkulyatori'
                     : ' — калькулятор продуктовых метрик';
        document.title = name + suffix;
    }

    // ---- INIT ----
    initTemplates();
    initIndustry();
    initCurrency();
    initLang();
    applyStaticTranslations();
    updateSectionBadges();
    // Bind About modal close/escape (open trigger is in more-menu init)
    // NOTE: aboutOverlay HTML is AFTER this script tag, so we must wait for DOMContentLoaded.
    function bindAbout(){
        const ov = document.getElementById('aboutOverlay');
        const close = document.getElementById('aboutClose');
        if (!ov || !close) return;
        close.addEventListener('click', () => ov.classList.remove('show'));
        ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) ov.classList.remove('show'); });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindAbout);
    else bindAbout();

    // Generic Formspree submit with mailto+localStorage fallback for max reliability.
    // If Formspree endpoint is unregistered (404) or any network error, we still capture
    // the email locally AND open a pre-filled mailto so the lead is never lost.
    const FALLBACK_EMAIL = 'rodion.121093@gmail.com';

    function saveLeadLocally(source, formData) {
        try {
            const key = 'mt_pending_leads_v1';
            const list = JSON.parse(localStorage.getItem(key) || '[]');
            const entry = { ts: new Date().toISOString(), source };
            formData.forEach((v, k) => { entry[k] = v; });
            list.push(entry);
            localStorage.setItem(key, JSON.stringify(list));
        } catch (e) {}
    }
    function openMailtoFallback(source, formData) {
        const subject = encodeURIComponent(`MetricTree ${source} signup`);
        const lines = [];
        formData.forEach((v, k) => { if (k && !k.startsWith('_')) lines.push(`${k}: ${v}`); });
        lines.push('', `source: ${source}`, `URL: ${window.location.href}`);
        const body = encodeURIComponent(lines.join('\n'));
        window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    }
    function bindFormspreeForm(formEl, successEl, source) {
        if (!formEl) return;
        formEl.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = formEl.querySelector('button[type=submit], button:not([type])');
            const origText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '…'; }
            const formData = new FormData(formEl);
            saveLeadLocally(source, formData);
            let ok = false;
            try {
                const resp = await fetch(formEl.action, {
                    method: 'POST',
                    headers: { Accept: 'application/json' },
                    body: formData
                });
                ok = resp.ok;
            } catch (err) { ok = false; }
            if (ok) {
                if (window.track) window.track('lead', { source: source });
                formEl.style.display = 'none';
                if (successEl) successEl.style.display = 'block';
                showToast('✓ ' + (window._t ? window._t('newsletter.success', 'Подписка оформлена!') : 'Subscribed!'), 'success');
            } else {
                // Fallback path: open mailto so the lead reaches Rodion even when Formspree is down/unregistered.
                openMailtoFallback(source, formData);
                formEl.style.display = 'none';
                if (successEl) {
                    successEl.style.display = 'block';
                    successEl.innerHTML = `📧 Открыли почту — отправьте письмо, чтобы попасть в waitlist. <br>Или напишите вручную: <a href="mailto:${FALLBACK_EMAIL}" style="color:var(--accent);">${FALLBACK_EMAIL}</a>`;
                }
                showToast('📧 Открыли почту — отправьте письмо', 'success');
            }
            if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = origText; }
        });
    }
    // Footer + about-modal newsletters + About→Pricing CTA — all reference HTML AFTER this script.
    function bindLateModalLinks() {
        bindFormspreeForm(document.getElementById('newsletterFormAbout'), document.getElementById('newsletterAboutSuccess'), 'about');
        bindFormspreeForm(document.getElementById('newsletterFormFooter'), null, 'footer');
        // Lead magnet: free PDF benchmarks cheat sheet. Same /api/lead path (saveLeadLocally
        // + lead event + mailto fallback); on success reveals the link to open & print it.
        bindFormspreeForm(document.getElementById('cheatsheetFormEl'), document.getElementById('cheatsheetSuccess'), 'pdf_benchmarks');

        const footerAbout = document.getElementById('footerAbout');
        if (footerAbout) footerAbout.addEventListener('click', e => { e.preventDefault(); document.getElementById('aboutOverlay')?.classList.add('show'); });
        const footerPricing = document.getElementById('footerPricing');
        if (footerPricing) footerPricing.addEventListener('click', e => { e.preventDefault(); document.getElementById('pricingOverlay')?.classList.add('show'); });
        const footerHelp = document.getElementById('footerHelp');
        if (footerHelp) footerHelp.addEventListener('click', e => { e.preventDefault(); document.getElementById('helpOverlay')?.classList.add('show'); });

        const aboutPricingBtn = document.getElementById('aboutPricingBtn');
        if (aboutPricingBtn) aboutPricingBtn.addEventListener('click', () => {
            document.getElementById('aboutOverlay')?.classList.remove('show');
            document.getElementById('pricingOverlay')?.classList.add('show');
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindLateModalLinks);
    else bindLateModalLinks();

    // ---- CSV IMPORT ----
    function parseCSVImport(text) {
        // Build lookup: lowercased "metric_id key" or "metric_id.key" or just "key" → { mid, key }
        const lookup = {};
        Object.values(metricsData).forEach(section => {
            section.metrics.forEach(m => {
                m.inputs.forEach(inp => {
                    const keys = [
                        `${m.id} ${inp.key}`.toLowerCase(),
                        `${m.id}.${inp.key}`.toLowerCase(),
                        `${m.id}_${inp.key}`.toLowerCase()
                    ];
                    keys.forEach(k => { lookup[k] = { mid: m.id, key: inp.key }; });
                    // For metrics with single input, also accept just metric.id
                    if (m.inputs.length === 1) {
                        lookup[m.id.toLowerCase()] = { mid: m.id, key: inp.key };
                    }
                });
            });
        });
        // For metric IDs that don't accept short form (multi-input), try special common single-key (e.g., revenue, mrr, churn)
        // Already handled by inp.key lookup.
        // Also: accept just `inp.key` if unique across all metrics (no collision)
        const keyToMetric = {};
        Object.values(metricsData).forEach(section => {
            section.metrics.forEach(m => {
                m.inputs.forEach(inp => {
                    const k = inp.key.toLowerCase();
                    if (!keyToMetric[k]) keyToMetric[k] = [];
                    keyToMetric[k].push({ mid: m.id, key: inp.key });
                });
            });
        });

        const lines = text.split(/[\r\n]+/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
        const results = [];
        const skipped = [];
        lines.forEach(line => {
            // Try parse: key=value, key,value, key\tvalue, "key": value
            let parts = null;
            if (line.includes('=')) parts = line.split('=', 2);
            else if (line.includes('\t')) parts = line.split('\t', 2);
            else if (line.includes(',')) parts = line.split(/,\s*/, 2);
            else if (line.includes(':')) parts = line.split(/:\s*/, 2);
            if (!parts || parts.length < 2) { skipped.push(line); return; }
            const rawKey = parts[0].trim().replace(/^["']|["']$/g, '').toLowerCase();
            const rawVal = parts[1].trim().replace(/^["']|["']$/g, '').replace(/[\s ]/g, '').replace(/[$€₽£]/g, '').replace(/%/g, '');
            const num = parseFloat(rawVal);
            if (isNaN(num)) { skipped.push(line); return; }

            let target = lookup[rawKey];
            if (!target && keyToMetric[rawKey] && keyToMetric[rawKey].length === 1) {
                target = keyToMetric[rawKey][0];
            }
            if (!target) { skipped.push(line); return; }
            results.push({ ...target, value: num });
        });
        return { results, skipped };
    }
    function runCSVImport() {
        const ta = document.getElementById('csvImportText');
        if (!ta || !ta.value.trim()) {
            showToast(t('csvimport.empty', 'Нечего парсить'), 'error');
            return;
        }
        const { results, skipped } = parseCSVImport(ta.value);
        if (!results.length) {
            showToast(t('csvimport.empty', 'Не распознано ни одной записи'), 'error');
            return;
        }
        // Save to storedValues
        results.forEach(({ mid, key, value }) => {
            if (!storedValues[mid]) storedValues[mid] = {};
            storedValues[mid][key] = String(value);
        });
        saveToLS(storedValues);
        renderMetricCard();
        renderMetricsList();
        updateSectionBadges();
        const msg = t('csvimport.success', 'Заполнено {n} значени(й/я)').replace('{n}', results.length);
        showToast(msg + (skipped.length ? ` · пропущено: ${skipped.length}` : ''), 'success');
        document.getElementById('csvImportOverlay')?.classList.remove('show');
        ta.value = '';
    }
    // NOTE: csvImportOverlay HTML is AFTER this script tag — wait for DOMContentLoaded.
    function bindCSVImport(){
        const ov = document.getElementById('csvImportOverlay');
        const close = document.getElementById('csvImportClose');
        const run = document.getElementById('csvImportRun');
        if (!ov || !close) return;
        close.addEventListener('click', () => ov.classList.remove('show'));
        ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) ov.classList.remove('show'); });
        if (run) run.addEventListener('click', runCSVImport);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindCSVImport);
    else bindCSVImport();

    // ---- COMPARE 2 METRICS ----
    function renderCompare2Card(mid) {
        const m = Object.values(metricsData).flatMap(s => s.metrics).find(x => x.id === mid);
        if (!m) return '<div class="compare2-col">—</div>';
        // Restore values from LS
        const saved = storedValues[m.id] || {};
        const vals = {};
        m.inputs.forEach(inp => { vals[inp.key] = saved[inp.key] || ''; });
        const localizedName = tm(m.id, 'name', m.name);
        const localizedFormula = tm(m.id, 'formula', m.formula);
        const localizedDescr = tm(m.id, 'description', m.description);
        let result = '—', insight = '', color = 'var(--accent)';
        // Compute if all filled
        const allFilled = m.inputs.every(inp => {
            const raw = (vals[inp.key] || '').toString().replace(/\s/g, '');
            return raw !== '' && !isNaN(parseFloat(raw));
        });
        if (allFilled) {
            try {
                const parsed = {};
                m.inputs.forEach(inp => { parsed[inp.key] = vals[inp.key]; });
                const r = m.calculate(parsed);
                if (r !== null && r !== undefined) {
                    result = formatSmart(parseFloat(r)) + (m.unit ? ' ' + localizeUnit(m.unit) : '');
                    if (m.insight) {
                        const ins = m.insight(parseFloat(r));
                        color = ins.color;
                        insight = window._tInsight ? window._tInsight(ins.text) : ins.text;
                    }
                }
            } catch(e) {}
        }
        const inputsHtml = m.inputs.map(inp => `
            <div class="c2-input-row">
                <label>${localizeLabel(inp.label)}</label>
                <input type="text" data-mid="${m.id}" data-key="${inp.key}" value="${vals[inp.key]}" placeholder="${formatNum(inp.placeholder)}" inputmode="decimal">
            </div>
        `).join('');
        return `<div class="compare2-col">
            <h4>${localizedName}</h4>
            <span class="c2-formula">${localizedFormula}</span>
            <div class="c2-descr">${localizedDescr}</div>
            <div class="c2-inputs">${inputsHtml}</div>
            <div class="c2-result"><span class="c2-result-label">${t('metric.result_label', 'Результат:')}</span><span class="c2-result-val" style="color:${color}">${result}</span></div>
            ${insight ? `<div class="c2-insight" style="border-left-color:${color}">${insight}</div>` : ''}
        </div>`;
    }
    function openCompare2() {
        const ov = document.getElementById('compare2Overlay');
        const grid = document.getElementById('compare2Grid');
        const sel = document.getElementById('compare2Select');
        if (!ov || !grid || !sel) return;
        // Populate select with all metrics except current
        const currentMid = currentMetricId;
        const opts = [];
        Object.entries(metricsData).forEach(([sid, section]) => {
            section.metrics.forEach(m => {
                if (m.id !== currentMid) opts.push(`<option value="${m.id}">${section.name} · ${tm(m.id, 'name', m.name)}</option>`);
            });
        });
        sel.innerHTML = opts.join('');
        // Default: pick a sensible related metric or first
        const related = RELATED[currentMid];
        if (related && related[0]) sel.value = related[0].id;

        const renderBoth = () => {
            grid.innerHTML = renderCompare2Card(currentMid) + renderCompare2Card(sel.value);
            // Wire up input live updates per card
            grid.querySelectorAll('input').forEach(inp => {
                inp.addEventListener('input', () => {
                    const mid = inp.dataset.mid;
                    const key = inp.dataset.key;
                    if (!storedValues[mid]) storedValues[mid] = {};
                    storedValues[mid][key] = inp.value.replace(/\s/g, '');
                    saveToLS(storedValues);
                    // Re-render only — quick
                    grid.innerHTML = renderCompare2Card(currentMid) + renderCompare2Card(sel.value);
                    grid.querySelectorAll('input').forEach(ii => {
                        ii.addEventListener('input', arguments.callee);
                    });
                    // Focus the same input after re-render
                    const newInp = grid.querySelector(`input[data-mid="${mid}"][data-key="${key}"]`);
                    if (newInp) { newInp.focus(); newInp.setSelectionRange(newInp.value.length, newInp.value.length); }
                });
            });
        };
        sel.addEventListener('change', renderBoth);
        renderBoth();
        ov.classList.add('show');
    }
    // NOTE: compare2Overlay HTML is AFTER this script tag — wait for DOMContentLoaded.
    function bindCompare2(){
        const ov = document.getElementById('compare2Overlay');
        const close = document.getElementById('compare2Close');
        if (!ov || !close) return;
        close.addEventListener('click', () => ov.classList.remove('show'));
        ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) ov.classList.remove('show'); });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindCompare2);
    else bindCompare2();

    // Bind Pricing modal close/escape + waitlist form (Formspree)
    // NOTE: pricingOverlay HTML is AFTER this script tag — wait for DOMContentLoaded.
    function bindPricing(){
        const ov = document.getElementById('pricingOverlay');
        const close = document.getElementById('pricingClose');
        if (!ov || !close) return;
        close.addEventListener('click', () => ov.classList.remove('show'));
        ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('show'); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) ov.classList.remove('show'); });

        const proBtn = document.getElementById('proWaitlistBtn');
        const teamBtn = document.getElementById('teamWaitlistBtn');
        const form = document.getElementById('waitlistForm');
        const tierField = document.getElementById('waitlistTier');
        function showWaitlist(tier) {
            if (tierField) tierField.value = tier;
            if (form) {
                form.style.display = 'block';
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const emailInput = form.querySelector('.waitlist-email');
                if (emailInput) setTimeout(() => emailInput.focus(), 300);
            }
        }
        if (proBtn) proBtn.addEventListener('click', () => showWaitlist('pro'));
        if (teamBtn) teamBtn.addEventListener('click', () => showWaitlist('team'));

        const formEl = document.getElementById('waitlistFormEl');
        const successEl = document.getElementById('waitlistSuccess');
        if (formEl) {
            formEl.addEventListener('submit', async (e) => {
                e.preventDefault();
                const data = new FormData(formEl);
                const submit = formEl.querySelector('.waitlist-submit');
                if (submit) { submit.disabled = true; submit.textContent = '…'; }
                saveLeadLocally('pro-waitlist', data);
                let ok = false;
                try {
                    const resp = await fetch(formEl.action, {
                        method: 'POST',
                        headers: { Accept: 'application/json' },
                        body: data
                    });
                    ok = resp.ok;
                } catch (err) { ok = false; }
                if (ok) {
                    formEl.style.display = 'none';
                    if (successEl) successEl.style.display = 'block';
                    showToast('✓ ' + (window._t ? window._t('waitlist.success', 'Спасибо! Письмо придёт за 7 дней до запуска.') : 'Подписка оформлена'), 'success');
                } else {
                    // Mailto fallback — lead reaches Rodion even when Formspree is down/unregistered.
                    openMailtoFallback('pro-waitlist', data);
                    formEl.style.display = 'none';
                    if (successEl) {
                        successEl.style.display = 'block';
                        successEl.innerHTML = `📧 Открыли почту — отправьте письмо, чтобы попасть в waitlist. <br>Или напишите вручную: <a href="mailto:${FALLBACK_EMAIL}" style="color:var(--accent);">${FALLBACK_EMAIL}</a>`;
                    }
                    showToast('📧 Открыли почту — отправьте письмо', 'success');
                }
                if (submit) { submit.disabled = false; submit.textContent = window._t ? window._t('waitlist.submit', 'Подписаться на waitlist') : 'Подписаться на waitlist'; }
            });
        }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindPricing);
    else bindPricing();
    const _restoredFromURL = restoreFromURL();
    if (_restoredFromURL) {
        // Состояние уже восстановлено из URL — рендерим напрямую, не сбрасывая currentMetricId
        renderMetricsList();
        renderMetricCard();
    } else {
        setActiveSection('b2c');
    }
    updatePageTitle();
})();
