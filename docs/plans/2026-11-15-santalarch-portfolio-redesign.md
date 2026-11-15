# Santalarch-Inspired Architectural Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Rohan Khurana's portfolio into an architectural, Swiss-modernist engineering portfolio inspired by [Santalarch](https://santalarch.com/#philosophy), featuring an interactive scroll-driven 3D geometric centerpiece (`#philosophy`), hairline grid layout, dark high-contrast editorial aesthetic, and deep technical storytelling highlighting his real-time systems and team leadership experience.

**Architecture:** A monolithic single-page experience designed around a strict 1px hairline architectural grid. The center of the page features a scroll-synced 3D WebGL canvas (rendered via Three.js / React Three Fiber) depicting modular geometric monoliths that morph through three states (**Resilience**, **Precision**, **Scale**) as the user scrolls. Surrounding sections (Hero, Works, Architectural Spec, Experience, and Enquiries) adopt Santalarch's Swiss typography, monospaced metadata, and understated confidence.

**Tech Stack:** React 19, Vite 7, TypeScript, Tailwind CSS v4, Three.js (`three`), `@react-three/fiber` (or lean Three.js WebGL canvas), Framer Motion, Lucide React.

---

## Architecture & Layout Blueprint

```
┌────────────────────────────────────────────────────────────────────────┐
│ HEADER: [ROHAN KHURANA]   [MUMBAI, IN — 19.0760° N, 72.8777° E]  [NAV]  │
├────────────────────────────────────────────────────────────────────────┤
│ HERO: Editorial Typographic Title + Live System Telemetry Metrics      │
│       "FRONTEND SYSTEMS ARCHITECT & TEAM LEAD"                         │
│       Sub-second latency | 10k+ concurrent | 30% tech debt reduction   │
├────────────────────────────────────────────────────────────────────────┤
│ #PHILOSOPHY: The 3D Scroll-Driven Centerpiece (Santalarch Cubes)       │
│                                                                        │
│   ┌─────────────────────┐   Scroll Progress 0.00 -> 0.33:              │
│   │                     │   01 // RESILIENCE (Monolithic Solid)        │
│   │   3D INTERACTIVE    │                                              │
│   │   GEOMETRIC CUBES   │   Scroll Progress 0.33 -> 0.66:              │
│   │   (WebGL / Canvas)  │   02 // PRECISION (Modular Exploded Mesh)    │
│   │                     │                                              │
│   │                     │   Scroll Progress 0.66 -> 1.00:              │
│   │                     │   03 // SCALE (Distributed Equilibrium)      │
│   └─────────────────────┘                                              │
├────────────────────────────────────────────────────────────────────────┤
│ #WORKS: Architectural Case Studies (Hairline Grid Columns)             │
│   01 // KNKY (Real-time social platform, WebSocket rooms, <100ms)      │
│   02 // INK IN CAPS (6-engineer team leadership, 30% debt reduction)   │
│   03 // TRACXN (Suspense/lazy loading, +20% performance improvement)   │
│   04 // BLODIN (0-to-1 production frontend from scratch)               │
├────────────────────────────────────────────────────────────────────────┤
│ #SPEC: Engineering Specification Sheet (Replacing generic badges)     │
│   Protocols & Real-Time | State & Synchronization | Core Systems | CI  │
├────────────────────────────────────────────────────────────────────────┤
│ #JOURNEY: Chronological Career Ledger & Leadership Milestones          │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER / ENQUIRE: Minimalist Contact Terminal                          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Detailed Task Breakdown

### Task 1: Design Tokens, Typography & Hairline Grid Foundation

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.tsx`
- Modify: `index.html`

- [ ] **Step 1: Configure Swiss modernist font pairing and CSS custom variables**
  Add high-contrast dark aesthetic tokens inspired by Santalarch:
  - Background: `--bg-primary: #0a0b0d`, `--bg-secondary: #121316`
  - Text: `--text-primary: #f4f4f5`, `--text-secondary: #a1a1aa`, `--text-muted: #71717a`
  - Hairline border: `--border-hairline: rgba(255, 255, 255, 0.08)`
  - Active line highlight: `--border-active: rgba(255, 255, 255, 0.25)`
  - Accent/Status: `--status-online: #10b981`

- [ ] **Step 2: Add global hairline grid overlay and smooth scroll container**
  Implement the subtle vertical structural lines that run through the viewport, giving the site its signature Swiss architectural framing.

- [ ] **Step 3: Test build to ensure zero CSS conflicts**
  Run `npm run build` and ensure clean output.

---

### Task 2: Minimalist Architectural Header & Navigation

**Files:**
- Create: `src/components/santal-header.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement sticky minimalist header with real-time metadata**
  - Left: Identity mark (`ROHAN KHURANA // SYS.ARCHITECT`)
  - Center: Geolocation & availability badge (`MUMBAI, IN — 19.08° N, 72.88° E • AVAILABLE`)
  - Right: Hairline navigation links (`Philosophy`, `Works`, `Specification`, `Enquire`) with Santalarch-style animated bottom-slide hover state.

- [ ] **Step 2: Add responsive mobile drawer with clean typographic links**

- [ ] **Step 3: Verify header pinning and scroll transparency effects**

---

### Task 3: Architectural Hero Section with Live Engineering Telemetry

**Files:**
- Create: `src/components/santal-hero.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Construct the hero typographic layout**
  - Oversized, high-contrast headline: `FRONTEND SYSTEMS ARCHITECT & TEAM LEAD`
  - Editorial description derived from resume:
    *"Architecting high-traffic, real-time web applications. Specializing in Next.js, React, TypeScript, and WebSocket-based systems. Proven track record of leading engineering teams and delivering sub-second user experiences for thousands of concurrent users."*

- [ ] **Step 2: Add live telemetry metric bar**
  Highlight your quantified wins directly in the hero:
  - `SUB-100MS` — Message Delivery Latency (KNKY)
  - `10,000+` — Daily Active Users Handled
  - `30%` — Technical Debt Reduction (Ink In Caps)
  - `90%+` — Unit Test Coverage across Critical Modules

- [ ] **Step 3: Verify responsive scaling on mobile and desktop**

---

### Task 4: The 3D `#philosophy` Section (Santalarch Kinetic Monoliths)

**Files:**
- Install: `three`, `@types/three`
- Create: `src/components/philosophy-cubes.tsx`
- Create: `src/components/philosophy-section.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Install Three.js dependency**
  Run: `npm install three && npm install -D @types/three`

- [ ] **Step 2: Build the 3D Monolith WebGL Canvas (`philosophy-cubes.tsx`)**
  Create an optimized, hardware-accelerated WebGL canvas with:
  - Procedural architectural cubes with bevels and architectural matte material.
  - Three target spatial configurations tied to scroll progress:
    - **State 1 (Scroll 0% – 33%): Solid Monolith** — Tight, unified cubic block gently floating in space.
    - **State 2 (Scroll 34% – 66%): Exploded Assembly** — Cubes separate along axes to reveal internal structural alignment, representing precision engineering.
    - **State 3 (Scroll 67% – 100%): Distributed Equilibrium** — Cubes balance in open spatial orbit, representing distributed real-time scaling.
  - Smooth lerp interpolation for silky 60fps response on scroll and subtle mouse parallax.

- [ ] **Step 3: Build the sticky split-screen text layout (`philosophy-section.tsx`)**
  - Sticky viewport pinned while scrolling through the 3 phases:
    1. **01 // RESILIENCE** — *"Systems that refuse to fail. Built on fault-tolerant WebSocket pipelines, heartbeat recovery, and self-healing connection pooling across volatile networks."*
    2. **02 // PRECISION** — *"Frontend engineering resolved to the millisecond. Sub-second UI updates, virtualization, memory profiling on low-end devices, and strict performance budgets."*
    3. **03 // SCALE** — *"Quiet reliability under load. Architectural discipline that coordinates thousands of concurrent users across distributed event streams without degradation."*

- [ ] **Step 4: Verify mobile fallback**
  Ensure smooth canvas rendering or responsive 3D aspect ratio adaptation on mobile viewports.

---

### Task 5: Architectural Works & Case Studies (`#works`)

**Files:**
- Create: `src/components/santal-works.tsx`
- Modify: `src/types/projects.ts`
- Modify: `src/App.tsx`

- [ ] **Step 1: Update project data with comprehensive resume details**
  Format your actual real-world projects into architectural case studies:
  - **Case 01: KNKY** — Real-Time Social Platform (Socket.IO, WebSockets, Next.js, Cloudflare R2, AWS EC2, sub-100ms latency, connection pooling).
  - **Case 02: INK IN CAPS** — Scalable Frontend Architecture & 6-Member Team Leadership (30% debt reduction, CI/CD, Lighthouse <3s budgets).
  - **Case 03: TRACXN** — Dynamic Code Splitting & SEO Engineering (React.lazy, Suspense, +20% perf improvement).
  - **Case 04: BLODIN** — 0-to-1 Production System Delivery (Firebase, Express, Node.js).

- [ ] **Step 2: Build Santalarch-style hairline grid case study cards**
  Each case study includes:
  - Project Index number (`01`, `02`, `03`)
  - Architectural role tag (`LEAD ARCHITECT`, `SYSTEMS ENGINEER`)
  - Key technical challenge & solution breakdown
  - Verifiable technical metrics (latency, concurrency, test coverage)
  - Monospace tech stack tags and source/live links

- [ ] **Step 3: Verify hover interactions and responsive layout**

---

### Task 6: Technical Specification Sheet (`#spec`)

**Files:**
- Create: `src/components/santal-spec.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Design the specification ledger**
  Replace standard badges with a structured Swiss architectural specification table:
  - **Category A: Protocols & Real-Time Synchronization**
    Socket.IO, WebSockets, Event-Driven UI, Heartbeat Reconnection, State Hydration.
  - **Category B: Core Frameworks & Runtime**
    TypeScript, Next.js (App Router / Pages), React 19, Node.js, Express.js.
  - **Category C: Performance & Reliability**
    DOM Virtualization, Bundle Memoization, Memory Profiling, Sentry, Performance Budgets.
  - **Category D: Cloud Infrastructure & DevOps**
    AWS EC2, AWS Lambda, Cloudflare Workers & R2, CI/CD Pipelines, Git/GitHub.

- [ ] **Step 2: Add interactive hover highlighting across related stack items**

---

### Task 7: Career Journey & Leadership Milestones (`#journey`)

**Files:**
- Create: `src/components/santal-journey.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Build the chronological career ledger**
  - **Jul 2025 – Present:** Team Lead – Frontend @ Ink In Caps (Mumbai)
  - **Mar 2024 – Jul 2025:** Senior Software Engineer @ Ink In Caps (Mumbai)
  - **Jul 2023 – Feb 2024:** Software Engineer @ Blodin Pvt. Ltd. (Remote)
  - **Jan 2023 – Apr 2023:** Software Engineer @ Tracxn Technologies Ltd. (Bangalore)
  - **Education:** B.Tech Electrical Engineering (BIET) & Full Stack (Masai School)

- [ ] **Step 2: Format with clean hairline rules and role achievement bullets**

---

### Task 8: Enquiries Ledger & Architectural Footer (`#contact`)

**Files:**
- Create: `src/components/santal-footer.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Construct the Santalarch "Let's Talk" contact layout**
  - Direct contact links: `rohankhurana20@gmail.com`, `+91-9899394489`
  - Professional links: GitHub (`github.com/rohankhurana20`), LinkedIn (`linkedin.com/in/rohankhurana20`)
  - Timezone & location display: `MUMBAI, INDIA — UTC+05:30`
  - Subtle copyright and digital infrastructure credit

---

### Task 9: End-to-End Verification, Performance & Build Audit

- [ ] **Step 1: Run production build**
  Execute `npm run build` and ensure zero TypeScript or bundling errors.
- [ ] **Step 2: Verify smooth 60fps scroll and 3D canvas performance**
- [ ] **Step 3: Test responsiveness across mobile, tablet, and widescreen viewports**

---

## Deliverables Summary

1. Fully responsive, Swiss-modernist portfolio matching the aesthetic and polish of `santalarch.com/#philosophy`.
2. Interactive 3D WebGL Monolith canvas with 3 scroll-synced states (**Resilience**, **Precision**, **Scale**).
3. 100% accurate, high-impact resume data showcasing Rohan Khurana's leadership and real-time systems architecture.
4. Clean, modular React 19 codebase with zero dead code or broken links.
