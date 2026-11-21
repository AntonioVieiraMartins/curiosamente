import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Um neurônio artificial (perceptron): soma ponderada + limiar. Aprende corrigindo os erros, um por vez.
type Ex = { x: number; y: number; r: 1 | -1 }
const dados: Ex[] = [
  { x: 0.5, y: 0.6, r: 1 }, { x: 0.7, y: 0.2, r: 1 }, { x: 0.3, y: 0.8, r: 1 }, { x: 0.85, y: 0.7, r: 1 },
  { x: -0.5, y: -0.4, r: -1 }, { x: -0.7, y: -0.1, r: -1 }, { x: -0.3, y: -0.7, r: -1 }, { x: -0.8, y: -0.6, r: -1 },
]
const inicial = { w1: -0.6, w2: 0.2, b: 0.3 }
const X = (x: number) => 110 + x * 90
const Y = (y: number) => 75 - y * 60
const saida = (m: typeof inicial, e: Ex) => (m.w1 * e.x + m.w2 * e.y + m.b >= 0 ? 1 : -1)

export default function NeuronioQueAprende() {
  const [m, setM] = useState(inicial)
  const [i, setI] = useState(0)
  const [rodadas, setRodadas] = useState(0)
  const erros = dados.filter((e) => saida(m, e) !== e.r).length

  // Regra do perceptron: se errou, empurra os pesos na direção da resposta certa
  const treinar = () => {
    const e = dados[i]
    if (saida(m, e) !== e.r) setM({ w1: m.w1 + 0.4 * e.r * e.x, w2: m.w2 + 0.4 * e.r * e.y, b: m.b + 0.4 * e.r })
    setI((i + 1) % dados.length)
    setRodadas(rodadas + 1)
  }
  const reiniciar = () => { setM(inicial); setI(0); setRodadas(0) }

  const reta = (() => {
    if (Math.abs(m.w2) < 0.001) return null
    const f = (x: number) => -(m.w1 * x + m.b) / m.w2
    return { y1: f(-1.2), y2: f(1.2) }
  })()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um neurônio que aprende (dados inventados)</p>
      <svg viewBox="0 0 220 150" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`${erros} erros em ${dados.length} exemplos`}>
        {reta && <line x1={X(-1.2)} y1={Y(reta.y1)} x2={X(1.2)} y2={Y(reta.y2)} stroke="var(--color-texto)" strokeWidth="2" />}
        {dados.map((e, k) => (
          <g key={k}>
            <circle cx={X(e.x)} cy={Y(e.y)} r="5" fill={e.r === 1 ? 'var(--color-azul)' : 'var(--color-coral)'} stroke={saida(m, e) !== e.r ? 'var(--color-texto)' : 'none'} strokeWidth="2" />
            {k === i && <circle cx={X(e.x)} cy={Y(e.y)} r="9" fill="none" stroke="var(--color-amarelo)" strokeWidth="2" />}
          </g>
        ))}
      </svg>
      <p className="mt-2 text-sm text-suave">Azul: classe A. Coral: classe B. A linha preta é a decisão do neurônio. Pontos com borda preta estão errados. O círculo amarelo é o próximo exemplo a estudar.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={treinar} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Estudar o próximo exemplo</button>
        <button type="button" onClick={reiniciar} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Recomeçar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Exemplos estudados: {rodadas}. Erros agora: <strong>{erros}</strong> de {dados.length}.
        {erros === 0 ? ' O neurônio aprendeu a separar os dois grupos, só corrigindo os próprios erros.' : ' Cada vez que erra, ele ajusta os pesos um pouquinho na direção certa.'}
      </p>
    </div>
  )
}
