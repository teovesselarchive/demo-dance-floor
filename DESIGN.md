---
name: Elite Surfaces
description: A photographic event editorial, with the floor and the celebration in focus.
colors:
  bg: "#151515"
  panel: "#202020"
  text: "#f4f2ed"
  muted: "#b6b5b0"
  accent: "#9dbbff"
  accent-hover: "#bed1ff"
  line: "rgba(244,242,237,.18)"
  light-bg: "#f3f2ef"
  light-panel: "#e8e7e3"
  light-text: "#191919"
  light-muted: "#565653"
  light-accent: "#2855aa"
  light-accent-hover: "#3869c5"
  light-line: "rgba(25,25,25,.2)"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(74px,8.2vw,122px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(44px,5.1vw,74px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-.04em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  media: "0"
  control: "4px"
  menu: "50%"
spacing:
  gutter: "clamp(24px,5.5vw,96px)"
  section: "clamp(72px,8vw,128px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "16px 26px"
---

# Elite Surfaces design system

The creative direction is an event editorial: actual floors and celebrations, generous charcoal space, broad white typography, and cornflower blue where the visitor acts. Vessel Archive receives a quiet footer credit; its visual identity is not used as the customer's identity.

## References and interpretation

[Meetings](https://www.cssdesignawards.com/sites/meetings/41918/) is an equipment-rental and event-production company. Its site won CSS Design Awards Website of the Day on September 10, 2022. Its live site was visually reviewed: offset photographic planes, central event imagery, large white lettering, and a restrained black field informed the opening composition.

[OBSESD Wedding Photography](https://www.cssdesignawards.com/sites/obsesd-wedding-photography/47528/) received Special Kudos on May 26, 2025. Its archived award screenshot supplied a second reference for editorial hierarchy and giving photographs room. The current domain has changed, so the reference is the awarded presentation, not a claim about today's site.

The implementation is original. No reference website code, photography, logo, or wording was copied into the demo.

## Hero

“The floor is yours.” is two lines of upright, white Manrope. It has no highlighted word, rotated label, underline decoration, or colored emphasis. A portrait-oriented first-dance image anchors two smaller offset photographs of Slate White and Infinity floors. A scrim behind the headline maintains contrast. The service description, primary floor action, and small closing thought occupy a separate bottom row.

Desktop uses a 39% center image, with two 23% side images. At intermediate widths, the center widens to 47%. Below 768px it becomes 72%, the outer images are clipped at the viewport edges, and the bottom row keeps a service description and primary action. The small signoff is removed. The hero uses stable small-viewport sizing and retains room for its action at the smallest tested phone width, 320px.

The center image uses responsive landscape WebPs on desktop and dedicated portrait crops on mobile. These are AI-enhanced derivatives of the original photograph; synthesized detail is not additional camera-captured detail. The original photo remains untouched in the gallery. See `assets/sources.json` and the recorded enhancement prompt.

## Color and type

Charcoal, warm white, and blue form the default palette. Blue is reserved for primary controls, selection, focus, and small functional details. Heading emphasis inherits its surrounding text color. There is no citron, coral, or neon emphasis plate.

Manrope is self-hosted and supplies headings, body, controls, floor selectors, and the footer wordmark. Major headings use weight 500 and tracking no tighter than -0.04em. Body copy is 14px with a comfortable line length. The previously bundled Barlow Condensed remains available for the decorative quotation mark and legacy asset portability; it is not the heading voice.

Light preference uses paper-white reading surfaces, dark text, and deeper blue for accessible small accents. The header, hero, photo stages, and lightbox remain dark. Pale-blue controls use charcoal text in both preferences. The light quote action uses deeper blue and white text. No manual theme toggle is needed.

## Layout and controls

The introduction is a two-column editorial statement and supporting copy, stacking on mobile. The removed geometric floor graphic is not part of this direction. Floor content remains an accessible tab group with photographic panels. The gallery uses unequal columns and staggered images on desktop, then a single column on mobile. Service, FAQ, and inquiry sections preserve the original demo's information and functionality.

Media has square edges. Buttons and radio choices have a 4px radius; only the mobile menu trigger is circular. All actions use text labels without decorative arrows. Selected floor tabs have a blue underline. Keyboard focus uses a two-pixel accent outline and generous offset. Mobile controls retain usable touch areas; fields retain visible labels.

## Motion and interaction

One-time photographic frame reveals open with a restrained clip-path transition. Hero lettering and supporting content enter gently. The shared easing is `cubic-bezier(.16,1,.3,1)`. Buttons lift slightly on hover and return on press. Gallery images scale subtly. Nothing loops or hijacks scrolling. Reduced-motion preference removes animations, transitions, and smooth scrolling without hiding content.

The mobile menu closes on Escape, link selection, or returning to desktop width. Floor tabs support left/right arrows, Home, and End; choosing a floor also preselects the inquiry radio. Gallery dialogs have text-only previous, next, and close controls, keyboard support, and focus restoration.

The inquiry form is a demo: it checks required fields, past dates, and Infinity's indoor-only constraint, then prepares a copyable summary and optional email draft. It never sends automatically or stores leads.

## Verification and limits

The original demo's routes, contact paths, and product facts remain intact. Desktop, intermediate, and mobile compositions are manually checked, with local link, single-H1, duplicate-ID, script-syntax, and no-arrow scans. Light-mode contrast is supported through separate semantic tokens. The Impeccable engine was unavailable in this environment, so no automated detector result is claimed. No Lighthouse score or cross-device hardware certification is claimed.
