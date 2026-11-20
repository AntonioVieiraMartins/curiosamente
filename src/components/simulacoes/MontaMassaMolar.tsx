import { useState } from 'react'
import { cartao } from '../ui/estilos'

const atomos = [
  { s: 'H', m: 1 }, { s: 'C', m: 12 }, { s: 'N', m: 14 }, { s: 'O', m: 16 },
  { s: 'Na', m: 23 }, { s: 'S', m: 32 }, { s: 'Cl', m: 35.5 }, { s: 'Ca', m: 40 },
]
const modelos = [
  { nome: 'Água', q: { H: 2, O: 1 } },
  { nome: 'Gás carbônico', q: { C: 1, O: 2 } },
  { nome: 'Amônia', q: { N: 1, H: 3 } },
  { nome: 'Sal de cozinha', q: { Na: 1, Cl: 1 } },
  { nome: 'Glicose', q: { C: 6, H: 12, O: 6 } },
] as { nome: string; q: Record<string, number> }[]

// Monte uma molécula somando as massas dos átomos (massa molar em g/mol)
export default function MontaMassaMolar() {
  const [q, setQ] = useState<Record<string, number>>({ H: 2, O: 1 })
  const total = atomos.reduce((s, a) => s + (q[a.s] ?? 0) * a.m, 0)
  const partes = atomos.filter((a) => (q[a.s] ?? 0) > 0)
  const mudar = (s: string, d: number) => setQ((o) => ({ ...o, [s]: Math.max(0, Math.min(12, (o[s] ?? 0) + d)) }))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte a massa molar</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Moléculas prontas">
        {modelos.map((m) => (
          <button key={m.nome} type="button" onClick={() => setQ(m.q)} className="min-h-11 rounded-full border border-borda bg-superficie px-3 text-[14px] font-semibold">{m.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {atomos.map((a) => (
          <div key={a.s} className="flex items-center justify-between rounded-2xl bg-fundo px-2 py-1">
            <span className="text-[15px] font-bold">{a.s}<span className="text-xs font-normal text-suave"> {a.m}</span></span>
            <span className="flex items-center gap-1">
              <button type="button" aria-label={`Menos ${a.s}`} onClick={() => mudar(a.s, -1)} className="size-11 rounded-full border border-borda bg-superficie text-[18px]">−</button>
              <span className="w-5 text-center font-semibold">{q[a.s] ?? 0}</span>
              <button type="button" aria-label={`Mais ${a.s}`} onClick={() => mudar(a.s, 1)} className="size-11 rounded-full border border-borda bg-superficie text-[18px]">+</button>
            </span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {partes.length === 0
          ? 'Escolha alguns átomos.'
          : <><strong>Massa molar = {total.toLocaleString('pt-BR')} g/mol.</strong> Conta: {partes.map((a) => `${q[a.s]} × ${a.m.toLocaleString('pt-BR')}`).join(' + ')} = {total.toLocaleString('pt-BR')}.</>}
      </p>
    </div>
  )
}
