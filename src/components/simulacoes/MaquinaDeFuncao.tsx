import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const regras = [
  { nome: 'dobro mais 3', txt: 'f(x) = 2x + 3', f: (x: number) => 2 * x + 3 },
  { nome: 'quadrado', txt: 'f(x) = x²', f: (x: number) => x * x },
  { nome: 'metade menos 1', txt: 'f(x) = x/2 - 1', f: (x: number) => x / 2 - 1 },
  { nome: 'o contrário', txt: 'f(x) = -x', f: (x: number) => -x },
]

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Uma "máquina": entra um número, a regra trabalha, sai exatamente um número
export default function MaquinaDeFuncao() {
  const [k, setK] = useState(0)
  const [x, setX] = useState(4)
  const id = useId()
  const r = regras[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A máquina de funções</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Regra da máquina">
        {regras.map((x2, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{x2.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block text-[15px]">Entrada x: <b>{x}</b>
        <input id={id} type="range" min={-6} max={10} step={1} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-2 flex items-center justify-center gap-3 text-center">
        <div className="rounded-2xl border-2 border-azul px-4 py-2"><p className="text-xs text-suave">entra</p><p className="text-2xl font-bold">{x}</p></div>
        <div className="rounded-2xl bg-fundo px-4 py-3 font-mono text-[15px] font-semibold">{r.txt}</div>
        <div className="rounded-2xl border-2 border-verde px-4 py-2"><p className="text-xs text-suave">sai</p><p className="text-2xl font-bold">{f2(r.f(x))}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        f({x}) = {f2(r.f(x))}. Para cada entrada há <b>uma única</b> saída: é isso que faz da regra uma função.
      </p>
    </div>
  )
}
