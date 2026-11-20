import { Link } from 'react-router-dom'
import SiglaLinha from '../ui/SiglaLinha'
import { buscarCapsula, numeroDaCapsula, type Linha } from '../../conteudo/indice'

type Props = { id: string; titulo: string; linha: Linha; detalhes: string }

// Botão de voltar ao mapa + linha, grupo e número + título da cápsula
export default function CabecalhoCapsula({ id, titulo, linha, detalhes }: Props) {
  const grupo = buscarCapsula(id)?.grupo
  return (
    <header className="flex items-center gap-4 sm:gap-[18px]">
      <Link
        to={`/mapa?linha=${linha.id}`}
        aria-label="Voltar para o mapa"
        className="grid size-11 shrink-0 place-items-center rounded-full border border-borda bg-superficie text-texto hover:border-texto/30"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </Link>
      <div className="min-w-0 flex-1">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-suave">
          <SiglaLinha linha={linha} tamanho="p" />
          {linha.nome.replace('Matemática · ', '')}{grupo ? ` · ${grupo}` : ''} · nº {numeroDaCapsula(id)}
        </span>
        <h1 className="mt-1 font-serif text-[1.65rem] font-medium leading-tight sm:text-[34px]">{titulo}</h1>
        <p className="mt-1 text-sm text-suave">{detalhes}</p>
      </div>
    </header>
  )
}
