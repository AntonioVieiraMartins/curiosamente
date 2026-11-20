import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import EnigmaDoDia from '../../components/inicio/EnigmaDoDia'
import Vitrine from '../../components/inicio/Vitrine'
import CartaoContinuar from '../../components/inicio/CartaoContinuar'
import CartaoRevisaoDeHoje from '../../components/inicio/CartaoRevisaoDeHoje'
import PainelDoProgresso from '../../components/inicio/PainelDoProgresso'
import SuasLinhas from '../../components/inicio/SuasLinhas'
import { capsulas } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'
import { useCartoesDeHoje } from '../../hooks/useCartoes'

// Saudação e data no horário de Brasília
function saudacaoEData() {
  const agora = new Date()
  const hora = Number(new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', hourCycle: 'h23', timeZone: 'America/Sao_Paulo' }).format(agora))
  const data = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'America/Sao_Paulo' }).format(agora)
  return {
    saudacao: hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite',
    data: data.charAt(0).toUpperCase() + data.slice(1),
  }
}

export default function Inicio() {
  const pendentes = useCartoesDeHoje().length
  const progresso = useTodoProgresso()
  const navegar = useNavigate()
  const [busca, setBusca] = useState('')
  const { saudacao, data } = saudacaoEData()
  const retomar = capsulas.find((c) => !progresso[c.id]?.concluida && (progresso[c.id]?.concluidas.length ?? 0) > 0)

  function buscar(e: FormEvent) {
    e.preventDefault()
    const termo = busca.trim()
    navegar(termo ? `/mapa?q=${encodeURIComponent(termo)}` : '/mapa')
  }

  return (
    <div className="mx-auto grid max-w-[1200px] gap-8 px-4 pb-4 pt-2 sm:pt-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-x-8 lg:px-10">
      <div className="flex min-w-0 flex-col gap-4 sm:gap-8">
        <header className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.08em] text-suave sm:block">{data}</span>
            <h1 className="mt-1.5 font-serif text-[28px] font-medium leading-[1.15] sm:text-[40px] sm:leading-[1.1]">
              {saudacao}. O que vamos <em>descobrir</em> hoje?
            </h1>
          </div>
          <form onSubmit={buscar} role="search" className="hidden min-h-12 w-[300px] items-center gap-2 rounded-full border border-borda bg-superficie px-[18px] text-suave sm:flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3" /></svg>
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar: frações, DNS, célula…"
              aria-label="Buscar cápsula"
              className="w-full bg-transparent text-[15px] text-texto outline-none"
            />
          </form>
        </header>

        {(retomar || pendentes > 0) && (
          <section aria-label="Hoje" className="grid gap-4 sm:grid-cols-3">
            {retomar && <CartaoContinuar cap={retomar} progresso={progresso[retomar.id]} />}
            {pendentes > 0 && <CartaoRevisaoDeHoje n={pendentes} />}
          </section>
        )}

        <EnigmaDoDia />
        <Vitrine />
        <SuasLinhas />
      </div>
      <PainelDoProgresso />
    </div>
  )
}
