import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Transferir R$ 50 são dois passos: tirar de uma conta e pôr na outra. Uma transação garante "tudo ou nada".
export default function TransacaoPix() {
  const [falha, setFalha] = useState(true)
  const [transacao, setTransacao] = useState(false)
  const [saldo, setSaldo] = useState<{ a: number; b: number } | null>(null)

  const rodar = () => {
    if (!falha) setSaldo({ a: 50, b: 150 })
    else if (transacao) setSaldo({ a: 100, b: 100 }) // desfez tudo
    else setSaldo({ a: 50, b: 100 }) // tirou, mas não pôs
  }
  const total = saldo ? saldo.a + saldo.b : 200
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ana e Bruno começam com R$ 100 cada. Ana envia R$ 50 ao Bruno.</p>
      <button type="button" aria-pressed={falha} onClick={() => { setFalha(!falha); setSaldo(null) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${falha ? 'border-coral' : 'border-borda'}`}>{falha ? 'O sistema cai no meio da operação (ligado)' : 'Nenhuma falha (desligado)'}</button>
      <button type="button" aria-pressed={transacao} onClick={() => { setTransacao(!transacao); setSaldo(null) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${transacao ? 'border-verde' : 'border-borda'}`}>{transacao ? 'Usa transação (tudo ou nada): sim' : 'Usa transação (tudo ou nada): não'}</button>
      <button type="button" onClick={rodar} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Fazer a transferência</button>
      {saldo && (
        <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${total === 200 ? 'bg-fundo' : 'bg-amarelo'}`}>
          Ana: R$ {saldo.a}. Bruno: R$ {saldo.b}. Total: R$ {total}. {total === 200 ? (falha ? 'A transação foi desfeita: nada mudou, e o dinheiro não sumiu.' : 'Os dois passos aconteceram.') : 'R$ 50 sumiram! O dinheiro saiu da Ana e nunca chegou ao Bruno.'}
        </p>
      )}
    </div>
  )
}
