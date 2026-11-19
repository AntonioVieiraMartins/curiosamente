import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const CAPITAL = 1000

// Mesmo valor e mesma taxa: juros simples crescem em linha reta, os compostos incluem juros sobre os juros.
export default function SimplesOuComposto() {
  const [taxa, setTaxa] = useState(2)
  const [meses, setMeses] = useState(12)
  const id = useId()
  const i = taxa / 100
  const simples = CAPITAL * (1 + i * meses)
  const composto = CAPITAL * Math.pow(1 + i, meses)
  const dif = composto - simples
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Juros simples × juros compostos · {brl(CAPITAL)}</p>
      <label htmlFor={`${id}-a`} className="mt-3 block font-semibold">Taxa: <span className="text-coral">{taxa}% ao mês</span></label>
      <input id={`${id}-a`} type="range" min={1} max={10} step={1} value={taxa} onChange={(e) => setTaxa(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={`${id}-b`} className="block font-semibold">Tempo: <span className="text-azul">{meses} {meses === 1 ? 'mês' : 'meses'}</span></label>
      <input id={`${id}-b`} type="range" min={1} max={36} step={1} value={meses} onChange={(e) => setMeses(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <div className="mt-3 space-y-2" aria-hidden="true">
        <div className="h-7 rounded-full bg-azul" style={{ width: `${(simples / composto) * 100}%` }} />
        <div className="h-7 rounded-full bg-coral" style={{ width: '100%' }} />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-2"><div className="text-xs font-semibold text-suave">Simples (azul)</div><div className="text-lg font-bold">{brl(simples)}</div></div>
        <div className="rounded-2xl border border-borda p-2"><div className="text-xs font-semibold text-suave">Compostos (coral)</div><div className="text-lg font-bold">{brl(composto)}</div></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {meses} {meses === 1 ? 'mês' : 'meses'}, os compostos rendem <strong>{brl(dif)}</strong> a mais. Quanto maior o tempo e a taxa, maior a diferença. Isso vale para quem guarda, e também para quem deve.
      </p>
    </div>
  )
}
