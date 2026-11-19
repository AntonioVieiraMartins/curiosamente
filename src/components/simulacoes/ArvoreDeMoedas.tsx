import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Todas as sequências possíveis de n moedas (C = cara, K = coroa)
function sequencias(n: number): string[] {
  let lista = ['']
  for (let i = 0; i < n; i++) lista = lista.flatMap((s) => [s + 'C', s + 'K'])
  return lista
}
const caras = (s: string) => s.split('').filter((c) => c === 'C').length

export default function ArvoreDeMoedas() {
  const [n, setN] = useState(3)
  const [k, setK] = useState(2)
  const todas = sequencias(n)
  const kk = Math.min(k, n)
  const boas = todas.filter((s) => caras(s) === kk)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Todas as possibilidades de várias moedas</p>
      <label className="mt-3 block text-sm font-semibold">
        Número de moedas: {n}
        <input type="range" min={1} max={4} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" aria-label="Número de moedas" />
      </label>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Quantas caras">
        {Array.from({ length: n + 1 }, (_, i) => i).map((i) => (
          <button key={i} type="button" aria-pressed={i === kk} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${i === kk ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{i} cara{i === 1 ? '' : 's'}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {todas.map((s) => (
          <span key={s} className={`rounded-lg px-1 py-2 text-center font-mono text-sm font-semibold ${caras(s) === kk ? 'bg-azul text-white' : 'bg-fundo text-suave'}`}>{s.split('').join(' ')}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {n} moeda{n > 1 ? 's' : ''} há <strong>{todas.length}</strong> sequências possíveis, todas com a mesma chance. Em <strong>{boas.length}</strong> delas saem exatamente {kk} cara{kk === 1 ? '' : 's'}. Chance = {boas.length}/{todas.length} ≈ {((boas.length / todas.length) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%. (C = cara, K = coroa)
      </p>
    </div>
  )
}
