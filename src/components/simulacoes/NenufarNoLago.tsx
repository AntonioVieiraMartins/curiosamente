import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma planta dobra de tamanho todo dia e cobre o lago inteiro no dia 30.
export default function NenufarNoLago() {
  const [dia, setDia] = useState(25)
  const id = useId()
  const frac = 2 ** (dia - 30)
  const pct = frac * 100
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A planta no lago</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Dia: <b>{dia}</b>
        <input id={id} type="range" min={1} max={30} step={1} value={dia} onChange={(e) => setDia(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-3 h-8 overflow-hidden rounded-full bg-fundo" role="img" aria-label={`${pct.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} por cento do lago coberto`}>
        <div className="h-full bg-verde" style={{ width: `${Math.max(pct, 0.4)}%` }} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        No dia {dia}, a planta cobre <b>{pct.toLocaleString('pt-BR', { maximumFractionDigits: 3 })}%</b> do lago. {dia === 29 ? 'Metade! E no dia seguinte, o lago inteiro.' : dia === 30 ? 'Lago todo coberto.' : dia >= 27 ? 'Faltam poucos dias, e parece que ainda sobra muito lago.' : 'Quem olha o lago aqui nem imagina o que vem a seguir.'} (Exemplo da fonte: a planta dobra todo dia e cobre o lago no dia 30.)
      </p>
    </div>
  )
}
