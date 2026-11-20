import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Fotos de uma queda a cada segundo: as distâncias crescem como 1, 4, 9, 16... (e os trechos como 1, 3, 5, 7)
export default function QuedaSegundoASegundo() {
  const [n, setN] = useState(3)
  const g = 9.8
  const pos = (s: number) => (g * s * s) / 2
  const MAX = pos(5)
  const y = (m: number) => 12 + (m / MAX) * 140

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma foto por segundo (g = 9,8 m/s²)</p>
      <svg viewBox="0 0 260 165" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Bola caindo, fotografada a cada segundo, até ${n} segundos`}>
        <line x1={40} y1={12} x2={40} y2={152} stroke="var(--color-texto)" strokeOpacity="0.3" />
        {Array.from({ length: n + 1 }, (_, s) => (
          <g key={s}>
            <circle cx={40} cy={y(pos(s))} r={5} fill="var(--color-azul)" fillOpacity={s === n ? 1 : 0.55} />
            <text x={52} y={y(pos(s)) + 3} fontSize="8" fill="var(--color-suave)">{s} s: {pos(s).toFixed(1).replace('.', ',')} m</text>
            {s > 0 && <text x={170} y={y((pos(s) + pos(s - 1)) / 2) + 3} fontSize="8" fill="var(--color-coral)">+{(pos(s) - pos(s - 1)).toFixed(1).replace('.', ',')} m</text>}
          </g>
        ))}
      </svg>
      <label className="mt-3 block text-sm font-semibold">Segundos de queda: {n}<input type="range" min={1} max={5} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {n} s a bola caiu <strong>{pos(n).toFixed(1).replace('.', ',')} m</strong> e está a {(g * n).toFixed(1).replace('.', ',')} m/s. Cada segundo, ela anda mais que o anterior: os trechos (em vermelho) crescem como 1, 3, 5, 7... multiplicados por 4,9 m. É o padrão de Galileu.
      </p>
    </div>
  )
}
