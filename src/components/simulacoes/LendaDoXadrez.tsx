import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Grãos de arroz: 1 na primeira casa, dobrando a cada casa. Usamos BigInt porque 2^63 passa do limite dos números comuns.
export default function LendaDoXadrez() {
  const [casa, setCasa] = useState(21)
  const id = useId()
  const nessaCasa = 2n ** BigInt(casa - 1)
  const total = 2n ** BigInt(casa) - 1n
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Arroz no tabuleiro de xadrez</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Casa número: <b>{casa}</b>
        <input id={id} type="range" min={1} max={64} step={1} value={casa} onChange={(e) => setCasa(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-2 grid gap-2 text-center sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Grãos só nesta casa</p><p className="break-all text-xl font-bold">{nessaCasa.toLocaleString('pt-BR')}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Total até aqui</p><p className="break-all text-xl font-bold">{total.toLocaleString('pt-BR')}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {casa < 11 ? 'No começo os números parecem inofensivos.' : casa < 21 ? 'Já passou de mil grãos numa só casa, e o ritmo só acelera.' : casa === 21 ? 'Casa 21: mais de um milhão de grãos só nela (1.048.576).' : 'Cada casa tem tantos grãos quanto TODAS as anteriores somadas, mais um.'} A casa {casa} tem 2 elevado a {casa - 1} grãos.
      </p>
    </div>
  )
}
