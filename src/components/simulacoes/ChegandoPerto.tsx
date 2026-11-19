import { useState } from 'react'
import { cartao } from '../ui/estilos'

const passos = [1, 0.5, 0.1, 0.01, 0.001, 0.0001]
const f = (x: number) => (x * x - 1) / (x - 1)
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 6 })

// Aproximação por dois lados de um ponto onde a função nem existe: f(x) = (x² − 1)/(x − 1) perto de x = 1
export default function ChegandoPerto() {
  const [n, setN] = useState(1)
  const linhas = passos.slice(0, n)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">f(x) = (x² − 1) ÷ (x − 1), chegando perto de x = 1</p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-center text-[15px]">
          <thead>
            <tr className="text-suave"><th className="p-1">pela esquerda: x</th><th className="p-1">f(x)</th><th className="p-1">pela direita: x</th><th className="p-1">f(x)</th></tr>
          </thead>
          <tbody>
            {linhas.map((h) => (
              <tr key={h} className="border-t border-borda">
                <td className="p-1">{fmt(1 - h)}</td><td className="p-1 font-semibold text-azul-texto">{fmt(f(1 - h))}</td>
                <td className="p-1">{fmt(1 + h)}</td><td className="p-1 font-semibold text-azul-texto">{fmt(f(1 + h))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n < passos.length
          ? 'Chegue mais perto de 1 pelos dois lados e olhe o que acontece com f(x).'
          : 'Pelos dois lados, f(x) se aproxima de 2. Mas em x = 1 a conta dá 0 ÷ 0, que não existe: o limite é 2 mesmo sem f(1).'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={n >= passos.length} onClick={() => setN(n + 1)} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Chegar mais perto</button>
        <button type="button" onClick={() => setN(1)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
