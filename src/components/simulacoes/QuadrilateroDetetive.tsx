import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Detetive de quadriláteros: três pistas definem o nome
type Par = 0 | 1 | 2
function nome(pares: Par, iguais: boolean, retos: boolean) {
  if (pares === 2 && iguais && retos) return 'quadrado'
  if (pares === 2 && retos) return 'retângulo'
  if (pares === 2 && iguais) return 'losango'
  if (pares === 2) return 'paralelogramo'
  if (pares === 1 && !iguais && !retos) return 'trapézio'
  if (pares === 1) return 'um trapézio especial (não pode ter 4 lados iguais nem 4 ângulos retos)'
  return 'quadrilátero qualquer'
}

export default function QuadrilateroDetetive() {
  const [pares, setPares] = useState<Par>(2)
  const [iguais, setIguais] = useState(false)
  const [retos, setRetos] = useState(true)
  const valido = !(pares !== 2 && (iguais || retos))
  const n = valido ? nome(pares, iguais, retos) : 'combinação impossível'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual quadrilátero é?</p>
      <p className="mt-3 text-[15px] font-semibold">Pares de lados paralelos:</p>
      <div className="mt-1 flex flex-wrap gap-2" role="group" aria-label="Pares de lados paralelos">
        {([0, 1, 2] as Par[]).map((v) => (
          <button key={v} type="button" aria-pressed={pares === v} onClick={() => setPares(v)}
            className={`min-h-11 min-w-14 rounded-full border-2 px-4 font-bold ${pares === v ? 'border-azul bg-azul-claro' : 'border-borda'}`}>{v}</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-pressed={iguais} onClick={() => setIguais(!iguais)}
          className={`min-h-11 rounded-full border-2 px-4 font-semibold ${iguais ? 'border-azul bg-azul-claro' : 'border-borda'}`}>Os 4 lados são iguais</button>
        <button type="button" aria-pressed={retos} onClick={() => setRetos(!retos)}
          className={`min-h-11 rounded-full border-2 px-4 font-semibold ${retos ? 'border-azul bg-azul-claro' : 'border-borda'}`}>Os 4 ângulos são retos</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {pares} par{pares === 1 ? '' : 'es'} de lados paralelos, {iguais ? 'lados todos iguais' : 'lados que podem ser diferentes'} e {retos ? 'ângulos todos retos' : 'ângulos que podem ser diferentes'}: <b>{n}</b>.
        {!valido ? ' Se os lados opostos não são paralelos, não dá para ter 4 ângulos retos nem 4 lados iguais ao mesmo tempo.' : ''}
        {valido && n === 'quadrado' ? ' O quadrado é, ao mesmo tempo, retângulo e losango.' : ''}
      </p>
    </div>
  )
}
