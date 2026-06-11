# Backend Workspace

This directory contains the standalone backend workspace for the fashion content generation platform.

Current stage:

- bootstrap dual-service structure
- define shared TypeScript base config
- create the first foundation module
- expose the minimal task workflow

Services:

- `apps/biz-api`
- `apps/ledger-service`

Packages:

- `packages/shared-kernel`
- `packages/shared-types`

Database bootstrap:

1. Copy `backend/.env.example` to `backend/.env` and fill in real MySQL credentials.
2. Run `npm run prisma:generate`.
3. Run `npm run db:prepare` to push Biz / Ledger schema and bootstrap demo data.
4. Switch `TASK_REPOSITORY_DRIVER` to `prisma`.
5. Run `npm run db:verify:tasks` to verify quote, task, and event persistence.
6. Run `npm run build` and `npm run api:verify:tasks` to verify the HTTP task flow against real Prisma persistence.
