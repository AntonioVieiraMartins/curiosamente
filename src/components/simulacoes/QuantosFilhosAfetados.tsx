import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const comb = (n: number, k: number) => {
  let r = 1
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i
  return Math.round(r)
}

// Casal Aa x Aa: cada filho tem 1/4 de chance de ser aa. Quantos dos n filhos serão aa?
export default function QuantosFilhosAfetados() {
  const [n, setN] = useState(4)
  const probs = Array.from({ length: n + 1 }, (_, k) => comb(n, k) * 0.25 ** k * 0.75 ** (n - k))
  const maior = Math.max(...probs)
  const pct = (x: number) => (x * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Casal Aa x Aa: quantos filhos aa?</p>
      <svg viewBox="0 0 220 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Chance de cada número de filhos aa">
        {probs.map((p, k) => {
          const w = 180 / (n + 1)
          const h = (p / maior) * 50
          return (
            <g key={k}>
              <rect x={20 + k * w + 2} y={72 - h} width={w - 4} height={h} rx="3" fill="var(--color-azul)" fillOpacity="0.75" />
              <text x={20 + k * w + w / 2} y="82" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-texto)">{k}</text>
              <text x={20 + k * w + w / 2} y={68 - h} textAnchor="middle" fontSize="7" fill="var(--color-texto)">{pct(p)}%</text>
            </g>
          )
        })}
        <text x="110" y="95" textAnchor="middle" fontSize="8" fill="var(--color-suave)">Número de filhos aa</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Número de filhos do casal" valor={n} min={1} max={8} passo={1} aoMudar={setN} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {n} {n === 1 ? 'filho' : 'filhos'}, a chance de nenhum ser aa é {pct(probs[0])}%. A chance de pelo menos um ser aa é {pct(1 - probs[0])}%. Não é 25% vezes {n}: as chances não se somam desse jeito.
      </p>
    </div>
  )
}
