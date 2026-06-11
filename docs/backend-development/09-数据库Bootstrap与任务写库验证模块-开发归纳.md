# 数据库 Bootstrap 与任务写库验证模块开发归纳
## 1. 本次开发目标

本次开发的目标，是把数据库链路从“有 schema、能生成 Prisma client”推进到“可以本地建表、准备最小种子、验证任务真实写库”。

这一步解决的是后端当前最实际的问题：

- 不是继续画结构
- 而是让数据库第一次真正服务于任务链路

## 2. 本次实际完成内容

### 2.1 补充数据库初始化脚本

更新文件：

- `backend/package.json`

新增脚本：

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

这使数据库从“只能部署已有 migration”变成“本地可以直接建表并准备环境”。

### 2.2 补充脚本级环境加载能力

新增文件：

- `backend/scripts/load-env.cjs`

作用：

- 统一读取 `backend/.env`
- 避免每个脚本单独处理环境变量
- 不额外引入 `dotenv`

### 2.3 补充最小 bootstrap 数据

新增文件：

- `backend/scripts/bootstrap-biz-demo.cjs`
- `backend/scripts/bootstrap-ledger-demo.cjs`

完成内容：

- Biz 库可创建 demo 用户 `usr_demo`
- Ledger 库可创建 demo 账户 `crd_demo`

这一步解决了任务写库时最容易出现的外键与上下文缺失问题。

### 2.4 补充任务写库验证脚本

新增文件：

- `backend/scripts/verify-task-persistence.cjs`

验证范围：

- `task_quotes`
- `generation_tasks`
- `task_events`

验证方式：

- 写入报价
- 写入任务
- 写入事件
- 回查任务及事件数量

### 2.5 收敛 demo 任务上下文

新增文件：

- `backend/apps/biz-api/src/modules/tasks/constants/demo-task-context.ts`

并修改：

- `task.service.ts`
- `prisma-task.repository.ts`

完成后，原本散落的：

- `usr_demo`
- `crd_demo`
- `user:usr_demo:tasks`

都被收敛到统一常量，避免脚本与业务代码各自维护一份默认上下文。

### 2.6 更新本地数据库接入说明

更新文件：

- `backend/README.md`
- `backend/.env.example`

让后续执行顺序更清楚：

1. 配置 `.env`
2. 生成 Prisma client
3. 执行 `db:prepare`
4. 切换 `TASK_REPOSITORY_DRIVER=prisma`
5. 执行 `db:verify:tasks`

## 3. 本次开发解决的核心问题

本次开发主要解决了三个阻塞点：

### 3.1 只有迁移入口，没有本地建表入口

此前只有 `prisma migrate deploy`，但没有现成 migration 文件，导致本地数据库无法快速初始化。

现在已补上：

- `prisma db push`
- `db:prepare`

### 3.2 任务代码可写，但真实库未必能写

此前 `PrismaTaskRepository` 已经有写库逻辑，但缺少数据库 bootstrap，上线到真实库时很容易因为最小前置数据不存在而失败。

现在已补上 demo 用户和 demo 积分账户的自举脚本。

### 3.3 缺少一个可重复执行的验收脚本

此前最多只能做连接性检查，不能证明任务主链路已经可落库。

现在增加了专门的任务持久化验证脚本，后续每次调整 schema 或仓储逻辑，都能重复验证。

## 4. 当前状态判断

到这一步，数据库层已经从“理论上可接”推进到“具备本地自举能力”。

这意味着接下来可以继续推进：

- 真实 HTTP 任务创建联调
- `TASK_REPOSITORY_DRIVER=prisma` 的接口验证
- 后续 WebSocket 任务同步

但前提仍然是本地 `.env` 凭据正确，并实际跑通一次 `db:prepare` 与 `db:verify:tasks`。

## 5. 当前限制

- 当前环境里的 `node` 可执行路径在沙箱内解析异常，本次未完成命令级实跑校验
- 因此本次属于“代码与脚本已补齐，待本地数据库凭据配置后执行验证”
- Ledger 冻结积分仍是 stub，尚未接入真实账务写库

## 6. 本次开发结论

这次开发完成的是“数据库 Bootstrap 与任务写库验证模块”。它不是新业务功能，但它把后端推进到了一个更关键的阶段：数据库已经具备本地闭环所需的自举、种子和验证路径，后续可以开始做真正的 Prisma 写库联调，而不再只是停留在结构设计层。
