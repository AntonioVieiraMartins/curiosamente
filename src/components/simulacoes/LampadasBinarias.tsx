import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Props = { bits?: number }

// Cada lâmpada vale o dobro da vizinha da direita. Acesa soma o valor dela; apagada não soma nada.
export default function LampadasBinarias({ bits = 8 }: Props) {
  const [ligadas, setLigadas] = useState<boolean[]>(() => Array.from({ length: bits }, (_, i) => i === bits - 3 || i === bits - 1))
  const valores = Array.from({ length: bits }, (_, i) => 2 ** (bits - 1 - i))
  const total = ligadas.reduce((s, l, i) => s + (l ? valores[i] : 0), 0)
  const soma = ligadas.map((l, i) => (l ? valores[i] : null)).filter((v) => v !== null)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">{bits} lâmpadas = {bits} bits</p>
      <div className="mt-3 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${bits}, minmax(0, 1fr))` }}>
        {valores.map((v, i) => (
          <button key={v} type="button" aria-pressed={ligadas[i]} aria-label={`Lâmpada de valor ${v}: ${ligadas[i] ? 'acesa' : 'apagada'}`}
            onClick={() => setLigadas(ligadas.map((l, j) => (j === i ? !l : l)))}
            className={`flex min-h-16 flex-col items-center justify-center rounded-xl border-2 text-sm font-semibold transition-colors ${ligadas[i] ? 'border-amarelo-escuro bg-amarelo text-texto' : 'border-borda bg-fundo text-suave'}`}>
            <span className="text-lg">{ligadas[i] ? 1 : 0}</span>
            <span className="text-[11px]">{v}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {ligadas.map((l) => (l ? 1 : 0)).join('')} em binário = {soma.length ? soma.join(' + ') : '0'} = <strong className="text-coral">{total}</strong>
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setLigadas(ligadas.map(() => false))}>Apagar tudo</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setLigadas(ligadas.map(() => true))}>Acender tudo</button>
      </div>
    </div>
  )
}
