const image = (seed: string, w = 400, h = 520) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

export type VideoCaseItem = {
  id: string
  cover: string
  inset: string
}

export const mockVideoCases: VideoCaseItem[] = [
  { id: 'vc-1', cover: image('vc-1'), inset: image('vc-1-inset', 80, 100) },
  { id: 'vc-2', cover: image('vc-2'), inset: image('vc-2-inset', 80, 100) },
  { id: 'vc-3', cover: image('vc-3'), inset: image('vc-3-inset', 80, 100) },
  { id: 'vc-4', cover: image('vc-4'), inset: image('vc-4-inset', 80, 100) },
  { id: 'vc-5', cover: image('vc-5'), inset: image('vc-5-inset', 80, 100) },
  { id: 'vc-6', cover: image('vc-6'), inset: image('vc-6-inset', 80, 100) },
  { id: 'vc-7', cover: image('vc-7'), inset: image('vc-7-inset', 80, 100) },
  { id: 'vc-8', cover: image('vc-8'), inset: image('vc-8-inset', 80, 100) },
  { id: 'vc-9', cover: image('vc-9'), inset: image('vc-9-inset', 80, 100) },
  { id: 'vc-10', cover: image('vc-10'), inset: image('vc-10-inset', 80, 100) },
]

export const mockVideoWorkflow = {
  model: image('wf-model', 280, 360),
  action: image('wf-action', 280, 360),
  result: image('wf-result', 280, 360),
}
