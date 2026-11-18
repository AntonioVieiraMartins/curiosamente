import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const P = 23
const G = 5

const potMod = (base: number, exp: number, mod: number) => {
  let r = 1
  for (let i = 0; i < exp; i++) r = (r * base) % mod
  return r
}

// Troca de chaves de Diffie-Hellman com números pequenos: dois lados chegam ao mesmo segredo, e quem espia só vê os números públicos.
export default function SegredoEmPublico() {
  const [a, setA] = useState(6)
  const [b, setB] = useState(15)
  const ia = useId()
  const ib = useId()
  const A = potMod(G, a, P)
  const B = potMod(G, b, P)
  const segredoA = potMod(B, a, P)
  const segredoB = potMod(A, b, P)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Combinar um segredo na frente de todos</p>
      <p className="mt-2 text-[15px]">Números públicos (todo mundo vê): base <strong>{G}</strong> e módulo <strong>{P}</strong>.</p>
      <label htmlFor={ia} className="mt-2 block font-semibold">Segredo da Ana: <span className="text-azul">{a}</span></label>
      <input id={ia} type="range" min={2} max={20} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={ib} className="block font-semibold">Segredo do Bruno: <span className="text-verde">{b}</span></label>
      <input id={ib} type="range" min={2} max={20} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <ol aria-live="polite" className="mt-2 space-y-1.5 rounded-2xl bg-fundo p-4 text-[15px]">
        <li>Ana manda em público: {G}<sup>{a}</sup> mod {P} = <strong>{A}</strong></li>
        <li>Bruno manda em público: {G}<sup>{b}</sup> mod {P} = <strong>{B}</strong></li>
        <li>Ana calcula: {B}<sup>{a}</sup> mod {P} = <strong className="text-coral">{segredoA}</strong></li>
        <li>Bruno calcula: {A}<sup>{b}</sup> mod {P} = <strong className="text-coral">{segredoB}</strong></li>
      </ol>
      <p className="mt-2 text-[15px] text-suave">O espião só viu {A} e {B}. Com números pequenos dá para adivinhar os segredos; com números gigantes, não. "mod" é o resto da divisão.</p>
    </div>
  )
}
