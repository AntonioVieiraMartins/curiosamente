import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const TOTAL = 1000 // usuários de exemplo
// A versão nova tem um defeito que atinge todo mundo que a recebe (exemplo)
export default function LancamentoGradual() {
  const [pct, setPct] = useState(5)
  const id = useId()
  const afetados = Math.round((TOTAL * pct) / 100)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lançamento gradual (canary)</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Quem já recebe a versão nova: <b>{pct}%</b></label>
      <input id={id} type="range" min={0} max={100} step={5} value={pct} onChange={(e) => setPct(Number(e.target.value))} className="mt-1 h-11 w-full" />
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Versão antiga</p><p className="text-2xl font-bold">{TOTAL - afetados}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Versão nova (com defeito)</p><p className="text-2xl font-bold">{afetados}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Se a versão nova tiver um defeito, {afetados} de {TOTAL} usuários de exemplo sentem o problema. Quanto menor a fatia, menor o estrago, e dá para voltar atrás antes de chegar a todos.
      </p>
    </div>
  )
}
