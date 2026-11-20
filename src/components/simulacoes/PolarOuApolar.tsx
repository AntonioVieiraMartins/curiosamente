import { useState } from 'react'
import { cartao } from '../ui/estilos'

const mols = [
  { f: 'H₂', forma: 'linear', ligPolar: false, simetrica: true, texto: 'Dois átomos iguais puxam o par com a mesma força. Ligação apolar, molécula apolar.' },
  { f: 'HCl', forma: 'linear', ligPolar: true, simetrica: false, texto: 'O cloro puxa mais o par de elétrons que o hidrogênio. Só há uma ligação, e ela é polar: nada compensa. Molécula polar.' },
  { f: 'CO₂', forma: 'linear (180°)', ligPolar: true, simetrica: true, texto: 'Cada C=O é polar, mas as duas setas apontam para lados opostos e se anulam. Molécula apolar, apesar das ligações polares.' },
  { f: 'H₂O', forma: 'angular (cerca de 104,5°)', ligPolar: true, simetrica: false, texto: 'As duas ligações O–H são polares e formam um "V": as setas se somam, e o oxigênio fica negativo. Molécula polar.' },
  { f: 'NH₃', forma: 'piramidal', ligPolar: true, simetrica: false, texto: 'Três ligações polares numa pirâmide, mais um par de elétrons sobrando no N. As setas não se anulam. Molécula polar.' },
  { f: 'CH₄', forma: 'tetraédrica (109,5°)', ligPolar: false, simetrica: true, texto: 'As ligações C–H são quase apolares, e os 4 H estão distribuídos de forma simétrica. Molécula apolar.' },
  { f: 'CCl₄', forma: 'tetraédrica', ligPolar: true, simetrica: true, texto: 'Cada C–Cl é polar, mas os 4 Cl estão em posições simétricas e as setas se anulam. Molécula apolar.' },
]

// Polar = ligações polares E geometria que não anula os "puxões"
export default function PolarOuApolar() {
  const [k, setK] = useState(3)
  const [chute, setChute] = useState<boolean | null>(null)
  const m = mols[k]
  const polar = m.ligPolar && !m.simetrica
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Polar ou apolar?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Molécula">
        {mols.map((x, i) => (
          <button key={x.f} type="button" aria-pressed={k === i} onClick={() => { setK(i); setChute(null) }} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.f}</button>
        ))}
      </div>
      <p className="mt-3 text-[15px]"><strong>{m.f}</strong>, forma {m.forma}. Qual é o seu palpite?</p>
      <div className="mt-2 flex gap-2" role="group" aria-label="Palpite">
        {[true, false].map((v) => (
          <button key={String(v)} type="button" onClick={() => setChute(v)} className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold ${chute === v ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{v ? 'Polar' : 'Apolar'}</button>
        ))}
      </div>
      {chute !== null && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          <strong>{chute === polar ? 'Acertou!' : 'Não foi dessa vez.'} {m.f} é {polar ? 'polar' : 'apolar'}.</strong> {m.texto}
        </p>
      )}
    </div>
  )
}
