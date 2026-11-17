import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Ponto = [number, number]
const ORIGINAL: Ponto[] = [[1, 1], [4, 1], [2, 3]]
const NOMES = ['A', 'B', 'C']
const LIM = 6
const CASA = 25
const T = (2 * LIM + 1) * CASA
const X = (x: number) => T / 2 + x * CASA
const Y = (y: number) => T / 2 - y * CASA
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const botao = 'min-h-11 rounded-full border border-borda px-4 font-semibold enabled:hover:border-texto/30 disabled:opacity-30'

// Mover e espelhar uma figura é só mexer nos números de cada ponto
export default function ReflexoEMovimento() {
  const [pontos, setPontos] = useState<Ponto[]>(ORIGINAL)

  function aplicar(f: (p: Ponto) => Ponto) {
    const novos = pontos.map(f)
    if (novos.every(([x, y]) => Math.abs(x) <= LIM && Math.abs(y) <= LIM)) setPontos(novos)
  }
  const caminho = (ps: Ponto[]) => ps.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mover e espelhar um triângulo</p>

      <svg viewBox={`0 0 ${T} ${T}`} className="mx-auto mt-3 w-full max-w-sm" aria-hidden="true">
        {Array.from({ length: 2 * LIM + 1 }, (_, i) => i - LIM).map((n) => (
          <g key={n}>
            <line x1={X(n)} x2={X(n)} y1={0} y2={T} stroke="var(--color-borda)" />
            <line y1={Y(n)} y2={Y(n)} x1={0} x2={T} stroke="var(--color-borda)" />
          </g>
        ))}
        <line x1={0} x2={T} y1={T / 2} y2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line y1={0} y2={T} x1={T / 2} x2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <polygon points={caminho(ORIGINAL)} fill="none" stroke="var(--color-suave)" strokeDasharray="4 3" />
        <polygon points={caminho(pontos)} fill="var(--color-coral)" fillOpacity="0.3" stroke="var(--color-coral)" strokeWidth="2" />
        {pontos.map(([x, y], i) => (
          <text key={i} x={X(x) + 6} y={Y(y) - 6} fontSize="12" fontWeight="700" fill="var(--color-coral)">{NOMES[i]}</text>
        ))}
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [x - 1, y])}>← esquerda</button>
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [x + 1, y])}>direita →</button>
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [x, y + 1])}>↑ cima</button>
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [x, y - 1])}>↓ baixo</button>
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [x, -y])}>Espelhar no eixo x</button>
        <button type="button" className={botao} onClick={() => aplicar(([x, y]) => [-x, y])}>Espelhar no eixo y</button>
        <button type="button" className={`${botao} col-span-2`} onClick={() => setPontos(ORIGINAL)}>Voltar ao começo</button>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {pontos.map(([x, y], i) => `${NOMES[i]}(${sinal(x)}, ${sinal(y)})`).join('  ')}
      </p>
    </div>
  )
}
