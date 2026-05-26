# Schema.org Audit — Quilliam AI

Audited 2026-05-26 against http://localhost:3000 (build returns HTTP 200 on all 9 pages). All schema is JSON-LD with `@context: https://schema.org`. No Microdata or RDFa detected.

**Overall score: 82 / 100**

The graph is well-constructed: every page inherits the root `Organization` + `Person` + `WebSite` block, sub-pages cross-reference via `@id`, and the company facts (CRN 17151006, address 25 Red Cove Close, St. Eval, PL27 7GB, foundingDate 2026-04-11) are accurate and match `src/lib/content.ts`. Deductions are for misleading "£0" `Offer` nodes, a thin `Person` node on `/about`, missing `sameAs`, geo-targeting gaps on the Cornwall landing page, and minor `@id` formatting inconsistency.

---

## Per-page summary

| Page | Schemas detected | Parse | Notes |
|---|---|---|---|
| `/` | Person, ProfessionalService+Organization, WebSite, WebPage, Service×3, FAQPage(6) | OK | WebPage `@id` malformed: `quilliam.ai#webpage` (missing slash) |
| `/book` | root + BreadcrumbList, WebPage | OK | No `ReserveAction` or Offer for the session |
| `/contact` | root + BreadcrumbList, WebPage | OK | Generic WebPage; could be ContactPage |
| `/about` | root + BreadcrumbList, WebPage | OK | Person node not extended on its own page; no AboutPage type |
| `/service-areas` | root + BreadcrumbList, WebPage, Service (3 AdministrativeArea entries) | OK | Solid; org-level `areaServed` still only "United Kingdom" |
| `/ai-automation-cornwall` | root + BreadcrumbList, WebPage, Service + FAQPage(3) | OK | Service correctly wired. `areaServed=United Kingdom` not Cornwall. Offer `price=0` |
| `/ai-consultant-uk` | root + BreadcrumbList, WebPage, Service + FAQPage(3) | OK | Service correctly wired. Offer `price=0` |
| `/privacy` | root + BreadcrumbList, WebPage | OK | Adequate |
| `/terms` | root + BreadcrumbList, WebPage | OK | Adequate |

All `@id` cross-references (`#organization`, `#founder`, `#website`) resolve to nodes that exist in the root layout graph. No duplicate entity nodes across pages.

---

## Critical (broken / invalid)

None. Every block parses, required fields are present, and types are valid + non-deprecated.

---

## High (missing important schemas / misleading data)

1. **Offer `price: "0"` on `/ai-automation-cornwall` and `/ai-consultant-uk` is misleading.**
   - File: `src/app/ai-automation-cornwall/page.tsx`, `src/app/ai-consultant-uk/page.tsx`.
   - Renders as "Free" in Google's rich-result preview and contradicts the post-`cef0684` decision to remove "free" framing from site copy.
   - Fix: drop the `Offer` entirely, or change to `priceSpecification` with `PriceSpecification` describing day rate £300–£400 / packages from £500. Recommended replacement:
     ```json
     "offers": {
       "@type": "Offer",
       "priceSpecification": {
         "@type": "PriceSpecification",
         "minPrice": "300",
         "maxPrice": "400",
         "priceCurrency": "GBP",
         "unitText": "DAY"
       },
       "description": "Day-rate consulting; fixed-price packages from £500. Quoted clearly before work starts."
     }
     ```

2. **`/ai-automation-cornwall` Service `areaServed` is "United Kingdom" instead of Cornwall.**
   - File: `src/app/ai-automation-cornwall/page.tsx`.
   - Defeats the geo-targeting purpose of the landing page. Should be an `AdministrativeArea` named "Cornwall" (or a `Place` with `geoMidpoint`).
   - Fix:
     ```json
     "areaServed": [
       { "@type": "AdministrativeArea", "name": "Cornwall" },
       { "@type": "AdministrativeArea", "name": "South West England" }
     ]
     ```

3. **`/about` does not extend the `Person` node.**
   - File: `src/app/about/page.tsx`.
   - Only inherits the root layout Person (name, jobTitle, worksFor, url, image). Missing high-value properties for entity recognition and LLM citation: `description`, `knowsAbout`, `alumniOf`, `sameAs` (LinkedIn / X / GitHub), `nationality`.
   - Add an extended Person node on `/about` referencing the same `@id` so search engines merge them. Example:
     ```json
     {
       "@context": "https://schema.org",
       "@type": "Person",
       "@id": "https://quilliam.ai/#founder",
       "description": "Founder of Quilliam AI. Builds practical AI workflows and supervised agents for UK businesses.",
       "knowsAbout": ["Applied AI", "LLM workflows", "AI agents", "n8n", "AI adoption", "Prompt engineering"],
       "sameAs": [
         "https://www.linkedin.com/in/levi-quilliam/"
       ]
     }
     ```

4. **Organization `sameAs` is absent.**
   - `siteConfig.socialLinks` is `[]` so the conditional in `src/app/layout.tsx` skips `sameAs`. This is the single biggest entity-graph signal missing — even one LinkedIn URL meaningfully helps disambiguation.
   - Fix: populate `siteConfig.socialLinks` with the Quilliam AI Ltd LinkedIn page (and any X/GitHub/Companies House profile URL) in `src/lib/content.ts`.

---

## Medium (enhancement opportunities)

5. **`/contact` should use `ContactPage` (with optional `ContactPoint`).** Replace the generic `WebPage` block with `@type: "ContactPage"` and add a `ContactPoint` (email, telephone, `contactType: "customer service"`, `areaServed: "GB"`, `availableLanguage: "en"`). The ContactPoint can also be added once to the root Organization schema rather than per page.

6. **`/about` should use `AboutPage` instead of generic `WebPage`.** Trivial change in the WebPage builder — set `@type: "AboutPage"` and add `mainEntity: { "@id": "https://quilliam.ai/#founder" }`.

7. **`/book` has no booking schema.** Add a `Service` node (or `Offer`) with a `potentialAction` of type `ReserveAction` pointing at the booking form. This communicates intent to search engines and supports future Google "book now" actions:
   ```json
   {
     "@type": "Service",
     "@id": "https://quilliam.ai/book#service",
     "name": "AI Opportunity Session",
     "provider": { "@id": "https://quilliam.ai/#organization" },
     "areaServed": { "@type": "Country", "name": "United Kingdom" },
     "potentialAction": {
       "@type": "ReserveAction",
       "target": "https://quilliam.ai/book"
     }
   }
   ```

8. **Root Organization `areaServed` could be richer.** Currently a single `Country`. Since `/service-areas` lists regional `AdministrativeArea` entries, mirror that array on the Organization itself so off-site/aggregator parsers see UK-wide coverage:
   ```json
   "areaServed": [
     { "@type": "Country", "name": "United Kingdom" },
     { "@type": "AdministrativeArea", "name": "Cornwall" },
     { "@type": "AdministrativeArea", "name": "South West England" },
     { "@type": "AdministrativeArea", "name": "Greater London" }
   ]
   ```

9. **Homepage FAQPage on a commercial site — informational note (not Critical).** Google restricted FAQ rich results to government/healthcare in August 2023. Existing FAQPage still benefits LLM/AI citation discoverability so retention is correct. No action needed; just be aware the rich result will not appear in Google SERPs.

10. **`Service` nodes lack `hasOfferCatalog` / pricing.** The three homepage services have `description` and `serviceType` but no `offers`. Adding even a single Offer per service (with the day-rate `PriceSpecification` from item 1) helps LLM extraction of "what does it cost".

---

## Low (cosmetic / polish)

11. **Homepage WebPage `@id` is `https://quilliam.ai#webpage`** — every other page uses `https://quilliam.ai/{path}#webpage`. Add the slash for consistency: `https://quilliam.ai/#webpage`. File: wherever the homepage `WebPageJsonLd` is rendered.

12. **`Person.jobTitle` uses an ampersand: "Founder & Principal Consultant".** Valid, but "Founder and Principal Consultant" parses more cleanly in some validators. Optional.

13. **`telephone` is rendered as `+447593121621`.** Correct E.164. Worth confirming `siteConfig.whatsapp` (used to build it) never gets a leading `+` later, which would produce `++…`. Current code is safe.

14. **`priceRange: "£££"`** is acceptable. Once Offers carry concrete prices (item 1), this becomes redundant.

15. **No deprecated types in use** (no HowTo, no SpecialAnnouncement, no CourseInfo, no EstimatedSalary, no LearningVideo). Good.

16. **AGENTS.md references service routes that no longer exist** (`/services/ai-training`, `/services/ai-automation`, `/services/digital-services` are deleted in git status). Not a schema bug, but the documented schema strategy refers to a `ServiceJsonLd` flow that now only lives on the two new SEO landing pages. Update AGENTS.md when the services IA settles.

---

## Validation checklist roll-up

- [x] `@context` is `https://schema.org` on every block
- [x] All `@type` values are valid + non-deprecated
- [x] Required properties present on Organization, Person, Service, FAQPage, BreadcrumbList
- [x] All URLs absolute
- [x] Dates ISO 8601 (`foundingDate: 2026-04-11`, `datePublished`, `dateModified`)
- [x] No placeholder text
- [x] No duplicate `#organization` nodes; all cross-references resolve
- [x] Business facts match `src/lib/content.ts`
- [ ] Offer prices reflect real pricing (currently £0 on two pages — see High #1)
- [ ] Organization `sameAs` populated (currently empty — see High #4)
- [ ] Founder Person extended on `/about` (see High #3)
- [ ] Local geo-targeting on `/ai-automation-cornwall` (see High #2)

---

## Score breakdown (0–100)

| Category | Weight | Score |
|---|---|---|
| Parsing / validity | 15 | 15 |
| Required props coverage | 15 | 15 |
| Cross-reference integrity (`@id`) | 10 | 9 (homepage `@id` slash) |
| Business-fact accuracy | 10 | 10 |
| Entity-graph completeness (sameAs, About/Contact types, founder extension) | 15 | 8 |
| Offer / pricing accuracy | 10 | 4 (misleading £0) |
| Local SEO / areaServed | 10 | 6 (Cornwall page is UK-generic) |
| FAQPage coverage | 5 | 5 |
| Avoidance of deprecated types | 5 | 5 |
| Breadcrumbs everywhere needed | 5 | 5 |
| **Total** | **100** | **82** |
