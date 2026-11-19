import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const LADRILHOS = [0.25, 0.5, 1]

// Quantos pisos cobrem a sala: área da sala ÷ área de um piso
export default function PisoDaSala() {
  const iW = useId()
  const iH = useId()
  const [W, setW] = useState(4)
  const [H, setH] = useState(3)
  const [t, setT] = useState(0.5)
  const colunas = Math.round(W / t)
  const linhas = Math.round(H / t)
  const total = colunas * linhas
  const comSobra = Math.ceil(total * 1.1)
  const esc = 170 / Math.max(W, H)
  const areaPiso = (t * t).toLocaleString('pt-BR')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos pisos cobrem a sala?</p>
      <svg viewBox="0 0 190 190" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Sala de ${W} por ${H} metros com pisos de ${t} metro`}>
        <rect x={10} y={10} width={W * esc} height={H * esc} fill="var(--color-amarelo)" fillOpacity="0.3" />
        {Array.from({ length: colunas + 1 }, (_, i) => <line key={`c${i}`} x1={10 + i * t * esc} y1={10} x2={10 + i * t * esc} y2={10 + H * esc} stroke="var(--color-texto)" strokeOpacity="0.4" strokeWidth="0.6" />)}
        {Array.from({ length: linhas + 1 }, (_, i) => <line key={`l${i}`} x1={10} y1={10 + i * t * esc} x2={10 + W * esc} y2={10 + i * t * esc} stroke="var(--color-texto)" strokeOpacity="0.4" strokeWidth="0.6" />)}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label htmlFor={iW} className="text-sm font-semibold">Largura da sala: {W} m<input id={iW} type="range" min={2} max={8} value={W} onChange={(e) => setW(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={iH} className="text-sm font-semibold">Comprimento da sala: {H} m<input id={iH} type="range" min={2} max={8} value={H} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Lado do piso">
        {LADRILHOS.map((l) => (
          <button key={l} type="button" aria-pressed={l === t} onClick={() => setT(l)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${l === t ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Piso de {l.toLocaleString('pt-BR')} m</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Área da sala: {W} × {H} = {W * H} m². Área de um piso: {areaPiso} m². Pisos: {W * H} ÷ {areaPiso} = <strong>{total}</strong>. Comprando 10% a mais para as quebras: <strong>{comSobra}</strong>.
      </p>
    </div>
  )
}
