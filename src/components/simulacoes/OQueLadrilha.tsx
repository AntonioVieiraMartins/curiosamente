import { useState } from 'react'
import { cartao } from '../ui/estilos'

const nomes: Record<number, string> = { 3: 'triângulo', 4: 'quadrado', 5: 'pentágono', 6: 'hexágono', 7: 'heptágono', 8: 'octógono' }

// Para cobrir o chão sem buracos, os ângulos em volta de cada ponto precisam somar exatamente 360°.
export default function OQueLadrilha() {
  const [n, setN] = useState(6)
  const ang = ((n - 2) * 180) / n
  const vezes = 360 / ang
  const inteiro = Math.abs(vezes - Math.round(vezes)) < 1e-9
  const cabem = Math.floor(vezes + 1e-9)
  const cx = 110
  const cy = 100
  const R = 80
  const fatia = (de: number, ate: number) => {
    const a1 = ((de - 90) * Math.PI) / 180
    const a2 = ((ate - 90) * Math.PI) / 180
    return `M ${cx} ${cy} L ${cx + R * Math.cos(a1)} ${cy + R * Math.sin(a1)} A ${R} ${R} 0 ${ate - de > 180 ? 1 : 0} 1 ${cx + R * Math.cos(a2)} ${cy + R * Math.sin(a2)} Z`
  }
  const cores = ['var(--color-azul)', 'var(--color-coral)']
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem ladrilha o chão?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {[3, 4, 5, 6, 7, 8].map((v) => (
          <button key={v} type="button" aria-pressed={v === n} onClick={() => setN(v)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${v === n ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{nomes[v]}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 200" className="mt-2 w-full max-w-xs" role="img" aria-label={`${cabem} ângulos de ${ang.toFixed(1)} graus em volta de um ponto`}>
        <circle cx={cx} cy={cy} r={R} fill="var(--color-amarelo)" opacity="0.5" />
        {Array.from({ length: cabem }, (_, i) => (
          <path key={i} d={fatia(i * ang, (i + 1) * ang)} fill={cores[i % 2]} stroke="white" strokeWidth="2" />
        ))}
      </svg>
      <p aria-live="polite" className={`mt-2 rounded-2xl p-4 text-[15px] ${inteiro ? 'bg-verde text-white' : 'bg-amarelo'}`}>
        Cada ângulo do {nomes[n]} regular mede <strong>{ang.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}°</strong>. Em volta de um ponto cabem 360° ÷ {ang.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}° = <strong>{vezes.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</strong>.{' '}
        {inteiro ? `Dá um número inteiro (${cabem}): o ${nomes[n]} ladrilha o plano sem deixar buracos.` : `Não dá inteiro: sobra um buraco (a parte amarela). O ${nomes[n]} sozinho não ladrilha.`}
      </p>
    </div>
  )
}
