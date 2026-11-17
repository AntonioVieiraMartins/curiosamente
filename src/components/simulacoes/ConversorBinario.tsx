import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Para escrever um número em binário: divide por 2 até chegar em 0 e anota os restos, de baixo para cima.
export default function ConversorBinario() {
  const [n, setN] = useState(37)
  const id = useId()
  const passos: { numero: number; resto: number }[] = []
  for (let v = n; v > 0; v = Math.floor(v / 2)) passos.push({ numero: v, resto: v % 2 })
  const resultado = passos.length ? [...passos].reverse().map((p) => p.resto).join('') : '0'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Decimal para binário, passo a passo</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Número: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={0} max={255} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <ol className="mt-2 space-y-1" aria-label="Divisões por 2">
        {passos.map((p, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg bg-fundo px-3 py-1.5 text-[15px]">
            <span>{p.numero} ÷ 2 = {Math.floor(p.numero / 2)}</span>
            <span>resto <strong className="text-coral">{p.resto}</strong></span>
          </li>
        ))}
      </ol>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Lendo os restos de baixo para cima: <strong className="text-coral">{n}</strong> em binário é <strong>{resultado}</strong>.
      </p>
    </div>
  )
}
