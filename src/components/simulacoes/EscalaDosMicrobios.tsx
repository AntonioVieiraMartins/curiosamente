import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tamanhos aproximados, em nanômetros, numa escala em que cada risco é 10 vezes maior que o anterior
const itens = [
  { nome: 'Fio de cabelo (espessura)', nm: 70000 },
  { nome: 'Célula humana típica', nm: 20000 },
  { nome: 'Hemácia (glóbulo vermelho)', nm: 7000 },
  { nome: 'Bactéria E. coli', nm: 2000 },
  { nome: 'Mimivírus (um vírus gigante)', nm: 500 },
  { nome: 'Coronavírus (SARS-CoV-2)', nm: 100 },
  { nome: 'Poliovírus', nm: 30 },
]
const largura = (nm: number) => ((Math.log10(nm) - 1) / 4) * 100

export default function EscalaDosMicrobios() {
  const [i, setI] = useState(5)
  const it = itens[i]
  const cabem = itens[0].nm / it.nm
  const fmt = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })
  const tam = it.nm >= 1000 ? `${fmt(it.nm / 1000)} micrômetros` : `${fmt(it.nm)} nanômetros`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Escala do mundo invisível (tamanhos aproximados)</p>
      <div className="mt-3 space-y-2" role="group" aria-label="Escolha um item">
        {itens.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`block w-full min-h-11 rounded-xl border p-2 text-left text-[14px] ${i === k ? 'border-texto' : 'border-borda'} bg-superficie`}>
            <span className="flex justify-between gap-2 font-semibold"><span>{x.nome}</span><span className="tabular-nums">{x.nm >= 1000 ? `${fmt(x.nm / 1000)} µm` : `${x.nm} nm`}</span></span>
            <span className="mt-1 block h-3 overflow-hidden rounded-full bg-fundo"><span className={`block h-full ${k < 4 ? 'bg-azul' : 'bg-coral'}`} style={{ width: `${largura(x.nm)}%` }} /></span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-suave">A barra usa escala de potências de 10: cada passo ao longo dela é 10 vezes maior que o anterior. Azul: células. Vermelho: vírus.</p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {it.nome}: cerca de {tam}. {i === 0 ? 'É a régua da comparação.' : <>Cabem cerca de <strong>{fmt(cabem)}</strong> lado a lado na espessura de um fio de cabelo.</>}
      </p>
    </div>
  )
}
