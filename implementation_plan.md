# Portfolio Space-Themed UI Redesign

This document outlines the step-by-step implementation plan for the "Orbital Designer" cosmic space-themed UI redesign of the portfolio website, as requested in `PRD_Redesign.md`. 

We are currently working on a dedicated `redesign` branch to ensure the `main` branch remains untouched during this process.

## Proposed Changes (Step-by-Step Execution Plan)

### Step 1: Foundation & Theming Setup
*Update the core design tokens and global layout.*

#### [MODIFY] `app/layout.tsx`
- Change Google Fonts from `Playfair Display` & `Inter` to `Syne`, `DM Sans`, and `JetBrains Mono`.

#### [MODIFY] `styles/globals.css` (or equivalent global stylesheet)
- Inject the new `color-void`, `color-nebula`, `color-aurora`, and `glass-bg` CSS variables for both `.chakra-ui-dark` and `.chakra-ui-light` classes.
- Add base keyframes (`twinkle`, `nebula-breathe`, `orbit-spin`).

#### [MODIFY] `lib/theme.ts`
- Update Chakra UI theme to use the new fonts (`Syne` for headings, `DM Sans` for body).
- Configure base global styles to use the new `color-void` background.

---

### Step 2: Parallax & Cosmic Assets
*Build the programmatic SVG and Canvas components that form the space background.*

#### [NEW] `components/parallax/StarField.tsx`
- SVG component rendering 3 layers of stars (deep, mid, near) with random opacity and twinkle animation.

#### [NEW] `components/parallax/NebulaLayer.tsx`
- SVG component rendering radial gradient blobs with blur filters and breathing animation.

#### [NEW] `components/parallax/OrbitalRings.tsx`
- SVG component rendering the rotating elliptical rings for the Hero and CTA sections.

#### [NEW] `components/parallax/CosmicParticles.tsx`
- Canvas-based particle system for floating cosmic dust (disabled on mobile).

#### [NEW] `components/parallax/ParallaxContainer.tsx`
- Wrapper using `framer-motion`'s `useScroll` and `useTransform` to manage the scroll speeds of the different layers.

---

### Step 3: Layout & Navigation Redesign
*Update the Navbar and Footer to the new glassmorphism style.*

#### [NEW] `components/ui/CustomCursor.tsx`
- Implement the 2-part dot and ring custom cursor (desktop only).

#### [MODIFY] `components/Navbar.tsx`
- Apply glassmorphism background and borders.
- Update Logo text to "KA" (Syne font) with a glowing dot.
- Implement the custom Dark/Light toggle switch (Moon/Sun SVG).
- Update CTA button style to `GlowButton`.

#### [MODIFY] `components/Footer.tsx`
- Update styling to match the new dark aesthetic with the violet/cyan/emerald gradient top border.

---

### Step 4: Hero & About Sections

#### [MODIFY] `app/page.tsx` & `components/HeroSection.tsx` (if extracted)
- Wrap the page in `ParallaxContainer`.
- Rebuild Hero: 100dvh layout, "Design. Think. Solve." Syne gradient text, and staggered text reveal.
- Integrate profile photo with `OrbitalRings` and the "Open to Opportunities" pulsing badge.
- Rebuild Statistics (15+, 5+, etc.) with `framer-motion` count-up.

#### [MODIFY] `components/AboutSection.tsx` (if extracted)
- Implement Bento-grid style glass cards for Bio and Statistics.

---

### Step 5: Experience & Works Sections

#### [MODIFY] `components/ExperienceSection.tsx` (if extracted)
- Rebuild timeline with the animated vertical gradient line.
- Update entry cards to glassmorphism with specific glow colors based on employment type.

#### [MODIFY] `components/WorksSection.tsx` / `app/work/page.tsx`
- Rebuild the grid into an asymmetric layout (featured project full width, others 2 columns).
- Apply glassmorphism cards and hover lift effects.
- Implement color-coded category tags.

---

### Step 6: Services & CTA Sections

#### [MODIFY] `app/services/page.tsx`
- Convert the 4 service cards into a 2x2 glass grid.
- Add the large, semi-transparent background numbers (`01`, `02`, etc.) using JetBrains Mono.
- Implement hover reveal animations for the skill lists.

#### [MODIFY] `components/CTASection.tsx` (if extracted)
- Intensify the nebula and star field backgrounds.
- Add the shimmer effect to the "Start a Project" button.

---

## Verification Plan

After each step, I will:
1. Update `PROJECT_STATE.md` to reflect the completed work.
2. Run `npm run lint` and `npm run build` to ensure no TypeScript or build errors are introduced.
3. Use the browser tool to visually verify the changes locally (especially the animations, responsive behavior, and dark/light mode toggles).

Once you approve this plan and answer the open questions, we will begin with **Step 1**.
