import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Joguinho: ajuste velocidade e ângulo para a bola cair no alvo (sem ar)
const alvos = [30, 45, 60, 75]

export default function AcertaOAlvo() {
  const [v, setV] = useState(18)
  const [ang, setAng] = useState(40)
  const [i, setI] = useState(0)
  const g = 9.8
  const alvo = alvos[i]
  const th = (ang * Math.PI) / 180
  const alc = (v * v * Math.sin(2 * th)) / g
  const acertou = Math.abs(alc - alvo) <= 2
  const gx = (m: number) => 20 + (m / 100) * 250
  const gy = (m: number) => 100 - (m / 50) * 85
  const tv = (2 * v * Math.sin(th)) / g
  const pts = Array.from({ length: 41 }, (_, k) => {
    const tt = (k / 40) * tv
    return `${gx(v * Math.cos(th) * tt)},${gy(v * Math.sin(th) * tt - (g * tt * tt) / 2)}`
  }).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Acerte o alvo a {alvo} m</p>
      <svg viewBox="0 0 290 115" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Alvo a ${alvo} metros; a bola cai a ${alc.toFixed(0)} metros`}>
        <line x1={10} y1={100} x2={280} y2={100} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <rect x={gx(alvo - 2)} y={96} width={gx(alvo + 2) - gx(alvo - 2)} height={6} fill={acertou ? 'var(--color-verde)' : 'var(--color-amarelo)'} />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <circle cx={gx(alc)} cy={100} r={4} fill="var(--color-coral)" />
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade: {v} m/s<input type="range" min={10} max={30} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Ângulo: {ang}°<input type="range" min={10} max={80} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A bola cai a <strong>{alc.toFixed(1).replace('.', ',')} m</strong>. {acertou ? 'Acertou o alvo! Tente de outro jeito: há mais de uma combinação (lembre dos ângulos complementares).' : alc < alvo ? 'Ficou curto: aumente a velocidade ou aproxime o ângulo de 45°.' : 'Passou do alvo: diminua a velocidade ou afaste o ângulo de 45°.'}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {alvos.map((a, k) => (
          <button key={a} type="button" aria-pressed={i === k} onClick={() => setI(k)} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>Alvo {a} m</button>
        ))}
      </div>
    </div>
  )
}
