import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Tamanhos médios aproximados, só para ter noção de grandeza.
const coisas = [
  { nome: 'fotos de celular (≈ 3 MB cada)', mb: 3 },
  { nome: 'músicas (≈ 4 MB cada)', mb: 4 },
  { nome: 'filmes em HD (≈ 2 GB cada)', mb: 2000 },
  { nome: 'jogos grandes (≈ 50 GB cada)', mb: 50000 },
]

// 1 GB = 1.000 MB aqui, como nas embalagens de disco.
export default function QuantoCabe() {
  const [gb, setGb] = useState(256)
  const id = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto cabe no disco?</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Tamanho do disco: <span className="text-coral">{gb >= 1000 ? `${gb / 1000} TB` : `${gb} GB`}</span></label>
      <input id={id} type="range" min={0} max={7} step={1} value={Math.round(Math.log2(gb / 32))}
        onChange={(e) => setGb(32 * 2 ** Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <ul className="mt-2 space-y-1.5" aria-live="polite">
        {coisas.map((c) => (
          <li key={c.nome} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl bg-fundo px-3 py-2 text-[15px]">
            <span>{c.nome}</span>
            <strong className="text-coral">{Math.floor((gb * 1000) / c.mb).toLocaleString('pt-BR')}</strong>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-suave">Os 8 tamanhos vão de 32 GB a 4 TB (4.096 GB), sempre dobrando.</p>
    </div>
  )
}
