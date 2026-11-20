import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const FRASCOS = [
  { nome: 'Aberto', x: 20 },
  { nome: 'Coberto com gaze', x: 78 },
  { nome: 'Tampado', x: 136 },
]

// Experimento de Redi (1668): carne em três frascos e o que aparece em cada um
export default function ExperimentoDeRedi() {
  const [dia, setDia] = useState(0)
  const larvas = Math.max(0, Math.min(6, dia - 3))
  const textos = [
    dia < 2 ? 'Moscas rondam os frascos.' : 'Moscas entram no frasco aberto e põem ovos na carne. No frasco com gaze, pousam e põem ovos sobre a gaze. No tampado, não entram.',
    larvas > 0 ? 'Frasco aberto: larvas na carne. Frasco com gaze: larvas só na gaze, por fora. Frasco tampado: nenhuma larva, mesmo com a carne apodrecendo.' : '',
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os três frascos de Redi</p>
      <svg viewBox="0 0 200 100" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Dia ${dia}: ${larvas} larvas na carne do frasco aberto, nenhuma nos outros`}>
        {FRASCOS.map((f, k) => (
          <g key={f.nome}>
            <rect x={f.x} y={30} width={44} height={56} rx={4} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
            <rect x={f.x + 12} y={66} width={20} height={14} rx={3} fill="var(--color-coral)" fillOpacity="0.7" />
            {k === 1 && <line x1={f.x} y1={30} x2={f.x + 44} y2={30} stroke="var(--color-texto)" strokeWidth="2" strokeDasharray="2 2" />}
            {k === 2 && <rect x={f.x - 2} y={26} width={48} height={5} rx={2} fill="var(--color-texto)" />}
            {k === 0 && Array.from({ length: larvas }, (_, i) => <circle key={i} cx={f.x + 14 + i * 3.5} cy={72 + (i % 2) * 4} r="1.8" fill="var(--color-amarelo)" stroke="var(--color-texto)" strokeWidth="0.4" />)}
            {k === 1 && larvas > 0 && Array.from({ length: Math.min(3, larvas) }, (_, i) => <circle key={i} cx={f.x + 12 + i * 8} cy={24} r="1.8" fill="var(--color-amarelo)" stroke="var(--color-texto)" strokeWidth="0.4" />)}
            <text x={f.x + 22} y={97} textAnchor="middle" fontSize="7" fill="var(--color-texto)">{f.nome}</text>
          </g>
        ))}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Dias" valor={dia} min={0} max={8} aoMudar={setDia} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Dia {dia}. {textos[0]} {textos[1]}
        {larvas > 0 ? ' Conclusão: as larvas vêm de ovos de moscas, e não nascem da carne sozinha.' : ''}
      </p>
    </div>
  )
}
