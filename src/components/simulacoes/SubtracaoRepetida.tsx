import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Divisão como "quantas vezes cabe": tirar o divisor várias vezes até não dar mais
export default function SubtracaoRepetida() {
  const [total, setTotal] = useState(35)
  const [tam, setTam] = useState(6)
  const [feitos, setFeitos] = useState(0)
  const idt = useId(), idm = useId()
  const restante = total - feitos * tam
  const podeTirar = restante >= tam
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas vezes cabe?</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idt} className="text-[15px]">Total: <b>{total}</b>
          <input id={idt} type="range" min={5} max={60} value={total} onChange={(e) => { setTotal(Number(e.target.value)); setFeitos(0) }} className="h-11 w-full" /></label>
        <label htmlFor={idm} className="text-[15px]">Tamanho de cada grupo: <b>{tam}</b>
          <input id={idm} type="range" min={2} max={9} value={tam} onChange={(e) => { setTam(Number(e.target.value)); setFeitos(0) }} className="h-11 w-full" /></label>
      </div>
      <div className="mt-3 flex flex-wrap gap-1" role="img" aria-label={`${feitos} grupos tirados, restam ${restante}`}>
        {Array.from({ length: feitos }, (_, g) => <span key={g} className="rounded-full bg-azul px-2 py-0.5 text-xs font-semibold text-white">-{tam}</span>)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Restam <b>{restante}</b>. Você já tirou {feitos} grupo(s) de {tam}.{' '}
        {podeTirar ? 'Ainda dá para tirar mais um.' : `Não cabe mais: ${total} ÷ ${tam} = ${feitos}, com resto ${restante}.`}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={!podeTirar} onClick={() => setFeitos(feitos + 1)} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Tirar um grupo</button>
        <button type="button" onClick={() => setFeitos(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
