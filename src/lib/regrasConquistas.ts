// Quais medalhas a pessoa já merece, olhando os dados que o app tem.
// Para quem tem conta, o banco confere de novo (função conceder_conquista).
import type { IdConquista } from '../conteudo/conquistas'
import { buscarCapsula, linhaDaCapsula } from '../conteudo/indice'
import { diaEmBrasilia, maiorSequencia } from './datas'
import type { ProgressoCapsula } from './progressoLocal'
import type { EventoXp } from './xpLocal'

export const RODADAS_DEZ_MIL = 10_000

type Dados = {
  eventos: EventoXp[]
  progresso: Record<string, ProgressoCapsula>
  maiorSequenciaDaConta: number // 0 para visitante
  marcos: string[]
}

export function conquistasMerecidas({ eventos, progresso, maiorSequenciaDaConta, marcos }: Dados): IdConquista[] {
  const tipos = new Set(eventos.map((e) => e.tipo))
  const linhasConcluidas = new Set(
    Object.entries(progresso)
      .filter(([, p]) => p.concluida)
      .map(([id]) => buscarCapsula(id))
      .filter((c) => c !== undefined)
      .map((c) => linhaDaCapsula(c)),
  )
  const diasDeEstudo = new Set(eventos.map((e) => diaEmBrasilia(e.criadoEm)))

  const regras: Record<IdConquista, boolean> = {
    'primeiro-palpite': tipos.has('previsao_certa') || tipos.has('previsao_errada'),
    'errou-bonito': tipos.has('previsao_errada'),
    mergulho: tipos.has('aprofundar'),
    baldeacao: linhasConcluidas.size >= 2,
    'sete-dias': Math.max(maiorSequencia(diasDeEstudo), maiorSequenciaDaConta) >= 7,
    'dez-mil': marcos.includes('dez-mil'),
  }
  return (Object.keys(regras) as IdConquista[]).filter((id) => regras[id])
}
