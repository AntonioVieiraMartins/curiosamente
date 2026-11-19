import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const itens = [
  { nome: 'Prova', peso: 5 },
  { nome: 'Trabalho', peso: 3 },
  { nome: 'Participação', peso: 2 },
]

const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Na média ponderada, cada nota vale quantas vezes o seu peso. A prova pesa mais que a participação.
export default function MediaPonderada() {
  const [notas, setNotas] = useState([6, 9, 10])
  const base = useId()
  const somaPesos = itens.reduce((s, i) => s + i.peso, 0)
  const ponderada = itens.reduce((s, i, k) => s + notas[k] * i.peso, 0) / somaPesos
  const simples = notas.reduce((s, n) => s + n, 0) / notas.length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Média com pesos</p>
      {itens.map((it, k) => (
        <div key={it.nome} className="mt-2">
          <label htmlFor={`${base}-${k}`} className="block font-semibold">{it.nome} (peso {it.peso}): nota <span className="text-coral">{notas[k]}</span></label>
          <input id={`${base}-${k}`} type="range" min={0} max={10} value={notas[k]}
            onChange={(e) => setNotas(notas.map((n, j) => (j === k ? Number(e.target.value) : n)))}
            className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
        </div>
      ))}
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-2"><div className="text-xs font-semibold text-suave">Média simples</div><div className="text-lg font-bold">{fmt(simples)}</div></div>
        <div className="rounded-2xl bg-verde p-2 text-white"><div className="text-xs font-semibold">Média ponderada</div><div className="text-lg font-bold">{fmt(ponderada)}</div></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Ponderada: ({notas.map((n, k) => `${n}×${itens[k].peso}`).join(' + ')}) ÷ {somaPesos} = {fmt(notas.reduce((s, n, k) => s + n * itens[k].peso, 0))} ÷ {somaPesos} = <strong>{fmt(ponderada)}</strong>.
        A nota da prova pesa mais, então puxa o resultado mais do que a participação.
      </p>
    </div>
  )
}
