import { useState } from 'react'
import { cartao } from '../ui/estilos'

const N = 100

// A peneira de Eratóstenes: pega o primeiro número que sobrou e risca todos os múltiplos dele.
export default function CrivoDeEratostenes() {
  const [processados, setProcessados] = useState<number[]>([])

  const riscado = new Set<number>()
  for (const p of processados) for (let m = 2 * p; m <= N; m += p) riscado.add(m)
  const proximo = Array.from({ length: N - 1 }, (_, i) => i + 2).find((n) => !riscado.has(n) && !processados.includes(n))
  const primosAteAqui = Array.from({ length: N - 1 }, (_, i) => i + 2).filter((n) => !riscado.has(n))

  function passo() {
    if (proximo !== undefined) setProcessados([...processados, proximo])
  }
  function tudo() {
    const todos: number[] = []
    const marcados = new Set<number>()
    for (let n = 2; n <= N; n++) {
      if (marcados.has(n)) continue
      todos.push(n)
      for (let m = 2 * n; m <= N; m += n) marcados.add(m)
    }
    setProcessados(todos)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A peneira de Eratóstenes</p>

      <div className="mt-3 grid grid-cols-10 gap-1" aria-hidden="true">
        {Array.from({ length: N }, (_, i) => i + 1).map((n) => {
          const eFoco = n === proximo
          const eProcessado = processados.includes(n)
          const estilo = n === 1 ? 'bg-fundo text-suave/50 line-through'
            : riscado.has(n) ? 'bg-fundo text-suave/50 line-through'
            : eProcessado ? 'bg-verde text-white'
            : eFoco ? 'bg-amarelo text-texto ring-2 ring-amarelo-escuro'
            : 'bg-superficie text-texto ring-1 ring-borda'
          return <span key={n} className={`grid h-8 place-items-center rounded-md text-xs font-semibold ${estilo}`}>{n}</span>
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={passo} disabled={proximo === undefined}
          className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white disabled:opacity-40">
          {proximo === undefined ? 'Terminou' : `Riscar múltiplos de ${proximo}`}
        </button>
        <button type="button" onClick={tudo} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Mostrar tudo</button>
        <button type="button" onClick={() => setProcessados([])} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Recomeçar</button>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {processados.length === 0
          ? 'O 1 já está riscado, porque não é primo. O primeiro número que sobra é o 2: ele é primo. Risque os múltiplos dele.'
          : proximo === undefined
            ? <>Acabou! Sobraram <strong className="text-verde">{primosAteAqui.length} primos</strong> até {N}: {primosAteAqui.join(', ')}.</>
            : <>Primos confirmados: {processados.join(', ')}. Próximo número que sobrou: <strong>{proximo}</strong>.</>}
      </p>
    </div>
  )
}
