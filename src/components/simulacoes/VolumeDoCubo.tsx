import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 3 })

// Volume de um cubo: lado × lado × lado. Cubo de 10 cm = 1.000 cm³ = 1 litro.
export default function VolumeDoCubo() {
  const [lado, setLado] = useState(10)
  const v = lado ** 3
  const t = (lado / 20) * 70

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cubo, centímetros cúbicos e litros</p>
      <svg viewBox="0 0 200 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Cubo de ${lado} cm de lado`}>
        <g transform={`translate(${100 - t * 0.85},${105 - t * 1.2})`}>
          <rect x={0} y={t * 0.35} width={t} height={t} fill="var(--color-azul)" fillOpacity="0.3" stroke="var(--color-azul)" strokeWidth="2" />
          <polygon points={`0,${t * 0.35} ${t * 0.35},0 ${t * 1.35},0 ${t},${t * 0.35}`} fill="var(--color-azul)" fillOpacity="0.5" stroke="var(--color-azul)" strokeWidth="2" />
          <polygon points={`${t},${t * 0.35} ${t * 1.35},0 ${t * 1.35},${t} ${t},${t * 1.35}`} fill="var(--color-azul)" fillOpacity="0.2" stroke="var(--color-azul)" strokeWidth="2" />
        </g>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Lado do cubo (cm)" valor={lado} min={1} max={20} aoMudar={setLado} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {lado} × {lado} × {lado} = <strong>{br(v)} cm³</strong> = {br(v)} mL = <strong>{br(v / 1000)} L</strong>.
        {lado === 10 ? ' Um cubo de 10 cm de lado é exatamente 1 litro.' : ' Tente 10 cm: dá 1 litro.'}
      </p>
    </div>
  )
}
