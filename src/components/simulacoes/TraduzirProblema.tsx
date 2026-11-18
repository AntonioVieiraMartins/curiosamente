import { useState } from 'react'
import { cartao } from '../ui/estilos'

const problemas = [
  { texto: 'Pensei num número, somei 7 e deu 15.', opcoes: ['x + 7 = 15', '7x = 15', 'x − 7 = 15'], certa: 0, x: 8 },
  { texto: 'O dobro de um número, mais 3, é 19.', opcoes: ['2 + x + 3 = 19', '2x + 3 = 19', 'x² + 3 = 19'], certa: 1, x: 8 },
  { texto: 'Gastei 5 reais e sobraram 12. Quanto eu tinha?', opcoes: ['x + 5 = 12', '5x = 12', 'x − 5 = 12'], certa: 2, x: 17 },
  { texto: 'Três amigos dividem a conta e cada um paga 14 reais. Qual o total?', opcoes: ['3x = 14', 'x ÷ 3 = 14', 'x − 3 = 14'], certa: 1, x: 42 },
]

// Traduzir do português para a equação é metade do trabalho.
export default function TraduzirProblema() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const p = problemas[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Do português para a equação</p>
      <p className="mt-3 text-lg font-semibold">{p.texto}</p>
      <div className="mt-2 flex flex-col gap-2">
        {p.opcoes.map((o, k) => (
          <button key={o} type="button" disabled={resp !== null} onClick={() => setResp(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-left font-semibold ${resp === null ? 'border-borda' : k === p.certa ? 'border-verde bg-verde text-white' : resp === k ? 'border-coral' : 'border-borda opacity-50'}`}>{o}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Qual equação conta essa história?' : `${resp === p.certa ? 'Isso!' : 'Quase.'} A equação é ${p.opcoes[p.certa]}, e a solução é x = ${p.x}.`}
      </p>
      {resp !== null && (
        <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white" onClick={() => { setResp(null); setI((i + 1) % problemas.length) }}>Próximo</button>
      )}
    </div>
  )
}
