import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

type Modo = 'direta' | 'inversa'
const MAX = 12

// Dois tipos de "proporcional": quando um dobra, o outro dobra (direta) ou cai pela metade (inversa)
const modos = {
  direta: {
    titulo: 'Quilos de tomate × preço',
    x: 'quilos',
    y: (x: number) => 4 * x, // R$ 4 o quilo
    yTexto: (v: number) => `R$ ${v}`,
    regra: 'Preço ÷ quilos é sempre 4 (o preço do quilo).',
  },
  inversa: {
    titulo: 'Pintores × dias para pintar a casa',
    x: 'pintores',
    y: (x: number) => 24 / x, // 24 "dias de pintor" de trabalho
    yTexto: (v: number) => `${v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} dias`,
    regra: 'Pintores × dias é sempre 24 (o trabalho total).',
  },
}

export default function DiretaOuInversa() {
  const [modo, setModo] = useState<Modo>('direta')
  const [x, setX] = useState(2)
  const id = useId()
  const m = modos[modo]
  const maiorY = modo === 'direta' ? 4 * MAX : 24

  const L = 300
  const A = 140
  const px = (v: number) => (v / MAX) * (L - 10) + 5
  const py = (v: number) => A - (v / maiorY) * (A - 10) - 5
  const pontos = Array.from({ length: MAX }, (_, i) => i + 1)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <div className="flex gap-2" role="group" aria-label="Tipo de proporção">
        {(['direta', 'inversa'] as const).map((md) => (
          <button key={md} type="button" aria-pressed={modo === md} onClick={() => setModo(md)}
            className={`min-h-11 flex-1 rounded-full border-2 font-semibold ${modo === md ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}>
            {md === 'direta' ? 'Direta' : 'Inversa'}
          </button>
        ))}
      </div>

      <p className="mt-4 font-semibold">{m.titulo}</p>
      <label htmlFor={id} className="mt-2 block text-[15px]">
        {m.x}: <strong className="text-coral">{x}</strong>
      </label>
      <input id={id} type="range" min={1} max={MAX} value={x} onChange={(e) => setX(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <svg viewBox={`0 0 ${L} ${A}`} className="mx-auto mt-2 w-full max-w-md" aria-hidden="true">
        <line x1="5" y1={A - 5} x2={L} y2={A - 5} stroke="var(--color-borda)" />
        <line x1="5" y1="0" x2="5" y2={A - 5} stroke="var(--color-borda)" />
        <polyline points={pontos.map((p) => `${px(p)},${py(m.y(p))}`).join(' ')} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        {pontos.map((p) => (
          <circle key={p} cx={px(p)} cy={py(m.y(p))} r={p === x ? 7 : 3} fill={p === x ? 'var(--color-coral)' : 'var(--color-azul)'} />
        ))}
      </svg>

      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        <p>
          {x} {m.x} → <strong>{m.yTexto(m.y(x))}</strong>. Com o dobro ({2 * x} {m.x}):{' '}
          <strong>{2 * x <= MAX ? m.yTexto(m.y(2 * x)) : '…'}</strong>.
        </p>
        <p className="mt-1 text-[15px] text-suave">{m.regra}</p>
      </div>
    </div>
  )
}
