import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Pessoa = { id: string; x: number; y: number; homem: boolean; afetado: boolean; geno: string }

// Família com uma característica recessiva (aa): dois pais sem ela têm um filho com ela
const pessoas: Pessoa[] = [
  { id: 'I-1', x: 80, y: 28, homem: true, afetado: false, geno: 'Aa' },
  { id: 'I-2', x: 140, y: 28, homem: false, afetado: false, geno: 'Aa' },
  { id: 'II-1', x: 50, y: 98, homem: true, afetado: true, geno: 'aa' },
  { id: 'II-2', x: 110, y: 98, homem: false, afetado: false, geno: 'A_' },
  { id: 'II-3', x: 170, y: 98, homem: true, afetado: false, geno: 'A_' },
]

export default function Heredograma() {
  const [mostra, setMostra] = useState(false)
  const cor = 'var(--color-texto)'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um heredograma</p>
      <svg viewBox="0 0 220 135" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Heredograma de duas gerações: pais sem a característica e três filhos, um deles afetado">
        <line x1="88" y1="28" x2="132" y2="28" stroke={cor} strokeWidth="1.5" />
        <line x1="110" y1="28" x2="110" y2="66" stroke={cor} strokeWidth="1.5" />
        <line x1="50" y1="66" x2="170" y2="66" stroke={cor} strokeWidth="1.5" />
        {[50, 110, 170].map((x) => <line key={x} x1={x} y1="66" x2={x} y2="90" stroke={cor} strokeWidth="1.5" />)}
        {pessoas.map((p) => (
          <g key={p.id}>
            {p.homem
              ? <rect x={p.x - 8} y={p.y - 8} width="16" height="16" fill={p.afetado ? cor : 'var(--color-superficie)'} stroke={cor} strokeWidth="1.5" />
              : <circle cx={p.x} cy={p.y} r="9" fill={p.afetado ? cor : 'var(--color-superficie)'} stroke={cor} strokeWidth="1.5" />}
            <text x={p.x} y={p.y + 22} textAnchor="middle" fontSize="8" fill="var(--color-suave)">{p.id}</text>
            {mostra && <text x={p.x} y={p.y + 31} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-texto)">{p.geno === 'A_' ? 'AA ou Aa' : p.geno}</text>}
          </g>
        ))}
      </svg>
      <p className="mt-2 text-sm text-suave">Quadrado = homem. Círculo = mulher. Preenchido = tem a característica.</p>
      <button type="button" onClick={() => setMostra((m) => !m)} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{mostra ? 'Esconder genótipos' : 'Mostrar genótipos'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {mostra
          ? 'II-1 tem a característica, então é aa. Recebeu um a de cada genitor, e por isso I-1 e I-2, que não têm a característica, são Aa (portadores). II-2 e II-3 não têm a característica, mas podem ser AA ou Aa: a chance de serem Aa é de 2 em 3.'
          : 'Dois pais sem a característica tiveram um filho com ela. Isso só acontece se a característica for recessiva. Aperte o botão para ver os genótipos.'}
      </p>
    </div>
  )
}
