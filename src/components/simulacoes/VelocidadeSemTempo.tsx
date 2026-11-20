import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Torricelli: v² = v₀² + 2·a·Δs, uma conta que dispensa o tempo
export default function VelocidadeSemTempo() {
  const [v0, setV0] = useState(20)
  const [a, setA] = useState(-5)
  const [d, setD] = useState(20)
  const v2 = v0 * v0 + 2 * a * d
  const parou = v2 <= 0
  const v = parou ? 0 : Math.sqrt(v2)
  const dParada = a < 0 ? (v0 * v0) / (2 * -a) : Infinity
  const x = (m: number) => 20 + (Math.max(0, Math.min(100, m)) / 100) * 360

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">v² = v₀² + 2·a·Δs</p>
      <svg viewBox="0 0 400 52" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Carro freando numa pista de 100 metros">
        <line x1={20} y1={34} x2={380} y2={34} stroke="var(--color-texto)" strokeOpacity="0.5" />
        {Number.isFinite(dParada) && dParada <= 100 && (
          <>
            <line x1={x(dParada)} y1={22} x2={x(dParada)} y2={42} stroke="var(--color-coral)" strokeWidth="2" strokeDasharray="3 2" />
            <text x={x(dParada)} y={16} fontSize="8" textAnchor="middle" fill="var(--color-coral)">para aqui</text>
          </>
        )}
        <rect x={x(Math.min(d, dParada)) - 12} y={18} width={24} height={13} rx={4} fill="var(--color-azul)" />
        <circle cx={x(Math.min(d, dParada)) - 7} cy={33} r={3} fill="var(--color-texto)" />
        <circle cx={x(Math.min(d, dParada)) + 7} cy={33} r={3} fill="var(--color-texto)" />
        <text x={20} y={48} fontSize="8" fill="var(--color-suave)">0 m</text>
        <text x={380} y={48} fontSize="8" textAnchor="end" fill="var(--color-suave)">100 m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">v₀: {v0} m/s<input type="range" min={5} max={40} step={5} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">a: {a} m/s²<input type="range" min={-8} max={4} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Distância Δs: {d} m<input type="range" min={0} max={100} step={5} value={d} onChange={(e) => setD(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        v² = {v0}² + 2 × ({a}) × {d} = {v2}. {parou ? <>Resultado zero ou negativo: o carro <strong>já parou</strong> antes de andar {d} m.</> : <>Então v = <strong>{v.toFixed(1).replace('.0', '')} m/s</strong> depois de {d} m.</>}{' '}
        {Number.isFinite(dParada) ? <>Para parar por completo ele precisa de {dParada.toFixed(1).replace('.0', '')} m (v = 0).</> : <>Com aceleração positiva ele nunca para.</>}
      </p>
    </div>
  )
}
