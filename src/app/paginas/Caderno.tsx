import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import NotaItem from '../../components/ui/NotaItem'
import SiglaLinha from '../../components/ui/SiglaLinha'
import { botaoPrimario, botaoSecundario, cartao } from '../../components/ui/estilos'
import { buscarCapsula, buscarLinha } from '../../conteudo/indice'
import { useAnotacoes } from '../../hooks/useAnotacoes'
import { useConta } from '../../lib/conta'

// Tira acentos e maiúsculas para a busca achar "fracao" em "Frações"
const simples = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export default function Caderno() {
  const todas = useAnotacoes()
  const { usuario } = useConta()
  const [busca, setBusca] = useState('')
  const [escolhidaId, setEscolhidaId] = useState<string | null>(null)

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

  const escolhida = grupos.find((g) => g.id === escolhidaId) ?? grupos[0]

  // Baixa todas as anotações num arquivo de texto simples
  function baixarTudo() {
    const texto = grupos
      .map((g) => `${g.titulo}\n${'='.repeat(g.titulo.length)}\n\n${g.notas.map((n) => n.texto).join('\n\n---\n\n')}`)
      .join('\n\n\n')
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([texto], { type: 'text/plain;charset=utf-8' }))
    link.download = 'caderno-curiosamente.txt'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-2 sm:pt-9 lg:px-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium leading-[1.15] sm:text-[40px]">Anotações</h1>
          <p className="mt-2 max-w-xl text-[15px] text-suave">
            {usuario
              ? 'Suas anotações ficam salvas na sua conta e acompanham você em qualquer aparelho.'
              : 'Suas anotações ficam guardadas neste navegador. Com uma conta, elas vão junto para qualquer aparelho.'}
          </p>
        </div>
        {todas.length > 0 && (
          <button type="button" onClick={baixarTudo} className={`${botaoSecundario} min-h-11 py-0 text-sm`}>Baixar tudo (.txt)</button>
        )}
      </header>

      {todas.length === 0 ? (
        <div className={`${cartao} mt-8 p-6 sm:p-8`}>
          <h2 className="font-serif text-2xl font-medium">Comece o seu caderno</h2>
          <p className="mt-2 text-[15px] text-suave">Abra uma cápsula e anote no Caderno o que você quiser lembrar.</p>
          <Link to="/mapa" className={`${botaoPrimario} mt-5`}>Abrir o mapa</Link>
        </div>
      ) : (
        <>
          <label htmlFor="busca-caderno" className="sr-only">Buscar nas anotações</label>
          <input
            id="busca-caderno"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar: uma palavra ou o nome da cápsula"
            className="mt-6 min-h-12 w-full rounded-full border border-borda bg-superficie px-5 text-base lg:max-w-md"
          />

          {grupos.length === 0 ? (
            <p className="mt-6 text-[15px] text-suave">Nenhuma anotação com essa busca.</p>
          ) : (
            <div className="mt-5 grid items-start gap-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">
              <ul aria-label="Cápsulas com anotações" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
                {grupos.map((g) => {
                  const cap = buscarCapsula(g.id)
                  const ativa = g.id === escolhida?.id
                  return (
                    <li key={g.id} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        aria-pressed={ativa}
                        onClick={() => setEscolhidaId(g.id)}
                        className={`flex min-h-12 w-full items-center gap-3 rounded-2xl border px-3 py-2 text-left ${
                          ativa ? 'border-texto/30 bg-superficie shadow-cartao' : 'border-borda bg-superficie/60 hover:border-texto/30'
                        }`}
                      >
                        {cap && <SiglaLinha linha={buscarLinha(cap)} tamanho="n" />}
                        <span className="min-w-0 flex-1 truncate font-semibold">{g.titulo}</span>
                        <span className="rounded-full bg-fundo px-2 py-0.5 text-xs font-semibold text-suave">{g.notas.length}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>

              {escolhida && (
                <section aria-label={escolhida.titulo} className={`${cartao} p-5 sm:p-7`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-serif text-2xl font-medium sm:text-[26px]">{escolhida.titulo}</h2>
                    <Link to={`/capsula/${escolhida.id}`} className="min-h-11 py-2.5 text-[15px] text-suave underline hover:text-texto">Abrir a cápsula</Link>
                  </div>
                  <ul className="mt-3 space-y-3">
                    {escolhida.notas.map((n) => <NotaItem key={n.id} nota={n} />)}
                  </ul>
                </section>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
