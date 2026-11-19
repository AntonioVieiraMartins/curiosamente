import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

// Quanto tempo leva para juntar uma meta guardando um valor fixo por mês (sem juros, para ver só a divisão).
export default function MetaDePoupanca() {
  const [meta, setMeta] = useState(1800)
  const [guarda, setGuarda] = useState(150)
  const [mes, setMes] = useState(6)
  const id = useId()
  const meses = Math.ceil(meta / guarda)
  const m = Math.min(mes, meses)
  const junto = Math.min(meta, guarda * m)
  const anos = Math.floor(meses / 12)
  const resto = meses % 12
  const tempo = anos > 0 ? `${anos} ${anos === 1 ? 'ano' : 'anos'}${resto ? ` e ${resto} ${resto === 1 ? 'mês' : 'meses'}` : ''}` : `${meses} ${meses === 1 ? 'mês' : 'meses'}`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo para chegar lá?</p>
      <label htmlFor={`${id}-a`} className="mt-3 block font-semibold">Meta: <span className="text-coral">{brl(meta)}</span></label>
      <input id={`${id}-a`} type="range" min={500} max={5000} step={100} value={meta} onChange={(e) => setMeta(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={`${id}-b`} className="block font-semibold">Guardo por mês: <span className="text-azul">{brl(guarda)}</span></label>
      <input id={`${id}-b`} type="range" min={50} max={500} step={10} value={guarda} onChange={(e) => setGuarda(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={`${id}-c`} className="block font-semibold">Mês: <span className="text-verde">{m}</span> de {meses}</label>
      <input id={`${id}-c`} type="range" min={0} max={meses} step={1} value={m} onChange={(e) => setMes(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <div className="mt-2 h-5 w-full overflow-hidden rounded-full bg-fundo" aria-hidden="true">
        <div className="h-full bg-verde" style={{ width: `${(junto / meta) * 100}%` }} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {brl(meta)} ÷ {brl(guarda)} = {(meta / guarda).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}, então são <strong>{tempo}</strong> ({meses} depósitos).
        No mês {m} você já juntou <strong>{brl(junto)}</strong>.
      </p>
    </div>
  )
}
