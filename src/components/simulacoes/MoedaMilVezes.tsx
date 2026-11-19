import { useState } from 'react'
import { cartao } from '../ui/estilos'

// O sorteio fica fora do componente (o React não aceita acaso durante a montagem da tela)
function lancar(qtd: number, cara0: number, total0: number) {
  let cara = cara0
  const passo = Math.max(1, Math.floor(qtd / 20))
  const pts: number[] = []
  for (let i = 1; i <= qtd; i++) {
    if (Math.random() < 0.5) cara++
    if (i % passo === 0 || i === qtd) pts.push(cara / (total0 + i))
  }
  return { cara, pts }
}

export default function MoedaMilVezes() {
  const [total, setTotal] = useState(0)
  const [caras, setCaras] = useState(0)
  const [pontos, setPontos] = useState<number[]>([])

  const jogar = (q: number) => {
    const r = lancar(q, caras, total)
    setTotal((t) => t + q)
    setCaras(r.cara)
    setPontos((p) => [...p, ...r.pts].slice(-120))
  }
  const zerar = () => { setTotal(0); setCaras(0); setPontos([]) }
  const freq = total > 0 ? caras / total : 0
  const caminho = pontos.map((p, i) => `${pontos.length > 1 ? (i / (pontos.length - 1)) * 200 : 100},${100 - p * 100}`).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lançando moedas</p>
      <svg viewBox="0 0 200 100" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label="Gráfico da porcentagem de caras ao longo dos lançamentos">
        <line x1={0} y1={50} x2={200} y2={50} stroke="var(--color-verde)" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x={3} y={46} fontSize="7" fill="var(--color-verde)">50%</text>
        {pontos.length > 1 && <polyline points={caminho} fill="none" stroke="var(--color-azul)" strokeWidth="2" />}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {[1, 10, 100, 1000].map((q) => (
          <button key={q} type="button" onClick={() => jogar(q)} className="min-h-11 rounded-full border-2 border-azul px-4 text-sm font-semibold text-azul">+ {q.toLocaleString('pt-BR')}</button>
        ))}
        <button type="button" onClick={zerar} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Zerar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total === 0 ? 'Lance a moeda. O gráfico mostra a porcentagem de caras: no começo balança, depois se aproxima de 50%.' : (
          <>Lançamentos: {total.toLocaleString('pt-BR')}. Caras: {caras.toLocaleString('pt-BR')}, coroas: {(total - caras).toLocaleString('pt-BR')}. Porcentagem de caras: <strong>{(freq * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</strong>.</>
        )}
      </p>
    </div>
  )
}
