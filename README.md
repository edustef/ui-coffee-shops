# Coffee Addicts UI

Web UI for the Coffee Addicts challenge — input coordinates, see all shops sorted by distance, top 3 highlighted.

## Tech Stack

React 19, TypeScript, Vite, Tailwind CSS 4, TanStack Query, Playwright

## Setup

```bash
npm install
npm run dev
```

App runs at http://localhost:5173

## Scripts

| Command            | What it does                  |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start dev server              |
| `npm run build`    | Type-check + production build |
| `npm run lint`     | Run ESLint                    |
| `npm run preview`  | Preview production build      |
| `npm run test:e2e` | Run Playwright E2E tests      |

## Playwright

Install browsers (first time only):

```bash
npx playwright install
```

Run tests:

```bash
npm run test:e2e
```

Tests live in `e2e/` and run against the dev server automatically.

## Project Structure

```
src/
  components/       # Domain components (ShopItem, ShopList)
    ui/             # Reusable primitives (Field)
  hooks/            # Custom hooks (useShops, useFilteredShops, useDebounce)
  lib/              # Pure functions — API client, distance calc, schemas
  App.tsx           # Main screen layout
  main.tsx          # Entry point
e2e/                # Playwright E2E tests
```
