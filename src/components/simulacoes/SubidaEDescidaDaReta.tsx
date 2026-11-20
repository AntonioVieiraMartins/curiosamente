import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

// Inclinação m = (quanto sobe) ÷ (quanto anda para o lado), entre dois pontos da reta
export default function SubidaEDescidaDaReta() {
  const [x1, setX1] = useState(-4)
  const [y1, setY1] = useState(-2)
  const [x2, setX2] = useState(4)
  const [y2, setY2] = useState(4)
  const dx = x2 - x1
  const dy = y2 - y1
  const vertical = dx === 0
  const m = vertical ? 0 : dy / dx
  const sentido = vertical ? 'vertical: não tem inclinação' : m > 0 ? 'sobe' : m < 0 ? 'desce' : 'fica reta, na horizontal'
  // estende a reta até as bordas do desenho
  const ext = (x: number) => (vertical ? 0 : y1 + m * (x - x1))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A inclinação da reta</p>
      <PlanoBase aria={`Reta passando por (${x1}, ${y1}) e (${x2}, ${y2})`}>
        {vertical
          ? <line x1={px(x1)} y1={0} x2={px(x1)} y2={200} stroke="var(--color-coral)" strokeWidth="2.5" />
          : <line x1={px(-10)} y1={py(ext(-10))} x2={px(10)} y2={py(ext(10))} stroke="var(--color-coral)" strokeWidth="2.5" />}
        <polyline points={`${px(x1)},${py(y1)} ${px(x2)},${py(y1)} ${px(x2)},${py(y2)}`} fill="none" stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx={px(x1)} cy={py(y1)} r="4.5" fill="var(--color-azul)" />
        <circle cx={px(x2)} cy={py(y2)} r="4.5" fill="var(--color-azul)" />
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Deslizante rotulo="x do 1º ponto" valor={x1} min={-8} max={8} aoMudar={setX1} />
        <Deslizante rotulo="y do 1º ponto" valor={y1} min={-8} max={8} aoMudar={setY1} />
        <Deslizante rotulo="x do 2º ponto" valor={x2} min={-8} max={8} aoMudar={setX2} />
        <Deslizante rotulo="y do 2º ponto" valor={y2} min={-8} max={8} aoMudar={setY2} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {vertical
          ? 'Os dois pontos têm o mesmo x: a reta é vertical e não tem inclinação (não dá para dividir por zero).'
          : <>Sobe {sinal(dy)} para andar {sinal(dx)}: m = {sinal(dy)} ÷ {sinal(dx)} = <strong>{num(m)}</strong>. A reta {sentido}.</>}
      </p>
    </div>
  )
}
