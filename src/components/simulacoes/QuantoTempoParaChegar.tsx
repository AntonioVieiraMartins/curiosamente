import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

// Quanto tempo leva para R$ 1.000 chegarem a uma meta, crescendo r% por período? t = log(meta/1000)/log(1+r)
export default function QuantoTempoParaChegar() {
  const [meta, setMeta] = useState(2000)
  const [r, setR] = useState(10)
  const idm = useId(), idr = useId()
  const t = Math.log(meta / 1000) / Math.log(1 + r / 100)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo para chegar lá?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idm} className="text-[15px]">Meta: <b>{reais(meta)}</b>
          <input id={idm} type="range" min={1100} max={10000} step={100} value={meta} onChange={(e) => setMeta(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idr} className="text-[15px]">Taxa por período: <b>{r}%</b>
          <input id={idr} type="range" min={1} max={30} step={1} value={r} onChange={(e) => setR(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Começando com R$ 1.000 e crescendo {r}% por período, queremos {reais(meta)}. Resolva 1.000 · {(1 + r / 100).toLocaleString('pt-BR')}^t = {meta.toLocaleString('pt-BR')}. O expoente é um logaritmo: t = log({(meta / 1000).toLocaleString('pt-BR')}) / log({(1 + r / 100).toLocaleString('pt-BR')}) ≈ <b>{t.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} períodos</b>. (Taxas e valores de exemplo.)
      </p>
    </div>
  )
}
