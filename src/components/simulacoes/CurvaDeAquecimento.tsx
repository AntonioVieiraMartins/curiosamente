import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Energia (J por grama de água) em cada etapa; valores aproximados
const E1 = 42 // aquecer gelo de −20 a 0 °C (2,09 J/g·°C × 20)
const E2 = E1 + 334 // fundir
const E3 = E2 + 418 // aquecer a água de 0 a 100 °C (4,18 × 100)
const E4 = E3 + 2260 // vaporizar
const E5 = E4 + 40 // aquecer o vapor de 100 a 120 °C
const temperatura = (e: number) =>
  e <= E1 ? -20 + (e / E1) * 20 : e <= E2 ? 0 : e <= E3 ? ((e - E2) / (E3 - E2)) * 100 : e <= E4 ? 100 : 100 + ((e - E4) / (E5 - E4)) * 20
const etapa = (e: number) =>
  e === 0 ? 'Só gelo' : e < E1 ? 'Gelo esquentando' : e <= E2 ? 'Gelo derretendo (gelo + água)' : e < E3 ? 'Água líquida esquentando' : e <= E4 ? 'Água fervendo (água + vapor)' : 'Vapor esquentando'
const X = (e: number) => 20 + (e / E5) * 170
const Y = (T: number) => 95 - ((T + 20) / 140) * 85
const pontos = [0, E1, E2, E3, E4, E5].map((e) => `${X(e)},${Y(temperatura(e))}`).join(' ')

// O termômetro para durante as mudanças de estado: a energia vai para separar partículas
export default function CurvaDeAquecimento() {
  const [e, setE] = useState(0)
  const T = temperatura(e)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Aquecendo 1 g de gelo a −20 °C</p>
      <svg viewBox="0 0 200 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Curva de aquecimento: ${Math.round(T)} graus, ${etapa(e)}`}>
        <line x1={20} y1={95} x2={192} y2={95} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={20} y1={8} x2={20} y2={95} stroke="var(--color-texto)" strokeOpacity="0.6" />
        <line x1={20} y1={Y(0)} x2={192} y2={Y(0)} stroke="var(--color-borda)" strokeDasharray="3 3" />
        <line x1={20} y1={Y(100)} x2={192} y2={Y(100)} stroke="var(--color-borda)" strokeDasharray="3 3" />
        <text x={2} y={Y(0) + 3} fontSize="7" fill="var(--color-texto)">0°</text>
        <text x={0} y={Y(100) + 3} fontSize="7" fill="var(--color-texto)">100°</text>
        <polyline points={pontos} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <circle cx={X(e)} cy={Y(T)} r="5" fill="var(--color-coral)" stroke="white" strokeWidth="1.5" />
        <text x={192} y={106} textAnchor="end" fontSize="7" fill="var(--color-suave)">energia recebida →</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Energia recebida (J por grama)" valor={e} min={0} max={E5} passo={10} aoMudar={setE} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{etapa(e)}.</strong> Temperatura: {Math.round(T)} °C. {T === 0 || T === 100 ? 'O termômetro parou: a energia recebida está separando as partículas, e não esquentando.' : ''}
      </p>
    </div>
  )
}
