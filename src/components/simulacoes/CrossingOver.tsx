import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Dois cromossomos homólogos (um da mãe, outro do pai) trocam um pedaço: cada genes A/a, B/b, C/c, D/d
const genes = ['A', 'B', 'C', 'D']
export default function CrossingOver() {
  const [ponto, setPonto] = useState(2)
  const [trocou, setTrocou] = useState(false)
  const corte = trocou ? ponto : 4
  const barra = (y: number, quem: 'mae' | 'pai') => (
    <g>
      {genes.map((g, k) => {
        const veioDeOutro = k >= corte
        const mae = (quem === 'mae') !== veioDeOutro
        return (
          <g key={g}>
            <rect x={20 + k * 45} y={y} width={42} height={18} rx={4} fill={mae ? 'var(--color-azul)' : 'var(--color-coral)'} fillOpacity="0.75" />
            <text x={41 + k * 45} y={y + 13} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-texto)">{mae ? g : g.toLowerCase()}</text>
          </g>
        )
      })}
    </g>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Crossing-over: a troca de pedaços</p>
      <svg viewBox="0 0 220 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={trocou ? `Troca depois do gene número ${ponto}` : 'Cromossomos antes da troca'}>
        <text x="6" y="26" fontSize="9" fill="var(--color-suave)">1</text>
        <text x="6" y="62" fontSize="9" fill="var(--color-suave)">2</text>
        {barra(14, 'mae')}
        {barra(50, 'pai')}
        {trocou && <line x1={20 + ponto * 45} y1="8" x2={20 + ponto * 45} y2="74" stroke="var(--color-texto)" strokeDasharray="3 3" />}
        <text x="110" y="92" textAnchor="middle" fontSize="10" fill="var(--color-suave)">{trocou ? 'Depois do crossing-over' : 'Antes: azul = da mãe, coral = do pai'}</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Ponto da troca (depois do gene número)" valor={ponto} min={1} max={3} passo={1} aoMudar={setPonto} /></div>
      <button type="button" onClick={() => setTrocou((t) => !t)} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">{trocou ? 'Desfazer a troca' : 'Fazer a troca'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {trocou
          ? `Agora o cromossomo 1 tem os genes ${genes.slice(0, ponto).join('')} da mãe e ${genes.slice(ponto).map((g) => g.toLowerCase()).join('')} do pai. É uma combinação que não existia em nenhum dos dois.`
          : 'Na prófase I da meiose, os cromossomos parecidos se emparelham e podem trocar pedaços. Aperte o botão para ver.'}
      </p>
    </div>
  )
}
