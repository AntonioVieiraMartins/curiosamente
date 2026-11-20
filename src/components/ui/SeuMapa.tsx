import { Link } from 'react-router-dom'
import SiglaLinha from './SiglaLinha'
import { capsulas, linhaDaCapsula, linhas } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'

// Uma linha por trilha, uma bolinha por cápsula pronta (cheia = concluída) e "feitas/prontas"
export default function SeuMapa() {
  const progresso = useTodoProgresso()
  const itens = linhas
    .map((l) => ({ linha: l, prontas: capsulas.filter((c) => c.estado === 'pronta' && linhaDaCapsula(c) === l.id) }))
    .filter((i) => i.prontas.length > 0)

  return (
    <ul className="mt-4 flex flex-col gap-3">
      {itens.map(({ linha, prontas }) => {
        const feitas = prontas.filter((c) => progresso[c.id]?.concluida).length
        return (
          <li key={linha.id}>
            <Link to={`/mapa?linha=${linha.id}`} className="flex min-h-11 items-center gap-3">
              <SiglaLinha linha={linha} tamanho="n" />
              <span className="w-28 shrink-0 text-[15px] font-semibold sm:w-32">{linha.nome.replace('Matemática · ', '')}</span>
              <span className="flex min-w-0 flex-1 flex-wrap gap-1" aria-hidden="true">
                {prontas.map((c) => (
                  <span
                    key={c.id}
                    className="size-2.5 rounded-full border-2"
                    style={{ borderColor: linha.cor, background: progresso[c.id]?.concluida ? linha.cor : 'transparent' }}
                  />
                ))}
              </span>
              <span className="text-[13px] text-suave">{feitas}/{prontas.length}<span className="sr-only"> cápsulas concluídas</span></span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
