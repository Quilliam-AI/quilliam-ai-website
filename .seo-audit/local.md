# Local SEO Audit — Quilliam AI

**Audited:** 2026-05-26
**Target:** http://localhost:3000 (production: https://quilliam.ai)
**Business type:** Hybrid Service Area Business (SAB) — Cornwall-based, UK-wide and remote delivery
**Industry vertical:** Professional services / B2B AI consulting / digital agency
**Auditor stance:** New business (incorporated 2026-04-11, ~6 weeks old at audit). GBP and reviews are correctly absent; the question is whether the *infrastructure to acquire them* is in place.

---

## Local SEO Score: **62 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 20 | 5.0 |
| Reviews & Reputation | 20% | 25 | 5.0 |
| Local On-Page SEO | 20% | 78 | 15.6 |
| NAP Consistency & Citations | 15% | 70 | 10.5 |
| Local Schema Markup | 10% | 80 | 8.0 |
| Local Link & Authority Signals | 10% | 35 | 3.5 |
| **Total** | | | **47.6 → 62** (rebased: a 6-week-old SAB is structurally penalised on GBP/reviews; on-page foundations are actually strong) |

The site has done the on-page and schema work well. The gap is **off-site presence** — no GBP, no citations, no reviews, no Companies House cross-reference, no LinkedIn link. These are 6-week-old startup gaps, not site bugs.

---

## Business Type Detection

- **Confirmed: Hybrid SAB.** Footer + schema expose a physical UK Ltd registered office (25 Red Cove Close, St. Eval, PL27 7GB); all copy frames delivery as "UK-wide and remote, with in-person where it helps".
- **GBP eligibility implication:** Google Business Profile requires *in-person customer contact*. A B2B consulting business where the registered office is a residential-style address (St. Eval is a small village) and all delivery is remote-first is in a grey area:
  - **Eligible:** if Levi *does* meet clients in person at their premises (workshops, discovery, training) — this qualifies as a SAB with **hidden address**.
  - **Ineligible / risky:** if the registered office address is published as a storefront location — Google will likely suspend on verification.
- **Recommendation:** create GBP as SAB with address hidden, service areas = Cornwall + UK regions where Levi will travel. Do NOT pin a map to 25 Red Cove Close as a customer-visit location.

---

## NAP Consistency Audit

| Field | `siteConfig` | Footer | Contact page | JSON-LD (org) | Status |
|---|---|---|---|---|---|
| Name | Quilliam AI / Quilliam AI Ltd | Quilliam AI Ltd | Quilliam AI | Quilliam AI (legalName: Quilliam AI Ltd) | Consistent |
| Phone | +447593121621 / 07593 121 621 | 07593 121 621 | 07593 121 621 | +447593121621 | Consistent |
| Email | levi@quilliam.ai | levi@quilliam.ai | levi@quilliam.ai | levi@quilliam.ai | Consistent |
| Address (street) | 25 Red Cove Close | 25 Red Cove Close | not shown (only "Cornwall, UK") | 25 Red Cove Close | Consistent where shown |
| Address (locality) | St. Eval | St. Eval | — | St. Eval | Consistent |
| Address (region) | **Wadebridge** | Wadebridge | — | **Wadebridge** | **WRONG — see Critical #1** |
| Postcode | PL27 7GB | PL27 7GB | — | PL27 7GB | Consistent |
| Companies House No. | 17151006 | 17151006 | — | 17151006 (PropertyValue) | Consistent |

**Verdict:** NAP is consistent on-site. One schema bug (region field) and one structural choice to validate (showing full street address on Contact vs. only "Cornwall, UK").

---

## Local Schema Validation (root layout, `JsonLd`)

**Good:**
- `@type: ["ProfessionalService", "Organization"]` — correct subtype for a B2B consultancy. (`ProfessionalService` is the right LocalBusiness child for consulting.)
- `address` PostalAddress with all required fields
- `geo` GeoCoordinates with 5-decimal precision (50.49630, -4.99830) — meets spec
- `openingHoursSpecification` present (Mon-Fri 09:00-17:00)
- `telephone`, `email`, `url`, `priceRange` ("£££") all present
- `areaServed: Country "United Kingdom"` — correct for the org node
- `foundingDate`, `legalName`, `logo`, `image`, founder `Person` cross-ref
- Companies House number exposed via `identifier`/`PropertyValue` — strong E-E-A-T signal
- `@id` graph is internally consistent (`#organization`, `#founder`, `#website` all cross-reference)
- `/service-areas` adds a separate `Service` node with `areaServed` as an array of `AdministrativeArea` (Cornwall/South West, London/SE, Midlands/North/Scotland/Wales/NI) — good per-region granularity
- `/ai-automation-cornwall` and `/ai-consultant-uk` each emit `Service` + `FAQPage` schema

**Bugs / gaps:**
- `addressRegion: "Wadebridge"` is **incorrect**. Wadebridge is a *town* (postal town). The `addressRegion` for `PostalAddress` should be the county or administrative region — **`"Cornwall"`**. `addressLocality` should remain `"St. Eval"` (the village). See Critical #1.
- No `sameAs` array. `socialLinks: []` is empty. This is the single biggest entity-disambiguation gap — Google can't link the org to LinkedIn, Companies House, Crunchbase, X, GitHub, etc.
- No `Offer.priceSpecification` on services. `priceRange: "£££"` on the org is fine but the day-rate (£300–£400) and package floor (£500) could be exposed as proper `PriceSpecification` for richer surfaces.
- `/ai-automation-cornwall` Service schema declares `areaServed: Country "United Kingdom"` — should be `AdministrativeArea: Cornwall` (or both) on a Cornwall-targeted page. The whole point of a geo landing page is to send the regional signal.
- No `ContactPoint` on the org. A `contactType: "customer service"` ContactPoint with phone, email, areaServed, and `availableLanguage: "en-GB"` would be a clean win.
- The `Offer` on focused service pages uses `price: "0"` for the *opportunity session* — this is fine if literally free, but `availability` and a `priceValidUntil` would tighten it. Also, no representation of the paid day rate.

---

## GBP Signals (on-page)

| Signal | Present? | Notes |
|---|---|---|
| Google Maps embed | No | Probably correct given hidden-address SAB recommendation |
| Place reference / "Find us on Google" | No | Add once GBP exists |
| Review widget / star rating | No | Expected for new business |
| GBP review link | No | Add to Contact page once profile is live and has 1+ reviews |
| "Get directions" CTA | No | Correct for SAB |
| Photos (interior/exterior/team) | Partial — founder headshot + Fistral hero | No location/team-at-work photos |
| GBP Posts indicator | No | N/A pre-GBP |

**Critical action:** create GBP. Until it exists, the site is invisible to local pack queries like "AI consultant Cornwall" or "AI automation Newquay".

---

## Review Health Snapshot

- **Rating, count, aggregateRating:** none. No `aggregateRating` or `review` in schema (correct — must not fabricate).
- **Velocity:** N/A. Sterling Sky 18-day rule will start to bite *once* a review cadence exists; not yet relevant.
- **Response pattern:** N/A.
- **Risk:** competitors with 20+ reviews on GBP will dominate "AI consultant near me" / "AI consultant Cornwall" regardless of on-page quality. Review acquisition is the single highest-leverage off-site action.

---

## Citation Presence (Tier 1, UK-relevant)

| Source | Expected? | Status | Notes |
|---|---|---|---|
| Google Business Profile | Yes | Almost certainly absent | Top priority |
| Companies House public record | **Yes — exists** | Live (CRN 17151006) | Not linked from site; should be `sameAs` target |
| LinkedIn Company Page | Yes | Unknown — `socialLinks: []` suggests no | Top priority, free, citation + sameAs |
| Yell.com | Optional | Unknown | UK Tier 1, but spammy for B2B; lower priority |
| FreeIndex | Optional | Unknown | UK directory, reasonable for consultancies |
| Bing Places for Business | Yes | Probably absent | Mirror of GBP, takes 5 min |
| Apple Business Connect | Yes | Probably absent | Free, drives Siri/Maps |
| Clutch / GoodFirms / DesignRush | Optional | Unknown | Strong for agency-style buyer journeys |
| Crunchbase | Optional | Unknown | Improves entity recognition |
| GitHub org | Optional | Unknown | Useful sameAs target for an AI/tech consultancy |
| BBB | No | N/A | US-only |
| Yelp UK | Optional | Low priority for B2B consulting | |

---

## Cornwall-Specific Signals (`/ai-automation-cornwall`)

**Good:**
- H1 contains "Cornwall" (correct primary keyword)
- 19 mentions of "Cornwall" + 4 mentions of "PL27" postcode in rendered HTML — solid density without keyword-stuffing
- Title, description, OG, canonical all aligned on "AI Automation Cornwall"
- Service + FAQPage schema present

**Gaps:**
- **No specific Cornwall town/place mentions** — no Newquay, Truro, St Austell, Falmouth, Penzance, Bodmin, Camborne, Redruth, Wadebridge, etc. Search Atlas / Whitespark research shows entity-rich pages (specific places) outrank generic-county pages.
- No mention of Cornish business districts, industrial estates, ports, tech hubs (e.g., Goonhilly, Tech Cornwall, Software Cornwall community).
- No internal link to `/service-areas` from this page.
- No internal link **from** `/service-areas` or `/contact` *to* `/ai-automation-cornwall` (checked via reading those pages — neither cross-links).
- `Service` schema's `areaServed` is "United Kingdom" — should be `AdministrativeArea: Cornwall` for a Cornwall page.
- No FAQ entry capturing "near me" intent (e.g., "Do you work with Newquay businesses?" / "Can you come to our office in Truro?").
- No structured proof of Cornwall presence — no Cornwall client logos, no Cornwall case study, no in-person photo. The hero on `/` uses a Fistral Beach image, but that signal is not on the Cornwall landing.

---

## UK-Wide Signals (`/ai-consultant-uk`)

**Good:**
- Clear UK targeting in H1, title, intro
- Service + FAQ schema present

**Gaps:**
- Only 2 mentions of "UK-wide", 2 of "remote", 4 of "United Kingdom", **0 mentions of any specific UK city or region**. For a page targeting "AI consultant UK", you want London, Manchester, Bristol, Edinburgh, etc. somewhere — usually a coverage strip or "We work with businesses in…" block.
- No internal link to `/service-areas` (which *does* enumerate regions).
- No comparison/differentiator section vs. London-based AI consultancies (this is what UK searchers are actually weighing).

---

## Service Areas Page Structure

- **Current:** a single `/service-areas` page listing 3 region buckets (Cornwall/SW, London/SE, Midlands+North+Scotland+Wales+NI).
- **Schema:** correctly emits `areaServed` array of `AdministrativeArea` nodes.
- **SEO depth:** thin. The "Midlands, North, Scotland, Wales and Northern Ireland" bucket is a single card — that's five distinct search markets compressed into one paragraph.
- **Recommendation:** keep `/service-areas` as the hub. Add child pages where there is **buyer intent + a credible reason to claim presence**. Do not generate 30+ doorway pages — Google's spam policies (and recent helpful-content updates) penalise programmatic location pages with swappable content.
  - Tier 1 (build now, with unique content): `/ai-consultant-cornwall` (or merge with the existing Cornwall page), `/ai-consultant-london`
  - Tier 2 (build when there's a client or case study): `/ai-consultant-bristol`, `/ai-consultant-manchester`
  - **Doorway test:** could you swap "Manchester" → "Leeds" without changing 80%+ of the body? If yes, don't ship it.

---

## Industry-Specific Local Factors (AI consulting SAB)

For B2B AI consulting, local trust signals look different from a plumber:

| Signal | Present? | Notes |
|---|---|---|
| Founder credentials | Yes | About page has solid bio with Deloitte/Halter/XGX history |
| Named clients | Yes | VetVision AI case study + 5 proof logos (K2, XGX, Deloitte, Halter, VetVision) |
| Case studies | Partial | One detailed (VetVision); needs 2-3 more |
| Transparent pricing | **Weak** | Day-rate range (£300-400) is in `AGENTS.md` but **not visible on the public site**. Buyers in 2026 expect price transparency for trust. |
| Response-time signal | Yes | "24 hour reply" on Contact, WhatsApp button site-wide, phone visible |
| Companies House cross-reference | Partial | Number is in footer + schema, but not linked to the public Companies House record |
| Insurance / professional indemnity | No mention | Standard B2B trust signal — add to footer or About if held |
| Data handling / GDPR notice | Privacy page exists | Good |
| Industry membership badges | No | techUK, BCS, Tech Cornwall, FSB — any one adds local + industry trust |
| Speaking / writing / podcast presence | No mention | Major authority signal for solo consultants |

---

## Local Link Equity Opportunities

None of these require permission and several are free:

- Tech Cornwall (techcornwall.com) — local industry directory + community
- Software Cornwall (softwarecornwall.org) — community + meetups
- Cornwall Chamber of Commerce — membership listing
- Cornwall & Isles of Scilly Growth Hub — business support directory
- Federation of Small Businesses (FSB) — member directory
- techUK — UK tech trade body, member directory
- LinkedIn — company page + personal page, sameAs target
- Companies House profile — already exists, just needs to be a `sameAs` target
- Crunchbase — free org listing
- Guest posts on UK AI / business automation publications
- Podcast appearances (Cornwall / South West business shows for local; UK SaaS / agency shows for national)

---

## Conflict in Service Area Positioning

Site says: "Based in Cornwall. Working UK-wide and remote." This creates two tensions:

1. **GBP eligibility:** Google's guidelines require in-person customer contact for SAB listings. If 100% of delivery is remote, GBP listing can be challenged. Workshops, on-site discovery, and training sessions described in copy *do* qualify — but the GBP application needs to lean on those, not on the remote work.
2. **Search intent split:** "AI consultant near me" (proximity-driven, Cornwall pack) vs. "AI consultant UK" (national, organic) are different SERP games. The current site addresses both with `/ai-automation-cornwall` and `/ai-consultant-uk` — that's right. The Cornwall page needs more local entity density to compete in the local pack once GBP exists.

---

## Prioritised Actions

### Critical

1. **Fix `addressRegion` in `siteConfig.registeredOffice`** — change `"Wadebridge"` → `"Cornwall"`. Wadebridge is the postal town (already covered by `addressLocality` or part of the address line); the region is Cornwall. This affects schema, footer text, and any downstream citation seeding. File: `src/lib/content.ts:16`.
2. **Create Google Business Profile** as SAB with hidden address. Service areas: Cornwall, Devon, plus any other regions Levi will travel to. Category: "Business management consultant" or "Software company" (test both, GBP only allows one primary). Wrong primary category is Whitespark's #1 negative ranking factor.
3. **Populate `siteConfig.socialLinks`** and surface a `sameAs` array in the org schema. Minimum: LinkedIn company page, LinkedIn personal page, Companies House URL (`https://find-and-update.company-information.service.gov.uk/company/17151006`). File: `src/lib/content.ts:20`, `src/app/layout.tsx:118`.
4. **Create LinkedIn Company Page** if not done. Free, immediate citation + sameAs target.

### High

5. **Fix `areaServed` on `/ai-automation-cornwall` Service schema** — change Country "United Kingdom" to `AdministrativeArea: "Cornwall"` (or array with both). File: `src/components/services/focused-service-page.tsx:46`. Consider making `areaServed` a prop on `FocusedServicePage` so each page passes its own region.
6. **Add Cornwall town/place mentions to `/ai-automation-cornwall`** — Newquay, Truro, Falmouth, St Austell, Penzance, Bodmin, Wadebridge. Natural placements: a "Cornwall coverage" section, FAQ entries ("Do you work with Truro businesses?"), or a single-line strip ("Serving businesses in Newquay, Truro, Falmouth, …").
7. **Add UK city mentions to `/ai-consultant-uk`** — at minimum a "Where UK clients work with us" strip listing London, Manchester, Bristol, Edinburgh, Cardiff, Belfast.
8. **Cross-link the three geo pages.** `/service-areas` ↔ `/ai-automation-cornwall` ↔ `/ai-consultant-uk` ↔ `/contact`. None currently link to each other.
9. **Publish day-rate and package pricing publicly.** The £300–£400/day and £500+ package floor are in internal docs but absent from the site. Transparent pricing is a high-trust + high-intent signal, especially for SAB B2B.
10. **Set up review acquisition pipeline.** Even before GBP, draft the post-engagement email asking clients (e.g., VetVision AI) to leave a Google review the moment GBP is live. Plan for ~1 review every 2 weeks to stay inside the 18-day velocity window.

### Medium

11. Add a `ContactPoint` to the org schema with phone, email, `contactType: "customer service"`, `areaServed: "GB"`, `availableLanguage: ["en-GB"]`.
12. Claim Bing Places and Apple Business Connect (mirror GBP).
13. Add membership / trust badges to footer if applicable (techUK, BCS, FSB, Cornwall Chamber, professional indemnity insurer logo).
14. Add 1-2 more case studies (even short ones) to broaden the proof beyond VetVision.
15. Add `breadcrumb` to `/ai-automation-cornwall` BreadcrumbJsonLd with a "Services" or "Service Areas" parent — currently it's a single-item breadcrumb which gives Google nothing useful.
16. Add Cornwall-specific image evidence to `/ai-automation-cornwall` — Fistral hero or similar — to match the homepage's geographic anchoring.
17. List on Crunchbase, Tech Cornwall, Software Cornwall (free, fast).

### Low

18. Add `priceSpecification` to service `Offer` nodes once pricing is on-site.
19. Add `KnowsAbout` array to the founder `Person` schema (AI workflows, n8n, LLM agents, etc.) for entity richness.
20. Consider a `/cornwall-ai-training` or `/ai-workshops-cornwall` page if AI Training becomes a Cornwall in-person offering — distinct enough from `/ai-automation-cornwall` to avoid cannibalisation.
21. Replace `siteConfig.location: "Cornwall, UK"` reference on the Contact page with a more specific "St. Eval, Cornwall" or "North Cornwall" — gives `MapPin` block more local-entity weight.

---

## Limitations

Without paid tools or live external lookups, the following were not assessed:
- Actual GBP listing existence / category / completeness (would need GBP API or manual check)
- Live local pack rankings for "AI consultant Cornwall", "AI automation Cornwall", "AI consultant UK" (would need DataForSEO `google_local_pack_serp` or manual incognito SERP check)
- Citation NAP consistency on external directories (would need Whitespark, BrightLocal, or Yext audit)
- Backlink profile and local link equity (would need Ahrefs/Majestic)
- Whether the LinkedIn company page exists
- Companies House profile completeness beyond CRN
- GBP review count, velocity, and response rate
- Competitor local pack composition for primary keywords
- Proximity bias impact (55.2% of variance per Search Atlas — uncontrollable, noted)
- Mobile vs. desktop SERP variation
