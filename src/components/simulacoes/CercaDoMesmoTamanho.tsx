import { useState } from 'react'
import { cartao } from '../ui/estilos'

const P = 24 // metros de cerca (perímetro fixo)
const U = 12

// Com a mesma cerca, o retângulo muda de forma e a área muda junto
export default function CercaDoMesmoTamanho() {
  const [w, setW] = useState(2)
  const h = P / 2 - w
  const area = w * h
  const todas = Array.from({ length: 11 }, (_, i) => i + 1)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mesma cerca, terrenos diferentes</p>
      <svg viewBox="0 0 200 150" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Terreno de ${w} por ${h} metros`}>
        <rect x={100 - (w * U) / 2} y={75 - (h * U) / 2} width={w * U} height={h * U} fill={w === h ? 'var(--color-verde)' : 'var(--color-azul)'} fillOpacity="0.35" stroke={w === h ? 'var(--color-verde)' : 'var(--color-azul)'} strokeWidth="3" />
        <text x={100} y={75} fontSize="10" textAnchor="middle" fill="var(--color-texto)">{area} m²</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Largura: {w} m · Altura: {h} m
        <input type="range" min={1} max={11} value={w} onChange={(e) => setW(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" aria-label="Largura do terreno" />
      </label>
      <div className="mt-3 flex items-end gap-1" aria-hidden="true">
        {todas.map((x) => (
          <div key={x} className="flex flex-1 flex-col items-center gap-1">
            <div className="w-full rounded-t" style={{ height: x * (12 - x) * 1.6, background: x === w ? 'var(--color-coral)' : 'var(--color-borda)' }} />
            <span className="text-[10px] text-suave">{x}</span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Perímetro: 2 × ({w} + {h}) = <strong>{P} m</strong> (sempre o mesmo). Área: {w} × {h} = <strong>{area} m²</strong>.{' '}
        {w === h ? 'É um quadrado: a maior área possível com essa cerca.' : 'Chegue mais perto do quadrado e a área cresce.'}
      </p>
    </div>
  )
}
