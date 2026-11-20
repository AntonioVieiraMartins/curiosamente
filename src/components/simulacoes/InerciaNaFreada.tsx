import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Quando o carro acelera ou freia, o corpo "fica para trás" ou "vai para a frente" em relação ao banco (inércia)
const ESTADOS = [
  { id: 'freando', nome: 'Carro freando', inclina: 22, texto: 'O carro desacelera, mas o corpo tende a continuar na velocidade que tinha. Para quem está dentro, o corpo é jogado para a frente.' },
  { id: 'constante', nome: 'Velocidade constante', inclina: 0, texto: 'Sem mudança de velocidade, você não sente nada e fica reto no banco.' },
  { id: 'acelerando', nome: 'Carro acelerando', inclina: -22, texto: 'O carro ganha velocidade, mas o corpo tende a ficar com a velocidade antiga. Para quem está dentro, o corpo é empurrado para trás, contra o encosto.' },
] as const

export default function InerciaNaFreada() {
  const [i, setI] = useState(0)
  const e = ESTADOS[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por que o corpo vai para a frente na freada?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Situação do carro">
        {ESTADOS.map((x, k) => (
          <button key={x.id} type="button" aria-pressed={i === k} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 400 140" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={e.nome}>
        <line x1={0} y1={118} x2={400} y2={118} stroke="var(--color-texto)" strokeOpacity="0.4" />
        <rect x={110} y={60} width={180} height={50} rx={10} fill="var(--color-azul)" fillOpacity="0.2" stroke="var(--color-azul)" strokeWidth="2" />
        <circle cx={150} cy={114} r={9} fill="var(--color-texto)" />
        <circle cx={250} cy={114} r={9} fill="var(--color-texto)" />
        <rect x={165} y={70} width={8} height={34} rx={3} fill="var(--color-suave)" />
        <g transform={`rotate(${e.inclina} 190 100)`}>
          <circle cx={190} cy={52} r={11} fill="var(--color-coral)" />
          <rect x={183} y={64} width={14} height={36} rx={5} fill="var(--color-coral)" />
        </g>
        <text x={330} y={40} fontSize="12" fill="var(--color-suave)" textAnchor="middle">→ frente</text>
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{e.texto}</p>
    </div>
  )
}
