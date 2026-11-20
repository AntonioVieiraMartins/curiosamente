import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tamanho aproximado do DNA de cada ser: pares de bases × 0,34 nm
const seres = [
  { nome: 'Bactéria E. coli', pb: 4.6e6, texto: 'Um único cromossomo em anel.' },
  { nome: 'Levedura', pb: 12e6, texto: 'Um fungo de uma célula só, usado no pão.' },
  { nome: 'Ser humano', pb: 3.1e9, texto: 'Um conjunto de cromossomos (metade das nossas células).' },
]

function comp(nm: number) {
  const m = nm * 1e-9
  if (m >= 1) return `${m.toFixed(2).replace('.', ',')} m`
  if (m >= 1e-3) return `${(m * 1e3).toFixed(1).replace('.', ',')} mm`
  return `${(m * 1e6).toFixed(0)} µm`
}

export default function TamanhoDoGenoma() {
  const [k, setK] = useState(2)
  const s = seres[k]
  const nm = s.pb * 0.34
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto DNA tem cada ser?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Ser vivo">
        {seres.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>{s.nome}:</strong> {s.texto}</p>
        <p className="rounded-2xl bg-fundo p-3">Tamanho: cerca de <strong>{(s.pb / 1e6).toLocaleString('pt-BR')} milhões</strong> de pares de bases.</p>
        <p className="rounded-2xl bg-fundo p-3">Cada par ocupa cerca de 0,34 nm. Esticado, o DNA mede <strong>{comp(nm)}</strong>.</p>
        {k === 2 && <p className="rounded-2xl bg-fundo p-3">Como a maior parte das nossas células tem dois conjuntos, o fio inteiro de uma célula chega a cerca de 2 m. Tudo isso dentro de um núcleo de uns 6 µm.</p>}
      </div>
    </div>
  )
}
