import { frontendApi } from '@/api/frontend'
import {
  useTaskStore,
  type TaskCenterConnectionState,
  type TaskCenterTask,
} from '@/store/taskStore'

type TaskSubscriptionFilter = {
  modules?: string[]
  project_ids?: string[]
  batch_ids?: string[]
  task_types?: string[]
  task_ids?: string[]
  statuses?: string[]
}

type ConsumerRegistration = {
  key: string
  subscriptions: TaskSubscriptionFilter | undefined
}

type ServerEnvelope =
  | {
      event_type: 'system.connected'
      connection_id: string
      heartbeat_interval_ms: number
      channel: string
    }
  | {
      event_type: 'system.subscribed' | 'system.unsubscribed'
      request_id?: string
      subscriptions?: TaskSubscriptionFilter
    }
  | {
      event_type: 'task.snapshot'
      items: TaskCenterTask[]
      request_id?: string
      subscriptions?: TaskSubscriptionFilter
    }
  | {
      event_type: 'system.pong'
      request_id?: string
    }
  | {
      event_type: 'system.error'
      error_code: string
      error_message: string
      request_id?: string
    }
  | {
      event_id: string
      event_type: string
      occurred_at: string
      task: TaskCenterTask
    }

class TaskRealtimeClient {
  private socket: WebSocket | undefined
  private consumers = new Map<string, ConsumerRegistration>()
  private reconnectAttempts = 0
  private reconnectTimer: number | undefined
  private heartbeatTimer: number | undefined

  registerConsumer(key: string, subscriptions?: TaskSubscriptionFilter) {
    this.consumers.set(key, {
      key,
      subscriptions,
    })

    void this.ensureConnected()
    this.syncSubscriptions()
  }

  unregisterConsumer(key: string) {
    this.consumers.delete(key)

    if (this.consumers.size === 0) {
      this.stop()
      return
    }

    this.syncSubscriptions()
  }

  async ensureConnected() {
    if (
      this.socket &&
      (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)
    ) {
      return
    }

    if (this.consumers.size === 0) {
      return
    }

    useTaskStore.getState().setConnectionState('connecting_ws')

    try {
      const tokenPayload = await frontendApi.getRealtimeToken()

      if (tokenPayload.token === 'mock-dev-token') {
        useTaskStore.getState().setConnectionState('stopped')
        return
      }

      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
      const wsHost = import.meta.env.VITE_WS_BASE_URL ?? `${wsProtocol}//${window.location.host}`
      const socket = new WebSocket(`${wsHost}/api/v1/ws?token=${tokenPayload.token}`)
      this.socket = socket

      socket.addEventListener('open', () => {
        this.reconnectAttempts = 0
      })

      socket.addEventListener('message', (event) => {
        this.handleMessage(String(event.data))
      })

      socket.addEventListener('close', () => {
        this.handleDisconnect()
      })

      socket.addEventListener('error', () => {
        this.handleDisconnect()
      })
    } catch {
      this.scheduleReconnect('ws_degraded')
    }
  }

  private handleMessage(raw: string) {
    const payload = JSON.parse(raw) as ServerEnvelope

    if (payload.event_type === 'system.connected') {
      useTaskStore.getState().setConnectionState('ws_active')
      this.sendReady()
      this.startHeartbeat()
      return
    }

    if (payload.event_type === 'task.snapshot' && 'items' in payload) {
      useTaskStore.getState().setConnectionState('resyncing')
      useTaskStore.getState().applySnapshot(payload.items)
      useTaskStore.getState().setConnectionState('ws_active')
      return
    }

    if (payload.event_type === 'system.pong' || payload.event_type === 'system.error') {
      return
    }

    if ('task' in payload && payload.task) {
      useTaskStore.getState().upsertTask(payload.task, payload.occurred_at)
    }
  }

  private sendReady() {
    this.sendMessage({
      type: 'client.ready',
      request_id: `req_ready_${Date.now()}`,
      subscriptions: this.mergeConsumerSubscriptions(),
      resync: true,
    })
  }

  private syncSubscriptions() {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return
    }

    this.sendMessage({
      type: 'tasks.subscribe',
      request_id: `req_sub_${Date.now()}`,
      subscriptions: this.mergeConsumerSubscriptions(),
      replace: true,
    })
  }

  private mergeConsumerSubscriptions(): TaskSubscriptionFilter | undefined {
    const merged: TaskSubscriptionFilter = {}

    for (const consumer of this.consumers.values()) {
      mergeList(merged, 'modules', consumer.subscriptions?.modules)
      mergeList(merged, 'project_ids', consumer.subscriptions?.project_ids)
      mergeList(merged, 'batch_ids', consumer.subscriptions?.batch_ids)
      mergeList(merged, 'task_types', consumer.subscriptions?.task_types)
      mergeList(merged, 'task_ids', consumer.subscriptions?.task_ids)
      mergeList(merged, 'statuses', consumer.subscriptions?.statuses)
    }

    return hasSubscriptions(merged) ? merged : undefined
  }

  private sendMessage(payload: Record<string, unknown>) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return
    }

    this.socket.send(JSON.stringify(payload))
  }

  private startHeartbeat() {
    if (this.heartbeatTimer) {
      window.clearInterval(this.heartbeatTimer)
    }

    this.heartbeatTimer = window.setInterval(() => {
      this.sendMessage({
        type: 'system.ping',
        request_id: `req_ping_${Date.now()}`,
      })
    }, 20_000)
  }

  private handleDisconnect() {
    if (this.heartbeatTimer) {
      window.clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = undefined
    }

    if (this.socket) {
      this.socket.onclose = null
      this.socket.onerror = null
      this.socket.close()
      this.socket = undefined
    }

    if (this.consumers.size === 0) {
      useTaskStore.getState().setConnectionState('stopped')
      return
    }

    this.scheduleReconnect('ws_degraded')
  }

  private scheduleReconnect(nextState: TaskCenterConnectionState) {
    useTaskStore.getState().setConnectionState(nextState)

    if (this.reconnectTimer) {
      window.clearTimeout(this.reconnectTimer)
    }

    const delay = Math.min(15_000, [1_000, 2_000, 5_000, 10_000][this.reconnectAttempts] ?? 15_000)
    const jitter = Math.round(delay * (Math.random() * 0.2))
    this.reconnectAttempts += 1

    this.reconnectTimer = window.setTimeout(() => {
      void this.ensureConnected()
    }, delay + jitter)
  }

  stop() {
    if (this.reconnectTimer) {
      window.clearTimeout(this.reconnectTimer)
      this.reconnectTimer = undefined
    }

    if (this.heartbeatTimer) {
      window.clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = undefined
    }

    if (this.socket) {
      this.socket.close()
      this.socket = undefined
    }

    useTaskStore.getState().setConnectionState('stopped')
  }
}

function mergeList(target: TaskSubscriptionFilter, key: keyof TaskSubscriptionFilter, values?: string[]) {
  if (!values?.length) {
    return
  }

  target[key] = [...new Set([...(target[key] ?? []), ...values])]
}

function hasSubscriptions(subscriptions: TaskSubscriptionFilter) {
  return Boolean(
    subscriptions.modules?.length ||
      subscriptions.project_ids?.length ||
      subscriptions.batch_ids?.length ||
      subscriptions.task_types?.length ||
      subscriptions.task_ids?.length ||
      subscriptions.statuses?.length,
  )
}

export const taskRealtimeClient = new TaskRealtimeClient()
