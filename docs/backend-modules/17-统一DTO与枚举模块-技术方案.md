# 统一 DTO 与枚举模块技术方案

## 1. 模块目标

统一 DTO 与枚举模块负责把前面已经落入 schema 的关键任务字段、状态机字段和实时同步字段，收敛为后端内部统一的类型契约。

它解决的问题不是“怎么查库”，而是：

- 数据库层和接口层字段名是否一致
- HTTP 与 WebSocket 是否复用同一套任务结构
- 多模块并发下的模块归属字段是否固定

## 2. 模块范围

当前范围：

- 任务模块枚举
- 账务状态枚举
- 任务事件枚举
- 任务摘要 DTO
- 任务详情 DTO
- 任务预估 DTO
- 创建任务 DTO
- 资产状态与审核状态枚举

当前不包含：

- DTO 运行时校验器
- class-validator / zod 接入
- OpenAPI 自动生成

## 3. 设计原则

- 数据库 schema 和 DTO 语义一致
- HTTP 与 WebSocket 共用任务字段定义
- 字段名保持 API 友好，不做多套命名转换
- 多模块同步依赖字段必须进入 DTO

## 4. 当前输出位置

新增目录：

- `backend/packages/shared-types`

新增文件：

- `src/tasks.ts`
- `src/assets.ts`
- `src/index.ts`

## 5. 当前收口的核心内容

### 5.1 任务枚举

- `TaskModule`
- `TaskType`
- `TaskStatus`
- `BillingStatus`
- `TaskEventType`

### 5.2 任务 DTO

- `TaskSummaryDto`
- `TaskDetailDto`
- `TaskRealtimeEventDto`
- `TaskEstimateRequestDto`
- `TaskEstimateResponseDto`
- `CreateTaskRequestDto`
- `CreateTaskResponseDto`

### 5.3 资产枚举

- `AssetStatus`
- `ReviewStatus`

## 6. 多模块增强字段

当前 DTO 已明确纳入以下字段：

- `module`
- `scene`
- `task_type`
- `project_id`
- `batch_id`
- `source_page`
- `version`

这一步完成后，多模块任务同步和 HTTP 查询过滤才能有稳定的字段基础。

## 7. 为什么先做 DTO 模块

如果跳过这一步直接做任务接口，后面很容易出现：

- DB 用 `taskType`，接口返回 `type`
- WebSocket 用 `module`，HTTP 用 `scene_type`
- 前端 store 再自己做转换

最终结果就是：

- 字段反复返工
- 实时同步逻辑变脆
- 前后端理解不一致

## 8. 下一步衔接

本模块完成后，下一步最合理的是进入：

- 最小任务主链路模块

因为现在已经具备：

- 工程骨架
- 双库 schema 基线
- 统一 DTO 与枚举

可以开始把创建任务、写事件、冻结积分占位这条线真正串起来。

## 9. 结论

统一 DTO 与枚举模块是任务主链路和实时同步之间的桥梁。它把文档层约束变成了代码层契约，能显著减少后续接口和前端联调的返工。

