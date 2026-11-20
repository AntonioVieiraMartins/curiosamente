import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Velocidade relativa: mesmo sentido subtrai, sentidos opostos soma
export default function VelocidadeRelativa() {
  const [mesmo, setMesmo] = useState(true)
  const [a, setA] = useState(80)
  const [b, setB] = useState(60)
  const rel = mesmo ? Math.abs(a - b) : a + b
  const folga = 200 // metros entre os dois carros
  const segundos = rel === 0 ? null : folga / (rel / 3.6)
  const botao = (ativo: boolean) => `min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${ativo ? 'border-texto bg-texto text-white' : 'border-borda'}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Dois carros na estrada</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Sentido dos carros">
        <button type="button" aria-pressed={mesmo} onClick={() => setMesmo(true)} className={botao(mesmo)}>Mesmo sentido</button>
        <button type="button" aria-pressed={!mesmo} onClick={() => setMesmo(false)} className={botao(!mesmo)}>Sentidos opostos</button>
      </div>
      <svg viewBox="0 0 400 90" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Dois carros na estrada">
        <line x1={0} y1={70} x2={400} y2={70} stroke="var(--color-texto)" strokeOpacity="0.4" />
        <rect x={60} y={44} width={50} height={22} rx={6} fill="var(--color-azul)" />
        <text x={85} y={60} textAnchor="middle" fontSize="10" fill="white">A →</text>
        <rect x={mesmo ? 250 : 290} y={44} width={50} height={22} rx={6} fill="var(--color-coral)" />
        <text x={mesmo ? 275 : 315} y={60} textAnchor="middle" fontSize="10" fill="white">B {mesmo ? '→' : '←'}</text>
        <text x={200} y={22} textAnchor="middle" fontSize="11" fill="var(--color-suave)">distância entre eles: {folga} m</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Carro A: {a} km/h<input type="range" min={20} max={120} step={10} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Carro B: {b} km/h<input type="range" min={20} max={120} step={10} value={b} onChange={(e) => setB(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>Velocidade de um em relação ao outro: {rel} km/h.</strong>{' '}
        {mesmo ? `Como vão para o mesmo lado, subtraímos: ${Math.max(a, b)} − ${Math.min(a, b)}.` : `Como vão em sentidos opostos, somamos: ${a} + ${b}.`}
        {segundos === null ? ' Com a mesma velocidade, a distância entre eles nunca muda.' : ` Para fechar os ${folga} m entre eles, levam cerca de ${segundos.toFixed(1).replace('.', ',')} s.`}
      </p>
    </div>
  )
}
