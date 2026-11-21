import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Datação por carbono-14: idade = meia-vida · log2(100 / % que resta)
const META = 5730
const exemplos = [
  { nome: 'Pão de Pompeia (cerca de 1.950 anos)', pct: 79 },
  { nome: 'Ötzi, o homem do gelo (cerca de 5.300 anos)', pct: 53 },
  { nome: 'Luzia, de Lagoa Santa (cerca de 11.500 anos)', pct: 25 },
]

export default function DatandoUmFossil() {
  const [pct, setPct] = useState(50)
  const idade = META * Math.log2(100 / pct)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Datação por carbono-14</p>
      <svg viewBox="0 0 220 50" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Resta ${pct}% do carbono-14; idade de cerca de ${Math.round(idade)} anos`}>
        <rect x="10" y="14" width="200" height="16" rx="8" fill="var(--color-borda)" />
        <rect x="10" y="14" width={2 * pct} height="16" rx="8" fill="var(--color-azul)" />
        <text x="110" y="45" textAnchor="middle" fontSize="8" fill="var(--color-suave)">carbono-14 que ainda resta</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Carbono-14 que resta (%)" valor={pct} min={1} max={100} passo={1} aoMudar={setPct} /></div>
      <div className="mt-3 flex flex-wrap gap-2">
        {exemplos.map((e) => (
          <button key={e.nome} type="button" onClick={() => setPct(e.pct)} className="min-h-11 rounded-full border border-borda bg-superficie px-3 text-[13px] font-semibold">{e.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {pct}% restando, a idade é de cerca de <strong>{Math.round(idade / 10) * 10 > 0 ? (Math.round(idade / 10) * 10).toLocaleString('pt-BR') : '0'} anos</strong>.
        {pct <= 5 ? ' Com tão pouco carbono-14, a medida é incerta: o método serve só até cerca de 50 mil anos.' : ''}
      </p>
    </div>
  )
}
