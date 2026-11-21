import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// A idade da Terra (cerca de 4.540 milhões de anos) comprimida em 24 horas
const IDADE = 4540
const eventos = [
  { ma: 4540, texto: 'A Terra se forma' },
  { ma: 3500, texto: 'Primeiros sinais claros de vida (micróbios)' },
  { ma: 2400, texto: 'O oxigênio se acumula na atmosfera' },
  { ma: 1800, texto: 'Surgem as células com núcleo' },
  { ma: 575, texto: 'Primeiros animais grandes' },
  { ma: 470, texto: 'Plantas chegam à terra firme' },
  { ma: 230, texto: 'Surgem os dinossauros' },
  { ma: 66, texto: 'Extinção dos dinossauros não voadores' },
  { ma: 0.3, texto: 'Surge o Homo sapiens' },
]
const horaDe = (ma: number) => 24 * (1 - ma / IDADE)
const hms = (h: number) => {
  const s = Math.round(h * 3600)
  const hh = Math.floor(s / 3600)
  const mm = Math.floor((s % 3600) / 60)
  const ss = s % 60
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
}

export default function RelogioDaTerra() {
  const [h, setH] = useState(12)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A Terra em 24 horas</p>
      <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-fundo" role="img" aria-label={`Relógio em ${hms(h)}`}>
        <div className="h-full bg-azul" style={{ width: `${(h / 24) * 100}%` }} />
      </div>
      <div className="mt-3"><Deslizante rotulo="Hora no relógio da Terra" valor={Math.round(h * 10) / 10} min={0} max={24} passo={0.1} aoMudar={setH} /></div>
      <ul className="mt-3 space-y-1 text-[15px]">
        {eventos.map((e) => {
          const feito = horaDe(e.ma) <= h + 0.0001
          return (
            <li key={e.texto} className={`flex justify-between gap-3 rounded-xl px-3 py-2 ${feito ? 'bg-fundo' : 'opacity-40'}`}>
              <span>{e.texto}</span>
              <span className="shrink-0 font-semibold tabular-nums">{hms(horaDe(e.ma))}</span>
            </li>
          )
        })}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Neste relógio, os dinossauros desaparecem às 23h39, e a espécie humana só chega a <strong>poucos segundos antes da meia-noite</strong>. A maior parte da história da Terra foi de micróbios.
      </p>
    </div>
  )
}
