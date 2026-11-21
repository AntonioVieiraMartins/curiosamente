import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Uma versão com vantagem s cresce de p para p(1+s)/(1+p·s) a cada geração
const X = (g: number, G: number) => 20 + (g / G) * 190
const Y = (p: number) => 105 - p * 95

export default function CurvaDaSelecao() {
  const [s, setS] = useState(0.1)
  const [p0, setP0] = useState(1)
  const G = 200
  const serie: number[] = [p0 / 100]
  for (let g = 1; g <= G; g++) { const p = serie[g - 1]; serie.push((p * (1 + s)) / (1 + p * s)) }
  const quando = (alvo: number) => serie.findIndex((v) => v >= alvo)
  const g50 = quando(0.5)
  const g90 = quando(0.9)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma vantagem pequena, muitas gerações</p>
      <svg viewBox="0 0 220 125" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Frequência da variante depois de ${G} gerações: ${Math.round(serie[G] * 100)}%`}>
        <line x1="20" y1="105" x2="212" y2="105" stroke="var(--color-borda)" />
        <line x1="20" y1="10" x2="20" y2="105" stroke="var(--color-borda)" />
        <text x="22" y="14" fontSize="7" fill="var(--color-suave)">100%</text>
        <text x="22" y="116" fontSize="7" fill="var(--color-suave)">0 a {G} gerações</text>
        <polyline fill="none" stroke="var(--color-azul)" strokeWidth="2" points={serie.map((v, g) => `${X(g, G)},${Y(v)}`).join(' ')} />
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Vantagem de sobrevivência e reprodução (%)" valor={Math.round(s * 100)} min={1} max={50} passo={1} aoMudar={(v) => setS(v / 100)} />
        <Deslizante rotulo="Quantos indivíduos têm a variante no início (%)" valor={p0} min={1} max={50} passo={1} aoMudar={setP0} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {g50 >= 0 ? <>Metade da população tem a variante na geração <strong>{g50}</strong>. </> : 'Em 200 gerações a variante ainda não chega a metade. '}
        {g90 >= 0 ? <>Passa de 90% na geração <strong>{g90}</strong>.</> : 'Ainda não passou de 90%.'}
        {' '}Uma vantagem de poucos por cento parece pequena, mas, repetida geração após geração, muda a população inteira.
      </p>
    </div>
  )
}
