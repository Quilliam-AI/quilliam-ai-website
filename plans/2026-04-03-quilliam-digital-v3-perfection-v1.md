# Quilliam Digital V3: Target 100/100 Across All Categories

## Objective

Take every score to A+ / 100 by addressing all 19 remaining findings from the V2 combined review. Organized into 6 workstreams with clear dependencies.

---

## Current Scores (V2 Baseline)

| Category | V2 Score | Target |
|----------|----------|--------|
| Design | B+ | A+ |
| AI Slop | A- | A+ |
| Technical SEO | 74/100 | 100/100 |
| Content / E-E-A-T | 72/100 | 100/100 |
| Performance | A (76ms) | A+ |

---

## Workstream 1: Critical Image Replacement (Items 1, 3)

**Impact**: Fixes LCP, credibility, visual gap vs Dribbble references, and OG card rendering.

There are 12 `picsum.photos` references across 7 files, plus 1 config entry. The OG image is square (1024x1024) instead of the required 1200x630.

### Placeholder Image Inventory

| Image | File | Line(s) | Required Asset | Dimensions |
|-------|------|---------|----------------|------------|
| Hero (desktop) | `src/components/home/hero.tsx` | 108 | Real photo: Levi at desk / workspace | 800x1000 |
| Hero (mobile) | `src/components/home/hero.tsx` | 137 | Same hero, cropped for mobile | 800x400 |
| Founder portrait | `src/components/home/about-preview.tsx` | 17 | Professional headshot of Levi | 600x800 |
| AI Training card | `src/components/home/services-cards.tsx` | 11 | Workshop/training photo | 700x500 |
| AI Automation card | `src/components/home/services-cards.tsx` | 12 | Dashboard/automation screenshot | 700x500 |
| Digital Services card | `src/components/home/services-cards.tsx` | 13 | Website/SEO work photo | 700x500 |
| Sprint step 1 (Audit) | `src/components/home/sprint-process.tsx` | 6 | Business audit session photo | 800x600 |
| Sprint step 2 (Build) | `src/components/home/sprint-process.tsx` | 7 | Building automation photo | 600x400 |
| Sprint step 3 (Win) | `src/components/home/sprint-process.tsx` | 8 | Results/celebration photo | 600x400 |
| K2 Gym case study | `src/components/home/industry-tabs.tsx` | 35 | Real K2 Gym interior photo | 800x600 |
| CTA background | `src/components/shared/cta-section.tsx` | 30 | Cornwall coastline photo | 1600x800 |

### Implementation Steps

- [ ] **1.1** Source or photograph 11 real images matching the descriptions above. Priority order: Levi portrait, K2 Gym, hero, then remaining. These can be real photos, licensed stock matching the brand, or AI-generated images post-processed to avoid AI tells (but real photos are strongly preferred for E-E-A-T).
- [ ] **1.2** Optimize all images: convert to WebP, compress to <100KB each where possible, ensure proper dimensions match what the components request.
- [ ] **1.3** Place all images in `public/images/` with descriptive filenames (e.g., `hero-workspace.webp`, `levi-portrait.webp`, `k2-gym-interior.webp`, `cornwall-coast.webp`, etc.).
- [ ] **1.4** Update each component to reference local `/images/filename.webp` instead of `picsum.photos` URLs. Files to update:
  - `src/components/home/hero.tsx:108,137`
  - `src/components/home/about-preview.tsx:17`
  - `src/components/home/services-cards.tsx:11-13`
  - `src/components/home/sprint-process.tsx:6-8`
  - `src/components/home/industry-tabs.tsx:35`
  - `src/components/shared/cta-section.tsx:30`
- [ ] **1.5** Remove the `picsum.photos` remote pattern from `next.config.ts:5-10`. The entire `images.remotePatterns` array can be deleted since all images will be local.
- [ ] **1.6** Create a proper 1200x630 OG image (`public/og.png`). Design: dark `stone-950` background, emerald Q logomark on the left, "AI Automation for UK Small Businesses" headline text, "Quilliam Digital" brand name, and the URL. The current `og.png` is square (1024x1024) which renders poorly on Twitter/LinkedIn/Facebook previews.
- [ ] **1.7** Verify `alt` attributes are descriptive and keyword-rich on all replaced images. Current alt texts are decent but should be reviewed post-replacement.

**Rationale**: This is the single biggest remaining gap. External placeholder images destroy LCP (Core Web Vitals score: 20/100), kill credibility, and are the widest visual gap vs reference designs. Local optimized images will push CWV toward 100 and eliminate the "stock photo" AI slop signal.

---

## Workstream 2: Technical SEO to 100/100 (Items 2, 4, 5, 6, 8, 12, 13, 14)

### 2A: apple-icon.png fix (Item 2)

The apple icon lives at `src/app/apple-icon.png` which is the correct Next.js file-convention location. The layout metadata at `src/app/layout.tsx:62` references `apple: "/apple-icon.png"`. This should work via Next.js's metadata file convention -- but we should verify the icon renders correctly on iOS. If it 404s, the fix is to either:
- Copy the file to `public/apple-icon.png` as a fallback
- Or ensure the `src/app/apple-icon.png` route convention is working

- [ ] **2A.1** Verify `apple-icon.png` is being served correctly at `https://quilliamdigital.com/apple-icon.png` after deployment. The Next.js build output already shows `○ /apple-icon.png` as a generated static route, so it should be working. If it 404s on real iOS devices, copy the file to `public/apple-icon.png`.

### 2B: HSTS header (Item 4)

Missing `Strict-Transport-Security` header from `next.config.ts:12-40`.

- [ ] **2B.1** Add HSTS header to the existing `headers()` array in `next.config.ts`. Add after the existing `Permissions-Policy` header (line ~37):
  ```
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }
  ```
  This tells browsers to always use HTTPS for the next year. Note: do NOT include `preload` until the site has been submitted to the HSTS preload list.

### 2C: Viewport themeColor (Item 5)

No `viewport` or `themeColor` in the metadata export at `src/app/layout.tsx:20-64`.

- [ ] **2C.1** Add a `viewport` export to `src/app/layout.tsx`. Check the Next.js docs at `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md` for the correct API in this canary version -- it may be `generateViewport` or a `viewport` property on the metadata object. The value should be:
  ```
  themeColor: "#0c0a09"  (stone-950, matches the dark nav/hero)
  ```
  This colors the browser chrome on mobile to match the dark design.

### 2D: sameAs on Organization schema (Item 8)

No `sameAs` property exists in the JSON-LD at `src/app/layout.tsx:67-83`.

- [ ] **2D.1** Add `sameAs` array to the `organizationSchema` object in `src/app/layout.tsx:67-83`. Include:
  - Google Business Profile URL (Levi needs to provide this)
  - LinkedIn company/personal page URL (Levi needs to provide this)
  - Any other verified social profiles
  
  This is critical for entity disambiguation -- Google uses `sameAs` to connect the website entity to the GBP entity, which affects local SEO rankings.

- [ ] **2D.2** Also add `sameAs` to the `localBusinessSchema` at `src/app/layout.tsx:85-111` with the same URLs.

### 2E: Content Security Policy (Item 12)

No CSP header exists. Start with report-only mode.

- [ ] **2E.1** Add a `Content-Security-Policy-Report-Only` header to `next.config.ts`. A reasonable starting policy for this site:
  ```
  default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';
  ```
  Use `Report-Only` mode first so it logs violations without breaking anything. Once verified clean, switch to enforcing `Content-Security-Policy`. The `unsafe-inline` and `unsafe-eval` are needed for Next.js's runtime. If images are moved to local (Workstream 1), `img-src` only needs `'self' data:`.

### 2F: Consolidate JSON-LD into @graph (Item 13)

Currently 6 separate `<script type="application/ld+json">` tags at `src/app/layout.tsx:141-158`. This is valid but noisy.

- [ ] **2F.1** Refactor the `JsonLd` component at `src/app/layout.tsx:66-158` to output a single `<script>` tag with an `@graph` array:
  ```json
  {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", ... },
      { "@type": "LocalBusiness", ... },
      { "@type": "Service", ... },
      { "@type": "Service", ... },
      { "@type": "Service", ... },
      { "@type": "FAQPage", ... }
    ]
  }
  ```
  Remove the individual `"@context"` from each schema object since the parent provides it. This is cleaner, reduces HTML size, and is Google's recommended approach for multiple related entities.

### 2G: AggregateRating validation (Item 14)

The rating is hardcoded at `src/app/layout.tsx:103-109` as 5.0 from 5 ratings. The trust bar at `src/components/home/trust-bar.tsx:7` says "5.0 on Google" with no review count.

- [ ] **2G.1** Verify the actual Google Business Profile rating and review count. Update `src/app/layout.tsx:105,108` to match exactly. If the real count differs from 5, update it. If there are no verified GBP reviews yet, **remove the `aggregateRating` block entirely** -- a false rating can trigger a manual action from Google.
- [ ] **2G.2** Update the trust bar at `src/components/home/trust-bar.tsx:7-8` to include the actual review count (e.g., "5.0 on Google (5 reviews)") and make it a link to the GBP listing. This adds credibility and allows verification.

---

## Workstream 3: Design Consistency to A+ (Items 9, 10)

### 3A: H3 size inconsistency (Item 9)

Five different H3 sizes across the site:

| Component | Line | Current Size | Context |
|-----------|------|-------------|---------|
| `services-cards.tsx` | 93 | `text-2xl` | Service card titles |
| `industry-tabs.tsx` | 50 | `text-2xl md:text-3xl` | Gym hero title |
| `sprint-process.tsx` | 52 | `text-xl` | Featured sprint step |
| `sprint-process.tsx` | 81 | `text-lg` | Smaller sprint steps |
| `faq-section.tsx` | 23 | `text-lg` | FAQ questions |

- [ ] **3A.1** Standardize all H3 elements to a consistent size system. Recommendation: use `text-xl` as the base H3 size across all components. The industry tabs H3 at `text-2xl md:text-3xl` is too large (closer to H2 territory). The FAQ questions at `text-lg` are acceptable as they serve a different visual purpose (disclosure-style list items).
  
  Proposed standardization:
  - **Primary H3** (service titles, sprint steps, industry hero): `text-xl font-semibold tracking-tight` -- update `services-cards.tsx:93`, `industry-tabs.tsx:50`, `sprint-process.tsx:52`
  - **Secondary H3** (smaller sprint steps, FAQ questions): `text-lg font-semibold tracking-tight` -- keep `sprint-process.tsx:81`, `faq-section.tsx:23` as-is
  
  This creates a clear two-tier H3 hierarchy instead of five arbitrary sizes.

### 3B: Service card "Get started" touch targets (Item 10)

The "Get started" links at `src/components/home/services-cards.tsx:112-121` are styled as inline text links (`text-sm`, ~20px effective height). WCAG 2.2 requires 44x44px minimum touch targets.

- [ ] **3B.1** Increase the touch target of the "Get started" links in `src/components/home/services-cards.tsx:112-121`. Add padding to make the interactive area at least 44px tall:
  ```
  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:gap-3 transition-all py-3"
  ```
  Adding `py-3` (12px top + 12px bottom + ~20px text = 44px) meets WCAG without visual disruption. The link will look identical but have a larger clickable area.

---

## Workstream 4: Content & E-E-A-T to 100/100 (Items 15, 16, 17, 18)

### 4A: Founder credentials (Item 15)

The about section at `src/components/home/about-preview.tsx:30-60` is "personality-rich but expertise-empty." There's no surname, no background, no LinkedIn, no credentials.

- [ ] **4A.1** Expand the about section copy at `src/components/home/about-preview.tsx:39-52`. Add Levi's full name (surname), relevant background/credentials, and a LinkedIn link. Example additions after the existing paragraphs:
  - A third paragraph with credentials: "Before starting Quilliam Digital, [background -- e.g., X years in Y, certifications, notable projects]."
  - A LinkedIn icon/link alongside the "Chat with Levi" button.
  
  **Levi needs to provide**: Full name, professional background, any certifications (Google AI, Make/Zapier partner, etc.), and LinkedIn URL.

- [ ] **4A.2** Update the "About Levi" label at `src/components/home/about-preview.tsx:32` to include the surname: "About Levi [Surname]".

### 4B: Additional testimonials (Item 16)

Only one case study (K2 Gym / Dirk Parker) exists. One testimonial reads as cherry-picked.

- [ ] **4B.1** Add 2-3 more testimonials to `src/lib/content.ts`. Create a new `testimonials` array with structure:
  ```ts
  { name: string, business: string, location: string, quote: string, stat?: string }
  ```
  **Levi needs to provide**: Real quotes from real clients with permission to use their names.

- [ ] **4B.2** Create a new `TestimonialsSection` component or integrate the additional quotes into the existing layout. Options:
  - A horizontal scrolling testimonial strip between sections
  - Expand the industry section to show multiple case studies
  - Add a simple 2-3 card grid of quotes below the current K2 Gym case study

- [ ] **4B.3** Add `Review` schema markup for each testimonial in the JSON-LD, linked to the `LocalBusiness` entity.

### 4C: Pricing transparency (Item 17)

The FAQ answer on cost at `src/lib/content.ts:143-144` is evasive: "Automation packages are tailored... We'll give you a clear quote after your free AI Impact Sprint."

- [ ] **4C.1** Update the pricing FAQ answer at `src/lib/content.ts:142-144` to include "from" price ranges. Example:
  ```
  "Our AI training sessions are free. Automation packages typically start from [X] per month, depending on complexity. Most clients see ROI within the first month. We'll give you a clear, fixed quote after your free AI Impact Sprint -- no surprises."
  ```
  **Levi needs to provide**: Actual starting price points or "from" ranges he's comfortable publishing.

- [ ] **4C.2** Optionally add an `Offer` schema to the JSON-LD for the free AI Impact Sprint, which signals to Google that this is a genuine free offering.

### 4D: Person schema for founder (Item 18)

No Person schema exists. This is important for E-E-A-T -- Google wants to know who's behind the business.

- [ ] **4D.1** Add a `Person` schema to the JSON-LD `@graph` in `src/app/layout.tsx`. Include:
  ```json
  {
    "@type": "Person",
    "name": "Levi [Surname]",
    "jobTitle": "Founder",
    "worksFor": { "@type": "Organization", "name": "Quilliam Digital" },
    "url": "https://quilliamdigital.com/#about",
    "sameAs": ["https://linkedin.com/in/[handle]"]
  }
  ```
  Link this Person as the `founder` property on the Organization schema.

---

## Workstream 5: SEO Keyword Optimization (Item 11)

### 5A: Expand H2s with keywords

Current H2s are generic. Free SEO value by making them keyword-rich:

| Component | Line | Current H2 | Proposed H2 |
|-----------|------|-----------|-------------|
| `sprint-process.tsx` | 23-24 | "How it works" | "How the AI Impact Sprint Works" |
| `services-cards.tsx` | 30-31 | "Three ways we help" | "AI Services for Small Businesses" |
| `industry-tabs.tsx` | 18-19 | "AI built for your industry" | "AI Automation by Industry" (or keep -- this one is already decent) |
| `faq-section.tsx` | 13 | "Frequently asked questions" | "AI Automation FAQs for Small Businesses" |
| `about-preview.tsx` | 34-37 | "I make AI work for real businesses" | Keep -- this is strong, personal, and keyword-adjacent |

- [ ] **5A.1** Update H2 text in `src/components/home/sprint-process.tsx:24` from "How it works" to "How the AI Impact Sprint Works".
- [ ] **5A.2** Update H2 text in `src/components/home/services-cards.tsx:31` from "Three ways we help" to "AI Services for Small Businesses".
- [ ] **5A.3** Update H2 text in `src/components/home/faq-section.tsx:14` from "Frequently asked questions" to "AI Automation FAQs".
- [ ] **5A.4** Leave `industry-tabs.tsx:19` and `about-preview.tsx:34-37` unchanged -- both are already keyword-adjacent and changing them would hurt the conversational tone.

---

## Workstream 6: Content Depth -- Blog (Item 19)

This is the highest-ceiling item for E-E-A-T but also the largest effort.

- [ ] **6.1** Create the blog infrastructure: `src/app/blog/page.tsx` (listing page) and `src/app/blog/[slug]/page.tsx` (individual post page). Use MDX or a simple content array in `src/lib/blog-content.ts` for the initial posts.
- [ ] **6.2** Design the blog listing page to match the site's dark/light alternating section pattern. Each post card should show title, excerpt, date, estimated read time.
- [ ] **6.3** Design the individual blog post page similar to the privacy/terms pages (dark hero header, light or dark content body with proper typography).
- [ ] **6.4** Write 2-3 initial posts targeting high-value keywords:
  - "How AI Automation Saves Small Businesses 10+ Hours a Week" (targets "AI automation small business")
  - "What Is an AI Impact Sprint? A Step-by-Step Guide" (targets the branded term + "AI audit for business")
  - "AI Tools for UK Gyms: Automating Member Follow-ups and Reviews" (targets industry vertical + demonstrates expertise)
  
  **Levi should write or heavily edit these** to maintain the authentic voice. AI-drafted posts would damage the A- slop score.

- [ ] **6.5** Add `BlogPosting` schema markup with `author` linked to the Person schema from 4D.
- [ ] **6.6** Add `/blog` to the navigation in `src/lib/content.ts:12-17` and to the sitemap at `src/app/sitemap.ts`.
- [ ] **6.7** Add individual blog post URLs to the sitemap dynamically.

---

## Dependencies & Order of Operations

```
Workstream 2 (Technical SEO) ──── No dependencies, can start immediately
Workstream 3 (Design)        ──── No dependencies, can start immediately  
Workstream 5 (H2 Keywords)   ──── No dependencies, can start immediately
Workstream 1 (Images)        ──── Blocked on Levi providing/sourcing real photos
Workstream 4 (E-E-A-T)       ──── Blocked on Levi providing credentials, testimonials, pricing
Workstream 6 (Blog)          ──── Depends on 4D (Person schema); blocked on Levi writing content
```

**Immediate wins (no external input needed):**
- 2B: HSTS header (1 line in `next.config.ts`)
- 2C: Viewport themeColor (1 line in `layout.tsx`)
- 2E: CSP header (1 entry in `next.config.ts`)
- 2F: JSON-LD @graph consolidation (refactor in `layout.tsx`)
- 3A: H3 size standardization (4 files, class changes)
- 3B: Touch target fix (1 file, add `py-3`)
- 5A: H2 keyword expansion (3 files, text changes)

**Blocked on Levi's input:**
- 1.1-1.7: Real images
- 2D: Social profile URLs for sameAs
- 2G: Verified GBP rating/count
- 4A: Full name, credentials, LinkedIn
- 4B: Additional client testimonials
- 4C: Pricing ranges
- 4D: Full name for Person schema
- 6.4: Blog post content

---

## Verification Criteria

| Category | Current | Target | How to Verify |
|----------|---------|--------|---------------|
| Design | B+ | A+ | Uniform H3 sizes, all real images, 44px touch targets, no placeholder content |
| AI Slop | A- | A+ | No picsum.photos, no stock photos, real founder photo, zero AI tells |
| Technical SEO | 74/100 | 100/100 | robots.txt, sitemap with all pages, @graph JSON-LD, HSTS, CSP, canonical on all pages, proper OG 1200x630, sameAs, Person schema |
| Content / E-E-A-T | 72/100 | 100/100 | Founder credentials + LinkedIn, 3+ testimonials, pricing transparency, blog with 2-3 posts, keyword-rich H2s |
| Performance | A | A+ | Local optimized WebP images, no external image requests, LCP < 2.5s |

---

## Estimated Scope

| Workstream | Items | Files Modified | New Files | External Input Needed |
|------------|-------|---------------|-----------|----------------------|
| 1. Images | 7 tasks | 7 | 12 (images + OG) | Yes (photos) |
| 2. Technical SEO | 10 tasks | 2 (`layout.tsx`, `next.config.ts`) + `trust-bar.tsx` | 0 | Partial (social URLs, GBP data) |
| 3. Design | 2 tasks | 5 | 0 | No |
| 4. E-E-A-T | 7 tasks | 3 (`about-preview.tsx`, `content.ts`, `layout.tsx`) | 1 (testimonials component) | Yes (credentials, quotes, pricing) |
| 5. Keywords | 4 tasks | 3 | 0 | No |
| 6. Blog | 7 tasks | 2 (`content.ts`, `sitemap.ts`) | 4+ (blog pages, posts) | Yes (content) |
