import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Cladograma simplificado de vertebrados. Cada nó é um ancestral comum, e o que ele criou vale para todos os descendentes.
const folhas = ['Tubarão', 'Atum', 'Sapo', 'Baleia', 'Lagarto', 'Pássaro']
const yFolha = folhas.map((_, k) => 18 + k * 20)
const nos = [
  { nome: 'Vertebrados', x: 15, y: 40, membros: [0, 1, 2, 3, 4, 5], novidade: 'Coluna vertebral (esqueleto interno que protege a medula).' },
  { nome: 'Peixes ósseos e tetrápodes', x: 45, y: 59, membros: [1, 2, 3, 4, 5], novidade: 'Esqueleto de osso (no tubarão ele é de cartilagem).' },
  { nome: 'Tetrápodes', x: 75, y: 78, membros: [2, 3, 4, 5], novidade: 'Quatro membros com dedos, que viraram patas, asas e nadadeiras.' },
  { nome: 'Amniotas', x: 105, y: 95, membros: [3, 4, 5], novidade: 'Embrião protegido por membranas, o que permitiu ovos fora da água e vida longe dela.' },
  { nome: 'Répteis e aves', x: 135, y: 110, membros: [4, 5], novidade: 'Ancestral comum recente: as aves descendem de um grupo de dinossauros, que também é grupo de répteis.' },
]
const filhos: Record<number, { no?: number; folha?: number }[]> = {
  0: [{ folha: 0 }, { no: 1 }], 1: [{ folha: 1 }, { no: 2 }], 2: [{ folha: 2 }, { no: 3 }], 3: [{ folha: 3 }, { no: 4 }], 4: [{ folha: 4 }, { folha: 5 }],
}

export default function ArvoreDeParentesco() {
  const [sel, setSel] = useState(3)
  const no = nos[sel]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Árvore de parentesco (simplificada)</p>
      <svg viewBox="0 0 220 135" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label="Árvore de parentesco entre seis vertebrados">
        {nos.map((n, k) => (filhos[k].map((f, j) => {
          const cx = f.no !== undefined ? nos[f.no].x : 160
          const cy = f.no !== undefined ? nos[f.no].y : yFolha[f.folha as number]
          // O ramo fica em destaque quando o nó de onde ele sai faz parte do grupo escolhido
          const marca = n.membros.every((m) => no.membros.includes(m))
          return <polyline key={`${k}-${j}`} fill="none" stroke={marca ? 'var(--color-coral)' : 'var(--color-texto)'} strokeWidth={marca ? 2.5 : 1.5} points={`${n.x},${n.y} ${n.x},${cy} ${cx},${cy}`} />
        })))}
        {folhas.map((f, k) => (
          <text key={f} x="164" y={yFolha[k] + 3} fontSize="8" fontWeight={no.membros.includes(k) ? 700 : 400} fill={no.membros.includes(k) ? 'var(--color-coral)' : 'var(--color-texto)'}>{f}</text>
        ))}
        {nos.map((n, k) => <circle key={n.nome} cx={n.x} cy={n.y} r="5" fill={k === sel ? 'var(--color-coral)' : 'var(--color-azul)'} stroke="var(--color-texto)" />)}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha um ancestral">
        {nos.map((n, k) => (
          <button key={n.nome} type="button" onClick={() => setSel(k)} aria-pressed={sel === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${sel === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{n.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{no.nome}:</strong> descendentes do mesmo ancestral comum são {no.membros.map((m) => folhas[m].toLowerCase()).join(', ')}. Novidade que ele trouxe: {no.novidade}
        {sel === 3 ? ' Repare: a baleia é mais parente do lagarto e do pássaro do que do atum, mesmo vivendo como peixe.' : ''}
      </p>
    </div>
  )
}
