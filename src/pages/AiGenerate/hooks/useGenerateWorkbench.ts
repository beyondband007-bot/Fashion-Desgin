import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { frontendApi } from '@/api/frontend'
import { useTaskStore } from '@/store/taskStore'
import type {
  GenerateMode,
  GenerateTaskStatus,
  OutputConfig,
  RecentResult,
  UploadedFile,
} from '@/types/generate'

const PROCESSING_STAGES = ['正在分析服装结构', '正在匹配模特姿态', '正在融合商拍场景', '正在优化高清画质']
const COST_PER_IMAGE = 10

const defaultOutput: OutputConfig = {
  ratio: '3:4',
  pose: 'stand',
  quality: 'hd',
  count: 4,
}

type UseGenerateWorkbenchOptions = {
  mode: GenerateMode
  creditBalance: number
  initialRecent: RecentResult[]
  onConsumeCredits: (amount: number) => void
}

export function useGenerateWorkbench({
  mode,
  creditBalance,
  initialRecent,
  onConsumeCredits,
}: UseGenerateWorkbenchOptions) {
  const [status, setStatus] = useState<GenerateTaskStatus>('idle')
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [selectedModelId, setSelectedModelId] = useState<string>('wm-1')
  const [selectedSceneId, setSelectedSceneId] = useState<string>('ws-1')
  const [output, setOutput] = useState<OutputConfig>(() => ({
    ...defaultOutput,
    count: mode === 'same-style' ? 4 : defaultOutput.count,
  }))
  const [progress, setProgress] = useState(0)
  const [processingStage, setProcessingStage] = useState<string>(PROCESSING_STAGES[0] ?? '')
  const [resultImage, setResultImage] = useState<string>()
  const [sourceImage, setSourceImage] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [recentResults, setRecentResults] = useState<RecentResult[]>(initialRecent)
  const [compareMode, setCompareMode] = useState(false)
  const [comparePosition, setComparePosition] = useState(50)
  const [activeResultId, setActiveResultId] = useState<string>()
  const [activeTaskId, setActiveTaskId] = useState<string>()
  const lifecycleTimersRef = useRef<number[]>([])
  const chargedTaskIdsRef = useRef(new Set<string>())
  const initialRecentKey = useMemo(
    () => initialRecent.map((item) => `${item.id}:${item.status}`).join('|'),
    [initialRecent],
  )
  const activeTask = useTaskStore((state) => (activeTaskId ? state.taskMap[activeTaskId] : undefined))

  useEffect(() => {
    if (!initialRecentKey) {
      return
    }

    setRecentResults(initialRecent)
    setActiveResultId((current) => current ?? initialRecent[0]?.id)
    setResultImage((current) => current ?? initialRecent[0]?.image)
    setSourceImage((current) => current ?? initialRecent[0]?.sourceImage)
    setStatus((current) => (current === 'idle' ? 'completed' : current))
  }, [initialRecentKey, initialRecent])

  const clearLifecycleTimers = useCallback(() => {
    for (const timerId of lifecycleTimersRef.current) {
      window.clearTimeout(timerId)
      window.clearInterval(timerId)
    }

    lifecycleTimersRef.current = []
  }, [])

  useEffect(() => {
    clearLifecycleTimers()
    setStatus('idle')
    setFiles([])
    setSelectedModelId('wm-1')
    setSelectedSceneId('ws-1')
    setOutput({
      ...defaultOutput,
      count: mode === 'same-style' ? 4 : defaultOutput.count,
    })
    setProgress(0)
    setProcessingStage(PROCESSING_STAGES[0] ?? '')
    setResultImage(initialRecent[0]?.image)
    setSourceImage(initialRecent[0]?.sourceImage)
    setErrorMessage(undefined)
    setRecentResults(initialRecent)
    setCompareMode(false)
    setComparePosition(50)
    setActiveResultId(initialRecent[0]?.id)
    setActiveTaskId(undefined)
  }, [clearLifecycleTimers, initialRecent, mode])

  const estimatedCost = useMemo(() => output.count * COST_PER_IMAGE, [output.count])
  const canGenerate =
    files.length > 0 &&
    (mode === 'same-style' || (!!selectedModelId && !!selectedSceneId)) &&
    status !== 'uploading' &&
    status !== 'pending' &&
    status !== 'processing'
  const insufficientCredits = creditBalance < estimatedCost

  useEffect(() => () => clearLifecycleTimers(), [clearLifecycleTimers])

  useEffect(() => {
    if (files.length > 0 && status === 'idle') {
      setStatus('ready')
    }
    if (files.length === 0 && status === 'ready') {
      setStatus('idle')
    }
  }, [files.length, status])

  useEffect(() => {
    if (!activeTask) {
      return
    }

    if (activeTask.status === 'queued' || activeTask.status === 'billing_pending') {
      setStatus('pending')
    } else if (activeTask.status === 'processing') {
      setStatus('processing')
    } else if (activeTask.status === 'completed') {
      setStatus('completed')
    } else if (activeTask.status === 'failed' || activeTask.status === 'cancelled') {
      setStatus('failed')
      setErrorMessage(activeTask.error_message ?? '任务执行失败')
    }

    setProgress(activeTask.progress)
    setProcessingStage(activeTask.stage ?? PROCESSING_STAGES[0] ?? '')

    if (activeTask.status === 'completed') {
      const finalSourceImage = files[0]?.url ?? sourceImage ?? ''
      const finalResultImage = `https://picsum.photos/seed/${activeTask.id}/960/1280`

      setResultImage(finalResultImage)
      setSourceImage(finalSourceImage)

      if (!chargedTaskIdsRef.current.has(activeTask.id)) {
        chargedTaskIdsRef.current.add(activeTask.id)
        onConsumeCredits(Number(activeTask.estimated_credits))
      }
    }
  }, [activeTask, files, onConsumeCredits, sourceImage])

  const uploadFiles = useCallback((incoming: File[]) => {
    setStatus('uploading')
    const mapped = incoming.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      url: URL.createObjectURL(file),
      size: file.size,
      progress: 0,
    }))
    setFiles((prev) => [...prev, ...mapped])

    mapped.forEach((item, index) => {
      let current = 0
      const interval = window.setInterval(() => {
        current += 18 + index * 4
        setFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, progress: Math.min(current, 100) } : f)),
        )
        if (current >= 100) {
          window.clearInterval(interval)
          setStatus((s) => (s === 'uploading' ? 'ready' : s))
        }
      }, 120)

      lifecycleTimersRef.current.push(interval)
    })
  }, [])

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id)
      if (target) URL.revokeObjectURL(target.url)
      return prev.filter((f) => f.id !== id)
    })
  }, [])

  const runBackendMockLifecycle = useCallback(
    (taskId: string) => {
      const steps = [
        { delay: 700, progress: 18, stage: PROCESSING_STAGES[0] ?? '正在分析服装结构' },
        { delay: 1600, progress: 52, stage: PROCESSING_STAGES[1] ?? '正在匹配模特姿态' },
        { delay: 2600, progress: 84, stage: PROCESSING_STAGES[2] ?? '正在融合商拍场景' },
      ]

      for (const [index, step] of steps.entries()) {
        const timerId = window.setTimeout(() => {
          void frontendApi.transitionTask(taskId, {
            status: 'processing',
            progress: step.progress,
            stage: step.stage,
          })
        }, step.delay + index * 80)

        lifecycleTimersRef.current.push(timerId)
      }

      const completeTimerId = window.setTimeout(() => {
        void frontendApi.transitionTask(taskId, {
          status: 'completed',
          progress: 100,
          stage: PROCESSING_STAGES[3] ?? '正在优化高清画质',
        })
      }, 3900)

      lifecycleTimersRef.current.push(completeTimerId)
    },
    [],
  )

  const runLocalFallbackLifecycle = useCallback(() => {
    const resultSeed = `result-${Date.now()}`
    const src = files[0]?.url ?? ''

    const startTimerId = window.setTimeout(() => {
      setStatus('processing')
      let value = 0
      let stageIndex = 0

      const intervalId = window.setInterval(() => {
        value += 6 + Math.random() * 7

        if (value >= 25 * (stageIndex + 1) && stageIndex < PROCESSING_STAGES.length - 1) {
          stageIndex += 1
          setProcessingStage(PROCESSING_STAGES[stageIndex] ?? '')
        }

        if (value >= 100) {
          value = 100
          window.clearInterval(intervalId)
          setProgress(100)
          setResultImage(`https://picsum.photos/seed/${resultSeed}/960/1280`)
          setSourceImage(src)
          setStatus('completed')
          onConsumeCredits(estimatedCost)

          const record: RecentResult = {
            id: `rr-${Date.now()}`,
            image: `https://picsum.photos/seed/${resultSeed}/960/1280`,
            sourceImage: src,
            type: modeLabel(mode),
            createdAt: dayjs().toISOString(),
            status: 'completed',
          }
          setRecentResults((prev) => [record, ...prev].slice(0, 8))
          setActiveResultId(record.id)
          return
        }

        setProgress(Math.round(value))
      }, 180)

      lifecycleTimersRef.current.push(intervalId)
    }, 500)

    lifecycleTimersRef.current.push(startTimerId)
  }, [estimatedCost, files, mode, onConsumeCredits])

  const startGenerate = useCallback(async () => {
    if (!canGenerate || insufficientCredits) {
      return
    }

    clearLifecycleTimers()
    setErrorMessage(undefined)
    setCompareMode(false)
    setStatus('pending')
    setProgress(0)
    setProcessingStage(PROCESSING_STAGES[0] ?? '')

    const taskType = taskTypeByMode(mode)
    const sourcePage = `ai_generate:${mode}`
    const inputAssetIds = files.map((file) => `upload_${file.id}`)
    const projectId = `prj_ui_${Date.now()}`
    const batchId = `bat_ui_${Date.now()}`
    const config: Record<string, unknown> = {
      ratio: output.ratio,
      pose: output.pose,
      quality: output.quality,
      count: output.count,
      mode,
    }

    try {
      const quote = await frontendApi.estimateGenerateTask({
        module: 'ai_generate',
        type: taskType,
        input_asset_ids: inputAssetIds,
        source_page: sourcePage,
        config,
      })

      const created = await frontendApi.createGenerateTask({
        quote_id: quote.quote_id,
        module: 'ai_generate',
        type: taskType,
        project_id: projectId,
        batch_id: batchId,
        source_page: sourcePage,
        input_asset_ids: inputAssetIds,
        config,
        name: `${modeLabel(mode)}生成任务`,
        model_id: selectedModelId,
        scene_id: selectedSceneId,
      })

      setActiveTaskId(created.task.id)
      runBackendMockLifecycle(created.task.id)
      return
    } catch {
      runLocalFallbackLifecycle()
    }
  }, [
    canGenerate,
    clearLifecycleTimers,
    files,
    insufficientCredits,
    mode,
    output.count,
    output.pose,
    output.quality,
    output.ratio,
    runBackendMockLifecycle,
    runLocalFallbackLifecycle,
    selectedModelId,
    selectedSceneId,
  ])

  const selectRecent = useCallback((item: RecentResult) => {
    setActiveResultId(item.id)
    setResultImage(item.image)
    setSourceImage(item.sourceImage)
    setStatus(
      item.status === 'completed'
        ? 'completed'
        : item.status === 'failed'
          ? 'failed'
          : 'processing',
    )
    setCompareMode(false)
  }, [])

  const resetFailed = useCallback(() => {
    setStatus(files.length > 0 ? 'ready' : 'idle')
    setErrorMessage(undefined)
    setProgress(0)
    setActiveTaskId(undefined)
  }, [files.length])

  return {
    status,
    files,
    selectedModelId,
    selectedSceneId,
    output,
    progress,
    processingStage,
    resultImage,
    sourceImage,
    errorMessage,
    recentResults,
    compareMode,
    comparePosition,
    activeResultId,
    estimatedCost,
    canGenerate,
    insufficientCredits,
    setSelectedModelId,
    setSelectedSceneId,
    setOutput,
    setCompareMode,
    setComparePosition,
    uploadFiles,
    removeFile,
    startGenerate,
    selectRecent,
    resetFailed,
  }
}

function taskTypeByMode(mode: GenerateMode) {
  const map = {
    'same-style': 'creative',
    clothes: 'clothes',
    real: 'real',
    mannequin: 'mannequin',
    model: 'model_replace',
  } as const

  return map[mode]
}

function modeLabel(mode: GenerateMode) {
  const map: Record<GenerateMode, string> = {
    'same-style': '同款试衣',
    clothes: '服装图',
    real: '真人图',
    mannequin: '人台图',
    model: '模特替换',
  }

  return map[mode]
}
