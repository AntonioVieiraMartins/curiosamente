import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Soma e subtração são "inversas": de um fato nascem quatro
export default function FamiliaDeFatos() {
  const [a, setA] = useState(8)
  const [b, setB] = useState(5)
  const ida = useId(), idb = useId()
  const c = a + b
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A família de fatos</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Parte 1: <b>{a}</b>
          <input id={ida} type="range" min={1} max={50} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Parte 2: <b>{b}</b>
          <input id={idb} type="range" min={1} max={50} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 flex h-8 overflow-hidden rounded-full" role="img" aria-label={`Barra com ${a} e ${b}, total ${c}`}>
        <span className="grid place-items-center bg-amarelo text-sm font-semibold" style={{ width: `${(a / c) * 100}%` }}>{a}</span>
        <span className="grid place-items-center bg-azul text-sm font-semibold text-white" style={{ width: `${(b / c) * 100}%` }}>{b}</span>
      </div>
      <p className="mt-1 text-center text-sm text-suave">Todo (barra inteira): {c}</p>
      <ul aria-live="polite" className="mt-3 grid gap-1 rounded-2xl bg-fundo p-4 text-center font-mono text-lg sm:grid-cols-2">
        <li>{a} + {b} = {c}</li>
        <li>{b} + {a} = {c}</li>
        <li>{c} - {b} = {a}</li>
        <li>{c} - {a} = {b}</li>
      </ul>
    </div>
  )
}
