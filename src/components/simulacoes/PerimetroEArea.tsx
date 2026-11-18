import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Perímetro = a volta (cerca); área = o que cobre o chão (quadradinhos). Mesma cerca, áreas diferentes
export default function PerimetroEArea() {
  const [larg, setLarg] = useState(6)
  const [alt, setAlt] = useState(3)
  const idl = useId(), ida = useId()
  const q = 24
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Perímetro e área</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idl} className="text-[15px]">Largura: <b>{larg} m</b>
          <input id={idl} type="range" min={1} max={10} value={larg} onChange={(e) => setLarg(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={ida} className="text-[15px]">Altura: <b>{alt} m</b>
          <input id={ida} type="range" min={1} max={8} value={alt} onChange={(e) => setAlt(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-2 overflow-x-auto rounded-2xl bg-fundo p-3">
        <svg viewBox={`0 0 ${10 * q + 8} ${8 * q + 8}`} role="img" aria-label={`Retângulo de ${larg} por ${alt} metros`} className="mx-auto h-auto w-full max-w-[280px]">
          {Array.from({ length: larg * alt }, (_, k) => (
            <rect key={k} x={4 + (k % larg) * q} y={4 + Math.floor(k / larg) * q} width={q} height={q} fill="var(--color-azul-claro)" stroke="var(--color-azul)" strokeWidth={0.8} />
          ))}
          <rect x={4} y={4} width={larg * q} height={alt * q} fill="none" stroke="var(--color-coral)" strokeWidth={3} />
        </svg>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Perímetro (a cerca, em vermelho): 2 × ({larg} + {alt}) = <b>{2 * (larg + alt)} m</b>.<br />
        Área (os quadradinhos de 1 m², em azul): {larg} × {alt} = <b>{larg * alt} m²</b>.
      </p>
    </div>
  )
}
