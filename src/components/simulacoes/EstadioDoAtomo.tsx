import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Se o núcleo fosse do tamanho de uma bolinha, o átomo seria um campo enorme (razão de cerca de 100 mil)
export default function EstadioDoAtomo() {
  const [cm, setCm] = useState(1)
  const metros = cm * 1000 // 1 cm × 100.000 = 100.000 cm = 1.000 m
  const comparacao = cm === 1 ? '1 quilômetro, mais ou menos 10 quadras de cidade enfileiradas' : `${cm} quilômetros, como cruzar um bairro grande a pé`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Escala do átomo</p>
      <svg viewBox="0 0 260 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Um ponto pequeno no centro de um círculo enorme">
        <circle cx={130} cy={45} r={40} fill="none" stroke="var(--color-azul)" strokeDasharray="4 3" />
        <circle cx={130} cy={45} r={2.5 + cm * 0.4} fill="var(--color-coral)" />
        <text x={130} y={88} fontSize="8" textAnchor="middle" fill="var(--color-suave)">fora de escala de verdade: o núcleo real seria invisível</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">Núcleo do tamanho de: {cm} cm<input type="range" min={1} max={5} step={1} value={cm} onChange={(e) => setCm(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Se o núcleo tivesse <strong>{cm} cm</strong> (uma bolinha), o átomo inteiro teria cerca de <strong>{metros.toLocaleString('pt-BR')} m</strong> de diâmetro: {comparacao}. E os elétrons seriam pontinhos minúsculos andando lá longe. Quase todo o átomo é espaço vazio, mas quase toda a massa está na bolinha do centro.
      </p>
    </div>
  )
}
