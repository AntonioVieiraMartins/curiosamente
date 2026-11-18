import type { Linha, ResumoCapsula } from '../../conteudo/indice'
import type { ProgressoCapsula } from '../../lib/progressoLocal'
import SiglaLinha from '../ui/SiglaLinha'

type Props = { linha: Linha; capsulas: ResumoCapsula[]; progresso: Record<string, ProgressoCapsula>; aoAbrir: () => void }

// Cartão da visão geral: progresso da linha e qual é a próxima cápsula
export default function CartaoDaLinha({ linha, capsulas, progresso, aoAbrir }: Props) {
  const prontas = capsulas.filter((c) => c.estado === 'pronta')
  const feitas = prontas.filter((c) => progresso[c.id]?.concluida).length
  const proxima = prontas.find((c) => !progresso[c.id]?.concluida)
  const pct = prontas.length ? Math.round((feitas / prontas.length) * 100) : 0
  return (
    <button
      type="button"
      onClick={aoAbrir}
      className="flex min-h-11 w-full flex-col rounded-[20px] bg-superficie p-5 text-left shadow-cartao transition hover:-translate-y-0.5 hover:shadow-cartao-alto"
    >
      <span className="flex items-center gap-3">
        <SiglaLinha linha={linha} />
        <span>
          <span className="block font-semibold leading-tight">{linha.nome}</span>
          <span className="block text-sm text-suave">{linha.descricao}</span>
        </span>
      </span>
      <span
        role="progressbar"
        aria-label={`Progresso em ${linha.nome}`}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-4 block h-2 overflow-hidden rounded-full bg-fundo"
      >
        <span className="block h-full rounded-full" style={{ width: `${pct}%`, background: linha.cor }} />
      </span>
      <span className="mt-2 block text-sm text-suave">
        {feitas} de {prontas.length} prontas concluídas · {capsulas.length - prontas.length} em breve
      </span>
      <span className="mt-1 block text-sm font-semibold">
        {proxima ? `Próxima: ${proxima.titulo}` : prontas.length === 0 ? 'Cápsulas em preparação' : 'Tudo o que está pronto já foi feito'}
      </span>
    </button>
  )
}
