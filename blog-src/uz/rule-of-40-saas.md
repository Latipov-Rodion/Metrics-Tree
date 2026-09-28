---
title: Rule of 40 nima va qanday hisoblanadi — nega SaaS-kompaniyalar uchun 40% sehrli raqam
description: Rule of 40 (Brad Feld, 2015) batafsil tahlili — qanday hisoblanadi, nega aynan 40%, 2026-yilda public va private SaaS uchun norma qanday va top decile’ga (>60%) qanday erishish mumkin.
date: 2026-05-14
keywords: rule of 40 nima, rule of 40 qanday hisoblanadi, 40 foiz qoidasi, saas sog‘lig‘i, brad feld, o‘sish + marja, saas metrikasi
embed: ruleOf40
---

# Rule of 40 nima va qanday hisoblanadi — nega SaaS-kompaniyalar uchun 40% sehrli raqam

2015-yilda Brad Feld (Foundry Group) qisqa post chop etdi va u keyingi o‘n yillikda ommaviy SaaS-kompaniyalar sog‘lig‘ini baholash usulini belgilab berdi. Formula oddiy:

> **Tushumning yillik o‘sish sur’ati YoY (%) + Marja (%) ≥ 40%**

Agar yig‘indi ≥ 40 bo‘lsa — kompaniya «sog‘lom». 60 dan yuqori bo‘lsa — top decile. 40 dan past bo‘lsa — yoki tezlashish, yoki foydaliroq bo‘lish kerak.

## Nega aynan 40%?

Brad Feld bu raqamni matematik yo‘l bilan chiqarmagan — bu ommaviy SaaS’larni tahlil qilishdan kelib chiqqan empirik kuzatuv. U **R40 ≥ 40** bo‘lgan kompaniyalar R40 < 40 bo‘lgan kompaniyalarga nisbatan **multiplikatorlarda ustama (premium)** bilan savdo qilinishini payqagan.

2015-yildan keyin o‘nlab fondlar (OpenView, Bessemer, ICONIQ) bu qonuniyatni turli datasetlarda tasdiqladi. Barqaror ishlaydi:
- Marjasiz juda ko‘p o‘sish = zararlar, beqarorlik
- O‘sishsiz juda ko‘p marja = turg‘unlik, raqobatchilarga yutqazish
- 40% — bu ikki chekka o‘rtasidagi «sweet spot»

## Qaysi marjadan foydalanish kerak?

3 variant:

| Marja turi | Qachon ishlatish kerak |
|-------------|--------------------|
| **EBITDA margin** | Eng ko‘p ishlatiladigani, private SaaS uchun |
| **Operating margin** | EBITDA’ga yaqin, lekin amortizatsiyani o‘z ichiga oladi |
| **FCF margin** | Public SaaS shuni hisobot qiladi, eng konservativi |

Asosiysi — barcha davrlarda izchil ravishda **bittasidan** foydalanish. Almashtirmang.

## 2026 benchmarklari

ZIRP-korreksiyasidan keyin Rule of 40’ga erishish qiyinlashdi. Public SaaS medianalari:

| Tier | R40 | Misollar (public SaaS) |
|------|-----|----------------------|
| Top decile | >60% | Adobe, ServiceNow, CrowdStrike, Cloudflare |
| Top quartile | 40-60% | Datadog, Snowflake (post-IPO) |
| Median public SaaS | 25-35% | O‘rta darajadagi ko‘pchilik |
| Bottom quartile | <20% | Hozir xarajatlarni qisqartiring yoki foydaga o‘ting |

**Private growth-stage SaaS (Series B-D):**
- 40-55% — eng yaxshi muvozanat
- 60% dan ancha yuqori — odatda o‘sishga kam investitsiya qilishadi (sarmoya kiritsa, tezroq o‘sishi mumkin edi)

## Misolda qanday hisoblanadi

**SaaS-startap:**
- Yil boshidagi ARR: $5M
- Yil oxiridagi ARR: $7M → o‘sish = 40% YoY
- EBITDA: -$500k (-7% marja)

R40 = 40 + (-7) = **33** → sog‘lom chegaradan past

R40 = 40 ga erishish uchun:
- A variant: o‘sishni 40% → 47% YoY ga tezlashtirish
- B variant: marjani -7% → 0% ga yaxshilash (break-even’ga chiqish)
- C variant: kombinatsiya — o‘sish 43% + marja -3% = 40 ✓

Ssenariyingizni chamalab ko‘rish uchun quyidagi kalkulyatordan foydalaning.

## Rule of 40 qachon ISHLAMAYDI

Metrika masshtablash bosqichidagi **public-ready SaaS** uchun. Quyidagilarga qo‘llamang:

1. **Pre-product-market-fit** — o‘sish ta’rifiga ko‘ra beqaror, marja = tartibsiz
2. **Hardware’ga tayangan bizneslar** — capex marjani buzadi
3. **Marketplace-modellar** — take-rate o‘sish+marjadan muhimroq
4. **Deep tech, biotech** — uzoq R&D sikllari erta bosqichda marjani ma’nosiz qiladi

## Nega top decile = >60%?

Yuqori decile’dagi public SaaS-kompaniyalar odatda R40 >60% ga **o‘sishni qurbon qilish hisobiga emas**, balki operatsion richag hisobiga erishadi:

- **Masshtab bilan marja yaxshilanadi** — ko‘proq tushum → yaxshiroq gross margin (S&M sublinear masshtablanadi)
- **Brend tanilishi CAC’ni pasaytiradi** → Sales & Marketing % i tushadi
- **Self-serve onboarding** SMB-segmentda **CSM xarajatlarini olib tashlaydi**
- **R&D yangi mahsulotlar uchun qayta ishlatiladi** (Datadog: 1 platforma → 20+ modul)

Ya’ni R40 >60% = product-market fit + operational excellence + takrorlanuvchi expansion iqtisodiyotining isboti.

## R40’ni yaxshilashning 3 ta usuli

### 1. Pricing review
Narxni 10% ga oshirish odatda mijozlarni yo‘qotmasdan gross margin’ga +5-8% beradi (agar value-prop mavjud bo‘lsa). Bu R40’ni 5-8 punktga yaxshilashning eng arzon usuli.

### 2. Gross margin
COGS auditi:
- Hosting (AWS optimallashtirish, reserved instances)
- Customer support (hujjatlar, AI orqali murojaatlarni kamaytirish)
- Payment processing (masshtabda Stripe bilan muzokara)

Har +5% gross margin = R40’ga +5 punkt.

### 3. Expansion revenue
Mavjud mijozlardan tushumning CAC’i = ~$0:
- Seat-based / usage-based pricing
- Bosqichli funksiyalar → tabiiy upgrade yo‘li
- Yuqori ARR uchun account-based marketing

NRR >115% avtomatik ravishda ~10-15% o‘sishni «bepul» beradi (yangi mijozlarsiz).

## R40 ning real misollari

| Kompaniya | Yil | O‘sish | Marja | R40 |
|----------|------|--------|--------|-----|
| Snowflake | 2024 | 35% | 8% (FCF) | 43 |
| Datadog | 2024 | 27% | 30% | **57** |
| HubSpot | 2024 | 23% | 15% | 38 |
| Salesforce | 2024 | 11% | 32% | 43 |
| Shopify | 2024 | 26% | 19% | 45 |

E’tibor bering — hatto mega-cap’lar ham kamdan-kam 60% dan yuqori. Top decile — qoida emas, istisno.

## Xulosa

Rule of 40 — **board-room va investor-pitch uchun oddiy metrika**. Yagona emas, sehrli raqam emas, lekin **hamma uchun tushunarli**. O‘zingiznikini biling, har chorak kuzating, traektoriyani tushuntiring (har Q yaxshilanyaptimi).

**R40’ingizni quyida hisoblang** — interaktiv kalkulyatorda turli o‘sish + marja ssenariylarida ko‘rib chiqing.

---

### Qo‘shimcha resurslar

- [Brad Feld original 2015 post](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/)
- [Bessemer State of the Cloud 2024](https://www.bvp.com/atlas/state-of-the-cloud)
- [/uz/burnMultiple](/uz/burnMultiple) — Burn Multiple, qo‘shimcha metrika
- [/uz/grossMargin](/uz/grossMargin) — R40 kirish ma’lumotlaridan biri sifatida Gross Margin
- [/uz/mrrGrowthRate](/uz/mrrGrowthRate) — formulaning o‘sish qismi
