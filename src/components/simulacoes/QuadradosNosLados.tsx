import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const U = 9 // pixels por unidade

// Triângulo retângulo com um quadrado em cada lado: a área do quadrado maior é a soma das outras duas.
export default function QuadradosNosLados() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const ia = useId()
  const ib = useId()
  const c2 = a * a + b * b
  const c = Math.sqrt(c2)
  const pt = (x: number, y: number) => `${x * U},${y * U}`
  // C = (0,0) é o ângulo reto; B à direita, A para cima (y do SVG cresce para baixo)
  const quadA = [pt(0, 0), pt(a, 0), pt(a, a), pt(0, a)] // sobre o cateto horizontal (para baixo)
  const quadB = [pt(0, 0), pt(0, -b), pt(-b, -b), pt(-b, 0)] // sobre o cateto vertical (para a esquerda)
  const quadC = [pt(a, 0), pt(0, -b), pt(b, -b - a), pt(a + b, -a)] // sobre a hipotenusa (para fora)
  const tri = [pt(0, 0), pt(a, 0), pt(0, -b)]
  const cor = (v: string, op: number) => ({ fill: `var(--color-${v})`, fillOpacity: op, stroke: `var(--color-${v})` })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um quadrado em cada lado</p>
      <svg viewBox="-115 -222 340 340" className="mx-auto mt-2 w-full max-w-sm" role="img"
        aria-label={`Triângulo retângulo de catetos ${a} e ${b}, com um quadrado sobre cada lado.`}>
        <polygon points={quadA.join(' ')} style={cor('azul', 0.3)} />
        <polygon points={quadB.join(' ')} style={cor('verde', 0.3)} />
        <polygon points={quadC.join(' ')} style={cor('coral', 0.3)} />
        <polygon points={tri.join(' ')} style={{ fill: 'var(--color-amarelo)', stroke: 'var(--color-texto)' }} />
        <text x={(a / 2) * U} y={(a / 2) * U + 4} textAnchor="middle" fontSize="13" fill="var(--color-texto)">{a * a}</text>
        <text x={(-b / 2) * U} y={(-b / 2) * U + 4} textAnchor="middle" fontSize="13" fill="var(--color-texto)">{b * b}</text>
        <text x={((a + b) / 2) * U} y={(-(a + b) / 2) * U + 4} textAnchor="middle" fontSize="13" fill="var(--color-texto)">{c2}</text>
      </svg>
      <label htmlFor={ia} className="block font-semibold">Cateto a: <span className="text-azul">{a}</span></label>
      <input id={ia} type="range" min={1} max={12} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={ib} className="block font-semibold">Cateto b: <span className="text-verde">{b}</span></label>
      <input id={ib} type="range" min={1} max={12} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {a}² + {b}² = {a * a} + {b * b} = <strong>{c2}</strong>. A hipotenusa vale c = √{c2} ≈ <strong className="text-coral">{c.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</strong>, e c² = {c2}.
      </p>
    </div>
  )
}
