import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'
import { mmc } from '../../lib/fracoes'

const TOTAL = 72

// Duas luzes piscam de a em a e de b em b segundos. Onde as duas piscam são os múltiplos comuns; o primeiro é o MMC.
export default function Semaforos() {
  const [a, setA] = useState(4)
  const [b, setB] = useState(6)
  const comum = mmc(a, b)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Dois semáforos piscando</p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Luz vermelha" rotulo="Pisca a cada (s)" valor={a} min={2} max={9} mudar={setA} />
        <Contador grupo="Luz azul" rotulo="Pisca a cada (s)" valor={b} min={2} max={9} mudar={setB} />
      </div>

      <div className="mt-4 grid grid-cols-9 gap-1" aria-hidden="true">
        {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => {
          const ra = n % a === 0
          const rb = n % b === 0
          const estilo = ra && rb ? 'bg-verde text-white' : ra ? 'bg-coral/20 text-coral ring-1 ring-coral' : rb ? 'bg-azul-claro text-azul-texto ring-1 ring-azul' : 'bg-fundo text-suave'
          return <span key={n} className={`grid h-8 place-items-center rounded-md text-xs font-semibold ${estilo}`}>{n}</span>
        })}
      </div>

      <p className="mt-2 text-sm text-suave">
        <span className="text-coral">Vermelho</span>: múltiplos de {a}. <span className="text-azul-texto">Azul</span>: múltiplos de {b}. <span className="text-verde">Verde</span>: os dois.
      </p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Piscam juntas pela primeira vez no segundo <strong className="text-verde">{comum}</strong>
        {comum > TOTAL ? ' (passou do quadro)' : ''}. Esse é o <strong>MMC</strong> de {a} e {b}.
      </p>
    </div>
  )
}
