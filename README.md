# Portfolio — Ridwan Bukola Isiaq

Personal portfolio of **Ridwan Bukola Isiaq**, Frontend Software Engineer. A single-page [Next.js](https://nextjs.org/) (App Router) site presenting an overview, work experience, and selected projects, plus a standalone résumé page.

🔗 **Live:** [r-b-isiaq.vercel.app](https://r-b-isiaq.vercel.app/)

---

## Tech Stack

- **Framework:** Next.js 13 (App Router) · React 18 · TypeScript
- **Styling:** SCSS Modules
- **Testing:** Jest · React Testing Library
- **Tooling:** ESLint · Prettier · Husky + lint-staged
- **Integrations:** EmailJS (contact form) · Google Analytics
- **Deployment:** Vercel · GitHub Actions CI

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the dev server                          |
| `npm run build`    | Production build                              |
| `npm run lint`     | `next lint` + TypeScript type-check (CI gate) |
| `npm run testing`  | Run the test suite once                       |
| `npm test`         | Run tests in watch mode                       |
| `npm run coverage` | Test coverage report                          |
| `npm run format`   | Lint-fix, test, then format with Prettier     |

---

## Project Structure

Each section is a self-contained component under `components/<Name>/`:

- `<Name>.tsx` (or `index.tsx`) — the component
- `<Name>.module.scss` — scoped styles
- `constants.ts` — static content **and** a `TestId` object

The home page (`app/page.tsx`) composes the sections: **Hero → Roles → About → Experience → Projects → Contact**, with a separate `/resume` route. Content is static and content-driven — projects live in `components/Projects/constants.ts`, shared types in `interfaces/`.

Tests mirror the component tree under `__tests__/` and import the same `TestId` constants rather than hardcoding selectors.

---

## CI

Every push and pull request to `main` / `dev` runs lint, type-check, tests, and a production build via [GitHub Actions](.github/workflows/ci.yml).
