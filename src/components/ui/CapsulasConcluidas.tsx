import { Link } from 'react-router-dom'
import { buscarCapsula, buscarLinha } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'
import Estacao from './Estacao'

const formatar = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : ''

// As estações já visitadas, com a cor da linha de cada uma (como no mapa)
export default function CapsulasConcluidas() {
  const progresso = useTodoProgresso()
  const feitas = Object.entries(progresso)
    .filter(([, p]) => p.concluida)
    .map(([id, p]) => ({ cap: buscarCapsula(id), quando: p.concluidaEm }))
    .filter((x) => x.cap !== undefined)

  if (feitas.length === 0) {
    return (
      <p className="mt-3 text-suave">
        Nenhuma ainda. Escolha uma estação no <Link to="/mapa" className="font-semibold text-azul-texto underline">mapa</Link>.
      </p>
    )
  }

  return (
    <ul className="mt-4 space-y-2">
      {feitas.map(({ cap, quando }) => (
        <li key={cap!.id}>
          <Link to={`/capsula/${cap!.id}`} className="flex min-h-11 items-center gap-3 rounded-xl hover:text-azul-texto">
            <Estacao cor={buscarLinha(cap!).cor} concluida />
            <span className="font-semibold">{cap!.titulo}</span>
            <span className="text-sm text-suave">{formatar(quando)}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
