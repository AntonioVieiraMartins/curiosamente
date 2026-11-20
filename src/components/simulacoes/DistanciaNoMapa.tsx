import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoBase from './geo/PlanoBase'
import { num, px, py } from './geo/coords'

// Cada quadradinho do mapa vale 1 km; a distância em linha reta vem das coordenadas
const LUGARES = [
  { nome: 'Casa', x: -6, y: -3 },
  { nome: 'Escola', x: 2, y: 3 },
  { nome: 'Mercado', x: 5, y: -5 },
  { nome: 'Parque', x: -3, y: 6 },
  { nome: 'Hospital', x: 7, y: 1 },
]

export default function DistanciaNoMapa() {
  const idA = useId()
  const idB = useId()
  const [de, setDe] = useState(0)
  const [para, setPara] = useState(1)
  const A = LUGARES[de]
  const B = LUGARES[para]
  const dx = Math.abs(B.x - A.x)
  const dy = Math.abs(B.y - A.y)
  const reta = Math.hypot(dx, dy)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O mapa da cidade (1 quadradinho = 1 km)</p>
      <PlanoBase aria={`Mapa com ${LUGARES.map((l) => `${l.nome} em (${l.x}, ${l.y})`).join(', ')}`}>
        <polyline points={`${px(A.x)},${py(A.y)} ${px(B.x)},${py(A.y)} ${px(B.x)},${py(B.y)}`} fill="none" stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        <line x1={px(A.x)} y1={py(A.y)} x2={px(B.x)} y2={py(B.y)} stroke="var(--color-coral)" strokeWidth="3" />
        {LUGARES.map((l, i) => (
          <g key={l.nome}>
            <circle cx={px(l.x)} cy={py(l.y)} r="4.5" fill={i === de || i === para ? 'var(--color-coral)' : 'var(--color-texto)'} />
            <text x={px(l.x) + 6} y={py(l.y) - 5} fontSize="8" fontWeight="700" fill="var(--color-texto)">{l.nome}</text>
          </g>
        ))}
      </PlanoBase>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label htmlFor={idA} className="block text-sm font-semibold">
          Sair de
          <select id={idA} value={de} onChange={(e) => setDe(Number(e.target.value))} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-superficie px-2">
            {LUGARES.map((l, i) => <option key={l.nome} value={i}>{l.nome}</option>)}
          </select>
        </label>
        <label htmlFor={idB} className="block text-sm font-semibold">
          Ir para
          <select id={idB} value={para} onChange={(e) => setPara(Number(e.target.value))} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-superficie px-2">
            {LUGARES.map((l, i) => <option key={l.nome} value={i}>{l.nome}</option>)}
          </select>
        </label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {de === para
          ? 'Você já está lá: distância 0.'
          : <>{A.nome} ({A.x}; {A.y}) → {B.nome} ({B.x}; {B.y}). Linha reta: √({dx}² + {dy}²) ≈ <strong>{num(reta)} km</strong>. Pelas ruas (só reto e esquina): {dx} + {dy} = {dx + dy} km.</>}
      </p>
    </div>
  )
}
