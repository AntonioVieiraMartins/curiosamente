import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'

// Peso médio de um grão de trigo usado na Wikipédia (2⁶⁴ − 1 grãos ≈ 1,2 trilhão de toneladas)
const GRAMAS_POR_GRAO = 0.065
const COLHEITA_MUNDIAL_T = 800_000_000 // colheita mundial de trigo de um ano, arredondada
const numero = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

function pesoDoMonte(graos: bigint) {
  const gramas = Number(graos) * GRAMAS_POR_GRAO
  const toneladas = gramas / 1_000_000
  if (gramas < 1000) return `${numero(gramas)} g: cabe na palma da mão`
  if (gramas < 5000) return `${numero(gramas / 1000)} kg: cabe numa sacola de mercado`
  if (toneladas < 0.2) return `${numero(gramas / 1000)} kg: cabe num carrinho de mercado`
  if (toneladas < 30) return `${numero(toneladas)} toneladas: cabe num caminhão`
  if (toneladas < COLHEITA_MUNDIAL_T) return `${numero(toneladas)} toneladas: uns ${numero(Math.ceil(toneladas / 30))} caminhões`
  return `${numero(toneladas)} toneladas: cerca de ${numero(Math.round(toneladas / COLHEITA_MUNDIAL_T))} vezes a colheita de trigo do mundo inteiro num ano`
}

// A lenda do xadrez: 1 grão na 1ª casa, e cada casa dobra a anterior
export default function TabuleiroDeXadrez() {
  const [casa, setCasa] = useState(10)
  const id = useId()
  const nestaCasa = 2n ** BigInt(casa - 1)
  const total = 2n ** BigInt(casa) - 1n

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O tabuleiro do rei</p>

      <svg viewBox="0 0 160 160" className="mx-auto mt-3 w-full max-w-[240px]" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => {
          const atual = i === casa - 1
          return (
            <rect key={i} x={(i % 8) * 20} y={Math.floor(i / 8) * 20} width="20" height="20"
              fill={atual ? 'var(--color-coral)' : i < casa ? 'var(--color-amarelo)' : (i + Math.floor(i / 8)) % 2 ? 'var(--color-borda)' : 'var(--color-fundo)'}
              fillOpacity={atual ? 1 : i < casa ? 0.3 + (0.7 * i) / 64 : 1} />
          )
        })}
      </svg>

      <label htmlFor={id} className="mt-4 block font-semibold">
        Casa: <span className="text-coral">{casa}</span> de 64
      </label>
      <div className="mt-1 flex items-center gap-2">
        <button type="button" aria-label="Casa anterior" disabled={casa <= 1} onClick={() => setCasa(casa - 1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-borda text-xl font-semibold disabled:opacity-30">−</button>
        <input id={id} type="range" min={1} max={64} value={casa} onChange={(e) => setCasa(Number(e.target.value))}
          className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        <button type="button" aria-label="Próxima casa" disabled={casa >= 64} onClick={() => setCasa(casa + 1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-borda text-xl font-semibold disabled:opacity-30">+</button>
      </div>

      <div aria-live="polite" className="mt-3 space-y-2 rounded-2xl bg-fundo p-4">
        <p>
          Só nesta casa: 2{sobrescrito(casa - 1)} = <strong className="break-all text-coral">{nestaCasa.toLocaleString('pt-BR')}</strong> grãos
        </p>
        <p>
          Total até aqui: <strong className="break-all">{total.toLocaleString('pt-BR')}</strong> grãos
        </p>
        <p className="text-[15px] text-suave">Peso: {pesoDoMonte(total)}.</p>
      </div>
    </div>
  )
}
