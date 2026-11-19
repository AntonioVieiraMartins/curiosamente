import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

type Ineq = { nome: string; teste: (x: number) => boolean; borda: number; incluiBorda: boolean; paraDireita: boolean }

const lista: Ineq[] = [
  { nome: 'x > 3', teste: (x) => x > 3, borda: 3, incluiBorda: false, paraDireita: true },
  { nome: 'x ≤ 2', teste: (x) => x <= 2, borda: 2, incluiBorda: true, paraDireita: false },
  { nome: '2x + 1 < 9', teste: (x) => 2 * x + 1 < 9, borda: 4, incluiBorda: false, paraDireita: false },
  { nome: '3x − 2 ≥ 4', teste: (x) => 3 * x - 2 >= 4, borda: 2, incluiBorda: true, paraDireita: true },
]

const MIN = -4
const MAX = 10
const px = (v: number) => 20 + ((v - MIN) / (MAX - MIN)) * 360

// A solução de uma inequação é uma região da reta, não um ponto só. Bolinha cheia = o número entra; vazia = não entra.
export default function RetaDaInequacao() {
  const [i, setI] = useState(0)
  const [x, setX] = useState(0)
  const id = useId()
  const q = lista[i]
  const ok = q.teste(x)
  const ini = q.paraDireita ? px(q.borda) : px(MIN)
  const fim = q.paraDireita ? px(MAX) : px(q.borda)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Onde fica a solução?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {lista.map((l, k) => (
          <button key={l.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{l.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block font-semibold">Teste x = <span className="text-coral">{x}</span></label>
      <input id={id} type="range" min={MIN} max={MAX} value={x} onChange={(e) => setX(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <svg viewBox="0 0 400 70" className="mt-1 h-auto w-full" aria-hidden="true">
        <line x1={20} y1={30} x2={380} y2={30} stroke="var(--color-suave)" strokeWidth={2} />
        <rect x={ini} y={24} width={fim - ini} height={12} fill="var(--color-azul)" opacity={0.35} />
        {Array.from({ length: MAX - MIN + 1 }, (_, k) => MIN + k).map((v) => (
          <g key={v}>
            <line x1={px(v)} y1={26} x2={px(v)} y2={34} stroke="var(--color-suave)" />
            <text x={px(v)} y={52} textAnchor="middle" fontSize={11} fill="var(--color-suave)">{v}</text>
          </g>
        ))}
        <circle cx={px(q.borda)} cy={30} r={7} fill={q.incluiBorda ? 'var(--color-azul)' : 'var(--color-superficie)'} stroke="var(--color-azul)" strokeWidth={2.5} />
        <circle cx={px(x)} cy={30} r={5} fill={ok ? 'var(--color-verde)' : 'var(--color-coral)'} />
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Com x = {x}, a desigualdade <strong>{q.nome}</strong> é <strong>{ok ? 'verdadeira' : 'falsa'}</strong>.{' '}
        {x === q.borda ? (q.incluiBorda ? 'O ponto da borda ENTRA (bolinha cheia).' : 'O ponto da borda NÃO entra (bolinha vazia).') : ok ? 'Esse x está na região azul.' : 'Esse x está fora da região azul.'}
      </p>
    </div>
  )
}
