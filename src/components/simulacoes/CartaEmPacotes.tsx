import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Troca determinística (sem sorteio): inverte a ordem de chegada para mostrar que a ordem pode mudar.
export default function CartaEmPacotes() {
  const [texto, setTexto] = useState('Oi, tudo bem com você?')
  const [tam, setTam] = useState(5)
  const id = useId()
  const idTam = useId()
  const pacotes = (texto.match(new RegExp(`.{1,${tam}}`, 'g')) ?? []).slice(0, 12)
  const chegada = [...pacotes.keys()].reverse()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mensagem em pacotes</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Mensagem</label>
      <input id={id} value={texto} maxLength={60} onChange={(e) => setTexto(e.target.value)}
        className="mt-1 h-12 w-full rounded-xl border-2 border-borda px-3 text-lg focus:border-azul focus:outline-none" />
      <label htmlFor={idTam} className="mt-3 block font-semibold">Letras por pacote: <span className="text-coral">{tam}</span></label>
      <input id={idTam} type="range" min={2} max={12} value={tam} onChange={(e) => setTam(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <p className="mt-2 text-sm font-semibold text-suave">Pacotes numerados ({pacotes.length}):</p>
      <ul className="mt-1 flex flex-wrap gap-1.5">
        {pacotes.map((p, i) => (
          <li key={i} className="rounded-lg bg-fundo px-2 py-1 font-mono text-sm"><span className="text-coral">{i + 1}</span> “{p}”</li>
        ))}
      </ul>
      <p className="mt-2 text-sm font-semibold text-suave">Chegaram em outra ordem:</p>
      <ul className="mt-1 flex flex-wrap gap-1.5" aria-hidden="true">
        {chegada.map((i) => <li key={i} className="rounded-lg bg-amarelo px-2 py-1 font-mono text-sm">{i + 1}</li>)}
      </ul>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Na chegada, o computador usa os números e monta de novo: <strong>“{pacotes.join('')}”</strong>
      </p>
    </div>
  )
}
