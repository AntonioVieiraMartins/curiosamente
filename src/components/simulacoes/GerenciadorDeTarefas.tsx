import { useState } from 'react'
import { cartao } from '../ui/estilos'

const inicial = [
  { nome: 'Sistema', cpu: 3, protegido: true },
  { nome: 'Navegador', cpu: 12, protegido: false },
  { nome: 'Música', cpu: 2, protegido: false },
  { nome: 'Editor travado', cpu: 85, protegido: false },
]

// Parecido com o Gerenciador de Tarefas: mostra quem consome a CPU e deixa encerrar quem travou.
export default function GerenciadorDeTarefas() {
  const [lista, setLista] = useState(inicial)
  const total = lista.reduce((s, p) => s + p.cpu, 0)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Gerenciador de tarefas</p>
      <ul className="mt-3 space-y-2">
        {lista.map((p) => (
          <li key={p.nome} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-fundo px-3 py-2">
            <span className="text-[15px] font-semibold">{p.nome}</span>
            <span className="flex items-center gap-2">
              <span className={`text-[15px] ${p.cpu > 50 ? 'font-semibold text-coral' : 'text-suave'}`}>CPU {p.cpu}%</span>
              {p.protegido
                ? <span className="px-2 text-sm text-suave">protegido</span>
                : <button type="button" className="min-h-11 rounded-full border border-borda px-4 text-sm font-semibold" onClick={() => setLista(lista.filter((x) => x.nome !== p.nome))}>Encerrar</button>}
            </span>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Uso total da CPU: <strong className={total > 90 ? 'text-coral' : 'text-verde'}>{total}%</strong>.{' '}
        {total > 90 ? 'O computador está engasgado. Encerre quem está pesando.' : 'Tudo tranquilo.'}
      </p>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => setLista(inicial)}>Recomeçar</button>
    </div>
  )
}
