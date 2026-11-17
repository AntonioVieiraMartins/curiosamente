import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const BASE = 6 // a receita original serve 6 pessoas

const ingredientes = [
  { nome: 'Ovos', qtd: 3 },
  { nome: 'Farinha de trigo (xícaras)', qtd: 2 },
  { nome: 'Açúcar (xícaras)', qtd: 1 },
  { nome: 'Leite (xícaras)', qtd: 1 },
  { nome: 'Fermento (colheres de sopa)', qtd: 1 },
]

const numero = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Receita de bolo que cresce ou encolhe: tudo é multiplicado pelo mesmo fator
export default function ReceitaEscalavel() {
  const [pessoas, setPessoas] = useState(BASE)
  const id = useId()
  const fator = pessoas / BASE

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <label htmlFor={id} className="block font-semibold">
        Bolo para <span className="text-azul-texto">{pessoas}</span> {pessoas === 1 ? 'pessoa' : 'pessoas'}
      </label>
      <input
        id={id}
        type="range"
        min={1}
        max={30}
        value={pessoas}
        onChange={(e) => setPessoas(Number(e.target.value))}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-azul)]"
      />
      <p className="text-sm text-suave">
        Receita original: {BASE} pessoas. Fator: {pessoas} ÷ {BASE} = <strong className="text-texto">{numero(fator)}</strong>
      </p>

      <ul aria-live="polite" className="mt-4 divide-y divide-borda rounded-2xl bg-fundo px-4">
        {ingredientes.map((ing) => {
          const q = ing.qtd * fator
          const quebrado = ing.nome === 'Ovos' && !Number.isInteger(q)
          return (
            <li key={ing.nome} className="flex items-baseline justify-between gap-3 py-3">
              <span>{ing.nome}</span>
              <span className="text-right font-semibold">
                {numero(q)}
                {quebrado && <span className="block text-sm font-normal text-coral">ovo quebrado? arredonde</span>}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
