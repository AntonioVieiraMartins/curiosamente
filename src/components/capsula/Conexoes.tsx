import Ficha from '../ui/Ficha'
import { buscarCapsula } from '../../conteudo/indice'
import { useCapsula } from './ContextoCapsula'
import RevisaoDaCapsula from './RevisaoDaCapsula'

// Última etapa: para onde ir depois e de onde vieram os fatos
export default function Conexoes() {
  const { meta } = useCapsula()
  const proximas = meta.conexoes.map((id) => buscarCapsula(id)).filter((c) => c !== undefined)

  return (
    <div data-sem-narracao className="space-y-10">
      <RevisaoDaCapsula />
      {proximas.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {proximas.map((c) => <Ficha key={c.id} capsula={c} />)}
        </div>
      )}
      <section>
        <h3 className="font-semibold">Fontes</h3>
        <ul className="mt-3 space-y-2 text-[15px]">
          {meta.fontes.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noreferrer" className="text-azul-texto underline-offset-4 hover:underline">
                {f.titulo}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
