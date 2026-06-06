# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio for Isiaq Ridwan Bukola, a single-page Next.js 13 (App Router) site. The home page (`app/page.tsx`) is a vertical stack of section components (Hero → Roles → About → Projects → Contact), plus a separate `/resume` route.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — `next lint` + `tsc --noEmit` (run this before committing; it's the CI gate)
- `npm run check-types` — TypeScript type-check only
- `npm run testing` — run Jest once (CI-style, no watch)
- `npm test` — Jest in watch mode
- `npm run test:ci` / `npm run coverage` — CI run / coverage report
- Run a single test file: `npx jest __tests__/components/Projects/Projects.test.tsx`
- Filter by test name: `npx jest -t "shows all my projects"`

`npm run format` runs lint --fix, tests, then Prettier. A Husky pre-commit hook + lint-staged runs eslint, prettier, and related tests on staged files.

## Architecture & Conventions

**Component folder pattern** — each UI section lives in `components/<Name>/` and follows a consistent layout:

- `<Name>.tsx` (or `index.tsx`) — the component
- `<Name>.module.scss` — scoped SCSS module (global styles in `app/globals.scss`; Resume uses a plain `.scss`)
- `constants.ts` — static content (project lists, nav links, role text) **and** a `TestId` object

**TestId convention** — every testable element gets a `data-testid` sourced from the `TestId` const in the component's `constants.ts`. Tests in `__tests__/` (mirroring the `components/` tree) import that same `TestId` rather than hardcoding strings. Follow this when adding components or tests.

**Server vs client components** — App Router defaults to server components. Add `'use client'` only where interactivity is needed (e.g. `Contact` uses form state + EmailJS, `Projects` uses a filter state). Keep section components server-rendered unless they need hooks.

**Data is static and content-driven** — there is no backend or CMS. To add/edit a project, edit `projectTimeline` in `components/Projects/constants.ts`; images live in `public/`. Projects are typed `'client' | 'personal' | 'all'` and filtered by tab. Shared types live in `interfaces/index.ts`.

**Path alias** — `@/*` maps to the repo root (e.g. `@/components/...`, `@/interfaces`).

**Third-party integrations:**

- Contact form posts via EmailJS (`@emailjs/browser`) with service/template/public keys hardcoded in `components/Contact/Contact.tsx`.
- Google Analytics (gtag) is injected via `next/script` in `app/layout.tsx`.

## Formatting

Prettier enforces: single quotes, semicolons, trailing commas (all), 2-space tabs, 80-char width. ESLint extends `next/core-web-vitals` + `@typescript-eslint/recommended`, with `testing-library/react` rules applied only to test files.
