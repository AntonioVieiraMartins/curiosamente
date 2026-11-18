import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Relógio de ponteiros: 12 horas = 360°, então 30° por hora e 6° por minuto
export default function RelogioDosPonteiros() {
  const [h, setH] = useState(3)
  const [m, setM] = useState(30)
  const idh = useId(), idm = useId()
  const angM = m * 6
  const angH = (h % 12) * 30 + m * 0.5
  const ponta = (ang: number, r: number): [number, number] => [100 + r * Math.sin((ang * Math.PI) / 180), 100 - r * Math.cos((ang * Math.PI) / 180)]
  const [mx, my] = ponta(angM, 78)
  const [hx, hy] = ponta(angH, 52)
  const diff = Math.abs(angH - angM)
  const entre = Math.min(diff, 360 - diff)
  const dois = (n: number) => String(n).padStart(2, '0')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O relógio de ponteiros</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idh} className="text-[15px]">Hora: <b>{h}</b>
          <input id={idh} type="range" min={1} max={12} value={h} onChange={(e) => setH(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idm} className="text-[15px]">Minutos: <b>{m}</b>
          <input id={idm} type="range" min={0} max={59} value={m} onChange={(e) => setM(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <svg viewBox="0 0 200 200" role="img" aria-label={`Relógio marcando ${h} horas e ${m} minutos`} className="mx-auto mt-2 h-auto w-full max-w-[220px]">
        <circle cx={100} cy={100} r={92} fill="var(--color-superficie)" stroke="var(--color-borda)" strokeWidth={3} />
        {Array.from({ length: 12 }, (_, k) => {
          const [x1, y1] = ponta(k * 30, 84), [x2, y2] = ponta(k * 30, 92), [tx, ty] = ponta(k * 30, 72)
          return (
            <g key={k}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-suave)" strokeWidth={2} />
              <text x={tx} y={ty} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 11, fill: 'var(--color-suave)' }}>{k === 0 ? 12 : k}</text>
            </g>
          )
        })}
        <line x1={100} y1={100} x2={hx} y2={hy} stroke="var(--color-texto)" strokeWidth={5} strokeLinecap="round" />
        <line x1={100} y1={100} x2={mx} y2={my} stroke="var(--color-coral)" strokeWidth={3} strokeLinecap="round" />
        <circle cx={100} cy={100} r={4} fill="var(--color-texto)" />
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Marca <b>{h}h{dois(m)}</b>. Ponteiro dos minutos: {m} × 6° = {angM}°. Ponteiro das horas: {(h % 12) * 30}° + {m} × 0,5° = {angH}°. O ângulo entre eles é de <b>{entre}°</b>. Repare que o ponteiro das horas também anda quando os minutos passam.
      </p>
    </div>
  )
}
