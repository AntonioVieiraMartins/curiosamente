import { useSyncExternalStore } from 'react'
import { assinar, lerAnotacoes } from '../lib/anotacoes'

// Todas as anotações deste navegador (já com as da conta, se a pessoa estiver logada)
export function useAnotacoes() {
  return useSyncExternalStore(assinar, lerAnotacoes, lerAnotacoes)
}
