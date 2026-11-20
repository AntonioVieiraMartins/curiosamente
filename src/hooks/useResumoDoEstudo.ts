import { useConta } from '../lib/conta'
import { diaEmBrasilia, sequenciaAtual, somarDias } from '../lib/datas'
import { useXpLocal } from '../lib/xpLocal'
import { calcularNivel } from '../lib/xp'
import { useDiasDeEstudo } from './useDiasDeEstudo'

// XP, nível, dias seguidos e dias estudados: da conta (se logado) ou do navegador (visitante)
export function useResumoDoEstudo() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()
  const dias = useDiasDeEstudo()
  const hoje = diaEmBrasilia()
  const xp = usuario ? perfil?.xp_total ?? 0 : xpVisitante
  // O banco só atualiza a sequência quando a pessoa ganha XP: se o último estudo foi antes de ontem, ela já zerou
  const sequenciaViva = perfil?.ultimo_dia_estudo && perfil.ultimo_dia_estudo >= somarDias(hoje, -1) ? perfil.sequencia_atual : 0
  return {
    xp,
    nivel: usuario ? perfil?.nivel ?? 1 : calcularNivel(xpVisitante),
    seq: usuario ? sequenciaViva : sequenciaAtual(dias),
    dias,
    hoje,
  }
}
