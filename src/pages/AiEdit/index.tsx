import { useState } from 'react'

import { ToolboxSidebar, type ToolboxToolKey } from './components/ToolboxSidebar'
import { ToolboxWorkspace } from './components/ToolboxWorkspace'
import styles from './index.module.scss'

export function AiEditPage() {
  const [activeTool, setActiveTool] = useState<ToolboxToolKey>('relight')

  return (
    <div className={styles.workbench}>
      <ToolboxSidebar activeTool={activeTool} onChange={setActiveTool} />
      <ToolboxWorkspace tool={activeTool} />
    </div>
  )
}
