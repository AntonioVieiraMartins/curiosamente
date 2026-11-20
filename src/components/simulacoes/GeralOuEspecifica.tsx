import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ITENS = [
  { nome: 'Massa', geral: true, porque: 'Todo corpo tem massa, seja de ferro ou de madeira. É propriedade geral.' },
  { nome: 'Densidade', geral: false, porque: 'Cada material tem a sua (ferro 7,87; água 1,0). Serve para identificar. É específica.' },
  { nome: 'Volume', geral: true, porque: 'Todo corpo ocupa espaço. Geral.' },
  { nome: 'Ponto de fusão', geral: false, porque: 'O gelo derrete a 0 °C e o ferro a cerca de 1.538 °C. Cada substância tem o seu. Específica.' },
  { nome: 'Inércia', geral: true, porque: 'Todo corpo resiste a mudar o próprio movimento. Geral.' },
  { nome: 'Dureza', geral: false, porque: 'O diamante risca o vidro, e o vidro não risca o diamante. Cada material tem a sua. Específica.' },
  { nome: 'Divisibilidade', geral: true, porque: 'Todo corpo pode ser dividido em pedaços menores. Geral.' },
  { nome: 'Ponto de ebulição', geral: false, porque: 'A água ferve a 100 °C ao nível do mar; o álcool, a cerca de 78 °C. Específica.' },
]

// Propriedade geral vale para qualquer matéria; específica identifica cada substância
export default function GeralOuEspecifica() {
  const [resp, setResp] = useState<(boolean | null)[]>(ITENS.map(() => null))
  const acertos = resp.filter((r, i) => r === ITENS[i].geral).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Geral ou específica?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {ITENS.map((it, i) => {
          const r = resp[i]
          return (
            <li key={it.nome} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{it.nome}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[true, false].map((v) => (
                  <button key={String(v)} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? v : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === v ? (v === it.geral ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>
                    {v ? 'Geral' : 'Específica'}
                  </button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === it.geral ? 'Certo. ' : 'Quase. '}{it.porque}</p>}
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
