import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const escalas = [10_000, 50_000, 100_000, 500_000]
const numero = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

function distanciaReal(cm: number) {
  const metros = cm / 100
  return metros >= 1000 ? `${numero(metros / 1000)} km` : `${numero(metros)} m`
}

// Escala 1 : N = cada centímetro no mapa vale N centímetros no mundo de verdade
export default function EscalaMapa() {
  const [escala, setEscala] = useState(50_000)
  const [cm, setCm] = useState(4)
  const id = useId()
  const real = cm * escala

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Régua no mapa</p>

      <p className="mt-3 text-sm text-suave">Escala do mapa</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Escala">
        {escalas.map((e) => (
          <button key={e} type="button" aria-pressed={escala === e} onClick={() => setEscala(e)}
            className={`h-11 rounded-full border-2 px-3 text-[15px] font-semibold ${escala === e ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}>
            1 : {e.toLocaleString('pt-BR')}
          </button>
        ))}
      </div>

      <label htmlFor={id} className="mt-4 block font-semibold">
        Medida na régua: <span className="text-coral">{numero(cm)} cm</span>
      </label>
      <input id={id} type="range" min={0.5} max={10} step={0.5} value={cm} onChange={(e) => setCm(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      {/* A régua desenhada: cada tracinho grande é 1 cm do mapa */}
      <svg viewBox="0 0 300 40" className="mt-2 w-full" aria-hidden="true">
        <rect x="0" y="8" width="300" height="24" rx="4" fill="var(--color-amarelo)" fillOpacity="0.35" />
        {Array.from({ length: 11 }, (_, i) => (
          <line key={i} x1={10 + i * 28} x2={10 + i * 28} y1="8" y2="22" stroke="var(--color-texto)" strokeWidth="1" />
        ))}
        <line x1="10" x2={10 + cm * 28} y1="28" y2="28" stroke="var(--color-coral)" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {numero(cm)} cm × {escala.toLocaleString('pt-BR')} = {real.toLocaleString('pt-BR')} cm de verdade ={' '}
        <strong className="text-coral">{distanciaReal(real)}</strong>.
      </p>
    </div>
  )
}
