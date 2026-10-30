# Elite Surfaces / Vessel Archive demo

A complete, responsive redesign of Elite Dance Floors. A layered photographic opening, broad white typography, cornflower-blue controls, an interactive floor collection, event gallery, and a locally generated inquiry. The headline is “The floor is yours.”

## Run

Open `index.html` directly, or serve this folder:

```sh
python3 -m http.server 4173
```

Visit `http://localhost:4173`. No installation, build step, API keys, or paid dependencies are needed.

## Publish from GitHub

All files in this folder belong at the repository root. The site uses relative URLs and works at a project subpath such as `/demo-dance-floor/`.

For GitHub Pages, choose **Settings → Pages → Deploy from a branch → main → /(root)** if Pages is available for the repository's plan and visibility. Any static host can also serve the folder directly. Repository visibility and hosting settings have not been changed by this demo.

## Pages

- Home: `index.html`
- Oak Wood: `Oak_Dance_Floor/index.html`
- Infinity: `infinity_dance_floor/index.html`
- Slate White: `slate_white_dance_floor/index.html`
- DJs: `Professional_DJs/index.html`
- Testimonials: `Testimonials/index.html`
- Inquiry: `request-a-quote/index.html`
- Contact alias: `get_in_touch/index.html`
- Missing page: `404.html`

## Editing

Edit text in the HTML files, shared styles in `styles.css`, and interactions in `app.js`. Photography and fonts are in `assets/`. `PRODUCT.md` and `DESIGN.md` record the content and design decisions. The original URL names are retained as directories for static hosting.

## Inquiry behavior

The form validates required fields, prevents a past event date and an outdoor Infinity selection, then shows an editable-by-returning-to-the-form inquiry summary. Copy it or open an email draft addressed to `Info@elitedancefloors.com`. The browser does not submit or store leads. Connect a real form endpoint before using this as a production lead-generation website. No analytics, cookies, API keys, or third-party runtime requests are included.

The demo has `noindex,nofollow` metadata and a disallow-all `robots.txt`. Update both before a production launch. A 404 page is included; the hosting platform must serve it with HTTP 404 status for missing routes.

## Content and assets

Business offerings, public contact information, service locations, logo, event photos, and the short Olivia B. review excerpt come from [Elite Dance Floors](https://www.elitedancefloors.com/). Original imagery is retained for this redesign demonstration; ownership stays with its respective owners. Source URLs and provenance appear in `assets/sources.json`.

The decorative chrome disco ball was generated using the built-in ImageGen tool. It is an illustration, not a photograph of a rentable product. Its exact prompt is in `assets/disco-ball-prompt.txt`.

The homepage hero is an AI-enhanced derivative of the original wedding photo. The original remains unchanged in the gallery. Separate responsive landscape and portrait WebP files improve clarity and mobile loading; synthesized detail is not additional camera-captured detail. The exact enhancement prompt is included in `assets/hero-enhancement-prompt.txt`. The disco-ball cutout is served as an optimized WebP.

Barlow Condensed and Manrope are self-hosted under the included SIL Open Font Licenses. All action arrows have been removed; buttons use text labels. The Tabler license remains bundled from the earlier demo revision.

## Design references

The visual direction draws on event-equipment rental company [Meetings](https://www.cssdesignawards.com/sites/meetings/41918/), CSS Design Awards Website of the Day on September 10, 2022, and the archived award presentation of [OBSESD Wedding Photography](https://www.cssdesignawards.com/sites/obsesd-wedding-photography/47528/), Special Kudos on May 26, 2025. The references informed photographic composition and editorial hierarchy. All website code is original; no reference-site code, branding, or photography is bundled.

## Verification

Checked at 320, 390, 768, 1024, and 1440 pixel viewport widths, including menu open/close, floor selection, gallery navigation/close, quote preselection, indoor-only validation, and inquiry generation. All nine HTML pages were checked for local file links, anchor targets, duplicate IDs, and a single page heading. JavaScript syntax was checked. Browser checks did not send any inquiry or email. Automated Lighthouse was unavailable in this environment; no Lighthouse score or performance certification is claimed.
