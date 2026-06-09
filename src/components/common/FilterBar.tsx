import { Select, Space } from '@arco-design/web-react'

import { SearchBar } from '@/components/common/SearchBar'

export function FilterBar() {
  return (
    <div className="soft-card mb-6 p-4">
      <Space wrap size="large">
        <SearchBar />
        <Select
          placeholder="状态筛选"
          style={{ width: 140 }}
          options={[
            { label: '全部状态', value: 'all' },
            { label: '进行中', value: 'running' },
            { label: '已完成', value: 'success' },
            { label: '失败', value: 'failed' },
          ]}
        />
        <Select
          placeholder="类型筛选"
          style={{ width: 140 }}
          options={[
            { label: '全部类型', value: 'all' },
            { label: 'AI 生成', value: 'generate' },
            { label: '视频', value: 'video' },
            { label: '交付', value: 'delivery' },
          ]}
        />
      </Space>
    </div>
  )
}
