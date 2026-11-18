import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes = ['unidades', 'dezenas', 'centenas', 'milhares']

// Conta armada de soma, coluna por coluna, mostrando o "vai um"
export default function VaiUm() {
  const [a, setA] = useState(478)
  const [b, setB] = useState(256)
  const [passo, setPasso] = useState(0)
  const ida = useId(), idb = useId()
  const da = String(a).padStart(4, '0').split('').reverse().map(Number)
  const db = String(b).padStart(4, '0').split('').reverse().map(Number)
  const linhas: { soma: number; dig: number; vai: number }[] = []
  let vai = 0
  for (let i = 0; i < 4; i++) {
    const soma = da[i] + db[i] + vai
    linhas.push({ soma, dig: soma % 10, vai: Math.floor(soma / 10) })
    vai = linhas[i].vai
  }
  const feitas = linhas.slice(0, passo)
  const resultado = feitas.map((l) => l.dig).reverse().join('').padStart(passo, ' ')
  const atual = passo > 0 ? linhas[passo - 1] : null
  const parcial = passo === 4 ? String(a + b) : resultado.trim()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O vai um, coluna por coluna</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Primeiro número: <b>{a}</b>
          <input id={ida} type="range" min={0} max={999} value={a} onChange={(e) => { setA(Number(e.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Segundo número: <b>{b}</b>
          <input id={idb} type="range" min={0} max={999} value={b} onChange={(e) => { setB(Number(e.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">{a} + {b} = {passo === 4 ? a + b : '?'}</p>
      <p className="mt-1 text-center font-mono text-lg text-suave">Resultado até agora: {parcial || '—'}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {atual
          ? `Casa das ${nomes[passo - 1]}: ${da[passo - 1]} + ${db[passo - 1]}${passo > 1 && linhas[passo - 2].vai ? ' + 1 (que veio da casa ao lado)' : ''} = ${atual.soma}. ${atual.vai ? `Escreve ${atual.dig} e vai 1 para a próxima casa.` : `Escreve ${atual.dig}. Não vai nada.`}`
          : 'Aperte “Próxima casa” para começar pelas unidades.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setPasso(Math.min(4, passo + 1))} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Próxima casa</button>
        <button type="button" onClick={() => setPasso(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
