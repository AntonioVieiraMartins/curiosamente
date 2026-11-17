import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const somaDosAlgarismos = (s: string) => [...s].reduce((t, c) => t + Number(c), 0)

// Os "truques" de divisibilidade, feitos só olhando os algarismos
export default function TesteDeDivisibilidade() {
  const [texto, setTexto] = useState('1296')
  const id = useId()
  const n = texto ? Number(texto) : null
  const soma = somaDosAlgarismos(texto)
  const regras: { d: number; truque: string; vale: boolean }[] = n === null ? [] : [
    { d: 2, truque: `termina em ${texto.slice(-1)} (par?)`, vale: n % 2 === 0 },
    { d: 3, truque: `soma dos algarismos = ${soma}`, vale: soma % 3 === 0 },
    { d: 4, truque: `últimos dois algarismos = ${Number(texto.slice(-2))}`, vale: Number(texto.slice(-2)) % 4 === 0 },
    { d: 5, truque: `termina em ${texto.slice(-1)} (0 ou 5?)`, vale: n % 5 === 0 },
    { d: 6, truque: 'divisível por 2 e por 3', vale: n % 6 === 0 },
    { d: 9, truque: `soma dos algarismos = ${soma}`, vale: soma % 9 === 0 },
    { d: 10, truque: `termina em ${texto.slice(-1)} (zero?)`, vale: n % 10 === 0 },
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Truques de divisibilidade</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Digite um número</label>
      <input id={id} inputMode="numeric" value={texto} maxLength={9}
        onChange={(e) => setTexto(e.target.value.replace(/\D/g, ''))}
        className="mt-1 h-12 w-full max-w-xs rounded-xl border-2 border-borda px-3 text-lg focus:border-azul focus:outline-none" />

      <ul aria-live="polite" className="mt-3 space-y-1">
        {regras.map((r) => (
          <li key={r.d} className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[15px] ${r.vale ? 'bg-verde/10' : 'bg-fundo'}`}>
            <span><strong>{r.d}</strong>: {r.truque}</span>
            <strong className={r.vale ? 'text-verde' : 'text-suave'}>{r.vale ? 'sim' : 'não'}</strong>
          </li>
        ))}
      </ul>
      {regras.length === 0 && <p className="mt-3 text-suave">Digite pelo menos um algarismo.</p>}
    </div>
  )
}
