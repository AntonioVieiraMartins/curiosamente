import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Por que não se divide por zero: procurar o número que, vezes o divisor, dá 12
export default function DivisaoPorZero() {
  const [k, setK] = useState(4)
  const q = k > 0 ? 12 / k : null
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">12 dividido por…</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o divisor">
        {[4, 3, 2, 1, 0].map((x) => (
          <button key={x} type="button" aria-pressed={k === x} onClick={() => setK(x)} className={`min-h-11 min-w-11 rounded-full border-2 font-semibold ${k === x ? (x === 0 ? 'border-coral bg-fundo' : 'border-azul bg-fundo') : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {q !== null
          ? `12 ÷ ${k} = ${q}, porque ${q} × ${k} = 12.`
          : '12 ÷ 0 = ?  Teríamos que achar um número que, multiplicado por 0, desse 12. Mas qualquer número vezes 0 dá 0. Nenhum número serve, então a divisão por zero é indefinida (não existe).'}
      </p>
      <p className="mt-2 text-sm text-suave">Repare: quanto menor o divisor, maior o resultado. Mas em zero a conta deixa de ter resposta.</p>
    </div>
  )
}
