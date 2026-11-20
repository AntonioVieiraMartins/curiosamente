import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ritmos = [
  { nome: '1 por segundo', v: 1 },
  { nome: '1 mil por segundo', v: 1e3 },
  { nome: '1 milhão por segundo', v: 1e6 },
  { nome: '1 bilhão por segundo', v: 1e9 },
]
const AVOGADRO = 6.022e23
const SEG_ANO = 3.156e7
const IDADE_UNIVERSO = 1.38e10

function fmt(x: number) {
  if (x >= 1e12) return `${(x / 1e12).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} trilhões`
  if (x >= 1e9) return `${(x / 1e9).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} bilhões`
  if (x >= 1e6) return `${(x / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} milhões`
  return Math.round(x).toLocaleString('pt-BR')
}

// Quanto tempo leva para contar 1 mol de partículas, num ritmo constante
export default function ContandoOMol() {
  const [k, setK] = useState(3)
  const anos = AVOGADRO / ritmos[k].v / SEG_ANO
  const vezes = anos / IDADE_UNIVERSO
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">E se fôssemos contar?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Ritmo de contagem">
        {ritmos.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Contando <strong>{ritmos[k].nome}</strong>, sem parar nem para dormir, levaria <strong>{fmt(anos)} de anos</strong> para contar 1 mol de partículas.
        {' '}{vezes >= 1 ? `Isso é cerca de ${vezes.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} vez(es) a idade do universo (13,8 bilhões de anos).` : `Isso é só ${(vezes * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}% da idade do universo.`}
      </p>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">Por isso ninguém conta átomos um a um: a gente <strong>pesa</strong> e usa a massa molar como atalho.</p>
    </div>
  )
}
