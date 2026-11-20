import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const subs = [
  { nome: 'Água (18 g/mol)', m: 18 },
  { nome: 'Sal (58,5 g/mol)', m: 58.5 },
  { nome: 'Glicose (180 g/mol)', m: 180 },
]

// Gramas → mol → número de partículas, os dois passos do atalho
export default function MassaParaMol() {
  const [k, setK] = useState(0)
  const [g, setG] = useState(36)
  const s = subs[k]
  const mol = g / s.m
  const part = mol * 6.022
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Da balança ao número de moléculas</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Substância">
        {subs.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3"><Deslizante rotulo="Massa na balança (g)" valor={g} min={9} max={360} passo={9} aoMudar={setG} /></div>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>Passo 1:</strong> mol = massa ÷ massa molar = {g} ÷ {s.m.toLocaleString('pt-BR')} = <strong>{mol.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} mol</strong>.</p>
        <p className="rounded-2xl bg-fundo p-3"><strong>Passo 2:</strong> partículas = mol × 6,02 × 10²³ = <strong>{part.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} × 10²³</strong>.</p>
      </div>
    </div>
  )
}
