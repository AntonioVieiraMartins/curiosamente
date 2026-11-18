import { useState } from 'react'
import { cartao } from '../ui/estilos'

const divisores = [4, 8, 3, 6, 7]

// 1 dividido por d, um algarismo por vez: ou o resto zera (decimal exato) ou os restos se repetem (dízima)
export default function DizimaQueNaoAcaba() {
  const [d, setD] = useState(4)
  const [n, setN] = useState(1)
  const digitos: number[] = []
  const vistos: number[] = [1] // o primeiro resto (1) também conta para achar a repetição
  let resto = 1, acabou = false, repete = -1
  for (let k = 0; k < n; k++) {
    resto *= 10
    digitos.push(Math.floor(resto / d))
    resto %= d
    if (resto === 0) { acabou = true; break }
    const j = vistos.indexOf(resto)
    if (j >= 0) { repete = j; break }
    vistos.push(resto)
  }
  const parou = acabou || repete >= 0
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">1 dividido por…</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Divisor">
        {divisores.map((x) => (
          <button key={x} type="button" aria-pressed={d === x} onClick={() => { setD(x); setN(1) }} className={`min-h-11 min-w-11 rounded-full border-2 font-semibold ${d === x ? 'border-azul bg-fundo' : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-2xl font-bold">1 ÷ {d} = 0,{digitos.join('')}{(!parou || repete >= 0) && '…'}</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {acabou ? 'O resto chegou a zero: o decimal é exato (termina).' : repete >= 0 ? `O resto já apareceu antes, então os algarismos vão se repetir para sempre: é uma dízima periódica (como 0,333…).` : 'Aperte “Mais um algarismo” e acompanhe os restos.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={parou || n >= 12} onClick={() => setN(n + 1)} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Mais um algarismo</button>
        <button type="button" onClick={() => setN(1)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
