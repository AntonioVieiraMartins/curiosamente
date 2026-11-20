import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tamanhos aproximados, em micrômetros (µm). 1 mm = 1.000 µm.
const SERES = [
  { nome: 'Vírus da gripe', um: 0.1 },
  { nome: 'Bactéria (E. coli)', um: 2 },
  { nome: 'Hemácia humana', um: 7.5 },
  { nome: 'Célula da pele', um: 30 },
  { nome: 'Óvulo humano', um: 120 },
]
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })
// largura da barra em escala logarítmica, de 0,1 µm a 1.000 µm
const larg = (um: number) => 4 + ((Math.log10(um) + 1) / 4) * 96

export default function EscalaDasCelulas() {
  const [i, setI] = useState(2)
  const s = SERES[i]
  const cabem = 1000 / s.um

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas cabem em 1 milímetro?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Ser microscópico">
        {SERES.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-4 space-y-2" aria-hidden="true">
        {SERES.map((x, k) => (
          <div key={x.nome} className="flex items-center gap-2 text-xs">
            <span className="w-28 shrink-0 truncate">{x.nome}</span>
            <div className="h-3 rounded-full" style={{ width: `${larg(x.um)}%`, background: k === i ? 'var(--color-coral)' : 'var(--color-borda)' }} />
          </div>
        ))}
        <p className="text-[11px] text-suave">Escala logarítmica: cada divisão é 10 vezes maior que a anterior.</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{s.nome}:</strong> cerca de {br(s.um)} µm ({br(s.um / 1000)} mm). Em 1 mm (1.000 µm) cabem, enfileiradas, cerca de <strong>{br(cabem)}</strong>.
      </p>
    </div>
  )
}
