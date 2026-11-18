import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
// Modelo de exemplo: cada unidade custa R$ 10 e se vendem (60 - p) unidades por semana ao preço p.
const L = (p: number) => (p - 10) * (60 - p)

export default function LucroMaximo() {
  const [p, setP] = useState(20)
  const id = useId()
  const vendas = Math.max(0, 60 - p)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual preço dá mais lucro?</p>
      <p className="mt-2 text-[15px] text-suave">Cada unidade custa R$ 10 para fazer. Ao preço p, vendem-se 60 - p unidades por semana. (Modelo de exemplo.)</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Preço: <b>{reais(p)}</b>
        <input id={id} type="range" min={10} max={60} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao curvas={[{ f: L, cor: 'var(--color-azul)' }]} xmin={0} xmax={60} ymin={-200} ymax={700} pontos={[{ x: p, y: L(p), cor: 'var(--color-coral)' }, { x: 35, y: 625, cor: 'var(--color-verde)', rotulo: 'máximo' }]} rotuloAlt="Lucro em função do preço, em forma de parábola" />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Ao preço {reais(p)}: vendas = {vendas}, lucro = ({p} - 10) · {vendas} = <b>{reais(L(p))}</b>. L(p) = -p² + 70p - 600 é uma parábola de boca para baixo; o vértice está em p = 70/2 = <b>R$ 35</b>, com lucro máximo de <b>R$ 625</b>.
      </p>
    </div>
  )
}
