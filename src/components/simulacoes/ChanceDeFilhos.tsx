import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const tipos = ['AA', 'Aa', 'aa']
const chanceAlelo = (g: string) => g.split('').filter((x) => x === 'a').length / 2

// Chance de um filho aa = (chance de a do pai) x (chance de a da mãe). Cada filho é um sorteio novo.
export default function ChanceDeFilhos() {
  const [p1, setP1] = useState('Aa')
  const [p2, setP2] = useState('Aa')
  const [n, setN] = useState(2)
  const p = chanceAlelo(p1) * chanceAlelo(p2)
  const pct = (x: number) => (x * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })
  const linha = (atual: string, muda: (v: string) => void, rot: string) => (
    <div className="mt-2 flex flex-wrap items-center gap-2" role="group" aria-label={rot}>
      <span className="w-20 text-sm font-semibold">{rot}</span>
      {tipos.map((t) => (
        <button key={t} type="button" onClick={() => muda(t)} aria-pressed={atual === t} className={`min-h-11 min-w-11 rounded-full border px-3 text-[15px] font-bold ${atual === t ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{t}</button>
      ))}
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual a chance?</p>
      {linha(p1, setP1, 'Pai')}
      {linha(p2, setP2, 'Mãe')}
      <div className="mt-3"><Deslizante rotulo="Número de filhos" valor={n} min={1} max={6} passo={1} aoMudar={setN} /></div>
      <svg viewBox="0 0 220 60" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Chance de um filho aa: ${pct(p)} por cento`}>
        <rect x="10" y="20" width="200" height="14" rx="7" fill="var(--color-borda)" />
        <rect x="10" y="20" width={200 * p} height="14" rx="7" fill="var(--color-coral)" />
        <text x="110" y="52" textAnchor="middle" fontSize="10" fill="var(--color-texto)">chance de cada filho ser aa: {pct(p)}%</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Cada filho tem {pct(p)}% de chance de ser aa. Com {n} {n === 1 ? 'filho' : 'filhos'}: a chance de todos serem aa é {pct(p ** n)}%, e a de nenhum ser aa é {pct((1 - p) ** n)}%.
        {' '}Os filhos não têm memória: depois de um filho aa, a chance do próximo continua {pct(p)}%.
      </p>
    </div>
  )
}
