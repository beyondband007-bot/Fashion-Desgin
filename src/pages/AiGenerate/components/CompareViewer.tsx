import { useCallback, useRef } from 'react'

import styles from '../index.module.scss'

type CompareViewerProps = {
  sourceImage: string
  resultImage: string
  position: number
  onPositionChange: (value: number) => void
}

export function CompareViewer({
  sourceImage,
  resultImage,
  position,
  onPositionChange,
}: CompareViewerProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const next = ((clientX - rect.left) / rect.width) * 100
      onPositionChange(Math.min(100, Math.max(0, next)))
    },
    [onPositionChange],
  )

  const onPointerDown = (event: React.PointerEvent) => {
    dragging.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return
    updateFromClientX(event.clientX)
  }

  const onPointerUp = (event: React.PointerEvent) => {
    dragging.current = false
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const onDoubleClick = () => onPositionChange(50)

  return (
    <div
      ref={trackRef}
      className={styles.compareViewer}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onDoubleClick={onDoubleClick}
    >
      <img src={resultImage} alt="生成结果" className={styles.compareResult} />
      <img
        src={sourceImage}
        alt="原图"
        className={styles.compareSource}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />
      <div className={styles.compareHandle} style={{ left: `${position}%` }}>
        <span />
      </div>
      <div className={styles.compareLabels}>
        <span>原图</span>
        <span>生成结果</span>
      </div>
    </div>
  )
}
