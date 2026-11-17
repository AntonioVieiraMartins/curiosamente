import { useSyncExternalStore } from 'react'
import { etapas } from '../conteudo/etapas'
import { assinar, atualizar, lerTodos, progressoVazio } from '../lib/progressoLocal'

// Progresso de todas as cápsulas (usado no mapa e nas fichas)
export function useTodoProgresso() {
  return useSyncExternalStore(assinar, lerTodos, lerTodos)
}

// Progresso de uma cápsula, com as ações que mudam esse progresso
export function useProgresso(capsulaId: string) {
  const progresso = useTodoProgresso()[capsulaId] ?? progressoVazio

  function irPara(indice: number) {
    atualizar(capsulaId, (p) => ({ ...p, etapaAtual: indice }))
  }

  function concluirEtapa(indice: number) {
    atualizar(capsulaId, (p) => {
      const id = etapas[indice].id
      const ultima = indice === etapas.length - 1
      const camada = id === 'aprofundar' ? 3 : indice >= 3 ? 2 : 1
      return {
        ...p,
        concluidas: p.concluidas.includes(id) ? p.concluidas : [...p.concluidas, id],
        camadaMax: Math.max(p.camadaMax, camada) as 1 | 2 | 3,
        etapaAtual: ultima ? indice : indice + 1,
        concluida: p.concluida || ultima,
        concluidaEm: p.concluidaEm ?? (ultima ? new Date().toISOString() : null),
      }
    })
  }

  function registrarPontuacao(acertos: number) {
    atualizar(capsulaId, (p) => ({ ...p, melhorPontuacao: Math.max(p.melhorPontuacao ?? 0, acertos) }))
  }

  function registrarPalpite(chave: string, opcao: number) {
    atualizar(capsulaId, (p) => ({ ...p, palpites: { ...p.palpites, [chave]: opcao } }))
  }

  return { progresso, irPara, concluirEtapa, registrarPontuacao, registrarPalpite }
}
