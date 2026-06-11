# 真实 Prisma 写库联调与接口验收模块开发归纳
## 1. 本次开发目标

本次开发目标，是把后端从“数据库脚本级验证通过”推进到“服务可启动、接口可调用、结果可验收”。

这一步关注的不是新增业务功能，而是补齐联调所需的运行链路。

## 2. 本次实际完成内容

### 2.1 修正构建与启动链路

更新文件：

- `backend/package.json`

完成调整：

- `build` 改为真实输出 `dist`
- 新增 `typecheck`
- 修正 `start:biz`
- 修正 `start:ledger`

这一步解决了此前“构建不产物、启动找不到 dist 文件”的问题。

### 2.2 补充运行时 env 加载能力

新增文件：

- `backend/packages/shared-kernel/src/system/env.ts`

并修改：

- `backend/apps/biz-api/src/main.ts`
- `backend/apps/ledger-service/src/main.ts`
- `backend/packages/shared-kernel/src/index.ts`

现在服务入口会先读取 `.env`，再动态导入 app 模块，避免 Prisma 初始化早于环境变量准备。

### 2.3 增加接口级任务验收脚本

新增文件：

- `backend/scripts/verify-task-api.cjs`

新增脚本：

- `api:verify:tasks`

该脚本会：

- 启动 `biz-api`
- 检查 `/health`
- 检查 `/health/db`
- 调用报价接口
- 调用任务创建接口
- 调用任务详情接口
- 调用任务事件接口
- 调用任务列表筛选接口
- 校验返回结果是否一致

### 2.4 更新运行说明

更新文件：

- `backend/README.md`

新增说明：

- 在 `db:prepare` 和 `db:verify:tasks` 之后，还需执行 `build` 和 `api:verify:tasks`

这让数据库验收和接口验收形成了清晰的前后顺序。

## 3. 本次开发解决的关键问题

### 3.1 服务实际上无法启动

此前虽然存在 `start:biz` 和 `start:ledger`，但：

- build 不输出 dist
- 启动路径也不正确

因此联调阶段实际上无法依赖这套脚本启动服务。

这次已经修正为真实可启动链路。

### 3.2 运行时缺少统一 env 加载

此前脚本层有 env 读取逻辑，但服务入口没有，导致 `.env` 只对脚本可用，不对服务可用。

这次已经把 env 加载前移到主入口。

### 3.3 缺少接口级验收工具

此前最多只能验证数据库脚本写入成功，不能验证真实 HTTP 接口链路。

这次补上了 API 验收脚本，后续可以重复执行，而不是靠手工点接口。

## 4. 当前状态判断

到这一步，后端已经具备三层不同粒度的验证能力：

- 连通性检查：`db:check`
- 数据库写入检查：`db:verify:tasks`
- 接口联调检查：`api:verify:tasks`

这说明任务链路已经不再只是代码结构，而是开始具备实际联调条件。

## 5. 本次验证结果

本次已完成：

- TypeScript 构建通过
- 新增 `.cjs` 验收脚本语法检查通过
- 本地 `backend/.env` 已落地并完成数据库连接验证
- `db:prepare` 已跑通
- `db:verify:tasks` 已跑通
- `api:verify:tasks` 已跑通

本次关键实跑结果：

- Biz / Ledger 数据库已成功建库建表
- demo 用户与 demo 积分账户已成功 bootstrap
- 任务报价、任务主表、任务事件表已成功真实写库
- `biz-api` 编译产物已成功启动
- 任务详情、事件、过滤列表接口已完成真实 HTTP 验收

## 6. 下一步建议

下一步最合理的动作，不是直接进入 WebSocket，而是：

- 基于当前真实写库能力，进入最小任务状态推进模块

建议优先补齐：

- queued -> processing -> completed / failed
- 状态变更事件追加
- 状态版本号递增
- 基于状态流转的后续 WebSocket 同步前置能力

## 7. 本次开发结论

这次开发完成的是“真实 Prisma 写库联调与接口验收模块”。它把后端从“数据库能自举”推进到了“接口可以被系统性验证”的阶段。后续要做 WebSocket 和全局任务中心，应该建立在这一层验收通过的基础上，而不是反过来推进。
