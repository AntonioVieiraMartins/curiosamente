import { useState } from 'react'
import { cartao } from '../ui/estilos'

const pedidos = [
  { m: 'GET', url: '/produtos', status: '200 OK', corpo: '[\n  { "id": 1, "nome": "Tênis", "preco": 100 },\n  { "id": 2, "nome": "Boné", "preco": 40 }\n]', nota: 'Lista de todos os produtos.' },
  { m: 'GET', url: '/produtos/2', status: '200 OK', corpo: '{ "id": 2, "nome": "Boné", "preco": 40 }', nota: 'Um produto só, pelo número dele.' },
  { m: 'GET', url: '/produtos/99', status: '404 Not Found', corpo: '{ "erro": "produto não encontrado" }', nota: 'Esse número não existe: erro do pedido (família 4xx).' },
  { m: 'POST', url: '/pedidos', status: '201 Created', corpo: '{ "id": 4821, "produto": 2, "situacao": "criado" }', nota: 'Enviou dados (o produto 2) e o servidor criou um pedido novo.' },
  { m: 'DELETE', url: '/pedidos/4821', status: '200 OK', corpo: '{ "apagado": true }', nota: 'Apagou o pedido 4821.' },
]

// Cada linha do "cardápio" é um pedido possível, com a resposta que a cozinha devolve (exemplos de brinquedo).
export default function CardapioDaApi() {
  const [i, setI] = useState(0)
  const p = pedidos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O cardápio da loja (API de exemplo)</p>
      <div className="mt-2 space-y-2">
        {pedidos.map((x, k) => (
          <button key={x.m + x.url} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 w-full rounded-xl border-2 px-3 text-left font-mono text-[15px] ${k === i ? 'border-azul bg-fundo font-bold' : 'border-borda'}`}>{x.m} {x.url}</button>
        ))}
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-3 text-[14px]">
        <p className="font-semibold">Resposta: {p.status}</p>
        <pre className="mt-1 overflow-x-auto"><code>{p.corpo}</code></pre>
      </div>
      <p className="mt-2 text-[15px] text-suave">{p.nota}</p>
    </div>
  )
}
