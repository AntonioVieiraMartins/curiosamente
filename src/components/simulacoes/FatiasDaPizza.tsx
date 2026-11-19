import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Cortando o círculo em mais e mais triângulos, a área do polígono chega perto de π × r².
export default function FatiasDaPizza() {
  const [n, setN] = useState(8)
  const id = useId()
  const R = 80
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (2 * Math.PI * i) / n - Math.PI / 2
    return [110 + R * Math.cos(a), 100 + R * Math.sin(a)]
  })
  const areaUnit = (n / 2) * Math.sin((2 * Math.PI) / n) // em unidades de r²
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cortando a pizza em triângulos</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Número de fatias: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={3} max={96} step={1} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <svg viewBox="0 0 220 200" className="mt-2 w-full max-w-xs" role="img" aria-label={`Polígono de ${n} lados dentro de um círculo`}>
        <circle cx={110} cy={100} r={R} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth="2" />
        <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="var(--color-azul)" fillOpacity="0.25" stroke="var(--color-azul)" strokeWidth="2" strokeLinejoin="round" />
        {n <= 24 && pts.map((p, i) => <line key={i} x1={110} y1={100} x2={p[0]} y2={p[1]} stroke="var(--color-coral)" strokeWidth="1" />)}
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {n} fatias, a área do polígono é <strong>{areaUnit.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} × r²</strong>. O círculo de verdade tem <strong>π × r² ≈ 3,1416 × r²</strong>.
        Quanto mais fatias, mais o polígono se parece com o círculo, e mais o número se aproxima de π.
      </p>
    </div>
  )
}
