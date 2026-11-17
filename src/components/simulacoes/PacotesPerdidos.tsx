import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const N = 20

// Determinístico: perde pacotes de 20 em 20 posições espalhadas, sem sorteio, para o resultado ser o mesmo para todo mundo.
function perdidos(taxa: number) {
  const qtd = Math.round((taxa / 100) * N)
  return new Set(Array.from({ length: qtd }, (_, k) => Math.floor((k * N) / Math.max(qtd, 1) + 1) % N))
}

export default function PacotesPerdidos() {
  const [taxa, setTaxa] = useState(20)
  const [reenviado, setReenviado] = useState(false)
  const id = useId()
  const p = perdidos(taxa)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Pacotes que se perdem</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Perda na rede: <span className="text-coral">{taxa}%</span></label>
      <input id={id} type="range" min={0} max={50} step={5} value={taxa} onChange={(e) => { setTaxa(Number(e.target.value)); setReenviado(false) }}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 grid grid-cols-10 gap-1" aria-hidden="true">
        {Array.from({ length: N }, (_, i) => (
          <span key={i} className={`grid h-8 place-items-center rounded text-xs font-semibold ${p.has(i) && !reenviado ? 'bg-coral text-white' : p.has(i) ? 'bg-amarelo' : 'bg-verde text-white'}`}>{i + 1}</span>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {reenviado
          ? `Os ${p.size} pacotes perdidos foram pedidos de novo e chegaram (amarelos). A mensagem está completa.`
          : p.size === 0 ? 'Nenhuma perda: tudo chegou.' : `Chegaram ${N - p.size} de ${N}. Faltam ${p.size} (vermelhos).`}
      </p>
      <button type="button" disabled={p.size === 0 || reenviado} onClick={() => setReenviado(true)}
        className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40">Pedir de novo os que faltam</button>
    </div>
  )
}
