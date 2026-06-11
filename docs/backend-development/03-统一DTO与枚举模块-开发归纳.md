# 统一 DTO 与枚举模块开发归纳

## 1. 本次开发目标

本次开发的目标是把任务域和实时同步相关的核心字段真正收敛为可复用类型，而不是继续让字段只存在于文档中。

## 2. 本次实际完成内容

### 2.1 新增共享类型包

新增目录：

- `backend/packages/shared-types`

这是后端第二个共享包，用于承载后续 HTTP、WebSocket、Service、前后端联调时会反复使用的领域类型。

### 2.2 新增任务域枚举与 DTO

新增文件：

- `backend/packages/shared-types/src/tasks.ts`

当前已包含：

- `TaskModule`
- `TaskType`
- `TaskStatus`
- `BillingStatus`
- `TaskEventType`
- `TaskSummaryDto`
- `TaskDetailDto`
- `TaskRealtimeEventDto`
- `TaskEstimateRequestDto`
- `TaskEstimateResponseDto`
- `CreateTaskRequestDto`
- `CreateTaskResponseDto`

### 2.3 新增资产状态枚举

新增文件：

- `backend/packages/shared-types/src/assets.ts`

当前已包含：

- `AssetStatus`
- `ReviewStatus`

### 2.4 新增共享导出入口

新增文件：

- `backend/packages/shared-types/src/index.ts`

这为后续服务层和接口层统一引用做了准备。

### 2.5 同步补充文档

新增：

- 技术方案文档
- 本开发归纳文档

## 3. 当前状态判断

当前后端已经从“有 schema”进入“有统一领域契约”的阶段。

这意味着后续再开发：

- 任务创建接口
- 任务详情接口
- WebSocket 事件推送

都可以围绕同一套任务结构展开，而不是各写一套字段。

## 4. 这一步的关键价值

这次开发最重要的不是多写了几个 type，而是把下面这些之前分散在文档里的要求真正收敛到了代码里：

- 多模块归属字段
- 批次字段
- 来源页面字段
- 任务状态字段
- 账务状态字段
- 版本号字段

尤其是：

- `module`
- `project_id`
- `batch_id`
- `task_type`
- `version`

这些字段是后续任务实时同步体系能否稳定运行的关键。

## 5. 当前已知限制

- 目前是静态类型定义，还没有运行时校验
- 还没有接入 OpenAPI 生成
- 还没有和具体 controller / service 绑定

但这不影响它作为后续业务开发的稳定契约基础。

## 6. 下一步建议

下一步应进入：

- 最小任务主链路模块

优先内容：

- 报价 DTO 接入
- 创建任务服务骨架
- 写入 `generation_tasks`
- 写入 `task_events`
- 预留积分冻结调用

## 7. 本次开发结论

这次开发完成的是“统一 DTO 与枚举模块”。它把任务域、多模块同步和接口契约正式收拢进共享类型层，为下一步进入最小任务主链路开发扫清了字段层面的返工风险。

