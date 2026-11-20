import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Distância total para parar = reação (MRU) + freada (MUV). Chão seco ou molhado muda a desaceleração.
export default function DistanciaDeFreada() {
  const [kmh, setKmh] = useState(60)
  const [molhado, setMolhado] = useState(false)
  const [reacao, setReacao] = useState(1)
  const v = kmh / 3.6
  const a = molhado ? 4 : 7 // valores didáticos aproximados de desaceleração
  const dReacao = v * reacao
  const dFreada = (v * v) / (2 * a)
  const total = dReacao + dFreada
  const ESC = 150
  const x = (m: number) => 10 + (Math.min(m, ESC) / ESC) * 380

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Distância para parar</p>
      <svg viewBox="0 0 400 60" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Distância total para parar: ${total.toFixed(0)} metros`}>
        <rect x={x(0)} y={16} width={x(dReacao) - x(0)} height={22} fill="var(--color-amarelo)" fillOpacity="0.7" />
        <rect x={x(dReacao)} y={16} width={Math.max(0, x(total) - x(dReacao))} height={22} fill="var(--color-coral)" fillOpacity="0.7" />
        <text x={10} y={54} fontSize="9" fill="var(--color-suave)">0 m</text>
        <text x={390} y={54} fontSize="9" textAnchor="end" fill="var(--color-suave)">{ESC} m</text>
        <text x={x(total) - 2} y={12} fontSize="9" textAnchor="end" fill="var(--color-texto)">{total.toFixed(0)} m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Velocidade: {kmh} km/h<input type="range" min={20} max={120} step={10} value={kmh} onChange={(e) => setKmh(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Reação: {reacao} s<input type="range" min={0.5} max={2} step={0.5} value={reacao} onChange={(e) => setReacao(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="flex min-h-11 items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={molhado} onChange={(e) => setMolhado(e.target.checked)} className="h-5 w-5" /> Pista molhada</label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Velocidade: {v.toFixed(1).replace('.0', '')} m/s. <strong style={{ color: 'var(--color-texto)' }}>Reação</strong> (amarelo): {v.toFixed(1).replace('.0', '')} × {reacao} = {dReacao.toFixed(1).replace('.0', '')} m. <strong>Freada</strong> (vermelho): v² ÷ (2a) = {dFreada.toFixed(1).replace('.0', '')} m, com a = {a} m/s². Total: <strong>{total.toFixed(0)} m</strong>. Dobrar a velocidade quadruplica a freada.
      </p>
    </div>
  )
}
