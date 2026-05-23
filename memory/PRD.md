# Documatch.eu — Premium B2B Landing Page

## Problem statement
Single-page premium B2B lead-generation landing page for Documatch.eu (independent European GED/DMS comparator). Zero external redirects. Form posts to Formspree (info@documatch.eu). FR/ES/EN switcher + 9 sector tabs + glassmorphism form + AI section + testimonials + FAQ + legal modals + mobile sticky CTA.

## Architecture
- Stack: React 19 (single-component `App.js`, ~1100 lines incl. content + inline CSS)
- No backend used (pure frontend landing)
- Form integration: Formspree (`https://formspree.io/f/mpqndldg`)
- SEO: meta tags + canonical + OG + Twitter cards + schema.org Organization JSON-LD in `public/index.html`

## Implemented
- Sticky glass navbar (typographic branding only — no clickable logo, no external links)
- 3-language i18n (FR default / ES / EN) via LEX dictionary
- 9-sector dynamic content (BTP / Immo / Santé / Compta / Juridique / Industrie / RH / Retail / Transport)
- Hero with glassmorphism form card (4 fields + GDPR required + spinner + success/error states)
- HTML5 validation enforced (GDPR mandatory)
- Trust bar (4 stats), Why-us 4 cards, Ecosystem 4 cards
- AI dark section with animated orbs + scroll-to-form CTA
- 3 testimonials + 5-question FAQ accordion (single-open)
- Mobile sticky CTA bar (<640px)
- 3 legal modals (Conditions / Privacy / Mentions) — close via X or overlay
- Fully responsive (1920 → 375px)

## Testing
- Iteration 1: 11/12 PASS — fixed `noValidate` bug (GDPR now enforced)

## Next action items
- Add A/B testing variants for hero headline
- Add analytics (PostHog already loaded) event tracking on form submit, lang change, sector tab clicks
- Add server-side lead storage backup (currently Formspree-only)
