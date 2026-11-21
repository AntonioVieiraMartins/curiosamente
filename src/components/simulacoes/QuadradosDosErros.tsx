import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { melhorReta, somaDosQuadrados, type Ponto } from '../../lib/ajuste'

// Cada erro vira um quadrado; a melhor reta é a que deixa a área total menor
const pts: Ponto[] = [{ x: 1, y: 1.5 }, { x: 2, y: 2 }, { x: 3, y: 4 }, { x: 4, y: 3.5 }, { x: 5, y: 5.5 }]
const E = 22
const X = (x: number) => 20 + x * E
const Y = (y: number) => 135 - y * E

export default function QuadradosDosErros() {
  const melhor = melhorReta(pts)
  const retas = [
    { nome: 'Horizontal (y = 3)', a: 0, b: 3 },
    { nome: 'Chute (y = x)', a: 1, b: 0 },
    { nome: 'Melhor reta', a: melhor.a, b: melhor.b },
  ]
  const [i, setI] = useState(0)
  const { a, b } = retas[i]
  const total = somaDosQuadrados(pts, a, b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quadrados dos erros</p>
      <svg viewBox="0 0 160 150" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Soma das áreas dos quadrados: ${total.toFixed(2)}`}>
        <line x1="20" y1="135" x2="155" y2="135" stroke="var(--color-borda)" />
        <line x1="20" y1="10" x2="20" y2="135" stroke="var(--color-borda)" />
        {pts.map((p) => {
          const r = p.y - (a * p.x + b)
          const lado = Math.abs(r) * E
          return <rect key={p.x} x={X(p.x)} y={Math.min(Y(p.y), Y(a * p.x + b))} width={lado} height={lado} fill="var(--color-coral)" fillOpacity="0.35" stroke="var(--color-coral)" />
        })}
        <line x1={X(0.3)} y1={Y(a * 0.3 + b)} x2={X(5.7)} y2={Y(a * 5.7 + b)} stroke="var(--color-azul)" strokeWidth="2" />
        {pts.map((p) => <circle key={`c${p.x}`} cx={X(p.x)} cy={Y(p.y)} r="3" fill="var(--color-texto)" />)}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha uma reta">
        {retas.map((r, k) => (
          <button key={r.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{r.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Soma das áreas dos quadrados: <strong>{total.toFixed(2).replace('.', ',')}</strong>.
        {i === 2 ? ' Nenhuma outra reta consegue um número menor que este.' : ' Troque para a melhor reta e compare.'}
      </p>
    </div>
  )
}
