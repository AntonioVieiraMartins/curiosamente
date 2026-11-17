import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
// Liga a sincronização do progresso e do XP com a conta (só faz algo se o Supabase estiver configurado)
import './lib/sincronizacao'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
