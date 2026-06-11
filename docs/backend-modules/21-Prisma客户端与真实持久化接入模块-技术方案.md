# Prisma 客户端与真实持久化接入模块技术方案

## 1. 模块目标

本模块的目标是把前面已经搭好的 Prisma schema、仓储边界和任务主链路，真正接到可运行的 Prisma Client 上，让任务模块具备真实数据库持久化代码路径。

## 2. 当前范围

本模块当前完成：

- 安装 Prisma 6.x 和 `@prisma/client`
- 增加 Prisma client 生成脚本
- 生成 biz / ledger Prisma Client
- 将任务仓储接口切换为异步
- 将 `PrismaTaskRepository` 从占位实现改为真实 CRUD 骨架

当前未完成：

- 真实数据库 migration 执行
- 生产级 Repository 工厂
- 输入输出素材的联表持久化

## 3. 为什么选择 Prisma 6.x

最初安装 Prisma 7 时，schema 中标准的 datasource `url` 写法已经不兼容。为了不推翻当前已经落地的双库 schema 和开发节奏，本模块将 Prisma 固定到 6.16.1。

这能保证：

- 继续沿用标准 `schema.prisma`
- 继续使用当前生成方式
- 不为工具版本变化重写数据库基线

## 4. 当前实现内容

### 4.1 后端依赖

当前 backend 工作区已安装：

- `prisma@6.16.1`
- `@prisma/client@6.16.1`
- `typescript`
- `@types/node`

### 4.2 生成脚本

新增脚本：

- `prisma:generate:biz`
- `prisma:generate:ledger`
- `prisma:generate`

### 4.3 生成客户端

当前已生成：

- `backend/generated/biz-client`
- `backend/generated/ledger-client`

### 4.4 真实任务仓储

`PrismaTaskRepository` 当前已实现：

- 报价 upsert
- 报价查询
- 任务 upsert
- 任务详情查询
- 任务列表查询
- 任务事件写入
- 任务事件读取

### 4.5 Service 改造

当前任务 service 和 controller 已切换为异步调用仓储，后续再接数据库或远程账务服务时不需要再改同步模型。

## 5. 当前限制

- 仍未执行 migration
- 未校验数据库表是否已实际存在
- `TaskInput` / `TaskOutput` 尚未写库
- `creditAccountId` 等字段仍为占位值

## 6. 当前收益

完成本模块后，任务模块不再只是“结构上准备好接数据库”，而是已经拥有了真实数据库仓储代码路径。

后续缺的已经不再是架构，而只是：

- 数据库环境
- migration 落地
- 细节表补齐

## 7. 下一步衔接

本模块完成后，下一步最合理的是：

- 数据库 migration 与真实连通验证模块

如果数据库可用，再下一步可以进入：

- WebSocket 实时同步接入模块

## 8. 结论

Prisma 客户端与真实持久化接入模块，标志着后端从“代码结构已准备好”进入“真实数据库持久化代码已接通”的阶段。它是任务系统从原型实现走向可联调实现的关键一步。

