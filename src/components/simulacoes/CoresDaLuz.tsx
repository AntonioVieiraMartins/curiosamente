import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Valores aproximados e simplificados, só para mostrar o formato do gráfico (a clorofila gosta de azul e vermelho)
const cores = [
  { nome: 'Violeta', hex: '#7a4fd1', uso: 80 },
  { nome: 'Azul', hex: '#2f6fd6', uso: 95 },
  { nome: 'Verde', hex: '#3aa655', uso: 15 },
  { nome: 'Amarelo', hex: '#e0b422', uso: 30 },
  { nome: 'Laranja', hex: '#e8832a', uso: 65 },
  { nome: 'Vermelho', hex: '#d63a3a', uso: 90 },
]

export default function CoresDaLuz() {
  const [k, setK] = useState(2)
  const c = cores[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Que cor de luz a folha aproveita?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Cor da luz">
        {cores.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Luz ${c.nome.toLowerCase()} incidindo numa folha`}>
        <rect x={0} y={0} width={220} height={110} fill={c.hex} fillOpacity="0.12" />
        <path d="M60 80 Q110 20 160 80 Q110 100 60 80 Z" fill="var(--color-verde)" fillOpacity="0.6" stroke="var(--color-verde)" />
        <line x1={110} y1={40} x2={110} y2={92} stroke="var(--color-verde)" />
        {[70, 100, 130, 160].map((x) => <line key={x} x1={x} y1={0} x2={x + 6} y2={44} stroke={c.hex} strokeWidth="3" strokeLinecap="round" />)}
        <rect x={14} y={96} width={192} height={8} rx={4} fill="var(--color-borda)" />
        <rect x={14} y={96} width={192 * (c.uso / 100)} height={8} rx={4} fill={c.hex} />
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>Luz {c.nome.toLowerCase()}: a folha aproveita cerca de {c.uso}% (valor ilustrativo).</strong>{' '}
        {c.nome === 'Verde'
          ? 'A clorofila quase não absorve o verde: ela o reflete. Por isso nós vemos as folhas verdes.'
          : c.nome === 'Azul' || c.nome === 'Vermelho'
            ? 'Esta é uma das duas cores que a clorofila mais gosta de absorver. Uma folha sob essa luz faz muita fotossíntese.'
            : 'A clorofila absorve parte dessa cor, mas menos do que o azul e o vermelho.'}
      </p>
    </div>
  )
}
