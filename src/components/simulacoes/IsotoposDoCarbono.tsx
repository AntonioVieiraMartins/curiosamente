import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Isótopos: mesmo número de prótons, nêutrons diferentes
const isotopos = [
  { A: 12, nome: 'Carbono-12', ab: '98,9%', obs: 'O mais comum. Estável. Serve de referência para a unidade de massa atômica.' },
  { A: 13, nome: 'Carbono-13', ab: '1,1%', obs: 'Estável e raro. Os cientistas o usam como "marcador" em estudos de alimentação e clima.' },
  { A: 14, nome: 'Carbono-14', ab: 'traços', obs: 'Radioativo: se desfaz com o tempo (meia-vida de cerca de 5.730 anos). É a base da datação por carbono-14.' },
]

export default function IsotoposDoCarbono() {
  const [k, setK] = useState(0)
  const iso = isotopos[k]
  const n = iso.A - 6

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Três carbonos, o mesmo elemento</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Isótopo">
        {isotopos.map((s, i) => (
          <button key={s.A} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>
            Carbono-{s.A}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 240 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${iso.nome}: 6 prótons e ${n} nêutrons`}>
        {Array.from({ length: 6 }, (_, i) => <circle key={`p${i}`} cx={30 + i * 14} cy={30} r={6} fill="var(--color-coral)" />)}
        {Array.from({ length: n }, (_, i) => <circle key={`n${i}`} cx={30 + (i % 8) * 14} cy={52 + Math.floor(i / 8) * 14} r={6} fill="var(--color-suave)" fillOpacity="0.7" />)}
        <text x={150} y={24} fontSize="9" fill="var(--color-coral)">6 prótons (sempre)</text>
        <text x={150} y={44} fontSize="9" fill="var(--color-suave)">{n} nêutrons</text>
        <text x={150} y={64} fontSize="9" fill="var(--color-texto)">massa A = 6 + {n} = {iso.A}</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{iso.nome}</strong>: abundância na natureza {iso.ab}. {iso.obs} Os três têm 6 prótons e, por isso, são todos carbono e reagem do mesmo jeito.
      </p>
    </div>
  )
}
