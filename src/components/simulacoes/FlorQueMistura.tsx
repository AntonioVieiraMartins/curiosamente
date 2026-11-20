import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Dominância incompleta: RR = vermelha, RB = rosa, BB = branca (nenhum alelo "manda" sozinho)
const tipos = ['RR', 'RB', 'BB']
const nome: Record<string, string> = { RR: 'vermelha', RB: 'rosa', BB: 'branca' }
const cor: Record<string, string> = { RR: 'var(--color-coral)', RB: 'color-mix(in srgb, var(--color-coral) 45%, white)', BB: 'var(--color-fundo)' }

export default function FlorQueMistura() {
  const [p1, setP1] = useState('RR')
  const [p2, setP2] = useState('BB')
  const filhos = p1.split('').flatMap((a) => p2.split('').map((b) => (a === b ? a + b : 'RB')))
  const cont = (t: string) => filhos.filter((x) => x === t).length
  const linha = (atual: string, muda: (v: string) => void, rot: string) => (
    <div className="mt-2 flex flex-wrap items-center gap-2" role="group" aria-label={rot}>
      <span className="w-20 text-sm font-semibold">{rot}</span>
      {tipos.map((t) => (
        <button key={t} type="button" onClick={() => muda(t)} aria-pressed={atual === t} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${atual === t ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{nome[t]} ({t})</button>
      ))}
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Flor que mistura (dominância incompleta)</p>
      {linha(p1, setP1, 'Planta 1')}
      {linha(p2, setP2, 'Planta 2')}
      <svg viewBox="0 0 220 60" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Cores dos 4 filhos">
        {filhos.map((f, k) => <circle key={k} cx={40 + k * 46} cy="30" r="17" fill={cor[f]} stroke="var(--color-coral)" />)}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Filhos: {cont('RR')}/4 vermelhas, {cont('RB')}/4 rosas, {cont('BB')}/4 brancas.
        {p1 === 'RB' && p2 === 'RB' ? ' Aqui a proporção é 1 : 2 : 1, diferente do 3 : 1 de Mendel, porque o heterozigoto tem uma cor própria.' : ''}
      </p>
    </div>
  )
}
