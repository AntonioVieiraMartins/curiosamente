import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Modelo simples: a taxa cresce com a luz e depois estaciona (satura). Com mais CO₂, o teto sobe.
function taxa(luz: number, co2: 'normal' | 'alto') {
  const teto = co2 === 'alto' ? 100 : 60
  return teto * (1 - Math.exp(-luz / 25))
}

export default function LuzEPlanta() {
  const [luz, setLuz] = useState(30)
  const [co2, setCo2] = useState<'normal' | 'alto'>('normal')
  const pontos = Array.from({ length: 21 }, (_, i) => {
    const l = i * 5
    return `${20 + l * 1.8},${110 - taxa(l, co2) * 0.95}`
  }).join(' ')
  const atual = taxa(luz, co2)
  const teto = co2 === 'alto' ? 100 : 60

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Luz demais ajuda?</p>
      <svg viewBox="0 0 220 130" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gráfico da taxa de fotossíntese em função da luz">
        <line x1={20} y1={110} x2={205} y2={110} stroke="var(--color-texto)" />
        <line x1={20} y1={10} x2={20} y2={110} stroke="var(--color-texto)" />
        <polyline points={pontos} fill="none" stroke="var(--color-verde)" strokeWidth="2.5" />
        <circle cx={20 + luz * 1.8} cy={110 - atual * 0.95} r={5} fill="var(--color-coral)" />
        <text x={112} y={126} textAnchor="middle" fontSize="9" fill="var(--color-suave)">quantidade de luz</text>
        <text x={8} y={14} fontSize="9" fill="var(--color-suave)">taxa</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Quantidade de luz" valor={luz} min={0} max={100} passo={5} aoMudar={setLuz} /></div>
      <div className="mt-3 flex gap-2" role="group" aria-label="Gás carbônico no ar">
        {(['normal', 'alto'] as const).map((k) => (
          <button key={k} type="button" aria-pressed={co2 === k} onClick={() => setCo2(k)} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${co2 === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{k === 'normal' ? 'CO₂ normal' : 'CO₂ aumentado'}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {atual > teto * 0.93
          ? 'A taxa chegou perto do teto: mais luz já não ajuda, porque outro ingrediente (aqui, o gás carbônico) virou o limite. Se aumentar o CO₂, o teto sobe.'
          : luz === 0
            ? 'No escuro, não há fotossíntese.'
            : 'Aqui a luz ainda é o fator limitante: cada pouco de luz a mais aumenta a taxa.'}
      </p>
    </div>
  )
}
