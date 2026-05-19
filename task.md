# Task Checklist: Cosmic Space UI Redesign

- `[x]` **Step 1: Foundation & Theming Setup**
  - `[x]` Update Google Fonts in `app/layout.tsx` (`Syne`, `DM Sans`, `JetBrains Mono`)
  - `[x]` Create `app/globals.css` with CSS variables (dark/light) & all keyframes
  - `[x]` Update Chakra UI theme in `lib/theme.ts` (new fonts, cosmic colors, glass button variants)
  - `[x]` Update `PROJECT_STATE.md`

- `[x]` **Step 2: Parallax & Cosmic Assets**
  - `[x]` Create `components/parallax/StarField.tsx`
  - `[x]` Create `components/parallax/NebulaLayer.tsx`
  - `[x]` Create `components/parallax/OrbitalRings.tsx`
  - `[x]` Create `components/parallax/CosmicParticles.tsx`
  - `[x]` Create `components/parallax/ParallaxContainer.tsx`
  - `[x]` Update `PROJECT_STATE.md`

- `[x]` **Step 3: Layout & Navigation Redesign**
  - `[x]` Create `components/ui/CustomCursor.tsx`
  - `[x]` Modify `components/Navbar.tsx` (Glassmorphism, KA. logo, Moon/Sun toggle, gradient CTA)
  - `[x]` Modify `components/Footer.tsx` (gradient top border, shimmer CTA, social color-pop)
  - `[x]` Update `components/PageWrapper.tsx` (wrap with ParallaxContainer + CustomCursor)
  - `[x]` Update `PROJECT_STATE.md`

- `[/]` **Step 4: Hero & About Sections**
  - `[ ]` Redesign Hero in `app/page.tsx` (100dvh, word-reveal headline, orbital photo frame, count-up stats)
  - `[ ]` Redesign About section (Bento-grid glass cards)
  - `[ ]` Update `PROJECT_STATE.md`

- `[ ]` **Step 5: Experience & Works Sections**
  - `[ ]` Redesign Experience timeline (gradient line, animated fill, glass cards)
  - `[ ]` Redesign Works grid `app/work/page.tsx` (asymmetric grid, featured full-width)
  - `[ ]` Update `PROJECT_STATE.md`

- `[ ]` **Step 6: Services & CTA Sections**
  - `[ ]` Redesign Services grid `app/services/page.tsx` (2x2 glass, orbital numbers)
  - `[ ]` Final build check & push to remote `redesign` branch
  - `[ ]` Update `PROJECT_STATE.md`

