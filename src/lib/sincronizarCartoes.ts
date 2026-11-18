// Liga os cartões de revisão do navegador à tabela revisoes do Supabase.
//
// - Cada cartão guardado, revisado ou apagado por quem está logado vai para a conta.
// - Ao entrar: junta os cartões do navegador com os da nuvem (a versão mais recente de cada um vence).
// - Se o banco ainda não recebeu a migração dos cartões, os envios falham com um aviso no console
//   e a revisão continua funcionando só no navegador.
import { contaAtual, quandoEntrar } from './conta'
import { lerCartoes, quandoMudarCartao, substituirCartoes, type Cartao } from './cartoes'
import { supabase } from './supabase'

type Linha = {
  cartao_id: string
  capsula_id: string | null
  frente: string
  verso: string
  proxima_revisao: string
  intervalo_dias: number
  facilidade: number
  criado_em: string
  atualizado_em: string
}

function paraLinha(c: Cartao) {
  return {
    cartao_id: c.id,
    capsula_id: c.capsulaId,
    frente: c.frente,
    verso: c.verso,
    proxima_revisao: c.proxima,
    intervalo_dias: c.intervaloDias,
    facilidade: c.facilidade,
    criado_em: c.criadoEm,
    atualizado_em: c.atualizadoEm,
  }
}

function deLinha(l: Linha): Cartao {
  return {
    id: l.cartao_id,
    capsulaId: l.capsula_id ?? '',
    frente: l.frente,
    verso: l.verso,
    proxima: l.proxima_revisao,
    intervaloDias: l.intervalo_dias,
    facilidade: Number(l.facilidade),
    criadoEm: l.criado_em,
    atualizadoEm: l.atualizado_em,
  }
}

async function enviar(c: Cartao) {
  if (!supabase || !contaAtual().usuario) return
  const { error } = await supabase.from('revisoes').upsert(paraLinha(c), { onConflict: 'usuario_id,cartao_id' })
  if (error) console.warn('Não consegui salvar o cartão na conta:', error.message)
}

async function apagarNaNuvem(id: string) {
  if (!supabase || !contaAtual().usuario) return
  const { error } = await supabase.from('revisoes').delete().eq('cartao_id', id)
  if (error) console.warn('Não consegui apagar o cartão da conta:', error.message)
}

async function sincronizarAoEntrar() {
  if (!supabase) return
  const { data, error } = await supabase.from('revisoes').select('*')
  if (error) {
    console.warn('Não consegui ler os cartões da conta:', error.message)
    return
  }
  // Linhas antigas, sem pergunta guardada, não servem para revisar
  const daNuvem = new Map<string, Cartao>()
  for (const l of data as Linha[]) if (l.frente) daNuvem.set(l.cartao_id, deLinha(l))
  const juntos = new Map<string, Cartao>(daNuvem)
  for (const local of lerCartoes()) {
    const remoto = daNuvem.get(local.id)
    if (!remoto || local.atualizadoEm > remoto.atualizadoEm) {
      juntos.set(local.id, local)
      await enviar(local)
    }
  }
  substituirCartoes([...juntos.values()])
}

quandoMudarCartao((e) => {
  if (e.tipo === 'salvou') void enviar(e.cartao)
  else void apagarNaNuvem(e.id)
})
quandoEntrar(sincronizarAoEntrar)
