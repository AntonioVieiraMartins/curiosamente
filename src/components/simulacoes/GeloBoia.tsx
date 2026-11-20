import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Gelo: moléculas em hexágonos abertos, com espaço vazio. Água líquida: mais juntas, em desordem.
export default function GeloBoia() {
  const [gelo, setGelo] = useState(true)
  const gelos = [[60, 40], [100, 30], [140, 40], [140, 80], [100, 90], [60, 80]]
  const liquidos = [[70, 50], [95, 44], [118, 56], [85, 70], [108, 78], [128, 38], [72, 82], [138, 72], [100, 58]]
  const pts = gelo ? gelos : liquidos
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por que o gelo boia</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Estado da água">
        {[true, false].map((v) => (
          <button key={String(v)} type="button" aria-pressed={gelo === v} onClick={() => setGelo(v)} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${gelo === v ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{v ? 'Gelo (0 °C)' : 'Água líquida (4 °C)'}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={gelo ? 'Moléculas de água em hexágono aberto, com espaço no meio' : 'Moléculas de água mais juntas e desordenadas'}>
        {gelo && gelos.map((p, i) => {
          const q = gelos[(i + 1) % gelos.length]
          return <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke="var(--color-azul)" strokeDasharray="3 3" />
        })}
        {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={8} fill="var(--color-azul)" fillOpacity="0.55" stroke="var(--color-azul)" />)}
        <text x={100} y={112} textAnchor="middle" fontSize="10" fill="var(--color-suave)">{gelo ? 'tracejado = ligações de hidrogênio' : 'as ligações se fazem e se desfazem o tempo todo'}</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {gelo
          ? 'No gelo, cada molécula faz ligações de hidrogênio fixas, formando anéis abertos com muito espaço vazio. Densidade: cerca de 0,92 g/cm³, menor que a da água líquida (cerca de 1,00).'
          : 'Na água líquida, a rede se desmancha um pouco, e as moléculas se aproximam. Cabem mais moléculas no mesmo volume: a água é mais densa que o gelo, e por isso o gelo boia.'}
      </p>
    </div>
  )
}
