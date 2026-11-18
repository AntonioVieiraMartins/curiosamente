import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Na função afim, cada passo de 1 em x muda y sempre pelo mesmo tanto: a
export default function RitmoConstante() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(2)
  const ida = useId(), idb = useId()
  const xs = [0, 1, 2, 3, 4, 5]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O ritmo é sempre o mesmo</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">a: <b>{f2(a)}</b>
          <input id={ida} type="range" min={-5} max={5} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">b: <b>{f2(b)}</b>
          <input id={idb} type="range" min={-5} max={5} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-center text-[14px]">
          <tbody>
            <tr><th scope="row" className="pr-2 text-left">x</th>{xs.map((x) => <td key={x} className="px-1">{x}</td>)}</tr>
            <tr><th scope="row" className="pr-2 text-left">y</th>{xs.map((x) => <td key={x} className="px-1 font-bold text-azul-texto">{f2(a * x + b)}</td>)}</tr>
            <tr><th scope="row" className="pr-2 text-left">muda</th><td />{xs.slice(1).map((x) => <td key={x} className="px-1 text-coral">{a >= 0 ? '+' : ''}{f2(a)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A cada 1 passo em x, y muda <b>{a >= 0 ? '+' : ''}{f2(a)}</b>, sempre. Esse número é o <b>a</b>: a taxa de variação. O <b>b</b> ({f2(b)}) é o valor inicial, quando x = 0.
      </p>
    </div>
  )
}
