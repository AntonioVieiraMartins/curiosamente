import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const A = (d: number) => 10 * d // soma 10 por dia
const B = (d: number) => 2 ** d // dobra por dia

export default function LinearContraExponencial() {
  const [d, setD] = useState(4)
  const id = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Somar ou dobrar?</p>
      <p className="mt-2 text-[15px] text-suave">A: ganha 10 por dia. B: começa com 1 e dobra todo dia.</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Dia: <b>{d}</b>
        <input id={id} type="range" min={0} max={12} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao curvas={[{ f: A, cor: 'var(--color-azul)' }, { f: B, cor: 'var(--color-coral)' }]} xmin={0} xmax={10} ymin={0} ymax={200} pontos={[{ x: d, y: A(d), cor: 'var(--color-azul)' }, { x: d, y: B(d), cor: 'var(--color-coral)' }].filter((p) => p.x <= 10)} rotuloAlt="Reta e curva exponencial em função dos dias" />
      <div className="mt-1 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">A (soma 10)</p><p className="text-2xl font-bold">{A(d).toLocaleString('pt-BR')}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">B (dobra)</p><p className="text-2xl font-bold">{B(d).toLocaleString('pt-BR')}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {B(d) > A(d) ? 'B já passou A: o que dobra, cedo ou tarde, ultrapassa o que só soma.' : 'No começo, A está na frente: o crescimento exponencial pode começar devagar.'} (Aumente o dia: B passa A no dia 6.)
      </p>
    </div>
  )
}
