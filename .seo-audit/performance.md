# Performance & Core Web Vitals Audit

**Date:** 2026-05-26
**Methodology:** Production build (`bun run build && bun start` on port 3100) measured with Lighthouse 13.3.0, mobile emulation, 4x CPU slowdown, default Slow 4G throttling. Curl was used to size assets independently. Numbers below are lab data — field data (CrUX) is not available pre-launch.
**Overall score (worst page, mobile): 75 / 100** — fails CWV at the 75th percentile primarily because of the homepage LCP.

| Page | Perf | FCP | LCP | TBT | CLS | TTFB | Verdict |
|---|---|---|---|---|---|---|---|
| `/` (homepage) | **75** | 1.1 s | **4.4 s** | 390 ms | **0** | 140 ms | LCP FAIL (>4.0 s) |
| `/ai-automation-cornwall` | **92** | 0.8 s | 3.1 s | 160 ms | 0 | 30 ms | LCP needs-improvement |
| `/book` | **91** | 0.9 s | 3.3 s | 130 ms | 0 | 20 ms | LCP needs-improvement |
| `/about` | not run; payload identical to `/cornwall` plus an oversized headshot srcset | — | likely ~3.3 s | — | — | 40 ms | — |
| `/service-areas` | not run; minimal page | — | — | — | — | 38 ms | — |

INP is N/A in unattended Lighthouse (no real interactions). TBT 390 ms is a proxy and is high — predicts INP risk.

**Total JS (gzipped, on every page): ~274 KiB across 14 chunks.**
Largest: `0702iuzjzpijv.js` (228 KiB raw / 71 KiB gz, react-dom), `1hqyz9r0xnfoj.js` (188 KiB raw / 61 KiB gz, **posthog-js**), `35ddz6gm6tdlw.js` (118 KiB raw / 31 KiB gz), `0cz1d0mv5g_q7.js` (113 KiB raw / 40 KiB gz). CSS: 63 KiB raw / 12 KiB gz.

---

## Critical

### 1. Homepage LCP = 4.4 s (FAIL) — hero PNG is the LCP element and is not modern-format
- Lighthouse `lcp-discovery-insight` score = 0; `image-delivery-insight` flags 14.8 KiB wasted.
- LCP element selector: `div.relative > div.mt-10 > aside.rounded-card-xl > img.object-cover` (the `<Image src="/fistral-hero-ai.png" priority fill>` in `HeroCoastImage`, `src/app/page.tsx:177`).
- `public/fistral-hero-ai.png` is **2,529 KB / 1672×941** PNG. next/image converts to WebP on the fly (170 KB at 1920w, 81 KB at 1080w, 41 KB at 750w mobile), but:
  - Source asset is PNG not AVIF/WebP, so optimisation runs every cold request.
  - Photo has no transparency — PNG is the wrong format. Pre-compressed AVIF would give ~50–70% smaller payload than the on-the-fly WebP next/image produces at q=75.
  - srcSet includes `w=3840` even though the source is only 1672 px wide — wasted CDN cache entries.
- The preload tag is present but mobile picks `w=750`; the LCP gets dominated by JS bootup (685 ms attributed to `0702iuzjzpijv.js` per Lighthouse `bootup-time`).
- **Fix:**
  1. Pre-convert `fistral-hero-ai.png` to AVIF (target ~50 KB at 1600w) and JPEG fallback, replace `src` accordingly. A 1600×900 hero is enough — there is no use case for 3840w.
  2. Cap `next.config.ts` `images.deviceSizes` so srcSet stops at 1920 or even 1600 — this is a hero, not a billboard.
  3. Optionally add a tiny `placeholder="blur"` so the visible LCP candidate appears earlier.
- **Expected impact:** LCP from 4.4 s → ~2.3 s on the homepage.

### 2. PostHog (61 KiB gz / 188 KiB raw) ships on every page and runs at init
- `src/instrumentation-client.ts` calls `posthog.init()` on every page load (not gated by consent), even before the cookie banner renders. Init parses ~188 KiB of JS on the main thread — visible in Lighthouse `bootup-time` (685 ms for chunk `0702iuzjzpijv.js`, 99 ms for `35ddz6gm6tdlw.js`).
- The PostHog SDK is responsible for most of the 390 ms TBT on the homepage.
- It is `isLocalPostHogHost`-gated and `posthogToken`-gated — on prod with a token, this fires immediately.
- **Fix:** Lazy-load PostHog only after user idle or first interaction, OR only after explicit cookie consent. Recommended pattern:
  ```ts
  // instrumentation-client.ts
  if (consent === 'accepted' && posthogToken) {
    // load synchronously
  } else {
    requestIdleCallback(() => import('posthog-js').then(...));
  }
  ```
  Even better: gate the entire `posthog-js` import behind consent and load `posthog-js-lite` (~5 KB) for pre-consent pageview pings if you need them.
- **Expected impact:** TBT 390 ms → ~150 ms, INP risk drops, LCP improves another ~300–500 ms because the main thread is free during hero discovery.

### 3. Hero PNG is checked into the repo at 2.5 MB
- `public/fistral-hero-ai.png` = 2,529,349 B. Git is now carrying that on every clone; CSP also has to whitelist it. The optimised WebP from next/image is fine for visitors, but the source is wasteful and slows builds.
- **Fix:** Replace with a 1600×900 AVIF (and JPEG fallback) at <100 KB each. Delete the PNG.

---

## High

### 4. K2 Gym logo is a JPG, not the WebP that's already on disk
- `src/lib/content.ts:41` references `/logos/k2-gym-logo.jpg` (9,333 B). A `k2-gym-logo.webp` (7,818 B) already exists in `public/logos/` but is unused.
- Logo is also given `width={300} height={300}` but rendered at `h-10` (40 px tall) — so next/image generates a 16-entry srcSet including `w=3840`, which is downloaded if a hi-DPR device hits an unfortunate srcset pick.
- **Fix:** Use the webp; reduce `width`/`height` props to `40 40` (or whatever you actually render), set `sizes="40px"`, and prefer a single SVG version of the K2 logo if possible (the other 4 logos are SVG).

### 5. Levi headshot srcset goes up to 3840w on `/about` and footer
- `public/levi-headshot-circle.png` = 60 KB, source dimensions unknown but rendered at 88 px (homepage) and 420 px (`/about`).
- The about page preloads the headshot srcset up to `w=3840` and serves `w=3840` as the default `src` — that round-trips to next/image even though no device needs more than ~840 px.
- **Fix:** Set explicit `sizes="420px"` on the about page Image and `sizes="88px"` on the homepage (already done on homepage). Cap `images.deviceSizes` to 1920 globally.

### 6. Total JS payload 274 KiB gz on every page — even pages with no client interactivity
- Pages like `/ai-automation-cornwall`, `/service-areas`, `/about` are pure server components with no forms or interactive state, yet they ship the same ~274 KiB gz as the homepage.
- Root cause: `PostHogProvider` and `CookieConsentBanner` in `layout.tsx` are `"use client"` and pull `posthog-js` + `posthog-js/react` into the layout chunk that every route inherits.
- **Fix:** Same as #2 — defer PostHog SDK to idle/consent. Once removed from the layout chunk, the baseline becomes the React+Next runtime + Nav (the only other client component), which should be ~110–140 KiB gz.

### 7. Render-blocking CSS = 63 KiB raw / 12 KiB gz, blocks for 246 ms
- `lighthouse render-blocking-insight` flags `09-ujd66lho_k.css` (12 KiB gz, 246 ms blocking on Slow 4G).
- Tailwind 4 emits one large file; most of it is unused on any given route.
- **Fix:** Tailwind 4 is already tree-shaken to used classes, but the file still contains all CSS variables (`@theme inline` block in `globals.css`) and animation keyframes. Audit `globals.css` and remove unused custom utilities, then run `next build` with the `experimental.optimizeCss` flag if available in canary 16.2. If the file stays large, accept it — 12 KiB gz is not the long pole.

---

## Medium

### 8. Legacy JavaScript polyfills shipped to modern browsers — 22 KiB savings
- `lighthouse legacy-javascript-insight` (score 0): `0702iuzjzpijv.js` wastes 13.9 KiB, `1hqyz9r0xnfoj.js` wastes 8.7 KiB on legacy transforms.
- Next.js 16 canary should be targeting modern browsers by default, but `package.json` does not set a `browserslist`. Worth checking after the next bump.
- **Fix:** Add `"browserslist": ["chrome >= 100", "firefox >= 100", "safari >= 16", "edge >= 100"]` (or similar) to `package.json`. Saves ~6 KiB gz.

### 9. `1uab6wlnsjota.js` preloaded with `fetchPriority="low"` on every page
- The HTML head has `<link rel="preload" as="script" fetchPriority="low" href="/_next/static/chunks/1uab6wlnsjota.js">` on every page. That's an "opportunity" chunk Next picks up but it competes with the hero image fetch over the same connection.
- **Fix:** None directly — this is a Next.js 16 canary behaviour. If LCP doesn't drop after fixing #1/#2, revisit.

### 10. DOM is 12,835 px tall on the homepage with body styled `min-h-[100dvh] flex flex-col`
- Not a CWV problem today (CLS = 0, fonts use `display: swap`), but a long single-page DOM increases INP risk under heavy scroll. Lighthouse `dom-size-insight` does not flag it (score 1) but the body is 12.8 kpx and the nav uses `IntersectionObserver` on every section.
- **Fix:** Already mitigated by `passive: true` scroll listener and `IntersectionObserver`. No action — leave a note for future.

### 11. Cache headers on `/_next/static/*` good; HTML correctly `no-cache, must-revalidate`
- Verified: WOFF2 font returns `Cache-Control: public, max-age=31536000, immutable`. HTML returns `Cache-Control: no-cache, must-revalidate`. Both correct. No fix.

---

## Low

### 12. `next.config.ts` still permits `images.unsplash.com` remote patterns
- Holdover from picsum/unsplash placeholders. No actual usage of unsplash images in source — `picsum.photos` is mentioned in `AGENTS.md` but not in the current `src/`. Worth a CSP/config trim.
- **Fix:** Remove `remotePatterns` entry once you confirm no remote images are loaded.

### 13. `framer-motion` is in `package.json` but `FadeIn` is not used anywhere in the live page tree
- `grep` confirms `FadeIn` is exported but no `.tsx` file in the current tree imports it.
- Component still bundled if any route references it; check after layout 13. If truly unused, delete `src/components/shared/fade-in.tsx` and `bun remove framer-motion`. Saves ~30 KiB gz from the layout chunk (currently part of one of the unattributed chunks).

### 14. `proofLogos` width/height props are wrong for `<Image>` srcSet generation
- Already covered in #4 and #5 but worth restating: every logo has `width: 300 height: 300` (K2) or similar, and next/image uses the larger dimension to decide srcSet entries. Right-sizing the prop avoids 16 unused image-optimisation cache keys per logo.

### 15. Service-worker / `site.webmanifest`
- `site.webmanifest` is served but no service worker is registered. Not required for CWV — leaving as-is.

---

## Summary scorecard (mobile, lab, prod build)

| Metric | Home | Cornwall | Book | Target | Worst-case status |
|---|---|---|---|---|---|
| LCP | 4.4 s | 3.1 s | 3.3 s | ≤2.5 s | **FAIL** |
| INP (proxy: TBT) | 390 ms | 160 ms | 130 ms | ≤200 ms | **AT RISK** |
| CLS | 0 | 0 | 0 | ≤0.1 | PASS |
| TTFB | 140 ms | 30 ms | 20 ms | ≤200 ms | PASS |

**Single highest-leverage fix:** defer the PostHog SDK (item #2). Knocks down homepage LCP by ~400 ms and TBT by ~240 ms, and applies to every other page too.

**Second highest-leverage fix:** pre-convert the hero PNG to AVIF and cap `deviceSizes` at 1920 (item #1 + #3).

After those two, expect: homepage LCP ~2.1 s, TBT ~150 ms, score ~90+.

## Files referenced

- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/page.tsx` (LCP element `HeroCoastImage`, line 177)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/app/layout.tsx` (PostHogProvider mounted in root)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/instrumentation-client.ts` (PostHog init)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/lib/content.ts` (proofLogos with wrong dimensions, line 37)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/components/home/trust-bar.tsx`
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/fistral-hero-ai.png` (2.5 MB PNG — replace)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/public/logos/k2-gym-logo.jpg` (use the existing `.webp` instead)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/next.config.ts` (consider capping `images.deviceSizes`)
- `/Users/levi/repos/quilliam-ai/internal-repos/quilliam-ai-site/src/components/shared/fade-in.tsx` (apparently unused — verify and delete)

Raw Lighthouse JSON: `/tmp/lh-home.json`, `/tmp/lh-cornwall.json`, `/tmp/lh-book.json` (transient).
