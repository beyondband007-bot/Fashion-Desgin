import '@arco-design/web-react/dist/css/arco.css'
import './styles/global.scss'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AppProvider } from '@/providers/app-provider'
import { AppRouter } from '@/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </AppProvider>,
)
