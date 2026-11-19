import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// 2(n + 3): um retângulo de altura 2 e largura n + 3, cortado em dois pedaços. A área total é a soma das duas áreas.
export default function RetanguloDaDistributiva() {
  const [n, setN] = useState(4)
  const id = useId()
  const escala = 22
  const larg = (n + 3) * escala
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">2(n + 3) = 2n + 6</p>
      <label htmlFor={id} className="mt-3 block font-semibold">n = <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={1} max={10} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <svg viewBox="0 0 330 100" className="mt-2 h-auto w-full" aria-hidden="true">
        <rect x={10} y={20} width={n * escala} height={2 * escala} fill="var(--color-azul)" opacity={0.45} stroke="var(--color-azul)" />
        <rect x={10 + n * escala} y={20} width={3 * escala} height={2 * escala} fill="var(--color-amarelo)" stroke="var(--color-amarelo-escuro)" />
        <text x={10 + (n * escala) / 2} y={48} textAnchor="middle" fontSize={13} fill="var(--color-texto)">2n</text>
        <text x={10 + n * escala + (3 * escala) / 2} y={48} textAnchor="middle" fontSize={13} fill="var(--color-texto)">6</text>
        <text x={10 + larg / 2} y={14} textAnchor="middle" fontSize={12} fill="var(--color-suave)">n + 3</text>
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Com n = {n}: a área inteira é 2 × ({n} + 3) = <strong>{2 * (n + 3)}</strong>. Somando os pedaços: 2 × {n} + 6 = {2 * n} + 6 = <strong>{2 * n + 6}</strong>. Dá o mesmo.
      </p>
    </div>
  )
}
