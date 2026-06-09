import { Input } from '@arco-design/web-react'
import { IconSearch } from '@arco-design/web-react/icon'

type SearchBarProps = {
  placeholder?: string
}

export function SearchBar({ placeholder = '搜索项目、素材、任务...' }: SearchBarProps) {
  return <Input allowClear prefix={<IconSearch />} placeholder={placeholder} />
}
