import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { hashDeBrinquedo } from './hashDeBrinquedo'

const mensagens = ['Primeira versão', 'Adiciona login', 'Corrige bug', 'Muda a cor']

// Cada commit tem um código calculado a partir do conteúdo e do commit anterior (hash de brinquedo, 8 dígitos).
export default function CorrenteDeCommits() {
  const [mexeu, setMexeu] = useState(false)
  const ids = (alterado: boolean) => {
    const out: string[] = []
    mensagens.forEach((m, i) => {
      const texto = i === 0 && alterado ? `${m} (adulterado)` : m
      out.push(hashDeBrinquedo((out[i - 1] ?? '') + texto))
    })
    return out
  }
  const original = ids(false)
  const atual = ids(mexeu)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cada commit depende do anterior</p>
      <button type="button" aria-pressed={mexeu} onClick={() => setMexeu(!mexeu)}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${mexeu ? 'border-coral' : 'border-borda'}`}>{mexeu ? 'Alguém adulterou o commit 1 (ligado)' : 'Ninguém mexeu em nada (desligado)'}</button>
      <ol className="mt-3 space-y-1.5 font-mono text-[14px]">
        {mensagens.map((m, i) => {
          const mudou = atual[i] !== original[i]
          return (
            <li key={m} className={`rounded-xl border-2 px-3 py-1.5 ${mudou ? 'border-coral bg-amarelo' : 'border-borda'}`}>
              {i + 1}. {m}{i === 0 && mexeu ? ' (adulterado)' : ''}: <strong>{atual[i]}</strong>{mudou ? ' ← mudou!' : ''}
            </li>
          )
        })}
      </ol>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {mexeu ? 'Mexer num commit antigo muda o código dele e de TODOS os seguintes. Por isso uma adulteração do passado fica visível.' : 'Os códigos dependem do conteúdo e dos commits anteriores. Ligue a adulteração para ver.'}
      </p>
    </div>
  )
}
