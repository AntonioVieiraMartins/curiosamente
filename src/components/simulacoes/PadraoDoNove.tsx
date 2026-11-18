import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Truques da tabuada do 9 e do 5
export default function PadraoDoNove() {
  const [n, setN] = useState(7)
  const nove = 9 * n
  const soma = String(nove).split('').reduce((s, d) => s + Number(d), 0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os padrões do 9</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha n">
        {Array.from({ length: 10 }, (_, k) => k + 1).map((k) => (
          <button key={k} type="button" aria-pressed={n === k} onClick={() => setN(k)} className={`min-h-11 min-w-11 rounded-full border-2 font-semibold ${n === k ? 'border-azul bg-fundo' : 'border-borda'}`}>{k}</button>
        ))}
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <p>9 x {n} = <b>{nove}</b></p>
        <p className="mt-1">Truque 1: 9 x {n} é o mesmo que 10 x {n} - {n} = {10 * n} - {n} = {nove}.</p>
        <p className="mt-1">Truque 2: os algarismos de {nove} somam {String(nove).split('').join(' + ')} = <b>{soma}</b>.</p>
        <p className="mt-1">Na tabuada do 9, a soma dos algarismos dá 9 (e para 10 x 9 = 90, 9 + 0 = 9).</p>
      </div>
    </div>
  )
}
