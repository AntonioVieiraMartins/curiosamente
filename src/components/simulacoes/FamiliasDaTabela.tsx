import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Famílias: mesmo número de elétrons de valência, comportamento parecido
const familias = [
  { g: 1, nome: 'Metais alcalinos', ex: 'Li, Na, K', val: 1, ion: 'perdem 1 elétron: M⁺', texto: 'Metais macios e muito reativos. Sódio e potássio reagem com a água de forma violenta, e por isso são guardados em óleo.' },
  { g: 2, nome: 'Alcalinoterrosos', ex: 'Be, Mg, Ca', val: 2, ion: 'perdem 2 elétrons: M²⁺', texto: 'Metais um pouco menos reativos. O cálcio está nos ossos e dentes, e o magnésio queima com luz branca intensa.' },
  { g: 16, nome: 'Calcogênios', ex: 'O, S, Se', val: 6, ion: 'ganham 2 elétrons: X²⁻', texto: 'Não metais (os do topo). O oxigênio respiramos, o enxofre está nos vulcões e no cheiro do ovo podre.' },
  { g: 17, nome: 'Halogênios', ex: 'F, Cl, Br', val: 7, ion: 'ganham 1 elétron: X⁻', texto: 'Não metais muito reativos. O cloro desinfeta a água da piscina, e o flúor protege os dentes na pasta.' },
  { g: 18, nome: 'Gases nobres', ex: 'He, Ne, Ar', val: 8, ion: 'quase não formam íons', texto: 'Camada de valência completa, por isso quase não reagem. O hélio enche balões, e o neônio ilumina letreiros.' },
]

export default function FamiliasDaTabela() {
  const [k, setK] = useState(0)
  const f = familias[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Famílias da tabela</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Família">
        {familias.map((x, i) => (
          <button key={x.g} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>Grupo {x.g}</button>
        ))}
      </div>
      <p className="mt-3 font-serif text-2xl">{f.nome}</p>
      <div className="mt-2 flex gap-1" aria-label={`${f.val} elétrons de valência`}>
        {Array.from({ length: 8 }, (_, i) => <span key={i} className="h-4 w-4 rounded-full border" style={{ background: i < f.val ? 'var(--color-azul)' : 'transparent', borderColor: 'var(--color-azul)' }} />)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Exemplos: {f.ex}. <strong>{f.val} elétron{f.val > 1 ? 's' : ''} de valência</strong>. Tendem a: {f.ion}. {f.texto} (Nos gases nobres, o hélio é exceção: fica completo com 2.)
      </p>
    </div>
  )
}
