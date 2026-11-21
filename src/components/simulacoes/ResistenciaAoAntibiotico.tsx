import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Cada tratamento mata quase todas as sensíveis; as sobreviventes se multiplicam até a população voltar ao tamanho de antes.
const TOTAL = 1_000_000
const inicio = { s: TOTAL - 10, r: 10 }

export default function ResistenciaAoAntibiotico() {
  const [mata, setMata] = useState(99)
  const [hist, setHist] = useState([inicio])
  const atual = hist[hist.length - 1]
  const fr = (h: { s: number; r: number }) => h.r / (h.s + h.r)
  const trata = () => {
    const s1 = atual.s * (1 - mata / 100)
    const r1 = atual.r * 0.9
    const f = TOTAL / (s1 + r1)
    setHist([...hist, { s: s1 * f, r: r1 * f }].slice(-24))
  }
  const L = 200 / Math.max(hist.length, 8)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Bactérias e antibiótico (modelo simples)</p>
      <svg viewBox="0 0 220 100" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`${(fr(atual) * 100).toFixed(1)}% das bactérias são resistentes`}>
        {hist.map((h, k) => (
          <g key={k}>
            <rect x={10 + k * L} y={8} width={L - 1} height={80 * fr(h)} fill="var(--color-coral)" />
            <rect x={10 + k * L} y={8 + 80 * fr(h)} width={L - 1} height={80 * (1 - fr(h))} fill="var(--color-verde)" fillOpacity="0.6" />
          </g>
        ))}
        <text x="12" y="97" fontSize="7" fill="var(--color-suave)">tratamentos →  (resistentes em vermelho, sensíveis em verde)</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="O antibiótico mata (% das sensíveis)" valor={mata} min={50} max={100} passo={1} aoMudar={setMata} /></div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={trata} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Aplicar o antibiótico</button>
        <button type="button" onClick={() => setHist([inicio])} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Recomeçar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Tratamentos: {hist.length - 1}. Bactérias resistentes: <strong>{(fr(atual) * 100).toFixed(fr(atual) < 0.01 ? 4 : 1).replace('.', ',')}%</strong>. Começamos com só 10 em 1 milhão. O antibiótico não "cria" a resistência: ele elimina a concorrência.
      </p>
    </div>
  )
}
