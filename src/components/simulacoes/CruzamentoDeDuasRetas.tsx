import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

// Onde duas retas se cruzam: m₁x + n₁ = m₂x + n₂
export default function CruzamentoDeDuasRetas() {
  const [m1, setM1] = useState(1)
  const [n1, setN1] = useState(-1)
  const [m2, setM2] = useState(-1)
  const [n2, setN2] = useState(3)
  const paralelas = m1 === m2
  const iguais = paralelas && n1 === n2
  const x = paralelas ? 0 : (n2 - n1) / (m1 - m2)
  const y = m1 * x + n1
  const dentro = !paralelas && Math.abs(x) <= 10 && Math.abs(y) <= 10

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Onde as retas se cruzam</p>
      <PlanoBase aria={paralelas ? 'Duas retas paralelas' : `Retas que se cruzam em (${num(x)}, ${num(y)})`}>
        <line x1={px(-10)} y1={py(m1 * -10 + n1)} x2={px(10)} y2={py(m1 * 10 + n1)} stroke="var(--color-azul)" strokeWidth="2.5" />
        <line x1={px(-10)} y1={py(m2 * -10 + n2)} x2={px(10)} y2={py(m2 * 10 + n2)} stroke="var(--color-coral)" strokeWidth="2.5" strokeDasharray={iguais ? '6 4' : undefined} />
        {dentro && <circle cx={px(x)} cy={py(y)} r="5.5" fill="var(--color-amarelo)" stroke="var(--color-texto)" strokeWidth="1.5" />}
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Deslizante rotulo="Azul: m" valor={m1} min={-3} max={3} passo={0.5} aoMudar={setM1} />
        <Deslizante rotulo="Azul: n" valor={n1} min={-6} max={6} aoMudar={setN1} />
        <Deslizante rotulo="Coral: m" valor={m2} min={-3} max={3} passo={0.5} aoMudar={setM2} />
        <Deslizante rotulo="Coral: n" valor={n2} min={-6} max={6} aoMudar={setN2} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {iguais
          ? 'As duas equações descrevem a mesma reta: há infinitos pontos em comum.'
          : paralelas
            ? 'Mesma inclinação e cortes diferentes: são paralelas e não têm ponto em comum.'
            : <>x = ({sinal(n2)} − {sinal(n1)}) ÷ ({sinal(m1)} − {sinal(m2)}) = {num(x)}. Então y = {num(y)}. Cruzamento em <strong>({num(x)}; {num(y)})</strong>{dentro ? '' : ' (fora do desenho)'}.</>}
      </p>
    </div>
  )
}
