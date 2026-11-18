import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Linhas x colunas: girar o retângulo mostra que a ordem não muda o resultado
export default function RetanguloDeBolinhas() {
  const [l, setL] = useState(3)
  const [c, setC] = useState(5)
  const idl = useId(), idc = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Linhas e colunas</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idl} className="text-[15px]">Linhas: <b>{l}</b>
          <input id={idl} type="range" min={1} max={9} value={l} onChange={(e) => setL(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idc} className="text-[15px]">Colunas: <b>{c}</b>
          <input id={idc} type="range" min={1} max={9} value={c} onChange={(e) => setC(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${c}, 1.5rem)` }} role="img" aria-label={`${l} linhas por ${c} colunas`}>
        {Array.from({ length: l * c }, (_, k) => <span key={k} className="size-6 rounded-full bg-azul" />)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {l} linhas de {c} = {l} x {c} = <b>{l * c}</b>. Girando o retângulo: {c} linhas de {l} = {c} x {l} = <b>{c * l}</b>. O número de bolinhas é o mesmo: a multiplicação é comutativa.
      </p>
      <button type="button" onClick={() => { setL(c); setC(l) }} className="mt-3 min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Girar o retângulo</button>
    </div>
  )
}
