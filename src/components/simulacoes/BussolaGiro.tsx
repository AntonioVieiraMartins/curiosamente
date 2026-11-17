import { useState } from 'react'
import { cartao } from '../ui/estilos'

const NOMES = ['Norte', 'Nordeste', 'Leste', 'Sudeste', 'Sul', 'Sudoeste', 'Oeste', 'Noroeste']
const rad = (g: number) => (g * Math.PI) / 180
const botao = 'min-h-11 rounded-full border border-borda px-3 text-[15px] font-semibold'

// A direção é um ângulo contado a partir do Norte, no sentido horário. Virar é somar ou subtrair graus.
export default function BussolaGiro() {
  const [dir, setDir] = useState(0)
  const [giro, setGiro] = useState(0)
  const virar = (g: number) => {
    setDir(((dir + g) % 360 + 360) % 360)
    setGiro(giro + g)
  }
  const nome = NOMES[Math.round(dir / 45) % 8]
  const ponta = { x: 110 + 70 * Math.sin(rad(dir)), y: 110 - 70 * Math.cos(rad(dir)) }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Para onde você está olhando?</p>

      <svg viewBox="0 0 220 220" className="mx-auto mt-3 w-full max-w-[240px]" aria-hidden="true">
        <circle cx="110" cy="110" r="90" fill="var(--color-superficie)" stroke="var(--color-borda)" strokeWidth="2" />
        {[['N', 0], ['L', 90], ['S', 180], ['O', 270]].map(([t, g]) => (
          <text key={String(t)} x={110 + 80 * Math.sin(rad(Number(g)))} y={110 - 80 * Math.cos(rad(Number(g))) + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-suave)">{t}</text>
        ))}
        <line x1="110" y1="110" x2={ponta.x} y2={ponta.y} stroke="var(--color-coral)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="110" cy="110" r="5" fill="var(--color-texto)" />
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button type="button" className={botao} onClick={() => virar(-90)}>↶ 90° esquerda</button>
        <button type="button" className={botao} onClick={() => virar(-45)}>↶ 45° esquerda</button>
        <button type="button" className={botao} onClick={() => virar(45)}>45° direita ↷</button>
        <button type="button" className={botao} onClick={() => virar(90)}>90° direita ↷</button>
        <button type="button" className={`${botao} col-span-2 sm:col-span-4`} onClick={() => { setDir(0); setGiro(0) }}>Voltar para o Norte</button>
      </div>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Direção: <strong className="text-coral">{nome}</strong> ({dir}° a partir do Norte). Você já girou {Math.abs(giro)}° no total {giro >= 0 ? 'para a direita' : 'para a esquerda'}.
      </p>
    </div>
  )
}
