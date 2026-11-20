import { Link } from 'react-router-dom'
import { modulosComputacao, type Linha, type ResumoCapsula } from '../../conteudo/indice'
import type { ProgressoCapsula } from '../../lib/progressoLocal'
import Estacao, { type EstadoEstacao } from './Estacao'

type Props = {
  linha: Linha
  capsulas: ResumoCapsula[]
  progresso: Record<string, ProgressoCapsula>
  selecionadaId?: string
  // No computador, clicar numa estação abre o painel da direita; no celular abre a cápsula
  aoEscolher?: (cap: ResumoCapsula) => void
}

// Título que divide a linha em partes: módulo na computação, ano ou tema na matemática
const tituloDoGrupo = (cap: ResumoCapsula) => (cap.area === 'computacao' ? modulosComputacao[cap.trilha] : cap.grupo)
const noComputador = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches

// Uma linha de metrô: o trilho colorido na vertical e cada cápsula como estação
export default function LinhaDoMapa({ linha, capsulas, progresso, selecionadaId, aoEscolher }: Props) {
  const andando = (id: string) => !progresso[id]?.concluida && (progresso[id]?.concluidas.length ?? 0) > 0
  const aqui = capsulas.find((c) => andando(c.id))?.id // só uma "você está aqui" por linha

  return (
    <ol className="relative">
      <span aria-hidden="true" className="absolute bottom-4 left-4 top-4 w-1.5 -translate-x-1/2 rounded-full" style={{ background: linha.cor, opacity: 0.35 }} />
      {capsulas.map((cap, i) => {
        const grupo = tituloDoGrupo(cap)
        const comecaGrupo = grupo !== undefined && (i === 0 || tituloDoGrupo(capsulas[i - 1]) !== grupo)
        const estado: EstadoEstacao = progresso[cap.id]?.concluida
          ? 'concluida'
          : andando(cap.id)
            ? 'andamento'
            : cap.estado === 'pronta'
              ? 'pronta'
              : 'breve'
        const escolhida = selecionadaId === cap.id
        return (
          <li key={cap.id} className="relative">
            {comecaGrupo && (
              <p className={`ml-12 text-xs font-semibold uppercase tracking-[0.08em] text-suave ${i === 0 ? 'pb-1' : 'pb-1 pt-4'}`}>{grupo}</p>
            )}
            <Link
              to={`/capsula/${cap.id}`}
              aria-current={escolhida ? 'true' : undefined}
              onClick={(e) => {
                if (aoEscolher && noComputador()) {
                  e.preventDefault()
                  aoEscolher(cap)
                }
              }}
              className={`group flex min-h-12 items-center gap-4 rounded-xl py-1 pr-2.5 ${estado === 'breve' ? 'opacity-70' : ''}`}
              style={escolhida || cap.id === aqui ? { background: `color-mix(in srgb, ${linha.cor} 10%, white)` } : undefined}
            >
              <Estacao cor={linha.cor} estado={estado} />
              <span className="flex min-w-0 flex-1 flex-col leading-snug">
                <span className="font-semibold group-hover:text-azul-texto">
                  {cap.titulo}
                  {estado === 'concluida' && <span className="sr-only"> (concluída)</span>}
                </span>
                <span className="text-[13px] text-suave">{cap.gancho}</span>
              </span>
              {cap.id === aqui && (
                <span className="shrink-0 whitespace-nowrap rounded-full bg-amarelo px-2.5 py-1 text-xs font-semibold">você está aqui</span>
              )}
              {estado === 'breve' && <span className="shrink-0 text-xs font-semibold text-suave">em breve</span>}
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
