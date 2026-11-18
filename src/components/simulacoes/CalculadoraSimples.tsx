import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { cadeia, mostrar, resultado, type Tok } from './avaliador'

const exemplos: Tok[][] = [
  [1, '+', 2, '×', 3],
  [2, '+', 3, '×', 4],
  [10, '-', 6, '÷', 2],
  [8, '+', 4, '÷', 2],
]

// Uma calculadora simples resolve na ordem das teclas; a regra da matemática dá prioridade a × e ÷
export default function CalculadoraSimples() {
  const [k, setK] = useState(0)
  const e = exemplos[k]
  const simples = cadeia(e), certa = resultado(e)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Duas calculadoras, duas respostas</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a conta">
        {exemplos.map((x, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-3 font-mono text-[14px] font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>{mostrar(x)}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Na ordem das teclas</p><p className="text-3xl font-bold">{simples}</p></div>
        <div className="rounded-2xl border-2 border-verde p-3"><p className="text-[14px] font-semibold">Com a prioridade</p><p className="text-3xl font-bold">{certa}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {simples === certa ? 'Aqui as duas dão o mesmo resultado, mas só por coincidência.' : `${mostrar(e)}: quem resolve na ordem das teclas chega a ${simples}. Pela regra, × e ÷ vêm antes, e o resultado é ${certa}.`}
      </p>
    </div>
  )
}
