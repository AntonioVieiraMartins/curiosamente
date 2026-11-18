import { Link } from 'react-router-dom'
import type { Linha, ResumoCapsula } from '../../conteudo/indice'
import type { ProgressoCapsula } from '../../lib/progressoLocal'

// Cartão pequeno de uma cápsula, usado nas listas do mapa
export default function CapsulaCompacta({ cap, linha, progresso }: { cap: ResumoCapsula; linha: Linha; progresso?: ProgressoCapsula }) {
  const feita = progresso?.concluida
  const andando = !feita && (progresso?.concluidas.length ?? 0) > 0
  const pronta = cap.estado === 'pronta'
  const estado = feita
    ? 'Concluída'
    : andando
      ? `Etapa ${progresso!.etapaAtual + 1} de 7`
      : pronta
        ? 'Pronta'
        : cap.estado === 'proxima'
          ? 'Em construção'
          : 'Em breve'
  return (
    <Link
      to={`/capsula/${cap.id}`}
      className={`flex h-full min-h-11 flex-col rounded-2xl border border-borda bg-superficie p-4 transition hover:border-texto/30 ${pronta ? '' : 'opacity-60'}`}
    >
      <span className="flex items-center gap-2 text-xs font-semibold text-suave">
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full"
          style={{ background: feita ? linha.cor : 'transparent', border: `2px solid ${linha.cor}` }}
        />
        {estado}
      </span>
      <span className="mt-2 font-semibold leading-snug">{cap.titulo}</span>
      {cap.duracaoMin && <span className="mt-1 text-sm text-suave">{cap.duracaoMin} min</span>}
    </Link>
  )
}
