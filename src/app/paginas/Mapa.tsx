import Rotulo from '../../components/ui/Rotulo'
import LinhaDoMapa from '../../components/ui/LinhaDoMapa'
import Estacao from '../../components/ui/Estacao'
import { capsulas, linhas, linhaDaCapsula } from '../../conteudo/indice'

export default function Mapa() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:pt-16">
      <div className="max-w-2xl">
        <Rotulo>Mapa das trilhas</Rotulo>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Escolha uma linha. <em>Desça onde quiser.</em>
        </h1>
        <p className="mt-4 text-lg text-suave">
          Cada linha é uma trilha, numa ordem sugerida. As baldeações ligam ideias de áreas diferentes: potências
          levam ao binário, e o binário leva às fotos digitais.
        </p>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-suave">
        <li className="flex items-center gap-2"><Estacao cor="var(--color-suave)" /> Estação</li>
        <li className="flex items-center gap-2"><Estacao cor="var(--color-suave)" baldeacao /> Baldeação</li>
        <li className="flex items-center gap-2"><Estacao cor="var(--color-suave)" proxima /> Em construção</li>
      </ul>

      {/* Colunas "de jornal": cada linha desce inteira, sem buraco embaixo da linha mais curta */}
      <div className="mt-10 gap-5 md:columns-2">
        {linhas.map((linha) => (
          <div key={linha.id} className="mb-5 break-inside-avoid">
            <LinhaDoMapa linha={linha} capsulas={capsulas.filter((c) => linhaDaCapsula(c) === linha.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}
