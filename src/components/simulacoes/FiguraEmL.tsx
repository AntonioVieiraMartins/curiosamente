import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const U = 13

// Figura composta: dois jeitos de achar a mesma área
export default function FiguraEmL() {
  const iW = useId()
  const iH = useId()
  const [W, setW] = useState(10)
  const [H, setH] = useState(8)
  const [w, setw] = useState(4)
  const [h, setHh] = useState(3)
  const [modo, setModo] = useState<'soma' | 'subtracao'>('soma')
  const cw = Math.min(w, W - 2)
  const ch = Math.min(h, H - 2)
  const x0 = 10
  const y0 = 8
  const L = `${x0},${y0} ${x0 + (W - cw) * U},${y0} ${x0 + (W - cw) * U},${y0 + ch * U} ${x0 + W * U},${y0 + ch * U} ${x0 + W * U},${y0 + H * U} ${x0},${y0 + H * U}`
  const area = W * H - cw * ch

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Figura em L: dois caminhos, uma resposta</p>
      <svg viewBox="0 0 160 125" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Figura em L com área ${area}`}>
        <polygon points={L} fill="var(--color-azul)" fillOpacity="0.35" stroke="var(--color-azul)" strokeWidth="2" />
        {modo === 'soma'
          ? <line x1={x0 + (W - cw) * U} y1={y0 + ch * U} x2={x0 + (W - cw) * U} y2={y0 + H * U} stroke="var(--color-coral)" strokeWidth="2" strokeDasharray="4 3" />
          : <rect x={x0 + (W - cw) * U} y={y0} width={cw * U} height={ch * U} fill="none" stroke="var(--color-coral)" strokeWidth="2" strokeDasharray="4 3" />}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-4">
        <label htmlFor={iW} className="text-sm font-semibold">Largura: {W}<input id={iW} type="range" min={6} max={11} value={W} onChange={(e) => setW(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label htmlFor={iH} className="text-sm font-semibold">Altura: {H}<input id={iH} type="range" min={6} max={9} value={H} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="text-sm font-semibold">Corte, largura: {cw}<input type="range" min={1} max={W - 2} value={cw} onChange={(e) => setw(Number(e.target.value))} aria-label="Largura do corte" className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="text-sm font-semibold">Corte, altura: {ch}<input type="range" min={1} max={H - 2} value={ch} onChange={(e) => setHh(Number(e.target.value))} aria-label="Altura do corte" className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-pressed={modo === 'soma'} onClick={() => setModo('soma')} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${modo === 'soma' ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Dividir em dois retângulos</button>
        <button type="button" aria-pressed={modo === 'subtracao'} onClick={() => setModo('subtracao')} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${modo === 'subtracao' ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Retângulo grande menos o corte</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {modo === 'soma'
          ? `Esquerda: ${W - cw} × ${H} = ${(W - cw) * H}. Direita embaixo: ${cw} × ${H - ch} = ${cw * (H - ch)}. Soma = ${area}.`
          : `Retângulo todo: ${W} × ${H} = ${W * H}. Corte: ${cw} × ${ch} = ${cw * ch}. Diferença = ${area}.`}{' '}
        <strong>Área = {area}</strong>, pelos dois caminhos.
      </p>
    </div>
  )
}
