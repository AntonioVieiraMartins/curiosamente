import { useState } from 'react'
import { cartao } from '../ui/estilos'

const exemplos = ['blog.loja.exemplo.com', 'www.universidade.edu.br', 'curiosamente-seven.vercel.app']
const cores = ['bg-azul text-white', 'bg-verde text-white', 'bg-amarelo', 'bg-coral text-white', 'bg-fundo']

// Um domínio se lê da direita para a esquerda: do mais geral (TLD) ao mais específico.
export default function DominioDesmontado() {
  const [i, setI] = useState(0)
  const [sel, setSel] = useState(0)
  const partes = exemplos[i].split('.')
  const invertidas = [...partes].reverse() // índice 0 = TLD
  const nivel = (k: number) => (k === 0 ? 'domínio de topo (TLD)' : k === 1 ? 'domínio de segundo nível' : `subdomínio (nível ${k + 1})`)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lendo um endereço da direita para a esquerda</p>
      <div className="mt-2 flex flex-col gap-2">
        {exemplos.map((x, k) => (
          <button key={x} type="button" aria-pressed={k === i} onClick={() => { setI(k); setSel(0) }}
            className={`min-h-11 break-all rounded-xl border-2 px-3 text-left font-mono text-sm ${k === i ? 'border-azul' : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center font-mono text-base sm:text-lg">
        {partes.map((t, k) => {
          const pos = partes.length - 1 - k
          return (
            <span key={k} className="inline-flex items-center">
              <button type="button" aria-pressed={sel === pos} onClick={() => setSel(pos)}
                className={`min-h-11 rounded-lg px-2 ${cores[Math.min(pos, 4)]} ${sel === pos ? 'ring-2 ring-texto' : 'opacity-80'}`}>{t}</button>
              {k < partes.length - 1 && <span className="px-0.5">.</span>}
            </span>
          )
        })}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{invertidas[sel]}</strong> é {sel === 0 ? 'o' : sel === 1 ? 'o' : 'um'} <strong>{nivel(sel)}</strong>.
        <span className="mt-1 block text-suave">A leitura vai do mais geral ({invertidas[0]}) ao mais específico ({invertidas[invertidas.length - 1]}).</span>
      </p>
    </div>
  )
}
