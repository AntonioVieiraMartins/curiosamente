import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Operações do mesmo nível: da esquerda para a direita. Agrupar do outro lado muda o resultado.
const casos = [
  { expr: '48 ÷ 6 × 2', certo: '(48 ÷ 6) × 2 = 8 × 2 = 16', errado: '48 ÷ (6 × 2) = 48 ÷ 12 = 4' },
  { expr: '20 - 5 + 3', certo: '(20 - 5) + 3 = 15 + 3 = 18', errado: '20 - (5 + 3) = 20 - 8 = 12' },
  { expr: '100 ÷ 10 ÷ 2', certo: '(100 ÷ 10) ÷ 2 = 10 ÷ 2 = 5', errado: '100 ÷ (10 ÷ 2) = 100 ÷ 5 = 20' },
]

export default function MesmoNivel() {
  const [k, setK] = useState(0)
  const c = casos[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mesmo nível: esquerda para a direita</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a conta">
        {casos.map((x, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-4 font-mono font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{x.expr}</button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-verde p-3 text-[15px]"><p className="font-semibold">Da esquerda para a direita (certo)</p><p className="mt-1 font-mono">{c.certo}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3 text-[15px]"><p className="font-semibold">Agrupando do outro lado (errado)</p><p className="mt-1 font-mono">{c.errado}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">Quando só há operações do mesmo nível (× e ÷, ou + e -), vale a ordem em que aparecem, da esquerda para a direita.</p>
    </div>
  )
}
