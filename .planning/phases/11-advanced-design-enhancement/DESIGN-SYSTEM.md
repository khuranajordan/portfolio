# Apple-Inspired Design System

**Purpose:** Establish premium design tokens and patterns to transform the portfolio from basic-to-intermediate to award-winning aesthetics while maintaining existing content structure and routes.

**Design Philosophy:** Generous whitespace, sophisticated depth, premium typography, and rich visual treatments that create a polished, professional experience.

---

## 1. Portfolio Inspiration References

Analysis of Apple-inspired design patterns from award-winning portfolios and Apple's own product pages:

### 1.1 Apple.com Product Pages
- **Bento Grid Usage:** Asymmetric card layouts with varying sizes (2x2, 2x1, 1x1), 16-24px gaps
- **Typography:** Massive headings (60-96px on desktop), tight line-heights (1.05-1.15), negative letter-spacing
- **Color:** Rich dark grays (not pure black), subtle gradients, mesh gradients with 2-3 hues
- **Background:** Animated mesh gradients, subtle grain textures, glassmorphism cards

### 1.2 Linus Sebastian (linustechtips.com)
- **Layout:** Bento grid with size variation, hero takes full width
- **Typography:** Bold, display-style headings (clamp-based responsive sizing)
- **Background:** Dark theme with subtle gradient overlays
- **Cards:** Glass effect with subtle borders and layered shadows

### 1.3 Britewave (britewave.dev)
- **Bento Grid:** Asymmetric grid with rounded corners (20-24px)
- **Typography:** Large hero text (80px+), generous spacing between sections
- **Color:** Monochromatic with single accent color
- **Visual:** Subtle gradients, depth with shadows

### 1.4 Angie Jones (angiejonessoftware.com)
- **Layout:** Grid-based with size variance for importance
- **Typography:** SF Pro-style headings, clean body text
- **Spacing:** Generous padding (py-24 to py-32)
- **Cards:** Subtle borders, hover lift effects

### 1.5 Design Buff (designbuff.dev)
- **Bento:** Card-based layout with 2:1 and 1:1 aspect ratios
- **Typography:** Tight headings (letter-spacing: -0.02em), responsive clamp sizing
- **Background:** Dark with mesh gradient overlays
- **Depth:** Multiple shadow layers for premium feel

### Key Patterns Across Inspirations:
1. **Bento Grids:** Asymmetric, size-varied cards (2x2, 2x1, 1:1) with 16-24px gaps
2. **Typography:** Massive headings (60-96px), tight spacing (-0.01 to -0.02em letter-spacing)
3. **Color:** Rich darks, off-whites, single accent color with subtle gradients
4. **Depth:** Layered shadows, glassmorphism, subtle borders (1px with low opacity)
5. **Spacing:** Generous (96-128px vertical section padding)

---

## 2. Design Tokens

### 2.1 Spacing Scale
**Base Unit:** 4px (more generous than current 4px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro spacing (icons, small gaps) |
| `space-2` | 8px | Tight spacing (button padding) |
| `space-3` | 12px | Compact spacing (card padding) |
| `space-4` | 16px | Standard spacing (gap between related elements) |
| `space-6` | 24px | Comfortable spacing (grid gaps) |
| `space-8` | 32px | Generous spacing (section internal padding) |
| `space-12` | 48px | Large spacing (between subsections) |
| `space-16` | 64px | XL spacing (component separation) |
| `space-24` | 96px | XXL spacing (section vertical padding) |
| `space-32` | 128px | XXXL spacing (major section breaks) |

**Tailwind Mapping:** Already exists, add `space-y-24` and `space-y-32` utilities if needed.

### 2.2 Border Radius
**Philosophy:** Softer, more premium than current 0.625rem (10px) base

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Small elements (badges, tags) |
| `radius-md` | 12px | Cards, buttons (default) |
| `radius-lg` | 16px | Large cards, modals |
| `radius-xl` | 20px | Hero cards, featured elements |
| `radius-2xl` | 24px | Extra large cards |
| `radius-3xl` | 32px | Hero sections, full-width elements |
| `radius-4xl` | 40px | Hero images, decorative elements |

**Current:** `--radius: 0.625rem` (10px)
**Update to:** `--radius: 1rem` (16px) for softer, premium feel

### 2.3 Typography Scale

#### Font Weights
- **300 (Light):** Large display text, subtle emphasis
- **400 (Regular):** Body text, standard content
- **500 (Medium):** Emphasized body text, subheadings
- **600 (Semibold):** Headings, buttons, primary actions
- **700 (Bold):** Hero headings, major emphasis

#### Font Sizes (Responsive Clamp)

| Element | Mobile | Desktop | Line Height | Letter Spacing |
|---------|--------|---------|-------------|----------------|
| **Display** | 48px | 96px | 1.1 | -0.02em |
| **Hero** | 40px | 80px | 1.15 | -0.015em |
| **Section Heading** | 32px | 48px | 1.2 | -0.01em |
| **Subheading** | 20px | 28px | 1.3 | -0.005em |
| **Body Large** | 16px | 18px | 1.7 | -0.003em |
| **Body** | 16px | 16px | 1.7 | -0.003em |
| **Small** | 14px | 14px | 1.6 | 0 |
| **Fine Print** | 12px | 12px | 1.5 | 0 |

**CSS Implementation:**
```css
.text-display {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.text-hero {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.15;
  font-weight: 600;
  letter-spacing: -0.015em;
}

.text-section {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.01em;
}
```

### 2.4 Line Heights
- **Headings:** 1.1-1.2 (tight, premium feel)
- **Subheadings:** 1.3-1.4 (comfortable reading)
- **Body:** 1.7 (generous for readability)
- **Fine print:** 1.5 (slightly tighter for compact text)

### 2.5 Letter Spacing
- **Large headings:** -0.02em (very tight for premium feel)
- **Medium headings:** -0.01em to -0.015em (tight but readable)
- **Body:** -0.003em (imperceptibly tight for natural reading)
- **Small text:** 0 (normal spacing)

---

## 3. Color Palette

**Color Space:** OKLCH (already in use - maintain for perceptual uniformity)

### 3.1 Dark Mode (Primary Theme)
**Philosophy:** Rich dark grays, not pure black, for depth and sophistication

| Role | OKLCH Value | Hex Approx | Usage |
|------|-------------|------------|-------|
| **Background** | `oklch(0.18 0 0)` | #2a2a2a | Main background |
| **Card** | `oklch(0.22 0 0)` | #353535 | Card backgrounds |
| **Foreground** | `oklch(0.98 0 0)` | #f8f8f8 | Primary text |
| **Muted** | `oklch(0.55 0 0)` | #8a8a8a | Secondary text |
| **Border** | `oklch(1 0 0 / 10%)` | rgba(255,255,255,0.1) | Subtle borders |

**Current Dark Mode:**
- `--background: oklch(0.145 0 0)` (darker)
- `--card: oklch(0.205 0 0)` (slightly lighter)

**Updated to Richer Darks:**
- `--background: oklch(0.18 0 0)` (less harsh, more depth)
- `--card: oklch(0.22 0 0)` (subtle layering)

### 3.2 Light Mode
**Philosophy:** Off-whites, not pure white, for comfort

| Role | OKLCH Value | Hex Approx | Usage |
|------|-------------|------------|-------|
| **Background** | `oklch(0.98 0 0)` | #f8f8f8 | Main background |
| **Card** | `oklch(1 0 0)` | #ffffff | Card backgrounds |
| **Foreground** | `oklch(0.15 0 0)` | #252525 | Primary text |
| **Muted** | `oklch(0.55 0 0)` | #8a8a8a | Secondary text |
| **Border** | `oklch(0 0 0 / 10%)` | rgba(0,0,0,0.1) | Subtle borders |

### 3.3 Accent Colors
**Philosophy:** Subtle gradients, low saturation, sophisticated

| Role | OKLCH Value | Usage |
|------|-------------|-------|
| **Primary** | `oklch(0.6 0.15 250)` | Primary CTAs, links (blue) |
| **Secondary** | `oklch(0.65 0.12 280)` | Secondary accents (purple) |
| **Tertiary** | `oklch(0.6 0.1 220)` | Subtle highlights (light blue) |

**Gradient Strategy:** Use 2-3 complementary hues at low saturation (0.1-0.15 chroma) for subtle mesh gradients.

### 3.4 Mesh Gradient Palette
For background mesh gradients (2-3 radial gradients layered):

| Layer | OKLCH Value | Opacity | Position |
|-------|-------------|---------|----------|
| **Gradient 1** | `oklch(0.22 0.01 240)` | 30% | top-left (0% 0%) |
| **Gradient 2** | `oklch(0.22 0.015 280)` | 25% | top-right (100% 0%) |
| **Gradient 3** | `oklch(0.22 0.008 220)` | 20% | bottom-right (100% 100%) |
| **Gradient 4** | `oklch(0.22 0.012 260)` | 30% | bottom-left (0% 100%) |

**Note:** Low chroma (0.008-0.015) ensures subtle, sophisticated effect.

---

## 4. Component Patterns

### 4.1 Card Styles

#### Glassmorphism Card
```css
.glass-card {
  background: oklch(1 0 0 / 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid oklch(1 0 0 / 0.1);
  box-shadow:
    0 4px 6px -1px oklch(0 0 0 / 10%),
    0 2px 4px -2px oklch(0 0 0 / 10%);
}
```

**Dark Mode Variant:**
```css
.dark .glass-card {
  background: oklch(1 0 0 / 0.03);
  border: 1px solid oklch(1 0 0 / 0.08);
}
```

**Usage:** Hero cards, featured projects, premium content areas

#### Standard Card
```css
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all 300ms ease;
}
.card:hover {
  box-shadow:
    0 10px 15px -3px oklch(0 0 0 / 10%),
    0 4px 6px -4px oklch(0 0 0 / 10%);
  transform: translateY(-4px);
}
```

### 4.2 Button Styles

#### Primary Button (Pill-Shaped)
```css
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: 9999px; /* Fully rounded */
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 300ms ease;
}
.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px -5px oklch(0.6 0.15 250 / 40%);
}
```

#### Secondary Button (Outline)
```css
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 9999px;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 300ms ease;
}
.btn-secondary:hover {
  background: var(--accent);
  border-color: var(--primary);
}
```

### 4.3 Section Spacing

#### Vertical Padding
```css
.section-py {
  padding-top: 6rem; /* 96px */
  padding-bottom: 6rem;
}

@media (min-width: 768px) {
  .section-py {
    padding-top: 8rem; /* 128px */
    padding-bottom: 8rem;
  }
}
```

**Tailwind Classes:** `py-24 md:py-32`

#### Container Widths
- **Content containers:** `max-w-7xl` (1280px) - for multi-column layouts
- **Text containers:** `max-w-5xl` (1024px) - for readable text content
- **Narrow text:** `max-w-3xl` (768px) - for focused content

### 4.4 Grid Patterns (Bento Layouts)

#### Standard Bento Grid
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem; /* 24px */
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Card Sizes:**
- **Small (1x1):** `col-span-1`
- **Medium (2x1):** `col-span-2`
- **Large (2x2):** `col-span-2 row-span-2`
- **Wide (3x1):** `col-span-3`

---

## 5. Visual Effects

### 5.1 Mesh Gradient Background
```css
.mesh-gradient {
  background:
    radial-gradient(at 0% 0%, oklch(0.22 0.01 240 / 0.3) 0px, transparent 50%),
    radial-gradient(at 100% 0%, oklch(0.22 0.015 280 / 0.25) 0px, transparent 50%),
    radial-gradient(at 100% 100%, oklch(0.22 0.008 220 / 0.2) 0px, transparent 50%),
    radial-gradient(at 0% 100%, oklch(0.22 0.012 260 / 0.3) 0px, transparent 50%);
}
```

### 5.2 Grain Texture Overlay
```css
.grain-texture {
  position: relative;
}
.grain-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}
```

### 5.3 Depth Shadows

#### Layered Shadow System
```css
.shadow-sm { box-shadow: 0 1px 2px 0 oklch(0 0 0 / 5%); }
.shadow-md { box-shadow: 0 4px 6px -1px oklch(0 0 0 / 10%), 0 2px 4px -2px oklch(0 0 0 / 10%); }
.shadow-lg { box-shadow: 0 10px 15px -3px oklch(0 0 0 / 10%), 0 4px 6px -4px oklch(0 0 0 / 10%); }
.shadow-xl { box-shadow: 0 20px 25px -5px oklch(0 0 0 / 10%), 0 8px 10px -6px oklch(0 0 0 / 10%); }
```

#### Glow Effects
```css
.glow-primary {
  box-shadow: 0 0 20px oklch(0.6 0.15 250 / 30%);
}
.glow-hover:hover {
  box-shadow: 0 0 30px oklch(0.6 0.15 250 / 40%);
}
```

---

## 6. Typography System

### 6.1 Font Stack
**Priority:** System fonts matching SF Pro (San Francisco) for Apple-like aesthetics

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Font Smoothing:**
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### 6.2 Responsive Typography

#### Display Text (Hero)
```css
.text-display {
  font-size: clamp(3rem, 8vw, 6rem); /* 48px - 96px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

#### Section Headings
```css
.text-section {
  font-size: clamp(2rem, 4vw, 3rem); /* 32px - 48px */
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.01em;
}
```

#### Body Text
```css
body {
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: -0.003em;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

---

## 7. Implementation Notes

### 7.1 Current State
- **Border Radius:** 0.625rem (10px) → Update to 1rem (16px)
- **Dark Mode:** Pure grays → Rich darks (oklch(0.18))
- **Typography:** Standard Tailwind → Responsive clamp with negative letter-spacing
- **Utilities:** Basic → Add mesh-gradient, grain-texture, glass-card

### 7.2 Migration Strategy
1. **Phase 1 (This Plan):** Establish design system tokens
2. **Phase 2 (Next Plan):** Apply tokens to backgrounds and hero section
3. **Phase 3+:** Apply to remaining sections incrementally

### 7.3 Browser Compatibility
- **OKLCH:** Supported in all modern browsers (Chrome 111+, Safari 15.4+, Firefox 113+)
- **backdrop-filter:** Supported in all modern browsers
- **clamp():** Supported in all modern browsers
- **Font smoothing:** Webkit-specific for Safari optimization

---

## 8. Design Principles

### 8.1 Apple's Core Principles Applied
1. **Simplicity:** Clean layouts, generous whitespace, focused content
2. **Depth:** Layered shadows, glassmorphism, subtle gradients
3. **Movement:** Smooth animations (300ms standard), micro-interactions
4. **Typography:** Large, bold headings with tight spacing for premium feel
5. **Color:** Subtle, sophisticated - never harsh or saturated

### 8.2 Implementation Guidelines
- **DO:** Use generous spacing (py-24 to py-32 for sections)
- **DO:** Apply negative letter-spacing to headings for tight, premium look
- **DO:** Use rich darks instead of pure black
- **DO:** Layer shadows for depth (2+ shadow values)
- **DON'T:** Change content structure or routes
- **DON'T:** Add new sections (visual enhancement only)
- **DON'T:** Use saturated colors (keep chroma low: 0.1-0.15)
- **DON'T:** Break existing functionality

---

**Status:** Ready for implementation
**Next Step:** Update CSS variables with enhanced tokens (Task 2)
**Created:** 2026-01-28
