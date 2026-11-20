import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Via = 'aerobia' | 'lactica' | 'alcoolica'

const vias: Record<Via, { nome: string; atp: number; sai: string; texto: string }> = {
  aerobia: { nome: 'Com oxigênio (respiração)', atp: 30, sai: 'CO₂ e H₂O', texto: 'A glicose é desmontada por completo. O oxigênio é o último a receber os elétrons. É o rendimento máximo, cerca de 30 ATP por glicose.' },
  lactica: { nome: 'Sem oxigênio: fermentação láctica', atp: 2, sai: 'ácido lático', texto: 'Só a glicólise funciona. A glicose fica pela metade e vira lactato. Rende 2 ATP, mas é rápido. Acontece no músculo em esforço forte e em bactérias do iogurte.' },
  alcoolica: { nome: 'Sem oxigênio: fermentação alcoólica', atp: 2, sai: 'álcool (etanol) e CO₂', texto: 'Acontece nas leveduras. Rende 2 ATP, e o CO₂ faz o pão crescer e a cerveja ter gás.' },
}

export default function ComOuSemOxigenio() {
  const [v, setV] = useState<Via>('aerobia')
  const d = vias[v]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Com ou sem oxigênio?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Via">
        {(Object.keys(vias) as Via[]).map((k) => (
          <button key={k} type="button" aria-pressed={v === k} onClick={() => setV(k)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${v === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{vias[k].nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Rendimento: ${d.atp} ATP por glicose`}>
        <rect x={10} y={22} width={200} height={20} rx={10} fill="var(--color-borda)" />
        <rect x={10} y={22} width={200 * (d.atp / 30)} height={20} rx={10} fill={d.atp > 10 ? 'var(--color-verde)' : 'var(--color-coral)'} />
        <text x={10} y={15} fontSize="10" fill="var(--color-suave)">ATP por glicose: cerca de {d.atp}</text>
        <text x={10} y={60} fontSize="10" fill="var(--color-suave)">escala: 30 ATP é a barra cheia</text>
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>Sobra no fim:</strong> {d.sai}.</p>
        <p className="rounded-2xl bg-fundo p-3">{d.texto}</p>
      </div>
    </div>
  )
}
