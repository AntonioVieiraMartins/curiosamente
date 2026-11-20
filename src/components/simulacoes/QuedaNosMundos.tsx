import { useState } from 'react'
import { cartao } from '../ui/estilos'

// A mesma altura de queda em lugares com gravidade diferente (valores aproximados)
const mundos = [
  { nome: 'Lua', g: 1.6, cor: 'var(--color-suave)' },
  { nome: 'Marte', g: 3.7, cor: 'var(--color-coral)' },
  { nome: 'Terra', g: 9.8, cor: 'var(--color-azul)' },
  { nome: 'Júpiter', g: 24.8, cor: 'var(--color-amarelo)' },
]

export default function QuedaNosMundos() {
  const [h, setH] = useState(20)
  const tempos = mundos.map((m) => Math.sqrt((2 * h) / m.g))
  const maior = Math.max(...tempos)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">t = √(2·h ÷ g)</p>
      <div className="mt-3 space-y-2" role="img" aria-label="Tempo de queda em cada mundo">
        {mundos.map((m, i) => (
          <div key={m.nome} className="flex items-center gap-2 text-sm">
            <span className="w-16 shrink-0 font-semibold">{m.nome}</span>
            <div className="h-5 flex-1 rounded-full bg-fundo">
              <div className="h-5 rounded-full" style={{ width: `${(tempos[i] / maior) * 100}%`, background: m.cor }} />
            </div>
            <span className="w-28 shrink-0 text-right tabular-nums">{tempos[i].toFixed(1).replace('.', ',')} s · g = {String(m.g).replace('.', ',')}</span>
          </div>
        ))}
      </div>
      <label className="mt-4 block text-sm font-semibold">Altura da queda: {h} m<input type="range" min={5} max={100} step={5} value={h} onChange={(e) => setH(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Soltando algo de {h} m de altura, na Terra a queda dura <strong>{tempos[2].toFixed(1).replace('.', ',')} s</strong> e a velocidade final é cerca de {Math.sqrt(2 * 9.8 * h).toFixed(0)} m/s. Na Lua, a mesma queda leva {tempos[0].toFixed(1).replace('.', ',')} s: menos gravidade, queda em câmera lenta.
      </p>
    </div>
  )
}
