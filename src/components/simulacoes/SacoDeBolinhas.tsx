import { useState } from 'react'
import { cartao } from '../ui/estilos'

const COR = ['var(--color-coral)', 'var(--color-azul)', 'var(--color-verde)']
const NOME = ['vermelha', 'azul', 'verde']

// Tira bolinhas com reposição: sorteia, anota e devolve ao saco
function tirar(qtd: number, qs: number[]) {
  const total = qs[0] + qs[1] + qs[2]
  const r = [0, 0, 0]
  for (let i = 0; i < qtd; i++) {
    const x = Math.random() * total
    r[x < qs[0] ? 0 : x < qs[0] + qs[1] ? 1 : 2]++
  }
  return r
}

export default function SacoDeBolinhas() {
  const [qs, setQs] = useState([3, 2, 1])
  const [saiu, setSaiu] = useState([0, 0, 0])
  const total = qs[0] + qs[1] + qs[2]
  const feitas = saiu[0] + saiu[1] + saiu[2]

  const mudar = (i: number, v: number) => { setQs((q) => q.map((x, k) => (k === i ? v : x))); setSaiu([0, 0, 0]) }
  const jogar = (n: number) => { if (total > 0) { const r = tirar(n, qs); setSaiu((s) => s.map((v, i) => v + r[i])) } }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Saco de bolinhas</p>
      <div className="mt-3 flex min-h-12 flex-wrap gap-1.5 rounded-2xl bg-fundo p-3" role="img" aria-label={`Saco com ${qs[0]} vermelhas, ${qs[1]} azuis e ${qs[2]} verdes`}>
        {qs.flatMap((q, i) => Array.from({ length: q }, (_, k) => <span key={`${i}-${k}`} className="h-6 w-6 rounded-full" style={{ background: COR[i] }} />))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {qs.map((q, i) => (
          <label key={i} className="text-sm font-semibold">
            {NOME[i][0].toUpperCase() + NOME[i].slice(1)}s: {q}
            <input type="range" min={0} max={10} value={q} onChange={(e) => mudar(i, Number(e.target.value))} className="mt-1 w-full" style={{ accentColor: COR[i] }} />
          </label>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[1, 100, 1000].map((n) => (
          <button key={n} type="button" onClick={() => jogar(n)} disabled={total === 0} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul disabled:opacity-40">Tirar {n.toLocaleString('pt-BR')}</button>
        ))}
        <button type="button" onClick={() => setSaiu([0, 0, 0])} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0 ? 'O saco está vazio. Ponha algumas bolinhas.' : (
          <>
            {NOME.map((n, i) => `${n}: ${qs[i]}/${total} ≈ ${((qs[i] / total) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`).join(' · ')}.
            {feitas > 0 && <> Depois de {feitas.toLocaleString('pt-BR')} sorteios, saíram {NOME.map((n, i) => `${((saiu[i] / feitas) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}% ${n}s`).join(', ')}.</>}
          </>
        )}
      </p>
    </div>
  )
}
