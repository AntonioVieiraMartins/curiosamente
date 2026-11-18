import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Duração = fim - início, contando para a frente até a hora cheia (como no troco)
const fmt = (min: number) => `${Math.floor(min / 60)}h${String(min % 60).padStart(2, '0')}`

export default function DuracaoNaReta() {
  const [ini, setIni] = useState(14 * 60 + 50)
  const [dur, setDur] = useState(150)
  const idi = useId(), idd = useId()
  const fim = ini + dur
  const proxCheia = Math.min(fim, Math.ceil(ini / 60) * 60)
  const passo1 = proxCheia - ini
  const horas = Math.floor((fim - proxCheia) / 60)
  const resto = (fim - proxCheia) % 60
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo passou?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idi} className="text-[15px]">Começou às <b>{fmt(ini)}</b>
          <input id={idi} type="range" min={6 * 60} max={20 * 60} step={5} value={ini} onChange={(e) => setIni(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idd} className="text-[15px]">Durou <b>{Math.floor(dur / 60)}h{String(dur % 60).padStart(2, '0')}min</b>
          <input id={idd} type="range" min={10} max={300} step={5} value={dur} onChange={(e) => setDur(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Terminou às <b>{fmt(fim)}</b>.<br />
        Contando para a frente: de {fmt(ini)} até {fmt(proxCheia)} são {passo1} min
        {fim > proxCheia ? `; de ${fmt(proxCheia)} até ${fmt(fim)} são ${horas > 0 ? `${horas} h e ` : ''}${resto} min.` : '.'}<br />
        Total: {passo1} + {fim - proxCheia} = <b>{dur} min</b> = {Math.floor(dur / 60)} h e {dur % 60} min.
      </p>
    </div>
  )
}
