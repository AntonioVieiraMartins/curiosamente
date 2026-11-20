import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Experimento de Geiger e Marsden: partículas alfa contra uma folha finíssima de ouro.
// No pudim de Thomson nenhuma voltaria; com núcleo, cerca de 1 em 8.000 volta.
export default function FolhaDeOuro() {
  const [nucleo, setNucleo] = useState(true)
  const [total, setTotal] = useState(16000)
  const voltam = nucleo ? Math.round(total / 8000) : 0
  // Pontos de exemplo desenhados: feixe de 9 partículas, uma volta no modelo com núcleo
  const feixes = [14, 26, 38, 50, 62, 74, 86, 98, 110]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O experimento da folha de ouro</p>
      <svg viewBox="0 0 280 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label="Partículas alfa atravessando uma folha de ouro; algumas poucas voltam">
        <rect x={150} y={8} width={8} height={104} fill="var(--color-amarelo)" fillOpacity="0.7" />
        {feixes.map((y, i) => {
          const volta = nucleo && i === 4
          return volta
            ? <polyline key={y} points={`10,${y} 148,${y} 80,${y - 34}`} fill="none" stroke="var(--color-coral)" strokeWidth="1.8" />
            : <line key={y} x1={10} y1={y} x2={nucleo && (i === 2 || i === 6) ? 250 : 260} y2={nucleo && i === 2 ? y - 10 : nucleo && i === 6 ? y + 10 : y} stroke="var(--color-azul)" strokeWidth="1.4" />
        })}
        {nucleo && <circle cx={154} cy={62} r={3} fill="var(--color-coral)" />}
        <text x={154} y={118} fontSize="8" textAnchor="middle" fill="var(--color-suave)">folha de ouro</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="flex min-h-11 items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={nucleo} onChange={(e) => setNucleo(e.target.checked)} className="h-5 w-5" /> Átomo com núcleo (Rutherford)</label>
        <label className="block text-sm font-semibold">Partículas disparadas: {total.toLocaleString('pt-BR')}<input type="range" min={8000} max={80000} step={8000} value={total} onChange={(e) => setTotal(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {nucleo
          ? <>Com núcleo, quase tudo passa (átomo quase vazio), mas, de vez em quando, uma partícula bate no núcleo e <strong>volta</strong>. Na medida real, cerca de 1 em cada 8.000. Em {total.toLocaleString('pt-BR')} disparos, voltariam cerca de <strong>{voltam}</strong>.</>
          : <>No pudim de Thomson, a carga positiva é espalhada e fraca: as partículas passam <strong>quase retas</strong> e <strong>nenhuma</strong> volta. Mas na experiência de verdade algumas voltaram, e Rutherford ficou espantado.</>}
      </p>
    </div>
  )
}
