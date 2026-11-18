import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Eq = { a: number; b: number; c: number } // a·x + b = c

const problemas: Eq[] = [
  { a: 1, b: 3, c: 8 },
  { a: 2, b: 4, c: 18 },
  { a: 3, b: 5, c: 20 },
  { a: 4, b: -2, c: 26 },
]

const termo = (a: number, b: number) => {
  const x = a === 1 ? 'x' : `${a}x`
  if (b === 0) return x
  return `${x} ${b > 0 ? '+' : '−'} ${Math.abs(b)}`
}

// Regra de ouro: o que se faz de um lado, faz-se do outro, e a balança continua equilibrada.
export default function BalancaDeEquacao() {
  const [p, setP] = useState(0)
  const [eq, setEq] = useState<Eq>(problemas[0])
  const [k, setK] = useState(3)
  const [aviso, setAviso] = useState('Isole o x: deixe só ele de um lado.')
  const resolvido = eq.a === 1 && eq.b === 0

  function trocar(i: number) { setP(i); setEq(problemas[i]); setAviso('Isole o x: deixe só ele de um lado.') }
  const somar = (v: number) => { setEq({ ...eq, b: eq.b + v, c: eq.c + v }); setAviso(`${v > 0 ? 'Somou' : 'Tirou'} ${Math.abs(v)} dos dois lados.`) }
  const dividir = () => {
    if (k < 2 || eq.a % k || eq.b % k || eq.c % k) { setAviso(`Dividir tudo por ${k} não dá número inteiro. Tente outro número.`); return }
    setEq({ a: eq.a / k, b: eq.b / k, c: eq.c / k }); setAviso(`Dividiu os dois lados por ${k}.`)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A balança da equação</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {problemas.map((q, i) => (
          <button key={i} type="button" aria-pressed={i === p} onClick={() => trocar(i)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${i === p ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{termo(q.a, q.b)} = {q.c}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
        <p className="rounded-2xl bg-amarelo p-3 text-xl font-semibold">{termo(eq.a, eq.b)}</p>
        <span className="text-2xl font-semibold" aria-hidden="true">=</span>
        <p className="rounded-2xl bg-fundo p-3 text-xl font-semibold">{eq.c}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resolvido ? <>Pronto! <strong className="text-verde">x = {eq.c}</strong>. Confira na equação do começo.</> : aviso}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" disabled={resolvido} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold" onClick={() => somar(-k)}>− {k} dos dois lados</button>
        <button type="button" disabled={resolvido} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold" onClick={() => somar(k)}>+ {k} dos dois lados</button>
        <button type="button" disabled={resolvido} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold" onClick={dividir}>÷ {k} dos dois lados</button>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="font-semibold">Número:</span>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" aria-pressed={k === n} onClick={() => setK(n)} className={`size-11 rounded-full border-2 font-semibold ${k === n ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{n}</button>
        ))}
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => trocar(p)}>Recomeçar</button>
      </div>
    </div>
  )
}
