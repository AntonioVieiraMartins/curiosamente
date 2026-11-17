import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'
import Contador from './Contador'

// Multiplicar potências de mesma base: os fatores se juntam e os expoentes se somam.
export default function RegrasDosExpoentes() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(2)
  const base = 2
  const fatores = (n: number, cor: string) => Array.from({ length: n }, (_, i) => (
    <span key={i} className={`grid size-8 place-items-center rounded-full text-sm font-semibold text-white ${cor}`}>{base}</span>
  ))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Juntando potências de base 2</p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Primeira" rotulo="1º expoente" valor={a} min={1} max={5} mudar={setA} />
        <Contador grupo="Segunda" rotulo="2º expoente" valor={b} min={1} max={5} mudar={setB} />
      </div>
      <div className="mt-4 flex flex-wrap gap-1" aria-hidden="true">
        {fatores(a, 'bg-coral')}
        <span className="grid size-8 place-items-center text-suave">×</span>
        {fatores(b, 'bg-azul')}
      </div>
      <div aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4">
        <p>{base}{sobrescrito(a)} × {base}{sobrescrito(b)} = {a + b} fatores de {base} = <strong className="text-coral">{base}{sobrescrito(a + b)}</strong> = {base ** (a + b)}</p>
        <p className="text-[15px] text-suave">Divisão: {base}{sobrescrito(a + b)} ÷ {base}{sobrescrito(b)} = {base}{sobrescrito(a)} (cortam-se {b} fatores).</p>
      </div>
    </div>
  )
}
