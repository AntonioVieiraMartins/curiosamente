import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { hashDeBrinquedo } from './hashDeBrinquedo'

const usuarios = [
  { nome: 'ana', sal: 'q7' },
  { nome: 'bruno', sal: 'x2' },
  { nome: 'carla', sal: 'm9' },
]

// Três pessoas com a mesma senha fraca: sem sal os hashes são iguais; com sal cada um é diferente.
export default function SalNaSenha() {
  const [comSal, setComSal] = useState(false)
  const hashes = usuarios.map((u) => hashDeBrinquedo(comSal ? u.sal + '123456' : '123456'))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os três usam a senha 123456</p>
      <button type="button" aria-pressed={comSal} onClick={() => setComSal(!comSal)}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${comSal ? 'border-verde' : 'border-coral'}`}>{comSal ? 'Com sal (um texto aleatório a mais para cada pessoa)' : 'Sem sal'}</button>
      <ul className="mt-3 space-y-1.5 font-mono text-[15px]">
        {usuarios.map((u, i) => (
          <li key={u.nome} className="rounded-xl border border-borda px-3 py-1.5">{u.nome}{comSal ? ` (sal ${u.sal})` : ''}: <strong>{hashes[i]}</strong></li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {comSal ? 'Cada hash é diferente, mesmo com senhas iguais. Quebrar uma não revela as outras, e uma tabela pronta de hashes comuns deixa de servir.' : 'Os três hashes são iguais. Quem descobrir uma senha descobre todas as pessoas que usaram a mesma, e uma lista pré-calculada de hashes de senhas comuns já resolve.'}
      </p>
    </div>
  )
}
