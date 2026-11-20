import { Suspense, useRef } from 'react'
import CabecalhoCapsula from './CabecalhoCapsula'
import SumarioEtapas from './SumarioEtapas'
import ApoioDaCapsula from './ApoioDaCapsula'
import TopoCelular from './TopoCelular'
import RodapeCelular from './RodapeCelular'
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
  const { progresso, irPara, concluirEtapa, registrarPontuacao, registrarPalpite, registrarAprofundar } = useProgresso(meta.id)
  const topo = useRef<HTMLDivElement>(null)
  const conteudoRef = useRef<HTMLDivElement>(null)

  // Progresso salvo antes de a etapa Aprofundar virar caixas dentro do Conteúdo pode apontar além da última
  const atual = Math.min(progresso.etapaAtual, etapas.length - 1)
  const indicesFeitos = progresso.concluidas.map((id) => etapas.findIndex((e) => e.id === id))
  const liberadasAte = Math.max(atual, ...indicesFeitos.map((i) => i + 1))

  // Concluir a etapa salva o progresso e rende XP (cada etapa rende uma vez só)
  function concluirEstaEtapa() {
    const etapa = etapas[atual].id
    concluirEtapa(atual)
    void ganharXp('etapa', `${meta.id}:${etapa}`, meta.id)
    if (atual === etapas.length - 1) void ganharXp('capsula', meta.id, meta.id, meta.xp)
  }

  // Ao trocar de etapa, volta a tela para o começo do texto
  function mudarPara(acao: () => void) {
    acao()
    topo.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const concluirComRolagem = () => mudarPara(concluirEstaEtapa)
  const voltarComRolagem = () => mudarPara(() => irPara(atual - 1))

  return (
    <div className="mx-auto max-w-[1360px] px-4 pb-40 pt-2 sm:pt-6 lg:px-9 lg:pb-12 lg:pt-7">
      <TopoCelular atual={atual} concluidas={progresso.concluidas} cor={linha.cor} linhaId={linha.id} />
      <div className="hidden lg:block">
        <CabecalhoCapsula
          id={meta.id}
          titulo={meta.titulo}
          linha={linha}
          detalhes={`${meta.duracaoMin} min · ${meta.xp} XP · progresso salvo neste navegador`}
        />
      </div>

      <div ref={topo} className="mt-4 grid scroll-mt-24 gap-6 lg:mt-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_300px]">
        <aside className="hidden lg:sticky lg:top-6 lg:block lg:self-start">
          <SumarioEtapas
            atual={atual}
            concluidas={progresso.concluidas}
            liberadasAte={liberadasAte}
            cor={linha.cor}
            aoEscolher={(i) => mudarPara(() => irPara(i))}
          />
        </aside>

        <div className="min-w-0">
          <article className={`${cartao} min-w-0 px-5 py-7 sm:px-10 sm:py-10`}>
            <h1 className="font-serif text-[1.65rem] font-medium leading-tight lg:hidden">{meta.titulo}</h1>
            <Rotulo className="mt-2 lg:mt-0">Etapa {atual + 1} · {etapas[atual].nome}</Rotulo>
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
                  registrarAprofundar,
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

            <NavegacaoEtapas atual={atual} concluida={progresso.concluida} aoVoltar={voltarComRolagem} aoConcluir={concluirComRolagem} />
          </article>
          {/* Aqui entra o player da narração: fica colado no pé da tela enquanto o texto rola */}
          <div id="player-narracao" className="sticky bottom-[5.5rem] z-30 mt-4 lg:bottom-4" />
          <div className="mt-6 hidden lg:block xl:hidden"><ApoioDaCapsula capsulaId={meta.id} progresso={progresso} /></div>
        </div>

        <div className="hidden xl:block xl:sticky xl:top-6 xl:self-start"><ApoioDaCapsula capsulaId={meta.id} progresso={progresso} /></div>
      </div>

      <RodapeCelular capsulaId={meta.id} atual={atual} concluida={progresso.concluida} aoVoltar={voltarComRolagem} aoConcluir={concluirComRolagem} />
    </div>
  )
}
