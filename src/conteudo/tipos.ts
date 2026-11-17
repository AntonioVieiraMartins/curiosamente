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
