import { useState } from 'react'
import { cartao } from '../ui/estilos'

const TOTAL = 10

// Estoque de moléculas: ATP (carregada) e ADP (descarregada). Gastar descarrega, a respiração recarrega.
export default function CicloDoATP() {
  const [atp, setAtp] = useState(8)
  const adp = TOTAL - atp
  const msg =
    atp === 0
      ? 'Todas as baterias estão descarregadas. A célula não consegue mais trabalhar até a respiração recarregar algumas.'
      : adp === 0
        ? 'Tudo carregado. A célula só gasta, e o ciclo recomeça quando ela trabalha.'
        : 'A célula gasta ATP (vira ADP) e a respiração recarrega o ADP (volta a ser ATP). O estoque é pequeno, mas gira muito depressa.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A bateria da célula: ATP e ADP</p>
      <svg viewBox="0 0 220 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${atp} baterias carregadas e ${adp} descarregadas`}>
        {Array.from({ length: TOTAL }, (_, i) => (
          <g key={i}>
            <rect x={12 + i * 20} y={20} width={14} height={28} rx={3} fill={i < atp ? 'var(--color-amarelo)' : 'var(--color-borda)'} stroke="var(--color-texto)" strokeWidth="1" />
            <rect x={16 + i * 20} y={16} width={6} height={4} fill="var(--color-texto)" />
          </g>
        ))}
        <text x={12} y={64} fontSize="10" fill="var(--color-suave)">amarela = ATP (carregada) · cinza = ADP</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => setAtp((a) => Math.max(0, a - 2))} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">A célula trabalha (gasta 2)</button>
        <button type="button" onClick={() => setAtp((a) => Math.min(TOTAL, a + 2))} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Respiração recarrega (2)</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{atp} ATP e {adp} ADP.</strong> {msg}</p>
    </div>
  )
}
