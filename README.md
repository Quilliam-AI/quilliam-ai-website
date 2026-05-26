# Quilliam AI

Practical AI consulting, workflow builds, and team training for UK businesses.

Quilliam AI is a founder-led Cornwall AI implementation company helping UK businesses make sense of AI, build useful AI workflows, and train their teams to use them properly.

Production: https://quilliam.ai

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 canary, App Router |
| React | 19.2 |
| Language | TypeScript strict |
| Styling | Tailwind CSS 4 via `@tailwindcss/postcss` |
| Components | shadcn/ui base, local components |
| Icons | lucide-react |
| Analytics | PostHog EU via reverse proxy |
| Email | Resend server action |
| Package manager | Bun |

## Commands

```bash
bun dev
bun run lint
bun run build
```

## Current Positioning

The service offer is:

- AI Opportunity Analysis: plain-English advice on where AI can help, where it cannot, and what to do first.
- Team Training: practical staff training, playbooks, and clear rules for using AI at work.
- AI Implementation: repeated work redesigned into useful workflows with controls and handoff.

Primary CTA: `Book Free AI Opportunity` -> `/book?intent=opportunity`.

## Project Shape

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    book/page.tsx
    about/page.tsx
    contact/page.tsx
    service-areas/page.tsx
    ai-consultant-uk/page.tsx
    ai-automation-cornwall/page.tsx
    privacy/page.tsx
    terms/page.tsx
    opengraph-image.tsx
    sitemap.ts
    robots.ts
  components/
    book/
    layout/
    services/
    shared/
    ui/
  lib/
    content.ts
    analytics.ts
    create-lead-note.ts
    utils.ts
public/
  llms.txt
  llms-full.txt
  logos/
```

## Content Source

Most public copy and business configuration lives in `src/lib/content.ts`. Change contact details, navigation, services, FAQ copy, proof logos, and the core positioning there first.

## SEO And AI Crawler Files

- `src/app/sitemap.ts` lists public routes.
- `src/app/robots.ts` allows search-connected AI crawlers and blocks training-only scrapers.
- `public/llms.txt` and `public/llms-full.txt` summarise the company for AI retrieval.
- `src/app/opengraph-image.tsx` generates the branded social preview.

## Runtime Environment

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Runtime only | Sends booking form emails |
| `GITHUB_VAULT_TOKEN` | Optional runtime | Creates lead notes in the private Obsidian vault |
