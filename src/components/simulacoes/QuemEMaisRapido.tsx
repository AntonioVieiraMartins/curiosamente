import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Comparar velocidades dadas em unidades diferentes: tudo precisa ir para a mesma unidade antes de comparar
const PARES = [
  { a: '36 km/h', b: '8 m/s', certa: 0, porque: '8 m/s × 3,6 = 28,8 km/h. Então 36 km/h é maior.' },
  { a: '20 m/s', b: '60 km/h', certa: 0, porque: '20 m/s × 3,6 = 72 km/h, maior que 60 km/h.' },
  { a: '10 m/s', b: '36 km/h', certa: 2, porque: '10 m/s × 3,6 = 36 km/h. São iguais.' },
  { a: '120 km/h', b: '30 m/s', certa: 0, porque: '30 m/s × 3,6 = 108 km/h. Então 120 km/h é maior.' },
  { a: '50 km/h', b: '15 m/s', certa: 1, porque: '15 m/s × 3,6 = 54 km/h, maior que 50 km/h. Então B é maior.' },
]
const OP = ['A é maior', 'B é maior', 'São iguais']

export default function QuemEMaisRapido() {
  const [resp, setResp] = useState<(number | null)[]>(PARES.map(() => null))
  const acertos = resp.filter((r, i) => r === PARES[i].certa).length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual velocidade é maior?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {PARES.map((p, i) => {
          const r = resp[i]
          return (
            <li key={p.a + p.b} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">A: {p.a} &nbsp;·&nbsp; B: {p.b}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {OP.map((n, k) => (
                  <button key={n} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === k ? (k === p.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === p.certa ? 'border-verde' : 'border-borda'}`}>{n}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === p.certa ? 'Certo. ' : 'Quase. '}{p.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {PARES.length}</p>
        <button type="button" onClick={() => setResp(PARES.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
