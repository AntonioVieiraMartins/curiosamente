import { Link } from 'react-router-dom'
import { botaoPrimario, botaoSecundario, cartao } from '../ui/estilos'
import SiglaLinha from '../ui/SiglaLinha'
import { buscarLinha, type ResumoCapsula } from '../../conteudo/indice'
import { etapas } from '../../conteudo/etapas'
import type { ProgressoCapsula } from '../../lib/progressoLocal'

// "Continuar de onde parou": a cápsula em andamento, com as 7 etapas na cor da linha
export default function CartaoContinuar({ cap, progresso }: { cap: ResumoCapsula; progresso: ProgressoCapsula }) {
  const linha = buscarLinha(cap)
  const atual = Math.min(progresso.etapaAtual, etapas.length - 1)
  const feitas = progresso.concluidas.length
  const faltam = Math.max(1, Math.round(((cap.duracaoMin ?? 40) * (etapas.length - feitas)) / etapas.length))

  return (
    <div className={`${cartao} flex flex-col gap-3 rounded-[18px] p-4 sm:col-span-2 sm:gap-3.5 sm:rounded-3xl sm:px-7 sm:py-6`}>
      <div className="flex items-center gap-2.5 text-[13px] text-suave">
        <SiglaLinha linha={linha} tamanho="p" />
        <span>Continuar de onde parou<span className="hidden sm:inline"> · {linha.nome}</span></span>
      </div>
      <h2 className="font-serif text-[22px] font-medium leading-tight sm:text-[28px]">{cap.titulo}</h2>
      <div className="flex flex-col gap-2">
        <ol className="grid grid-cols-7 gap-1 sm:gap-1.5" aria-label="Etapas da cápsula">
          {etapas.map((e, i) => {
            const feita = progresso.concluidas.includes(e.id)
            const cor = feita ? linha.cor : i === atual ? `color-mix(in srgb, ${linha.cor} 35%, white)` : 'var(--color-borda)'
            return (
              <li key={e.id} className="h-1.5 rounded-sm sm:h-2 sm:rounded" style={{ background: cor }}>
                <span className="sr-only">{e.nome}: {feita ? 'concluída' : i === atual ? 'atual' : 'a fazer'}</span>
              </li>
            )
          })}
        </ol>
        <span className="text-[13px] text-suave sm:text-sm">
          Etapa {atual + 1} de {etapas.length} · <strong className="text-texto sm:font-semibold">{etapas[atual].nome}</strong>
          <span className="hidden sm:inline"> · faltam uns {faltam} min</span>
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <Link to={`/capsula/${cap.id}`} className={`${botaoPrimario} min-h-12 max-sm:flex-1`}>Continuar</Link>
        <Link to={`/mapa?linha=${linha.id}`} className={`${botaoSecundario} hidden min-h-12 px-5 py-0 sm:inline-flex`}>Ver a linha</Link>
      </div>
    </div>
  )
}
