import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const ESTADOS = ['Sólido', 'Líquido', 'Gasoso']
// [de][para] -> nome e se absorve calor
const MUDANCAS: ({ nome: string; calor: string } | null)[][] = [
  [null, { nome: 'Fusão', calor: 'absorve calor' }, { nome: 'Sublimação', calor: 'absorve calor' }],
  [{ nome: 'Solidificação', calor: 'libera calor' }, null, { nome: 'Vaporização', calor: 'absorve calor' }],
  [{ nome: 'Ressublimação (ou deposição)', calor: 'libera calor' }, { nome: 'Condensação (ou liquefação)', calor: 'libera calor' }, null],
]

export default function NomeDaMudanca() {
  const idA = useId()
  const idB = useId()
  const [de, setDe] = useState(0)
  const [para, setPara] = useState(1)
  const m = MUDANCAS[de][para]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Como se chama a mudança?</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label htmlFor={idA} className="block text-sm font-semibold">De
          <select id={idA} value={de} onChange={(e) => setDe(Number(e.target.value))} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-superficie px-2">
            {ESTADOS.map((x, i) => <option key={x} value={i}>{x}</option>)}
          </select>
        </label>
        <label htmlFor={idB} className="block text-sm font-semibold">Para
          <select id={idB} value={para} onChange={(e) => setPara(Number(e.target.value))} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-superficie px-2">
            {ESTADOS.map((x, i) => <option key={x} value={i}>{x}</option>)}
          </select>
        </label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {m ? <>{ESTADOS[de]} para {ESTADOS[para].toLowerCase()}: <strong>{m.nome}</strong>. A substância {m.calor}.</> : 'Escolha dois estados diferentes.'}
      </p>
    </div>
  )
}
