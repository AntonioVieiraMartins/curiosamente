import { useState } from 'react'
import { cartao } from '../ui/estilos'

const tipos = [
  { nome: 'Iônica (sal)', ex: 'NaCl', pf: 801, solido: 'Não conduz', liquido: 'Conduz (fundido ou dissolvido)', dura: 'Dura e quebradiça', texto: 'Íons presos num cristal. Só conduz eletricidade quando os íons ficam livres para andar (fundido ou na água).' },
  { nome: 'Molecular (açúcar)', ex: 'sacarose', pf: 186, solido: 'Não conduz', liquido: 'Não conduz', dura: 'Mole', texto: 'Moléculas soltas, unidas por forças fracas entre elas. Derretem fácil. (O açúcar, na verdade, começa a se decompor em torno de 186 °C.)' },
  { nome: 'Metálica (ferro)', ex: 'Fe', pf: 1538, solido: 'Conduz', liquido: 'Conduz', dura: 'Resistente e maleável', texto: 'Átomos num mar de elétrons livres. Conduz eletricidade e calor, e dá para dobrar e esticar.' },
  { nome: 'Rede covalente (diamante)', ex: 'C', pf: 3550, solido: 'Não conduz', liquido: '—', dura: 'Duríssima', texto: 'Átomos ligados por covalências numa rede gigante, como uma única molécula. É a mais dura e a mais difícil de derreter (o diamante, na verdade, vira grafite ou gás antes).' },
]

export default function ComparaSubstancias() {
  const [k, setK] = useState(0)
  const t = tipos[k]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tipos de substância</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tipo">
        {tipos.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 220 56" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Ponto de fusão aproximado de ${t.pf} °C`}>
        <rect x={10} y={22} width={200} height={14} rx={7} fill="var(--color-borda)" />
        <rect x={10} y={22} width={200 * Math.min(1, t.pf / 3550)} height={14} rx={7} fill="var(--color-coral)" />
        <text x={10} y={16} fontSize="10" fill="var(--color-suave)">ponto de fusão aprox.: {t.pf} °C ({t.ex})</text>
        <text x={10} y={52} fontSize="9" fill="var(--color-suave)">escala até 3.550 °C</text>
      </svg>
      <div aria-live="polite" className="mt-3 grid gap-2 text-[15px]">
        <p className="rounded-2xl bg-fundo p-3"><strong>Sólido:</strong> {t.solido}. <strong>Líquido:</strong> {t.liquido}. <strong>Dureza:</strong> {t.dura}.</p>
        <p className="rounded-2xl bg-fundo p-3">{t.texto}</p>
      </div>
    </div>
  )
}
