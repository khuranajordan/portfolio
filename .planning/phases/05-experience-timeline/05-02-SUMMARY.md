---
phase: 05-experience-timeline
plan: 02
subsystem: ui-animations
tags: [framer-motion, scroll-animations, timeline, staggered-animations, viewport-detection]

# Dependency graph
requires:
  - phase: 05-experience-timeline
    provides: Experience timeline component with 4 Logicwind roles
  - phase: 04-hero-section
    provides: Framer Motion library and animation patterns
provides:
  - Scroll-triggered animation system for timeline
  - Timeline line growth animation (scaleY from top)
  - Spring-animated dot indicators
  - Fade and scale animations for role cards
affects: [05-03-role-details]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - Pattern: Scroll-triggered animations with Framer Motion whileInView
    - Pattern: Staggered timing system using index-based delays
    - Pattern: viewport once to prevent re-animation
    - Pattern: Early trigger margins for better UX

key-files:
  created: []
  modified: [src/components/experience-timeline.tsx]

key-decisions:
  - "Line growth from top using scaleY and origin-top (timeline metaphor)"
  - "Spring animation for dots (stiffness: 300) for playful bounce effect"
  - "Stagger delays using index * 0.1s and index * 0.15s for sequential reveals"
  - "Early trigger margin (-100px) for better UX (animations start before fully visible)"
  - "viewport once: true to prevent animations from replaying on scroll"
  - "Scale animation on cards (0.95 → 1) for subtle depth effect"
  - "EaseOut and easeInOut easing functions for natural feel"

patterns-established:
  - "Pattern 1: TimelineEntry wrapper component for reusable animation logic"
  - "Pattern 2: whileInView API for scroll-triggered animations"
  - "Pattern 3: Staggered timing based on array index"
  - "Pattern 4: Composed animations (fade + slide, scale + fade)"

issues-created: []

# Metrics
duration: 13min
completed: 2026-01-22
---

# Phase 5 Plan 2: Implement Scroll Animations Summary

**Timeline enhanced with Framer Motion scroll-triggered animations: line growth from top, spring-animated dot reveals, staggered card fade-ins, and viewport-based triggering**

## Performance

- **Duration:** 13 min
- **Started:** 2026-01-22T06:08:19Z
- **Completed:** 2026-01-22T06:21:49Z
- **Tasks:** 2 (Tasks 1-2 executed, Task 3 checkpoint verified)
- **Files modified:** 1

## Accomplishments

- **TimelineEntry wrapper component:** Reusable animated wrapper with scroll-triggered fade-in and slide-up effects
- **Staggered entry animations:** Each timeline entry animates in sequence with 0.1s delay increments
- **Timeline line growth:** Vertical gradient line grows from top to bottom (scaleY: 0 → 1, 1s duration)
- **Spring-animated dots:** Dot indicators pop in with spring animation (stiffness: 300, 0.4s duration)
- **Card scale animations:** Role cards scale up and fade in (scale: 0.95 → 1, opacity: 0 → 1)
- **Early trigger margins:** Animations start before elements are fully visible (-100px margin)
- **viewport once protection:** Animations don't replay when scrolling back up
- **Smooth 60fps performance:** All animations run at smooth 60fps without lag

## Task Commits

Each task was committed atomically:

1. **Task 1: Install Framer Motion and create animated wrapper** - `444a4af` (feat)
2. **Task 2: Add timeline line and dot animations** - `16d70e7` (feat)

**Plan metadata:** `[pending]` (docs: complete plan)

## Files Created/Modified

- `src/components/experience-timeline.tsx` - Added TimelineEntry wrapper component, animated timeline line, dot indicators, and role cards with Framer Motion

## Decisions Made

- **TimelineEntry wrapper component:** Created reusable component for animation logic (DRY pattern)
- **Line growth from top:** Used scaleY with origin-top transform for timeline metaphor (drawing line from top down)
- **Spring animation for dots:** Type: 'spring' with stiffness: 300 creates playful bounce effect
- **Stagger delays:** Entry animations use index * 0.1s, dot animations use index * 0.15s for sequential reveals
- **Early trigger margin:** margin: '-100px' on viewport ensures animations start before elements are fully visible
- **viewport once: true:** Prevents animations from replaying when scrolling back up, maintains performance
- **Scale on cards:** Initial scale: 0.95 → 1 adds subtle depth, not too dramatic
- **Easing functions:** easeOut for entries, easeInOut for line creates natural motion feel
- **Duration choices:** 0.4-0.6s for entries, 1s for line balance speed and visibility

## Deviations from Plan

None - plan executed exactly as specified.

## Issues Encountered

None - Framer Motion was already installed from Phase 4, all animations worked as expected.

## Next Phase Readiness

**Phase 5.2 complete** - Scroll-triggered animation system is production-ready with:
- Functional scroll-triggered animations using Framer Motion
- Timeline line grows from top to bottom (1s duration, easeInOut)
- Dot indicators animate in with spring effect (0.4s, stiffness: 300)
- Role cards fade in with scale effect (0.5s duration)
- Properly staggered timing (0.1-0.15s increments per entry)
- viewport once: true prevents re-animation on scroll
- Early trigger margins (-100px) for better UX
- Smooth 60fps performance verified
- Works in both light and dark themes

Ready for Phase 5.3 (05-03-PLAN.md - Add Role Details and Achievement Highlights) with no blockers or concerns.

---
*Phase: 05-experience-timeline*
*Completed: 2026-01-22*
