import { useState } from 'react'
import { cartao } from '../ui/estilos'

// MUV: o carro na pista com velocidade e posição calculadas pelas duas fórmulas
export default function MuvNaPista() {
  const [v0, setV0] = useState(5)
  const [a, setA] = useState(2)
  const [t, setT] = useState(4)
  // Se o carro está freando, ele para (não anda de ré): o tempo útil acaba quando v chega a zero
  const tFreio = a < 0 && v0 > 0 ? v0 / -a : Infinity
  const te = Math.min(t, tFreio)
  const v = v0 + a * te
  const s = v0 * te + (a * te * te) / 2
  const x = (m: number) => 20 + (Math.max(0, Math.min(600, m)) / 600) * 360

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">v = v₀ + a·t · s = v₀·t + a·t²/2</p>
      <svg viewBox="0 0 400 56" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Carro a ${s.toFixed(1)} metros da largada`}>
        <line x1={20} y1={38} x2={380} y2={38} stroke="var(--color-texto)" strokeOpacity="0.5" />
        {[0, 100, 200, 300, 400, 500, 600].map((m) => (
          <g key={m}>
            <line x1={x(m)} y1={34} x2={x(m)} y2={42} stroke="var(--color-texto)" strokeOpacity="0.6" />
            <text x={x(m)} y={52} fontSize="8" textAnchor="middle" fill="var(--color-suave)">{m}</text>
          </g>
        ))}
        <rect x={x(s) - 12} y={20} width={24} height={13} rx={4} fill="var(--color-azul)" />
        <circle cx={x(s) - 7} cy={35} r={3} fill="var(--color-texto)" />
        <circle cx={x(s) + 7} cy={35} r={3} fill="var(--color-texto)" />
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Velocidade inicial v₀: {v0} m/s<input type="range" min={0} max={30} step={1} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Aceleração a: {a} m/s²<input type="range" min={-5} max={5} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Tempo t: {t} s<input type="range" min={0} max={10} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        v = {v0} {a < 0 ? '−' : '+'} {Math.abs(a)} × {te.toFixed(1).replace('.0', '')} = <strong>{v.toFixed(1).replace('.0', '')} m/s</strong>. Posição: <strong>{s.toFixed(1).replace('.0', '')} m</strong>.{' '}
        {te < t ? 'O carro já parou: freando, ele não anda de ré.' : a > 0 ? 'A velocidade cresce a cada segundo, por isso a distância andada em cada segundo é maior.' : a < 0 ? 'A velocidade cai a cada segundo.' : 'Aceleração zero: volta a ser movimento uniforme.'}
      </p>
    </div>
  )
}
