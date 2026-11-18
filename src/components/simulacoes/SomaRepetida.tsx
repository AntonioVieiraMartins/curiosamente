import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Multiplicar é somar parcelas iguais: N grupos com M objetos em cada um
export default function SomaRepetida() {
  const [grupos, setGrupos] = useState(4)
  const [cada, setCada] = useState(3)
  const idg = useId(), idc = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Grupos iguais</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idg} className="text-[15px]">Quantos grupos: <b>{grupos}</b>
          <input id={idg} type="range" min={1} max={10} value={grupos} onChange={(e) => setGrupos(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idc} className="text-[15px]">Quantos em cada: <b>{cada}</b>
          <input id={idc} type="range" min={1} max={10} value={cada} onChange={(e) => setCada(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="img" aria-label={`${grupos} grupos de ${cada}`}>
        {Array.from({ length: grupos }, (_, g) => (
          <div key={g} className="flex flex-wrap gap-1 rounded-xl border-2 border-azul p-2" style={{ maxWidth: 120 }}>
            {Array.from({ length: cada }, (_, k) => <span key={k} className="size-3.5 rounded-full bg-amarelo" />)}
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Somando: {Array.from({ length: grupos }, () => cada).join(' + ')} = <b>{grupos * cada}</b>.<br />
        Multiplicando: {grupos} x {cada} = <b>{grupos * cada}</b>. É a mesma conta, só que mais curta.
      </p>
    </div>
  )
}
