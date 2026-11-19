import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const cenas = [
  { nome: 'Arroz', un: 'kg', pequeno: { q: 1, p: 6.2 }, grande: { q: 5, min: 20, max: 40, p: 28 } },
  { nome: 'Suco', un: 'litro', pequeno: { q: 0.2, p: 2.4 }, grande: { q: 1, min: 7, max: 14, p: 9.9 } },
  { nome: 'Sabão em pó', un: 'kg', pequeno: { q: 0.8, p: 9.6 }, grande: { q: 2, min: 18, max: 30, p: 26 } },
]

// O pacote maior nem sempre é mais barato: compare sempre o preço por unidade.
export default function ComparaPacotes() {
  const [k, setK] = useState(0)
  const [preco, setPreco] = useState<number[]>(cenas.map((c) => c.grande.p))
  const id = useId()
  const c = cenas[k]
  const pg = preco[k]
  const up = c.pequeno.p / c.pequeno.q
  const ug = pg / c.grande.q
  const venceGrande = ug < up
  const empate = Math.abs(ug - up) < 0.005
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 3 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual pacote compensa?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {cenas.map((s, j) => (
          <button key={s.nome} type="button" aria-pressed={j === k} onClick={() => setK(j)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${j === k ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{s.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block font-semibold">Preço do pacote grande: <span className="text-coral">{brl(pg)}</span></label>
      <input id={id} type="range" min={c.grande.min} max={c.grande.max} step={0.1} value={pg}
        onChange={(e) => setPreco(preco.map((x, j) => (j === k ? Number(e.target.value) : x)))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className={`rounded-2xl border-2 p-3 ${!venceGrande && !empate ? 'border-verde' : 'border-borda'}`}>
          <div className="text-xs font-semibold text-suave">Pequeno: {f(c.pequeno.q)} {c.un} por {brl(c.pequeno.p)}</div>
          <div className="text-lg font-bold">{brl(up)} / {c.un}</div>
        </div>
        <div className={`rounded-2xl border-2 p-3 ${venceGrande ? 'border-verde' : 'border-borda'}`}>
          <div className="text-xs font-semibold text-suave">Grande: {f(c.grande.q)} {c.un} por {brl(pg)}</div>
          <div className="text-lg font-bold">{brl(ug)} / {c.un}</div>
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {empate ? 'Os dois saem pelo mesmo preço por unidade.' : venceGrande ? `O pacote grande compensa: sai mais barato por ${c.un}.` : `O pacote pequeno compensa: o grande só parece vantagem. Por ${c.un}, ele sai mais caro.`}
      </p>
    </div>
  )
}
