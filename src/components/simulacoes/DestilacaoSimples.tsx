import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Versão simplificada: cada líquido ferve na sua temperatura e vira coleta quando passa dela
const MISTURAS = [
  { nome: 'Água + sal', a: { nome: 'água', pe: 100 }, b: null as null | { nome: string; pe: number }, resto: 'sal (fica no balão)' },
  { nome: 'Álcool + água', a: { nome: 'álcool', pe: 78 }, b: { nome: 'água', pe: 100 }, resto: '' },
]

export default function DestilacaoSimples() {
  const [m, setM] = useState(0)
  const [T, setT] = useState(25)
  const mis = MISTURAS[m]
  const fa = T >= mis.a.pe
  const fb = mis.b ? T >= mis.b.pe : false
  const coletado = [fa ? mis.a.nome : null, fb ? mis.b?.nome : null].filter(Boolean).join(' e ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Destilação (simplificada)</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Mistura">
        {MISTURAS.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === m} onClick={() => { setM(k); setT(25) }}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${k === m ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 90" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Balão sendo aquecido, tubo condensador e frasco de coleta">
        <circle cx={45} cy={55} r={26} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <path d="M 21 58 A 26 26 0 0 0 69 58 Z" fill="var(--color-azul)" fillOpacity={fa && !mis.b ? 0.15 : 0.45} />
        <rect x={39} y={14} width={12} height={16} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <line x1={51} y1={20} x2={140} y2={36} stroke="var(--color-texto)" strokeWidth="2.5" />
        <rect x={150} y={52} width={28} height={30} rx={3} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={152} y={82 - (fa ? (fb ? 24 : 12) : 0)} width={24} height={fa ? (fb ? 24 : 12) : 0} fill="var(--color-verde)" fillOpacity="0.6" />
        <path d="M 38 80 L 52 80 L 45 90 Z" fill="var(--color-coral)" />
      </svg>
      <div className="mt-3"><Deslizante rotulo="Temperatura no balão (°C)" valor={T} min={25} max={110} passo={1} aoMudar={setT} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!fa ? `Aquecendo: ainda abaixo de ${mis.a.pe} °C, nada sai.` : `Ferveu: ${mis.a.nome} (ponto de ebulição ${mis.a.pe} °C) sobe, passa pelo tubo, resfria e cai no frasco.`}
        {mis.b && fa && !fb ? ` Só o ${mis.a.nome} saiu, porque ferve antes.` : ''}
        {mis.b && fb ? ` Agora a ${mis.b.nome} (${mis.b.pe} °C) também começa a sair.` : ''}
        {!mis.b ? (fa ? ' O sal não ferve nessa temperatura e fica no balão.' : '') : ''}
        {coletado ? ` No frasco: ${coletado}.` : ''}
      </p>
    </div>
  )
}
