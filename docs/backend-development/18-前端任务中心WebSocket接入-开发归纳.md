# 18-前端任务中心WebSocket接入-开发归纳

## 1. 本轮目标

在不改动“单主 WebSocket + 全局任务中心”总体方案的前提下，完成前端第一轮接入，满足后续前后端 mock 联调需要：

- 前端全局只保留一条 WebSocket 连接
- 页面只做模块级订阅，不再自行管理连接与重连
- `AI 生成` 页面能直接看到实时连接状态、运行中任务数、最近完成任务数
- 当后端实时服务不可用时，页面仍可通过 HTTP/mock 保持可用，不出现崩溃

## 2. 本轮完成项

### 2.1 全局任务中心收口

已整理并稳定化 [src/store/taskStore.ts](/F:/服装/Fashion-Desgin/src/store/taskStore.ts:1)：

- 定义全局任务实体 `TaskCenterTask`
- 统一维护：
  - `taskMap`
  - `taskIdsByModule`
  - `taskIdsByProject`
  - `taskIdsByBatch`
  - `runningTaskIds`
  - `recentCompletedTaskIds`
  - `connectionState`
  - `lastEventAt`
- 支持：
  - `applySnapshot`
  - `upsertTask`
  - `clearAll`
- 补齐模块级选择器：
  - 最近完成结果选择
  - 运行中任务选择
  - 最近结果 key 选择

### 2.2 WebSocket 客户端单例接入

已整理 [src/services/taskRealtimeClient.ts](/F:/服装/Fashion-Desgin/src/services/taskRealtimeClient.ts:1)：

- 以单例方式维护主连接
- 支持消费者注册/注销
- 自动合并多页面订阅条件
- 兼容服务端协议：
  - `system.connected`
  - `task.snapshot`
  - `system.subscribed`
  - `system.unsubscribed`
  - `system.pong`
  - 任务生命周期事件
- 支持心跳
- 支持断开重连
- 支持后端不可用时进入稳定降级状态

### 2.3 页面级订阅接入

已完成 [src/hooks/useTaskRealtime.ts](/F:/服装/Fashion-Desgin/src/hooks/useTaskRealtime.ts:1) 和 [src/pages/AiGenerate/index.tsx](/F:/服装/Fashion-Desgin/src/pages/AiGenerate/index.tsx:1) 的第一轮接入：

- `AiGenerate` 页面通过 `useTaskRealtime('ai-generate-page', { modules: ['ai_generate'] })` 注册订阅
- 页面优先读取实时任务中心的最近结果
- 无实时结果时自动回退到 HTTP 最近结果
- 页面不直接处理 WebSocket 实例、不处理重连细节

### 2.4 实时状态可视化

已新增 [src/pages/AiGenerate/components/RealtimeTaskStatus.tsx](/F:/服装/Fashion-Desgin/src/pages/AiGenerate/components/RealtimeTaskStatus.tsx:1)：

- 展示连接状态
- 展示当前模块运行中任务数
- 展示当前模块最近完成任务数
- 展示最后事件时间

该卡片用于前后端 mock 联调阶段快速观察实时链路是否生效。

### 2.5 现有编译阻塞项顺手收口

为避免本轮 WebSocket 接入被其他残留报错阻塞，一并修复：

- [src/pages/AiEdit/components/ToolboxWorkspace.tsx](/F:/服装/Fashion-Desgin/src/pages/AiEdit/components/ToolboxWorkspace.tsx:1) 的 `exactOptionalPropertyTypes` 编译问题
- [src/api/frontend.ts](/F:/服装/Fashion-Desgin/src/api/frontend.ts:1) 的 mock 回退与标签映射整理

## 3. 验证结果

已执行：

- `npm run build`

结果：

- TypeScript 编译通过
- Vite 生产构建通过
- 当前前端可进入“可 mock、可联调”的稳定状态

## 4. 当前行为说明

### 4.1 后端实时可用时

- 页面建立全局主连接
- 自动发送 `client.ready`
- 自动接收 `task.snapshot`
- 后续任务事件增量写入全局任务中心
- `AI 生成` 页面只消费 `ai_generate` 模块任务

### 4.2 后端实时暂不可用时

- `getRealtimeToken` 会走 mock fallback
- WebSocket 客户端不再盲目报错重试
- 页面继续使用 HTTP/mock 的最近结果
- 页面状态卡会停留在非激活状态，但不影响主页面使用

## 5. 下一步建议

下一步优先级建议如下：

1. 让“创建生成任务”接口真正产出任务，并推送到任务中心
2. 为 `AI 生成` 页面接入任务创建后的即时占位卡与进度变化
3. 再把同一套全局任务中心复用到 `项目中心/素材中心/编辑页`

## 6. 风险与备注

- 当前前端已具备 mock 联调能力，但尚未完成“任务创建 -> 结果回写 -> 历史沉淀”的全闭环
- 实时降级目前以“停止连接并保留页面可用”为主，后续如需要更强兜底，可继续补 HTTP 轮询策略
- 构建虽然通过，但仍有 Sass `@import` 弃用告警；该问题不影响当前功能联调，可后续统一治理
