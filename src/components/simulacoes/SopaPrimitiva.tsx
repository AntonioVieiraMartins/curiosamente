import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Valores ilustrativos: no experimento real, os aminoácidos foram aparecendo ao longo de cerca de uma semana
export default function SopaPrimitiva() {
  const [faiscas, setFaiscas] = useState(true)
  const [dia, setDia] = useState(0)
  const quantidade = faiscas ? dia * 14 : 0

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O experimento de Miller e Urey (1952)</p>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Aparelho com gases e água, faíscas ${faiscas ? 'ligadas' : 'desligadas'}`}>
        <circle cx={60} cy={40} r={24} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        {faiscas && <path d="M 52 40 L 58 34 L 62 42 L 68 36" stroke="var(--color-amarelo)" strokeWidth="2.5" fill="none" />}
        <text x={60} y={74} textAnchor="middle" fontSize="7" fill="var(--color-texto)">CH₄ · NH₃ · H₂ · vapor</text>
        <path d="M 84 40 H 150 V 80 H 100" fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        <circle cx={90} cy={86} r={14} fill="var(--color-azul)" fillOpacity="0.3" stroke="var(--color-texto)" strokeWidth="2" />
        <rect x={150} y={60} width={30} height={quantidade / 5} fill="var(--color-verde)" fillOpacity="0.7" />
        <text x={165} y={104} textAnchor="middle" fontSize="7" fill="var(--color-texto)">aminoácidos</text>
      </svg>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" aria-pressed={faiscas} onClick={() => setFaiscas(!faiscas)} className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${faiscas ? 'border-amarelo bg-amarelo/30' : 'border-borda'}`}>Faíscas elétricas: {faiscas ? 'ligadas' : 'desligadas'}</button>
      </div>
      <div className="mt-3"><Deslizante rotulo="Dias" valor={dia} min={0} max={7} aoMudar={setDia} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {faiscas
          ? dia === 0 ? 'Começo: só os gases e a água. Ligue as faíscas e avance os dias.' : `Dia ${dia}: o caldo vai ficando mais rico em moléculas orgânicas. Ao fim de cerca de uma semana, Miller encontrou aminoácidos, entre eles glicina e alanina.`
          : 'Sem energia (faíscas), os gases ficam como estão: não surgem aminoácidos. A descarga elétrica, que imita os raios, fornece a energia para as reações.'}
      </p>
    </div>
  )
}
