import { useState } from 'react'
import { cartao } from '../ui/estilos'

const niveis = [
  { nome: 'Dupla hélice', tamanho: 'cerca de 2 nm de largura', texto: 'As duas fitas se enrolam como uma escada em espiral. A cada volta completa há cerca de 10 pares de bases.' },
  { nome: 'Fio com contas (nucleossomos)', tamanho: 'cerca de 11 nm', texto: 'O DNA dá quase duas voltas em torno de oito proteínas chamadas histonas. É um fio de contas.' },
  { nome: 'Fibra enrolada', tamanho: 'cerca de 30 nm', texto: 'O colar se dobra e se enrola sobre si mesmo, formando uma fibra mais grossa.' },
  { nome: 'Alças e cromossomo', tamanho: 'cerca de 1.400 nm no cromossomo duplicado', texto: 'A fibra forma alças e se enrola ainda mais, até virar o cromossomo que se vê ao microscópio na hora da divisão.' },
]

// De 2 m de fio até um cromossomo de poucos micrômetros
export default function EmpacotandoODna() {
  const [k, setK] = useState(0)
  const n = niveis[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Como caber 2 metros num núcleo</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Nível de empacotamento">
        {niveis.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{i + 1}. {x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Desenho do nível ${n.nome}`}>
        {k === 0 && Array.from({ length: 18 }, (_, i) => (
          <g key={i}>
            <circle cx={20 + i * 10.5} cy={45 + 22 * Math.sin(i * 0.7)} r={3.5} fill="var(--color-azul)" />
            <circle cx={20 + i * 10.5} cy={45 - 22 * Math.sin(i * 0.7)} r={3.5} fill="var(--color-coral)" />
            <line x1={20 + i * 10.5} y1={45 + 22 * Math.sin(i * 0.7)} x2={20 + i * 10.5} y2={45 - 22 * Math.sin(i * 0.7)} stroke="var(--color-borda)" />
          </g>
        ))}
        {k === 1 && (
          <>
            <path d="M10 45 H210" stroke="var(--color-texto)" strokeWidth="1.5" />
            {[35, 80, 125, 170].map((x) => <circle key={x} cx={x} cy={45} r={14} fill="var(--color-verde)" fillOpacity="0.55" stroke="var(--color-verde)" />)}
          </>
        )}
        {k === 2 && <path d="M15 60 C40 20 60 80 85 40 S130 70 150 35 S190 70 205 40" fill="none" stroke="var(--color-verde)" strokeWidth="14" strokeLinecap="round" strokeOpacity="0.6" />}
        {k === 3 && (
          <>
            <path d="M85 12 Q110 5 135 12 L130 45 L135 78 Q110 85 85 78 L90 45 Z" fill="var(--color-coral)" fillOpacity="0.45" stroke="var(--color-coral)" strokeWidth="2" />
            <line x1={90} y1={45} x2={130} y2={45} stroke="var(--color-coral)" strokeWidth="2" />
          </>
        )}
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>{n.nome}:</strong> {n.tamanho}.</p>
        <p className="rounded-2xl bg-fundo p-3">{n.texto}</p>
      </div>
    </div>
  )
}
