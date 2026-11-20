import { useState } from 'react'
import { cartao } from '../ui/estilos'

const v = (x: boolean) => (x ? 'verdadeira' : 'falsa')

// Leis de De Morgan com café e chá: negar um "e" vira "ou", e negar um "ou" vira "e"
export default function DeMorganDoCafe() {
  const [cafe, setCafe] = useState(true)
  const [cha, setCha] = useState(false)
  const pares = [
    { esq: 'Não é verdade que gosto de café E de chá.', dir: 'Não gosto de café OU não gosto de chá.', a: !(cafe && cha), b: !cafe || !cha },
    { esq: 'Não é verdade que gosto de café OU de chá.', dir: 'Não gosto de café E não gosto de chá.', a: !(cafe || cha), b: !cafe && !cha },
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Café e chá: as leis de De Morgan</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button type="button" aria-pressed={cafe} onClick={() => setCafe(!cafe)} className={`min-h-11 rounded-2xl border-2 px-4 font-semibold ${cafe ? 'border-verde bg-verde/10' : 'border-borda'}`}>Gosto de café: {cafe ? 'sim' : 'não'}</button>
        <button type="button" aria-pressed={cha} onClick={() => setCha(!cha)} className={`min-h-11 rounded-2xl border-2 px-4 font-semibold ${cha ? 'border-verde bg-verde/10' : 'border-borda'}`}>Gosto de chá: {cha ? 'sim' : 'não'}</button>
      </div>
      <ul className="mt-4 flex flex-col gap-3" aria-live="polite">
        {pares.map((p) => (
          <li key={p.esq} className="rounded-2xl bg-fundo p-3 text-[15px]">
            <p>“{p.esq}” é <strong>{v(p.a)}</strong>.</p>
            <p>“{p.dir}” é <strong>{v(p.b)}</strong>.</p>
            <p className="mt-1 font-semibold text-verde">Mesmo valor: as duas frases dizem a mesma coisa.</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-suave">Mude as chaves à vontade: nas quatro combinações, cada par continua com o mesmo valor.</p>
    </div>
  )
}
