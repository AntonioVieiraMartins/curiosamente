import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Teste da régua: alguém solta, você agarra. A distância caída revela o tempo de reação (d = g·t²/2)
export default function TesteDaReguinha() {
  const [cm, setCm] = useState(18)
  const g = 9.8
  const t = Math.sqrt((2 * (cm / 100)) / g)
  const nota = t < 0.15 ? 'Muito rápido!' : t < 0.22 ? 'Bem na média: pessoas descansadas costumam ficar perto de 0,2 s.' : 'Um pouco lento, mas varia com sono e distração.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">t = √(2·d ÷ g)</p>
      <svg viewBox="0 0 240 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Régua agarrada na marca de ${cm} centímetros`}>
        <rect x={20} y={36} width={200} height={16} rx={2} fill="var(--color-amarelo)" fillOpacity="0.5" stroke="var(--color-texto)" strokeOpacity="0.5" />
        {Array.from({ length: 11 }, (_, i) => (
          <g key={i}>
            <line x1={20 + i * 20} y1={36} x2={20 + i * 20} y2={i % 5 === 0 ? 46 : 42} stroke="var(--color-texto)" strokeOpacity="0.6" />
            {i % 5 === 0 && <text x={20 + i * 20} y={66} fontSize="8" textAnchor="middle" fill="var(--color-suave)">{i * 5} cm</text>}
          </g>
        ))}
        <line x1={20 + (cm / 50) * 200} y1={28} x2={20 + (cm / 50) * 200} y2={58} stroke="var(--color-coral)" strokeWidth="2.5" />
        <text x={20 + (cm / 50) * 200} y={22} fontSize="8" textAnchor="middle" fill="var(--color-coral)">seus dedos</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">A régua caiu: {cm} cm<input type="range" min={5} max={40} step={1} value={cm} onChange={(e) => setCm(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        t = √(2 × {(cm / 100).toFixed(2).replace('.', ',')} ÷ 9,8) = <strong>{t.toFixed(2).replace('.', ',')} s</strong>. {nota} Dá para testar de verdade com uma régua de 30 cm e um amigo.
      </p>
    </div>
  )
}
