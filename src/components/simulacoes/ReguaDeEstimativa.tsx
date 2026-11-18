import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Estimar antes de medir: a barra tem um comprimento sorteado; você chuta e vê o erro
const sorteia = () => 4 + Math.round(Math.random() * 16) // 4 a 20 cm

export default function ReguaDeEstimativa() {
  const [real, setReal] = useState(sorteia)
  const [chute, setChute] = useState(10)
  const [revelado, setRevelado] = useState(false)
  const id = useId()
  const erro = Math.abs(chute - real)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Estime e confira</p>
      <p className="mt-2 text-[15px]">Quantos centímetros tem a barra amarela? Use os pedaços de 1 cm da régua como pista, mas sem contar um por um.</p>
      <svg viewBox="0 0 420 70" role="img" aria-label={revelado ? `A barra mede ${real} centímetros` : 'Barra de comprimento escondido'} className="mt-3 h-auto w-full">
        <rect x={10} y={8} width={real * 20} height={22} rx={4} fill="var(--color-amarelo)" stroke="var(--color-amarelo-escuro)" />
        <line x1={10} y1={50} x2={410} y2={50} stroke="var(--color-suave)" />
        {Array.from({ length: 21 }, (_, k) => (
          <line key={k} x1={10 + k * 20} y1={46} x2={10 + k * 20} y2={k % 5 === 0 ? 62 : 54} stroke="var(--color-suave)" />
        ))}
        {[0, 5, 10, 15, 20].map((k) => (
          <text key={k} x={10 + k * 20} y={69} textAnchor="middle" style={{ fontSize: 9, fill: 'var(--color-suave)' }}>{revelado || k % 10 === 0 ? k : ''}</text>
        ))}
      </svg>
      <label htmlFor={id} className="mt-2 block text-[15px]">Seu palpite: <b>{chute} cm</b>
        <input id={id} type="range" min={1} max={20} value={chute} disabled={revelado} onChange={(e) => setChute(Number(e.target.value))} className="h-11 w-full" />
      </label>
      <div className="mt-2 flex flex-wrap gap-2">
        {!revelado ? (
          <button type="button" onClick={() => setRevelado(true)} className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white">Conferir</button>
        ) : (
          <button type="button" onClick={() => { setReal(sorteia()); setRevelado(false) }} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Outra barra</button>
        )}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {revelado
          ? `A barra mede ${real} cm (${real * 10} mm). Seu erro foi de ${erro} cm${erro <= 1 ? ': ótima estimativa!' : '. Estimar melhora com a prática.'}`
          : 'Dica: compare com algo que você conhece, como a largura de um dedo (cerca de 1 cm).'}
      </p>
    </div>
  )
}
