import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Duas pessoas mexem em ramos diferentes. Juntar é fácil se mexeram em linhas diferentes e vira conflito se foi na mesma.
export default function RamosEConflito() {
  const [mesma, setMesma] = useState(false)
  const [juntou, setJuntou] = useState(false)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Arquivo com 3 linhas: título, introdução e rodapé</p>
      <ul className="mt-2 space-y-1.5 text-[15px]">
        <li className="rounded-xl border-2 border-azul px-3 py-2"><strong>Ramo main:</strong> muda a linha do <strong>título</strong>.</li>
        <li className="rounded-xl border-2 border-verde px-3 py-2"><strong>Ramo nova-ideia:</strong> muda a linha do <strong>{mesma ? 'título' : 'rodapé'}</strong>.</li>
      </ul>
      <button type="button" aria-pressed={mesma} onClick={() => { setMesma(!mesma); setJuntou(false) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${mesma ? 'border-coral' : 'border-borda'}`}>{mesma ? 'As duas pessoas mexeram na MESMA linha' : 'As duas pessoas mexeram em linhas DIFERENTES'}</button>
      <button type="button" onClick={() => setJuntou(true)} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-mono font-semibold">git merge nova-ideia</button>
      {juntou && (
        <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${mesma ? 'bg-amarelo' : 'bg-fundo'}`}>
          {mesma
            ? 'CONFLITO! Os dois mudaram o título de jeitos diferentes. O Git não sabe qual é o certo e pede para uma pessoa escolher (ou combinar) as duas versões.'
            : 'Juntou sozinho! Cada pessoa mexeu numa linha, então o Git consegue combinar as duas mudanças automaticamente.'}
        </p>
      )}
    </div>
  )
}
