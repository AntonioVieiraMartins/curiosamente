import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const L = 5 // escada de 5 metros
const U = 40

// A escada é a hipotenusa: chão (d) e parede (h) são os catetos. h = √(L² − d²).
export default function EscadaNaParede() {
  const [d, setD] = useState(3)
  const id = useId()
  const h = Math.sqrt(L * L - d * d)
  const fmt = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Escada de {L} metros</p>
      <svg viewBox="-10 -10 250 230" className="mx-auto mt-2 w-full max-w-xs" role="img" aria-label={`Escada de ${L} metros com o pé a ${fmt(d)} metros da parede, alcançando ${fmt(h)} metros de altura.`}>
        <line x1={0} y1={200} x2={230} y2={200} stroke="var(--color-texto)" strokeWidth="3" />
        <line x1={0} y1={0} x2={0} y2={200} stroke="var(--color-texto)" strokeWidth="6" />
        <line x1={d * U} y1={200} x2={0} y2={200 - h * U} stroke="var(--color-coral)" strokeWidth="5" strokeLinecap="round" />
        <text x={(d * U) / 2} y={218} textAnchor="middle" fontSize="13" fill="var(--color-texto)">{fmt(d)} m</text>
        <text x={8} y={200 - (h * U) / 2} fontSize="13" fill="var(--color-texto)">{fmt(h)} m</text>
      </svg>
      <label htmlFor={id} className="block font-semibold">Pé da escada a <span className="text-coral">{fmt(d)} m</span> da parede</label>
      <input id={id} type="range" min={0} max={5} step={0.25} value={d} onChange={(e) => setD(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        h² = {L}² − {fmt(d)}² = {fmt(L * L - d * d)}, então a escada alcança <strong className="text-coral">{fmt(h)} m</strong> de altura.
      </p>
    </div>
  )
}
