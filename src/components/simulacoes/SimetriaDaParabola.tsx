import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
// f(x) = x² - 4x + 1: eixo de simetria em x = 2
const f = (x: number) => x * x - 4 * x + 1

export default function SimetriaDaParabola() {
  const [x, setX] = useState(0.5)
  const id = useId()
  const xv = 2
  const espelho = 2 * xv - x
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O espelho da parábola</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">x = <b>{f2(x)}</b>
        <input id={id} type="range" min={-1} max={5} step={0.25} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao
        curvas={[{ f, cor: 'var(--color-azul)' }]}
        xmin={-2} xmax={6} ymin={-4} ymax={10}
        pontos={[{ x, y: f(x), cor: 'var(--color-coral)', rotulo: `x = ${f2(x)}` }, { x: espelho, y: f(espelho), cor: 'var(--color-verde)', rotulo: `x = ${f2(espelho)}` }, { x: xv, y: f(xv), cor: 'var(--color-texto)', rotulo: 'vértice' }]}
        rotuloAlt="Parábola com dois pontos simétricos em relação ao vértice"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        f(x) = x² - 4x + 1 tem eixo de simetria em x = -b/(2a) = 4/2 = <b>2</b>. O ponto espelhado de x = {f2(x)} é 2 · 2 - {f2(x)} = <b>{f2(espelho)}</b>, e os dois têm a mesma altura: f({f2(x)}) = {f2(f(x))} e f({f2(espelho)}) = {f2(f(espelho))}.
      </p>
    </div>
  )
}
