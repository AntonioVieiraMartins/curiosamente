import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Desloca a vírgula k casas (k > 0 para a direita) trabalhando só com texto, sem erros de ponto flutuante
function deslocar(valor: string, k: number): string {
  const [i, f = ''] = valor.split(',')
  let digitos = i + f
  let pos = i.length + k
  if (pos <= 0) { digitos = '0'.repeat(1 - pos) + digitos; pos = 1 }
  if (pos > digitos.length) digitos = digitos + '0'.repeat(pos - digitos.length)
  let inteira = digitos.slice(0, pos).replace(/^0+(?=\d)/, '')
  const frac = digitos.slice(pos).replace(/0+$/, '')
  if (inteira === '') inteira = '0'
  return frac ? `${inteira},${frac}` : inteira
}

const numeros = ['3,45', '0,072', '125', '8,9']

export default function MovimentoDaVirgula() {
  const [v, setV] = useState('3,45')
  const [k, setK] = useState(1)
  const [mult, setMult] = useState(true)
  const desloc = mult ? k : -k
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A vírgula anda</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Número">
        {numeros.map((x) => (
          <button key={x} type="button" aria-pressed={v === x} onClick={() => setV(x)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${v === x ? 'border-azul bg-fundo' : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Operação">
        <button type="button" aria-pressed={mult} onClick={() => setMult(true)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${mult ? 'border-azul bg-fundo' : 'border-borda'}`}>Multiplicar</button>
        <button type="button" aria-pressed={!mult} onClick={() => setMult(false)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${!mult ? 'border-azul bg-fundo' : 'border-borda'}`}>Dividir</button>
        {[1, 2, 3].map((x) => (
          <button key={x} type="button" aria-pressed={k === x} onClick={() => setK(x)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${k === x ? 'border-azul bg-fundo' : 'border-borda'}`}>por {10 ** x}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-center text-xl">
        {v} {mult ? '×' : '÷'} {10 ** k} = <b>{deslocar(v, desloc)}</b>
      </p>
      <p className="mt-2 text-sm text-suave">Multiplicar por 10, 100 ou 1.000 anda a vírgula para a <b>direita</b>; dividir anda para a <b>esquerda</b>, uma casa para cada zero.</p>
    </div>
  )
}
