import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Gráfico v × t do MUV: a área colorida debaixo da reta é o deslocamento
export default function AreaDoGrafico() {
  const [v0, setV0] = useState(4)
  const [a, setA] = useState(2)
  const [t, setT] = useState(5)
  const v = v0 + a * t
  const area = ((v0 + v) / 2) * t
  const VMAX = 40
  const gx = (tt: number) => 34 + (tt / 10) * 170
  const gy = (vv: number) => 104 - (Math.max(0, Math.min(VMAX, vv)) / VMAX) * 92
  const pontos = `${gx(0)},${gy(0)} ${gx(0)},${gy(v0)} ${gx(t)},${gy(v)} ${gx(t)},${gy(0)}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Área do gráfico v × t = deslocamento</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gráfico velocidade por tempo com a área pintada">
        <polygon points={pontos} fill="var(--color-azul)" fillOpacity="0.25" />
        <line x1={34} y1={104} x2={206} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={34} y1={10} x2={34} y2={104} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={gx(0)} y1={gy(v0)} x2={gx(10)} y2={gy(v0 + a * 10)} stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={gx(t)} y1={gy(0)} x2={gx(t)} y2={gy(v)} stroke="var(--color-coral)" strokeDasharray="3 3" />
        <circle cx={gx(t)} cy={gy(v)} r={4} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={206} y={116} fontSize="8" textAnchor="end" fill="var(--color-suave)">tempo (s) →</text>
        <text x={38} y={18} fontSize="8" fill="var(--color-suave)">v (m/s)</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">v₀: {v0} m/s<input type="range" min={0} max={20} step={2} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">a: {a} m/s²<input type="range" min={0} max={3} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">t: {t} s<input type="range" min={1} max={10} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        No fim, v = {v0} + {a} × {t} = <strong>{v} m/s</strong>. A área é um trapézio: (base menor + base maior) ÷ 2 × altura = ({v0} + {v}) ÷ 2 × {t} = <strong>{area} m</strong>. É a distância que o carro andou.
      </p>
    </div>
  )
}
