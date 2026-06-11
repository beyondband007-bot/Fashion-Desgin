# 30-前端任务中心WebSocket接入-技术方案

## 1. 目标

在现有后端实时任务协议基础上，完成前端第一轮接入，形成适合多模块复用的“单主连接 + 全局任务中心 + 模块订阅”实现。

本方案重点解决：

- 前端不能每个页面各建一条 WebSocket
- 页面不能重复处理连接、重连、轮询、去重、乱序问题
- 同一用户后续需要支持多模块并发任务展示
- 当前阶段需要尽快进入前后端 mock 联调状态

## 2. 设计原则

### 2.1 单主连接

浏览器全局仅维护一条主 WebSocket 连接，由统一客户端单例负责管理。

### 2.2 全局任务中心

所有任务统一落到全局状态中心，不允许页面本地各自维护任务副本。

### 2.3 页面只订阅

业务页面只声明：

- 我关心哪个模块
- 我关心哪些项目/批次/任务类型/状态

页面不负责：

- 建连
- 断线重连
- 心跳
- 快照同步
- 事件去重
- 乱序保护

### 2.4 可降级

当后端实时链路不可用时，页面仍需保持可用，至少保证 HTTP/mock 能继续展示基础数据。

## 3. 前端分层

### 3.1 API 层

文件：[src/api/frontend.ts](/F:/服装/Fashion-Desgin/src/api/frontend.ts:1)

职责：

- 获取实时 token
- 获取模型、场景、最近结果等初始数据
- 在开发联调阶段提供 mock fallback

### 3.2 实时客户端层

文件：[src/services/taskRealtimeClient.ts](/F:/服装/Fashion-Desgin/src/services/taskRealtimeClient.ts:1)

职责：

- 维护单主连接
- 注册/注销页面消费者
- 合并多消费者订阅条件
- 发送 `client.ready` 与 `tasks.subscribe`
- 处理心跳、断线重连、快照、增量事件

### 3.3 全局状态层

文件：[src/store/taskStore.ts](/F:/服装/Fashion-Desgin/src/store/taskStore.ts:1)

职责：

- 统一存储任务实体
- 维护多维索引
- 输出模块级选择器
- 为页面提供只读消费能力

### 3.4 页面接入层

文件：

- [src/hooks/useTaskRealtime.ts](/F:/服装/Fashion-Desgin/src/hooks/useTaskRealtime.ts:1)
- [src/pages/AiGenerate/index.tsx](/F:/服装/Fashion-Desgin/src/pages/AiGenerate/index.tsx:1)
- [src/pages/AiGenerate/components/RealtimeTaskStatus.tsx](/F:/服装/Fashion-Desgin/src/pages/AiGenerate/components/RealtimeTaskStatus.tsx:1)

职责：

- 页面声明订阅条件
- 页面读取当前模块任务
- 页面展示实时状态，不接管底层连接逻辑

## 4. 状态模型

当前任务中心统一维护：

- `taskMap`
- `taskIdsByModule`
- `taskIdsByProject`
- `taskIdsByBatch`
- `runningTaskIds`
- `recentCompletedTaskIds`
- `connectionState`
- `lastEventAt`

其中：

- `taskMap` 是主数据源
- 其余索引用于高效页面过滤与展示
- `connectionState` 用于前端实时状态反馈

## 5. 事件处理策略

### 5.1 建连成功

收到 `system.connected` 后：

- 状态改为 `ws_active`
- 立即发送 `client.ready`
- 启动心跳

### 5.2 快照同步

收到 `task.snapshot` 后：

- 状态短暂切换为 `resyncing`
- 批量写入任务中心
- 再恢复为 `ws_active`

### 5.3 增量事件

收到任务生命周期事件后：

- 以 `task.id` 为主键写入
- 依据 `version` 做基本覆盖控制
- 自动更新运行中索引、最近完成索引

### 5.4 断线处理

连接异常后：

- 清理心跳
- 清理旧 socket
- 若仍存在消费者，则按退避策略重连
- 若没有消费者，则状态置为 `stopped`

## 6. 页面消费策略

以 `AI 生成` 页面为例：

- 页面注册模块订阅：`modules: ['ai_generate']`
- 最近结果优先取实时任务中心
- 若实时任务中心暂无数据，则回退 HTTP 最近结果
- 页面只消费与自己模块相关的任务

该模式后续可直接复用到：

- 项目中心
- 素材中心
- 编辑模块
- 其他 AI 生成模块

## 7. mock 联调策略

当前阶段采用“实时优先，HTTP/mock 兜底”：

- token 获取失败时回退 mock token
- 若为 mock token，则不强行发起无意义 WebSocket 连接
- 页面继续显示已有 HTTP/mock 数据

这样做的目的：

- 保证开发阶段页面可持续演示
- 避免因后端实时链路未完全就绪而阻塞前端开发

## 8. 当前适用范围

本轮已落地在 `AI 生成` 页面，用于验证以下能力：

- 全局单连接
- 模块订阅
- 实时状态展示
- 最近结果实时回流
- 可降级联调

## 9. 后续扩展建议

后续建议按以下顺序扩展：

1. 接入“创建任务”接口，真正把前端发起动作写入后端任务中心
2. 把任务详情与事件流绑定到具体项目、批次
3. 抽出统一任务面板，支持跨模块查看运行中任务
4. 补轮询兜底层，形成 WS 失败后的自动补偿机制

## 10. 验收口径

本方案完成后，至少应满足：

- 浏览器内只存在一条主 WebSocket 连接
- `AI 生成` 页面不自行维护 socket
- 模块页面只看到自身模块任务
- 后端快照和增量事件都能进入全局任务中心
- 后端实时暂不可用时，页面仍可使用 HTTP/mock 数据完成演示
