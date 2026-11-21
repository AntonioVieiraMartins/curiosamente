import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import { casas, melhorReta, somaDosQuadrados } from '../../lib/ajuste'

// Prever um valor novo com a melhor reta, mostrando uma faixa de erro
const X = (x: number) => 20 + ((x - 10) / 160) * 210
const Y = (y: number) => 135 - (y / 600) * 125

export default function PrevendoUmPreco() {
  const { a, b } = melhorReta(casas)
  const sigma = Math.sqrt(somaDosQuadrados(casas, a, b) / (casas.length - 2))
  const [area, setArea] = useState(75)
  const prev = a * area + b
  const fora = area < 30 || area > 120
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Prevendo um preço (dados inventados)</p>
      <svg viewBox="0 0 240 150" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Para ${area} metros quadrados, previsão de ${Math.round(prev)} mil reais`}>
        <line x1="20" y1="135" x2="232" y2="135" stroke="var(--color-borda)" />
        <line x1="20" y1="10" x2="20" y2="135" stroke="var(--color-borda)" />
        <polygon points={`${X(10)},${Y(a * 10 + b + 2 * sigma)} ${X(170)},${Y(a * 170 + b + 2 * sigma)} ${X(170)},${Y(a * 170 + b - 2 * sigma)} ${X(10)},${Y(a * 10 + b - 2 * sigma)}`} fill="var(--color-azul)" fillOpacity="0.12" />
        <line x1={X(10)} y1={Y(a * 10 + b)} x2={X(170)} y2={Y(a * 170 + b)} stroke="var(--color-azul)" strokeWidth="2" />
        {casas.map((p) => <circle key={p.x} cx={X(p.x)} cy={Y(p.y)} r="3" fill="var(--color-texto)" />)}
        <line x1={X(area)} y1="10" x2={X(area)} y2="135" stroke="var(--color-coral)" strokeDasharray="3 3" />
        <circle cx={X(area)} cy={Y(prev)} r="5" fill="var(--color-coral)" />
      </svg>
      <div className="mt-3"><Deslizante rotulo="Área do apartamento (m²)" valor={area} min={20} max={160} passo={1} aoMudar={setArea} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Previsão: cerca de <strong>{Math.round(prev)} mil reais</strong>. Faixa provável: de {Math.round(prev - 2 * sigma)} a {Math.round(prev + 2 * sigma)} mil.
        {fora ? ' Atenção: esta área está fora dos dados que a reta viu (30 a 120 m²). É uma extrapolação, e a faixa de erro real pode ser maior que a mostrada.' : ' Está dentro da região dos dados: é uma interpolação, mais confiável.'}
      </p>
    </div>
  )
}
