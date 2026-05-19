# 📋 PROJECT STATE — Portfolio Website
> **Last Updated:** 2026-05-19 | **Status:** Redesign In Progress (branch: `redesign`) 🚀

---

## 🎯 Tujuan Proyek

Membangun situs web **portofolio multi-halaman** yang profesional dan berkualitas tinggi untuk:
- **Nama:** Khanif Alfan
- **Identitas:** UI/UX Designer
- **Lokasi:** Sleman, DI Yogyakarta
- **Email:** hallo.khanif@gmail.com
- **Ketersediaan:** Open to new projects & opportunities

---

## 🛠️ Tech Stack

| Komponen | Teknologi | Versi |
|---|---|---|
| Framework | Next.js | 14.x (App Router) |
| UI Library | **Chakra UI** | **v2.10.9** ⚠️ PENTING: harus v2, bukan v3 |
| Chakra Next.js | @chakra-ui/next-js | v2.4.2 |
| Animasi | Framer Motion | v11.x |
| Ikon | Lucide React | Latest (brand icons dihapus!) |
| RSS Feed | rss-parser | Latest |
| Bahasa | TypeScript | Latest |
| Font | **Syne + DM Sans + JetBrains Mono** | via Google Fonts (redesign branch) |

### ⚠️ Catatan Kritis Tech Stack
1. **Chakra UI HARUS v2** — v3 memiliki breaking API yang berbeda total (`extendTheme`, `useColorMode`, `Drawer`, semua berubah)
2. **Lucide React tidak punya brand icons** — `Linkedin`, `Github`, `Dribbble`, `Twitter` = `undefined`. Sudah dibuat custom SVG di `components/SocialIcons.tsx`
3. **Jangan pakai `useColorModeValue` di dalam `.map()` callback** — melanggar React Rules of Hooks
4. Next.js `<Image>` tidak digunakan secara native jika membentrokkan design props dengan Chakra, kami menggunakan `<Image>` Chakra. Konfigurasi `next.config.mjs` sudah mendukung `remotePatterns` untuk Medium.

---

## 📁 Struktur Proyek

```
/Users/bsi/Downloads/web-porto-v1/
├── CONTEXT.md                    ← Dokumen requirement asli klien
├── AboutMe.md                    ← Data profil riil Khanif Alfan
├── Image/
│   ├── Logo 1.png               ← Logo (orange on black)
│   ├── Logo 2.png               ← Logo (orange on white)
│   ├── Logo 3.png               ← Logo (white on black)
│   └── Foto Profile.png         ← Foto profil orisinal
└── app-scaffold/                 ← 🏠 ROOT PROJECT NEXT.JS
    ├── package.json
    ├── next.config.mjs
    ├── tsconfig.json
    ├── public/
    │   └── images/
    │       ├── logo-dark.png    ← Logo 1
    │       ├── logo-light.png   ← Logo 2
    │       ├── logo-white.png   ← Logo 3
    │       └── profile-editorial.png ← Foto profil hasil olah editorial
    ├── lib/
    │   ├── theme.ts             ← Chakra UI custom theme
    │   ├── providers.tsx        ← ChakraProvider wrapper
    │   └── data.ts              ← Data riil (WORKS, SERVICES, STATS, PROFILE, EXPERIENCE)
    ├── components/
    │   ├── Navbar.tsx           ← Sticky navbar + mobile drawer
    │   ├── Footer.tsx           ← Footer dengan CTA banner
    │   ├── PageWrapper.tsx      ← Layout wrapper (Navbar + Footer)
    │   ├── FadeIn.tsx           ← Scroll-triggered animation component
    │   └── SocialIcons.tsx      ← ⚠️ Custom SVG brand icons (LinkedIn, GitHub, Dribbble, Twitter)
    └── app/
        ├── layout.tsx           ← Root layout (Google Fonts, SEO metadata personal)
        ├── page.tsx             ← Homepage (Hero foto riil, About, Experience, Works grid, Services, Blog)
        ├── api/medium/route.ts  ← API Endpoint fetch RSS Medium
        ├── work/
        │   ├── page.tsx         ← Portfolio grid page
        │   └── [slug]/
        │       ├── page.tsx     ← Case study (server component, generateStaticParams)
        │       └── CaseStudyClient.tsx  ← Case study UI (client component)
        ├── services/
        │   └── page.tsx         ← Services dengan process steps
        ├── blog/
        │   ├── page.tsx         ← Blog (server, fetch `/api/medium`)
        │   └── BlogClient.tsx   ← Blog UI list artikel Medium
        ├── lab/
        │   └── page.tsx         ← Interactive Design Lab (tab playground)
        └── contact/
            └── page.tsx         ← Contact form + ketersediaan
```

---

## 📄 Halaman & Status (Tahap Akhir)

| Route | File | Status | Fitur |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ Selesai | Hero dengan foto profile editorial, About, Stats strip, Career/Experience list, Works grid, Blog preview |
| `/work` | `app/work/page.tsx` | ✅ Selesai | Filter by tag, featured card (menggunakan real Image), masonry grid |
| `/work/[slug]` | `app/work/[slug]/` | ✅ Selesai | Case studies dinamis (mendukung Custom Content Array, Gallery, Lightbox Zoom, dan Hero Cover Image) |
| `/services` | `app/services/page.tsx` | ✅ Selesai | Layanan, pricing, process 6 steps |
| `/blog` | `app/blog/` | ✅ Selesai | Integrasi Medium API (`/api/medium`), search, filter kategori live |
| `/lab` | `app/lab/page.tsx` | ✅ Selesai | Design playground |
| `/contact` | `app/contact/page.tsx` | ✅ Selesai | Ketersediaan di-update untuk freelance |

---

## 📊 Data Konten Tersinkronisasi
✅ Seluruh konten portofolio telah di-branding ulang sesuai dengan data dari `AboutMe.md`:
- Nama inisial di-update jadi **Khanif Alfan**.
- **Skillset & Experience** telah disinkronisasikan ke `lib/data.ts` (menggunakan referensi "5+ tahun pengalaman").
- **API Medium** berjalan secara real-time (`force-dynamic`) sukses menarik blog terbaru tanpa build ulang.
- **English Translation**: Seluruh konten di halaman `/work` (termasuk metadata, deskripsi panjang, caption galeri, dan teks "Coming Soon") pada file `lib/data.ts` telah diterjemahkan ke bahasa Inggris secara menyeluruh.
- **Mediverse Case Study** telah diintegrasikan secara utuh mengikuti struktur Design Thinking (Project Overview, Empathize, Define, Ideate, Prototype, Test, Outcomes) lengkap dengan galeri aset asli.

---

## 🐛 Bug & Perbaikan Terakhir
- **Duplicate Button Import**: Memperbaiki error duplikasi import komponen `Button` di `CaseStudyClient.tsx` pasca refactor.
- **Hydration Failed (Nested `<a>`)**: Kesalahan pembungkusan tag `<a>` di dalam `<Link>` yang memicu hydration error pada SSR.
- **Medium API Image Loading**: Mengatur konfigurasi `rss-parser` kustom di endpoint untuk menarik image dan thumbnail dari meta konten secara reliabel.
- **Data Placeholder**: Semua dummy text (Deri Kurniawan) telah dibersihkan di Navbar, Footer, Contact, Homepage, dan Layout SEO.
- **Strict Linting & Build Fixes**: Membersihkan puluhan unused imports, memperbaiki pelanggaran Hooks (`useColorModeValue`), dan mendefinisikan interface TypeScript yang ketat (`BlogPost`, `Work`) untuk menjamin kelulusan `npm run build` di Vercel.
- **Vercel Deployment Discrepancy**: Memperbaiki isu di mana Vercel terus gagal build akibat perubahan lokal (seperti `BlogPost` interface dan perbaikan linting) yang belum ter-commit dan ter-push ke GitHub.
- **Git Submodule Issue**: Memperbaiki repositori yang terdeteksi sebagai submodule sehingga file di dalam `app-scaffold` dapat dibaca secara utuh oleh GitHub dan Vercel.
- **Email Priority**: Menambahkan header `Importance: high` dan subjek `[URGENT]` pada API Contact agar pesan klien masuk ke inbox utama.

---

## 🚀 Redesign Progress (Branch: `redesign`)

### 🎨 Tema: "Orbital Designer" — Cosmic Space UI
Berdasarkan `PRD_Redesign.md`. Semua perubahan di branch terpisah, tidak menyentuh `main`.

| Step | Status | Keterangan |
|------|--------|------------|
| Step 1: Foundation & Theming | ✅ Done | Fonts, globals.css (CSS vars + keyframes), Chakra theme baru |
| Step 2: Parallax Assets | ✅ Done | StarField, NebulaLayer, OrbitalRings, CosmicParticles, ParallaxContainer |
| Step 3: Navbar & Footer | ✅ Done | Glass navbar KA. logo, Moon/Sun toggle, gradient CTA, footer shimmer |
| Step 4: Hero & About | ✅ Done | Bento grid about, word reveal, count up |
| Step 5: Experience & Works | ✅ Done | Timeline with gradient line, asymmetric grid |
| Step 6: Services & CTA | ✅ Done | Cosmic 2x2 grid, orbital numbers |

### 📁 File Baru (branch: redesign)
- `app/globals.css` — CSS variables cosmic, semua keyframes
- `components/parallax/StarField.tsx` — 3-layer SVG bintang dengan twinkle
- `components/parallax/NebulaLayer.tsx` — 3 SVG nebula blob beranimasi
- `components/parallax/OrbitalRings.tsx` — Ring elips berputar CW/CCW
- `components/parallax/CosmicParticles.tsx` — Canvas particle system
- `components/parallax/ParallaxContainer.tsx` — Multi-layer scroll parallax
- `components/ui/CustomCursor.tsx` — Custom cursor dot + ring (desktop)

---

## 📝 TODO / Pengembangan Selanjutnya

### 🔴 HIGH PRIORITY
- [ ] Menyelesaikan entry data portofolio lain selain Mediverse (misal: K24Klik, dsb).

### 🟡 MEDIUM PRIORITY
- [x] **Calendly Integration** — URL Calendly telah ditambahkan.
- [x] **Contact Form Backend** — Integrasi Email via `resend` SDK di `app/api/contact`. Formulir berjalan nyata dengan subject [URGENT].
- [x] **Sitemap & robots.txt** — Berhasil dibuat secara native menggunakan fitur App Router.

### 🟢 LOW PRIORITY
- [x] **Analytics** — Vercel Analytics dan Speed Insights telah terpasang.
- [x] **OG image** — Generator gambar dinamis (Global & Case Study) aktif.
- [x] **Animasi transisi halaman** — Transisi framer-motion halus antar rute.
- [x] **Favicon** — Menggunakan logo kustom Khanif Alfan.

---

## 🚀 Cara Menjalankan

```bash
# ⚠️ WAJIB masuk ke subfolder app-scaffold dulu!
cd /Users/bsi/Downloads/web-porto-v1/app-scaffold

# Jalankan dev server
npm run dev

# Akses di browser
# http://localhost:3000 (atau port 3001)
```

Untuk deploy ke Vercel:
```bash
cd /Users/bsi/Downloads/web-porto-v1/app-scaffold
npx vercel --prod
```
