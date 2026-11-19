import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma fatia do círculo: o ângulo central dá a fração do contorno (arco) e da área (setor).
export default function ArcoESetor() {
  const [ang, setAng] = useState(90)
  const [r, setR] = useState(10)
  const id1 = useId()
  const id2 = useId()
  const frac = ang / 360
  const arco = frac * 2 * Math.PI * r
  const setor = frac * Math.PI * r * r
  const R = 80
  const a = ((ang - 90) * Math.PI) / 180
  const caminho = `M 110 100 L 110 ${100 - R} A ${R} ${R} 0 ${ang > 180 ? 1 : 0} 1 ${110 + R * Math.cos(a)} ${100 + R * Math.sin(a)} Z`
  const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Arco e setor circular</p>
      <label htmlFor={id1} className="mt-3 block font-semibold">Ângulo central: <span className="text-coral">{ang}°</span></label>
      <input id={id1} type="range" min={10} max={360} step={10} value={ang} onChange={(e) => setAng(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={id2} className="block font-semibold">Raio: <span className="text-azul">{r} cm</span></label>
      <input id={id2} type="range" min={1} max={20} step={1} value={r} onChange={(e) => setR(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <svg viewBox="0 0 220 200" className="mt-2 w-full max-w-xs" role="img" aria-label={`Fatia de círculo com ângulo de ${ang} graus`}>
        <circle cx={110} cy={100} r={R} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth="2" />
        <path d={ang >= 360 ? `M 110 20 A 80 80 0 1 1 109.9 20 Z` : caminho} fill="var(--color-coral)" fillOpacity="0.55" stroke="var(--color-coral)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Fração do círculo: {ang} ÷ 360 = <strong>{frac.toLocaleString('pt-BR', { maximumFractionDigits: 3 })}</strong>.
        Comprimento do arco ≈ <strong>{fmt(arco)} cm</strong>. Área do setor ≈ <strong>{fmt(setor)} cm²</strong>.
      </p>
    </div>
  )
}
