import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const U = 12

// Duas cópias do trapézio, uma de cabeça para baixo, formam um retângulo de base B + b
export default function TrapezioDobrado() {
  const iB = useId()
  const ib = useId()
  const ih = useId()
  const [B, setB] = useState(8)
  const [b, setb] = useState(4)
  const [h, setH] = useState(4)
  const [junto, setJunto] = useState(false)
  const bb = Math.min(b, B)
  const x0 = 10
  const y0 = 10
  const t1 = `${x0},${y0 + h * U} ${x0 + B * U},${y0 + h * U} ${x0 + bb * U},${y0} ${x0},${y0}`
  const t2 = `${x0 + (B + bb) * U},${y0} ${x0 + bb * U},${y0} ${x0 + B * U},${y0 + h * U} ${x0 + (B + bb) * U},${y0 + h * U}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Trapézio: junte duas cópias</p>
      <svg viewBox="0 0 270 100" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Trapézio de bases ${B} e ${bb} e altura ${h}`}>
        <polygon points={t1} fill="var(--color-azul)" fillOpacity="0.4" stroke="var(--color-azul)" strokeWidth="2" />
        {junto && <polygon points={t2} fill="var(--color-coral)" fillOpacity="0.4" stroke="var(--color-coral)" strokeWidth="2" />}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label htmlFor={iB} className="text-sm font-semibold">Base maior: {B}<input id={iB} type="range" min={3} max={10} value={B} onChange={(e) => setB(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={ib} className="text-sm font-semibold">Base menor: {bb}<input id={ib} type="range" min={1} max={10} value={bb} onChange={(e) => setb(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={ih} className="text-sm font-semibold">Altura: {h}<input id={ih} type="range" min={2} max={6} value={h} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <button type="button" onClick={() => setJunto((v) => !v)} className="mt-3 min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">{junto ? 'Tirar a cópia' : 'Juntar uma cópia de cabeça para baixo'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {junto
          ? `Com a cópia, formou-se um retângulo de base ${B} + ${bb} = ${B + bb} e altura ${h}: área ${(B + bb) * h}. O trapézio é a metade: ${((B + bb) * h) / 2}.`
          : `Área = (${B} + ${bb}) × ${h} ÷ 2 = ${((B + bb) * h) / 2}. Toque no botão para ver por quê.`}
      </p>
    </div>
  )
}
