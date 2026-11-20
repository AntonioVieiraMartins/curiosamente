import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Teste de chama: cada elemento dá uma cor característica porque seus elétrons têm saltos de energia próprios
const elementos = [
  { simbolo: 'Na', nome: 'Sódio', cor: '#f0a824', texto: 'amarelo-alaranjado intenso' },
  { simbolo: 'K', nome: 'Potássio', cor: '#b57edc', texto: 'lilás (violeta clara)' },
  { simbolo: 'Li', nome: 'Lítio', cor: '#d62839', texto: 'vermelho carmim' },
  { simbolo: 'Cu', nome: 'Cobre', cor: '#1fae8f', texto: 'verde-azulado' },
  { simbolo: 'Ca', nome: 'Cálcio', cor: '#e8662b', texto: 'laranja-avermelhado' },
]

export default function TesteDeChama() {
  const [k, setK] = useState(0)
  const el = elementos[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Teste de chama</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Elemento">
        {elementos.map((e, i) => (
          <button key={e.simbolo} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{e.nome} ({e.simbolo})</button>
        ))}
      </div>
      <svg viewBox="0 0 160 110" className="mx-auto mt-3 w-full max-w-[200px] rounded-2xl bg-fundo" role="img" aria-label={`Chama de ${el.nome}: ${el.texto}`}>
        <rect x={72} y={86} width={16} height={18} fill="var(--color-texto)" fillOpacity="0.6" />
        <path d="M80 12 C 56 44, 54 70, 80 86 C 106 70, 104 44, 80 12 Z" fill={el.cor} fillOpacity="0.85" />
        <path d="M80 46 C 68 60, 68 74, 80 84 C 92 74, 92 60, 80 46 Z" fill="white" fillOpacity="0.55" />
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O <strong>{el.nome}</strong> deixa a chama {el.texto}. A chama dá energia aos elétrons, que sobem de nível e depois descem, emitindo luz de cores bem definidas. Como cada elemento tem seus próprios níveis, cada um tem a sua "assinatura" de cor, e é assim que se reconhecem elementos num laboratório. Os fogos de artifício usam exatamente isso.
      </p>
    </div>
  )
}
