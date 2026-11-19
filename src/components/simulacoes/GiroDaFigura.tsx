import { useState } from 'react'
import { cartao } from '../ui/estilos'

const F = '-12,-24 -12,24 -2,24 -2,6 10,6 10,-4 -2,-4 -2,-14 14,-14 14,-24'
const FRASES: Record<number, string> = {
  0: 'Sem giro: a figura está como começou.',
  90: 'Giro de 90° (um quarto de volta): o que estava à direita passou para baixo.',
  180: 'Giro de 180° (meia volta): a figura ficou de cabeça para baixo, e direita virou esquerda.',
  270: 'Giro de 270° (três quartos de volta): o que estava à direita passou para cima.',
}

// Girar é rodar a figura em torno de um ponto fixo, o centro do giro
export default function GiroDaFigura() {
  const [ang, setAng] = useState(0)
  const girar = (d: number) => setAng((a) => (a + d + 360) % 360)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Girando em torno de um ponto</p>
      <svg viewBox="-80 -80 160 160" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Letra F girada ${ang} graus no sentido horário`}>
        <g transform="translate(30 0)">
          <polygon points={F} fill="none" stroke="var(--color-suave)" strokeDasharray="3 3" />
        </g>
        <g style={{ transform: `rotate(${ang}deg)`, transition: 'transform 0.4s' }}>
          <g transform="translate(30 0)">
            <polygon points={F} fill="var(--color-coral)" fillOpacity="0.35" stroke="var(--color-coral)" strokeWidth="2" />
          </g>
        </g>
        <circle cx={0} cy={0} r={4} fill="var(--color-texto)" />
        <text x={6} y={-6} fontSize="9" fill="var(--color-texto)">centro do giro</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => girar(90)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">Girar 90° ↻</button>
        <button type="button" onClick={() => girar(180)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">Girar 180°</button>
        <button type="button" onClick={() => girar(-90)} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Girar 90° ↺</button>
        <button type="button" onClick={() => setAng(0)} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Voltar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{FRASES[ang]} O tamanho e o formato não mudaram, só a posição.</p>
    </div>
  )
}
