import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'
import { mmc } from '../../lib/fracoes'

const rad = (g: number) => (g * Math.PI) / 180

function Roda({ dentes, cor }: { dentes: number; cor: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full max-w-[140px]" aria-hidden="true">
      <circle cx="60" cy="60" r="38" fill={cor} fillOpacity="0.2" stroke={cor} strokeWidth="2" />
      {Array.from({ length: dentes }, (_, i) => {
        const g = (i * 360) / dentes - 90
        return <line key={i} x1={60 + 38 * Math.cos(rad(g))} y1={60 + 38 * Math.sin(rad(g))} x2={60 + 50 * Math.cos(rad(g))} y2={60 + 50 * Math.sin(rad(g))} stroke={cor} strokeWidth={i === 0 ? 5 : 3} strokeLinecap="round" />
      })}
      <text x="60" y="65" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--color-texto)">{dentes}</text>
    </svg>
  )
}

// Duas engrenagens que se encaixam voltam à posição de partida depois de MMC dentes passarem
export default function EngrenagensMMC() {
  const [a, setA] = useState(12)
  const [b, setB] = useState(18)
  const total = mmc(a, b)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Duas engrenagens</p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-2">
          <Roda dentes={a} cor="var(--color-coral)" />
          <Contador grupo="Roda vermelha" rotulo="Dentes" valor={a} min={4} max={20} mudar={setA} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Roda dentes={b} cor="var(--color-azul)" />
          <Contador grupo="Roda azul" rotulo="Dentes" valor={b} min={4} max={20} mudar={setB} />
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        O dente marcado (traço grosso) das duas rodas volta a se encontrar depois que <strong>{total}</strong> dentes passam, o MMC de {a} e {b}.
        A vermelha dá <strong className="text-coral">{total / a}</strong> {total / a === 1 ? 'volta' : 'voltas'} e a azul dá <strong className="text-azul-texto">{total / b}</strong>.
      </p>
    </div>
  )
}
