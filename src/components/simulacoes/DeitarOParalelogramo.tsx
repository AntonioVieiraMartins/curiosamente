import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const B = 8
const H = 5
const U = 14

// Inclinar o paralelogramo muda o lado, mas não a base nem a altura: a área fica igual
export default function DeitarOParalelogramo() {
  const id = useId()
  const [s, setS] = useState(3)
  const x0 = 40
  const y0 = 15
  const pts = [[x0, y0 + H * U], [x0 + B * U, y0 + H * U], [x0 + B * U + s * U, y0], [x0 + s * U, y0]].map((p) => p.join(',')).join(' ')
  const lado = Math.sqrt(H * H + s * s)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Inclinando o paralelogramo</p>
      <svg viewBox="0 0 240 110" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Paralelogramo com base 8 e altura 5">
        <rect x={x0} y={y0} width={B * U} height={H * U} fill="none" stroke="var(--color-suave)" strokeDasharray="4 3" />
        <polygon points={pts} fill="var(--color-azul)" fillOpacity="0.35" stroke="var(--color-azul)" strokeWidth="2" />
        <line x1={x0 + s * U} y1={y0} x2={x0 + s * U} y2={y0 + H * U} stroke="var(--color-coral)" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x={x0 + (B * U) / 2} y={y0 + H * U + 12} fontSize="8" textAnchor="middle" fill="var(--color-texto)">base = {B}</text>
      </svg>
      <label htmlFor={id} className="mt-3 block text-sm font-semibold">
        Inclinação: {s}
        <input id={id} type="range" min={-5} max={5} value={s} onChange={(e) => setS(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Base {B}, altura {H} (a linha vermelha): área = {B} × {H} = <strong>{B * H}</strong>, igual à do retângulo pontilhado. O lado inclinado mede {lado.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} e muda, mas não conta para a área.
      </p>
    </div>
  )
}
