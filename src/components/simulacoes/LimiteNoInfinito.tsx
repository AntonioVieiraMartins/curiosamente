import { useState } from 'react'
import { cartao } from '../ui/estilos'

const xs = [1, 10, 100, 1000, 100000, 10000000]
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 7 })

// Limite quando x cresce: f(x) = (2x + 1) ÷ x = 2 + 1/x se aproxima de 2 (um preço médio que estabiliza)
export default function LimiteNoInfinito() {
  const [i, setI] = useState(0)
  const x = xs[i]
  const y = (2 * x + 1) / x
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">f(x) = (2x + 1) ÷ x quando x cresce</p>
      <label className="mt-3 block text-[15px]">x = <strong>{fmt(x)}</strong>
        <input type="range" min={0} max={xs.length - 1} value={i} onChange={(e) => setI(Number(e.target.value))} className="mt-1 block w-full" aria-label="Valor de x" />
      </label>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">f(x)</p><p className="text-2xl font-bold">{fmt(y)}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Distância até 2</p><p className="text-2xl font-bold">{fmt(y - 2)}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Como f(x) = 2 + 1/x, o pedaço 1/x vai a zero quando x cresce. Então f(x) se aproxima de 2 e nunca passa dele: o limite no infinito é 2.
      </p>
    </div>
  )
}
