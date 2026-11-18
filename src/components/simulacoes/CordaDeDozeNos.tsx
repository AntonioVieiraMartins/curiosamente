import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const U = 28

// Uma corda com 12 espaços iguais forma um triângulo com lados a + b + c = 12. Só um deles tem ângulo reto.
export default function CordaDeDozeNos() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const ia = useId()
  const ib = useId()
  const c = 12 - a - b
  const existe = c > 0 && a + b > c && a + c > b && b + c > a
  const cos = existe ? (a * a + b * b - c * c) / (2 * a * b) : 0
  const ang = (Math.acos(cos) * 180) / Math.PI
  const p2 = { x: b * cos * U, y: -b * Math.sqrt(Math.max(0, 1 - cos * cos)) * U }
  const reto = existe && a * a + b * b === c * c

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Corda de 12 nós</p>
      {existe && (
        <svg viewBox="-20 -170 260 190" className="mx-auto mt-2 w-full max-w-xs" role="img" aria-label={`Triângulo de lados ${a}, ${b} e ${c}.`}>
          <polygon points={`0,0 ${a * U},0 ${p2.x},${p2.y}`} style={{ fill: 'var(--color-amarelo)', fillOpacity: 0.5, stroke: reto ? 'var(--color-verde)' : 'var(--color-texto)', strokeWidth: 3 }} />
          {Array.from({ length: a + 1 }, (_, i) => <circle key={`a${i}`} cx={i * U} cy={0} r="3.5" fill="var(--color-texto)" />)}
          {Array.from({ length: b + 1 }, (_, i) => <circle key={`b${i}`} cx={(p2.x * i) / b} cy={(p2.y * i) / b} r="3.5" fill="var(--color-texto)" />)}
          {Array.from({ length: c + 1 }, (_, i) => <circle key={`c${i}`} cx={a * U + ((p2.x - a * U) * i) / c} cy={(p2.y * i) / c} r="3.5" fill="var(--color-texto)" />)}
        </svg>
      )}
      <label htmlFor={ia} className="mt-2 block font-semibold">Lado 1: <span className="text-azul">{a}</span> espaços</label>
      <input id={ia} type="range" min={1} max={10} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={ib} className="block font-semibold">Lado 2: <span className="text-verde">{b}</span> espaços</label>
      <input id={ib} type="range" min={1} max={10} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {!existe ? `Com ${a} e ${b} sobram ${c} espaços para o lado 3, e os três não fecham um triângulo. Tente outros valores.` : (
          <>Lados {a}, {b} e {c}. O ângulo entre os dois primeiros é de cerca de <strong>{ang.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}°</strong>.{' '}
            {reto ? <strong className="text-verde">É o triângulo 3-4-5: ângulo reto de 90°!</strong> : `Como ${a}² + ${b}² = ${a * a + b * b} e ${c}² = ${c * c}, não é reto.`}</>
        )}
      </p>
    </div>
  )
}
