import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// f(x) = x² - 4x + c: subir o c sobe a parábola e as raízes vão sumindo
export default function QuantasRaizes() {
  const [c, setC] = useState(0)
  const id = useId()
  const delta = 16 - 4 * c
  const raizes = delta > 0 ? [2 - Math.sqrt(delta) / 2, 2 + Math.sqrt(delta) / 2] : delta === 0 ? [2] : []
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas vezes a parábola toca o eixo x?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">f(x) = x² - 4x + c, com c = <b>{f2(c)}</b>
        <input id={id} type="range" min={-2} max={8} step={0.5} value={c} onChange={(e) => setC(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao curvas={[{ f: (x) => x * x - 4 * x + c, cor: 'var(--color-azul)' }]} xmin={-2} xmax={6} ymin={-6} ymax={12} pontos={raizes.map((r) => ({ x: r, y: 0, cor: 'var(--color-verde)', rotulo: f2(r) }))} rotuloAlt="Parábola com zero, um ou dois pontos no eixo x" />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O discriminante é Δ = b² - 4ac = 16 - 4 · {f2(c)} = <b>{f2(delta)}</b>. {delta > 0 ? 'Δ positivo: duas raízes reais diferentes.' : delta === 0 ? 'Δ zero: uma única raiz (a parábola encosta no eixo e volta).' : 'Δ negativo: nenhuma raiz real (a parábola não chega ao eixo).'}
      </p>
    </div>
  )
}
