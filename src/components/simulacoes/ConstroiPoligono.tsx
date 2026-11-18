import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Polígono regular de n lados: nome, vértices e soma dos ângulos internos (n − 2) × 180°
const nomes: Record<number, string> = { 3: 'triângulo', 4: 'quadrilátero (quadrado)', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octógono', 9: 'eneágono', 10: 'decágono', 12: 'dodecágono' }

export default function ConstroiPoligono() {
  const [n, setN] = useState(5)
  const id = useId()
  const pts = Array.from({ length: n }, (_, k) => {
    const a = (k / n) * 2 * Math.PI - Math.PI / 2
    return `${100 + 80 * Math.cos(a)},${100 + 80 * Math.sin(a)}`
  }).join(' ')
  const soma = (n - 2) * 180
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos lados?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Número de lados: <b>{n}</b>
        <input id={id} type="range" min={3} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
      <svg viewBox="0 0 200 200" role="img" aria-label={`Polígono regular de ${n} lados`} className="mx-auto mt-2 h-auto w-full max-w-[220px]">
        <polygon points={pts} fill="var(--color-azul-claro)" stroke="var(--color-azul)" strokeWidth={3} strokeLinejoin="round" />
        {pts.split(' ').map((p, k) => { const [x, y] = p.split(',').map(Number); return <circle key={k} cx={x} cy={y} r={4} fill="var(--color-amarelo)" stroke="var(--color-amarelo-escuro)" /> })}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n} lados, {n} vértices e {n} ângulos: é um <b>{nomes[n] ?? `polígono de ${n} lados`}</b>.<br />
        Soma dos ângulos internos: ({n} − 2) × 180° = <b>{soma}°</b>. Se for regular, cada ângulo mede {soma} ÷ {n} = <b>{String(Number((soma / n).toFixed(1))).replace('.', ',')}°</b>.
      </p>
    </div>
  )
}
