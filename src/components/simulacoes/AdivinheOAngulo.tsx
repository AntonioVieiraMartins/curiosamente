import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const C = 130
const R = 100
const rad = (g: number) => (g * Math.PI) / 180
const sortear = () => 5 * (2 + Math.floor(Math.random() * 62)) // de 10° a 315°, de 5 em 5

// Estimar ângulos de olho é uma habilidade: aqui você treina e vê o erro
export default function AdivinheOAngulo() {
  const [alvo, setAlvo] = useState(sortear)
  const [palpite, setPalpite] = useState(90)
  const [conferido, setConferido] = useState(false)
  const [rodadas, setRodadas] = useState(0)
  const [erroTotal, setErroTotal] = useState(0)
  const id = useId()
  const erro = Math.abs(alvo - palpite)

  function conferir() {
    setConferido(true)
    setRodadas(rodadas + 1)
    setErroTotal(erroTotal + erro)
  }
  function novo() {
    setAlvo(sortear())
    setConferido(false)
  }
  const fim = (g: number) => ({ x: C + R * Math.cos(rad(g)), y: C - R * Math.sin(rad(g)) })
  const f = fim(alvo)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Adivinhe o ângulo</p>

      <svg viewBox="0 0 260 260" className="mx-auto mt-3 w-full max-w-[260px]" aria-hidden="true">
        <line x1={C} y1={C} x2={C + R} y2={C} stroke="var(--color-texto)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={C} y1={C} x2={f.x} y2={f.y} stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" />
        <path d={`M ${C + 30} ${C} A 30 30 0 ${alvo > 180 ? 1 : 0} 0 ${C + 30 * Math.cos(rad(alvo))} ${C - 30 * Math.sin(rad(alvo))}`} fill="none" stroke="var(--color-amarelo-escuro)" strokeWidth="4" />
        <circle cx={C} cy={C} r="4" fill="var(--color-texto)" />
      </svg>

      <label htmlFor={id} className="mt-2 block font-semibold">Seu palpite: <span className="text-coral">{palpite}°</span></label>
      <input id={id} type="range" min={0} max={360} step={5} value={palpite} disabled={conferido} onChange={(e) => setPalpite(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />

      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" disabled={conferido} onClick={conferir} className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white disabled:opacity-40">Conferir</button>
        <button type="button" onClick={novo} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Outro ângulo</button>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        {conferido
          ? <>O ângulo era <strong className="text-coral">{alvo}°</strong>. Você errou por <strong>{erro}°</strong>. {erro <= 10 ? 'Olho de transferidor!' : 'Continue treinando.'}</>
          : 'Olhe o arco amarelo e use o controle para chutar a medida.'}
        {rodadas > 0 && <span className="mt-1 block text-[15px] text-suave">Erro médio em {rodadas} {rodadas === 1 ? 'tentativa' : 'tentativas'}: {Math.round(erroTotal / rodadas)}°.</span>}
      </p>
    </div>
  )
}
