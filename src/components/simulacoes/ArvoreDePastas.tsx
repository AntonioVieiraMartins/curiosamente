import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { discoInicial, filhosDe, nomeDe } from './pastasDeBrinquedo'

function No({ caminho, nivel, sel, aoEscolher }: { caminho: string; nivel: number; sel: string; aoEscolher: (c: string) => void }) {
  const pasta = discoInicial[caminho]?.tipo !== 'arquivo'
  const filhos = pasta ? filhosDe(discoInicial, caminho) : []
  return (
    <li>
      <button type="button" aria-pressed={sel === caminho} onClick={() => aoEscolher(caminho)}
        style={{ paddingLeft: `${0.5 + nivel * 1}rem` }}
        className={`min-h-11 w-full rounded-lg py-1 pr-2 text-left text-[15px] ${sel === caminho ? 'bg-amarelo font-semibold' : 'hover:bg-fundo'}`}>
        {pasta ? '▸ ' : '· '}{nomeDe(caminho)}
      </button>
      {filhos.length > 0 && <ul>{filhos.map((f) => <No key={f} caminho={f} nivel={nivel + 1} sel={sel} aoEscolher={aoEscolher} />)}</ul>}
    </li>
  )
}

// Toque num item: o caminho completo (absoluto) aparece embaixo.
export default function ArvoreDePastas() {
  const [sel, setSel] = useState('C:\\Users\\voce\\Fotos\\praia.jpg')

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Pastas dentro de pastas</p>
      <ul className="mt-3"><No caminho="C:" nivel={0} sel={sel} aoEscolher={setSel} /></ul>
      <p aria-live="polite" className="mt-3 break-all rounded-2xl bg-fundo p-4 font-mono text-[15px]">{sel}</p>
    </div>
  )
}
