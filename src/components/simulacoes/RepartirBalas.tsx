import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Divisão como repartir: cada amigo recebe o mesmo tanto, e sobra o resto
export default function RepartirBalas() {
  const [total, setTotal] = useState(23)
  const [amigos, setAmigos] = useState(4)
  const idt = useId(), ida = useId()
  const cada = Math.floor(total / amigos)
  const resto = total % amigos
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Repartindo balas</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idt} className="text-[15px]">Balas: <b>{total}</b>
          <input id={idt} type="range" min={1} max={60} value={total} onChange={(e) => setTotal(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={ida} className="text-[15px]">Amigos: <b>{amigos}</b>
          <input id={ida} type="range" min={2} max={9} value={amigos} onChange={(e) => setAmigos(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3" role="img" aria-label={`${amigos} amigos recebem ${cada} balas cada, sobram ${resto}`}>
        {Array.from({ length: amigos }, (_, k) => (
          <div key={k} className="rounded-xl border-2 border-azul p-2">
            <p className="text-[12px] font-semibold text-suave">Amigo {k + 1}: {cada}</p>
            <div className="mt-1 flex flex-wrap gap-1">{Array.from({ length: cada }, (_, j) => <span key={j} className="size-3 rounded-full bg-amarelo" />)}</div>
          </div>
        ))}
        <div className="rounded-xl border-2 border-coral p-2">
          <p className="text-[12px] font-semibold text-suave">Sobra: {resto}</p>
          <div className="mt-1 flex flex-wrap gap-1">{Array.from({ length: resto }, (_, j) => <span key={j} className="size-3 rounded-full bg-coral" />)}</div>
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total} ÷ {amigos} = <b>{cada}</b> para cada, e sobram <b>{resto}</b>. Conferindo: {amigos} × {cada} + {resto} = {amigos * cada + resto}.
      </p>
    </div>
  )
}
