import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Dois lugares distantes: o mesmo fóssil-guia marca camadas da mesma idade (esquema simplificado)
const fosseis = ['Mamute', 'Dinossauro', 'Amonita', 'Trilobita']
const cores = ['var(--color-amarelo)', 'var(--color-coral)', 'var(--color-azul)', 'var(--color-verde)']
const colA = [0, 1, 2, 3] // de cima (mais nova) para baixo (mais velha)
const colB = [1, 2, 3] // a camada de cima foi levada pela erosão

export default function CamadasDeRocha() {
  const [guia, setGuia] = useState<number | null>(2)
  const col = (itens: number[], x: number) => itens.map((f, k) => (
    <g key={f}>
      <rect x={x} y={14 + k * 24 + (itens.length < 4 ? 24 : 0)} width="70" height="22" fill={cores[f]} fillOpacity={guia === null || guia === f ? 0.85 : 0.2} stroke="var(--color-texto)" strokeWidth={guia === f ? 2 : 0.5} />
      <text x={x + 35} y={29 + k * 24 + (itens.length < 4 ? 24 : 0)} textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--color-texto)">{fosseis[f]}</text>
    </g>
  ))
  const yDe = (itens: number[], f: number) => 25 + itens.indexOf(f) * 24 + (itens.length < 4 ? 24 : 0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Camadas e fósseis-guia (esquema)</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label="Duas colunas de rochas com fósseis">
        <text x="45" y="10" textAnchor="middle" fontSize="7" fill="var(--color-suave)">Lugar A</text>
        <text x="175" y="10" textAnchor="middle" fontSize="7" fill="var(--color-suave)">Lugar B (longe de A)</text>
        {col(colA, 10)}
        {col(colB, 140)}
        {guia !== null && colA.includes(guia) && colB.includes(guia) && <line x1="80" y1={yDe(colA, guia)} x2="140" y2={yDe(colB, guia)} stroke="var(--color-texto)" strokeDasharray="3 3" strokeWidth="1.5" />}
        <text x="110" y="116" textAnchor="middle" fontSize="7" fill="var(--color-suave)">cima = mais nova · baixo = mais velha</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Fóssil-guia">
        {fosseis.map((f, k) => (
          <button key={f} type="button" onClick={() => setGuia(guia === k ? null : k)} aria-pressed={guia === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${guia === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{f}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {guia === null ? 'Escolha um fóssil para procurar a camada dele nos dois lugares.' : colB.includes(guia)
          ? `Os fósseis de ${fosseis[guia].toLowerCase()} aparecem nos dois lugares: as duas camadas têm a mesma idade, mesmo a quilômetros de distância.`
          : `No lugar B não há camada com ${fosseis[guia].toLowerCase()}: a erosão levou embora as camadas de cima. Nem toda história fica registrada.`}
      </p>
    </div>
  )
}
