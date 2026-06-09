import { Button, Drawer, Select } from '@arco-design/web-react'
import { useMemo, useState } from 'react'

import type { WorkbenchScene } from '@/types/generate'

import styles from '../index.module.scss'

type SceneDrawerProps = {
  visible: boolean
  scenes: WorkbenchScene[]
  selectedId: string | undefined
  onClose: () => void
  onSelect: (id: string) => void
}

export function SceneDrawer({ visible, scenes, selectedId, onClose, onSelect }: SceneDrawerProps) {
  const [type, setType] = useState('')
  const [tone, setTone] = useState('')
  const [lighting, setLighting] = useState('')
  const [style, setStyle] = useState('')

  const filtered = useMemo(() => {
    return scenes.filter((scene) => {
      const matchType = !type || scene.type === type
      const matchTone = !tone || scene.tone === tone
      const matchLighting = !lighting || scene.lighting === lighting
      const matchStyle = !style || scene.style === style
      return matchType && matchTone && matchLighting && matchStyle
    })
  }, [scenes, type, tone, lighting, style])

  const types = [...new Set(scenes.map((s) => s.type))]
  const tones = [...new Set(scenes.map((s) => s.tone))]
  const lightings = [...new Set(scenes.map((s) => s.lighting))]
  const styleOptions = [...new Set(scenes.map((s) => s.style))]

  return (
    <Drawer
      width={560}
      title="选择商拍场景"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className={styles.drawer ?? ''}
    >
      <div className={styles.drawerFilters}>
        <Select
          placeholder="场景类型"
          allowClear
          value={type}
          onChange={setType}
          options={types.map((v) => ({ label: v, value: v }))}
        />
        <Select
          placeholder="色调"
          allowClear
          value={tone}
          onChange={setTone}
          options={tones.map((v) => ({ label: v, value: v }))}
        />
        <Select
          placeholder="光线"
          allowClear
          value={lighting}
          onChange={setLighting}
          options={lightings.map((v) => ({ label: v, value: v }))}
        />
        <Select
          placeholder="商拍风格"
          allowClear
          value={style}
          onChange={setStyle}
          options={styleOptions.map((v) => ({ label: v, value: v }))}
        />
      </div>
      <div className={styles.drawerGrid}>
        {filtered.map((scene) => (
          <article key={scene.id} className={styles.drawerSceneCard}>
            <img src={scene.image} alt={scene.name} />
            <div className={styles.drawerCardBody}>
              <strong>{scene.name}</strong>
              <p>
                {scene.tone} · {scene.lighting}
              </p>
              <span className={styles.sceneUsage}>使用 {scene.usageCount.toLocaleString()} 次</span>
              <Button
                type={selectedId === scene.id ? 'primary' : 'outline'}
                size="small"
                long
                onClick={() => {
                  onSelect(scene.id)
                  onClose()
                }}
              >
                {selectedId === scene.id ? '已选择' : '选择'}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Drawer>
  )
}
