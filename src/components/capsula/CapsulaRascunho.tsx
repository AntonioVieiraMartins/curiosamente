import { Link } from 'react-router-dom'
import CabecalhoCapsula from './CabecalhoCapsula'
import Rotulo from '../ui/Rotulo'
import { botaoSecundario, cartao } from '../ui/estilos'
import { buscarLinha, type ResumoCapsula } from '../../conteudo/indice'

// Cápsula planejada que ainda não tem texto: mostra só o gancho e avisa com honestidade
export default function CapsulaRascunho({ capsula }: { capsula: ResumoCapsula }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-6 sm:pt-12">
      <CabecalhoCapsula id={capsula.id} titulo={capsula.titulo} linha={buscarLinha(capsula)} detalhes="Em breve" />

      <article className={`${cartao} mt-8 px-5 py-7 sm:px-12 sm:py-12`}>
        <Rotulo>Prévia · Gancho</Rotulo>
        <p className="mt-4 font-serif text-[1.9rem] font-medium leading-snug sm:text-[2.4rem]">{capsula.gancho}</p>
        <div className="mt-8 rounded-2xl border border-amarelo bg-amarelo/15 p-5">
          <p className="font-semibold">Esta cápsula ainda está sendo escrita</p>
          <p className="mt-1 text-suave">Enquanto isso, que tal explorar outra estação do mapa?</p>
        </div>
        <Link to="/mapa" className={`${botaoSecundario} mt-8`}>← Voltar ao mapa</Link>
      </article>
    </div>
  )
}
