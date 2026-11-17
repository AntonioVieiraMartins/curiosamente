import { useState } from 'react'
import { cartao } from '../ui/estilos'

const BITS = 6

// Como um odômetro com só dois algarismos: quando o 1 vira 2, "vai um" para a casa seguinte, só que com 0 e 1.
export default function ContadorBinario() {
  const [n, setN] = useState(0)
  const bin = n.toString(2).padStart(BITS, '0')
  const antes = ((n + 63) % 64).toString(2).padStart(BITS, '0')
  const mudou = (i: number) => n !== 0 && bin[i] !== antes[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Contando em binário</p>
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
        {[...bin].map((b, i) => (
          <span key={i} className={`grid size-11 place-items-center rounded-lg text-xl font-semibold ${mudou(i) ? 'bg-coral text-white' : b === '1' ? 'bg-amarelo' : 'bg-fundo text-suave'}`}>{b}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-center">
        Em decimal: <strong className="text-coral">{n}</strong>. Em binário: <strong>{n.toString(2)}</strong>.
        {n !== 0 && <span className="mt-1 block text-[15px] text-suave">Os algarismos vermelhos mudaram: onde havia 1 + 1, vira 0 e vai um para a esquerda.</span>}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40" disabled={n >= 63} onClick={() => setN(n + 1)}>+ 1</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setN(Math.min(63, n + 5))}>+ 5</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setN(0)}>Zerar</button>
      </div>
    </div>
  )
}
