import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Um programa de brinquedo na "memória": cada linha é uma instrução.
const programa = [
  { texto: 'GUARDE 5 no acumulador', op: 'guarde', n: 5 },
  { texto: 'SOME 3 ao acumulador', op: 'some', n: 3 },
  { texto: 'SOME 4 ao acumulador', op: 'some', n: 4 },
  { texto: 'PARE', op: 'pare', n: 0 },
] as const

const fases = ['Buscar', 'Decodificar', 'Executar'] as const

// A CPU repete sempre: buscar a instrução, entender o que ela pede, executar.
export default function CicloDaCpu() {
  const [passo, setPasso] = useState(0) // cada instrução tem 3 passos
  const linha = Math.min(Math.floor(passo / 3), programa.length - 1)
  const fase = passo % 3
  const fim = passo >= programa.length * 3

  // O acumulador só muda quando a fase "Executar" já aconteceu
  let acc = 0
  for (let k = 0; k < programa.length; k++) {
    const feita = passo > k * 3 + 2
    if (!feita) break
    if (programa[k].op === 'guarde') acc = programa[k].n
    if (programa[k].op === 'some') acc += programa[k].n
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O ciclo da CPU</p>
      <ol className="mt-3 space-y-1.5">
        {programa.map((p, k) => (
          <li key={k} className={`rounded-lg px-3 py-1.5 font-mono text-[15px] ${!fim && k === linha ? 'bg-amarelo font-semibold' : 'bg-fundo text-suave'}`}>{k + 1}. {p.texto}</li>
        ))}
      </ol>
      <div className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
        {fases.map((f, k) => (
          <span key={f} className={`rounded-full px-3 py-1 text-sm font-semibold ${!fim && k === fase ? 'bg-coral text-white' : 'bg-fundo text-suave'}`}>{f}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Acumulador (a "mãozinha" da CPU): <strong className="text-coral">{acc}</strong>
        <span className="mt-1 block text-[15px] text-suave">
          {fim ? 'Programa terminado: 5 + 3 + 4 = 12.' : `Agora: ${fases[fase]} a instrução ${linha + 1}.`}
        </span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40" disabled={fim} onClick={() => setPasso(passo + 1)}>Dar um passo</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setPasso(0)}>Recomeçar</button>
      </div>
    </div>
  )
}
