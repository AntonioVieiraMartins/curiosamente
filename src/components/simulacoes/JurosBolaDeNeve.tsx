import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
const CAPITAL = 1000

// Juros simples: todo mês rende sobre os R$ 1.000 do começo.
// Juros compostos: todo mês rende sobre o que já existe, inclusive os juros anteriores (bola de neve).
export default function JurosBolaDeNeve() {
  const [taxa, setTaxa] = useState(5)
  const [meses, setMeses] = useState(24)
  const idTaxa = useId()
  const idMeses = useId()

  const simples = (m: number) => CAPITAL * (1 + (taxa / 100) * m)
  const compostos = (m: number) => CAPITAL * Math.pow(1 + taxa / 100, m)
  const topo = compostos(meses)

  const L = 300
  const A = 150
  const ponto = (m: number, v: number) => `${(m / meses) * L},${A - ((v - CAPITAL) / Math.max(1, topo - CAPITAL)) * (A - 6) - 3}`
  const caminho = (f: (m: number) => number) => Array.from({ length: meses + 1 }, (_, m) => ponto(m, f(m))).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">R$ 1.000 rendendo (ou uma dívida crescendo)</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={idTaxa} className="block font-semibold">Juros: <span className="text-azul-texto">{taxa}% ao mês</span></label>
          <input id={idTaxa} type="range" min={1} max={15} value={taxa} onChange={(e) => setTaxa(Number(e.target.value))}
            className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
        </div>
        <div>
          <label htmlFor={idMeses} className="block font-semibold">Tempo: <span className="text-azul-texto">{meses} meses</span></label>
          <input id={idMeses} type="range" min={1} max={48} value={meses} onChange={(e) => setMeses(Number(e.target.value))}
            className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
        </div>
      </div>

      <svg viewBox={`0 0 ${L} ${A}`} className="mt-3 w-full overflow-visible" aria-hidden="true">
        <line x1="0" y1={A} x2={L} y2={A} stroke="var(--color-borda)" />
        <polyline points={caminho(simples)} fill="none" stroke="var(--color-amarelo-escuro)" strokeWidth="2.5" strokeDasharray="6 4" />
        <polyline points={caminho(compostos)} fill="none" stroke="var(--color-coral)" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      <div aria-live="polite" className="mt-4 grid grid-cols-2 gap-3">
        <p className="rounded-2xl bg-fundo p-3">
          <span className="block text-sm text-suave">Juros simples (tracejado)</span>
          <span className="font-serif text-2xl font-medium text-amarelo-escuro">{reais(simples(meses))}</span>
        </p>
        <p className="rounded-2xl bg-coral/10 p-3">
          <span className="block text-sm text-suave">Juros compostos (contínuo)</span>
          <span className="font-serif text-2xl font-medium text-coral">{reais(compostos(meses))}</span>
        </p>
      </div>
      <p className="mt-3 text-[15px] text-suave">
        Diferença: {reais(compostos(meses) - simples(meses))} só de "juros sobre juros".
      </p>
    </div>
  )
}
