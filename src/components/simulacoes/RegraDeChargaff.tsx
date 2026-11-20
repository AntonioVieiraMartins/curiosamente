import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Chargaff: A = T e C = G. Então, fixando A, o resto se decide.
export default function RegraDeChargaff() {
  const [a, setA] = useState(30)
  const t = a
  const c = (100 - 2 * a) / 2
  const g = c
  const barras = [
    { nome: 'A', v: a, cor: 'var(--color-azul)' },
    { nome: 'T', v: t, cor: 'var(--color-coral)' },
    { nome: 'C', v: c, cor: 'var(--color-verde)' },
    { nome: 'G', v: g, cor: 'var(--color-amarelo)' },
  ]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A regra de Chargaff</p>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`A ${a}%, T ${t}%, C ${c}%, G ${g}%`}>
        {barras.map((b, i) => (
          <g key={b.nome}>
            <rect x={20 + i * 48} y={90 - b.v * 1.6} width={32} height={b.v * 1.6} rx={4} fill={b.cor} fillOpacity="0.8" />
            <text x={36 + i * 48} y={102} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-texto)">{b.nome}</text>
            <text x={36 + i * 48} y={84 - b.v * 1.6} textAnchor="middle" fontSize="10" fill="var(--color-texto)">{b.v}%</text>
          </g>
        ))}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Porcentagem de A no DNA" valor={a} min={10} max={40} passo={1} aoMudar={setA} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Se A é {a}%, então T também é {t}%, porque A sempre se liga ao T. Sobram {100 - 2 * a}%, que se dividem igualmente entre C e G: {c}% cada. {a === 30 ? 'Esses valores (30, 30, 20, 20) são parecidos com os do DNA humano.' : ''}
      </p>
    </div>
  )
}
