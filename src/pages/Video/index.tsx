import { useState } from 'react'

import { VideoConfigPanel } from './components/VideoConfigPanel'
import { VideoShowcase } from './components/VideoShowcase'
import { VideoSubSidebar } from './components/VideoSubSidebar'
import styles from './index.module.scss'
import type { VideoMode } from './types'

export type { VideoMode } from './types'

export function VideoPage() {
  const [mode, setMode] = useState<VideoMode>('action')

  return (
    <div className={styles.videoWorkbench}>
      <VideoSubSidebar mode={mode} onModeChange={setMode} />
      <VideoConfigPanel mode={mode} />
      <VideoShowcase />
    </div>
  )
}
