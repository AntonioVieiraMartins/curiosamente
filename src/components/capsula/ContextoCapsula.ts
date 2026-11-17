import { createContext, useContext } from 'react'
import type { IdEtapa } from '../../conteudo/etapas'
import type { MetaCapsula } from '../../conteudo/tipos'

// Informações que os componentes dentro do texto (MDX) precisam saber
type Contexto = {
  meta: MetaCapsula
  etapaAtual: IdEtapa
  cor: string
  registrarPontuacao: (acertos: number) => void
  // Palpites guardados para a cápsula poder "lembrar" o que a pessoa achava no começo
  palpites: Record<string, number>
  registrarPalpite: (chave: string, opcao: number) => void
  // Abrir uma caixa "Aprofundar" conta como a camada 3 (Rigor)
  registrarAprofundar: () => void
}

export const ContextoCapsula = createContext<Contexto | null>(null)

export function useCapsula() {
  const contexto = useContext(ContextoCapsula)
  if (!contexto) throw new Error('useCapsula precisa estar dentro de uma cápsula')
  return contexto
}
