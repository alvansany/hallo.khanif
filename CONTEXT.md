1. Role Setup & Context
Act as a Senior Full Stack Engineer, Solution Architect, and UI/UX Expert. We are building a Personal Portfolio Website.

2. Stack
    - Next.js 14
    - Chakra UI
    - Framer Motion
    - Lucide React

3. Brand Identity & Visual Specs
    - Primary Accent Color: #FE4820. Use this for CTAs, active links, and hover states.
    - Support both Light and Dark Mode using Chakra UI's native theme provider.
    - Use a mix of Serif for headings and a clean Sans-serif for body text.
    - Visual Style: Modern Brutalist, Editorial Typography, High Contrast.
    - Layout: Multi-page with Asymmetric Grids & Fluid Responsiveness.
    - Themes: Dynamic Light & Dark Mode support.

4. Core Feature Modules
    - Hero Section: Data-driven metrics (e.g., Projects completed, Impact percentages).
    - Home: Hero section with business-centric metrics, 'About' overview, 'Latest Works' preview, and a 'Design Insights' section.
    - Medium Integration: Auto-fetching articles via RSS-to-JSON middleware.
    - Dynamic Case Studies: Deep-dive pages with "Problem, Solution, Result" structure.
    - Interactive Design Lab: A section showcasing live UI components (buttons, toggles, sliders) to demonstrate Design System expertise.
    - Lead Gen: Integrated Calendly booking and a smart contact form.
    - Portfolio: A grid of projects that links to individual Dynamic Case Study pages (slug-based routing).
    - Services: Detailed breakdown of offerings.
    - Blog: A page that fetches and displays Medium articles (use an RSS-to-JSON logic).

5. Technical Architecture
    - Routing: Next.js App Router for SEO-friendly multi-page navigation.
    - State Management: Theme-aware UI using Chakra UI’s useColorMode.
    - Animations: Scroll-triggered reveals and micro-interactions via Framer Motion.

6. Key Features:
    - Interactive Design Lab: Create a component playground section where users can interact with custom-designed UI elements (buttons, inputs, toggles) to showcase Design System expertise.
    - Booking Integration: Embed a Calendly widget or a custom 'Book a Call' modal.
    - Animations: Implement smooth scroll-triggered animations and hover effects using Framer Motion.