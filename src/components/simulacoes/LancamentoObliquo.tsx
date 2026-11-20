import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Lançamento oblíquo: separa a velocidade em horizontal (constante) e vertical (sobe e desce)
export default function LancamentoObliquo() {
  const [v, setV] = useState(20)
  const [ang, setAng] = useState(45)
  const g = 9.8
  const th = (ang * Math.PI) / 180
  const vx = v * Math.cos(th)
  const vy = v * Math.sin(th)
  const tv = (2 * vy) / g
  const alc = vx * tv
  const hm = (vy * vy) / (2 * g)
  const XM = 100
  const gx = (m: number) => 20 + (m / XM) * 250
  const gy = (m: number) => 108 - (m / 50) * 95
  const pts = Array.from({ length: 41 }, (_, i) => {
    const tt = (i / 40) * tv
    return `${gx(vx * tt)},${gy(vy * tt - (g * tt * tt) / 2)}`
  }).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lançamento oblíquo (g = 9,8 m/s²)</p>
      <svg viewBox="0 0 290 125" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Trajetória em parábola com alcance de ${alc.toFixed(0)} metros`}>
        <line x1={10} y1={108} x2={280} y2={108} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={gx(0)} y1={gy(0)} x2={gx(Math.min(vx * 0.6, 30))} y2={gy(Math.min(vy * 0.6, 30))} stroke="var(--color-coral)" strokeWidth="2" />
        <circle cx={gx(0)} cy={gy(0)} r={4} fill="var(--color-coral)" />
        <circle cx={gx(alc)} cy={gy(0)} r={4} fill="var(--color-verde)" />
        <text x={gx(alc)} y={120} fontSize="8" textAnchor="middle" fill="var(--color-suave)">{alc.toFixed(0)} m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade: {v} m/s<input type="range" min={10} max={30} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Ângulo: {ang}°<input type="range" min={10} max={80} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Componentes: horizontal vₓ = {vx.toFixed(1).replace('.', ',')} m/s (não muda) e vertical v_y = {vy.toFixed(1).replace('.', ',')} m/s (começa assim e vai caindo). Tempo no ar: {tv.toFixed(1).replace('.', ',')} s. Altura máxima: {hm.toFixed(1).replace('.', ',')} m. Alcance: <strong>{alc.toFixed(1).replace('.', ',')} m</strong>.
      </p>
    </div>
  )
}
