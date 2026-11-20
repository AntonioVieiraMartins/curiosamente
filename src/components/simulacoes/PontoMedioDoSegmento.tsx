import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

// O ponto médio tem como coordenadas as médias das coordenadas dos extremos
export default function PontoMedioDoSegmento() {
  const [x1, setX1] = useState(-5)
  const [y1, setY1] = useState(-3)
  const [x2, setX2] = useState(3)
  const [y2, setY2] = useState(5)
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O ponto do meio</p>
      <PlanoBase aria={`Segmento de A(${x1}, ${y1}) a B(${x2}, ${y2}) com ponto médio M(${mx}, ${my})`}>
        <line x1={px(x1)} y1={py(y1)} x2={px(x2)} y2={py(y2)} stroke="var(--color-azul)" strokeWidth="3" />
        <circle cx={px(x1)} cy={py(y1)} r="4.5" fill="var(--color-azul)" />
        <circle cx={px(x2)} cy={py(y2)} r="4.5" fill="var(--color-azul)" />
        <circle cx={px(mx)} cy={py(my)} r="6" fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={px(mx) + 8} y={py(my) - 6} fontSize="9" fontWeight="700" fill="var(--color-coral)">M</text>
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Deslizante rotulo="x de A" valor={x1} min={-8} max={8} aoMudar={setX1} />
        <Deslizante rotulo="y de A" valor={y1} min={-8} max={8} aoMudar={setY1} />
        <Deslizante rotulo="x de B" valor={x2} min={-8} max={8} aoMudar={setX2} />
        <Deslizante rotulo="y de B" valor={y2} min={-8} max={8} aoMudar={setY2} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        x: ({sinal(x1)} + {sinal(x2)}) ÷ 2 = {num(mx)}. y: ({sinal(y1)} + {sinal(y2)}) ÷ 2 = {num(my)}. Ponto médio <strong>M({num(mx)}; {num(my)})</strong>.
      </p>
    </div>
  )
}
