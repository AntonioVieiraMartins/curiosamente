import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Um inteiro dividido em 100 quadradinhos: cada um é 0,01. Cada coluna de 10 é 0,1.
export default function GradeDeCentesimos() {
  const [n, setN] = useState(37)
  const id = useId()
  const dec = (n / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O inteiro em 100 pedaços</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Quadradinhos pintados: <b>{n}</b>
        <input id={id} type="range" min={0} max={100} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-3 inline-grid gap-0.5" style={{ gridTemplateColumns: 'repeat(10, 1.4rem)' }} role="img" aria-label={`${n} de 100 quadradinhos pintados`}>
        {Array.from({ length: 100 }, (_, k) => {
          const col = k % 10, lin = Math.floor(k / 10)
          const pintado = col * 10 + lin < n
          return <span key={k} className={`size-[1.4rem] rounded-sm ${pintado ? 'bg-azul' : 'bg-fundo'}`} />
        })}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n} centésimos = <b>{dec}</b> = {n}/100. Isso é <b>{Math.floor(n / 10)}</b> décimo(s) inteiro(s) e mais <b>{n % 10}</b> centésimo(s).
      </p>
    </div>
  )
}
