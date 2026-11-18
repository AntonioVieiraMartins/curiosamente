import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Produto = { id: number; nome: string; categoria: string; preco: number }
const produtos: Produto[] = [
  { id: 1, nome: 'Tênis', categoria: 'calçado', preco: 100 },
  { id: 2, nome: 'Boné', categoria: 'acessório', preco: 40 },
  { id: 3, nome: 'Camiseta', categoria: 'roupa', preco: 60 },
  { id: 4, nome: 'Chinelo', categoria: 'calçado', preco: 30 },
  { id: 5, nome: 'Meia', categoria: 'roupa', preco: 10 },
  { id: 6, nome: 'Mochila', categoria: 'acessório', preco: 120 },
]

const filtros: { rotulo: string; sql: string; ok: (p: Produto) => boolean }[] = [
  { rotulo: 'sem filtro', sql: '', ok: () => true },
  { rotulo: "categoria = 'calçado'", sql: " WHERE categoria = 'calçado'", ok: (p) => p.categoria === 'calçado' },
  { rotulo: 'preco > 50', sql: ' WHERE preco > 50', ok: (p) => p.preco > 50 },
  { rotulo: "categoria = 'acessório'", sql: " WHERE categoria = 'acessório'", ok: (p) => p.categoria === 'acessório' },
]
const ordens: { rotulo: string; sql: string; cmp: (a: Produto, b: Produto) => number }[] = [
  { rotulo: 'sem ordem', sql: '', cmp: () => 0 },
  { rotulo: 'preço, do menor ao maior', sql: ' ORDER BY preco', cmp: (a, b) => a.preco - b.preco },
  { rotulo: 'nome, de A a Z', sql: ' ORDER BY nome', cmp: (a, b) => a.nome.localeCompare(b.nome, 'pt') },
]

// SQL de brinquedo: você escolhe o filtro e a ordem e vê a consulta e o resultado.
export default function ConsultaSql() {
  const [f, setF] = useState(0)
  const [o, setO] = useState(0)
  const [soDois, setSoDois] = useState(false)
  const res = produtos.filter(filtros[f].ok).sort(ordens[o].cmp)
  const cols = soDois ? 'nome, preco' : '*'
  const sql = `SELECT ${cols} FROM produtos${filtros[f].sql}${ordens[o].sql};`

  const grupo = (titulo: string, itens: string[], atual: number, set: (n: number) => void) => (
    <div className="mt-2">
      <p className="text-[15px] font-semibold">{titulo}</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {itens.map((t, i) => (
          <button key={t} type="button" aria-pressed={atual === i} onClick={() => set(i)}
            className={`min-h-11 rounded-xl border-2 px-3 text-[14px] ${atual === i ? 'border-azul bg-fundo font-bold' : 'border-borda'}`}>{t}</button>
        ))}
      </div>
    </div>
  )

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte uma consulta na tabela "produtos"</p>
      {grupo('Filtro (WHERE)', filtros.map((x) => x.rotulo), f, setF)}
      {grupo('Ordem (ORDER BY)', ordens.map((x) => x.rotulo), o, setO)}
      <button type="button" aria-pressed={soDois} onClick={() => setSoDois(!soDois)}
        className={`mt-2 min-h-11 rounded-xl border-2 px-3 text-[14px] ${soDois ? 'border-verde bg-fundo font-bold' : 'border-borda'}`}>Só as colunas nome e preço: {soDois ? 'sim' : 'não (todas)'}</button>
      <pre className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{sql}</code></pre>
      <div aria-live="polite" className="mt-2 overflow-x-auto">
        <table className="w-full border-collapse text-[15px]">
          <thead><tr>{(soDois ? ['nome', 'preco'] : ['id', 'nome', 'categoria', 'preco']).map((c) => <th key={c} className="border border-borda px-2 py-1 text-left">{c}</th>)}</tr></thead>
          <tbody>
            {res.map((p) => (
              <tr key={p.id}>
                {!soDois && <td className="border border-borda px-2 py-1">{p.id}</td>}
                <td className="border border-borda px-2 py-1">{p.nome}</td>
                {!soDois && <td className="border border-borda px-2 py-1">{p.categoria}</td>}
                <td className="border border-borda px-2 py-1">{p.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-[15px] text-suave">{res.length} linha{res.length === 1 ? '' : 's'} no resultado.</p>
      </div>
    </div>
  )
}
