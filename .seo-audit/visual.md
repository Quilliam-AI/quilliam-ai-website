# Visual SEO Audit — Quilliam AI

**Date:** 2026-05-26
**Base:** http://localhost:3000
**Viewports:** Desktop 1440x900, Mobile 390x844 (DSF 2)
**Screenshots:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/.seo-audit/screenshots/`

**Overall score: 68 / 100**

The site has a clean, founder-led aesthetic with strong typography and a consistent design language. Above-the-fold CTAs are present on every page audited. Critical issues are: (a) the cookie banner obscures ATF content on every initial render, (b) the live design system diverges materially from `AGENTS.md`, (c) the homepage hero lacks any imagery in the LCP zone on mobile, and (d) the new `/ai-automation-cornwall` and `/ai-consultant-uk` landing pages share an essentially identical layout/copy template, with thin local-SEO differentiation.

---

## Screenshots captured

| Page | Desktop ATF | Mobile ATF | Desktop full | Mobile full |
|---|---|---|---|---|
| `/` | `home_desktop_atf.png` | `home_mobile_atf.png` | `home_desktop_full.png` | `home_mobile_full.png` |
| `/ai-automation-cornwall` | `ai-automation-cornwall_desktop_atf.png` | `ai-automation-cornwall_mobile_atf.png` | `ai-automation-cornwall_desktop_full.png` | `ai-automation-cornwall_mobile_full.png` |
| `/ai-consultant-uk` | `ai-consultant-uk_desktop_atf.png` | `ai-consultant-uk_mobile_atf.png` | `ai-consultant-uk_desktop_full.png` | `ai-consultant-uk_mobile_full.png` |
| `/about` | `about_desktop_atf.png` | `about_mobile_atf.png` | `about_desktop_full.png` | `about_mobile_full.png` |
| `/service-areas` | `service-areas_desktop_atf.png` | `service-areas_mobile_atf.png` | `service-areas_desktop_full.png` | `service-areas_mobile_full.png` |
| `/book` | `book_desktop_atf.png` | `book_mobile_atf.png` | `book_desktop_full.png` | `book_mobile_full.png` |
| Scrolled nav | `home_desktop_scrolled.png` | — | — | — |

---

## CRITICAL

### C1. Cookie banner occludes ATF on every page, every viewport
The cookie consent (Accept / Reject) sits centered low on desktop and centered/mid on mobile, blocking trust signals, secondary CTAs, and on `/about` the entire founder photo intro. On `/home_mobile_atf.png` it covers the bottom 40% of the viewport, on top of the only client-logo strip (Halter / Vet Vision AI). On `/about_mobile_atf.png` it sits across the founder's photo and the H1. On `/book_mobile_atf.png` it covers the "Prefer WhatsApp?" alternative path and the top of the form.
- Fix: defer banner until first scroll, or render as a bottom toast (slimmer, dismissible) rather than a centered card. Many users will Reject and leave because the banner overlaps the CTAs.

### C2. Design system has diverged from documented spec
`AGENTS.md` documents `bg-stone-950 / emerald-600` dark theme as the canonical surface, with footer as the only light section. Live site: hero, featured client logo strip, and the bottom CTA on `/ai-automation-cornwall`, `/ai-consultant-uk`, and `/` all use a **cream/beige (stone-50-ish) light background**. The Tailwind tokens in the HTML (`text-ink`, `bg-signal`, `border-signal/40`) indicate a new design-token layer has replaced the documented palette. Either AGENTS.md is stale or the implementation drifted. Decision needed — pick one and update the other.
- See: `home_desktop_atf.png` (cream bg), `ai-automation-cornwall_desktop_atf.png`, `ai-consultant-uk_desktop_atf.png`.

### C3. `/ai-automation-cornwall` and `/ai-consultant-uk` are near-duplicates
Side-by-side desktop screenshots (`ai-automation-cornwall_desktop_full.png` vs `ai-consultant-uk_desktop_full.png`): identical hero structure, identical "Practical outputs with named owners and controls" middle band, identical three-up "Local or remote discovery / Build what matters / Train and hand off" delivery row (mostly), identical "Before you book" FAQ block and identical bottom green CTA. Only the H1, sub-copy, and 1–2 FAQ items change. From a Google quality perspective this is a templated doorway-style pattern. Add unique sections, local proof, named team members or town-level references to differentiate.

---

## HIGH

### H1. Homepage hero on mobile has zero visual interest in the LCP zone
On `home_mobile_atf.png` the LCP viewport contains: logo, hamburger, H1, sub-copy, two CTAs. No image, no founder photo, no client logo, no motion. The Fistral/AI hero image (`fistral-hero-ai.png`) which is visible on desktop is pushed below the fold on mobile. Mobile is the dominant traffic source for local-intent searches ("AI Cornwall"). Move the hero photo (or a smaller crop of it) above the CTAs on mobile, or add the client-logo strip into the mobile ATF.

### H2. Trust signals not visible above the fold on most pages
Client logos (K2, XGX.AI, Deloitte, Halter, Vet Vision AI) are a strong asset and look professional in the rendered strip (`home_desktop_scrolled.png`), but they sit below the hero on desktop and well below the fold on mobile. None visible ATF on `/`, `/ai-automation-cornwall`, `/ai-consultant-uk`, `/service-areas`, or `/book`. Only `/about` shows the founder photo ATF.
- Fix: bring the logo strip into the hero or add an inline "Worked with: K2 · Deloitte · Halter · VetVision AI" microtext under the H1.

### H3. Footer is missing internal links to key pages
Inspecting the rendered HTML: footer nav contains only `Home`, `Book`, `Contact` plus `Privacy` / `Terms`. Missing: `/about`, `/service-areas`, `/ai-automation-cornwall`, `/ai-consultant-uk`, and the three canonical service pages (`/services/ai-training`, `/services/ai-automation`, `/services/digital-services` — note these are deleted in git status, see below). Footer is a key internal-linking surface for SEO; current footer underuses it.

### H4. Service pages from AGENTS.md spec are deleted from the codebase
Git status shows `src/app/services/ai-automation/page.tsx`, `src/app/services/ai-training/page.tsx`, and `src/app/services/digital-services/page.tsx` are all deleted. AGENTS.md still references them. New landing pages (`/ai-automation-cornwall`, `/ai-consultant-uk`) appear to be replacements but they are flat — they don't link to the trio of canonical service offerings. Sitemap and `llms.txt` likely still reference the old URLs (not verified in this visual pass — flag for content audit).

### H5. Two competing CTAs in the navbar without clear hierarchy
Nav shows a single rounded-pill primary CTA labeled **"Ready to Implement"** (top right) on every page. This phrase doesn't match either documented funnel CTA ("Book Free AI Training" / "Book Free AI Opportunity"). It's also vague — "Ready to Implement" reads as a self-description, not a call to action. Standardise on one of the documented dual-CTA variants, and consider switching the verb (e.g., "Book a session →").

---

## MEDIUM

### M1. Light-cream hero on desktop visually clashes with dark mid-page
`home_desktop_atf.png` shows a cream/beige hero with dark stone hero card embedded inside it. Then `home_desktop_full.png` shows the next section ("CLIENT WORK AND EXPERIENCE") is suddenly full dark stone-950. The transition is abrupt — a gradient or sectional separator would soften it. Same pattern on the local landing pages.

### M2. K2 client logo is a raster JPG inside an otherwise-SVG logo row
`public/logos/k2-gym-logo.jpg` (and `.webp`) are raster; the other four logos (`deloitte.svg`, `halter.svg`, `vetvision-ai.svg`, `xgx-ai.svg`) are vector. On the dark client strip the K2 logo is rendered inside a white box (visible in `home_desktop_scrolled.png`), which breaks visual rhythm with the inline SVGs that sit directly on the dark bg. Convert K2 to SVG or apply the same boxed treatment to every logo for consistency.

### M3. Booking form fields have minimal contrast on dark
`book_desktop_full.png` and `book_mobile_full.png` show form fields as near-black-on-near-black. The "EMAIL", "NAME", "PHONE" labels above each field are emerald accent, which works, but the empty fields themselves are barely distinguishable from the surrounding section. Add a 1px lighter border (`border-stone-700/60`) or a subtle inner fill to make field affordance clearer. Critical for conversion.

### M4. About page hero is bottom-heavy on mobile
On `about_mobile_atf.png` the founder photo dominates the ATF and the H1 ("I make AI practical for real business operations.") is partially covered by the cookie banner. The CTAs are entirely below the fold. Reorder so H1 sits above the photo on mobile, with photo as a hero supporting image — or shrink the photo to ~60% height so the H1 is partially visible alongside.

### M5. Sticky CTA from documented spec appears absent
AGENTS.md references a `StickyCta` client component. Git status shows `src/components/layout/sticky-cta.tsx` is **deleted**. No sticky bottom CTA visible in any scrolled screenshot. Only the floating WhatsApp circle (`whatsapp-button.tsx`) remains, bottom-right. If sticky CTA was removed intentionally, fine — but the docs and TODO list should be updated. If unintentional, this is a meaningful conversion loss on long scroll pages.

### M6. WhatsApp floating button overlaps form submit on mobile
`book_mobile_atf.png` and `book_mobile_full.png`: the green circular WhatsApp button (bottom-right) sits directly over the "Book first session" submit area when the form scrolls into view. Tap-target conflict. Either hide the floating WhatsApp on `/book` (it's redundant — there's an inline "Prefer WhatsApp?" link) or shift it to bottom-left.

### M7. Service-area page lacks a map or visual region indicator
`service-areas_desktop_full.png` is text-only. For a page targeting geographic intent ("UK service regions"), a simple UK map SVG with the region tiles overlaid would massively strengthen the visual and ATF impression. Currently the page reads as a list of region names with paragraph blurbs.

---

## LOW

### L1. "FOUNDER" / "CORNWALL" tags on About page render as buttons-not-tags
`about_desktop_atf.png` shows two pill-shaped grey tags under the founder photo. They look clickable (button affordance) but are not links. Either make them links (filter to "Cornwall" service area page, etc.) or restyle as flatter badges with less button-like styling.

### L2. Repeated bottom CTA "Bring one messy workflow" / "Know what to build before you spend" on local pages
Bottom green CTA section is identical across `/ai-automation-cornwall`, `/ai-consultant-uk`, and `/about`. Vary the copy per page-context, even slightly.

### L3. Mobile tap targets — most fine, two exceptions
- Primary CTAs (`Find Where AI Can Help My Business`, `Book AI Training`) on `home_mobile_atf.png` are full-width pills at ~48px height — good.
- Cookie banner "Accept" / "Reject" buttons on `book_mobile_atf.png` look ~36px tall — sub-44px WCAG target. Tighten this when fixing C1.
- Hamburger icon top-right on mobile is ~40x40 — borderline. Increase to 48x48 with padding.

### L4. ATF emerald CTA contrast is good but mid-page emerald-on-cream needs check
On the bottom CTA blocks (`ai-automation-cornwall_desktop_full.png` bottom green band), the "Find Where AI Can Help My Business" button is **dark text on green** — that's likely below 4.5:1 if it's `stone-900` on `emerald-500`. Run a contrast check; consider switching to white text on dark pill for the button-on-green band.

### L5. No `srcset`/`sizes` audit performed visually
HTML uses `next/image` correctly (K2 logo shown with full srcset). The Fistral hero is served via `_next/image` with `w=3840 q=75` — large for ATF. Verify the `sizes` prop is set tightly (hero is roughly 50vw on desktop, full-width on mobile-where-it-isn't-shown).

---

## What's working well (keep)

- **Typography is excellent.** Manrope at `font-semibold tracking-tighter` looks editorial and distinct. Consistent across every page.
- **Sticky nav** (`home_desktop_scrolled.png`) has the documented floating-pill + backdrop-blur look and switches state cleanly. Brand-consistent.
- **Client logo strip** is a strong asset — five recognisable brands rendered cleanly.
- **Real founder photo** on `/about` — no placeholder, no picsum. Adds enormous trust.
- **No `picsum.photos` placeholders found** in any rendered HTML across the six pages audited. TODO.md item #1 may now be partially or fully resolved — verify.
- **Footer NAP**: Cornwall address + Companies House number both render in footer (`book_desktop_full.png`). Good for E-E-A-T.
- **Brand-consistent emerald accent** used as section labels and primary button colour throughout.
- **Voice and copy** are direct and on-brand ("AI that's actually useful", "Bring one messy workflow", "Without the hype"). Reads founder-led.

---

## Recommended priority order

1. (C1) Defer / shrink cookie banner — affects every ATF impression.
2. (C2) Reconcile design system docs vs. live implementation. Pick light-or-dark hero and document.
3. (C3) Differentiate `/ai-automation-cornwall` vs `/ai-consultant-uk` — risk of doorway-page penalty.
4. (H3, H4) Restore footer internal-linking + reconcile deleted service pages with sitemap / llms.txt.
5. (H5) Fix the navbar primary CTA copy ("Ready to Implement" → documented dual-CTA wording).
6. (H1, H2) Add trust signal or hero imagery into mobile ATF.
7. (M3) Booking form field contrast.
8. (M6) WhatsApp float vs. form submit conflict on `/book`.
9. (M5) Decide on StickyCta — restore or update docs.
10. Remaining mediums and lows.
