import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReguaXp from '../../components/ui/ReguaXp'
import Semana from '../../components/ui/Semana'
import Selo from '../../components/ui/Selo'
import Historico from '../../components/ui/Historico'
import Avatar from '../../components/ui/Avatar'
import EditarPerfil from '../../components/ui/EditarPerfil'
import CapsulasConcluidas from '../../components/ui/CapsulasConcluidas'
import SeuMapa from '../../components/ui/SeuMapa'
import { botaoSecundario, cartao } from '../../components/ui/estilos'
import { conquistas } from '../../conteudo/conquistas'
import { useDiasDeEstudo } from '../../hooks/useDiasDeEstudo'
import { useConquistas } from '../../lib/conquistasLocal'
import { useConta } from '../../lib/conta'
import { diaEmBrasilia, maiorSequencia, semanaAtual, sequenciaAtual, somarDias } from '../../lib/datas'
import { sairDaConta } from '../../lib/sincronizacao'
import { supabaseConfigurado } from '../../lib/supabase'
import { useXpLocal } from '../../lib/xpLocal'
import { calcularNivel, xpDoNivel } from '../../lib/xp'

export default function Perfil() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()
  const dias = useDiasDeEstudo()
  const obtidas = useConquistas()
  const [editando, setEditando] = useState(false)

  const hoje = diaEmBrasilia()
  // O banco só atualiza a sequência quando a pessoa ganha XP: se o último estudo foi antes de ontem, ela já zerou
  const sequenciaViva = perfil?.ultimo_dia_estudo && perfil.ultimo_dia_estudo >= somarDias(hoje, -1) ? perfil.sequencia_atual : 0

  // Com conta, os números vêm do banco; como visitante, do navegador
  const dados = usuario && perfil
    ? { nome: perfil.nome, avatar: perfil.avatar, xp: perfil.xp_total, nivel: perfil.nivel, seq: sequenciaViva, maior: perfil.maior_sequencia }
    : { nome: 'Visitante', avatar: 'lente', xp: xpVisitante, nivel: calcularNivel(xpVisitante), seq: sequenciaAtual(dias), maior: maiorSequencia(dias) }

  const numeros = [
    { rotulo: 'Nível', valor: dados.nivel },
    { rotulo: 'XP total', valor: dados.xp },
    { rotulo: 'Dias seguidos', valor: dados.seq },
    { rotulo: 'Maior sequência', valor: dados.maior },
  ]
  const semana = semanaAtual(hoje)
  const diasNaSemana = semana.filter((d) => dias.has(d)).length

  const nivelAtual = dados.nivel
  const inicioNivel = xpDoNivel(nivelAtual)
  const fimNivel = xpDoNivel(nivelAtual + 1)
  const pctNivel = Math.round(((dados.xp - inicioNivel) / (fimNivel - inicioNivel)) * 100)

  const botaoSair = usuario ? (
    <button type="button" onClick={() => void sairDaConta()} className={botaoSecundario}>Sair da conta</button>
  ) : null

  return (
    <div className="mx-auto grid max-w-[1200px] gap-5 px-4 pt-2 sm:pt-9 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:px-10">
      <div className="flex min-w-0 flex-col gap-5">
        <header className={`${cartao} flex flex-wrap items-center gap-4 p-4 sm:gap-5 sm:p-6`}>
          <Avatar id={dados.avatar} tamanho={64} />
          <div className="min-w-0 flex-1 basis-40">
            <h1 className="font-serif text-[26px] font-medium leading-tight sm:text-[32px] [overflow-wrap:anywhere]">{dados.nome}</h1>
            <p className="mt-1 max-w-md text-[13px] text-suave sm:text-[15px]">
              {usuario
                ? <>Progresso salvo na conta<span className="hidden sm:inline"> ({usuario.email})</span>.</>
                : 'Seu progresso fica guardado neste navegador. Com uma conta, ele vai junto para qualquer aparelho.'}
            </p>
          </div>
          {usuario ? (
            <div className="flex flex-wrap gap-2">
              {!editando && (
                <button type="button" onClick={() => setEditando(true)} aria-label="Editar perfil" className={`${botaoSecundario} max-sm:size-11 max-sm:p-0`}>
                  <svg className="sm:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" /></svg>
                  <span className="hidden sm:inline">Editar perfil</span>
                </button>
              )}
              <span className="hidden sm:inline-flex">{botaoSair}</span>
            </div>
          ) : supabaseConfigurado ? (
            <Link to="/entrar" className={`${botaoSecundario} max-sm:w-full`}>Entrar ou criar conta</Link>
          ) : null}
          {editando && perfil && (
            <EditarPerfil nomeAtual={perfil.nome} avatarAtual={perfil.avatar} aoFechar={() => setEditando(false)} />
          )}
        </header>

        <section className="rounded-[20px] bg-texto p-5 text-white sm:hidden" aria-label="Nível">
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-3xl font-medium">Nível {nivelAtual}</span>
            <span className="text-sm text-white/70">{dados.xp.toLocaleString('pt-BR')} XP</span>
          </div>
          <div role="progressbar" aria-label="XP até o próximo nível" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pctNivel} className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white" style={{ width: `${Math.max(pctNivel, 2)}%` }} />
          </div>
          <p className="mt-2 text-sm text-white/70">Faltam {fimNivel - dados.xp} XP para o nível {nivelAtual + 1}</p>
        </section>

        <dl className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
          {numeros.map((n) => (
            <div key={n.rotulo} className={`${cartao} p-4 sm:p-5 ${n.rotulo === 'Nível' ? 'max-sm:hidden' : ''}`}>
              <dt className="text-[13px] text-suave sm:text-sm">{n.rotulo}</dt>
              <dd className="mt-1 font-serif text-3xl font-medium sm:text-4xl">{n.valor}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-5 md:grid-cols-2">
          <section className={`${cartao} hidden p-6 sm:block`}>
            <h2 className="font-semibold">Rumo ao próximo nível</h2>
            <div className="mt-5"><ReguaXp xpTotal={dados.xp} /></div>
          </section>
          <section className={`${cartao} p-5 sm:p-6`}>
            <h2 className="font-semibold">Esta semana</h2>
            <p className="mt-1 text-sm text-suave">
              {diasNaSemana === 0 ? 'Nenhum dia de estudo ainda. Uma etapa já conta.' : `${diasNaSemana} de 7 dias com estudo.`}
            </p>
            <div className="mt-4"><Semana estudados={semana.map((d) => dias.has(d))} hoje={semana.indexOf(hoje)} /></div>
          </section>
        </div>

        <section className={`${cartao} p-5 sm:p-6`}>
          <h2 className="font-semibold">Conquistas</h2>
          <p className="mt-1 text-sm text-suave">
            {Object.keys(obtidas).length} de {conquistas.length} medalhas
          </p>
          <ul className="-mx-5 mt-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 sm:overflow-visible sm:px-0 lg:grid-cols-6">
            {conquistas.map((c) => (
              <Selo key={c.id} nome={c.nome} descricao={c.descricao} obtidaEm={obtidas[c.id]} />
            ))}
          </ul>
        </section>

        <section className={`${cartao} p-5 sm:p-6`}>
          <h2 className="font-semibold">Seu mapa</h2>
          <SeuMapa />
        </section>

        <section className={`${cartao} p-5 sm:p-6`}>
          <h2 className="font-semibold">Cápsulas concluídas</h2>
          <CapsulasConcluidas />
        </section>

        <div className="sm:hidden">{botaoSair}</div>
      </div>

      <section className={`${cartao} h-fit p-5 sm:p-6 lg:sticky lg:top-6`}>
        <h2 className="font-semibold">Linha do tempo</h2>
        <Historico />
      </section>
    </div>
  )
}
