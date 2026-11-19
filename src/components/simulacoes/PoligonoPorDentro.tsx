import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes: Record<number, string> = { 3: 'triângulo', 4: 'quadrilátero', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octógono', 9: 'eneágono', 10: 'decágono', 11: 'undecágono', 12: 'dodecágono' }

// Por dentro do polígono: triângulos a partir de um vértice (soma dos ângulos) e todas as diagonais.
export default function PoligonoPorDentro() {
  const [n, setN] = useState(5)
  const [modo, setModo] = useState<'tri' | 'diag'>('tri')
  const id = useId()
  const pts = Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n
    return [110 + 85 * Math.cos(a), 100 + 85 * Math.sin(a)]
  })
  const linhas: [number, number][] = []
  if (modo === 'tri') for (let j = 2; j <= n - 2; j++) linhas.push([0, j])
  else for (let i = 0; i < n; i++) for (let j = i + 2; j < n; j++) if (!(i === 0 && j === n - 1)) linhas.push([i, j])
  const soma = (n - 2) * 180
  const diag = (n * (n - 3)) / 2
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por dentro do polígono</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Número de lados: <span className="text-coral">{n}</span> ({nomes[n]})</label>
      <input id={id} type="range" min={3} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-1 flex gap-2">
        {([['tri', 'Dividir em triângulos'], ['diag', 'Todas as diagonais']] as const).map(([m, t]) => (
          <button key={m} type="button" aria-pressed={modo === m} onClick={() => setModo(m)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${modo === m ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{t}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 200" className="mt-2 w-full max-w-xs" role="img" aria-label={`${nomes[n]} com ${linhas.length} diagonais desenhadas`}>
        <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="var(--color-fundo)" stroke="var(--color-azul)" strokeWidth="3" strokeLinejoin="round" />
        {linhas.map(([i, j]) => (
          <line key={`${i}-${j}`} x1={pts[i][0]} y1={pts[i][1]} x2={pts[j][0]} y2={pts[j][1]} stroke="var(--color-coral)" strokeWidth="1.8" />
        ))}
        {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="var(--color-azul)" />)}
      </svg>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        {modo === 'tri'
          ? <>Do mesmo vértice saem <strong>{n - 3}</strong> diagonais e o {nomes[n]} se divide em <strong>{n - 2}</strong> triângulos. Cada triângulo tem 180°, então a soma dos ângulos internos é {n - 2} × 180° = <strong>{soma}°</strong>.</>
          : <>Cada vértice liga com {n - 3} outros (não conta ele mesmo nem os dois vizinhos). Como cada diagonal tem duas pontas, o total é {n} × {n - 3} ÷ 2 = <strong>{diag}</strong> diagonais.</>}
        {' '}Se for regular, cada ângulo mede {soma} ÷ {n} = <strong>{(soma / n).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}°</strong>.
      </p>
    </div>
  )
}
