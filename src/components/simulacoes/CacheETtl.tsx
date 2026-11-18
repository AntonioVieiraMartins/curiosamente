import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Tempos ilustrativos: uma consulta completa leva dezenas de milissegundos; uma resposta do cache, quase nada.
const COMPLETA = 80
const DO_CACHE = 1

export default function CacheETtl() {
  const [ttl, setTtl] = useState(300)
  const [guardadoEm, setGuardadoEm] = useState<number | null>(null)
  const [agora, setAgora] = useState(0)
  const [log, setLog] = useState<string[]>([])
  const id = useId()
  const valido = guardadoEm !== null && agora - guardadoEm < ttl

  function consultar() {
    if (valido) setLog([`t = ${agora} s: resposta do cache, ${DO_CACHE} ms.`, ...log].slice(0, 5))
    else { setGuardadoEm(agora); setLog([`t = ${agora} s: consulta completa, ${COMPLETA} ms. Guardou no cache por ${ttl} s.`, ...log].slice(0, 5)) }
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cache e validade (TTL)</p>
      <label htmlFor={id} className="mt-3 block font-semibold">TTL do domínio: <span className="text-coral">{ttl} s</span></label>
      <input id={id} type="range" min={60} max={600} step={60} value={ttl} onChange={(e) => { setTtl(e.target.value ? Number(e.target.value) : 60); setGuardadoEm(null); setLog([]) }}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p className="mt-2 rounded-2xl bg-fundo p-3 text-[15px]">
        Relógio: <strong>{agora} s</strong>. Cache: {guardadoEm === null ? 'vazio' : valido ? `válido por mais ${ttl - (agora - guardadoEm)} s` : 'vencido'}.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white" onClick={consultar}>Consultar o site</button>
        <button type="button" className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold" onClick={() => setAgora(agora + 60)}>Passar 60 s</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => { setAgora(0); setGuardadoEm(null); setLog([]) }}>Zerar</button>
      </div>
      <ul aria-live="polite" className="mt-2 space-y-1 text-[15px]">
        {log.map((l, i) => <li key={i} className="rounded-lg bg-fundo px-3 py-1.5">{l}</li>)}
      </ul>
    </div>
  )
}
