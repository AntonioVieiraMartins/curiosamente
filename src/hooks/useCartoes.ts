import { useMemo, useSyncExternalStore } from 'react'
import { assinar, cartoesDeHoje, lerCartoes } from '../lib/cartoes'
import { diaEmBrasilia } from '../lib/datas'

// Todos os cartões de revisão deste navegador (já com os da conta, se a pessoa estiver logada)
export function useCartoes() {
  return useSyncExternalStore(assinar, lerCartoes, lerCartoes)
}

// Só os que já podem ser revisados hoje
export function useCartoesDeHoje() {
  const todos = useCartoes()
  const hoje = diaEmBrasilia()
  return useMemo(() => cartoesDeHoje(todos, hoje), [todos, hoje])
}
