import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { sobrescrito } from '../../lib/numeros'

// n² = quadradinhos de uma camada; n³ = n camadas empilhadas. Por isso se diz "ao quadrado" e "ao cubo".
export default function QuadradoECubo() {
  const [n, setN] = useState(3)
  const id = useId()
  const celula = n <= 4 ? 14 : 10

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quadrado e cubo</p>
      <label htmlFor={id} className="mt-3 block font-semibold">
        Lado: <span className="text-coral">{n}</span>
      </label>
      <input id={id} type="range" min={1} max={6} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <p className="mt-3 text-sm text-suave">Uma camada é um quadrado de {n} × {n}. Empilhe {n} camadas e vira um cubo.</p>
      <div className="mt-2 flex flex-wrap gap-2" aria-hidden="true">
        {Array.from({ length: n }, (_, camada) => (
          <div key={camada} className="grid gap-px rounded-sm bg-texto/20 p-px"
            style={{ gridTemplateColumns: `repeat(${n}, ${celula}px)` }}>
            {Array.from({ length: n * n }, (_, i) => (
              <span key={i} style={{ height: celula, background: 'color-mix(in srgb, var(--color-azul) 70%, transparent)' }} />
            ))}
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4">
        <p>{n}{sobrescrito(2)} = {n} × {n} = <strong className="text-azul-texto">{n ** 2}</strong> quadradinhos (a área do quadrado)</p>
        <p>{n}{sobrescrito(3)} = {n} × {n} × {n} = <strong className="text-coral">{n ** 3}</strong> cubinhos (o volume do cubo)</p>
      </div>
    </div>
  )
}
