import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Caminhada de 0 até 80 m e volta até 30 m: distância percorrida soma tudo, deslocamento só compara início e fim
const IDA = 80
const FIM = 130
export default function IdaEVolta() {
  const [p, setP] = useState(40)
  const pos = p <= IDA ? p : 2 * IDA - p
  const X = (m: number) => 20 + (m / 100) * 360
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ir até o fim da rua e voltar um pouco</p>
      <svg viewBox="0 0 400 90" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Pessoa na posição ${pos} metros`}>
        <line x1={X(0)} y1={55} x2={X(100)} y2={55} stroke="var(--color-texto)" strokeOpacity="0.6" strokeWidth="2" />
        {[0, 20, 40, 60, 80, 100].map((m) => (
          <g key={m}><line x1={X(m)} y1={50} x2={X(m)} y2={60} stroke="var(--color-texto)" /><text x={X(m)} y={76} textAnchor="middle" fontSize="10" fill="var(--color-suave)">{m} m</text></g>
        ))}
        <line x1={X(0)} y1={40} x2={X(pos)} y2={40} stroke="var(--color-verde)" strokeWidth="3" />
        <circle cx={X(pos)} cy={55} r={8} fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={X(0)} y={32} fontSize="10" fill="var(--color-verde)">deslocamento</text>
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Caminho já andado: {p} m
        <input type="range" min={0} max={FIM} step={5} value={p} onChange={(e) => setP(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <div aria-live="polite" className="mt-3 grid gap-3 sm:grid-cols-2">
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>Distância percorrida:</strong> {p} m<br />(soma de todo o caminho)</p>
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>Deslocamento:</strong> {pos} m<br />(do ponto de partida até onde está agora, em linha reta)</p>
      </div>
      <p className="mt-3 text-sm text-suave">Chegando a 130 m de caminho andado, a pessoa terá percorrido 130 m, mas estará a só 30 m do início.</p>
    </div>
  )
}
