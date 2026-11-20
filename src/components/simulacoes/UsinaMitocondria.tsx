import { useState } from 'react'
import { cartao } from '../ui/estilos'

const partes = [
  { nome: 'Membrana externa', texto: 'A casca lisa da mitocôndria. Deixa passar moléculas pequenas.' },
  { nome: 'Espaço entre as membranas', texto: 'Um espaço estreito onde os prótons (H⁺) se acumulam, como água atrás de uma represa.' },
  { nome: 'Membrana interna e cristas', texto: 'Dobrada em cristas para ter muita área. Nela fica a cadeia respiratória e a ATP-sintase, a "turbina" que faz o ATP.' },
  { nome: 'Matriz', texto: 'O líquido de dentro. Aqui acontece o ciclo de Krebs. Também tem DNA próprio e ribossomos.' },
]

// Quatro lugares da mitocôndria, cada um com sua tarefa
export default function UsinaMitocondria() {
  const [k, setK] = useState(2)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mitocôndria por dentro</p>
      <svg viewBox="0 0 240 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Desenho de uma mitocôndria com membrana externa, interna, cristas e matriz">
        <ellipse cx={120} cy={60} rx={105} ry={50} fill="none" stroke="var(--color-coral)" strokeWidth={k === 0 ? 5 : 2.5} />
        <ellipse cx={120} cy={60} rx={96} ry={42} fill="var(--color-amarelo)" fillOpacity={k === 3 ? 0.35 : 0.1} stroke="var(--color-azul)" strokeWidth={k === 2 ? 4 : 1.5} />
        {[70, 95, 120, 145, 170].map((x, i) => (
          <path key={x} d={i % 2 ? `M${x} 102 L${x} 66` : `M${x} 18 L${x} 54`} stroke="var(--color-azul)" strokeWidth={k === 2 ? 4 : 1.5} fill="none" strokeLinecap="round" />
        ))}
        <ellipse cx={120} cy={60} rx={101} ry={46} fill="none" stroke={k === 1 ? 'var(--color-verde)' : 'transparent'} strokeWidth="5" strokeOpacity="0.6" />
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Parte da mitocôndria">
        {partes.map((p, i) => (
          <button key={p.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{p.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{partes[k].nome}.</strong> {partes[k].texto}</p>
    </div>
  )
}
