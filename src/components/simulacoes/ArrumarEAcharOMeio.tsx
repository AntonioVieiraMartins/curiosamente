import { useState } from 'react'
import { cartao } from '../ui/estilos'

const listas = [
  { nome: '5 alturas', v: [158, 171, 149, 165, 160] },
  { nome: '6 alturas', v: [158, 171, 149, 165, 160, 154] },
]

// Mediana: arrume em ordem e pegue o do meio (se forem dois do meio, tire a média deles).
export default function ArrumarEAcharOMeio() {
  const [i, setI] = useState(0)
  const [arrumou, setArrumou] = useState(false)
  const l = listas[i]
  const lista = arrumou ? [...l.v].sort((a, b) => a - b) : l.v
  const n = lista.length
  const meios = n % 2 === 1 ? [(n - 1) / 2] : [n / 2 - 1, n / 2]
  const mediana = meios.reduce((s, k) => s + lista[k], 0) / meios.length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Achar o do meio</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {listas.map((q, k) => (
          <button key={q.nome} type="button" aria-pressed={k === i} onClick={() => { setI(k); setArrumou(false) }}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{q.nome}</button>
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
        {lista.map((v, k) => (
          <li key={k} className={`rounded-xl px-3 py-2 text-lg font-semibold ${arrumou && meios.includes(k) ? 'bg-verde text-white' : 'bg-fundo'}`}>{v}</li>
        ))}
      </ul>
      <button type="button" onClick={() => setArrumou(!arrumou)}
        className="mt-3 min-h-11 rounded-full border-2 border-borda px-4 font-semibold">{arrumou ? 'Embaralhar de novo' : 'Arrumar em ordem'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!arrumou
          ? 'Antes de achar o do meio, é preciso colocar os valores em ordem crescente.'
          : n % 2 === 1
            ? `São ${n} valores (ímpar): o do meio é o ${(n + 1) / 2}º. A mediana é ${mediana}.`
            : `São ${n} valores (par): há dois no meio (${lista[meios[0]]} e ${lista[meios[1]]}). A mediana é a média deles: ${mediana.toLocaleString('pt-BR')}.`}
      </p>
    </div>
  )
}
