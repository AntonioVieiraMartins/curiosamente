import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Massa molar (g/mol) de substâncias comuns: a mesma "dúzia" de partículas pesa coisas diferentes
const subs = [
  { nome: 'Carbono (C)', m: 12 },
  { nome: 'Água (H₂O)', m: 18 },
  { nome: 'Gás carbônico (CO₂)', m: 44 },
  { nome: 'Ferro (Fe)', m: 56 },
  { nome: 'Sal (NaCl)', m: 58.5 },
  { nome: 'Glicose (C₆H₁₂O₆)', m: 180 },
]

export default function BalancaDoMol() {
  const [k, setK] = useState(1)
  const [mol, setMol] = useState(2)
  const s = subs[k]
  const massa = s.m * mol
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A balança do mol</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Substância">
        {subs.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3"><Deslizante rotulo="Quantidade (mol)" valor={mol} min={0.5} max={5} passo={0.5} aoMudar={setMol} /></div>
      <svg viewBox="0 0 220 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${mol} mol de ${s.nome} pesam ${massa} gramas`}>
        <line x1={110} y1={20} x2={110} y2={70} stroke="var(--color-texto)" strokeWidth="3" />
        <line x1={50} y1={34} x2={170} y2={34} stroke="var(--color-texto)" strokeWidth="3" />
        <rect x={30} y={34} width={40} height={Math.min(36, 8 + mol * 5)} fill="var(--color-azul)" fillOpacity="0.5" stroke="var(--color-azul)" />
        <rect x={150} y={34} width={40} height={Math.min(36, 8 + mol * 5)} fill="var(--color-coral)" fillOpacity="0.5" stroke="var(--color-coral)" />
        <text x={110} y={84} textAnchor="middle" fontSize="11" fill="var(--color-texto)">{mol} mol = {massa.toLocaleString('pt-BR')} g</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>1 mol de {s.nome} pesa {s.m.toLocaleString('pt-BR')} g.</strong> Em {mol} mol há {mol} × 6,02 × 10²³ partículas e a massa é {mol} × {s.m.toLocaleString('pt-BR')} = {massa.toLocaleString('pt-BR')} g. O número de partículas é o mesmo para qualquer substância; só o peso muda.
      </p>
    </div>
  )
}
