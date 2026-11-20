import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Gráfico s × t do MUV é uma parábola; a inclinação em cada ponto é a velocidade naquele instante
export default function ParabolaDaPosicao() {
  const [v0, setV0] = useState(0)
  const [a, setA] = useState(2)
  const [t, setT] = useState(4)
  const T = 10
  const pos = (tt: number) => v0 * tt + (a * tt * tt) / 2
  const valores = Array.from({ length: 21 }, (_, i) => pos((i / 20) * T))
  const smin = Math.min(0, ...valores)
  const smax = Math.max(1, ...valores)
  const gx = (tt: number) => 34 + (tt / T) * 170
  const gy = (ss: number) => 104 - ((ss - smin) / (smax - smin)) * 90
  const pts = valores.map((ss, i) => `${gx((i / 20) * T)},${gy(ss)}`).join(' ')
  const v = v0 + a * t
  // Reta tangente: mesma posição e inclinação (velocidade) do ponto escolhido
  const tg = (tt: number) => pos(t) + v * (tt - t)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Gráfico posição × tempo no MUV</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Parábola da posição em função do tempo">
        <line x1={34} y1={104} x2={206} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={34} y1={10} x2={34} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={gx(Math.max(0, t - 2))} y1={Math.max(2, Math.min(112, gy(tg(Math.max(0, t - 2)))))} x2={gx(Math.min(T, t + 2))} y2={Math.max(2, Math.min(112, gy(tg(Math.min(T, t + 2)))))} stroke="var(--color-verde)" strokeWidth="2" />
        <circle cx={gx(t)} cy={gy(pos(t))} r={4.5} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={206} y={116} fontSize="8" textAnchor="end" fill="var(--color-suave)">tempo (s) →</text>
        <text x={38} y={18} fontSize="8" fill="var(--color-suave)">posição (m)</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">v₀: {v0} m/s<input type="range" min={0} max={10} step={1} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">a: {a} m/s²<input type="range" min={0} max={4} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">t: {t} s<input type="range" min={0} max={T} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em t = {t} s: posição = {pos(t).toFixed(1).replace('.0', '')} m e velocidade = v₀ + a·t = <strong>{v} m/s</strong> (a inclinação da reta verde). Quanto mais à direita, mais inclinada a curva: o carro está cada vez mais rápido.
      </p>
    </div>
  )
}
