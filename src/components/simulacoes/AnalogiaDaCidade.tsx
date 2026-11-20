import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ORGS = ['Núcleo', 'Mitocôndria', 'Ribossomo', 'Golgi', 'Membrana', 'Lisossomo']
const CASOS = [
  { cidade: 'A prefeitura: guarda as plantas da cidade e dá as ordens', certa: 0, porque: 'O núcleo guarda o DNA (as "plantas") e comanda a célula.' },
  { cidade: 'A usina que gera a energia da cidade', certa: 1, porque: 'A mitocôndria libera a energia dos alimentos.' },
  { cidade: 'As fábricas de peças e máquinas', certa: 2, porque: 'Os ribossomos fabricam proteínas, as peças e máquinas da célula.' },
  { cidade: 'Os Correios: embalam e despacham as encomendas', certa: 3, porque: 'O complexo de Golgi embala e envia as proteínas.' },
  { cidade: 'Os muros e o portão: decidem quem entra e quem sai', certa: 4, porque: 'A membrana plasmática controla a entrada e a saída de substâncias.' },
  { cidade: 'A coleta de lixo e a reciclagem', certa: 5, porque: 'O lisossomo digere e recicla o que a célula não quer mais.' },
]

export default function AnalogiaDaCidade() {
  const [resp, setResp] = useState<(number | null)[]>(CASOS.map(() => null))
  const acertos = resp.filter((r, i) => r === CASOS[i].certa).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A célula é uma cidade</p>
      <ul className="mt-3 flex flex-col gap-3">
        {CASOS.map((c, i) => {
          const r = resp[i]
          return (
            <li key={c.cidade} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{c.cidade}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {ORGS.map((o, k) => (
                  <button key={o} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${r === k ? (k === c.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === c.certa ? 'border-verde' : 'border-borda'}`}>{o}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === c.certa ? 'Certo. ' : 'Quase. '}{c.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {CASOS.length}</p>
        <button type="button" onClick={() => setResp(CASOS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
