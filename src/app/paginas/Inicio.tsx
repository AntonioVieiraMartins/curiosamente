import { Link, useNavigate } from 'react-router-dom'
import PortasTeaser from '../../components/simulacoes/PortasTeaser'
import Rotulo from '../../components/ui/Rotulo'
import Ficha from '../../components/ui/Ficha'
import { botaoPrimario, botaoSecundario, cartao } from '../../components/ui/estilos'
import { buscarCapsula, capsulas, linhaDaCapsula, linhas, numeroDaCapsula } from '../../conteudo/indice'
import CartaoDaLinha from '../../components/mapa/CartaoDaLinha'
import { useTodoProgresso } from '../../hooks/useProgresso'
import { useCartoesDeHoje } from '../../hooks/useCartoes'

const paraComecar = ['monty-hall', 'porcentagem', 'como-a-internet-funciona'].map((id) => buscarCapsula(id)!)

const combinado = [
  { titulo: 'Errar não tira ponto', texto: 'Quando você erra, a cápsula mostra o porquê.' },
  { titulo: 'Palpite antes de ver', texto: 'Toda simulação começa com uma aposta sua.' },
  { titulo: 'Fato tem fonte', texto: 'E quando é mito, a gente chama de mito.' },
]

export default function Inicio() {
  const pendentes = useCartoesDeHoje().length
  const progresso = useTodoProgresso()
  const navegar = useNavigate()
  const retomar = capsulas.find((c) => !progresso[c.id]?.concluida && (progresso[c.id]?.concluidas.length ?? 0) > 0)
  return (
    <>
      {pendentes > 0 && (
        <section className="mx-auto max-w-3xl px-4 pt-6">
          <div className={`${cartao} flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5`}>
            <p className="font-semibold">
              Você tem {pendentes} {pendentes === 1 ? 'cartão' : 'cartões'} para revisar hoje.
            </p>
            <Link to="/revisar" className={botaoPrimario}>Revisar agora</Link>
          </div>
        </section>
      )}
      {retomar && (
        <section className="mx-auto max-w-3xl px-4 pt-4">
          <div className={`${cartao} flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5`}>
            <p className="min-w-0 font-semibold">
              <span className="block text-sm font-normal text-suave">Continuar de onde parou</span>
              {retomar.titulo}
            </p>
            <Link to={`/capsula/${retomar.id}`} className={botaoPrimario}>Continuar</Link>
          </div>
        </section>
      )}
      <section className="mx-auto max-w-3xl px-4 pt-12 text-center sm:pt-20">
        <Rotulo>Cápsula nº {numeroDaCapsula('monty-hall')} · Probabilidade</Rotulo>
        <h1 className="mt-4 font-serif text-[2.7rem] font-medium leading-[1.06] tracking-tight sm:text-[4rem]">
          Trocar de porta <em>dobra</em> suas chances.
        </h1>
        {/* Fonte: John Tierney, "Behind Monty Hall's Doors", The New York Times, 21/07/1991 */}
        <p className="mx-auto mt-5 max-w-xl text-lg text-suave">
          Quando essa pergunta saiu numa revista, em 1990, milhares de leitores escreveram dizendo que a resposta
          estava errada. Antes de qualquer explicação, faça o seu palpite.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/capsula/monty-hall" className={botaoPrimario}>Começar a cápsula</Link>
          <Link to="/mapa" className={botaoSecundario}>Ver o mapa</Link>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-xl px-4 sm:mt-16">
        <PortasTeaser />
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4 sm:mt-24">
        <Rotulo>Suas trilhas</Rotulo>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-[2.6rem]">
          Escolha uma linha e <em>siga seu ritmo.</em>
        </h2>
        <p className="mt-3 max-w-xl text-suave">Cada cápsula tem sete paradas curtas: do palpite ao desafio final. Você decide até onde ir.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {linhas.map((l) => (
            <CartaoDaLinha
              key={l.id}
              linha={l}
              capsulas={capsulas.filter((c) => linhaDaCapsula(c) === l.id)}
              progresso={progresso}
              aoAbrir={() => navegar(`/mapa?linha=${l.id}`)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:mt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Rotulo>Para começar</Rotulo>
            <h2 className="mt-3 font-serif text-3xl font-medium sm:text-[2.6rem]">Três portas de entrada</h2>
          </div>
          <Link to="/mapa" className="font-semibold text-azul-texto hover:underline">Ver todas as cápsulas →</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {paraComecar.map((cap) => <Ficha key={cap.id} capsula={cap} />)}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:mt-32">
        <h2 className="text-center font-serif text-3xl font-medium sm:text-[2.6rem]">O combinado</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {combinado.map((c) => (
            <li key={c.titulo} className={`${cartao} p-6`}>
              <p className="font-semibold">{c.titulo}</p>
              <p className="mt-1 text-suave">{c.texto}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
