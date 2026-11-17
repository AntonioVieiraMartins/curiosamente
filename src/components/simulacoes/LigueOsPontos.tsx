import { useState, type MouseEvent } from 'react'
import { cartao } from '../ui/estilos'

type Ponto = [number, number]
const FIGURAS: Record<string, Ponto[]> = {
  Casa: [[1, 1], [5, 1], [5, 4], [3, 6], [1, 4], [1, 1]],
  Barco: [[-4, 0], [-2, -2], [2, -2], [4, 0], [0, 5], [-4, 0], [4, 0]],
}
const LIM = 6
const CASA = 25
const T = (2 * LIM + 1) * CASA
const X = (x: number) => T / 2 + x * CASA
const Y = (y: number) => T / 2 - y * CASA
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const par = ([x, y]: Ponto) => `(${sinal(x)}, ${sinal(y)})`

// Ligue os pontos, como nos desenhos de criança: toque no ponto pedido, na ordem
export default function LigueOsPontos() {
  const [nome, setNome] = useState('Casa')
  const [feitos, setFeitos] = useState(0)
  const [aviso, setAviso] = useState('')
  const alvo = FIGURAS[nome]
  const acabou = feitos === alvo.length

  function tocar(e: MouseEvent<SVGSVGElement>) {
    if (acabou) return
    const caixa = e.currentTarget.getBoundingClientRect()
    const x = Math.round(((((e.clientX - caixa.left) / caixa.width) * T) - T / 2) / CASA)
    const y = Math.round((T / 2 - ((e.clientY - caixa.top) / caixa.height) * T) / CASA)
    const esperado = alvo[feitos]
    if (x === esperado[0] && y === esperado[1]) {
      setFeitos(feitos + 1)
      setAviso('')
    } else {
      setAviso(`Você tocou em ${par([x, y])}. Procure ${par(esperado)}: ande ${Math.abs(esperado[0])} ${esperado[0] >= 0 ? 'para a direita' : 'para a esquerda'} e ${Math.abs(esperado[1])} ${esperado[1] >= 0 ? 'para cima' : 'para baixo'}.`)
    }
  }
  function trocar(n: string) {
    setNome(n)
    setFeitos(0)
    setAviso('')
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ligue os pontos</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Figura">
        {Object.keys(FIGURAS).map((n) => (
          <button key={n} type="button" aria-pressed={nome === n} onClick={() => trocar(n)}
            className={`min-h-11 flex-1 rounded-full border-2 font-semibold ${nome === n ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}>{n}</button>
        ))}
      </div>

      <svg viewBox={`0 0 ${T} ${T}`} onClick={tocar} className="mx-auto mt-3 w-full max-w-sm cursor-pointer touch-manipulation" aria-hidden="true">
        {Array.from({ length: 2 * LIM + 1 }, (_, i) => i - LIM).map((n) => (
          <g key={n}>
            <line x1={X(n)} x2={X(n)} y1={0} y2={T} stroke="var(--color-borda)" />
            <line y1={Y(n)} y2={Y(n)} x1={0} x2={T} stroke="var(--color-borda)" />
          </g>
        ))}
        <line x1={0} x2={T} y1={T / 2} y2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <line y1={0} y2={T} x1={T / 2} x2={T / 2} stroke="var(--color-texto)" strokeWidth="1.5" />
        <polyline points={alvo.slice(0, feitos).map(([x, y]) => `${X(x)},${Y(y)}`).join(' ')} fill="none" stroke="var(--color-coral)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {alvo.slice(0, feitos).map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r="4" fill="var(--color-coral)" />)}
      </svg>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {acabou
          ? <strong className="text-verde">Desenho completo! Você usou {alvo.length} pontos.</strong>
          : <>Ponto {feitos + 1} de {alvo.length}: toque em <strong className="text-coral">{par(alvo[feitos])}</strong>. {aviso}</>}
      </p>
      <button type="button" onClick={() => trocar(nome)} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Recomeçar</button>
    </div>
  )
}
