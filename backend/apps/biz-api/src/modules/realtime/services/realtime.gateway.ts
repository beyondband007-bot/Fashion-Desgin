import crypto from 'node:crypto'
import type { IncomingMessage, Server as HttpServer } from 'node:http'

import type { WebSocket } from 'ws'

import type {
  TaskRealtimeEventDto,
  TaskStatus,
  TaskSummaryDto,
} from '../../../../../../packages/shared-types/src'
import { taskRepository } from '../../tasks/repositories'

type RealtimeTokenPayload = {
  userId: string
  channel: string
  expiresAt: number
}

type TaskSubscriptionFilter = {
  modules?: string[]
  project_ids?: string[]
  batch_ids?: string[]
  task_types?: string[]
  task_ids?: string[]
  statuses?: string[]
}

type ClientRealtimeMessage =
  | {
      type: 'client.ready'
      subscriptions?: TaskSubscriptionFilter
      resync?: boolean
      request_id?: string
    }
  | {
      type: 'tasks.subscribe'
      subscriptions?: TaskSubscriptionFilter
      replace?: boolean
      request_id?: string
    }
  | {
      type: 'tasks.unsubscribe'
      subscriptions?: TaskSubscriptionFilter
      request_id?: string
    }
  | {
      type: 'tasks.resync'
      subscriptions?: TaskSubscriptionFilter
      request_id?: string
    }
  | {
      type: 'system.ping'
      request_id?: string
    }

type RealtimeConnection = {
  socket: WebSocket
  userId: string
  channel: string
  connectionId: string
  subscriptions?: TaskSubscriptionFilter
}

type ServerRealtimeEnvelope =
  | {
      event_type: 'system.connected'
      occurred_at: string
      channel: string
      connection_id: string
      heartbeat_interval_ms: number
      capabilities: string[]
    }
  | {
      event_type: 'system.pong'
      occurred_at: string
      request_id?: string
    }
  | {
      event_type: 'system.subscribed' | 'system.unsubscribed'
      occurred_at: string
      request_id?: string
      subscriptions?: TaskSubscriptionFilter
    }
  | {
      event_type: 'task.snapshot'
      occurred_at: string
      request_id?: string
      subscriptions?: TaskSubscriptionFilter
      items: TaskSummaryDto[]
    }
  | {
      event_type: 'system.error'
      occurred_at: string
      request_id?: string
      error_code: string
      error_message: string
    }

const MAX_CONNECTIONS_PER_USER = 5
const TOKEN_TTL_SECONDS = 300
const HEARTBEAT_INTERVAL_MS = 25_000
const ACTIVE_TASK_STATUSES: TaskStatus[] = ['billing_pending', 'queued', 'processing', 'cancelling']

export class RealtimeGateway {
  private readonly tokenStore = new Map<string, RealtimeTokenPayload>()
  private readonly socketsByUser = new Map<string, Set<RealtimeConnection>>()
  private wss?: import('ws').WebSocketServer
  private heartbeatTimer?: NodeJS.Timeout

  attach(server: HttpServer) {
    if (this.wss) {
      return
    }

    const { WebSocketServer } = require('ws') as typeof import('ws')

    this.wss = new WebSocketServer({
      noServer: true,
    })

    this.wss.on(
      'connection',
      (
        socket: WebSocket,
        _request: IncomingMessage,
        connection: { userId: string; channel: string },
      ) => {
        const realtimeConnection = this.registerConnection(socket, connection.userId, connection.channel)

        this.sendEnvelope(socket, {
          event_type: 'system.connected',
          occurred_at: new Date().toISOString(),
          channel: connection.channel,
          connection_id: realtimeConnection.connectionId,
          heartbeat_interval_ms: HEARTBEAT_INTERVAL_MS,
          capabilities: [
            'tasks.subscribe',
            'tasks.unsubscribe',
            'tasks.resync',
            'task.snapshot',
            'system.ping',
          ],
        })

        socket.on('message', async (raw) => {
          await this.handleSocketMessage(realtimeConnection, raw.toString())
        })

        socket.on('close', () => {
          this.unregisterConnection(socket, connection.userId)
        })

        socket.on('pong', () => {
          ;(socket as WebSocket & { isAlive?: boolean }).isAlive = true
        })
      },
    )

    server.on('upgrade', (request, socket, head) => {
      const pathname = new URL(request.url ?? '/', 'http://localhost').pathname

      if (pathname !== '/api/v1/ws') {
        socket.destroy()
        return
      }

      const validated = this.validateUpgradeRequest(request)

      if (!validated.ok) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
        socket.destroy()
        return
      }

      this.wss?.handleUpgrade(request, socket, head, (ws) => {
        this.wss?.emit('connection', ws, request, validated.connection)
      })
    })

    this.heartbeatTimer = setInterval(() => {
      for (const connections of this.socketsByUser.values()) {
        for (const connection of connections) {
          const socket = connection.socket as WebSocket & { isAlive?: boolean }

          if (socket.isAlive === false) {
            socket.terminate()
            continue
          }

          socket.isAlive = false
          socket.ping()
        }
      }

      this.cleanupExpiredTokens()
    }, HEARTBEAT_INTERVAL_MS)
  }

  issueToken(userId: string, channel: string) {
    this.cleanupExpiredTokens()

    const token = `ws_${crypto.randomUUID().replace(/-/g, '')}`
    const expiresAt = Date.now() + TOKEN_TTL_SECONDS * 1000

    this.tokenStore.set(token, {
      userId,
      channel,
      expiresAt,
    })

    return {
      token,
      expires_in: TOKEN_TTL_SECONDS,
      channel,
    }
  }

  publishTaskEvent(userId: string, event: TaskRealtimeEventDto) {
    const connections = this.socketsByUser.get(userId)

    if (!connections || connections.size === 0) {
      return
    }

    const payload = JSON.stringify(event)

    for (const connection of connections) {
      if (!matchesTaskSubscriptions(connection.subscriptions, event.task)) {
        continue
      }

      if (connection.socket.readyState === connection.socket.OPEN) {
        connection.socket.send(payload)
      }
    }
  }

  private validateUpgradeRequest(request: IncomingMessage) {
    const token = new URL(request.url ?? '/', 'http://localhost').searchParams.get('token')

    if (!token) {
      return { ok: false as const }
    }

    const payload = this.tokenStore.get(token)

    if (!payload || payload.expiresAt <= Date.now()) {
      this.tokenStore.delete(token)
      return { ok: false as const }
    }

    const activeConnections = this.socketsByUser.get(payload.userId)?.size ?? 0

    if (activeConnections >= MAX_CONNECTIONS_PER_USER) {
      return { ok: false as const }
    }

    this.tokenStore.delete(token)

    return {
      ok: true as const,
      connection: {
        userId: payload.userId,
        channel: payload.channel,
      },
    }
  }

  private registerConnection(socket: WebSocket, userId: string, channel: string) {
    ;(socket as WebSocket & { isAlive?: boolean }).isAlive = true

    const current = this.socketsByUser.get(userId) ?? new Set<RealtimeConnection>()
    const connection: RealtimeConnection = {
      socket,
      userId,
      channel,
      connectionId: `wsc_${crypto.randomUUID().replace(/-/g, '')}`,
    }

    current.add(connection)
    this.socketsByUser.set(userId, current)

    return connection
  }

  private unregisterConnection(socket: WebSocket, userId: string) {
    const current = this.socketsByUser.get(userId)

    if (!current) {
      return
    }

    for (const connection of current) {
      if (connection.socket === socket) {
        current.delete(connection)
      }
    }

    if (current.size === 0) {
      this.socketsByUser.delete(userId)
    }
  }

  private async handleSocketMessage(connection: RealtimeConnection, raw: string) {
    let payload: ClientRealtimeMessage

    try {
      payload = JSON.parse(raw) as ClientRealtimeMessage
    } catch {
      this.sendEnvelope(connection.socket, {
        event_type: 'system.error',
        occurred_at: new Date().toISOString(),
        error_code: 'WS_BAD_PAYLOAD',
        error_message: 'Invalid realtime payload',
      })
      return
    }

    if (payload.type === 'system.ping') {
      this.sendEnvelope(connection.socket, {
        event_type: 'system.pong',
        occurred_at: new Date().toISOString(),
        request_id: payload.request_id,
      })
      return
    }

    if (payload.type === 'client.ready') {
      connection.subscriptions = normalizeSubscriptions(payload.subscriptions)

      if (payload.resync !== false) {
        await this.sendSnapshot(connection, payload.request_id)
      }

      this.sendEnvelope(connection.socket, {
        event_type: 'system.subscribed',
        occurred_at: new Date().toISOString(),
        request_id: payload.request_id,
        subscriptions: connection.subscriptions,
      })
      return
    }

    if (payload.type === 'tasks.subscribe') {
      const nextSubscriptions = normalizeSubscriptions(payload.subscriptions)
      connection.subscriptions = payload.replace
        ? nextSubscriptions
        : mergeSubscriptions(connection.subscriptions, nextSubscriptions)

      this.sendEnvelope(connection.socket, {
        event_type: 'system.subscribed',
        occurred_at: new Date().toISOString(),
        request_id: payload.request_id,
        subscriptions: connection.subscriptions,
      })
      return
    }

    if (payload.type === 'tasks.unsubscribe') {
      connection.subscriptions = subtractSubscriptions(connection.subscriptions, payload.subscriptions)

      this.sendEnvelope(connection.socket, {
        event_type: 'system.unsubscribed',
        occurred_at: new Date().toISOString(),
        request_id: payload.request_id,
        subscriptions: connection.subscriptions,
      })
      return
    }

    if (payload.type === 'tasks.resync') {
      const subscriptions = normalizeSubscriptions(payload.subscriptions)

      if (subscriptions) {
        connection.subscriptions = subscriptions
      }

      await this.sendSnapshot(connection, payload.request_id)
    }
  }

  private async sendSnapshot(connection: RealtimeConnection, requestId?: string) {
    const tasks = await taskRepository.listTasks()
    const filteredItems = tasks
      .filter((task) => shouldIncludeInSnapshot(task, connection.subscriptions))
      .map((task) => ({
        id: task.id,
        name: task.name,
        module: task.module,
        scene: task.scene,
        task_type: task.task_type,
        project_id: task.project_id,
        batch_id: task.batch_id,
        source_page: task.source_page,
        status: task.status,
        billing_status: task.billing_status,
        progress: task.progress,
        stage: task.stage,
        estimated_credits: task.estimated_credits,
        settled_credits: task.settled_credits,
        error_code: task.error_code,
        error_message: task.error_message,
        cancellable: task.cancellable,
        created_at: task.created_at,
        updated_at: task.updated_at,
        completed_at: task.completed_at,
        version: task.version,
      }))

    this.sendEnvelope(connection.socket, {
      event_type: 'task.snapshot',
      occurred_at: new Date().toISOString(),
      request_id: requestId,
      subscriptions: connection.subscriptions,
      items: filteredItems,
    })
  }

  private sendEnvelope(socket: WebSocket, payload: ServerRealtimeEnvelope) {
    if (socket.readyState !== socket.OPEN) {
      return
    }

    socket.send(JSON.stringify(payload))
  }

  private cleanupExpiredTokens() {
    const now = Date.now()

    for (const [token, payload] of this.tokenStore.entries()) {
      if (payload.expiresAt <= now) {
        this.tokenStore.delete(token)
      }
    }
  }
}

function normalizeSubscriptions(
  subscriptions?: TaskSubscriptionFilter,
): TaskSubscriptionFilter | undefined {
  if (!subscriptions) {
    return undefined
  }

  const normalized: TaskSubscriptionFilter = {}

  if (subscriptions.modules?.length) {
    normalized.modules = uniqueStrings(subscriptions.modules)
  }

  if (subscriptions.project_ids?.length) {
    normalized.project_ids = uniqueStrings(subscriptions.project_ids)
  }

  if (subscriptions.batch_ids?.length) {
    normalized.batch_ids = uniqueStrings(subscriptions.batch_ids)
  }

  if (subscriptions.task_types?.length) {
    normalized.task_types = uniqueStrings(subscriptions.task_types)
  }

  if (subscriptions.task_ids?.length) {
    normalized.task_ids = uniqueStrings(subscriptions.task_ids)
  }

  if (subscriptions.statuses?.length) {
    normalized.statuses = uniqueStrings(subscriptions.statuses)
  }

  return isEmptySubscriptions(normalized) ? undefined : normalized
}

function mergeSubscriptions(
  current?: TaskSubscriptionFilter,
  incoming?: TaskSubscriptionFilter,
): TaskSubscriptionFilter | undefined {
  if (!current) {
    return incoming
  }

  if (!incoming) {
    return current
  }

  return normalizeSubscriptions({
    modules: [...(current.modules ?? []), ...(incoming.modules ?? [])],
    project_ids: [...(current.project_ids ?? []), ...(incoming.project_ids ?? [])],
    batch_ids: [...(current.batch_ids ?? []), ...(incoming.batch_ids ?? [])],
    task_types: [...(current.task_types ?? []), ...(incoming.task_types ?? [])],
    task_ids: [...(current.task_ids ?? []), ...(incoming.task_ids ?? [])],
    statuses: [...(current.statuses ?? []), ...(incoming.statuses ?? [])],
  })
}

function subtractSubscriptions(
  current?: TaskSubscriptionFilter,
  removal?: TaskSubscriptionFilter,
): TaskSubscriptionFilter | undefined {
  if (!current) {
    return undefined
  }

  if (!removal) {
    return undefined
  }

  const normalizedRemoval = normalizeSubscriptions(removal)

  if (!normalizedRemoval) {
    return {}
  }

  return normalizeSubscriptions({
    modules: subtractList(current.modules, normalizedRemoval.modules),
    project_ids: subtractList(current.project_ids, normalizedRemoval.project_ids),
    batch_ids: subtractList(current.batch_ids, normalizedRemoval.batch_ids),
    task_types: subtractList(current.task_types, normalizedRemoval.task_types),
    task_ids: subtractList(current.task_ids, normalizedRemoval.task_ids),
    statuses: subtractList(current.statuses, normalizedRemoval.statuses),
  }) ?? {}
}

function subtractList(current?: string[], removal?: string[]) {
  if (!current?.length) {
    return undefined
  }

  if (!removal?.length) {
    return current
  }

  const removalSet = new Set(removal)
  const next = current.filter((item) => !removalSet.has(item))

  return next.length > 0 ? next : undefined
}

function shouldIncludeInSnapshot(task: TaskSummaryDto, subscriptions?: TaskSubscriptionFilter) {
  if (subscriptions && isEmptySubscriptions(subscriptions)) {
    return false
  }

  if (subscriptions?.task_ids?.length) {
    return matchesTaskSubscriptions(subscriptions, task)
  }

  const effectiveSubscriptions = normalizeSubscriptions({
    ...subscriptions,
    statuses: subscriptions?.statuses?.length ? subscriptions.statuses : ACTIVE_TASK_STATUSES,
  })

  return matchesTaskSubscriptions(effectiveSubscriptions, task)
}

function matchesTaskSubscriptions(subscriptions: TaskSubscriptionFilter | undefined, task: TaskSummaryDto) {
  if (!subscriptions) {
    return true
  }

  if (isEmptySubscriptions(subscriptions)) {
    return false
  }

  if (subscriptions.modules?.length && !subscriptions.modules.includes(task.module)) {
    return false
  }

  if (
    subscriptions.project_ids?.length &&
    (!task.project_id || !subscriptions.project_ids.includes(task.project_id))
  ) {
    return false
  }

  if (subscriptions.batch_ids?.length && (!task.batch_id || !subscriptions.batch_ids.includes(task.batch_id))) {
    return false
  }

  if (subscriptions.task_types?.length && !subscriptions.task_types.includes(task.task_type)) {
    return false
  }

  if (subscriptions.task_ids?.length && !subscriptions.task_ids.includes(task.id)) {
    return false
  }

  if (subscriptions.statuses?.length && !subscriptions.statuses.includes(task.status)) {
    return false
  }

  return true
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.filter(Boolean))]
}

function isEmptySubscriptions(subscriptions: TaskSubscriptionFilter) {
  return !subscriptions.modules?.length &&
    !subscriptions.project_ids?.length &&
    !subscriptions.batch_ids?.length &&
    !subscriptions.task_types?.length &&
    !subscriptions.task_ids?.length &&
    !subscriptions.statuses?.length
}

export const realtimeGateway = new RealtimeGateway()
