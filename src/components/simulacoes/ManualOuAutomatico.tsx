import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Tempo gasto por deploy em cada jeito. Os minutos são valores de exemplo, não medidas.
const MIN_MANUAL = 25
const MIN_AUTO = 1

export default function ManualOuAutomatico() {
  const [porSemana, setPorSemana] = useState(5)
  const id = useId()
  const manual = porSemana * MIN_MANUAL
  const auto = porSemana * MIN_AUTO
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo se gasta por semana?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Deploys por semana: <b>{porSemana}</b></label>
      <input id={id} type="range" min={1} max={40} step={1} value={porSemana} onChange={(e) => setPorSemana(Number(e.target.value))} className="mt-1 h-11 w-full" />
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Manual</p><p className="text-2xl font-bold">{manual} min</p><p className="text-xs text-suave">{MIN_MANUAL} min por deploy</p></div>
        <div className="rounded-2xl border-2 border-verde p-3"><p className="text-[14px] font-semibold">Automático</p><p className="text-2xl font-bold">{auto} min</p><p className="text-xs text-suave">{MIN_AUTO} min por deploy</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {porSemana} deploys por semana, o jeito manual consome {Math.round(manual / 60 * 10) / 10} hora(s). E a cada passo manual há chance de esquecer algo. (Tempos de exemplo.)
      </p>
    </div>
  )
}
