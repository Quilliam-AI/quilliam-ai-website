<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Quilliam Digital — Agent Guidelines

## What This Is

Marketing website for Quilliam Digital, an AI automation agency serving UK small businesses (1-50 employees). Founded by Levi Quilliam, based in Cornwall, working UK-wide. Three services: AI Training, AI Automation, Digital Services. Lead funnel is a free AI Audit booked via form or WhatsApp.

Production URL: `https://quilliamdigital.com`

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 canary (App Router, RSC by default) |
| React | 19.2 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 via `@tailwindcss/postcss` — no `tailwind.config` file, config lives in `globals.css` `@theme inline` block |
| Components | shadcn/ui (base-nova style, RSC-aware) via `components.json` |
| Icons | lucide-react |
| Animation | framer-motion (used only in `FadeIn` wrapper) |
| Email | Resend (server action, dynamic import) |
| Fonts | Geist Sans + Geist Mono via `next/font/google` |
| Package Manager | Bun |
| Linting | ESLint 9 flat config with next/core-web-vitals + next/typescript |

### Commands

```
bun dev          # Local dev server
bun run build    # Production build
bun run lint     # ESLint
```

---

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout: fonts, metadata, JSON-LD graph, Nav/Footer/WhatsApp/StickyCta
    page.tsx                # Homepage: assembles section components + Service/FAQ JSON-LD
    globals.css             # Tailwind 4 config, CSS vars (oklch), brand colour overrides
    error.tsx               # Global error boundary (client component)
    opengraph-image.tsx     # Dynamic OG image generation (ImageResponse)
    sitemap.ts              # Programmatic sitemap
    robots.ts               # Programmatic robots.txt (blocks training scrapers, allows search AI)
    book/page.tsx           # Booking form page
    privacy/page.tsx        # Privacy policy (legal layout)
    terms/page.tsx          # Terms of service (legal layout)
    services/
      ai-training/page.tsx
      ai-automation/page.tsx
      digital-services/page.tsx
  components/
    book/
      booking-form.tsx      # Client component — form with state
      booking-action.ts     # Server action — validates + sends via Resend
    home/                   # Homepage section components (hero, trust-bar, sprint-process, services-cards, industry-tabs, about-preview, faq-section)
    layout/                 # Nav (client), Footer (server), StickyCta (client), WhatsAppButton (client)
    services/shared.tsx     # Reusable service page building blocks (Hero, ProcessSteps, FAQ, OtherServices, CTA, JSON-LD)
    shared/                 # Cross-cutting: FadeIn, PatternOverlay, BreadcrumbJsonLd, CtaSection, LegalLayout
    ui/button.tsx           # shadcn Button (cva variants)
  lib/
    content.ts              # All site copy, config, navigation, service data — single source of truth
    utils.ts                # cn() helper (clsx + tailwind-merge)
public/
    llms.txt                # Short AI-crawler summary
    llms-full.txt           # Extended AI-crawler context
    logo-white.svg          # Nav logo (dark backgrounds)
    logo-dark.svg           # Footer logo (light backgrounds)
    og-logo.png             # Used by opengraph-image.tsx
    site.webmanifest        # PWA manifest
```

---

## Architecture Decisions

### Server Components First
Default to RSC. Only add `"use client"` when the component uses hooks, event handlers, or browser APIs. Current client components: `Nav`, `FadeIn`, `BookingForm`, `StickyCta`, `WhatsAppButton`, `error.tsx`. Everything else is a server component — keep it that way.

### Single Content File
All copy, config, navigation, service definitions, FAQ data, and contact details live in `src/lib/content.ts`. Import `siteConfig` for any URL, email, phone, or business name reference. Never hardcode these values in components.

### Metadata Pattern
- Root `layout.tsx` sets `metadataBase`, template title (`%s | Quilliam Digital`), and default OG/Twitter tags
- Subpages export their own `metadata` object with relative `canonical` and `openGraph.url` — `metadataBase` resolves them to absolute URLs automatically
- Every subpage must include `openGraph.images: ["/opengraph-image"]` since Next.js metadata doesn't deep-merge from layout

### JSON-LD Schema Strategy
- Root layout: `ProfessionalService` + `Organization` (merged), `Person` (founder), `WebSite` — all connected via `@id` references
- Homepage: `Service` nodes for each service + `FAQPage`
- Service pages: own `Service` with `Offer` + `FAQPage` via `ServiceJsonLd` component
- Subpages: `BreadcrumbList` via `BreadcrumbJsonLd` component
- All schema uses `siteConfig.url` for base URLs and `@id` cross-references

### Composable Service Pages
Service pages are built from shared building blocks in `src/components/services/shared.tsx`: `ServiceHero`, `ProcessSteps`, `ServiceFaqSection`, `OtherServicesSection`, `ServiceCta`, `ServiceJsonLd`. Each service page composes these with page-specific data (inline arrays). Follow this pattern for new service pages.

### Server Actions for Forms
Booking form uses a server action (`booking-action.ts`) with `"use server"`. Resend is dynamically imported to avoid build failures when `RESEND_API_KEY` is unset. Form validation happens server-side. HTML in the email body is escaped via `escapeHtml()`.

---

## Design System

### Colour Palette
- **Background:** `stone-950` (#0c0a09) — primary dark bg for all sections
- **Surface:** `stone-900` (#1c1917) — cards, form fields, elevated surfaces
- **Accent:** `emerald-600` (#059669) primary, `emerald-400` for text/icons on dark, `emerald-500` for glows
- **Text:** `white` for headings, `stone-400` for body, `stone-500` for labels/captions, `stone-600` for placeholders
- **Footer is light:** `stone-50` bg with `stone-500`/`stone-900` text — the only light section on the site
- CSS vars use oklch colour space (see `globals.css :root`)

### Typography
- Font: Geist Sans (`--font-geist-sans`) for all text, Geist Mono (`--font-geist-mono`) for stats/numbers
- Headings: `font-semibold tracking-tighter` — tight tracking is a core identity trait
- Section labels: `text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400`
- Body: `text-sm` or `text-base`, always `leading-relaxed`, max-width constrained with `max-w-[56ch]` or `max-w-[48ch]`

### Layout
- Max container width: `max-w-[1400px] mx-auto px-6`
- Section padding: `py-20 md:py-28` (standard) or `py-24 md:py-32` (CTA sections)
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for cards, `lg:grid-cols-2` for hero/form splits
- Card radius: `rounded-2xl`
- Section dividers: `h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent` at top of sections

### UI Patterns
- **Buttons:** Rounded pills (`rounded-full h-12 px-8`) — primary is `bg-emerald-600` with emerald glow shadow `shadow-[0_4px_20px_-4px_rgba(5,150,105,0.5)]`, outline uses `border-stone-600`
- **Cards:** `rounded-2xl bg-stone-900 border border-stone-800/60` with `hover:border-stone-700` or `hover:border-emerald-800/60`
- **Glass nav:** Floating pill nav with `backdrop-blur-2xl`, scrolled state changes opacity/border
- **Pattern overlays:** SVG patterns (`CircuitPattern`, `DotGridPattern`, `NodeNetworkPattern`) as `absolute inset-0 pointer-events-none` decorations
- **Atmospheric glows:** Large `bg-emerald-500/[0.07]` circles with `blur-[150px]` — used in hero and CTA sections
- **Badges:** `rounded-full bg-emerald-900/40 px-4 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-800/40`
- **FAQ accordions:** Native `<details>/<summary>` with `+` icon that rotates 45deg on open

### Animation
All scroll-triggered animations use the `FadeIn` wrapper (framer-motion). Directions: `up` (default), `down`, `left`, `right`. Respects `prefers-reduced-motion`. Do not add new animation libraries. If framer-motion is replaced in future, the migration point is `src/components/shared/fade-in.tsx` only.

---

## Copy & Content Rules

### Voice
- Direct, no-bullshit, founder-led tone. Write as if Levi is speaking to a local business owner over coffee.
- Short sentences. Plain English. No marketing jargon ("leverage", "synergy", "cutting-edge").
- Use contractions naturally. Use "we" for the business, "you" for the customer.
- British English spelling and conventions: "optimise", "colour", "organise", "£", "UK-wide".

### Key Phrases (use consistently)
- "AI Audit" (not "AI audit", "sprint", "consultation", or "discovery call")
- "small businesses" (not "SMEs", "SMBs", or "enterprises")
- "save time" and "win more customers" (core value props)
- "No jargon", "No commitment", "No spam" (trust phrases)
- "Based in Cornwall. Serving businesses across the UK." (geographic positioning)

### Stats (verified, use as-is)
- "10+ hours saved per week" — K2 Gym verified
- "Under 2 minutes response time" — K2 Gym verified
- "From £500" — automation entry price
- "1-50 employees" — target business size
- Do not fabricate statistics. If citing an unattributed stat, label it clearly.

### CTAs
- Primary: "Book Your Free AI Audit" (links to `/book`)
- Secondary: "Message on WhatsApp" (links to `wa.me` with pre-filled message via `getWhatsAppUrl()`)
- Every major section ends with a CTA. Every page has at least one path to `/book`.

---

## SEO Requirements

### On-Page
- Every page needs: unique `<title>`, `<meta description>`, canonical URL, OG tags, Twitter tags, and `openGraph.images`
- H1 must contain the primary keyword for the page. One H1 per page.
- Include FAQ schema on any page with FAQ content — use `FAQPage` in JSON-LD `@graph`
- Internal link between all three service pages via `OtherServicesSection`
- New pages must be added to `sitemap.ts`

### Structured Data
- Follow the existing `@id` reference pattern. All entities reference `#organization`.
- New service pages need `ServiceJsonLd` + `BreadcrumbJsonLd`
- Do not create duplicate entity nodes — extend the existing graph

### AI Crawler Readiness
- Update `public/llms.txt` and `public/llms-full.txt` when adding new pages or services
- Content should include citable definition paragraphs (100-170 words) for AI extraction
- `robots.ts` allows search-connected AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and blocks training-only scrapers (CCBot, Google-Extended, Bytespider)

### Images
- Placeholder images currently use `picsum.photos` — these must be replaced with real photography before launch (see TODO.md #1)
- Use `next/image` with appropriate `sizes` prop. Hero: `sizes="50vw"`, full-width: `sizes="100vw"`, cards: `sizes="(max-width: 768px) 100vw, 33vw"`
- All images need descriptive alt text

---

## Security Headers

Configured in `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Content-Security-Policy-Report-Only` (will move to enforcing after placeholder images are replaced)
- `poweredByHeader: false`

Do not weaken these headers. When adding external resources (scripts, fonts, images), update the CSP accordingly.

---

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Runtime only | Booking form email delivery. Build succeeds without it (dynamic import). |

---

## Common Tasks

### Adding a new page
1. Create route in `src/app/{route}/page.tsx`
2. Export `metadata` with title, description, canonical, OG, Twitter, and `openGraph.images: ["/opengraph-image"]`
3. Add `BreadcrumbJsonLd` component
4. Add entry to `sitemap.ts`
5. Add to nav/footer if user-facing
6. Update `llms.txt` and `llms-full.txt`

### Adding a new service page
1. Create `src/app/services/{slug}/page.tsx`
2. Use shared components from `src/components/services/shared.tsx`
3. Add `ServiceJsonLd` + `BreadcrumbJsonLd`
4. Add entry to `serviceLinks` in `content.ts`
5. Add entry to `sitemap.ts`
6. Update `llms.txt` and `llms-full.txt`

### Modifying copy or business info
All in `src/lib/content.ts`. Change it there and it propagates everywhere — nav, footer, schema, WhatsApp links, OG tags.

### Adding a new homepage section
1. Create component in `src/components/home/`
2. RSC by default. Only add `"use client"` if it uses hooks/handlers.
3. Import and place in `src/app/page.tsx` in section order
4. Use `FadeIn` for scroll animation
5. Follow existing section structure: `<section id="name" className="relative py-20 md:py-28 bg-stone-950 overflow-hidden">`
