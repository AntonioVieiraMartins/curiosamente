// Medalhas guardadas neste navegador (visitante) ou copiadas da conta (quem está logado).
// Também guarda "marcos" que não passam pelo XP, como rodar 10 mil vezes uma simulação.
import { useSyncExternalStore } from 'react'

type Dados = {
  obtidas: Record<string, string> // id da conquista → quando ganhou (ISO)
  marcos: string[] // ex.: "dez-mil"
}

const CHAVE = 'curiosamente:conquistas:v1'
const vazio: Dados = { obtidas: {}, marcos: [] }
let cache: Dados | null = null
const ouvintes = new Set<() => void>()

function ler(): Dados {
  if (cache) return cache
  try {
    cache = { ...vazio, ...(JSON.parse(localStorage.getItem(CHAVE) ?? '{}') as Partial<Dados>) }
  } catch {
    cache = vazio
  }
  return cache
}

function salvar(novo: Dados) {
  cache = novo
  try {
    localStorage.setItem(CHAVE, JSON.stringify(novo))
  } catch {
    // sem armazenamento: vale só até fechar a aba
  }
  ouvintes.forEach((f) => f())
}

export const conquistasObtidas = () => ler().obtidas
export const marcosAlcancados = () => ler().marcos

export function guardarConquista(id: string, obtidaEm = new Date().toISOString()) {
  const atual = ler()
  if (atual.obtidas[id]) return
  salvar({ ...atual, obtidas: { ...atual.obtidas, [id]: obtidaEm } })
}

export function guardarMarco(marco: string) {
  const atual = ler()
  if (atual.marcos.includes(marco)) return false
  salvar({ ...atual, marcos: [...atual.marcos, marco] })
  return true
}

export function limparConquistasLocal() {
  cache = vazio
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // nada a fazer
  }
  ouvintes.forEach((f) => f())
}

function assinar(f: () => void) {
  ouvintes.add(f)
  return () => ouvintes.delete(f)
}

export function useConquistas() {
  return useSyncExternalStore(assinar, conquistasObtidas, conquistasObtidas)
}

// ---- Aviso "conquista desbloqueada" ----
// Fila: se duas medalhas chegam juntas, uma aparece depois da outra
let fila: string[] = []
const ouvintesNovidade = new Set<() => void>()
const avisarFila = () => ouvintesNovidade.forEach((f) => f())

export function anunciarConquista(id: string) {
  fila = [...fila, id]
  avisarFila()
}

export function dispensarConquista() {
  fila = fila.slice(1)
  avisarFila()
}

const primeiraDaFila = () => fila[0] ?? null

export function useNovaConquista() {
  return useSyncExternalStore(
    (f) => {
      ouvintesNovidade.add(f)
      return () => ouvintesNovidade.delete(f)
    },
    primeiraDaFila,
    primeiraDaFila,
  )
}
