import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

// y = m·x + n: m inclina a reta e n é onde ela corta o eixo y
export default function EquacaoDaRetaAoVivo() {
  const [m, setM] = useState(1)
  const [n, setN] = useState(-2)
  const corteX = m === 0 ? null : -n / m
  const termoN = n === 0 ? '' : n > 0 ? ` + ${num(n)}` : ` − ${num(-n)}`
  const termoM = m === 0 ? '' : m === 1 ? 'x' : m === -1 ? '−x' : `${sinal(m)}x`
  const equacao = m === 0 ? `y = ${sinal(n)}` : `y = ${termoM}${termoN}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A equação da reta ao vivo</p>
      <PlanoBase aria={`Reta ${equacao}`}>
        <line x1={px(-10)} y1={py(m * -10 + n)} x2={px(10)} y2={py(m * 10 + n)} stroke="var(--color-coral)" strokeWidth="2.5" />
        <circle cx={px(0)} cy={py(n)} r="4.5" fill="var(--color-azul)" />
        {corteX !== null && <circle cx={px(corteX)} cy={py(0)} r="4.5" fill="var(--color-verde)" />}
      </PlanoBase>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="m (inclinação)" valor={m} min={-3} max={3} passo={0.5} aoMudar={setM} />
        <Deslizante rotulo="n (onde corta o eixo y)" valor={n} min={-6} max={6} aoMudar={setN} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Equação: <strong>{equacao}</strong>. Corta o eixo y em (0; {sinal(n)}) (ponto azul)
        {corteX === null ? ' e nunca corta o eixo x (é horizontal).' : <> e o eixo x em ({num(corteX)}; 0) (ponto verde).</>}
      </p>
    </div>
  )
}
