import { useEffect, useState } from 'react'
import { useConta } from '../lib/conta'
import { diaEmBrasilia, somarDias } from '../lib/datas'
import { supabase } from '../lib/supabase'
import { eventosLocais, useXpLocal } from '../lib/xpLocal'

// Dias (AAAA-MM-DD, horário de Brasília) em que a pessoa ganhou algum XP.
// Com conta, vêm do histórico no banco (últimas semanas); como visitante, do navegador.
export function useDiasDeEstudo() {
  const { usuario, perfil } = useConta()
  useXpLocal() // redesenha quando o visitante ganha XP
  const [daConta, setDaConta] = useState<Set<string> | null>(null)

  useEffect(() => {
    if (!supabase || !usuario) return
    let ativo = true
    const desde = somarDias(diaEmBrasilia(), -14)
    supabase
      .from('eventos_xp')
      .select('criado_em')
      .gte('criado_em', `${desde}T00:00:00-03:00`)
      .then(({ data, error }) => {
        if (!ativo) return
        if (error) console.warn('Não consegui ler os dias de estudo:', error.message)
        else setDaConta(new Set(data.map((e) => diaEmBrasilia(e.criado_em as string))))
      })
    return () => { ativo = false }
  }, [usuario, perfil?.xp_total]) // relê quando o XP muda

  if (usuario) return daConta ?? new Set<string>()
  return new Set(eventosLocais().map((e) => diaEmBrasilia(e.criadoEm)))
}
