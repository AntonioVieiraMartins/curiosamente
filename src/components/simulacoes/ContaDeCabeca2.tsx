import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Dois jeitos de somar de cabeça: por partes (dezenas e unidades) e completando a dezena
export default function ContaDeCabeca2() {
  const [a, setA] = useState(47)
  const [b, setB] = useState(36)
  const [jeito, setJeito] = useState<'partes' | 'completar'>('partes')
  const ida = useId(), idb = useId()
  const dezA = Math.floor(a / 10) * 10, uniA = a % 10
  const dezB = Math.floor(b / 10) * 10, uniB = b % 10
  const falta = (10 - uniA) % 10
  const usa = Math.min(falta, b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Somar de cabeça</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Primeiro: <b>{a}</b>
          <input id={ida} type="range" min={11} max={99} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Segundo: <b>{b}</b>
          <input id={idb} type="range" min={11} max={99} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Jeito de somar">
        <button type="button" aria-pressed={jeito === 'partes'} onClick={() => setJeito('partes')} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${jeito === 'partes' ? 'border-azul bg-fundo' : 'border-borda'}`}>Por partes</button>
        <button type="button" aria-pressed={jeito === 'completar'} onClick={() => setJeito('completar')} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${jeito === 'completar' ? 'border-azul bg-fundo' : 'border-borda'}`}>Completando a dezena</button>
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {jeito === 'partes' ? (
          <>
            <p>1) Dezenas: {dezA} + {dezB} = {dezA + dezB}.</p>
            <p>2) Unidades: {uniA} + {uniB} = {uniA + uniB}.</p>
            <p>3) Junta: {dezA + dezB} + {uniA + uniB} = <b>{a + b}</b>.</p>
          </>
        ) : (
          <>
            <p>1) {a} precisa de {falta} para chegar a {a + falta}.</p>
            <p>2) Tiro {usa} do {b}: sobram {b - usa}.</p>
            <p>3) {a + usa} + {b - usa} = <b>{a + b}</b>.</p>
          </>
        )}
      </div>
    </div>
  )
}
