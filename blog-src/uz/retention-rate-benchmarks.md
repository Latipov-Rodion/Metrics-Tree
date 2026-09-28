---
title: Retention rate nima — formula, hisoblash misoli va sohalar bo‘yicha mijozlarni ushlab qolish normalari
description: Retention rate (mijozlarni ushlab qolish) qanday hisoblanadi: CRR va Day-N retention formulasi, raqamli misol, SaaS, e-commerce, mobil ilovalar va media uchun normalar, odatiy xatolar.
date: 2026-09-20
keywords: retention nima, retention rate, mijozlarni ushlab qolish, retention formulasi, retention qanday hisoblanadi, retention normasi, retention d30, customer retention rate
embed: retention
---

# Retention rate nima — formula, hisoblash misoli va sohalar bo‘yicha mijozlarni ushlab qolish normalari

Retention (ushlab qolish) — ma’lum davrdan keyin mahsulotda qolgan foydalanuvchilar yoki mijozlar ulushi. Bu eng «halol» mahsulot metrikasi: uni reklama bilan sun’iy oshirish qiyin, u esa to‘g‘ridan-to‘g‘ri LTV’ni, CAC qoplanishini va o‘sish plato’ga chiqadimi-yo‘qligini belgilaydi.

Agar retention past bo‘lsa, har qanday marketing tubsiz chelakka aylanadi: siz jalb qilish uchun pul to‘laysiz, foydalanuvchilar esa ularni qoplaganingizdan tezroq oqib ketadi.

## Retention’ning ikki formulasi — va qachon qaysi birini ishlatish kerak

### 1. Customer Retention Rate (CRR) — mijozlar bazasi uchun

**CRR = (E − N) / S × 100%**

- **S** — davr boshidagi mijozlar
- **E** — davr oxiridagi mijozlar
- **N** — davr mobaynida kelgan yangi mijozlar

Asosiy nuqta — yangilarni ayiramiz. Aks holda sotuvlar yaxshi bo‘lgan oy mijozlar ketishini «niqoblab» qo‘yadi.

### 2. Cohort (Day-N) retention — mahsulot uchun

**Retention D(N) = Kogortadan N-kuni faol bo‘lganlar / Kogorta hajmi × 100%**

Kogorta — bir kun yoki haftada kelgan foydalanuvchilar. D1, D7, D30, D90 ga qaraladi. Bu mobil ilovalar va mahsulot analitikasi uchun standart (Amplitude, Mixpanel, AppsFlyer shunday hisoblaydi).

MetricTree kalkulyatori [/uz/retention](/uz/retention) asosiy variantni hisoblaydi: davr oxiridagi faollar / davr boshidagi kogorta foydalanuvchilari.

## Hisoblash misoli: SaaS

B2B-servis, bir oy:
- Oy boshida: **400** ta to‘lovchi akkaunt
- Yangi kelganlar: **30**
- Oy oxirida: **418**

CRR = (418 − 30) / 400 = 388 / 400 = **97%**

Demak, oylik churn = 100% − 97% = **3%**. Bir qarashda — normal. Lekin bunday churn’da yillik retention ≈ 0.97^12 ≈ **69%**: yil davomida mijozlarning deyarli uchdan biri ketadi. SaaS uchun 2% dan yuqori oylik churn — allaqachon xavf zonasi ([/uz/churn](/uz/churn) ga qarang).

## Hisoblash misoli: mobil ilova

Bir haftalik kogorta: **1 200** ta o‘rnatish.

| Kun | Faollar | Retention |
|------|----------|-----------|
| D1 | 480 | 40% |
| D7 | 216 | 18% |
| D30 | 72 | 6% |

D30 = 6% — mobil ilovalar uchun **norma** (bozor bo‘yicha mediana taxminan 4–6%). Boshqasi muhimroq: egri chiziq plato’ga chiqyaptimi. Agar D30 va D90 oralig‘ida pasayish deyarli to‘xtagan bo‘lsa — mahsulotda masshtablash mumkin bo‘lgan foydalanuvchilar yadrosi bor.

## Sohalar bo‘yicha retention normalari

Quyidagi chegaralar MetricTree kalkulyatori soha tanlanganda ishlatadigan chegaralar bilan bir xil:

| Soha | Nimani o‘lchaymiz | Yomon | Norma | Yaxshi |
|-----------|-----------|-------|-------|--------|
| **Universal** | Davr uchun retention | <30% | 30–60% | >60% |
| **SaaS** | Akkauntlar, D30 | <70% | 70–85% | >85% |
| **E-commerce** | 90 kun ichida takroriy xarid | <20% | 20–40% | >40% |
| **Mobil ilovalar** | D30 | <3% | 3–8% | >8% |
| **Media / kontent** | Davr uchun retention | <25% | 25–50% | >50% |

Nega farq bunchalik katta? Chunki bular turli hodisalar. SaaS’da mijoz obuna bo‘yicha to‘laydi va ongli ravishda ketadi, mobil ilovada foydalanuvchi shunchaki uni unutadi, e-commerce’da esa «ushlab qolish» — bu ehtiyoj chastotasiga bog‘liq takroriy xarid.

**O‘zingizni faqat o‘z sohangiz va retention’ning xuddi shu ta’rifi bilan solishtiring.** Mobil o‘yinning D30 i va B2B SaaS’ning D30 i — nomi bir xil, lekin turli metrikalar.

Kategoriyalar bo‘yicha ushlab qolish egri chiziqlarini ko‘rish mumkin bo‘lgan ochiq hisobotlar: Amplitude’ning Product Benchmarks Report’i, AppsFlyer’ning mobil ilovalar retention’i bo‘yicha hisobotlari, Mixpanel benchmark-hisobotlari. Ularning metodikalari turlicha — foizning o‘ndan bir ulushlarini emas, egri chiziq shakli va kattalik tartibini solishtiring.

## Retention va boshqa metrikalar

- **Churn = 1 − Retention** xuddi shu davr uchun. Ikkalasini ham hisoblang — [churn kalkulyatori](/uz/churn).
- **NRR** — pulda ifodalangan retention: upsell va downgrade’larni hisobga oladi. Mijozlarning 5% ini yo‘qotib, NRR 110% bo‘lishi mumkin ([/uz/nrr](/uz/nrr) ga qarang).
- **Stickiness (DAU/MAU)** — qolganlar mahsulotdan qanchalik tez-tez foydalanadi. Past DAU/MAU bilan yuqori retention — mahsulotga «chidashyapti», lekin yoqtirishmayapti degan signal ([/uz/stickiness](/uz/stickiness)).
- **LTV** to‘g‘ridan-to‘g‘ri retention’ga bog‘liq: oylik churn 3% bo‘lganda o‘rtacha mijozlik muddati ≈ 1 / 0.03 ≈ 33 oy, 6% da esa ≈ 17.

## Retention hisoblashdagi 6 ta odatiy xato

### 1. Yangi mijozlarni ayirmaslik
Eng keng tarqalgan xato. Agar suratda yangilar qolib ketsa, retention 100% dan oshib ketishi mumkin — va mijozlar ketishi ko‘rinmay qoladi.

### 2. Davrlarni aralashtirish
Oylik retention 97% va yillik 69% — bu bitta kompaniya. Har doim davrni ko‘rsating va oylik raqamlarni boshqalarning yillik raqamlari bilan solishtirmang.

### 3. «Faollik»ni login bo‘yicha hisoblash
Foydalanuvchi kirdi va hech narsa qilmadi — bu ushlab qolish emas. Asosiy harakatni belgilang (hisobot yubordi, buyurtma berdi, trek tingladi) va retention’ni shu bo‘yicha hisoblang.

### 4. Barcha kogortalarni birga o‘rtachalash
Butun baza bo‘yicha o‘rtacha retention trendni yashiradi. Agar yangi kogortalar eskilaridan yomonroq ushlanib qolsa — mahsulot yoki trafik sifati yomonlashyapti, o‘rtacha esa buni ko‘rsatmaydi.

### 5. Logotiplar va pulni adashtirish
Logo retention (qancha mijoz qoldi) va revenue retention (qancha tushum qoldi) farq qilishi mumkin. Bitta yirik mijozning ketishi logo retention’ni deyarli qimirlatmaydi, lekin tushumga zarba beradi.

### 6. Juda kichik kogorta
50 kishilik kogorta bo‘yicha retention — shovqin. Mahsulot qarorlari uchun bir necha yuz foydalanuvchidan iborat kogortalarga tayaning yoki haftalarni oylarga birlashtiring.

## Retention’ni qanday oshirish mumkin: 4 ta usul

- **«Aha-moment»gacha onboarding.** Mijozlar ketishining katta qismi dastlabki kunlarda sodir bo‘ladi. Birinchi qiymatgacha bo‘lgan yo‘lni qisqartiring — bu odatda D1 va D7 ning eng tez o‘sishini beradi.
- **Odat va triggerlar.** Marketing jadvaliga emas, foydalanuvchining real harakatiga bog‘langan bildirishnomalar va xatlar.
- **Trafik sifati ustida ishlash.** Arzon jalb qilinadigan kanallar ko‘pincha yomonroq ushlanib qoladigan foydalanuvchilarni olib keladi. Retention’ni manbalar bo‘yicha hisoblang.
- **Erta ketish signallari.** Ketishdan 2–4 hafta oldin faollikning pasayishi — hali aralashish mumkin bo‘lgan payt. Batafsil — [SaaS’da mijozlar ketishini qanday kamaytirish](/uz/blog/churn-reduction-saas) maqolasida.

## Ko‘p beriladigan savollar

### Qanday retention yaxshi hisoblanadi?
Soha va ta’rifga bog‘liq. SaaS uchun D30 da 85% dan yuqori akkauntlarni ushlab qolish yaxshi hisoblanadi, mobil ilovalar uchun — D30 8% dan yuqori, e-commerce uchun — 90 kun ichida 40% dan ortiq takroriy xaridorlar. Kalkulyatorning universal mo‘ljali — davr uchun 60% dan yuqori.

### Retention churn’dan nimasi bilan farq qiladi?
Bu bitta davr uchun bitta metrikaning ikki tomoni: retention qancha qolganini, churn — qancha ketganini ko‘rsatadi. Oyiga retention 97% = oyiga churn 3%.

### Retention’ni qanchalik tez-tez hisoblash kerak?
Har kuni foydalaniladigan mahsulot uchun — haftalik kogortalar bo‘yicha D1/D7/D30. Obuna biznesi uchun — to‘lovchi akkauntlar bo‘yicha har oy. E-commerce uchun — takroriy xaridlar ulushi orqali har chorakda.

### Retention 100% dan katta bo‘lishi mumkinmi?
Mijozlar (logo) retention’i — yo‘q. Agar 100% dan ko‘p chiqqan bo‘lsa, ehtimol yangi mijozlarni ayirmagansiz. 100% dan ko‘p faqat tushumni ushlab qolishda — NRR’da upsell’lar hisobiga bo‘ladi.

## Xulosa

Retention — unit-iqtisodiyotning poydevori. Uni to‘g‘ri hisoblang (yangi mijozlarsiz, asosiy harakat bo‘yicha, kogortalar bo‘yicha), faqat o‘z sohangiz normasi bilan solishtiring va egri chiziq plato’ga chiqyaptimi — kuzating. Qolgan hamma narsa — LTV, CAC qoplanishi, NRR — shu raqam ustiga quriladi.

**Retention’ingizni quyidagi kalkulyatorda hisoblang** — u tanlangan soha uchun baho ko‘rsatadi. Agar barcha metrikalar formulalari va chegaralari bir joyda kerak bo‘lsa — bepul [69 ta metrika bo‘yicha PDF-shpargalka](/benchmarks)ni yuklab oling.

---

### Qo‘shimcha resurslar

- [/uz/retention](/uz/retention) — retention rate kalkulyatori
- [/uz/retention_aarrr](/uz/retention_aarrr) — AARRR voronkasidagi retention (Day-N kogortalar)
- [/uz/churn](/uz/churn) — churn kalkulyatori
- [/uz/nrr](/uz/nrr) — Net Revenue Retention
- [/blog/dau-mau-stickiness](/blog/dau-mau-stickiness) — DAU/MAU va stickiness (rus tilida)
