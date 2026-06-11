# Prisma Task Repository 模块技术方案

## 1. 模块目标

Prisma Task Repository 模块的目标，是为任务模块补齐真实数据库仓储实现的落点与切换结构。

这一模块当前不追求“数据库已经跑通”，而是优先解决：

- Prisma 仓储代码放在哪里
- 任务查询条件如何映射到数据库过滤
- 何时从内存仓储切换到 Prisma 仓储

## 2. 当前范围

当前已落地：

- `PrismaTaskRepository` 代码骨架
- 任务、报价、事件的数据库记录映射函数
- 查询过滤到数据库 where 输入的映射函数
- 仓储驱动选择开关

当前不包含：

- 真正的 Prisma Client 注入
- 真正的数据库 CRUD 执行
- migration 执行结果验证

## 3. 当前设计原则

- 默认运行链路继续使用 `MemoryTaskRepository`
- Prisma 仓储先完成结构入位，不立即切换为默认驱动
- 没有 Prisma Client 时，不伪造可用实现

## 4. 当前代码结构

新增：

- `repositories/prisma-task.repository.ts`

调整：

- `repositories/index.ts`
- `backend/.env.example`

## 5. 驱动选择策略

新增环境变量：

- `TASK_REPOSITORY_DRIVER`

当前约定：

- `memory`：默认值，当前实际可运行
- `prisma`：保留切换入口，但当前尚未真正接通

这样做的目的，是先把切换路径固化，而不是把切换时机写死在业务代码里。

## 6. 当前实现要点

### 6.1 PrismaTaskRepository

当前实现了：

- `saveQuote`
- `findQuoteById`
- `saveTask`
- `findTaskById`
- `listTasks`
- `appendEvent`
- `listEvents`

但这些方法当前都明确抛出：

- `PRISMA_TASK_REPOSITORY_NOT_WIRED`

这是一种显式失败设计，优于“假装已经接好数据库”。

### 6.2 映射函数

当前已补：

- `buildQuoteRecord`
- `buildTaskRecord`
- `buildTaskEventRecord`
- `buildTaskWhereInput`

这让下一步真正接 Prisma Client 时，可以直接把映射函数复用进去，而不需要重新拆字段。

## 7. 为什么这一步仍然值得先做

虽然当前没有真正连数据库，但这一步先完成有三个收益：

1. 把 Prisma 仓储与内存仓储切换边界固定下来。
2. 把任务查询过滤到数据库查询条件的映射提前收口。
3. 避免下一步接 Prisma 时一边接客户端、一边改业务结构。

## 8. 当前限制

- 仍然没有 Prisma 依赖
- 仍然没有生成 client
- `prisma` 驱动当前不可直接启用

## 9. 下一步衔接

本模块完成后，下一步最合理的是：

- Prisma 客户端与真实持久化接入模块

优先内容：

- 安装 Prisma 依赖
- 生成 client
- 将 `PrismaTaskRepository` 从占位实现改为真实实现
- 保留 `memory` 驱动用于本地测试

## 10. 结论

Prisma Task Repository 模块当前完成的是“持久化切换结构”，不是“数据库已接通”。它的价值在于让后续接真实 Prisma 时成为替换实现的问题，而不是重构架构的问题。

