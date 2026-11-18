import { useState } from 'react'
import { cartao } from '../ui/estilos'

const ambientes = [
  { id: 'dev', nome: 'Desenvolvimento', quem: 'só você, no seu computador', risco: 'Pode quebrar à vontade: ninguém é afetado.' },
  { id: 'teste', nome: 'Teste (staging)', quem: 'a equipe, numa cópia parecida com a real', risco: 'Quebrar aqui incomoda só a equipe.' },
  { id: 'prod', nome: 'Produção', quem: 'todos os usuários de verdade', risco: 'Quebrar aqui afeta todo mundo, na hora.' },
]

// Onde a mudança está e quem ela alcança
export default function TresAmbientes() {
  const [onde, setOnde] = useState(0)
  const a = ambientes[onde]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Em qual ambiente está a mudança?</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {ambientes.map((x, i) => (
          <button
            key={x.id}
            type="button"
            aria-pressed={onde === i}
            onClick={() => setOnde(i)}
            className={`min-h-11 rounded-2xl border-2 px-2 py-2 text-[14px] font-semibold ${onde === i ? (i === 2 ? 'border-coral bg-fundo' : 'border-azul bg-fundo') : 'border-borda'}`}
          >
            {x.nome}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <p><b>Quem vê:</b> {a.quem}.</p>
        <p className="mt-1"><b>Se der erro:</b> {a.risco}</p>
      </div>
      <p className="mt-3 text-sm text-suave">Por isso a mudança sobe de degrau em degrau: do mais seguro para o mais exposto.</p>
    </div>
  )
}
