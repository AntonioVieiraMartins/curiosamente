import { useState } from 'react'
import { cartao } from '../ui/estilos'

// As 36 combinações de dois dados, com a soma de cada uma
export default function TabelaDeDoisDados() {
  const [alvo, setAlvo] = useState(7)
  const casos = 6 - Math.abs(alvo - 7)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Todas as 36 combinações</p>
      <div className="mt-3 overflow-x-auto">
        <table className="mx-auto border-separate border-spacing-1 text-center text-sm" aria-label="Soma de dois dados">
          <thead>
            <tr><th className="p-1 text-xs text-suave">dado 1 ↓ / dado 2 →</th>{[1, 2, 3, 4, 5, 6].map((b) => <th key={b} className="p-1 font-semibold">{b}</th>)}</tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((a) => (
              <tr key={a}>
                <th className="p-1 font-semibold">{a}</th>
                {[1, 2, 3, 4, 5, 6].map((b) => (
                  <td key={b} className={`h-9 w-9 rounded-lg font-semibold ${a + b === alvo ? 'bg-coral text-white' : 'bg-fundo'}`}>{a + b}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a soma">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => (
          <button key={s} type="button" aria-pressed={s === alvo} onClick={() => setAlvo(s)} className={`min-h-11 min-w-11 rounded-full border-2 px-3 text-sm font-semibold ${s === alvo ? 'border-coral bg-coral text-white' : 'border-borda'}`}>{s}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A soma {alvo} aparece em <strong>{casos} das 36</strong> combinações. Chance = {casos}/36 ≈ {((casos / 36) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%.
      </p>
    </div>
  )
}
