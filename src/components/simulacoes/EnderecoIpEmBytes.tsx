import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Um endereço IPv4 são 4 números de 0 a 255 (4 bytes = 32 bits), separados por pontos.
export default function EnderecoIpEmBytes() {
  const [partes, setPartes] = useState([192, 168, 0, 12])
  const base = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um endereço IP por dentro</p>
      <p className="mt-3 text-center text-3xl font-semibold" aria-live="polite">{partes.join('.')}</p>
      {partes.map((v, i) => (
        <div key={i}>
          <label htmlFor={`${base}${i}`} className="mt-2 flex flex-wrap items-baseline justify-between gap-2 font-semibold">
            <span>Parte {i + 1}: {v}</span>
            <span className="font-mono text-sm font-normal text-suave">{v.toString(2).padStart(8, '0')}</span>
          </label>
          <input id={`${base}${i}`} type="range" min={0} max={255} value={v}
            onChange={(e) => setPartes(partes.map((q, j) => (j === i ? Number(e.target.value) : q)))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
        </div>
      ))}
      <p className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Cada parte cabe em 8 bits (de 0 a 255). São 4 partes, ou seja, 32 bits. Isso dá 2³² = <strong>4.294.967.296</strong> endereços possíveis, cerca de 4,29 bilhões.
      </p>
    </div>
  )
}
