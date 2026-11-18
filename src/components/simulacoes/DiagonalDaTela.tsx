import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const fmt = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

// A "polegada" de uma TV é a diagonal da tela: a hipotenusa do retângulo. 1 polegada = 2,54 cm.
export default function DiagonalDaTela() {
  const [larg, setLarg] = useState(122)
  const [alt, setAlt] = useState(69)
  const i1 = useId()
  const i2 = useId()
  const diag = Math.sqrt(larg * larg + alt * alt)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas polegadas tem a tela?</p>
      <div className="mt-3 flex justify-center" aria-hidden="true">
        <div className="relative rounded border-2 border-texto bg-fundo" style={{ width: `${larg * 1.6}px`, maxWidth: '100%', aspectRatio: `${larg} / ${alt}` }}>
          <svg viewBox={`0 0 ${larg} ${alt}`} className="absolute inset-0 size-full" preserveAspectRatio="none">
            <line x1={0} y1={alt} x2={larg} y2={0} stroke="var(--color-coral)" strokeWidth={Math.max(larg, alt) / 50} />
          </svg>
        </div>
      </div>
      <label htmlFor={i1} className="mt-3 block font-semibold">Largura: <span className="text-azul">{larg} cm</span></label>
      <input id={i1} type="range" min={40} max={200} value={larg} onChange={(e) => setLarg(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={i2} className="block font-semibold">Altura: <span className="text-verde">{alt} cm</span></label>
      <input id={i2} type="range" min={25} max={120} value={alt} onChange={(e) => setAlt(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Diagonal = √({larg}² + {alt}²) = √{(larg * larg + alt * alt).toLocaleString('pt-BR')} ≈ <strong>{fmt(diag)} cm</strong> ≈ <strong className="text-coral">{fmt(diag / 2.54)} polegadas</strong>.
      </p>
    </div>
  )
}
