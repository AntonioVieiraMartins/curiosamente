import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Qual embalagem compensa? Compare o preço de 1 kg, e não o preço da embalagem
const reais = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function PrecoPorUnidade() {
  const [pa, setPa] = useState(6)
  const [ga, setGa] = useState(500)
  const [pb, setPb] = useState(20)
  const [gb, setGb] = useState(2000)
  const ids = [useId(), useId(), useId(), useId()]
  const kgA = pa / (ga / 1000)
  const kgB = pb / (gb / 1000)
  const campo = (id: string, rot: string, v: number, set: (n: number) => void, min: number, max: number, step: number, un: string) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{v.toLocaleString('pt-BR')} {un}</b>
      <input id={id} type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto custa o quilo?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {campo(ids[0], 'Pacote A: preço', pa, setPa, 1, 40, 1, 'R$')}
        {campo(ids[1], 'Pacote A: peso', ga, setGa, 100, 5000, 100, 'g')}
        {campo(ids[2], 'Pacote B: preço', pb, setPb, 1, 40, 1, 'R$')}
        {campo(ids[3], 'Pacote B: peso', gb, setGb, 100, 5000, 100, 'g')}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A: {reais(pa)} ÷ {(ga / 1000).toLocaleString('pt-BR')} kg = <b>{reais(kgA)} por kg</b>.<br />
        B: {reais(pb)} ÷ {(gb / 1000).toLocaleString('pt-BR')} kg = <b>{reais(kgB)} por kg</b>.<br />
        {Math.abs(kgA - kgB) < 0.005 ? 'Empate: o quilo custa o mesmo.' : `Compensa mais o pacote ${kgA < kgB ? 'A' : 'B'}, que custa ${reais(Math.abs(kgA - kgB))} a menos por quilo.`}
      </p>
    </div>
  )
}
