import { useState } from 'react'
import { cartao } from '../ui/estilos'

const especies = [
  { nome: 'Humano', dois: 46 },
  { nome: 'Chimpanzé', dois: 48 },
  { nome: 'Gato', dois: 38 },
  { nome: 'Cachorro', dois: 78 },
  { nome: 'Milho', dois: 20 },
  { nome: 'Mosca-da-fruta', dois: 8 },
]

// Mitose mantém o número (2n); meiose reduz à metade (n); a fecundação soma de novo
export default function ContaCromossomos() {
  const [e, setE] = useState(0)
  const [modo, setModo] = useState<'mitose' | 'meiose'>('mitose')
  const dois = especies[e].dois
  const n = dois / 2
  const filhas = modo === 'mitose' ? 2 : 4
  const cada = modo === 'mitose' ? dois : n
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos cromossomos?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Espécie">
        {especies.map((s, k) => (
          <button key={s.nome} type="button" onClick={() => setE(k)} aria-pressed={e === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${e === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{s.nome}</button>
        ))}
      </div>
      <div className="mt-2 flex gap-2" role="group" aria-label="Tipo de divisão">
        {(['mitose', 'meiose'] as const).map((m) => (
          <button key={m} type="button" onClick={() => setModo(m)} aria-pressed={modo === m} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${modo === m ? 'border-azul bg-azul text-white' : 'border-borda bg-superficie'}`}>{m === 'mitose' ? 'Mitose' : 'Meiose'}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${filhas} células com ${cada} cromossomos cada`}>
        <circle cx="110" cy="16" r="11" fill="var(--color-azul)" fillOpacity="0.4" stroke="var(--color-azul)" />
        <text x="110" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-texto)">{dois}</text>
        {Array.from({ length: filhas }, (_, k) => {
          const x = filhas === 2 ? 70 + k * 80 : 35 + k * 50
          return (
            <g key={k}>
              <line x1="110" y1="27" x2={x} y2="55" stroke="var(--color-suave)" strokeDasharray="2 3" />
              <circle cx={x} cy="66" r="11" fill={modo === 'mitose' ? 'var(--color-azul)' : 'var(--color-coral)'} fillOpacity="0.4" stroke={modo === 'mitose' ? 'var(--color-azul)' : 'var(--color-coral)'} />
              <text x={x} y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-texto)">{cada}</text>
            </g>
          )
        })}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {modo === 'mitose'
          ? `${especies[e].nome}: a célula tem ${dois} cromossomos (2n). A mitose faz 2 células, cada uma com ${dois}.`
          : `${especies[e].nome}: a célula tem ${dois} cromossomos (2n). A meiose faz 4 células, cada uma com só ${n} (n). Na fecundação, ${n} + ${n} = ${dois}.`}
      </p>
    </div>
  )
}
