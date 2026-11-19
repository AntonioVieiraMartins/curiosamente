import { useState, type ReactNode } from 'react'

// Caixa escondida que explica de forma lúdica (história, brincadeira, comparação do dia a dia)
// um trecho que costuma pesar: fórmula, regra ou ideia abstrata. Não rende XP e não é obrigatória.
// Só aparece (e só é lida pela narração) depois do clique.
export default function Brincando({ titulo, children }: { titulo: string; children: ReactNode }) {
  const [aberto, setAberto] = useState(false)

  return (
    <section className="rounded-2xl border-2 border-dashed border-azul/40 bg-azul-claro">
      <button type="button" onClick={() => setAberto(!aberto)} aria-expanded={aberto}
        className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left sm:px-5">
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-azul-texto">Explicação lúdica</span>
          <span className="block font-semibold leading-snug">{titulo}</span>
        </span>
        <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-superficie text-xl font-semibold">{aberto ? '−' : '+'}</span>
      </button>
      {aberto && <div className="space-y-5 border-t border-azul/20 px-4 pb-5 pt-5 sm:px-5">{children}</div>}
    </section>
  )
}
