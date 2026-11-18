import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes = ['unidades', 'dezenas', 'centenas', 'milhares']

// Conta armada de subtração com o "empréstimo" (troca de 1 grupo por 10 da casa menor)
export default function EmprestimoNaConta() {
  const [a, setA] = useState(502)
  const [b, setB] = useState(278)
  const [passo, setPasso] = useState(0)
  const ida = useId(), idb = useId()
  const dA = String(a).padStart(4, '0').split('').reverse().map(Number)
  const dB = String(b).padStart(4, '0').split('').reverse().map(Number)
  const linhas: { topo: number; dig: number; pegou: boolean }[] = []
  let devendo = 0
  for (let i = 0; i < 4; i++) {
    const topo = dA[i] - devendo
    const pegou = topo < dB[i]
    linhas.push({ topo: pegou ? topo + 10 : topo, dig: (pegou ? topo + 10 : topo) - dB[i], pegou })
    devendo = pegou ? 1 : 0
  }
  const atual = passo > 0 ? linhas[passo - 1] : null
  const maior = Math.max(a, b), menor = Math.min(a, b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Subtração com troca (empréstimo)</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Número maior: <b>{a}</b>
          <input id={ida} type="range" min={10} max={999} value={a} onChange={(e) => { const v = Number(e.target.value); setA(v); if (b > v) setB(v); setPasso(0) }} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Número que sai: <b>{Math.min(b, a)}</b>
          <input id={idb} type="range" min={0} max={a} value={Math.min(b, a)} onChange={(e) => { setB(Number(e.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">{maior} - {Math.min(b, a)} = {passo === 4 ? maior - Math.min(b, a) : '?'}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {atual
          ? atual.pegou
            ? `Casa das ${nomes[passo - 1]}: não dá para tirar ${dB[passo - 1]} de ${dA[passo - 1] - (passo > 1 && linhas[passo - 2].pegou ? 1 : 0)}. Troca 1 grupo da casa ao lado por 10 daqui: ficam ${atual.topo}. Agora ${atual.topo} - ${dB[passo - 1]} = ${atual.dig}.`
            : `Casa das ${nomes[passo - 1]}: ${atual.topo} - ${dB[passo - 1]} = ${atual.dig}. Não precisou trocar.`
          : 'Aperte “Próxima casa” para começar pelas unidades.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setPasso(Math.min(4, passo + 1))} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Próxima casa</button>
        <button type="button" onClick={() => setPasso(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
      <p className="mt-2 text-sm text-suave">Número que sai nunca passa do maior: a subtração fica nos números naturais.</p>
      <span className="sr-only">{menor}</span>
    </div>
  )
}
