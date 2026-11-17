import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Cada letra é guardada como um número (tabela ASCII), e cada número como 8 bits.
export default function TextoEmBinario() {
  const [texto, setTexto] = useState('Oi')
  const id = useId()
  const letras = [...texto].slice(0, 8)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Seu nome em bits</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Digite até 8 letras (sem acento)</label>
      <input id={id} value={texto} maxLength={8} onChange={(e) => setTexto(e.target.value)}
        className="mt-1 h-12 w-full max-w-xs rounded-xl border-2 border-borda px-3 text-lg focus:border-azul focus:outline-none" />

      <ul className="mt-3 space-y-1.5" aria-live="polite">
        {letras.map((c, i) => {
          const codigo = c.codePointAt(0) ?? 0
          const ascii = codigo < 128
          return (
            <li key={i} className="grid grid-cols-[2rem_3.5rem_1fr] items-center gap-2 rounded-lg bg-fundo px-3 py-1.5 text-[15px]">
              <strong className="text-center text-lg">{c === ' ' ? '␣' : c}</strong>
              <span className="text-suave">{ascii ? codigo : '?'}</span>
              <span className="font-mono tracking-wider text-coral">{ascii ? codigo.toString(2).padStart(8, '0') : 'fora da tabela ASCII'}</span>
            </li>
          )
        })}
      </ul>
      {letras.length === 0 && <p className="mt-3 text-suave">Digite algo para ver os bits.</p>}
    </div>
  )
}
