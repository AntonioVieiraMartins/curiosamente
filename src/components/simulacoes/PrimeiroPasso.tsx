import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { ehOp, proximaOperacao, resultado, type Tok } from './avaliador'

const banco: Tok[][] = [
  [7, '+', 2, '×', 5],
  [18, '-', 12, '÷', 3],
  ['(', 6, '+', 4, ')', '×', 3],
  [30, '÷', 5, '×', 2],
  [4, '×', '(', 9, '-', 3, ')', '+', 1],
  [50, '-', 10, '+', 5],
]

// Toque na operação que deve ser resolvida primeiro
export default function PrimeiroPasso() {
  const [i, setI] = useState(0)
  const [esc, setEsc] = useState<number | null>(null)
  const [pontos, setPontos] = useState(0)
  const e = banco[i]
  const certa = proximaOperacao(e)
  const fim = i >= banco.length
  function tocar(k: number) {
    if (esc !== null) return
    setEsc(k)
    if (k === certa) setPontos(pontos + 1)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O que se resolve primeiro?</p>
      {fim ? (
        <>
          <p className="mt-3 text-lg font-semibold">Você acertou {pontos} de {banco.length}.</p>
          <button type="button" onClick={() => { setI(0); setPontos(0); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Jogar de novo</button>
        </>
      ) : (
        <>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1 font-mono text-2xl font-bold">
            {e.map((t, k) =>
              ehOp(t) ? (
                <button key={k} type="button" aria-label={`Operação ${t}`} onClick={() => tocar(k)} className={`min-h-11 min-w-11 rounded-xl border-2 ${esc === k ? (k === certa ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-azul'}`}>{t}</button>
              ) : (
                <span key={k} className="px-1">{t}</span>
              ),
            )}
          </div>
          <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
            {esc === null ? 'Toque no sinal da operação que vem primeiro.' : esc === certa ? `Certo! Essa vem primeiro. O resultado final da expressão é ${resultado(e)}.` : 'Ainda não. Lembre: parênteses primeiro, depois × e ÷ (da esquerda para a direita), depois + e -.'}
          </p>
          {esc !== null && <button type="button" onClick={() => { setI(i + 1); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">{i + 1 < banco.length ? 'Próxima' : 'Ver resultado'}</button>}
        </>
      )}
    </div>
  )
}
