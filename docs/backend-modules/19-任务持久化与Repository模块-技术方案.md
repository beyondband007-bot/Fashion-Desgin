# 任务持久化与 Repository 模块技术方案

## 1. 模块目标

任务持久化与 Repository 模块的目标，是把上一阶段直接耦合在 service 内部的任务存取逻辑抽离成仓储层，并提前建立任务查询过滤能力，为后续接 Prisma 持久化做准备。

## 2. 当前范围

本模块当前落地内容：

- 仓储接口定义
- 内存仓储实现
- 任务摘要映射器
- 任务查询过滤 DTO 接入
- Controller 到 Repository 的分层解耦

当前不包含：

- 真正的 Prisma Repository
- 真实数据库落库
- migration 执行

## 3. 为什么这一步要先做

如果现在直接从内存 store 跳到 Prisma 代码，容易把：

- 查询条件
- DTO 映射
- Service 业务逻辑
- 数据访问逻辑

全部写死在一起。后续再接 WebSocket、任务状态更新或多模块筛选时，维护成本会迅速上升。

因此，本阶段先做 Repository 分层，先把边界切开。

## 4. 当前设计

### 4.1 仓储接口

新增：

- `TaskRepository`

负责：

- 报价保存与读取
- 任务保存与读取
- 任务列表查询
- 事件追加与读取

### 4.2 内存实现

当前提供：

- `MemoryTaskRepository`

它不是最终持久化方案，但它先承接住 Repository 契约，下一步替换成 Prisma 时，只需要替换实现，不需要重写 controller 和 service。

### 4.3 DTO 映射层

新增：

- `task.mapper.ts`

当前负责：

- `TaskDetailDto -> TaskSummaryDto`

这样能避免在 service 里反复手写字段裁剪。

## 5. 查询过滤能力

本模块新增任务查询过滤 DTO：

- `TaskListQueryDto`

当前已支持过滤字段：

- `module`
- `project_id`
- `batch_id`
- `task_type`
- `status`
- `billing_status`

这一步直接对齐了前面多模块并发任务同步规范中的查询要求。

## 6. 当前代码变化

新增：

- `repositories/task.repository.ts`
- `repositories/memory-task.repository.ts`
- `repositories/task.mapper.ts`
- `repositories/index.ts`

调整：

- `task.service.ts`
- `task.controller.ts`

删除：

- 旧的 `store/task.store.ts`

## 7. 当前收益

完成本模块后，任务模块已经具备：

- 清晰的数据访问边界
- 多条件查询基础
- 更容易切换到底层真实持久化实现

## 8. 下一步衔接

本模块完成后，最合理的下一步是：

- Prisma Task Repository 模块

即：

- 让 `TaskRepository` 增加 Prisma 实现
- 将当前内存实现切换成数据库实现
- 保留内存实现仅用于本地快速测试或单元测试

## 9. 结论

任务持久化与 Repository 模块的关键价值，不是“已经做完数据库”，而是先把任务的数据访问层做对。只有先把 Repository 边界切干净，后续真正接 Prisma 和 WebSocket 时才不会把业务逻辑和持久化逻辑缠在一起。

