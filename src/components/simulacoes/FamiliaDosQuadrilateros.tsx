import { useState } from 'react'
import { cartao } from '../ui/estilos'

const formas: Record<string, string> = {
  'quadrilátero qualquer': '10,60 80,55 95,15 25,10',
  trapézio: '10,60 90,60 70,15 30,15',
  paralelogramo: '10,60 70,60 95,15 35,15',
  retângulo: '10,55 90,55 90,15 10,15',
  losango: '50,8 90,35 50,62 10,35',
  quadrado: '30,8 70,8 70,48 30,48',
}

// Escolha as propriedades e descubra o nome do quadrilátero.
export default function FamiliaDosQuadrilateros() {
  const [pares, setPares] = useState(0)
  const [retos, setRetos] = useState(false)
  const [iguais, setIguais] = useState(false)
  const forcado = retos || iguais
  const p = forcado ? 2 : pares
  let nome = 'quadrilátero qualquer'
  if (p === 1) nome = 'trapézio'
  else if (p === 2) nome = retos && iguais ? 'quadrado' : retos ? 'retângulo' : iguais ? 'losango' : 'paralelogramo'
  const explic: Record<string, string> = {
    'quadrilátero qualquer': 'Sem nenhum par de lados paralelos, é só um quadrilátero.',
    trapézio: 'Tem exatamente um par de lados paralelos (as bases).',
    paralelogramo: 'Os lados opostos são paralelos (e iguais).',
    retângulo: 'Paralelogramo com 4 ângulos retos.',
    losango: 'Paralelogramo com os 4 lados iguais.',
    quadrado: 'Tem 4 ângulos retos e 4 lados iguais: é retângulo e losango ao mesmo tempo.',
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é o meu nome?</p>
      <p className="mt-3 text-sm font-semibold">Pares de lados paralelos:</p>
      <div className="mt-1 flex gap-2">
        {[0, 1, 2].map((v) => (
          <button key={v} type="button" aria-pressed={p === v} disabled={forcado && v !== 2} onClick={() => setPares(v)}
            className={`min-h-11 min-w-11 rounded-full border-2 px-3 text-sm font-semibold disabled:opacity-40 ${p === v ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{v}</button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-4">
        <label className="flex min-h-11 items-center gap-2 text-[15px]"><input type="checkbox" checked={retos} onChange={(e) => setRetos(e.target.checked)} className="size-5" /> 4 ângulos retos</label>
        <label className="flex min-h-11 items-center gap-2 text-[15px]"><input type="checkbox" checked={iguais} onChange={(e) => setIguais(e.target.checked)} className="size-5" /> 4 lados iguais</label>
      </div>
      <svg viewBox="0 0 105 70" className="mt-2 w-40" role="img" aria-label={`Desenho de um ${nome}`}>
        <polygon points={formas[nome]} fill="var(--color-fundo)" stroke="var(--color-azul)" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        É um <strong>{nome}</strong>. {explic[nome]}
        {forcado && ' Ter ângulos retos ou lados iguais, num quadrilátero, obriga os lados opostos a serem paralelos.'}
      </p>
    </div>
  )
}
