import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma cor só: com cores alternadas a mandala perderia parte da simetria
const COR = 'var(--color-azul)'

// Repetir uma pétala girando em torno do centro cria simetria de rotação
export default function MandalaDeGiros() {
  const [n, setN] = useState(6)
  const [espelho, setEspelho] = useState(false)
  const passo = 360 / n

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mandala de giros</p>
      <svg viewBox="-100 -100 200 200" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Mandala com ${n} pétalas`}>
        {Array.from({ length: n }, (_, k) => (
          <g key={k} transform={`rotate(${k * passo})`}>
            <path d="M0 -8 C 18 -30, 14 -60, 0 -85 C -14 -60, -18 -30, 0 -8 Z" fill={COR} fillOpacity="0.45" stroke={COR} strokeWidth="1.5" />
            {espelho && <line x1={0} y1={0} x2={0} y2={-92} stroke="var(--color-texto)" strokeWidth="1" strokeDasharray="3 3" />}
          </g>
        ))}
        <circle cx={0} cy={0} r={5} fill="var(--color-texto)" />
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Número de pétalas: {n}
        <input type="range" min={2} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" aria-label="Número de pétalas" />
      </label>
      <label className="mt-2 flex min-h-11 items-center gap-2 text-sm font-semibold">
        <input type="checkbox" checked={espelho} onChange={(e) => setEspelho(e.target.checked)} className="h-5 w-5" />
        Mostrar as linhas de espelho de cada pétala
      </label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n} pétalas: a mandala se encaixa em si mesma a cada <strong>{Math.round(passo * 100) / 100}°</strong> (360 ÷ {n}). Ela tem {n} posições de giro e {n} eixos de simetria.
      </p>
    </div>
  )
}
