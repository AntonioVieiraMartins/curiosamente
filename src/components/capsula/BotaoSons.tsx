import { useState } from 'react'
import { ligarSons, sonsLigados } from '../../lib/sons'

// Liga e desliga os sons de acerto, erro e etapa concluída
export default function BotaoSons() {
  const [ligado, setLigado] = useState(sonsLigados)
  function alternar() {
    const novo = !ligado
    ligarSons(novo)
    setLigado(novo)
  }
  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={ligado}
      aria-label={ligado ? 'Desligar sons' : 'Ligar sons'}
      title={ligado ? 'Sons ligados' : 'Sons desligados'}
      className="grid size-11 shrink-0 place-items-center rounded-full border border-borda bg-superficie text-texto hover:border-texto/30"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        {ligado ? <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /> : <path d="M17 9l5 6M22 9l-5 6" />}
      </svg>
    </button>
  )
}
