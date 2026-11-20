import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Densidades aproximadas, a cerca de 20 °C (g/cm³)
const MATERIAIS = [
  { nome: 'Óleo', d: 0.91, cor: '#d9a520' },
  { nome: 'Água', d: 1, cor: '#4a90d9' },
  { nome: 'Alumínio', d: 2.7, cor: '#9aa3ab' },
  { nome: 'Ferro', d: 7.87, cor: '#6b6f75' },
  { nome: 'Ouro', d: 19.3, cor: '#e0b320' },
]
const br = (n: number, c = 1) => n.toLocaleString('pt-BR', { maximumFractionDigits: c })

// Massa = densidade × volume: o mesmo material, tamanhos diferentes, a mesma densidade
export default function BalancaEProveta() {
  const [i, setI] = useState(1)
  const [v, setV] = useState(50)
  const m = MATERIAIS[i]
  const massa = m.d * v

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Balança e proveta</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Material">
        {MATERIAIS.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${v} cm³ de ${m.nome} pesam ${br(massa)} g`}>
        <rect x={20} y={10} width={50} height={85} rx={4} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={22} y={95 - (v / 200) * 83} width={46} height={(v / 200) * 83} fill={m.cor} fillOpacity="0.8" />
        <text x={45} y={105} textAnchor="middle" fontSize="8" fill="var(--color-texto)">{v} cm³</text>
        <rect x={100} y={70} width={80} height={14} rx={3} fill="var(--color-texto)" fillOpacity="0.7" />
        <rect x={110} y={58} width={60} height={12} rx={3} fill={m.cor} />
        <text x={140} y={46} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-texto)">{br(massa)} g</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Volume (cm³)" valor={v} min={10} max={200} passo={10} aoMudar={setV} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {m.nome}: {v} cm³ pesam {br(massa)} g. Densidade = {br(massa)} ÷ {v} = <strong>{br(m.d, 2)} g/cm³</strong>. Mude o volume: a densidade não muda.
      </p>
    </div>
  )
}
