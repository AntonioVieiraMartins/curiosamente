import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Valores aproximados: a pressão cai com a altitude, e a água ferve a uma temperatura menor
const LUGARES = [
  { nome: 'Nível do mar', alt: '0 m', t: 100, nota: 'A pressão do ar é a "normal": 100 °C.' },
  { nome: 'Brasília', alt: 'cerca de 1.170 m', t: 96, nota: 'Ar mais ralo: a água ferve um pouco antes, perto de 96 °C.' },
  { nome: 'Quito', alt: 'cerca de 2.850 m', t: 91, nota: 'Ferve perto de 91 °C. O macarrão demora mais.' },
  { nome: 'La Paz', alt: 'cerca de 3.640 m', t: 88, nota: 'Ferve perto de 88 °C. Cozinhar feijão sem pressão leva muito tempo.' },
  { nome: 'Monte Everest', alt: 'cerca de 8.850 m', t: 71, nota: 'Ferve perto de 71 °C, quente mas não o bastante para cozinhar bem.' },
  { nome: 'Panela de pressão (nível do mar)', alt: 'vapor preso', t: 120, nota: 'A válvula segura o vapor, a pressão sobe e a água só ferve perto de 120 °C: a comida cozinha mais rápido.' },
]

export default function PanelaDePressao() {
  const [i, setI] = useState(0)
  const l = LUGARES[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Onde a água ferve a quanto?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Lugar">
        {LUGARES.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-4 flex items-end gap-4">
        <div className="flex h-32 w-8 flex-col justify-end overflow-hidden rounded-full border-2 border-texto" role="img" aria-label={`Termômetro em ${l.t} graus`}>
          <div className="w-full bg-coral" style={{ height: `${(l.t / 125) * 100}%` }} />
        </div>
        <p className="font-serif text-4xl font-medium">{l.t} °C</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{l.nome} ({l.alt}).</strong> {l.nota}</p>
    </div>
  )
}
