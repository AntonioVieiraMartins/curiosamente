import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const gases = [
  { nome: 'Hidrogênio (H₂)', m: 2 },
  { nome: 'Oxigênio (O₂)', m: 32 },
  { nome: 'Gás carbônico (CO₂)', m: 44 },
]

// Volume molar nas CNTP (0 °C e 1 atm): 22,4 L por mol, qualquer que seja o gás
export default function VolumeDoMolDeGas() {
  const [k, setK] = useState(1)
  const [mol, setMol] = useState(1)
  const g = gases[k]
  const vol = mol * 22.4
  const r = 14 + Math.cbrt(mol) * 18
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O balão de 1 mol</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Gás">
        {gases.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3"><Deslizante rotulo="Quantidade (mol)" valor={mol} min={0.5} max={4} passo={0.5} aoMudar={setMol} /></div>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Balão com ${mol} mol de gás, ocupando ${vol} litros`}>
        <circle cx={110} cy={52} r={r} fill="var(--color-azul)" fillOpacity="0.3" stroke="var(--color-azul)" strokeWidth="2" />
        <line x1={110} y1={52 + r} x2={110} y2={100} stroke="var(--color-texto)" />
        <text x={110} y={56} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-texto)">{vol.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} L</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{mol} mol de {g.nome} ocupa {vol.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} L</strong> (a 0 °C e 1 atm) e pesa {(mol * g.m).toLocaleString('pt-BR')} g. Troque de gás: o volume não muda, só a massa. É a ideia de Avogadro: volumes iguais de gases, na mesma temperatura e pressão, têm o mesmo número de moléculas.
      </p>
    </div>
  )
}
