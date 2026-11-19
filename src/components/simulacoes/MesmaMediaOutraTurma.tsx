import { useState } from 'react'
import { cartao } from '../ui/estilos'

const turmas = {
  A: { nome: 'Turma A', notas: [6, 7, 7, 8, 7, 7, 6, 8] },
  B: { nome: 'Turma B', notas: [2, 10, 3, 10, 4, 9, 10, 8] },
}

const media = (v: number[]) => v.reduce((a, b) => a + b, 0) / v.length

// Duas turmas com a MESMA média (7), mas uma é parecida e a outra é bem espalhada: a média sozinha não conta isso.
export default function MesmaMediaOutraTurma() {
  const [qual, setQual] = useState<'A' | 'B'>('A')
  const t = turmas[qual]
  const m = media(t.notas)
  const amplitude = Math.max(...t.notas) - Math.min(...t.notas)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mesma média, turmas diferentes</p>
      <div className="mt-3 flex gap-2">
        {(['A', 'B'] as const).map((k) => (
          <button key={k} type="button" aria-pressed={qual === k} onClick={() => setQual(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${qual === k ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{turmas[k].nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 400 150" className="mt-3 h-auto w-full" aria-hidden="true">
        <line x1={10} y1={130} x2={390} y2={130} stroke="var(--color-borda)" />
        {t.notas.map((n, k) => (
          <g key={k}>
            <rect x={22 + k * 46} y={130 - n * 11} width={32} height={n * 11} rx={4} fill="var(--color-azul)" opacity={0.8} />
            <text x={38 + k * 46} y={124 - n * 11} textAnchor="middle" fontSize={12} fill="var(--color-texto)">{n}</text>
          </g>
        ))}
        <line x1={10} y1={130 - m * 11} x2={390} y2={130 - m * 11} stroke="var(--color-coral)" strokeWidth={2} strokeDasharray="5 4" />
      </svg>
      <p className="text-sm text-suave">Cada barra é um aluno. A linha tracejada é a média.</p>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {t.nome}: média <strong>{m.toLocaleString('pt-BR')}</strong>, menor nota {Math.min(...t.notas)}, maior nota {Math.max(...t.notas)}, amplitude <strong>{amplitude}</strong>.{' '}
        {qual === 'A' ? 'Notas parecidas: a média descreve bem a turma.' : 'Notas muito espalhadas: a média esconde que há alunos nota 2 e alunos nota 10.'}
      </p>
    </div>
  )
}
