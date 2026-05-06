# GitHub Pages CI Contract

This repository deploys static output to GitHub Pages from the `main` branch using `.github/workflows/deploy.yml`.

## Frontend Build Contract

- Build command: `pnpm --filter @homepage/web build`
- Required output directory: `apps/web/out`
- Required output file: `apps/web/out/index.html`
- Production base path source: `NEXT_PUBLIC_BASE_PATH=/${{ github.event.repository.name }}`

## Failure Diagnostics

The workflow fails early if static export artifacts are missing:

- `apps/web/out` must exist
- `apps/web/out/index.html` must exist

When this validation fails, logs clearly indicate whether failure came from:

- dependency/install/build failure
- static export path mismatch
- Pages upload/deploy phase
