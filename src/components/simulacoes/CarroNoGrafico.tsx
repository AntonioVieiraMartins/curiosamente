import { useState } from 'react'
import { cartao } from '../ui/estilos'

// s = s0 + v·t: o carro na estrada e o gráfico posição × tempo lado a lado
export default function CarroNoGrafico() {
  const [s0, setS0] = useState(20)
  const [v, setV] = useState(10)
  const [t, setT] = useState(4)
  const T = 10
  const s = s0 + v * t
  // Escala do gráfico: posição de -50 a 150 m
  const SMIN = -50
  const SMAX = 150
  const gx = (tt: number) => 30 + (tt / T) * 160
  const gy = (ss: number) => 100 - ((Math.max(SMIN, Math.min(SMAX, ss)) - SMIN) / (SMAX - SMIN)) * 90
  const estrada = (ss: number) => 20 + ((Math.max(SMIN, Math.min(SMAX, ss)) - SMIN) / (SMAX - SMIN)) * 360

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">s = s₀ + v × t</p>
      <svg viewBox="0 0 400 50" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Carro na posição ${s} metros`}>
        <line x1={20} y1={34} x2={380} y2={34} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <line x1={estrada(0)} y1={28} x2={estrada(0)} y2={40} stroke="var(--color-texto)" />
        <text x={estrada(0)} y={48} fontSize="9" textAnchor="middle" fill="var(--color-suave)">0</text>
        <rect x={estrada(s) - 14} y={16} width={28} height={14} rx={4} fill="var(--color-azul)" />
        <circle cx={estrada(s) - 8} cy={32} r={3} fill="var(--color-texto)" />
        <circle cx={estrada(s) + 8} cy={32} r={3} fill="var(--color-texto)" />
      </svg>
      <svg viewBox="0 0 220 115" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gráfico posição por tempo">
        <line x1={30} y1={100} x2={200} y2={100} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={30} y1={10} x2={30} y2={100} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={30} y1={gy(0)} x2={200} y2={gy(0)} stroke="var(--color-borda)" strokeDasharray="3 3" />
        <text x={4} y={gy(0) + 3} fontSize="8" fill="var(--color-suave)">0 m</text>
        <polyline points={`${gx(0)},${gy(s0)} ${gx(T)},${gy(s0 + v * T)}`} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <circle cx={gx(t)} cy={gy(s)} r={4.5} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={200} y={111} fontSize="8" textAnchor="end" fill="var(--color-suave)">tempo (s) →</text>
        <text x={34} y={16} fontSize="8" fill="var(--color-suave)">posição (m)</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Posição inicial s₀: {s0} m<input type="range" min={-40} max={100} step={10} value={s0} onChange={(e) => setS0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Velocidade v: {v} m/s<input type="range" min={-10} max={15} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Tempo t: {t} s<input type="range" min={0} max={T} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        s = {s0} {v < 0 ? '−' : '+'} {Math.abs(v)} × {t} = <strong>{s} m</strong>.{' '}
        {v === 0 ? 'Velocidade zero: a linha é horizontal e o carro está parado.' : v > 0 ? 'Velocidade positiva: a linha sobe (o carro avança no sentido positivo).' : 'Velocidade negativa: a linha desce (o carro anda no sentido contrário ao positivo).'}
        {' '}Quanto mais inclinada a linha, maior a velocidade.
      </p>
    </div>
  )
}
