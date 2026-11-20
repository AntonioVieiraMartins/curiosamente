import { useState } from 'react'
import { cartao } from '../ui/estilos'

// A sai da posição 0 indo para a frente; B sai da posição D vindo de volta. Eles se encontram quando as posições são iguais.
const D = 300 // metros
export default function EncontroDeCarros() {
  const [va, setVa] = useState(20)
  const [vb, setVb] = useState(10) // velocidade de B no sentido contrário
  const [t, setT] = useState(0)
  const T = 30
  const sa = va * t
  const sb = D - vb * t
  const tEncontro = D / (va + vb)
  const sEncontro = va * tEncontro
  const X = (m: number) => 20 + (Math.max(0, Math.min(D, m)) / D) * 360
  const jaEncontrou = t >= tEncontro
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O encontro de dois carros</p>
      <svg viewBox="0 0 400 70" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`A em ${f(sa)} m e B em ${f(sb)} m`}>
        <line x1={20} y1={50} x2={380} y2={50} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <rect x={X(sa) - 14} y={30} width={28} height={16} rx={4} fill="var(--color-azul)" />
        <text x={X(sa)} y={42} fontSize="10" textAnchor="middle" fill="white">A</text>
        <rect x={X(sb) - 14} y={12} width={28} height={16} rx={4} fill="var(--color-coral)" />
        <text x={X(sb)} y={24} fontSize="10" textAnchor="middle" fill="white">B</text>
        <text x={20} y={66} fontSize="9" fill="var(--color-suave)">0 m</text>
        <text x={380} y={66} fontSize="9" textAnchor="end" fill="var(--color-suave)">{D} m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Velocidade de A: {va} m/s<input type="range" min={5} max={30} step={5} value={va} onChange={(e) => setVa(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Velocidade de B: {vb} m/s<input type="range" min={5} max={30} step={5} value={vb} onChange={(e) => setVb(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Tempo: {t} s<input type="range" min={0} max={T} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <p>sA = {va} × t &nbsp;·&nbsp; sB = {D} − {vb} × t</p>
        <p className="mt-1">Em t = {t} s: A está em {f(Math.min(sa, D))} m e B em {f(Math.max(sb, 0))} m.</p>
        <p className="mt-1 font-semibold">Eles se encontram quando sA = sB: t = {D} ÷ ({va} + {vb}) = {f(tEncontro)} s, na posição {f(sEncontro)} m. {jaEncontrou ? '(Já se encontraram.)' : ''}</p>
      </div>
    </div>
  )
}
