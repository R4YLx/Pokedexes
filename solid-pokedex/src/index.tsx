/* @refresh reload */
import { render } from 'solid-js/web'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { Router } from '@solidjs/router'
import App from './App'
import './styles/index.scss'

const queryClient = new QueryClient()

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  ),
  document.getElementById('root') as HTMLElement
)
