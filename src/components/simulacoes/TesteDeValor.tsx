import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const equacoes = [
  { a: 2, b: 3, c: 11, nome: '2x + 3 = 11' },
  { a: 5, b: -4, c: 21, nome: '5x − 4 = 21' },
  { a: 3, b: 6, c: 6, nome: '3x + 6 = 6' },
]

// Substituir x por um valor e comparar os dois lados: é assim que se confere uma solução.
export default function TesteDeValor() {
  const [i, setI] = useState(0)
  const [x, setX] = useState(0)
  const id = useId()
  const e = equacoes[i]
  const esq = e.a * x + e.b
  const dif = esq - e.c

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Teste um valor para x</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {equacoes.map((q, k) => (
          <button key={q.nome} type="button" aria-pressed={k === i} onClick={() => { setI(k); setX(0) }}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{q.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block font-semibold">x = <span className="text-coral">{x}</span></label>
      <input id={id} type="range" min={-5} max={12} value={x} onChange={(ev) => setX(Number(ev.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center" aria-hidden="true">
        <p className={`rounded-2xl p-3 text-xl font-semibold ${dif === 0 ? 'bg-verde text-white' : 'bg-amarelo'}`}>{esq}</p>
        <span className="text-2xl">{dif === 0 ? '=' : dif > 0 ? '>' : '<'}</span>
        <p className={`rounded-2xl p-3 text-xl font-semibold ${dif === 0 ? 'bg-verde text-white' : 'bg-fundo'}`}>{e.c}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {e.a}×({x}) {e.b >= 0 ? '+' : '−'} {Math.abs(e.b)} = <strong>{esq}</strong>.{' '}
        {dif === 0 ? 'Os dois lados são iguais: esse x é a solução!' : dif > 0 ? 'O lado esquerdo ficou maior. Diminua x.' : 'O lado esquerdo ficou menor. Aumente x.'}
      </p>
    </div>
  )
}
