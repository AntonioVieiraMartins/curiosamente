import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const PRECO_REAL = 100

// Mostra por que o servidor nunca deve confiar no preço (ou em qualquer número) que vem do navegador.
export default function PrecoNoNavegador() {
  const [enviado, setEnviado] = useState(100)
  const [confere, setConfere] = useState(false)
  const id = useId()
  const cobrado = confere ? PRECO_REAL : enviado

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um tênis que custa R$ {PRECO_REAL} no banco de dados</p>
      <label htmlFor={id} className="mt-2 block font-semibold">Preço que o pedido leva: R$ <span className="text-azul">{enviado}</span></label>
      <input id={id} type="range" min={1} max={100} value={enviado} onChange={(e) => setEnviado(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <p className="text-[15px] text-suave">Quem controla o navegador pode editar o pedido antes de enviar.</p>
      <button type="button" aria-pressed={confere} onClick={() => setConfere(!confere)}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${confere ? 'border-verde' : 'border-coral'}`}>
        {confere ? 'Servidor: ignora o preço do pedido e usa o do banco' : 'Servidor: confia no preço que veio no pedido'}
      </button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Cobrado do cliente: <strong>R$ {cobrado}</strong>. {cobrado < PRECO_REAL ? 'Prejuízo! O servidor aceitou um preço inventado.' : 'Tudo certo: o preço vem de quem pode confiar.'}
      </p>
    </div>
  )
}
