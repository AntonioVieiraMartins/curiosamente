import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Pena e martelo soltos juntos. Com ar a pena sofre muita resistência (modelo bem simplificado); no vácuo os dois caem iguais.
export default function PenaEMartelo() {
  const [vacuo, setVacuo] = useState(false)
  const [t, setT] = useState(0.6)
  const g = 9.8
  const H = 3 // altura de queda em metros
  const martelo = Math.min(H, (g * t * t) / 2)
  // Com ar, a pena logo atinge uma velocidade limite de ~1 m/s (simplificação didática)
  const penaAr = Math.min(H, t * 1)
  const pena = vacuo ? martelo : penaAr
  const y = (m: number) => 14 + (m / H) * 100

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Pena e martelo: com ar e no vácuo</p>
      <svg viewBox="0 0 240 130" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label="Pena e martelo caindo">
        <line x1={10} y1={118} x2={230} y2={118} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <rect x={70} y={y(martelo) - 12} width={22} height={12} rx={2} fill="var(--color-texto)" />
        <ellipse cx={170} cy={y(pena) - 6} rx={14} ry={5} fill="var(--color-verde)" />
        <text x={81} y={10} fontSize="8" textAnchor="middle" fill="var(--color-suave)">martelo</text>
        <text x={170} y={10} fontSize="8" textAnchor="middle" fill="var(--color-suave)">pena</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="flex min-h-11 items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={vacuo} onChange={(e) => setVacuo(e.target.checked)} className="h-5 w-5" /> Tirar o ar (vácuo)</label>
        <label className="block text-sm font-semibold">Tempo: {t.toFixed(1).replace('.', ',')} s<input type="range" min={0} max={1} step={0.1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {vacuo
          ? 'Sem ar, nada freia a pena: os dois caem juntos e chegam juntos ao chão. Foi o que o astronauta David Scott mostrou na Lua, em 1971.'
          : 'Com ar, a pena é muito freada pela resistência e cai bem mais devagar. O martelo, mais pesado e compacto, mal sente o ar. O que muda a queda é o ar, e não a "gravidade que puxa mais o pesado".'}
      </p>
    </div>
  )
}
