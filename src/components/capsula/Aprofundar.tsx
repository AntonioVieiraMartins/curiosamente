import { useState, type ReactNode } from 'react'
import { useCapsula } from './ContextoCapsula'
import { ganharXp } from '../../lib/sincronizacao'

// Caixa escondida com a prova, a fórmula e as variações de um tópico do Conteúdo.
// Só aparece (e só é lida pela narração) depois do clique. Abrir a primeira rende o XP de Aprofundar.
export default function Aprofundar({ titulo, children }: { titulo: string; children: ReactNode }) {
  const { meta, registrarAprofundar } = useCapsula()
  const [aberto, setAberto] = useState(false)

  function alternar() {
    if (!aberto) {
      registrarAprofundar()
      void ganharXp('aprofundar', `${meta.id}:aprofundar`, meta.id)
    }
    setAberto(!aberto)
  }

  return (
    <section className="rounded-2xl border-2 border-dashed border-amarelo-escuro/40 bg-amarelo/10">
      <button type="button" onClick={alternar} aria-expanded={aberto}
        className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left sm:px-5">
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-amarelo-escuro">Aprofundar</span>
          <span className="block font-semibold leading-snug">{titulo}</span>
        </span>
        <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-superficie text-xl font-semibold">{aberto ? '−' : '+'}</span>
      </button>
      {aberto && <div className="space-y-5 border-t border-amarelo-escuro/20 px-4 pb-5 pt-5 sm:px-5">{children}</div>}
    </section>
  )
}
