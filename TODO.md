# Quilliam AI — Launch & SEO Action Plan

**Current positioning (2026-04-11):** Quilliam AI is a **general-purpose UK AI agency** offering AI Education (training, workshops, knowledge systems), AI Implementation (automations, agents, n8n workflows, custom tools), and Digital Services (websites, SEO, content). Target: UK businesses of all shapes and sizes. Dual CTA funnel — "Book Free AI Training" and "Book Free AI Audit".

**Rebrand history:**
- **v1 (pre-rebrand):** Quilliam Digital — "AI automation agency for UK small businesses" (gyms, trades, hospitality). SEO audit score 72/100 (5 April 2026). K2 Gym case study. Single "Book Free AI Audit" CTA.
- **v2 (first rebrand, 2026-04-11 AM):** Quilliam AI narrowed to "marketing and AI infrastructure for small B2B SaaS teams". VetVision AI positioned as target market. **Incorrect** — see v3.
- **v3 (second rebrand, 2026-04-11 PM):** Quilliam AI broadened to general UK AI agency doing education + implementation. VetVision reframed as example engagement. Dual CTA funnel introduced. **Current.**

Many items below have been rewritten for v3. The pre-rebrand Completed section is preserved as historical record — ignore its "Quilliam Digital" and "K2 Gym" references.

---

## Uncompleted — Critical (Fix Before Launch)

### 1. Replace all placeholder images with real photography
**Impact:** E-E-A-T, LCP performance, user trust, CSP compatibility — still the single most impactful change before launch.
**Current state:** Every image still uses `picsum.photos` with themed seeds. Credibility-destroying for a professional services site and adds 500ms+ to LCP via redirect chains.

**Shot list (rewritten for v3 services):**
- [ ] Homepage hero — Levi working with a client or running a workshop (suggests both halves)
- [ ] Sprint-process "We Listen" — conversation shot (whiteboard, laptop, notebook)
- [ ] Sprint-process "We Teach or Build" — workshop or coding shot
- [ ] Sprint-process "You Run With It" — client using what was built / trained
- [ ] AI Education service card — training session in progress (laptops, real people)
- [ ] AI Implementation service card — automation workflow, n8n canvas, or agent screenshot
- [ ] Digital Services service card — website on screen / mockup / SEO tool
- [ ] VetVision featured engagement — real shot if permitted, or abstract veterinary/university visual
- [ ] Levi portrait — professional headshot for about + about-preview
- [ ] Cornwall coast background — real Cornwall photo for CTA section

**Steps:**
- [ ] Shoot or source real photos per shot list above
- [ ] Optimise images: WebP or AVIF format, appropriate dimensions (hero 1200×1500, cards 800×600, portrait 600×800)
- [ ] Save to `/public/images/` with descriptive filenames
- [ ] Update all `src` props in components to use local paths
- [ ] Remove `picsum.photos` from `next.config.ts` `remotePatterns`
- [ ] Remove `picsum.photos` from CSP `img-src` in `next.config.ts`
- [ ] Update alt text to describe what each real photo shows (currently generic)

**Files to edit:**
- `src/components/home/hero.tsx`
- `src/components/home/sprint-process.tsx`
- `src/components/home/services-cards.tsx`
- `src/components/home/industry-tabs.tsx`
- `src/components/home/about-preview.tsx`
- `src/components/shared/cta-section.tsx`
- `src/app/about/page.tsx` (hero + Cornwall shot)
- `next.config.ts`

---

### 2. Fix pre-existing `nav.tsx` lint error
**Impact:** `bun run lint` currently exits with code 1 because of this single error. Blocks any CI check that gates on lint.
**Current state:** `src/components/layout/nav.tsx:37` calls `setActiveHash("")` synchronously inside a `useEffect`, tripping `react-hooks/set-state-in-effect`. Pre-existing — wasn't introduced by the rebrand but has been red through both rebrand passes and should be fixed before launch.

**Steps:**
- [ ] Refactor the pathname-change effect to derive `activeHash` from `pathname` rather than setting state inside the effect body. Options: move to `useMemo`, use a `useLayoutEffect`, or reset via a ref + event handler.
- [ ] Verify the nav section-highlighting still works when navigating between home-hash links and subpages.
- [ ] Run `bun run lint` — exit code 0.

**Files to edit:**
- `src/components/layout/nav.tsx`

---

### 3. Set up and link Google Business Profile
**Impact:** #1 local ranking factor for SABs. Currently no GBP linked anywhere on the site.
**Current state:** No GBP listing exists. The trust bar no longer claims "5.0 on Google" (removed in v3), but we still need a GBP for local signals.

**Steps:**
- [ ] Create GBP listing at business.google.com
  - **Business name:** Quilliam AI (trading name of Quilliam AI Ltd)
  - **Primary category:** Business management consultant OR IT consultant (pick the one with lower competition in Cornwall)
  - **Secondary category:** Computer training school (for the AI Education side)
  - **Business type:** SAB (Service Area Business) — hide address, set service area to United Kingdom
  - **Phone:** 07593 121621
  - **Email:** levi@quilliam.ai
  - **Website:** https://quilliam.ai
  - **Description:** Use siteConfig.description from `content.ts`
  - **Hours:** Mon–Fri 9am–5pm
- [ ] Verify the listing (postcard, phone, or video verification)
- [ ] Upload real photos once #1 is complete
- [ ] Add all 3 services to GBP (AI Education, AI Implementation, Digital Services)
- [ ] Add GBP URL to `siteConfig.socialLinks` in `content.ts` — flows into JSON-LD `sameAs` automatically
- [ ] Add visible "Google Reviews" link in footer contact column
- [ ] Once reviews exist, add real `aggregateRating` with actual `reviewCount` to Organization schema in `layout.tsx`

**Files to edit:**
- `src/lib/content.ts` (add GBP URL to `socialLinks`)
- `src/components/layout/footer.tsx` (add visible link)
- `src/app/layout.tsx` (add aggregateRating once reviews exist)

---

### 4. Populate social profile links
**Impact:** Schema `sameAs` is currently an empty array. Every entity recommendation engine (Google knowledge graph, AI crawlers, Bing) uses `sameAs` to disambiguate and rank the business.
**Current state:** `siteConfig.socialLinks` is `[] as string[]` in `content.ts`.

**Steps:**
- [ ] Create Quilliam AI profiles on: LinkedIn company page, X/Twitter, GitHub org (optional), YouTube (if doing demo videos)
- [ ] Ensure each profile links back to https://quilliam.ai
- [ ] Populate `siteConfig.socialLinks` in `content.ts` with the full URLs — they flow into `sameAs` automatically
- [ ] Add visible social icons to the footer

**Files to edit:**
- `src/lib/content.ts`
- `src/components/layout/footer.tsx`

---

## Uncompleted — High Priority (Fix Within 1 Week)

### 4b. Set up Resend API key for booking form emails
**Impact:** The booking form submits but **no email is sent** without a `RESEND_API_KEY` env var. Leads are silently lost.
**Current state:** No Resend key configured in Vercel.

**Steps:**
- [ ] Create a Resend account at resend.com
- [ ] Verify the sending domain (`quilliam.ai`) — add the DNS records Resend provides
- [ ] Create an API key
- [ ] Add `RESEND_API_KEY` to Vercel environment variables (All Environments)
- [ ] Test by submitting the booking form on the live site and confirming email arrives at levi@quilliam.ai

---

### 5. ~~Install analytics~~ DONE (2026-04-12)
PostHog (EU Cloud, Frankfurt) installed with:
- Reverse proxy via Next.js rewrites (`/ph/*`)
- GDPR cookie consent banner with memory-only fallback
- Session recording (password-masked, consent-gated)
- Full booking form funnel: viewed → started → submitted → success/error
- CTA click tracking by type and location across all pages
- Contact method tracking (WhatsApp / phone / email)
- Service card discovery tracking
- `identify()` on successful booking with email/name/business
- Localhost traffic filtered in code
- 8 reusable actions, 6 insights on pinned "Quilliam AI — Conversions" dashboard
- Privacy policy updated with PostHog disclosure and cookie consent explanation
- "Manage Cookies" link in footer

**Still TODO:**
- [ ] Add conversion goals in PostHog Web Analytics UI (click "Add conversion goal" → select Booking Form Submitted, WhatsApp Clicked, CTA Clicked actions)

---

### 5b. Error reporting pipeline (PostHog → GitHub → AI resolution)
**Impact:** Client and server errors caught automatically, reported to PostHog error tracking and GitHub Issues. Simple errors resolved by AI with a PR.
**Current state:** Not implemented.

**Steps:**
- [ ] Enable PostHog error tracking (client-side JS errors captured automatically by the SDK)
- [ ] Add server-side error reporting via `posthog-node` in the booking form server action and API routes
- [ ] Set up PostHog webhook on error events → triggers a GitHub Action
- [ ] GitHub Action creates an issue with error details, stack trace, and session recording link
- [ ] AI agent (Claude Code) picks up the issue, investigates, and if the fix is straightforward, opens a PR
- [ ] PR requires human approval before merge

---

### 6. Collect testimonials across both service halves
**Impact:** E-E-A-T Experience signal. Currently only one example engagement (VetVision) visible on the site and no actual pull-quotes from other clients.
**Current state:** VetVision quote on homepage + AI Education page. Nothing else.

**Steps:**
- [ ] Reach out to past / current clients for pull-quotes (aim for 3–5 total)
- [ ] Ask for permission to use name, business, and location
- [ ] **Diversify by service side** — at least one testimonial per service:
  - One for AI Education (training / workshops)
  - One for AI Implementation (automation / agents)
  - One for Digital Services (website / content)
- [ ] Add a testimonials section to the homepage (either expand the existing VetVision card or add a dedicated row below it)
- [ ] Add individual `Review` schema for each testimonial:
  ```json
  {
    "@type": "Review",
    "author": { "@type": "Person", "name": "..." },
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": "...",
    "itemReviewed": { "@id": "https://quilliam.ai/#organization" }
  }
  ```
- [ ] Add a testimonial to each of the 3 service pages (currently none on AI Implementation or Digital Services)

---

### 7. Build Tier 1 UK citations
**Impact:** Thin external footprint is the biggest systemic ceiling on rankings. NAP consistency across directories is a foundational local SEO signal.
**Current state:** No citations exist. `sameAs` is empty.

**Steps:**
- [ ] Submit to: Yell.com, FreeIndex, Bark, Clutch, Apple Business Connect, Bing Places, Thomson Local, Trustpilot, Yelp UK
- [ ] Ensure NAP is **identical** across all:
  - Name: `Quilliam AI` (trading name; use `Quilliam AI Ltd` only where the legal name is required)
  - Address: `25 Red Cove Close, St. Eval, Wadebridge, PL27 7GB, United Kingdom`
  - Phone: `07593 121621`
  - Email: `levi@quilliam.ai`
  - Website: `https://quilliam.ai`
- [ ] Once profiles exist, add each canonical URL to `siteConfig.socialLinks` so they flow into JSON-LD `sameAs`

---

### 8. Review citable paragraphs for AI extraction
**Impact:** AI citation readiness. Long `sr-only` paragraphs may be penalised as hidden content; visible citable paragraphs rank better.
**Current state:** `/about` has an sr-only citable paragraph (updated for v3). Homepage services-cards has a visible ~150-word definition paragraph. About-preview has a ~130-word paragraph.

**Steps:**
- [ ] Review whether the about page sr-only block should be surfaced visibly somewhere (e.g. as an expanded intro, or moved into the hero subheading)
- [ ] Check that every H2 on the homepage is answered in full prose within the section (not just a heading + UI grid)
- [ ] Confirm AI Education / AI Implementation / Digital Services pages each have a 100–170 word definition paragraph near the top

**Files to check:**
- `src/app/about/page.tsx`
- `src/app/services/ai-training/page.tsx`
- `src/app/services/ai-automation/page.tsx`
- `src/app/services/digital-services/page.tsx`

---

### 9. Source or remove unattributed stats on Digital Services page
**Impact:** Credibility — unsourced statistics undermine trust.
**Current state:** Digital Services page still cites "97%", "46%", "76%" with no inline source. (AI Automation page stats were removed during the v3 rewrite — no action needed there.)

**Steps:**
- [ ] Add subtle source attributions to each stat on the Digital Services "Why this matters" section (e.g. "Source: BrightLocal 2025")
- [ ] Or replace with verified first-party metrics once available

**File to edit:**
- `src/app/services/digital-services/page.tsx`

---

## Uncompleted — Medium Priority (Fix Within 1 Month)

### 10. Consider renaming service URL slugs to match display names
**Impact:** SEO (slug matches the keyword), cleaner sharing, less cognitive friction when reading the sitemap. Also eliminates the current mismatch between slug and display name.
**Current state:** Slugs are legacy from the pre-rebrand site:
- `/services/ai-training` → displays as "AI Education"
- `/services/ai-automation` → displays as "AI Implementation"
- `/services/digital-services` → displays as "Digital Services" (slug matches)

**Decision to make before touching:** Has the site been indexed by Google yet? If yes, rename needs 301 redirects. If no (`quilliam.ai` domain is new), straight rename is safe.

**Steps (if renaming):**
- [ ] Rename folders:
  - `src/app/services/ai-training/` → `src/app/services/ai-education/`
  - `src/app/services/ai-automation/` → `src/app/services/ai-implementation/`
- [ ] Update all internal references: `serviceLinks` in `content.ts`, footer, `OtherServicesSection`, any hardcoded hrefs
- [ ] Update `sitemap.ts`
- [ ] Update `llms.txt` + `llms-full.txt`
- [ ] Update schema `@id` URLs on service pages (`ServiceJsonLd`)
- [ ] Add 301 redirects in `next.config.ts` from old → new slugs just in case anything was shared
- [ ] Update service-specific JSON-LD slug prop
- [ ] Test all internal links

**Files to touch:** 3 service page folders, `content.ts`, `footer.tsx`, `sitemap.ts`, `llms.txt`, `llms-full.txt`, `next.config.ts`, and the `services/shared.tsx` icon mapping

---

### 11. Start a blog with v3-aligned pillar articles
**Impact:** Ranking opportunity + E-E-A-T + content grounding for AI crawlers. A general AI agency needs content that demonstrates expertise on both sides (education + implementation).
**Current state:** No blog exists.

**Steps:**
- [ ] Set up `src/app/blog/` with MDX
- [ ] Write 3–5 pillar articles — drafts below, all targeting the general-AI-agency positioning:
  - **"AI Education vs AI Implementation: which does your team need first?"** — flagship article, maps directly to the dual CTA funnel
  - **"A UK business owner's guide to ChatGPT, Claude, and Gemini (2026)"** — comparison table, when-to-use-which, embedded in real work examples
  - **"How much does it cost to build an AI automation in 2026?"** — pricing transparency article, great for commercial-intent search
  - **"How to roll AI out across your team without it flopping"** — education-angle, linking to the AI Education service
  - **"What is an AI Audit? Everything you need to know"** — funnel-top article with direct CTA to `/book?intent=audit`
- [ ] Each article: 1,500+ words, H2/H3 structure, comparison tables where relevant, internal links to 2–3 service pages, FAQ schema
- [ ] Add blog to `sitemap.ts` and navigation

---

### 12. Replace K2 Gym case-study plan with VetVision case study
**Impact:** Single most-valuable E-E-A-T asset — a full case study with real outcomes.
**Current state:** VetVision is featured as an "example engagement" on the homepage but there's no dedicated page. The old plan was for a K2 Gym case study which is no longer relevant.

**Steps:**
- [ ] Create `src/app/case-studies/vetvision/page.tsx`
- [ ] Include: the problem (two brands, one GTM lead, manual onboarding), the work across all three service workstreams (Education / Implementation / Digital Services), before/after metrics where available, quote from James, permission to use business name
- [ ] Add `CaseStudy` or `Article` schema
- [ ] Link from homepage `industry-tabs` (change "Talk to us about your business" CTA to "Read the full VetVision case study")
- [ ] Add to `sitemap.ts`
- [ ] **Get James's written permission** before publishing (important — this is an active client relationship)

---

### 13. Replace industry vertical pages with use-case pages
**Impact:** The old plan (`/industries/gyms`, `/industries/trades`) was built around the narrow pre-rebrand positioning and doesn't fit a general AI agency. Use-case pages are a better fit for the new framing — they target buyer intent instead of demographics.
**Current state:** No vertical or use-case pages exist.

**Steps:**
- [ ] Build `src/app/use-cases/` with individual pages targeting specific buyer intents:
  - `/use-cases/team-ai-training` — for "how do I train my team on AI" queries
  - `/use-cases/customer-onboarding-automation` — the VetVision workstream as a standalone use case
  - `/use-cases/ai-receptionist` — high commercial intent
  - `/use-cases/custom-chatgpt-for-business` — another high commercial intent query
- [ ] Each page: targeted H1 matching the primary keyword, 800+ words, real example (ideally VetVision), relevant FAQ, schema (`Service` with targeted `serviceType`)
- [ ] Link from relevant service pages (e.g. AI Implementation page → use-cases/customer-onboarding-automation)

---

### 14. Embed Cornwall map in footer or about section
**Impact:** Regional map embed is a signal of geographic relevance for local SEO.
**Current state:** No map embed.

**Steps:**
- [ ] Add a small regional Cornwall map to the footer or about-page Cornwall section
- [ ] Use `loading="lazy"` to protect LCP
- [ ] Use a static Google Maps embed or an OpenStreetMap tile (OSM is better for CSP)

---

### 15. Add comparison tables
**Impact:** Comparison tables rank well for "X vs Y" searches and feed AI citations cleanly.
**Current state:** Zero `<table>` elements on the site.

**Steps:**
- [ ] Add a service comparison table somewhere on the homepage or a `/services` index page:
  - AI Education vs AI Implementation vs Digital Services
  - Columns: "Best for", "Starts from", "Timeline", "Your team's role"
- [ ] Use semantic HTML `<table>` elements — not CSS grids

---

### 16. Implement review generation system
**Impact:** Reviews drive GBP ranking and schema `aggregateRating`. 18-day review velocity cliff means momentum matters.
**Current state:** No review flow.

**Steps:**
- [ ] Add "Leave us a review" CTA to the booking confirmation success screen
- [ ] Create direct links to GBP review form once #3 is done
- [ ] Add review request to post-engagement follow-up emails
- [ ] Aim for 2+ reviews per month

---

### 17. Evaluate framer-motion bundle cost
**Impact:** ~30–35KB gzipped. Affects TTI and is only used in one file (`FadeIn`).
**Current state:** `framer-motion` imported for a single scroll-triggered wrapper.

**Steps:**
- [ ] Measure actual chunk size in `bun run build` output
- [ ] Consider replacing `FadeIn` with CSS `@starting-style` + `IntersectionObserver`
- [ ] Or switch to `motion` (standalone lightweight package by the same author)
- [ ] Or use `next/dynamic` with `ssr: false` to defer the bundle

**File to touch:** `src/components/shared/fade-in.tsx` — single migration point

---

## Uncompleted — Future Enhancements

### 18. Verify OG tags after deploy
- [ ] Verify each page's OG tags render correctly in production (Twitter card validator, LinkedIn post inspector, Facebook sharing debugger)
- [ ] Confirm the dynamic `/opengraph-image` route returns the v3 headline

### 19. Create service-specific OG images
- [ ] Create per-service OG images via per-route `opengraph-image.tsx` so shared service URLs get branded previews (AI Education / AI Implementation / Digital Services)

### 20. Split `/book` into dedicated training + audit routes
**Consider later:** Currently `/book` is dynamic, reading `?intent=` query params. For SEO, separate routes (`/book/training`, `/book/audit`) would be stronger — each with their own static metadata, schema, and indexable content. Keep the query-param version as a fallback redirect. Only worth doing once there's real traffic to measure against.

---

## Completed — v3 rebrand session (2026-04-11)

### ~~Rebrand Quilliam Digital → Quilliam AI (v1 → v2)~~ DONE
- [x] Full rewrite of `content.ts`: siteConfig, services, sprintSteps, featured engagement, FAQs
- [x] New domain (`quilliam.ai`) and email (`levi@quilliam.ai`)
- [x] Root metadata + JSON-LD graph updated
- [x] All 3 service pages rewritten
- [x] All homepage sections rewritten (hero, trust-bar, services-cards, sprint-process, industry-tabs, about-preview, faq-section)
- [x] About, contact, book, service-areas, privacy, terms pages all updated
- [x] Company details wired through: `legalName`, `companyNumber: 17151006`, `registeredOffice`
- [x] Footer surfaces CRN and registered office (s.82 Companies Act 2006 compliance)
- [x] Privacy + terms updated with new legal entity details
- [x] llms.txt + llms-full.txt rewritten
- [x] `opengraph-image.tsx` headline updated
- [x] `site.webmanifest`, `security.txt` updated
- [x] README + AGENTS.md updated

### ~~Reposition from B2B SaaS specialist → general UK AI agency (v2 → v3)~~ DONE
- [x] siteConfig tagline and description broadened
- [x] Services renamed: AI Education (was AI Training), AI Implementation (was AI Automation), Digital Services (back to generalist framing)
- [x] Target audience broadened from B2B SaaS to UK businesses of all shapes and sizes
- [x] VetVision reframed as "example engagement", not target market
- [x] Dual CTA funnel introduced: "Book Free AI Training" + "Book Free AI Audit"
- [x] `/book` page reads `?intent=training|audit` and swaps hero copy, badge, submit button, success message
- [x] Booking form gains three-way radio (training/audit/either), defaults from URL intent
- [x] `booking-action.ts` reflects interest in email subject line (`New AI Training Booking:` vs `New AI Audit Booking:`)
- [x] Nav (desktop + mobile), sticky CTA, hero, about CTA, CTA section, contact block, footer all expose both CTAs
- [x] All 3 service pages rewritten for v3 display names
- [x] Homepage sections updated (hero "We teach AI. We build with AI.", trust-bar, services-cards copy, industry-tabs example framing, about-preview)
- [x] About page narrative rebuilt around "two halves of one job"
- [x] Service-areas page de-narrowed (no more B2B SaaS region framing)
- [x] Contact page dual quick-book block
- [x] Privacy + terms service lists updated
- [x] llms.txt + llms-full.txt rewritten
- [x] OG image headline updated
- [x] AGENTS.md + README voice rules, key phrases, CTA guidance updated
- [x] Build passes, no new lint errors introduced

### ~~#13. Create /about page~~ DONE (from v2 rebrand)
Created and rewritten twice across v2 + v3.

### ~~#27. Populate company registration number~~ DONE (from v2 rebrand)
`siteConfig.companyNumber` now set to real Companies House number `17151006`. Wired into footer, JSON-LD `identifier`, privacy page, terms page.

---

## Completed — Pre-rebrand (historical record)

> The items below were completed during the Quilliam Digital phase. They reference "Quilliam Digital", "quilliamdigital.com", and "K2 Gym" — those references are stale, but the *work* they represent is still present in the codebase and didn't need redoing. Preserved for audit history.

### ~~#23 + A29. Add WebPage schema per route with isPartOf → WebSite~~ DONE
- [x] Created reusable `WebPageJsonLd` component in `src/components/shared/webpage-jsonld.tsx`
- [x] Added to all pages (homepage, book, privacy, terms, about, contact, service-areas, all 3 service pages)
- [x] Each includes `isPartOf` → `WebSite`, `datePublished`, `dateModified`, and `publisher` → `Organization`

### ~~#24. Add HowTo schema for the 3-step audit process~~ DONE
- [x] Added `HowTo` schema to homepage JSON-LD graph
- [x] Maps all 3 sprint steps with descriptions

### ~~#25. IndexNow integration~~ DONE
- [x] Verification key file at `public/3d99157dbd521de3c44fefb4153555d6.txt`
- [x] API route at `src/app/api/indexnow/route.ts` for on-demand URL submission

### ~~#26. Create /contact page with all contact methods~~ DONE

### ~~#28. VideoJsonLd component prepared~~ DONE
Ready to embed once a YouTube channel + video exist.

### ~~#30. datePublished / dateModified on page-level schema~~ DONE

### ~~#31. CSP promoted from Report-Only to enforcing~~ DONE

### ~~#32. Create /service-areas page~~ DONE

### ~~A25. HSTS preload directive~~ DONE
### ~~A26. Conditional Person schema image~~ DONE
### ~~A31. postalCode on schema address~~ DONE (now the real registered office postal code)
### ~~A32. WhatsAppButton as server component~~ DONE
### ~~A33. /.well-known/security.txt~~ DONE
### ~~A30. Reduced backdrop-blur on mobile nav~~ DONE
### ~~A2. FadeIn removed from above-fold LCP elements~~ DONE
### ~~A5. Sitemap static dates + noise removal~~ DONE
### ~~A6. Service page breadcrumbs 3-level~~ DONE
### ~~A7. Logo schema URL fix~~ DONE
### ~~A8. Custom 404 page~~ DONE
### ~~A11. Dedupe Service `@id`s across homepage + service pages~~ DONE
### ~~A17. Privacy consent on booking form~~ DONE
### ~~A21. `@id` on FAQPage schemas on service pages~~ DONE

### ~~#2. Merge Organization + LocalBusiness into ProfessionalService~~ DONE
### ~~#4. Visible clickable phone number~~ DONE
### ~~#5. Create llms.txt + llms-full.txt~~ DONE
### ~~#6. OG tag inheritance on subpages~~ DONE
### ~~#7. Dedicated service pages~~ DONE
### ~~#8. robots.txt AI crawler rules~~ DONE
### ~~#11. WebSite schema~~ DONE
### ~~#12. BreadcrumbList schema on subpages~~ DONE
### ~~#20. Remove X-Powered-By header~~ DONE
### ~~#33. Fix nested `<main>` on legal pages~~ DONE
### ~~#34. Canonical URL consistency on legal pages~~ DONE
### ~~#35. Relative OG URLs on subpages~~ DONE
### ~~#36. Deduplicate homepage ↔ service page FAQs~~ DONE
### ~~#38. OG images on service pages~~ DONE
### ~~#39. Unused imports + mobile overflow fixes~~ DONE
### ~~#41. Remove dead components and unused dependencies~~ DONE
### ~~#42. Hero as Server Component~~ DONE
### ~~#44. `aria-live` on form error messages~~ DONE
### ~~#45. Update deprecated security headers~~ DONE
### ~~#47. Remove dead data + add error boundary~~ DONE
### ~~#48. Anchor IDs on service page sections~~ DONE

---

## Stale items from pre-rebrand (no longer applicable)

The items below were in the previous TODO but no longer apply to the v3 positioning. Preserved here briefly so anyone reading git history understands why they disappeared:

- **~~Expand K2 Gym into full case study~~** — K2 Gym is no longer on the site. Replaced by item #12 (VetVision case study).
- **~~Create /industries/gyms, /industries/trades, /industries/hospitality~~** — doesn't fit general AI agency. Replaced by item #13 (use-case pages).
- **~~Blog articles about UK small businesses, gym owners, small business AI~~** — doesn't fit general positioning. Replaced by item #11 (v3 pillar articles).
- **~~Collect more testimonials in gym / small-business verticals~~** — refocused into item #6 (diversify by service side).
- **~~Build Tier 1 UK citations with `Quilliam Digital` NAP~~** — refocused into item #7 with new NAP (`Quilliam AI`, `quilliam.ai`, `levi@quilliam.ai`).
