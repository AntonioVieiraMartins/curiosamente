import { Suspense, useEffect, useRef, useState } from 'react'
import { buscarConteudo } from '../../conteudo/registro'

// Mostra o infográfico de uma cápsula, com botão para ampliar em tela cheia.
// Usado no fim da cápsula e na página Revisar.
export default function InfograficoAmpliavel({ capsulaId }: { capsulaId: string }) {
  const Infografico = buscarConteudo(capsulaId)?.Infografico
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

  if (!Infografico) return null
  return (
    <div>
      <div className="overflow-hidden rounded-[20px] bg-superficie p-3 shadow-cartao sm:p-5">
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
  )
}
