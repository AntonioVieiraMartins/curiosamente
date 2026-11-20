import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Folha de alface temperada com sal: a água sai das células e vai parar no fundo da tigela
export default function SaladaMurcha() {
  const [sal, setSal] = useState(true)
  const [min, setMin] = useState(0)
  const perda = sal ? Math.min(1, min / 40) : 0
  const caida = perda * 38
  const agua = perda * 30

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por que a salada murcha</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Tempero">
        {[true, false].map((v) => (
          <button key={String(v)} type="button" aria-pressed={sal === v} onClick={() => setSal(v)} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${sal === v ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{v ? 'Com sal' : 'Sem sal'}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 130" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Folha de alface numa tigela">
        <path d="M30 70 Q100 130 170 70 L160 100 Q100 125 40 100 Z" fill="var(--color-borda)" />
        <rect x={52} y={100 - agua} width={96} height={agua} fill="var(--color-azul)" fillOpacity="0.5" />
        {/* a folha vai caindo com a perda de água */}
        <path d={`M40 ${70 + caida * 0.3} Q100 ${10 + caida} 160 ${70 + caida * 0.3}`} fill="none" stroke="var(--color-verde)" strokeWidth={9 - perda * 4} strokeLinecap="round" />
        <path d={`M60 ${72 + caida * 0.3} Q100 ${34 + caida} 140 ${72 + caida * 0.3}`} fill="none" stroke="var(--color-verde)" strokeWidth={7 - perda * 3} strokeLinecap="round" strokeOpacity="0.7" />
      </svg>
      <div className="mt-3"><Deslizante rotulo="Tempo na tigela (min)" valor={min} min={0} max={40} passo={5} aoMudar={setMin} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!sal
          ? 'Sem sal por perto, a água fica dentro das células e a folha continua firme e crocante.'
          : min === 0
            ? 'Acabou de temperar. O sal ainda está do lado de fora das células.'
            : `Com o sal por fora, a água das células sai por osmose, para tentar diluí-lo. Depois de ${min} min, a folha já perdeu ${Math.round(perda * 100)}% da firmeza e a água se acumula no fundo.`}
      </p>
    </div>
  )
}
