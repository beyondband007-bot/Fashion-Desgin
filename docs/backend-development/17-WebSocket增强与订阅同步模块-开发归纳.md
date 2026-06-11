# WebSocket 增强与订阅同步模块 - 开发归纳

## 1. 本轮开发目标

本轮目标是增强现有实时网关，让它能支持前后端真实联调，而不是继续停留在“只能收到被动任务事件”的阶段。

## 2. 本轮已完成内容

### 2.1 实时网关协议增强

已增强：

- [realtime.gateway.ts](/F:/服装/Fashion-Desgin/backend/apps/biz-api/src/modules/realtime/services/realtime.gateway.ts:1)

新增能力：

- `system.connected`
- `client.ready`
- `tasks.subscribe`
- `tasks.unsubscribe`
- `tasks.resync`
- `task.snapshot`
- `system.subscribed`
- `system.unsubscribed`
- `system.ping`
- `system.pong`

### 2.2 连接级订阅过滤

每条 WebSocket 连接现在都会维护自己的订阅过滤条件。

支持过滤维度：

- `modules`
- `project_ids`
- `batch_ids`
- `task_types`
- `task_ids`
- `statuses`

作用：

- 后续前端模块可以只订阅自己关心的任务
- 不需要每个模块各开一条连接

### 2.3 首帧任务快照

新增：

- `task.snapshot`

作用：

- 前端连接建立后可立即拿到当前任务快照
- 不需要只靠后续增量事件拼状态
- 为重连后的 resync 提供标准协议

### 2.4 应用层调试心跳

新增：

- `system.ping`
- `system.pong`

作用：

- 便于前端本地 mock 联调
- 便于调试连接存活和消息回路

### 2.5 token 清理与兼容保留

保留原有：

- token 建连
- 用户级广播
- ws 底层 ping/pong 心跳

并增加：

- 过期 token 清理

## 3. 验证结果

已执行：

- `npm run build`
- `npm run api:verify:ws`

结果：

- 构建通过
- 增强后的 WebSocket 验收通过

增强后的 ws 验收已覆盖：

- `system.connected`
- `task.snapshot`
- `system.subscribed`
- `system.pong`
- `task.created`
- `task.updated`
- `task.completed`

## 4. 当前产出文件

核心代码：

- [realtime.gateway.ts](/F:/服装/Fashion-Desgin/backend/apps/biz-api/src/modules/realtime/services/realtime.gateway.ts:1)
- [verify-task-ws-api.cjs](/F:/服装/Fashion-Desgin/backend/scripts/verify-task-ws-api.cjs:1)

文档：

- [29-WebSocket增强与订阅同步模块-技术方案.md](/F:/服装/Fashion-Desgin/docs/backend-modules/29-WebSocket增强与订阅同步模块-技术方案.md:1)

## 5. 这一轮的实际价值

这轮的价值不在于“多了几个消息类型”，而在于：

- 前端现在有标准方式声明订阅范围
- 前端现在有标准方式做首次快照同步
- 前端重连后有标准 resync 协议
- 本地 mock 联调时可以直接验证连接回路

## 6. 下一步建议

建议你接下来直接进入：

1. 前端建立唯一主 WebSocket 连接
2. 连接后发送 `client.ready`
3. 用 `task.snapshot` 初始化本地任务中心
4. 再消费增量任务事件
5. 必要时用 `tasks.resync` 做强制对齐

## 7. 结论

本轮已经把 WebSocket 补到了可联调状态。  
下一步最合适的动作，就是开始做你说的“前后端 mock 一下效果”，把前端全局任务中心先连起来。
