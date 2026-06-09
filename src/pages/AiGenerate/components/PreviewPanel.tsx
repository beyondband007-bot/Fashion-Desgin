import { Button, Progress, Tag } from '@arco-design/web-react'
import {
  IconDownload,
  IconExpand,
  IconRefresh,
  IconSave,
  IconSwap,
} from '@arco-design/web-react/icon'
import { AnimatePresence, motion } from 'framer-motion'

import type { GenerateTaskStatus, RecentResult, WorkbenchScene } from '@/types/generate'

import { CompareViewer } from './CompareViewer'
import { RecentResults } from './RecentResults'

import styles from '../index.module.scss'

type PreviewPanelProps = {
  status: GenerateTaskStatus
  progress: number
  processingStage: string
  resultImage: string | undefined
  sourceImage: string | undefined
  scene: WorkbenchScene | undefined
  compareMode: boolean
  comparePosition: number
  errorMessage: string | undefined
  recentResults: RecentResult[]
  activeResultId: string | undefined
  onToggleCompare: () => void
  onComparePositionChange: (value: number) => void
  onRegenerate: () => void
  onResetFailed: () => void
  onSelectRecent: (item: RecentResult) => void
}

export function PreviewPanel({
  status,
  progress,
  processingStage,
  resultImage,
  sourceImage,
  scene,
  compareMode,
  comparePosition,
  errorMessage,
  recentResults,
  activeResultId,
  onToggleCompare,
  onComparePositionChange,
  onRegenerate,
  onResetFailed,
  onSelectRecent,
}: PreviewPanelProps) {
  const hasResult = status === 'completed' && !!resultImage
  const canCompare = hasResult && !!sourceImage

  return (
    <aside className={styles.previewPanel}>
      <div className={styles.previewHeader}>
        <div>
          <h2 className={styles.previewTitle}>生成结果预览</h2>
          <p className={styles.previewSubtitle}>支持放大、下载、前后对比</p>
        </div>
        <div className={styles.previewActions}>
          <Tag color={statusColor(status)}>{statusLabel(status)}</Tag>
          <Button
            type="outline"
            size="small"
            icon={<IconSwap />}
            disabled={!canCompare}
            onClick={onToggleCompare}
          >
            前后对比
          </Button>
          <Button type="outline" size="small" icon={<IconDownload />} disabled={!hasResult}>
            下载结果
          </Button>
          <Button type="outline" size="small" icon={<IconSave />} disabled={!hasResult}>
            保存到项目
          </Button>
        </div>
      </div>

      <div
        className={styles.resultCanvas}
        style={scene ? { backgroundImage: `url(${scene.image})` } : undefined}
      >
        <div className={styles.resultCanvasInner}>
          {status === 'idle' || status === 'ready' || status === 'uploading' ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIllustration} />
              <h3>上传素材并选择模特后开始生成</h3>
              <p>右侧将展示 AI 商拍结果，支持高清预览与前后对比</p>
              <Button type="outline">查看示例</Button>
            </div>
          ) : null}

          {status === 'pending' || status === 'processing' ? (
            <div className={styles.processingState}>
              <div className={styles.progressRing}>
                <Progress type="circle" percent={progress} width={120} />
              </div>
              <p className={styles.processingStage}>{processingStage}</p>
              <div className={styles.skeletonGrid}>
                <div className={styles.skeletonBlock} />
                <div className={styles.skeletonBlock} />
              </div>
            </div>
          ) : null}

          {status === 'failed' ? (
            <div className={styles.failedState}>
              <h3>生成失败</h3>
              <p>{errorMessage ?? '服务繁忙，请稍后重试。积分已退还。'}</p>
              <Button type="primary" icon={<IconRefresh />} onClick={onResetFailed}>
                重新生成
              </Button>
            </div>
          ) : null}

          <AnimatePresence>
            {hasResult && compareMode && sourceImage ? (
              <motion.div
                key="compare"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.resultImageWrap}
              >
                <CompareViewer
                  sourceImage={sourceImage}
                  resultImage={resultImage}
                  position={comparePosition}
                  onPositionChange={onComparePositionChange}
                />
              </motion.div>
            ) : null}
            {hasResult && !compareMode ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.resultImageWrap}
              >
                <img src={resultImage} alt="生成结果" className={styles.resultImage} />
                <span className={styles.hdBadge}>高清</span>
                <div className={styles.floatingToolbar}>
                  <button type="button" aria-label="放大">
                    <IconExpand />
                  </button>
                  <button
                    type="button"
                    aria-label="对比"
                    disabled={!canCompare}
                    onClick={onToggleCompare}
                  >
                    <IconSwap />
                  </button>
                  <button type="button" aria-label="下载">
                    <IconDownload />
                  </button>
                  <button type="button" aria-label="重新生成" onClick={onRegenerate}>
                    <IconRefresh />
                  </button>
                  <button type="button" aria-label="保存">
                    <IconSave />
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <RecentResults items={recentResults} activeId={activeResultId} onSelect={onSelectRecent} />
    </aside>
  )
}

function statusLabel(status: GenerateTaskStatus) {
  const map: Record<GenerateTaskStatus, string> = {
    idle: '待开始',
    uploading: '上传中',
    ready: '可生成',
    pending: '排队中',
    processing: '生成中',
    completed: '已完成',
    failed: '失败',
  }
  return map[status]
}

function statusColor(status: GenerateTaskStatus) {
  if (status === 'completed') return 'green'
  if (status === 'processing' || status === 'pending') return 'arcoblue'
  if (status === 'failed') return 'red'
  return 'gray'
}
