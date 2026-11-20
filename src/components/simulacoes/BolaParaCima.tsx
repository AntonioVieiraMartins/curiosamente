import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Lançamento vertical: sobe parando, desce acelerando. Mostra altura × tempo e a velocidade.
export default function BolaParaCima() {
  const [v0, setV0] = useState(20)
  const [t, setT] = useState(1)
  const g = 9.8
  const tTotal = (2 * v0) / g
  const tf = Math.min(t, tTotal)
  const h = v0 * tf - (g * tf * tf) / 2
  const v = v0 - g * tf
  const hmax = (v0 * v0) / (2 * g)
  const TMAX = (2 * 30) / g
  const gx = (tt: number) => 20 + (tt / TMAX) * 190
  const gy = (hh: number) => 110 - (hh / ((30 * 30) / (2 * g))) * 95
  const pts = Array.from({ length: 41 }, (_, i) => {
    const tt = (i / 40) * tTotal
    return `${gx(tt)},${gy(v0 * tt - (g * tt * tt) / 2)}`
  }).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lançamento vertical (g = 9,8 m/s²)</p>
      <svg viewBox="0 0 230 125" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Altura da bola em função do tempo">
        <line x1={20} y1={110} x2={215} y2={110} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={20} y1={10} x2={20} y2={110} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <circle cx={gx(tf)} cy={gy(h)} r={5} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={215} y={122} fontSize="8" textAnchor="end" fill="var(--color-suave)">tempo (s) →</text>
        <text x={24} y={14} fontSize="8" fill="var(--color-suave)">altura (m)</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade de lançamento: {v0} m/s<input type="range" min={5} max={30} step={5} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Tempo: {t.toFixed(1).replace('.', ',')} s<input type="range" min={0} max={6} step={0.5} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {tf.toFixed(1).replace('.', ',')} s: altura {h.toFixed(1).replace('.', ',')} m e velocidade <strong>{v.toFixed(1).replace('.', ',')} m/s</strong> ({v > 0.05 ? 'subindo' : v < -0.05 ? 'descendo' : 'no topo: parada por um instante'}). Altura máxima: {hmax.toFixed(1).replace('.', ',')} m, em {(v0 / g).toFixed(1).replace('.', ',')} s. Tempo total no ar: {tTotal.toFixed(1).replace('.', ',')} s.
      </p>
    </div>
  )
}
