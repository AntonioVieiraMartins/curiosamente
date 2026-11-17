import { Children, useState, type ReactNode } from 'react'

// Um passo da conta. Fica dentro de <ExemploResolvido>.
export function Passo({ children }: { children: ReactNode }) {
  return <>{children}</>
}

// Conta resolvida passo a passo: a pessoa revela um passo por vez e pode tentar adivinhar o próximo
export default function ExemploResolvido({ titulo, children }: { titulo: string; children: ReactNode }) {
  const passos = Children.toArray(children)
  const [vistos, setVistos] = useState(1)
  const acabou = vistos >= passos.length

  return (
    <div className="rounded-2xl bg-amarelo/15 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amarelo-escuro">Exemplo resolvido</p>
      <p className="mt-2 font-semibold">{titulo}</p>
      <ol aria-live="polite" className="mt-3 space-y-3">
        {passos.slice(0, vistos).map((p, i) => (
          <li key={i} className="flex gap-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-superficie text-sm font-semibold">{i + 1}</span>
            <div className="pt-0.5 text-[16px] leading-[1.6]">{p}</div>
          </li>
        ))}
      </ol>
      {!acabou && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          <button type="button" onClick={() => setVistos((v) => v + 1)} className="min-h-11 rounded-full bg-superficie px-5 font-semibold shadow-cartao">
            Próximo passo
          </button>
          <button type="button" onClick={() => setVistos(passos.length)} className="min-h-11 font-semibold text-suave hover:text-texto">
            Mostrar tudo
          </button>
        </div>
      )}
    </div>
  )
}
