import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Ultrapassagem: a distância a "ganhar" é a soma dos comprimentos; o ritmo de ganho é a diferença de velocidades
export default function Ultrapassagem() {
  const [vc, setVc] = useState(25)
  const [vt, setVt] = useState(15)
  const [lt, setLt] = useState(15)
  const LC = 5 // comprimento do carro
  const relativa = vc - vt
  const tempo = relativa > 0 ? (LC + lt) / relativa : null
  const dist = tempo === null ? null : vc * tempo
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um carro ultrapassa um caminhão</p>
      <svg viewBox="0 0 400 60" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Carro atrás de um caminhão">
        <line x1={0} y1={50} x2={400} y2={50} stroke="var(--color-texto)" strokeOpacity="0.4" />
        <rect x={50} y={32} width={LC * 6} height={14} rx={3} fill="var(--color-azul)" />
        <text x={50 + LC * 3} y={43} fontSize="8" textAnchor="middle" fill="white">carro</text>
        <rect x={180} y={20} width={lt * 6} height={26} rx={3} fill="var(--color-coral)" />
        <text x={180 + lt * 3} y={36} fontSize="9" textAnchor="middle" fill="white">caminhão</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Carro: {vc} m/s<input type="range" min={10} max={40} step={1} value={vc} onChange={(e) => setVc(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Caminhão: {vt} m/s<input type="range" min={10} max={30} step={1} value={vt} onChange={(e) => setVt(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Comprimento do caminhão: {lt} m<input type="range" min={10} max={30} step={5} value={lt} onChange={(e) => setLt(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-verde)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {tempo === null
          ? 'O carro não é mais rápido que o caminhão: nunca vai ultrapassar.'
          : <>O carro precisa "ganhar" {LC} + {lt} = <strong>{LC + lt} m</strong> do caminhão, na velocidade relativa de {vc} − {vt} = <strong>{relativa} m/s</strong>. Tempo: {LC + lt} ÷ {relativa} = <strong>{f(tempo)} s</strong>. Nesse tempo, o carro anda {f(dist ?? 0)} m em relação à estrada.</>}
      </p>
    </div>
  )
}
