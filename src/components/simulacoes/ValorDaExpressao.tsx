import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const expressoes = [
  { nome: 'n + 5', f: (n: number) => n + 5, fala: 'cinco a mais que n' },
  { nome: '3n', f: (n: number) => 3 * n, fala: 'o triplo de n' },
  { nome: '2n + 1', f: (n: number) => 2 * n + 1, fala: 'o dobro de n, mais um (dá sempre um número ímpar)' },
  { nome: 'n × n', f: (n: number) => n * n, fala: 'n vezes n (o quadrado de n)' },
]

// Uma expressão é uma "receita" com uma letra: troque a letra por um número e a conta sai.
export default function ValorDaExpressao() {
  const [n, setN] = useState(4)
  const id = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Troque a letra por um número</p>
      <label htmlFor={id} className="mt-3 block font-semibold">n = <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={-10} max={10} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <ul className="mt-2 space-y-2">
        {expressoes.map((e) => (
          <li key={e.nome} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl bg-fundo p-3">
            <span><strong>{e.nome}</strong> <span className="text-suave">({e.fala})</span></span>
            <span className="rounded-xl bg-azul-claro px-3 py-1 text-lg font-semibold">{e.f(n)}</span>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com n = {n}: n + 5 vale <strong>{n + 5}</strong> e 2n + 1 vale <strong>{2 * n + 1}</strong>. Mude o n e veja que a mesma receita dá resultados diferentes.
      </p>
    </div>
  )
}
