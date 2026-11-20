import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma bola cai reto; outra é lançada para o lado. Na vertical elas são idênticas.
export default function DuasBolasCaindo() {
  const [v, setV] = useState(8)
  const [n, setN] = useState(4)
  const g = 9.8
  const dt = 0.25
  const H = 20
  const y = (tt: number) => 14 + ((g * tt * tt) / 2 / H) * 100
  const x = (tt: number) => 60 + v * tt * 12

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma foto a cada 0,25 s</p>
      <svg viewBox="0 0 300 130" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label="Duas bolas: uma cai reto e outra é lançada para o lado, sempre na mesma altura">
        <line x1={10} y1={118} x2={290} y2={118} stroke="var(--color-texto)" strokeOpacity="0.5" />
        {Array.from({ length: n + 1 }, (_, i) => {
          const tt = i * dt
          return (
            <g key={i}>
              <line x1={30} y1={y(tt)} x2={Math.min(290, x(tt))} y2={y(tt)} stroke="var(--color-borda)" strokeDasharray="2 3" />
              <circle cx={30} cy={y(tt)} r={5} fill="var(--color-azul)" />
              <circle cx={Math.min(290, x(tt))} cy={y(tt)} r={5} fill="var(--color-coral)" />
            </g>
          )
        })}
        <text x={30} y={10} fontSize="8" textAnchor="middle" fill="var(--color-azul)">solta</text>
        <text x={60} y={10} fontSize="8" fill="var(--color-coral)">lançada para o lado</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade horizontal: {v} m/s<input type="range" min={2} max={14} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Fotos: {n}<input type="range" min={1} max={8} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        As linhas tracejadas ficam perfeitamente horizontais: as duas bolas estão <strong>sempre na mesma altura</strong>, e chegam ao chão juntas. Andar para o lado não atrapalha nem ajuda a queda. A bola vermelha anda distâncias horizontais iguais a cada foto, porque no eixo x o movimento é uniforme.
      </p>
    </div>
  )
}
