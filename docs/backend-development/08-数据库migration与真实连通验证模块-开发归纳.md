# 数据库 migration 与真实连通验证模块开发归纳

## 1. 本次开发目标

本次开发目标是补齐数据库工程层的可执行能力，让后端不仅“能写 Prisma 代码”，还“知道怎么迁移、怎么检查数据库是否可用”。

## 2. 本次实际完成内容

### 2.1 新增 migration 脚本

更新：

- `backend/package.json`

新增脚本：

- `prisma:migrate:biz`
- `prisma:migrate:ledger`
- `prisma:migrate`

### 2.2 新增数据库连通性检查脚本

新增：

- `backend/scripts/check-biz-db.cjs`
- `backend/scripts/check-ledger-db.cjs`

对应 npm scripts：

- `db:check:biz`
- `db:check:ledger`
- `db:check`

### 2.3 新增 biz-api 数据库健康检查能力

新增：

- `modules/system/services/db-health.service.ts`
- `modules/system/controllers/db-health.controller.ts`

并在路由中挂载：

- `GET /health/db`

### 2.4 工程意义

到这一步，后端已经具备：

- Prisma schema
- Prisma client
- 真实仓储代码
- migration 命令入口
- DB connectivity 检查脚本
- 服务级 DB 健康检查接口

## 3. 当前状态判断

当前系统已经从“开发结构到位”进一步推进到“工程操作路径到位”。

也就是说，接下来阻塞开发的将主要是：

- 真实数据库实例
- migration 执行结果
- 表存在性验证

而不再是后端仓库结构缺失。

## 4. 当前已知限制

- 当前尚未真的执行 migration
- `/health/db` 目前只覆盖 biz 数据库
- Ledger 服务的 DB 健康检查还没补

## 5. 下一步建议

下一步建议优先开发：

- 真实 migration 执行与任务表写库验证模块

如果数据库环境已经可用，后续再进入：

- WebSocket 实时同步模块

## 6. 本次开发结论

这次开发完成的是“数据库 migration 与真实连通验证模块”。它补齐了 Prisma 接入后非常关键但经常被忽略的一层工程能力，为后续真实数据库验证和任务联调做好了入口准备。

