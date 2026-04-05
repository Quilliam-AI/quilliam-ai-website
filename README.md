```
                 _ _ _ _                     _ _       _ _        _
   __ _ _  _ _ _| | (_) __ _ _ __    __| (_) __ _ (_) |_ __ _| |
  / _` | || | | | | | / _` | '  \  / _` | / _` || |  _/ _` | |
  \__, |\_,_|_|_|_|_|_\__,_|_|_|_| \__,_|_\__, ||_|\__\__,_|_|
     |_|                                    |___/
```

<p align="center">
  <strong>AI automation agency for UK small businesses.</strong><br>
  <sub>Based in Cornwall. Serving businesses across the UK.</sub>
</p>

<p align="center">
  <a href="https://quilliamdigital.com">quilliamdigital.com</a>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
  <a href="https://quilliamdigital.com/book">Book a Free AI Audit</a>
</p>

---

## The Stack

```
Next.js 16 canary    React 19.2    TypeScript strict    Tailwind CSS 4
shadcn/ui            framer-motion Resend               Bun
```

| What | How |
|---|---|
| Framework | Next.js 16.2.1-canary.12 (App Router, Turbopack, RSC-first) |
| Rendering | 100% static prerender -- zero serverless functions at the edge |
| Styling | Tailwind CSS 4 via `@tailwindcss/postcss` -- config in `globals.css`, no `tailwind.config` |
| Colours | oklch colour space, stone-950 dark mode, emerald-600 accent |
| Components | shadcn/ui base-nova + custom composable service page primitives |
| Animation | framer-motion contained to a single `<FadeIn>` wrapper. Respects `prefers-reduced-motion` |
| Forms | Server actions + Resend. Dynamic import so builds never fail without `RESEND_API_KEY` |
| Fonts | Geist Sans + Geist Mono via `next/font/google` (zero CLS) |
| SEO | Programmatic sitemap, robots.txt, dynamic OG images, 10+ JSON-LD schema types |
| AI Crawlers | `llms.txt` + `llms-full.txt`, allows GPTBot/ClaudeBot/PerplexityBot, blocks training scrapers |
| Security | HSTS, CSP, X-Frame-Options DENY, Permissions-Policy, no `X-Powered-By` |

## Architecture at a Glance

```
src/
 app/
  layout.tsx ................ Root layout, fonts, metadata, JSON-LD graph
  page.tsx .................. Homepage (assembles 8 section components)
  globals.css ............... Tailwind 4 @theme inline config + oklch vars
  error.tsx ................. Global error boundary
  opengraph-image.tsx ....... Dynamic OG image via ImageResponse
  sitemap.ts ................ Programmatic sitemap
  robots.ts ................. Programmatic robots.txt
  book/page.tsx ............. Booking form (lead capture)
  privacy/page.tsx .......... Privacy policy
  terms/page.tsx ............ Terms of service
  services/
   ai-training/page.tsx
   ai-automation/page.tsx
   digital-services/page.tsx

 components/
  book/ ..................... BookingForm (client) + server action
  home/ ..................... 7 homepage sections (mostly RSC)
  layout/ ................... Nav, Footer, StickyCta, WhatsAppButton
  services/shared.tsx ....... Composable service page primitives
  shared/ ................... FadeIn, PatternOverlay, BreadcrumbJsonLd, CTA, LegalLayout
  ui/button.tsx ............. shadcn Button (cva variants)

 lib/
  content.ts ................ Single source of truth for ALL copy + config
  utils.ts .................. cn() helper
```

## By the Numbers

```
Routes ............... 7 pages, all statically prerendered
Components ........... 19 total (14 server, 5 client)
Source lines ......... ~4,700 across 37 files
Client components .... Nav, FadeIn, BookingForm, StickyCta, WhatsAppButton, error.tsx
Server actions ....... 1 (booking-action.ts)
JSON-LD schemas ...... ProfessionalService, Organization, Person, WebSite,
                       Service, Offer, FAQPage, BreadcrumbList, GeoCoordinates,
                       OpeningHoursSpecification, ImageObject, PostalAddress, Country
Build time ........... ~3 seconds (Turbopack)
External runtime deps  0 API calls at build time (Resend is runtime-only)
```

## Quick Start

```bash
# Clone
git clone git@github.com-personal:Levy787/quilliam-digital.git
cd quilliam-digital

# Install
bun install

# Dev server (http://localhost:3000)
bun dev

# Production build
bun run build

# Lint
bun run lint
```

### Environment

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Runtime only | Powers booking form email delivery. Build succeeds without it. |

## Design System

The entire site is dark-mode-only (stone-950 background) with a single light-mode exception: the footer (stone-50).

```
Background     stone-950  #0c0a09     Primary dark bg
Surface        stone-900  #1c1917     Cards, form fields, elevated surfaces
Accent         emerald-600 #059669    Buttons, glows, primary actions
Text/Icons     emerald-400            Labels, icons, links on dark
Headings       white                  All headings
Body           stone-400              Paragraph text
Labels         stone-500              Captions, secondary text
Placeholders   stone-600              Form placeholders
```

**Typography:** `tracking-tighter` on all headings is a core brand identity trait. Geist Mono for stats/numbers. Body text is always `leading-relaxed` and width-constrained (`max-w-[56ch]` or `max-w-[48ch]`).

**Buttons:** Rounded pills with emerald glow -- `rounded-full h-12 px-8 shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]`

**Cards:** `rounded-2xl bg-stone-900 border border-stone-800/60` with hover states

**Atmospheric glows:** `bg-emerald-500/[0.07] blur-[150px]` circles positioned absolutely

**Pattern overlays:** Three SVG patterns (Circuit, DotGrid, NodeNetwork) used as section decorations

## Content Architecture

**All copy lives in one file:** `src/lib/content.ts`

Change the business name, phone number, email, services, FAQs, or navigation there and it propagates to every component, schema node, WhatsApp link, and OG tag site-wide.

**Composable service pages** are built from shared primitives in `src/components/services/shared.tsx`:
- `ServiceHero` -- hero section with badge, H1, description, CTAs, trust badges
- `ProcessSteps` -- numbered step cards
- `ServiceFaqSection` -- FAQ accordions with `<details>/<summary>`
- `OtherServicesSection` -- cross-links to other services
- `ServiceCta` -- bottom CTA with atmospheric glow
- `ServiceJsonLd` -- Service + Offer + FAQPage schema

## SEO & Structured Data

The site implements a connected JSON-LD knowledge graph:

```
layout.tsx (root)
 +-- ProfessionalService + Organization  (@id: #organization)
 +-- Person / Founder                    (@id: #founder)
 +-- WebSite                             (@id: #website)

page.tsx (homepage)
 +-- Service x3 (one per service)        (@id: /services/{slug}#service)
 +-- FAQPage                             (@id: #faq)

services/*/page.tsx
 +-- Service + Offer                     (@id: /services/{slug}#service)
 +-- FAQPage
 +-- BreadcrumbList

book/, privacy/, terms/
 +-- BreadcrumbList
```

Every entity cross-references `#organization`. No duplicate nodes.

**AI crawler readiness:** `public/llms.txt` (short summary) and `public/llms-full.txt` (expanded context with FAQs, case study data, founder bio). `robots.ts` explicitly blocks training-only scrapers (CCBot, Google-Extended, Bytespider) while allowing search-connected AI bots.

## Security

All responses include:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy-Report-Only: default-src 'self'; ...
```

`poweredByHeader: false`. CSP will move to enforcing after placeholder images are replaced with real photography.

## Conventions for Contributors

- **RSC by default.** Only add `"use client"` when you absolutely need hooks, event handlers, or browser APIs.
- **British English.** "optimise", "colour", "organise", pound signs, UK conventions.
- **No jargon.** Write like you're explaining to a small business owner, not a developer.
- **"AI Audit"** is always capitalised. Never "sprint", "consultation", or "discovery call".
- **Every page** must export `metadata` with title, description, canonical, OG, Twitter, and `openGraph.images: ["/opengraph-image"]`.
- **New pages** must be added to `sitemap.ts`, nav/footer if user-facing, and `llms.txt`/`llms-full.txt`.
- **Do not add animation libraries.** Everything goes through `<FadeIn>`. The migration point is one file: `src/components/shared/fade-in.tsx`.
- **Do not weaken security headers.** If you add external resources, update the CSP.

See `AGENTS.md` for the complete agent-oriented specification.

---

<p align="center">
  <sub>Built with mass amounts of tea and mass amounts of AI in Cornwall, UK.</sub>
</p>
