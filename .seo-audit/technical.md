# Quilliam AI — Technical SEO Audit

**Date:** 2026-05-26
**Environment:** Local dev (http://localhost:3000)
**Pages tested:** 9 (/, /book, /contact, /about, /service-areas, /ai-automation-cornwall, /ai-consultant-uk, /privacy, /terms)

## Technical Score: 86 / 100

Strong foundations: every page returns 200, has a unique title/description/canonical, single H1, viewport meta, OG + Twitter tags, JSON-LD with cross-referenced `@id`s, hardened security headers, and a well-formed sitemap. Deductions are concentrated in three areas: redirect hygiene around the deleted `/services/*` routes, doc/header drift (AGENTS.md says CSP is report-only but it ships enforcing), and a couple of schema/metadata polish items.

---

## Critical

_None._

All 9 URLs return HTTP 200, every page has a canonical, robots are open, and the sitemap parses.

---

## High

### H1. AGENTS.md/CSP drift — CSP is enforcing, not report-only
- **Where:** `next.config.ts` headers vs `AGENTS.md` "Security Headers" section.
- **Observed:** `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://eu.posthog.com; worker-src 'self' blob:; frame-ancestors 'none'`
- **Why it matters:** AGENTS.md says "Content-Security-Policy-Report-Only (will move to enforcing after placeholder images are replaced)". The header is already enforcing in production-equivalent build. Either correct the doc (the header is fine, and `img-src 'self' data:` already excludes picsum.photos so any remaining placeholder images would be silently blocked) or audit pages for `<img>` references to external hosts before relying on the enforcing policy.
- **Action:** Update AGENTS.md to reflect enforcing CSP. Separately, confirm no `<img>` src points at `picsum.photos`, `i.pravatar.cc`, etc. — the spot-check on `/` showed only `/logos/*.svg` and `/logo-white.svg`, which is fine.

### H2. Deleted `/services/*` routes 308-redirect to homepage hash anchors
- **Where:** `/services/ai-training` → 308 → `/#adoption`; `/services/ai-automation` → 308 → `/#agents`; `/services/digital-services` → 308 → presumably `/#…`.
- **Observed:** All three return `308 Permanent Redirect` with a hash-only `Location`. No live internal link points to them (good), but external backlinks, the LLMs.txt files, prior sitemap submissions, and AGENTS.md examples all still reference these URLs.
- **Why it matters:** Hash fragments are stripped from `Location` by most crawlers — Google treats `Location: /#adoption` as a redirect to `/`. That collapses three previously-indexed service pages into duplicate signals for `/`. Worse, the 308 is permanent, so any equity from old backlinks is locked into this collapsed redirect.
- **Action:** Decide intent. If the new programmatic pages (`/ai-automation-cornwall`, `/ai-consultant-uk`) replace `/services/ai-automation`, point the 308 at the most relevant new page (e.g. `/services/ai-automation` → `/ai-automation-cornwall` or a new combined `/services` hub). If you genuinely want them folded into homepage sections, change the redirect target to `/` (no hash) so equity consolidates cleanly.

### H3. `llms.txt` and `llms-full.txt` likely reference the deleted `/services/*` URLs
- **Where:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/llms.txt` and `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/llms-full.txt`.
- **Why it matters:** AGENTS.md mandates these be updated when pages are added/removed. Three service pages were deleted (per git status) and two new programmatic pages added — both files should reflect the new structure.
- **Action:** Update both files to remove `/services/*` URLs and add `/ai-automation-cornwall` + `/ai-consultant-uk`.

---

## Medium

### M1. Homepage OG image resolves to localhost in dev (not a prod bug, but a sign of inconsistency)
- **Where:** `/` (homepage).
- **Observed:** `<meta property="og:image" content="http://localhost:3000/opengraph-image?510a3fce56a742aa">` and `<meta name="twitter:image" content="http://localhost:3000/opengraph-image?...">`. Every other page outputs `https://quilliam.ai/opengraph-image`.
- **Why:** `src/app/layout.tsx` (lines 30-44) defines `openGraph` and `twitter` blocks but does not set an explicit `images` array. Next.js auto-injects `opengraph-image.tsx` using the runtime origin (localhost in dev), bypassing the `metadataBase` absolute URL rewrite. Subpages set `openGraph.images: ["/opengraph-image"]` explicitly per AGENTS.md, which is why they resolve correctly via `metadataBase`.
- **Action:** Add `openGraph.images: ["/opengraph-image"]` and `twitter.images: ["/opengraph-image"]` to the root `metadata` in `layout.tsx`. This is the only page using the auto-discovery path; making it explicit produces consistent absolute URLs and matches subpage behaviour. (In production the URL will still be correct because the runtime origin is quilliam.ai, but consistency with the documented pattern is preferable.)

### M2. Two new landing pages live at root, breaking the `/services/*` URL pattern
- **Where:** `/ai-automation-cornwall`, `/ai-consultant-uk`.
- **Why it matters:** These are clearly programmatic SEO landing pages (location/persona modifiers on core services). AGENTS.md documents `/services/{slug}` as the canonical pattern for service pages, and the JSON-LD on both pages emits `Service` + `Offer` nodes — they are service pages by content. Mixing flat-root pSEO URLs with the `/services/*` convention will fragment internal linking and make it harder to extend (e.g. `/ai-consultant-london`, `/ai-training-bristol` all at root will dilute the root namespace).
- **Action:** Choose one. Either (a) move them under `/services/` (e.g. `/services/ai-automation/cornwall`, `/services/ai-consultant/uk`) or `/locations/` to preserve namespace clarity, or (b) explicitly document the new flat-root convention in AGENTS.md and redirect the old `/services/*` paths to the new flat structure. Right now you have both conventions live at once.

### M3. No `Service` JSON-LD or `OtherServices` cross-link from `/ai-automation-cornwall` and `/ai-consultant-uk` back to the core service narrative
- **Where:** `/ai-automation-cornwall`, `/ai-consultant-uk`.
- **Observed:** Both pages link only to `/`, `/contact`, `/book`, `/privacy`, `/terms`. No internal links to `/about`, `/service-areas`, or each other.
- **Why it matters:** Programmatic landing pages benefit from sibling/parent internal links — they help crawlers cluster the topic and pass anchor relevance. Currently each page is a topical island.
- **Action:** Add an "Other services" / "Related" / "See also" section linking these two pages to each other and to `/about`, `/service-areas`. Mirrors the deleted `OtherServicesSection` pattern from AGENTS.md.

### M4. `book` and `contact` pages are indexable (no `noindex`)
- **Where:** `/book`, `/contact`.
- **Observed:** No `<meta name="robots" content="noindex">`. Both are in the sitemap.
- **Why it matters:** This is a defensible choice (these are conversion pages with unique copy), but worth flagging — many sites noindex booking/contact endpoints to avoid them outranking the homepage for branded queries, and to keep crawl budget on content pages. Given Quilliam is a small/new site, indexable is probably correct. No change required, just confirm this is intentional.
- **Action:** Leave as-is unless you start seeing `/book` outrank `/` for "Quilliam AI" branded search.

### M5. Sitemap missing pages and not extensible
- **Where:** `/sitemap.xml` (9 URLs).
- **Observed:** Sitemap currently lists exactly the 9 audited pages. No issue with the current list, but `/services/ai-training`, `/services/ai-automation`, `/services/digital-services` are not in the sitemap and the 308s to hash-anchors will eventually be deindexed. If they have backlinks, this is fine — but worth confirming the redirects are picked up by Google before old URLs drop out.
- **Action:** No change. Just verify in Search Console that the old URLs transition cleanly once the 308 target is fixed (see H2).

### M6. JSON-LD on `/privacy`, `/terms`, `/book`, `/contact`, `/about` lacks a `WebPage.description` and `inLanguage`
- **Where:** All non-home pages except landing pages.
- **Observed:** `WebPage` nodes present, but no `inLanguage: "en-GB"` or `description` field.
- **Why it matters:** Low-priority. Google's structured data parser handles missing fields fine, but `inLanguage` is one of the cheapest schema enrichments and `description` aids snippet selection.
- **Action:** Add `inLanguage: "en-GB"` and the page meta description as `description` to each `WebPageJsonLd`.

---

## Low

### L1. Root layout doesn't declare a default `openGraph.images` / `twitter.images`
- **Where:** `src/app/layout.tsx` lines 30-44.
- **Why it matters:** Subpages have to opt in to `openGraph.images: ["/opengraph-image"]`. Future pages that forget will inherit the auto-discovery localhost issue (M1). Setting it once at root eliminates the per-page boilerplate.
- **Action:** Add `openGraph.images: ["/opengraph-image"]` and `twitter.images: ["/opengraph-image"]` to the root metadata. Already noted in M1.

### L2. robots.txt missing common AI crawlers Anthropic and OpenAI ship with multiple tokens
- **Where:** `/robots.txt`.
- **Observed:** Blocks `CCBot`, `anthropic-ai`, `cohere-ai`, `Google-Extended`, `Bytespider`. Allows everything else.
- **Why it matters:** Per AGENTS.md the policy is "block training-only scrapers, allow search-connected AI crawlers (GPTBot, ClaudeBot, PerplexityBot)". Current list is missing `ClaudeBot` (allowed implicitly by `User-Agent: *: Allow: /` — fine), but also missing `Claude-Web` (Anthropic legacy training token), `Diffbot`, `Omgilibot`, `Applebot-Extended` (Apple's training opt-out). If the intent is "training scrapers blocked", these are gaps.
- **Action:** Decide policy. If "block training, allow retrieval" is the goal, add `Applebot-Extended`, `Diffbot`, `Omgilibot`, `FacebookBot`, `Amazonbot`, `Claude-Web` to the disallow list. Otherwise leave as-is.

### L3. `<meta name="description">` on `/terms` and (slightly) `/privacy` is identical to `og:description` and `twitter:description`
- **Where:** `/terms`, `/privacy`.
- **Why it matters:** Cosmetic. Same string in three places isn't harmful but wastes a chance to write SERP-optimised copy distinct from social-card copy.
- **Action:** Optional polish. Lower priority than the H/M items.

### L4. `theme-color` is `#f4efe4` (light parchment) but the site ships dark-first (`stone-950`)
- **Where:** Every page (root layout).
- **Why it matters:** Browser chrome (especially mobile Safari/Chrome address bar tint) will render light parchment while the page is near-black. Subtle UX inconsistency, no SEO impact.
- **Action:** Set `theme-color` to `#0c0a09` (stone-950) to match the brand bg, or use a `prefers-color-scheme` media query pair.

### L5. Twitter card type inconsistency
- **Where:** Homepage uses `twitter:card = summary_large_image`. All other pages use `summary`.
- **Why it matters:** Twitter/X renders different card sizes. Subpages share with a small thumbnail; the homepage gets a hero card. Probably intentional, but worth confirming — `summary_large_image` is generally better for engagement on all pages if the OG image is 1200x630.
- **Action:** If the dynamic OG image at `/opengraph-image` is 1200x630 (it is, per Next.js `ImageResponse` default), set every page to `summary_large_image` for consistency.

### L6. Hash-anchor redirects use `Refresh:` header in addition to `Location:`
- **Where:** `/services/ai-training` redirect headers include `Refresh: 0;url=/#adoption`.
- **Why it matters:** Modern bots and browsers obey `Location:` first; the `Refresh:` header is legacy and has historically been flagged by some scanners as a soft cloaking pattern. Probably injected by Next.js to work around the hash-fragment stripping noted in H2.
- **Action:** Fixing H2 (changing the redirect target to a real URL, not a hash) will eliminate this side-effect.

---

## Per-Page Pass/Fail Summary

| URL | Title | Description | Canonical | H1 | Viewport | OG image | Twitter | JSON-LD | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `/` | pass | pass | pass | pass (1) | pass | **fail (localhost)** | pass | pass | M1 |
| `/book` | pass | pass | pass | pass (1) | pass | pass | pass | pass | M4 |
| `/contact` | pass | pass | pass | pass (1) | pass | pass | pass | pass | M4 |
| `/about` | pass | pass | pass | pass (1) | pass | pass | pass | pass | — |
| `/service-areas` | pass | pass | pass | pass (1) | pass | pass | pass | pass (incl. AdministrativeArea) | — |
| `/ai-automation-cornwall` | pass | pass | pass | pass (1) | pass | pass | pass | pass (Service+Offer+FAQ) | M2, M3 |
| `/ai-consultant-uk` | pass | pass | pass | pass (1) | pass | pass | pass | pass (Service+Offer+FAQ) | M2, M3 |
| `/privacy` | pass | pass | pass | pass (1) | pass | pass | pass | pass | M6 |
| `/terms` | pass | pass | pass | pass (1) | pass | pass | pass | pass | M6, L3 |

---

## Crawlability & Infrastructure

| Asset | Status | Notes |
|---|---|---|
| `/robots.txt` | 200, valid | Sitemap points at prod `https://quilliam.ai/sitemap.xml` (correct). |
| `/sitemap.xml` | 200, well-formed XML | 9 URLs, all on prod domain. `lastmod` 2026-05-25 for 7 URLs, 2026-04-11 for legal pages. |
| `/.well-known/security.txt` | 200 | Present and accessible. |
| `/security.txt` | 200 | Also accessible at root (Next.js serves from `public/`). Non-issue. |
| `/3d99157dbd521de3c44fefb4153555d6.txt` | 200 | IndexNow key file present and accessible. |
| `/opengraph-image` | 200, ~840ms | Dynamic image generation works. |
| `/services/ai-training` | 308 → `/#adoption` | See H2. |
| `/services/ai-automation` | 308 → `/#agents` | See H2. |
| `/services/digital-services` | 308 | See H2. |
| Broken internal links | none found | All `href="/..."` resolve to 200. |
| Redirect chains | none > 1 hop | 308s go straight to target (even if target is wrong, see H2). |

---

## Security Headers (Live)

All present on every audited URL:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Content-Security-Policy: ...` (enforcing — see H1)
- `X-Powered-By` absent (good, `poweredByHeader: false`)

CSP allows `https://eu.posthog.com` in `connect-src` (correct for PostHog EU instance). `script-src` includes `'unsafe-inline' 'unsafe-eval'` and `blob:` — required for Next.js dev/runtime, acceptable. `frame-ancestors 'none'` is correct.

---

## Mobile-Friendliness

- Viewport: `width=device-width, initial-scale=1` on every page. Pass.
- No fixed widths in HTML root structure.
- Touch target audit not performed (requires rendered DOM); from source inspection nav buttons use the shared shadcn Button with `h-12` (48px) — meets minimum touch target.
- Theme-color set but mismatched with brand bg (see L4).

---

## Core Web Vitals — Source-Inspection Flags

LCP/INP/CLS can only be measured at runtime; from HTML/CSS inspection:

- **LCP risk: low.** Homepage preloads the primary font woff2 and `/logo-white.svg` via `Link: <...>; rel=preload`. Hero text is server-rendered. No render-blocking external scripts above the fold.
- **CLS risk: low.** No `<img>` without explicit dimensions found in scanned sample (homepage uses `next/image` for client logos with `sizes` props, plus inline SVG for the nav). Font is `Manrope` via `next/font` (subset, self-hosted), which avoids FOUT.
- **INP risk: low.** Minimal client JS — only `Nav`, `BookingForm`, `WhatsAppButton`, PostHog provider, and `FadeIn` per AGENTS.md. No global event handlers in the source.
- **Watch item:** PostHog client-side analytics adds JS weight. Defer or use the `posthog-server.ts` module where possible to keep TBT/INP low. The `connect-src https://eu.posthog.com` in CSP confirms client beacons are active.

---

## JavaScript Rendering

- Server-side rendering: confirmed. All `<h1>`, meta, JSON-LD, canonical, and copy are present in the initial HTML payload — no JS required for indexing.
- Hydration: present (`__next` boundary, RSC payload streamed). Source-rendered content is complete; client hydration is progressive enhancement only.
- Verdict: SSR/RSC — fully crawlable without JS. Pass.

---

## Hreflang

Not present. Not expected (UK-only site). No action.

---

## IndexNow

- Key file at `/3d99157dbd521de3c44fefb4153555d6.txt` returns 200. Pass.
- AGENTS.md references `/api/indexnow/route.ts` endpoint — not exercised in this audit; verify it's wired to a deploy hook so URL submissions actually go out on publish.

---

## Recommended Action Order

1. **H2** — fix the `/services/*` → hash-anchor redirects (highest impact; protects existing backlink equity).
2. **H1** — reconcile AGENTS.md CSP wording with the enforcing header that ships.
3. **H3** — update `llms.txt` / `llms-full.txt` to remove `/services/*` and add the two new landing pages.
4. **M1 + L1** — add default `openGraph.images` / `twitter.images` to root layout.
5. **M2** — decide URL convention for programmatic landing pages (flat root vs `/services/{slug}` vs `/locations/{slug}`) and document it.
6. **M3** — add cross-links between the programmatic landing pages and to `/about` and `/service-areas`.
7. **L2** — decide whether to extend the AI crawler block list.
8. **L4, L5, L6, M6, L3** — polish.
