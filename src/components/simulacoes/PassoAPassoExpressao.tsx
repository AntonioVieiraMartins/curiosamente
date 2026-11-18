import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { limparParenteses, mostrar, passo, type Tok } from './avaliador'

const exemplos: Tok[][] = [
  [2, '+', 3, '×', 4],
  [20, '-', 6, '÷', 2, '+', 1],
  [5, '+', 2, '×', '(', 10, '-', 4, ')'],
  [3, '×', '(', 4, '+', 2, ')', '-', 8, '÷', 2],
]

// Resolve uma expressão uma operação por vez, na ordem das regras
export default function PassoAPassoExpressao() {
  const [k, setK] = useState(0)
  const [hist, setHist] = useState<{ tokens: Tok[]; texto: string }[]>([])
  const inicial = limparParenteses(exemplos[k])
  const atual = hist.length ? hist[hist.length - 1].tokens : inicial
  const proximo = passo(atual)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma operação por vez</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a expressão">
        {exemplos.map((e, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => { setK(i); setHist([]) }} className={`min-h-11 rounded-full border-2 px-3 font-mono text-[14px] font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{mostrar(e)}</button>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">{mostrar(atual)}</p>
      <ol aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
        {hist.length === 0 && <li>Aperte “Próxima operação” para começar.</li>}
        {hist.map((h, i) => <li key={i}>Passo {i + 1}: resolvi <b>{h.texto}</b>. Agora: {mostrar(h.tokens)}</li>)}
        {hist.length > 0 && !proximo && <li><b>Resultado: {atual[0]}</b></li>}
      </ol>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={!proximo} onClick={() => proximo && setHist([...hist, proximo])} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Próxima operação</button>
        <button type="button" onClick={() => setHist([])} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
