import { Suspense, useRef } from 'react'
import CabecalhoCapsula from './CabecalhoCapsula'
import SumarioEtapas from './SumarioEtapas'
import NavegacaoEtapas from './NavegacaoEtapas'
import BarraNarracao from './BarraNarracao'
import { ContextoCapsula } from './ContextoCapsula'
import { componentesMdx } from './componentesMdx'
import Rotulo from '../ui/Rotulo'
import { cartao } from '../ui/estilos'
import { etapas } from '../../conteudo/etapas'
import { buscarLinha } from '../../conteudo/indice'
import type { ConteudoCapsula } from '../../conteudo/registro'
import { useProgresso } from '../../hooks/useProgresso'
import { ganharXp } from '../../lib/sincronizacao'

// Cápsula com conteúdo escrito: mostra uma etapa por vez e salva onde a pessoa parou
export default function CapsulaInterativa({ conteudo }: { conteudo: ConteudoCapsula }) {
  const { meta, Texto } = conteudo
  const linha = buscarLinha(meta)
  const { progresso, irPara, concluirEtapa, registrarPontuacao, registrarPalpite } = useProgresso(meta.id)
  const topo = useRef<HTMLDivElement>(null)
  const conteudoRef = useRef<HTMLDivElement>(null)

  const atual = progresso.etapaAtual
  const indicesFeitos = progresso.concluidas.map((id) => etapas.findIndex((e) => e.id === id))
  const liberadasAte = Math.max(atual, ...indicesFeitos.map((i) => i + 1))

  // Concluir a etapa salva o progresso e rende XP (cada etapa rende uma vez só)
  function concluirEstaEtapa() {
    const etapa = etapas[atual].id
    concluirEtapa(atual)
    if (etapa === 'aprofundar') void ganharXp('aprofundar', `${meta.id}:aprofundar`, meta.id)
    else void ganharXp('etapa', `${meta.id}:${etapa}`, meta.id)
    if (atual === etapas.length - 1) void ganharXp('capsula', meta.id, meta.id, meta.xp)
  }

  // Ao trocar de etapa, volta a tela para o começo do texto
  function mudarPara(acao: () => void) {
    acao()
    topo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6 sm:pt-12">
      <CabecalhoCapsula
        id={meta.id}
        titulo={meta.titulo}
        linha={linha}
        detalhes={`${meta.duracaoMin} min · ${meta.xp} XP · progresso salvo neste navegador`}
      />

      <div ref={topo} className="mt-8 grid scroll-mt-24 gap-6 lg:mt-10 lg:grid-cols-[200px_1fr] lg:gap-12">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <SumarioEtapas
            atual={atual}
            concluidas={progresso.concluidas}
            liberadasAte={liberadasAte}
            cor={linha.cor}
            aoEscolher={(i) => mudarPara(() => irPara(i))}
          />
        </aside>

        <article className={`${cartao} min-w-0 px-5 py-7 sm:px-12 sm:py-12`}>
          <Rotulo>Etapa {atual + 1} · {etapas[atual].nome}</Rotulo>
          {/* A "key" recria a barra a cada etapa, o que para a voz da etapa anterior */}
          <BarraNarracao key={atual} alvo={conteudoRef} />
          <div ref={conteudoRef} className="mt-5">
            <ContextoCapsula.Provider
              value={{
                meta,
                etapaAtual: etapas[atual].id,
                cor: linha.cor,
                registrarPontuacao,
                palpites: progresso.palpites ?? {},
                registrarPalpite,
              }}
            >
              <Suspense fallback={<p className="text-suave">Carregando a cápsula…</p>}>
                <Texto components={componentesMdx} />
              </Suspense>
            </ContextoCapsula.Provider>
          </div>

          {progresso.concluida && atual === etapas.length - 1 && (
            <p className="mt-8 rounded-2xl bg-verde/10 p-5 font-semibold text-verde">
              Cápsula concluída! Repetir agora rende só XP de revisão.
            </p>
          )}

          <NavegacaoEtapas
            atual={atual}
            concluida={progresso.concluida}
            aoVoltar={() => mudarPara(() => irPara(atual - 1))}
            aoConcluir={() => mudarPara(concluirEstaEtapa)}
          />
        </article>
      </div>
    </div>
  )
}
