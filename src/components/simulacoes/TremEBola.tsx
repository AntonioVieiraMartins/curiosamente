import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma bola solta dentro de um trem em movimento: reta para quem está dentro, curva para quem está fora
const V = 120 // deslocamento horizontal do trem durante a queda (unidades do desenho)
export default function TremEBola() {
  const [de, setDe] = useState<'dentro' | 'fora'>('dentro')
  const [t, setT] = useState(0.5)
  const y = 30 + 70 * t * t // cai cada vez mais rápido
  const trem = de === 'dentro' ? 100 : 100 + V * t
  const bolaX = de === 'dentro' ? 150 : 150 + V * t
  const pontos = Array.from({ length: 21 }, (_, i) => {
    const s = i / 20
    return `${de === 'dentro' ? 150 : 150 + V * s},${30 + 70 * s * s}`
  }).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A bola que cai dentro do trem</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha quem observa">
        {(['dentro', 'fora'] as const).map((o) => (
          <button key={o} type="button" aria-pressed={de === o} onClick={() => setDe(o)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${de === o ? 'border-texto bg-texto text-white' : 'border-borda'}`}>
            {o === 'dentro' ? 'Quem está dentro do trem' : 'Quem está na plataforma'}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 400 150" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Trajetória da bola vista por quem está ${de === 'dentro' ? 'dentro' : 'fora'}`}>
        <line x1={0} y1={125} x2={400} y2={125} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <rect x={trem} y={20} width={100} height={105} rx={8} fill="var(--color-azul)" fillOpacity="0.15" stroke="var(--color-azul)" strokeWidth="2" />
        <polyline points={pontos} fill="none" stroke="var(--color-coral)" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx={bolaX} cy={y} r={7} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={10} y={142} fontSize="11" fill="var(--color-suave)">chão</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Momento da queda: {Math.round(t * 100)}%
        <input type="range" min={0} max={1} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {de === 'dentro'
          ? 'Para quem está dentro, o trem parece parado e a bola cai em linha reta, para baixo.'
          : 'Para quem está na plataforma, a bola acompanha o trem para a frente enquanto cai. O caminho é uma curva (uma parábola).'}
      </p>
    </div>
  )
}
