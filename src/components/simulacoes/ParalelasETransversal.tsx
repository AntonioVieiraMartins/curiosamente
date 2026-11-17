import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const rad = (g: number) => (g * Math.PI) / 180
const Y1 = 80
const Y2 = 180

// Retas paralelas cortadas por uma transversal: os quatro ângulos de cima se repetem iguaizinhos embaixo
export default function ParalelasETransversal() {
  const [a, setA] = useState(65)
  const id = useId()
  const b = 180 - a
  const cot = Math.cos(rad(a)) / Math.sin(rad(a))
  const x1 = 150
  const x2 = 150 - (Y2 - Y1) * cot // a transversal desce inclinada
  const rotulos = [
    { g: a / 2, v: a, cor: 'var(--color-coral)' },
    { g: (a + 180) / 2, v: b, cor: 'var(--color-azul-texto)' },
    { g: 180 + a / 2, v: a, cor: 'var(--color-coral)' },
    { g: (180 + a + 360) / 2, v: b, cor: 'var(--color-azul-texto)' },
  ]
  const grupo = (cx: number, cy: number) => rotulos.map((r, i) => (
    <text key={i} x={cx + 32 * Math.cos(rad(r.g))} y={cy - 32 * Math.sin(rad(r.g)) + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill={r.cor}>{r.v}°</text>
  ))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Paralelas e transversal</p>

      <svg viewBox="0 0 300 260" className="mx-auto mt-3 w-full max-w-sm" aria-hidden="true">
        <line x1="10" x2="290" y1={Y1} y2={Y1} stroke="var(--color-texto)" strokeWidth="2.5" />
        <line x1="10" x2="290" y1={Y2} y2={Y2} stroke="var(--color-texto)" strokeWidth="2.5" />
        <line x1={x1 + 90 * cot} y1={Y1 - 90} x2={x2 - 80 * cot} y2={Y2 + 80} stroke="var(--color-suave)" strokeWidth="2.5" />
        {grupo(x1, Y1)}
        {grupo(x2, Y2)}
      </svg>

      <label htmlFor={id} className="mt-2 block font-semibold">Ângulo: <span className="text-coral">{a}°</span></label>
      <input id={id} type="range" min={40} max={140} value={a} onChange={(e) => setA(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Os ângulos <span className="text-coral">laranja</span> valem todos {a}° e os <span className="text-azul-texto">azuis</span> valem todos {b}°. Em cima ou embaixo, é igual: como as retas são paralelas, a transversal as corta com a mesma inclinação.
      </p>
    </div>
  )
}
