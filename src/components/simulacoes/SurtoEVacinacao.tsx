import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Modelo SIR simples (Suscetíveis, Infectados, Recuperados): cada doente fica contagioso por cerca de 5 dias
const DIAS = 160
const X = (d: number) => 15 + (d / DIAS) * 195
const Y = (p: number) => 105 - p * 95

function simula(R0: number, vac: number) {
  const gama = 0.2
  const beta = R0 * gama
  let S = (1 - vac) * 0.999
  let I = 0.001
  const dt = 0.25
  const serie = [I]
  let picoDia = 0
  let pico = I
  for (let k = 1; k <= DIAS / dt; k++) {
    const novos = beta * S * I * dt
    const saem = gama * I * dt
    S -= novos
    I += novos - saem
    if (k % 4 === 0) { serie.push(I); if (I > pico) { pico = I; picoDia = k * dt } }
  }
  return { serie, pico, picoDia, total: (1 - vac) * 0.999 - S }
}

export default function SurtoEVacinacao() {
  const [R0, setR0] = useState(3)
  const [vac, setVac] = useState(0)
  const r = simula(R0, vac / 100)
  const limite = Math.max(0, (1 - 1 / R0) * 100)
  const protegido = vac >= limite
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um surto e a vacinação (modelo simples)</p>
      <svg viewBox="0 0 220 120" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={`Pico de ${(r.pico * 100).toFixed(0)}% de doentes ao mesmo tempo`}>
        <line x1="15" y1="105" x2="212" y2="105" stroke="var(--color-borda)" />
        <polyline fill="none" stroke="var(--color-coral)" strokeWidth="2" points={r.serie.map((v, k) => `${X(k)},${Y(Math.min(v, 1))}`).join(' ')} />
        <text x="17" y="116" fontSize="6.5" fill="var(--color-suave)">dias (0 a 160). A curva mostra a fração da população doente ao mesmo tempo</text>
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Contágio: cada doente passa a quantos (R0)" valor={R0} min={1} max={8} passo={0.5} aoMudar={setR0} />
        <Deslizante rotulo="Vacinados ou já imunes (%)" valor={vac} min={0} max={99} passo={1} aoMudar={setVac} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com R0 = {R0}, a proteção coletiva exige cerca de <strong>{Math.round(limite)}%</strong> de imunes.
        {protegido ? ' Você passou desse limite: o surto não decola.' : <> No auge, cerca de <strong>{Math.round(r.pico * 100)}%</strong> da população fica doente ao mesmo tempo (por volta do dia {Math.round(r.picoDia)}), e no total adoecem {Math.round(r.total * 100)}%.</>}
      </p>
    </div>
  )
}
