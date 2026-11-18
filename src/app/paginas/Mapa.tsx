import { useId, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Rotulo from '../../components/ui/Rotulo'
import CartaoDaLinha from '../../components/mapa/CartaoDaLinha'
import CapsulaCompacta from '../../components/mapa/CapsulaCompacta'
import { capsulas, linhas, linhaDaCapsula, modulosComputacao, type ResumoCapsula } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'
import { botaoPrimario } from '../../components/ui/estilos'

type Filtro = 'tudo' | 'prontas' | 'andamento' | 'nao-comecei'
const filtros: { id: Filtro; nome: string }[] = [
  { id: 'tudo', nome: 'Tudo' },
  { id: 'prontas', nome: 'Só as prontas' },
  { id: 'andamento', nome: 'Em andamento' },
  { id: 'nao-comecei', nome: 'Não comecei' },
]

const semAcento = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const grupoDe = (c: ResumoCapsula) => (c.area === 'computacao' ? modulosComputacao[c.trilha] : c.grupo) ?? 'Cápsulas'
const chip = (ativo: boolean) =>
  `min-h-11 rounded-full border px-4 text-[15px] font-semibold transition-colors ${
    ativo ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie text-texto hover:border-texto/30'
  }`

export default function Mapa() {
  const [params, setParams] = useSearchParams()
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<Filtro>('tudo')
  const progresso = useTodoProgresso()
  const idBusca = useId()

  const linhaAberta = linhas.find((l) => l.id === params.get('linha'))
  const andando = (id: string) => !progresso[id]?.concluida && (progresso[id]?.concluidas.length ?? 0) > 0
  const retomar = capsulas.find((c) => andando(c.id))

  const termo = semAcento(busca.trim())
  const procurando = termo !== '' || filtro !== 'tudo'
  const resultados = capsulas.filter((c) => {
    if (filtro === 'prontas' && c.estado !== 'pronta') return false
    if (filtro === 'andamento' && !andando(c.id)) return false
    if (filtro === 'nao-comecei' && !(c.estado === 'pronta' && !progresso[c.id]?.concluida && !andando(c.id))) return false
    return termo === '' || semAcento(`${c.titulo} ${c.gancho}`).includes(termo)
  })

  const escolher = (id: string | null) => {
    setBusca('')
    setFiltro('tudo')
    setParams(id ? { linha: id } : {})
  }

  // Grupos da linha aberta, na ordem do índice
  const grupos = useMemo(() => {
    if (!linhaAberta) return []
    const porGrupo = new Map<string, ResumoCapsula[]>()
    for (const c of capsulas.filter((x) => linhaDaCapsula(x) === linhaAberta.id)) {
      const g = grupoDe(c)
      porGrupo.set(g, [...(porGrupo.get(g) ?? []), c])
    }
    return [...porGrupo]
  }, [linhaAberta])

  return (
    <section className="mx-auto max-w-5xl px-4 pt-8 sm:pt-14">
      <Rotulo>Mapa</Rotulo>
      <h1 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        Para onde vamos <em>hoje?</em>
      </h1>

      {retomar && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-borda bg-superficie p-4">
          <p className="min-w-0">
            <span className="text-sm text-suave">Continuar de onde parou</span>
            <span className="block font-semibold">
              {retomar.titulo} · etapa {(progresso[retomar.id]?.etapaAtual ?? 0) + 1} de 7
            </span>
          </p>
          <Link to={`/capsula/${retomar.id}`} className={botaoPrimario}>Continuar</Link>
        </div>
      )}

      <div className="mt-6">
        <label htmlFor={idBusca} className="sr-only">Buscar cápsula</label>
        <input
          id={idBusca}
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar: frações, DNS, Monty Hall…"
          className="min-h-12 w-full rounded-full border border-borda bg-superficie px-5 text-base"
        />
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filtros">
          {filtros.map((f) => (
            <button key={f.id} type="button" aria-pressed={filtro === f.id} onClick={() => setFiltro(f.id)} className={chip(filtro === f.id)}>
              {f.nome}
            </button>
          ))}
        </div>
      </div>

      {procurando ? (
        <div className="mt-8">
          <p className="text-sm text-suave" aria-live="polite">
            {resultados.length} {resultados.length === 1 ? 'cápsula' : 'cápsulas'}
          </p>
          {resultados.length === 0 ? (
            <p className="mt-4 text-suave">Nada por aqui. Tente outra palavra ou outro filtro.</p>
          ) : (
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resultados.map((c) => (
                <li key={c.id}>
                  <CapsulaCompacta cap={c} linha={linhas.find((l) => l.id === linhaDaCapsula(c))!} progresso={progresso[c.id]} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          <nav aria-label="Linhas" className="mt-8 flex gap-2 overflow-x-auto pb-1">
            <button type="button" aria-pressed={!linhaAberta} onClick={() => escolher(null)} className={`${chip(!linhaAberta)} shrink-0`}>
              Visão geral
            </button>
            {linhas.map((l) => (
              <button
                key={l.id}
                type="button"
                aria-pressed={linhaAberta?.id === l.id}
                onClick={() => escolher(l.id)}
                className={`${chip(linhaAberta?.id === l.id)} shrink-0`}
              >
                {l.nome.replace('Matemática · ', '')}
              </button>
            ))}
          </nav>

          {!linhaAberta ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {linhas.map((l) => (
                <CartaoDaLinha
                  key={l.id}
                  linha={l}
                  capsulas={capsulas.filter((c) => linhaDaCapsula(c) === l.id)}
                  progresso={progresso}
                  aoAbrir={() => escolher(l.id)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-8">
              {grupos.map(([nome, lista]) => (
                <section key={nome} aria-label={nome}>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-suave">
                    {nome} · {lista.filter((c) => c.estado === 'pronta').length} de {lista.length} prontas
                  </h2>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {lista.map((c) => (
                      <li key={c.id}>
                        <CapsulaCompacta cap={c} linha={linhaAberta} progresso={progresso[c.id]} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
