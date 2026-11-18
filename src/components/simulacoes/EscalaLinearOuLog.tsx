import { useState } from 'react'
import { cartao } from '../ui/estilos'

const valores = [1, 10, 100, 1000, 10000, 100000, 1000000]

// A mesma lista de números numa régua linear e numa régua logarítmica
export default function EscalaLinearOuLog() {
  const [sel, setSel] = useState(100)
  const linear = (v: number) => (v / 1000000) * 100
  const log = (v: number) => (Math.log10(v) / 6) * 100
  const linha = (titulo: string, pos: (v: number) => number, cor: string) => (
    <div className="mt-3">
      <p className="text-[14px] font-semibold">{titulo}</p>
      <div className="relative mt-3 h-10 rounded-full bg-fundo" role="img" aria-label={titulo}>
        {valores.map((v) => (
          <button key={v} type="button" aria-label={`valor ${v}`} onClick={() => setSel(v)} className="absolute top-1/2 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 bg-superficie text-[10px] font-bold" style={{ left: `${3 + pos(v) * 0.94}%`, borderColor: sel === v ? cor : 'var(--color-borda)' }}>{v >= 1000 ? `${v / 1000}k` : v}</button>
        ))}
      </div>
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Régua linear e régua logarítmica</p>
      {linha('Régua linear (de 0 a 1.000.000)', linear, 'var(--color-coral)')}
      {linha('Régua logarítmica (cada marca vale 10 vezes a anterior)', log, 'var(--color-azul)')}
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Na régua linear, 1, 10, 100 e 1.000 ficam todos amontoados perto do zero. Na logarítmica, eles ficam <b>igualmente espaçados</b>: cada passo multiplica por 10. Número selecionado: {sel.toLocaleString('pt-BR')}, log₁₀ = <b>{Math.log10(sel)}</b>.
      </p>
    </div>
  )
}
