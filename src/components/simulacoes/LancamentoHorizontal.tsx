import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Lançamento horizontal: de um penhasco, a bola anda para a frente em MRU e cai em MUV
export default function LancamentoHorizontal() {
  const [h, setH] = useState(45)
  const [v, setV] = useState(10)
  const g = 9.8
  const tq = Math.sqrt((2 * h) / g)
  const alc = v * tq
  const XM = 100 // alcance máximo do gráfico (m)
  const HM = 80
  const gx = (m: number) => 20 + (m / XM) * 250
  const gy = (m: number) => 14 + ((HM - m) / HM) * 100
  const pts = Array.from({ length: 31 }, (_, i) => {
    const tt = (i / 30) * tq
    return `${gx(v * tt)},${gy(h - (g * tt * tt) / 2)}`
  }).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lançamento horizontal</p>
      <svg viewBox="0 0 290 125" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Bola lançada de ${h} metros de altura caindo a ${alc.toFixed(0)} metros do penhasco`}>
        <rect x={gx(0) - 16} y={gy(h)} width={16} height={gy(0) - gy(h)} fill="var(--color-borda)" />
        <line x1={10} y1={gy(0)} x2={280} y2={gy(0)} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        {Array.from({ length: Math.floor(tq / 0.5) + 1 }, (_, i) => (
          <circle key={i} cx={gx(v * i * 0.5)} cy={gy(h - (g * (i * 0.5) ** 2) / 2)} r={3} fill="var(--color-coral)" />
        ))}
        <circle cx={gx(alc)} cy={gy(0)} r={4} fill="var(--color-verde)" />
        <text x={gx(alc)} y={gy(0) + 11} fontSize="8" textAnchor="middle" fill="var(--color-suave)">{alc.toFixed(0)} m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Altura: {h} m<input type="range" min={5} max={80} step={5} value={h} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Velocidade horizontal: {v} m/s<input type="range" min={2} max={30} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O tempo de queda só depende da altura: t = √(2 × {h} ÷ 9,8) = <strong>{tq.toFixed(1).replace('.', ',')} s</strong>. Nesse tempo, a bola anda para a frente {v} × {tq.toFixed(1).replace('.', ',')} = <strong>{alc.toFixed(0)} m</strong>. Os pontos vermelhos marcam cada 0,5 s: o espaço horizontal entre eles é sempre o mesmo, e o vertical cresce.
      </p>
    </div>
  )
}
