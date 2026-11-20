import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// A célula tem dentro cerca de 0,9% de sal (hemácia). Fora, o jogador muda a concentração.
const DENTRO = 0.9

export default function CelulaEmTresMeios() {
  const [fora, setFora] = useState(0.9)
  const [tipo, setTipo] = useState<'animal' | 'vegetal'>('animal')
  const meio = Math.abs(fora - DENTRO) < 0.05 ? 'iso' : fora < DENTRO ? 'hipo' : 'hiper'
  // Raio da célula: incha com água, murcha sem água
  let raio = 40
  if (meio === 'hipo') raio = tipo === 'animal' ? 40 + (DENTRO - fora) * 12 : 42
  if (meio === 'hiper') raio = 40 - Math.min(14, (fora - DENTRO) * 11)
  const estoura = tipo === 'animal' && raio > 49
  const murcha = meio === 'hiper'

  const texto = {
    iso: 'Meio isotônico: igual por dentro e por fora. A água entra e sai na mesma medida, e a célula fica do jeito normal. O soro fisiológico tem 0,9% de sal por isso.',
    hipo: tipo === 'animal'
      ? (estoura ? 'Meio hipotônico forte: entra tanta água que a membrana não aguenta e a célula estoura (nas hemácias, chama-se hemólise).' : 'Meio hipotônico: fora tem menos sal, então a água entra e a célula incha.')
      : 'Meio hipotônico: a água entra, mas a parede celular segura. A célula fica durinha e cheia, a chamada turgidez. É o que deixa a alface crocante.',
    hiper: tipo === 'animal'
      ? 'Meio hipertônico: fora tem mais sal, então a água sai e a célula murcha e enruga (crenação).'
      : 'Meio hipertônico: a água sai, o vacúolo encolhe e a membrana se descola da parede. É a plasmólise, e a planta murcha.',
  }[meio]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A célula em três meios</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Tipo de célula">
        {(['animal', 'vegetal'] as const).map((k) => (
          <button key={k} type="button" aria-pressed={tipo === k} onClick={() => setTipo(k)} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${tipo === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{k === 'animal' ? 'Hemácia (animal)' : 'Célula vegetal'}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 120" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label="Célula num meio com sal">
        {tipo === 'vegetal' && <rect x={52} y={12} width={96} height={96} rx={10} fill="none" stroke="var(--color-verde)" strokeWidth="4" />}
        {tipo === 'vegetal'
          ? <rect x={100 - Math.min(44, raio + 2)} y={60 - Math.min(44, raio + 2)} width={Math.min(44, raio + 2) * 2} height={Math.min(44, raio + 2) * 2} rx={8} fill="var(--color-verde)" fillOpacity="0.3" stroke="var(--color-verde)" />
          : <circle cx={100} cy={60} r={Math.min(52, raio)} fill="var(--color-coral)" fillOpacity={estoura ? 0.15 : 0.4} stroke="var(--color-coral)" strokeDasharray={estoura ? '4 3' : undefined} strokeWidth={murcha ? 3 : 1.5} />}
        {estoura && [0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1={100 + 52 * Math.cos(k)} y1={60 + 52 * Math.sin(k)} x2={100 + 62 * Math.cos(k)} y2={60 + 62 * Math.sin(k)} stroke="var(--color-coral)" />)}
        <text x={100} y={64} textAnchor="middle" fontSize="11" fill="var(--color-texto)">{DENTRO}% de sal</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Sal fora da célula (%)" valor={fora} min={0} max={2} passo={0.1} aoMudar={setFora} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{texto}</p>
    </div>
  )
}
