import { useId, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CartaoDaLinha from '../../components/mapa/CartaoDaLinha'
import CapsulaCompacta from '../../components/mapa/CapsulaCompacta'
import PainelDaCapsula from '../../components/mapa/PainelDaCapsula'
import LinhaDoMapa from '../../components/ui/LinhaDoMapa'
import SiglaLinha from '../../components/ui/SiglaLinha'
import { areas, capsulas, linhas, linhaDaCapsula } from '../../conteudo/indice'
import { useTodoProgresso } from '../../hooks/useProgresso'

type Filtro = 'tudo' | 'prontas' | 'andamento' | 'nao-comecei'
const filtros: { id: Filtro; nome: string }[] = [
  { id: 'tudo', nome: 'Tudo' },
  { id: 'prontas', nome: 'Só as prontas' },
  { id: 'andamento', nome: 'Em andamento' },
  { id: 'nao-comecei', nome: 'Não comecei' },
]

const semAcento = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const chip = (ativo: boolean) =>
  `min-h-11 rounded-full border px-4 text-[15px] font-semibold transition-colors ${
    ativo ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie text-texto hover:border-texto/30'
  }`

export default function Mapa() {
  const [params, setParams] = useSearchParams()
  const [busca, setBusca] = useState(() => params.get('q') ?? '')
  const [filtro, setFiltro] = useState<Filtro>('tudo')
  const [escolhidaId, setEscolhidaId] = useState<string | null>(null)
  const progresso = useTodoProgresso()
  const idBusca = useId()

  // A área vem do endereço (?area=) ou da linha aberta (?linha=). Áreas com uma linha só abrem direto nela.
  const linhaDoEndereco = linhas.find((l) => l.id === params.get('linha'))
  const areaAberta = areas.find((a) => a.id === (params.get('area') ?? linhaDoEndereco?.area))
  const linhaAberta = linhaDoEndereco ?? (areaAberta?.linhas.length === 1 ? linhas.find((l) => l.id === areaAberta.linhas[0]) : undefined)
  const linhasDaArea = areaAberta ? linhas.filter((l) => l.area === areaAberta.id) : []
  const andando = (id: string) => !progresso[id]?.concluida && (progresso[id]?.concluidas.length ?? 0) > 0

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
  const escolherArea = (id: string | null) => {
    setBusca('')
    setFiltro('tudo')
    setParams(id ? { area: id } : {})
  }

  // Estação escolhida (painel do computador): a que a pessoa clicou; senão a que está em andamento, a primeira pronta ainda não feita ou a primeira
  const daLinha = linhaAberta ? capsulas.filter((c) => linhaDaCapsula(c) === linhaAberta.id) : []
  const escolhida =
    daLinha.find((c) => c.id === escolhidaId) ??
    daLinha.find((c) => andando(c.id)) ??
    daLinha.find((c) => c.estado === 'pronta' && !progresso[c.id]?.concluida) ??
    daLinha[0]

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-2 sm:pt-9 lg:px-10">
      <h1 className="font-serif text-[28px] font-medium leading-[1.15] sm:text-[40px] sm:leading-[1.1]">
        Para onde vamos <em>hoje?</em>
      </h1>

      <div className="mt-6">
        <label htmlFor={idBusca} className="sr-only">Buscar cápsula</label>
        <input
          id={idBusca}
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar: frações, DNS, célula, átomo…"
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
          <nav aria-label="Áreas" className="mt-8 flex gap-2 overflow-x-auto pb-1">
            <button type="button" aria-pressed={!areaAberta} onClick={() => escolherArea(null)} className={`${chip(!areaAberta)} shrink-0`}>
              Tudo
            </button>
            {areas.map((a) => (
              <button key={a.id} type="button" aria-pressed={areaAberta?.id === a.id} onClick={() => escolherArea(a.id)} className={`${chip(areaAberta?.id === a.id)} shrink-0`}>
                {a.nome}
              </button>
            ))}
          </nav>
          {linhasDaArea.length > 1 && (
            <nav aria-label={`Linhas de ${areaAberta?.nome}`} className="mt-2 flex gap-2 overflow-x-auto pb-1">
              <button type="button" aria-pressed={!linhaAberta} onClick={() => escolherArea(areaAberta!.id)} className={`${chip(!linhaAberta)} shrink-0`}>
                Todas
              </button>
              {linhasDaArea.map((l) => (
                <button key={l.id} type="button" aria-pressed={linhaAberta?.id === l.id} onClick={() => escolher(l.id)} className={`${chip(linhaAberta?.id === l.id)} shrink-0`}>
                  {l.nome.replace(`${areaAberta?.nome} · `, '')}
                </button>
              ))}
            </nav>
          )}

          {!linhaAberta ? (
            <div className="mt-5 space-y-8">
              {(areaAberta ? [areaAberta] : areas).map((a) => (
                <section key={a.id} aria-label={a.nome}>
                  {!areaAberta && (
                    <h2 className="font-serif text-2xl font-medium">
                      {a.nome} <span className="font-sans text-base font-normal text-suave">· {a.descricao}</span>
                    </h2>
                  )}
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    {linhas.filter((l) => l.area === a.id).map((l) => (
                      <CartaoDaLinha
                        key={l.id}
                        linha={l}
                        capsulas={capsulas.filter((c) => linhaDaCapsula(c) === l.id)}
                        progresso={progresso}
                        aoAbrir={() => escolher(l.id)}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <>
            {linhasDaArea.length > 1 && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {linhasDaArea.map((l) => (
                  <CartaoDaLinha
                    key={l.id}
                    linha={l}
                    capsulas={capsulas.filter((c) => linhaDaCapsula(c) === l.id)}
                    progresso={progresso}
                    aoAbrir={() => escolher(l.id)}
                    selecionada={linhaAberta.id === l.id}
                  />
                ))}
              </div>
            )}
            <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <SiglaLinha linha={linhaAberta} />
                  <div>
                    <h2 className="font-serif text-2xl font-medium leading-tight">{linhaAberta.nome}</h2>
                    <p className="text-sm text-suave">{linhaAberta.descricao} · {daLinha.length} estações</p>
                  </div>
                </div>
                <LinhaDoMapa linha={linhaAberta} capsulas={daLinha} progresso={progresso} selecionadaId={escolhida?.id} aoEscolher={(c) => setEscolhidaId(c.id)} />
              </div>
              {escolhida && <PainelDaCapsula cap={escolhida} progresso={progresso[escolhida.id]} />}
            </div>
            </>
          )}
        </>
      )}
    </section>
  )
}
