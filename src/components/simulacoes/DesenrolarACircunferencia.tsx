import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Desenrolando a borda do círculo: ela sempre dá 3 diâmetros e um pouquinho (π ≈ 3,14).
export default function DesenrolarACircunferencia() {
  const [d, setD] = useState(4)
  const id = useId()
  const c = Math.PI * d
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Desenrolando a borda</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Diâmetro: <span className="text-coral">{d} cm</span></label>
      <input id={id} type="range" min={1} max={10} step={1} value={d} onChange={(e) => setD(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <svg viewBox="0 0 300 150" className="mt-2 w-full" role="img" aria-label={`Círculo de diâmetro ${d} cm e a borda esticada, com ${c.toFixed(2)} cm`}>
        <circle cx={40} cy={40} r={(d * 3.5) / 2} fill="var(--color-fundo)" stroke="var(--color-azul)" strokeWidth="3" />
        <line x1={40 - (d * 3.5) / 2} y1={40} x2={40 + (d * 3.5) / 2} y2={40} stroke="var(--color-coral)" strokeWidth="3" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={10 + i * d * 8} y={100} width={d * 8 - 2} height={14} rx={3} fill="var(--color-coral)" opacity={0.85} />
        ))}
        <rect x={10 + 3 * d * 8} y={100} width={Math.max(0, (c - 3 * d) * 8)} height={14} rx={3} fill="var(--color-amarelo)" stroke="var(--color-borda)" />
        <text x={10} y={136} fontSize="11" fill="var(--color-suave)">3 diâmetros inteiros + um pedacinho (0,14 de um diâmetro)</text>
        <text x={10} y={95} fontSize="11" fill="var(--color-suave)">Borda esticada ({c.toFixed(2).replace('.', ',')} cm)</text>
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Com diâmetro de {d} cm, a borda mede {d} × 3,14 ≈ <strong>{c.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} cm</strong>. Mude o tamanho: o resultado dividido pelo diâmetro continua dando <strong>{(c / d).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</strong>.
        Esse número é o <strong>π</strong>.
      </p>
    </div>
  )
}
