import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { frontendApi } from '@/api/frontend'
import { useTaskRealtime } from '@/hooks/useTaskRealtime'
import { useCreditStore } from '@/store/creditStore'
import {
  selectModuleRecentResultsFromState,
  selectModuleRecentResultsKey,
  useTaskStore,
} from '@/store/taskStore'
import type { GenerateMode, RecentResult } from '@/types/generate'

import { ChangeModelConfig } from './components/ChangeModelConfig'
import { ConfigColumn } from './components/ConfigColumn'
import { GenerateActionBar } from './components/GenerateActionBar'
import { ModelDrawer } from './components/ModelDrawer'
import { PreviewPanel } from './components/PreviewPanel'
import { SameStyleConfig } from './components/SameStyleConfig'
import { SceneDrawer } from './components/SceneDrawer'
import { ToolSidebar } from './components/ToolSidebar'
import { TryOnConfig } from './components/TryOnConfig'
import { TryOnModeTabs } from './components/TryOnModeTabs'
import { useGenerateWorkbench } from './hooks/useGenerateWorkbench'
import styles from './index.module.scss'

const modeFromPath = (pathname: string): GenerateMode => {
  if (pathname.includes('/same-style')) return 'same-style'
  if (pathname.includes('/real')) return 'real'
  if (pathname.includes('/mannequin')) return 'mannequin'
  if (pathname.includes('/model')) return 'model'
  return 'clothes'
}

const EMPTY_RECENT: RecentResult[] = []

export function AiGeneratePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const mode = modeFromPath(location.pathname)
  const isSameStyle = mode === 'same-style'
  const isChangeModel = mode === 'model'
  const taskModule = 'ai_generate'

  const balance = useCreditStore((s) => s.balance)
  const setBalance = useCreditStore((s) => s.setBalance)

  const { data: models = [] } = useQuery({
    queryKey: ['workbench-models'],
    queryFn: frontendApi.getWorkbenchModels,
  })
  const { data: scenes = [] } = useQuery({
    queryKey: ['workbench-scenes'],
    queryFn: frontendApi.getWorkbenchScenes,
  })
  const { data: recentResults } = useQuery({
    queryKey: ['recent-results'],
    queryFn: frontendApi.getRecentResults,
  })

  const recent = recentResults ?? EMPTY_RECENT
  const moduleRecentKey = useTaskStore((state) => selectModuleRecentResultsKey(state, taskModule, 8))
  const realtimeRecentResults = useMemo(() => {
    if (!moduleRecentKey) {
      return []
    }

    return selectModuleRecentResultsFromState(useTaskStore.getState(), taskModule, 8)
  }, [moduleRecentKey, taskModule])
  const initialRecent = useMemo(
    () => (realtimeRecentResults.length > 0 ? realtimeRecentResults : recent),
    [realtimeRecentResults, recent],
  )

  useTaskRealtime('ai-generate-page', {
    modules: [taskModule],
  })

  const [modelDrawerOpen, setModelDrawerOpen] = useState(false)
  const [sceneDrawerOpen, setSceneDrawerOpen] = useState(false)

  const workbench = useGenerateWorkbench({
    mode,
    creditBalance: balance,
    initialRecent,
    onConsumeCredits: (amount) => {
      setBalance(useCreditStore.getState().balance - amount)
    },
  })

  const selectedScene = useMemo(
    () => scenes.find((s) => s.id === workbench.selectedSceneId),
    [scenes, workbench.selectedSceneId],
  )

  const isTryOn = mode === 'clothes' || mode === 'real'

  return (
    <>
      <div className={styles.workbench}>
        <ToolSidebar />

        <ConfigColumn
          header={
            <>
              {isTryOn ? <TryOnModeTabs active={mode} onChange={navigate} /> : null}
            </>
          }
          footer={
            <GenerateActionBar
              estimatedCost={workbench.estimatedCost}
              outputCount={workbench.output.count}
              canGenerate={workbench.canGenerate}
              insufficientCredits={workbench.insufficientCredits}
              status={workbench.status}
              onGenerate={workbench.startGenerate}
              onCountChange={(count) => workbench.setOutput({ ...workbench.output, count })}
            />
          }
        >
          {isChangeModel ? (
            <ChangeModelConfig
              files={workbench.files}
              status={workbench.status}
              scenes={scenes}
              selectedSceneId={workbench.selectedSceneId}
              onUpload={workbench.uploadFiles}
              onRemove={workbench.removeFile}
              onOpenModelDrawer={() => setModelDrawerOpen(true)}
              onOpenSceneDrawer={() => setSceneDrawerOpen(true)}
              onSelectScene={workbench.setSelectedSceneId}
            />
          ) : isSameStyle ? (
            <SameStyleConfig
              files={workbench.files}
              status={workbench.status}
              onUpload={workbench.uploadFiles}
              onRemove={workbench.removeFile}
            />
          ) : (
            <TryOnConfig
              mode={mode}
              files={workbench.files}
              status={workbench.status}
              models={models}
              scenes={scenes}
              output={workbench.output}
              selectedModelId={workbench.selectedModelId}
              selectedSceneId={workbench.selectedSceneId}
              onUpload={workbench.uploadFiles}
              onRemove={workbench.removeFile}
              onSelectModel={workbench.setSelectedModelId}
              onSelectScene={workbench.setSelectedSceneId}
              onOutputChange={workbench.setOutput}
              onOpenModelDrawer={() => setModelDrawerOpen(true)}
              onOpenSceneDrawer={() => setSceneDrawerOpen(true)}
            />
          )}
        </ConfigColumn>

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
    </>
  )
}
