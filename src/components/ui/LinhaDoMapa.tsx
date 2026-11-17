import { Link } from 'react-router-dom'
import { buscarCapsula, modulosComputacao, type Linha, type ResumoCapsula } from '../../conteudo/indice'
import SiglaLinha from './SiglaLinha'
import Estacao from './Estacao'
import { cartao } from './estilos'
import { useTodoProgresso } from '../../hooks/useProgresso'

type Props = { linha: Linha; capsulas: ResumoCapsula[] }

// Uma linha de metrô: o trilho colorido na vertical e cada cápsula como estação
export default function LinhaDoMapa({ linha, capsulas }: Props) {
  const progresso = useTodoProgresso()
  return (
    <section aria-labelledby={`linha-${linha.id}`} className={`${cartao} p-5 sm:p-6`}>
      <header className="flex items-center gap-3">
        <SiglaLinha linha={linha} />
        <div>
          <h2 id={`linha-${linha.id}`} className="font-semibold leading-tight">{linha.nome}</h2>
          <p className="text-sm text-suave">{linha.descricao} · {capsulas.length} estações</p>
        </div>
      </header>

      <ol className="relative mt-5">
        <span aria-hidden="true" className="absolute bottom-4 left-[9px] top-4 w-1.5 rounded-full" style={{ background: linha.cor }} />
        {capsulas.map((cap, i) => {
          const comecaModulo = cap.area === 'computacao' && (i === 0 || capsulas[i - 1].trilha !== cap.trilha)
          const baldeacoes = (cap.conexoes ?? []).map((id) => buscarCapsula(id)?.titulo).filter(Boolean)
          return (
            <li key={cap.id} className="relative">
              {comecaModulo && (
                <p className={`ml-10 text-xs font-semibold uppercase tracking-wider text-suave ${i === 0 ? '' : 'mt-5'}`}>
                  {modulosComputacao[cap.trilha]}
                </p>
              )}
              <Link to={`/capsula/${cap.id}`} className="group flex items-start gap-4 rounded-xl py-2.5">
                <Estacao
                  cor={linha.cor}
                  baldeacao={baldeacoes.length > 0}
                  proxima={cap.estado === 'proxima'}
                  concluida={progresso[cap.id]?.concluida}
                />
                <span className="min-w-0 leading-snug">
                  <span className="font-semibold group-hover:text-azul-texto">{cap.titulo}</span>
                  {progresso[cap.id]?.concluida && <span className="sr-only"> (concluída)</span>}
                  {cap.estado === 'proxima' && (
                    <span className="ml-2 whitespace-nowrap rounded-full bg-amarelo px-2 py-0.5 align-middle text-[11px] font-semibold">
                      próxima parada
                    </span>
                  )}
                  <span className="mt-0.5 block text-[15px] text-suave">{cap.gancho}</span>
                  {baldeacoes.length > 0 && (
                    <span className="mt-1 block text-xs text-suave">Baldeação: {baldeacoes.join(', ')}</span>
                  )}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
