import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

// A distância entre dois pontos é a hipotenusa de um triângulo cujos catetos são dx e dy
export default function DistanciaPeloTriangulo() {
  const [x1, setX1] = useState(-4)
  const [y1, setY1] = useState(-2)
  const [x2, setX2] = useState(3)
  const [y2, setY2] = useState(4)
  const dx = x2 - x1
  const dy = y2 - y1
  const soma = dx * dx + dy * dy
  const d = Math.sqrt(soma)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Distância entre dois pontos</p>
      <PlanoBase aria={`Pontos A(${x1}, ${y1}) e B(${x2}, ${y2})`}>
        <polygon points={`${px(x1)},${py(y1)} ${px(x2)},${py(y1)} ${px(x2)},${py(y2)}`} fill="var(--color-amarelo)" fillOpacity="0.3" />
        <line x1={px(x1)} y1={py(y1)} x2={px(x2)} y2={py(y1)} stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        <line x1={px(x2)} y1={py(y1)} x2={px(x2)} y2={py(y2)} stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        <line x1={px(x1)} y1={py(y1)} x2={px(x2)} y2={py(y2)} stroke="var(--color-coral)" strokeWidth="3" />
        <circle cx={px(x1)} cy={py(y1)} r="4.5" fill="var(--color-coral)" />
        <circle cx={px(x2)} cy={py(y2)} r="4.5" fill="var(--color-coral)" />
        <text x={px(x1) - 8} y={py(y1) - 6} fontSize="9" fontWeight="700" fill="var(--color-texto)">A</text>
        <text x={px(x2) + 6} y={py(y2) - 4} fontSize="9" fontWeight="700" fill="var(--color-texto)">B</text>
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Deslizante rotulo="x de A" valor={x1} min={-8} max={8} aoMudar={setX1} />
        <Deslizante rotulo="y de A" valor={y1} min={-8} max={8} aoMudar={setY1} />
        <Deslizante rotulo="x de B" valor={x2} min={-8} max={8} aoMudar={setX2} />
        <Deslizante rotulo="y de B" valor={y2} min={-8} max={8} aoMudar={setY2} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Catetos: |{sinal(dx)}| = {Math.abs(dx)} e |{sinal(dy)}| = {Math.abs(dy)}. Distância = √({Math.abs(dx)}² + {Math.abs(dy)}²) = √{soma} ≈ <strong>{num(d)}</strong>.
      </p>
    </div>
  )
}
