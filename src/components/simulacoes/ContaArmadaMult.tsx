import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Conta armada: número de 3 algarismos vezes 1 algarismo, casa por casa, com o "vai"
export default function ContaArmadaMult() {
  const [a, setA] = useState(347)
  const [k, setK] = useState(6)
  const [passo, setPasso] = useState(0)
  const ida = useId(), idk = useId()
  const dig = String(a).padStart(3, '0').split('').reverse().map(Number)
  const nomes = ['unidades', 'dezenas', 'centenas']
  const linhas: { prod: number; dig: number; vai: number }[] = []
  let vai = 0
  for (let i = 0; i < 3; i++) {
    const prod = dig[i] * k + vai
    linhas.push({ prod, dig: prod % 10, vai: Math.floor(prod / 10) })
    vai = linhas[i].vai
  }
  const feito = passo === 3
  const atual = passo > 0 ? linhas[passo - 1] : null
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Multiplicação armada</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Número: <b>{a}</b>
          <input id={ida} type="range" min={10} max={999} value={a} onChange={(e) => { setA(Number(e.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
        <label htmlFor={idk} className="text-[15px]">Multiplicar por: <b>{k}</b>
          <input id={idk} type="range" min={2} max={9} value={k} onChange={(e) => { setK(Number(e.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">{a} x {k} = {feito ? a * k : '?'}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {atual
          ? `Casa das ${nomes[passo - 1]}: ${dig[passo - 1]} x ${k}${passo > 1 && linhas[passo - 2].vai ? ` + ${linhas[passo - 2].vai} (que veio)` : ''} = ${atual.prod}. ${atual.vai ? `Escreve ${atual.dig} e vai ${atual.vai}.` : `Escreve ${atual.dig}.`}`
          : 'Aperte “Próxima casa” para começar pelas unidades.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setPasso(Math.min(3, passo + 1))} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Próxima casa</button>
        <button type="button" onClick={() => setPasso(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
