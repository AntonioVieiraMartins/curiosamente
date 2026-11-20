import { useState } from 'react'
import { cartao } from '../ui/estilos'

const AUMENTOS = [10, 40, 100, 400, 1000]
// Tamanhos aproximados em µm
const SERES = [
  { nome: 'Paramécio (protozoário)', um: 150 },
  { nome: 'Alga verde (Spirogyra, largura)', um: 30 },
  { nome: 'Hemácia humana', um: 7.5 },
  { nome: 'Bactéria (E. coli)', um: 2 },
  { nome: 'Vírus da gripe', um: 0.1 },
]
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

// Regra prática: para enxergar bem, a imagem precisa ter ao menos cerca de 0,2 mm; a luz limita a ver o que é menor que ~0,2 µm
export default function VisivelNoMicroscopio() {
  const [a, setA] = useState(100)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O que dá para ver com cada aumento?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Aumento total">
        {AUMENTOS.map((x) => (
          <button key={x} type="button" aria-pressed={x === a} onClick={() => setA(x)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${x === a ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x}×</button>
        ))}
      </div>
      <ul className="mt-3 flex flex-col gap-2" aria-live="polite">
        {SERES.map((s) => {
          const imagem = (s.um * a) / 1000 // mm
          const limite = s.um < 0.2
          const ok = !limite && imagem >= 0.2
          return (
            <li key={s.nome} className={`rounded-2xl border-2 p-3 text-[15px] ${ok ? 'border-verde bg-verde/10' : 'border-borda'}`}>
              <p className="font-semibold">{s.nome}: {br(s.um)} µm</p>
              <p>Imagem com {a}×: {br(imagem)} mm. {limite ? 'Pequeno demais para o microscópio de luz: precisa de microscópio eletrônico.' : ok ? 'Dá para ver bem.' : 'Ainda pequeno demais: aumente mais.'}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
