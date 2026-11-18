import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const BANDEIRADA = 6
const POR_KM = 2.5

const reais = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Preço = 6 + 2,5·km. Dado o preço, a equação 6 + 2,5·x = preço devolve os quilômetros.
export default function CorridaDeTaxi() {
  const [preco, setPreco] = useState(31)
  const id = useId()
  const km = (preco - BANDEIRADA) / POR_KM

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos km eu andei?</p>
      <p className="mt-2 text-[15px] text-suave">Bandeirada de {reais(BANDEIRADA)} mais {reais(POR_KM)} por quilômetro.</p>
      <label htmlFor={id} className="mt-3 block font-semibold">A corrida custou: <span className="text-coral">{reais(preco)}</span></label>
      <input id={id} type="range" min={6} max={60} step={0.5} value={preco} onChange={(e) => setPreco(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <ol aria-live="polite" className="mt-2 space-y-1.5 rounded-2xl bg-fundo p-4 text-[15px]">
        <li>Equação: {BANDEIRADA.toLocaleString('pt-BR')} + 2,5·x = {preco.toLocaleString('pt-BR')}</li>
        <li>Tira a bandeirada dos dois lados: 2,5·x = {(preco - BANDEIRADA).toLocaleString('pt-BR')}</li>
        <li>Divide por 2,5: <strong className="text-coral">x = {km.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} km</strong></li>
      </ol>
    </div>
  )
}
