import { useState } from 'react'
import { cartao } from '../ui/estilos'

const fases = [
  {
    nome: 'Fase clara (nos tilacoides)',
    entra: 'Luz e água',
    sai: 'Oxigênio, ATP e NADPH',
    texto: 'A clorofila capta a luz. A energia quebra a água: o oxigênio sai para o ar, e a energia fica guardada em ATP e NADPH, duas moléculas "baterias". Sem luz, essa fase para.',
  },
  {
    nome: 'Fase química, ciclo de Calvin (no estroma)',
    entra: 'Gás carbônico, ATP e NADPH',
    sai: 'Glicose',
    texto: 'Usando as baterias da fase clara, a planta prende o carbono do gás carbônico em açúcar. Essa fase não usa luz direto, mas depende do que a luz produziu.',
  },
]

// Caminho dentro do cloroplasto: o que entra e o que sai em cada fase
export default function CloroplastoPorDentro() {
  const [k, setK] = useState(0)
  const f = fases[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Dentro do cloroplasto</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Fase">
        {fases.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{i === 0 ? '1. Fase clara' : '2. Ciclo de Calvin'}</button>
        ))}
      </div>
      <svg viewBox="0 0 240 110" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Cloroplasto com pilhas de tilacoides">
        <ellipse cx={120} cy={55} rx={105} ry={42} fill="var(--color-verde)" fillOpacity={k === 1 ? 0.35 : 0.12} stroke="var(--color-verde)" strokeWidth="2" />
        {[60, 100, 140, 180].map((x) => (
          <g key={x}>
            {[40, 52, 64, 76].map((y) => <rect key={y} x={x - 14} y={y} width={28} height={8} rx={4} fill="var(--color-verde)" fillOpacity={k === 0 ? 0.9 : 0.45} />)}
          </g>
        ))}
        <text x={120} y={104} textAnchor="middle" fontSize="9" fill="var(--color-suave)">pilhas verdes = tilacoides · espaço em volta = estroma</text>
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>{f.nome}</strong></p>
        <p className="rounded-2xl bg-fundo p-3"><strong>Entra:</strong> {f.entra}. <strong>Sai:</strong> {f.sai}.</p>
        <p className="rounded-2xl bg-fundo p-3">{f.texto}</p>
      </div>
    </div>
  )
}
