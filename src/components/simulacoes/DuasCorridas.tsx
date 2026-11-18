import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const A = (x: number) => 6 + 2.5 * x // bandeirada alta, km barato
const B = (x: number) => 3.5 * x // sem bandeirada, km caro
const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Dois aplicativos de transporte (valores de exemplo): qual compensa depende da distância
export default function DuasCorridas() {
  const [km, setKm] = useState(3)
  const id = useId()
  const melhor = A(km) < B(km) ? 'A' : A(km) > B(km) ? 'B' : 'empate'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual corrida compensa?</p>
      <p className="mt-2 text-[15px] text-suave">App A: bandeirada de R$ 6 mais R$ 2,50 por km. App B: sem bandeirada, R$ 3,50 por km. (Valores de exemplo.)</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Distância: <b>{km.toLocaleString('pt-BR')} km</b>
        <input id={id} type="range" min={0} max={12} step={0.5} value={km} onChange={(e) => setKm(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao
        curvas={[{ f: A, cor: 'var(--color-azul)' }, { f: B, cor: 'var(--color-coral)' }]}
        xmin={0} xmax={12} ymin={0} ymax={40}
        pontos={[{ x: km, y: A(km), cor: 'var(--color-azul)' }, { x: km, y: B(km), cor: 'var(--color-coral)' }, { x: 6, y: 21, cor: 'var(--color-texto)', rotulo: 'empate' }]}
        rotuloAlt="Duas retas de preço que se cruzam em 6 km"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {km.toLocaleString('pt-BR')} km: A cobra <b>{reais(A(km))}</b> e B cobra <b>{reais(B(km))}</b>. {melhor === 'empate' ? 'Preço igual: é o ponto onde as retas se cruzam.' : `Compensa o app ${melhor}.`} As retas se cruzam em 6 km (R$ 21,00): 6 + 2,5x = 3,5x, logo x = 6.
      </p>
    </div>
  )
}
