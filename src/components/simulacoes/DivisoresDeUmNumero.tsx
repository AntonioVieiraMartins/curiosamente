import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Cada divisor d de um número forma um retângulo d × (número ÷ d) com todos os quadradinhos.
export default function DivisoresDeUmNumero() {
  const [n, setN] = useState(12)
  const id = useId()
  const divisores = Array.from({ length: n }, (_, i) => i + 1).filter((d) => n % d === 0)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem divide o número</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Número: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={2} max={60} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <div aria-live="polite" className="mt-2 space-y-2 rounded-2xl bg-fundo p-4">
        <p>Divisores de {n}: <strong>{divisores.join(', ')}</strong></p>
        <p>
          São {divisores.length} divisores.{' '}
          {divisores.length === 2 ? <strong className="text-verde">Só dois: é um número primo!</strong> : `Cada divisor d forma um retângulo d × (${n} ÷ d).`}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap items-end gap-3" aria-hidden="true">
        {divisores.filter((d) => d <= n / d).map((d) => (
          <div key={d} className="text-center text-xs text-suave">
            <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(${n / d}, 8px)` }}>
              {Array.from({ length: n }, (_, i) => <span key={i} className="size-2 rounded-[2px] bg-azul/70" />)}
            </div>
            {d} × {n / d}
          </div>
        ))}
      </div>
    </div>
  )
}
