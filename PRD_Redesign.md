# PRD: Portfolio Redesign — Khanif Alfan
**Version:** 1.0  
**Date:** May 2026  
**Author:** Khanif Alfan  
**Target URL:** https://hallokhanif.vercel.app/  
**Stack Assumption:** Next.js (App Router), Chakra UI v2, Framer Motion  

---

## 1. Executive Summary

Portfolio website Khanif Alfan saat ini memiliki struktur konten yang baik dan informasi yang lengkap. Tujuan redesign ini adalah **meningkatkan visual impact dan interaction quality** secara drastis — menghadirkan pengalaman immersive bertema luar angkasa dengan parallax layering, glass morphism, dan dark aesthetic yang premium, sambil tetap mempertahankan semua konten yang ada dan mendukung **dark/light mode toggle**.

Hasil akhir yang diharapkan: ketika seseorang membuka portfolio ini, mereka langsung merasakan *"ini bukan portfolio biasa"* — sebuah pengalaman yang terasa seperti menjelajahi galaksi sambil membaca profil seorang UI/UX Designer kelas dunia.

---

## 2. Goals & Non-Goals

### ✅ Goals
- Redesain visual total dengan tema **Space · Dark · Glass · Cosmic**
- Implementasi **parallax multi-layer** (idle ambient animation + scroll-driven parallax)
- Membuat semua **parallax assets secara programatik** (SVG/Canvas/CSS — tidak butuh file gambar eksternal)
- Mempertahankan **semua konten existing** (teks, profil, statistik, experience, projects, services)
- Tetap mendukung **Dark Mode / Light Mode toggle**
- Performa tetap baik (Lighthouse score ≥ 85)

### ❌ Non-Goals
- Tidak mengubah arsitektur routing/halaman yang ada
- Tidak menambah atau menghapus section utama
- Tidak mengganti stack teknologi
- Tidak mengganti konten teks (nama, bio, experience, dll.)

---

## 3. Design Direction

### 3.1 Concept: "Orbital Designer"
Khanif adalah seorang desainer yang bekerja di frontier teknologi. Visualnya harus mencerminkan itu: **seseorang yang bekerja di luar angkasa ide**, bukan di kantor biasa. Setiap elemen UI terasa seperti floating di vakum luar angkasa — ringan, presisi, dan misterius.

### 3.2 Moodboard Keywords
- Deep space nebula (ungu gelap, biru tua, teal, hitam pekat)
- Glassmorphism panel mengambang
- Star field parallax berlayer
- Glowing accents (aurora borealis color palette)
- Orbital ring decorations
- Cosmic dust particles
- Grid/constellation lines

### 3.3 Color System

```
/* Dark Mode (Default) */
--color-void:        #04050A   /* Background utama — hitam ruang angkasa */
--color-deep:        #080C18   /* Background layer 2 */
--color-nebula-1:    #1A0A2E   /* Ungu nebula dalam */
--color-nebula-2:    #0D1B3E   /* Biru galaksi */
--color-aurora-1:    #FE4820   /* Primary accent — bergundy */
--color-aurora-2:    #FF9000   /* Secondary accent — orange */
--color-aurora-3:    #FFD700   /* Tertiary accent — gold (untuk badge/tag) */
--color-star:        #E8EAFF   /* Teks utama — putih kebiruan */
--color-stardust:    #94A3B8   /* Teks sekunder */
--color-glass-bg:    rgba(255, 255, 255, 0.04)  /* Glass panel background */
--color-glass-border: rgba(255, 255, 255, 0.08) /* Glass panel border */
--color-glow-violet: rgba(124, 58, 237, 0.3)    /* Violet glow/shadow */
--color-glow-cyan:   rgba(6, 182, 212, 0.3)     /* Cyan glow/shadow */

/* Light Mode */
--color-void:        #F0F4FF   /* Background — putih kebiruan lembut */
--color-deep:        #E8EEFF
--color-nebula-1:    #EDE9FE   /* Ungu terang */
--color-nebula-2:    #DBEAFE   /* Biru terang */
--color-aurora-1:    #FE4820   /* Primary accent — tetap sama */
--color-aurora-2:    #FF9000   /* Orange */
--color-aurora-3:    #FFD700   /* Orange keemasan */
--color-star:        #1E1B4B   /* Teks utama — indigo gelap */
--color-stardust:    #4C5980   /* Teks sekunder */
--color-glass-bg:    rgba(255, 255, 255, 0.6)
--color-glass-border: rgba(124, 58, 237, 0.15)
```

### 3.4 Typography

```
/* Display / Heading */
font-family: 'Syne', sans-serif;
/* digunakan untuk: H1, H2, section titles, nama */
/* karakter: geometric, modern, sedikit futuristic */

/* Body / UI Text */
font-family: 'DM Sans', sans-serif;
/* digunakan untuk: body text, labels, nav, metadata */
/* karakter: clean, humanist, readable di ukuran kecil */

/* Monospace / Accent */
font-family: 'JetBrains Mono', monospace;
/* digunakan untuk: tahun, kode snippet, badge teknis, angka statistik */
```

---

## 4. Parallax Asset Specification

> Semua aset dibuat **secara programatik** menggunakan SVG inline, Canvas API, atau CSS. Tidak ada dependency gambar eksternal kecuali foto profil yang sudah ada.

### 4.1 Layer Architecture (Z-Index dari belakang ke depan)

| Layer | Nama | Z-Index | Kecepatan Parallax | Deskripsi |
|-------|------|---------|-------------------|-----------|
| L0 | `void-bg` | 0 | static | Gradient radial hitam pekat ke biru gelap |
| L1 | `deep-stars` | 1 | 0.1x scroll | 300+ bintang kecil (titik putih, opacity rendah) |
| L2 | `nebula-clouds` | 2 | 0.2x scroll | 2-3 blob SVG gradient ungu/biru, blur tinggi |
| L3 | `mid-stars` | 3 | 0.35x scroll | 150+ bintang medium, beberapa berkedip |
| L4 | `constellation` | 4 | 0.45x scroll | Garis-garis konstelasi tipis, opacity rendah |
| L5 | `near-stars` | 5 | 0.6x scroll | 50 bintang besar, beberapa dengan glow effect |
| L6 | `orbital-rings` | 6 | 0.7x scroll | 1-2 cincin elips tipis, berputar lambat |
| L7 | `cosmic-dust` | 7 | 0.8x scroll | Particle kecil melayang (Canvas animation) |
| L8 | `content` | 10 | 1.0x scroll | Konten utama |

### 4.2 Ambient Animations (Saat Idle / Tidak Scroll)

```
/* Bintang berkedip (twinkle) */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}
/* Diterapkan ke ~20% bintang dengan animation-delay random */

/* Nebula breathing (mengembang/mengempis perlahan) */
@keyframes nebula-breathe {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
  50% { transform: scale(1.08) rotate(2deg); opacity: 0.6; }
}
/* Duration: 8-12 detik, easing: ease-in-out */

/* Orbital ring rotation */
@keyframes orbit-spin {
  from { transform: rotate(0deg) rotateX(75deg); }
  to { transform: rotate(360deg) rotateX(75deg); }
}
/* Duration: 30 detik, linear, infinite */

/* Particle drift */
@keyframes particle-drift {
  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
}
```

### 4.3 Implementasi Canvas Particles

```javascript
// File: components/parallax/CosmicParticles.jsx
// Spesifikasi Canvas Particle System:

const PARTICLE_CONFIG = {
  count: 80,           // Jumlah partikel aktif
  minSize: 0.5,        // Ukuran minimum (px)
  maxSize: 2.5,        // Ukuran maksimum (px)
  minSpeed: 0.1,       // Kecepatan minimum drift
  maxSpeed: 0.4,       // Kecepatan maksimum drift
  colors: [
    'rgba(124, 58, 237, 0.8)',   // violet
    'rgba(6, 182, 212, 0.8)',    // cyan
    'rgba(255, 255, 255, 0.6)',  // white
    'rgba(16, 185, 129, 0.6)',   // emerald
  ],
  connectionDistance: 100,       // Jarak max untuk garis konstelasi
  connectionOpacity: 0.15,       // Opacity garis konstelasi
}
// Particles bergerak secara random, wrap-around di tepi canvas
// Mouse proximity effect: partikel menghindari kursor (repel radius: 80px)
```

### 4.4 SVG Nebula Asset

```
Nebula 1 (kiri atas):
- Shape: radialGradient blob tidak beraturan
- Color: #7C3AED (center, opacity 0.6) → transparent (outer)
- Size: ~600x600px viewBox
- Filter: feGaussianBlur stdDeviation="40"
- Posisi: top: -100px, left: -200px
- Animasi: nebula-breathe, 10s, ease-in-out, infinite

Nebula 2 (kanan bawah hero):
- Shape: radialGradient blob
- Color: #06B6D4 (center, opacity 0.4) → transparent
- Size: ~800x500px viewBox  
- Filter: feGaussianBlur stdDeviation="50"
- Posisi: top: 200px, right: -300px
- Animasi: nebula-breathe, 14s ease-in-out infinite, delay: -7s

Nebula 3 (tengah, subtle):
- Shape: irregular polygon blob
- Color: linear #1A0A2E → #0D1B3E
- Size: ~400x400px
- Filter: feGaussianBlur stdDeviation="30"
- Posisi: muncul setiap 2-3 section sebagai atmosfer background
```

---

## 5. Section-by-Section Redesign Spec

### 5.1 Navigation Bar

**Current:** Simple nav dengan logo, links, dan CTA button.

**Redesign:**
- **Background:** `glassmorphism` — `backdrop-filter: blur(20px)` + `background: var(--color-glass-bg)` + `border-bottom: 1px solid var(--color-glass-border)`
- **Logo:** Teks "KA" dalam typeface Syne bold, dengan dot glowing violet di akhir
- **Nav links:** Teks DM Sans, hover state dengan underline yang tumbuh dari tengah + glow teks violet
- **CTA "Let's Talk":** Tombol dengan border gradient violet→cyan, background glass, hover: background terisi gradient
- **Dark/Light toggle:** Custom switch berbentuk bulan (dark) ↔ matahari (light) dengan animasi smooth
- **Scroll behavior:** Saat scroll, navbar menjadi lebih blur dan border lebih visible (Intersection Observer)
- **Mobile:** Hamburger menu membuka overlay glass panel dari kanan dengan slide animation

### 5.2 Hero Section

**Current:** Heading besar, subtext, 2 CTA buttons, 4 statistik, foto profil editorial.

**Redesign:**
```
Layout: Full viewport height (100dvh)
Background: Parallax layer stack L0-L7 aktif penuh

Konten Layout:
- Left side (60%): Text content
- Right side (40%): Profile photo dalam orbit frame

Headline "Design. Think. Solve."
- Font: Syne ExtraBold, 72-96px
- Animasi masuk: tiap kata muncul dari bawah dengan stagger delay
- Effect: gradient text violet→cyan pada kata "Solve."
- Subtle glitch animation pada interval random (setiap 8-15 detik)

Subtext:
- Font: DM Sans, 18px, --color-stardust
- Animasi: fade-in + slide-up setelah headline selesai

CTA Buttons:
- "View My Work": Tombol primary — gradient violet→cyan, shadow glow
- "Let's Talk": Tombol secondary — glass border, transparent
- Hover: tombol primary reverse gradient + scale(1.03); secondary fill dengan glass lebih opaque

Statistics (15+, 5+, 3, 100%):
- Disusun horizontal di bawah CTA
- Angka: font JetBrains Mono, animasi count-up saat pertama kali visible
- Separator: titik glow kecil

Profile Photo Frame:
- Foto existing (/images/profile-editorial.png) dimasukkan ke frame circular/hexagonal
- Frame: dua ring berputar lambat (orbital rings SVG)
- Ring luar: garis solid tipis violet, berputar searah jarum jam
- Ring dalam: garis dashed cyan, berputar berlawanan arah
- Background foto: radial gradient violet gelap
- Floating badge "Open to Opportunities" dengan dot pulse animation

Status "Open to Opportunities":
- Pill badge dengan dot hijau pulse
- Float di sekitar photo frame
```

### 5.3 About Section

**Current:** 2 kolom — teks about di kiri, statistik di kanan.

**Redesign:**
```
Layout: Bento-grid style cards, semua glass panel

Card utama "About Me":
- Glass card dengan border glow tipis
- Bio text dengan first-letter drop cap style
- Specialization, Experience, Location, Education dalam format list dengan ikon SVG minimal

Stat cards (4 buah):
- Masing-masing glass card terpisah
- Angka besar JetBrains Mono + label DM Sans
- Hover: glow lebih terang, scale(1.02)
- Background card: subtle gradient unik tiap card

Animasi scroll:
- Cards muncul dengan stagger dari bawah (Intersection Observer + Framer Motion)
- Setiap card punya slight delay berbeda
```

### 5.4 Work Experience Section

**Current:** Timeline vertikal dengan detail per job.

**Redesign:**
```
Layout: Timeline vertikal dengan garis di tengah (desktop), di kiri (mobile)

Garis timeline:
- Gradient vertikal violet→cyan→emerald
- Titik di tiap entry: circle glowing dengan warna berbeda per company
- Animated: garis seolah "terisi" dari atas ke bawah saat scroll ke section ini

Entry card:
- Glass card dengan subtle border
- Company name: Syne Bold
- Role: DM Sans Medium, --color-aurora-1
- Date badge: JetBrains Mono, glass pill
- Employment type badge (Freelance/Full Time/Internship): warna berbeda
  - Full Time: violet accent
  - Freelance: cyan accent  
  - Internship: emerald accent
- Description: DM Sans Regular, --color-stardust
- Location chip di bawah

Hover state:
- Card scale(1.02), border lebih bright
- Glow shadow sesuai warna badge employment type
```

### 5.5 Selected Works / Projects

**Current:** Grid card projects.

**Redesign:**
```
Layout: Asymmetric grid — proyek pertama featured besar (full width), sisanya 2 kolom

Featured project card:
- Full width, height: ~400px
- Image sebagai background dengan overlay gradient gelap
- Teks di atas dengan shadow untuk readability
- Tag kategori + tahun dalam glass pills
- Hover: image scale(1.05) dengan overlay lebih terang

Regular project cards:
- Glass card dengan image thumbnail
- Hover: lift effect (translateY(-8px) + shadow glow lebih besar)
- Category tag dengan warna sesuai kategori:
  - Healthcare: emerald
  - Design System: violet
  - HRIS: cyan
  - Procurement: amber

"View All" CTA:
- Tombol dengan arrow animasi →→ bergerak saat hover
```

### 5.6 Services Section

**Current:** 4 cards bernomor 01-04.

**Redesign:**
```
Layout: 2x2 grid glass cards dengan orbital number

Nomor (01, 02, 03, 04):
- Font JetBrains Mono, ukuran besar, semi-transparent (opacity 0.15)
- Diposisikan sebagai background dekoratif di pojok card

Card hover effect:
- Border glow violet
- Background berubah dari glass polos → subtle gradient
- Daftar skill items muncul dengan stagger animation (collapse → expand)

Icon per service (SVG programatik):
- UI/UX Design: ikon wireframe abstract
- Design System: ikon atom/component
- Interaction Design: ikon kurva motion path
- UX Audit: ikon magnifier dengan grid
```

### 5.7 CTA / Contact Section

**Current:** Simple banner teks + tombol.

**Redesign:**
```
Background: Konsentrasi visual parallax paling pekat di sini
- Nebula sangat bright (tapi tetap gelap)
- Lebih banyak bintang near-field
- Orbital ring besar melingkari section

Konten:
- Heading besar dengan gradient text
- Subtext availability Q3 2025
- Tombol "Start a Project": versi paling impresif dari CTA button

Efek tambahan:
- Subtle "aurora borealis" animation di belakang teks (SVG/CSS)
- Shimmer effect pada tombol
```

### 5.8 Footer

**Current:** 4 kolom — logo, navigation, social, contact.

**Redesign:**
```
Background: Sama dengan section CTA (seamless transition)
Top border: Garis gradient violet→cyan→emerald

Logo area:
- Logo teks lebih besar dengan tagline
- Social icons: hover state dengan color pop + scale

Divider bottom:
- Copyright dengan font JetBrains Mono
- "Designed & built with precision and passion" — sedikit glow effect pada kata "passion"
```

---

## 6. Interaction & Animation System

### 6.1 Scroll-Driven Parallax

```javascript
// Pendekatan: CSS scroll-timeline (modern browsers) + JS fallback

// Implementasi dengan Framer Motion useScroll + useTransform:
const { scrollY } = useScroll()

// Layer 1 (deep stars) — bergerak lambat
const layer1Y = useTransform(scrollY, [0, 1000], [0, -100])

// Layer 2 (nebula) — sedikit lebih cepat
const layer2Y = useTransform(scrollY, [0, 1000], [0, -200])

// Layer 3-5 — progresif lebih cepat
// ...

// Setiap layer di-render dalam div dengan position: fixed saat di hero,
// beralih ke relative/sticky saat meninggalkan hero
```

### 6.2 Micro-Interactions

| Element | Interaction | Animation |
|---------|-------------|-----------|
| Nav links | Hover | Underline grow dari center + teks glow |
| CTA buttons | Hover | Gradient reverse + scale(1.03) + shadow expand |
| Project cards | Hover | translateY(-8px) + border glow brighten |
| Service cards | Hover | Border glow + content reveal stagger |
| Social icons | Hover | Color pop + scale(1.15) + rotate(5deg) |
| Stat numbers | Viewport enter | Count-up animation |
| Timeline | Viewport enter | Line fills progressively, cards slide in |
| Cursor | Global | Custom cursor: dot kecil + ring mengikuti dengan delay |

### 6.3 Page Load Animation Sequence

```
0ms:    Background parallax layers langsung visible
200ms:  Nav bar fade-in dari atas
500ms:  Hero headline word-by-word reveal (stagger 80ms per kata)
800ms:  Hero subtext fade-in
1000ms: CTA buttons slide-up
1200ms: Statistics count-up dimulai
1400ms: Profile photo + orbital rings fade-in + rings mulai berputar
```

### 6.4 Custom Cursor (Desktop only)

```css
/* Cursor terdiri dari 2 elemen: */

/* 1. Dot kecil (ikut kursor langsung) */
.cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--color-aurora-2); /* cyan */
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
}

/* 2. Ring besar (mengikuti dengan lag/lerp) */
.cursor-ring {
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--color-aurora-1); /* violet */
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  /* Implementasi lag via JS requestAnimationFrame lerp */
  transition: width 0.2s, height 0.2s, border-color 0.2s;
}

/* State saat hover link/button: */
.cursor-ring.hover-active {
  width: 48px;
  height: 48px;
  border-color: var(--color-aurora-2);
  background: rgba(6, 182, 212, 0.1);
}
```

---

## 7. Dark / Light Mode Implementation

### 7.1 Strategy

Menggunakan `class` strategy di root element (`<html>`):
- `class="dark"` → dark mode (default)
- `class="light"` → light mode

Toggle disimpan di `localStorage` untuk persistence.

### 7.2 Parallax Adaptasi Per Mode

```
Dark Mode:
- Parallax layers: full cosmic (bintang, nebula, orbital rings)
- Background: #04050A
- Glass panels: opacity sangat rendah (0.04-0.08)

Light Mode:
- Parallax layers: subtle — bintang diganti floating geometric shapes
- Nebula diganti dengan soft gradient blobs pastel
- Background: #F0F4FF
- Glass panels: opacity tinggi (0.6-0.7), lebih seperti frosted glass
- Orbital rings tetap ada tapi dengan stroke warna violet muda
- Particles: warna lebih terang, opacity dikurangi
```

### 7.3 Toggle Button Design

```
Dark → icon bulan (crescent moon SVG)
Light → icon matahari (sun rays SVG)

Animasi toggle: rotate + fade saat switch
Posisi: di nav bar, sebelah kiri CTA button
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Perubahan Layout |
|------------|-------|-----------------|
| Mobile | < 768px | Single column, parallax dinonaktifkan (performa), custom cursor dinonaktifkan |
| Tablet | 768-1024px | Grid 2 kolom, parallax dikurangi menjadi 3 layer |
| Desktop | > 1024px | Full experience |
| Wide | > 1440px | Max-width container, parallax lebih ekspansif |

**Catatan Mobile:** Di mobile, parallax dinonaktifkan karena performa. Sebagai gantinya, gunakan **subtle CSS-only animations** (twinkle bintang static background, nebula breathing) yang tidak bergantung pada scroll.

---

## 9. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 85 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Canvas particle count (mobile) | 0 (disabled) |
| Canvas particle count (tablet) | 30 |
| Canvas particle count (desktop) | 80 |
| Parallax layers (mobile) | 0 (CSS only) |
| Parallax layers (desktop) | 8 |

**Optimasi:**
- Semua parallax layer menggunakan `will-change: transform`
- Canvas particle system menggunakan `requestAnimationFrame` dan stop saat tab tidak aktif (`document.visibilityState`)
- SVG nebula menggunakan `loading="lazy"` equivalent (Intersection Observer)
- `prefers-reduced-motion` media query: matikan semua animasi kecuali fade transitions

---

## 10. Tech Stack & Dependencies

```json
{
  "existing": {
    "framework": "Next.js (App Router)",
    "styling": "Chakra UI v2",
    "deployment": "Vercel"
  },
  "new_dependencies": {
    "framer-motion": "^11.x",
    "comment": "Untuk parallax scroll transforms, page transitions, gesture animations"
  },
  "fonts": {
    "provider": "Google Fonts",
    "fonts": ["Syne:wght@400;700;800", "DM+Sans:wght@400;500", "JetBrains+Mono:wght@400;500"]
  },
  "no_new_image_assets": true,
  "comment": "Semua parallax visual dibuat programatik (SVG inline + Canvas)"
}
```

---

## 11. File Structure (New/Modified Files)

```
src/
├── components/
│   ├── parallax/
│   │   ├── ParallaxContainer.jsx     # Wrapper utama yang manage semua layers
│   │   ├── StarField.jsx             # SVG/Canvas star generation
│   │   ├── NebulaLayer.jsx           # SVG nebula blobs
│   │   ├── ConstellationLines.jsx    # SVG constellation connections
│   │   ├── OrbitalRings.jsx          # SVG rotating rings
│   │   └── CosmicParticles.jsx       # Canvas particle system
│   ├── ui/
│   │   ├── GlassCard.jsx             # Reusable glass morphism card
│   │   ├── GlowButton.jsx            # Primary/secondary glow buttons
│   │   ├── ThemeToggle.jsx           # Dark/Light mode toggle
│   │   ├── CustomCursor.jsx          # Custom cursor component
│   │   └── CountUp.jsx               # Number count-up animation
│   ├── sections/
│   │   ├── HeroSection.jsx           # Redesigned hero
│   │   ├── AboutSection.jsx          # Bento grid about
│   │   ├── ExperienceSection.jsx     # Timeline redesign
│   │   ├── WorksSection.jsx          # Asymmetric project grid
│   │   ├── ServicesSection.jsx       # Redesigned services
│   │   └── CTASection.jsx            # CTA + footer
│   └── layout/
│       └── Navbar.jsx                # Glass navbar redesign
├── styles/
│   ├── globals.css                   # CSS variables + base styles
│   ├── parallax.css                  # Parallax layer styles + keyframes
│   └── themes.css                    # Dark/light mode overrides
└── hooks/
    ├── useParallax.js                # Scroll-based parallax hook
    ├── useTheme.js                   # Theme management hook
    └── useReducedMotion.js           # prefers-reduced-motion hook
```

---

## 12. Acceptance Criteria

### Visual
- [ ] Background menampilkan star field dengan minimal 3 layer kedalaman yang berbeda
- [ ] Nebula blobs terlihat dan beranimasi breathing di dark mode
- [ ] Orbital rings terlihat di hero section dan berputar secara smooth
- [ ] Semua card menggunakan glass morphism effect yang konsisten
- [ ] Gradient accent violet→cyan terlihat di elemen-elemen highlight

### Interaction
- [ ] Parallax terjadi saat scroll (min. 3 layer bergerak kecepatan berbeda)
- [ ] Idle animation berjalan tanpa scroll (bintang twinkle, nebula breathe, rings spin)
- [ ] Custom cursor berfungsi di desktop
- [ ] Semua hover state berfungsi sesuai spec
- [ ] Count-up animation pada statistik berjalan saat pertama visible
- [ ] Timeline line fill animation berjalan saat scroll ke section

### Theme
- [ ] Dark mode menampilkan cosmic full experience
- [ ] Light mode menampilkan versi yang lebih terang namun tetap space-themed
- [ ] Toggle menyimpan preferensi ke localStorage
- [ ] Transisi dark↔light smooth (tidak flash/jump)

### Performa
- [ ] `prefers-reduced-motion` direspons dengan mematikan semua animasi
- [ ] Canvas particle di mobile = 0 (tidak dirender)
- [ ] Tidak ada layout shift saat parallax bergerak
- [ ] Tab tidak aktif → animasi canvas berhenti

### Konten
- [ ] Semua teks konten dari website existing terjaga 100%
- [ ] Semua link navigasi berfungsi
- [ ] Foto profil existing tetap digunakan
- [ ] Social links tetap ada dan berfungsi

---

## 13. Catatan untuk Agent AI (Vibecoding Context)

Jika kamu adalah AI agent yang membaca dokumen ini untuk mengimplementasikan redesign:

1. **Jangan hapus konten apapun** — semua teks, link, data dari website existing harus ada
2. **Prioritas parallax** — ini adalah fitur terpenting, harus terasa premium
3. **Semua visual asset dibuat programatik** — tidak perlu download gambar eksternal, gunakan SVG inline dan Canvas API
4. **Glass morphism** — setiap card/panel menggunakan `backdrop-filter: blur()` + semi-transparent background
5. **Font loading** — load Syne, DM Sans, JetBrains Mono dari Google Fonts di layout root
6. **Framer Motion** — gunakan untuk semua animasi scroll-driven dan page transitions
7. **Theme toggle** — implementasikan dengan `next-themes` atau manual class toggle, bukan CSS `@media prefers-color-scheme` saja (karena perlu manual toggle)
8. **Mobile first** — nonaktifkan parallax dan canvas di mobile untuk performa
9. **Cursor** — custom cursor hanya di `pointer` device, bukan touch
10. **Tidak ada breaking changes** — routing, API calls, dan data fetching tidak diubah

---

*Dokumen ini adalah referensi utama untuk redesign portfolio hallokhanif.vercel.app. Semua keputusan desain, animasi, dan implementasi harus merujuk ke PRD ini.*
