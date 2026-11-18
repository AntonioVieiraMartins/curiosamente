import type { Area } from './indice'

// Formato do meta.ts de toda cápsula (ver CLAUDE.md)
export type MetaCapsula = {
  id: string
  titulo: string
  area: Area
  trilha: string
  serie?: string
  resumo: string
  duracaoMin: number
  xp: number
  prerequisitos: string[]
  conexoes: string[]
  videoUrl: string | null
  fontes: { titulo: string; url: string }[]
}

// Cartão de revisão já pronto, escrito junto com a cápsula (arquivo cartoes.ts na pasta dela)
export type CartaoPronto = {
  tipo: 'definição' | 'conta' | 'regra' | 'por quê' | 'pegadinha' | 'história' | 'problema'
  frente: string
  verso: string
}
