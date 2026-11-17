import { Link } from 'react-router-dom'
import ReguaXp from '../../components/ui/ReguaXp'
import Semana from '../../components/ui/Semana'
import Selo from '../../components/ui/Selo'
import Historico from '../../components/ui/Historico'
import { botaoSecundario, cartao } from '../../components/ui/estilos'
import { conquistas } from '../../conteudo/conquistas'
import { useConta } from '../../lib/conta'
import { sairDaConta } from '../../lib/sincronizacao'
import { supabaseConfigurado } from '../../lib/supabase'
import { useXpLocal } from '../../lib/xpLocal'
import { calcularNivel } from '../../lib/xp'

// A semana de estudos e as conquistas ganham dados reais na etapa 6 do roteiro
const semanaVazia = Array(7).fill(false)

export default function Perfil() {
  const { usuario, perfil } = useConta()
  const xpVisitante = useXpLocal()

  // Com conta, os números vêm do banco; como visitante, do navegador
  const dados = usuario && perfil
    ? { nome: perfil.nome, xp: perfil.xp_total, nivel: perfil.nivel, seq: perfil.sequencia_atual, maior: perfil.maior_sequencia }
    : { nome: 'Visitante', xp: xpVisitante, nivel: calcularNivel(xpVisitante), seq: 0, maior: 0 }

  const numeros = [
    { rotulo: 'Nível', valor: dados.nivel },
    { rotulo: 'XP total', valor: dados.xp },
    { rotulo: 'Dias seguidos', valor: dados.seq },
    { rotulo: 'Maior sequência', valor: dados.maior },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 sm:pt-16">
      <header className={`${cartao} flex flex-wrap items-center gap-5 p-6`}>
        <span className="grid size-16 place-items-center rounded-full bg-amarelo text-2xl font-bold">
          {dados.nome.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-3xl font-medium">{dados.nome}</h1>
          <p className="mt-1 max-w-md text-[15px] text-suave">
            {usuario
              ? `Conectado como ${usuario.email}. Seu progresso está salvo na conta.`
              : 'Seu progresso fica guardado neste navegador. Com uma conta, ele vai junto para qualquer aparelho.'}
          </p>
        </div>
        {usuario ? (
          <button type="button" onClick={() => void sairDaConta()} className={botaoSecundario}>Sair da conta</button>
        ) : supabaseConfigurado ? (
          <Link to="/entrar" className={botaoSecundario}>Entrar ou criar conta</Link>
        ) : (
          <button type="button" disabled className={`${botaoSecundario} disabled:opacity-50`}>Criar conta (em breve)</button>
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
          <div className="mt-5"><Semana estudados={semanaVazia} /></div>
        </section>
      </div>

      <section className={`${cartao} mt-5 p-6`}>
        <h2 className="font-semibold">Conquistas</h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {conquistas.map((c) => (
            <Selo key={c.id} nome={c.nome} descricao={c.descricao} obtida={false} />
          ))}
        </ul>
      </section>

      <section className={`${cartao} mt-5 p-6`}>
        <h2 className="font-semibold">Linha do tempo</h2>
        <Historico />
      </section>
    </div>
  )
}
