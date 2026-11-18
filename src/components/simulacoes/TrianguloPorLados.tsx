import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Triângulo pelos três lados: existe só se o maior lado for menor que a soma dos outros dois
export default function TrianguloPorLados() {
  const [a, setA] = useState(5)
  const [b, setB] = useState(5)
  const [c, setC] = useState(5)
  const ids = [useId(), useId(), useId()]
  const [x, y, z] = [a, b, c].sort((p, q) => p - q) // z é o maior
  const existe = x + y > z
  const tipo = a === b && b === c ? 'equilátero (3 lados iguais)' : a === b || b === c || a === c ? 'isósceles (2 lados iguais)' : 'escaleno (3 lados diferentes)'
  // Posição do terceiro vértice pela lei dos cossenos (base = c)
  const cosA = (b * b + c * c - a * a) / (2 * b * c)
  const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA))
  const esc = 150 / Math.max(a, b, c, 1)
  const P: [number, number][] = [[30, 150], [30 + c * esc, 150], [30 + b * cosA * esc, 150 - b * sinA * esc]]
  const campo = (id: string, rot: string, v: number, set: (n: number) => void) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{v}</b>
      <input id={id} type="range" min={1} max={10} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Será que fecha um triângulo?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {campo(ids[0], 'Lado a', a, setA)}
        {campo(ids[1], 'Lado b', b, setB)}
        {campo(ids[2], 'Lado c', c, setC)}
      </div>
      <svg viewBox="0 0 220 170" role="img" aria-label={existe ? `Triângulo ${tipo}` : 'Os lados não fecham um triângulo'} className="mx-auto mt-2 h-auto w-full max-w-[260px]">
        {existe
          ? <polygon points={P.map((p) => p.join(',')).join(' ')} fill="var(--color-azul-claro)" stroke="var(--color-azul)" strokeWidth={3} strokeLinejoin="round" />
          : <line x1={30} y1={150} x2={30 + z * esc} y2={150} stroke="var(--color-coral)" strokeWidth={4} strokeDasharray="6 4" />}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {existe
          ? <>Lados {a}, {b} e {c}: é um triângulo <b>{tipo}</b>. O maior lado ({z}) é menor que a soma dos outros dois ({x} + {y} = {x + y}).</>
          : <>Lados {a}, {b} e {c}: <b>não fecha!</b> O maior lado ({z}) não é menor que a soma dos outros dois ({x} + {y} = {x + y}), então as pontas não se encontram.</>}
      </p>
    </div>
  )
}
