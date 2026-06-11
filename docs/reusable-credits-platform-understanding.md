# Reusable Credits Platform Understanding

FashionDesign is an external AI application that integrates with `reusable-credits-platform`.

## Reusable Platform Owns

- `users`, `tenants`, and `tenant_members` identities used by the credits platform
- `credit_accounts` with generated `available_balance`
- `applications` and `application_functions`
- `billing_tasks`, `billing_locks`, and `credit_transactions`
- `recharge_products`, `payment_orders`, and `payment_callbacks`
- `idempotency_keys`
- agent approval, relation, commission, and platform admin tables

The reusable service uses MySQL, but the TypeScript query layer accepts PostgreSQL-style `$1`, simple `returning`, and some `on conflict` clauses through a compatibility adapter in `src/db/pool.ts`.

## FashionDesign Owns

- Product/business users and enterprises
- Plans, subscriptions, and Fashion-specific pricing rules
- AI models, scenes, generation templates
- Assets, folders, projects, generation tasks, attempts, provider records, and task events
- Delivery requests, notifications, outbox events, and operation audit logs

## Shared Contract

FashionDesign stores external reusable IDs as `BIGINT`:

- `users.credits_platform_user_id`
- `users.credit_account_id`
- `enterprises.credits_platform_tenant_id`
- `enterprises.credit_account_id`
- `task_quotes.credit_account_id`
- `generation_tasks.credit_account_id`
- `generation_tasks.billing_task_id`
- `payment_order_snapshots.credits_platform_payment_order_id`

No database-level foreign keys are created between FashionDesign and reusable credits tables.

## Billing Flow

FashionDesign should register reusable application code `fashion-design`.

For each generation task:

1. Resolve the FashionDesign pricing rule and reusable function code.
2. Save a `task_quotes` row with the estimated credit snapshot.
3. Call reusable `POST /billing/estimate`.
4. Call reusable `POST /billing/freeze`.
5. Save the returned `billingTaskId` to `generation_tasks.billing_task_id`.
6. On AI success, call reusable `POST /billing/settle`.
7. On AI failure/cancel, call reusable `POST /billing/refund`.
8. Update `generation_tasks.billing_status`, `estimated_credits`, and `settled_credits`.

