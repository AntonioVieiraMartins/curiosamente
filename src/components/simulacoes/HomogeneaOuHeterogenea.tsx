import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ITENS = [
  { nome: 'Água com sal dissolvido', homo: true, porque: 'Uma fase só: não dá para ver o sal. Mistura homogênea (solução).' },
  { nome: 'Água com óleo', homo: false, porque: 'Duas fases: o óleo fica por cima. Mistura heterogênea.' },
  { nome: 'Ar sem poeira', homo: true, porque: 'Mistura de gases (nitrogênio, oxigênio...) com uma fase só. Homogênea.' },
  { nome: 'Granito', homo: false, porque: 'Dá para ver cristais de minerais diferentes a olho nu. Heterogênea.' },
  { nome: 'Água com areia', homo: false, porque: 'A areia fica visível no fundo. Duas fases. Heterogênea.' },
  { nome: 'Café com açúcar bem mexido (sem borra)', homo: true, porque: 'O açúcar se dissolveu e não aparece. Uma fase só. Homogênea.' },
  { nome: 'Água com gelo', homo: false, porque: 'Mesmo sendo só H₂O, há duas fases visíveis (sólido e líquido). É um sistema heterogêneo, mas não uma mistura de substâncias diferentes.' },
  { nome: 'Salada de frutas', homo: false, porque: 'Cada pedaço é visível. Heterogênea.' },
]

// Homogênea = uma fase só (aspecto uniforme); heterogênea = duas ou mais fases visíveis
export default function HomogeneaOuHeterogenea() {
  const [resp, setResp] = useState<(boolean | null)[]>(ITENS.map(() => null))
  const acertos = resp.filter((r, i) => r === ITENS[i].homo).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas fases você vê?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {ITENS.map((it, i) => {
          const r = resp[i]
          return (
            <li key={it.nome} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{it.nome}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[true, false].map((v) => (
                  <button key={String(v)} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? v : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === v ? (v === it.homo ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>
                    {v ? 'Homogênea (1 fase)' : 'Heterogênea (2 ou mais)'}
                  </button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === it.homo ? 'Certo. ' : 'Quase. '}{it.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {ITENS.length}</p>
        <button type="button" onClick={() => setResp(ITENS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
