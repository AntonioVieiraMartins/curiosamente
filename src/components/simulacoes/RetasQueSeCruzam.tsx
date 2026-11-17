import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const C = 130
const rad = (g: number) => (g * Math.PI) / 180
const pos = (g: number, r: number) => ({ x: C + r * Math.cos(rad(g)), y: C - r * Math.sin(rad(g)) })

// Duas retas que se cruzam formam quatro ângulos: os opostos são iguais, e os vizinhos somam 180°.
export default function RetasQueSeCruzam() {
  const [a, setA] = useState(60)
  const id = useId()
  const b = 180 - a
  const rotulos = [
    { g: a / 2, v: a, cor: 'var(--color-coral)' },
    { g: (a + 180) / 2, v: b, cor: 'var(--color-azul-texto)' },
    { g: 180 + a / 2, v: a, cor: 'var(--color-coral)' },
    { g: (180 + a + 360) / 2, v: b, cor: 'var(--color-azul-texto)' },
  ]
  const p1 = pos(a, 110)
  const p2 = pos(a + 180, 110)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Duas retas se cruzando</p>

      <svg viewBox="0 0 260 260" className="mx-auto mt-3 w-full max-w-xs" aria-hidden="true">
        <line x1={C - 115} y1={C} x2={C + 115} y2={C} stroke="var(--color-texto)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="var(--color-texto)" strokeWidth="2.5" strokeLinecap="round" />
        {rotulos.map((r, i) => {
          const p = pos(r.g, 50)
          return <text key={i} x={p.x} y={p.y + 4} textAnchor="middle" fontSize="14" fontWeight="700" fill={r.cor}>{r.v}°</text>
        })}
      </svg>

      <label htmlFor={id} className="mt-2 block font-semibold">Ângulo: <span className="text-coral">{a}°</span></label>
      <input id={id} type="range" min={10} max={170} value={a} onChange={(e) => setA(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <div aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
        <p>Opostos pelo vértice: os dois de {a}° são <strong>iguais</strong>.</p>
        <p>Vizinhos: {a}° + {b}° = <strong>180°</strong> (suplementares).</p>
        <p>{a < 90 ? <>Complemento de {a}°: 90° − {a}° = <strong>{90 - a}°</strong>.</> : a === 90 ? 'Ângulos retos: cada vizinho também vale 90°.' : 'Acima de 90° não existe complemento.'}</p>
      </div>
    </div>
  )
}
