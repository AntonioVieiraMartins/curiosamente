import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Para saber se n é primo, basta testar divisores até a raiz de n: se existisse um divisor maior, o "par" dele seria menor.
export default function DetetiveDePrimos() {
  const [n, setN] = useState(91)
  const id = useId()
  const limite = Math.floor(Math.sqrt(n))
  const testes: { d: number; resto: number }[] = []
  let divisor: number | null = null
  for (let d = 2; d <= limite; d++) {
    const resto = n % d
    testes.push({ d, resto })
    if (resto === 0) { divisor = d; break }
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O detetive de primos</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Suspeito: <span className="text-coral">{n}</span></label>
      <input id={id} type="range" min={2} max={200} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <p className="mt-2 text-sm text-suave">Só precisamos testar até {limite}, porque {limite} × {limite} = {limite * limite} é o último quadrado que não passa de {n}.</p>
      <ul className="mt-2 flex flex-wrap gap-1" aria-hidden="true">
        {testes.map((t) => (
          <li key={t.d} className={`rounded-md px-2 py-1 text-xs font-semibold ${t.resto === 0 ? 'bg-coral text-white' : 'bg-fundo text-suave'}`}>
            {n} ÷ {t.d}: resto {t.resto}
          </li>
        ))}
      </ul>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {divisor === null
          ? <><strong className="text-verde">{n} é primo.</strong> Nenhum número até {limite} divide {n}.</>
          : <><strong className="text-coral">{n} é composto.</strong> {n} = {divisor} × {n / divisor}.</>}
      </p>
    </div>
  )
}
