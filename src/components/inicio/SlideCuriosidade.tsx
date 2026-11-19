import { Link } from 'react-router-dom'
import Rotulo from '../ui/Rotulo'
import { botaoPrimario } from '../ui/estilos'
import type { Curiosidade } from '../../conteudo/curiosidades'

const CORES = ['text-azul', 'text-coral', 'text-verde']

// Um fato surpreendente em destaque; a pergunta no fim leva para a cápsula
export default function SlideCuriosidade({ c, posicao }: { c: Curiosidade; posicao: number }) {
  return (
    <div className="slide-entra">
      <Rotulo>Você sabia? · {c.tema}</Rotulo>
      <p className={`mt-5 font-serif text-[2.4rem] font-medium leading-none tracking-tight sm:text-[3.6rem] ${CORES[posicao % CORES.length]}`}>
        {c.destaque}
      </p>
      <p className="mt-2 text-suave">{c.legenda}</p>
      <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed">{c.texto}</p>
      <p className="mt-5 font-serif text-xl font-medium sm:text-2xl">{c.ponte}</p>
      <div className="mt-4">
        <Link to={`/capsula/${c.capsulaId}`} className={botaoPrimario}>Descobrir na cápsula</Link>
      </div>
    </div>
  )
}
