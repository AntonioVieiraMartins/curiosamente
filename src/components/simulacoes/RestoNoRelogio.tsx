import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// O resto sempre fica entre 0 e divisor - 1: o resto "dá voltas" como um relógio
export default function RestoNoRelogio() {
  const [d, setD] = useState(5)
  const [n, setN] = useState(23)
  const idd = useId(), idn = useId()
  const resto = n % d
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O resto dá voltas</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idn} className="text-[15px]">Dividendo: <b>{n}</b>
          <input id={idn} type="range" min={0} max={60} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idd} className="text-[15px]">Divisor: <b>{d}</b>
          <input id={idd} type="range" min={2} max={9} value={d} onChange={(e) => setD(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="img" aria-label={`Resto ${resto} entre os possíveis 0 a ${d - 1}`}>
        {Array.from({ length: d }, (_, k) => (
          <span key={k} className={`grid size-10 place-items-center rounded-full border-2 font-bold ${k === resto ? 'border-coral bg-fundo' : 'border-borda text-suave'}`}>{k}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n} ÷ {d}: quociente {Math.floor(n / d)}, resto <b>{resto}</b>. Com divisor {d}, o resto só pode ser de 0 a {d - 1}. Se chegasse a {d}, caberia mais uma vez e o resto voltaria a 0.
      </p>
    </div>
  )
}
