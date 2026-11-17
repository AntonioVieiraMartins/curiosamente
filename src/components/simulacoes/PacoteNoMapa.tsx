import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Rede de brinquedo: cada roteador (letra) liga a alguns vizinhos por cabos.
const nos = ['Casa', 'A', 'B', 'C', 'D', 'Site'] as const
const cabos: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5]]

function caminho(cortados: number[]): number[] | null {
  const vivos = cabos.filter((_, i) => !cortados.includes(i))
  const fila: number[][] = [[0]]
  const visto = new Set([0])
  while (fila.length) {
    const c = fila.shift() as number[]
    const ult = c[c.length - 1]
    if (ult === 5) return c
    for (const [a, b] of vivos) {
      const viz = a === ult ? b : b === ult ? a : -1
      if (viz >= 0 && !visto.has(viz)) { visto.add(viz); fila.push([...c, viz]) }
    }
  }
  return null
}

// O pacote sempre encontra um caminho vivo (o mais curto): se um cabo corta, ele dá a volta.
export default function PacoteNoMapa() {
  const [cortados, setCortados] = useState<number[]>([])
  const rota = caminho(cortados)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um pacote viaja de Casa até o Site</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-amarelo p-4 text-[15px]">
        {rota ? <>Rota: <strong>{rota.map((k) => nos[k]).join(' → ')}</strong> ({rota.length - 1} saltos)</> : <strong>Sem caminho: o pacote não chega.</strong>}
      </p>
      <p className="mt-3 text-[15px] text-suave">Toque num cabo para cortá-lo ou consertá-lo:</p>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {cabos.map(([a, b], i) => {
          const corte = cortados.includes(i)
          const usado = rota?.some((k, j) => j < rota.length - 1 && ((k === a && rota[j + 1] === b) || (k === b && rota[j + 1] === a)))
          return (
            <button key={i} type="button" aria-pressed={corte}
              onClick={() => setCortados(corte ? cortados.filter((x) => x !== i) : [...cortados, i])}
              className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${corte ? 'border-coral bg-coral text-white line-through' : usado ? 'border-verde bg-verde text-white' : 'border-borda'}`}>
              {nos[a]} — {nos[b]} {corte ? '(cortado)' : usado ? '(em uso)' : ''}
            </button>
          )
        })}
      </div>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setCortados([])}>Consertar tudo</button>
    </div>
  )
}
