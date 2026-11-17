import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReguaXp from '../../components/ui/ReguaXp'
import Semana from '../../components/ui/Semana'
import Selo from '../../components/ui/Selo'
import Historico from '../../components/ui/Historico'
import Avatar from '../../components/ui/Avatar'
import EditarPerfil from '../../components/ui/EditarPerfil'
import CapsulasConcluidas from '../../components/ui/CapsulasConcluidas'
import { botaoSecundario, cartao } from '../../components/ui/estilos'
import { conquistas } from '../../conteudo/conquistas'
import { useDiasDeEstudo } from '../../hooks/useDiasDeEstudo'
import { useConquistas } from '../../lib/conquistasLocal'
import { useConta } from '../../lib/conta'
import { diaEmBrasilia, maiorSequencia, semanaAtual, sequenciaAtual, somarDias } from '../../lib/datas'
import { sairDaConta } from '../../lib/sincronizacao'
import { supabaseConfigurado } from '../../lib/supabase'
import { useXpLocal } from '../../lib/xpLocal'
import { calcularNivel } from '../../lib/xp'

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

  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 sm:pt-16">
      <header className={`${cartao} flex flex-wrap items-center gap-5 p-6`}>
        <Avatar id={dados.avatar} tamanho={64} />
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-3xl font-medium [overflow-wrap:anywhere]">{dados.nome}</h1>
          <p className="mt-1 max-w-md text-[15px] text-suave">
            {usuario
              ? `Conectado como ${usuario.email}. Seu progresso está salvo na conta.`
              : 'Seu progresso fica guardado neste navegador. Com uma conta, ele vai junto para qualquer aparelho.'}
          </p>
        </div>
        {usuario ? (
          <div className="flex flex-wrap gap-2">
            {!editando && <button type="button" onClick={() => setEditando(true)} className={botaoSecundario}>Editar perfil</button>}
            <button type="button" onClick={() => void sairDaConta()} className={botaoSecundario}>Sair da conta</button>
          </div>
        ) : supabaseConfigurado ? (
          <Link to="/entrar" className={botaoSecundario}>Entrar ou criar conta</Link>
        ) : null}
        {editando && perfil && (
          <EditarPerfil nomeAtual={perfil.nome} avatarAtual={perfil.avatar} aoFechar={() => setEditando(false)} />
        )}
      </header>

      <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
        {numeros.map((n) => (
          <div key={n.rotulo} className={`${cartao} p-5`}>
            <dt className="text-sm text-suave">{n.rotulo}</dt>
            <dd className="mt-1 font-serif text-4xl font-medium">{n.valor}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <section className={`${cartao} p-6`}>
          <h2 className="font-semibold">Rumo ao próximo nível</h2>
          <div className="mt-5"><ReguaXp xpTotal={dados.xp} /></div>
        </section>
        <section className={`${cartao} p-6`}>
          <h2 className="font-semibold">Esta semana</h2>
          <p className="mt-1 text-sm text-suave">
            {diasNaSemana === 0 ? 'Nenhum dia de estudo ainda. Uma etapa já conta.' : `${diasNaSemana} de 7 dias com estudo.`}
          </p>
          <div className="mt-4"><Semana estudados={semana.map((d) => dias.has(d))} hoje={semana.indexOf(hoje)} /></div>
        </section>
      </div>

      <section className={`${cartao} mt-5 p-6`}>
        <h2 className="font-semibold">Conquistas</h2>
        <p className="mt-1 text-sm text-suave">
          {Object.keys(obtidas).length} de {conquistas.length} medalhas
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {conquistas.map((c) => (
            <Selo key={c.id} nome={c.nome} descricao={c.descricao} obtidaEm={obtidas[c.id]} />
          ))}
        </ul>
      </section>

      <section className={`${cartao} mt-5 p-6`}>
        <h2 className="font-semibold">Cápsulas concluídas</h2>
        <CapsulasConcluidas />
      </section>

      <section className={`${cartao} mt-5 p-6`}>
        <h2 className="font-semibold">Linha do tempo</h2>
        <Historico />
      </section>
    </div>
  )
}
