import { useState } from 'react'
import { cartao } from '../ui/estilos'

// k-médias: sem rótulos, o computador acha grupos repetindo "atribuir ao centro mais perto" e "mover o centro"
type P = { x: number; y: number }
const pontos: P[] = [
  { x: 1, y: 1.5 }, { x: 1.8, y: 2.4 }, { x: 2.5, y: 1.2 }, { x: 1.4, y: 3 }, { x: 2.8, y: 2.6 }, { x: 0.8, y: 2.5 },
  { x: 7, y: 1.5 }, { x: 8, y: 2.3 }, { x: 7.6, y: 0.8 }, { x: 8.6, y: 1.4 }, { x: 6.6, y: 2.4 }, { x: 8.2, y: 3 },
  { x: 4.2, y: 7 }, { x: 5, y: 8 }, { x: 4.6, y: 6.2 }, { x: 5.8, y: 7.4 }, { x: 3.8, y: 8 }, { x: 5.4, y: 6.6 },
]
const inicios: P[][] = [
  [{ x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 4 }],
  [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }],
  [{ x: 8, y: 8 }, { x: 2, y: 8 }, { x: 5, y: 1 }],
]
const cores = ['var(--color-azul)', 'var(--color-coral)', 'var(--color-verde)']
const X = (x: number) => 15 + x * 21
const Y = (y: number) => 130 - y * 13

const atribui = (centros: P[]) =>
  pontos.map((p) => centros.reduce((best, c, i) => (Math.hypot(p.x - c.x, p.y - c.y) < Math.hypot(p.x - centros[best].x, p.y - centros[best].y) ? i : best), 0))

export default function AgrupandoPontos() {
  const [inicio, setInicio] = useState(0)
  const [centros, setCentros] = useState<P[]>(inicios[0])
  const [passos, setPassos] = useState(0)
  const grupo = atribui(centros)
  const dist = pontos.reduce((s, p, i) => s + (p.x - centros[grupo[i]].x) ** 2 + (p.y - centros[grupo[i]].y) ** 2, 0)

  const passo = () => {
    const novos = centros.map((c, g) => {
      const meus = pontos.filter((_, i) => grupo[i] === g)
      if (meus.length === 0) return c
      return { x: meus.reduce((s, p) => s + p.x, 0) / meus.length, y: meus.reduce((s, p) => s + p.y, 0) / meus.length }
    })
    setCentros(novos)
    setPassos(passos + 1)
  }
  const recomecar = () => {
    const prox = (inicio + 1) % inicios.length
    setInicio(prox)
    setCentros(inicios[prox])
    setPassos(0)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Agrupando sem rótulos (k-médias)</p>
      <svg viewBox="0 0 220 140" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Passo ${passos}: três grupos, soma das distâncias ${dist.toFixed(1)}`}>
        {pontos.map((p, i) => <circle key={i} cx={X(p.x)} cy={Y(p.y)} r="4" fill={cores[grupo[i]]} fillOpacity="0.8" />)}
        {centros.map((c, g) => <polygon key={g} points={`${X(c.x)},${Y(c.y) - 7} ${X(c.x) + 7},${Y(c.y)} ${X(c.x)},${Y(c.y) + 7} ${X(c.x) - 7},${Y(c.y)}`} fill={cores[g]} stroke="var(--color-texto)" strokeWidth="1.5" />)}
      </svg>
      <p className="mt-2 text-sm text-suave">Losangos: os 3 centros. Cada ponto toma a cor do centro mais perto.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={passo} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Mover os centros</button>
        <button type="button" onClick={recomecar} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Outro começo</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Passo {passos}. Soma dos quadrados das distâncias aos centros: <strong>{dist.toFixed(1).replace('.', ',')}</strong>.
        {passos === 0 ? ' Aperte "Mover os centros": cada centro vai para a média do seu grupo.' : ' Repita até os centros pararem de se mexer: o computador achou os grupos sozinho, sem ninguém dizer quais eram.'}
      </p>
    </div>
  )
}
