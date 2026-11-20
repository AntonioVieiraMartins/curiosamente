import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Eletronegatividades (escala de Pauling, arredondadas)
const el: Record<string, number> = { Na: 0.9, K: 0.8, Mg: 1.3, Ca: 1.0, H: 2.2, C: 2.6, S: 2.6, N: 3.0, Cl: 3.2, O: 3.4, F: 4.0 }
const nomes = Object.keys(el)

function tipo(d: number) {
  if (d >= 1.7) return { nome: 'Iônica', texto: 'A diferença é grande: um átomo toma o elétron do outro e os dois viram íons que se atraem.' }
  if (d >= 0.4) return { nome: 'Covalente polar', texto: 'Os átomos compartilham elétrons, mas o mais eletronegativo puxa o par para o seu lado.' }
  return { nome: 'Covalente apolar', texto: 'Os átomos puxam o par de elétrons com a mesma força, e o compartilhamento é igual.' }
}

// Diferença de eletronegatividade decide o tipo de ligação (regra prática, não lei)
export default function QualALigacao() {
  const [a, setA] = useState('Na')
  const [b, setB] = useState('Cl')
  const d = Math.abs(el[a] - el[b])
  const t = tipo(d)
  const sel = 'min-h-11 rounded-xl border border-borda bg-superficie px-3 text-[15px] font-semibold'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Que ligação se forma?</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-[15px]">Átomo 1
          <select value={a} onChange={(e) => setA(e.target.value)} className={sel}>{nomes.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
        <label className="flex items-center gap-2 text-[15px]">Átomo 2
          <select value={b} onChange={(e) => setB(e.target.value)} className={sel}>{nomes.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
      </div>
      <svg viewBox="0 0 220 60" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Diferença de eletronegatividade ${d.toFixed(1)}`}>
        <rect x={10} y={22} width={200} height={14} rx={7} fill="var(--color-borda)" />
        <rect x={10} y={22} width={200 * Math.min(1, d / 3.2)} height={14} rx={7} fill={d >= 1.7 ? 'var(--color-coral)' : d >= 0.4 ? 'var(--color-amarelo)' : 'var(--color-verde)'} />
        <text x={10} y={16} fontSize="10" fill="var(--color-suave)">diferença: {d.toFixed(1).replace('.', ',')}</text>
        <text x={10} y={54} fontSize="9" fill="var(--color-suave)">0 (apolar) · 0,4 · 1,7 (iônica)</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{a} ({el[a].toString().replace('.', ',')}) e {b} ({el[b].toString().replace('.', ',')}): {t.nome}.</strong> {t.texto} (Os limites 0,4 e 1,7 são regras práticas: na natureza a passagem é gradual.)
      </p>
    </div>
  )
}
