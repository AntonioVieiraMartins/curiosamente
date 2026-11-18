import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Segundos, minutos, horas e dias: aqui a escada tem degraus de 60, 60 e 24 (não de 10 em 10)
export default function ConverteTempo() {
  const [seg, setSeg] = useState(5000)
  const id = useId()
  const d = Math.floor(seg / 86400)
  const h = Math.floor((seg % 86400) / 3600)
  const m = Math.floor((seg % 3600) / 60)
  const s = seg % 60
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Segundos em horas e minutos</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Segundos: <b>{seg.toLocaleString('pt-BR')} s</b>
        <input id={id} type="range" min={0} max={200000} step={10} value={seg} onChange={(e) => setSeg(Number(e.target.value))} className="h-11 w-full" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {seg.toLocaleString('pt-BR')} s = {d > 0 ? `${d} dia${d > 1 ? 's' : ''}, ` : ''}<b>{h} h {m} min {s} s</b>.<br />
        Como: ÷ 60 dá minutos ({Math.floor(seg / 60)} min, sobram {s} s); ÷ 60 de novo dá horas ({Math.floor(seg / 3600)} h, sobram {m} min){d > 0 ? '; ÷ 24 dá dias' : ''}.
      </p>
    </div>
  )
}
