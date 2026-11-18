import { useState } from 'react'
import { cartao } from '../ui/estilos'

const commits = [
  { msg: 'Primeira versão da receita', itens: ['Farinha', 'Ovos'] },
  { msg: 'Adiciona açúcar', itens: ['Farinha', 'Ovos', 'Açúcar'] },
  { msg: 'Tira o açúcar por engano', itens: ['Farinha', 'Ovos'] },
  { msg: 'Adiciona leite', itens: ['Farinha', 'Ovos', 'Leite'] },
]

// Cada commit é uma foto do projeto inteiro. Dá para olhar qualquer foto e recuperar o que foi apagado sem querer.
export default function HistoricoDeCommits() {
  const [i, setI] = useState(3)
  const c = commits[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Histórico do arquivo receita.txt (toque num commit)</p>
      <ol className="mt-2 space-y-1.5">
        {commits.map((x, k) => (
          <li key={x.msg}>
            <button type="button" aria-pressed={k === i} onClick={() => setI(k)}
              className={`min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${k === i ? 'border-azul bg-fundo font-semibold' : 'border-borda'}`}>
              Commit {k + 1}: {x.msg}{k === commits.length - 1 ? ' (o mais recente)' : ''}
            </button>
          </li>
        ))}
      </ol>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <p className="font-semibold">Como o arquivo estava neste commit:</p>
        <ul className="mt-1 list-disc pl-6">{c.itens.map((t) => <li key={t}>{t}</li>)}</ul>
        {i === 1 && <p className="mt-2 text-suave">Aqui o açúcar ainda existia. Dá para recuperá-lo, mesmo depois de ter sido apagado no commit 3.</p>}
      </div>
    </div>
  )
}
