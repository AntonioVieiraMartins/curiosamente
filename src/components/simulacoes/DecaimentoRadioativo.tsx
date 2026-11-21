import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Cada meia-vida, metade dos átomos instáveis que restavam se transforma
const isotopos = [
  { nome: 'Carbono-14', meiaVida: 5730, unidade: 'anos' },
  { nome: 'Potássio-40', meiaVida: 1.25, unidade: 'bilhão de anos' },
  { nome: 'Urânio-238', meiaVida: 4.47, unidade: 'bilhões de anos' },
]

export default function DecaimentoRadioativo() {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const iso = isotopos[i]
  const fracao = 0.5 ** n
  const restam = Math.round(fracao * 100)
  const tempo = n * iso.meiaVida
  const fmt = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Relógio de átomos</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`${restam} de cada 100 átomos originais ainda restam`}>
        {Array.from({ length: 100 }, (_, k) => (
          <circle key={k} cx={22 + (k % 10) * 18} cy={14 + Math.floor(k / 10) * 10.5} r="4" fill={k < restam ? 'var(--color-azul)' : 'var(--color-coral)'} fillOpacity={k < restam ? 1 : 0.45} />
        ))}
      </svg>
      <p className="mt-2 text-sm text-suave">Azul: átomos originais que restam. Vermelho: já viraram outro elemento.</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Elemento">
        {isotopos.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3"><Deslizante rotulo="Meias-vidas que passaram" valor={n} min={0} max={8} passo={1} aoMudar={setN} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Meia-vida do {iso.nome}: {fmt(iso.meiaVida)} {iso.unidade}. Depois de {n} {n === 1 ? 'meia-vida' : 'meias-vidas'} ({fmt(tempo)} {iso.unidade}) restam <strong>{fracao >= 0.01 ? fmt(fracao * 100) : fmt(fracao * 100)}%</strong> dos átomos.
      </p>
    </div>
  )
}
