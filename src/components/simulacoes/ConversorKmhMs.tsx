import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Referências de velocidade para ter noção do tamanho dos números (valores aproximados)
const REFERENCIAS = [
  { nome: 'Pessoa caminhando', kmh: 5 },
  { nome: 'Bicicleta tranquila', kmh: 18 },
  { nome: 'Usain Bolt em média nos 100 m (recorde de 9,58 s)', kmh: 37.6 },
  { nome: 'Carro na cidade', kmh: 60 },
  { nome: 'Carro na estrada', kmh: 110 },
  { nome: 'Som no ar (a 20 °C)', kmh: 1235 },
]

export default function ConversorKmhMs() {
  const [kmh, setKmh] = useState(72)
  const ms = kmh / 3.6
  const perto = REFERENCIAS.reduce((a, b) => (Math.abs(b.kmh - kmh) < Math.abs(a.kmh - kmh) ? b : a))
  const f = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 })

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">De km/h para m/s</p>
      <label className="mt-3 block text-sm font-semibold">
        Velocidade: {kmh} km/h
        <input type="range" min={0} max={360} step={1} value={kmh} onChange={(e) => setKmh(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <div aria-live="polite" className="mt-3 grid gap-3 sm:grid-cols-2">
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>{kmh} km/h ÷ 3,6</strong><br />= {f(ms)} m/s</p>
        <p className="rounded-2xl bg-fundo p-4 text-[15px]"><strong>{f(ms)} m/s × 3,6</strong><br />= {kmh} km/h</p>
      </div>
      <p className="mt-3 text-sm text-suave">Em {f(ms)} metros por segundo, em 1 segundo o corpo anda {f(ms)} m, e em 1 hora, {kmh} km.</p>
      <p className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">Mais perto disto: <strong>{perto.nome}</strong>, cerca de {f(perto.kmh)} km/h.</p>
    </div>
  )
}
