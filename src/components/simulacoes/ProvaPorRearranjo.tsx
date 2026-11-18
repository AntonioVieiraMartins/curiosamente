import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const S = 10 // lado do quadrado grande = a + b
const U = 28 // pixels por unidade

// Mesmo quadrado grande, mesmos 4 triângulos: o que sobra em branco muda de forma, mas a área não muda.
export default function ProvaPorRearranjo() {
  const [a, setA] = useState(3)
  const [forma, setForma] = useState<'c' | 'ab'>('c')
  const id = useId()
  const b = S - a
  const p = (x: number, y: number) => `${x * U},${y * U}`
  const poly = (...pts: [number, number][]) => pts.map(([x, y]) => p(x, y)).join(' ')
  const tri = { fill: 'var(--color-amarelo)', stroke: 'var(--color-texto)', strokeWidth: 1 }
  const sq = (v: string) => ({ fill: `var(--color-${v})`, fillOpacity: 0.35, stroke: 'var(--color-texto)', strokeWidth: 1 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Prova por rearranjo</p>
      <svg viewBox={`-4 -4 ${S * U + 8} ${S * U + 8}`} className="mx-auto mt-2 w-full max-w-xs" role="img"
        aria-label={forma === 'c' ? 'Quadrado grande com quatro triângulos nos cantos e um quadrado inclinado no meio' : 'Quadrado grande com dois quadrados menores e quatro triângulos'}>
        {forma === 'c' ? (
          <>
            <polygon points={poly([a, 0], [S, a], [S - a, S], [0, S - a])} style={sq('coral')} />
            <polygon points={poly([0, 0], [a, 0], [0, S - a])} style={tri} />
            <polygon points={poly([a, 0], [S, 0], [S, a])} style={tri} />
            <polygon points={poly([S, a], [S, S], [S - a, S])} style={tri} />
            <polygon points={poly([0, S - a], [S - a, S], [0, S])} style={tri} />
            <text x={(S / 2) * U} y={(S / 2) * U + 5} textAnchor="middle" fontSize="16" fill="var(--color-texto)">c²</text>
          </>
        ) : (
          <>
            <polygon points={poly([0, 0], [a, 0], [a, a], [0, a])} style={sq('azul')} />
            <polygon points={poly([a, a], [S, a], [S, S], [a, S])} style={sq('verde')} />
            <polygon points={poly([a, 0], [S, 0], [S, a])} style={tri} />
            <polygon points={poly([a, 0], [a, a], [S, a])} style={tri} />
            <polygon points={poly([0, a], [a, a], [0, S])} style={tri} />
            <polygon points={poly([a, a], [a, S], [0, S])} style={tri} />
            <text x={(a / 2) * U} y={(a / 2) * U + 5} textAnchor="middle" fontSize="16" fill="var(--color-texto)">a²</text>
            <text x={(a + b / 2) * U} y={(a + b / 2) * U + 5} textAnchor="middle" fontSize="16" fill="var(--color-texto)">b²</text>
          </>
        )}
      </svg>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button type="button" aria-pressed={forma === 'c'} onClick={() => setForma('c')} className={`min-h-11 rounded-full border-2 font-semibold ${forma === 'c' ? 'border-coral bg-coral text-white' : 'border-borda'}`}>Arranjo 1: c²</button>
        <button type="button" aria-pressed={forma === 'ab'} onClick={() => setForma('ab')} className={`min-h-11 rounded-full border-2 font-semibold ${forma === 'ab' ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Arranjo 2: a² + b²</button>
      </div>
      <label htmlFor={id} className="mt-2 block font-semibold">Cateto menor a: {a} (o outro, b, vale {b})</label>
      <input id={id} type="range" min={1} max={4} value={Math.min(a, 4)} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        O quadrado grande tem lado a + b = {S} e área {S * S}. Os 4 triângulos juntos têm área 2·a·b = {2 * a * b}. Sobra: <strong>{S * S - 2 * a * b}</strong> = {a}² + {b}² = c².
      </p>
    </div>
  )
}
