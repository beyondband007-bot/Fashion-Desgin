import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { LoadingPage } from '@/components/common/LoadingPage'
import { routes } from '@/router/routes'

export function AppRouter() {
  const element = useRoutes(routes)

  return <Suspense fallback={<LoadingPage />}>{element}</Suspense>
}
