import { useEffect, useState } from 'react'
import { buscarCapsula } from '../../conteudo/indice'
import { etapas } from '../../conteudo/etapas'
import { useConta } from '../../lib/conta'
import { supabase } from '../../lib/supabase'
import { eventosLocais } from '../../lib/xpLocal'
import type { TipoXp } from '../../lib/xp'

type Item = { tipo: TipoXp; referencia: string; capsula_id: string | null; xp: number; criado_em: string }

// Transforma um evento de XP numa frase legível
function descrever(e: Item) {
  const capsula = e.capsula_id ? buscarCapsula(e.capsula_id)?.titulo ?? e.capsula_id : ''
  const etapa = etapas.find((x) => x.id === e.referencia.split(':')[1])?.nome
  switch (e.tipo) {
    case 'etapa': return `Concluiu a etapa ${etapa ?? ''} de "${capsula}"`
    case 'aprofundar': return `Foi até o fim do Aprofundar de "${capsula}"`
    case 'capsula': return `Concluiu a cápsula "${capsula}"`
    case 'previsao_certa': return `Acertou a previsão em "${capsula}"`
    case 'previsao_errada': return `Arriscou um palpite e foi até o fim em "${capsula}"`
    case 'sequencia': return 'Manteve a sequência de dias'
    case 'revisao': return 'Fez uma revisão'
  }
}

const formatarData = (iso: string) =>
  new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })

// Linha do tempo "o que eu já fiz": da conta (tabela eventos_xp) ou, para visitantes, do navegador
export default function Historico() {
  const { usuario, perfil } = useConta()
  const [daConta, setDaConta] = useState<Item[] | null>(null)

  useEffect(() => {
    if (!supabase || !usuario) return
    let ativo = true
    supabase
      .from('eventos_xp')
      .select('tipo, referencia, capsula_id, xp, criado_em')
      .order('criado_em', { ascending: false })
      .limit(30)
      .then(({ data, error }) => {
        if (!ativo) return
        if (error) console.warn('Não consegui ler o histórico:', error.message)
        else setDaConta(data as Item[])
      })
    return () => { ativo = false }
  }, [usuario, perfil?.xp_total]) // recarrega quando o XP muda

  const itens: Item[] = usuario
    ? daConta ?? []
    : eventosLocais()
        .map((e) => ({ tipo: e.tipo, referencia: e.referencia, capsula_id: e.capsulaId ?? null, xp: e.xp, criado_em: e.criadoEm }))
        .reverse()

  if (itens.length === 0) {
    return <p className="mt-3 text-suave">Nada por aqui ainda. Cada etapa que você concluir vira uma linha neste diário.</p>
  }

  return (
    <ol className="relative mt-4 space-y-4 pl-6">
      <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-0.5 rounded-full bg-borda" />
      {itens.map((e) => (
        <li key={`${e.tipo}-${e.referencia}-${e.criado_em}`} className="relative">
          <span aria-hidden="true" className="absolute -left-6 top-1.5 size-3 rounded-full bg-azul" />
          <p className="leading-snug">{descrever(e)}</p>
          <p className="text-sm text-suave">{formatarData(e.criado_em)} · +{e.xp} XP</p>
        </li>
      ))}
    </ol>
  )
}
