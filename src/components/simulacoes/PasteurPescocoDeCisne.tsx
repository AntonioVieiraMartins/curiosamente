import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

type Frasco = 'reto' | 'cisne'

// Caldo fervido: com pescoço reto os micróbios do ar entram; no de cisne, ficam presos na curva
export default function PasteurPescocoDeCisne() {
  const [f, setF] = useState<Frasco>('cisne')
  const [dia, setDia] = useState(0)
  const [inclinado, setInclinado] = useState(false)
  const turvo = dia >= 2 && (f === 'reto' || inclinado)
  const msg = f === 'reto'
    ? turvo ? 'O caldo ficou turvo: micróbios do ar entraram pelo pescoço reto e se multiplicaram.' : 'Recém fervido, o caldo está limpo. Espere uns dias.'
    : inclinado
      ? turvo ? 'Ao inclinar, o caldo tocou a curva onde a poeira ficou presa. Os micróbios chegaram ao caldo e ele ficou turvo.' : 'Inclinado: o caldo encostou na curva. Espere uns dias.'
      : 'O caldo continua limpo. O ar entra, mas a poeira com micróbios fica presa na curva do pescoço.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Frascos de Pasteur</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tipo de frasco">
        {([['reto', 'Pescoço reto'], ['cisne', 'Pescoço de cisne']] as [Frasco, string][]).map(([id, nome]) => (
          <button key={id} type="button" aria-pressed={f === id} onClick={() => { setF(id); setInclinado(false) }}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${f === id ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{nome}</button>
        ))}
        {f === 'cisne' && <button type="button" aria-pressed={inclinado} onClick={() => setInclinado(!inclinado)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${inclinado ? 'border-coral bg-coral text-white' : 'border-borda'}`}>{inclinado ? 'Frasco inclinado' : 'Inclinar o frasco'}</button>}
      </div>
      <svg viewBox="0 0 200 100" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Frasco de ${f === 'reto' ? 'pescoço reto' : 'pescoço de cisne'}, caldo ${turvo ? 'turvo' : 'limpo'}`}>
        <circle cx={80} cy={65} r={26} fill={turvo ? '#b8a46a' : '#f2e3a8'} fillOpacity="0.9" stroke="var(--color-texto)" strokeWidth="2" />
        {f === 'reto'
          ? <path d="M 74 41 L 74 8 M 86 41 L 86 8" stroke="var(--color-texto)" strokeWidth="2" fill="none" />
          : <path d="M 74 41 L 74 28 Q 74 18 90 22 Q 108 28 120 12 M 86 41 L 86 30 Q 86 28 92 31 Q 110 37 126 20" stroke="var(--color-texto)" strokeWidth="2" fill="none" />}
        {f === 'cisne' && <circle cx={100} cy={30} r="2.5" fill="var(--color-coral)" />}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Dias de espera" valor={dia} min={0} max={7} aoMudar={setDia} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">Dia {dia}. {msg}</p>
    </div>
  )
}
