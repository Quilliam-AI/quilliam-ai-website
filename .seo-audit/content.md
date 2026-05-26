# Content Quality Audit — Quilliam AI

**Date:** 2026-05-26
**Auditor:** Content Quality (Sept 2025 QRG)
**Scope:** /, /about, /book, /contact, /service-areas, /ai-automation-cornwall, /ai-consultant-uk, /privacy, /terms

---

## Overall Content Score: 72 / 100

### Breakdown

| Factor | Weight | Score | Notes |
|---|---|---|---|
| Experience | 20% | 16 / 20 | Real client (VetVision AI) named with detail; founder employers named (Deloitte, Halter, XGX.AI). No first-person process anecdotes outside the case study. |
| Expertise | 25% | 18 / 25 | Founder bio thin on credentials, dates, length-of-tenure, qualifications. No mention of degree institution, no specific tooling stack (n8n, Make, OpenAI, etc.). |
| Authoritativeness | 25% | 16 / 25 | One named client only. No testimonials with attribution. No press, awards, or third-party citation. Proof logos act as employer logos, not client logos — risk of implied endorsement. |
| Trustworthiness | 30% | 22 / 30 | Excellent: Companies House number, registered office, phone, email, GDPR-compliant privacy, 24-hour reply promise. Loses points for: no testimonials, no signed-off case study quotes, single founder image without LinkedIn/Twitter link from page body. |

### AI Citation Readiness: 64 / 100
Site uses scannable card grids and short FAQs, but lacks 100–170 word "definition" paragraphs that LLMs prefer to extract verbatim. Headings are statements ("We make AI useful…") rather than question-shaped (e.g. "What does an AI consultant do?") — only the FAQ blocks are citation-ready.

---

## CRITICAL

### C1. OG image still shouts "FREE AI OPPORTUNITY" — contradicts site copy
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/opengraph-image.tsx:137`
- **Issue:** Commit `cef0684` removed "Free" framing from copy site-wide, but the dynamic OG image still renders the badge `"FREE AI OPPORTUNITY"`. Every social share, LinkedIn unfurl, and Slack preview will display "FREE" in 28px bold — directly contradicting the on-page CTA copy ("Find Where AI Can Help My Business"). This is a brand consistency failure and undermines the value-framing pivot.
- **Fix:** Change line 137 from `{"FREE AI OPPORTUNITY"}` to `{"AI OPPORTUNITY SESSION"}` or `{"BOOK AN AI OPPORTUNITY"}`. Rebuild required to regenerate `/opengraph-image`.

### C2. New landing pages are orphans — zero internal links from main nav, footer, or homepage
- **Files:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/ai-automation-cornwall/page.tsx`, `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/ai-consultant-uk/page.tsx`
- **Issue:** Neither page is referenced anywhere in `src/components/layout/*`, `src/lib/content.ts`, `src/app/page.tsx`, `/about`, `/contact`, or `/service-areas`. Only `src/app/sitemap.ts` references them. Google treats orphan pages as low-priority; LLMs reaching the site via the home URL will never crawl to them.
- **Fix:** Add cross-links — minimum (a) link from `/service-areas` regions: Cornwall region card → `/ai-automation-cornwall`; (b) link from homepage `#services` or `#workflows` section to `/ai-consultant-uk`; (c) link both pages reciprocally in a "Related" or "Other ways to work with us" block at the bottom of each `FocusedServicePage`. The existing footer "Navigate" group could also gain a "Locations" or "Topics" sub-list.

### C3. Thin/duplicate content risk — `/ai-automation-cornwall` and `/ai-consultant-uk` share template + ~80% phrasing overlap
- **Files:** both pages above + `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/components/services/focused-service-page.tsx`
- **Issue:** Both pages use the same `FocusedServicePage` shell, the same section headings ("Best for", "What you get", "Delivery", "Before you book."), and substantially overlapping copy in `bestFor`/`outcomes`/`process`. Body content is ~280–330 words each (under the 500-word location floor and far under the 800-word service floor). Google's `SpamBrain` and Helpful Content signal flag this pattern. Risk of consolidation or suppression after a core update.
- **Fix:** (a) Expand each page to 700+ unique words with location-specific or topic-specific detail: for Cornwall, add a paragraph naming actual Cornwall/SW towns served, sectors common to the region (hospitality, agri-tech, marine), and a Cornwall-specific mini case study or anecdote. For `/ai-consultant-uk`, add a 150-word definition of "what a UK AI consultant actually does" plus differentiation from generic AI consultancies. (b) Add at least one unique section per page that does not exist on the other (e.g. "Cornwall sectors we know" vs "UK pricing and engagement model"). (c) Vary FAQ questions — currently both lean on "do you only work with X" framing.

---

## HIGH

### H1. Founder bio missing concrete expertise signals
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/about/page.tsx:40-65`
- **Issue:** Timeline cards mention Deloitte, Halter, XGX.AI but give no dates, no roles, no quantified outcomes, no degree institution, no specific projects shipped. "Years of shipping practical software and AI tooling" is unverifiable. No mention of n8n, OpenAI, Anthropic, LangChain, or any tooling specialism. No links to LinkedIn from the page body. Levi's name appears once in the intro paragraph only.
- **Fix:** Add to each timeline card: (a) year range (e.g. "2021–2023"); (b) specific role title; (c) one named, shipped piece of work or measurable outcome. Add an "Author/Founder" microformat block with LinkedIn link, optional GitHub, and Companies House director link. Add a `sameAs` array to the `Person` JSON-LD in `layout.tsx` pointing to LinkedIn.

### H2. Privacy/Terms list "Bespoke" — marketing jargon flagged by house style
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/terms/page.tsx:80`
- **Issue:** "Bespoke ChatGPT, Claude, and Gemini tools…" — AGENTS.md voice rules ban marketing jargon. "Bespoke" reads as agency-speak when the rest of the site uses "custom" or "scoped to your team".
- **Fix:** Replace "Bespoke" with "Custom" or "Workflow-specific". Audit terms.tsx end-to-end for similar drift.

### H3. /book page body content < 250 words — thin for a conversion page
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/book/page.tsx`
- **Issue:** Excluding the form labels, the page has ~140–180 words depending on intent. No supporting trust signals (no testimonial, no "what to expect on the call", no "what I'll ask you", no example outputs from prior sessions). Booking pages benefit from objection-handling content even when the primary intent is form submission.
- **Fix:** Add a "What I will ask on the call" 80–120 word block, a "What you walk away with" bulleted list (already implicit in sessionPoints but not framed as a deliverable), and one short quote/blurb from a prior session (use VetVision attribution where possible). Target 500+ words total body content.

### H4. /service-areas regions are vague — no real UK city/region keyword coverage
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/service-areas/page.tsx:30-46`
- **Issue:** Three macro-regions ("Midlands, North, Scotland, Wales and Northern Ireland" lumped together) is too coarse to rank for any city-level query. Body content ~280 words, under the 500-word location floor.
- **Fix:** Expand to 6–10 named regions or cities (London, Manchester, Bristol, Birmingham, Leeds, Edinburgh, Cardiff, Plymouth, Exeter, Truro, Newquay). Each gets a 50–80 word descriptor noting delivery format and any local sector tilt. Keep claims honest — "remote-first with in-person available" is fine; do not fabricate office presence.

### H5. No named testimonials anywhere on the site
- **Files:** all pages
- **Issue:** Authority is the weakest E-E-A-T pillar. The VetVision case study is detailed but has no quoted attribution. Zero testimonials sitewide. LLMs cite testimonials more readily than self-claims.
- **Fix:** Add at least one named, attributable quote from VetVision AI on the homepage case study block (line ~440 of `page.tsx`). If a written quote is not yet collected, add it to the next client-comms cycle. Do not fabricate quotes — better empty than invented (per `feedback_no_fabrication_discipline`).

### H6. Pricing facts (£300–400 day-rate, packages from £500) absent from all pages
- **Files:** all
- **Issue:** AGENTS.md lists these as verified stats. They appear nowhere in body copy. Pricing transparency is a trust signal Google rewards (and absence drives bounce on commercial-intent traffic).
- **Fix:** Add a "Pricing" block to `/ai-consultant-uk` and `/about`, or a dedicated `/pricing` page. State the range explicitly ("£300–£400 day rate, fixed packages from £500") with a note that scoped work is quoted before commitment.

---

## MEDIUM

### M1. Heading hierarchy — multiple H2s, no H3s on landing pages
- **Files:** `ai-automation-cornwall/page.tsx`, `ai-consultant-uk/page.tsx`, `service-areas/page.tsx`
- **Issue:** `FocusedServicePage` renders `h1` → many `h2`s, but section item cards (Best for items, outcome items, process steps) are styled like sub-sections without semantic H3s. Process steps in particular ("Local or remote discovery", "Build what matters", "Train and hand off") read as H3 content rendered as H2 in `focused-service-page.tsx:219`.
- **Fix:** Audit `focused-service-page.tsx` lines 141, 152, 185, 219, 237 — at minimum the FAQ section heading should be H2 and each question should not be a `<summary>` inside an H2-equivalent. Use H3 for process step titles since they are children of the "Delivery" section.

### M2. No citable definition paragraphs on service landing pages
- **Files:** `ai-consultant-uk/page.tsx`, `ai-automation-cornwall/page.tsx`
- **Issue:** AI Overviews and ChatGPT search prefer 100–170 word self-contained definition paragraphs. Both pages open with a short hero intro then jump to bullet grids. No paragraph of the form "An AI consultant in the UK is a specialist who…" or "AI automation for Cornwall businesses means…".
- **Fix:** Add a 120–160 word `<section>` immediately after the hero with a definition paragraph that LLMs can extract verbatim. Include the page's primary keyword in the first 10 words. Mark up with `Article` or `DefinedTerm` schema.

### M3. Homepage hero subhead is generic
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/page.tsx:316-320`
- **Issue:** "With all the noise, news, and tools around AI, we help you understand what matters, where it fits in your business, and how to implement it properly." This sentence is comprehensible but generic — every AI agency could write it. No specificity, no commitment, no proof.
- **Fix:** Replace with copy that names a specific outcome or audience: e.g. "We help UK business owners pick the one AI workflow worth building first, then build it with the team that will run it." Mention "workflow", "agent", or "owner" — site's key positioning terms.

### M4. /privacy and /terms — no last-updated visibility above the fold
- **Files:** `privacy/page.tsx:31`, `terms/page.tsx:32`
- **Issue:** `lastUpdated` is passed to `LegalHero` but assumed present. Privacy date is 2026-04-18, terms 2026-04-11 — both pre-date the recent business pivots. If the privacy policy describes B2B outreach (per recent commit `2715569`) the date should reflect that change.
- **Fix:** Verify the privacy policy text matches the 18 April date — if outreach section was added later, bump `lastUpdated`. Repeat audit on terms.

### M5. VetVision results — "More leads" and "Live portal" are not stats
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/page.tsx:79-84`
- **Issue:** Of four `vetVisionResults` cards, only "40 -> 95" (SEO score) is a real number. "AI product", "Live portal", "More leads" are labels rendered in stat-card position. Visually they look like stats; semantically they are not. Risks reader trust if they read carefully.
- **Fix:** Either get one real number for each (lead count, time-to-onboard, customer count) or reformat the non-numeric items as a separate "Deliverables" list rather than stat cards. Do not invent figures.

### M6. /contact missing structured address / hours microdata
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/contact/page.tsx`
- **Issue:** Page renders "Available Monday to Friday, 9am-5pm UK time" and "Cornwall, UK" visually but emits no `ContactPage` or `LocalBusiness`-specific JSON-LD with `openingHoursSpecification` or `address` beyond what's in `layout.tsx`. The registered office is in St. Eval / Wadebridge but only shown in the footer.
- **Fix:** Add a `ContactPage` schema with `mainEntity` referencing `#organization` and explicit `openingHoursSpecification`. Render the registered office on the page itself (currently footer-only).

---

## LOW

### L1. British spelling consistency — generally good, one slip
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/about/page.tsx:195`
- **Issue:** "Optimise for adoption" — correct. Site is British-English clean. No "optimize", "color", "organize" found. Keep as-is.
- **Fix:** None required. Note for future copy work.

### L2. FAQ count low for an AI agency
- **File:** `src/lib/content.ts:189-220`
- **Issue:** Only 6 homepage FAQs. AI-related queries vary widely; sites that rank for AI consulting terms often have 10–15 FAQs covering pricing, timeline, data handling, tool stack, model choice, GDPR, contracts, ownership, IP, supplier risk.
- **Fix:** Add FAQs on: data privacy ("Does my data train an AI model?"), tool stack ("What tools do you use?"), pricing ("How much does AI implementation cost?"), timeline ("How long until something works?"), IP ownership ("Who owns what we build?"). Schema gain is free; copy effort modest.

### L3. CTA wording inconsistency
- **Files:** `page.tsx`, `about/page.tsx`, `contact/page.tsx`, etc.
- **Issue:** Primary CTA is "Find Where AI Can Help My Business" everywhere — consistent. Secondary CTA varies: "Book AI Training", "Contact", "Ask about location", "See workflow work", "See how it works". This is fine for context but the AGENTS.md spec named a dual primary CTA ("Book Free AI Training" + "Book Free AI Opportunity"). Only the homepage exposes both intents; about/contact/service-areas push only `opportunity`.
- **Fix:** Decide: is the AI Training CTA still a top-level option, or has it been demoted? If still top-level, surface it on at least one of `/about`, `/contact`, and the landing pages. Update AGENTS.md "CTAs" section if demoted.

### L4. Hero image alt text is descriptive but not topical
- **File:** `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/page.tsx:184`
- **Issue:** Alt is "Elevated view across Fistral Beach in Newquay, Cornwall" — accurate, but does not reinforce the page's commercial topic. For accessibility this is fine; for keyword-relevance an alt that mentions Quilliam AI's geography would help marginally.
- **Fix:** Optional — "Cornish coastline near Quilliam AI's Newquay base — Fistral Beach" or similar. Do not stuff.

### L5. Homepage word count ~1,400 — under blog floor but acceptable for homepage
- **File:** `page.tsx`
- **Issue:** Approx 1,400 words of body content (excl. nav/footer). Above the 500-word homepage floor; below the 1,500 blog floor (n/a here). Fine.
- **Fix:** None.

### L6. "AI Training" CTA label appears in nav-adjacent CTA bar only on homepage
- **File:** `page.tsx:170`
- **Issue:** The training intent is reachable from `/book?intent=training` but the entry point to that URL exists only on the homepage hero. Anyone landing on `/about`, `/contact`, `/service-areas`, or the new landing pages cannot get to the training intent without typing the URL.
- **Fix:** Surface a "Book AI Training" secondary CTA on at least `/about` (training is education-side and aligns with the bio section).

---

## Summary of Top 5 Fixes (Priority Order)

1. **OG image**: change "FREE AI OPPORTUNITY" → neutral phrase (one-line fix, biggest brand-consistency win). File: `src/app/opengraph-image.tsx:137`.
2. **Internal links to orphan landing pages**: add at least one inbound link to each of `/ai-automation-cornwall` and `/ai-consultant-uk` from homepage and `/service-areas`.
3. **Expand the two new landing pages** from ~300 words each to 700+ words with distinct, page-specific content; reduce template overlap.
4. **Add named testimonial / quoted attribution** from VetVision AI to the homepage case study.
5. **Enrich founder bio** in `/about` with dates, role titles, and one shipped outcome per timeline card.

---

## Voice / Jargon Check

- "leverage", "synergy", "cutting-edge", "seamless", "holistic", "disrupt": **none found**.
- "bespoke": **1 hit** in `/terms` (H2).
- British spelling: **clean**.
- Contractions used naturally: **yes**.
- "We" / "you" voice: **consistent**.

## Fabrication Check

No invented statistics found in copy. The "40 → 95 SEO score" claim on the homepage should have a private source-of-truth ready in case a journalist or buyer asks. The non-numeric stat cards (M5) are presentation drift, not fabrication.
