import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Regra = { nome: string; ana: string; bia: string; fa: number; fb: number; vence: (a: number, b: number) => 0 | 1 | null }
const REGRAS: Regra[] = [
  { nome: 'Dois dados: par contra ímpar', ana: 'soma par', bia: 'soma ímpar', fa: 18, fb: 18, vence: (a, b) => ((a + b) % 2 === 0 ? 0 : 1) },
  { nome: 'Dois dados: 7 contra 6 ou 8', ana: 'soma 7', bia: 'soma 6 ou 8', fa: 6, fb: 10, vence: (a, b) => (a + b === 7 ? 0 : a + b === 6 || a + b === 8 ? 1 : null) },
  { nome: 'Um dado: 6 contra 1 ou 2', ana: 'sai 6', bia: 'sai 1 ou 2', fa: 6, fb: 12, vence: (a) => (a === 6 ? 0 : a <= 2 ? 1 : null) },
]

// Joga a regra escolhida muitas vezes e conta quem ganha (a=primeiro dado, b=segundo)
function disputar(r: Regra, qtd: number) {
  const res = [0, 0, 0]
  for (let i = 0; i < qtd; i++) {
    const v = r.vence(Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6))
    res[v === null ? 2 : v]++
  }
  return res
}

export default function JogoJusto() {
  const [i, setI] = useState(0)
  const [res, setRes] = useState([0, 0, 0])
  const r = REGRAS[i]
  const total = res[0] + res[1] + res[2]
  const jogar = (q: number) => { const n = disputar(r, q); setRes((x) => x.map((v, k) => v + n[k])) }
  const pct = (v: number) => (total ? ((v / total) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) : '0')
  const justo = r.fa === r.fb

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Esse jogo é justo?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o jogo">
        {REGRAS.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => { setI(k); setRes([0, 0, 0]) }} className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p className="mt-3 text-[15px]">Ana ganha se der <strong>{r.ana}</strong>. Bia ganha se der <strong>{r.bia}</strong>. Nos outros casos, ninguém ganha a rodada.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {[1, 100, 1000].map((q) => (
          <button key={q} type="button" onClick={() => jogar(q)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">Jogar {q.toLocaleString('pt-BR')}</button>
        ))}
        <button type="button" onClick={() => setRes([0, 0, 0])} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0 ? 'Jogue e veja quem leva vantagem.' : (
          <>Rodadas: {total.toLocaleString('pt-BR')}. Ana: {res[0].toLocaleString('pt-BR')} ({pct(res[0])}%). Bia: {res[1].toLocaleString('pt-BR')} ({pct(res[1])}%). Ninguém: {res[2].toLocaleString('pt-BR')}. </>
        )}
        {justo ? ' As chances de Ana e de Bia são iguais: o jogo é justo.' : ` Pela conta (36 combinações), Ana tem ${r.fa}/36 de chance e Bia ${r.fb}/36: não é justo.`}
      </p>
    </div>
  )
}
