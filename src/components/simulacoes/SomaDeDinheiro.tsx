import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const fmt = (centavos: number) => (centavos / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })

// Somar e subtrair decimais: vírgula embaixo de vírgula. Trabalhamos em centavos para não errar contas.
export default function SomaDeDinheiro() {
  const [a, setA] = useState(250)
  const [b, setB] = useState(175)
  const [soma, setSoma] = useState(true)
  const ida = useId(), idb = useId()
  const maior = Math.max(a, b), menor = Math.min(a, b)
  const topo = soma ? a : maior
  const baixo = soma ? b : menor
  const res = soma ? a + b : maior - menor
  const largura = Math.max(fmt(topo).length, fmt(baixo).length, fmt(res).length)
  const linha = (s: string) => s.padStart(largura, ' ')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Contas com dinheiro</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={ida} className="text-[15px]">Primeiro preço: <b>R$ {fmt(a)}</b>
          <input id={ida} type="range" min={5} max={1000} step={5} value={a} onChange={(e) => setA(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idb} className="text-[15px]">Segundo preço: <b>R$ {fmt(b)}</b>
          <input id={idb} type="range" min={5} max={1000} step={5} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-2 flex gap-2" role="group" aria-label="Operação">
        <button type="button" aria-pressed={soma} onClick={() => setSoma(true)} className={`min-h-11 rounded-full border-2 px-5 font-semibold ${soma ? 'border-azul bg-fundo' : 'border-borda'}`}>Somar</button>
        <button type="button" aria-pressed={!soma} onClick={() => setSoma(false)} className={`min-h-11 rounded-full border-2 px-5 font-semibold ${!soma ? 'border-azul bg-fundo' : 'border-borda'}`}>Subtrair</button>
      </div>
      <pre className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-4 text-right font-mono text-xl" aria-label={`${fmt(topo)} ${soma ? 'mais' : 'menos'} ${fmt(baixo)} é ${fmt(res)}`}>
{`  ${linha(fmt(topo))}\n${soma ? '+' : '-'} ${linha(fmt(baixo))}\n  ${'—'.repeat(largura)}\n  ${linha(fmt(res))}`}
      </pre>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Repare: a vírgula fica <b>embaixo da vírgula</b>, e os centavos se somam com centavos, os reais com reais. {soma ? 'Se passar de 99 centavos, o “vai um” vira 1 real.' : 'Subtraímos o menor do maior para não dar negativo.'}
      </p>
    </div>
  )
}
