import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'

const LIM = 5
const CASA = 28
const T = (2 * LIM + 1) * CASA
const X = (x: number) => T / 2 + x * CASA
const Y = (y: number) => T / 2 - y * CASA
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const num = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Entre dois pontos há o caminho "de quarteirão" (só horizontal e vertical) e a linha reta (Pitágoras)
export default function DistanciaNoPlano() {
  const [x1, setX1] = useState(-3)
  const [y1, setY1] = useState(-1)
  const [x2, setX2] = useState(1)
  const [y2, setY2] = useState(2)
  const dx = Math.abs(x2 - x1)
  const dy = Math.abs(y2 - y1)
  const reta = Math.hypot(dx, dy)
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A distância entre dois pontos</p>
      <svg viewBox={`0 0 ${T} ${T}`} className="mx-auto mt-3 w-full max-w-xs" aria-hidden="true">
        {Array.from({ length: 2 * LIM + 1 }, (_, i) => i - LIM).map((n) => (
          <g key={n}>
            <line x1={X(n)} x2={X(n)} y1={0} y2={T} stroke="var(--color-borda)" />
            <line y1={Y(n)} y2={Y(n)} x1={0} x2={T} stroke="var(--color-borda)" />
          </g>
        ))}
        <line x1={0} x2={T} y1={T / 2} y2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line y1={0} y2={T} x1={T / 2} x2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <polyline points={`${X(x1)},${Y(y1)} ${X(x2)},${Y(y1)} ${X(x2)},${Y(y2)}`} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" strokeDasharray="5 4" />
        <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} stroke="var(--color-coral)" strokeWidth="3" />
        <circle cx={X(x1)} cy={Y(y1)} r="6" fill="var(--color-coral)" />
        <circle cx={X(x2)} cy={Y(y2)} r="6" fill="var(--color-coral)" />
        <circle cx={X(mx)} cy={Y(my)} r="5" fill="var(--color-verde)" />
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Ponto A" rotulo="A: x" valor={x1} min={-LIM} max={LIM} mudar={setX1} />
        <Contador grupo="Ponto A" rotulo="A: y" valor={y1} min={-LIM} max={LIM} mudar={setY1} />
        <Contador grupo="Ponto B" rotulo="B: x" valor={x2} min={-LIM} max={LIM} mudar={setX2} />
        <Contador grupo="Ponto B" rotulo="B: y" valor={y2} min={-LIM} max={LIM} mudar={setY2} />
      </div>

      <div aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
        <p>A({sinal(x1)}, {sinal(y1)}) e B({sinal(x2)}, {sinal(y2)})</p>
        <p><span className="text-azul-texto">Pelo quarteirão</span> (tracejado): {dx} + {dy} = <strong>{dx + dy}</strong> casas.</p>
        <p><span className="text-coral">Em linha reta</span>: raiz de {dx}² + {dy}² = raiz de {dx * dx + dy * dy} = <strong>{num(reta)}</strong>.</p>
        <p><span className="text-verde">Ponto médio</span> (bolinha verde): ({num(mx)}, {num(my)}).</p>
      </div>
    </div>
  )
}
