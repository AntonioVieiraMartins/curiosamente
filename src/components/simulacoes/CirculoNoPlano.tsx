import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { E, num, px, py } from './geo/coords'

// (x − a)² + (y − b)² = r²: todos os pontos a distância r do centro
const termo = (v: string, c: number) => (c === 0 ? `${v}²` : c > 0 ? `(${v} − ${c})²` : `(${v} + ${-c})²`)

export default function CirculoNoPlano() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(-1)
  const [r, setR] = useState(4)
  const [tx, setTx] = useState(4)
  const [ty, setTy] = useState(2)
  const d = Math.hypot(tx - a, ty - b)
  const dentro = d < r - 1e-9
  const sobre = Math.abs(d - r) < 1e-9
  const situacao = sobre ? 'sobre a circunferência' : dentro ? 'dentro do círculo' : 'fora do círculo'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A equação da circunferência</p>
      <PlanoBase aria={`Circunferência de centro (${a}, ${b}) e raio ${r}; ponto (${tx}, ${ty}) ${situacao}`}>
        <circle cx={px(a)} cy={py(b)} r={r * E} fill="var(--color-azul)" fillOpacity="0.15" stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={px(a)} y1={py(b)} x2={px(tx)} y2={py(ty)} stroke="var(--color-coral)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx={px(a)} cy={py(b)} r="3.5" fill="var(--color-azul)" />
        <circle cx={px(tx)} cy={py(ty)} r="5" fill={sobre ? 'var(--color-verde)' : 'var(--color-coral)'} />
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Deslizante rotulo="Centro: a" valor={a} min={-5} max={5} aoMudar={setA} />
        <Deslizante rotulo="Centro: b" valor={b} min={-5} max={5} aoMudar={setB} />
        <Deslizante rotulo="Raio: r" valor={r} min={1} max={8} aoMudar={setR} />
        <span />
        <Deslizante rotulo="Ponto: x" valor={tx} min={-8} max={8} aoMudar={setTx} />
        <Deslizante rotulo="Ponto: y" valor={ty} min={-8} max={8} aoMudar={setTy} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Equação: <strong>{termo('x', a)} + {termo('y', b)} = {r * r}</strong>. O ponto ({tx}; {ty}) está a {num(d)} do centro, e o raio é {r}: <strong>{situacao}</strong>.
      </p>
    </div>
  )
}
