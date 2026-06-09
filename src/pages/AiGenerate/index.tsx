import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { mockService } from '@/services/mockService'
import { useCreditStore } from '@/store/creditStore'
import type { GenerateMode } from '@/types/generate'

import { GenerateActionBar } from './components/GenerateActionBar'
import { GenerateHeader } from './components/GenerateHeader'
import { ModeTabs } from './components/ModeTabs'
import { ModelDrawer } from './components/ModelDrawer'
import { ModelStep } from './components/ModelStep'
import { OutputConfigStep } from './components/OutputConfigStep'
import { PreviewPanel } from './components/PreviewPanel'
import { SceneDrawer } from './components/SceneDrawer'
import { SceneStep } from './components/SceneStep'
import { UploadStep } from './components/UploadStep'
import { WorkspaceSidebar } from './components/WorkspaceSidebar'
import { useGenerateWorkbench } from './hooks/useGenerateWorkbench'
import styles from './index.module.scss'

const modeFromPath = (pathname: string): GenerateMode => {
  if (pathname.includes('/real')) return 'real'
  if (pathname.includes('/mannequin')) return 'mannequin'
  if (pathname.includes('/model')) return 'model'
  return 'clothes'
}

export function AiGeneratePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const mode = modeFromPath(location.pathname)

  const balance = useCreditStore((s) => s.balance)
  const setBalance = useCreditStore((s) => s.setBalance)

  const { data: models = [] } = useQuery({
    queryKey: ['workbench-models'],
    queryFn: mockService.getWorkbenchModels,
  })
  const { data: scenes = [] } = useQuery({
    queryKey: ['workbench-scenes'],
    queryFn: mockService.getWorkbenchScenes,
  })
  const { data: recent = [] } = useQuery({
    queryKey: ['recent-results'],
    queryFn: mockService.getRecentResults,
  })
  const { data: creditInfo } = useQuery({
    queryKey: ['credit-info'],
    queryFn: mockService.getCreditInfo,
  })

  const [modelDrawerOpen, setModelDrawerOpen] = useState(false)
  const [sceneDrawerOpen, setSceneDrawerOpen] = useState(false)

  const workbench = useGenerateWorkbench({
    mode,
    creditBalance: balance,
    initialRecent: recent,
    onConsumeCredits: (amount) => {
      setBalance(useCreditStore.getState().balance - amount)
    },
  })

  const selectedScene = useMemo(
    () => scenes.find((s) => s.id === workbench.selectedSceneId),
    [scenes, workbench.selectedSceneId],
  )

  return (
    <div className={styles.workspace}>
      <WorkspaceSidebar />
      <div className={styles.workspaceMain}>
        <div className={styles.page}>
          <GenerateHeader balance={balance} todayTasks={creditInfo?.todayTasks ?? 0} />
          <ModeTabs active={mode} onChange={navigate} />

          <div className={styles.contentGrid}>
            <div className={styles.configPanel}>
              <div className={styles.configScroll}>
                <UploadStep
                  files={workbench.files}
                  status={workbench.status}
                  onUpload={workbench.uploadFiles}
                  onRemove={workbench.removeFile}
                />
                <ModelStep
                  models={models}
                  selectedId={workbench.selectedModelId}
                  onSelect={workbench.setSelectedModelId}
                  onOpenDrawer={() => setModelDrawerOpen(true)}
                />
                <SceneStep
                  scenes={scenes}
                  selectedId={workbench.selectedSceneId}
                  onSelect={workbench.setSelectedSceneId}
                  onOpenDrawer={() => setSceneDrawerOpen(true)}
                />
                <OutputConfigStep config={workbench.output} onChange={workbench.setOutput} />
              </div>
              <GenerateActionBar
                estimatedCost={workbench.estimatedCost}
                balance={balance}
                canGenerate={workbench.canGenerate}
                insufficientCredits={workbench.insufficientCredits}
                status={workbench.status}
                onGenerate={workbench.startGenerate}
              />
            </div>

            <PreviewPanel
              status={workbench.status}
              progress={workbench.progress}
              processingStage={workbench.processingStage}
              resultImage={workbench.resultImage}
              sourceImage={workbench.sourceImage}
              scene={selectedScene}
              compareMode={workbench.compareMode}
              comparePosition={workbench.comparePosition}
              errorMessage={workbench.errorMessage}
              recentResults={workbench.recentResults}
              activeResultId={workbench.activeResultId}
              onToggleCompare={() => workbench.setCompareMode(!workbench.compareMode)}
              onComparePositionChange={workbench.setComparePosition}
              onRegenerate={workbench.startGenerate}
              onResetFailed={workbench.resetFailed}
              onSelectRecent={workbench.selectRecent}
            />
          </div>
        </div>
      </div>

      <ModelDrawer
        visible={modelDrawerOpen}
        models={models}
        selectedId={workbench.selectedModelId}
        onClose={() => setModelDrawerOpen(false)}
        onSelect={workbench.setSelectedModelId}
      />
      <SceneDrawer
        visible={sceneDrawerOpen}
        scenes={scenes}
        selectedId={workbench.selectedSceneId}
        onClose={() => setSceneDrawerOpen(false)}
        onSelect={workbench.setSelectedSceneId}
      />
    </div>
  )
}
