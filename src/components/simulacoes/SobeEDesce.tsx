import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Sobe x% e depois desce x%: nunca volta ao ponto de partida, porque a base mudou no meio
export default function SobeEDesce({ inicio = 2000 }: { inicio?: number }) {
  const [x, setX] = useState(10)
  const id = useId()

  const subiu = inicio * (1 + x / 100)
  const final = subiu * (1 - x / 100)
  const perda = inicio - final

  const passos = [
    { rotulo: 'Começo', valor: inicio, cor: 'bg-borda' },
    { rotulo: `Sobe ${x}%`, valor: subiu, cor: 'bg-azul' },
    { rotulo: `Desce ${x}%`, valor: final, cor: 'bg-coral' },
  ]
  const maior = inicio * 2

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <label htmlFor={id} className="block font-semibold">
        O salário sobe e depois desce <span className="text-azul-texto">{x}%</span>
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={90}
        step={5}
        value={x}
        onChange={(e) => setX(Number(e.target.value))}
        className="mt-3 h-11 w-full cursor-pointer accent-[var(--color-azul)]"
      />

      <div className="mt-3 grid grid-cols-3 items-end gap-3" style={{ height: 160 }} aria-hidden="true">
        {passos.map((p) => (
          <div key={p.rotulo} className="flex h-full flex-col justify-end">
            <div className={`rounded-t-xl ${p.cor} transition-[height] duration-300`} style={{ height: `${(p.valor / maior) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-3 text-center text-[15px]">
        {passos.map((p) => (
          <p key={p.rotulo}>
            <span className="block text-suave">{p.rotulo}</span>
            <strong>{reais(p.valor)}</strong>
          </p>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 rounded-2xl bg-fundo p-4">
        {x === 0
          ? 'Sem mudar nada, nada muda. Arraste o controle.'
          : `Voltou ${reais(perda)} mais pobre: uma perda de ${((perda / inicio) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%.`}
      </p>
    </div>
  )
}
