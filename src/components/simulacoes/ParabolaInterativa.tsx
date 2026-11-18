import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// f(x) = ax² + bx + c: o que cada coeficiente faz com a parábola
export default function ParabolaInterativa() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(-2)
  const [c, setC] = useState(-3)
  const ia = useId(), ib = useId(), ic = useId()
  const aa = a === 0 ? 0.5 : a // a = 0 deixaria de ser quadrática
  const xv = -b / (2 * aa)
  const yv = aa * xv * xv + b * xv + c
  const delta = b * b - 4 * aa * c
  const raizes = delta > 0 ? [(-b - Math.sqrt(delta)) / (2 * aa), (-b + Math.sqrt(delta)) / (2 * aa)] : delta === 0 ? [xv] : []
  const campo = (id: string, rot: string, v: number, set: (n: number) => void, min: number, max: number) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{f2(v)}</b>
      <input id={id} type="range" min={min} max={max} step={0.5} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A parábola e seus coeficientes</p>
      <div className="mt-3 grid gap-x-3 sm:grid-cols-3">{campo(ia, 'a', a, setA, -3, 3)}{campo(ib, 'b', b, setB, -6, 6)}{campo(ic, 'c', c, setC, -6, 6)}</div>
      <PlanoFuncao
        curvas={[{ f: (x) => aa * x * x + b * x + c, cor: 'var(--color-azul)' }]}
        xmin={-6} xmax={6} ymin={-8} ymax={8}
        pontos={[{ x: xv, y: yv, cor: 'var(--color-coral)', rotulo: 'vértice' }, ...raizes.map((r) => ({ x: r, y: 0, cor: 'var(--color-verde)' }))]}
        rotuloAlt="Parábola com vértice e raízes destacados"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        f(x) = {f2(aa)}x² {b >= 0 ? '+' : '-'} {f2(Math.abs(b))}x {c >= 0 ? '+' : '-'} {f2(Math.abs(c))}. {aa > 0 ? 'Como a é positivo, a boca abre para cima (há um mínimo).' : 'Como a é negativo, a boca abre para baixo (há um máximo).'} Vértice: ({f2(xv)} ; {f2(yv)}). Corta o eixo y em {f2(c)}. {raizes.length === 0 ? 'Não corta o eixo x (sem raízes reais).' : `Raízes: ${raizes.map(f2).join(' e ')}.`}
        {a === 0 && ' (Com a = 0 não seria quadrática, então usamos a = 0,5.)'}
      </p>
    </div>
  )
}
