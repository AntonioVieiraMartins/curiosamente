import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Raiz: onde f(x) = 0. Sinal: onde f(x) é positiva ou negativa.
export default function RaizESinal() {
  const [a, setA] = useState(2)
  const [b, setB] = useState(-4)
  const ida = useId(), idb = useId()
  const raiz = a !== 0 ? -b / a : null
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Raiz e sinal</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">a: <b>{f2(a)}</b>
          <input id={ida} type="range" min={-4} max={4} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">b: <b>{f2(b)}</b>
          <input id={idb} type="range" min={-8} max={8} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <PlanoFuncao curvas={[{ f: (x) => a * x + b, cor: 'var(--color-azul)' }]} xmin={-6} xmax={6} ymin={-8} ymax={8} pontos={raiz !== null ? [{ x: raiz, y: 0, rotulo: `x = ${f2(raiz)}` }] : []} rotuloAlt="Reta e o ponto onde ela cruza o eixo x" />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {raiz === null
          ? `Com a = 0 a função é constante (f(x) = ${f2(b)}): ${b === 0 ? 'vale 0 sempre.' : 'nunca vale zero, e o sinal não muda.'}`
          : `Raiz: ${f2(a)}x ${b >= 0 ? '+' : '-'} ${f2(Math.abs(b))} = 0 dá x = ${f2(-b)}/${f2(a)} = ${f2(raiz)}. ${a > 0 ? `Para x maior que ${f2(raiz)}, f é positiva; para x menor, negativa.` : `Para x menor que ${f2(raiz)}, f é positiva; para x maior, negativa.`}`}
      </p>
    </div>
  )
}
