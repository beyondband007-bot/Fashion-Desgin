# FashionDesign Database

This folder contains the FashionDesign business database schema.

## Boundary

FashionDesign is an external AI application of `reusable-credits-platform`.

The FashionDesign database stores:

- users, enterprises, subscriptions, assets, projects, generation tasks, delivery requests, notifications, and audit/outbox data
- `credits_platform_*` IDs, `credit_account_id`, `billing_task_id`, and billing result snapshots needed for reconciliation
- Fashion-specific pricing rules that map each task type to a reusable credits function code

The FashionDesign database does not store:

- credit balances
- credit grants/batches
- billing locks
- credit transactions
- reusable credits idempotency rows
- reusable credits payment callback source of truth

Those live in `reusable-credits-platform`.

## Migration

Apply the initial business schema with MySQL 8:

```sh
mysql -u <user> -p < database/migrations/000001_create_fashion_content_platform.sql
```

The migration creates the `fashion_content_platform` database if it does not already exist.

## Reusable Credits Integration

Before FashionDesign can freeze/settle credits, register it in the reusable credits platform:

```sh
cd reusable-credits-platform
npm run db:migrate
npm run seed:fashion-design
```

Runtime billing flow for FashionDesign tasks:

1. Create a FashionDesign `task_quotes` row from local pricing rules.
2. Call `POST /billing/estimate` with `applicationCode = "fashion-design"` and the mapped `functionCode`.
3. Call `POST /billing/freeze` before submitting the AI job.
4. Save returned reusable `billingTaskId` into `generation_tasks.billing_task_id`.
5. Call `POST /billing/settle` on success or `POST /billing/refund` on failure.
6. Update FashionDesign `billing_status` and credit snapshots from the reusable response.

