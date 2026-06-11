import { create } from 'zustand'

import type { RecentResult } from '@/types/generate'

export type TaskCenterConnectionState =
  | 'idle'
  | 'connecting_ws'
  | 'ws_active'
  | 'ws_degraded'
  | 'polling_active'
  | 'resyncing'
  | 'stopped'

export type TaskCenterTask = {
  id: string
  name: string
  module: string
  scene: string | null
  task_type: string
  project_id: string | null
  batch_id: string | null
  source_page: string | null
  status: string
  billing_status: string
  progress: number
  stage: string | null
  estimated_credits: string
  settled_credits: string | null
  error_code: string | null
  error_message: string | null
  cancellable: boolean
  created_at: string
  updated_at: string
  completed_at: string | null
  version: number
}

type TaskStoreState = {
  taskMap: Record<string, TaskCenterTask>
  taskIdsByModule: Record<string, string[]>
  taskIdsByProject: Record<string, string[]>
  taskIdsByBatch: Record<string, string[]>
  runningTaskIds: string[]
  recentCompletedTaskIds: string[]
  connectionState: TaskCenterConnectionState
  lastEventAt: string | undefined
  setConnectionState: (connectionState: TaskCenterConnectionState) => void
  applySnapshot: (tasks: TaskCenterTask[]) => void
  upsertTask: (task: TaskCenterTask, occurredAt?: string) => void
  clearAll: () => void
}

type TaskStoreStateLike = Omit<
  TaskStoreState,
  'setConnectionState' | 'applySnapshot' | 'upsertTask' | 'clearAll'
>

const TERMINAL_STATUSES = new Set(['completed', 'failed', 'cancelled'])
const RUNNING_STATUSES = new Set(['billing_pending', 'queued', 'processing', 'cancelling'])
const RECENT_COMPLETED_LIMIT = 20

export const useTaskStore = create<TaskStoreState>((set) => ({
  taskMap: {},
  taskIdsByModule: {},
  taskIdsByProject: {},
  taskIdsByBatch: {},
  runningTaskIds: [],
  recentCompletedTaskIds: [],
  connectionState: 'idle',
  lastEventAt: undefined,
  setConnectionState: (connectionState) => set({ connectionState }),
  applySnapshot: (tasks) =>
    set((state) => {
      let nextState: TaskStoreStateLike = {
        ...state,
        taskMap: { ...state.taskMap },
        taskIdsByModule: cloneIndexMap(state.taskIdsByModule),
        taskIdsByProject: cloneIndexMap(state.taskIdsByProject),
        taskIdsByBatch: cloneIndexMap(state.taskIdsByBatch),
        runningTaskIds: [...state.runningTaskIds],
        recentCompletedTaskIds: [...state.recentCompletedTaskIds],
      }

      for (const task of tasks) {
        nextState = applyTaskMutation(nextState, task)
      }

      return nextState
    }),
  upsertTask: (task, occurredAt) =>
    set((state) => {
      const nextState = applyTaskMutation(
        {
          ...state,
          taskMap: { ...state.taskMap },
          taskIdsByModule: cloneIndexMap(state.taskIdsByModule),
          taskIdsByProject: cloneIndexMap(state.taskIdsByProject),
          taskIdsByBatch: cloneIndexMap(state.taskIdsByBatch),
          runningTaskIds: [...state.runningTaskIds],
          recentCompletedTaskIds: [...state.recentCompletedTaskIds],
        },
        task,
      )

      return {
        ...nextState,
        lastEventAt: occurredAt ?? task.updated_at,
      }
    }),
  clearAll: () =>
    set({
      taskMap: {},
      taskIdsByModule: {},
      taskIdsByProject: {},
      taskIdsByBatch: {},
      runningTaskIds: [],
      recentCompletedTaskIds: [],
      connectionState: 'idle',
      lastEventAt: undefined,
    }),
}))

export function selectModuleRecentResultsFromState(
  state: Pick<TaskStoreState, 'recentCompletedTaskIds' | 'taskMap'>,
  module: string,
  limit = 8,
): RecentResult[] {
  return state.recentCompletedTaskIds
    .map((taskId) => state.taskMap[taskId])
    .filter(isDefinedTask)
    .filter((task) => task.module === module)
    .slice(0, limit)
    .map(mapTaskToRecentResult)
}

export function selectModuleRecentResultsKey(
  state: Pick<TaskStoreState, 'recentCompletedTaskIds' | 'taskMap'>,
  module: string,
  limit = 8,
): string {
  return state.recentCompletedTaskIds
    .map((taskId) => state.taskMap[taskId])
    .filter(isDefinedTask)
    .filter((task) => task.module === module)
    .slice(0, limit)
    .map((task) => `${task.id}:${task.version}:${task.status}`)
    .join('|')
}

export function selectModuleRunningTasksFromState(
  state: Pick<TaskStoreState, 'runningTaskIds' | 'taskMap'>,
  module: string,
) {
  return state.runningTaskIds
    .map((taskId) => state.taskMap[taskId])
    .filter(isDefinedTask)
    .filter((task) => task.module === module)
}

function isDefinedTask(task: TaskCenterTask | undefined): task is TaskCenterTask {
  return Boolean(task)
}

function applyTaskMutation(state: TaskStoreStateLike, incomingTask: TaskCenterTask): TaskStoreStateLike {
  const currentTask = state.taskMap[incomingTask.id]

  if (currentTask && incomingTask.version < currentTask.version) {
    return state
  }

  state.taskMap[incomingTask.id] =
    currentTask && incomingTask.version === currentTask.version
      ? { ...currentTask, ...incomingTask }
      : incomingTask

  const task = state.taskMap[incomingTask.id] ?? incomingTask

  appendIndex(state.taskIdsByModule, task.module, task.id)

  if (task.project_id) {
    appendIndex(state.taskIdsByProject, task.project_id, task.id)
  }

  if (task.batch_id) {
    appendIndex(state.taskIdsByBatch, task.batch_id, task.id)
  }

  if (RUNNING_STATUSES.has(task.status)) {
    appendUnique(state.runningTaskIds, task.id)
  } else {
    removeValue(state.runningTaskIds, task.id)
  }

  if (TERMINAL_STATUSES.has(task.status)) {
    prependUnique(state.recentCompletedTaskIds, task.id)
    state.recentCompletedTaskIds = state.recentCompletedTaskIds.slice(0, RECENT_COMPLETED_LIMIT)
  }

  return state
}

function mapTaskToRecentResult(task: TaskCenterTask): RecentResult {
  return {
    id: task.id,
    image: `https://picsum.photos/seed/${task.id}/960/1280`,
    sourceImage: `https://picsum.photos/seed/src-${task.id}/960/1280`,
    type: mapTaskTypeLabel(task.task_type),
    createdAt: task.completed_at ?? task.updated_at,
    status: mapTaskStatus(task.status),
  }
}

function mapTaskStatus(status: string): RecentResult['status'] {
  if (status === 'completed') {
    return 'completed'
  }

  if (status === 'failed' || status === 'cancelled') {
    return 'failed'
  }

  return 'processing'
}

function mapTaskTypeLabel(taskType: string) {
  const map: Record<string, string> = {
    clothes: '服装图',
    real: '真人图',
    mannequin: '人台图',
    model_replace: '换模特',
    video: '视频',
    creative: '创意生图',
  }

  return map[taskType] ?? taskType
}

function appendIndex(indexMap: Record<string, string[]>, key: string, taskId: string) {
  indexMap[key] ??= []
  appendUnique(indexMap[key], taskId)
}

function appendUnique(list: string[], value: string) {
  if (!list.includes(value)) {
    list.push(value)
  }
}

function prependUnique(list: string[], value: string) {
  removeValue(list, value)
  list.unshift(value)
}

function removeValue(list: string[], value: string) {
  const index = list.indexOf(value)
  if (index >= 0) {
    list.splice(index, 1)
  }
}

function cloneIndexMap(map: Record<string, string[]>) {
  return Object.fromEntries(Object.entries(map).map(([key, value]) => [key, [...value]]))
}
