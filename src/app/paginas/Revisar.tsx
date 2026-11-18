import { useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import InfograficoAmpliavel from '../../components/capsula/InfograficoAmpliavel'
import { assinar as assinarInfos, lerInfograficos, removerInfografico } from '../../lib/infograficos'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario, cartao } from '../../components/ui/estilos'
import { buscarCapsula } from '../../conteudo/indice'
import { useCartoes } from '../../hooks/useCartoes'
import { apagarCartao, cartoesDeHoje, proximoEstado, revisarCartao, type Cartao, type Nota } from '../../lib/cartoes'
import { diaEmBrasilia } from '../../lib/datas'
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
    <div className="mx-auto max-w-3xl px-4 pt-10 sm:pt-16">
      <Rotulo>Revisão espaçada</Rotulo>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Revisar</h1>
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
          <div className="flex items-baseline justify-between text-[15px] text-suave">
            <span>Cartão {Math.min(feitos + 1, total)} de {total}</span>
            <span>{buscarCapsula(atual.capsulaId)?.titulo ?? ''}</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-borda" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={feitos}>
            <div className="h-full bg-azul transition-all" style={{ width: `${total ? (feitos / total) * 100 : 0}%` }} />
          </div>

          <div className={`${cartao} mt-4 p-5 sm:p-8`}>
            <Rotulo>Pergunta</Rotulo>
            <p className="mt-2 whitespace-pre-wrap text-lg font-semibold [overflow-wrap:anywhere]">{atual.frente}</p>

            {!mostrar ? (
              <button type="button" onClick={() => setMostrar(true)} className={`${botaoPrimario} mt-6`}>Mostrar resposta</button>
            ) : (
              <div aria-live="polite">
                <Rotulo className="mt-6">Resposta</Rotulo>
                <p className="mt-2 whitespace-pre-wrap text-base [overflow-wrap:anywhere]">{atual.verso}</p>
                <p className="mt-6 text-[15px] font-semibold">Como foi lembrar?</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {opcoes.map((o) => (
                    <button
                      key={o.nota}
                      type="button"
                      onClick={() => responder(atual, o.nota)}
                      className="min-h-11 rounded-2xl border-2 border-borda bg-superficie px-2 py-2 text-center hover:border-azul"
                    >
                      <span className="block font-semibold">{o.rotulo}</span>
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

      {infograficosSalvos.length > 0 && (
        <section className="mt-10" aria-labelledby="infos-salvos">
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

      {todos.length > 0 && (
        <details className="mt-10">
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
  )
}
