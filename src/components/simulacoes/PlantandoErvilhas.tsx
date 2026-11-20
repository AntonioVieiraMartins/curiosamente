import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Cada semente de Aa x Aa tem 1/4 de chance de ser rugosa: o sorteio acontece no clique, nunca na renderização
export default function PlantandoErvilhas() {
  const [lisas, setLisas] = useState(0)
  const [rugosas, setRugosas] = useState(0)
  function plantar(qtd: number) {
    let l = 0
    let r = 0
    for (let i = 0; i < qtd; i++) {
      const a = Math.random() < 0.5
      const b = Math.random() < 0.5
      if (!a && !b) r++
      else l++
    }
    setLisas((x) => x + l)
    setRugosas((x) => x + r)
  }
  const total = lisas + rugosas
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Plantando ervilhas (Aa x Aa)</p>
      <svg viewBox="0 0 220 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${lisas} lisas e ${rugosas} rugosas`}>
        <rect x="30" y={80 - (total ? (lisas / total) * 60 : 0)} width="55" height={total ? (lisas / total) * 60 : 0} rx="4" fill="var(--color-azul)" fillOpacity="0.8" />
        <rect x="135" y={80 - (total ? (rugosas / total) * 60 : 0)} width="55" height={total ? (rugosas / total) * 60 : 0} rx="4" fill="var(--color-coral)" fillOpacity="0.8" />
        <line x1="10" y1="80" x2="210" y2="80" stroke="var(--color-borda)" />
        <text x="57" y="89" textAnchor="middle" fontSize="8" fill="var(--color-texto)">lisas</text>
        <text x="162" y="89" textAnchor="middle" fontSize="8" fill="var(--color-texto)">rugosas</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => plantar(10)} className="min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">Plantar 10</button>
        <button type="button" onClick={() => plantar(1000)} className="min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">Plantar 1000</button>
        <button type="button" onClick={() => { setLisas(0); setRugosas(0) }} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Limpar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0
          ? 'Cada semente tem 1 chance em 4 de ser rugosa. Plante e veja a proporção aparecer.'
          : `${lisas} lisas e ${rugosas} rugosas. ${rugosas > 0 ? `Proporção: ${(lisas / rugosas).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} para 1.` : 'Ainda não saiu nenhuma rugosa.'} ${total < 100 ? 'Com poucas sementes a proporção oscila bastante. Plante mais.' : 'Com muitas sementes, chega perto de 3 para 1. Mendel contou 5.474 lisas e 1.850 rugosas, 2,96 para 1.'}`}
      </p>
    </div>
  )
}
