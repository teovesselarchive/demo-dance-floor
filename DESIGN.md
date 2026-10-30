---
name: Elite Surfaces
description: A bold event editorial, with the dance floor as its stage.
colors:
  bg: "#151515"
  panel: "#202020"
  text: "#f4f2ed"
  muted: "#b6b5b0"
  accent: "#ff725e"
  accent-hover: "#ff9686"
  line: "rgba(244,242,237,.18)"
  light-bg: "#f3f2ef"
  light-panel: "#e8e7e3"
  light-text: "#191919"
  light-muted: "#565653"
  light-accent: "#b93322"
  light-accent-hover: "#952619"
  light-line: "rgba(25,25,25,.2)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(90px,11.5vw,178px)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(56px,6.5vw,96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(38px,4vw,56px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  square: "0"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "8px"
  small: "16px"
  base: "24px"
  medium: "32px"
  large: "48px"
  section: "clamp(72px,8vw,128px)"
  gutter: "clamp(24px,5.5vw,96px)"
components:
  button-coral:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-coral-hover:
    backgroundColor: "{colors.accent-hover}"
  button-light:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  floor-info:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "clamp(28px,4vw,60px)"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.square}"
    padding: "13px 0 14px"
  choice:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "11px 17px"
---

# Design System: Elite Surfaces

## Overview

**Creative North Star: “The dance floor as a stage.”**

A bold event editorial for Elite Surfaces, created for Vessel Archive. Oversized condensed statements, original event photography, charcoal surfaces, warm white, and vivid coral make celebrations feel immediate. The system balances expressive display type with quiet, readable supporting copy.

**Key characteristics:** cinematic image stages; asymmetrical editorial grids; generous section spacing; sharp media edges; rounded controls. This document records the shipped code, refreshing the provisional direction under the user's delegated creative authority.

## Colors

**Primary:** Coral (`accent`) marks emphatic words, primary actions, selected tabs, focus, and small editorial accents. The brighter coral remains on photographic stages in both preferences. Its softer hover variant belongs to dark-mode primary buttons.

**Neutral:** Charcoal `bg` and slightly lighter `panel` define the default reading surfaces. Warm `text`, subdued `muted`, and translucent `line` create hierarchy without extra decoration. Photography and the supplied logo provide the remaining color.

**Light preference:** `prefers-color-scheme: light` swaps the reading surfaces to `light-bg` / `light-panel`, dark text, and deeper red `light-accent`. Quote-section primary buttons use deep red with white text and the darker hover value. Other coral buttons retain bright coral with dark text. Photo stages, header, mobile menu, and lightbox stay dark. There is no manual theme switch.

**The Image Contrast Rule.** Preserve the actual image overlays when changing crops or copy. The mobile hero uses a stronger top scrim, holding dark opacity through the headline before opening toward the photograph. Accent words and pale text must remain readable over the selected image.

## Typography

Self-hosted **Barlow Condensed** supplies display, headings, product selectors, testimonial statements, and the closing wordmark; **Manrope** supplies body copy and controls. Display uses weight 600; the bundled 700 file remains available but is not the default heading weight.

The frontmatter captures the main roles. The hero has a tight two-line display; standard page titles use `clamp(76px,10.7vw,164px)` and detail titles use `clamp(76px,9.2vw,140px)`. Most body copy is 14px with a maximum paragraph measure of 65ch; detail descriptions reach 16px. Supporting labels range from 10–13px. Uppercase is limited to small specification labels, not body copy.

**The Statement Rule.** Reserve dense condensed type for statements and headings. Use Manrope for explanations, navigation, forms, and captions. Emphasis within major headings uses upright coral type, not italics.

## Layout

Sections use fluid vertical spacing and gutters from the frontmatter, with a maximum content width of 1800px. Image stages and quote backgrounds extend across the page. Desktop compositions use unequal columns: floor panels and section headings at 1.5:1, gallery at 1.25:1, and service, FAQ, and inquiry layouts close to equal. Gallery offsets and mixed image ratios create editorial rhythm; the design does not rely on a uniform card grid.

At **1023px and below**, gaps and product padding tighten. At **767px and below**, gutters become 24px, most major layouts stack, section spacing becomes 72px, galleries normalize to 4:3, and their offsets disappear. Desktop navigation becomes a menu with a retained inquiry action. Floor tabs stay in three columns; the form keeps two columns. Mobile h2 is 62px and hero display uses `clamp(82px,17.5vw,132px)`; quote headings use 72px.

At **374px and below**, gutters become 20px, form fields stack, the hero signoff hides, and display sizes tighten. At **1600px and above**, the hero is 900px tall. Detail pages reuse the same type, gutters, photo stages, product comparisons, and stacked mobile patterns.

## Elevation & Depth

Surfaces are flat. Tonal panels, thin rules, photographic scrims, and staggered imagery create depth. Shadows belong only to overlays: mobile navigation uses `0 24px 40px #0004`, and the lightbox uses `0 25px 100px #0009` above a `#000d` backdrop. Avoid introducing floating card shadows into content sections.

## Shapes

Media, content panels, and form fields have square edges. Actions and floor-choice chips use pill corners; the menu trigger is circular. One-pixel rules separate sections, tabs, fields, and FAQ rows. The selected floor tab uses a three-pixel coral underline. Arrow icons are simple inline strokes, typically 20px inside actions.

## Components

- **Buttons:** Coral primary, warm-white secondary, and transparent outlined variants share a 58px minimum height, pill shape, and 24px icon gap. Small header buttons use a 48px minimum height. Hover lifts buttons 3px; active returns them with a 0.98 scale. Global focus is a two-pixel accent outline with a 6px offset.
- **Navigation:** Absolute over the opening stage, with small Manrope links and a coral underline on hover. The mobile trigger changes to a close mark; the menu closes on link selection, Escape, or returning to desktop width. Escape restores trigger focus.
- **Floor collection:** Three accessible tabs reveal one large photo and a square information panel. Arrow keys, Home, and End move selection; the selected tab has a visible underline and arrow. Choosing a tab also selects the corresponding inquiry radio. Product actions carry the floor choice to the inquiry page.
- **Photography and gallery:** Real source imagery remains central. Hover scales images subtly (1.03–1.035); gallery reveal controls are always visible on mobile. The native dialog displays a contained image, caption, previous/next controls, keyboard arrows, Escape, and focus restoration to its trigger. Photo stages use cover crops; dialog images use contain.
- **FAQ:** Native details rows use thin dividers and a coral plus that rotates into a cross when open.
- **Inquiry fields:** Transparent, square, bottom-border fields with visible labels. Focus changes the border to accent. Fields are at least 48px high; mobile text inputs use 16px text. Radio choices are pills with a solid selected fill and separate focus outline. The indoor-only Infinity constraint produces an inline message and native validation. A valid inquiry reveals a readable summary, copy feedback, and an email-draft action; it does not send automatically. Edits hide the stale summary.
- **Motion:** The shared easing is `cubic-bezier(.16,1,.3,1)`. Hero entrance lasts 1.1s with a 0.14s second-line delay; supporting hero content follows, sections reveal once in 0.8s, and floor imagery enters in 0.6s. Hover transitions are short, without looping decoration. Reduced-motion preference removes animation/transitions and smooth scrolling while preserving visible content and functionality.

## Do's and Don'ts

- **Do** retain the expressive type, original photography, sharp surfaces, and rounded controls as one visual family.
- **Do** keep body copy readable and restore image contrast after changing photographs or crops.
- **Do** preserve both color preferences, keyboard states, visible labels, and reduced-motion behavior.
- **Don't** turn editorial sections into repetitive floating cards or apply pill corners to photographs.
- **Don't** add ornamental motion that competes with event imagery or hide content behind animation.
- **Don't** substitute invented business claims for authentic source material.

The system was extracted directly from the final HTML, CSS, and JavaScript. Impeccable context, concept, and detector commands were unavailable because of engine/cache access limitations; no automated design-detector result is claimed. The manual review's mobile headline contrast issue was corrected with the stronger scrim before this record was generated.
