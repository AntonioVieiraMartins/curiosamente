import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma tartaruga anda pelo contorno e vira um pouco em cada vértice: no fim, deu uma volta completa (360°).
export default function TartarugaDaVolta() {
  const [n, setN] = useState(6)
  const [k, setK] = useState(2)
  const id = useId()
  const id2 = useId()
  const passo = Math.min(k, n)
  const ext = 360 / n
  const pts = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n
    return [110 + 80 * Math.cos(a), 100 + 80 * Math.sin(a)]
  })
  const percorrido = pts.slice(0, passo + 1)
  const tartaruga = pts[passo % n]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A tartaruga que dá a volta</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Lados do polígono regular: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={3} max={12} step={1} value={n} onChange={(e) => { setN(Number(e.target.value)); setK(0) }}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={id2} className="block font-semibold">Lados percorridos: <span className="text-azul">{passo}</span></label>
      <input id={id2} type="range" min={0} max={n} step={1} value={passo} onChange={(e) => setK(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <svg viewBox="0 0 220 200" className="mt-2 w-full max-w-xs" role="img" aria-label={`Tartaruga no vértice ${passo} de um polígono de ${n} lados`}>
        <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="var(--color-borda)" strokeWidth="3" strokeLinejoin="round" />
        {percorrido.length > 1 && <polyline points={percorrido.map((p) => p.join(',')).join(' ')} fill="none" stroke="var(--color-azul)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />}
        <circle cx={tartaruga[0]} cy={tartaruga[1]} r="8" fill="var(--color-verde)" />
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Em cada vértice a tartaruga vira 360° ÷ {n} = <strong>{ext.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}°</strong> (ângulo externo). Depois de {passo} {passo === 1 ? 'lado' : 'lados'}, já virou <strong>{(passo * ext).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}°</strong>.
        O ângulo de dentro é 180° − {ext.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}° = <strong>{(180 - ext).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}°</strong>.
      </p>
    </div>
  )
}
