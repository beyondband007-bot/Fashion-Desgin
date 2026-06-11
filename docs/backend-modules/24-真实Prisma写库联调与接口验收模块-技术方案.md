# 真实 Prisma 写库联调与接口验收模块技术方案
## 1. 模块目标

本模块的目标，是把后端从“数据库脚本可自举”推进到“HTTP 接口可真实联调、可重复验收”。

在上一阶段，数据库已经具备：

- 本地建表入口
- demo 用户与 demo 账户 bootstrap
- 任务写库脚本验证

但这还不等于前后端链路已经可验收。真正需要补齐的是：

- 服务能否正确启动
- 服务启动时能否稳定读取 `.env`
- 任务接口是否真正走到 Prisma 仓储
- 接口返回结果是否与数据库落库一致

## 2. 为什么这一阶段必须单独做

从验收视角看，脚本写库通过，只能说明数据库模型可写，不代表业务接口可用。

接口级联调仍然存在三类独立风险：

- 启动脚本与构建产物不一致，服务实际起不来
- 运行时未加载 `.env`，Prisma 初始化失败
- 接口层、Service 层、Repository 层之间存在字段映射偏差

因此，“数据库闭环”和“接口验收闭环”必须拆成两个阶段。

## 3. 设计范围

本模块纳入范围：

- 修正后端构建产物与启动脚本
- 增加运行时环境变量加载能力
- 增加任务接口联调验收脚本
- 形成可重复执行的 HTTP 验收路径

本模块暂不纳入范围：

- WebSocket 实时同步
- 前端页面联调
- 真实账务冻结流水
- 任务状态自动推进

## 4. 关键设计原则

### 4.1 验收先于扩展

在进入 WebSocket 和任务中心之前，必须先确认：

- `POST /api/v1/tasks/estimate` 可用
- `POST /api/v1/tasks` 可用
- `GET /api/v1/tasks` 可筛选
- `GET /api/v1/tasks/{id}` 可读详情
- `GET /api/v1/tasks/{id}/events` 可读事件

如果这一步不稳，后续实时同步只会同步错误结果。

### 4.2 构建与启动必须真实可运行

此前脚本存在两个隐患：

- `build` 只有类型检查，不产出 `dist`
- `start:biz` / `start:ledger` 指向的 dist 路径与真实编译输出不一致

因此本模块要求：

- `build` 负责真实编译输出
- `typecheck` 负责无输出类型检查
- 启动脚本与编译产物目录保持一致

### 4.3 环境加载必须前置于 Prisma 初始化

Prisma 客户端一旦在环境变量未就绪时初始化，就会导致连接配置异常。

因此本模块要求：

- 服务入口先加载 `.env`
- 再动态导入应用模块
- 再构造 Prisma 相关依赖

这样可以确保运行期配置在模块初始化前已经准备好。

## 5. 方案设计

### 5.1 构建与启动脚本调整

脚本职责调整如下：

- `build`：生成 `dist`
- `typecheck`：只做类型检查
- `start:biz`：启动 `dist/apps/biz-api/src/main.js`
- `start:ledger`：启动 `dist/apps/ledger-service/src/main.js`

这样可以把“能否编译”和“能否运行”拆成两个独立动作。

### 5.2 运行时 env 加载设计

新增 `shared-kernel/system/env.ts`，负责：

- 读取工作目录下 `.env`
- 兼容引号包裹值
- 忽略注释与空行
- 只在环境变量未显式注入时做默认加载

`biz-api` 与 `ledger-service` 入口统一采用：

1. `loadEnvFile()`
2. 动态导入 app 模块
3. 创建 HTTP server
4. 启动监听

### 5.3 HTTP 验收脚本设计

新增 `scripts/verify-task-api.cjs`，验证真实接口链路：

1. 读取 `.env`
2. 启动已编译的 `biz-api`
3. 轮询 `/health` 等待服务可用
4. 调用 `/health/db`
5. 调用 `POST /api/v1/tasks/estimate`
6. 调用 `POST /api/v1/tasks`
7. 调用 `GET /api/v1/tasks/{id}`
8. 调用 `GET /api/v1/tasks/{id}/events`
9. 调用带 `module / project_id / batch_id / task_type` 过滤条件的列表接口
10. 断言返回数据与创建时保持一致

### 5.4 验收覆盖点

本模块重点验收以下内容：

- 任务报价能否真实创建
- 任务主表能否真实创建
- 任务事件能否真实创建
- 任务详情能否正确回查
- 任务列表筛选是否生效
- DB 健康检查接口是否正常

## 6. 验收标准

满足以下条件，才算本模块通过：

- 执行 `npm run build` 后生成可运行的 `dist`
- `npm run start:biz` 能正常启动
- `npm run api:verify:tasks` 可完整跑通
- `db_health` 返回 `ok`
- 新建任务后详情接口返回的 `module / project_id / batch_id / task_type` 正确
- 事件接口返回至少 1 条事件
- 列表过滤结果包含刚创建的任务

## 7. 风险与限制

- 当前验收仍基于 demo 用户上下文，不代表真实登录态已接入
- 当前账务仍为 stub，不代表冻结与结算已真正打通
- `api:verify:tasks` 依赖本地 `.env` 和 MySQL 可用
- 当前只验证 Biz API，不验证前端到后端的浏览器级交互

## 8. 下一步建议

本模块完成后，下一步不应直接扩数据库，而应进入：

- 最小任务状态推进模块

也就是补齐：

- queued -> processing -> completed / failed

只有状态源稳定后，后续单主 WebSocket、全局任务中心、多模块订阅分发才有可靠基础。

## 9. 结论

本模块的价值，在于把数据库自举能力进一步推进为“接口可联调、结果可验收”。它是进入任务状态流转和实时同步之前必须经过的一层工程验证。
