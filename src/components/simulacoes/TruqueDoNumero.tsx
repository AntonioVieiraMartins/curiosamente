import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Truque: (2n + 6) ÷ 2 − n = 3, para qualquer n. A letra explica por quê.
export default function TruqueDoNumero() {
  const [n, setN] = useState(7)
  const id = useId()
  const p1 = n * 2
  const p2 = p1 + 6
  const p3 = p2 / 2
  const p4 = p3 - n

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O truque do número</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Pense num número: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={-20} max={50} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <table className="mt-2 w-full text-left text-[15px]">
        <thead><tr className="text-suave"><th className="py-1">Passo</th><th>Com o seu número</th><th>Com a letra n</th></tr></thead>
        <tbody>
          <tr><td className="py-1">Dobre</td><td>{p1}</td><td>2n</td></tr>
          <tr><td className="py-1">Some 6</td><td>{p2}</td><td>2n + 6</td></tr>
          <tr><td className="py-1">Divida por 2</td><td>{p3}</td><td>n + 3</td></tr>
          <tr><td className="py-1">Tire o número que pensou</td><td><strong className="text-coral">{p4}</strong></td><td><strong>3</strong></td></tr>
        </tbody>
      </table>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">Deu <strong>{p4}</strong>, qualquer que seja o número. A letra mostra por que o n some no final.</p>
    </div>
  )
}
