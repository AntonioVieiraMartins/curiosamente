import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Valores aproximados: humano com cerca de 1,2 x 10 elevado a menos 8 por base por geração (genoma diploide); E. coli, cerca de 0,001 por genoma por divisão
const especies = [
  { nome: 'Humano', porIndividuo: 70, unidade: 'por pessoa, por geração' },
  { nome: 'Bactéria E. coli', porIndividuo: 0.001, unidade: 'por bactéria, por divisão' },
]
const populacoes = [1, 10, 1000, 1000000, 1000000000]

export default function MutacoesPorGeracao() {
  const [e, setE] = useState(0)
  const [k, setK] = useState(2)
  const n = populacoes[k]
  const total = especies[e].porIndividuo * n
  const fmt = (x: number) => x.toLocaleString('pt-BR', { maximumFractionDigits: 3 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas mutações novas?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Espécie">
        {especies.map((s, i) => (
          <button key={s.nome} type="button" onClick={() => setE(i)} aria-pressed={e === i} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${e === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{s.nome}</button>
        ))}
      </div>
      <label className="mt-3 block text-sm font-semibold">
        Indivíduos: {fmt(n)}
        <input type="range" min={0} max={populacoes.length - 1} step={1} value={k} onChange={(ev) => setK(Number(ev.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {especies[e].nome}: cerca de {fmt(especies[e].porIndividuo)} mutações novas {especies[e].unidade}. Em {fmt(n)} {n === 1 ? 'indivíduo' : 'indivíduos'}: cerca de {fmt(total)} mutações novas por geração.
        {e === 1 && n >= 1000000 ? ' Uma bactéria quase nunca muda, mas numa população enorme sempre há alguma bactéria com uma mutação nova. É assim que surge a resistência a antibióticos.' : ''}
        {e === 0 ? ' A maioria dessas mutações cai em partes do DNA que não fazem diferença.' : ''}
      </p>
    </div>
  )
}
