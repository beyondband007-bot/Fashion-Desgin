# 数据库 Bootstrap 与任务写库验证模块技术方案
## 1. 模块目标

本模块的目标不是继续停留在“Prisma schema 已定义、Repository 已接入”的阶段，而是把数据库链路推进到真正可执行的闭环：

- 可以初始化本地数据库表结构
- 可以准备最小可写入的种子数据
- 可以验证任务报价、任务主表、任务事件表的真实写库结果
- 可以为后续 WebSocket 与任务中心联调提供稳定的数据底座

## 2. 为什么这一层必须先补

当前任务主链路虽然已经具备：

- DTO
- TaskService
- Repository 抽象
- PrismaTaskRepository

但如果没有数据库 bootstrap 能力，系统仍然会在真实落库时出现两类问题：

- 表结构不存在，`generation_tasks` / `task_quotes` / `task_events` 无法写入
- 任务写库依赖的最小外键上下文不存在，例如 demo 用户、demo 积分账户

因此，本模块本质上是“让之前的后端代码第一次具备可执行性”。

## 3. 设计范围

本模块纳入范围：

- Biz / Ledger 数据库本地建表入口
- 本地 `.env` 加载能力
- Biz demo 用户 bootstrap
- Ledger demo 积分账户 bootstrap
- 任务写库验证脚本
- 任务模块 demo 上下文常量收敛

本模块暂不纳入范围：

- 正式生产 migration 发布流程
- 线上多环境数据库变更审批
- 真实用户身份上下文接入
- 真实积分冻结、结算联动

## 4. 关键设计原则

### 4.1 先完成本地闭环，再进入正式 migration 体系

当前项目还在后端初期建设阶段，schema 仍可能调整。如果此时强行维护正式 migration 历史，成本会高于收益。

因此这一阶段采用：

- `prisma db push` 负责本地结构初始化
- `prisma migrate deploy` 继续保留，留给后续稳定阶段使用

这样可以先把“能跑通”落地，再进入“可审计发布”。

### 4.2 任务写库必须依赖统一最小上下文

`task_quotes` 与 `generation_tasks` 都依赖用户相关字段。若继续在代码中散落 `usr_demo` / `crd_demo` 硬编码，会导致：

- 业务代码与 bootstrap 脚本不一致
- 后续切换真实登录态时难以统一替换

因此本模块要求：

- 任务服务使用统一 demo 常量
- PrismaTaskRepository 使用相同 demo 常量
- bootstrap 脚本使用同一组 demo 标识

### 4.3 验证脚本必须覆盖任务主链路最关键三张表

本模块不只验证连通性，而要验证实际业务写入：

- `task_quotes`
- `generation_tasks`
- `task_events`

只有这三张表都能写、能查，才说明数据库对任务中心已经具备最小支撑能力。

## 5. 方案设计

### 5.1 脚本层新增能力

新增 npm scripts：

- `prisma:push:biz`
- `prisma:push:ledger`
- `prisma:push`
- `db:bootstrap:biz`
- `db:bootstrap:ledger`
- `db:bootstrap`
- `db:prepare:biz`
- `db:prepare:ledger`
- `db:prepare`
- `db:verify:tasks`

职责划分：

- `prisma:push:*` 负责建表
- `db:bootstrap:*` 负责最小种子数据
- `db:prepare:*` 负责一键执行“建表 + 种子”
- `db:verify:tasks` 负责真实任务写库验证

### 5.2 本地环境加载

新增 `scripts/load-env.cjs`，统一处理：

- 读取 `backend/.env`
- 兼容引号包裹的 value
- 忽略空行与注释
- 避免每个脚本重复解析环境文件

这使得数据库脚本不依赖额外三方包，也不依赖全局环境。

### 5.3 最小种子数据设计

Biz 库 bootstrap：

- 创建或更新 demo 用户 `usr_demo`
- 补齐 `nickname`、`user_type`、`status`、`register_source`
- 绑定 demo 积分账户 ID `crd_demo`

Ledger 库 bootstrap：

- 创建或更新 demo 积分账户 `crd_demo`
- owner 归属 `usr_demo`
- 初始化总余额 / 可用余额 / 锁定余额

这一层的目标不是模拟完整会员体系，而是满足任务写库的最小前置条件。

### 5.4 任务写库验证设计

验证脚本 `verify-task-persistence.cjs` 负责：

1. 读取本地环境
2. 确保 demo 用户存在
3. 写入一条 `task_quote`
4. 写入一条 `generation_task`
5. 写入一条 `task_event`
6. 回查任务与事件数量
7. 输出结构化验证结果

验证成功标准：

- Quote 创建成功
- Task 创建成功
- Event 创建成功
- 能按 task id 读回任务详情
- 任务事件数量大于等于 1

## 6. 对现有任务模块的影响

### 6.1 TaskService

TaskService 不再散落写死 demo 标识，而是改为依赖统一 demo 上下文常量，确保：

- `user_id`
- `owner_type`
- `owner_id`
- `ws_channel`

来源一致。

### 6.2 PrismaTaskRepository

PrismaTaskRepository 写入报价和任务时，统一使用 demo 常量补齐：

- `userId`
- `billingOwnerType`
- `billingOwnerId`
- `creditAccountId`

从而保证仓储层与 bootstrap 脚本不会使用不同的默认上下文。

## 7. 风险与限制

- 当前仍然是本地 bootstrap 方案，不等价于正式生产 migration 策略
- 任务写库验证只覆盖 Biz 库，不代表 Ledger 冻结流水已联通
- 现阶段仍基于 demo 用户上下文，后续接入真实登录态时需要替换
- 如果本地 MySQL 凭据错误，脚本会失败，但这属于环境问题，不是代码问题

## 8. 推荐执行顺序

1. 配置 `backend/.env`
2. 执行 `npm run prisma:generate`
3. 执行 `npm run db:prepare`
4. 将 `TASK_REPOSITORY_DRIVER` 切换为 `prisma`
5. 执行 `npm run db:verify:tasks`
6. 再进入基于 HTTP / WebSocket 的联调阶段

## 9. 结论

本模块的意义，在于把数据库建设从“结构定义完成”推进到“可自举、可写入、可验证”。只有先完成这一层，后续的任务中心、实时同步、积分冻结与跨模块并发控制，才有可靠的数据落点。
