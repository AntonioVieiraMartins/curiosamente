import { Link } from 'react-router-dom'
import { linhas, linhaDaCapsula, numeroDaCapsula, type ResumoCapsula } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'

const textoEstado = { pronta: 'Pronta', proxima: 'Em construção', 'em-breve': 'Em breve' }

// Cartão de uma cápsula. A bolinha colorida mostra a linha do mapa a que ela pertence.
export default function Ficha({ capsula }: { capsula: ResumoCapsula }) {
  const linha = linhas.find((l) => l.id === linhaDaCapsula(capsula))!
  const progresso = useTodoProgresso()[capsula.id]
  const estado = progresso?.concluida
    ? 'Concluída ✓'
    : progresso && progresso.concluidas.length > 0
      ? `Parou na etapa ${progresso.etapaAtual + 1} de 8`
      : textoEstado[capsula.estado]
  return (
    <Link
      to={`/capsula/${capsula.id}`}
      className="group flex h-full flex-col rounded-[20px] bg-superficie p-6 shadow-cartao transition duration-200 hover:-translate-y-0.5 hover:shadow-cartao-alto"
    >
      <div className="flex items-center justify-between gap-3 text-xs text-suave">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-fundo px-2.5 py-1 font-semibold">
          <span aria-hidden="true" className="size-2 rounded-full" style={{ background: linha.cor }} />
          {linha.nome}
        </span>
        <span>Nº {numeroDaCapsula(capsula.id)}</span>
      </div>
      <h3 className="mt-5 font-serif text-[1.65rem] font-medium leading-tight">{capsula.titulo}</h3>
      <p className="mt-2 flex-1 text-suave">{capsula.gancho}</p>
      <p className="mt-6 text-sm text-suave">
        {capsula.duracaoMin ? `${capsula.duracaoMin} min` : 'Duração a definir'} · {estado}
      </p>
    </Link>
  )
}
