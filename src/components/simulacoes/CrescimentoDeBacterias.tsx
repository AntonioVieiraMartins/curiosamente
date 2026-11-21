import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Divisão binária: a cada geração, o número dobra. Na vida real o alimento acaba antes.
export default function CrescimentoDeBacterias() {
  const [g, setG] = useState(20)
  const [h, setH] = useState(6)
  const geracoes = (h * 60) / g
  const n = 2 ** geracoes
  const largura = Math.min(100, (Math.log10(Math.max(n, 1)) / 12) * 100)
  const fmt = (v: number) => (v < 1e6 ? Math.round(v).toLocaleString('pt-BR') : v.toExponential(2).replace('e+', ' × 10^').replace('.', ','))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Crescimento de bactérias (começando com 1)</p>
      <div className="mt-3 h-5 overflow-hidden rounded-full bg-fundo" role="img" aria-label={`Cerca de ${fmt(n)} bactérias`}>
        <div className="h-full bg-verde" style={{ width: `${largura}%` }} />
      </div>
      <p className="mt-1 text-sm text-suave">A barra enche a cada multiplicação por 10 (cheia = 1 trilhão).</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Minutos por geração" valor={g} min={10} max={120} passo={10} aoMudar={setG} />
        <Deslizante rotulo="Horas passadas" valor={h} min={0} max={24} passo={1} aoMudar={setH} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {h} {h === 1 ? 'hora' : 'horas'}, com uma divisão a cada {g} min, são {Math.floor(geracoes * 100) / 100} gerações e cerca de <strong>{fmt(n)}</strong> bactérias.
        {n > 1e12 ? ' Na vida real, esse número nunca chega: faltam comida e espaço, e o crescimento para.' : ''}
      </p>
    </div>
  )
}
