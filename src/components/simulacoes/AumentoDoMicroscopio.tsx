import { useState } from 'react'
import { cartao } from '../ui/estilos'

const OCULARES = [10, 15]
const OBJETIVAS = [4, 10, 40, 100]
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Aumento total = ocular × objetiva. O campo de visão encolhe quando o aumento cresce (número de campo de 18 mm na ocular de 10×)
export default function AumentoDoMicroscopio() {
  const [o, setO] = useState(10)
  const [obj, setObj] = useState(40)
  const total = o * obj
  const campo = 18 / obj // mm, aproximado
  const raio = 14 + 40 * (campo / 4.5)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Aumento do microscópio</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div role="group" aria-label="Ocular" className="flex flex-wrap items-center gap-2"><span className="text-sm font-semibold">Ocular:</span>
          {OCULARES.map((x) => <button key={x} type="button" aria-pressed={x === o} onClick={() => setO(x)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${x === o ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x}×</button>)}
        </div>
        <div role="group" aria-label="Objetiva" className="flex flex-wrap items-center gap-2"><span className="text-sm font-semibold">Objetiva:</span>
          {OBJETIVAS.map((x) => <button key={x} type="button" aria-pressed={x === obj} onClick={() => setObj(x)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${x === obj ? 'border-coral bg-coral text-white' : 'border-borda'}`}>{x}×</button>)}
        </div>
      </div>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Aumento de ${total} vezes, campo de visão de ${br(campo)} mm`}>
        <rect x={20} y={5} width={160} height={100} fill="var(--color-verde)" fillOpacity="0.1" stroke="var(--color-borda)" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <circle key={i} cx={40 + (i % 4) * 40} cy={30 + Math.floor(i / 4) * 45} r={7} fill="var(--color-verde)" fillOpacity="0.35" stroke="var(--color-verde)" />)}
        <circle cx={100} cy={55} r={raio} fill="none" stroke="var(--color-coral)" strokeWidth="2.5" />
        <text x={100} y={102} textAnchor="middle" fontSize="7" fill="var(--color-texto)">círculo coral = o que cabe no campo de visão</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Aumento total: {o} × {obj} = <strong>{total}×</strong>. Campo de visão: cerca de {br(campo)} mm. Quanto maior o aumento, menor a região que você enxerga.
      </p>
    </div>
  )
}
