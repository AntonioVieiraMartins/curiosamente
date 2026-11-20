import type { ReactNode } from 'react'

// Itens do menu (PC e celular) com ícones de traço simples, como no desenho
const Traco = ({ children }: { children: ReactNode }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

export const itensDoMenu = [
  { para: '/', rotulo: 'Início', icone: <Traco><path d="M3 11l9-8 9 8M5 10v10h14V10" /></Traco> },
  { para: '/mapa', rotulo: 'Mapa', icone: <Traco><path d="M5 4v16M5 6h8a3 3 0 010 6H9a3 3 0 000 6h10M19 4v4" /></Traco> },
  { para: '/caderno', rotulo: 'Caderno', icone: <Traco><path d="M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2zM5 18a2 2 0 012-2h12M9 8h6" /></Traco> },
  { para: '/revisar', rotulo: 'Revisar', icone: <Traco><path d="M4 7h12v12H4zM8 3h12v12" /></Traco> },
  { para: '/perfil', rotulo: 'Perfil', icone: <Traco><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" /></Traco> },
]
