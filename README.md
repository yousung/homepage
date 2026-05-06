# Homepage

Nx monorepo — Next.js frontend (static site).

## Local Setup

```bash
# Install dependencies
pnpm install

# Start the dev server (port 3000)
pnpm dev
```

## Environment Variables

Copy `.env.example` to `.env.local` in `apps/web/` before running locally:

```bash
cp .env.example apps/web/.env.local
```

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_CONTACT_EMAIL` | `support@lovizu.com` | Contact email shown on the site |

## Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
```

## Project Structure

```
homepage/
├── apps/
│   └── web/          # Next.js frontend
├── libs/
│   └── shared/       # Shared TypeScript types
├── docs/
│   └── api-contract.md
└── README.md
```
