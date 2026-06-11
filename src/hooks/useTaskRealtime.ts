import { useEffect } from 'react'

import { taskRealtimeClient } from '@/services/taskRealtimeClient'

type TaskSubscriptionFilter = {
  modules?: string[]
  project_ids?: string[]
  batch_ids?: string[]
  task_types?: string[]
  task_ids?: string[]
  statuses?: string[]
}

export function useTaskRealtime(key: string, subscriptions?: TaskSubscriptionFilter) {
  useEffect(() => {
    taskRealtimeClient.registerConsumer(key, subscriptions)

    return () => {
      taskRealtimeClient.unregisterConsumer(key)
    }
  }, [
    key,
    subscriptions?.batch_ids?.join(','),
    subscriptions?.modules?.join(','),
    subscriptions?.project_ids?.join(','),
    subscriptions?.statuses?.join(','),
    subscriptions?.task_ids?.join(','),
    subscriptions?.task_types?.join(','),
  ])
}
