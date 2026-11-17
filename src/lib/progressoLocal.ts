// Progresso do modo visitante, guardado no navegador (localStorage).
// Na etapa 5 do roteiro ele passa a ser enviado para o Supabase quando a pessoa criar conta.
import type { IdEtapa } from '../conteudo/etapas'

export type ProgressoCapsula = {
  etapaAtual: number // índice de 0 a 7
  concluidas: IdEtapa[]
  concluida: boolean
  camadaMax: 1 | 2 | 3 // 1 Intuição, 2 Mão na massa, 3 Rigor (Aprofundar)
  melhorPontuacao: number | null
  concluidaEm: string | null
  palpites?: Record<string, number> // ex.: { inicial: 2 } (opcional: progresso antigo não tem)
}

type Todos = Record<string, ProgressoCapsula>

const CHAVE = 'curiosamente:progresso:v1'

export const progressoVazio: ProgressoCapsula = {
  etapaAtual: 0,
  concluidas: [],
  concluida: false,
  camadaMax: 1,
  melhorPontuacao: null,
  concluidaEm: null,
}

// O navegador pode bloquear o armazenamento (aba anônima, por exemplo).
// Por isso tudo fica num try/catch e o app continua funcionando só na memória.
function carregar(): Todos {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as Todos) : {}
  } catch {
    return {}
  }
}

let cache: Todos | null = null
const ouvintes = new Set<() => void>()

export function lerTodos(): Todos {
  if (!cache) cache = carregar()
  return cache
}

export function assinar(aoMudar: () => void) {
  ouvintes.add(aoMudar)
  // Mantém duas abas abertas em sincronia
  const aoMudarOutraAba = (e: StorageEvent) => {
    if (e.key === CHAVE) {
      cache = carregar()
      aoMudar()
    }
  }
  window.addEventListener('storage', aoMudarOutraAba)
  return () => {
    ouvintes.delete(aoMudar)
    window.removeEventListener('storage', aoMudarOutraAba)
  }
}

// Apaga o progresso deste navegador (usado ao sair da conta: os dados já estão salvos na nuvem)
export function limparProgressoLocal() {
  cache = {}
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // nada a fazer
  }
  ouvintes.forEach((f) => f())
}

// Quem quiser saber de cada mudança (a sincronização com a conta usa isso)
type AoSalvar = (capsulaId: string, progresso: ProgressoCapsula) => void
const aoSalvar = new Set<AoSalvar>()
export function quandoSalvarProgresso(f: AoSalvar) {
  aoSalvar.add(f)
}

// avisar = false quando a mudança veio da própria nuvem (não precisa mandar de volta)
export function atualizar(capsulaId: string, mudar: (p: ProgressoCapsula) => ProgressoCapsula, avisar = true) {
  const todos = { ...lerTodos() }
  todos[capsulaId] = mudar(todos[capsulaId] ?? progressoVazio)
  cache = todos
  try {
    localStorage.setItem(CHAVE, JSON.stringify(todos))
  } catch {
    // Sem armazenamento: o progresso vale só até fechar a aba
  }
  ouvintes.forEach((f) => f())
  if (avisar) aoSalvar.forEach((f) => f(capsulaId, todos[capsulaId]))
}
