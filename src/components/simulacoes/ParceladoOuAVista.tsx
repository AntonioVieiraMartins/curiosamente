import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Parcelas iguais: o total pago é parcela × número de parcelas. Comparar com o preço à vista
const reais = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ParceladoOuAVista() {
  const [vista, setVista] = useState(600)
  const [n, setN] = useState(6)
  const [parcela, setParcela] = useState(110)
  const idv = useId(), idn = useId(), idp = useId()
  const total = n * parcela
  const dif = total - vista
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">À vista ou parcelado?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <label htmlFor={idv} className="text-[15px]">À vista: <b>{reais(vista)}</b>
          <input id={idv} type="range" min={100} max={2000} step={50} value={vista} onChange={(e) => setVista(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idn} className="text-[15px]">Parcelas: <b>{n}</b>
          <input id={idn} type="range" min={2} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idp} className="text-[15px]">Valor da parcela: <b>{reais(parcela)}</b>
          <input id={idp} type="range" min={10} max={500} step={5} value={parcela} onChange={(e) => setParcela(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n} × {reais(parcela)} = <b>{reais(total)}</b> no total.<br />
        {dif > 0 ? `Parcelado sai ${reais(dif)} mais caro (${((dif / vista) * 100).toFixed(1).replace('.', ',')}% a mais que à vista).` : dif < 0 ? `Parcelado sai ${reais(-dif)} mais barato que à vista.` : 'O total é igual ao preço à vista.'}
      </p>
    </div>
  )
}
