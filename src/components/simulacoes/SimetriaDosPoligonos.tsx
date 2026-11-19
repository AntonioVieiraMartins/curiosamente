import { useState } from 'react'
import { cartao } from '../ui/estilos'

const NOMES: Record<number, string> = { 3: 'triângulo', 4: 'quadrado', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octógono' }

// Um polígono regular de n lados tem n eixos de simetria e gira em n posições iguais
export default function SimetriaDosPoligonos() {
  const [n, setN] = useState(5)
  const R = 70
  const vertices = Array.from({ length: n }, (_, k) => {
    const a = (-90 + (360 * k) / n) * (Math.PI / 180)
    return `${100 + R * Math.cos(a)},${100 + R * Math.sin(a)}`
  }).join(' ')
  const eixos = Array.from({ length: n }, (_, k) => {
    const a = (-90 + (180 * k) / n) * (Math.PI / 180)
    return { x1: 100 - 88 * Math.cos(a), y1: 100 - 88 * Math.sin(a), x2: 100 + 88 * Math.cos(a), y2: 100 + 88 * Math.sin(a) }
  })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Eixos de simetria dos polígonos regulares</p>
      <svg viewBox="0 0 200 200" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`${NOMES[n]} com ${n} eixos de simetria`}>
        <polygon points={vertices} fill="var(--color-azul)" fillOpacity="0.25" stroke="var(--color-azul)" strokeWidth="2.5" />
        {eixos.map((e, i) => <line key={i} {...e} stroke="var(--color-coral)" strokeWidth="1.5" strokeDasharray="4 3" />)}
        <circle cx={100} cy={100} r={3} fill="var(--color-texto)" />
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Número de lados: {n}
        <input type="range" min={3} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" aria-label="Número de lados" />
      </label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O {NOMES[n]} regular tem <strong>{n} eixos de simetria</strong> (as linhas vermelhas). Se você girar a figura em torno do centro, ela volta a se encaixar a cada <strong>{Math.round((36000 / n)) / 100}°</strong>, ou seja, em {n} posições.
      </p>
    </div>
  )
}
