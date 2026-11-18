import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Conta armada de divisão (chave), um algarismo do dividendo por vez
export default function ContaDeDividir() {
  const [n, setN] = useState(758)
  const [d, setD] = useState(6)
  const [passo, setPasso] = useState(0)
  const idn = useId(), idd = useId()
  const digs = String(n).split('').map(Number)
  const etapas: { cur: number; q: number; mult: number; resto: number }[] = []
  let resto = 0
  for (const x of digs) {
    const cur = resto * 10 + x
    const q = Math.floor(cur / d)
    resto = cur - q * d
    etapas.push({ cur, q, mult: q * d, resto })
  }
  const quoc = etapas.slice(0, passo).map((e) => e.q).join('').replace(/^0+(?=\d)/, '')
  const e = passo > 0 ? etapas[passo - 1] : null
  const fim = passo === digs.length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Divisão armada, passo a passo</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idn} className="text-[15px]">Dividendo: <b>{n}</b>
          <input id={idn} type="range" min={100} max={999} value={n} onChange={(ev) => { setN(Number(ev.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
        <label htmlFor={idd} className="text-[15px]">Divisor: <b>{d}</b>
          <input id={idd} type="range" min={2} max={9} value={d} onChange={(ev) => { setD(Number(ev.target.value)); setPasso(0) }} className="h-11 w-full" /></label>
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">{n} ÷ {d} = {passo ? quoc : '?'}{fim ? `, resto ${etapas[etapas.length - 1].resto}` : ''}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {e
          ? `Algarismo ${passo}: fica ${e.cur}. Dividir: ${e.cur} ÷ ${d} = ${e.q} (escreve ${e.q} no quociente). Multiplicar: ${e.q} × ${d} = ${e.mult}. Subtrair: ${e.cur} - ${e.mult} = ${e.resto}.${passo < digs.length ? ` Baixar o próximo algarismo (${digs[passo]}).` : ' Acabaram os algarismos: esse é o resto.'}`
          : 'Aperte “Próximo passo”. Começamos pelo primeiro algarismo do dividendo.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => setPasso(Math.min(digs.length, passo + 1))} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold">Próximo passo</button>
        <button type="button" onClick={() => setPasso(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
