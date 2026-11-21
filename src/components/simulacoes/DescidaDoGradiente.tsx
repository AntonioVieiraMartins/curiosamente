import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Aprender = descer a ladeira do erro, em passos. Erro(w) = (w - 3)², o melhor w é 3.
const X = (w: number) => 110 + w * 14
const Y = (e: number) => 130 - Math.min(e, 110) * 1.05
const erro = (w: number) => (w - 3) ** 2

export default function DescidaDoGradiente() {
  const [taxa, setTaxa] = useState(0.2)
  const [trilha, setTrilha] = useState<number[]>([-4])
  const w = trilha[trilha.length - 1]
  // Derivada de (w - 3)² é 2(w - 3): a ladeira. O passo vai no sentido contrário a ela.
  const passo = (n: number) => {
    const nova = [...trilha]
    for (let k = 0; k < n; k++) {
      const atual = nova[nova.length - 1]
      nova.push(atual - taxa * 2 * (atual - 3))
    }
    setTrilha(nova.slice(-40))
  }
  const curva = Array.from({ length: 61 }, (_, k) => -6 + k * 0.25).map((x) => `${X(x)},${Y(erro(x))}`).join(' ')
  const aprendeu = Math.abs(w - 3) < 0.05
  const divergiu = Math.abs(w - 3) > 12
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Descendo a ladeira do erro</p>
      <svg viewBox="0 0 220 140" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Valor atual ${w.toFixed(2)}, erro ${erro(w).toFixed(2)}`}>
        <line x1="10" y1="130" x2="215" y2="130" stroke="var(--color-borda)" />
        <polyline fill="none" stroke="var(--color-texto)" strokeOpacity="0.6" strokeWidth="2" points={curva} />
        {trilha.map((v, k) => Math.abs(v) < 8 && <circle key={k} cx={X(v)} cy={Y(erro(v))} r={k === trilha.length - 1 ? 5 : 2.5} fill={k === trilha.length - 1 ? 'var(--color-coral)' : 'var(--color-azul)'} />)}
        <text x={X(3)} y="140" textAnchor="middle" fontSize="7" fill="var(--color-verde)">melhor valor</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Tamanho do passo (taxa de aprendizado)" valor={taxa} min={0.05} max={1.1} passo={0.05} aoMudar={setTaxa} /></div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => passo(1)} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Dar 1 passo</button>
        <button type="button" onClick={() => passo(10)} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Dar 10 passos</button>
        <button type="button" onClick={() => setTrilha([-4])} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Recomeçar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Valor atual: <strong>{w.toFixed(2).replace('.', ',')}</strong>. Erro: {erro(w).toFixed(2).replace('.', ',')}.
        {aprendeu ? ' Chegou ao fundo do vale: o erro é quase zero.' : ''}
        {divergiu ? ' O passo foi grande demais: ele pula de um lado para o outro e cada vez fica mais longe. Diminua o passo e recomece.' : ''}
        {!aprendeu && !divergiu && taxa >= 1 ? ' Com passo 1 ele só pula de um lado a outro, sem nunca chegar.' : ''}
        {!aprendeu && !divergiu && taxa < 0.1 ? ' Passo pequeno: seguro, mas lento.' : ''}
      </p>
    </div>
  )
}
