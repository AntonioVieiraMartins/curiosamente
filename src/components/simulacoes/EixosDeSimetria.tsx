import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Eixos de simetria: linhas que dobram a figura em duas metades que se encaixam
const formas = [
  { nome: 'Triângulo equilátero', n: 3, eixos: 3 },
  { nome: 'Quadrado', n: 4, eixos: 4 },
  { nome: 'Pentágono regular', n: 5, eixos: 5 },
  { nome: 'Hexágono regular', n: 6, eixos: 6 },
  { nome: 'Círculo', n: 0, eixos: Infinity },
] as const

export default function EixosDeSimetria() {
  const [i, setI] = useState(1)
  const f = formas[i]
  const R = 70
  // Polígonos com número par de lados ficam "em pé" (lados na horizontal e vertical)
  const off = f.n > 0 && f.n % 2 === 0 ? Math.PI / f.n : 0
  const pts = f.n > 0 ? Array.from({ length: f.n }, (_, k) => {
    const a = (k / f.n) * 2 * Math.PI - Math.PI / 2 + off
    return [100 + R * Math.cos(a), 100 + R * Math.sin(a)] as [number, number]
  }) : []
  const linhas = f.n > 0
    ? pts.map(([x, y]) => [x, y, 200 - x, 200 - y]).slice(0, f.n % 2 === 0 ? f.n / 2 : f.n) // do vértice ao centro e além (ou meio, nos pares)
    : [0, 45, 90, 135].map((g) => [100 + R * Math.cos((g * Math.PI) / 180), 100 + R * Math.sin((g * Math.PI) / 180), 100 - R * Math.cos((g * Math.PI) / 180), 100 - R * Math.sin((g * Math.PI) / 180)])
  // Polígonos pares precisam também dos eixos que passam pelos meios dos lados
  const extras = f.n > 0 && f.n % 2 === 0
    ? Array.from({ length: f.n / 2 }, (_, k) => {
        const a = ((k + 0.5) / f.n) * 2 * Math.PI - Math.PI / 2 + off
        const r = R * Math.cos(Math.PI / f.n)
        return [100 + r * Math.cos(a), 100 + r * Math.sin(a), 100 - r * Math.cos(a), 100 - r * Math.sin(a)]
      })
    : []
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Eixos de simetria</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a figura">
        {formas.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={i === k} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-[15px] font-semibold ${i === k ? 'border-azul bg-azul-claro' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 200" role="img" aria-label={`${f.nome} com seus eixos de simetria`} className="mx-auto mt-2 h-auto w-full max-w-[220px]">
        {f.n > 0
          ? <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="var(--color-azul-claro)" stroke="var(--color-azul)" strokeWidth={3} strokeLinejoin="round" />
          : <circle cx={100} cy={100} r={R} fill="var(--color-azul-claro)" stroke="var(--color-azul)" strokeWidth={3} />}
        {[...linhas, ...extras].map(([x1, y1, x2, y2], k) => (
          <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-coral)" strokeWidth={1.8} strokeDasharray="5 3" />
        ))}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {f.nome}: <b>{f.eixos === Infinity ? 'infinitos eixos' : `${f.eixos} eixos de simetria`}</b>.{' '}
        {f.eixos === Infinity ? 'Qualquer reta que passe pelo centro dobra o círculo em duas metades iguais.' : `Num polígono regular de ${f.n} lados, o número de eixos é igual ao número de lados.`}
      </p>
    </div>
  )
}
