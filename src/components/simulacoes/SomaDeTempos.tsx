import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Somar horas e minutos é somar na base 60: quando os minutos passam de 59, "vai uma hora"
export default function SomaDeTempos() {
  const [h1, setH1] = useState(1)
  const [m1, setM1] = useState(45)
  const [h2, setH2] = useState(2)
  const [m2, setM2] = useState(35)
  const ids = [useId(), useId(), useId(), useId()]
  const totalMin = h1 * 60 + m1 + h2 * 60 + m2
  const h = Math.floor(totalMin / 60)
  const m = totalMin % 60
  const bruto = m1 + m2
  const campo = (id: string, rot: string, v: number, set: (n: number) => void, max: number) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{v}</b>
      <input id={id} type="range" min={0} max={max} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Somando tempo (base 60)</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {campo(ids[0], 'Horas (1ª)', h1, setH1, 9)}
        {campo(ids[1], 'Minutos (1ª)', m1, setM1, 59)}
        {campo(ids[2], 'Horas (2ª)', h2, setH2, 9)}
        {campo(ids[3], 'Minutos (2ª)', m2, setM2, 59)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {h1}h{m1}min + {h2}h{m2}min.<br />
        Minutos: {m1} + {m2} = {bruto}. {bruto >= 60 ? `Passou de 59: ${bruto} min = 1 h e ${bruto - 60} min. O "vai um" vale 60, e não 10.` : 'Não passou de 59, então não há "vai uma hora".'}<br />
        Total: <b>{h}h{String(m).padStart(2, '0')}min</b> ({totalMin} minutos).
      </p>
    </div>
  )
}
