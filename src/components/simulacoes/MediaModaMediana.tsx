import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Resumir dados com um número: média, mediana e moda. Um valor muito alto puxa a média, mas quase não mexe na mediana
const base = [1200, 1300, 1300, 1500, 1800]
const reais = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export default function MediaModaMediana() {
  const [chefe, setChefe] = useState(1800)
  const id = useId()
  const dados = [...base.slice(0, 4), chefe].sort((a, b) => a - b)
  const media = dados.reduce((a, b) => a + b, 0) / dados.length
  const mediana = dados[Math.floor(dados.length / 2)]
  const cont: Record<number, number> = {}
  dados.forEach((d) => { cont[d] = (cont[d] ?? 0) + 1 })
  const maxC = Math.max(...Object.values(cont))
  const moda = maxC > 1 ? Object.keys(cont).filter((k) => cont[Number(k)] === maxC).map((k) => reais(Number(k))).join(' e ') : 'nenhuma (ninguém se repete)'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A média engana?</p>
      <p className="mt-2 text-[15px]">Salários de 5 pessoas: {reais(1200)}, {reais(1300)}, {reais(1300)}, {reais(1500)} e o do chefe.</p>
      <label htmlFor={id} className="mt-2 block text-[15px]">Salário do chefe: <b>{reais(chefe)}</b>
        <input id={id} type="range" min={1500} max={20000} step={100} value={chefe} onChange={(e) => setChefe(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[['Média', reais(media)], ['Mediana', reais(mediana)], ['Moda', moda]].map(([r, v]) => (
          <div key={r} className="rounded-2xl border border-borda p-2">
            <div className="text-xs font-semibold text-suave">{r}</div>
            <div className="text-[15px] font-bold">{v}</div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <b>Média</b>: soma ÷ quantidade = {reais(dados.reduce((a, b) => a + b, 0))} ÷ 5 = {reais(media)}. <b>Mediana</b>: o valor do meio, com os dados em ordem. <b>Moda</b>: o que mais se repete.
        {chefe > 5000 ? ' Repare: o salário alto do chefe puxou a média para cima, mas a mediana quase não mexeu. Por isso, a média sozinha pode enganar.' : ''}
      </p>
    </div>
  )
}
