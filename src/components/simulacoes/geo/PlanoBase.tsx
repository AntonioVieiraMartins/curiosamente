import type { ReactNode } from 'react'
import { C, E } from './coords'

const marcas = Array.from({ length: 21 }, (_, i) => i - 10)

// Quadriculado com eixos x e y; o desenho de cada simulação entra como filho
export default function PlanoBase({ aria, children }: { aria: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 200" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={aria}>
      {marcas.map((k) => (
        <g key={k}>
          <line x1={C + k * E} y1={0} x2={C + k * E} y2={200} stroke="var(--color-borda)" strokeWidth="0.6" />
          <line x1={0} y1={C + k * E} x2={200} y2={C + k * E} stroke="var(--color-borda)" strokeWidth="0.6" />
        </g>
      ))}
      <line x1={0} y1={C} x2={200} y2={C} stroke="var(--color-texto)" strokeOpacity="0.7" strokeWidth="1.2" />
      <line x1={C} y1={0} x2={C} y2={200} stroke="var(--color-texto)" strokeOpacity="0.7" strokeWidth="1.2" />
      {children}
    </svg>
  )
}
