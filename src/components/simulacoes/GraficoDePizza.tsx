import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Gráfico de setores: as partes somam 100% do todo (a "pizza" inteira)
const nomes = ['Casa', 'Comida', 'Lazer', 'Outros']
const cores = ['var(--color-azul)', 'var(--color-amarelo)', 'var(--color-coral)', 'var(--color-suave)']

export default function GraficoDePizza() {
  const [casa, setCasa] = useState(40)
  const [comida, setComida] = useState(30)
  const [lazer, setLazer] = useState(20)
  const ids = [useId(), useId(), useId()]
  const outros = 100 - casa - comida - lazer
  const valido = outros >= 0
  const partes = [casa, comida, lazer, Math.max(0, outros)]
  let acum = 0
  const fatias = partes.map((p) => {
    const a0 = (acum / 100) * 2 * Math.PI - Math.PI / 2
    acum += p
    const a1 = (acum / 100) * 2 * Math.PI - Math.PI / 2
    const grande = p > 50 ? 1 : 0
    const pt = (a: number) => `${100 + 80 * Math.cos(a)} ${100 + 80 * Math.sin(a)}`
    return p >= 100 ? 'circle' : p <= 0 ? '' : `M100 100 L${pt(a0)} A80 80 0 ${grande} 1 ${pt(a1)} Z`
  })
  const campo = (id: string, rot: string, v: number, set: (n: number) => void) => (
    <label htmlFor={id} className="text-[15px]">{rot}: <b>{v}%</b>
      <input id={id} type="range" min={0} max={100} step={5} value={v} onChange={(e) => set(Number(e.target.value))} className="h-11 w-full" /></label>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Para onde vai o dinheiro do mês?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {campo(ids[0], 'Casa', casa, setCasa)}
        {campo(ids[1], 'Comida', comida, setComida)}
        {campo(ids[2], 'Lazer', lazer, setLazer)}
      </div>
      <svg viewBox="0 0 200 200" role="img" aria-label="Gráfico de setores com os gastos do mês" className="mx-auto mt-2 h-auto w-full max-w-[200px]">
        {fatias.map((d, k) => d === 'circle'
          ? <circle key={k} cx={100} cy={100} r={80} fill={cores[k]} />
          : d ? <path key={k} d={d} fill={cores[k]} stroke="var(--color-superficie)" strokeWidth={2} /> : null)}
      </svg>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
        {nomes.map((n, k) => <li key={n}><span className="mr-1 inline-block size-3 rounded-sm align-middle" style={{ background: cores[k] }} />{n}: {partes[k]}%</li>)}
      </ul>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {valido
          ? <>Casa + Comida + Lazer = {casa + comida + lazer}%, então sobram <b>{outros}%</b> para Outros. As fatias sempre somam <b>100%</b> da pizza inteira. {outros === 0 ? 'Não sobrou nada!' : ''}</>
          : <>Passou de 100% ({casa + comida + lazer}%)! Numa pizza não cabe mais que o todo: diminua alguma fatia.</>}
      </p>
    </div>
  )
}
