import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const MAX = 1000
const ehPrimo = (n: number) => {
  if (n < 2) return false
  for (let d = 2; d * d <= n; d++) if (n % d === 0) return false
  return true
}
// Quantos primos há em cada bloco de 100 números: 1–100, 101–200...
const blocos = Array.from({ length: MAX / 100 }, (_, b) => {
  let c = 0
  for (let n = b * 100 + 1; n <= (b + 1) * 100; n++) if (ehPrimo(n)) c++
  return c
})

// Os primos não acabam, mas ficam mais raros: cada bloco de 100 tem menos que o anterior (em geral).
export default function DensidadeDePrimos() {
  const [ate, setAte] = useState(300)
  const id = useId()
  const total = blocos.slice(0, ate / 100).reduce((s, c) => s + c, 0)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Primos em cada bloco de 100</p>
      <div className="mt-3 flex h-32 items-end gap-1" aria-hidden="true">
        {blocos.map((c, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1">
            <span className="text-[11px] text-suave">{c}</span>
            <div className={`w-full rounded-t-md ${i < ate / 100 ? 'bg-azul' : 'bg-borda'}`} style={{ height: `${(c / 25) * 90}px` }} />
          </div>
        ))}
      </div>
      <div className="flex gap-1 text-center text-[11px] text-suave" aria-hidden="true">
        {blocos.map((_, i) => <span key={i} className="flex-1">{i * 100 + 1}–{(i + 1) * 100}</span>)}
      </div>

      <label htmlFor={id} className="mt-3 block font-semibold">Contar até: <span className="text-coral">{ate}</span></label>
      <input id={id} type="range" min={100} max={MAX} step={100} value={ate} onChange={(e) => setAte(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4">
        Até {ate} há <strong className="text-coral">{total}</strong> primos: {Math.round((total / ate) * 100)} de cada 100 números.
      </p>
    </div>
  )
}
