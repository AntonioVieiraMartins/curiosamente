import { useState } from 'react'
import { cartao } from '../ui/estilos'

const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 4 })

// Aquiles corre 10 vezes mais rápido que a tartaruga, que começa 100 m na frente.
// A cada etapa ele chega onde a tartaruga estava; a soma 100 + 10 + 1 + 0,1 + ... tem limite 1000/9.
export default function AquilesETartaruga() {
  const [etapa, setEtapa] = useState(0)
  const folga = 100 / 10 ** etapa // distância que ainda falta
  const aquiles = 100 * (1 - 0.1 ** etapa) / 0.9 // 100 + 10 + 1 + ... (etapa termos)
  const alvo = 1000 / 9
  const pct = Math.min(100, (aquiles / alvo) * 100)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Aquiles e a tartaruga</p>
      <div className="mt-3 h-4 w-full rounded-full bg-fundo" role="img" aria-label={`Aquiles percorreu ${fmt(aquiles)} metros`}>
        <div className="h-4 rounded-full bg-azul" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Etapa</p><p className="text-2xl font-bold">{etapa}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Falta (m)</p><p className="text-2xl font-bold">{fmt(folga)}</p></div>
        <div className="rounded-2xl border-2 border-verde p-3"><p className="text-[14px] font-semibold">Andou (m)</p><p className="text-2xl font-bold">{fmt(aquiles)}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {etapa === 0
          ? 'Aquiles está parado. A tartaruga está 100 m na frente e anda 10 vezes mais devagar.'
          : `Aquiles chegou onde a tartaruga estava. Ela andou mais ${fmt(folga)} m. Os passos viram 100 + 10 + 1 + 0,1 + ..., e a soma não passa de 111,11... m (1000 ÷ 9).`}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={etapa >= 12} onClick={() => setEtapa(etapa + 1)} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Próxima etapa</button>
        <button type="button" onClick={() => setEtapa(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
