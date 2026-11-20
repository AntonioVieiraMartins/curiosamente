import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Genótipos do sistema ABO: IA e IB são codominantes, e i é recessivo
const genos = [
  { g: 'IAIA', a: ['IA', 'IA'] },
  { g: 'IAi', a: ['IA', 'i'] },
  { g: 'IBIB', a: ['IB', 'IB'] },
  { g: 'IBi', a: ['IB', 'i'] },
  { g: 'IAIB', a: ['IA', 'IB'] },
  { g: 'ii', a: ['i', 'i'] },
]
function tipo(x: string, y: string) {
  const t = [x, y]
  const a = t.includes('IA')
  const b = t.includes('IB')
  return a && b ? 'AB' : a ? 'A' : b ? 'B' : 'O'
}

export default function TipoSanguineo() {
  const [i1, setI1] = useState(1)
  const [i2, setI2] = useState(3)
  const filhos = genos[i1].a.flatMap((x) => genos[i2].a.map((y) => tipo(x, y)))
  const nomes = ['A', 'B', 'AB', 'O']
  const cont = (t: string) => filhos.filter((x) => x === t).length
  const linha = (atual: number, muda: (v: number) => void, rot: string) => (
    <div className="mt-2" role="group" aria-label={rot}>
      <span className="block text-sm font-semibold">{rot}: sangue {tipo(genos[atual].a[0], genos[atual].a[1])}</span>
      <div className="mt-1 flex flex-wrap gap-2">
        {genos.map((g, k) => (
          <button key={g.g} type="button" onClick={() => muda(k)} aria-pressed={atual === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-bold ${atual === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{g.g}</button>
        ))}
      </div>
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tipos de sangue (ABO)</p>
      {linha(i1, setI1, 'Pai')}
      {linha(i2, setI2, 'Mãe')}
      <svg viewBox="0 0 220 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Tipos de sangue possíveis dos filhos">
        {nomes.map((t, k) => (
          <g key={t}>
            <rect x={20 + k * 50} y={50 - cont(t) * 10} width="36" height={cont(t) * 10} rx="4" fill="var(--color-azul)" fillOpacity="0.75" />
            <text x={38 + k * 50} y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-texto)">{t}</text>
          </g>
        ))}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Filhos possíveis: {nomes.filter((t) => cont(t) > 0).map((t) => `${t} (${cont(t)}/4)`).join(', ')}.
      </p>
    </div>
  )
}
