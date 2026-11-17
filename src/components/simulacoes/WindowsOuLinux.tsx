import { useState } from 'react'
import { cartao } from '../ui/estilos'

const sistemas = [
  { nome: 'Windows', caminho: 'C:\\Users\\ana\\Documentos\\notas.txt', raiz: 'Cada disco tem sua raiz, com uma letra: C:, D:...', sep: 'barra invertida \\', casa: 'C:\\Users\\ana' },
  { nome: 'Linux e macOS', caminho: '/home/ana/Documentos/notas.txt', raiz: 'Existe uma raiz só, a barra /, e tudo fica dentro dela.', sep: 'barra normal /', casa: '/home/ana (no macOS: /Users/ana)' },
]

// O mesmo arquivo, dois jeitos de escrever o endereço.
export default function WindowsOuLinux() {
  const [i, setI] = useState(0)
  const s = sistemas[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O mesmo arquivo, dois endereços</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {sistemas.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 break-all rounded-2xl bg-fundo p-4 font-mono text-[15px]">{s.caminho}</p>
      <ul className="mt-2 space-y-1 text-[15px]">
        <li><strong>Separador:</strong> {s.sep}</li>
        <li><strong>Raiz:</strong> {s.raiz}</li>
        <li><strong>Pasta pessoal:</strong> {s.casa}</li>
      </ul>
    </div>
  )
}
