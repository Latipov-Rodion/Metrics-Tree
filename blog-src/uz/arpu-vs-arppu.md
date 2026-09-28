---
title: ARPU va ARPPU nima — farqi nimada, formulalar va sohalar bo‘yicha normalar
description: ARPU = tushum / faol foydalanuvchilar, ARPPU = tushum / to‘lovchilar. Ular to‘lovchilar ulushi orqali qanday bog‘langan, ilova va SaaS uchun hisoblash misoli, normalar va odatiy xatolar.
date: 2026-09-21
keywords: arpu nima, arppu nima, arpu va arppu farqi, arpu formulasi, arpu qanday hisoblanadi, foydalanuvchiga o‘rtacha daromad, to‘lovchi foydalanuvchiga daromad
embed: arpu
---

# ARPU va ARPPU nima — farqi nimada, formulalar va sohalar bo‘yicha normalar

ARPU va ARPPU bitta harf bilan farq qiladi, lekin turli savollarga javob beradi. ARPU — har bir faol foydalanuvchi o‘rtacha qancha pul keltiradi. ARPPU — haqiqatan to‘lov qilgan har bir foydalanuvchi qancha keltiradi. Ularni adashtirish — monetizatsiyani ham, ruxsat etilgan CAC’ni ham noto‘g‘ri baholash demakdir.

## Formulalar

**ARPU = Davr tushumi / Davrdagi faol foydalanuvchilar**

**ARPPU = Davr tushumi / Davrdagi to‘lovchi foydalanuvchilar**

Ularni to‘lovchilar ulushi — **PUR (Paying User Rate)** bog‘laydi:

**ARPU = ARPPU × PUR**

Bu monetizatsiyaning asosiy tenglamasi. ARPU’ni ikki yo‘l bilan oshirish mumkin: to‘lovchilarni ko‘proq to‘lashga undash (ARPPU o‘sadi) yoki ko‘proq odamni to‘lovchiga aylantirish (PUR o‘sadi). Bular turli jamoalar uchun turli vazifalar.

## Hisoblash misoli: mobil ilova

Freemium-ilova, bir oy:
- Faol foydalanuvchilar (MAU): **50 000**
- To‘lovchilar: **1 500** (PUR = 3%)
- Tushum: **$45 000**

ARPU = 45 000 / 50 000 = **$0.90**
ARPPU = 45 000 / 1 500 = **$30**

Tekshiruv: $30 × 3% = $0.90 ✓

Endi gipoteza: arzon boshlang‘ich paket joriy qilamiz. To‘lovchilar **2 000** ga yetadi (PUR 4%), lekin ARPPU **$26** gacha tushadi, chunki yangi to‘lovchilarning bir qismi faqat boshlang‘ich paketni oladi.

Tushum = 2 000 × $26 = $52 000 → ARPU = **$1.04** (+15.6%)

ARPPU tushdi, lekin biznes ko‘proq pul ishladi. Faqat ARPPU’ga qaralsa, tajriba muvaffaqiyatsiz ko‘ringan bo‘lardi. Aynan shuning uchun bu metrikalar doim birga o‘qiladi.

## Hisoblash misoli: B2B SaaS

Bepul tarifi bor servis:
- Faol akkauntlar: **800**, ulardan **200** tasi free’da
- To‘lovchilar: **600**
- MRR: **$48 000**

ARPPU = 48 000 / 600 = **$80**/oy
ARPU = 48 000 / 800 = **$60**/oy

B2B’da ARPPU mohiyatan ARPA’ga (akkauntning o‘rtacha cheki) teng va taxminan ACV / 12. U upsell’lar, o‘rinlar (seats) va yuqori tariflarga o‘tish hisobiga o‘sadi.

## Sohalar bo‘yicha ARPU va ARPPU normalari

Mo‘ljallar MetricTree kalkulyatorlarining sohalar bo‘yicha chegaralari bilan mos keladi:

| Soha | ARPU (oyiga) | ARPPU |
|-----------|----------------|-------|
| **B2B SaaS** | B2B: $50–$500, SMB: $20–$100, Enterprise: >$500 | ≈ ACV / 12; upsell va tariflar orqali o‘sadi |
| **E-commerce** | Faol xaridorga $5–$50 | ≈ AOV × to‘lovchining xarid chastotasi |
| **Mobil ilovalar** | Free-to-play: $0.05–$5, pullik ilovalar: $1–$20 | F2P: to‘lovchilarda $5–$50 |
| **Media** | Obuna: $3–$15, reklama: $0.5–$5 | Tarif narxiga yaqin |

Bizning misolda ARPU $0.90 va ARPPU $30 bo‘lgan ilova — ikkala metrika bo‘yicha ham F2P uchun norma doirasida.

ARPU kalkulyatorining asosiy shkalasi (<$10 past, $10–$50 o‘rtacha, >$50 yuqori) obuna modellariga mo‘ljallangan. Freemium-ilovalar va reklama orqali monetizatsiya qilinadigan media uchun jadvaldagi soha mo‘ljalidan foydalaning — aks holda normal F2P-mahsulot «yomon» ko‘rinadi.

## Qachon ARPU’ga, qachon ARPPU’ga qarash kerak

| Savol | Metrika |
|--------|---------|
| Foydalanuvchini jalb qilish uchun qancha to‘lay olaman? | **ARPU** (va uning asosidagi LTV) |
| Pricing va upsell’lar ishlayaptimi? | **ARPPU** |
| Paywall va free → paid konversiyasi ishlayaptimi? | **PUR** |
| Monetizatsiyani reklama modeli bilan solishtirish | **ARPU** (reklama faqat to‘lovchilarni emas, hammani monetizatsiya qiladi) |
| Mobil o‘yin, kunlik dinamika | **ARPDAU** — [/uz/arpdau](/uz/arpdau) ga qarang |

CAC ARPPU bilan emas, butun kogortaning ARPU’si va LTV’si bilan solishtiriladi: siz har bir foydalanuvchini jalb qilish uchun to‘laysiz, to‘lovchilar esa hamma emas.

## Odatiy xatolar

### 1. Faollar o‘rniga ro‘yxatdan o‘tganlar
Agar maxrajda butun davr mobaynida ro‘yxatdan o‘tganlarning hammasi bo‘lsa, ARPU sun’iy ravishda past bo‘ladi va «o‘lik» akkauntlar bazasi o‘sgani uchungina tushib boradi.

### 2. Surat va maxrajda turli davrlar
MAU’ga bo‘lingan yillik tushum ma’nosiz raqam beradi. Tushum va foydalanuvchilar — bitta davr uchun.

### 3. Takrorlangan to‘lovchilar
Uchta xarid qilgan foydalanuvchi — uchta emas, bitta to‘lovchi. Dublikatlar ARPPU’ni kamaytiradi va PUR’ni oshirib ko‘rsatadi.

### 4. Net o‘rniga gross
Mobil ilovalarda ilova do‘konlari komissiya oladi (odatda 15–30%), ustiga qaytarishlar va soliqlar. O‘zini oqlash bo‘yicha qarorlar uchun sof tushumdan foydalaning.

### 5. «Kitlar» o‘rtachani buzadi
F2P’da to‘lovchilarning kichik ulushi tushumning asosiy qismini berishi mumkin. Faqat o‘rtachaga emas, mediana va segmentlar bo‘yicha ARPPU taqsimotiga qarang.

### 6. Turli PUR’da ARPPU’ni solishtirish
PUR 1% da ARPPU $50 va PUR 5% da ARPPU $20 — ikkinchi model foydalanuvchiga ikki baravar ko‘p keltiradi ($1.00 ga qarshi $0.50). ARPPU’ni PUR’siz solishtirib bo‘lmaydi.

## ARPU’ni qanday oshirish mumkin

- **PUR’ni oshirish:** sinov davri, boshlang‘ich paket, qiymat paydo bo‘lgan paytdagi tushunarli paywall.
- **ARPPU’ni oshirish:** tariflar zinapoyasi, yillik rejalar, upsell va add-on’lar, narxlarni qayta ko‘rib chiqish.
- **Ikkinchi manba qo‘shish:** to‘lamaydiganlar uchun reklama, hamkorlik takliflari.
- **Ushlab qolish:** uzoqroq qoladigan foydalanuvchi to‘lovchiga aylanishga ulguradi. ARPU va retention birga o‘sadi.

## ARPU, LTV va ruxsat etilgan CAC

ARPU — LTV hisobidagi birinchi g‘isht. Soddalashtirilgan holda:

**LTV ≈ ARPU × yalpi marja / oylik churn**

Misol: oyiga ARPU $60, marja 80%, churn 3% → LTV ≈ 60 × 0.8 / 0.03 = **$1 600**. LTV > 3× CAC mo‘ljalida ruxsat etilgan CAC — taxminan $530.

Birinchi misoldagi ARPU $0.90 bo‘lgan freemium-ilova uchun xuddi shu hisob-kitob bir necha dollarlik LTV beradi — shuning uchun F2P’da reklamaning o‘zini oqlashini o‘rtacha bo‘yicha emas, kogortalar bo‘yicha hisoblash juda muhim. Hisobni [/uz/ltv](/uz/ltv) kalkulyatorida tekshirish mumkin.

## Ko‘p beriladigan savollar

### ARPU oyiga yoki yiliga hisoblanadimi?
Istalgan davr uchun, lekin surat va maxraj bitta davr uchun bo‘lishi kerak. Obuna mahsulotlarida oylik ARPU qabul qilingan, mobil o‘yinlarda — kunlik ARPDAU ham.

### Qaysi biri katta — ARPU yoki ARPPU?
ARPPU har doim ARPU’dan katta yoki unga teng, chunki to‘lovchilar faollardan ko‘p emas. Ular faqat barcha foydalanuvchilar to‘laganda teng bo‘ladi (PUR = 100%).

### ARPU ARPA’dan nimasi bilan farq qiladi?
ARPA (Average Revenue per Account) foydalanuvchiga emas, kompaniya akkauntiga hisoblanadi. Bitta akkauntda ko‘p o‘rin bo‘ladigan B2B’da ARPA — foydaliroq metrika.

### ARPU uchun qaysi tushumni olish kerak — reklama bilan yoki reklamasiz?
Davr mobaynida foydalanuvchilar keltiradigan butun tushumni: obunalar, xaridlar va reklama. Agar monetizatsiya modellarini ajratmoqchi bo‘lsangiz, xaridlardan ARPU va reklamadan ARPU’ni alohida hisoblang — yig‘indisi umumiy ARPU’ni beradi.

## Xulosa

ARPU butun auditoriya monetizatsiyasini, ARPPU — to‘lovchilar monetizatsiyasi chuqurligini, PUR — kengligini ko‘rsatadi. Uchalasiga doim birga qarang: bir metrikaning boshqasi hisobiga o‘sishi — odatiy hol, va faqat ARPU biznes ko‘proq pul ishlay boshladimi-yo‘qligini ko‘rsatadi.

**ARPU’ingizni quyidagi kalkulyatorda hisoblang**, ARPPU’ni esa — [/uz/arppu](/uz/arppu) sahifasida. 69 ta metrika formulalari va chegaralari jamlangan bepul [PDF-shpargalka](/benchmarks) monetizatsiya dashboard’ini yig‘ayotganda asqotadi.

---

### Qo‘shimcha resurslar

- [/uz/arpu](/uz/arpu) — ARPU kalkulyatori
- [/uz/arppu](/uz/arppu) — ARPPU kalkulyatori
- [/uz/arpdau](/uz/arpdau) — mobil o‘yinlar uchun ARPDAU
- [/uz/ltv](/uz/ltv) — ARPU asosidagi LTV
- [/blog/arpdau-mobile-games](/blog/arpdau-mobile-games) — mobil o‘yinlar monetizatsiyasi (rus tilida)
