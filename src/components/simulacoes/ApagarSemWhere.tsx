import { useState } from 'react'
import { cartao } from '../ui/estilos'

const pedidos = [
  { id: 1, status: 'pago' }, { id: 2, status: 'pendente' }, { id: 3, status: 'pago' },
  { id: 4, status: 'pendente' }, { id: 5, status: 'pago' },
]

// O WHERE é o que limita um comando às linhas certas. Sem ele, o comando vale para a tabela inteira.
export default function ApagarSemWhere() {
  const [comWhere, setComWhere] = useState(true)
  const [feito, setFeito] = useState(false)
  const restam = feito ? (comWhere ? pedidos.filter((p) => p.status !== 'pendente') : []) : pedidos
  const sql = `DELETE FROM pedidos${comWhere ? " WHERE status = 'pendente'" : ''};`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Limpar os pedidos pendentes</p>
      <button type="button" aria-pressed={comWhere} onClick={() => { setComWhere(!comWhere); setFeito(false) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${comWhere ? 'border-verde' : 'border-coral'}`}>{comWhere ? 'Com WHERE (só os pendentes)' : 'Sem WHERE (esqueci!)'}</button>
      <pre className="mt-2 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{sql}</code></pre>
      <button type="button" onClick={() => setFeito(true)} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Executar (de brinquedo)</button>
      <ul aria-live="polite" className="mt-3 space-y-1 text-[15px]">
        {restam.map((p) => <li key={p.id} className="rounded-xl border border-borda px-3 py-1.5">pedido {p.id}: {p.status}</li>)}
      </ul>
      {feito && <p className={`mt-2 rounded-2xl p-3 text-[15px] ${comWhere ? 'bg-fundo' : 'bg-amarelo'}`}>{comWhere ? `Apagou 2 pedidos. Restam ${restam.length}.` : 'Apagou TODOS os 5 pedidos. Por isso se faz backup e se testa antes.'}</p>}
    </div>
  )
}
