import { useState } from 'react'
import { cartao } from '../ui/estilos'

const clientes = [{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Bruno' }]
const pedidos = [
  { id: 101, cliente_id: 1, item: 'Tênis' },
  { id: 102, cliente_id: 2, item: 'Boné' },
  { id: 103, cliente_id: 1, item: 'Meia' },
]

// A chave estrangeira (cliente_id) liga cada pedido a um cliente, sem repetir o nome em todo pedido.
export default function TabelasLigadas() {
  const [sel, setSel] = useState<number | null>(null)
  const [juntar, setJuntar] = useState(false)
  const pedido = pedidos.find((p) => p.id === sel)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Duas tabelas ligadas por um número</p>
      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="font-semibold">clientes</p>
          {clientes.map((c) => (
            <p key={c.id} className={`mt-1 rounded-xl border-2 px-3 py-2 text-[15px] ${pedido?.cliente_id === c.id ? 'border-verde bg-fundo font-semibold' : 'border-borda'}`}>id {c.id}: {c.nome}</p>
          ))}
        </div>
        <div>
          <p className="font-semibold">pedidos (toque num)</p>
          {pedidos.map((p) => (
            <button key={p.id} type="button" aria-pressed={sel === p.id} onClick={() => setSel(p.id)}
              className={`mt-1 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${sel === p.id ? 'border-azul bg-fundo font-semibold' : 'border-borda'}`}>
              id {p.id}, cliente_id {p.cliente_id}, {p.item}
            </button>
          ))}
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {pedido ? `O pedido ${pedido.id} tem cliente_id ${pedido.cliente_id}, então pertence a ${clientes.find((c) => c.id === pedido.cliente_id)?.nome}.` : 'Escolha um pedido para ver a que cliente ele pertence.'}
      </p>
      <button type="button" aria-pressed={juntar} onClick={() => setJuntar(!juntar)} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">{juntar ? 'Esconder a junção (JOIN)' : 'Juntar as tabelas (JOIN)'}</button>
      {juntar && (
        <ul className="mt-2 space-y-1 text-[15px]">
          {pedidos.map((p) => <li key={p.id} className="rounded-xl border border-borda px-3 py-1.5">{clientes.find((c) => c.id === p.cliente_id)?.nome} comprou {p.item} (pedido {p.id})</li>)}
        </ul>
      )}
    </div>
  )
}
