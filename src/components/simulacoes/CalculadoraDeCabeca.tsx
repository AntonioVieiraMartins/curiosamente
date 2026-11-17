import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Cada porcentagem é montada a partir de peças fáceis: 10% (tira um zero), 1% (tira dois), metade, dobro...
function receita(p: number, v: number): { passos: string[]; total: number } {
  const dez = v / 10
  const um = v / 100
  const metade = v / 2
  switch (p) {
    case 1: return { passos: [`1% = ${reais(v)} ÷ 100 = ${reais(um)}`], total: um }
    case 5: return { passos: [`10% = ${reais(dez)}`, `5% é metade de 10%: ${reais(dez / 2)}`], total: dez / 2 }
    case 10: return { passos: [`10% = ${reais(v)} ÷ 10 = ${reais(dez)} (a vírgula anda uma casa)`], total: dez }
    case 15: return { passos: [`10% = ${reais(dez)}`, `5% = metade disso = ${reais(dez / 2)}`, `15% = 10% + 5% = ${reais(dez * 1.5)}`], total: dez * 1.5 }
    case 20: return { passos: [`10% = ${reais(dez)}`, `20% = o dobro = ${reais(dez * 2)}`], total: dez * 2 }
    case 25: return { passos: [`50% = metade = ${reais(metade)}`, `25% = metade da metade = ${reais(metade / 2)}`], total: metade / 2 }
    case 50: return { passos: [`50% = metade = ${reais(metade)}`], total: metade }
    default: return { passos: [`50% = ${reais(metade)}`, `25% = ${reais(metade / 2)}`, `75% = 50% + 25% = ${reais(metade * 1.5)}`], total: metade * 1.5 }
  }
}

const opcoes = [1, 5, 10, 15, 20, 25, 50, 75]

export default function CalculadoraDeCabeca() {
  const [valor, setValor] = useState(240)
  const [p, setP] = useState(15)
  const id = useId()
  const { passos, total } = receita(p, valor)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Porcentagem de cabeça</p>
      <label htmlFor={id} className="mt-3 block font-semibold">
        Valor da conta: <span className="text-azul-texto">{reais(valor)}</span>
      </label>
      <input id={id} type="range" min={20} max={2000} step={10} value={valor} onChange={(e) => setValor(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-[var(--color-azul)]" />

      <p className="mt-3 text-sm text-suave">Quanto por cento?</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Porcentagem">
        {opcoes.map((o) => (
          <button key={o} type="button" aria-pressed={p === o} onClick={() => setP(o)}
            className={`h-11 min-w-14 rounded-full border-2 px-3 font-semibold ${p === o ? 'border-coral bg-coral/10 text-coral' : 'border-borda'}`}>
            {o}%
          </button>
        ))}
      </div>

      <ol aria-live="polite" className="mt-5 space-y-2 rounded-2xl bg-fundo p-4">
        {passos.map((t, i) => (
          <li key={i} className="flex gap-3 text-[16px]">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-superficie text-sm font-semibold">{i + 1}</span>
            <span>{t}</span>
          </li>
        ))}
        <li className="pt-2 font-serif text-2xl font-medium">
          {p}% de {reais(valor)} = <span className="text-coral">{reais(total)}</span>
        </li>
      </ol>
    </div>
  )
}
