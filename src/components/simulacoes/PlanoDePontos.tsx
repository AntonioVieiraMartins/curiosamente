import { useState, type MouseEvent } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'

const LIM = 5
const CASA = 30
const T = (2 * LIM + 1) * CASA // 330
const X = (x: number) => T / 2 + x * CASA
const Y = (y: number) => T / 2 - y * CASA

const quadrante = (x: number, y: number) =>
  x === 0 && y === 0 ? 'na origem'
    : x === 0 ? 'em cima do eixo y'
    : y === 0 ? 'em cima do eixo x'
    : x > 0 && y > 0 ? 'no 1º quadrante (+, +)'
    : x < 0 && y > 0 ? 'no 2º quadrante (−, +)'
    : x < 0 ? 'no 3º quadrante (−, −)'
    : 'no 4º quadrante (+, −)'

const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)

// Toque no plano para marcar um ponto; ou use os botões − e + (mais fáceis no celular)
export default function PlanoDePontos() {
  const [x, setX] = useState(3)
  const [y, setY] = useState(2)

  function tocar(e: MouseEvent<SVGSVGElement>) {
    const caixa = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - caixa.left) / caixa.width) * T
    const py = ((e.clientY - caixa.top) / caixa.height) * T
    const nx = Math.round((px - T / 2) / CASA)
    const ny = Math.round((T / 2 - py) / CASA)
    setX(Math.max(-LIM, Math.min(LIM, nx)))
    setY(Math.max(-LIM, Math.min(LIM, ny)))
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O plano cartesiano</p>

      <svg viewBox={`0 0 ${T} ${T}`} onClick={tocar} className="mx-auto mt-3 w-full max-w-sm cursor-pointer touch-manipulation" aria-hidden="true">
        {Array.from({ length: 2 * LIM + 1 }, (_, i) => i - LIM).map((n) => (
          <g key={n}>
            <line x1={X(n)} x2={X(n)} y1={0} y2={T} stroke="var(--color-borda)" />
            <line y1={Y(n)} y2={Y(n)} x1={0} x2={T} stroke="var(--color-borda)" />
            {n !== 0 && <text x={X(n)} y={T / 2 + 14} textAnchor="middle" fontSize="10" fill="var(--color-suave)">{n}</text>}
            {n !== 0 && <text x={T / 2 - 5} y={Y(n) + 3} textAnchor="end" fontSize="10" fill="var(--color-suave)">{n}</text>}
          </g>
        ))}
        <line x1={0} x2={T} y1={T / 2} y2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line y1={0} y2={T} x1={T / 2} x2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <text x={T - 6} y={T / 2 - 6} textAnchor="end" fontSize="12" fontWeight="600">x</text>
        <text x={T / 2 + 8} y={12} fontSize="12" fontWeight="600">y</text>
        <line x1={X(x)} x2={X(x)} y1={Y(0)} y2={Y(y)} stroke="var(--color-coral)" strokeDasharray="4 3" />
        <line x1={X(0)} x2={X(x)} y1={Y(y)} y2={Y(y)} stroke="var(--color-azul)" strokeDasharray="4 3" />
        <circle cx={X(x)} cy={Y(y)} r="7" fill="var(--color-coral)" />
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Ponto" rotulo="x (horizontal)" valor={x} min={-LIM} max={LIM} mudar={setX} />
        <Contador grupo="Ponto" rotulo="y (vertical)" valor={y} min={-LIM} max={LIM} mudar={setY} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        O ponto <strong className="text-coral">({sinal(x)}, {sinal(y)})</strong> fica {quadrante(x, y)}. Primeiro andamos {Math.abs(x)} para {x >= 0 ? 'a direita' : 'a esquerda'}, depois {Math.abs(y)} para {y >= 0 ? 'cima' : 'baixo'}.
      </p>
    </div>
  )
}
