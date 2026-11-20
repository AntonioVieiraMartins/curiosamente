import { useState } from 'react'
import { cartao } from '../ui/estilos'

const INSTRUMENTOS = ['Olho nu', 'Lupa', 'Microscópio de luz', 'Microscópio eletrônico']
// Menor detalhe que cada instrumento enxerga, em ordem de grandeza
const LIMITES = ['cerca de 0,1 mm (100 µm)', 'cerca de 0,01 a 0,02 mm (10 a 20 µm)', 'cerca de 0,2 µm', 'menos de 1 nm em equipamentos modernos']
const ALVOS = [
  { nome: 'Um grão de areia (cerca de 0,5 mm)', certo: [0, 1, 2, 3], melhor: 0, texto: 'O olho nu já vê, e a lupa ajuda a ver os detalhes.' },
  { nome: 'Uma célula de cebola (cerca de 0,2 mm)', certo: [1, 2, 3], melhor: 2, texto: 'Está no limite do olho. Com o microscópio de luz dá para ver o núcleo e a parede.' },
  { nome: 'Uma bactéria (cerca de 2 µm)', certo: [2, 3], melhor: 2, texto: 'Só com microscópio. O de luz mostra a forma, mas pouco detalhe interno.' },
  { nome: 'Um vírus (cerca de 0,1 µm)', certo: [3], melhor: 3, texto: 'É menor que o limite da luz visível. Só o microscópio eletrônico o enxerga.' },
  { nome: 'Uma mitocôndria por dentro (cerca de 0,5 µm, com detalhes de 10 nm)', certo: [3], melhor: 3, texto: 'Os detalhes internos pedem o microscópio eletrônico.' },
]

export default function QualInstrumento() {
  const [a, setA] = useState(2)
  const [i, setI] = useState<number | null>(null)
  const alvo = ALVOS[a]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual instrumento usar?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="O que você quer ver">
        {ALVOS.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === a} onClick={() => { setA(k); setI(null) }}
            className={`min-h-11 rounded-2xl border-2 px-3 text-left text-sm font-semibold ${k === a ? 'border-azul bg-azul/10' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold">Qual instrumento resolve?</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Instrumento">
        {INSTRUMENTOS.map((n, k) => (
          <button key={n} type="button" onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${i === k ? (alvo.certo.includes(k) ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>{n}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {i === null ? 'Escolha um instrumento.' : <>{alvo.certo.includes(i) ? `${INSTRUMENTOS[i]} serve: ele enxerga ${LIMITES[i]}. ` : `${INSTRUMENTOS[i]} não serve: ele só enxerga ${LIMITES[i]}. `}{alvo.texto} Melhor escolha: <strong>{INSTRUMENTOS[alvo.melhor]}</strong>.</>}
      </p>
    </div>
  )
}
