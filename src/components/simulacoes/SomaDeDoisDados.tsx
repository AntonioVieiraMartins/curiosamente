import { useState } from 'react'
import { cartao } from '../ui/estilos'

const SOMAS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const FORMAS = (s: number) => 6 - Math.abs(s - 7) // de quantas maneiras sai cada soma, em 36 combinações

function rolar(qtd: number) {
  const c: number[] = Array.from({ length: 13 }, () => 0)
  for (let i = 0; i < qtd; i++) c[Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)]++
  return c
}

export default function SomaDeDoisDados() {
  const [cont, setCont] = useState<number[]>(() => Array.from({ length: 13 }, () => 0))
  const total = cont.reduce((a, b) => a + b, 0)
  const jogar = (q: number) => { const n = rolar(q); setCont((c) => c.map((v, i) => v + n[i])) }
  const maior = Math.max(1, ...SOMAS.map((s) => cont[s] / Math.max(1, total)), 6 / 36)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A soma de dois dados</p>
      <svg viewBox="0 0 220 110" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Barras com a frequência de cada soma de dois dados">
        {SOMAS.map((s, i) => {
          const h = (cont[s] / Math.max(1, total) / maior) * 80
          const ht = (FORMAS(s) / 36 / maior) * 80
          return (
            <g key={s}>
              <rect x={10 + i * 19} y={90 - h} width={14} height={h} fill="var(--color-azul)" fillOpacity="0.6" />
              <line x1={8 + i * 19} y1={90 - ht} x2={26 + i * 19} y2={90 - ht} stroke="var(--color-coral)" strokeWidth="2" />
              <text x={17 + i * 19} y={103} fontSize="8" textAnchor="middle" fill="var(--color-texto)">{s}</text>
            </g>
          )
        })}
      </svg>
      <p className="mt-1 text-xs text-suave">Barras azuis: o que saiu. Traços vermelhos: o que a conta prevê (de 1/36 para 2 e 12 até 6/36 para 7).</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {[1, 10, 100, 1000].map((q) => (
          <button key={q} type="button" onClick={() => jogar(q)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">+ {q.toLocaleString('pt-BR')}</button>
        ))}
        <button type="button" onClick={() => setCont(Array.from({ length: 13 }, () => 0))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0 ? 'Lance dois dados e veja qual soma aparece mais.' : (
          <>Lançamentos: {total.toLocaleString('pt-BR')}. A soma 7 saiu <strong>{((cont[7] / total) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</strong> das vezes (a conta prevê 16,7%). A soma 2 saiu {((cont[2] / total) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}% (prevê 2,8%).</>
        )}
      </p>
    </div>
  )
}
