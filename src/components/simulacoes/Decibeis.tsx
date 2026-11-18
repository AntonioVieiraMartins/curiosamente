import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Decibéis: dB = 10 · log₁₀(I / I₀). Cada 10 dB multiplica a intensidade por 10.
export default function Decibeis() {
  const [db, setDb] = useState(60)
  const id = useId()
  const razao = 10 ** (db / 10)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Decibéis: uma escala logarítmica</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Nível: <b>{db} dB</b>
        <input id={id} type="range" min={0} max={120} step={10} value={db} onChange={(e) => setDb(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Nível em dB</p><p className="text-3xl font-bold">{db}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Intensidade (vezes a mínima)</p><p className="break-all text-2xl font-bold">{razao.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {db} dB = 10 · log₁₀(I/I₀), então I/I₀ = 10^({db}/10) = 10^{db / 10}. Subir <b>10 dB</b> multiplica a intensidade do som por <b>10</b>; subir <b>20 dB</b>, por <b>100</b>. A escala é comprimida: de 0 a 120 dB cabe uma variação de um trilhão de vezes.
      </p>
    </div>
  )
}
