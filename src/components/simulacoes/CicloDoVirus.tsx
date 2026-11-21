import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Ciclo de um vírus que ataca bactérias (bacteriófago): lítico (estoura a célula) ou lisogênico (esconde o DNA)
const passosLitico = [
  { t: '1. Encaixe', d: 'O vírus se prende à superfície da bactéria, como uma chave numa fechadura. Cada vírus só reconhece certos tipos de célula.', dentro: 0 },
  { t: '2. Injeção', d: 'O vírus injeta o seu material genético na bactéria. A casca (capsídeo) fica do lado de fora.', dentro: 0 },
  { t: '3. Cópia', d: 'A bactéria passa a obedecer às instruções do vírus: copia o DNA viral e fabrica as proteínas das cascas.', dentro: 4 },
  { t: '4. Montagem', d: 'Os pedaços se juntam e formam dezenas de vírus novos dentro da bactéria.', dentro: 10 },
  { t: '5. Lise', d: 'A bactéria estoura e libera os vírus, que vão atacar outras bactérias.', dentro: 0 },
]
const passosLisogenico = [
  passosLitico[0],
  passosLitico[1],
  { t: '3. Esconderijo', d: 'O DNA do vírus se encaixa no DNA da bactéria e fica adormecido. Chama-se profago.', dentro: 1 },
  { t: '4. Cópia junto', d: 'Cada vez que a bactéria se divide, copia também o DNA do vírus. A infecção passa a todas as filhas, sem sintomas.', dentro: 1 },
  { t: '5. Acordar', d: 'Se a bactéria sofre estresse (por exemplo, radiação), o vírus acorda e entra no ciclo lítico: cópia, montagem e lise.', dentro: 6 },
]

export default function CicloDoVirus() {
  const [tipo, setTipo] = useState<'litico' | 'lisogenico'>('litico')
  const [p, setP] = useState(0)
  const passos = tipo === 'litico' ? passosLitico : passosLisogenico
  const s = passos[p]
  const estourou = tipo === 'litico' && p === 4
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ciclo de um vírus de bactérias</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tipo de ciclo">
        {(['litico', 'lisogenico'] as const).map((t) => (
          <button key={t} type="button" onClick={() => { setTipo(t); setP(0) }} aria-pressed={tipo === t} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${tipo === t ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{t === 'litico' ? 'Ciclo lítico' : 'Ciclo lisogênico'}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 110" className="mx-auto mt-3 w-full max-w-md rounded-2xl bg-fundo" role="img" aria-label={s.t}>
        {!estourou ? <rect x="50" y="25" width="120" height="60" rx="30" fill="var(--color-verde)" fillOpacity="0.3" stroke="var(--color-verde)" strokeWidth="2" /> : null}
        {estourou && Array.from({ length: 10 }, (_, k) => <circle key={k} cx={30 + (k % 5) * 40} cy={30 + Math.floor(k / 5) * 45} r="6" fill="var(--color-coral)" />)}
        {!estourou && Array.from({ length: s.dentro }, (_, k) => <circle key={k} cx={80 + (k % 5) * 15} cy={45 + Math.floor(k / 5) * 14} r="4" fill="var(--color-coral)" />)}
        {p <= 1 && <g><polygon points="100,12 112,12 106,24" fill="var(--color-coral)" /><line x1="106" y1="24" x2="106" y2="30" stroke="var(--color-coral)" strokeWidth="2" /></g>}
        {p === 1 && <circle cx="106" cy="38" r="3" fill="var(--color-texto)" />}
      </svg>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]" aria-live="polite"><strong>{s.t}.</strong> {s.d}</p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={p === 0} onClick={() => setP(p - 1)} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold disabled:opacity-40">Voltar</button>
        <button type="button" disabled={p === passos.length - 1} onClick={() => setP(p + 1)} className="min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white disabled:opacity-40">Próximo passo</button>
      </div>
    </div>
  )
}
