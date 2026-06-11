import type { TaskRealtimeEventDto } from '../../../../../../packages/shared-types/src'
import { DEMO_TASK_USER_ID } from '../../tasks/constants/demo-task-context'
import { realtimeGateway } from './realtime.gateway'

export function publishTaskRealtimeEvent(event: TaskRealtimeEventDto) {
  realtimeGateway.publishTaskEvent(DEMO_TASK_USER_ID, event)
}
