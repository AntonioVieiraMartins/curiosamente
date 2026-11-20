import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const RESP = 20

// Luz ao longo do dia (zero à noite, máxima ao meio-dia); a respiração da planta nunca para
function fotos(hora: number) {
  if (hora < 6 || hora > 18) return 0
  return 100 * Math.sin(((hora - 6) / 12) * Math.PI)
}

export default function DiaENoiteDaPlanta() {
  const [hora, setHora] = useState(12)
  const f = fotos(hora)
  const saldo = f - RESP
  const pontos = Array.from({ length: 25 }, (_, h) => `${10 + h * 8},${80 - fotos(h) * 0.7}`).join(' ')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um dia na vida de uma folha</p>
      <svg viewBox="0 0 210 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Gráfico de fotossíntese e respiração ao longo do dia">
        <line x1={10} y1={80} x2={202} y2={80} stroke="var(--color-texto)" />
        <line x1={10} y1={80 - RESP * 0.7} x2={202} y2={80 - RESP * 0.7} stroke="var(--color-coral)" strokeDasharray="4 3" />
        <polyline points={pontos} fill="none" stroke="var(--color-verde)" strokeWidth="2.5" />
        <line x1={10 + hora * 8} y1={10} x2={10 + hora * 8} y2={80} stroke="var(--color-azul)" strokeWidth="1.5" />
        <text x={12} y={94} fontSize="9" fill="var(--color-suave)">0h</text>
        <text x={100} y={94} fontSize="9" fill="var(--color-suave)">12h</text>
        <text x={190} y={94} fontSize="9" fill="var(--color-suave)">24h</text>
        <text x={14} y={80 - RESP * 0.7 - 3} fontSize="8" fill="var(--color-coral)">respiração</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Hora do dia" valor={hora} min={0} max={24} passo={1} aoMudar={setHora} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{hora}h:</strong>{' '}
        {f === 0
          ? 'Sem luz, a planta só respira: gasta açúcar e solta gás carbônico, como qualquer outro ser vivo.'
          : saldo > 0
            ? 'A fotossíntese passa a respiração: sobra açúcar para crescer e oxigênio para o ar.'
            : 'A luz é fraca, e a fotossíntese ainda não cobre o gasto da respiração. É perto do ponto de compensação.'}
      </p>
    </div>
  )
}
