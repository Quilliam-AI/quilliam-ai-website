# Quilliam Digital — SEO Action Plan

SEO audit score: **72/100** (5 April 2026). Strong technical foundation. Critical gap: placeholder images.

---

## Uncompleted — Critical (Fix Before Launch)

### 1. Replace all placeholder images with real photography
**Impact:** E-E-A-T, LCP performance, user trust, CSP compatibility — single most impactful change across the entire audit
**Current state:** Every image on the site is from `picsum.photos` — a random stock placeholder service. This adds 500ms+ to LCP via redirect chains and destroys credibility for a professional services site.

**Steps:**
- [ ] Shoot or source real photos for each placeholder:
  - Hero image (business owner / Levi working with client)
  - "We Audit" process step (laptop with analytics, meeting, whiteboard)
  - "We Build" process step (automation dashboard, workflow builder)
  - "You Win" process step (happy client, results dashboard)
  - AI Training service card (workshop, training session)
  - AI Automation service card (automation workflow, dashboard)
  - Digital Services service card (website on screen, SEO tools)
  - K2 Gym case study (K2 Gym interior, Dirk Parker if possible)
  - Levi portrait (professional headshot for About section)
  - Cornwall coast background (CTA section — real Cornwall photo)
- [ ] Optimise images: WebP or AVIF format, appropriate dimensions (hero: 1200x1500, cards: 800x600, portrait: 600x800)
- [ ] Save to `/public/images/` with descriptive filenames
- [ ] Update all `src` props in components to use local paths
- [ ] Remove `picsum.photos` from `next.config.ts` `remotePatterns`
- [ ] Update CSP `img-src` to remove need for external image domains
- [ ] Update alt text on process images ("We Audit" → describe what the actual photo shows)

**Files to edit:**
- `src/components/home/hero.tsx`
- `src/components/home/sprint-process.tsx`
- `src/components/home/services-cards.tsx`
- `src/components/home/industry-tabs.tsx`
- `src/components/home/about-preview.tsx`
- `src/components/shared/cta-section.tsx`
- `next.config.ts`

---

### 3. Set up and link Google Business Profile
**Impact:** #1 local ranking factor for SABs. Currently no GBP linked anywhere on the site.
**Current state:** Trust bar claims "5.0 on Google" with no link to verify. No GBP URL in schema or on-page.

**Steps:**
- [ ] Create GBP listing at business.google.com
  - Business name: "Quilliam Digital"
  - Primary category: "Internet marketing service" or "Business management consultant"
  - Business type: SAB (Service Area Business) — hide address, set service area to United Kingdom
  - Phone: 07593 121621
  - Email: levi@quilliamdigital.com
  - Website: https://quilliamdigital.com
  - Description: Use the site's meta description
  - Hours: Mon-Fri 9am-5pm (adjust as needed)
- [ ] Verify the listing (postcard, phone, or video verification)
- [ ] Upload real photos to GBP (same ones used on the site)
- [ ] Add all 3 services to GBP
- [ ] Add GBP link to footer (next to email):
  ```tsx
  <a href="https://g.page/quilliamdigital" target="_blank" rel="noopener noreferrer">
    Google Reviews
  </a>
  ```
- [ ] Update trust bar "5.0 on Google" to link to GBP review page
- [ ] Add GBP URL to `sameAs` in schema
- [ ] Once reviews exist, add real `aggregateRating` with actual `reviewCount` to schema (audit item #4)
- [ ] Update "5.0 on Google" to "5.0 from X reviews on Google" with link to GBP (audit item #18)

**Files to edit:**
- `src/components/layout/footer.tsx`
- `src/components/home/trust-bar.tsx`
- `src/app/layout.tsx` (schema sameAs + aggregateRating)

---

## Uncompleted — High Priority (Fix Within 1 Week)

### 9. Add citable definition paragraphs
**Impact:** AI citation readiness. Current content paragraphs are 15-30 words — too short for AI extraction (optimal: 134-167 words).
**Current state:** Hero has short visible subtitle. Services and about sections have full-length definition paragraphs with embedded stats.

**Steps:**
- [x] Add a definition paragraph below the hero H1 (sr-only for crawlers, short visible subtitle for users)
- [x] Add similar summary paragraphs to each section (services, process, about)
- [x] Ensure key statistics are embedded in full prose sentences, not just UI counters
- [ ] Review hero sr-only approach — consider whether citable content should be visible elsewhere on the page instead

**Files edited:**
- `src/components/home/services-cards.tsx`
- `src/components/home/about-preview.tsx`

---

### A9. Install analytics
**Impact:** Cannot measure CWV or organic traffic without analytics.
**Current state:** No analytics installed.

**Steps:**
- [ ] Install Vercel Analytics or Plausible
- [ ] Verify CWV tracking is working

---

### 10. Collect more testimonials
**Impact:** E-E-A-T Experience + local review signals. One testimonial is insufficient.
**Current state:** Single testimonial from Dirk Parker, K2 Gym Newquay.

**Steps:**
- [ ] Reach out to existing/past clients for quotes (aim for 3-5 total)
- [ ] Get permission to use their name, business, and location
- [ ] Diversify across industries (not just gyms)
- [ ] Add testimonials to homepage (new section or expand existing)
- [ ] Add individual `Review` schema for each testimonial:
  ```json
  {
    "@type": "Review",
    "author": { "@type": "Person", "name": "..." },
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": "...",
    "itemReviewed": { "@id": "https://quilliamdigital.com/#organization" }
  }
  ```
- [ ] Add a different automation-focused testimonial to the AI Automation page (currently has zero social proof after K2 moved to AI Training)

---

### A12. Build Tier 1 UK citations
**Impact:** Thin external footprint is the biggest systemic ceiling on rankings.

**Steps:**
- [ ] Submit to Yell, FreeIndex, Bark, Clutch, Apple Business Connect, Bing Places
- [ ] Ensure NAP is identical across all (Quilliam Digital, Cornwall UK, 07593 121621, levi@quilliamdigital.com)

---

## Uncompleted — Medium Priority (Fix Within 1 Month)

### 46. Add unattributed stat sources on service pages
**Impact:** Credibility — unsourced statistics undermine trust
**Current state:** Digital Services page cites "97%", "46%", "76%", "88%" with no source. AI Automation page claims "3x more Google reviews", "40% more repeat business", "90% fewer no-shows" without clarifying if these are real client results or projections.

**Steps:**
- [ ] Add subtle source citations to digital services stats (e.g., "Source: Google/BrightLocal 2025")
- [ ] Label automation stats as "typical results" if not from verified client data
- [ ] Or replace with real K2 Gym / client metrics

---

### A14. Evaluate framer-motion bundle size
**Impact:** ~30-35KB gzipped, affects TTI.

**Steps:**
- [ ] Run production build and check framer-motion chunk size
- [ ] Consider replacing `FadeIn` with CSS `@starting-style` + `IntersectionObserver`
- [ ] Or switch to `motion` (standalone lightweight package by same author)
- [ ] Or use `next/dynamic` with `ssr: false` to defer the bundle

---

### A22. Embed Google Maps in footer or about section
**Impact:** Regional map of Cornwall signals geographic relevance for local SEO.

**Steps:**
- [ ] Add a regional Cornwall map embed to footer or about section
- [ ] Ensure it uses `loading="lazy"` to not impact LCP

---

### 13. Create /about page
**Steps:**
- [ ] Create `src/app/about/page.tsx`
- [ ] Include: Levi's background, credentials, story, methodology, photo
- [ ] Add to sitemap and navigation
- [ ] Update Person schema `url` from `/#about` to `/about`

### 14. Start a blog
**Steps:**
- [ ] Set up `src/app/blog/` with MDX or CMS integration
- [ ] Write 3-5 pillar articles targeting high-intent queries:
  - "AI Automation for UK Small Businesses: The Complete Guide (2026)"
  - "How AI Saves Gym Owners 10+ Hours Per Week"
  - "How Much Does AI Automation Cost for a Small Business?"
  - "AI Tools for Small Businesses: ChatGPT vs Claude Compared"
  - "What is an AI Audit? Everything You Need to Know"
- [ ] Each article: 1,500+ words, H2/H3 structure, comparison tables, internal links
- [ ] Add blog to sitemap and navigation

### 15. Expand K2 Gym into full case study
**Steps:**
- [ ] Create `/case-studies/k2-gym` page
- [ ] Include: before/after metrics table, specific automations implemented, timeline, tools used, full quote
- [ ] Add CaseStudy or Article schema
- [ ] Link from homepage industry section

### 16. Add comparison tables
**Steps:**
- [ ] Service comparison table (AI Training vs AI Automation vs Digital Services — what's included, price range, timeline, best for)
- [ ] Before/after metrics table for case study
- [ ] Use semantic HTML `<table>` elements (currently zero on the site)

### 17. Build Tier 1 citations
**Steps:**
- [ ] Create consistent listings on: Yell.com, Thomson Local, FreeIndex, Trustpilot, Yelp UK
- [ ] Create LinkedIn company page
- [ ] Create Facebook business page
- [ ] Ensure NAP is identical across all (Quilliam Digital, Cornwall UK, 07593 121621, levi@quilliamdigital.com)
- [ ] Link BNI member profile from trust bar

### 18. Create industry vertical pages
**Steps:**
- [ ] Build `/industries/gyms` as dedicated landing page (move K2 case study here)
- [ ] Plan additional verticals: `/industries/trades`, `/industries/hospitality`, etc.
- [ ] Each page: targeted H1, industry-specific pain points, relevant case study, FAQ, schema

### 21. Add social profile links
**Steps:**
- [ ] Create LinkedIn, Instagram profiles
- [ ] Add social links to footer
- [ ] Add all profile URLs to `sameAs` in schema

### 22. Implement review generation system
**Steps:**
- [ ] Add "Leave us a review" CTA to booking confirmation screen
- [ ] Create direct link to GBP review form
- [ ] Add review request to follow-up emails
- [ ] Aim for 2+ reviews per month (18-day review velocity cliff)

---

## Uncompleted — Low Priority (Backlog)

*(Empty — all items implemented. See Completed section.)*

---

## Uncompleted — Future Enhancements

### 6 (sub-item). Verify OG tags render correctly after deploy
- [ ] Verify each page's OG tags render correctly after deploy

### 38 (sub-item). Create service-specific OG images
- [ ] Create service-specific OG images via per-route `opengraph-image.tsx` (future enhancement)

---

## Completed

### ~~#23 + A29. Add WebPage schema per route with isPartOf → WebSite~~ DONE
**Steps:**
- [x] Created reusable `WebPageJsonLd` component in `src/components/shared/webpage-jsonld.tsx`
- [x] Added to all 7 pages (homepage, book, privacy, terms, ai-training, ai-automation, digital-services)
- [x] Each includes `isPartOf` → `WebSite`, `datePublished`, `dateModified`, and `publisher` → `Organization`

**Files:** `src/components/shared/webpage-jsonld.tsx` (new), all 7 page files

---

### ~~#24. Add HowTo schema for the 3-step audit process~~ DONE
**Steps:**
- [x] Added `HowTo` schema to homepage JSON-LD graph
- [x] Maps all 3 sprint steps (Book, Audit, Implement) with descriptions

**File edited:** `src/app/page.tsx`

---

### ~~#25. IndexNow integration~~ DONE
**Steps:**
- [x] Created verification key file `public/3d99157dbd521de3c44fefb4153555d6.txt`
- [x] Created API route `src/app/api/indexnow/route.ts` for on-demand URL submission
- [x] Supports single URL or batch submission via POST

**Files:** `public/3d99157dbd521de3c44fefb4153555d6.txt`, `src/app/api/indexnow/route.ts`

---

### ~~#26. Create /contact page with all contact methods~~ DONE
**Steps:**
- [x] Created `src/app/contact/page.tsx` with phone, email, WhatsApp, and address
- [x] Includes business hours, BreadcrumbJsonLd, WebPageJsonLd
- [x] Added to sitemap, nav, and footer
- [x] Full metadata with OG tags

**Files:** `src/app/contact/page.tsx` (new), `src/app/sitemap.ts`, `src/lib/content.ts`, `src/components/layout/footer.tsx`

---

### ~~#27. Add company registration number to footer and schema~~ DONE
**Steps:**
- [x] Added `companyNumber` field to `siteConfig` in `content.ts` (placeholder — needs real number)
- [x] Added conditional `taxID` to Organization schema in `layout.tsx`
- [x] Added conditional display in footer

**Files edited:** `src/lib/content.ts`, `src/app/layout.tsx`, `src/components/layout/footer.tsx`

---

### ~~#28. Video schema infrastructure prepared~~ DONE
**Steps:**
- [x] Created reusable `VideoJsonLd` component in `src/components/shared/video-jsonld.tsx`
- [x] Ready to embed once YouTube channel + video exist

**Note:** Creating the YouTube channel and recording the video are external tasks.

**File:** `src/components/shared/video-jsonld.tsx` (new)

---

### ~~#30. Add datePublished / dateModified to page-level schema~~ DONE (addressed in #23/A29)
**Steps:**
- [x] All `WebPageJsonLd` instances include `datePublished` and `dateModified` props

---

### ~~#31. Promote CSP from Report-Only to enforcing mode~~ DONE
**Steps:**
- [x] Changed `Content-Security-Policy-Report-Only` to `Content-Security-Policy`
- [x] `picsum.photos` temporarily in `img-src` — remove when images are local

**File edited:** `next.config.ts`

---

### ~~#32. Create /service-areas page listing served regions~~ DONE
**Steps:**
- [x] Created `src/app/service-areas/page.tsx` with 6 UK regions + Cornwall spotlight
- [x] Includes BreadcrumbJsonLd, WebPageJsonLd, full metadata
- [x] Added to sitemap

**Files:** `src/app/service-areas/page.tsx` (new), `src/app/sitemap.ts`

---

### ~~A25. Add HSTS preload directive~~ DONE
**Steps:**
- [x] Added `preload` to HSTS header value in `next.config.ts`

**File edited:** `next.config.ts`

---

### ~~A26. Add Person schema image (conditional)~~ DONE
**Steps:**
- [x] Added `founderImage` to `siteConfig` (empty string — set to `/images/levi.jpg` when photo exists)
- [x] Person schema conditionally includes `image` when `founderImage` is set

**Files edited:** `src/lib/content.ts`, `src/app/layout.tsx`

---

### ~~A31. Add postalCode to schema address~~ DONE
**Steps:**
- [x] Added `"postalCode": "TR1"` to Organization address in schema

**File edited:** `src/app/layout.tsx`

---

### ~~A32. Convert WhatsAppButton to server component~~ DONE
**Steps:**
- [x] Removed `"use client"` directive — component uses no hooks, handlers, or browser APIs

**File edited:** `src/components/layout/whatsapp-button.tsx`

---

### ~~A33. Add /.well-known/security.txt~~ DONE
**Steps:**
- [x] Created `public/.well-known/security.txt` with contact, preferred languages, canonical URL, and expiry

**File:** `public/.well-known/security.txt` (new)

---

### ~~A30. Reduce backdrop-blur on mobile nav for scroll performance~~ DONE
**Steps:**
- [x] Changed from `backdrop-blur-2xl` to `backdrop-blur-lg md:backdrop-blur-2xl` on main nav bar
- [x] Desktop retains full blur, mobile uses lighter blur for scroll performance

**File edited:** `src/components/layout/nav.tsx`

---

### ~~A2. Remove FadeIn from above-fold LCP elements~~ DONE
**Steps:**
- [x] Verified: H1 and hero image are not wrapped in `FadeIn` — no LCP penalty

---

### ~~A3. Fix homepage/automation keyword cannibalization~~ DONE
**Steps:**
- [x] Changed homepage title from "AI Automation for UK Small Businesses" to "AI Solutions for UK Small Businesses"
- [x] Automation page retains "AI Automation for Small Businesses" — no keyword overlap

**File edited:** `src/app/layout.tsx`

---

### ~~A5. Fix sitemap static dates and remove noise~~ DONE
**Steps:**
- [x] Replaced `new Date()` with static date strings reflecting actual content changes
- [x] Removed `priority`, `changeFrequency` (Google ignores these)
- [x] Removed `host` from robots.ts

**Files edited:** `src/app/sitemap.ts`, `src/app/robots.ts`

---

### ~~A6. Fix service page breadcrumbs to 3-level~~ DONE
**Steps:**
- [x] Changed from `[{name: "AI Training", href: "/services/ai-training"}]` to `[{name: "Services", href: "/#services"}, {name: "AI Training", href: "/services/ai-training"}]`
- [x] Applied to all 3 service pages

**Files edited:** `src/app/services/ai-training/page.tsx`, `src/app/services/ai-automation/page.tsx`, `src/app/services/digital-services/page.tsx`

---

### ~~A7. Fix logo schema URL~~ DONE
**Steps:**
- [x] Changed logo URL from OG image (1200x630) to `/og-logo.png` (260x260 actual logo)

**File edited:** `src/app/layout.tsx`

---

### ~~A8. Create custom 404 page~~ DONE
**Steps:**
- [x] Created `src/app/not-found.tsx` with nav links and CTA, matching site design system

**File created:** `src/app/not-found.tsx`

---

### ~~A10. Add "Cornwall" to service page title tags~~ DONE
**Steps:**
- [x] All 3 service pages now include "Cornwall & UK-Wide" in title

**Files edited:** `src/app/services/ai-training/page.tsx`, `src/app/services/ai-automation/page.tsx`, `src/app/services/digital-services/page.tsx`

---

### ~~A11. Fix duplicate Service @ids~~ DONE
**Steps:**
- [x] Removed less-complete Service schemas from homepage `page.tsx`
- [x] Service pages retain the authoritative `Service` + `Offer` schemas

**File edited:** `src/app/page.tsx`

---

### ~~A15. Remove priority/changeFrequency/host from sitemap/robots~~ DONE (addressed in A5)

---

### ~~A17. Add privacy consent to booking form~~ DONE
**Steps:**
- [x] Added required checkbox with link to privacy policy before submit button

**File edited:** `src/components/book/booking-form.tsx`

---

### ~~A19. Expand homepage FAQ answers to 100-150 words~~ DONE
**Steps:**
- [x] All 5 FAQ answers expanded to 100-150 words
- [x] Added "Quilliam Digital" entity name and specific examples in each answer
- [x] Embedded K2 Gym stats and pricing in natural prose

**File edited:** `src/lib/content.ts`

---

### ~~A20. Rewrite H2 headings as questions for AI citation matching~~ DONE
**Steps:**
- [x] "How it works" → "How does Quilliam Digital's free AI Audit work?"
- [x] "AI Services for Small Businesses" → "What AI services does Quilliam Digital offer?"
- [x] "AI built for your industry" → "How does Quilliam Digital tailor AI for your industry?"
- [x] "I make AI work / for real businesses" → "Who is behind / Quilliam Digital?"

**Files edited:** `src/components/home/sprint-process.tsx`, `src/components/home/services-cards.tsx`, `src/components/home/industry-tabs.tsx`, `src/components/home/about-preview.tsx`

---

### ~~A21. Add @id to FAQPage schemas on service pages~~ DONE
**Steps:**
- [x] Added `"@id": "{url}/services/{slug}#faq"` to FAQPage schema in `shared.tsx`

**File edited:** `src/components/services/shared.tsx`

---

### ~~A23. Fix llms.txt — add link to full version and last-updated date~~ DONE
**Steps:**
- [x] Added `> Full version:` link and `> Last updated: 2026-04-05`
- [x] Added cross-link from llms-full.txt back to short version

**Files edited:** `public/llms.txt`, `public/llms-full.txt`

---

### ~~A24. Fix llms-full.txt quote inconsistency~~ DONE
**Steps:**
- [x] Aligned K2 Gym quote to match `content.ts` source of truth

**File edited:** `public/llms-full.txt`

---

### ~~2. Merge Organization/LocalBusiness schema into single entity~~ DONE
**Steps:**
- [x] In `layout.tsx`, replaced both `organizationSchema` and `localBusinessSchema` with a single combined node
- [x] Upgraded `LocalBusiness` to `ProfessionalService` (Schema.org subtype, better for consulting)
- [x] Added `image` property (use OG image or real business photo)
- [x] Upgraded `logo` from bare URL string to `ImageObject` with width/height
- [x] Changed `priceRange` from `"$$"` to `"££"` (UK convention)
- [x] Added `geo` with Cornwall coordinates
- [x] Added `openingHoursSpecification`
- [x] Added `sameAs` array (populate as profiles are created)

**File edited:** `src/app/layout.tsx`

---

### ~~4. Add visible, clickable phone number~~ DONE
**Steps:**
- [x] Added phone number to footer contact section
- [x] Added phone number to `/book` page (near the WhatsApp link in the body copy)
- [x] Added `telephone` property to Organization node in schema

**Files edited:** `src/components/layout/footer.tsx`, `src/app/book/page.tsx`, `src/app/layout.tsx`

---

### ~~5. Create llms.txt for AI crawlers~~ DONE
**Steps:**
- [x] Created `/public/llms.txt` with structured business summary
- [x] Created `/public/llms-full.txt` with expanded content

---

### ~~6. Fix OG tag inheritance on subpages~~ DONE
**Steps:**
- [x] Added `openGraph` + `twitter` to `/book` page metadata
- [x] Added `openGraph` + `twitter` to `/privacy` page metadata
- [x] Added `openGraph` + `twitter` to `/terms` page metadata

---

### ~~7. Create dedicated service pages~~ DONE
**Steps:**
- [x] Created route group: `src/app/services/[slug]/page.tsx`
- [x] Created pages for `/services/ai-training`, `/services/ai-automation`, `/services/digital-services`
- [x] Each page includes unique H1, 800+ words, features, FAQ, CTA, schema
- [x] Updated service card CTAs on homepage to link to individual pages
- [x] Added service pages to sitemap.ts
- [x] Added "Services" dropdown or links to nav
- [x] Internal link from each service page to the other two

---

### ~~8. Update robots.txt with AI crawler rules~~ DONE
**Steps:**
- [x] Wildcard allow + 5 training-only scrapers blocked (CCBot, anthropic-ai, cohere-ai, Google-Extended, Bytespider)

---

### ~~11. Add WebSite schema~~ DONE
**Steps:**
- [x] Added WebSite node to `layout.tsx` JSON-LD graph

---

### ~~12. Add BreadcrumbList schema on subpages~~ DONE
**Steps:**
- [x] Created shared `BreadcrumbJsonLd` component
- [x] Added to /book, /privacy, /terms, and all service pages

---

### ~~20. Remove X-Powered-By header~~ DONE (addressed in #45)
**Steps:**
- [x] Added `poweredByHeader: false` to `next.config.ts`

---

### ~~29. Update privacy/terms "Last updated" dates~~ DONE (addressed in #40)
**Steps:**
- [x] Updated to "4 April 2026"

---

### ~~33. Fix nested `<main>` elements on legal pages~~ DONE
**Steps:**
- [x] Changed `<main>` to `<article>` in `src/app/privacy/page.tsx`
- [x] Changed `<main>` to `<article>` in `src/app/terms/page.tsx`

---

### ~~34. Fix canonical URL inconsistency on legal pages~~ DONE
**Steps:**
- [x] Changed to relative canonical paths on both pages

---

### ~~35. Standardise hardcoded OG URLs across all subpages~~ DONE
**Steps:**
- [x] All subpages now use relative OG URLs resolved via `metadataBase`

---

### ~~36. Deduplicate near-duplicate FAQs between homepage and service pages~~ DONE
**Steps:**
- [x] Homepage FAQs replaced with 5 broader business-level questions
- [x] Zero overlap with any service page FAQs
- [x] Updated llms.txt files to match

---

### ~~37. Move K2 Gym testimonial to AI Training page~~ DONE
**Steps:**
- [x] Testimonial + stats moved from AI Automation to AI Training page
- [x] Fixed FAQ bg to `bg-stone-950` with `bg-stone-900` cards (addresses #43)

---

### ~~38. Add OG images to service pages~~ DONE
**Steps:**
- [x] All 6 subpages now reference the root OG image via `images: ["/opengraph-image"]`

---

### ~~39. Fix unused import and mobile overflow on AI Training page~~ DONE
**Steps:**
- [x] Removed unused `Zap` import
- [x] Added responsive layout fixes to trust badges

---

### ~~40. Update stale legal page dates~~ DONE
**Steps:**
- [x] Updated `lastUpdated` to "4 April 2026" in both files

---

### ~~41. Remove dead components and unused dependencies~~ DONE
**Steps:**
- [x] Deleted `bento-hero.tsx`, `text-scramble.tsx`, `ui/badge.tsx`
- [x] Removed 6 unused npm packages

---

### ~~42. Remove `"use client"` from hero component~~ DONE
**Steps:**
- [x] Hero renders as a Server Component, reducing client JS bundle

---

### ~~43. Fix FAQ section background inconsistency on AI Training page~~ DONE (addressed in #37)
**Steps:**
- [x] All service pages now use `bg-stone-950` section with `bg-stone-900` cards via shared `ServiceFaqSection` component

---

### ~~44. Add `aria-live` to form error messages~~ DONE
**Steps:**
- [x] Error messages wrapped in persistent `aria-live="polite"` container with `role="alert"`
- [x] Success state has `role="status"`

---

### ~~45. Update deprecated security headers~~ DONE
**Steps:**
- [x] Removed `X-XSS-Protection`
- [x] Replaced `interest-cohort=()` with `browsing-topics=()`
- [x] Added `poweredByHeader: false`

---

### ~~47. Remove dead data and add error boundaries~~ DONE
**Steps:**
- [x] Removed unused `gymVertical.demo` data
- [x] Added `error.tsx` error boundary at root level

---

### ~~48. Add anchor IDs to service page sections for deep linking~~ DONE
**Steps:**
- [x] Added `id` attributes to major sections on all 3 service pages

---

### Already Done (Earlier Session)
- [x] Fixed title double-template on /privacy and /terms
- [x] Renamed "Sprint" to "AI Audit" across all ~30 occurrences
- [x] Changed hero secondary CTA to "Message on WhatsApp"
