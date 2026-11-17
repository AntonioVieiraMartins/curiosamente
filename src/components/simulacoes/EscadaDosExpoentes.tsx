import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'

const degraus = Array.from({ length: 10 }, (_, i) => 5 - i) // de 5 até −4

// Descendo um degrau, o resultado é dividido pela base. É daí que vêm o expoente 0 e os negativos.
export default function EscadaDosExpoentes() {
  const [base, setBase] = useState(2)
  const [atual, setAtual] = useState(0)
  const id = useId()

  const valor = (e: number) => (e >= 0 ? String(base ** e) : `1/${base ** -e}`)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A escada dos expoentes</p>

      <div className="mt-3 flex gap-2" role="group" aria-label="Base">
        {[2, 10].map((b) => (
          <button key={b} type="button" aria-pressed={base === b} onClick={() => setBase(b)}
            className={`min-h-11 flex-1 rounded-full border-2 font-semibold ${base === b ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}>
            Base {b}
          </button>
        ))}
      </div>

      <label htmlFor={id} className="mt-4 block font-semibold">
        Expoente: <span className="text-coral">{atual}</span>
      </label>
      <input id={id} type="range" min={-4} max={5} value={atual} onChange={(e) => setAtual(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <ol className="mt-2 space-y-1" aria-label="Degraus">
        {degraus.map((e) => (
          <li key={e} className={`flex items-center justify-between rounded-lg px-3 py-1.5 ${e === atual ? 'bg-coral/15 font-semibold' : 'bg-fundo'}`}>
            <span>{base}{sobrescrito(e)}</span>
            <span>{valor(e)}</span>
            <span className="w-14 text-right text-sm text-suave">{e > -4 ? `÷ ${base}` : ''}</span>
          </li>
        ))}
      </ol>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {atual === 0
          ? `Um degrau abaixo de ${base}¹ = ${base}: ${base} ÷ ${base} = 1. Por isso ${base}⁰ = 1.`
          : atual > 0
            ? `${base}${sobrescrito(atual)} = ${Array(atual).fill(base).join(' × ')} = ${base ** atual}.`
            : `${base}${sobrescrito(atual)} = 1 ÷ ${base}${sobrescrito(-atual)} = 1/${base ** -atual}.`}
      </p>
    </div>
  )
}
