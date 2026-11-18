import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Propriedade distributiva: um retângulo grande vira dois retângulos menores
export default function RetanguloEmPartes() {
  const [a, setA] = useState(7)
  const [b, setB] = useState(23)
  const ida = useId(), idb = useId()
  const dez = Math.floor(b / 10) * 10
  const uni = b - dez
  const largura = (x: number) => `${(x / b) * 100}%`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Multiplicar em partes</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Primeiro fator: <b>{a}</b>
          <input id={ida} type="range" min={2} max={9} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Segundo fator: <b>{b}</b>
          <input id={idb} type="range" min={11} max={99} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 flex h-20 overflow-hidden rounded-xl" role="img" aria-label={`Retângulo de ${a} por ${b} dividido em ${a} por ${dez} e ${a} por ${uni}`}>
        <div className="grid place-items-center bg-azul text-sm font-semibold text-white" style={{ width: largura(dez) }}>{a} x {dez} = {a * dez}</div>
        {uni > 0 && <div className="grid place-items-center bg-amarelo text-sm font-semibold" style={{ width: largura(uni) }}>{a} x {uni} = {a * uni}</div>}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {a} x {b} = {a} x ({dez} + {uni}) = {a * dez} + {a * uni} = <b>{a * b}</b>.
      </p>
    </div>
  )
}
