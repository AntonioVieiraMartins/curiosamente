import { useState } from 'react'
import { cartao } from '../ui/estilos'

const NOMES = ['Fusão', 'Solidificação', 'Vaporização', 'Condensação', 'Sublimação', 'Ressublimação']
const CENAS = [
  { texto: 'O sorvete derrete no sol.', certa: 0, porque: 'Sólido para líquido: fusão.' },
  { texto: 'A água do lago vira gelo numa noite muito fria.', certa: 1, porque: 'Líquido para sólido: solidificação.' },
  { texto: 'A poça d’água some depois de umas horas de sol.', certa: 2, porque: 'Líquido para gás: vaporização (aqui, por evaporação).' },
  { texto: 'O espelho do banheiro fica embaçado depois do banho.', certa: 3, porque: 'O vapor encontra o vidro frio e vira gotinhas: condensação.' },
  { texto: 'A bolinha de naftalina vai sumindo no armário, sem virar líquido.', certa: 4, porque: 'Sólido direto para gás: sublimação.' },
  { texto: 'A geada branca cobre a grama de manhã, formada direto do vapor do ar frio.', certa: 5, porque: 'Gás direto para sólido: ressublimação.' },
]

export default function QualMudancaDeEstado() {
  const [resp, setResp] = useState<(number | null)[]>(CENAS.map(() => null))
  const acertos = resp.filter((r, i) => r === CENAS[i].certa).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Que mudança de estado é essa?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {CENAS.map((c, i) => {
          const r = resp[i]
          return (
            <li key={c.texto} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{c.texto}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {NOMES.map((n, k) => (
                  <button key={n} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${r === k ? (k === c.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === c.certa ? 'border-verde' : 'border-borda'}`}>{n}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === c.certa ? 'Certo. ' : 'Quase. '}{c.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {CENAS.length}</p>
        <button type="button" onClick={() => setResp(CENAS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
