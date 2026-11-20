import { useState } from 'react'
import { cartao } from '../ui/estilos'

const fitas = ['ATGCCGTA', 'TTACGGCA', 'GCGATTAC', 'CATGGCTA']
const par: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' }
const cor: Record<string, string> = { A: 'var(--color-azul)', T: 'var(--color-coral)', C: 'var(--color-verde)', G: 'var(--color-amarelo)' }

// Completar a outra metade da escada: A com T, C com G
export default function PareamentoDeBases() {
  const [n, setN] = useState(0)
  const [resp, setResp] = useState<string[]>([])
  const fita = fitas[n]
  const pronto = resp.length === fita.length
  const erro = resp.findIndex((b, i) => b !== par[fita[i]])
  const certo = pronto && erro === -1

  function por(b: string) {
    if (pronto) return
    setResp((r) => [...r, b])
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Complete a outra fita do DNA</p>
      <p className="mt-2 text-[15px]">Para cada base de cima, escolha a que se encaixa embaixo (A com T, C com G).</p>
      <svg viewBox={`0 0 ${fita.length * 28 + 20} 100`} className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Duas fitas de DNA, a de baixo sendo completada">
        {fita.split('').map((b, i) => (
          <g key={i}>
            <circle cx={24 + i * 28} cy={26} r={11} fill={cor[b]} fillOpacity="0.8" />
            <text x={24 + i * 28} y={31} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-texto)">{b}</text>
            <line x1={24 + i * 28} y1={38} x2={24 + i * 28} y2={62} stroke="var(--color-borda)" strokeDasharray="3 3" />
            {resp[i] ? (
              <g>
                <circle cx={24 + i * 28} cy={74} r={11} fill={cor[resp[i]]} fillOpacity={resp[i] === par[b] ? 0.8 : 0.25} stroke={resp[i] === par[b] ? 'none' : 'var(--color-coral)'} />
                <text x={24 + i * 28} y={79} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-texto)">{resp[i]}</text>
              </g>
            ) : <circle cx={24 + i * 28} cy={74} r={11} fill="none" stroke="var(--color-borda)" strokeDasharray="3 3" />}
          </g>
        ))}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolher base">
        {['A', 'T', 'C', 'G'].map((b) => (
          <button key={b} type="button" onClick={() => por(b)} disabled={pronto} className="min-h-11 min-w-11 rounded-full border border-borda bg-superficie px-4 text-[15px] font-bold disabled:opacity-50">{b}</button>
        ))}
        <button type="button" onClick={() => setResp((r) => r.slice(0, -1))} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Apagar</button>
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!pronto
          ? 'Escolha as bases, uma de cada vez, da esquerda para a direita.'
          : certo
            ? 'Perfeito: toda a fita bate. Cada metade do DNA conta a outra. É por isso que a célula consegue copiar o DNA: cada fita serve de molde para a nova.'
            : `Alguma base não combina (a ${erro + 1}ª). Lembre: A só se liga ao T, e C só se liga ao G.`}
      </div>
      <button type="button" onClick={() => { setN((x) => (x + 1) % fitas.length); setResp([]) }} className="mt-3 min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">Outra fita</button>
    </div>
  )
}
