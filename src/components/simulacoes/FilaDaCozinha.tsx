import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const POR_COZINHEIRO = 5 // pedidos por minuto que cada cozinheiro dá conta (número de brinquedo)

// Quando chega mais pedido do que a cozinha dá conta, a fila cresce. Mais cozinheiros resolvem.
export default function FilaDaCozinha() {
  const [chegam, setChegam] = useState(12)
  const [cozinheiros, setCozinheiros] = useState(2)
  const a = useId()
  const b = useId()
  const capacidade = cozinheiros * POR_COZINHEIRO
  const sobra = chegam - capacidade
  const fila10 = Math.max(0, sobra * 10)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cada cozinheiro faz {POR_COZINHEIRO} pedidos por minuto</p>
      <label htmlFor={a} className="mt-2 block font-semibold">Pedidos chegando por minuto: <span className="text-azul">{chegam}</span></label>
      <input id={a} type="range" min={1} max={40} value={chegam} onChange={(e) => setChegam(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={b} className="block font-semibold">Cozinheiros (servidores): <span className="text-verde">{cozinheiros}</span></label>
      <input id={b} type="range" min={1} max={10} value={cozinheiros} onChange={(e) => setCozinheiros(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <p aria-live="polite" className={`mt-2 rounded-2xl p-4 text-[15px] ${sobra > 0 ? 'bg-amarelo' : 'bg-fundo'}`}>
        A cozinha dá conta de <strong>{capacidade}</strong> por minuto. {sobra > 0
          ? `Chegam ${sobra} a mais por minuto: depois de 10 minutos, ${fila10} pedidos esperando. O site fica lento.`
          : 'A cozinha acompanha os pedidos. Ninguém fica esperando.'}
      </p>
    </div>
  )
}
