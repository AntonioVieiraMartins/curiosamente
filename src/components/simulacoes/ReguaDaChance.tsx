import { useState } from 'react'
import { cartao } from '../ui/estilos'

const EVENTOS = [
  { nome: 'Sair o número 7 num dado comum', num: 0, den: 1 },
  { nome: 'Sair o número 6 num dado', num: 1, den: 6 },
  { nome: 'Sair 1 ou 2 num dado', num: 1, den: 3 },
  { nome: 'Sair cara numa moeda', num: 1, den: 2 },
  { nome: 'Sair um número par num dado', num: 1, den: 2 },
  { nome: 'Tirar bolinha vermelha de um saco com 3 vermelhas e 1 azul', num: 3, den: 4 },
  { nome: 'Sair um número menor que 7 num dado', num: 1, den: 1 },
]

// A chance de qualquer evento é um número de 0 (impossível) a 1 (certo)
export default function ReguaDaChance() {
  const [i, setI] = useState(3)
  const e = EVENTOS[i]
  const p = e.num / e.den

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A régua da chance</p>
      <svg viewBox="0 0 220 60" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Chance de ${(p * 100).toFixed(0)} por cento na régua de 0 a 1`}>
        <line x1={10} y1={30} x2={210} y2={30} stroke="var(--color-borda)" strokeWidth="6" strokeLinecap="round" />
        <line x1={10} y1={30} x2={10 + p * 200} y2={30} stroke="var(--color-azul)" strokeWidth="6" strokeLinecap="round" />
        <circle cx={10 + p * 200} cy={30} r={7} fill="var(--color-coral)" />
        <text x={10} y={52} fontSize="8" textAnchor="middle" fill="var(--color-texto)">0 (impossível)</text>
        <text x={110} y={52} fontSize="8" textAnchor="middle" fill="var(--color-texto)">1/2</text>
        <text x={210} y={52} fontSize="8" textAnchor="end" fill="var(--color-texto)">1 (certo)</text>
      </svg>
      <div className="mt-3 flex flex-col gap-2" role="group" aria-label="Escolha um evento">
        {EVENTOS.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)} className={`min-h-11 rounded-2xl border-2 px-3 py-2 text-left text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Chance = {e.num}/{e.den} = {p.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} = <strong>{(p * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</strong>.
      </p>
    </div>
  )
}
