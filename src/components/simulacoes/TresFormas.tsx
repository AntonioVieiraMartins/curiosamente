import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
const sinal = (n: number) => (n >= 0 ? '+' : '-')

// A mesma função em três disfarces: fatorada, padrão e canônica (do vértice)
export default function TresFormas() {
  const [a, setA] = useState(1)
  const [r1, setR1] = useState(1)
  const [r2, setR2] = useState(5)
  const ia = useId(), i1 = useId(), i2 = useId()
  const b = -a * (r1 + r2), c = a * r1 * r2
  const h = (r1 + r2) / 2
  const k = a * (h - r1) * (h - r2)
  const campo = (id: string, rot: string, v: number, set: (n: number) => void, min: number, max: number) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{f2(v)}</b>
      <input id={id} type="range" min={min} max={max} step={1} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Três formas da mesma função</p>
      <div className="mt-3 grid gap-x-3 sm:grid-cols-3">{campo(ia, 'a', a, (n) => setA(n === 0 ? 1 : n), -3, 3)}{campo(i1, 'raiz 1', r1, setR1, -5, 8)}{campo(i2, 'raiz 2', r2, setR2, -5, 8)}</div>
      <ul aria-live="polite" className="mt-3 space-y-2 rounded-2xl bg-fundo p-4 font-mono text-[14px]">
        <li><b>Fatorada:</b> f(x) = {f2(a)}(x {sinal(-r1)} {f2(Math.abs(r1))})(x {sinal(-r2)} {f2(Math.abs(r2))})</li>
        <li><b>Padrão:</b> f(x) = {f2(a)}x² {sinal(b)} {f2(Math.abs(b))}x {sinal(c)} {f2(Math.abs(c))}</li>
        <li><b>Canônica:</b> f(x) = {f2(a)}(x {sinal(-h)} {f2(Math.abs(h))})² {sinal(k)} {f2(Math.abs(k))}</li>
      </ul>
      <p className="mt-2 text-sm text-suave">A fatorada mostra as raízes; a padrão mostra o c (onde corta o eixo y); a canônica mostra o vértice ({f2(h)} ; {f2(k)}).</p>
    </div>
  )
}
