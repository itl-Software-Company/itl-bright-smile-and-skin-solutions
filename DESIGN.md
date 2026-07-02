# DESIGN.md — Bright Smile v1

> Design system reference for developers and AI agents.
> Single consistent design across main site and client portal: **light, teal, Manrope**.

---

## Design System Identity

| Key | Value |
|-----|-------|
| **System name** | Bright Smile Glow v1 |
| **Default theme** | Light (main site) / Dark (client portal) |
| **Main site typeface** | Manrope (400–800) via Google Fonts |
| **Portal typeface** | Inter (300–900) via Google Fonts |
| **Icons** | Material Symbols Rounded (main site) / Outlined (portal) |
| **CSS approach** | Vanilla CSS + `--bs-*` custom properties |

---

## Brand Quick Reference

| | Value |
|--|-------|
| **Business name** | No.1 Bright Smile and Skin Solutions |
| **Short name** | Bright Smile |
| **Owner** | Jacqie |
| **Address** | Filtr Hair & Beauty, North Street, Newcastle under Lyme, ST5 1AZ |
| **Email** | no1brightsmileandskinsolutions@gmail.com |
| **Instagram** | @no1brightsmileandskinsolutions |
| **Booking** | [Hey Goldie](https://book.heygoldie.com/brightsmileandskinsolutions) |
| **Services** | Teeth Whitening, Fat Dissolving, Facials, Vitamin Injections |
| **Developer** | In The Look Software Company (ITL) / Worzl.ai |
| **Theme color** | `#0b1225` (portal meta tag) |

---

## Main Site Colour Tokens

The existing public-facing website uses a light, clean aesthetic.

### Primary

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#13ecc8` Teal | CTA buttons, accents, links |
| `--color-primary-dark` | `#0ab8a0` | Hover states |
| `--color-primary-light` | `#a3f5e8` | Subtle highlights |
| `--color-primary-bg` | `#e8fdf9` | Background tints |

### Surfaces

| Token | Value |
|-------|-------|
| `--color-bg` | `#ffffff` |
| `--color-bg-soft` | `#f8f9fb` |
| `--color-text` | `#1a1a2e` |
| `--color-text-light` | `#6b7280` |
| `--border-radius` | `10px` |
| `--border-radius-lg` | `16px` |

---

## Client Portal Colour Tokens

The portal uses a dark, premium aesthetic with warm metallic accents.

### Primary

| Token | Light | Dark (default) |
|-------|-------|----------------|
| `--bs-primary` | `#c07a50` Warm Bronze | `#e8a87c` Rose Gold |
| `--bs-on-primary` | `#ffffff` | `#2a1810` |
| `--bs-primary-glow` | — | `rgba(232,168,124,0.4)` |

### Surfaces

| Token | Value |
|-------|-------|
| `--bs-bg` | `#0b1225` Deep Navy |
| `--bs-surface` | `#0f1829` |
| `--bs-surface-container` | `#171f32` |
| `--bs-surface-container-high` | `#222a3d` |
| `--bs-surface-bright` | `#31394c` |

### Text

| Token | Value |
|-------|-------|
| `--bs-on-surface` | `#f0e6df` Warm White |
| `--bs-on-surface-variant` | `#bca99d` |
| `--bs-text-muted` | `#7a6e65` |

### Accents

| Name | Hex | Usage |
|------|-----|-------|
| Rose Gold | `#e8a87c` | Primary accent, gradient start |
| Soft Pink | `#d4a5a5` | Secondary accent, gradient end |
| Warm Bronze | `#c07a50` | Hover states |
| Champagne | `#f5e6d3` | Highlight text |
| Success | `#34d399` Emerald | Status badges |
| Warning | `#fbbf24` Amber | Pending badges |
| Error | `#f87171` Rose | Error states |

### Status Badges

| Status | Background | Text |
|--------|-----------|------|
| Complete | `rgba(52,211,153,0.15)` | `#34d399` |
| In Progress | `rgba(232,168,124,0.15)` | `#e8a87c` |
| Pending | `rgba(251,191,36,0.15)` | `#fbbf24` |
| Not Started | `rgba(122,110,101,0.15)` | `#7a6e65` |

---

## Portal Theme Rules

### Chrome Pinning (Critical)

**Header and footer are ALWAYS `#0b1225` dark navy.**

```
--bs-header-bg: rgba(11,18,37,0.90)
--bs-footer-bg: #0b1225
```

Header uses `backdrop-filter: blur(20px)` for glassmorphism.

### Card Treatment (Dark Mode)

| Property | Value |
|----------|-------|
| Background | `rgba(23,31,50,0.55)` |
| Border | `rgba(232,168,124,0.10)` |
| Shadow | `rgba(0,0,0,0.30)` |
| Blur | `backdrop-filter: blur(12px)` |

### Hover States

Cards lift on hover with rose gold border glow:
```css
.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(232,168,124,0.25);
  box-shadow: 0 8px 32px rgba(232,168,124,0.15);
}
```

---

## Typography Scale

| Level | Size | Weight | Tracking | Line Height |
|-------|------|--------|----------|-------------|
| Display | `clamp(40px,6vw,72px)` | 800 | `-0.03em` | 1.05 |
| Headline | `clamp(24px,4vw,40px)` | 700 | `-0.02em` | 1.15 |
| Title | `18px` | 600 | normal | — |
| Body | `16px` | 400 | normal | 1.6 |
| Body emphasis | `14px` | 600 | normal | — |
| Label | `11px` | 600 | `0.12em` | UPPERCASE |
| Caption | `10px` | 500 | `0.10em` | UPPERCASE |

---

## Utility Classes (Portal)

| Class | Effect |
|-------|--------|
| `.glass-panel` | Elevated container with frosted dark effect |
| `.glass-card` | Content card with translucent bg + blur |
| `.glass-header` | Fixed header with `blur(20px)` |
| `.gradient-text` | `linear-gradient(135deg, #e8a87c, #d4a5a5)` clip |
| `.rose-glow` | `text-shadow: 0 0 12px rgba(232,168,124,0.4)` |
| `.active-glow` | `box-shadow: 0 0 25px rgba(232,168,124,0.15)` |

---

## Background Orbs

Floating decorative orbs create depth. Portal uses two:

```css
.orb-1 {
  background: radial-gradient(circle, rgba(232,168,124,0.08) 0%, transparent 70%);
  width: 600px; height: 600px;
  top: -200px; right: -200px;
  animation: float 20s ease-in-out infinite;
}

.orb-2 {
  background: radial-gradient(circle, rgba(212,165,165,0.06) 0%, transparent 70%);
  width: 500px; height: 500px;
  bottom: -150px; left: -150px;
  animation: float 25s ease-in-out infinite reverse;
}
```

---

## Focus States

```css
:focus-visible {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}
```

---

## Selection

```css
::selection {
  background: color-mix(in srgb, var(--bs-primary) 20%, transparent);
  color: var(--bs-primary);
}
```

---

## Transitions

- Theme switch: `background-color 0.3s ease, color 0.3s ease`
- Hover states: `0.2s ease`
- Card lift: `transform 0.3s ease, box-shadow 0.3s ease`

---

## File Map

| File | Purpose |
|------|---------|
| `css/styles.css` | Main site tokens and components |
| `js/main.js` | Main site interactions (scroll, nav, forms) |
| `portal/styles.css` | Portal design system — all tokens, glass utilities |
| `portal/index.html` | Client launch portal — readiness tracker |
| `portal/documents.html` | Document viewer with inline rendering |
| `DESIGN.md` | This file — design system reference |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Desktop | `>1024px` | Multi-column grids |
| Tablet | `768px–1024px` | 2-column grids |
| Mobile | `<768px` | Single column, stacked layout |
| Small Mobile | `<480px` | Compact CTAs, reduced padding |
