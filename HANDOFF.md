# Portfolio Project Handoff

**Project:** Rohan Khurana — Senior Software Developer & Team Lead Portfolio  
**Repository Location:** `/Users/admin/Desktop/Development/portfolio`  
**Date:** November 15, 2026  
**Status:** Production Ready (Verified build passing `tsc -b && vite build`)

---

## 1. Project Overview & Architectural Vision

The portfolio has been redesigned into a Swiss-modernist engineering website inspired by **[Santalarch](https://santalarch.com/#philosophy)**, featuring:
- **Light & Dark Dual Architectural Palettes:**
  - **Daylight Mode (`5600K`):** Soft warm alabaster background (`#FAF9F6`), crisp white card containers (`#FFFFFF`), deep graphite typography (`#121316`), and subtle 1px hairline structural grid dividers (`border-black/[0.08]`).
  - **Nocturne Mode (`2700K`):** Deep obsidian background (`#0C0D0F`), matte titanium slate cards (`#15171E`), chalk white typography (`#F4F4F6`), and crisp wireframe borders (`border-white/[0.08]`).
- **Fancy Theme Switcher:**
  - **Circular Expanding View Transition:** Uses the browser's native `document.startViewTransition` with a dynamic circular clip-path expanding outward from the user's exact click coordinate.
  - **Tactile Web Audio Click:** Dynamic synthesized audio click (high-pass filtered sine sweep) giving the tactile sensation of a Leica or Braun mechanical dial switch.
  - **3D Three.js Synchronization:** The WebGL monolith scene dynamically shifts lighting (warm sunlight to moody cyan rim light), fog, and cube materials (alabaster to obsidian titanium) on theme switch.
- **Interactive 3D Geometric Centerpiece (`#philosophy`):** A custom, hardware-accelerated **Three.js WebGL canvas** with beveled architectural stone monoliths that morph across three states as the user scrolls:
  - `01 // RESILIENCE` — Monolithic block (fault-tolerant WebSocket pipelines, heartbeat recovery, connection pooling).
  - `02 // PRECISION` — Exploded modular assembly (sub-second UI updates, virtualization, memory profiling).
  - `03 // SCALE` — Distributed equilibrium orbit (high-concurrency room broadcasting, 10,000+ DAU).
- **Personal 3D Bitmoji Avatar:** Custom 3D avatar matching Rohan's likeness (black glasses, beard, navy blazer, white shirt) integrated into the Hero spotlight card, Header identity pill, and Apple Touch Icon.
- **Dynamic 3D Monolith Favicon:** Responsive SVG favicon that renders the 3D isometric cube monolith and automatically adjusts between light and dark browser tab bars.
- **Title & Professional Positioning:** Quoted strictly as **Senior Software Developer** / **Software Developer & Team Lead** with **4+ years of production experience**.

---

## 2. Key Components & File Map

| File Path | Description |
| :--- | :--- |
| [src/App.tsx](file:///Users/admin/Desktop/Development/portfolio/src/App.tsx) | Core single-page layout wrapped in `ThemeProvider` composing Header, Hero, Philosophy (3D), Works, Specification, Journey, and Footer. |
| [src/context/theme-context.tsx](file:///Users/admin/Desktop/Development/portfolio/src/context/theme-context.tsx) | Theme provider managing light/dark state, localStorage persistence, synthesized Web Audio clicks, and circular view transitions. |
| [src/components/theme-toggle.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/theme-toggle.tsx) | Swiss architectural lighting toggle switch displaying `5600K DAYLIGHT` ⇄ `2700K NOCTURNE` with animated celestial iconography. |
| [src/components/santal-header.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-header.tsx) | Minimalist, unbloated sticky navigation bar with 3D Bitmoji avatar, brand title, clean underline links, and lighting toggle. |
| [src/components/santal-hero.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-hero.tsx) | Editorial hero headline, 4+ years experience, personal Bitmoji spotlight card, and real-time telemetry metrics (<100ms latency, 10k+ DAU). |
| [src/components/philosophy-section.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-section.tsx) | Sticky scroll-driven container synchronizing scroll progress with the 3D canvas and editorial philosophy copy. |
| [src/components/philosophy-cubes.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-cubes.tsx) | Hardware-accelerated Three.js WebGL canvas rendering beveled architectural cubes with dynamic theme-reactive lighting, fog, and materials. |
| [src/components/santal-works.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-works.tsx) | Selected case studies: KNKY Platform, Ink In Caps Team Leadership, Tracxn Performance, and Blodin 0-to-1. |
| [src/components/santal-spec.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-spec.tsx) | Technical specification sheet grouping skills into Protocols, Frameworks, Performance, and Cloud/CI/CD. |
| [src/components/santal-journey.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-journey.tsx) | Chronological career ledger (Ink In Caps, Blodin, Tracxn) and academic credentials. |
| [src/components/santal-footer.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-footer.tsx) | Clean 3-column contact ledger (Direct Channels, Verified Profiles with `khuranajordan`, Mumbai Operational Base). |
| [public/favicon.svg](file:///Users/admin/Desktop/Development/portfolio/public/favicon.svg) | Adaptive 3D isometric cube wireframe vector favicon. |
| [public/bitmoji.png](file:///Users/admin/Desktop/Development/portfolio/public/bitmoji.png) | High-resolution 3D Bitmoji developer avatar image. |
| [public/apple-touch-icon.png](file:///Users/admin/Desktop/Development/portfolio/public/apple-touch-icon.png) | 180x180 PNG favicon icon generated from Bitmoji. |
| [public/favicon-32x32.png](file:///Users/admin/Desktop/Development/portfolio/public/favicon-32x32.png) | 32x32 PNG favicon icon. |
| [public/favicon-16x16.png](file:///Users/admin/Desktop/Development/portfolio/public/favicon-16x16.png) | 16x16 PNG favicon icon. |

---

## 3. Verification & Build Commands

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

## 4. Notes on WebSocket Echo Demo (Pending Discussion)

In the previous handoff notes, an *"Interactive Live Ping/Latency Demo"* was listed as an optional item:
- **Is it required?** No. The portfolio is completely robust and production-ready without it.
- **Why was it suggested?** To serve as an interactive developer showcase proving Rohan's real-time systems background by connecting live to a public WebSocket server and demonstrating real sub-100ms packet latency right in the browser.
- **Current status:** Documented for the user to decide whether they want this interactive widget or prefer keeping the spec section clean and minimal.
