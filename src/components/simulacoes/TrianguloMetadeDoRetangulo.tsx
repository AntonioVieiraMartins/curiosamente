import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const U = 16

// O triângulo sempre cabe duas vezes no retângulo de mesma base e mesma altura
export default function TrianguloMetadeDoRetangulo() {
  const ib = useId()
  const ih = useId()
  const ip = useId()
  const [b, setB] = useState(8)
  const [h, setH] = useState(5)
  const [pp, setPp] = useState(3)
  const p = Math.min(pp, b)
  const x0 = 20
  const y0 = 10
  const tri = `${x0},${y0 + h * U} ${x0 + b * U},${y0 + h * U} ${x0 + p * U},${y0}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Triângulo = metade do retângulo</p>
      <svg viewBox="0 0 200 110" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Triângulo de base ${b} e altura ${h} dentro de um retângulo`}>
        <rect x={x0} y={y0} width={b * U} height={h * U} fill="none" stroke="var(--color-suave)" strokeDasharray="4 3" />
        <polygon points={tri} fill="var(--color-coral)" fillOpacity="0.4" stroke="var(--color-coral)" strokeWidth="2" />
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label htmlFor={ib} className="text-sm font-semibold">Base: {b}<input id={ib} type="range" min={2} max={10} value={b} onChange={(e) => setB(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={ih} className="text-sm font-semibold">Altura: {h}<input id={ih} type="range" min={2} max={6} value={h} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={ip} className="text-sm font-semibold">Posição do topo: {p}<input id={ip} type="range" min={0} max={10} value={p} onChange={(e) => setPp(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Retângulo: {b} × {h} = {b * h}. Triângulo: {b} × {h} ÷ 2 = <strong>{(b * h) / 2}</strong>. Mexa no topo: o triângulo muda de forma, mas a área não, porque base e altura continuam as mesmas.
      </p>
    </div>
  )
}
