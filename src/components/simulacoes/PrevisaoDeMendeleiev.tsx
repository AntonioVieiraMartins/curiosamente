import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Mendeleiev deixou lacunas e previu os elementos que faltavam; depois eles foram achados (valores aproximados)
const casos = [
  { previsto: 'eka-silício', real: 'Germânio (Ge)', ano: 1886, massaP: 72, massaR: 72.6, densP: 5.5, densR: 5.3 },
  { previsto: 'eka-alumínio', real: 'Gálio (Ga)', ano: 1875, massaP: 68, massaR: 69.7, densP: 5.9, densR: 5.9 },
]

export default function PrevisaoDeMendeleiev() {
  const [k, setK] = useState(0)
  const [achado, setAchado] = useState(false)
  const c = casos[k]
  const erro = ((Math.abs(c.massaP - c.massaR) / c.massaR) * 100).toFixed(1).replace('.', ',')
  const n = (x: number) => String(x).replace('.', ',')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As lacunas de Mendeleiev</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Elemento previsto">
        {casos.map((x, i) => (
          <button key={x.previsto} type="button" aria-pressed={k === i} onClick={() => { setK(i); setAchado(false) }} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.previsto}</button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-2xl bg-fundo p-4 text-[15px]">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-suave">Previsto por Mendeleiev (1871)</p>
          <p className="mt-1 font-serif text-xl">{c.previsto}</p>
          <p>Massa atômica ≈ {c.massaP}</p>
          <p>Densidade ≈ {n(c.densP)} g/cm³</p>
        </div>
        <div className="rounded-2xl bg-fundo p-4 text-[15px]" style={{ opacity: achado ? 1 : 0.35 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-suave">Descoberto de verdade ({achado ? c.ano : '?'})</p>
          <p className="mt-1 font-serif text-xl">{achado ? c.real : '???'}</p>
          <p>Massa atômica ≈ {achado ? n(c.massaR) : '?'}</p>
          <p>Densidade ≈ {achado ? n(c.densR) : '?'} g/cm³</p>
        </div>
      </div>
      <button type="button" onClick={() => setAchado(true)} disabled={achado} className="mt-3 min-h-11 rounded-full bg-texto px-5 text-[15px] font-semibold text-white disabled:opacity-40">Revelar o elemento real</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {achado ? <>A previsão errou a massa em só <strong>{erro}%</strong>. Prever um elemento antes de ele ser descoberto, e acertar, foi o que convenceu o mundo de que a tabela refletia algo real.</> : 'Mendeleiev deixou casas vazias na tabela e escreveu como seria o elemento que preencheria cada uma. Aperte o botão para ver o que foi encontrado.'}
      </p>
    </div>
  )
}
