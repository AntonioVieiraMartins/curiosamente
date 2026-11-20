import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Rendimento aproximado de ATP por etapa (livros novos falam em cerca de 30 a 32 no total)
const etapas = [
  { nome: 'Glicólise', onde: 'no citoplasma', atp: 2, texto: 'A glicose (6 carbonos) é cortada em duas moléculas de 3 carbonos. Não precisa de oxigênio. Rende 2 ATP.' },
  { nome: 'Ciclo de Krebs', onde: 'na matriz da mitocôndria', atp: 2, texto: 'Os pedaços são "desmontados" e viram CO₂. Rende pouco ATP direto (cerca de 2), mas carrega muitas moléculas transportadoras de energia.' },
  { nome: 'Cadeia respiratória', onde: 'na membrana interna da mitocôndria', atp: 26, texto: 'As transportadoras entregam a energia numa fila de proteínas. No fim, o oxigênio recebe os elétrons e vira água. Rende cerca de 26 ATP.' },
]

export default function DaGlicoseAoATP() {
  const [k, setK] = useState(0)
  const total = etapas.slice(0, k + 1).reduce((s, e) => s + e.atp, 0)
  const e = etapas[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Da glicose ao ATP, etapa por etapa</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Etapa">
        {etapas.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{i + 1}. {x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 80" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Barra do ATP acumulado">
        <rect x={10} y={30} width={200} height={18} rx={9} fill="var(--color-borda)" />
        <rect x={10} y={30} width={200 * (total / 30)} height={18} rx={9} fill="var(--color-amarelo)" />
        <text x={10} y={22} fontSize="10" fill="var(--color-suave)">ATP acumulado: {total} de cerca de 30</text>
        <text x={10} y={68} fontSize="10" fill="var(--color-suave)">cada etapa soma uma parte</text>
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>{e.nome}</strong> ({e.onde}). Rende cerca de <strong>{e.atp} ATP</strong>.</p>
        <p className="rounded-2xl bg-fundo p-3">{e.texto}</p>
      </div>
    </div>
  )
}
