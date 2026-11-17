// XP do modo visitante, guardado no navegador.
// Quando a pessoa cria conta, cada evento daqui é reenviado ao banco pela função
// conceder_xp, que confere tudo de novo (o número daqui não é confiável, é só para mostrar).
import { useSyncExternalStore } from 'react'
import { valorDoEvento, type TipoXp } from './xp'

export type EventoXp = { tipo: TipoXp; referencia: string; capsulaId?: string; xpCapsula?: number; xp: number; criadoEm: string }

const CHAVE = 'curiosamente:xp:v1'
let cache: EventoXp[] | null = null
const ouvintes = new Set<() => void>()

function ler(): EventoXp[] {
  if (cache) return cache
  try {
    cache = JSON.parse(localStorage.getItem(CHAVE) ?? '[]') as EventoXp[]
  } catch {
    cache = []
  }
  return cache
}

function assinar(aoMudar: () => void) {
  ouvintes.add(aoMudar)
  return () => ouvintes.delete(aoMudar)
}

export function eventosLocais() {
  return ler()
}

// Previsão certa e errada contam como o mesmo evento (igual à regra do banco)
const grupo = (t: TipoXp) => (t.startsWith('previsao') ? 'previsao' : t)

// Registra o evento se ainda não existe. Devolve o XP ganho (0 se já tinha ganhado).
export function registrarEventoLocal(tipo: TipoXp, referencia: string, capsulaId?: string, xpCapsula?: number) {
  const atuais = ler()
  if (atuais.some((e) => grupo(e.tipo) === grupo(tipo) && e.referencia === referencia)) return 0
  const xp = valorDoEvento(tipo, xpCapsula)
  cache = [...atuais, { tipo, referencia, capsulaId, xpCapsula, xp, criadoEm: new Date().toISOString() }]
  try {
    localStorage.setItem(CHAVE, JSON.stringify(cache))
  } catch {
    // sem armazenamento: vale só até fechar a aba
  }
  ouvintes.forEach((f) => f())
  return xp
}

export function limparXpLocal() {
  cache = []
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // nada a fazer
  }
  ouvintes.forEach((f) => f())
}

export function useXpLocal() {
  const eventos = useSyncExternalStore(assinar, ler, ler)
  return eventos.reduce((soma, e) => soma + e.xp, 0)
}
