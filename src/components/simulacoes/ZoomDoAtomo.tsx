import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Escada de tamanhos: de um grão de areia ao núcleo do átomo (ordens de grandeza aproximadas)
const degraus = [
  { nome: 'Grão de areia', exp: -3, texto: 'cerca de 1 milímetro (10⁻³ m)' },
  { nome: 'Fio de cabelo (espessura)', exp: -4, texto: 'cerca de 0,1 milímetro (10⁻⁴ m)' },
  { nome: 'Célula do corpo', exp: -5, texto: 'cerca de 10 micrômetros (10⁻⁵ m)' },
  { nome: 'Bactéria', exp: -6, texto: 'cerca de 1 micrômetro (10⁻⁶ m)' },
  { nome: 'Vírus', exp: -7, texto: 'cerca de 100 nanômetros (10⁻⁷ m)' },
  { nome: 'Átomo', exp: -10, texto: 'cerca de 0,1 nanômetro (10⁻¹⁰ m)' },
  { nome: 'Núcleo do átomo', exp: -15, texto: 'cerca de 10⁻¹⁵ m' },
]

export default function ZoomDoAtomo() {
  const [i, setI] = useState(5)
  const d = degraus[i]
  const razao = Math.abs(degraus[0].exp - d.exp)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Do grão de areia ao núcleo</p>
      <div className="mt-3 space-y-1" role="img" aria-label={`Tamanho: ${d.nome}`}>
        {degraus.map((g, k) => (
          <div key={g.nome} className="flex items-center gap-2 text-[13px]">
            <span className={`w-40 shrink-0 ${k === i ? 'font-bold' : 'text-suave'}`}>{g.nome}</span>
            <div className="h-3 flex-1 rounded-full bg-fundo"><div className="h-3 rounded-full" style={{ width: `${Math.max(2, ((g.exp + 15) / 12) * 100)}%`, background: k === i ? 'var(--color-coral)' : 'var(--color-borda)' }} /></div>
          </div>
        ))}
      </div>
      <label className="mt-4 block text-sm font-semibold">Escolha o tamanho: {d.nome}<input type="range" min={0} max={degraus.length - 1} step={1} value={i} onChange={(e) => setI(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{d.nome}</strong>: {d.texto}. {i === 0 ? 'Ponto de partida.' : <>Comparado com o grão de areia, é cerca de <strong>10<sup>{razao}</sup></strong> vezes menor.</>} {i === 6 ? 'O núcleo é uns 100 mil vezes menor que o átomo inteiro: o resto do átomo é quase todo espaço vazio com elétrons.' : ''}      </p>
    </div>
  )
}
