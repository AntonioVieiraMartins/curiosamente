import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Material dourado de brinquedo: quadradinhos (1), barras (10) e placas (100)
export default function BlocosDeDez() {
  const [n, setN] = useState(7)
  const [msg, setMsg] = useState('Junte unidades e veja o que acontece ao chegar em 10.')
  const c = Math.floor(n / 100)
  const d = Math.floor((n % 100) / 10)
  const u = n % 10
  function somar(k: number) {
    const novo = Math.min(999, n + k)
    const trocas: string[] = []
    if (Math.floor(novo / 10) > Math.floor(n / 10) && k === 1) trocas.push('10 unidades viraram 1 barra (dezena)')
    if (Math.floor(novo / 100) > Math.floor(n / 100) && k <= 10) trocas.push('10 barras viraram 1 placa (centena)')
    setMsg(trocas.length ? `${trocas.join('. ')}!` : `Você juntou ${k}. Agora são ${novo}.`)
    setN(novo)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Blocos de dez em dez</p>
      <p className="mt-2 text-3xl font-bold">{n}</p>
      <div className="mt-2 flex min-h-20 flex-wrap items-end gap-2" aria-label={`${c} placas, ${d} barras e ${u} unidades`} role="img">
        {Array.from({ length: c }, (_, k) => <span key={`c${k}`} className="size-10 rounded-md bg-coral" />)}
        {Array.from({ length: d }, (_, k) => <span key={`d${k}`} className="h-10 w-3 rounded-sm bg-azul" />)}
        {Array.from({ length: u }, (_, k) => <span key={`u${k}`} className="size-3 rounded-sm bg-amarelo" />)}
      </div>
      <p className="mt-1 text-sm text-suave">{c} placa(s) de 100 · {d} barra(s) de 10 · {u} unidade(s)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => somar(1)} className="min-h-11 rounded-full border-2 border-azul px-4 font-semibold">+1</button>
        <button type="button" onClick={() => somar(10)} className="min-h-11 rounded-full border-2 border-azul px-4 font-semibold">+10</button>
        <button type="button" onClick={() => somar(100)} className="min-h-11 rounded-full border-2 border-azul px-4 font-semibold">+100</button>
        <button type="button" onClick={() => { setN(0); setMsg('Tudo zerado.') }} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{msg}</p>
    </div>
  )
}
