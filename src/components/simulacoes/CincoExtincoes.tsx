import { useState } from 'react'
import { cartao } from '../ui/estilos'

// As "cinco grandes" extinções. Porcentagens são estimativas aproximadas de espécies perdidas.
const lista = [
  { nome: 'Ordoviciano-Siluriano', ma: 445, perda: 85, texto: 'Esfriamento e queda do nível do mar. Vida quase só marinha.' },
  { nome: 'Devoniano tardio', ma: 372, perda: 75, texto: 'Perda de oxigênio nos mares. Atingiu muito os recifes.' },
  { nome: 'Permiano-Triássico', ma: 252, perda: 96, texto: 'A "Grande Morte": vulcanismo gigante e aquecimento. A pior de todas.' },
  { nome: 'Triássico-Jurássico', ma: 201, perda: 80, texto: 'Vulcanismo ligado à abertura do Atlântico. Abriu espaço para os dinossauros.' },
  { nome: 'Cretáceo-Paleógeno', ma: 66, perda: 76, texto: 'Asteroide de Chicxulub e vulcanismo. Fim dos dinossauros não voadores.' },
]

export default function CincoExtincoes() {
  const [i, setI] = useState(2)
  const e = lista[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As cinco grandes extinções</p>
      <div className="mt-3 space-y-2" role="group" aria-label="Extinções em massa">
        {lista.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`block w-full min-h-11 rounded-xl border p-2 text-left text-[14px] ${i === k ? 'border-texto' : 'border-borda'} bg-superficie`}>
            <span className="flex justify-between gap-2 font-semibold"><span>{x.nome}</span><span className="tabular-nums">{x.ma} milhões de anos</span></span>
            <span className="mt-1 block h-3 overflow-hidden rounded-full bg-fundo"><span className="block h-full bg-coral" style={{ width: `${x.perda}%` }} /></span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{e.nome}</strong>: cerca de {e.perda}% das espécies sumiram, há cerca de {e.ma} milhões de anos. {e.texto} Depois de cada uma, a vida levou milhões de anos para se diversificar de novo.
      </p>
    </div>
  )
}
