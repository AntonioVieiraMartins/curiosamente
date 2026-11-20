import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Cada par de cromossomos pode ir de dois jeitos para o gameta: 2 elevado ao número de pares
export default function CombinacoesDeGametas() {
  const [pares, setPares] = useState(3)
  const total = 2 ** pares
  const cenas = Math.min(total, 8)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Gametas diferentes</p>
      <svg viewBox="0 0 220 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${total} tipos de gameta`}>
        {Array.from({ length: cenas }, (_, k) => (
          <g key={k}>
            {Array.from({ length: Math.min(pares, 3) }, (_, p) => {
              const daMae = (k >> p) & 1
              return <rect key={p} x={12 + k * 26} y={14 + p * 18} width={18} height={12} rx={3} fill={daMae ? 'var(--color-azul)' : 'var(--color-coral)'} fillOpacity="0.8" />
            })}
          </g>
        ))}
        <text x="110" y="82" textAnchor="middle" fontSize="9" fill="var(--color-suave)">Desenho: os 3 primeiros pares. Azul = veio da mãe, coral = do pai</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Pares de cromossomos" valor={pares} min={1} max={23} passo={1} aoMudar={setPares} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {pares} {pares === 1 ? 'par' : 'pares'}, uma pessoa pode fazer {total.toLocaleString('pt-BR')} tipos de gameta (2 elevado a {pares}).
        {pares === 23 ? ' É o caso humano: mais de 8 milhões de tipos, sem contar o crossing-over. Dois gametas se encontram, então os filhos de um casal podem ser mais de 70 trilhões de combinações.' : ''}
      </p>
    </div>
  )
}
