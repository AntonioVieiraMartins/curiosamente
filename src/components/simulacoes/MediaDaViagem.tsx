import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Ida e volta no mesmo caminho: a média das velocidades NÃO é a velocidade média, porque se passa mais tempo na parte lenta
const D = 120 // km em cada trecho
export default function MediaDaViagem() {
  const [ida, setIda] = useState(60)
  const [volta, setVolta] = useState(120)
  const t1 = D / ida
  const t2 = D / volta
  const media = (2 * D) / (t1 + t2)
  const ingenua = (ida + volta) / 2
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ida e volta de {D} km em cada sentido</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade na ida: {ida} km/h<input type="range" min={30} max={150} step={10} value={ida} onChange={(e) => setIda(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Velocidade na volta: {volta} km/h<input type="range" min={30} max={150} step={10} value={volta} onChange={(e) => setVolta(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <div className="mt-3 flex h-8 w-full overflow-hidden rounded-full text-xs font-semibold text-white" role="img" aria-label={`Tempo na ida ${f(t1)} horas, na volta ${f(t2)} horas`}>
        <div style={{ width: `${(t1 / (t1 + t2)) * 100}%` }} className="grid place-items-center bg-azul">ida {f(t1)} h</div>
        <div style={{ width: `${(t2 / (t1 + t2)) * 100}%` }} className="grid place-items-center bg-coral">volta {f(t2)} h</div>
      </div>
      <div aria-live="polite" className="mt-3 grid gap-3 sm:grid-cols-2">
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>Média das velocidades:</strong> {f(ingenua)} km/h<br /><span className="text-suave">(a conta que parece certa)</span></p>
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>Velocidade média real:</strong> {f(media)} km/h<br /><span className="text-suave">({2 * D} km ÷ {f(t1 + t2)} h)</span></p>
      </div>
      <p className="mt-3 text-sm text-suave">Repare: a velocidade média real é sempre menor ou igual à média das velocidades, porque se passa mais tempo na parte lenta.</p>
    </div>
  )
}
