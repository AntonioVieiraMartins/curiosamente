import { useState } from 'react'
import { cartao } from '../ui/estilos'

const CENAS = [
  { texto: 'Você está sentado num ônibus em movimento. Em relação ao motorista, você está...', certa: 0, porque: 'Vocês dois estão no mesmo ônibus: a distância entre vocês não muda. Repouso.' },
  { texto: 'Você está sentado num ônibus em movimento. Em relação a um poste na calçada, você está...', certa: 1, porque: 'A distância entre você e o poste muda o tempo todo. Movimento.' },
  { texto: 'Um carro está parado no sinal vermelho. Em relação ao Sol, esse carro está...', certa: 1, porque: 'A Terra gira e orbita o Sol, levando o carro junto. Movimento (e bem rápido!).' },
  { texto: 'Uma pessoa dorme num avião em pleno voo. Em relação à poltrona, ela está...', certa: 0, porque: 'A pessoa e a poltrona não mudam de posição entre si. Repouso.' },
  { texto: 'Uma pessoa dorme num avião em pleno voo. Em relação ao solo, ela está...', certa: 1, porque: 'O avião se afasta do solo, e a pessoa vai junto. Movimento.' },
  { texto: 'Duas pessoas passeiam lado a lado, no mesmo ritmo. Uma em relação à outra está...', certa: 0, porque: 'A distância entre elas se mantém. Repouso relativo.' },
]
const OP = ['Em repouso', 'Em movimento']

export default function QuemSeMove() {
  const [resp, setResp] = useState<(number | null)[]>(CENAS.map(() => null))
  const acertos = resp.filter((r, i) => r === CENAS[i].certa).length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Repouso ou movimento?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {CENAS.map((c, i) => {
          const r = resp[i]
          return (
            <li key={c.texto} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{c.texto}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {OP.map((n, k) => (
                  <button key={n} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === k ? (k === c.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === c.certa ? 'border-verde' : 'border-borda'}`}>{n}</button>
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
