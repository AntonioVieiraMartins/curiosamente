import { useState } from 'react'
import { cartao } from '../ui/estilos'

const COLS = 6
const LINHAS = 6
const T = 20
const EXEMPLO = [2, 3, 8, 9, 14, 15, 16, 21, 22, 26, 27, 28, 33, 34]

// Pinte à esquerda do eixo e veja o reflexo à direita
export default function EspelhoDeFiguras() {
  const [pintadas, setPintadas] = useState<boolean[]>(() => Array.from({ length: COLS * LINHAS }, () => false))
  const [eixo, setEixo] = useState(true)

  const alternar = (i: number) => setPintadas((p) => p.map((v, k) => (k === i ? !v : v)))
  const total = pintadas.filter(Boolean).length
  const exemplo = () => setPintadas(Array.from({ length: COLS * LINHAS }, (_, i) => EXEMPLO.includes(i)))
  const limpar = () => setPintadas(Array.from({ length: COLS * LINHAS }, () => false))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Desenhe de um lado, o espelho desenha do outro</p>
      <svg viewBox={`0 0 ${T * COLS * 2} ${T * LINHAS}`} className="mt-3 w-full rounded-2xl bg-fundo" role="group" aria-label="Grade com espelho no meio">
        {pintadas.map((on, i) => {
          const c = i % COLS
          const l = Math.floor(i / COLS)
          return (
            <g key={i}>
              <rect
                x={c * T} y={l * T} width={T} height={T}
                fill={on ? 'var(--color-azul)' : 'transparent'} stroke="var(--color-borda)"
                role="button" tabIndex={0} aria-label={`Quadradinho coluna ${c + 1}, linha ${l + 1}, ${on ? 'pintado' : 'vazio'}`}
                className="cursor-pointer" onClick={() => alternar(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); alternar(i) } }}
              />
              <rect x={(2 * COLS - 1 - c) * T} y={l * T} width={T} height={T} fill={on ? 'var(--color-coral)' : 'transparent'} stroke="var(--color-borda)" pointerEvents="none" />
            </g>
          )
        })}
        {eixo && <line x1={COLS * T} y1={0} x2={COLS * T} y2={LINHAS * T} stroke="var(--color-texto)" strokeWidth="2" strokeDasharray="5 3" />}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={exemplo} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">Ver um exemplo</button>
        <button type="button" onClick={limpar} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Limpar</button>
        <button type="button" onClick={() => setEixo((v) => !v)} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">{eixo ? 'Esconder o eixo' : 'Mostrar o eixo'}</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0
          ? 'Toque nos quadradinhos da esquerda. O espelho copia cada um do outro lado do eixo, à mesma distância.'
          : `Você pintou ${total} quadradinho${total > 1 ? 's' : ''} e o reflexo tem ${total} também. Um quadradinho a 1 casa do eixo vai para 1 casa do outro lado; um a 5 casas vai para 5 casas.`}
      </p>
    </div>
  )
}
