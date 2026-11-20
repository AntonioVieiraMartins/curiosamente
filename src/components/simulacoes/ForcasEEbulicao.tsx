import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Pontos de ebulição aproximados (°C). Massas parecidas, forças diferentes.
const subs = [
  { f: 'CH₄ (metano)', m: 16, pe: -162, forca: 'Dispersão de London', texto: 'Molécula apolar: só há atração fraca entre nuvens de elétrons.' },
  { f: 'H₂S (gás sulfídrico)', m: 34, pe: -60, forca: 'Dipolo-dipolo', texto: 'Levemente polar. As atrações são um pouco mais fortes que as de London.' },
  { f: 'NH₃ (amônia)', m: 17, pe: -33, forca: 'Ligação de hidrogênio', texto: 'Tem N–H: forma ligações de hidrogênio, bem mais fortes, mas poucas por molécula.' },
  { f: 'HF (fluoreto de hidrogênio)', m: 20, pe: 20, forca: 'Ligação de hidrogênio', texto: 'O flúor é o mais eletronegativo e forma ligações de hidrogênio fortes.' },
  { f: 'H₂O (água)', m: 18, pe: 100, forca: 'Ligação de hidrogênio', texto: 'Cada molécula faz até 4 ligações de hidrogênio (2 pelos H e 2 pelo O). É por isso que a água é líquida em temperatura ambiente.' },
]

export default function ForcasEEbulicao() {
  const [k, setK] = useState(4)
  const s = subs[k]
  const pos = ((s.pe + 180) / 300) * 200
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto custa ferver?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Substância">
        {subs.map((x, i) => (
          <button key={x.f} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.f.split(' ')[0]}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 60" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Ponto de ebulição de ${s.pe} graus`}>
        <rect x={10} y={22} width={200} height={14} rx={7} fill="var(--color-borda)" />
        <rect x={10} y={22} width={pos} height={14} rx={7} fill="var(--color-coral)" />
        <text x={10} y={16} fontSize="10" fill="var(--color-suave)">ferve a {s.pe} °C</text>
        <text x={10} y={54} fontSize="9" fill="var(--color-suave)">escala de −180 °C a 120 °C</text>
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>{s.f}:</strong> massa molar {s.m} g/mol. Força principal: <strong>{s.forca}</strong>.</p>
        <p className="rounded-2xl bg-fundo p-3">{s.texto}</p>
      </div>
    </div>
  )
}
