// Caderno pessoal: anotações guardadas no navegador (localStorage).
// Quem tem conta também as envia para o Supabase (ver sincronizarAnotacoes.ts).

export type Anotacao = {
  id: string // código criado aqui; é também o "ref" no banco
  capsulaId: string
  texto: string
  criadoEm: string // data ISO
  atualizadoEm: string
}

export const LIMITE_ANOTACAO = 5000 // o banco recusa textos maiores

const CHAVE = 'curiosamente:anotacoes:v1'

// O navegador pode bloquear o armazenamento (aba anônima). Nesse caso o caderno vale só até fechar a aba.
function carregar(): Anotacao[] {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as Anotacao[]) : []
  } catch {
    return []
  }
}

let cache: Anotacao[] | null = null
const ouvintes = new Set<() => void>()

// Devolve sempre a mesma lista até algo mudar (o React precisa disso para não repintar à toa)
export function lerAnotacoes(): Anotacao[] {
  if (!cache) cache = carregar()
  return cache
}

export function assinar(aoMudar: () => void) {
  ouvintes.add(aoMudar)
  const outraAba = (e: StorageEvent) => {
    if (e.key === CHAVE) {
      cache = carregar()
      aoMudar()
    }
  }
  window.addEventListener('storage', outraAba)
  return () => {
    ouvintes.delete(aoMudar)
    window.removeEventListener('storage', outraAba)
  }
}

function gravar(lista: Anotacao[]) {
  cache = lista
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista))
  } catch {
    // Sem armazenamento: a anotação fica só na memória
  }
  ouvintes.forEach((f) => f())
}

// Quem quiser saber de cada mudança feita pela pessoa (a sincronização usa isso)
export type EventoAnotacao = { tipo: 'salvou'; anotacao: Anotacao } | { tipo: 'apagou'; id: string }
const aoMudarPelaPessoa = new Set<(e: EventoAnotacao) => void>()
export function quandoMudarAnotacao(f: (e: EventoAnotacao) => void) {
  aoMudarPelaPessoa.add(f)
}

function novoId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

export function criarAnotacao(capsulaId: string, texto: string): Anotacao | null {
  const limpo = texto.trim().slice(0, LIMITE_ANOTACAO)
  if (!limpo) return null
  const agora = new Date().toISOString()
  const nova: Anotacao = { id: novoId(), capsulaId, texto: limpo, criadoEm: agora, atualizadoEm: agora }
  gravar([nova, ...lerAnotacoes()])
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'salvou', anotacao: nova }))
  return nova
}

export function editarAnotacao(id: string, texto: string) {
  const limpo = texto.trim().slice(0, LIMITE_ANOTACAO)
  const atual = lerAnotacoes().find((a) => a.id === id)
  if (!atual || !limpo) return
  const nova = { ...atual, texto: limpo, atualizadoEm: new Date().toISOString() }
  gravar(lerAnotacoes().map((a) => (a.id === id ? nova : a)))
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'salvou', anotacao: nova }))
}

export function apagarAnotacao(id: string) {
  gravar(lerAnotacoes().filter((a) => a.id !== id))
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'apagou', id }))
}

// Usado só pela sincronização ao entrar na conta (não avisa de volta, para não reenviar)
export function substituirAnotacoes(lista: Anotacao[]) {
  gravar([...lista].sort((a, b) => b.criadoEm.localeCompare(a.criadoEm)))
}

// Ao sair da conta, o caderno deste navegador é apagado (ele continua salvo na conta)
export function limparAnotacoesLocal() {
  cache = []
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // nada a fazer
  }
  ouvintes.forEach((f) => f())
}
