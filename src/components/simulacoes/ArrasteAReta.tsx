import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
const termo = (a: number, b: number) => `f(x) = ${a === 1 ? '' : a === -1 ? '-' : f2(a)}x ${b >= 0 ? '+' : '-'} ${f2(Math.abs(b))}`

// Mexer em a (inclinação) e b (onde cruza o eixo y) e ver a reta mudar
export default function ArrasteAReta() {
  const [a, setA] = useState(2)
  const [b, setB] = useState(1)
  const ida = useId(), idb = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mexa na reta</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">a (inclinação): <b>{f2(a)}</b>
          <input id={ida} type="range" min={-4} max={4} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">b (cruza o eixo y em): <b>{f2(b)}</b>
          <input id={idb} type="range" min={-6} max={6} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <PlanoFuncao curvas={[{ f: (x) => a * x + b, cor: 'var(--color-azul)' }]} xmin={-5} xmax={5} ymin={-8} ymax={8} pontos={[{ x: 0, y: b, rotulo: `(0 ; ${f2(b)})` }]} rotuloAlt={`Reta ${termo(a, b)}`} />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <b className="font-mono">{termo(a, b)}</b>. {a > 0 ? 'Como a é positivo, a reta sobe.' : a < 0 ? 'Como a é negativo, a reta desce.' : 'Como a é zero, a reta é horizontal (função constante).'} Ela corta o eixo y no ponto (0; {f2(b)}).
      </p>
    </div>
  )
}
