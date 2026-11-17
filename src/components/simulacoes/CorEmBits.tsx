import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const canais = [
  { nome: 'Vermelho', cor: 'var(--color-coral)' },
  { nome: 'Verde', cor: 'var(--color-verde)' },
  { nome: 'Azul', cor: 'var(--color-azul)' },
] as const

// Uma cor de tela são 3 números de 0 a 255 (3 bytes = 24 bits): quanto de vermelho, de verde e de azul.
export default function CorEmBits() {
  const [rgb, setRgb] = useState([212, 81, 58])
  const base = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma cor em 24 bits</p>
      {/* A cor mostrada vem dos números escolhidos: é o próprio dado, não um estilo do site */}
      <div className="mt-3 h-20 rounded-2xl border border-borda" style={{ background: `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})` }} aria-hidden="true" />

      <div className="mt-3 space-y-2">
        {canais.map((c, i) => (
          <div key={c.nome}>
            <label htmlFor={`${base}${i}`} className="flex flex-wrap items-baseline justify-between gap-2 font-semibold">
              <span>{c.nome}: {rgb[i]}</span>
              <span className="font-mono text-sm font-normal text-suave">{rgb[i].toString(2).padStart(8, '0')}</span>
            </label>
            <input id={`${base}${i}`} type="range" min={0} max={255} value={rgb[i]}
              onChange={(e) => setRgb(rgb.map((v, j) => (j === i ? Number(e.target.value) : v)))}
              className="h-11 w-full cursor-pointer" style={{ accentColor: c.cor }} />
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Os 24 bits dessa cor: <span className="font-mono text-coral">{rgb.map((v) => v.toString(2).padStart(8, '0')).join(' ')}</span>.
        Dá para fazer 256 × 256 × 256 = <strong>16.777.216</strong> cores diferentes.
      </p>
    </div>
  )
}
