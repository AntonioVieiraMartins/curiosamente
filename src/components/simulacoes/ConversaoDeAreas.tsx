import { useState } from 'react'
import { cartao } from '../ui/estilos'

const LADOS = [1, 2, 3, 10, 50, 100]

// 1 m = 100 cm, mas 1 m² = 100 × 100 = 10.000 cm²
export default function ConversaoDeAreas() {
  const [lado, setLado] = useState(2)
  const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 4 })
  const area = lado * lado
  const mostrar = Math.min(lado, 5)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quadrados e unidades</p>
      <div className="mt-3 flex justify-center">
        <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${mostrar}, 2rem)` }} role="img" aria-label={`Quadrado de ${lado} metros de lado`}>
          {Array.from({ length: mostrar * mostrar }, (_, i) => <span key={i} className="h-8 w-8 rounded bg-azul/40" />)}
        </div>
      </div>
      {lado > 5 && <p className="mt-1 text-center text-xs text-suave">(mostrando só 5 × 5 dos {fmt(area)} quadradinhos de 1 m²)</p>}
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Lado do quadrado em metros">
        {LADOS.map((l) => (
          <button key={l} type="button" aria-pressed={l === lado} onClick={() => setLado(l)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${l === lado ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{l} m</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Lado de {lado} m = {lado * 100} cm. Área = {lado} × {lado} = <strong>{fmt(area)} m²</strong>. Em centímetros: {lado * 100} × {lado * 100} = <strong>{fmt(area * 10000)} cm²</strong>. Em hectares: {fmt(area / 10000)} ha.
      </p>
    </div>
  )
}
