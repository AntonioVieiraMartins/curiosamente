import { useState } from 'react'
import { cartao } from '../ui/estilos'

const original = ['A', 'B', 'C', 'D', 'E', 'F']
const cores = ['var(--color-azul)', 'var(--color-coral)', 'var(--color-verde)', 'var(--color-amarelo)', 'var(--color-azul)', 'var(--color-coral)']

const tipos: { nome: string; faz: (c: string[]) => string[]; texto: string }[] = [
  { nome: 'Deleção', faz: (c) => c.filter((x) => x !== 'C'), texto: 'Um pedaço se perdeu (o C). A célula fica sem os genes dele.' },
  { nome: 'Duplicação', faz: (c) => [...c.slice(0, 3), 'C', ...c.slice(3)], texto: 'Um pedaço aparece duas vezes (o C). A célula ganha cópias extras dos genes dele.' },
  { nome: 'Inversão', faz: (c) => [c[0], c[1], c[4], c[3], c[2], c[5]], texto: 'Um pedaço (C-D-E) girou de ponta-cabeça. Nenhum gene foi perdido, mas a ordem mudou.' },
  { nome: 'Translocação', faz: () => ['A', 'B', 'C', 'D', 'E', 'F'].map((x, i) => (i > 3 ? ['X', 'Y'][i - 4] : x)), texto: 'Um pedaço (E-F) trocou de lugar com um pedaço de outro cromossomo (X-Y).' },
]

export default function MutacoesNoCromossomo() {
  const [i, setI] = useState<number | null>(null)
  const depois = i === null ? original : tipos[i].faz(original)
  const barra = (letras: string[], y: number) => letras.map((l, k) => (
    <g key={`${y}${k}`}>
      <rect x={10 + k * 27} y={y} width={25} height={22} rx={4} fill={['X', 'Y'].includes(l) ? 'var(--color-texto)' : cores[original.indexOf(l)]} fillOpacity="0.7" />
      <text x={22.5 + k * 27} y={y + 15} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-texto)">{l}</text>
    </g>
  ))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mutações no cromossomo</p>
      <svg viewBox="0 0 200 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Antes: ${original.join('')}. Depois: ${depois.join('')}`}>
        <text x="14" y="14" fontSize="9" fill="var(--color-suave)">Antes</text>
        {barra(original, 18)}
        <text x="14" y="58" fontSize="9" fill="var(--color-suave)">Depois</text>
        {barra(depois, 62)}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tipo de mutação">
        {tipos.map((t, k) => (
          <button key={t.nome} type="button" onClick={() => setI(i === k ? null : k)} aria-pressed={i === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{t.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{i === null ? 'Cada letra é um pedaço do cromossomo, com vários genes. Escolha uma mudança para ver o que acontece.' : tipos[i].texto}</p>
    </div>
  )
}
