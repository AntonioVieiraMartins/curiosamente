import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Os mesmos números, dois eixos: começando em zero a diferença é pequena; cortando o eixo, parece enorme
const dados = [{ n: 'Loja A', v: 92 }, { n: 'Loja B', v: 95 }]

export default function EixoQueEnganta() {
  const [corta, setCorta] = useState(false)
  const base = corta ? 90 : 0
  const topo = 100
  const alt = (v: number) => ((v - base) / (topo - base)) * 100
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O eixo que engana</p>
      <p className="mt-2 text-[15px]">Clientes satisfeitos (em %) em duas lojas. O eixo vertical começa em <b>{base}</b>.</p>
      <div className="mt-2 flex gap-2" role="group" aria-label="Onde o eixo começa">
        <button type="button" aria-pressed={!corta} onClick={() => setCorta(false)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${!corta ? 'border-azul bg-azul-claro' : 'border-borda'}`}>Eixo começa em 0</button>
        <button type="button" aria-pressed={corta} onClick={() => setCorta(true)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${corta ? 'border-coral bg-fundo' : 'border-borda'}`}>Eixo começa em 90</button>
      </div>
      <svg viewBox="0 0 260 150" role="img" aria-label={`Gráfico de barras: Loja A 92 e Loja B 95, com o eixo começando em ${base}`} className="mt-3 h-auto w-full max-w-[320px]">
        <line x1={30} y1={120} x2={250} y2={120} stroke="var(--color-suave)" />
        <text x={26} y={124} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>{base}</text>
        <text x={26} y={24} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>{topo}</text>
        {dados.map((d, i) => {
          const h = (alt(d.v) / 100) * 96
          return (
            <g key={d.n}>
              <rect x={60 + i * 90} y={120 - h} width={60} height={h} rx={3} fill={i === 0 ? 'var(--color-azul)' : 'var(--color-amarelo)'} />
              <text x={90 + i * 90} y={114 - h} textAnchor="middle" style={{ fontSize: 11, fontWeight: 600, fill: 'var(--color-texto)' }}>{d.v}</text>
              <text x={90 + i * 90} y={138} textAnchor="middle" style={{ fontSize: 10, fill: 'var(--color-suave)' }}>{d.n}</text>
            </g>
          )
        })}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {corta
          ? 'Com o eixo cortado em 90, a barra B parece mais que o DOBRO da A (altura 5 contra 2). Mas os números são 92 e 95: só 3 pontos de diferença!'
          : 'Com o eixo começando em 0, as barras quase empatam, e é isso mesmo: 92 e 95 são valores parecidos. Em gráfico de barras, o 0 é a base honesta.'}
      </p>
    </div>
  )
}
