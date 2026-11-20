import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Atomo = { s: string; x: number; y: number; c: string }
type Mol = { nome: string; f: string; atomos: Atomo[]; lig: [number, number, number][]; texto: string }

const cor = { H: 'var(--color-azul)', O: 'var(--color-coral)', N: 'var(--color-verde)', C: 'var(--color-texto)' }
const mols: Mol[] = [
  { nome: 'Hidrogênio', f: 'H₂', atomos: [{ s: 'H', x: 80, y: 50, c: cor.H }, { s: 'H', x: 140, y: 50, c: cor.H }], lig: [[0, 1, 1]], texto: 'Cada H tem 1 elétron e quer ficar com 2 (como o hélio). Compartilham 1 par: ligação simples.' },
  { nome: 'Oxigênio', f: 'O₂', atomos: [{ s: 'O', x: 80, y: 50, c: cor.O }, { s: 'O', x: 140, y: 50, c: cor.O }], lig: [[0, 1, 2]], texto: 'Cada O precisa de 2 elétrons. Compartilham 2 pares: ligação dupla.' },
  { nome: 'Nitrogênio', f: 'N₂', atomos: [{ s: 'N', x: 80, y: 50, c: cor.N }, { s: 'N', x: 140, y: 50, c: cor.N }], lig: [[0, 1, 3]], texto: 'Cada N precisa de 3 elétrons. Compartilham 3 pares: ligação tripla, muito forte. Por isso o N₂ do ar é tão pouco reativo.' },
  { nome: 'Água', f: 'H₂O', atomos: [{ s: 'O', x: 110, y: 30, c: cor.O }, { s: 'H', x: 70, y: 76, c: cor.H }, { s: 'H', x: 150, y: 76, c: cor.H }], lig: [[0, 1, 1], [0, 2, 1]], texto: 'O oxigênio faz 2 ligações simples, uma com cada H. Todos ficam com o "octeto" (H, com 2).' },
  { nome: 'Gás carbônico', f: 'CO₂', atomos: [{ s: 'O', x: 55, y: 50, c: cor.O }, { s: 'C', x: 110, y: 50, c: cor.C }, { s: 'O', x: 165, y: 50, c: cor.O }], lig: [[0, 1, 2], [1, 2, 2]], texto: 'O carbono faz 4 ligações, divididas em duas duplas, uma com cada oxigênio.' },
  { nome: 'Metano', f: 'CH₄', atomos: [{ s: 'C', x: 110, y: 50, c: cor.C }, { s: 'H', x: 110, y: 12, c: cor.H }, { s: 'H', x: 70, y: 62, c: cor.H }, { s: 'H', x: 150, y: 62, c: cor.H }, { s: 'H', x: 110, y: 90, c: cor.H }], lig: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]], texto: 'O carbono faz 4 ligações simples, uma com cada H. É o gás do fogão (gás natural).' },
]

// Ligação covalente: átomos compartilham pares de elétrons
export default function MoleculasCovalentes() {
  const [k, setK] = useState(3)
  const m = mols[k]
  const total = m.lig.reduce((s, l) => s + l[2], 0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Compartilhando elétrons</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Molécula">
        {mols.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.f}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Molécula de ${m.nome}`}>
        {m.lig.map(([a, b, n], i) => {
          const A = m.atomos[a]
          const B = m.atomos[b]
          return Array.from({ length: n }, (_, j) => {
            const off = (j - (n - 1) / 2) * 5
            return <line key={`${i}-${j}`} x1={A.x} y1={A.y + off} x2={B.x} y2={B.y + off} stroke="var(--color-texto)" strokeWidth="2" />
          })
        })}
        {m.atomos.map((a, i) => (
          <g key={i}>
            <circle cx={a.x} cy={a.y} r={a.s === 'H' ? 12 : 16} fill={a.c} fillOpacity="0.35" stroke={a.c} strokeWidth="2" />
            <text x={a.x} y={a.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-texto)">{a.s}</text>
          </g>
        ))}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{m.nome} ({m.f}):</strong> {total} par(es) de elétrons compartilhado(s) no total. {m.texto}</p>
    </div>
  )
}
