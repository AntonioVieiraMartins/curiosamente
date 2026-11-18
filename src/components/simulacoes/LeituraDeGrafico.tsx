import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Treino de leitura: perguntas sobre um gráfico de barras de visitas à biblioteca
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
const vis = [40, 25, 30, 55, 50]
const perguntas = [
  { p: 'Em qual dia houve mais visitas?', ops: ['Seg', 'Qui', 'Sex'], certa: 'Qui', porque: 'A barra mais alta é a de quinta: 55 visitas.' },
  { p: 'Quantas visitas houve na terça?', ops: ['25', '30', '40'], certa: '25', porque: 'A barra da terça chega a 25.' },
  { p: 'Quantas visitas a mais na quinta do que na quarta?', ops: ['15', '25', '5'], certa: '25', porque: '55 − 30 = 25 visitas a mais.' },
  { p: 'Qual é o total de visitas da semana?', ops: ['200', '180', '220'], certa: '200', porque: '40 + 25 + 30 + 55 + 50 = 200.' },
  { p: 'Quais dias tiveram 50 ou mais visitas?', ops: ['Qui e Sex', 'Seg e Qui', 'Só Qui'], certa: 'Qui e Sex', porque: 'Quinta (55) e sexta (50) chegam a 50 ou mais.' },
]

export default function LeituraDeGrafico() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const q = perguntas[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Leia o gráfico ({i + 1} de {perguntas.length})</p>
      <svg viewBox="0 0 320 150" role="img" aria-label="Gráfico de barras: visitas à biblioteca de segunda a sexta" className="mt-2 h-auto w-full">
        {[0, 20, 40, 60].map((g) => (
          <g key={g}>
            <line x1={30} y1={120 - g * 1.6} x2={310} y2={120 - g * 1.6} stroke="var(--color-borda)" />
            <text x={26} y={123 - g * 1.6} textAnchor="end" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>{g}</text>
          </g>
        ))}
        {dias.map((d, k) => (
          <g key={d}>
            <rect x={48 + k * 54} y={120 - vis[k] * 1.6} width={36} height={vis[k] * 1.6} rx={3} fill="var(--color-azul)" />
            <text x={66 + k * 54} y={136} textAnchor="middle" style={{ fontSize: 10, fill: 'var(--color-suave)' }}>{d}</text>
          </g>
        ))}
      </svg>
      <p className="mt-2 text-lg font-semibold">{q.p}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {q.ops.map((o) => (
          <button key={o} type="button" disabled={resp !== null} onClick={() => setResp(o)}
            className={`min-h-11 rounded-full border-2 px-5 font-bold ${resp === o ? (o === q.certa ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{o}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 min-h-[3rem] rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Olhe o título, os eixos e as barras.' : `${resp === q.certa ? 'Certo! ' : `Ainda não: é ${q.certa}. `}${q.porque}`}
      </p>
      {resp !== null && (
        <button type="button" onClick={() => { setResp(null); setI((i + 1) % perguntas.length) }} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Próxima</button>
      )}
    </div>
  )
}
