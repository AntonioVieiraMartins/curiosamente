import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Cada divisão dobra o número de células: depois de n divisões há 2 elevado a n
export default function DobrandoCelulas() {
  const [n, setN] = useState(4)
  const total = 2 ** n
  const bolinhas = Math.min(total, 64)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma célula, muitas divisões</p>
      <svg viewBox="0 0 220 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${total} células depois de ${n} divisões`}>
        {Array.from({ length: bolinhas }, (_, k) => (
          <circle key={k} cx={16 + (k % 16) * 12.5} cy={20 + Math.floor(k / 16) * 20} r="5" fill="var(--color-azul)" fillOpacity="0.75" />
        ))}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Divisões seguidas" valor={n} min={0} max={30} passo={1} aoMudar={setN} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Depois de {n} {n === 1 ? 'divisão' : 'divisões'} há {total.toLocaleString('pt-BR')} {total === 1 ? 'célula' : 'células'} (2 elevado a {n}).
        {total > 64 ? ' O desenho mostra só as primeiras 64.' : ''}
        {n >= 20 ? ' É mais do que uma cidade grande, saindo de uma única célula.' : ''}
        {n >= 30 ? ' Passa de 1 bilhão: por isso o corpo, com dezenas de trilhões de células, precisa de poucas dezenas de gerações de divisões.' : ''}
      </p>
    </div>
  )
}
