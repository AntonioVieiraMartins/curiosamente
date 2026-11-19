import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const F = '-12,-24 -12,24 -2,24 -2,6 10,6 10,-4 -2,-4 -2,-14 14,-14 14,-24'
const U = 20 // tamanho de uma casa da grade
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)

// Deslizar (translação): toda a figura anda o mesmo tanto, na mesma direção
export default function DeslizarFigura() {
  const idX = useId()
  const idY = useId()
  const [dx, setDx] = useState(3)
  const [dy, setDy] = useState(-1)

  const lado = dx === 0 ? '' : `${Math.abs(dx)} casa${Math.abs(dx) > 1 ? 's' : ''} para a ${dx > 0 ? 'direita' : 'esquerda'}`
  const alto = dy === 0 ? '' : `${Math.abs(dy)} casa${Math.abs(dy) > 1 ? 's' : ''} para ${dy > 0 ? 'cima' : 'baixo'}`
  const frase = [lado, alto].filter(Boolean).join(' e ') || 'a figura não saiu do lugar'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Deslizando uma figura (translação)</p>
      <svg viewBox="-140 -90 280 180" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Figura deslizada ${frase}`}>
        {Array.from({ length: 15 }, (_, i) => -140 + i * U).map((x) => <line key={`v${x}`} x1={x} y1={-90} x2={x} y2={90} stroke="var(--color-borda)" />)}
        {Array.from({ length: 10 }, (_, i) => -90 + i * U).map((y) => <line key={`h${y}`} x1={-140} y1={y} x2={140} y2={y} stroke="var(--color-borda)" />)}
        <g transform="translate(-50 0)"><polygon points={F} fill="none" stroke="var(--color-suave)" strokeDasharray="3 3" /></g>
        <line x1={-50} y1={0} x2={-50 + dx * U} y2={-dy * U} stroke="var(--color-azul)" strokeWidth="2" strokeDasharray="4 3" />
        <g style={{ transform: `translate(${-50 + dx * U}px, ${-dy * U}px)`, transition: 'transform 0.3s' }}>
          <polygon points={F} fill="var(--color-azul)" fillOpacity="0.35" stroke="var(--color-azul)" strokeWidth="2" />
        </g>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label htmlFor={idX} className="text-sm font-semibold">
          Para os lados: {sinal(dx)}
          <input id={idX} type="range" min={-4} max={4} value={dx} onChange={(e) => setDx(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
        </label>
        <label htmlFor={idY} className="text-sm font-semibold">
          Para cima ou para baixo: {sinal(dy)}
          <input id={idY} type="range" min={-3} max={3} value={dy} onChange={(e) => setDy(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" />
        </label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Deslocamento ({sinal(dx)}, {sinal(dy)}): {frase}. A figura continua do mesmo tamanho, na mesma posição de “virada”.
      </p>
    </div>
  )
}
