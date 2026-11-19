import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Agulha = { x: number; y: number; ang: number; cruza: boolean }

// O sorteio fica fora do componente (o React não aceita acaso durante a montagem da tela)
function sortear(qtd: number) {
  let c = 0
  const novas: Agulha[] = []
  for (let i = 0; i < qtd; i++) {
    const ang = Math.random() * Math.PI
    const y = Math.random() * 40 // posição do centro (linhas a cada 40)
    const x = 20 + Math.random() * 160
    const dist = Math.min(y, 40 - y)
    const cruza = dist <= (40 / 2) * Math.sin(ang)
    if (cruza) c++
    if (i >= qtd - 12) novas.push({ x, y, ang, cruza })
  }
  return { c, novas }
}

// Agulha do mesmo tamanho que a distância entre as linhas: chance de cruzar = 2 ÷ π.
export default function AgulhasDeBuffon() {
  const [total, setTotal] = useState(0)
  const [cruzam, setCruzam] = useState(0)
  const [ultimas, setUltimas] = useState<Agulha[]>([])

  const jogar = (qtd: number) => {
    const { c, novas } = sortear(qtd)
    setTotal((t) => t + qtd)
    setCruzam((k) => k + c)
    setUltimas(novas)
  }

  const reiniciar = () => { setTotal(0); setCruzam(0); setUltimas([]) }
  const estimativa = cruzam > 0 ? (2 * total) / cruzam : 0
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Jogando agulhas</p>
      <svg viewBox="0 0 200 80" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Linhas paralelas com agulhas jogadas ao acaso">
        {[0, 40, 80].map((y) => <line key={y} x1={0} y1={y} x2={200} y2={y} stroke="var(--color-borda)" strokeWidth="1.5" />)}
        {ultimas.map((a, i) => {
          const dx = (20 * Math.cos(a.ang))
          const dy = (20 * Math.sin(a.ang))
          const cy = a.y
          return <line key={i} x1={a.x - dx} y1={cy - dy} x2={a.x + dx} y2={cy + dy} stroke={a.cruza ? 'var(--color-coral)' : 'var(--color-azul)'} strokeWidth="2" strokeLinecap="round" />
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {[10, 100, 1000, 10000].map((q) => (
          <button key={q} type="button" onClick={() => jogar(q)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">+ {q.toLocaleString('pt-BR')}</button>
        ))}
        <button type="button" onClick={reiniciar} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0 ? 'Jogue agulhas e veja o π aparecer. Vermelhas cruzam uma linha; azuis, não.' : (
          <>Jogadas: {total.toLocaleString('pt-BR')}. Cruzaram: {cruzam.toLocaleString('pt-BR')}. Estimativa de π ≈ 2 × {total.toLocaleString('pt-BR')} ÷ {cruzam.toLocaleString('pt-BR')} = <strong>{estimativa.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}</strong>.</>
        )}
      </p>
    </div>
  )
}
