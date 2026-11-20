import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Dados inventados só para ilustrar: tamanhos (em pares de bases) de trechos repetitivos de cada pessoa
const amostras = [
  { nome: 'Cena do crime', bandas: [120, 340, 560, 900] },
  { nome: 'Suspeito 1', bandas: [150, 340, 700, 900] },
  { nome: 'Suspeito 2', bandas: [120, 340, 560, 900] },
  { nome: 'Suspeito 3', bandas: [120, 410, 560, 1100] },
]
// Quanto menor o fragmento, mais longe ele anda no gel
const posicao = (tam: number) => 14 + (1 - Math.log(tam / 100) / Math.log(12)) * 70

export default function ImpressaoDigitalDeDna() {
  const [s, setS] = useState(1)
  const igual = amostras[s].bandas.join() === amostras[0].bandas.join()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Impressão digital de DNA (exemplo inventado)</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Comparar com a cena do crime">
        {[1, 2, 3].map((k) => (
          <button key={k} type="button" onClick={() => setS(k)} aria-pressed={s === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${s === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{amostras[k].nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gel com as bandas de DNA da cena do crime e do suspeito escolhido">
        <text x="12" y="12" fontSize="8" fill="var(--color-suave)">poço (−)</text>
        {[0, s].map((idx, col) => (
          <g key={idx}>
            <rect x={50 + col * 80} y="16" width="50" height="5" rx="2" fill="var(--color-borda)" />
            {amostras[idx].bandas.map((b) => <rect key={b} x={52 + col * 80} y={posicao(b) + 10} width="46" height="4" rx="2" fill="var(--color-azul)" />)}
            <text x={75 + col * 80} y="104" textAnchor="middle" fontSize="8" fontWeight="700" fill="var(--color-texto)">{col === 0 ? 'Cena' : amostras[idx].nome}</text>
          </g>
        ))}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {igual ? `${amostras[s].nome}: todas as bandas combinam com a amostra da cena. Com muitos trechos analisados, a chance de duas pessoas diferentes combinarem em todos é minúscula (gêmeos idênticos são a exceção).` : `${amostras[s].nome}: pelo menos uma banda é diferente da cena. Basta uma diferença para descartar a pessoa.`}
      </p>
    </div>
  )
}
