import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// "Por cento" = "de cada 100": pinta quadradinhos numa grade de 10 × 10
export default function GradeCem({ base = 200 }: { base?: number }) {
  const [porcento, setPorcento] = useState(25)
  const id = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <label htmlFor={id} className="block font-semibold">
        Pinte <span className="text-coral">{porcento}%</span> da grade
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={porcento}
        onChange={(e) => setPorcento(Number(e.target.value))}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-coral)]"
      />

      <div className="mx-auto mt-3 grid max-w-[300px] grid-cols-10 gap-1" aria-hidden="true">
        {Array.from({ length: 100 }, (_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-[3px] transition-colors duration-150 ${i < porcento ? 'bg-coral' : 'bg-borda'}`}
          />
        ))}
      </div>

      <div aria-live="polite" className="mt-5 grid gap-3 sm:grid-cols-2">
        <p className="rounded-2xl bg-fundo p-4">
          <span className="block text-sm text-suave">Na grade</span>
          <strong>{porcento}</strong> quadradinhos de cada <strong>100</strong>
        </p>
        <p className="rounded-2xl bg-fundo p-4">
          <span className="block text-sm text-suave">Numa compra de {reais(base)}</span>
          {porcento}% dá <strong>{reais((base * porcento) / 100)}</strong>
        </p>
      </div>
    </div>
  )
}
