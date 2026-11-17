import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const C = 110
const R = 95
const rad = (g: number) => (g * Math.PI) / 180
// No relógio o ângulo é contado a partir do 12, no sentido dos ponteiros
const ext = (g: number, r: number) => ({ x: C + r * Math.sin(rad(g)), y: C - r * Math.cos(rad(g)) })

// Cada hora vale 30° e cada minuto vale 6°, mas o ponteiro das horas anda um pouquinho junto com os minutos.
export default function RelogioDeAngulos() {
  const [hora, setHora] = useState(4)
  const [minuto, setMinuto] = useState(0)
  const idH = useId()
  const idM = useId()

  const angHora = (hora % 12) * 30 + minuto * 0.5
  const angMin = minuto * 6
  const diff = Math.abs(angHora - angMin)
  const menor = Math.min(diff, 360 - diff)
  const h = ext(angHora, 55)
  const m = ext(angMin, 80)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O relógio e seus ângulos</p>

      <svg viewBox="0 0 220 220" className="mx-auto mt-3 w-full max-w-[260px]" aria-hidden="true">
        <circle cx={C} cy={C} r={R + 6} fill="var(--color-superficie)" stroke="var(--color-borda)" strokeWidth="2" />
        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => {
          const p = ext(n * 30, R - 10)
          return <text key={n} x={p.x} y={p.y + 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-texto)">{n}</text>
        })}
        <line x1={C} y1={C} x2={h.x} y2={h.y} stroke="var(--color-texto)" strokeWidth="5" strokeLinecap="round" />
        <line x1={C} y1={C} x2={m.x} y2={m.y} stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" />
        <circle cx={C} cy={C} r="4" fill="var(--color-texto)" />
      </svg>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={idH} className="block font-semibold">Hora: <span className="text-coral">{hora}</span></label>
          <input id={idH} type="range" min={1} max={12} value={hora} onChange={(e) => setHora(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
        <div>
          <label htmlFor={idM} className="block font-semibold">Minuto: <span className="text-coral">{minuto}</span></label>
          <input id={idM} type="range" min={0} max={59} value={minuto} onChange={(e) => setMinuto(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Às {hora}h{String(minuto).padStart(2, '0')}: ponteiro das horas em {angHora}°, dos minutos em {angMin}° (contados a partir do 12).
        O menor ângulo entre eles é <strong className="text-coral">{menor}°</strong>.
      </p>
    </div>
  )
}
