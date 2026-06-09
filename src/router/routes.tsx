import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'
import { WorkspaceLayout } from '@/layouts/WorkspaceLayout'

const HomePage = lazy(() => import('@/pages/Home').then((module) => ({ default: module.HomePage })))
const LoginPage = lazy(() =>
  import('@/pages/Login').then((module) => ({ default: module.LoginPage })),
)
const RegisterPage = lazy(() =>
  import('@/pages/Register').then((module) => ({ default: module.RegisterPage })),
)
const PricingPage = lazy(() =>
  import('@/pages/Pricing').then((module) => ({ default: module.PricingPage })),
)
const CreditsPage = lazy(() =>
  import('@/pages/Credits').then((module) => ({ default: module.CreditsPage })),
)
const AssetsPage = lazy(() =>
  import('@/pages/Assets').then((module) => ({ default: module.AssetsPage })),
)
const ProjectsPage = lazy(() =>
  import('@/pages/Projects').then((module) => ({ default: module.ProjectsPage })),
)
const EnterprisePage = lazy(() =>
  import('@/pages/Enterprise').then((module) => ({ default: module.EnterprisePage })),
)
const DeliveryPage = lazy(() =>
  import('@/pages/Delivery').then((module) => ({ default: module.DeliveryPage })),
)
const CreativePage = lazy(() =>
  import('@/pages/Creative').then((module) => ({ default: module.CreativePage })),
)
const AiGeneratePage = lazy(() =>
  import('@/pages/AiGenerate').then((module) => ({ default: module.AiGeneratePage })),
)
const AiEditPage = lazy(() =>
  import('@/pages/AiEdit').then((module) => ({ default: module.AiEditPage })),
)
const VideoPage = lazy(() =>
  import('@/pages/Video').then((module) => ({ default: module.VideoPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then((module) => ({ default: module.NotFoundPage })),
)

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'enterprise', element: <EnterprisePage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: '/',
    element: <WorkspaceLayout />,
    children: [
      { path: 'ai-generate', element: <Navigate replace to="/ai-generate/clothes" /> },
      { path: 'ai-generate/clothes', element: <AiGeneratePage /> },
      { path: 'ai-generate/real', element: <AiGeneratePage /> },
      { path: 'ai-generate/mannequin', element: <AiGeneratePage /> },
      { path: 'ai-generate/model', element: <AiGeneratePage /> },
      { path: 'ai-edit', element: <AiEditPage /> },
      { path: 'video', element: <VideoPage /> },
      { path: 'creative', element: <CreativePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'assets', element: <AssetsPage /> },
      { path: 'credits', element: <CreditsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]
