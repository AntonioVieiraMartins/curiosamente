import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Dois pontos determinam uma única reta: a = (y2 - y1)/(x2 - x1) e b = y1 - a·x1
export default function RetaPorDoisPontos() {
  const [x1, setX1] = useState(1)
  const [y1, setY1] = useState(3)
  const [x2, setX2] = useState(4)
  const [y2, setY2] = useState(9)
  const i1 = useId(), i2 = useId(), i3 = useId(), i4 = useId()
  const mesmoX = x1 === x2
  const a = mesmoX ? 0 : (y2 - y1) / (x2 - x1)
  const b = y1 - a * x1
  const campo = (id: string, rot: string, v: number, set: (n: number) => void) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{v}</b>
      <input id={id} type="range" min={-6} max={8} step={1} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Achando a fórmula a partir de dois pontos</p>
      <div className="mt-3 grid gap-x-3 sm:grid-cols-2">{campo(i1, 'x do ponto 1', x1, setX1)}{campo(i2, 'y do ponto 1', y1, setY1)}{campo(i3, 'x do ponto 2', x2, setX2)}{campo(i4, 'y do ponto 2', y2, setY2)}</div>
      <PlanoFuncao
        curvas={mesmoX ? [] : [{ f: (x) => a * x + b, cor: 'var(--color-azul)' }]}
        xmin={-6} xmax={8} ymin={-10} ymax={14}
        pontos={[{ x: x1, y: y1, rotulo: 'P1' }, { x: x2, y: y2, rotulo: 'P2' }]}
        rotuloAlt="Reta passando por dois pontos"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {mesmoX
          ? 'Os dois pontos têm o mesmo x: a reta seria vertical, e uma reta vertical não é gráfico de função.'
          : `a = (${y2} - ${y1}) / (${x2} - ${x1}) = ${f2(a)}. Depois, b = ${y1} - ${f2(a)} · ${x1} = ${f2(b)}. A função é f(x) = ${f2(a)}x ${b >= 0 ? '+' : '-'} ${f2(Math.abs(b))}.`}
      </p>
    </div>
  )
}
