# 数据库 migration 与真实连通验证模块技术方案

## 1. 模块目标

本模块的目标是把后端从“已经具备 Prisma client 与数据库持久化代码路径”推进到“工程上知道如何迁移数据库、如何验证数据库连通性、如何通过健康检查暴露数据库状态”。

## 2. 当前范围

本模块当前完成：

- Prisma migration 脚本
- Biz / Ledger 数据库连通检查脚本
- Biz API 数据库健康检查接口

当前不包含：

- 实际 migration 成功落库结果
- 真实线上数据库巡检体系
- Ledger 服务数据库健康接口

## 3. 当前新增能力

### 3.1 Migration 脚本

新增脚本：

- `prisma:migrate:biz`
- `prisma:migrate:ledger`
- `prisma:migrate`

作用：

- 为后续执行业务库与积分库迁移提供标准入口

### 3.2 连通性检查脚本

新增脚本：

- `db:check:biz`
- `db:check:ledger`
- `db:check`

对应脚本文件：

- `scripts/check-biz-db.cjs`
- `scripts/check-ledger-db.cjs`

作用：

- 在不启动服务的情况下快速验证数据库连通性

### 3.3 DB 健康检查接口

新增接口：

- `GET /health/db`

当前作用：

- 通过 `biz-api` 对业务库执行 `SELECT 1`
- 将数据库状态以标准 JSON 格式暴露出来

## 4. 当前设计原则

- migration 与运行时健康检查分开
- 本地脚本和服务内探活都要有
- 数据库连不通时返回 503，而不是伪装成业务成功

## 5. 当前限制

- 还没有实际执行 migration
- 尚未验证真实 MySQL 环境是否可连
- Ledger 服务端还未补 `/health/db`

## 6. 下一步衔接

本模块完成后，下一步建议优先进入：

- 真实 migration 执行与任务表写库验证

如果数据库环境准备好了，也可以同步推进：

- WebSocket 实时同步模块

但前提仍然是先确认数据库可写可读。

## 7. 结论

数据库 migration 与真实连通验证模块，把 Prisma 接入从“只有 client 和 repository”推进到了“有标准迁移入口、有探活脚本、有服务级 DB 健康检查”的阶段。这是进入联调前必须补齐的一层工程能力。

