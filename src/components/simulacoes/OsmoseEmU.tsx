import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Tubo em U: água pura de um lado, água com sal do outro, e uma membrana que só deixa a água passar
export default function OsmoseEmU() {
  const [sal, setSal] = useState(4)
  // No equilíbrio o lado do sal sobe e o outro desce
  const sobe = sal * 3
  const nivelSal = 60 - sobe
  const nivelPuro = 60 + sobe
  const pontosSal = Array.from({ length: sal }, (_, i) => ({ x: 128 + (i % 4) * 12, y: nivelSal + 14 + Math.floor(i / 4) * 14 }))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Osmose num tubo em U</p>
      <svg viewBox="0 0 240 170" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Tubo em U com água pura à esquerda e água salgada à direita, separadas por uma membrana">
        <rect x={50} y={20} width={60} height={130} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={120} y={20} width={60} height={130} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={52} y={nivelPuro} width={56} height={148 - nivelPuro} fill="var(--color-azul)" fillOpacity="0.35" />
        <rect x={122} y={nivelSal} width={56} height={148 - nivelSal} fill="var(--color-azul)" fillOpacity="0.55" />
        <line x1={115} y1={20} x2={115} y2={150} stroke="var(--color-coral)" strokeWidth="3" strokeDasharray="5 3" />
        {pontosSal.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="var(--color-amarelo)" stroke="var(--color-texto)" strokeWidth="0.5" />)}
        <text x={80} y={12} textAnchor="middle" fontSize="10" fill="var(--color-texto)">água pura</text>
        <text x={150} y={12} textAnchor="middle" fontSize="10" fill="var(--color-texto)">água com sal</text>
        <text x={115} y={164} textAnchor="middle" fontSize="9" fill="var(--color-coral)">membrana: só a água passa</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Sal do lado direito" valor={sal} min={0} max={10} passo={1} aoMudar={setSal} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {sal === 0
          ? 'Sem sal nos dois lados, nada muda: a água passa nos dois sentidos na mesma medida.'
          : 'O sal não atravessa a membrana, então a água é que vai até ele. Ela passa do lado puro para o lado salgado, e o nível do lado salgado sobe. Quanto mais sal, maior a diferença entre os dois níveis.'}
      </p>
    </div>
  )
}
