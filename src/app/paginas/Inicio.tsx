import { Link } from 'react-router-dom'
import PortasTeaser from '../../components/simulacoes/PortasTeaser'
import Rotulo from '../../components/ui/Rotulo'
import Ficha from '../../components/ui/Ficha'
import { botaoPrimario, botaoSecundario, cartao } from '../../components/ui/estilos'
import { buscarCapsula, numeroDaCapsula } from '../../conteudo/indice'
import { etapas } from '../../conteudo/etapas'
import { useCartoesDeHoje } from '../../hooks/useCartoes'

const paraComecar = ['monty-hall', 'porcentagem', 'como-a-internet-funciona'].map((id) => buscarCapsula(id)!)

const combinado = [
  { titulo: 'Errar não tira ponto', texto: 'Quando você erra, a cápsula mostra o porquê.' },
  { titulo: 'Palpite antes de ver', texto: 'Toda simulação começa com uma aposta sua.' },
  { titulo: 'Fato tem fonte', texto: 'E quando é mito, a gente chama de mito.' },
]

export default function Inicio() {
  const pendentes = useCartoesDeHoje().length
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

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:mt-32">
        <Rotulo>Como é uma cápsula</Rotulo>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-[2.6rem]">
          Nada de aula de 40 minutos. <em>Sete paradas</em>, e você decide até onde ir.
        </h2>
        <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {etapas.map((e, i) => (
            <li key={e.id} className={`${cartao} rounded-2xl p-5`}>
              <span className="grid size-8 place-items-center rounded-full bg-fundo text-sm font-bold text-suave">{i + 1}</span>
              <p className="mt-4 font-semibold">{e.nome}</p>
              <p className="mt-0.5 text-sm leading-snug text-suave">{e.dica}</p>
            </li>
          ))}
        </ol>
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
