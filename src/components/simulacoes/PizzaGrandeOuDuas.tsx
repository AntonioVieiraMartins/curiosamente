import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// A área do círculo cresce com o QUADRADO do raio: dobrar o tamanho quadruplica a pizza.
export default function PizzaGrandeOuDuas() {
  const [d1, setD1] = useState(40)
  const [d2, setD2] = useState(30)
  const id1 = useId()
  const id2 = useId()
  const area = (d: number) => Math.PI * (d / 2) ** 2
  const a1 = area(d1)
  const a2 = 2 * area(d2)
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 0 })
  const mais = a1 > a2 ? 'A pizza grande' : a2 > a1 ? 'As duas pizzas menores' : 'Empate'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma grande ou duas menores?</p>
      <label htmlFor={id1} className="mt-3 block font-semibold">Uma pizza de diâmetro: <span className="text-coral">{d1} cm</span></label>
      <input id={id1} type="range" min={15} max={50} step={1} value={d1} onChange={(e) => setD1(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={id2} className="block font-semibold">Duas pizzas, cada uma de: <span className="text-azul">{d2} cm</span></label>
      <input id={id2} type="range" min={15} max={50} step={1} value={d2} onChange={(e) => setD2(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <svg viewBox="0 0 300 120" className="mt-2 w-full max-w-sm" role="img" aria-label="Pizza grande ao lado de duas pizzas menores, desenhadas em escala">
        <circle cx={60} cy={60} r={(d1 / 50) * 55} fill="var(--color-coral)" opacity="0.8" />
        <circle cx={170} cy={60} r={(d2 / 50) * 55} fill="var(--color-azul)" opacity="0.8" />
        <circle cx={250} cy={60} r={(d2 / 50) * 25} fill="var(--color-azul)" opacity="0.8" />
      </svg>
      <div className="mt-1 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">1 pizza de {d1} cm</div><div className="text-lg font-bold">{f(a1)} cm²</div></div>
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">2 pizzas de {d2} cm</div><div className="text-lg font-bold">{f(a2)} cm²</div></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{mais}</strong> {mais === 'Empate' ? 'têm a mesma quantidade de pizza.' : 'tem mais pizza.'} A área é π × (diâmetro ÷ 2)², então a diferença de tamanho conta ao <strong>quadrado</strong>: dobrar o diâmetro dá <strong>4 vezes</strong> a pizza.
      </p>
    </div>
  )
}
