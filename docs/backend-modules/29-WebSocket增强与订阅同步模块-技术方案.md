# WebSocket 增强与订阅同步模块技术方案
## 1. 模块目标

本模块的目标，不是推翻现有实时通道，而是在当前“单主 WebSocket + 任务事件推送”基础上，补齐前后端真实联调所需的协议增强能力。

当前重点补齐：

- 客户端就绪握手
- 模块级订阅过滤
- 首帧任务快照同步
- 手动 resync 能力
- 应用层 ping / pong
- 订阅确认事件

## 2. 为什么这一阶段必须单独做

当前 WebSocket 已经具备：

- token 建连
- 任务事件广播
- 心跳保活

但对于前后端真实接入来说还不够，主要缺口在：

- 前端无法显式声明“我关心哪些任务”
- 连接建立后无法立即拿到当前任务快照
- 重连后没有标准 resync 协议
- 缺少订阅确认和调试反馈

因此这一阶段重点不是“继续推更多事件”，而是把实时协议补到可接入、可恢复、可调试。

## 3. 设计范围

本模块纳入范围：

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

本模块暂不纳入范围：

- 独立消息中间件
- 历史事件回放
- 多机分布式连接广播
- 生产级权限域细粒度鉴权

## 4. 核心设计原则

### 4.1 保持单主通道不变

本模块不增加新的 WebSocket 入口，仍然只保留：

- `POST /api/v1/realtime/token`
- `GET /api/v1/ws?token=...`

### 4.2 事件推送与订阅过滤分离

后端仍按用户维度维护连接集合，但每条连接额外持有自己的订阅过滤条件。

这样可以实现：

- 同一用户多个页面共用一条协议
- 不同页面可声明不同关注范围
- 全局任务中心可在前端统一协调订阅

### 4.3 首帧快照优先于被动等待

连接建立后，前端不应只等“未来的事件”，还必须能主动触发一次当前任务快照同步。

因此协议补充：

- `client.ready`
- `tasks.resync`
- `task.snapshot`

## 5. 协议设计

## 5.1 服务端连接确认

建立连接后，服务端主动发送：

- `system.connected`

建议包含：

- `channel`
- `connection_id`
- `heartbeat_interval_ms`
- `capabilities`

## 5.2 客户端就绪消息

客户端建立连接后，发送：

```json
{
  "type": "client.ready",
  "request_id": "req_ready_1",
  "subscriptions": {
    "modules": ["ai_generate"]
  },
  "resync": true
}
```

作用：

- 声明初始订阅范围
- 要求立即返回快照

## 5.3 订阅消息

客户端可发送：

- `tasks.subscribe`
- `tasks.unsubscribe`

订阅维度支持：

- `modules`
- `project_ids`
- `batch_ids`
- `task_types`
- `task_ids`
- `statuses`

## 5.4 快照消息

服务端返回：

- `task.snapshot`

返回内容：

- 当前订阅范围下的任务快照数组

默认规则：

- 若未指定 `task_ids`，默认优先返回非终态任务
- 若显式指定 `task_ids`，则允许返回对应任务快照

## 5.5 应用层 ping/pong

除了底层 ws ping/pong 外，协议增加：

- `system.ping`
- `system.pong`

作用：

- 便于前端开发调试
- 便于前端在 mock 联调时验证连接存活

## 6. 验收标准

满足以下条件，才算模块通过：

- 建连后可收到 `system.connected`
- 发送 `client.ready` 后可收到 `task.snapshot`
- 发送 `client.ready` 后可收到 `system.subscribed`
- 发送 `system.ping` 后可收到 `system.pong`
- 发送 `tasks.subscribe` 后新增订阅范围生效
- 已订阅任务的 `task.created / updated / completed` 可持续收到
- 未命中订阅条件的任务事件不会被推到该连接

## 7. 风险与限制

- 当前订阅过滤仍为进程内内存态，不是分布式实现
- 当前快照基于任务仓储查询，不是事件流回放
- 当前默认仍基于 demo 用户上下文验证
- 当前尚未引入前端全局任务中心实际消费代码

## 8. 下一步建议

本模块完成后，下一步最适合进入：

- 前端全局任务中心接入
- 前后端本地 mock 联调

重点是：

- 前端建立唯一连接
- 发送 `client.ready`
- 读取 `task.snapshot`
- 再消费增量任务事件

## 9. 结论

本模块把 WebSocket 从“能连、能推”推进到了“可订阅、可同步、可恢复、可调试”。这正是前后端开始真实联调前必须补齐的一层协议能力。
