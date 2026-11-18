import { useEffect, useState, useSyncExternalStore } from 'react'
import { buscarConteudo } from '../../conteudo/registro'
import type { CartaoPronto } from '../../conteudo/tipos'
import { useCartoes } from '../../hooks/useCartoes'
import { guardarCartao } from '../../lib/cartoes'
import { assinar, lerInfograficos, removerInfografico, salvarInfografico } from '../../lib/infograficos'
import { useCapsula } from './ContextoCapsula'
import InfograficoAmpliavel from './InfograficoAmpliavel'

// Fim da cápsula: infográfico de uma página e baralho pronto para a revisão espaçada.
// Só aparece nas cápsulas que têm Infografico.tsx e/ou cartoes.ts na pasta.
export default function RevisaoDaCapsula() {
  const { meta } = useCapsula()
  const conteudo = buscarConteudo(meta.id)
  const [baralho, setBaralho] = useState<CartaoPronto[] | null>(null)
  const guardados = useCartoes()
  const salvos = useSyncExternalStore(assinar, lerInfograficos, lerInfograficos)

  useEffect(() => {
    let vivo = true
    conteudo?.carregarCartoes?.().then((m) => vivo && setBaralho(m.default))
    return () => { vivo = false }
  }, [conteudo])

  const temInfografico = !!conteudo?.Infografico
  if (!temInfografico && !baralho) return null

  const idDe = (i: number) => `${meta.id}:d:${i}`
  const jaTem = baralho ? baralho.filter((_, i) => guardados.some((c) => c.id === idDe(i))).length : 0
  const todos = baralho !== null && jaTem === baralho.length
  const infoSalvo = salvos.includes(meta.id)

  // Adicionar o baralho também salva o infográfico na página Revisar
  function adicionar() {
    baralho?.forEach((c, i) => guardarCartao({ id: idDe(i), capsulaId: meta.id, frente: c.frente, verso: c.verso }))
    if (temInfografico) salvarInfografico(meta.id)
  }

  return (
    <section aria-labelledby="revisao-titulo" className="space-y-6">
      {temInfografico && (
        <div>
          <h3 id="revisao-titulo" className="font-semibold">Revisão em um olhar</h3>
          <div className="mt-3">
            <InfograficoAmpliavel capsulaId={meta.id} />
          </div>
          {infoSalvo ? (
            <p className="mt-2 text-[15px] text-suave">
              Salvo na página Revisar.{' '}
              <button type="button" onClick={() => removerInfografico(meta.id)} className="min-h-11 font-semibold text-azul-texto underline">Remover</button>
            </p>
          ) : (
            <button type="button" onClick={() => salvarInfografico(meta.id)} className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white hover:bg-verde-escuro">
              Salvar na página Revisar
            </button>
          )}
        </div>
      )}
      {baralho && (
        <div className="rounded-[20px] bg-superficie p-5 shadow-cartao">
          <h3 className="font-semibold">Baralho desta cápsula</h3>
          <p className="mt-1 text-[15px] text-suave">
            {baralho.length} cartões prontos. Ao adicionar, eles entram na sua revisão espaçada, na página Revisar.
          </p>
          {todos ? (
            <p className="mt-4 min-h-11 py-2.5 font-semibold">Os {baralho.length} cartões já estão na sua revisão.</p>
          ) : (
            <button type="button" onClick={adicionar} className="mt-4 min-h-11 rounded-full bg-verde px-6 font-semibold text-white hover:bg-verde-escuro">
              {jaTem > 0 ? `Adicionar os ${baralho.length - jaTem} que faltam` : `Adicionar ${baralho.length} cartões à minha revisão`}
            </button>
          )}
          <details className="mt-4">
            <summary className="min-h-11 cursor-pointer py-2.5 text-[15px] font-semibold text-azul-texto">Ver as perguntas</summary>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-[15px]">
              {baralho.map((c, i) => (
                <li key={i}><span className="text-xs font-semibold uppercase tracking-wider text-suave">{c.tipo}</span><br />{c.frente}</li>
              ))}
            </ol>
          </details>
        </div>
      )}
    </section>
  )
}
