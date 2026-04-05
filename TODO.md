# Quilliam Digital — SEO Action Plan

Generated from full SEO audit on 3 April 2026. Overall score: **62/100**.

---

## Uncompleted — Critical (Fix Before Launch)

### 1. Replace all placeholder images with real photography
**Impact:** E-E-A-T, LCP performance, user trust, CSP compatibility
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
- [ ] Once reviews exist, add real `aggregateRating` with actual `reviewCount` to schema

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

---

### 37 (sub-item). Add automation-focused testimonial to AI Automation page
**Impact:** The AI Automation service page has zero social proof after the K2 Gym testimonial was moved to AI Training.
**Current state:** Blocked on #10 — need more testimonials.

**Steps:**
- [ ] Add a different automation-focused framing or result quote to the automation page

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

### 19. Evaluate framer-motion bundle size
**Steps:**
- [ ] Run production build and check framer-motion chunk size (~150-200KB gzip)
- [ ] Consider replacing `FadeIn` with CSS `@starting-style` + `IntersectionObserver`
- [ ] Or switch to `motion` (standalone lightweight package by same author)
- [ ] Or use `next/dynamic` with `ssr: false` to defer the bundle

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

### 23. Add page-specific WebPage schema per route
### 24. Add HowTo schema for the 3-step audit process
### 25. Consider IndexNow integration when site grows
### 26. Create /contact page with all contact methods
### 27. Add company registration number to footer and schema
### 28. Create YouTube channel + embed explainer video
### 30. Add `datePublished` / `dateModified` to page-level schema
### 31. Promote CSP from Report-Only to enforcing mode (after images are local — blocked on #1)
### 32. Create /service-areas page listing served regions

---

## Uncompleted — Future Enhancements

### 6 (sub-item). Verify OG tags render correctly after deploy
- [ ] Verify each page's OG tags render correctly after deploy

### 38 (sub-item). Create service-specific OG images
- [ ] Create service-specific OG images via per-route `opengraph-image.tsx` (future enhancement)

---

## Completed

### ~~2. Merge Organization/LocalBusiness schema into single entity~~ DONE
**Impact:** Google knowledge graph — two separate nodes for the same business dilutes entity signal
**Steps:**
- [x] In `layout.tsx`, replace both `organizationSchema` and `localBusinessSchema` with a single combined node
- [x] Upgrade `LocalBusiness` to `ProfessionalService` (Schema.org subtype, better for consulting)
- [x] Add `image` property (use OG image or real business photo)
- [x] Upgrade `logo` from bare URL string to `ImageObject` with width/height
- [x] Change `priceRange` from `"$$"` to `"££"` (UK convention)
- [x] Add `geo` with Cornwall coordinates
- [x] Add `openingHoursSpecification`
- [x] Add `sameAs` array (populate as profiles are created)

**File edited:** `src/app/layout.tsx`

---

### ~~4. Add visible, clickable phone number~~ DONE
**Impact:** Core NAP element for local SEO.
**Steps:**
- [x] Add phone number to footer contact section
- [x] Add phone number to `/book` page (near the WhatsApp link in the body copy)
- [x] Add `telephone` property to Organization node in schema

**Files edited:**
- `src/components/layout/footer.tsx`
- `src/app/book/page.tsx`
- `src/app/layout.tsx`

---

### ~~5. Create llms.txt for AI crawlers~~ DONE
**Steps:**
- [x] Create `/public/llms.txt` with structured business summary
- [x] Create `/public/llms-full.txt` with expanded content

---

### ~~6. Fix OG tag inheritance on subpages~~ DONE
**Steps:**
- [x] Add `openGraph` + `twitter` to `/book` page metadata
- [x] Add `openGraph` + `twitter` to `/privacy` page metadata
- [x] Add `openGraph` + `twitter` to `/terms` page metadata

---

### ~~7. Create dedicated service pages~~ DONE
**Steps:**
- [x] Create route group: `src/app/services/[slug]/page.tsx`
- [x] Create pages for `/services/ai-training`, `/services/ai-automation`, `/services/digital-services`
- [x] Each page includes unique H1, 800+ words, features, FAQ, CTA, schema
- [x] Update service card CTAs on homepage to link to individual pages
- [x] Add service pages to sitemap.ts
- [x] Add "Services" dropdown or links to nav
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
