import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const pares = [
  { a: '2(n + 3)', b: '2n + 6', fa: (n: number) => 2 * (n + 3), fb: (n: number) => 2 * n + 6, igual: true },
  { a: '2(n + 3)', b: '2n + 3', fa: (n: number) => 2 * (n + 3), fb: (n: number) => 2 * n + 3, igual: false },
  { a: 'n + n', b: '2n', fa: (n: number) => n + n, fb: (n: number) => 2 * n, igual: true },
  { a: 'n × n', b: '2n', fa: (n: number) => n * n, fb: (n: number) => 2 * n, igual: false },
]

// Duas expressões são equivalentes quando dão o mesmo valor para TODO n. Um n só pode enganar (n = 2 em n × n e 2n).
export default function EquivalentesOuNao() {
  const [i, setI] = useState(0)
  const [n, setN] = useState(2)
  const id = useId()
  const p = pares[i]
  const va = p.fa(n)
  const vb = p.fb(n)
  const iguais = va === vb
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Elas são a mesma expressão?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {pares.map((q, k) => (
          <button key={k} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{q.a} e {q.b}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block font-semibold">n = <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={-6} max={8} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center" aria-hidden="true">
        <p className={`rounded-2xl p-3 text-lg font-semibold ${iguais ? 'bg-verde text-white' : 'bg-amarelo'}`}>{p.a} = {va}</p>
        <span className="text-2xl">{iguais ? '=' : '≠'}</span>
        <p className={`rounded-2xl p-3 text-lg font-semibold ${iguais ? 'bg-verde text-white' : 'bg-fundo'}`}>{p.b} = {vb}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {p.igual
          ? 'Com qualquer n que você escolher, os dois lados dão o mesmo número: são equivalentes.'
          : iguais
            ? `Com n = ${n} deu igual por coincidência. Mude o n: com outros valores elas se separam, então NÃO são equivalentes.`
            : 'Os valores são diferentes: basta um n assim para provar que NÃO são equivalentes.'}
      </p>
    </div>
  )
}
