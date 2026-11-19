import { Link, useNavigate } from 'react-router-dom'
import EnigmaDoDia from '../../components/inicio/EnigmaDoDia'
import Vitrine from '../../components/inicio/Vitrine'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario, cartao } from '../../components/ui/estilos'
import { capsulas, linhaDaCapsula, linhas } from '../../conteudo/indice'
import CartaoDaLinha from '../../components/mapa/CartaoDaLinha'
import { useTodoProgresso } from '../../hooks/useProgresso'
import { useCartoesDeHoje } from '../../hooks/useCartoes'

const combinado = [
  { titulo: 'Errar não tira ponto', texto: 'Quando você erra, a cápsula mostra o porquê.' },
  { titulo: 'Palpite antes de ver', texto: 'Toda simulação começa com uma aposta sua.' },
  { titulo: 'Fato é fato', texto: 'E quando é mito, a gente chama de mito.' },
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
      <EnigmaDoDia />

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

      <Vitrine />

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
