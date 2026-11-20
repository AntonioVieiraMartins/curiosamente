import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const F = 4 // distância focal da lupa, em cm
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Lente convergente: 1/f = 1/p + 1/p'. Objeto entre a lente e o foco dá imagem virtual e maior (lupa)
export default function LenteConvexa() {
  const [p, setP] = useState(3)
  const igual = p === F
  const q = igual ? Infinity : (p * F) / (p - F) // posição da imagem (negativa = virtual)
  const m = igual ? Infinity : -q / p
  const virtual = !igual && p < F
  const tipo = igual ? 'Os raios saem paralelos: não se forma imagem.' : virtual ? 'Imagem virtual, direita e MAIOR: é assim que a lupa funciona.' : 'Imagem real e invertida (de cabeça para baixo).'
  const x = (cm: number) => 100 + cm * 7

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lente convexa (foco de {F} cm)</p>
      <svg viewBox="0 0 200 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Objeto a ${p} cm da lente`}>
        <line x1={0} y1={45} x2={200} y2={45} stroke="var(--color-borda)" />
        <ellipse cx={100} cy={45} rx={5} ry={32} fill="var(--color-azul)" fillOpacity="0.3" stroke="var(--color-azul)" strokeWidth="2" />
        <circle cx={x(-F)} cy={45} r="2" fill="var(--color-texto)" /><circle cx={x(F)} cy={45} r="2" fill="var(--color-texto)" />
        <text x={x(-F)} y={60} textAnchor="middle" fontSize="6">foco</text><text x={x(F)} y={60} textAnchor="middle" fontSize="6">foco</text>
        <line x1={x(-p)} y1={45} x2={x(-p)} y2={25} stroke="var(--color-coral)" strokeWidth="3" />
        <text x={x(-p)} y={20} textAnchor="middle" fontSize="6" fill="var(--color-coral)">objeto</text>
        {!igual && Math.abs(q) < 13 && <line x1={x(virtual ? -Math.abs(q) : q)} y1={45} x2={x(virtual ? -Math.abs(q) : q)} y2={45 - Math.max(-40, Math.min(40, 20 * m))} stroke="var(--color-verde)" strokeWidth="3" strokeDasharray={virtual ? '3 2' : undefined} />}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Distância do objeto à lente (cm)" valor={p} min={1} max={12} aoMudar={setP} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {igual ? tipo : <>Imagem a {br(Math.abs(q))} cm da lente, {virtual ? 'do mesmo lado do objeto' : 'do lado oposto'}. Aumento: {br(Math.abs(m))}×. {tipo}</>}
      </p>
    </div>
  )
}
