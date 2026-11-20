import { useState } from 'react'
import { cartao } from '../ui/estilos'

const solutos = [
  { nome: 'Sal (iônico)', polar: true, nota: 'Os íons são cercados pelas pontas das moléculas de água.' },
  { nome: 'Açúcar', polar: true, nota: 'Tem várias pontas O–H que formam ligações de hidrogênio com a água.' },
  { nome: 'Álcool (etanol)', polar: true, nota: 'Tem um grupo O–H que se liga à água, e uma cauda curta que não atrapalha.' },
  { nome: 'Óleo de cozinha', polar: false, nota: 'É feito de cadeias de carbono e hidrogênio, quase sem polaridade.' },
  { nome: 'Gordura / manteiga', polar: false, nota: 'Também é apolar: cadeias longas de carbono e hidrogênio.' },
  { nome: 'Iodo (I₂)', polar: false, nota: 'Moléculas de dois átomos iguais, apolares.' },
]
const solventes = [
  { nome: 'Água', polar: true },
  { nome: 'Gasolina ou óleo', polar: false },
]

// "Semelhante dissolve semelhante": polar com polar, apolar com apolar
export default function SemelhanteDissolveSemelhante() {
  const [s, setS] = useState(0)
  const [v, setV] = useState(0)
  const so = solutos[s]
  const sv = solventes[v]
  const dissolve = so.polar === sv.polar
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Mistura ou não?</p>
      <p className="mt-3 text-[14px] font-semibold text-suave">Coloque…</p>
      <div className="mt-1 flex flex-wrap gap-2" role="group" aria-label="Soluto">
        {solutos.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={s === i} onClick={() => setS(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${s === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <p className="mt-3 text-[14px] font-semibold text-suave">…em:</p>
      <div className="mt-1 flex flex-wrap gap-2" role="group" aria-label="Solvente">
        {solventes.map((x, i) => (
          <button key={x.nome} type="button" aria-pressed={v === i} onClick={() => setV(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${v === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <svg viewBox="0 0 160 90" className="mx-auto mt-3 w-full max-w-[220px] rounded-2xl bg-fundo" role="img" aria-label={dissolve ? 'Copo com mistura uniforme' : 'Copo com duas camadas separadas'}>
        <rect x={40} y={10} width={80} height={70} fill="none" stroke="var(--color-texto)" strokeWidth="2" />
        {dissolve
          ? <rect x={42} y={30} width={76} height={48} fill="var(--color-azul)" fillOpacity="0.35" />
          : <><rect x={42} y={30} width={76} height={26} fill="var(--color-amarelo)" fillOpacity="0.45" /><rect x={42} y={56} width={76} height={22} fill="var(--color-azul)" fillOpacity="0.4" /></>}
      </svg>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{so.nome} em {sv.nome.toLowerCase()}: {dissolve ? 'dissolve.' : 'não se mistura.'}</strong> {so.nota}{' '}
        {dissolve ? 'As moléculas de mesmo tipo (polar com polar, apolar com apolar) se atraem, e a mistura fica uniforme.' : 'As moléculas de um e de outro tipo se atraem mais entre iguais do que entre diferentes, e se separam em camadas.'}
      </p>
    </div>
  )
}
