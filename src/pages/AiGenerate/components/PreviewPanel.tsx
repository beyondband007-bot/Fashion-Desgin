import {
  IconDownload,
  IconExpand,
  IconRefresh,
  IconSwap,
} from '@arco-design/web-react/icon'
import { Progress } from '@arco-design/web-react'
import { AnimatePresence, motion } from 'framer-motion'

import type { GenerateTaskStatus, RecentResult, WorkbenchScene } from '@/types/generate'

import { CompareViewer } from './CompareViewer'
import { RecentResults } from './RecentResults'
import { WorkflowGuide } from './WorkflowGuide'

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
  const isIdle = status === 'idle' || status === 'ready' || status === 'uploading'

  return (
    <main className={styles.workspaceColumn}>
      <div
        className={styles.workspaceCanvas}
        style={scene && !isIdle ? { backgroundImage: `url(${scene.image})` } : undefined}
      >
        {isIdle ? <WorkflowGuide /> : null}

        {status === 'pending' || status === 'processing' ? (
          <div className={styles.processingState}>
            <Progress type="circle" percent={progress} width={100} />
            <p className={styles.processingStage}>{processingStage}</p>
          </div>
        ) : null}

        {status === 'failed' ? (
          <div className={styles.failedState}>
            <h3>生成失败</h3>
            <p>{errorMessage ?? '服务繁忙，请稍后重试。积分已退还。'}</p>
            <button type="button" className={styles.generateBtn} onClick={onResetFailed}>
              重新生成
            </button>
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
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {recentResults.length > 0 && hasResult ? (
        <RecentResults items={recentResults} activeId={activeResultId} onSelect={onSelectRecent} />
      ) : null}
    </main>
  )
}
