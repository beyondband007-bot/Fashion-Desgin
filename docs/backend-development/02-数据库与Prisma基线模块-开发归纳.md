# 数据库与 Prisma 基线模块开发归纳

## 1. 本次开发目标

本次开发目标是在后端基础框架模块之上，继续落地数据库基线：

- 建立双库 schema 存放结构
- 固化第一批核心表
- 补充环境变量模板

## 2. 本次实际完成内容

### 2.1 新增环境变量模板

新增文件：

- `backend/.env.example`

当前包含：

- 业务服务端口
- 积分服务端口
- 业务库连接串
- 积分库连接串
- Redis 连接串

### 2.2 新增 Prisma 目录

新增目录：

- `backend/prisma/biz`
- `backend/prisma/ledger`

并新增：

- `backend/prisma/README.md`

### 2.3 新增业务库 schema 基线

新增文件：

- `backend/prisma/biz/schema.prisma`

当前已落地第一批业务核心表：

- `users`
- `auth_sessions`
- `verification_codes`
- `assets`
- `projects`
- `task_quotes`
- `generation_tasks`
- `task_inputs`
- `task_outputs`
- `task_events`

### 2.4 新增积分库 schema 基线

新增文件：

- `backend/prisma/ledger/schema.prisma`

当前已落地第一批积分核心表：

- `credit_accounts`
- `billing_tasks`
- `credit_transactions`
- `idempotency_keys`

### 2.5 同步落地多模块任务字段

在 `generation_tasks` 中同步纳入：

- `module`
- `scene`
- `task_type`
- `project_id`
- `batch_id`
- `source_page`
- `version`

这一步已经把多模块实时同步规范里的核心字段正式放进 schema。

### 2.6 新增模块文档

新增：

- 技术方案文档
- 本开发归纳文档

## 3. 当前状态判断

当前后端已经进入“有框架、有 schema 基线”的阶段，不再只是目录占位。

但当前仍然处于：

- schema 已定义
- migration 尚未执行
- Prisma client 尚未生成
- 服务层与 repository 尚未实现

## 4. 为什么当前不直接做 migration

当前没有直接推进 migration，原因是：

- 仓库尚未正式接入 Prisma 依赖
- 当前 shell 环境的 Node 调用前提不稳定
- 这一步的目标是先固定 schema，而不是强行完成工具链安装

也就是说，这次开发优先解决的是“模型先定下来”，而不是“现在就把迁移跑起来”。

## 5. 当前已知限制

- 还没有 Prisma 依赖与生成客户端
- 还没有真实数据库连通校验
- 业务库中尚未覆盖全部表
- 积分库中尚未覆盖 `credit_grants`、`billing_locks` 等后续表

## 6. 下一步建议

本模块完成后，下一步建议开发：

- 统一 DTO 与枚举模块

原因：

- 当前 schema 字段已经基本成型
- 下一步应先把 HTTP 与 WebSocket 的任务字段模型定下来
- 这样之后再做最小任务主链路时，不会出现接口层字段返工

## 7. 本次开发结论

这次开发完成的是“数据库与 Prisma 基线模块”。它把双库 schema 和第一批核心表正式放进了仓库，为后续 DTO、任务主链路和实时同步开发提供了真实的数据基础。

