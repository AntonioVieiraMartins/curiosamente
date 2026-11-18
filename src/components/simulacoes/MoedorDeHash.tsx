import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { hashDeBrinquedo } from './hashDeBrinquedo'

// Mesmo texto, mesmo resultado. Uma letra a mais ou a menos muda tudo (efeito avalanche).
export default function MoedorDeHash() {
  const [a, setA] = useState('gato123')
  const [b, setB] = useState('gato124')
  const ia = useId()
  const ib = useId()
  const ha = hashDeBrinquedo(a)
  const hb = hashDeBrinquedo(b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Moedor de hash (de brinquedo)</p>
      <label htmlFor={ia} className="mt-2 block font-semibold">Texto 1</label>
      <input id={ia} value={a} onChange={(e) => setA(e.target.value)} className="min-h-11 w-full rounded-xl border-2 border-borda px-3 text-base" />
      <p className="mt-1 font-mono text-[15px]">hash: <strong className="text-azul">{ha}</strong></p>
      <label htmlFor={ib} className="mt-2 block font-semibold">Texto 2</label>
      <input id={ib} value={b} onChange={(e) => setB(e.target.value)} className="min-h-11 w-full rounded-xl border-2 border-borda px-3 text-base" />
      <p className="mt-1 font-mono text-[15px]">hash: <strong className="text-verde">{hb}</strong></p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {a === b ? 'Textos iguais: hashes iguais. O hash é determinístico.' : 'Textos quase iguais, hashes completamente diferentes. Dá para ver o texto pelo hash? Não: o caminho de volta é difícil.'}
        {' '}O resultado sempre tem 8 dígitos, não importa o tamanho do texto.
      </p>
    </div>
  )
}
