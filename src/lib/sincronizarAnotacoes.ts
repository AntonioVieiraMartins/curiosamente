// Liga o caderno do navegador à tabela anotacoes do Supabase.
//
// - Cada anotação criada, editada ou apagada por quem está logado vai para a conta.
// - Ao entrar: junta o caderno do navegador com o da nuvem (a versão mais nova de cada anotação vence).
// - Se o banco ainda não recebeu a migração do caderno, os envios falham com um aviso no console
//   e o caderno continua funcionando só no navegador.
import { contaAtual, quandoEntrar } from './conta'
import { lerAnotacoes, quandoMudarAnotacao, substituirAnotacoes, type Anotacao } from './anotacoes'
import { supabase } from './supabase'

type Linha = { ref: string | null; capsula_id: string | null; texto: string; criado_em: string; atualizado_em: string }

function paraLinha(a: Anotacao) {
  return { ref: a.id, capsula_id: a.capsulaId, texto: a.texto, criado_em: a.criadoEm, atualizado_em: a.atualizadoEm }
}

async function enviar(a: Anotacao) {
  if (!supabase || !contaAtual().usuario) return
  const { error } = await supabase.from('anotacoes').upsert(paraLinha(a), { onConflict: 'usuario_id,ref' })
  if (error) console.warn('Não consegui salvar a anotação na conta:', error.message)
}

async function apagarNaNuvem(id: string) {
  if (!supabase || !contaAtual().usuario) return
  const { error } = await supabase.from('anotacoes').delete().eq('ref', id)
  if (error) console.warn('Não consegui apagar a anotação da conta:', error.message)
}

async function sincronizarAoEntrar() {
  if (!supabase) return
  const { data, error } = await supabase.from('anotacoes').select('ref, capsula_id, texto, criado_em, atualizado_em')
  if (error) {
    console.warn('Não consegui ler o caderno da conta:', error.message)
    return
  }
  const daNuvem = new Map<string, Anotacao>()
  for (const l of data as Linha[]) {
    if (!l.ref || !l.capsula_id) continue
    daNuvem.set(l.ref, { id: l.ref, capsulaId: l.capsula_id, texto: l.texto, criadoEm: l.criado_em, atualizadoEm: l.atualizado_em })
  }
  const juntas = new Map<string, Anotacao>(daNuvem)
  for (const local of lerAnotacoes()) {
    const remota = daNuvem.get(local.id)
    if (!remota) {
      juntas.set(local.id, local)
      await enviar(local)
    } else if (local.atualizadoEm > remota.atualizadoEm) {
      juntas.set(local.id, local)
      await enviar(local)
    }
  }
  substituirAnotacoes([...juntas.values()])
}

quandoMudarAnotacao((e) => {
  if (e.tipo === 'salvou') void enviar(e.anotacao)
  else void apagarNaNuvem(e.id)
})
quandoEntrar(sincronizarAoEntrar)
