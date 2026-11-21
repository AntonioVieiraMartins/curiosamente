import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Mariposas claras e escuras: aves comem mais as que aparecem no tronco. Conta esperada, sem sorteio.
const sobrevive = { combina: 0.9, destoa: 0.6 }

export default function MariposasDaSelecao() {
  const [fundo, setFundo] = useState<'claro' | 'escuro'>('claro')
  const [hist, setHist] = useState<number[]>([0.1])
  const p = hist[hist.length - 1]
  const proxima = (escuras: number, f: 'claro' | 'escuro') => {
    const wEscura = f === 'escuro' ? sobrevive.combina : sobrevive.destoa
    const wClara = f === 'claro' ? sobrevive.combina : sobrevive.destoa
    return (escuras * wEscura) / (escuras * wEscura + (1 - escuras) * wClara)
  }
  const passa = (n: number) => {
    const nova = [...hist]
    for (let k = 0; k < n; k++) nova.push(proxima(nova[nova.length - 1], fundo))
    setHist(nova.slice(-36))
  }
  const L = 200 / Math.max(hist.length, 12)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mariposas e aves (modelo simples)</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`${Math.round(p * 100)}% das mariposas são escuras`}>
        <rect x="10" y="8" width="200" height="100" fill={fundo === 'claro' ? '#e9e4d8' : '#6b665c'} fillOpacity="0.35" />
        {hist.map((v, k) => (
          <g key={k}>
            <rect x={10 + k * L} y={8} width={L - 1} height={100 * v} fill="var(--color-texto)" />
            <rect x={10 + k * L} y={8 + 100 * v} width={L - 1} height={100 * (1 - v)} fill="var(--color-amarelo)" />
          </g>
        ))}
        <text x="12" y="118" fontSize="7" fill="var(--color-suave)">gerações →  (escuras em preto, claras em amarelo)</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Cor do tronco">
        {(['claro', 'escuro'] as const).map((f) => (
          <button key={f} type="button" onClick={() => setFundo(f)} aria-pressed={fundo === f} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${fundo === f ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>Tronco {f}</button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" onClick={() => passa(1)} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">1 geração</button>
        <button type="button" onClick={() => passa(10)} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">10 gerações</button>
        <button type="button" onClick={() => setHist([0.1])} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Recomeçar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Geração {hist.length - 1}: <strong>{Math.round(p * 100)}%</strong> das mariposas são escuras. As que combinam com o tronco sobrevivem 90% das vezes; as que destoam, 60%.
      </p>
    </div>
  )
}
