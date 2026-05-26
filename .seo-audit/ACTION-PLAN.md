# Quilliam AI — SEO Action Plan

Prioritised list of fixes derived from `FULL-AUDIT-REPORT.md` and the 8 per-area reports.
Effort: **XS** ≤15min · **S** ≤1hr · **M** half-day · **L** 1+ day · **XL** week+

---

## Critical — Do this week

| # | Action | File / Location | Effort | Why |
|--:|---|---|:--:|---|
| C1 | Fix cookie banner so it doesn't occlude ATF on any viewport (collapse, slide-bottom, or smaller footprint) | `src/components/layout/manage-cookies.tsx` | S | Blocks CTAs, founder photo, logos, booking form on every page. Single highest conversion + LCP-perception fix. |
| C2 | Replace "FREE AI OPPORTUNITY" text in OG image with value-frame copy matching `cef0684` | `src/app/opengraph-image.tsx:137` | XS | Every social share currently leaks reverted copy. |
| C3 | Pre-convert hero to AVIF ~50-70KB. Cap `images.deviceSizes` at 1920. Add explicit `priority` + correct `sizes`. | `public/fistral-hero-ai.png`, `next.config.ts`, homepage hero component | S | Homepage LCP drops from 4.4s → ~2.4s. Single biggest CWV move. |
| C4 | Defer PostHog init to `requestIdleCallback` and gate on consent | `src/instrumentation-client.ts`, `src/lib/posthog-config.ts` | S | TBT −240ms site-wide; also resolves pre-consent tracking. |
| C5 | Fix `/services/{ai-training, ai-automation, digital-services}` redirect targets — point to real successor URLs, not hash anchors | `next.config.ts` | S | Hash fragments are stripped by crawlers; all inbound link equity currently collapses onto `/` as duplicate signal. |
| C6 | Decide fate of `/ai-automation-cornwall` and `/ai-consultant-uk`: unpublish until they have unique 500-800 word bodies + per-page entities, OR commit to differentiation now | both `page.tsx` + `focused-service-page.tsx` | M-L | Currently flagged as doorway-page risk by 5 independent subagents. |

---

## High — Within 2 weeks

| # | Action | File / Location | Effort | Why |
|--:|---|---|:--:|---|
| H1 | Fix `addressRegion: "Wadebridge"` → `"Cornwall"` | `src/lib/content.ts:16` | XS | Propagates to schema across whole site. Wadebridge is a postal town. |
| H2 | Populate `siteConfig.socialLinks` — LinkedIn (founder + company), Companies House profile, any other public profiles | `src/lib/content.ts` | XS | Unlocks `sameAs` everywhere. Biggest entity-graph signal currently missing. |
| H3 | Remove `Offer { price: "0" }` from both pSEO pages — use `PriceSpecification` (£300-£400/day, packages from £500) or drop the Offer | `src/components/services/focused-service-page.tsx`, `src/app/ai-automation-cornwall/page.tsx`, `src/app/ai-consultant-uk/page.tsx` | S | Renders as "Free" in rich results; contradicts `cef0684`. |
| H4 | Make `areaServed` a per-page prop. `/ai-automation-cornwall` → `AdministrativeArea: Cornwall`; `/ai-consultant-uk` → `Country: United Kingdom`. | `src/components/services/focused-service-page.tsx:46` | XS | Undermines geo intent of the page. |
| H5 | Add 130-160 word "Quilliam AI is..." citable definition paragraph as plain HTML on homepage (and a similar 100-170 word paragraph on each service page). | `src/app/page.tsx`, service pages | S | Highest-leverage AI-citation lever. |
| H6 | Render pricing (£300-400/day, packages from £500) on homepage + `/ai-consultant-uk` | homepage + UK page | XS | Currently internal-only; high-trust signal unused. |
| H7 | Cross-link `/service-areas` ↔ `/ai-automation-cornwall` ↔ `/ai-consultant-uk`. Add nav or in-body links from `/`, `/about`. | nav, footer, body components | S | Pages currently orphan in the link graph. |
| H8 | Update `llms.txt` + `llms-full.txt` to match current routes (remove dead `/services/*`, add the two pSEO pages). Align service taxonomy (3 vs 4) between the two files. | `public/llms.txt`, `public/llms-full.txt` | S | Currently mis-describes the site to AI crawlers. |
| H9 | Add explicit Allow rules for OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Perplexity-User, Applebot-Extended | `src/app/robots.ts` | XS | 2026-current AI bots, wildcard works but explicit is safer + clearer intent. |
| H10 | Extend founder `Person` schema on `/about` — `description`, `knowsAbout[]`, `sameAs[]` (LinkedIn) | `src/app/about/page.tsx` | XS | Founder bio thin in JSON-LD; first-person authority is the E-E-A-T lever. |
| H11 | Expand founder bio with dates, role titles, specific tooling (n8n, Claude, etc.), credentials | `src/app/about/page.tsx`, copy in `content.ts` | M | E-E-A-T floor for a consulting business is the founder page. |
| H12 | Remove `framer-motion` if `FadeIn` is genuinely unused, or restore usage | `package.json`, `src/components/shared/fade-in.tsx` | XS | Confirmed by perf audit: no live `.tsx` imports `FadeIn`. |

---

## Medium — Within 1 month

| # | Action | File / Location | Effort | Why |
|--:|---|---|:--:|---|
| M1 | Reconcile AGENTS.md with reality: remove `/services/*` route docs, document `/ai-automation-cornwall` and `/ai-consultant-uk`, update CSP note from "report-only" to "enforcing", document the actual design tokens in use (`bg-signal`/`text-ink`). | `AGENTS.md` | M | Doc drift makes onboarding (and future Claude sessions) unreliable. |
| M2 | Delete empty stub dirs `src/app/services/ai-audit/` and `src/app/industries/gyms/` (or build them out) | filesystem | XS | Confuses route discovery. |
| M3 | Set `<Image>` width/height on logos to real rendered size (≤80px tall); add `sizes="40px"` to suppress giant srcset | nav, footer logo components | XS | Logo srcset currently includes `w=3840`. |
| M4 | Fix Levi headshot to render appropriate size on `/about` (don't ship `w=3840` for 420px display) | `src/app/about/page.tsx` | XS | Wasted bytes per visit. |
| M5 | Add `inLanguage: "en-GB"` and `description` to WebPage JSON-LD on subpages | layout / page metadata | XS | Filling out the entity graph. |
| M6 | Add `theme-color` token that matches the dark brand (or lean into the cream theme — pick one) | `src/app/layout.tsx` metadata | XS | Current `#f4efe4` doesn't match the dark-first hero. |
| M7 | Unify Twitter card type — `summary_large_image` everywhere | metadata in pages | XS | Currently inconsistent. |
| M8 | Add `ContactPage` schema to `/contact` including hours | `src/app/contact/page.tsx` | S | Quick win for entity completeness. |
| M9 | Build a `/services/` index page (or 301 it to `/#services`). Currently 404. | new route | S | Users will type/link the bare `/services` URL. |
| M10 | Move `/ai-automation-cornwall` to `/locations/cornwall` (or `/services/ai-automation/cornwall`) and `/ai-consultant-uk` to `/services/ai-consultant`. 301 the old URLs. | route move + redirects | M | Aligns with documented URL convention; sets pattern for scale. |
| M11 | Add 6-12 named testimonials with attribution (consent from clients) | content + new component | M | Zero named testimonials site-wide currently. |
| M12 | Replace K2 `.jpg` logo with the existing unused `.webp` | `public/logos/` | XS | Smaller, sharper, already on disk. |

---

## Low — Backlog

| # | Action | Effort | Why |
|--:|---|:--:|---|
| L1 | Add 3-5 cornerstone Article-schema blog posts (define AI Education vs Implementation, sprint methodology, n8n vs custom code, etc.) | XL | Mid-term GEO play; needs editorial cadence to be worth it. |
| L2 | Set up Google Business Profile as SAB with hidden address; pin to in-person workshop locations rather than 25 Red Cove Close | M | Off-site lever, age-appropriate to start now. |
| L3 | Claim Companies House profile mention, LinkedIn Company Page, Yell, FreeIndex citations — get NAP consistent across 5+ directories | M | Citation graph for new business. |
| L4 | Create a Wikidata stub for "Quilliam AI Ltd" | S | Cheapest external `sameAs` link to grow the entity graph. |
| L5 | Plan a per-location page expansion (cap ~20 locations, each with unique 500+ word body + local entities) once `/ai-automation-cornwall` proves model | XL | Scale only after C6/H3/H4 fixed. |
| L6 | Add `priority` field to sitemap for funnel pages (`/book` 1.0, services 0.8, legal 0.3) | XS | Marginal. |
| L7 | VetVision AI case study page (with consent) | M | Highest-leverage piece of social proof you currently have. |
| L8 | Add browserslist field to `package.json` to drop ~22KB of legacy-JS polyfills | XS | Marginal CWV. |
| L9 | Add more granular regions to `/service-areas` (only 3 macro-buckets currently) | S | Depth signal for local SEO. |
| L10 | Add Applebot-Extended, Diffbot, Omgilibot, Claude-Web to robots.ts disallow list | XS | Training-only crawler hygiene. |

---

## Sequencing recommendation

**Week 1:** C1-C5 (cookie banner, OG, hero image, PostHog, redirects). Decide C6 direction (kill or invest).
**Week 2:** H1-H4, H8-H9 (schema and crawler hygiene — all XS/S).
**Week 3:** H5-H7, H10-H11 (citable paragraph, pricing, cross-links, founder authority).
**Month 2:** M1-M12 (doc reconciliation, route restructure, testimonials).
**Quarter:** L1-L7 (off-site authority, content depth).
