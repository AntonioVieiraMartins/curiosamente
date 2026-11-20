import { useState } from 'react'
import { cartao } from '../ui/estilos'

const pares = [
  { nome: 'Na + Cl', cat: 'Na⁺', an: 'Cl⁻', f: 'NaCl', texto: 'O sódio tem 1 elétron a mais que o octeto e o cloro tem 1 a menos. 1 elétron passa de um para o outro: 1 Na⁺ para 1 Cl⁻.' },
  { nome: 'Mg + Cl', cat: 'Mg²⁺', an: '2 Cl⁻', f: 'MgCl₂', texto: 'O magnésio doa 2 elétrons, e cada cloro aceita 1. São precisos 2 cloros para cada magnésio.' },
  { nome: 'Ca + O', cat: 'Ca²⁺', an: 'O²⁻', f: 'CaO', texto: 'O cálcio doa 2 elétrons, e o oxigênio aceita 2. A conta fecha 1 para 1. É a cal, usada em construção.' },
  { nome: 'Al + O', cat: '2 Al³⁺', an: '3 O²⁻', f: 'Al₂O₃', texto: 'O alumínio doa 3, e o oxigênio aceita 2. Para igualar, 2 alumínios (6 cargas +) e 3 oxigênios (6 cargas −).' },
  { nome: 'K + S', cat: '2 K⁺', an: 'S²⁻', f: 'K₂S', texto: 'O potássio doa 1, e o enxofre aceita 2. São precisos 2 potássios para 1 enxofre.' },
]

// Metal doa elétrons, ametal recebe: as cargas têm que somar zero
export default function DoacaoDeEletrons() {
  const [k, setK] = useState(0)
  const p = pares[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem doa, quem recebe</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Par de elementos">
        {pares.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
        <p className="rounded-2xl bg-azul/15 p-3 text-[18px] font-bold">{p.cat}</p>
        <span aria-hidden="true" className="text-[18px]">+</span>
        <p className="rounded-2xl bg-coral/15 p-3 text-[18px] font-bold">{p.an}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>Fórmula: {p.f}.</strong> {p.texto} As cargas positivas e negativas se igualam, e o conjunto fica neutro.</p>
    </div>
  )
}
