import { useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes = ['Música', 'Navegador', 'Download']
const cores = ['bg-coral', 'bg-azul', 'bg-verde']
const TOTAL = 6 // cada programa precisa de 6 fatias de tempo para terminar

// Rodízio: cada processo recebe uma fatia de tempo, depois a vez passa para o próximo.
export default function RodizioDaCpu() {
  const [feito, setFeito] = useState([0, 0, 0])
  const [vez, setVez] = useState(0)
  const [fatias, setFatias] = useState(0)
  const acabou = feito.every((f) => f >= TOTAL)

  function passo() {
    if (acabou) return
    let v = vez
    while (feito[v] >= TOTAL) v = (v + 1) % 3
    setFeito(feito.map((f, i) => (i === v ? f + 1 : f)))
    setFatias(fatias + 1)
    setVez((v + 1) % 3)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O rodízio da CPU</p>
      <ul className="mt-3 space-y-2">
        {nomes.map((n, i) => (
          <li key={n} className={`rounded-xl p-2 ${!acabou && vez === i ? 'bg-amarelo' : 'bg-fundo'}`}>
            <div className="flex justify-between text-[15px] font-semibold"><span>{n}</span><span>{feito[i]}/{TOTAL}</span></div>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-superficie" aria-hidden="true">
              <div className={`h-full ${cores[i]}`} style={{ width: `${(feito[i] / TOTAL) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {acabou ? `Os três terminaram em ${fatias} fatias. Pareceu simultâneo, mas só um usava a CPU por vez.` : `Fatias usadas: ${fatias}. Próximo a rodar: ${nomes[vez]}.`}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white disabled:opacity-40" disabled={acabou} onClick={passo}>Dar uma fatia</button>
        <button type="button" className="min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => { setFeito([0, 0, 0]); setVez(0); setFatias(0) }}>Recomeçar</button>
      </div>
    </div>
  )
}
