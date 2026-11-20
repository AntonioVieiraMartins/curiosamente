import { useState } from 'react'
import { cartao } from '../ui/estilos'

const dna = 'CCGAATTCTTAGGCATGAATTCGGATCCAAGAATTCTTAC'
// Cada enzima reconhece uma sequência e corta dentro dela (a posição do corte é depois da primeira letra)
const enzimas = [
  { nome: 'EcoRI', sitio: 'GAATTC' },
  { nome: 'BamHI', sitio: 'GGATCC' },
]

function achaCortes(sitio: string) {
  const cortes: number[] = []
  let i = dna.indexOf(sitio)
  while (i >= 0) {
    cortes.push(i + 1)
    i = dna.indexOf(sitio, i + 1)
  }
  return cortes
}

export default function EnzimaDeRestricao() {
  const [e, setE] = useState(0)
  const [cortou, setCortou] = useState(false)
  const sitio = enzimas[e].sitio
  const cortes = achaCortes(sitio)
  const pedacos: string[] = []
  let ini = 0
  for (const c of cortes) {
    pedacos.push(dna.slice(ini, c))
    ini = c
  }
  pedacos.push(dna.slice(ini))
  const marcado = new Set<number>()
  let p = dna.indexOf(sitio)
  while (p >= 0) {
    for (let k = 0; k < sitio.length; k++) marcado.add(p + k)
    p = dna.indexOf(sitio, p + 1)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tesoura molecular</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Enzima">
        {enzimas.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => { setE(k); setCortou(false) }} aria-pressed={e === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${e === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome} ({x.sitio})</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-1 gap-y-2 font-mono text-[15px]" aria-label="Sequência de DNA">
        {(cortou ? pedacos : [dna]).map((tr, k, arr) => {
          const inicio = arr.slice(0, k).reduce((s, x) => s + x.length, 0)
          return (
            <span key={k} className={cortou ? 'rounded-lg bg-fundo px-2 py-1' : ''}>
              {tr.split('').map((b, j) => <span key={j} className={marcado.has(inicio + j) ? 'rounded bg-amarelo/60 font-bold' : ''}>{b}</span>)}
            </span>
          )
        })}
      </div>
      <button type="button" onClick={() => setCortou((c) => !c)} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{cortou ? 'Juntar de novo' : `Cortar com ${enzimas[e].nome}`}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {cortou
          ? `${enzimas[e].nome} cortou em ${cortes.length} ${cortes.length === 1 ? 'lugar' : 'lugares'} e fez ${pedacos.length} ${pedacos.length === 1 ? 'pedaço' : 'pedaços'}, de ${pedacos.map((x) => x.length).join(', ')} letras.`
          : `A enzima procura ${sitio} (em amarelo) e corta ali. Este DNA de ${dna.length} letras tem ${cortes.length} ${cortes.length === 1 ? 'sítio' : 'sítios'} para ${enzimas[e].nome}.`}
      </p>
    </div>
  )
}
