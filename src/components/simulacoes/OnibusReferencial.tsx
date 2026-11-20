import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Obs = 'passageiro' | 'calcada' | 'motorista'

// Uma mesma cena descrita por três observadores: quem está parado e quem se move depende de quem olha
const OBS: { id: Obs; nome: string; frase: (v: number) => string[] }[] = [
  {
    id: 'passageiro',
    nome: 'Passageiro sentado',
    frase: (v) => [`Motorista: parado (está ao lado, sentado como você).`, `Poste: se afasta para trás a ${v} km/h.`, `Você: parado.`],
  },
  {
    id: 'calcada',
    nome: 'Pessoa na calçada',
    frase: (v) => [`Motorista: se move para a frente a ${v} km/h.`, `Poste: parado.`, `Passageiro: se move para a frente a ${v} km/h.`],
  },
  {
    id: 'motorista',
    nome: 'Motorista',
    frase: (v) => [`Passageiro: parado (está no mesmo ônibus).`, `Poste: se afasta para trás a ${v} km/h.`, `Calçada: corre para trás a ${v} km/h.`],
  },
]

export default function OnibusReferencial() {
  const [obs, setObs] = useState<Obs>('passageiro')
  const [v, setV] = useState(40)
  const atual = OBS.find((o) => o.id === obs)!
  // Quem observa está no centro da tela: o resto se desloca para a esquerda ou para a direita
  const calcada = obs === 'calcada'
  const posteX = calcada ? 40 : 40 - v * 0.5
  const onibusX = calcada ? v * 1.5 : 60

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem se move depende de quem olha</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o observador">
        {OBS.map((o) => (
          <button key={o.id} type="button" aria-pressed={obs === o.id} onClick={() => setObs(o.id)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${obs === o.id ? 'border-texto bg-texto text-white' : 'border-borda'}`}>{o.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 400 140" className="mt-3 w-full rounded-2xl bg-fundo" role="img" aria-label={`Visto por: ${atual.nome}`}>
        <line x1={0} y1={110} x2={400} y2={110} stroke="var(--color-texto)" strokeOpacity="0.5" />
        <g transform={`translate(${posteX},0)`}>
          <rect x={0} y={50} width={6} height={60} fill="var(--color-suave)" />
          <circle cx={3} cy={46} r={6} fill="var(--color-amarelo)" />
          <text x={-8} y={128} fontSize="11" fill="var(--color-suave)">poste</text>
        </g>
        <g transform={`translate(${onibusX},0)`}>
          <rect x={130} y={62} width={120} height={48} rx={8} fill="var(--color-azul)" />
          <rect x={140} y={70} width={22} height={16} fill="white" fillOpacity="0.85" />
          <rect x={170} y={70} width={22} height={16} fill="white" fillOpacity="0.85" />
          <rect x={200} y={70} width={22} height={16} fill="white" fillOpacity="0.85" />
          <circle cx={156} cy={112} r={8} fill="var(--color-texto)" />
          <circle cx={226} cy={112} r={8} fill="var(--color-texto)" />
          <text x={190} y={101} fontSize="11" fill="white" textAnchor="middle">ônibus</text>
        </g>
        {calcada && <text x={20} y={30} fontSize="12" fill="var(--color-texto)">→ o ônibus avança {v} km/h</text>}
        {!calcada && <text x={20} y={30} fontSize="12" fill="var(--color-texto)">{'← o poste passa para trás'}</text>}
      </svg>
      <label className="mt-3 block text-sm font-semibold">
        Velocidade do ônibus: {v} km/h
        <input type="range" min={10} max={80} step={10} value={v} onChange={(e) => setV(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" />
      </label>
      <ul aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
        <li className="font-semibold">Para o(a) {atual.nome.toLowerCase()}:</li>
        {atual.frase(v).map((f) => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}
