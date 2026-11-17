import { useState } from 'react'
import Contador from './Contador'
import { cartao } from '../ui/estilos'
import { escrever } from '../../lib/fracoes'

// Dividir por uma fração = perguntar "quantas vezes este pedaço cabe ali?"
// Cada litro é cortado em "baixo" partes; cada copo usa "cima" dessas partes.
export default function QuantosCabem() {
  const [litros, setLitros] = useState(2)
  const [cima, setCima] = useState(1)
  const [baixo, setBaixo] = useState(4)

  const partes = litros * baixo
  const cheios = Math.floor(partes / cima)
  const sobra = partes - cheios * cima
  const resultado = escrever(partes, cima, true)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos copos cabem?</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <Contador rotulo="Litros na garrafa" valor={litros} min={1} max={4} mudar={setLitros} />
        <Contador rotulo="Copo: em cima" valor={cima} min={1} max={baixo} mudar={setCima} />
        <Contador rotulo="Copo: embaixo" valor={baixo} min={2} max={6} mudar={(v) => { setBaixo(v); setCima((c) => Math.min(c, v)) }} />
      </div>
      <p className="mt-3 text-center font-semibold">
        {litros} {litros === 1 ? 'litro' : 'litros'} ÷ copos de {cima}/{baixo} de litro
      </p>

      <div className="mt-4 flex gap-2" aria-hidden="true">
        {Array.from({ length: litros }, (_, l) => (
          <div key={l} className="flex h-10 flex-1 overflow-hidden rounded-lg border border-borda">
            {Array.from({ length: baixo }, (_, i) => {
              const k = l * baixo + i
              const copo = Math.floor(k / cima)
              const completo = copo < cheios
              const cor = !completo ? 'var(--color-amarelo)' : copo % 2 === 0 ? 'var(--color-azul)' : 'var(--color-verde)'
              return <span key={i} className="flex-1 border-r border-superficie last:border-r-0" style={{ background: cor }} />
            })}
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-suave">Cada cor é um copo. Em amarelo, o que sobra sem encher um copo inteiro.</p>

      <p aria-live="polite" className="mt-4 rounded-2xl bg-fundo p-4">
        Cabem <strong>{cheios}</strong> {cheios === 1 ? 'copo cheio' : 'copos cheios'}
        {sobra > 0 && <> e sobra {sobra}/{cima} de copo</>}. Em conta: {litros} ÷ {cima}/{baixo} = {litros} × {baixo}/{cima} ={' '}
        <strong className="text-verde">{resultado}</strong>.
      </p>
    </div>
  )
}
