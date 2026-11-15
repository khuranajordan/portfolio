# Portfolio Project Handoff

**Project:** Rohan Khurana — Senior Software Developer & Team Lead Portfolio  
**Repository Location:** `/Users/admin/Desktop/Development/portfolio`  
**Date:** November 15, 2026  
**Status:** Production Ready (Verified build passing `tsc -b && vite build`)

---

## 1. Project Overview & Architectural Vision

The portfolio has been redesigned into a Swiss-modernist engineering website inspired by **[Santalarch](https://santalarch.com/#philosophy)**, featuring:
- **Light, Warm Alabaster & White Palette:** Soft alabaster background (`#FAF9F6`), crisp white card containers (`#FFFFFF`), deep graphite typography (`#121316`), and subtle 1px hairline structural grid dividers (`border-black/[0.08]`).
- **Interactive 3D Geometric Centerpiece (`#philosophy`):** A custom, hardware-accelerated **Three.js WebGL canvas** with beveled architectural stone monoliths that morph across three states as the user scrolls:
  - `01 // RESILIENCE` — Monolithic block (fault-tolerant WebSocket pipelines, heartbeat recovery, connection pooling).
  - `02 // PRECISION` — Exploded modular assembly (sub-second UI updates, virtualization, memory profiling).
  - `03 // SCALE` — Distributed equilibrium orbit (high-concurrency room broadcasting, 10,000+ DAU).
- **Personal 3D Bitmoji Avatar:** Custom 3D avatar matching Rohan's likeness (black glasses, beard, navy blazer, white shirt) integrated into the Hero spotlight card and Header identity pill.
- **Title & Professional Positioning:** Quoted strictly as **Senior Software Developer** / **Software Developer & Team Lead** with **4+ years of production experience**.

---

## 2. Key Components & File Map

| File Path | Description |
| :--- | :--- |
| [src/App.tsx](file:///Users/admin/Desktop/Development/portfolio/src/App.tsx) | Core single-page layout composing Header, Hero, Philosophy (3D), Works, Specification, Journey, and Footer. |
| [src/components/santal-header.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-header.tsx) | Minimalist, unbloated sticky navigation bar with 3D Bitmoji avatar, brand title, and clean underline navigation links. |
| [src/components/santal-hero.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-hero.tsx) | Editorial hero headline, 4+ years experience, personal Bitmoji spotlight card, and real-time telemetry metrics (<100ms latency, 10k+ DAU). |
| [src/components/philosophy-section.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-section.tsx) | Sticky scroll-driven container synchronizing scroll progress with the 3D canvas and editorial philosophy copy. |
| [src/components/philosophy-cubes.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/philosophy-cubes.tsx) | Pure Three.js WebGL canvas rendering beveled architectural cubes with ambient/directional lighting and mouse parallax. |
| [src/components/santal-works.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-works.tsx) | Selected case studies: KNKY Platform, Ink In Caps Team Leadership, Tracxn Performance, and Blodin 0-to-1. |
| [src/components/santal-spec.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-spec.tsx) | Technical specification sheet grouping skills into Protocols, Frameworks, Performance, and Cloud/CI/CD. |
| [src/components/santal-journey.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-journey.tsx) | Chronological career ledger (Ink In Caps, Blodin, Tracxn) and academic credentials. |
| [src/components/santal-footer.tsx](file:///Users/admin/Desktop/Development/portfolio/src/components/santal-footer.tsx) | Clean 3-column contact ledger (Direct Channels, Verified Profiles, Mumbai Operational Base). |
| [public/bitmoji.png](file:///Users/admin/Desktop/Development/portfolio/public/bitmoji.png) | High-resolution 3D Bitmoji developer avatar image. |
| [vite.config.ts](file:///Users/admin/Desktop/Development/portfolio/vite.config.ts) | Optimized Rollup chunking separating Three.js and vendor libraries into independent bundles. |

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

## 4. Pending / Next Steps for Future Sessions

1. **Custom Domain & Hosting:** Deploy to Vercel, Netlify, or Cloudflare Pages.
2. **Interactive Live Ping/Latency Demo:** (Optional enhancement) Connect a live WebSocket echo test in the `#spec` section to visually demo sub-second packet round-trip times.
