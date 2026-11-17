import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const rad = (g: number) => (g * Math.PI) / 180

// Escolha dois ângulos: o terceiro é o que falta para 180°, e o triângulo muda de forma.
export default function SomaDoTriangulo() {
  const [a, setA] = useState(50)
  const [b, setB] = useState(60)
  const idA = useId()
  const idB = useId()
  const limiteB = Math.min(120, 170 - a)
  const bb = Math.min(b, limiteB)
  const c = 180 - a - bb

  // Base AB sobre o eixo x; o vértice C vem do encontro das duas retas inclinadas
  const ta = Math.tan(rad(a))
  const tb = Math.tan(rad(bb))
  const cx = (100 * tb) / (ta + tb)
  const cy = cx * ta
  const xs = [0, 100, cx]
  const largura = Math.max(...xs) - Math.min(...xs)
  const escala = Math.min(240 / largura, 180 / cy)
  const ox = 30 - Math.min(...xs) * escala
  const P = (x: number, y: number) => `${ox + x * escala},${210 - y * escala}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os três ângulos de um triângulo</p>

      <svg viewBox="0 0 300 230" className="mx-auto mt-3 w-full max-w-sm" aria-hidden="true">
        <polygon points={`${P(0, 0)} ${P(100, 0)} ${P(cx, cy)}`} fill="var(--color-azul)" fillOpacity="0.18" stroke="var(--color-azul)" strokeWidth="2.5" strokeLinejoin="round" />
        <text x={ox + (0 + 6) * escala} y={204} fontSize="13" fontWeight="700" fill="var(--color-coral)">{a}°</text>
        <text x={ox + 100 * escala - 38} y={204} fontSize="13" fontWeight="700" fill="var(--color-coral)">{bb}°</text>
        <text x={ox + cx * escala - 14} y={210 - cy * escala + 28} fontSize="13" fontWeight="700" fill="var(--color-verde)">{c}°</text>
      </svg>

      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={idA} className="block font-semibold">Ângulo A: <span className="text-coral">{a}°</span></label>
          <input id={idA} type="range" min={10} max={120} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
        <div>
          <label htmlFor={idB} className="block font-semibold">Ângulo B: <span className="text-coral">{bb}°</span></label>
          <input id={idB} type="range" min={10} max={limiteB} value={bb} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {a}° + {bb}° + <strong className="text-verde">{c}°</strong> = <strong>180°</strong>. O terceiro ângulo é o que falta para 180°.
      </p>
    </div>
  )
}
