import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'

// Todo número é construído por primos, como um LEGO: divide pelo menor primo que serve até chegar em 1.
export default function ArvoreDeFatores() {
  const [n, setN] = useState(60)
  const id = useId()

  const passos: { numero: number; primo: number }[] = []
  let resto = n
  for (let p = 2; resto > 1; p++) {
    while (resto % p === 0) {
      passos.push({ numero: resto, primo: p })
      resto /= p
    }
  }
  const contagem = new Map<number, number>()
  for (const p of passos) contagem.set(p.primo, (contagem.get(p.primo) ?? 0) + 1)
  const produto = [...contagem].map(([p, e]) => (e > 1 ? `${p}${sobrescrito(e)}` : `${p}`)).join(' × ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Desmontando um número</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Número: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={2} max={200} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <ol className="mt-3 space-y-1">
        {passos.map((p, i) => (
          <li key={i} className="flex items-center gap-2 rounded-lg bg-fundo px-3 py-1.5 text-[15px]">
            <span className="w-12 text-right font-semibold">{p.numero}</span>
            <span className="text-suave">÷</span>
            <span className="grid size-7 place-items-center rounded-full bg-coral text-sm font-semibold text-white">{p.primo}</span>
            <span className="text-suave">= {p.numero / p.primo}</span>
          </li>
        ))}
      </ol>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {passos.length === 1
          ? <>{n} já é primo: não se desmonta mais.</>
          : <>{n} = <strong className="text-coral">{[...passos.map((p) => p.primo)].join(' × ')}</strong> = <strong>{produto}</strong></>}
      </p>
    </div>
  )
}
