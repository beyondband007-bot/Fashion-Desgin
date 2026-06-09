import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import type {
  GenerateMode,
  GenerateTaskStatus,
  OutputConfig,
  RecentResult,
  UploadedFile,
} from '@/types/generate'

const PROCESSING_STAGES = [
  '正在分析服装结构',
  '正在匹配模特姿态',
  '正在融合商拍场景',
  '正在优化高清画质',
]

const COST_PER_IMAGE = 12

const defaultOutput: OutputConfig = {
  ratio: '3:4',
  pose: 'stand',
  quality: 'hd',
  count: 2,
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
  const [selectedModelId, setSelectedModelId] = useState<string>()
  const [selectedSceneId, setSelectedSceneId] = useState<string>()
  const [output, setOutput] = useState<OutputConfig>(defaultOutput)
  const [progress, setProgress] = useState(0)
  const [processingStage, setProcessingStage] = useState<string>(PROCESSING_STAGES[0] ?? '')
  const [resultImage, setResultImage] = useState<string>()
  const [sourceImage, setSourceImage] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [recentResults, setRecentResults] = useState<RecentResult[]>(initialRecent)

  useEffect(() => {
    if (initialRecent.length > 0) {
      setRecentResults(initialRecent)
    }
  }, [initialRecent])
  const [compareMode, setCompareMode] = useState(false)
  const [comparePosition, setComparePosition] = useState(50)
  const [activeResultId, setActiveResultId] = useState<string>()
  const timerRef = useRef<number>()

  const estimatedCost = useMemo(() => output.count * COST_PER_IMAGE, [output.count])
  const canGenerate =
    files.length > 0 &&
    !!selectedModelId &&
    !!selectedSceneId &&
    status !== 'uploading' &&
    status !== 'pending' &&
    status !== 'processing'
  const insufficientCredits = creditBalance < estimatedCost

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
      timerRef.current = undefined
    }
  }

  useEffect(() => () => clearTimer(), [])

  useEffect(() => {
    if (files.length > 0 && status === 'idle') {
      setStatus('ready')
    }
    if (files.length === 0 && status === 'ready') {
      setStatus('idle')
    }
  }, [files.length, status])

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
    })
  }, [])

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id)
      if (target) URL.revokeObjectURL(target.url)
      return prev.filter((f) => f.id !== id)
    })
  }, [])

  const startGenerate = useCallback(() => {
    if (!canGenerate || insufficientCredits) return

    clearTimer()
    setErrorMessage(undefined)
    setCompareMode(false)
    setStatus('pending')
    setProgress(0)
    setProcessingStage(PROCESSING_STAGES[0] ?? '')

    window.setTimeout(() => {
      setStatus('processing')
      let value = 0
      let stageIndex = 0

      timerRef.current = window.setInterval(() => {
        value += 4 + Math.random() * 6
        if (value >= 25 * (stageIndex + 1) && stageIndex < PROCESSING_STAGES.length - 1) {
          stageIndex += 1
          setProcessingStage(PROCESSING_STAGES[stageIndex] ?? '')
        }
        if (value >= 100) {
          value = 100
          clearTimer()
          const resultUrl = `https://picsum.photos/seed/result-${Date.now()}/960/1280`
          const src = files[0]?.url ?? ''
          setProgress(100)
          setResultImage(resultUrl)
          setSourceImage(src)
          setStatus('completed')
          onConsumeCredits(estimatedCost)

          const record: RecentResult = {
            id: `rr-${Date.now()}`,
            image: resultUrl,
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
    }, 800)
  }, [canGenerate, insufficientCredits, estimatedCost, files, mode, onConsumeCredits])

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

function modeLabel(mode: GenerateMode) {
  const map: Record<GenerateMode, string> = {
    clothes: '衣服图',
    real: '真人图',
    mannequin: '人台图',
    model: '模特替换',
  }
  return map[mode]
}
