import { etapas, type IdEtapa } from '../../conteudo/etapas'

type Props = {
  atual: number
  concluidas: IdEtapa[]
  liberadasAte: number // a pessoa pode voltar a qualquer etapa até esta
  cor: string
  aoEscolher: (indice: number) => void
}

// Lista das 7 etapas (computador). No celular quem mostra o andamento é o TopoCelular.
export default function SumarioEtapas({ atual, concluidas, liberadasAte, cor, aoEscolher }: Props) {
  return (
    <nav aria-label="Etapas da cápsula">
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
                <span className="flex flex-col leading-tight">
                  <span className={ativa ? 'font-semibold' : liberada ? 'text-texto hover:underline' : 'text-suave'}>{e.nome}</span>
                  <span className="text-xs text-suave">{e.dica}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
