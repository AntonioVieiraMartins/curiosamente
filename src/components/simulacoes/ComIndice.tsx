import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Sem índice o banco olha linha por linha; com índice ordenado ele "corta ao meio" a busca a cada passo.
export default function ComIndice() {
  const [exp, setExp] = useState(3)
  const id = useId()
  const n = 10 ** exp
  const comIndice = Math.ceil(Math.log2(n))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Achar um cliente pelo número, no pior caso</p>
      <label htmlFor={id} className="mt-2 block font-semibold">Linhas na tabela: <span className="text-azul">{n.toLocaleString('pt-BR')}</span></label>
      <input id={id} type="range" min={1} max={9} value={exp} onChange={(e) => setExp(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <div aria-live="polite" className="mt-2 grid gap-2 sm:grid-cols-2">
        <p className="rounded-2xl bg-amarelo p-3 text-[15px]"><strong>Sem índice:</strong> até {n.toLocaleString('pt-BR')} linhas lidas.</p>
        <p className="rounded-2xl bg-fundo p-3 text-[15px]"><strong>Com índice:</strong> cerca de {comIndice} passos.</p>
      </div>
      <p className="mt-2 text-[15px] text-suave">Cada passo do índice descarta metade das linhas que restam (por isso o cálculo usa log base 2).</p>
    </div>
  )
}
