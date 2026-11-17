import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// RAM esquece quando a energia acaba; o disco lembra. Só vale o que foi salvo.
export default function LigaEDesliga() {
  const [ram, setRam] = useState('')
  const [disco, setDisco] = useState('')
  const [msg, setMsg] = useState('Escreva algo. Ele fica na RAM, ainda não está salvo.')
  const id = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">RAM esquece, disco lembra</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Seu texto (na RAM)</label>
      <input id={id} value={ram} maxLength={40} onChange={(e) => { setRam(e.target.value); setMsg('Texto na RAM, ainda não salvo.') }}
        className="mt-1 h-12 w-full rounded-xl border-2 border-borda px-3 text-lg focus:border-azul focus:outline-none" />
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <p className="rounded-2xl bg-fundo p-3 text-[15px]"><strong>RAM:</strong> {ram || '(vazia)'}</p>
        <p className="rounded-2xl bg-fundo p-3 text-[15px]"><strong>Disco:</strong> {disco || '(vazio)'}</p>
      </div>
      <p aria-live="polite" className="mt-2 text-[15px] text-suave">{msg}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white" onClick={() => { setDisco(ram); setMsg('Salvo no disco!') }}>Salvar no disco</button>
        <button type="button" className="min-h-11 rounded-full bg-coral px-5 font-semibold text-white" onClick={() => { setRam(disco); setMsg(disco ? 'Faltou luz! A RAM esvaziou. Ao religar, só voltou o que estava salvo.' : 'Faltou luz! A RAM esvaziou e nada tinha sido salvo: perdeu tudo.') }}>Cortar a energia</button>
      </div>
    </div>
  )
}
