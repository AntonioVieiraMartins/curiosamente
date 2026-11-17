import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const C = 150
const R = 110
const rad = (g: number) => (g * Math.PI) / 180
const ponto = (g: number, r = R) => `${C + r * Math.cos(rad(g))},${C - r * Math.sin(rad(g))}`

function tipo(g: number) {
  if (g === 0) return 'nulo'
  if (g < 90) return 'agudo'
  if (g === 90) return 'reto'
  if (g < 180) return 'obtuso'
  if (g === 180) return 'raso (uma reta)'
  if (g < 360) return 'maior que meia-volta'
  return 'uma volta inteira'
}

// O ângulo é a abertura entre dois lados que saem do mesmo ponto (o vértice)
export default function Transferidor() {
  const [g, setG] = useState(60)
  const id = useId()
  const arco = g === 0 ? '' : `M ${ponto(0, 40)} A 40 40 0 ${g > 180 ? 1 : 0} 0 ${ponto(g === 360 ? 359.99 : g, 40)}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Abra o ângulo</p>

      <svg viewBox="0 0 300 300" className="mx-auto mt-3 w-full max-w-xs" aria-hidden="true">
        <circle cx={C} cy={C} r={R} fill="none" stroke="var(--color-borda)" />
        {Array.from({ length: 12 }, (_, i) => i * 30).map((m) => (
          <g key={m}>
            <line x1={C + (R - 6) * Math.cos(rad(m))} y1={C - (R - 6) * Math.sin(rad(m))} x2={C + R * Math.cos(rad(m))} y2={C - R * Math.sin(rad(m))} stroke="var(--color-suave)" />
            <text x={C + (R + 14) * Math.cos(rad(m))} y={C - (R + 14) * Math.sin(rad(m)) + 4} textAnchor="middle" fontSize="10" fill="var(--color-suave)">{m}</text>
          </g>
        ))}
        {g > 0 && <path d={arco} fill="none" stroke="var(--color-amarelo-escuro)" strokeWidth="5" />}
        <line x1={C} y1={C} x2={C + R} y2={C} stroke="var(--color-texto)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={C} y1={C} x2={C + R * Math.cos(rad(g))} y2={C - R * Math.sin(rad(g))} stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" />
        <circle cx={C} cy={C} r="4" fill="var(--color-texto)" />
      </svg>

      <label htmlFor={id} className="mt-2 block font-semibold">Abertura: <span className="text-coral">{g}°</span></label>
      <input id={id} type="range" min={0} max={360} value={g} onChange={(e) => setG(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-1 flex flex-wrap gap-2">
        {[45, 90, 135, 180, 270].map((v) => (
          <button key={v} type="button" onClick={() => setG(v)} className="min-h-11 rounded-full border border-borda px-4 font-semibold">{v}°</button>
        ))}
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Ângulo de <strong className="text-coral">{g}°</strong>: <strong>{tipo(g)}</strong>. É {g / 360 === 0 ? 'zero' : `${Math.round((g / 360) * 1000) / 1000} de volta`}.
      </p>
    </div>
  )
}
