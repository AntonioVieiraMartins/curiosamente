import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Da contagem à tabela e ao gráfico: cada voto vira um risquinho, depois um número, depois uma barra
const opcoes = ['Banana', 'Maçã', 'Uva', 'Laranja']

export default function ContaVotos() {
  const [v, setV] = useState([5, 8, 3, 6])
  const total = v.reduce((a, b) => a + b, 0)
  const max = Math.max(...v, 1)
  const mais = v.indexOf(Math.max(...v))
  const mexe = (i: number, d: number) => setV(v.map((x, k) => (k === i ? Math.max(0, x + d) : x)))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é a fruta preferida da turma?</p>
      <ul className="mt-3 space-y-2">
        {opcoes.map((o, i) => (
          <li key={o} className="flex items-center justify-between gap-2 rounded-2xl border border-borda p-2 text-[15px]">
            <span className="w-20 font-semibold">{o}</span>
            <span className="flex-1 truncate font-mono text-suave" aria-hidden="true">{'|'.repeat(v[i])}</span>
            <span className="flex items-center gap-1">
              <button type="button" aria-label={`Tirar um voto de ${o}`} onClick={() => mexe(i, -1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">−</button>
              <span className="w-6 text-center font-bold">{v[i]}</span>
              <button type="button" aria-label={`Mais um voto para ${o}`} onClick={() => mexe(i, 1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">+</button>
            </span>
          </li>
        ))}
      </ul>
      <svg viewBox="0 0 320 130" role="img" aria-label="Gráfico de barras com os votos" className="mt-3 h-auto w-full">
        <line x1={20} y1={110} x2={310} y2={110} stroke="var(--color-suave)" />
        {opcoes.map((o, i) => {
          const h = (v[i] / max) * 90
          return (
            <g key={o}>
              <rect x={40 + i * 70} y={110 - h} width={44} height={h} rx={3} fill={i === mais ? 'var(--color-amarelo)' : 'var(--color-azul)'} />
              <text x={62 + i * 70} y={104 - h} textAnchor="middle" style={{ fontSize: 11, fontWeight: 600, fill: 'var(--color-texto)' }}>{v[i]}</text>
              <text x={62 + i * 70} y={124} textAnchor="middle" style={{ fontSize: 10, fill: 'var(--color-suave)' }}>{o}</text>
            </g>
          )
        })}
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Total de votos: <b>{total}</b>. Mais votada (em amarelo): <b>{total === 0 ? '—' : opcoes[mais]}</b>{total > 0 ? ` com ${v[mais]} votos, ${((v[mais] / total) * 100).toFixed(0)}% do total` : ''}. A tabela diz os números; o gráfico deixa ver na hora quem ganha.
      </p>
    </div>
  )
}
