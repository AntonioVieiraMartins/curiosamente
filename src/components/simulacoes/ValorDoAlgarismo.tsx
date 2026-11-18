import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const casas = ['unidades', 'dezenas', 'centenas', 'unidades de milhar', 'dezenas de milhar', 'centenas de milhar']

// Toque num algarismo para ver quanto ele vale naquela posição
export default function ValorDoAlgarismo() {
  const [texto, setTexto] = useState('5305')
  const [sel, setSel] = useState(0)
  const id = useId()
  const digs = texto.split('')
  const i = Math.min(sel, digs.length - 1)
  const pos = digs.length - 1 - i
  const valor = Number(digs[i] ?? 0) * 10 ** pos
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto vale cada algarismo?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Digite um número (até 6 algarismos)</label>
      <input
        id={id}
        inputMode="numeric"
        value={texto}
        onChange={(e) => { const t = e.target.value.replace(/\D/g, '').slice(0, 6); setTexto(t || '0'); setSel(0) }}
        className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-fundo px-3 text-lg"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {digs.map((x, k) => (
          <button key={k} type="button" aria-pressed={i === k} onClick={() => setSel(k)} className={`min-h-12 min-w-12 rounded-xl border-2 text-2xl font-bold ${i === k ? 'border-azul bg-fundo' : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O algarismo <b>{digs[i]}</b> está na casa das <b>{casas[pos]}</b>. Aqui ele vale <b>{valor.toLocaleString('pt-BR')}</b>
        {` (${digs[i]} × ${(10 ** pos).toLocaleString('pt-BR')}).`}
      </p>
    </div>
  )
}
