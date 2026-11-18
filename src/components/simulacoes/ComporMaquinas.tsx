import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const regras = [
  { nome: 'x + 3', f: (x: number) => x + 3 },
  { nome: '2x', f: (x: number) => 2 * x },
  { nome: 'x²', f: (x: number) => x * x },
]

// Composição: a saída de uma máquina entra na outra. A ordem importa.
export default function ComporMaquinas() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(2)
  const [x, setX] = useState(2)
  const id = useId()
  const f = regras[a], g = regras[b]
  const gf = g.f(f.f(x)), fg = f.f(g.f(x))
  const grupo = (valor: number, set: (n: number) => void, rotulo: string) => (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={rotulo}>
      <span className="text-[15px] font-semibold">{rotulo}:</span>
      {regras.map((r, i) => <button key={i} type="button" aria-pressed={valor === i} onClick={() => set(i)} className={`min-h-11 rounded-full border-2 px-3 font-mono text-[14px] font-semibold ${valor === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{r.nome}</button>)}
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma máquina depois da outra</p>
      <div className="mt-3 space-y-2">{grupo(a, setA, 'f(x) =')}{grupo(b, setB, 'g(x) =')}</div>
      <label htmlFor={id} className="mt-3 block text-[15px]">Entrada x: <b>{x}</b>
        <input id={id} type="range" min={-5} max={8} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <div aria-live="polite" className="mt-3 space-y-2 rounded-2xl bg-fundo p-4 text-[15px]">
        <p>g(f(x)): {x} → f → {f.f(x)} → g → <b>{gf}</b></p>
        <p>f(g(x)): {x} → g → {g.f(x)} → f → <b>{fg}</b></p>
        <p className="text-suave">{gf === fg ? 'Aqui deu igual, mas só por coincidência.' : 'Resultados diferentes: a composição não é comutativa. A ordem das máquinas importa.'}</p>
      </div>
    </div>
  )
}
