import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const f1 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

// Quanto tempo leva para dobrar crescendo r% por período? Exato e pela "regra do 70".
export default function TempoParaDobrar() {
  const [r, setR] = useState(5)
  const id = useId()
  const exato = Math.log(2) / Math.log(1 + r / 100)
  const regra = 70 / r
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo para dobrar?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Crescimento por período: <b>{r}%</b>
        <input id={id} type="range" min={1} max={30} step={1} value={r} onChange={(e) => setR(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Cálculo exato</p><p className="text-2xl font-bold">{f1(exato)}</p><p className="text-xs text-suave">períodos</p></div>
        <div className="rounded-2xl border-2 border-verde p-3"><p className="text-[14px] font-semibold">Regra do 70</p><p className="text-2xl font-bold">{f1(regra)}</p><p className="text-xs text-suave">70 ÷ {r}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Crescendo {r}% por período, o valor dobra em cerca de <b>{f1(exato)}</b> períodos. A regra do 70 dá {f1(regra)}: um atalho de cabeça, bom para taxas pequenas e médias.
      </p>
    </div>
  )
}
