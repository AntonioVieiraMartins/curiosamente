import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import NotaItem from '../../components/ui/NotaItem'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario, cartao } from '../../components/ui/estilos'
import { buscarCapsula } from '../../conteudo/indice'
import { useAnotacoes } from '../../hooks/useAnotacoes'
import { useConta } from '../../lib/conta'

// Tira acentos e maiúsculas para a busca achar "fracao" em "Frações"
const simples = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export default function Caderno() {
  const todas = useAnotacoes()
  const { usuario } = useConta()
  const [busca, setBusca] = useState('')

  const grupos = useMemo(() => {
    const q = simples(busca.trim())
    const mapa = new Map<string, typeof todas>()
    for (const n of todas) {
      const titulo = buscarCapsula(n.capsulaId)?.titulo ?? n.capsulaId
      if (q && !simples(n.texto).includes(q) && !simples(titulo).includes(q)) continue
      mapa.set(n.capsulaId, [...(mapa.get(n.capsulaId) ?? []), n])
    }
    // Os assuntos com anotação mais recente vêm primeiro
    return [...mapa.entries()]
      .map(([id, notas]) => ({ id, titulo: buscarCapsula(id)?.titulo ?? id, notas }))
      .sort((a, b) => b.notas[0].criadoEm.localeCompare(a.notas[0].criadoEm))
  }, [todas, busca])

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 sm:pt-16">
      <Rotulo>Seu caderno</Rotulo>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Anotações</h1>
      <p className="mt-3 max-w-xl text-[15px] text-suave">
        {usuario
          ? 'Suas anotações ficam salvas na sua conta e acompanham você em qualquer aparelho.'
          : 'Suas anotações ficam guardadas neste navegador. Com uma conta, elas vão junto para qualquer aparelho.'}
      </p>

      {todas.length === 0 ? (
        <div className={`${cartao} mt-8 p-6 sm:p-8`}>
          <h2 className="font-serif text-2xl font-medium">Comece o seu caderno</h2>
          <p className="mt-2 text-[15px] text-suave">Abra uma cápsula e toque em "Caderno" para anotar o que quiser lembrar.</p>
          <Link to="/mapa" className={`${botaoPrimario} mt-5`}>Abrir o mapa</Link>
        </div>
      ) : (
        <>
          <label htmlFor="busca-caderno" className="mt-8 block font-semibold">Buscar nas anotações</label>
          <input
            id="busca-caderno"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Uma palavra ou o nome da cápsula"
            className="mt-2 min-h-11 w-full rounded-xl border border-borda bg-superficie px-4 text-base"
          />

          {grupos.length === 0 && <p className="mt-6 text-[15px] text-suave">Nenhuma anotação com essa busca.</p>}

          <div className="mt-6 space-y-8">
            {grupos.map((g) => (
              <section key={g.id} aria-label={g.titulo}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-2xl font-medium">{g.titulo}</h2>
                  <Link to={`/capsula/${g.id}`} className="min-h-11 py-2.5 text-[15px] text-suave underline hover:text-texto">Abrir a cápsula</Link>
                </div>
                <ul className="mt-3 space-y-3">
                  {g.notas.map((n) => <NotaItem key={n.id} nota={n} />)}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
