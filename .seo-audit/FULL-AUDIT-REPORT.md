# Quilliam AI — Full SEO Audit Report

**Audited:** http://localhost:3000/ (Next.js 16 dev/prod)
**Date:** 2026-05-26
**Pages crawled:** 9 (sitemap) + 3 redirect targets
**Business type:** Hybrid SAB — UK AI agency, Cornwall-based, UK-wide remote

---

## Composite SEO Health Score: **77 / 100**

| Dimension | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 86 | 18.92 |
| Content Quality | 23% | 72 | 16.56 |
| On-Page SEO | 20% | 73 | 14.60 |
| Schema / Structured Data | 10% | 82 | 8.20 |
| Performance (CWV) | 10% | 75 | 7.50 |
| AI Search Readiness | 10% | 78 | 7.80 |
| Images | 5% | 62 | 3.10 |
| **Composite** | **100%** | | **76.7** |

**Off-weight:** Local SEO 62/100, Visual/Mobile 68/100. Local is age-appropriate (6-week-old business, GBP not yet established) but the single biggest off-site lever.

Per-area reports in this directory:
- [technical.md](technical.md) — 86/100
- [content.md](content.md) — 72/100
- [schema.md](schema.md) — 82/100
- [sitemap.md](sitemap.md) — 72/100
- [performance.md](performance.md) — 75 mobile / homepage
- [visual.md](visual.md) — 68/100 (+ 25 screenshots)
- [geo.md](geo.md) — 78/100
- [local.md](local.md) — 62/100

---

## Executive Summary

**The fundamentals are solid.** No crawl-blocking issues, no broken schema, no fabricated content, valid sitemap, AI-crawler-friendly robots.txt, real images replacing placeholders, full JSON-LD `@graph`, dark-themed brand consistency, British English, no marketing jargon.

**The cracks are all in one place: the two new programmatic landing pages.** `/ai-automation-cornwall` and `/ai-consultant-uk` are doorway-page-risk near-duplicates, orphaned from the nav graph, under the thin-content floor, mis-pointed in `areaServed` schema, and advertise `Offer { price: "0" }` which contradicts the post-`cef0684` "no free framing" decision. Three subagents independently flagged this cluster.

**The other recurring theme: undocumented drift.** Three deleted `/services/*` pages still 308-redirect to homepage hash anchors. AGENTS.md describes routes that no longer exist. CSP is enforcing but docs say report-only. `llms.txt` likely references stale URLs. Design system tokens (`bg-signal` / `text-ink`) in live HTML don't match documented `stone-950` / `emerald-600`.

---

## Top 5 Critical Issues

| # | Issue | Source | Effort | Impact |
|---|---|---|---|---|
| 1 | Cookie banner occludes ATF on every page, every viewport (CTAs, founder photo, client logos, booking form all blocked) | visual.md | S | High — kills conversion + LCP perception |
| 2 | OG image still renders "FREE AI OPPORTUNITY" — directly contradicts site-wide value-frame pivot from `cef0684` | content.md | XS | High — every social share leaks reverted copy |
| 3 | Hero PNG `public/fistral-hero-ai.png` is **2.5 MB / 1672×941** as the LCP element — homepage LCP fails at **4.4s** (target <2.5s) | performance.md | S | High — Core Web Vitals failure |
| 4 | `/ai-automation-cornwall` + `/ai-consultant-uk`: orphan pages, ~280-330 words each, 80%+ phrasing overlap, both ship `Offer { price: "0" }`, Cornwall page declares `areaServed: United Kingdom` | content.md, schema.md, local.md | M | High — doorway-page suppression risk |
| 5 | Deleted `/services/{ai-training, ai-automation, digital-services}` 308-redirect to **hash anchors** (`/#agents`) — fragments stripped by crawlers, all backlink equity collapses onto `/` as duplicate signals | technical.md, sitemap.md | S | High — silent loss of any inbound link value |

---

## Top 5 Quick Wins

| # | Win | Effort | Expected lift |
|---|---|---|---|
| 1 | Defer PostHog init until idle/post-consent | XS | TBT −240ms, every page |
| 2 | Pre-convert hero to AVIF ~50-70KB + cap `images.deviceSizes` at 1920 in `next.config.ts` | S | Homepage LCP −2s |
| 3 | Populate `siteConfig.socialLinks` in `src/lib/content.ts` (LinkedIn, Companies House) → unlocks `sameAs` site-wide | XS | Entity graph in one edit |
| 4 | Fix `addressRegion: "Wadebridge"` → `"Cornwall"` in `src/lib/content.ts:16` | XS | Corrects schema across whole site |
| 5 | Update OG image text in `src/app/opengraph-image.tsx:137` | XS | Stops social-share copy regression |

---

## Findings By Category

### Technical SEO — 86/100
Strongest dimension. Zero Critical. All 9 URLs return 200 with valid canonicals, single H1, viewport, OG/Twitter, JSON-LD. Security headers (HSTS preload, enforcing CSP, frame-DENY) all correct. `/robots.txt`, `/sitemap.xml`, `/.well-known/security.txt`, IndexNow key, `/opengraph-image` all reachable.

**Notable:**
- 3 High: hash-anchor redirects from `/services/*`; CSP doc drift; stale URLs likely in `llms*.txt`.
- 6 Medium: dev-mode OG image leak, programmatic pages off-pattern at root, missing pSEO cross-links, sitemap omits old `/services/*`, missing `inLanguage` on most WebPage nodes.
- 6 Low: robots missing Applebot-Extended/Diffbot/Claude-Web; theme-color mismatch; Twitter card type inconsistency.

### Content Quality — 72/100
Voice is clean (no jargon, British spelling consistent, 1 instance of "bespoke" in `/terms`). No fabricated stats. But:
- 3 Critical: "FREE" in OG image; orphaned pSEO pages; thin near-duplicate content on those pages.
- Founder bio lacks dates, roles, tooling specifics.
- £300-400/day and £500 package floor are nowhere on the rendered site — internal-only.
- Zero named testimonials site-wide.
- `/service-areas` only buckets into 3 macro-regions.

### On-Page SEO — 73/100 (derived)
Single-H1 hygiene, canonicals, internal linking all checked. Gaps: pSEO orphans, near-duplicate H2 structures, weak cross-links between location/service pages, generic homepage subhead.

### Schema — 82/100
Zero Critical — every block parses, no deprecated types, `@id` resolves cleanly across all 9 pages.
- 4 High: `Offer { price: 0 }` on both pSEO pages; Cornwall page `areaServed` = UK not Cornwall; `/about` doesn't extend the founder Person node; `Organization.sameAs` empty because `socialLinks: []`.
- Strong: full `@graph` (ProfessionalService + Organization + Person + WebSite + Service + FAQPage + BreadcrumbList), service-areas page already has proper `AdministrativeArea` entries.

### Sitemap — 72/100
Valid XML, 9 URLs, all 200, no leaks. Issues:
- pSEO pages parked at root, breaking `/services/{slug}` convention.
- `/services/*` redirects still exist in `next.config.ts` despite AGENTS.md documenting them as live routes.
- Empty stub dirs at `src/app/services/ai-audit/` and `src/app/industries/gyms/`.
- `/hero-options` noindexed but reachable.
- Quality gate for location pages: 2/30 — safe to scale, but cap at ~20 with unique content.

### Performance — 75 mobile (homepage Lighthouse 13.3, 4× CPU throttle, prod build)

| Page | Score | LCP | TBT | CLS |
|---|---:|---:|---:|---:|
| `/` | 75 | **4.4s FAIL** | 390ms | 0 |
| `/ai-automation-cornwall` | 92 | 3.1s | 160ms | 0 |
| `/book` | 91 | 3.3s | 130ms | 0 |

**Two issues drive almost everything:**
1. Hero PNG `fistral-hero-ai.png` 2.5MB / 1672×941 — `lcp-discovery-insight` scores 0.
2. PostHog `posthog-js` 188KiB raw / 61KiB gz initialised on every page via `src/instrumentation-client.ts` before consent. ~685ms script bootup, ~240ms TBT contribution.

After fixing both: homepage clears 90 mobile and passes LCP at p75.

Lesser issues: K2 logo serves `.jpg` (9KB) when unused `.webp` (7.8KB) exists; logo `<Image>` width/height 300×300 but renders 40px tall → 16-entry srcsets including `w=3840`; Levi headshot serves `w=3840` default on `/about` at 420px render. `framer-motion` installed and `FadeIn` exported but **no live `.tsx` imports it** — candidate for deletion.

CLS = 0 everywhere (font preload and explicit image dims working).

### AI Search Readiness — 78/100
- llms.txt and llms-full.txt both well-structured and accurate; minor: page lists need markdown link format per llmstxt.org spec; service taxonomy differs between the two files (3 vs 4 services).
- AI crawlers allowed via wildcard but missing explicit entries for **OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Perplexity-User, Applebot-Extended**.
- Schema strong; missing `sameAs` is the biggest entity-graph gap.
- **Brand mention vacuum** — newly incorporated 2026-04-11; zero external corroboration (no Wikipedia, Reddit, YouTube, LinkedIn `sameAs`). This is the single biggest blocker to actual AI citation regardless of on-page perfection.
- Missing: 130-160 word "Quilliam AI is..." citable paragraph on homepage HTML; pricing rendered on homepage and `/ai-consultant-uk`; 3-5 cornerstone articles with `Article` schema.

### Images — 62/100 (derived)
- Good: no `picsum.photos` placeholders in rendered HTML (TODO.md #1 effectively resolved). Real founder photo and 5 real client logos (K2, XGX.AI, Deloitte, Halter, VetVision AI).
- Bad: hero PNG unoptimised; logo over-srcsetting; headshot over-srcsetting; format inconsistency in `/public/logos/`.

### Local SEO — 62/100
Age-appropriate. On-page schema is strong; off-site is the gap.
- **Schema bug:** `addressRegion: "Wadebridge"` is wrong — Wadebridge is a postal town, not a region. Should be `"Cornwall"`. File: `src/lib/content.ts:16`. Propagates to JSON-LD across the site.
- `/ai-automation-cornwall` has **0 specific Cornwall town mentions** (only the county).
- `/ai-consultant-uk` has **0 specific UK city mentions**.
- No GBP yet. SAB registration with hidden address required — don't pin map to 25 Red Cove Close (residential).
- Companies House CRN 17151006 not linked from site (strongest free trust signal currently unused).
- No cross-linking between `/service-areas`, `/ai-automation-cornwall`, `/ai-consultant-uk`.
- Pricing facts (£300-400/day, £500 package floor) invisible on rendered site.

### Visual / Mobile — 68/100
25 screenshots captured at desktop 1440×900 and mobile 390×844.
- Cookie banner occludes ATF everywhere (top Critical).
- Design system drift: live HTML uses `bg-signal` / `text-ink` (cream/beige) instead of documented `stone-950` / `emerald-600`. Docs out of sync with code.
- pSEO pages visually near-identical (doorway risk reinforced from another angle).
- Good: real images, on-brand typography, sticky nav, footer NAP all correct.

---

## Cross-Cutting Themes

1. **The two pSEO landing pages need a decision before they scale.** Either invest in them properly (per-location uniqueness, real Cornwall town entities, distinct UK city pages, distinct schema, proper internal linking, remove `Offer { price: 0 }`) or unpublish them until ready. They're flagged by content, schema, local, visual, and sitemap subagents independently.

2. **Documentation has drifted.** AGENTS.md, `llms.txt`, and `llms-full.txt` all describe a site state that no longer matches the code. This affects both crawler trust and your own onboarding speed.

3. **Off-site is the lid.** Schema, content, technical, GEO all scored ≥72. Local SEO scored 62 because GBP, citations, Companies House `sameAs`, LinkedIn — none of it exists yet. This is the highest-leverage area for the next 90 days.

4. **A single 2.5MB asset is the performance story.** Everything else is downstream of the hero PNG and PostHog bootstrap.

---

See `ACTION-PLAN.md` for prioritised next steps with effort and impact estimates.
