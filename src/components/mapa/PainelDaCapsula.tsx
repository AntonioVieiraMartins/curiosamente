import { Link } from 'react-router-dom'
import SiglaLinha from '../ui/SiglaLinha'
import { botaoPrimario, cartao } from '../ui/estilos'
import { buscarCapsula, buscarLinha, numeroDaCapsula, type ResumoCapsula } from '../../conteudo/indice'
import { etapas } from '../../conteudo/etapas'
import { buscarConteudo } from '../../conteudo/registro'
import type { ProgressoCapsula } from '../../lib/progressoLocal'

// Painel fixo à direita do Mapa (só no computador): resumo da cápsula escolhida
export default function PainelDaCapsula({ cap, progresso }: { cap: ResumoCapsula; progresso?: ProgressoCapsula }) {
  const linha = buscarLinha(cap)
  const meta = buscarConteudo(cap.id)?.meta
  const pronta = cap.estado === 'pronta'
  const feita = progresso?.concluida
  const andando = !feita && (progresso?.concluidas.length ?? 0) > 0
  const atual = progresso ? Math.min(progresso.etapaAtual, etapas.length - 1) : 0
  const titulos = (ids?: string[]) => (ids ?? []).map((id) => buscarCapsula(id)?.titulo).filter(Boolean).join(' · ')
  const baldeacoes = titulos(meta?.conexoes ?? cap.conexoes)
  const antes = titulos(meta?.prerequisitos)

  return (
    <aside aria-label="Cápsula escolhida" className={`${cartao} sticky top-6 hidden flex-col gap-4 p-6 lg:flex`}>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-suave">
        <SiglaLinha linha={linha} tamanho="p" />
        {linha.nome}{cap.grupo ? ` · ${cap.grupo}` : ''} · nº {numeroDaCapsula(cap.id)}
      </span>
      <h2 className="font-serif text-[30px] font-medium leading-tight">{cap.titulo}</h2>
      <p className="font-serif text-lg leading-snug text-suave">{cap.gancho}</p>

      {pronta ? (
        <>
          <ul className="flex flex-wrap gap-2 text-sm font-semibold">
            <li className="rounded-full bg-fundo px-3 py-1.5">{cap.duracaoMin ?? 40} min</li>
            <li className="rounded-full bg-fundo px-3 py-1.5">{meta?.xp ?? 100} XP</li>
          </ul>
          <div className="flex flex-col gap-2">
            <ol className="grid grid-cols-7 gap-1.5" aria-label="Etapas">
              {etapas.map((e, i) => {
                const feitaE = progresso?.concluidas.includes(e.id)
                const cor = feitaE ? linha.cor : andando && i === atual ? `color-mix(in srgb, ${linha.cor} 35%, white)` : 'var(--color-borda)'
                return <li key={e.id} className="h-2 rounded" style={{ background: cor }}><span className="sr-only">{e.nome}</span></li>
              })}
            </ol>
            <span className="text-sm text-suave">
              {feita ? 'Você já concluiu esta cápsula.' : andando ? `Você parou na etapa ${atual + 1} · ${etapas[atual].nome}` : 'Ainda não começou.'}
            </span>
          </div>
        </>
      ) : (
        <p className="rounded-xl bg-fundo p-3 text-sm text-suave">Esta cápsula ainda está em preparação. Você pode ver o gancho dela.</p>
      )}

      {baldeacoes && (
        <div>
          <p className="text-sm font-semibold">Baldeação</p>
          <p className="text-sm text-suave">{baldeacoes}</p>
        </div>
      )}
      {antes && (
        <div>
          <p className="text-sm font-semibold">Antes desta, ajuda ter visto</p>
          <p className="text-sm text-suave">{antes}</p>
        </div>
      )}

      <Link to={`/capsula/${cap.id}`} className={`${botaoPrimario} min-h-12`}>
        {!pronta ? 'Ver o gancho' : feita ? 'Rever a cápsula' : andando ? 'Continuar a cápsula' : 'Começar'}
      </Link>
    </aside>
  )
}
