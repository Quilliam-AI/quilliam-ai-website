# Sitemap Audit — quilliam.ai

**Audited:** 2026-05-26
**Source:** `src/app/sitemap.ts` (programmatic, Next.js MetadataRoute)
**URLs declared:** 9
**Robots sitemap declaration:** `https://quilliam.ai/sitemap.xml` (matches)

## Score: 72 / 100

Well-formed, small, accurate. Loses points for missing high-value funnel pages, programmatic location pages parked at root, deleted services subdir leaking 308 chains, and no internal hierarchy.

---

## Critical

None. XML is valid, URL count well under 50k, no broken/404s in current sitemap.

---

## High

### H1. Three top-level URLs are SEO landing pages parked at root
`/ai-automation-cornwall` and `/ai-consultant-uk` live at the root, with no parent hierarchy. As more programmatic landers are added (per `service-areas` content listing Cornwall, Devon, Bristol, London, South East, Midlands, North, Scotland, Wales, NI), root will become a flat dump. Move now while there are only two.

- **Recommended:** `/locations/ai-automation-cornwall` (location pages) and `/services/ai-consultant-uk` (service-modifier pages), OR a unified `/ai/{slug}` namespace. Add 301s from current URLs.
- Quality gate: you have 2 location-style pages now. Threshold is 30 before warning, 50 before hard stop. Safe to scale to ~20 if each has genuinely unique content (case studies, local references, distinct service detail). Anything mass-templated past that triggers Google's doorway-page algorithm.

### H2. `/services/ai-training`, `/services/ai-automation`, `/services/digital-services` return 308 to homepage anchors
`next.config.ts` redirects these to `/#adoption`, `/#agents`, `/#workflows`. The directories `src/app/services/ai-training/` etc. still exist on disk with `_components/` and `ai-audit/` subdirs. Three concerns:
1. **External links / historical backlinks** to these URLs hit a 308 → fragment redirect. Fragments are stripped by most crawlers, so link equity flows to `/` but the anchor scroll is lost on first paint for many user agents.
2. AGENTS.md still documents these as live service routes — codebase docs are out of sync.
3. `src/app/services/ai-audit/` returns 404 (no page.tsx). Dead directory.

- **Recommended:** Decide whether services are coming back as standalone pages. If yes, restore them and add to sitemap. If no, delete the empty directories and remove redirects after backlink decay (or convert to clean root-anchor links from external sources). Update AGENTS.md either way.

### H3. Missing high-intent funnel pages from sitemap
The `/book` page is included (good), but there's no thank-you/confirmation page indexed or excluded. If the booking flow ever uses a `/book/thank-you` route, exclude it via metadata `robots: { index: false }` and keep it out of sitemap.

Also missing from sitemap but exist as real pages: none currently outside services redirects. Coverage is complete for live pages.

---

## Medium

### M1. `/hero-options` is a dev/internal page leaking
`src/app/hero-options/page.tsx` has `robots: { index: false, follow: false }` — good. It's correctly excluded from sitemap. But it's reachable at `/hero-options` (200 status). Recommend either:
- Move under `/dev/` or gate behind env check, or
- Add to `next.config.ts` redirects to 404 in production.

Not urgent — noindex is doing the job.

### M2. No `/services` index page
With service routes redirecting to homepage anchors, there's no canonical landing for "what we do" beyond `/#agents`, `/#adoption`, `/#workflows`. Homepage anchors don't rank as standalone pages. Either:
- Build a `/services` index page, or
- Build out the three `/services/{slug}` pages properly (matches AGENTS.md intent).

The second is the documented architecture. The current state contradicts it.

### M3. `/industries/gyms` directory exists but 404s
`src/app/industries/gyms/` exists with no `page.tsx`. Either build it out (industry-specific landing pages are good SEO — see L1) or delete the empty directory.

### M4. `/quiz` and `/resources` empty directories
Both directories exist with no `page.tsx`, return 404. Stale scaffolding. Delete or build out. The memory note flags `/quiz` as part of the paused AI Strategy content plan — fine to leave if you'll resume in ~3 weeks.

---

## Low

### L1. Sitemap coverage opportunities
Pages worth creating and adding to sitemap, in priority order:

1. **Service pages restored:** `/services/ai-training`, `/services/ai-automation`, `/services/digital-services` (matches AGENTS.md). Highest-impact missing pages.
2. **Case studies:** `/case-studies/vetvision-ai` (your one named live engagement). Single deep case study beats five thin ones. Add `CaseStudy` schema.
3. **Location landers (capped at ~20):** `/locations/ai-cornwall`, `/locations/ai-devon`, `/locations/ai-bristol`, `/locations/ai-london`. Only ship with 400+ words of genuinely local content per page (local references, travel notes, distinct testimonials). Do **not** mass-generate.
4. **Industry landers:** `/industries/veterinary` (you have a real client), `/industries/professional-services`, `/industries/ecommerce`. Only build with real client examples or genuine domain content.
5. **Glossary / definitions:** `/glossary/ai-agent`, `/glossary/n8n-workflow`, `/glossary/ai-implementation` — safe at scale per Sitemap Architecture guidance. 200+ word definitions, citable.
6. **Pricing page:** `/pricing` with day rate and package details. High commercial-intent search target.
7. **Blog / writing:** `/writing/{slug}` once the content system in the memory note resumes.

### L2. `lastmod` hygiene
All non-legal URLs set to identical `2026-05-25`. Currently fine (small site, near-launch). Once the site stabilises, use real file mtimes or git-derived dates to give Google honest signals — identical dates across all URLs is a low-quality flag at scale.

### L3. No `priority` or `changefreq` declared
Correct decision. Google ignores both. Don't add them.

### L4. Trailing-slash consistency
`skipTrailingSlashRedirect: true` in `next.config.ts` for PostHog reasons. Sitemap URLs are all no-trailing-slash. Good — consistent. Just make sure no future page uses `/path/`.

### L5. XML sitemap is uncompressed
Fine at 9 URLs. Once you exceed ~1000 URLs, consider serving `sitemap.xml.gz` or splitting into a sitemap index. Not relevant for 6 months.

---

## Per-URL Inspection

| URL | Status | Notes |
|---|---|---|
| `/` | 200 | OK |
| `/book` | 200 | OK |
| `/contact` | 200 | OK |
| `/about` | 200 | OK |
| `/service-areas` | 200 | OK |
| `/ai-automation-cornwall` | 200 | OK — but see H1 (move to subdir) |
| `/ai-consultant-uk` | 200 | OK — but see H1 |
| `/privacy` | 200 | OK |
| `/terms` | 200 | OK |

Pages **not** in sitemap (correctly):
- `/hero-options` — noindex set, dev tool
- `/services/ai-training` etc. — 308 redirects (correctly excluded)

All sitemap URLs return 200, no redirects, no noindex meta. Clean.

---

## Recommended sitemap.ts changes (immediate)

No URL additions required today. Decisions needed first:
1. Restore `/services/{slug}` pages or commit to deletion + AGENTS.md update.
2. Decide hierarchy for programmatic landers before adding more.
3. Delete empty dirs: `src/app/quiz/`, `src/app/resources/`, `src/app/industries/gyms/`, `src/app/services/ai-audit/`.

Once those decisions land, the sitemap will need entries for restored service pages, any case study route, and a `/pricing` page if added.

## Validation summary

| Check | Result |
|---|---|
| Valid XML | Pass |
| Sitemap protocol compliance | Pass |
| <50k URLs | Pass (9) |
| All URLs return 200 | Pass |
| No redirects in sitemap | Pass |
| No noindex in sitemap | Pass |
| `lastmod` present | Pass |
| `lastmod` realistic | Marginal (mostly identical) |
| `priority`/`changefreq` absent | Pass (correct) |
| robots.txt declares sitemap | Pass |
| Codebase pages match sitemap | Partial (services redirects + empty dirs) |
| Location quality gate (<30) | Pass (2/30) |
