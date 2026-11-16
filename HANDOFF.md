# Portfolio Project Handoff

**Project:** Rohan Khurana — Senior Software Developer & Team Lead Portfolio  
**Repository Location:** `/Users/admin/Desktop/Development/portfolio`  
**GitHub:** `https://github.com/khuranajordan/portfolio.git` (`master`)  
**Live Production URL:** `https://rohankhurana.netlify.app/`  
**Date:** November 16, 2026  
**Status:** Production Ready (Verified build passing `tsc -b && vite build`, deployed on Netlify)
**Latest Commit:** `bb6d6dc` (Rebalanced engineering narrative, removed external socket telemetry)

---

## 1. Project Overview & Architectural Vision

The portfolio has been redesigned into a Swiss-modernist engineering website inspired by **[Santalarch](https://santalarch.com/#philosophy)**, featuring:
- **Balanced Senior Engineering Positioning:**
  - Moves away from narrow socket-only branding to showcase full-spectrum seniority: **Frontend Architecture & Modern Frameworks**, **Performance Engineering & Core Web Vitals**, **Engineering Leadership & CI/CD**, and **End-to-End Product Delivery**.
  - **Hero Metrics:** `4+ Years` Production Track Record, `6 Engineers` Team Leadership, `-30%` Technical Debt Reduction, and `90%+` Critical Unit Test Coverage.
- **Light & Dark Dual Architectural Palettes:**
  - **Daylight Mode (`5600K`):** Soft warm alabaster background (`#FAF9F6`), crisp white card containers (`#FFFFFF`), deep graphite typography (`#121316`), and subtle 1px hairline structural grid dividers (`border-black/[0.08]`).
  - **Nocturne Mode (`2700K`):** Deep obsidian background (`#0C0D0F`), matte titanium slate cards (`#15171E`), chalk white typography (`#F4F4F6`), and crisp wireframe borders (`border-white/[0.08]`).
- **Fancy Theme Switcher & Full Persistence:**
  - **Zero-FOUC Reload Persistence:** Synchronous blocking script inside [index.html](file:///Users/admin/Desktop/Development/portfolio/index.html) `<head>` reads `localStorage.getItem('portfolio-theme')` and applies `.dark` before the first frame renders, eliminating white flashes on reload.
  - **Conflict-Free Single Provider:** Cleaned out conflicting legacy `next-themes` wrappers; driven exclusively by [src/context/theme-context.tsx](file:///Users/admin/Desktop/Development/portfolio/src/context/theme-context.tsx).
  - **Circular Expanding View Transition:** Native `document.startViewTransition` with dynamic circular clip-path expanding outward from the user's click coordinates.
  - **Tactile Web Audio Click:** Dynamic synthesized audio click (high-pass filtered sine sweep) providing a Leica/Braun mechanical dial switch feel.
  - **3D Three.js Synchronization:** The WebGL monolith scene dynamically cross-fades lighting, fog, and cube materials between alabaster stone and obsidian titanium on theme switch.
- **Interactive 3D Geometric Centerpiece (`#philosophy`):** Hardware-accelerated **Three.js WebGL canvas** with beveled architectural stone monoliths morphing across three scroll-driven engineering pillars:
  - `01 // ARCHITECTURE` - Type-Safe and Modular by Design (strict TypeScript contracts, reusable component systems, isolated state boundaries).
  - `02 // PERFORMANCE` - Smooth 60 FPS on Every Device (sub-2.5s FCP, DOM virtualization for 10k+ rows, heap memory profiling).
  - `03 // LEADERSHIP` - Velocity Without Sacrificing Quality (6 engineers led and mentored, 30% technical debt reduction, 90%+ test coverage).
- **Personal 3D Bitmoji Avatar:** Custom 3D avatar matching Rohan's likeness (black glasses, beard, navy blazer, white shirt) integrated into the Hero spotlight card, Header identity pill, and Apple Touch Icon.
- **Dynamic 3D Monolith Favicon:** Responsive SVG favicon rendering the 3D isometric cube wireframe, auto-adjusting for light/dark browser tab bars.
- **Title & Professional Positioning:** Quoted strictly as **Senior Software Developer** / **Software Developer & Team Lead** with **4+ years of production experience** (never "systems architect", never 3+).

---

## 2. Key Components & File Map

| File Path | Description |
| :--- | :--- |
| [index.html](file:///Users/admin/Desktop/Development/portfolio/index.html) | Root document with inline synchronous theme loader (zero FOUC), responsive favicon links, meta tags, and font imports. |
| [src/main.tsx](file:///Users/admin/Desktop/Development/portfolio/src/main.tsx) | Clean React entrypoint mounting `<App />` directly (removed conflicting `next-themes` wrapper). |
| [src/App.tsx](file:///Users/admin/Desktop/Development/portfolio/src/App.tsx) | Core single-page layout wrapped in `ThemeProvider` composing Header, Hero, Philosophy (3D), Works, Specification, Journey, and Footer. |
| [src/context/theme-context.tsx](file:///Users/admin/Desktop/Development/portfolio/src/context/theme-context.tsx) | Single authoritative theme provider managing light/dark state, localStorage persistence, Web Audio clicks, and circular view transitions. |
| [src/components/theme-toggle.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/theme-toggle.tsx) | Swiss architectural lighting toggle switch displaying `5600K DAYLIGHT` ⇄ `2700K NOCTURNE` with animated celestial iconography. |
| [src/components/santal-header.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-header.tsx) | Minimalist sticky navigation bar with 3D Bitmoji avatar, brand title, clean underline links, and lighting toggle. |
| [src/components/santal-hero.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-hero.tsx) | Editorial hero headline, 4+ years experience, personal Bitmoji spotlight card, and senior leadership metrics (4+ Years, 6 Engineers, -30% Tech Debt, 90%+ Tests). |
| [src/components/bitmoji-card.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/bitmoji-card.tsx) | Interactive animated Bitmoji avatar spotlight with viewport-reactive scroll states, 3D cursor tilt, spring nod animations, and click emoji particle bursts. |
| [src/components/philosophy-section.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-section.tsx) | Sticky scroll-driven container synchronizing scroll progress with the 3D canvas across Architecture, Performance, and Leadership pillars. |
| [src/components/philosophy-cubes.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-cubes.tsx) | Hardware-accelerated Three.js WebGL canvas rendering beveled architectural cubes with dynamic theme-reactive lighting, fog, and materials. |
| [src/components/santal-works.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-works.tsx) | Selected case studies: KNKY Platform (Full-featured social app & edge media), Ink In Caps Team Leadership, Tracxn Performance, and Blodin 0-to-1. |
| [src/components/santal-spec.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-spec.tsx) | Authoritative 4-column Technical Specification Ledger: Architecture & Frameworks, Performance & Profiling, Engineering Leadership & Quality, and Cloud/Data Sync. |
| [src/components/santal-journey.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-journey.tsx) | Chronological career ledger (Ink In Caps, Blodin, Tracxn) and academic credentials. |
| [src/components/santal-footer.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-footer.tsx) | Clean 3-column contact ledger (Direct Channels, Verified Profiles with `khuranajordan`, Mumbai Operational Base). |
| [public/favicon.svg](file:///Users/admin/Desktop/Development/portfolio/public/favicon.svg) | Adaptive 3D isometric cube wireframe vector favicon. |
| [public/bitmoji.png](file:///Users/admin/Desktop/Development/portfolio/public/bitmoji.png) | High-resolution 3D Bitmoji developer avatar image. |
| [public/apple-touch-icon.png](file:///Users/admin/Desktop/Development/portfolio/public/apple-touch-icon.png) | 180x180 PNG favicon icon generated from Bitmoji. |
| [public/favicon-32x32.png](file:///Users/admin/Desktop/Development/portfolio/public/favicon-32x32.png) | 32x32 PNG favicon icon. |
| [public/favicon-16x16.png](file:///Users/admin/Desktop/Development/portfolio/public/favicon-16x16.png) | 16x16 PNG favicon icon. |

---

## 3. Technical Specification Ledger

The `#spec` section is structured as a clean, production-grade architectural ledger covering 4 core domains:
- **SPEC-01: Frontend Architecture & Frameworks** (Next.js App Router, React 19, Strict TypeScript, Zustand, TanStack Query, Tailwind, Radix UI).
- **SPEC-02: Performance & Memory Profiling** (DOM Virtualization for 10k+ rows, Route Code Splitting, Heap Snapshots, Lighthouse Budgets < 2.5s).
- **SPEC-03: Engineering Leadership & Quality** (6 Developers Mentored, Jest/RTL 90%+ Coverage, Automated CI/CD Gates, Sentry/CloudWatch Observability).
- **SPEC-04: Cloud, Edge & Data Sync** (Cloudflare R2/Workers, AWS EC2 & Lambda, WebSockets/Socket.IO, REST/GraphQL).

---

## 4. Prose Quality & AI Writing Audit

All copy was audited against **`avoid-ai-writing`** (v3.38.0):
- **Removed AI-isms:** Eliminated inflated verbs ("spearheaded", "architected" as verb), hollow slogans, melodramatic prose, and mid-sentence em dashes (`—`).
- **Detector Audit:** Scored via `avoid-ai-writing`:
  - **Score:** `2 / 100` (Human-written classification)
  - **Human Confidence:** `97.8%`
  - **AI Probability:** `0.6%`
  - **Tier 1 / Tier 2 / Tier 3 AI Markers:** `0`

---

## 5. Verification & Build Commands

- **Development Server:**
  ```bash
  npm run dev
  # Server running at http://localhost:5173
  ```
- **Production Build:**
  ```bash
  npm run build
  # Executes: tsc -b && vite build
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

---

## 6. Next Steps for Future Sessions

1. **Custom Domain:** Point custom domain `rohankhurana.dev` to Netlify DNS if desired.
2. **Additional Case Studies / Technical Blogs:** Add dedicated deep-dive technical write-ups on WebSocket connection pooling or high-concurrency client state synchronization.
