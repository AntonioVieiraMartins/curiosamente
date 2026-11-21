import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import { ajustePolinomial, avaliaPolinomio, erroMedioQuadratico, type Ponto } from '../../lib/ajuste'

// Verdade escondida: uma curva suave. Os pontos têm um pouco de "ruído" fixo.
const verdade = (x: number) => 0.8 * Math.sin(2.4 * x)
const xTreino = [-0.9, -0.65, -0.4, -0.15, 0.1, 0.35, 0.6, 0.85]
const ruTreino = [0.12, -0.1, 0.15, -0.12, 0.1, -0.14, 0.1, -0.08]
const xTeste = [-0.8, -0.55, -0.3, -0.05, 0.2, 0.45, 0.7, 0.95]
const ruTeste = [-0.1, 0.12, -0.09, 0.14, -0.11, 0.1, -0.13, 0.09]
const treino: Ponto[] = xTreino.map((x, i) => ({ x, y: verdade(x) + ruTreino[i] }))
const teste: Ponto[] = xTeste.map((x, i) => ({ x, y: verdade(x) + ruTeste[i] }))
const X = (x: number) => 120 + x * 100
const Y = (y: number) => 75 - Math.max(-1.7, Math.min(1.7, y)) * 40

export default function TreinoETeste() {
  const [grau, setGrau] = useState(1)
  const coef = ajustePolinomial(treino, grau)
  const f = (x: number) => avaliaPolinomio(coef, x)
  const eTreino = erroMedioQuadratico(treino, f)
  const eTeste = erroMedioQuadratico(teste, f)
  const curva = Array.from({ length: 61 }, (_, k) => -1 + k / 30).map((x) => `${X(x)},${Y(f(x))}`).join(' ')
  const fmt = (n: number) => n.toFixed(3).replace('.', ',')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Treino e teste</p>
      <svg viewBox="0 0 240 150" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Curva de grau ${grau}: erro de treino ${fmt(eTreino)}, erro de teste ${fmt(eTeste)}`}>
        <line x1="10" y1="75" x2="230" y2="75" stroke="var(--color-borda)" />
        <polyline fill="none" stroke="var(--color-azul)" strokeWidth="2" points={curva} />
        {treino.map((p) => <circle key={`t${p.x}`} cx={X(p.x)} cy={Y(p.y)} r="3.5" fill="var(--color-texto)" />)}
        {teste.map((p) => <rect key={`s${p.x}`} x={X(p.x) - 3} y={Y(p.y) - 3} width="6" height="6" fill="var(--color-coral)" />)}
      </svg>
      <p className="mt-2 text-sm text-suave">Círculos pretos: dados de treino (a curva os vê). Quadrados vermelhos: dados de teste (escondidos).</p>
      <div className="mt-3"><Deslizante rotulo="Complexidade da curva (grau)" valor={grau} min={1} max={7} passo={1} aoMudar={setGrau} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Erro no treino: <strong>{fmt(eTreino)}</strong>. Erro no teste: <strong>{fmt(eTeste)}</strong>.
        {grau <= 2 ? ' Simples demais: erra nos dois (subajuste).' : grau >= 5 ? ' O erro de treino quase some, mas o de teste sobe: a curva decorou o ruído (sobreajuste).' : ' Um bom meio-termo: erro baixo no treino e no teste.'}
      </p>
    </div>
  )
}
