import { useState } from 'react'
import CadernoDaCapsula from './CadernoDaCapsula'
import { etapas } from '../../conteudo/etapas'
import { XP } from '../../lib/xp'
import { useAnotacoes } from '../../hooks/useAnotacoes'
import { botaoPrimario } from '../ui/estilos'

type Props = { capsulaId: string; atual: number; concluida: boolean; aoVoltar: () => void; aoConcluir: () => void }

// Rodapé fixo do celular: Voltar, Caderno (painel que sobe por cima) e Concluir etapa
export default function RodapeCelular({ capsulaId, atual, concluida, aoVoltar, aoConcluir }: Props) {
  const [caderno, setCaderno] = useState(false)
  const total = useAnotacoes().filter((n) => n.capsulaId === capsulaId).length
  const ultima = atual === etapas.length - 1
  const fim = ultima && concluida

  return (
    <>
      {caderno && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Caderno desta cápsula">
          <button type="button" aria-label="Fechar o caderno" className="absolute inset-0 bg-texto/40" onClick={() => setCaderno(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto rounded-t-3xl bg-superficie p-5 pb-8 shadow-cartao-alto">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-medium">Caderno</h2>
              <button type="button" onClick={() => setCaderno(false)} className="min-h-11 rounded-full px-4 font-semibold text-suave">Fechar</button>
            </div>
            <CadernoDaCapsula capsulaId={capsulaId} />
          </div>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-borda bg-superficie px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 lg:hidden">
        <button type="button" onClick={aoVoltar} disabled={atual === 0} aria-label="Etapa anterior" className="min-h-12 min-w-11 rounded-full border border-borda font-semibold disabled:opacity-40">
          ←
        </button>
        <button type="button" onClick={() => setCaderno(true)} className="min-h-12 rounded-full border border-borda px-3 text-sm font-semibold">
          Caderno{total > 0 ? ` (${total})` : ''}
        </button>
        <button type="button" onClick={aoConcluir} disabled={fim} className={`${botaoPrimario} min-h-12 flex-1 whitespace-nowrap px-2 py-0 text-sm`}>
          {fim ? 'Concluída ✓' : ultima ? 'Concluir a cápsula' : `Concluir etapa · +${XP.etapa} XP`}
        </button>
      </div>
    </>
  )
}
