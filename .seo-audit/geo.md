# GEO (Generative Engine Optimization) Audit — Quilliam AI

**Date:** 2026-05-26
**Scope:** http://localhost:3000/ (production target https://quilliam.ai)
**Reviewer:** Claude (GEO specialist)

---

## Overall GEO Readiness Score: **78 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability (passage extraction) | 25% | 70 | 17.5 |
| Structural readability (headings, FAQ, schema) | 20% | 88 | 17.6 |
| Multi-modal content (images, alt, video) | 15% | 55 | 8.3 |
| Authority & brand signals (NAP, founder, entity) | 20% | 85 | 17.0 |
| Technical accessibility (SSR, robots, llms.txt) | 20% | 88 | 17.6 |
| **Total** | | | **78.0** |

### Per-platform projected visibility

| Platform | Score | Notes |
|---|---|---|
| Google AI Overviews | 80 | Strong FAQPage + Service schema; clean NAP. Needs more external citations to actually appear. |
| ChatGPT (search) | 78 | Crawler allowed; llms.txt + llms-full.txt well-formed; citable facts present. |
| Perplexity | 75 | Dense factual paragraphs in llms-full.txt; pages a touch marketing-flavoured. |
| Bing Copilot | 70 | Same as ChatGPT but Bing weights brand mentions more — currently zero. |
| Claude.ai (web search) | 78 | ClaudeBot allowed; clear entity definition; founder bio is good. |

---

## CRITICAL

### C1. Brand mention vacuum (off-site signal absence)
Quilliam AI Ltd was incorporated 2026-04-11. Site is the only signal in existence.
- No Wikipedia entity (correlation with AI citation: high)
- No Reddit threads (correlation: high)
- No YouTube mentions (correlation ~0.737 — strongest single predictor)
- No LinkedIn company page detected in schema (no `sameAs` array on Organization)
- No `sameAs` references to any external profile

**Impact:** Even with perfect on-page GEO, AI engines will rarely cite a domain with zero external corroboration. Currently the best-possible outcome is being cited in branded "what is Quilliam AI" queries only.

**Fix:**
1. Add `sameAs` array to Organization JSON-LD listing LinkedIn company page, Levi's LinkedIn, X/Twitter, GitHub, Companies House profile, and any YouTube channel. Even pointing to Companies House (`https://find-and-update.company-information.service.gov.uk/company/17151006`) gives AI engines a corroborating link.
2. Ship at least one YouTube video this quarter (founder explainer, even 2 min) — YouTube is the strongest correlate with AI citation.
3. Post 1–2 substantive Reddit comments per week on r/smallbusinessuk, r/SaaS, r/Entrepreneur answering AI-implementation questions, signing as "Levi at Quilliam AI". No links — just consistent name+brand.
4. Create a brief Wikidata item for Quilliam AI Ltd (founder, founding date, HQ, industry). This is the cheapest entity signal.

---

## HIGH

### H1. Homepage lacks a 100–170-word citable definition paragraph
The hero opens with copy ("We make AI useful for real businesses.") and then a problem grid. There is no single self-contained paragraph an AI can extract that defines Quilliam AI as an entity with subject + verb + object structure.

The llms-full.txt has this paragraph correctly:
> "Quilliam AI is the trading name of Quilliam AI Ltd, a UK private limited company registered in England and Wales..."

But it does **not appear in the rendered homepage HTML** that AI search crawlers will index. AI crawlers do read llms.txt where supported, but Google AIO and most production crawlers still rely on rendered HTML.

**Fix:** Add a 130–160 word "About Quilliam AI" prose block to the homepage (can be visually subtle, e.g. in a `<section>` near the bottom or as an expandable summary). Lead sentence must be:
> "Quilliam AI is a UK AI consultancy based in Cornwall that helps small and mid-sized businesses turn AI interest into working systems through opportunity analysis, team training, and supervised AI implementation."

### H2. Pricing not stated on rendered pages (only in llms-full.txt and schema)
£300–£400/day and "packages from £500" appear in llms-full.txt and indirectly in the schema (`priceRange: £££`), but a user/AI reading any visible page cannot quote a price. The Offer schema on /ai-consultant-uk has `price: "0"` (referring to the free intro), which is misleading without context.

**Fix:** Add a "Pricing" or "How we charge" block (rendered HTML) to homepage or service pages with explicit text like: *"Day-rate consulting is £300–£400 per day. Fixed-price implementation packages start at £500."* This is the single most-cited type of fact in AI commerce queries ("how much does an AI consultant in the UK cost?").

### H3. Service URL/IA mismatch
`AGENTS.md` and `llms.txt` reference `/services/ai-training`, `/services/ai-automation`, `/services/digital-services` — but `git status` shows those files were **deleted** and new geo-landing pages (`/ai-consultant-uk`, `/ai-automation-cornwall`) exist instead. Nav still has "Services" in it on rendered pages but does not appear to link to canonical service pages. The result:
- llms.txt lists pages that match current state, good.
- AGENTS.md is stale (separate issue).
- There is no dedicated `/services/team-training` or `/services/ai-implementation` page for AI engines to pull service-specific facts from.

**Fix:** Either (a) restore three service pages as canonical citation targets, or (b) update homepage anchors to be unique pages, or (c) accept the geo-pages strategy but ensure each service has its own self-contained 150-word definition block somewhere in HTML. Currently service definitions only exist as short cards on the homepage.

### H4. No author/datePublished metadata on long-form content
The site has no blog/articles. Generative engines disproportionately cite articles with `Article` schema and visible `datePublished`/`author` bylines. Without content, brand becomes invisible for non-branded queries ("best AI consultant Cornwall", "how to start with AI automation UK").

**Fix:** Ship 3–5 cornerstone articles before end of Q2: "How to choose your first AI workflow (UK SME guide)", "AI automation vs AI agents: practical differences", "What an AI opportunity session covers", "Supervised AI agents explained", "AI training that actually changes how teams work". Each: 1,200–1,800 words, `Article` schema with author=Levi, datePublished, dateModified, FAQ at the bottom.

---

## MEDIUM

### M1. robots.txt — missing explicit 2026-current AI crawlers
Current robots.txt relies on `User-Agent: *` Allow to cover GPTBot/ClaudeBot/PerplexityBot. That works, but per 2026 best practice you should **explicitly Allow** the search-context bots so future tightening of the wildcard (e.g. adding crawl-delay) doesn't accidentally block them, and so the policy is auditable.

Missing explicit entries:
- `OAI-SearchBot` (OpenAI's search-time fetcher — distinct from GPTBot training crawler)
- `ChatGPT-User` (on-demand fetch when a ChatGPT user shares a URL)
- `PerplexityBot` and `Perplexity-User`
- `Claude-SearchBot` / `ClaudeBot` (Anthropic distinguishes these)
- `Google-Extended` is currently **blocked** — correct for training opt-out, does NOT affect AIO (AIO uses Googlebot)
- `Applebot-Extended` — missing; Apple Intelligence will increasingly source via this

**Fix:** Add explicit Allow rules in `src/app/robots.ts` for: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, anthropic-ai (wait — currently blocked; keep blocked for training but ClaudeBot covers search), PerplexityBot, Perplexity-User, Applebot, Applebot-Extended. Documented intent reads better.

Also: `User-Agent` is currently capital-A; spec is case-insensitive but convention is `User-agent`. Cosmetic.

### M2. llms.txt is good but not perfectly spec-compliant
The llmstxt.org spec expects:
- `# H1 title` ✓
- `> Blockquote summary` ✓ (you have it)
- Optional sections as `## H2` with bulleted links in `[name](url): description` format

**Issue:** The "## Pages" section in llms.txt uses bare URLs (`Home: https://quilliam.ai`) instead of markdown link format (`- [Home](https://quilliam.ai): Practical AI consulting and implementation`). This still parses, but stricter consumers (and the reference parser at llmstxt.org) prefer the canonical form with descriptions.

**Fix:** Convert every entry in "## Pages" of both llms.txt and llms-full.txt to `- [Page Name](URL): one-line description.`

### M3. llms-full.txt — "Supervised AI Agents" service is described but not listed under Services in llms.txt
llms.txt lists three services (AI Opportunity Analysis, Team Training, AI Implementation). llms-full.txt has a fourth section ("Supervised AI Agents and Automations"). Pick one taxonomy and apply across llms.txt, llms-full.txt, schema, nav, and pages.

### M4. FAQPage schema is excellent on homepage and /ai-consultant-uk, missing elsewhere
/ai-automation-cornwall has visible FAQ but I did not verify its schema in this run — confirm `FAQPage` JSON-LD is emitted. /about and /service-areas do not need FAQPage (different content types) but could benefit from `Person` schema enrichment on /about (alumniOf, knowsAbout, sameAs) and `Place`/`AreaServed` enrichment on /service-areas.

**Fix:** Enrich `Person` schema with:
```json
"alumniOf": [{"@type":"Organization","name":"..."}],
"knowsAbout": ["AI consulting","Workflow automation","n8n","Supervised agents","UK SME operations"],
"sameAs": ["https://www.linkedin.com/in/...", "..."],
"worksFor": {...}
```

### M5. /service-areas — geo coverage list is too generic
The page mentions Cornwall, Devon, Bristol, London, South East, Midlands, North, Scotland, Wales, Northern Ireland. AI engines answering "AI consultant near me" queries match against specific city/town entity names. Listing 30–40 named cities (Manchester, Leeds, Bristol, Plymouth, Truro, Newquay, etc.) with one-sentence context each materially improves local-AI matching. Also add `Place` schema with `containedInPlace: United Kingdom` and a list of `areaServed` regions on the Organization.

### M6. Single H1 per page — confirm /about
/about renders the H1 "I make AI practical for real business operations." which is a personal voice statement. From a GEO standpoint the H1 should contain the entity ("Levi Quilliam, founder of Quilliam AI" or "About Levi Quilliam, founder of Quilliam AI"). The current title tag has it; the visible H1 does not.

### M7. Headings are statements, not questions
Homepage H2s are declarative ("We show you what AI can do. Then we help you use it."). FAQ headings are questions, which is good. But for top-of-funnel AIO citation, mid-page H2/H3s phrased as questions get extracted more often:
- "What does Quilliam AI do?" → answer paragraph
- "How does AI implementation work?" → 4-step paragraph
- "How much does AI consulting cost in the UK?" → pricing paragraph

**Fix:** Add 3–4 question-shaped H2/H3 sections to homepage with directly extractable answer paragraphs (40–60 word lead, then optional supporting text).

---

## LOW

### L1. Hero image alt text
Hero references `fistral-hero-ai.png` and `levi-headshot-circle.png` as preloads — verify their `alt` attributes are descriptive ("Fistral Beach, Newquay, Cornwall — Quilliam AI's home base" rather than "hero image").

### L2. WebPage schema `datePublished` is "2026-04-11" everywhere
Some pages (e.g. /ai-consultant-uk) correctly have a later `datePublished: 2026-05-09`, but several pages share the company founding date. AI engines deprioritise stale content. Where a page was written later, reflect that.

### L3. JSON-LD `priceRange: "£££"` is meaningless
Schema.org `priceRange` is free-text; "£££" suggests "expensive" by convention. For an AI consultancy charging £300–£400/day this is fine, but replacing with `"£300-£400 per day"` is more citable.

### L4. No video content
Add at least one short founder explainer video (90 sec) and emit `VideoObject` schema (`shared/video-json-ld.tsx` already exists). YouTube-hosted, embedded on homepage and /about. YouTube correlation with AI citation is ~0.737 — easily the highest-leverage single move.

### L5. /llms.txt and /llms-full.txt — consider Content-Type and `Last-Modified` headers
Confirm these are served as `text/plain; charset=utf-8` and emit a `Last-Modified` header matching the "Last updated" line. Some llms.txt-aware fetchers rely on the header for cache invalidation rather than parsing the body.

### L6. RSL 1.0 (Robots Schema Language) — not present
RSL 1.0 is the emerging machine-readable licensing layer for AI use of your content (royalty/attribution terms). Adoption is still optional but worth shipping a minimal `/robots.json` or `<link rel="license">` declaring: attribution required, no model training without permission, commercial summary use allowed. Low effort, future-proofs the site.

### L7. Internal linking density
/about does not link to /ai-consultant-uk or /ai-automation-cornwall. Geo landing pages should link to each other and to /about (founder authority). Add an "OtherServices"-style block on /ai-consultant-uk and /ai-automation-cornwall pointing to the other geo page and to /about.

### L8. Founder credentials not enriched
The /about page says "Economics plus computer science" and references Deloitte, Halter, XGX.AI but provides no `Person.alumniOf`, no LinkedIn, no GitHub, no published writing. Generative engines treat the founder as an entity separate from the company; thin Person data weakens the org's authority by association.

---

## Top 5 Highest-Impact Changes (Prioritised)

| # | Change | Effort | Impact |
|---|---|---|---|
| 1 | Add `sameAs` to Organization + Person schema (LinkedIn, Companies House URL, X, GitHub, YouTube). Create Wikidata stub. | 1–2 hrs | Critical — closes the "no corroborating signal" gap |
| 2 | Add a 130–160 word citable definition paragraph to homepage HTML, lead sentence: "Quilliam AI is a UK AI consultancy based in Cornwall that..." | 30 min | High — fixes H1 |
| 3 | Add rendered pricing block ("£300–£400/day, packages from £500") to homepage and `/ai-consultant-uk` | 30 min | High — pricing is among the most-cited fact types |
| 4 | Ship 3–5 cornerstone articles with `Article` schema, author byline, datePublished | 2–3 weeks | High — without long-form content, non-branded queries cannot cite you |
| 5 | Update `src/app/robots.ts` to explicitly Allow OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Perplexity-User, Applebot-Extended | 15 min | Medium — explicit policy is auditable and future-proof |

---

## File pointers

- robots.ts: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/robots.ts`
- llms.txt: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/llms.txt`
- llms-full.txt: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/llms-full.txt`
- Root layout JSON-LD: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/layout.tsx`
- Homepage: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/page.tsx`
- About: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/about/page.tsx`
- Geo landing pages: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/ai-consultant-uk/` and `.../ai-automation-cornwall/`
- Service areas: `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/service-areas/page.tsx`
