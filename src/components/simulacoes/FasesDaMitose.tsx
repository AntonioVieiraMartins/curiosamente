import { useState } from 'react'
import { cartao } from '../ui/estilos'

const fases = [
  { nome: 'Interfase', texto: 'A célula cresce e copia o DNA. Cada cromossomo vira duas cópias coladas. Ainda não dá para ver os cromossomos.' },
  { nome: 'Prófase', texto: 'Os cromossomos se enrolam e ficam visíveis, em forma de X (duas cromátides irmãs). A membrana do núcleo se desfaz.' },
  { nome: 'Metáfase', texto: 'Os cromossomos se alinham no meio da célula, presos por fibras do fuso.' },
  { nome: 'Anáfase', texto: 'As fibras puxam: cada X se divide e as cromátides irmãs vão para lados opostos.' },
  { nome: 'Télofase', texto: 'Dois grupos completos de cromossomos chegam aos polos. Novos núcleos se formam.' },
  { nome: 'Citocinese', texto: 'O citoplasma se divide. Agora são duas células-filhas, com o mesmo DNA da célula-mãe.' },
]

// Cada cromossomo é um traço; X = duas cromátides coladas
function Cromo({ x, y, duplo, cor }: { x: number; y: number; duplo: boolean; cor: string }) {
  return duplo ? (
    <g stroke={cor} strokeWidth="4" strokeLinecap="round">
      <line x1={x - 5} y1={y - 7} x2={x + 5} y2={y + 7} />
      <line x1={x + 5} y1={y - 7} x2={x - 5} y2={y + 7} />
    </g>
  ) : (
    <line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke={cor} strokeWidth="4" strokeLinecap="round" />
  )
}

export default function FasesDaMitose() {
  const [i, setI] = useState(0)
  const ys = [38, 58, 78, 98]
  const cA = 'var(--color-azul)'
  const cB = 'var(--color-coral)'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mitose, fase por fase</p>
      <svg viewBox="0 0 220 140" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Fase: ${fases[i].nome}`}>
        {i < 4 && <ellipse cx="110" cy="70" rx="85" ry="58" fill="none" stroke="var(--color-suave)" strokeWidth="2" />}
        {i === 4 && <path d="M110 14 C60 8 22 40 22 70 C22 100 60 132 110 126 C160 132 198 100 198 70 C198 40 160 8 110 14 Z" fill="none" stroke="var(--color-suave)" strokeWidth="2" />}
        {i === 5 && (
          <>
            <ellipse cx="62" cy="70" rx="48" ry="50" fill="none" stroke="var(--color-suave)" strokeWidth="2" />
            <ellipse cx="158" cy="70" rx="48" ry="50" fill="none" stroke="var(--color-suave)" strokeWidth="2" />
          </>
        )}
        {i === 0 && <circle cx="110" cy="70" r="30" fill="var(--color-azul)" fillOpacity="0.15" stroke="var(--color-azul)" strokeDasharray="3 3" />}
        {i === 1 && ys.map((y, k) => <Cromo key={k} x={80 + (k % 2) * 55 + (k > 1 ? 8 : 0)} y={y + 4} duplo cor={k % 2 ? cB : cA} />)}
        {i === 2 && ys.map((y, k) => <Cromo key={k} x={110} y={y} duplo cor={k % 2 ? cB : cA} />)}
        {i === 3 && ys.map((y, k) => (
          <g key={k}>
            <Cromo x={72} y={y} duplo={false} cor={k % 2 ? cB : cA} />
            <Cromo x={148} y={y} duplo={false} cor={k % 2 ? cB : cA} />
          </g>
        ))}
        {i === 4 && ys.map((y, k) => (
          <g key={k}>
            <Cromo x={50} y={y} duplo={false} cor={k % 2 ? cB : cA} />
            <Cromo x={170} y={y} duplo={false} cor={k % 2 ? cB : cA} />
          </g>
        ))}
        {i === 5 && ys.map((y, k) => (
          <g key={k}>
            <Cromo x={62} y={y} duplo={false} cor={k % 2 ? cB : cA} />
            <Cromo x={158} y={y} duplo={false} cor={k % 2 ? cB : cA} />
          </g>
        ))}
        {i === 2 && <line x1="110" y1="10" x2="110" y2="130" stroke="var(--color-suave)" strokeDasharray="2 4" />}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a fase">
        {fases.map((f, k) => (
          <button key={f.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{f.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{fases[i].nome}.</strong> {fases[i].texto}</p>
    </div>
  )
}
