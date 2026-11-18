import { Suspense, useEffect, useRef, useState } from 'react'
import { buscarConteudo } from '../../conteudo/registro'
import type { CartaoPronto } from '../../conteudo/tipos'
import { useCartoes } from '../../hooks/useCartoes'
import { guardarCartao } from '../../lib/cartoes'
import { useCapsula } from './ContextoCapsula'

// Fim da cápsula: infográfico de uma página e baralho pronto para a revisão espaçada.
// Só aparece nas cápsulas que têm Infografico.tsx e/ou cartoes.ts na pasta.
export default function RevisaoDaCapsula() {
  const { meta } = useCapsula()
  const conteudo = buscarConteudo(meta.id)
  const [baralho, setBaralho] = useState<CartaoPronto[] | null>(null)
  const guardados = useCartoes()
  const [ampliado, setAmpliado] = useState(false)
  const fechar = useRef<HTMLButtonElement>(null)

  // Ao abrir, o foco vai para "Fechar"; Esc também fecha
  useEffect(() => {
    if (!ampliado) return
    fechar.current?.focus()
    const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAmpliado(false)
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [ampliado])

  useEffect(() => {
    let vivo = true
    conteudo?.carregarCartoes?.().then((m) => vivo && setBaralho(m.default))
    return () => { vivo = false }
  }, [conteudo])

  const Infografico = conteudo?.Infografico
  if (!Infografico && !baralho) return null

  const idDe = (i: number) => `${meta.id}:d:${i}`
  const jaTem = baralho ? baralho.filter((_, i) => guardados.some((c) => c.id === idDe(i))).length : 0
  const todos = baralho !== null && jaTem === baralho.length

  function adicionar() {
    baralho?.forEach((c, i) => guardarCartao({ id: idDe(i), capsulaId: meta.id, frente: c.frente, verso: c.verso }))
  }

  return (
    <section aria-labelledby="revisao-titulo" className="space-y-6">
      {Infografico && (
        <div>
          <h3 id="revisao-titulo" className="font-semibold">Revisão em um olhar</h3>
          <div className="mt-3 overflow-hidden rounded-[20px] bg-superficie p-3 shadow-cartao sm:p-5">
            <Suspense fallback={<p className="p-6 text-suave">Carregando o infográfico…</p>}>
              <Infografico />
            </Suspense>
          </div>
          <button type="button" onClick={() => setAmpliado(true)} className="mt-2 min-h-11 rounded-full border border-borda px-5 text-[15px] font-semibold hover:border-texto/30">
            Ampliar o infográfico
          </button>
          {ampliado && (
            <div role="dialog" aria-modal="true" aria-label="Infográfico ampliado" className="fixed inset-0 z-50 flex flex-col bg-texto/60 p-3 sm:p-6">
              <div className="mb-3 flex justify-end">
                <button ref={fechar} type="button" onClick={() => setAmpliado(false)} className="min-h-11 rounded-full bg-superficie px-6 font-semibold">Fechar</button>
              </div>
              <div className="flex-1 overflow-auto rounded-2xl bg-superficie p-3">
                <div className="min-w-[680px]">
                  <Suspense fallback={null}><Infografico /></Suspense>
                </div>
              </div>
            </div>
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
