# 任务持久化与 Repository 模块开发归纳

## 1. 本次开发目标

本次开发目标是把任务模块从“直接操作内存 store”升级成“通过仓储层访问数据”，同时补上任务查询过滤能力。

## 2. 本次实际完成内容

### 2.1 新增任务仓储接口

新增：

- `repositories/task.repository.ts`

当前定义了任务数据访问的统一接口，覆盖：

- 报价
- 任务
- 事件
- 列表查询

### 2.2 新增内存仓储实现

新增：

- `repositories/memory-task.repository.ts`
- `repositories/index.ts`

当前通过 `MemoryTaskRepository` 承接原先 `task.store` 的职责。

### 2.3 新增任务映射器

新增：

- `repositories/task.mapper.ts`

当前负责把详情对象转换为摘要对象，减少 service 内部重复字段裁剪逻辑。

### 2.4 新增任务查询 DTO

在共享类型层新增：

- `TaskListQueryDto`

支持以下过滤字段：

- `module`
- `project_id`
- `batch_id`
- `task_type`
- `status`
- `billing_status`

### 2.5 改造 service 与 controller

当前变更：

- `task.service.ts` 改为依赖 `TaskRepository`
- `task.controller.ts` 支持从 URL 查询参数读取过滤条件
- `GET /api/v1/tasks` 已支持基本筛选

### 2.6 删除旧 store

删除：

- `store/task.store.ts`

说明任务模块已经从“裸状态对象”升级成了“仓储边界”模式。

## 3. 当前状态判断

当前任务模块已经进入“可替换底层存储实现”的阶段。

这意味着下一步如果接 Prisma，不需要重写：

- Controller
- Service
- DTO

只需要增加新的 repository 实现并替换绑定即可。

## 4. 本次开发的关键价值

本次开发真正解决的是结构问题：

- 业务逻辑与数据访问解耦
- 查询条件收敛
- 摘要映射集中
- 为数据库持久化做铺垫

## 5. 当前已知限制

- 仍然没有真实数据库持久化
- 数据重启仍会丢失
- 还没有 repository 工厂切换逻辑
- 还没有分页结构

## 6. 下一步建议

下一步建议开发：

- Prisma Task Repository 模块

优先内容：

- 报价表持久化
- 任务表持久化
- 任务事件表持久化
- 查询过滤落到数据库层

## 7. 本次开发结论

这次开发完成的是“任务持久化与 Repository 模块”。虽然现在底层仍是内存实现，但任务主链路的数据访问边界已经建立，后续接数据库和实时同步都会明显更稳。

