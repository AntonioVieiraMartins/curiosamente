import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import InfograficoAmpliavel from '../../components/capsula/InfograficoAmpliavel'
import { assinar as assinarInfos, lerInfograficos, removerInfografico } from '../../lib/infograficos'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario, cartao } from '../../components/ui/estilos'
import SiglaLinha from '../../components/ui/SiglaLinha'
import { buscarCapsula, buscarLinha } from '../../conteudo/indice'
import { useCartoes } from '../../hooks/useCartoes'
import { apagarCartao, cartoesDeHoje, proximoEstado, revisarCartao, type Cartao, type Nota } from '../../lib/cartoes'
import { diaEmBrasilia, somarDias } from '../../lib/datas'
import { ganharXp } from '../../lib/sincronizacao'
import { XP } from '../../lib/xp'

const opcoes: { nota: Nota; rotulo: string }[] = [
  { nota: 0, rotulo: 'Errei' },
  { nota: 1, rotulo: 'Difícil' },
  { nota: 2, rotulo: 'Bom' },
  { nota: 3, rotulo: 'Fácil' },
]

const quando = (dias: number) => (dias === 0 ? 'hoje' : dias === 1 ? '1 dia' : `${dias} dias`)

export default function Revisar() {
  const todos = useCartoes()
  const infograficosSalvos = useSyncExternalStore(assinarInfos, lerInfograficos, lerInfograficos)
  const hoje = diaEmBrasilia()
  // A fila do dia é montada ao abrir a página; quem erra volta para o fim dela
  const [fila, setFila] = useState<string[]>(() => cartoesDeHoje(todos, hoje).map((c) => c.id))
  const [total] = useState(fila.length)
  const [feitos, setFeitos] = useState(0)
  const [mostrar, setMostrar] = useState(false)

  const atual = todos.find((c) => c.id === fila[0])
  const [todosAbertos, setTodosAbertos] = useState(false)
  const listaRef = useRef<HTMLDetailsElement>(null)

  // Atalhos: espaço mostra a resposta; 1 a 4 escolhem como foi lembrar
  useEffect(() => {
    const ouvir = (e: KeyboardEvent) => {
      const alvo = e.target as HTMLElement
      if (!atual || e.ctrlKey || e.metaKey || e.altKey || /^(INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY)$/.test(alvo.tagName)) return
      if (e.key === ' ' && !mostrar) {
        e.preventDefault()
        setMostrar(true)
      } else if (mostrar && ['1', '2', '3', '4'].includes(e.key)) {
        responder(atual, (Number(e.key) - 1) as Nota)
      }
    }
    window.addEventListener('keydown', ouvir)
    return () => window.removeEventListener('keydown', ouvir)
    // responder muda a cada tela, mas só depende destes valores
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atual, mostrar, fila, feitos])

  // Cartões que vencem em cada um dos próximos 7 dias (hoje inclui os atrasados)
  const proximos7 = Array.from({ length: 7 }, (_, i) => {
    const dia = somarDias(hoje, i)
    const n = todos.filter((c) => (i === 0 ? c.proxima <= dia : c.proxima === dia)).length
    const letra = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][new Date(`${dia}T12:00:00Z`).getUTCDay()]
    return { dia, n, letra }
  })
  const maximo = Math.max(1, ...proximos7.map((d) => d.n))

  function responder(c: Cartao, nota: Nota) {
    revisarCartao(c.id, nota)
    // Um cartão rende XP uma vez por dia, mesmo que volte na fila
    void ganharXp('revisao', `${c.id}:${hoje}`, c.capsulaId || undefined)
    setMostrar(false)
    if (nota === 0) setFila([...fila.slice(1), c.id])
    else {
      setFila(fila.slice(1))
      setFeitos(feitos + 1)
    }
  }

  const futuros = todos.filter((c) => c.proxima > hoje).sort((a, b) => a.proxima.localeCompare(b.proxima))

  return (
    <div className="mx-auto grid max-w-[1200px] gap-8 px-4 pt-2 sm:pt-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
     <div className="min-w-0">
      <h1 className="font-serif text-[28px] font-medium leading-[1.15] sm:text-[40px]">Revisar</h1>
      <p className="mt-3 max-w-xl text-[15px] text-suave">
        Perguntas que você errou ou guardou voltam aqui no tempo certo: logo no começo e, a cada acerto, cada vez mais espaçadas.
        Cada cartão revisado rende {XP.revisaoPorCartao} XP.
      </p>

      {todos.length === 0 && (
        <div className={`${cartao} mt-8 p-6 sm:p-8`}>
          <h2 className="font-serif text-2xl font-medium">Ainda não há cartões</h2>
          <p className="mt-2 text-[15px] text-suave">
            Quando você errar uma pergunta do desafio, ela vira cartão sozinha. Você também pode tocar em "Guardar para revisar"
            nas perguntas, nos exercícios e nas anotações.
          </p>
          <Link to="/mapa" className={`${botaoPrimario} mt-5`}>Abrir o mapa</Link>
        </div>
      )}

      {todos.length > 0 && atual && (
        <div className="mt-8">
          <div className="flex items-center justify-between gap-3 text-[15px] text-suave">
            <span>Cartão {Math.min(feitos + 1, total)} de {total}</span>
            {buscarCapsula(atual.capsulaId) && (
              <span className="flex min-w-0 items-center gap-2">
                <SiglaLinha linha={buscarLinha(buscarCapsula(atual.capsulaId)!)} tamanho="p" />
                <span className="truncate">{buscarCapsula(atual.capsulaId)!.titulo}</span>
              </span>
            )}
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-borda" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={feitos}>
            <div className="h-full bg-verde transition-all" style={{ width: `${total ? (feitos / total) * 100 : 0}%` }} />
          </div>

          <div className={`${cartao} mt-4 p-5 sm:p-8`}>
            <Rotulo>Pergunta</Rotulo>
            <p className="mt-2 whitespace-pre-wrap text-lg font-semibold [overflow-wrap:anywhere]">{atual.frente}</p>

            {!mostrar ? (
              <button type="button" onClick={() => setMostrar(true)} className={`${botaoPrimario} mt-6 min-h-12`}>
                Mostrar resposta <span className="ml-2 hidden rounded-md bg-white/20 px-1.5 text-xs font-medium lg:inline">espaço</span>
              </button>
            ) : (
              <div aria-live="polite">
                <Rotulo className="mt-6">Resposta</Rotulo>
                <p className="mt-2 whitespace-pre-wrap text-base [overflow-wrap:anywhere]">{atual.verso}</p>
                <p className="mt-6 text-[15px] font-semibold">Como foi lembrar?</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {opcoes.map((o, i) => (
                    <button
                      key={o.nota}
                      type="button"
                      onClick={() => responder(atual, o.nota)}
                      className="min-h-11 rounded-2xl border-2 border-borda bg-superficie px-2 py-2 text-center hover:border-azul"
                    >
                      <span className="block font-semibold">{o.rotulo} <span className="hidden text-xs font-normal text-suave lg:inline">({i + 1})</span></span>
                      <span className="block text-sm text-suave">{quando(proximoEstado(atual, o.nota, hoje).intervaloDias)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {todos.length > 0 && !atual && (
        <div className={`${cartao} mt-8 p-6 sm:p-8`}>
          <h2 className="font-serif text-2xl font-medium">{total > 0 ? 'Revisão de hoje concluída' : 'Nada para revisar hoje'}</h2>
          <p className="mt-2 text-[15px] text-suave">
            {futuros.length > 0
              ? `O próximo cartão volta em ${quando(Math.round((new Date(`${futuros[0].proxima}T12:00:00Z`).getTime() - new Date(`${hoje}T12:00:00Z`).getTime()) / 86400000))}.`
              : 'Guarde mais perguntas para revisar nos próximos dias.'}
          </p>
          <Link to="/mapa" className={`${botaoPrimario} mt-5`}>Continuar estudando</Link>
        </div>
      )}

      {todos.length > 0 && (
        <details ref={listaRef} id="todos-os-cartoes" open={todosAbertos} onToggle={(e) => setTodosAbertos(e.currentTarget.open)} className="mt-10 scroll-mt-6">
          <summary className="min-h-11 cursor-pointer py-2.5 font-semibold">Todos os cartões ({todos.length})</summary>
          <ul className="mt-3 space-y-3">
            {todos.map((c) => (
              <li key={c.id} className="rounded-2xl border border-borda bg-superficie p-4">
                <p className="text-sm text-suave">{buscarCapsula(c.capsulaId)?.titulo ?? ''} · volta {c.proxima <= hoje ? 'hoje' : `em ${c.proxima.split('-').reverse().join('/')}`}</p>
                <p className="mt-1 font-semibold [overflow-wrap:anywhere]">{c.frente}</p>
                <button type="button" onClick={() => apagarCartao(c.id)} className="mt-2 min-h-11 rounded-full border border-borda px-4 text-[15px] font-semibold hover:border-coral hover:text-coral">
                  Remover cartão
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}
     </div>

      <aside aria-label="Resumo da revisão" className="flex flex-col gap-4 lg:pt-[72px]">
        <div className={`${cartao} flex flex-col gap-3 p-5`}>
          <h2 className="font-semibold">Cartões dos próximos 7 dias</h2>
          <ol className="flex h-28 items-end justify-between gap-2">
            {proximos7.map((d, i) => (
              <li key={d.dia} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <span className="text-xs font-semibold">{d.n}</span>
                <span
                  className={`w-full rounded-md ${i === 0 ? 'bg-azul' : 'bg-azul/40'}`}
                  style={{ height: `${Math.max(4, (d.n / maximo) * 64)}px` }}
                />
                <span className="text-xs text-suave" aria-hidden="true">{d.letra}</span>
                <span className="sr-only">{i === 0 ? 'hoje' : d.dia.split('-').reverse().join('/')}: {d.n} {d.n === 1 ? 'cartão' : 'cartões'}</span>
              </li>
            ))}
          </ol>
        </div>
        {todos.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setTodosAbertos(true)
              requestAnimationFrame(() => listaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
            }}
            className="min-h-11 rounded-full border border-borda bg-superficie px-5 font-semibold hover:border-texto/30"
          >
            Ver todos os cartões ({todos.length})
          </button>
        )}
      {infograficosSalvos.length > 0 && (
        <section className="mt-2" aria-labelledby="infos-salvos">
          <h2 id="infos-salvos" className="font-serif text-2xl font-medium">Infográficos salvos</h2>
          <p className="mt-1 text-[15px] text-suave">Um resumo desenhado de cada cápsula, para rever sem abrir a cápsula.</p>
          <div className="mt-3 space-y-3">
            {infograficosSalvos.map((id) => (
              <details key={id} className="rounded-2xl border border-borda bg-fundo p-3">
                <summary className="min-h-11 cursor-pointer py-2.5 font-semibold">{buscarCapsula(id)?.titulo ?? id}</summary>
                <div className="mt-2">
                  <InfograficoAmpliavel capsulaId={id} />
                  <button type="button" onClick={() => removerInfografico(id)} className="mt-2 min-h-11 rounded-full border border-borda px-4 text-[15px] font-semibold hover:border-coral hover:text-coral">
                    Remover dos salvos
                  </button>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
      </aside>
    </div>
  )
}
