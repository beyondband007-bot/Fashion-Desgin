# 数据库与 Prisma 基线模块技术方案

## 1. 模块目标

数据库与 Prisma 基线模块负责把前期文档中的数据模型真正落到后端工程结构中，为后续任务、认证、积分、实时、支付模块提供统一事实源。

本模块是“后端基础框架模块”之后的第二个开发模块。

## 2. 模块范围

本模块当前范围：

- 建立双库环境变量模板
- 建立 `backend/prisma/` 目录
- 建立业务库 schema 基线
- 建立积分库 schema 基线
- 固化第一批核心表

当前不包含：

- Prisma 依赖安装
- migration 产物生成
- 数据库真实连接测试
- Repository 或 Service 实现

## 3. 为什么先做基线

后续这些能力都依赖真实 schema：

- 任务 DTO
- 任务状态机
- WebSocket 事件模型
- 多模块任务分发
- 积分冻结与结算

如果 schema 不先落地，后面的接口和实时设计都会漂浮在文档层，无法稳定开发。

## 4. 双库结构

目录结构：

```text
backend/prisma/
  biz/
    schema.prisma
  ledger/
    schema.prisma
```

设计原则：

- 业务服务只面向业务库 schema
- 积分服务只面向积分库 schema
- 双库之间只保留逻辑引用，不使用跨库外键

## 5. 当前落地的核心表

业务库第一批：

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

积分库第一批：

- `credit_accounts`
- `billing_tasks`
- `credit_transactions`
- `idempotency_keys`

## 6. 关键增强字段

为了支持多模块并发任务同步，`generation_tasks` 与相关 DTO 对齐了这些关键字段：

- `module`
- `scene`
- `task_type`
- `project_id`
- `batch_id`
- `source_page`
- `version`

这一步必须现在就进入 schema，不能等 WebSocket 阶段再补。

## 7. 环境变量约定

新增：

- `BIZ_DATABASE_URL`
- `LEDGER_DATABASE_URL`
- `REDIS_URL`

并提供 `.env.example`，作为后续本地开发与部署的统一入口。

## 8. 当前实现策略

由于当前仓库还没有正式接入 Prisma 依赖，本模块先完成“schema 文件落仓”而不是“migration 执行完成”。

这是合理的，因为当前阶段的核心目标是：

- 把表和字段固定下来
- 让后续依赖安装后可直接接入
- 避免任务字段反复返工

## 9. 下一步衔接

本模块完成后，下一开发目标应进入：

- 统一 DTO 与枚举模块
- 或最小任务主链路模块

如果继续按最小开发闭环推进，优先建议先做：

- 统一 DTO 与枚举

## 10. 结论

数据库与 Prisma 基线模块不是“文档复制”，而是把双库设计真正放进代码仓库中。它完成后，后续任务链路和实时链路才有可靠的数据承载基础。

