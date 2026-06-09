import { Button, Drawer, Input, Select } from '@arco-design/web-react'
import { IconHeart, IconHeartFill, IconSearch } from '@arco-design/web-react/icon'
import { useMemo, useState } from 'react'

import type { WorkbenchModel } from '@/types/generate'

import styles from '../index.module.scss'

type ModelDrawerProps = {
  visible: boolean
  models: WorkbenchModel[]
  selectedId: string | undefined
  onClose: () => void
  onSelect: (id: string) => void
}

export function ModelDrawer({ visible, models, selectedId, onClose, onSelect }: ModelDrawerProps) {
  const [keyword, setKeyword] = useState('')
  const [race, setRace] = useState('')
  const [age, setAge] = useState('')
  const [style, setStyle] = useState('')

  const filtered = useMemo(() => {
    return models.filter((model) => {
      const matchKeyword =
        !keyword ||
        model.name.toLowerCase().includes(keyword.toLowerCase()) ||
        model.style.some((s) => s.includes(keyword))
      const matchRace = !race || model.race === race
      const matchAge = !age || model.age === age
      const matchStyle = !style || model.style.includes(style)
      return matchKeyword && matchRace && matchAge && matchStyle
    })
  }, [models, keyword, race, age, style])

  const races = [...new Set(models.map((m) => m.race))]
  const ages = [...new Set(models.map((m) => m.age))]
  const styleOptions = [...new Set(models.flatMap((m) => m.style))]

  return (
    <Drawer
      width={560}
      title="选择 AI 模特"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className={styles.drawer ?? ''}
    >
      <Input
        prefix={<IconSearch />}
        placeholder="搜索模特名称 / 标签"
        value={keyword}
        onChange={setKeyword}
        allowClear
        className={styles.drawerSearch ?? ''}
      />
      <div className={styles.drawerFilters}>
        <Select
          placeholder="人种"
          allowClear
          value={race}
          onChange={setRace}
          options={races.map((v) => ({ label: v, value: v }))}
        />
        <Select
          placeholder="年龄"
          allowClear
          value={age}
          onChange={setAge}
          options={ages.map((v) => ({ label: v, value: v }))}
        />
        <Select
          placeholder="风格"
          allowClear
          value={style}
          onChange={setStyle}
          options={styleOptions.map((v) => ({ label: v, value: v }))}
        />
      </div>
      <div className={styles.drawerGrid}>
        {filtered.map((model) => (
          <article key={model.id} className={styles.drawerCard}>
            <img src={model.avatar} alt={model.name} />
            <div className={styles.drawerCardBody}>
              <div className={styles.drawerCardHead}>
                <strong>{model.name}</strong>
                {model.favorite ? <IconHeartFill /> : <IconHeart />}
              </div>
              <p>
                {model.race} · {model.age} · {model.bodyType}
              </p>
              <div className={styles.modelTags}>
                {model.style.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
              <Button
                type={selectedId === model.id ? 'primary' : 'outline'}
                size="small"
                long
                onClick={() => {
                  onSelect(model.id)
                  onClose()
                }}
              >
                {selectedId === model.id ? '已选择' : '选择'}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Drawer>
  )
}
