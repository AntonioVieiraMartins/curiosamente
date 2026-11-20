import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tempo = distância ÷ velocidade, e o horário de chegada a partir das 8h00
export default function PlanejaViagem() {
  const [km, setKm] = useState(240)
  const [v, setV] = useState(80)
  const horas = km / v
  const minutosTotais = Math.round(horas * 60)
  const chegada = 8 * 60 + minutosTotais
  const hh = Math.floor(minutosTotais / 60)
  const mm = minutosTotais % 60
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Planeje uma viagem (saída às 8h00)</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Distância: {km} km<input type="range" min={30} max={600} step={10} value={km} onChange={(e) => setKm(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Velocidade constante: {v} km/h<input type="range" min={20} max={120} step={10} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Tempo = {km} ÷ {v} = <strong>{hh} h {pad(mm)} min</strong>. Chegada às <strong>{pad(Math.floor(chegada / 60) % 24)}h{pad(chegada % 60)}</strong>
        {chegada >= 24 * 60 ? ' (já no dia seguinte).' : '.'}
      </p>
      <p className="mt-2 text-sm text-suave">Sem paradas e em velocidade constante. Numa viagem real, o tempo das paradas entra na conta.</p>
    </div>
  )
}
