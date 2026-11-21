import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Tamanho do bico segue uma curva em sino (média 10, desvio 1: números inventados). Só quem tem bico de pelo menos "corte" se reproduz.
const MEDIA = 10
const DP = 1
const gauss = (x: number) => Math.exp(-0.5 * ((x - MEDIA) / DP) ** 2) / (DP * Math.sqrt(2 * Math.PI))
// Função erro aproximada, para a fração que passa do corte
const erf = (x: number) => {
  const t = 1 / (1 + 0.3275911 * Math.abs(x))
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)
  return x >= 0 ? y : -y
}
const X = (x: number) => 110 + (x - MEDIA) * 28
const Y = (y: number) => 105 - y * 200

export default function SelecaoNoBico() {
  const [corte, setCorte] = useState(10.5)
  const [h2, setH2] = useState(0.5)
  const z = (corte - MEDIA) / DP
  const fracao = 0.5 * (1 - erf(z / Math.SQRT2))
  const mediaSobr = fracao > 0.0001 ? MEDIA + (DP * gauss(corte) * DP) / fracao : corte
  const S = mediaSobr - MEDIA
  const R = h2 * S
  const caminho = (m: number) => Array.from({ length: 81 }, (_, k) => 6 + k * 0.1).map((x) => `${X(x)},${Y(Math.exp(-0.5 * ((x - m) / DP) ** 2) / (DP * Math.sqrt(2 * Math.PI)))}`).join(' ')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Seleção no tamanho do bico (dados inventados)</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Média do bico passa de ${MEDIA} para ${(MEDIA + R).toFixed(2)} milímetros`}>
        <line x1="10" y1="105" x2="212" y2="105" stroke="var(--color-borda)" />
        <rect x={X(corte)} y="10" width={Math.max(0, 212 - X(corte))} height="95" fill="var(--color-verde)" fillOpacity="0.15" />
        <polyline fill="none" stroke="var(--color-texto)" strokeWidth="2" points={caminho(MEDIA)} />
        <polyline fill="none" stroke="var(--color-coral)" strokeWidth="2" strokeDasharray="4 3" points={caminho(MEDIA + R)} />
        <line x1={X(corte)} y1="10" x2={X(corte)} y2="105" stroke="var(--color-verde)" strokeWidth="2" />
        <text x="12" y="117" fontSize="7" fill="var(--color-suave)">tamanho do bico (mm). Preto: pais. Tracejado: filhotes.</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Só se reproduz quem tem bico de pelo menos (mm)" valor={corte} min={8} max={13} passo={0.5} aoMudar={setCorte} />
        <Deslizante rotulo="Herdabilidade (quanto o filho copia dos pais)" valor={h2} min={0} max={1} passo={0.1} aoMudar={setH2} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Passam do corte: <strong>{Math.round(fracao * 100)}%</strong> das aves. A média delas é {mediaSobr.toFixed(2).replace('.', ',')} mm. Média dos filhotes: <strong>{(MEDIA + R).toFixed(2).replace('.', ',')} mm</strong> (mudança de {R.toFixed(2).replace('.', ',')} mm).
        {h2 === 0 ? ' Sem herança, nada muda: seleção só funciona com variação herdada.' : ''}
      </p>
    </div>
  )
}
