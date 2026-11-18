import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const mdc = (x: number, y: number): number => (y === 0 ? x : mdc(y, x % y))

// Fórmula de Euclides: com m > n > 0, (m² − n², 2mn, m² + n²) é sempre um terno pitagórico.
export default function TernosPitagoricos() {
  const [m, setM] = useState(2)
  const [n, setN] = useState(1)
  const im = useId()
  const inn = useId()
  const nn = Math.min(n, m - 1)
  const a = m * m - nn * nn
  const b = 2 * m * nn
  const c = m * m + nn * nn
  const primitivo = mdc(mdc(a, b), c) === 1

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Fábrica de ternos pitagóricos</p>
      <label htmlFor={im} className="mt-3 block font-semibold">m = <span className="text-azul">{m}</span></label>
      <input id={im} type="range" min={2} max={9} value={m} onChange={(e) => setM(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={inn} className="block font-semibold">n = <span className="text-verde">{nn}</span> (menor que m)</label>
      <input id={inn} type="range" min={1} max={8} value={nn} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Lados: <strong className="text-coral">{a}, {b}, {c}</strong>
        <span className="mt-1 block">{a}² + {b}² = {a * a} + {b * b} = {a * a + b * b} = {c}² ✓</span>
        <span className="mt-1 block text-suave">{primitivo ? 'É um terno primitivo (os três não têm divisor comum).' : 'Não é primitivo: é múltiplo de um terno menor.'}</span>
      </p>
    </div>
  )
}
