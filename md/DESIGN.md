---
name: Astra AI Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002387'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#104af0'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#007981'
  on-tertiary-container: '#c4faff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies the intersection of high-end consulting and cutting-edge artificial intelligence. The aesthetic is rooted in **Modern Minimalism** with a **Glassmorphic** layer, prioritizing clarity, precision, and a sense of infinite digital space. It is designed to evoke a feeling of "sophisticated intelligence"—where the UI feels less like a tool and more like an advanced cognitive environment.

The visual language balances deep, monochromatic obsidian surfaces with ethereal, neural-inspired gradients. It avoids unnecessary ornamentation, relying instead on deliberate whitespace, pin-sharp typography, and subtle light-refraction effects to guide the user's focus. The emotional response should be one of calm confidence, technical superiority, and premium exclusivity.

## Colors

The palette is anchored in a "Deep Dark" philosophy. The primary surface is **Obsidian (#0A0A0A)**, providing a void-like depth that allows secondary elements to emerge. **Charcoal (#171717)** is used for elevated containers and UI grouping.

Accents are used sparingly but with high intensity. **Electric Blue** serves as the primary action color, signifying energy and connectivity. **Soft Violet** is paired with the blue in gradients to represent the "neural" aspect of the brand—blending logic with creativity. For light mode transitions, the system utilizes high-chroma whites and cool-toned grays to maintain the clinical, premium feel without losing the technical edge.

## Typography

This design system utilizes **Geist** for its entire typographic scale. Geist was chosen for its monolinear precision and developer-centric soul, which aligns perfectly with a technical AI agency. 

Headlines use tight tracking and heavy weights to create a commanding presence. Display sizes should be used for hero sections with significant negative space. Body text maintains a generous line height (1.5–1.6) to ensure legibility against dark backgrounds. Use the "Label" style for metadata, badges, and small technical callouts, always applying a slight letter-spacing increase and uppercase styling to denote "system status" or categorization.

## Layout & Spacing

The layout philosophy is **Spacious Fluidity**. It uses a 12-column grid system with generous outer margins to create a "contained" feel within the viewport, emphasizing exclusivity. 

Key principles:
- **Breathable Margins:** Desktop layouts should never feel cramped; use 64px margins to frame the content.
- **Section Transitions:** Avoid hard horizontal dividers. Use large vertical padding (120px–160px) and subtle background gradient glows to separate sections.
- **Micro-interactions:** Spacing between related elements (like an icon and its label) should strictly follow the 8px base unit (e.g., 8px, 16px, 24px).

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Backdrop Blurs** rather than traditional shadows. 

1.  **Level 0 (Base):** Obsidian (#0A0A0A) background.
2.  **Level 1 (Card/Surface):** Charcoal (#171717) with a 1px border of `rgba(255, 255, 255, 0.08)`.
3.  **Level 2 (Interactive/Float):** Glassmorphic surfaces with `backdrop-filter: blur(12px)` and a slightly more luminous border `rgba(255, 255, 255, 0.15)`.

To simulate a "neural" environment, use "Ambient Glows"—large, low-opacity radial gradients of Electric Blue or Soft Violet positioned behind glass layers. These should appear to be "trapped" within the glass or floating deep in the background.

## Shapes

The design system uses a **Rounded (0.5rem)** corner language. This radius is large enough to feel modern and approachable, but sharp enough to maintain a technical, architectural feel. 

- **Small Components:** (Buttons, Inputs) use the base 0.5rem (8px).
- **Medium Components:** (Cards, Modals) use 1rem (16px).
- **Large Layout Containers:** Use 1.5rem (24px) for sections that are "boxed" within the main viewport.

Avoid fully pill-shaped buttons; the geometric 8px radius provides a more professional, "agency" look compared to the consumer-grade feel of fully rounded ends.

## Components

### Buttons
Primary buttons use the **Accent Gradient** (Blue to Violet) with white text. Hover states should trigger a subtle outer glow (box-shadow) rather than a color change. Secondary buttons are "Ghost" style: 1px border with a backdrop blur fill.

### Cards
Cards should be the primary vessel for information. They feature a #171717 background, 16px corner radius, and a subtle top-down "lighting" effect achieved via a linear-gradient border (white at 10% opacity to transparent).

### Input Fields
Inputs are minimalist: a dark fill (#050505), no border by default, and a 1px Electric Blue bottom border that "glows" and expands to a full border on focus.

### Chips/Badges
Small, monochromatic badges with a 0.5px border. Use them for technical specs like "GPT-4o" or "Real-time."

### Neural Connectors
A custom component for this design system: thin, 1px lines with a gradient "pulse" animation that move between cards or sections to visually represent data flow and AI connectivity.