import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Cruzamento AaBb x AaBb: 16 combinações, com A = lisa, B = amarela
const gametas = ['AB', 'Ab', 'aB', 'ab']
const classes = [
  { nome: 'lisa e amarela', cor: 'var(--color-amarelo)', teste: (g: string) => g.includes('A') && g.includes('B') },
  { nome: 'lisa e verde', cor: 'var(--color-verde)', teste: (g: string) => g.includes('A') && !g.includes('B') },
  { nome: 'rugosa e amarela', cor: 'var(--color-azul)', teste: (g: string) => !g.includes('A') && g.includes('B') },
  { nome: 'rugosa e verde', cor: 'var(--color-coral)', teste: (g: string) => !g.includes('A') && !g.includes('B') },
]

function filho(a: string, b: string) {
  // junta o alelo do gene 1 de cada gameta e o do gene 2
  return a[0] + b[0] + a[1] + b[1]
}

export default function DihibridoNaGrade() {
  const [sel, setSel] = useState<number | null>(null)
  const contagem = classes.map((c) => gametas.flatMap((a) => gametas.map((b) => filho(a, b))).filter(c.teste).length)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">AaBb x AaBb: as 16 combinações</p>
      <svg viewBox="0 0 220 140" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Grade 4 por 4 de descendentes">
        {gametas.map((g, i) => <text key={`c${g}`} x={64 + i * 38} y="14" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-texto)">{g}</text>)}
        {gametas.map((g, j) => <text key={`l${g}`} x="22" y={38 + j * 30} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-texto)">{g}</text>)}
        {gametas.map((b, j) => gametas.map((a, i) => {
          const f = filho(a, b)
          const k = classes.findIndex((c) => c.teste(f))
          const apagado = sel !== null && sel !== k
          return (
            <g key={`${i}${j}`}>
              <rect x={46 + i * 38} y={20 + j * 30} width={36} height={26} rx={4} fill={classes[k].cor} fillOpacity={apagado ? 0.12 : 0.7} stroke="var(--color-borda)" />
              <text x={64 + i * 38} y={37 + j * 30} textAnchor="middle" fontSize="9" fill="var(--color-texto)">{f}</text>
            </g>
          )
        }))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Destacar um fenótipo">
        {classes.map((c, k) => (
          <button key={c.nome} type="button" onClick={() => setSel(sel === k ? null : k)} aria-pressed={sel === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${sel === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{c.nome}: {contagem[k]}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        As 16 caixas se dividem em {contagem.join(' : ')}. É a proporção 9 : 3 : 3 : 1, que Mendel encontrou ao cruzar plantas que diferiam em dois caracteres ao mesmo tempo.
      </p>
    </div>
  )
}
