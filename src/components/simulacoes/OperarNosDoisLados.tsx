import { useState } from 'react'
import { cartao } from '../ui/estilos'

const operacoes = [
  { nome: 'somar 2', f: (v: number) => v + 2 },
  { nome: 'subtrair 5', f: (v: number) => v - 5 },
  { nome: 'multiplicar por 2', f: (v: number) => v * 2 },
  { nome: 'dividir por 2', f: (v: number) => v / 2 },
  { nome: 'multiplicar por −1', f: (v: number) => -v },
  { nome: 'dividir por −2', f: (v: number) => v / -2 },
]

const sinal = (a: number, b: number) => (a < b ? '<' : a > b ? '>' : '=')

// Começa com 3 < 7 (verdadeira). Fazer a mesma conta nos dois lados mantém o sinal, exceto quando o número é negativo.
export default function OperarNosDoisLados() {
  const [i, setI] = useState(0)
  const op = operacoes[i]
  const a = op.f(3)
  const b = op.f(7)
  const sinalNovo = sinal(a, b)
  const negativa = op.nome.includes('−')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Faça a mesma conta nos dois lados de 3 &lt; 7</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {operacoes.map((o, k) => (
          <button key={o.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{o.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center" aria-hidden="true">
        <p className="rounded-2xl bg-fundo p-3 text-xl font-semibold">3 → {a.toLocaleString('pt-BR')}</p>
        <span className={`text-3xl font-semibold ${negativa ? 'text-coral' : 'text-verde'}`}>{sinalNovo}</span>
        <p className="rounded-2xl bg-fundo p-3 text-xl font-semibold">7 → {b.toLocaleString('pt-BR')}</p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {negativa
          ? `Número negativo: a ordem se inverteu. Antes era 3 < 7, agora ${a.toLocaleString('pt-BR')} ${sinalNovo} ${b.toLocaleString('pt-BR')}. Por isso o sinal vira.`
          : `Número positivo: a ordem continua. ${a.toLocaleString('pt-BR')} ${sinalNovo} ${b.toLocaleString('pt-BR')}, o mesmo sinal de antes.`}
      </p>
    </div>
  )
}
