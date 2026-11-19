import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const objetos = [
  { nome: 'Roda de bicicleta', diam: 66 },
  { nome: 'Pneu de carro', diam: 60 },
  { nome: 'Moeda', diam: 2.7 },
]

// Cada volta da roda avança uma circunferência inteira (π × diâmetro).
export default function RodaEDistancia() {
  const [i, setI] = useState(0)
  const [voltas, setVoltas] = useState(10)
  const id = useId()
  const o = objetos[i]
  const circ = Math.PI * o.diam
  const total = circ * voltas
  const fmt = (n: number, d = 1) => n.toLocaleString('pt-BR', { maximumFractionDigits: d })
  const emM = total / 100
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto a roda anda?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {objetos.map((s, k) => (
          <button key={s.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{s.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block font-semibold">Voltas completas: <span className="text-coral">{voltas}</span></label>
      <input id={id} type="range" min={1} max={100} step={1} value={voltas} onChange={(e) => setVoltas(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">Diâmetro</div><div className="text-lg font-bold">{fmt(o.diam)} cm</div></div>
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">Uma volta avança</div><div className="text-lg font-bold">{fmt(circ)} cm</div></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {voltas} {voltas === 1 ? 'volta' : 'voltas'} × {fmt(circ)} cm = <strong>{fmt(total, 0)} cm</strong>{emM >= 1 ? <>, ou seja, <strong>{fmt(emM, 1)} metros</strong></> : ''}.
      </p>
    </div>
  )
}
