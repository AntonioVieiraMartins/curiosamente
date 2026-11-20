import { useState } from 'react'
import { cartao } from '../ui/estilos'

const tipos = ['AA', 'Aa', 'aa']
// Maiúscula vem antes na ordenação, então o heterozigoto sempre aparece como Aa
const junta = (x: string, y: string) => [x, y].sort().join('')

// Quadro de Punnett para um gene com dois alelos: A (dominante, semente lisa) e a (recessivo, semente rugosa)
export default function QuadroDePunnett() {
  const [p1, setP1] = useState('Aa')
  const [p2, setP2] = useState('Aa')
  const g1 = p1.split('')
  const g2 = p2.split('')
  const celulas = g2.map((b) => g1.map((a) => junta(a, b)))
  const todos = celulas.flat()
  const contar = (g: string) => todos.filter((x) => x === g).length
  const lisas = todos.filter((x) => x !== 'aa').length
  const botoes = (atual: string, muda: (v: string) => void, nome: string) => (
    <div className="mt-2 flex flex-wrap items-center gap-2" role="group" aria-label={nome}>
      <span className="w-20 text-sm font-semibold">{nome}</span>
      {tipos.map((t) => (
        <button key={t} type="button" onClick={() => muda(t)} aria-pressed={atual === t} className={`min-h-11 min-w-11 rounded-full border px-3 text-[15px] font-bold ${atual === t ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{t}</button>
      ))}
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quadro de Punnett</p>
      {botoes(p1, setP1, 'Pai ou mãe 1')}
      {botoes(p2, setP2, 'Pai ou mãe 2')}
      <svg viewBox="0 0 220 130" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Cruzamento ${p1} com ${p2}`}>
        {g1.map((a, i) => <text key={i} x={95 + i * 60} y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-texto)">{a}</text>)}
        {g2.map((b, j) => <text key={j} x="42" y={62 + j * 50} textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-texto)">{b}</text>)}
        {celulas.map((linha, j) => linha.map((c, i) => (
          <g key={`${i}${j}`}>
            <rect x={65 + i * 60} y={30 + j * 50} width={56} height={46} rx={6} fill={c === 'aa' ? 'var(--color-coral)' : 'var(--color-azul)'} fillOpacity="0.35" stroke="var(--color-borda)" />
            <text x={93 + i * 60} y={58 + j * 50} textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--color-texto)">{c}</text>
          </g>
        )))}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Genótipos: AA = {contar('AA')}/4, Aa = {contar('Aa')}/4, aa = {contar('aa')}/4.
        {' '}Fenótipos: {lisas}/4 de sementes lisas (azul) e {4 - lisas}/4 de rugosas (coral).
        {p1 === 'Aa' && p2 === 'Aa' ? ' É a famosa proporção 3 para 1 de Mendel.' : ''}
      </p>
    </div>
  )
}
