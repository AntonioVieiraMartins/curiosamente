import { Link } from 'react-router-dom'
import Rotulo from '../ui/Rotulo'
import { numeroDaCapsula, type Linha } from '../../conteudo/indice'

type Props = { id: string; titulo: string; linha: Linha; detalhes: string }

// Trilha de navegação + número + título da cápsula
export default function CabecalhoCapsula({ id, titulo, linha, detalhes }: Props) {
  return (
    <>
      <nav aria-label="Você está em" className="flex flex-wrap items-center gap-2 text-sm text-suave">
        <Link to="/mapa" className="py-2 hover:text-texto">Mapa</Link>
        <span aria-hidden="true">›</span>
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2 rounded-full" style={{ background: linha.cor }} />
          {linha.nome}
        </span>
      </nav>
      <header className="mt-4 max-w-3xl">
        <Rotulo>Cápsula nº {numeroDaCapsula(id)}</Rotulo>
        <h1 className="mt-3 font-serif text-[2.2rem] font-medium leading-[1.08] tracking-tight sm:text-5xl">{titulo}</h1>
        <p className="mt-3 text-[15px] text-suave">{detalhes}</p>
      </header>
    </>
  )
}
