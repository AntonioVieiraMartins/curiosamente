import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { mostrar, resultado, type Tok } from './avaliador'

// 2 + 3 × 4 - 1 com os parênteses em lugares diferentes
const variantes: Tok[][] = [
  [2, '+', 3, '×', 4, '-', 1],
  ['(', 2, '+', 3, ')', '×', 4, '-', 1],
  [2, '+', 3, '×', '(', 4, '-', 1, ')'],
  ['(', 2, '+', 3, ')', '×', '(', 4, '-', 1, ')'],
]

export default function ParentesesMudam() {
  const [k, setK] = useState(0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os parênteses mudam o resultado</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {variantes.map((v, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-2xl border-2 px-3 py-2 font-mono text-[15px] font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{mostrar(v)}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-center text-[17px]">
        <span className="font-mono">{mostrar(variantes[k])}</span> = <b className="text-2xl">{resultado(variantes[k])}</b>
      </p>
      <p className="mt-2 text-sm text-suave">Os mesmos números e as mesmas operações, com quatro resultados diferentes: os parênteses mandam resolver aquela parte primeiro.</p>
    </div>
  )
}
