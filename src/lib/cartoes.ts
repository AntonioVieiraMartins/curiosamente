// Cartões de revisão espaçada, guardados no navegador (localStorage).
// Quem tem conta também os envia para o Supabase (ver sincronizarCartoes.ts).
import { diaEmBrasilia, somarDias } from './datas'

export type Cartao = {
  id: string // ex.: "banco-de-dados:q:1k3f9a" (também é o cartao_id no banco)
  capsulaId: string
  frente: string // a pergunta
  verso: string // a resposta
  proxima: string // dia (AAAA-MM-DD) da próxima revisão
  intervaloDias: number
  facilidade: number // quanto o intervalo cresce a cada acerto (de 1,3 a 3)
  criadoEm: string
  atualizadoEm: string
}

// 0 = errei, 1 = difícil, 2 = bom, 3 = fácil
export type Nota = 0 | 1 | 2 | 3

const CHAVE = 'curiosamente:cartoes:v1'
const FACILIDADE_INICIAL = 2.5

// Código curto e estável para um texto (o mesmo enunciado gera sempre o mesmo código)
export function codigoDe(texto: string) {
  let h = 5381
  for (let i = 0; i < texto.length; i++) h = ((h << 5) + h + texto.charCodeAt(i)) | 0
  return (h >>> 0).toString(36)
}

// ---- Regra de quando o cartão volta (uma versão simples do método SM-2) ----

export function proximoEstado(c: Pick<Cartao, 'intervaloDias' | 'facilidade'>, nota: Nota, hoje = diaEmBrasilia()) {
  const { intervaloDias: i, facilidade: f } = c
  let intervalo: number
  let facilidade = f
  if (nota === 0) {
    intervalo = 0 // volta ainda hoje
    facilidade = f - 0.2
  } else if (nota === 1) {
    intervalo = Math.max(1, Math.round(i * 1.2))
    facilidade = f - 0.15
  } else if (nota === 2) {
    intervalo = i < 1 ? 3 : Math.max(i + 1, Math.round(i * f))
  } else {
    intervalo = i < 1 ? 7 : Math.max(i + 2, Math.round(i * f * 1.3))
    facilidade = f + 0.15
  }
  facilidade = Math.round(Math.min(3, Math.max(1.3, facilidade)) * 100) / 100
  return { intervaloDias: intervalo, facilidade, proxima: somarDias(hoje, intervalo) }
}

// ---- Armazenamento ----

function carregar(): Cartao[] {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as Cartao[]) : []
  } catch {
    return []
  }
}

let cache: Cartao[] | null = null
const ouvintes = new Set<() => void>()

export function lerCartoes(): Cartao[] {
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

function gravar(lista: Cartao[]) {
  cache = lista
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista))
  } catch {
    // Sem armazenamento: os cartões valem só até fechar a aba
  }
  ouvintes.forEach((f) => f())
}

export type EventoCartao = { tipo: 'salvou'; cartao: Cartao } | { tipo: 'apagou'; id: string }
const aoMudarPelaPessoa = new Set<(e: EventoCartao) => void>()
export function quandoMudarCartao(f: (e: EventoCartao) => void) {
  aoMudarPelaPessoa.add(f)
}

// Guarda um cartão novo para revisar hoje. Se já existe, não mexe (devolve false).
export function guardarCartao(dados: { id: string; capsulaId: string; frente: string; verso: string }) {
  if (lerCartoes().some((c) => c.id === dados.id)) return false
  const agora = new Date().toISOString()
  const novo: Cartao = {
    ...dados,
    frente: dados.frente.slice(0, 2000),
    verso: dados.verso.slice(0, 4000),
    proxima: diaEmBrasilia(),
    intervaloDias: 0,
    facilidade: FACILIDADE_INICIAL,
    criadoEm: agora,
    atualizadoEm: agora,
  }
  gravar([...lerCartoes(), novo])
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'salvou', cartao: novo }))
  return true
}

export function revisarCartao(id: string, nota: Nota) {
  const atual = lerCartoes().find((c) => c.id === id)
  if (!atual) return
  const novo: Cartao = { ...atual, ...proximoEstado(atual, nota), atualizadoEm: new Date().toISOString() }
  gravar(lerCartoes().map((c) => (c.id === id ? novo : c)))
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'salvou', cartao: novo }))
}

export function apagarCartao(id: string) {
  gravar(lerCartoes().filter((c) => c.id !== id))
  aoMudarPelaPessoa.forEach((f) => f({ tipo: 'apagou', id }))
}

// Cartões que já podem ser revisados (o dia da revisão chegou ou passou)
export function cartoesDeHoje(lista: Cartao[], hoje = diaEmBrasilia()) {
  return lista.filter((c) => c.proxima <= hoje).sort((a, b) => a.proxima.localeCompare(b.proxima) || a.criadoEm.localeCompare(b.criadoEm))
}

// Usado só pela sincronização ao entrar na conta (não avisa de volta)
export function substituirCartoes(lista: Cartao[]) {
  gravar(lista)
}

// Ao sair da conta, os cartões deste navegador são apagados (continuam salvos na conta)
export function limparCartoesLocal() {
  cache = []
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // nada a fazer
  }
  ouvintes.forEach((f) => f())
}
