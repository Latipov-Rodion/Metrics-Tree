---
title: LTV va CAC nima va qanday hisoblanadi — startap unit-iqtisodiyoti bosqichma-bosqich
description: LTV va CAC ni to‘g‘ri hisoblash, LTV:CAC nisbatining normasi (3:1, 5:1) va nega yaxshi LTV:CAC to‘g‘ri payback bo‘lmasa sog‘lom biznes degani emas.
date: 2026-05-10
keywords: ltv nima, cac nima, ltv qanday hisoblanadi, ltv:cac, unit iqtisodiyot, unit-iqtisodiyot hisoblash, startap metrikalari
embed: ltv_cac
---

# LTV va CAC nima va qanday hisoblanadi — startap unit-iqtisodiyoti bosqichma-bosqich

LTV:CAC — ehtimol SaaS dunyosidagi **eng ko‘p tilga olinadigan va eng ko‘p noto‘g‘ri hisoblanadigan** metrika. Men pitch deck’da LTV:CAC = 8 deb yozgan, lekin bu raqamga qanday kelganini tushuntira olmagan startaplarni ko‘rganman.

Keling, bosqichma-bosqich to‘g‘ri hisoblashni ko‘rib chiqamiz.

## 1. LTV (Lifetime Value) — bu nima va qanday hisoblanadi

LTV — bu **mijoz sizning mijozingiz bo‘lib turgan butun davr mobaynida qancha daromad keltirishi**.

**B2C / e-commerce** uchun oddiy formula:

```
LTV = AOV × Yiliga xaridlar soni × Mijozning "umri" (yil)
```

Misol:
- AOV = $250
- Yiliga 4 ta xarid
- Mijoz umri = 3 yil

LTV = 250 × 4 × 3 = **$3 000**

**B2B SaaS** uchun formula:

```
LTV = ARPA / Monthly Churn Rate
```

Bu yerda ARPA = Average Revenue Per Account (bitta mijozga to‘g‘ri keladigan MRR). Misol:
- ARPA = $200/oy
- Monthly Churn = 2%

LTV = 200 / 0.02 = **$10 000**

**1-tuzoq:** Customer Churn va Revenue Churn’ni adashtirmang. Agar Customer Churn = 5%, lekin Revenue Churn = 2% bo‘lsa (ya’ni kichik mijozlar ketyapti, kattalari qolyapti + upsell’lar), LTV uchun Revenue Churn’dan foydalaning.

**2-tuzoq:** agar tarixingiz qisqa bo‘lsa (<24 oy), LTV — bu fakt emas, prognoz. Kamtar bo‘ling: conservative estimate uchun prognoz LTV’ni 0.7-0.8 ga ko‘paytiring.

## 2. CAC (Customer Acquisition Cost) — nimalarni kiritish kerak

**CAC** = (Marketing + Sales xarajatlari) / Davr mobaynida jalb qilingan yangi to‘lovchi mijozlar soni.

Marketing + Sales ichiga **hammasini** kiriting:
- Reklama (Facebook, Google Ads, LinkedIn)
- Sales va marketing jamoasining ish haqi
- Tools (CRM, marketing automation, attribution)
- Pudratchilar (contractor) va konsultantlar to‘lovlari
- Kontent, dizayn, video ishlab chiqarish

**Tuzoq:** Blended CAC va Paid CAC.

| Turi | Nimani o‘z ichiga oladi | Qachon ko‘rsatish kerak |
|-----|--------------|------------------|
| Blended CAC | Barcha xarajatlar / Barcha yangi mijozlar (organika bilan birga) | Investor pitch (yaxshiroq ko‘rinadi) |
| Paid CAC | Faqat pullik kanallar / Faqat pullik kanaldan kelgan mijozlar | Operatsion qarorlar (real holat) |

**Blended har doim Paid’dan past.** Agar pitch’da Blended’dan foydalansangiz — Paid’ni ham tushuntirishga tayyor bo‘ling. Top VC fondlar ikkalasini ham so‘raydi.

## 3. LTV:CAC — qanday nisbat normal hisoblanadi

| LTV:CAC | Bu nimani anglatadi |
|---------|----------------|
| **<1** | Har bir yangi mijoz — zarar. Biznes-model buzilgan |
| **1-3** | Normadan past. Faqat o‘sish unit-iqtisodiyotdan muhimroq bo‘lganda maqbul (early stage) |
| **≥3** | Sog‘lom SaaS unit-iqtisodiyoti |
| **>5** | A’lo, lekin ehtimol marketingga kam investitsiya qilyapsiz — raqobatchilar bozorni egallab oladi |
| **>8-10** | Aniq kam investitsiya qilyapsiz. Zudlik bilan sales/marketing yollang |

**Sehrli raqam 3** ni 2010-yilda David Skok ([forentrepreneurs.com](https://www.forentrepreneurs.com/)) kiritgan. Minglab SaaS keyslarida empirik tasdiqlangan.

Nega aynan **3**, 2 yoki 4 emas? Chunki:
- 1× — break-even (COGS, support, churn hisobga olinmagan — qog‘ozda)
- 2× — real xarajatlardan keyin break-even
- 3× — oldindan aytib bo‘lmaydigan churn / margin qisqarishi uchun zaxira
- ≥3 = barqaror o‘sish

## 4. **CAC Payback Period** — nega LTV:CAC yetarli emas

LTV:CAC = 5 ajoyib eshitiladi. Lekin payback = 36 oy bo‘lsa — mijoz o‘zini oqlagunicha sizda pul tanqisligi (cash crunch) boshlanadi.

```
CAC Payback = CAC / (Bitta mijozga MRR × Gross Margin)
```

Benchmarklar:
- B2B SaaS SMB: <12 oy
- B2B SaaS Mid-market: 12-18 oy
- B2B SaaS Enterprise: 18-24 oy
- B2C: odatda <6 oy

**Real misol:**
- LTV = $10 000
- CAC = $2 000 → LTV:CAC = 5× ✓
- Bitta mijozga MRR = $200
- Gross Margin = 80%

Payback = 2000 / (200 × 0.80) = 2000 / 160 = **12.5 oy**

Sog‘lom SaaS. Agar payback >24 oy bo‘lsa — LTV:CAC = 5 bo‘lsa ham cash flow muammoli.

## 5. Goal mode — teskari hisob

Ko‘pincha foydali savol: «**Target LTV:CAC = 3 va mening LTV’im $5000 bo‘lsa, maksimal qancha CAC’ga yo‘l qo‘ya olaman?**»

Javob: $5000 / 3 = **$1 667**

Agar haqiqiy CAC bundan yuqori bo‘lsa — yoki uni pasaytirish, yoki LTV’ni oshirish kerak.

Quyidagi kalkulyator teskari hisoblay oladi — target LTV:CAC’ni kiriting, u sizning LTV’ingizda qancha CAC kerakligini ko‘rsatadi.

## 6. LTV:CAC’ni qanday yaxshilash mumkin

### CAC’ni pasaytirish
1. **Organik kanallar** — SEO, kontent, ulashish, referral’lar. Bu masshtabda blended CAC’ni pasaytiradi
2. **Referral dasturlar** — referral CAC odatda paid CAC’ning 30-50% ini tashkil qiladi
3. **Conversion optimization** — voronka CR’iga har +10% = CAC’ga -10%
4. **Brend tanilishi** — brend pullik kanallarda CPC va CPM’ni pasaytiradi
5. **SMB uchun self-serve onboarding** — sales xarajatlarini olib tashlaydi

### LTV’ni oshirish
1. **Churn’ni pasaytirish** — onboarding, customer success, health scoring
2. **AOV / ARPA’ni oshirish** — upsell’lar, bandl’lar, premium tariflar
3. **Frequency’ni oshirish** — email-flow’lar, retention-kampaniyalar
4. **Uzoq muddatli shartnomalar** — annual prepay churn’ni ×12 pasaytiradi
5. **Expansion revenue** — NRR orqali o‘sish (alohida maqolaga qarang)

## 7. LTV:CAC qachon CHALG‘ITADI

- **Tarix juda qisqa** — LTV 12 oylik ma’lumotda hisoblangan, lekin mijozlar 18 oydan keyin ketishi mumkin
- **Marja hisobga olinmagan** — gross LTV va net LTV (COGS’dan keyin)
- **Discount rate** — kelajakdagi $1 bugungisidan arzonroq; uzoq muddatli LTV uchun NPV qo‘llang
- **Cohort skew** — bitta yirik mijoz barcha mijozlar bo‘yicha o‘rtachani buzadi

## Real hayot: odatiy xatolar

**1-xato:** «Bizda LTV:CAC = 8»
→ So‘rang: blended’mi yoki paid? Paid odatda ancha past.

**2-xato:** «Biz eksponensial o‘syapmiz, LTV:CAC muhim emas»
→ Muhim. Sog‘lom LTV:CAC bo‘lmasa, o‘sish = bankrotlikka tezlashish. (RIP Casper, MoviePass.)

**3-xato:** «LTV:CAC = 12 — ajoyib!»
→ Katta ehtimol bilan CAC kamaytirib ko‘rsatilgan (sales jamoasi kiritilmagan) yoki LTV noto‘g‘ri hisoblangan (churn hisobga olinmagan).

## Xulosa

LTV:CAC — **oddiy, lekin hal qiluvchi** metrika. Ikkalasini ham hisoblang: gross + paid CAC. CAC Payback Period bilan solishtiring. Agar LTV:CAC ≥3 VA Payback <18 oy bo‘lsa → sizda sog‘lom SaaS unit-iqtisodiyoti bor, masshtablash mumkin.

**LTV:CAC’ingizni quyida hisoblang** — o‘rnatilgan kalkulyator nisbatni, benchmarkni va teskari hisobni (target LTV:CAC → kerakli CAC) ko‘rsatadi.

---

### Qo‘shimcha resurslar

- [/uz/ltv](/uz/ltv) — LTV kalkulyatori alohida
- [/uz/cac](/uz/cac) — CAC kalkulyatori alohida
- [/uz/cacPayback](/uz/cacPayback) — CAC Payback Period
- [David Skok original post on LTV:CAC](https://www.forentrepreneurs.com/saas-metrics-2/)
- [/uz/burnMultiple](/uz/burnMultiple) — Burn Multiple — kapital samaradorligining makro-metrikasi
