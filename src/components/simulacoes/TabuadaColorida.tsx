import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tabuada de 1 a 10. Tocar numa casa destaca a casa "gêmea" (a ordem trocada) e a diagonal dos quadrados.
export default function TabuadaColorida() {
  const [sel, setSel] = useState<[number, number]>([6, 7])
  const [a, b] = sel
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tabuada de 1 a 10</p>
      <div className="mt-3 overflow-x-auto">
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: 'repeat(10, minmax(2.1rem, 1fr))' }}>
          {Array.from({ length: 100 }, (_, k) => {
            const i = Math.floor(k / 10) + 1, j = (k % 10) + 1
            const ativa = i === a && j === b
            const gemea = i === b && j === a && a !== b
            const quadrado = i === j
            return (
              <button
                key={k}
                type="button"
                aria-label={`${i} vezes ${j} é ${i * j}`}
                onClick={() => setSel([i, j])}
                className={`grid min-h-9 place-items-center rounded text-[12px] font-semibold ${ativa ? 'bg-azul text-white' : gemea ? 'bg-amarelo' : quadrado ? 'bg-fundo text-coral' : 'bg-fundo'}`}
              >
                {i * j}
              </button>
            )
          })}
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {a} x {b} = <b>{a * b}</b>.{a !== b ? ` A casa amarela é a “gêmea”: ${b} x ${a} = ${a * b}. Só precisamos aprender metade da tabela.` : ` Aqui ${a} x ${a} é um quadrado perfeito: a diagonal em vermelho tem todos eles.`}
      </p>
    </div>
  )
}
