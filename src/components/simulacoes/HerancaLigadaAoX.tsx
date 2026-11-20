import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Daltonismo (vermelho-verde): gene no cromossomo X. XD = visão normal, Xd = daltonismo (recessivo)
const maes = [
  { g: 'XD XD', a: ['XD', 'XD'], nome: 'Visão normal' },
  { g: 'XD Xd', a: ['XD', 'Xd'], nome: 'Portadora' },
  { g: 'Xd Xd', a: ['Xd', 'Xd'], nome: 'Daltônica' },
]
const pais = [
  { g: 'XD Y', a: ['XD', 'Y'], nome: 'Visão normal' },
  { g: 'Xd Y', a: ['Xd', 'Y'], nome: 'Daltônico' },
]

type Filho = { x: string; y: string }
const homem = (f: Filho) => f.y === 'Y'
const afetado = (f: Filho) => (homem(f) ? f.x === 'Xd' : f.x === 'Xd' && f.y === 'Xd')
const portadora = (f: Filho) => !homem(f) && !afetado(f) && (f.x === 'Xd' || f.y === 'Xd')

export default function HerancaLigadaAoX() {
  const [m, setM] = useState(1)
  const [p, setP] = useState(0)
  const filhos: Filho[] = maes[m].a.flatMap((x) => pais[p].a.map((y) => ({ x, y })))
  const descreve = (f: Filho) => (homem(f) ? 'menino' : 'menina') + (afetado(f) ? (homem(f) ? ' daltônico' : ' daltônica') : portadora(f) ? ' portadora' : ' com visão normal')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Daltonismo e o cromossomo X</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Mãe">
        <span className="w-14 text-sm font-semibold">Mãe</span>
        {maes.map((x, k) => <button key={x.g} type="button" onClick={() => setM(k)} aria-pressed={m === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${m === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>)}
      </div>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Pai">
        <span className="w-14 text-sm font-semibold">Pai</span>
        {pais.map((x, k) => <button key={x.g} type="button" onClick={() => setP(k)} aria-pressed={p === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${p === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>)}
      </div>
      <svg viewBox="0 0 220 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Os quatro filhos possíveis">
        {filhos.map((f, k) => {
          const fill = afetado(f) ? 'var(--color-coral)' : portadora(f) ? 'color-mix(in srgb, var(--color-coral) 35%, white)' : 'var(--color-superficie)'
          const cx = 35 + k * 50
          return homem(f)
            ? <rect key={k} x={cx - 14} y="14" width="28" height="28" fill={fill} stroke="var(--color-texto)" strokeWidth="1.5" />
            : <circle key={k} cx={cx} cy="28" r="15" fill={fill} stroke="var(--color-texto)" strokeWidth="1.5" />
        })}
        <text x="110" y="64" textAnchor="middle" fontSize="8" fill="var(--color-suave)">Quadrado = menino, círculo = menina. Forte = daltônico, claro = portadora</text>
      </svg>
      <ul aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
        {filhos.map((f, k) => <li key={k}>1/4: {descreve(f)}</li>)}
      </ul>
    </div>
  )
}
