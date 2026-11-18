import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Fuso = deslocamento em relação ao UTC. Se Brasília é UTC−3, a hora local = hora de Brasília + (fuso − (−3))
const lugares = [
  { nome: 'Rio Branco (Acre)', fuso: -5 },
  { nome: 'Manaus (Amazonas)', fuso: -4 },
  { nome: 'Brasília', fuso: -3 },
  { nome: 'Tóquio', fuso: 9 },
  { nome: 'Nova Délhi (Índia)', fuso: 5.5 },
]

function fmt(min: number) {
  const m = ((Math.round(min) % 1440) + 1440) % 1440
  return `${String(Math.floor(m / 60)).padStart(2, '0')}h${String(m % 60).padStart(2, '0')}`
}
const fusoTxt = (f: number) => `UTC${f < 0 ? '−' : '+'}${Math.abs(Math.trunc(f))}${f % 1 ? ':30' : ''}`

export default function FusoHorario() {
  const [hb, setHb] = useState(12)
  const id = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Que horas são lá?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Hora em Brasília: <b>{String(hb).padStart(2, '0')}h</b>
        <input id={id} type="range" min={0} max={23} value={hb} onChange={(e) => setHb(Number(e.target.value))} className="h-11 w-full" />
      </label>
      <ul className="mt-3 space-y-2">
        {lugares.map((l) => {
          const dif = l.fuso - -3
          return (
            <li key={l.nome} className={`flex items-center justify-between gap-2 rounded-2xl border p-3 text-[15px] ${l.nome === 'Brasília' ? 'border-azul bg-azul-claro' : 'border-borda'}`}>
              <span>{l.nome} <span className="text-suave">({fusoTxt(l.fuso)})</span></span>
              <b>{fmt(hb * 60 + dif * 60)}</b>
            </li>
          )
        })}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A diferença para Brasília é a diferença entre os números UTC: Tóquio (+9) menos Brasília (−3) dá 9 − (−3) = 12 horas à frente. Ao passar de 24h, o dia seguinte começa. A Índia usa meia hora a mais: UTC+5:30.
      </p>
    </div>
  )
}
