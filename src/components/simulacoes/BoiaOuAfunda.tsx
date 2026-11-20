import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Densidades aproximadas (g/cm³)
const OBJETOS = [
  { nome: 'Gelo', d: 0.92, cor: '#bfe3f5' },
  { nome: 'Madeira de pinho', d: 0.5, cor: '#b8864b' },
  { nome: 'Alumínio', d: 2.7, cor: '#9aa3ab' },
  { nome: 'Ferro', d: 7.87, cor: '#6b6f75' },
]
const LIQUIDOS = [
  { nome: 'Óleo', d: 0.91, cor: '#e8c75a' },
  { nome: 'Água', d: 1, cor: '#9cc8ee' },
  { nome: 'Água do mar', d: 1.03, cor: '#7fb4e0' },
  { nome: 'Mercúrio', d: 13.5, cor: '#c8cdd2' },
]
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Boia se a densidade do objeto for menor que a do líquido
export default function BoiaOuAfunda() {
  const [o, setO] = useState(0)
  const [l, setL] = useState(1)
  const obj = OBJETOS[o]
  const liq = LIQUIDOS[l]
  const boia = obj.d < liq.d
  const afundado = boia ? obj.d / liq.d : 1 // fração do objeto dentro do líquido
  const y = boia ? 30 + afundado * 22 - 22 : 76 // superfície do líquido em y = 30; o bloco tem 22 de altura

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Boia ou afunda?</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div role="group" aria-label="Objeto" className="flex flex-wrap gap-2">
          {OBJETOS.map((x, k) => (
            <button key={x.nome} type="button" aria-pressed={k === o} onClick={() => setO(k)}
              className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === o ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
          ))}
        </div>
        <div role="group" aria-label="Líquido" className="flex flex-wrap gap-2">
          {LIQUIDOS.map((x, k) => (
            <button key={x.nome} type="button" aria-pressed={k === l} onClick={() => setL(k)}
              className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === l ? 'border-coral bg-coral text-white' : 'border-borda'}`}>{x.nome}</button>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${obj.nome} em ${liq.nome}: ${boia ? 'boia' : 'afunda'}`}>
        <rect x={40} y={30} width={120} height={70} fill={liq.cor} stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={85} y={y} width={30} height={22} rx={3} fill={obj.cor} stroke="var(--color-texto)" strokeWidth="1.2" />
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {obj.nome} ({br(obj.d)} g/cm³) em {liq.nome.toLowerCase()} ({br(liq.d)} g/cm³): <strong>{boia ? 'boia' : 'afunda'}</strong>.
        {boia ? ` Fica com cerca de ${Math.round(afundado * 100)}% do volume dentro do líquido.` : ' É mais denso que o líquido.'}
      </p>
    </div>
  )
}
