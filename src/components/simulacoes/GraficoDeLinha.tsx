import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Gráfico de linha: um valor que muda ao longo do tempo (temperatura no dia)
const horas = [6, 8, 10, 12, 14, 16, 18, 20]
const temp = [16, 19, 24, 28, 30, 27, 22, 18]

export default function GraficoDeLinha() {
  const [i, setI] = useState(3)
  const id = useId()
  const X = (k: number) => 30 + k * 40
  const Y = (t: number) => 120 - ((t - 10) / 25) * 100
  const pts = temp.map((t, k) => `${X(k)},${Y(t)}`).join(' ')
  const muda = i > 0 ? temp[i] - temp[i - 1] : 0
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Temperatura ao longo do dia</p>
      <svg viewBox="0 0 320 150" role="img" aria-label="Gráfico de linha da temperatura entre 6h e 20h" className="mt-2 h-auto w-full">
        <line x1={30} y1={120} x2={310} y2={120} stroke="var(--color-suave)" />
        <line x1={30} y1={20} x2={30} y2={120} stroke="var(--color-suave)" />
        <polyline points={pts} fill="none" stroke="var(--color-azul)" strokeWidth={2.5} strokeLinejoin="round" />
        {temp.map((t, k) => (
          <g key={k}>
            <circle cx={X(k)} cy={Y(t)} r={k === i ? 6 : 3.5} fill={k === i ? 'var(--color-coral)' : 'var(--color-amarelo)'} stroke={k === i ? 'var(--color-coral)' : 'var(--color-amarelo-escuro)'} />
            <text x={X(k)} y={136} textAnchor="middle" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>{horas[k]}h</text>
          </g>
        ))}
        <text x={24} y={Y(30) + 3} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>30</text>
        <text x={24} y={Y(20) + 3} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>20</text>
        <text x={24} y={Y(10) + 3} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>10</text>
      </svg>
      <label htmlFor={id} className="block text-[15px]">Horário: <b>{horas[i]}h</b>
        <input id={id} type="range" min={0} max={horas.length - 1} value={i} onChange={(e) => setI(Number(e.target.value))} className="h-11 w-full" /></label>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Às {horas[i]}h: <b>{temp[i]} °C</b>.{' '}
        {i === 0 ? 'Começo do gráfico.' : muda > 0 ? `Subiu ${muda} °C em 2 horas (a linha sobe).` : muda < 0 ? `Caiu ${-muda} °C em 2 horas (a linha desce).` : 'Ficou igual.'}{' '}
        {temp[i] === Math.max(...temp) ? 'É o ponto mais alto do dia.' : temp[i] === Math.min(...temp) ? 'É o ponto mais baixo do dia.' : ''}
      </p>
    </div>
  )
}
