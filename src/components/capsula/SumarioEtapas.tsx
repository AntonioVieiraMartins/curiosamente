import { etapas, type IdEtapa } from '../../conteudo/etapas'

type Props = {
  atual: number
  concluidas: IdEtapa[]
  liberadasAte: number // a pessoa pode voltar a qualquer etapa até esta
  cor: string
  aoEscolher: (indice: number) => void
}

// Mostra em que etapa a pessoa está. No celular vira uma barra de pedaços, um por etapa.
export default function SumarioEtapas({ atual, concluidas, liberadasAte, cor, aoEscolher }: Props) {
  return (
    <nav aria-label="Etapas da cápsula">
      <div className="lg:hidden">
        <p className="text-sm text-suave">
          Etapa {atual + 1} de {etapas.length} · <span className="font-semibold text-texto">{etapas[atual].nome}</span>
        </p>
        <div className="mt-2 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${etapas.length}, 1fr)` }}>
          {etapas.map((e, i) => (
            <span
              key={e.id}
              className="h-1.5 rounded-full"
              style={{ background: concluidas.includes(e.id) || i === atual ? cor : 'var(--color-borda)' }}
            />
          ))}
        </div>
      </div>

      <ol className="relative hidden lg:block">
        <span aria-hidden="true" className="absolute bottom-5 left-[13px] top-5 w-0.5 rounded-full bg-borda" />
        {etapas.map((e, i) => {
          const ativa = i === atual
          const feita = concluidas.includes(e.id)
          const liberada = i <= liberadasAte
          return (
            <li key={e.id} className="relative">
              <button
                type="button"
                disabled={!liberada}
                onClick={() => aoEscolher(i)}
                aria-current={ativa ? 'step' : undefined}
                className="flex w-full items-center gap-3 rounded-xl py-2 text-left disabled:cursor-not-allowed"
              >
                <span
                  className={`relative z-10 grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                    ativa || feita ? 'text-white' : 'border-2 border-borda bg-fundo text-suave'
                  }`}
                  style={ativa || feita ? { background: cor, opacity: ativa ? 1 : 0.55 } : undefined}
                >
                  {feita && !ativa ? '✓' : i + 1}
                </span>
                <span className={ativa ? 'font-semibold' : liberada ? 'text-texto hover:underline' : 'text-suave'}>
                  {e.nome}                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
