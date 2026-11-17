// Liga o progresso e o XP do navegador à conta no Supabase.
//
// - Cada mudança de progresso de quem está logado vai para a tabela progresso_capsulas.
// - Ao entrar na conta: junta o progresso do navegador com o da nuvem (fica o maior de cada)
//   e reenvia o XP do modo visitante para a função conceder_xp, que confere tudo e
//   ignora o que já tinha sido ganho.
import type { IdEtapa } from '../conteudo/etapas'
import { contaAtual, quandoEntrar, recarregarPerfil, sair } from './conta'
import { atualizar, lerTodos, limparProgressoLocal, quandoSalvarProgresso, type ProgressoCapsula } from './progressoLocal'
import { supabase } from './supabase'
import { eventosLocais, limparXpLocal, registrarEventoLocal } from './xpLocal'
import type { TipoXp } from './xp'

type LinhaProgresso = {
  capsula_id: string
  etapa_atual: number
  etapas_concluidas: string[]
  concluida: boolean
  camada_max: number
  melhor_pontuacao: number | null
  palpites: Record<string, number>
  concluida_em: string | null
}

function paraLinha(capsulaId: string, p: ProgressoCapsula): LinhaProgresso {
  return {
    capsula_id: capsulaId,
    etapa_atual: p.etapaAtual,
    etapas_concluidas: p.concluidas,
    concluida: p.concluida,
    camada_max: p.camadaMax,
    melhor_pontuacao: p.melhorPontuacao,
    palpites: p.palpites ?? {},
    concluida_em: p.concluidaEm,
  }
}

function deLinha(l: LinhaProgresso): ProgressoCapsula {
  return {
    etapaAtual: l.etapa_atual,
    concluidas: l.etapas_concluidas as IdEtapa[],
    concluida: l.concluida,
    camadaMax: l.camada_max as 1 | 2 | 3,
    melhorPontuacao: l.melhor_pontuacao,
    concluidaEm: l.concluida_em,
    palpites: l.palpites,
  }
}

// Junta dois progressos da mesma cápsula sem perder nada: fica o maior de cada campo
function juntar(a: ProgressoCapsula, b: ProgressoCapsula): ProgressoCapsula {
  const pontuacoes = [a.melhorPontuacao, b.melhorPontuacao].filter((n): n is number => n !== null)
  return {
    etapaAtual: Math.max(a.etapaAtual, b.etapaAtual),
    concluidas: [...new Set([...a.concluidas, ...b.concluidas])],
    concluida: a.concluida || b.concluida,
    camadaMax: Math.max(a.camadaMax, b.camadaMax) as 1 | 2 | 3,
    melhorPontuacao: pontuacoes.length ? Math.max(...pontuacoes) : null,
    concluidaEm: a.concluidaEm ?? b.concluidaEm,
    palpites: { ...b.palpites, ...a.palpites },
  }
}

async function enviarProgresso(capsulaId: string, p: ProgressoCapsula) {
  if (!supabase || !contaAtual().usuario) return
  const { error } = await supabase.from('progresso_capsulas').upsert({ ...paraLinha(capsulaId, p), atualizado_em: new Date().toISOString() })
  if (error) console.warn('Não consegui salvar o progresso na conta:', error.message)
}

async function sincronizarAoEntrar() {
  if (!supabase) return
  // 1. Progresso: junta navegador + nuvem, e guarda o resultado nos dois lugares
  const { data, error } = await supabase.from('progresso_capsulas').select('*')
  if (error) {
    console.warn('Não consegui ler o progresso da conta:', error.message)
    return
  }
  const daNuvem = new Map((data as LinhaProgresso[]).map((l) => [l.capsula_id, deLinha(l)]))
  const doNavegador = lerTodos()
  for (const id of new Set([...daNuvem.keys(), ...Object.keys(doNavegador)])) {
    const local = doNavegador[id]
    const remoto = daNuvem.get(id)
    const junto = local && remoto ? juntar(local, remoto) : (local ?? remoto)!
    atualizar(id, () => junto, false)
    await enviarProgresso(id, junto)
  }

  // 2. XP do modo visitante: reenviado ao banco, que decide o que vale
  for (const e of eventosLocais()) {
    const { error: erroXp } = await supabase.rpc('conceder_xp', {
      p_tipo: e.tipo, p_referencia: e.referencia, p_capsula_id: e.capsulaId ?? null, p_xp_capsula: e.xpCapsula ?? null,
    })
    if (erroXp) console.warn('Não consegui enviar um XP antigo:', erroXp.message)
  }
}

// Ponto único para ganhar XP no app (visitante ou com conta)
export async function ganharXp(tipo: TipoXp, referencia: string, capsulaId?: string, xpCapsula?: number) {
  const ganhoLocal = registrarEventoLocal(tipo, referencia, capsulaId, xpCapsula)
  if (supabase && contaAtual().usuario) {
    const { error } = await supabase.rpc('conceder_xp', {
      p_tipo: tipo, p_referencia: referencia, p_capsula_id: capsulaId ?? null, p_xp_capsula: xpCapsula ?? null,
    })
    if (error) console.warn('Não consegui registrar o XP na conta:', error.message)
    else await recarregarPerfil()
  }
  return ganhoLocal
}

// Sai da conta e limpa este navegador, para a próxima pessoa no mesmo aparelho
// não ver (nem herdar) o progresso de quem saiu. Os dados continuam salvos na conta.
export async function sairDaConta() {
  await sair()
  limparProgressoLocal()
  limparXpLocal()
}

// Liga tudo uma vez, quando o app abre
quandoSalvarProgresso((id, p) => void enviarProgresso(id, p))
quandoEntrar(sincronizarAoEntrar)
