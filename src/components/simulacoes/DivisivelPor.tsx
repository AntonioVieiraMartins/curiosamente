import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Critérios de divisibilidade por 2, 3, 5, 9 e 10, conferidos com a conta de verdade
export default function DivisivelPor() {
  const [n, setN] = useState('2340')
  const id = useId()
  const v = Number(n || 0)
  const ultimo = Number(n.slice(-1) || 0)
  const soma = n.split('').reduce((s, x) => s + Number(x), 0)
  const regras = [
    { d: 2, regra: `o último algarismo (${ultimo}) é par`, ok: ultimo % 2 === 0 },
    { d: 3, regra: `a soma dos algarismos (${soma}) é múltiplo de 3`, ok: soma % 3 === 0 },
    { d: 5, regra: `o último algarismo (${ultimo}) é 0 ou 5`, ok: ultimo === 0 || ultimo === 5 },
    { d: 9, regra: `a soma dos algarismos (${soma}) é múltiplo de 9`, ok: soma % 9 === 0 },
    { d: 10, regra: `o último algarismo (${ultimo}) é 0`, ok: ultimo === 0 },
  ]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Divide sem sobrar?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Digite um número (até 6 algarismos)</label>
      <input id={id} inputMode="numeric" value={n} onChange={(e) => setN(e.target.value.replace(/\D/g, '').slice(0, 6))} className="mt-1 min-h-11 w-full rounded-xl border-2 border-borda bg-fundo px-3 text-lg" />
      <ul aria-live="polite" className="mt-3 space-y-2">
        {regras.map((r) => (
          <li key={r.d} className={`rounded-2xl border-2 p-3 text-[15px] ${r.ok ? 'border-verde' : 'border-borda'}`}>
            <b>{v.toLocaleString('pt-BR')} ÷ {r.d}: {r.ok ? 'sim, sem resto' : 'não, sobra resto'}.</b>{' '}
            <span className="text-suave">Regra: {r.regra}{r.ok ? ', então sim' : ', então não'}.</span>          </li>
        ))}
      </ul>
    </div>
  )
}
