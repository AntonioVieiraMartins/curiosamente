import { useCartoes } from '../../hooks/useCartoes'
import { guardarCartao } from '../../lib/cartoes'

type Props = { id: string; capsulaId: string; frente: string; verso: string; className?: string }

// "Guardar para revisar": o cartão volta mais tarde na página Revisar (revisão espaçada)
export default function BotaoGuardarCartao({ id, capsulaId, frente, verso, className = '' }: Props) {
  const guardado = useCartoes().some((c) => c.id === id)
  if (guardado) {
    return <p data-sem-narracao className={`min-h-11 py-2.5 text-[15px] text-suave ${className}`}>Guardado para revisar.</p>
  }
  return (
    <button
      type="button"
      data-sem-narracao
      onClick={() => guardarCartao({ id, capsulaId, frente, verso })}
      className={`min-h-11 rounded-full border border-borda px-4 text-[15px] font-semibold text-texto hover:border-texto/30 ${className}`}
    >
      Guardar para revisar
    </button>
  )
}
